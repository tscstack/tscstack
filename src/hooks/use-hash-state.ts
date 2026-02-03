import { useCallback, useMemo } from "react";

import { useLocation, useNavigate } from "@tanstack/react-router";

import { match } from "path-to-regexp";

type Matcher = (path: string) => boolean;

const createMatchers = (paths: string[]): Matcher[] =>
  paths.map((p) => {
    const fn = match(p, { end: true });
    return (path: string) => Boolean(fn(path));
  });

type Options = {
  hash: string;
  routes?: string[];
  exclude?: string[];
};

export function useHashState({ hash, routes = [], exclude = [] }: Options) {
  const navigate = useNavigate();

  const { hash: currentHash, pathname } = useLocation();

  const allowedMatchers = useMemo(() => createMatchers(routes), [routes]);
  const blockedMatchers = useMemo(() => createMatchers(exclude), [exclude]);

  const isPathAllowed = useCallback(() => {
    if (blockedMatchers.some((m) => m(pathname))) return false;
    if (allowedMatchers.length > 0 && !allowedMatchers.some((m) => m(pathname)))
      return false;
    return true;
  }, [pathname, allowedMatchers, blockedMatchers]);

  const isOpen = currentHash === hash && isPathAllowed();

  const toggle = useCallback(
    (value: boolean) => {
      if (value === isOpen || !isPathAllowed()) return;

      navigate({
        hash: value ? hash : undefined,
        replace: true,
        from: undefined
      });
    },
    [hash, navigate, isOpen, isPathAllowed]
  );

  return [isOpen, toggle] as const;
}

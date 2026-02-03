import { useEffect, useState } from "react";

type Size = `${number}px` | `${number}rem` | `${number}em`;

type MediaQueryOptions = {
  width: Size;
  mode: "under" | "above";
};

export const useMediaQuery = ({ width, mode }: MediaQueryOptions): boolean => {
  const query =
    mode === "under" ? `(max-width: ${width})` : `(min-width: ${width})`;

  const getMatch = () => window.matchMedia(query).matches;

  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return getMatch();
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

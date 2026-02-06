export type SeoOptions = {
  title: string;
  url: string;
  siteName?: string;
  description?: string;
  keywords?: string;
  ogImageUrl?: string;
  twitterHandle?: string;
  type?: "website" | "article";
  locale?: string;
};

export const seoMeta = (opts: SeoOptions) => {
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  const DEFAULT_TITLE =
    "TSC Stack - The Headless TanStack + Convex + Clerk Boilerplate for Shipping Fast";

  const {
    title,
    url,
    siteName = "TSC Stack",
    description = "TSC Stack is a headless TanStack + Convex + Clerk boilerplate to ship SaaS apps fast. Built with TanStack Start, Clerk auth, strict TypeScript, shadcn/ui, and modern workflows—no fluff, just shipping.",
    keywords = "TanStack + Convex + Clerk boilerplate, TanStack + Convex + Clerk starter kit, TanStack Start + Convex + Clerk, TanStack + Convex + Clerk SaaS boilerplate, TanStack + Convex + Clerk starter, TanStack + Convex + Clerk auth, TanStack + Convex + Clerk TypeScript starter, TanStack + Convex + Clerk realtime SaaS, TanStack + Convex + Clerk fullstack boilerplate, ship TanStack + Convex + Clerk apps, TSC Stack",
    ogImageUrl = `${VITE_BASE_URL}/og-image.png`,
    twitterHandle = "@heysithu",
    type = "website",
    locale = "en_US"
  } = opts;

  const normalizedTitle =
    title === "default" ? DEFAULT_TITLE : `${title} | ${DEFAULT_TITLE}`;

  const normalizedUrl = url.startsWith("http")
    ? url
    : `${VITE_BASE_URL.replace(/\/$/, "")}${
        url.startsWith("/") ? url : `/${url}`
      }`;

  return [
    // Primary
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: normalizedTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow" },
    { rel: "canonical", href: normalizedUrl },

    // Open Graph
    { property: "og:type", content: type },
    { property: "og:title", content: normalizedTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: normalizedUrl },
    { property: "og:image", content: ogImageUrl },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: locale },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: normalizedTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImageUrl },
    { name: "twitter:site", content: twitterHandle },
    { name: "twitter:creator", content: twitterHandle },
    { name: "twitter:url", content: normalizedUrl }
  ];
};

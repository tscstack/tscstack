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

  const DEFAULT_TITLE = "";

  const {
    title,
    url,
    siteName = "",
    description = "",
    keywords = "",
    ogImageUrl = `${VITE_BASE_URL}/og-image.png`,
    twitterHandle = "@",
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

export const xSocialLink = "https://x.com/itsithu";
export const discordLink = "https://discord.gg/j947Ac4kps";

export type LegalSection = {
  title: string;
  content: (
    | string
    | { type: "pre"; text: string }
    | { type: "link"; href: string; text: string }
    | { type: "list"; items: string[] }
  )[];
};

type LegalConfig = {
  effectiveDate: string;
  lastUpdatedDate: string;
  productName: string;
  businessName: string;
  supportEmail: string;
  minAge: string;
  pricingOptions: string[];
};

export const legalConfig: LegalConfig = {
  effectiveDate: "Mon Dec 1, 2025",
  lastUpdatedDate: "Mon Dec 1, 2025",
  productName: "IndieShip",
  businessName: "IndieShip",
  supportEmail: "sithuknt@gmail.com",
  minAge: "13",
  pricingOptions: ["One-Time Payment"]
};

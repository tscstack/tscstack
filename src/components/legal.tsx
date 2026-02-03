import type React from "react";

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

interface Props {
  title: string;
  sections: LegalSection[];
}

export const Legal: React.FC<Props> = ({ title, sections }) => {
  const { effectiveDate, productName, lastUpdatedDate } = legalConfig;

  return (
    <div className="p-3">
      <h1 className="my-5 text-center text-xl sm:text-3xl">{title}</h1>

      <div className="my-5 flex flex-col space-y-1">
        <p>Effective Date: {effectiveDate}</p>
        <p>Last updated: {lastUpdatedDate}</p>
      </div>

      <hr className="my-10" />

      <div className="text-primary-content/70 flex flex-col space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-primary-content text-lg my-3 sm:text-xl">
              {section.title}
            </h2>
            {section.content.map((item) => {
              if (typeof item === "string") {
                return (
                  <p key={item} className="my-2">
                    {item}
                  </p>
                );
              } else if (item.type === "link") {
                return (
                  <a key={item.text} href={item.href} className="underline">
                    {item.text}
                  </a>
                );
              } else if (item.type === "list") {
                return (
                  <ul key={item.type} className="list-disc space-y-1 pl-6">
                    {item.items.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                );
              } else if (item.type === "pre") {
                return (
                  <pre
                    key={item.text}
                    className="bg-base overflow-x-auto p-3 text-sm"
                  >
                    {item.text}
                  </pre>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>

      <p className="mt-10 mb-15">
        By using the hosted version of {productName}, you consent to the
        practices described in this {title}.
      </p>
    </div>
  );
};

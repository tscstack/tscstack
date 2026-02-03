import { createFileRoute } from "@tanstack/react-router";

import { Legal } from "~/components/legal";
import { type LegalSection, legalConfig } from "~/utils/config";
import { seoMeta } from "~/utils/seo";

const { minAge, productName, supportEmail } = legalConfig;

const sections: LegalSection[] = [
  {
    title: "1. Introduction and Consent",
    content: [
      `At ${productName}, privacy is a main priority. This Privacy Policy explains the information we collect and how we use it.`,
      `If you have questions, please contact us at ${supportEmail}.`,
      `This policy applies only to our online activities. By using our website, you hereby consent to this Privacy Policy and agree to its terms.`
    ]
  },
  {
    title: "2. Information We Collect (Clerk & User Data)",
    content: [
      "We collect personal information to provide and improve the Service. The specific data requested will be made clear at the point of collection.",
      {
        type: "list",
        items: [
          "**Direct Contact:** If you contact us (e.g., via email), we receive your name, email address, message contents, and any other information you choose to provide.",
          "**Account Registration (via Clerk):** When you register, we collect contact information, which may include your name, company name, address, email address, and telephone number."
        ]
      }
    ]
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We use the collected information for the following purposes:",
      {
        type: "list",
        items: [
          "Provide, operate, and maintain the Service.",
          "Improve, personalize, and expand the user experience (UX) based on usage analytics.",
          "Develop new products, services, features, and functionality.",
          "Communicate with you (directly or through partners) for customer service, updates, and marketing/promotional purposes.",
          "Send you important emails (transactional and marketing, with opt-out available).",
          "Find and prevent fraud."
        ]
      }
    ]
  },
  {
    title: "4. Log Files and Analytics (Bun-Optimized)",
    content: [
      "We use standard log files and analytics (optimized for performance using our Bun toolchain). This information logs visitors when they visit our website and helps us analyze trends and maintain the site.",
      "Information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and clicks. This information is **not linked to personally identifiable information**.",
      "We may use third-party Service Providers to monitor and analyze the use of our Service (as referenced in the Terms of Service)."
    ]
  },
  {
    title: "5. Third-Party Privacy and Links",
    content: [
      "Our Service may contain links to third-party websites or services. Our Privacy Policy does not apply to these entities (e.g., third-party payment processors like Polar or analytics providers).",
      "We advise you to consult the respective Privacy Policies of these third parties for more detailed information, including instructions on how to opt-out of certain options (e.g., disabling cookies).",
      "We have no access to or control over cookies used by third-party advertisers."
    ]
  },
  {
    title: "6. GDPR Data Protection Rights (European Users)",
    content: [
      "Every user in the European Economic Area (EEA) is entitled to the following data protection rights:",
      {
        type: "list",
        items: [
          "**The Right to Access:** Request copies of your personal data (a small administrative fee may apply).",
          "**The Right to Rectification:** Request correction of inaccurate information or completion of incomplete data.",
          "**The Right to Erasure:** Request the erasure of your personal data, under certain conditions.",
          "**The Right to Restrict Processing:** Request the restriction of processing your personal data, under certain conditions.",
          "**The Right to Object to Processing:** Object to our processing of your personal data, under certain conditions.",
          "**The Right to Data Portability:** Request the transfer of your collected data to another organization or directly to you, under certain conditions."
        ]
      },
      `We have one month to respond to your request. To exercise any of these rights, please contact us at ${supportEmail}.`
    ]
  },
  {
    title: "7. Children's Information",
    content: [
      `Our Service is intended for individuals at least **${minAge} years old** (as per the Terms of Service). We do not knowingly collect any Personal Identifiable Information from children under the age of 13.`,
      "If you believe your child has provided this kind of information, please contact us immediately, and we will make every effort to promptly remove such information from our records."
    ]
  }
];

export const Route = createFileRoute("/_legal/privacy")({
  head: () => ({
    meta: seoMeta({
      title: "Privacy Policy - Quick Data Converter",
      url: "/privacy"
    })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <Legal title="Privacy Policy" sections={sections} />;
}

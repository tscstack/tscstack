import { createFileRoute } from "@tanstack/react-router";

import { Legal, type LegalSection, legalConfig } from "~/components/legal";
import { seoMeta } from "~/utils/seo";

const { minAge, productName, supportEmail, businessName } = legalConfig;

const sections: LegalSection[] = [
  {
    title: "1. Information We Collect",
    content: [
      `At ${productName}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.`,
      "",
      "**Data Collection Practices**",
      {
        type: "list",
        items: [
          "**Account Information:** When you create an account through Clerk, we collect your email address, name, and other profile information you provide.",
          "**Usage Data:** We collect information about how you interact with our service, including features used, time spent, and interaction patterns.",
          "**Technical Data:** We automatically collect IP addresses, browser type, device information, and access logs for security and analytics purposes.",
          "**Communication Data:** When you contact us, we collect your email address and the content of your communications."
        ]
      }
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your information to provide, maintain, and improve our services:",
      "",
      {
        type: "list",
        items: [
          `**Service Delivery:** To provide and maintain the core functionality of ${productName}.`,
          "**Account Management:** To manage your account, authenticate your access, and provide customer support.",
          "**Analytics and Improvement:** To analyze usage patterns, identify trends, and improve our service offerings.",
          "**Security:** To monitor for suspicious activity, prevent fraud, and ensure platform security.",
          "**Communication:** To send important updates, security alerts, and respond to your inquiries."
        ]
      }
    ]
  },
  {
    title: "3. Data Storage and Security",
    content: [
      `Your data security is our priority. We implement industry-standard measures to protect your information:`,
      "",
      {
        type: "list",
        items: [
          "**Encryption:** All data is encrypted in transit using HTTPS and at rest using industry-standard encryption protocols.",
          "**Access Control:** Strict access controls and authentication mechanisms limit data access to authorized personnel only.",
          "**Regular Audits:** We conduct regular security audits and vulnerability assessments.",
          "**Data Retention:** User data is retained only as long as necessary to provide our services and comply with legal obligations."
        ]
      },
      `While we implement robust security measures, no internet transmission method is 100% secure. Please contact us at ${supportEmail} if you have security concerns.`
    ]
  },
  {
    title: "4. Third-Party Services",
    content: [
      `${productName} integrates with trusted third-party services to enhance functionality:`,
      "",
      {
        type: "list",
        items: [
          "**Clerk:** Provides authentication and user management services. Their privacy policy governs how they handle authentication data.",
          "**Convex:** Powers our database and real-time features. User data stored in Convex is subject to their privacy and security practices.",
          "**Analytics Providers:** We may use analytics services to understand usage patterns and improve our service."
        ]
      },
      "We carefully select partners who share our commitment to privacy and security. Please review their respective privacy policies for detailed information about their data practices."
    ]
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "You have the following rights regarding your personal information:",
      "",
      {
        type: "list",
        items: [
          "**Access:** Request access to your personal information that we hold.",
          "**Correction:** Request correction of inaccurate or incomplete information.",
          "**Deletion:** Request deletion of your personal information, subject to legal obligations.",
          "**Portability:** Request transfer of your data to another service provider.",
          "**Objection:** Object to processing of your personal information in certain circumstances."
        ]
      },
      `To exercise these rights, please contact us at ${supportEmail}. We will respond to your request within 30 days.`
    ]
  },
  {
    title: "6. International Data Transfers",
    content: [
      `${productName} may transfer your personal information to countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:`,
      "",
      {
        type: "list",
        items: [
          "**Standard Contractual Clauses:** Legally binding agreements ensuring adequate protection for transferred data.",
          "**Adequacy Decisions:** Transfers to countries recognized as providing adequate data protection.",
          "**Compliance with Laws:** All transfers comply with applicable data protection laws."
        ]
      }
    ]
  },
  {
    title: "7. Children's Privacy",
    content: [
      `Our service is not intended for children under ${minAge} years of age. We do not knowingly collect personal information from children under ${minAge}.`,
      "",
      "If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information promptly.",
      "",
      `If you believe we have collected information from a child under ${minAge}, please contact us immediately at ${supportEmail}.`
    ]
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.",
      "",
      "When we make changes, we will:",
      {
        type: "list",
        items: [
          "Post the updated policy on our website with a new effective date.",
          "Notify users of significant changes via email or in-app notifications.",
          "Maintain a record of previous versions for transparency."
        ]
      },
      "Your continued use of our service after the effective date constitutes acceptance of the updated policy."
    ]
  },
  {
    title: "9. Contact Information",
    content: [
      `If you have questions about this Privacy Policy or how we handle your information, please contact us:`,
      "",
      {
        type: "list",
        items: [
          `**Email:** ${supportEmail}`,
          `**Service:** ${productName}`,
          `**Company:** ${businessName}`
        ]
      },
      "We will respond to your inquiry within 30 days and work to address any concerns you may have."
    ]
  }
];

export const Route = createFileRoute("/_legal/privacy")({
  head: () => ({
    meta: seoMeta({
      title: "Privacy Policy",
      url: "/privacy"
    })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <Legal title="Privacy Policy" sections={sections} />;
}

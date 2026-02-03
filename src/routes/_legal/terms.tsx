import { createFileRoute } from "@tanstack/react-router";

import { Legal, type LegalSection, legalConfig } from "~/components/legal";
import { seoMeta } from "~/utils/seo";

const { businessName, minAge, productName, supportEmail } = legalConfig;

const sections: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    content: [
      `Welcome to ${productName}. These Terms of Service ("Terms") govern your use of our service, website, and related products and services (collectively, the "Service").`,
      "",
      `By accessing or using ${productName}, you agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations. If you do not agree to these Terms, please do not use our Service.`,
      `We may update these Terms from time to time. Your continued use of the Service after any changes constitutes acceptance of the updated Terms.`
    ]
  },
  {
    title: "2. Service Description",
    content: [
      `${productName} is a modern web application built with cutting-edge technology stack including TanStack, Convex, and Clerk. Our Service provides:`,
      "",
      {
        type: "list",
        items: [
          "**User Authentication:** Secure account management through Clerk.",
          "**Real-time Data:** Powered by Convex for seamless data synchronization.",
          "**Modern UI:** Built with React, TypeScript, and Tailwind CSS.",
          "**Developer Tools:** APIs and integrations for enhanced functionality."
        ]
      },
      "We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice."
    ]
  },
  {
    title: "3. Account Registration and Security",
    content: [
      `To access certain features of ${productName}, you must create an account through our authentication provider, Clerk.`,
      "",
      {
        type: "list",
        items: [
          `**Account Responsibility:** You are responsible for maintaining the confidentiality of your account credentials.`,
          "**Accurate Information:** You must provide accurate, current, and complete information during registration.",
          "**Security:** You must notify us immediately of any unauthorized use of your account.",
          `**Age Requirement:** You must be at least ${minAge} years old to create an account.`
        ]
      },
      "We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity."
    ]
  },
  {
    title: "4. Subscription and Payment Terms",
    content: [
      `${productName} may offer paid subscription plans ("Subscriptions") for access to premium features.`,
      "",
      {
        type: "list",
        items: [
          "**Billing Cycle:** Subscriptions are billed in advance on a recurring basis (monthly or annually).",
          "**Auto-Renewal:** Subscriptions automatically renew unless cancelled before the next billing cycle.",
          "**Payment Methods:** We accept major credit cards and other payment methods through our payment processors.",
          "**Price Changes:** We may change subscription prices with 30 days' notice."
        ]
      },
      `You can manage your subscription through your account settings or by contacting ${supportEmail}. All sales are final unless otherwise specified.`
    ]
  },
  {
    title: "5. User Content and Data",
    content: [
      'You may upload, submit, or store content, data, or information ("User Content") through our Service.',
      "",
      {
        type: "list",
        items: [
          "**Ownership:** You retain all rights to your User Content.",
          "**License:** You grant us a limited, non-exclusive license to use your content solely to provide the Service.",
          "**Responsibility:** You are solely responsible for your User Content and its legality.",
          "**Data Storage:** User data is stored securely using Convex infrastructure with automatic backups."
        ]
      },
      "We reserve the right to remove User Content that violates these Terms or applicable law."
    ]
  },
  {
    title: "6. Acceptable Use",
    content: [
      `You agree to use ${productName} only for lawful purposes and in accordance with these Terms.`,
      "",
      "**Prohibited Activities include, but are not limited to:",
      {
        type: "list",
        items: [
          "Violating any applicable laws or regulations.",
          "Infringing on intellectual property rights.",
          "Distributing malware, viruses, or other harmful code.",
          "Engaging in spam, phishing, or fraudulent activities.",
          "Attempting to gain unauthorized access to our systems or other users' accounts.",
          "Overloading our infrastructure with excessive requests or automated access."
        ]
      },
      "We may suspend or terminate accounts that violate these acceptable use guidelines."
    ]
  },
  {
    title: "7. Intellectual Property Rights",
    content: [
      `${productName} and its original content, features, and functionality are owned by ${businessName} and are protected by copyright, trademark, and other intellectual property laws.`,
      "",
      {
        type: "list",
        items: [
          `**Our Trademarks:** The ${productName} name and logos are trademarks of ${businessName}.`,
          "**Third-Party Content:** Some content may be licensed from third parties and used with permission.",
          "**User License:** You receive a limited, non-exclusive license to use our Service for personal or business use."
        ]
      },
      "You may not copy, modify, distribute, or create derivative works of our Service without explicit permission."
    ]
  },
  {
    title: "8. Privacy and Data Protection",
    content: [
      `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which forms part of these Terms.`,
      "",
      {
        type: "list",
        items: [
          "**Data Collection:** We collect information necessary to provide and improve our Service.",
          "**Data Security:** We implement industry-standard security measures to protect your data.",
          "**Third-Party Services:** We use trusted providers like Clerk and Convex for essential functionality.",
          "**Your Rights:** You have rights regarding your personal data as described in our Privacy Policy."
        ]
      },
      "By using our Service, you consent to the collection and use of your information as described in our Privacy Policy."
    ]
  },
  {
    title: "9. Service Availability and Performance",
    content: [
      `We strive to provide ${productName} with high availability and performance, but we cannot guarantee uninterrupted service.`,
      "",
      {
        type: "list",
        items: [
          "**Availability:** The Service may be temporarily unavailable for maintenance, updates, or technical issues.",
          "**No Warranty:** We do not guarantee that the Service will meet your requirements or be error-free.",
          "**Backup:** We maintain regular backups but do not guarantee data recovery in all circumstances.",
          "**Third-Party Dependencies:** Service availability may depend on third-party providers."
        ]
      }
    ]
  },
  {
    title: "10. Disclaimers and Limitations of Liability",
    content: [
      `${productName} is provided "as is" and "as available" without warranties of any kind.`,
      "",
      {
        type: "list",
        items: [
          "**No Warranty:** We disclaim all warranties, whether express or implied, including fitness for a particular purpose.",
          "**Limitation of Liability:** Our liability is limited to the amount you paid for the Service in the preceding 12 months.",
          "**No Consequential Damages:** We are not liable for indirect, incidental, or consequential damages.",
          "**Indemnification:** You agree to indemnify us against claims arising from your use of the Service."
        ]
      },
      "These limitations apply to the fullest extent permitted by applicable law."
    ]
  },
  {
    title: "11. Termination",
    content: [
      "We may suspend or terminate your account and access to the Service at our sole discretion, with or without notice, for any reason including:",
      "",
      {
        type: "list",
        items: [
          "Violation of these Terms or applicable law.",
          "Engagement in fraudulent or harmful activities.",
          "Extended period of inactivity.",
          "Request by law enforcement or regulatory authorities."
        ]
      },
      "Upon termination, your right to use the Service ceases immediately. We may delete your account data in accordance with our Privacy Policy."
    ]
  },
  {
    title: "12. Governing Law and Dispute Resolution",
    content: [
      "These Terms are governed by and construed in accordance with the laws of Hong Kong SAR, without regard to conflict of law principles.",
      "",
      {
        type: "list",
        items: [
          "**Dispute Resolution:** Any disputes will be resolved through good faith negotiations.",
          "**Jurisdiction:** You agree to the exclusive jurisdiction of courts in Hong Kong SAR.",
          "**Severability:** If any provision is invalid, the remaining provisions remain in effect.",
          "**Waiver:** Failure to enforce any provision does not constitute a waiver."
        ]
      }
    ]
  },
  {
    title: "13. General Provisions",
    content: [
      `These Terms constitute the entire agreement between you and ${businessName} regarding the use of ${productName}.`,
      "",
      {
        type: "list",
        items: [
          "**Assignment:** You may not assign these Terms without our written consent.",
          "**Notices:** We may send notices via email or through the Service.",
          "**Force Majeure:** We are not liable for failures beyond our reasonable control.",
          "**Relationship:** These Terms do not create a partnership, joint venture, or employment relationship."
        ]
      }
    ]
  },
  {
    title: "14. Contact Information",
    content: [
      `If you have questions about these Terms or need to contact ${businessName}, please reach out:`,
      "",
      {
        type: "list",
        items: [
          `**Email:** ${supportEmail}`,
          `**Service:** ${productName}`,
          `**Company:** ${businessName}`
        ]
      },
      "We will respond to your inquiries in a timely manner and work to address any concerns you may have about our Service or these Terms."
    ]
  }
];

export const Route = createFileRoute("/_legal/terms")({
  head: () => ({
    meta: seoMeta({
      title: "Terms of Service",
      url: "/terms"
    })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <Legal title="Terms of Service" sections={sections} />;
}

import { createFileRoute } from "@tanstack/react-router";

import { Legal } from "~/components/legal";
import { type LegalSection, legalConfig } from "~/utils/config";
import { seoMeta } from "~/utils/seo";

const { businessName, minAge, productName, supportEmail } = legalConfig;

const sections: LegalSection[] = [
  {
    title: "1. Introduction and Agreement",
    content: [
      `Welcome to ${productName} (“Company”, “we”, “our”, “us”)! These Terms of Service (“Terms”) govern your use of our service (the “Service”).`,
      `Your agreement includes these Terms and our Privacy Policy (“Agreements”). By accessing or using the Service, you acknowledge you have read, understood, and agree to be bound by the Agreements.`,
      `If you do not agree, please email us at ${supportEmail} so we can attempt to find a solution. These Terms apply to all visitors and users.`
    ]
  },
  {
    title: "2. Communications",
    content: [
      `By using the Service, you consent to receive newsletters, marketing, or promotional materials. You may opt out at any time by following the unsubscribe link or emailing us at ${supportEmail}.`
    ]
  },
  {
    title: "3. Purchases and Payments (Polar Integration)",
    content: [
      `To purchase any product or service (“Purchase”), you may be asked to supply billing information (e.g., credit/debit card, billing address).`,
      `You warrant that you have the legal right to use the payment method(s) and that all information supplied is true, correct, and complete.`,
      `We use third-party services, such as Polar, for payment facilitation. By submitting your information, you grant us the right to provide it to these third parties, subject to our Privacy Policy.`,
      "We reserve the right to refuse or cancel any order for reasons including product availability, errors in pricing/description, or suspicion of fraud/unauthorized transactions."
    ]
  },
  {
    title: "4. Subscriptions",
    content: [
      "Some parts of the Service are billed on a recurring basis (“Subscription(s)”). You will be billed in advance on a periodic “Billing Cycle.”",
      `Your Subscription will **automatically renew** under the same conditions at the end of each Billing Cycle unless you cancel it via your online account management or by contacting ${supportEmail}.`,
      "You must provide accurate billing information. Failure of automatic billing may result in the termination of your access to the Service with immediate effect."
    ]
  },
  {
    title: "5. Free Trial",
    content: [
      "We may offer a free trial for a limited period. Billing information may be required to sign up. If you do not cancel the Subscription before the trial expires, you will be automatically charged the applicable Subscription fees.",
      "We reserve the right, without notice, to modify or cancel any Free Trial offer at our sole discretion."
    ]
  },
  {
    title: "6. Fee Changes and Refunds",
    content: [
      `Subscription fees may be modified at our sole discretion. Any change will be effective at the end of the current Billing Cycle. We will provide reasonable prior notice to allow you to terminate your Subscription before the change takes effect.`,
      `Your continued use after the fee change constitutes agreement to the new amount.`
    ]
  },
  {
    title: "7. Content and Data Security (Convex Integration)",
    content: [
      "The Service allows you to upload certain information or material (“Content”). You are solely responsible for the Content you post, including its legality, reliability, and appropriateness.",
      "You represent and warrant that you own the Content or have the right to grant us the necessary license, and that posting your Content does not violate the rights of any person or entity.",
      "You retain all rights to your submitted Content and are responsible for protecting those rights.",
      `**Data Security:** Documents and data uploaded to ${productName} persist on our Convex servers for **24 hours**. After 24 hours, they are automatically deleted. We do not forward user uploaded documents to any third parties.`
    ]
  },
  {
    title: "8. Prohibited Uses",
    content: [
      "You may use the Service only for lawful purposes. You agree not to use the Service:",
      {
        type: "list",
        items: [
          "In any way that violates any applicable national or international law or regulation.",
          "To transmit “junk mail,” “chain letter,” “spam,” or similar solicitations.",
          "To impersonate or misrepresent your affiliation with the Company or another user.",
          "To engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Service.",
          "To disable, overburden, damage, or impair the Service or interfere with any other party’s use.",
          "To use any robot, spider, or automatic device to access, monitor, or copy material on the Service without our written consent.",
          "To introduce viruses, trojan horses, or other malicious or technologically harmful material.",
          "To attempt unauthorized access to, or attack, the Service, including Denial-of-Service attacks."
        ]
      }
    ]
  },
  {
    title: "9. Eligibility and Accounts (Clerk Integration)",
    content: [
      `The Service is intended for individuals at least **${minAge} years old**. By using the Service, you warrant and represent that you are at least ${minAge}.`,
      "When creating an account, you guarantee the information provided is accurate and current. Inaccurate information may result in immediate account termination.",
      "You are responsible for maintaining the confidentiality of your account and password (managed via Clerk) and accepting responsibility for all activities under your account.",
      "You must immediately notify us of any security breach or unauthorized use of your account."
    ]
  },
  {
    title: "10. Intellectual Property",
    content: [
      `The Service and its original content (excluding user Content) are and will remain the exclusive property of ${businessName} and its licensors. The Service is protected by copyright and other laws.`,
      `Our trademarks may not be used without the prior written consent of ${businessName}.`
    ]
  },
  {
    title: "11. Error Reporting and Feedback",
    content: [
      `You may provide us with feedback (errors, suggestions, ideas, complaints) directly at ${supportEmail} or via third-party tools.`,
      `You acknowledge and agree that you will not retain or assert any intellectual property right in the Feedback, that the Company may have similar development ideas, and that the Company is not under any obligation of confidentiality regarding the Feedback.`,
      `You grant the Company an exclusive, transferable, irrevocable, free-of-charge, unlimited, and perpetual right to use Feedback (including copy, modify, publish, and commercialize) for any purpose.`
    ]
  },
  {
    title: "12. Governing Law and Jurisdiction",
    content: [
      "These Terms shall be governed and construed in accordance with the laws of **Hong Kong SAR**, without regard to its conflict of law provisions.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision is held to be invalid, the remaining provisions will remain in effect."
    ]
  },
  {
    title: "13. Disclaimer of Warranty (TypeScript Focused)",
    content: [
      "THE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN.",
      "YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.",
      "COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF **MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE**.",
      "This is a crucial point for strict TypeScript development: we provide no type-level or runtime guarantee of fitness for any purpose. Your reliance on the output is at your own risk."
    ]
  },
  {
    title: "14. Limitation of Liability",
    content: [
      "EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES, INCLUDING ATTORNEYS’ FEES, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT.",
      `IF LIABILITY IS FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE **AMOUNT PAID** FOR THE PRODUCTS AND/OR SERVICES. UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.`
    ]
  },
  {
    title: "15. Termination and Amendments",
    content: [
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.",
      "We may amend these Terms at any time by posting the revised terms on this site. It is your responsibility to review these Terms periodically.",
      "Your continued use of the Service after the posting of revised Terms means that you accept and agree to the changes."
    ]
  },
  {
    title: "16. Contact Us",
    content: [
      `Please send your feedback, comments, and requests for technical support by email to: ${supportEmail}.`
    ]
  }
];

export const Route = createFileRoute("/_legal/terms")({
  head: () => ({
    meta: seoMeta({
      title: "Terms of Service - Quick Data Converter",
      url: "/terms"
    })
  }),
  component: RouteComponent
});

function RouteComponent() {
  return <Legal title="Terms of Service" sections={sections} />;
}

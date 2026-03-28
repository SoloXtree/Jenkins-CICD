import Layout from "@/components/Layout";

const sections = [
  {
    title: "Introduction",
    content:
      "This document is an electronic record under Information Technology Act, 2000. By using our digital marketing services (\"Platform\"), you agree to be bound by these Terms including our Payment Policy. The Platform is owned by Solo Tree.",
  },
  {
    title: "Terms and Conditions",
    items: [
      "Services are delivered digitally upon successful payment.",
      "Users must not misuse our services or engage in illegal activities.",
      "We may terminate service access for misuse, fraud, or policy violations.",
    ],
  },
  {
    title: "WhatsApp Communication",
    content:
      "Customers may receive service-related updates via WhatsApp after providing consent through our website. These updates may include order confirmations, service notifications, and support communications. You can opt out at any time by contacting our support team.",
  },
  {
    title: "Payment Gateway Terms",
    items: [
      "We do not store your card or bank details.",
      "All payments are subject to third-party gateway terms.",
      "Currency and pricing will be displayed during checkout.",
    ],
  },
  {
    title: "Cancellation and Refund",
    content:
      "All purchases are final. We follow a strict no refund policy. No refunds for admin access, promotions, or subscriptions. Only in rare cases like duplicate charges, we may issue credit after verification.",
  },
  {
    title: "Shipping and Delivery",
    content:
      "We only provide digital services — no physical goods are shipped. All deliveries happen digitally immediately after payment confirmation.",
  },
  {
    title: "Data Collection & Privacy",
    items: [
      "We collect basic profile info and transaction logs.",
      "We do not collect or store payment method details.",
      "Data is used only to provide services and improve the platform.",
    ],
  },
  {
    title: "Contact Us",
    content: "For questions, concerns, or support, email us at solotreebots@gmail.com",
  },
];

const Privacy = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
      <h1 className="text-4xl font-black text-foreground mb-10 text-center">
        Privacy Policy & Terms of Service
      </h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="gradient-container rounded-2xl p-6 border border-border">
            <h2 className="text-lg font-bold text-foreground mb-3">{section.title}</h2>
            {section.content && (
              <p className="text-muted-foreground leading-relaxed text-sm">{section.content}</p>
            )}
            {section.items && (
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-8 text-sm">
        © 2025 Ѕᴏʟᴏ Tʀᴇᴇ. All Rights Reserved.
      </p>
    </section>
  </Layout>
);

export default Privacy;

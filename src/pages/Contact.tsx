import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-2xl">
      <h1 className="text-4xl font-black text-foreground mb-8 text-center">
        Contact Solo Tree
      </h1>

      <div className="gradient-container rounded-2xl p-8 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6">Official Business Contacts</h2>
        <ul className="space-y-4 text-muted-foreground">
          <li>
            <span className="font-semibold text-foreground">Business Name:</span> Solo Tree
          </li>
          <li>
            <span className="font-semibold text-foreground">Email:</span>{" "}
            <a href="mailto:solotreebots@gmail.com" className="text-primary hover:underline">
              solotreebots@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold text-foreground">Phone:</span>{" "}
            <a href="tel:+919655563453" className="text-primary hover:underline">
              +91 9655563453
            </a>{" "}
            <span className="text-sm">(10AM–7PM IST)</span>
          </li>
          <li>
            <span className="font-semibold text-foreground">Address:</span> India
          </li>
          <li>
            <span className="font-semibold text-foreground">Country:</span> India
          </li>
          <li>
            <span className="font-semibold text-foreground">Support:</span>{" "}
            <a
              href="mailto:solotreebots@gmail.com"
              className="text-primary hover:underline"
            >
              solotreebots@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <p className="text-center text-muted-foreground mt-8 text-sm">
        For official business inquiries regarding Solo Tree services, please contact us during
        working hours.
      </p>
    </section>
  </Layout>
);

export default Contact;

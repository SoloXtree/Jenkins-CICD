import Layout from "@/components/Layout";
import h2Img from "@/assets/img/H2.png";

const About = () => (
  <Layout>

    {/* About Section */}
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl font-black text-foreground mb-6">
            About Solo Tree
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Solo Tree is a digital marketing and social media service company based in India.
            The business focuses on helping online brands grow through marketing strategies,
            social media promotion, and audience engagement.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2022, Solo Tree works with creators, startups, and online businesses
            to improve their online visibility and communication with customers across
            platforms like Instagram, Facebook, Twitter, and other social media networks.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Our goal is simple — help businesses grow faster in the digital world through
            effective promotion, branding, and community engagement.
          </p>

          <a
            href="/contact"
            className="inline-block px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={h2Img}
            alt="Solo Tree Community"
            className="w-72 h-72 object-contain animate-float"
          />
        </div>

      </div>
    </section>


    {/* Services Section */}
    <section className="gradient-container py-16">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-black text-foreground text-center mb-10">
          What We Do
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

          {[
            {
              title: "Social Media Marketing",
              desc: "We create and manage social media strategies that help brands grow their audience and engagement."
            },
            {
              title: "Digital Marketing",
              desc: "Promotion campaigns, branding strategies, and targeted marketing solutions for online businesses."
            }
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-foreground font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>


    {/* Business Registration Section */}
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">

        <h2 className="text-2xl font-bold text-foreground mb-4">
          Registered Business
        </h2>

        <p className="text-muted-foreground mb-3">
          Solo Tree is a registered Micro Enterprise under the Government of India
          MSME (Udyam Registration).
        </p>

        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">
            Udyam Registration Number:
          </span>{" "}
          UDYAM-TN-27-0111184
        </p>

      </div>
    </section>

  </Layout>
);

export default About;

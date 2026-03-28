import Layout from "@/components/Layout";
import h2Img from "@/assets/img/H2.png";

const About = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-black text-foreground mb-6">
            About Ѕᴏʟᴏ Tʀᴇᴇ
          </h1>
           <p className="text-muted-foreground leading-relaxed mb-4">
            Solo Tree is a digital marketing service based in India focused on social media
            marketing and online promotion. Founded in 2022, we started small and grew into
            a vibrant community of creators and marketers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We provide digital marketing and social media management services for online businesses.
            Our team helps brands manage customer communication, social media promotion, and
            engagement across platforms like Instagram, Facebook, Twitter, and more.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A single tree can spark a whole forest of ideas! 🌳 Join us and be part of
            something bigger.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
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

    <section className="gradient-container py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-foreground text-center mb-10">
          What We Do
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Social Media Marketing", desc: "We craft and execute social media strategies to grow your brand across all major platforms." },
            { title: "Digital Marketing", desc: "Targeted promotion, engagement strategies, and growth campaigns for your business." },
            { title: "Bot Services", desc: "Custom automation bots for music, AI, moderation, and community management." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-foreground font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

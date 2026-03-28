import Layout from "@/components/Layout";
import h5Img from "@/assets/img/H5.png";
import h6Img from "@/assets/img/H6.png";
import h8Img from "@/assets/img/H8.png";
import h2Img from "@/assets/img/H2.png";
import b1Img from "@/assets/img/B1.png";
import { useState, useEffect } from "react";

const teamSlides = [
  {
    img: h5Img,
    name: "SMILEYッ",
    role: "Owner",
    nickname: "✿ﮩ٨ـﮩﮩ٨ـˢᵐⁱˡᵉʸﮩ٨ـﮩﮩ٨ـ✿",
    description:
      "Hi, I'm Smiley, people call me \"Lax\". I am currently trying to learn something new, building my own community with parts made only in India.",
    link: "https://t.me/ilakshu",
  },
  {
    img: h6Img,
    name: "PANJU 🍭",
    role: "Co-Owner",
    nickname: "💛℘αηɉυ ɱιттαι®🫧⃟🤍",
    description:
      "Hi, I'm Panju Mittai, Close friends call me \"Candy\". I don't just listen—I play, write, and breathe music.",
    link: "https://t.me/Bubblykutti",
  },
  {
    img: h8Img,
    name: "SIMBA",
    role: "Sponsor",
    nickname: "░▒▓█🇸‌🇮‌🇲‌🇧‌🇦‌█▓▒░",
    description:
      "Hi, I'm Vingesh, people call me \"SIMBA\". I am currently trying to learn something new, building my own Game community with parts made only in India.",
    link: "https://t.me/Simba_itsme",
  },
];

const bots = [
  { name: "˹ᴍᴜꜱ𝖏ᴄ <♪> ᴠ𝖏ʙᴇ˼", subtitle: "Music Bot", link: "https://t.me/Music_vibing_bot" },
  { name: "Sᴏʟᴏ Tʀᴇᴇ 𝗔𝗜", subtitle: "AI Bot", link: "https://t.me/SoloTree_Ai_bot" },
  { name: "Sᴏʟᴏ Tʀᴇᴇ Mᴀɴᴀɢᴇʀ", subtitle: "Manager Bot", link: "https://t.me/Solo_Tree_bot" },
];

const services = [
  { title: "Social Media Marketing", desc: "Strategic campaigns across Instagram, Facebook, Twitter, and more to grow your brand." },
  { title: "Content Creation", desc: "Engaging posts, reels, stories, and graphics tailored for your target audience." },
  { title: "Community Growth", desc: "Build and nurture active online communities that drive loyalty and engagement." },
  { title: "Brand Promotion", desc: "Boost your brand visibility with targeted ads and influencer collaborations." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = teamSlides[currentSlide];

  return (
    <Layout>
      {/* Hero / Team Slider */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={slide.img}
                alt={slide.name}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-2xl animate-float"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-4 py-1 rounded-full text-xs text-foreground font-medium shadow-lg">
                {slide.nickname}
              </div>
            </div>
          </div>

          <div className="text-center md:text-left animate-fade-in-up" key={currentSlide}>
            <h3 className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
              Solo Tree {slide.role}
            </h3>
            <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4 text-shadow-glow">
              {slide.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              {slide.description}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Visit
              </a>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8 justify-center md:justify-start">
              {teamSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentSlide ? "bg-primary scale-125" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="gradient-container py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-foreground mb-4">
              Aʙᴏᴜᴛ Ѕᴏʟᴏ Tʀᴇᴇ
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Solo Tree provides digital marketing and social media management services for online
              businesses. We help brands manage customer communication, social media promotion,
              and engagement. Established in 2022, we are a growing community where
              minds connect, discussions flourish, and support is always available.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={h2Img}
              alt="Solo Tree"
              className="w-64 h-64 object-contain animate-float"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-foreground text-center mb-4">
          Oᴜʀ Sᴇʀᴠɪᴄᴇs
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
          We offer comprehensive digital marketing solutions to help your brand thrive on social media.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-container rounded-2xl p-6 text-center border border-border hover:scale-105 transition-transform"
            >
              <h3 className="text-foreground font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bots Section */}
      <section className="gradient-container py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground text-center mb-4">
            Sᴏʟᴏ Tʀᴇᴇ Bᴏᴛs
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Explore our automation bots built to enhance your social media experience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bots.map((bot) => (
              <a
                key={bot.link}
                href={bot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl p-6 text-center hover:scale-105 transition-transform border border-border"
              >
                <img src={b1Img} alt={bot.name} className="w-24 h-24 mx-auto mb-4 object-contain" />
                <h3 className="text-foreground font-bold text-lg mb-1">{bot.name}</h3>
                <span className="text-muted-foreground text-sm">{bot.subtitle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

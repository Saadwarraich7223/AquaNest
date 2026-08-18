import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const floatingCards = [
  {
    image: assets.aquairum,
    label: "Aquariums",
    rotation: -5,
    delay: 0,
    position:
      "top-2 right-[10%] md:top-0 md:right-[12%] lg:top-0 lg:right-[10%]",
    size: "w-52 h-64 md:w-60 md:h-72",
  },
  {
    image: assets.tropicalFish,
    label: "Tropical Fish",
    rotation: 6,
    delay: 0.15,
    position:
      "top-40 right-[32%] md:top-44 md:right-[34%] lg:top-40 lg:right-[32%]",
    size: "w-44 h-52 md:w-48 md:h-56",
  },
  {
    image: assets.wood,
    label: "Accessories",
    rotation: -8,
    delay: 0.3,
    position:
      "bottom-0 right-[0%] md:bottom-0 md:right-[0%] lg:bottom-0 lg:right-[0%]",
    size: "w-36 h-44 md:w-40 md:h-48",
  },
];

const Banner = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      bgRef.current.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full  flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url(${assets.bannerBg})`,
            transform: "scale(1.08)",
          }}
        />
        {/* Colorful overlays — less white, more teal tint for vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f7] via-[#0d4f4f]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f7]/90 via-[#f5f5f7]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f7]/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 -mt-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 w-full pt-24 pb-16 flex items-center gap-8 lg:gap-12">
        {/* Left — Text Content */}
        <motion.div
          className="flex-2 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="glass-panel  p-8 md:p-10 rounded-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-block mb-5 px-4 py-1.5 border border-accent/30 rounded-full bg-white/60">
              <span className="font-mono text-[11px] text-accent tracking-widest uppercase">
                Premium Aquatic Design
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-on-surface mb-5 hero-glow leading-[1.08] tracking-tight font-bold">
              Discover the Art of Living Water.
            </h1>

            {/* Description */}
            <p className="font-body text-base md:text-lg text-on-surface-muted mb-8 max-w-lg leading-relaxed">
              Bespoke aquarium systems and healthy, exotic livestock delivered
              to your door. Elevate your space with a living gallery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Link to="/products">
                <button className="group inline-flex items-center justify-center px-7 py-3.5 font-mono text-xs text-white bg-accent hover:bg-accent-bright transition-all duration-300 rounded-lg uppercase tracking-wider cursor-pointer shadow-[0_0_20px_rgba(79,191,139,0.2)] hover:shadow-[0_0_30px_rgba(79,191,139,0.35)]">
                  Start Your Journey
                  <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </Link>

              <Link to="/products">
                <button className="inline-flex items-center justify-center px-7 py-3.5 font-mono text-xs text-on-surface border border-black/10 hover:bg-black/5 transition-all duration-300 rounded-lg uppercase tracking-wider cursor-pointer glass-panel">
                  View Gallery
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Floating Product Showcase */}
        <div className="hidden lg:flex flex-1 relative h-[490px]  items-center justify-center">
          {/* Ambient glow behind cards */}
          <div
            className="
      absolute
      w-[360px]
      h-[360px]
      rounded-full
      bg-[#4fbf8b]/15
      blur-[100px]
      pointer-events-none
    "
          />

          {/* Secondary soft glow */}
          <div
            className="
      absolute
      w-[220px]
      h-[220px]
      rounded-full
      bg-[#0d7c7c]/20
      blur-[90px]
      translate-x-10
      translate-y-6
      pointer-events-none
    "
          />

          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className={`absolute mt-8 ${card.position} ${card.size} floating-card`}
              initial={{
                opacity: 0,
                y: 40,
                rotate: card.rotation,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: card.rotation,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45 + card.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotate: 0,
                zIndex: 30,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              style={{ transformOrigin: "center center" }}
            >
              <div
                className="
          group relative w-full h-full rounded-[22px] overflow-hidden
          border border-white/70
          bg-white/20 backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,40,40,0.18)]
          hover:shadow-[0_25px_70px_rgba(25,120,100,0.30)]
          transition-shadow duration-500
          cursor-pointer
        "
              >
                {/* Image */}
                <div className="absolute inset-[5px] rounded-[17px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover scale-[1.02] transition-all duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063f3f]/75 via-transparent to-white/10 opacity-90" />
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-50 pointer-events-none" />
                  <div
                    className="
              absolute -left-full top-0 w-1/2 h-full
              bg-gradient-to-r from-transparent via-white/25 to-transparent
              skew-x-[-20deg]
              group-hover:left-[150%]
              transition-all duration-1000 ease-in-out
              pointer-events-none
            "
                  />
                </div>

                <div className="absolute inset-0 rounded-[22px] border border-white/40 pointer-events-none" />

                {/* Bottom information */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-white/85 backdrop-blur-xl border-t border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent font-semibold">
                        {card.label}
                      </p>
                      <div className="mt-1 w-6 h-[2px] bg-accent/60 rounded-full group-hover:w-10 transition-all duration-300" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(79,191,139,0.7)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Tiny floating decorative bubbles */}
          <motion.div
            className="absolute top-10 right-[38%] w-3 h-3 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm"
            animate={{ y: [-8, 8, -8], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-28 left-[6%] w-2 h-2 rounded-full border border-white/50 bg-white/20"
            animate={{ y: [6, -6, 6], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-32 right-[4%] w-2.5 h-2.5 rounded-full border border-white/50 bg-white/20"
            animate={{ y: [-6, 6, -6], opacity: [0.3, 0.75, 0.3] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator — centered at absolute bottom of section */}
      <div className="absolute inset-x-0 bottom-8 z-30 pointer-events-none flex justify-center">
        <motion.div
          className="pointer-events-auto flex flex-col items-center gap-3 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" })}
        >
          <span className="font-mono text-[10px] text-on-surface-muted/70 uppercase tracking-[0.25em] group-hover:text-on-surface-muted transition-colors duration-300">
            Scroll to Explore
          </span>

          {/* Animated Mouse */}
          <div className="relative w-[22px] h-[34px] rounded-full border-2 border-on-surface/20 group-hover:border-accent/50 transition-colors duration-300">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-accent"
              animate={{ y: [3, 16, 3], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

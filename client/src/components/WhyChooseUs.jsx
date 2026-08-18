import React from "react";
import { motion } from "framer-motion";
import { FaFish, FaShippingFast, FaHeartbeat, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaFish className="text-xl text-blue-500" />,
      title: "Premium Quality",
      description:
        "Hand-selected healthy fish from trusted breeders worldwide, ensuring vibrant colors and excellent genetics.",
    },
    {
      icon: <FaShippingFast className="text-xl text-emerald-500" />,
      title: "Safe Delivery",
      description:
        "Express shipping with temperature-controlled packaging ensures your fish arrive healthy and stress-free.",
    },
    {
      icon: <FaHeartbeat className="text-xl text-rose-500" />,
      title: "Health Guarantee",
      description:
        "7-day live arrival guarantee with comprehensive health checks. Your satisfaction is our priority.",
    },
    {
      icon: <FaUserTie className="text-xl text-violet-500" />,
      title: "Expert Guidance",
      description:
        "Personalized advice on fish care, tank setup, and maintenance from our experienced team.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9f4fc] via-[#dff0f9] to-[#e4f0fa]" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#89c4e1]/15 blur-[110px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#b3d9f2]/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full mb-5 border border-white/60 shadow-lg">
            <FaFish className="text-lg text-accent" />
          </div>

          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3 block">
            Why AquaNest
          </span>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-4">
            Built for Enthusiasts
          </h2>

          <p className="text-on-surface-muted max-w-xl mx-auto leading-relaxed">
            Premium aquatic solutions for enthusiasts at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#89c4e1]/15 hover:border-white/60">
                <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-5 border border-white/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-base font-semibold text-on-surface mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-on-surface-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="font-mono text-xs text-white bg-accent hover:bg-accent-bright px-8 py-3.5 rounded-lg transition-all duration-300 uppercase tracking-wider cursor-pointer shadow-[0_0_20px_rgba(79,191,139,0.2)] hover:shadow-[0_0_30px_rgba(79,191,139,0.35)] hover:-translate-y-0.5">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

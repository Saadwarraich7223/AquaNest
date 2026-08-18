import React from "react";
import { motion } from "framer-motion";
import { FaFish, FaShippingFast, FaHeartbeat, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaFish className="text-2xl text-blue-400" />,
      title: "Premium Quality Fish",
      description:
        "Hand-selected healthy fish from trusted breeders worldwide, ensuring vibrant colors and excellent genetics.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <FaShippingFast className="text-2xl text-green-400" />,
      title: "Fast & Safe Delivery",
      description:
        "Express shipping with temperature-controlled packaging ensures your fish arrive healthy and stress-free.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <FaHeartbeat className="text-2xl text-red-400" />,
      title: "Health Guarantee",
      description:
        "7-day live arrival guarantee with comprehensive health checks. Your satisfaction is our top priority.",
      gradient: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: <FaUserTie className="text-2xl text-purple-400" />,
      title: "Expert Guidance",
      description:
        "Our specialists provide personalized advice on fish care, tank setup, and maintenance for lasting success.",
      gradient: "from-purple-500/20 to-violet-500/20",
    },
  ];

  return (
    <section className="py-20 mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mb-4">
            <FaFish className="text-xl text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
            Why Choose AquaNest?
          </h2>

          <p className="text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Dive into excellence with our premium aquatic solutions for enthusiasts at every level.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full border border-white/10 hover:border-white/25 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-blue-100/70 text-sm leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-teal-500 hover:scale-105 active:scale-95 cursor-pointer">
            Learn More
          </button>
          <p className="text-blue-200/60 mt-4 text-sm">
            Join thousands of satisfied customers who trust AquaNest
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

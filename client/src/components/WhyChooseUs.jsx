import React from "react";
import { motion } from "framer-motion";
import { FaFish, FaShippingFast, FaHeartbeat, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaFish className="text-2xl text-blue-400" />,
      title: "Premium Quality Fish",
      description:
        "Hand-selected healthy fish from trusted breeders worldwide, ensuring vibrant colors and excellent genetics for your aquarium.",
      delay: 0.1,
    },
    {
      icon: <FaShippingFast className="text-2xl text-green-400" />,
      title: "Fast & Safe Delivery",
      description:
        "Express shipping with temperature-controlled packaging ensures your fish arrive healthy and stress-free at your doorstep.",
      delay: 0.2,
    },
    {
      icon: <FaHeartbeat className="text-2xl text-red-400" />,
      title: "Health Guarantee",
      description:
        "7-day live arrival guarantee with comprehensive health checks. Your satisfaction and fish welfare is our top priority.",
      delay: 0.3,
    },
    {
      icon: <FaUserTie className="text-2xl text-purple-400" />,
      title: "Expert Guidance",
      description:
        "Our aquarium specialists provide personalized advice on fish care, tank setup, and maintenance for lasting success.",
      delay: 0.4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-10 mt-16 bg-gradient-to-br rounded border border-white shadow-blue-900/50 from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-300 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mb-3"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <FaFish className="text-2xl text-white" />
          </motion.div>

          <h2 className="text-xl md:text-2xl font-bold  mb-4 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent/50">
            Why Choose AquaNest?
          </h2>

          <p className="text-md text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dive into excellence with our premium aquatic solutions. We're
            passionate about creating thriving underwater ecosystems for
            enthusiasts at every level.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <motion.div
                  className="flex justify-center mb-3"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                </motion.div>

                <h3 className="text-md md:text-lg  font-bold text-white mb-2 text-center group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-blue-100 text-sm text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white cursor-pointer  px-10 py-3 rounded-full font-semibold  shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-teal-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>

          <p className="text-blue-200 mt-4 text-sm">
            Join thousands of satisfied customers who trust AquaNest
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

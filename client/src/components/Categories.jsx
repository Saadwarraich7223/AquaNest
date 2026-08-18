import React from "react";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-16 p-6 bg-slate-50 rounded-2xl w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
          Shop By Categories
          <span className="absolute -bottom-1 left-0 h-1 bg-primary rounded w-full" />
        </h2>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.path}
            variants={itemVariants}
            onClick={() => {
              navigate(`products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            className="group cursor-pointer"
          >
            <div
              className="rounded-2xl p-6 md:p-8 h-44 md:h-56 flex flex-col items-center justify-center relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: category.bgColor }}
            >
              {/* Image Container */}
              <div className="md:w-28 md:h-28 w-18 h-18 rounded-2xl overflow-hidden shadow-lg bg-white p-3 mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.text}
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <h3 className="md:text-lg text-sm font-semibold text-gray-800 text-center group-hover:text-gray-900 transition-colors duration-300">
                {category.text}
              </h3>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;

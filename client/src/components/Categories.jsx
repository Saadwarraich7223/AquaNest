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
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="mt-16 p-6  bg-slate-80 shadow-lg w-full rounded">
      <div className=" ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-2xl pb-2 md:text-3xl font-bold mt-1 relative inline-block">
            Shop By Categories
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-primary rounded"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.path}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate(`products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
              className="group cursor-pointer"
            >
              <div
                className="rounded-3xl p-8 h-60 flex flex-col items-center justify-center relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                style={{ backgroundColor: category.bgColor }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white"></div>
                  <div className="absolute bottom-8 left-6 w-12 h-12 rounded-full bg-white"></div>
                </div>

                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative mb-6 z-10"
                >
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                    <img
                      src={category.image}
                      alt={category.text}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md opacity-80"
                  ></motion.div>

                  <motion.div
                    animate={{
                      y: [0, 6, 0],
                      rotate: [0, -3, 3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-1 -left-3 w-4 h-4 bg-white rounded-full shadow-md opacity-60"
                  ></motion.div>
                </motion.div>

                {/* Text */}
                <motion.h3
                  className="text-xl font-medium text-gray-800 text-center tracking-wide group-hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {category.text}
                </motion.h3>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 right-6 text-gray-600"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;

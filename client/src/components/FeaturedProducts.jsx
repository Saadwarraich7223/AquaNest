import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const { products } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <div className="mt-16 md:px-3 pt-8 pb-18  bg-slate-100 shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.h2 className="text-2xl  pb-2 md:text-3xl font-bold mt-1 relative inline-block">
          Featured Products
          <motion.span
            className="absolute -bottom-1 left-0 h-1 bg-primary rounded"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h2>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2  justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
      >
        {!products || products.length === 0
          ? null
          : products
              .filter((product) => product.inStock)
              .slice(0, 5)
              .map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="max-w-sm w-full ml-auto self-center"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;

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
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-16 px-4 py-12 bg-slate-50 rounded-2xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
          Featured Products
          <motion.span
            className="absolute -bottom-1 left-0 h-1 bg-primary rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          />
        </h2>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-items-center"
      >
        {!products || products.length === 0
          ? null
          : products
              .filter((product) => product.inStock)
              .slice(0, 5)
              .map((product) => (
                <motion.div key={product._id} variants={itemVariants} className="w-full flex justify-center">
                  <ProductCard product={product} />
                </motion.div>
              ))}
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;

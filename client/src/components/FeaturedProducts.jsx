import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFish } from "react-icons/fa";

const FeaturedProducts = () => {
  const { products } = useAppContext();

  const inStock = products?.filter((p) => p.inStock) || [];
  const featured = inStock.slice(0, 5);
  const isEmpty = !products || products.length === 0 || featured.length === 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e4f0fa] via-[#edf6fd] to-[#e9f4fc]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#b3d9f2]/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3 block">
            Curated Selection
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface relative inline-block">
            Featured Products
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-accent rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            />
          </h2>
        </motion.div>

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center mb-6 shadow-lg">
              <FaFish className="text-3xl text-accent/60" />
            </div>
            <h3 className="font-display text-xl font-bold text-on-surface mb-2">
              Coming Soon
            </h3>
            <p className="text-on-surface-muted text-sm max-w-sm text-center mb-6">
              We're curating the finest collection for you. New products are on their way — stay tuned!
            </p>
            <Link to="/products">
              <button className="font-mono text-xs text-white bg-accent hover:bg-accent-bright px-6 py-3 rounded-lg transition-all duration-300 uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(79,191,139,0.2)] hover:shadow-[0_0_25px_rgba(79,191,139,0.35)]">
                Browse All Products
              </button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-items-center"
          >
            {featured.map((product) => (
              <motion.div key={product._id} variants={itemVariants} className="w-full flex justify-center">
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;

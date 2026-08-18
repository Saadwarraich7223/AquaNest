import React from "react";
import { motion } from "framer-motion";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const bentoAreas = ["a", "b", "c", "d"];

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9f4fc] via-[#f0f7fd] to-[#e4f0fa]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#b3d9f2]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#89c4e1]/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3 block">
            Browse Collections
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface relative inline-block">
            Shop By Categories
            <span className="absolute -bottom-1 left-0 h-[2px] bg-accent rounded w-full" />
          </h2>
        </motion.div>

        <div
          className="hidden md:grid gap-4 h-[360px]"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gridTemplateAreas: `"a a b" "c d b"`,
          }}
        >
          {categories.map((category, index) => {
            const area = bentoAreas[index];
            const isLarge = area === "a";

            return (
              <motion.div
                key={category.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
                onClick={() => {
                  navigate(`products/${category.path.toLowerCase()}`);
                  scrollTo(0, 0);
                }}
                style={{ gridArea: area }}
                className="group cursor-pointer relative rounded-[22px] overflow-hidden border border-white/70 bg-white/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,60,100,0.12)] hover:shadow-[0_25px 70px_rgba(0,80,120,0.22)] transition-shadow duration-500"
              >
                <div className="absolute inset-[5px] rounded-[17px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.text}
                    className="w-full h-full object-cover scale-[1.03] transition-all duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d5c]/80 via-[#0a3d5c]/10 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none" />
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none" />
                </div>

                <div className="absolute inset-0 rounded-[22px] border border-white/40 pointer-events-none" />

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                  <p className={`font-mono uppercase tracking-[0.18em] text-white/70 font-semibold ${isLarge ? "text-[10px]" : "text-[9px]"}`}>
                    Category
                  </p>
                  <h3 className={`font-display font-bold text-white drop-shadow-sm ${isLarge ? "text-xl md:text-2xl mt-1" : "text-base md:text-lg mt-0.5"}`}>
                    {category.text}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <span className="font-mono text-[9px] uppercase tracking-wider">Explore</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-10 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(79,191,139,0.7)]" />
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                navigate(`products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
              className="group cursor-pointer relative rounded-[20px] overflow-hidden h-36 border border-white/70 bg-white/30 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,60,100,0.12)] transition-shadow duration-500"
            >
              <div className="absolute inset-[4px] rounded-[16px] overflow-hidden">
                <img src={category.image} alt={category.text} className="w-full h-full object-cover scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d5c]/80 via-[#0a3d5c]/10 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-[20px] border border-white/40 pointer-events-none" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-3">
                <h3 className="text-sm font-display font-bold text-white drop-shadow-sm">{category.text}</h3>
              </div>
              <div className="absolute top-3 right-3 z-10 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(79,191,139,0.7)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

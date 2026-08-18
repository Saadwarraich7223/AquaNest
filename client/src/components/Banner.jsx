import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative rounded-2xl md:pb-5 md:h-[90vh] h-[75vh] lg:h-[70vh] mt-4 sm:mt-6 lg:mt-8 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${assets.bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <motion.div
        className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column - Text */}
        <motion.div
          className="flex flex-col justify-center py-8 lg:py-0 order-2 lg:order-1"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Discover the Wonders
            </span>
            <br />
            <span className="text-white">of Aquarium Life</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-xl text-gray-200 leading-relaxed">
            Healthy, colorful fish delivered to your door.{" "}
            <span className="font-semibold text-cyan-300">Shop with AquaNest</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center font-medium gap-4">
            <Link to="/products">
              <button className="group flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dull rounded-full transition-all duration-300 text-white cursor-pointer shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 active:scale-95">
                Shop Now
                <img
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  src={assets.white_arrow_icon}
                  alt="arrow"
                />
              </button>
            </Link>

            <Link to="/products" className="hidden sm:block">
              <button className="group flex items-center gap-2 px-8 py-3.5 border border-white/30 hover:border-white/60 rounded-full transition-all duration-300 hover:bg-white/10 cursor-pointer">
                <span>Explore Deals</span>
                <img
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  src={assets.black_arrow_icon}
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-5 lg:gap-6 h-full p-4 sm:p-6 lg:p-8 order-1 lg:order-2"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className="relative group"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={assets.bannerSeahorse}
              alt="Seahorse"
              loading="lazy"
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-48 sm:h-56 md:h-64 xl:h-80 object-cover rounded-2xl shadow-xl border-2 border-blue-400/50 transform rotate-2 transition-all duration-300 hover:shadow-blue-400/30 hover:scale-105 hover:rotate-3"
            />
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <img
              src={assets.bannerFish}
              alt="Tropical Fish"
              loading="lazy"
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-48 sm:h-56 md:h-64 xl:h-80 object-cover rounded-2xl shadow-xl border-2 border-orange-400/50 transform -rotate-1 transition-all duration-300 hover:shadow-orange-400/30 hover:scale-105 hover:-rotate-2"
            />
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <img
              src={assets.bannerTurtle}
              alt="Sea Turtle"
              loading="lazy"
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-48 sm:h-56 md:h-64 xl:h-80 object-cover rounded-2xl shadow-xl border-2 border-green-400/50 transform rotate-1 transition-all duration-300 hover:shadow-green-400/30 hover:scale-105 hover:rotate-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;

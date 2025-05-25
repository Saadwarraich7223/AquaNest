import { motion } from "framer-motion";

import { assets } from "../assets/assets";
import { thumbnails } from "../assets/assets";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative rounded-lg md:pb-5  md:h-[100vh] h-[80vh] lg:h-[75vh] mt-4 sm:mt-6 lg:mt-8 bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${assets.bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

      {/* Subtle animated elements */}
      <div className="absolute inset-0">
        {/* Static bubbles for visual appeal */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-blue-300/30 rounded-full"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1 sm:w-2 h-1 sm:h-2 bg-cyan-200/40 rounded-full"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 w-3 sm:w-4 h-3 sm:h-4 bg-teal-300/20 rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-1 sm:w-2 h-1 sm:h-2 bg-blue-400/35 rounded-full"></div>
      </div>

      <motion.div
        className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-stretch px-4 sm:px-6 lg:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-center py-8 lg:py-0 order-2 lg:order-1"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Discover the Wonders
            </span>
            <br />
            <span className="text-white">of Aquarium Life</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 max-w-xl text-gray-200 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Healthy, colorful fish delivered to your door. Learn and shop with{" "}
            <span className="font-semibold text-cyan-300">AquaNest</span>.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center font-medium gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/products">
              <motion.button
                className="group flex items-center gap-2 px-8 md:px-10 py-3 bg-primary hover:bg-primary-dull rounded-full transition text-white cursor-pointer shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Shop Now
                <motion.img
                  className="transition"
                  src={assets.white_arrow_icon}
                  alt="arrow"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            </Link>

            <Link to="/products" className="hidden md:block">
              <motion.button
                className="group flex items-center gap-2 px-8 py-3 cursor-pointer relative overflow-hidden border border-transparent hover:border-gray-200 rounded-full transition-all  hover:bg-white/30 hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>Explore Deals</span>
                <motion.img
                  className="transition"
                  src={assets.black_arrow_icon}
                  alt="arrow"
                  whileHover={{ x: 5 }}
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="hidden  mt-10  xl:block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300">
              Aquarium Fishes
            </h2>
            <div className="flex gap-2  sm:gap-3">
              {thumbnails.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Fish ${index + 1}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl object-cover border-2 border-cyan-400/50  rotate-10, shadow-lg cursor-pointer"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Images */}
        <motion.div
          className="flex  justify-center items-center gap-5 sm:gap-4 lg:gap-6 h-full p-4 sm:p-6 lg:p-8 order-1 lg:order-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.img
              src={assets.bannerSeahorse}
              alt="Banner Seahorse"
              className="w-22 sm:w-24 md:w-28 lg:w-36 h-50 sm:h-48 md:h-64 xl:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-blue-400 transform rotate-2 cursor-pointer transition-all hover:shadow-blue-400 duration-300"
              whileHover={{
                scale: 1.08,
                rotate: 5,
                // borderColor: "rgba(59, 130, 246, 0.8)",
                // boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
              }}
            />
            <motion.div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl opacity-0 -z-10 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.img
              src={assets.bannerFish}
              alt="Banner Fish"
              className="w-22 sm:w-24 md:w-28 lg:w-36 h-50 sm:h-48 md:h-64  xl:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-orange-400 hover:shadow-orange-300 transform -rotate-1 cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.08,
                rotate: -4,
                // borderColor: "rgba(249, 115, 22, 0.8)",
                // boxShadow: "0 15px 35px rgba(249, 115, 22, 0.4)",
              }}
            />
            <motion.div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl sm:rounded-2xl opacity-0 -z-10 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.img
              src={assets.bannerTurtle}
              alt="Banner Turtle"
              className="w-22 sm:w-24 md:w-28 lg:w-36 h-50 sm:h-48 md:h-64  xl:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-green-400 transform rotate-1 hover:shadow-green-300 cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.08,
                rotate: 4,
                // borderColor: "rgba(34, 197, 94, 0.8)",
                // boxShadow: "0 15px 35px rgba(34, 197, 94, 0.4)",
              }}
            />
            <motion.div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl opacity-0 -z-10 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;

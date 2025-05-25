import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFish } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-16 mt-8 bg-slate-100 shadow-xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6"
            whileHover={{ scale: 1.1, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="text-blue-600 text-lg" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Stay in the Loop
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly aquarium tips, new fish arrivals, and exclusive offers
            delivered to your inbox.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                whileFocus={{ scale: 1.02 }}
                required
              />

              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary cursor-pointer text-white rounded-lg font-medium hover:bg-primary-dull transition-colors duration-200 flex items-center justify-center gap-2 min-w-[120px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span>✓</span>
                    <span>Subscribed!</span>
                  </motion.div>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <FaFish className="text-sm" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Success message */}
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-sm mt-3"
            >
              Welcome to the AquaNest community! 🐠
            </motion.p>
          )}

          {/* Privacy note */}
          <motion.p
            className="text-xs text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No spam, unsubscribe anytime. We respect your privacy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

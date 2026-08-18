import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

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
    <section className="py-16 mt-8 bg-slate-50 rounded-2xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
            <FaEnvelope className="text-primary text-lg" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Stay in the Loop
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get weekly aquarium tips, new fish arrivals, and exclusive offers delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all duration-200 bg-white"
                required
              />

              <button
                type="submit"
                className="px-7 py-3.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-dull transition-all duration-200 flex items-center justify-center gap-2 min-w-[130px] cursor-pointer hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Subscribed!</span>
                  </span>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>
          </form>

          {/* Success message */}
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-sm mt-4"
            >
              Welcome to the AquaNest community!
            </motion.p>
          )}

          {/* Privacy note */}
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

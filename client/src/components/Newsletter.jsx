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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e4f0fa] via-[#d8ecf8] to-[#e0effa]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#89c4e1]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#b3d9f2]/25 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 lg:px-20">
        <motion.div
          className="text-center glass-panel rounded-3xl p-10 md:p-14 border border-white/50 shadow-[0_20px_60px_rgba(0,60,100,0.1)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/50 backdrop-blur-sm rounded-full mb-6 border border-white/60 shadow-lg">
            <FaEnvelope className="text-accent text-lg" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-4">
            Stay in the Loop
          </h2>

          <p className="text-on-surface-muted mb-10 max-w-md mx-auto">
            Weekly aquarium tips, new arrivals, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl text-sm text-on-surface placeholder-on-surface-muted outline-none focus:border-accent/50 focus:bg-white/80 transition-all duration-200 shadow-sm"
                required
              />

              <button
                type="submit"
                className="px-8 py-4 bg-accent text-white rounded-xl font-mono text-xs uppercase tracking-wider hover:bg-accent-bright transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(79,191,139,0.2)] hover:shadow-[0_0_25px_rgba(79,191,139,0.4)] hover:-translate-y-0.5"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
          </form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-sm mt-6"
            >
              Welcome to the AquaNest community.
            </motion.p>
          )}

          <p className="text-[11px] text-on-surface-muted/50 mt-6 font-mono">
            No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

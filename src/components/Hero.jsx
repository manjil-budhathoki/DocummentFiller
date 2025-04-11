// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 scroll-mt-24" id="hero">
      {/* Background ambient glows */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px] top-0 left-[-200px] z-0" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] bottom-0 right-[-150px] z-0" />

      <div className="z-10 max-w-2xl text-center">
        {/* Optional tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs rounded-full shadow-sm"
        >
          🚀 28K+ users already exploring
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
        >
          Automate Driving<br />
          License in Nepal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mb-8"
        >
          Apply through chat. Minimal steps. <br />Hassle-free experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all"
          >
            <FaPaperPlane /> Start Chat
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
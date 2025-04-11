
// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/hero-background.png';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="flex items-center justify-center h-screen px-4 text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-start text-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          Automate Driving<br />License in Nepal
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Apply through chat. Minimal steps.<br />Hassle-free experience.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/chat')}
        >
          <FaPaperPlane /> Start Chat
        </motion.button>
      </motion.div>
    </section>
  );
}
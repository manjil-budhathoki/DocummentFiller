// src/components/Features.jsx
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <motion.section
      className="py-16 px-6 text-center bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gradient mb-6">Why Use Our Service?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          ['Zero Paperwork', 'Say goodbye to endless forms. Just chat and upload your info.'],
          ['Speedy Process', 'We auto-fill and submit on your behalf in minutes.'],
          ['Government Trusted', 'Built in collaboration with official guidelines and legal clarity.']
        ].map(([title, desc], index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white/10 backdrop-blur shadow-xl hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// src/components/Features.jsx
import { motion } from 'framer-motion';
import { FaFileAlt, FaRocket, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Zero Paperwork',
    description: 'Say goodbye to endless forms. Just chat and upload your info.',
    icon: <FaFileAlt className="text-3xl text-purple-400" />,
  },
  {
    title: 'Speedy Process',
    description: 'We auto-fill and submit on your behalf in minutes.',
    icon: <FaRocket className="text-3xl text-cyan-400" />,
  },
  {
    title: 'Government Trusted',
    description: 'Built in collaboration with official guidelines and legal clarity.',
    icon: <FaShieldAlt className="text-3xl text-blue-400" />,
  },
];

export default function Features() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0e1018] to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 inline-block bg-clip-text text-transparent mb-8">
          Why Use Our Service?
        </h2>

        <div className="relative flex flex-wrap justify-center gap-10 z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative w-72 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>
    </section>
  );
}
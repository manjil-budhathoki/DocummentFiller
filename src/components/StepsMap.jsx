// src/components/StepsMap.jsx
import { motion } from 'framer-motion';
import { FaComments, FaPen, FaFileUpload, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { icon: <FaComments />, title: 'Start Chat', desc: 'Say hello and begin the application process.' },
  { icon: <FaPen />, title: 'Fill Basic Info', desc: 'Enter your personal details with guidance.' },
  { icon: <FaFileUpload />, title: 'Upload Documents', desc: 'Add your photo, ID and other essentials.' },
  { icon: <FaCheckCircle />, title: 'Get Confirmation', desc: 'Your digital application is ready.' }
];

export default function StepsMap() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gradient">How It Works</h2>
        <p className="mt-2 text-gray-400">Follow these 4 simple steps to get started with your license.</p>
      </div>
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur shadow-lg text-xl text-cyan-400">
              {step.icon}
            </div>
            <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">{step.desc}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-[-50%] h-1 w-[100%] bg-gradient-to-r from-purple-500 to-cyan-400 z-[-1]" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

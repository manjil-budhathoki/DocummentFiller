// src/components/StepsMap.jsx
import { motion } from 'framer-motion';
import { FaComments, FaMobileAlt, FaFileUpload, FaCheckCircle, FaRegEdit } from 'react-icons/fa';

const steps = [
  {
    title: 'Start Chat',
    desc: 'Say hello and begin the application process.',
    icon: <FaComments className="text-2xl" />,
  },
  {
    title: 'Fill Mobile Number',
    desc: 'Enter your mobile number to proceed securely.',
    icon: <FaMobileAlt className="text-2xl" />,
  },
  {
    title: 'Upload Documents',
    desc: 'Add your photo, ID and other essentials.',
    icon: <FaFileUpload className="text-2xl" />,
  },
  {
    title: 'Fill Missing Info',
    desc: 'If required, provide any remaining information.',
    icon: <FaRegEdit className="text-2xl" />,
  },
  {
    title: 'Get Confirmation',
    desc: 'Your digital application is ready.',
    icon: <FaCheckCircle className="text-2xl" />,
  },
];

export default function StepsMap() {
  return (
    <section className="py-24 px-6 text-center text-white bg-gradient-to-b from-black via-[#0c0f1a] to-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 inline-block bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-gray-400 mb-12">Follow these steps to complete your license process quickly and securely.</p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-md hover:shadow-purple-500/30 transition-all duration-300">
                <div className="text-cyan-400">{step.icon}</div>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-[180px] mt-1">{step.desc}</p>
            </motion.div>
          ))}

          {/* Glowing line connector */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-1 z-0">
            <div className="w-full h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 blur-md opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
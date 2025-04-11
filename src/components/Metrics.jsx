// src/components/Metrics.jsx
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaUsers, FaIdCard, FaFileAlt, FaClock } from 'react-icons/fa';

const stats = [
  {
    label: 'Total Users',
    value: 86240,
    icon: <FaUsers className="text-lg text-cyan-400" />,
  },
  {
    label: 'Licenses Processed',
    value: 34120,
    icon: <FaIdCard className="text-lg text-purple-400" />,
  },
  {
    label: 'Documents Verified',
    value: 120000,
    icon: <FaFileAlt className="text-lg text-blue-400" />,
  },
  {
    label: 'Avg Time Saved',
    value: 72,
    suffix: '%',
    icon: <FaClock className="text-lg text-green-400" />,
  },
];

export default function Metrics() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0c0e15] to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 inline-block bg-clip-text text-transparent mb-12">
          Impact in Numbers
        </h2>

        <div className="relative flex justify-center gap-4 items-center">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 blur-sm z-0" />

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 w-44 text-center hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-semibold text-cyan-400">
                <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix || ''} />
              </div>
              <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* glow orbs */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>
    </section>
  );
}

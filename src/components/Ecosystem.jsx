// src/components/Ecosystem.jsx
import { motion } from 'framer-motion';

const partners = [
  'NepalGov API',
  'MoTCA Digital',
  'eKYC Verify',
  'Citizenship Sync',
  'Biometric ID',
  'DriveSafe System'
];

export default function Ecosystem() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0e1018] to-black text-white text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-cyan-400 inline-block bg-clip-text text-transparent mb-6">
          Ecosystem Partners
        </h2>
        <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
          SmartLicense is built in collaboration with national and international systems, ensuring secure and seamless integration across platforms.
        </p>

        <div className="relative flex justify-center items-center flex-wrap gap-6 z-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-full px-6 py-3 text-sm text-white shadow-md hover:shadow-cyan-500/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {partner}
            </motion.div>
          ))}
        </div>

        {/* Glow Rings */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] animate-pulse" />
      </div>
    </section>
  );
}
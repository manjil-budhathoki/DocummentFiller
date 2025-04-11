// src/components/Footer.jsx
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 px-6 bg-black border-t border-white/10 text-center text-gray-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SmartLicense.ai — Built for Hackathon Nepal
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-all">Contact</a>
          <a href="#" className="hover:text-white transition-all">GitHub</a>
          <a href="#" className="hover:text-white transition-all">LinkedIn</a>
          <a href="#" className="hover:text-white transition-all">Privacy</a>
        </div>
      </div>

      {/* glow blobs */}
      <div className="absolute -top-12 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-[90px] animate-pulse" />
      <div className="absolute -bottom-16 right-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-[90px] animate-pulse" />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
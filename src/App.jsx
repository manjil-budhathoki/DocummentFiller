// src/App.jsx
import Hero from './components/Hero';
import StepsMap from './components/StepsMap';
import Features from './components/Features';
import Metrics from './components/Metrics';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import ChatUI from './components/ChatUI';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <main className="relative min-h-screen text-white font-sans overflow-hidden">
      <Hero />
      <StepsMap />
      <Features />
      <Metrics />
      <Ecosystem />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatUI fullScreen />} />
    </Routes>
  );
}
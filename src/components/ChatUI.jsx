// src/components/ChatUI.jsx
import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaFileUpload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/hero-background.png';

export default function ChatUI({ fullScreen }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef();

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { type: 'text', content: input, sender: 'user' }]);
    setInput('');
    setHasTyped(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const isImage = file.type.startsWith('image/');
        setMessages((prev) => [
          ...prev,
          {
            type: isImage ? 'image' : 'file',
            content: isImage ? reader.result : file.name,
            sender: 'user'
          }
        ]);
        setHasTyped(true);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestions = ['Apply for License', 'Renew License', 'Change Address', 'Check Status'];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex">
      <section
        className="flex-1 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-start pt-20 px-4"
        style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Chat with SmartLicense</h1>
          <p className="text-gray-400">How can we help you today?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {suggestions.map((text, index) => (
              <button
                key={index}
                onClick={() => setInput(text)}
                className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm hover:bg-white/20 transition"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        <div className="relative bg-white/5 rounded-3xl backdrop-blur-lg shadow-xl w-full max-w-4xl h-[400px] overflow-y-auto p-6 mb-4">
          {!hasTyped && messages.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-semibold animate-fadeIn z-0">
              SmartLicense Assistant ✨
            </div>
          )}
          <div className="relative z-10">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`my-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={`px-4 py-2 max-w-sm text-sm rounded-xl ${msg.sender === 'user' ? 'rounded-tr-none bg-cyan-500 text-white' : 'rounded-tl-none bg-gray-800 text-gray-200'}`}>
                  {msg.type === 'text' && <>{msg.content} <span className="inline-block ml-1">😊</span></>}
                  {msg.type === 'image' && <img src={msg.content} alt="upload" className="rounded-lg max-w-xs mt-1" />}
                  {msg.type === 'file' && <>📎 Uploaded: {msg.content}</>}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="w-full max-w-4xl flex items-center gap-2 focus-within:ring-2 ring-purple-500 ring-offset-2 ring-offset-black transition-all">
          <input
            type="text"
            className="flex-1 p-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (!hasTyped && e.target.value.length > 0) setHasTyped(true);
            }}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-110 transition"
            onClick={sendMessage}
          >
            <FaPaperPlane />
          </button>
          <button
            className="p-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full hover:scale-110 transition"
            onClick={() => fileInputRef.current.click()}
          >
            <FaFileUpload />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </section>
    </div>
  );
}

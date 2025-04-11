// src/components/ChatUI.jsx
import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaUpload, FaTimes, FaPlus, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ChatUI() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [previewFile, setPreviewFile] = useState(null);
  const [confirmNewChat, setConfirmNewChat] = useState(false);
  const fileInputRef = useRef();
  const chatContainerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'text', content: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith('image/') ? 'image' : 'file';
      const fileObject = {
        type: fileType,
        name: file.name,
        url: URL.createObjectURL(file),
        sender: 'user'
      };
      setPreviewFile(fileObject);
      setMessages([...messages, fileObject]);
    }
  };

  const removePreview = () => {
    setPreviewFile(null);
  };

  const startNewChat = () => {
    setConfirmNewChat(true);
  };

  const confirmResetChat = () => {
    setMessages([]);
    setInput('');
    setPreviewFile(null);
    setConfirmNewChat(false);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-black via-[#0b0d13] to-black text-white px-6 py-16 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[180px] top-[-100px] left-[-100px] animate-pulse z-0" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] bottom-0 right-[-80px] animate-pulse z-0" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 z-10"
      >
        <h1 className="text-3xl font-bold">Chat with SmartLicense</h1>
        <p className="text-gray-400 mt-2">Follow the steps below to get started:</p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {['Start Chat', 'Enter Mobile Number', 'Upload Documents', 'Complete Details', 'Get Confirmation'].map((step, idx) => (
            <span
              key={idx}
              className="bg-white/10 text-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all backdrop-blur"
            >
              {step}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={chatContainerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl flex flex-col justify-between h-[500px] rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-inner px-6 py-4 mb-6 z-10 overflow-y-auto custom-scrollbar space-y-2"
      >
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="text-center text-gray-300 mt-48"
          >
            SmartLicense Assistant ✨
          </motion.div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'assistant' && <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-xs">🤖</div>}
              <div
                className={`p-3 rounded-xl text-sm max-w-xs ${msg.sender === 'user' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white' : 'bg-white/10 text-white'}`}
              >
                {msg.type === 'text' ? msg.content : msg.type === 'image' ? (
                  <img src={msg.url} alt={msg.name} className="rounded-md max-w-[200px]" />
                ) : (
                  <a href={msg.url} download className="text-cyan-300 underline">📎 {msg.name}</a>
                )}
              </div>
              {msg.sender === 'user' && <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-xs">🧑</div>}
            </div>
          ))
        )}
      </motion.div>

      {previewFile && (
        <div className="w-full max-w-3xl mb-3 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-sm z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {previewFile.type === 'image' && (
              <img src={previewFile.url} alt="Preview" className="h-10 w-10 rounded object-cover" />
            )}
            <span className="truncate">📎 {previewFile.name}</span>
          </div>
          <button onClick={removePreview} className="text-red-400 hover:text-red-500">
            <FaTimes />
          </button>
        </div>
      )}

      {confirmNewChat && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-xl text-center">
            <p className="mb-4">Start a new chat? Your current messages will be cleared.</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmResetChat} className="px-4 py-2 bg-red-500 rounded-full">Yes</button>
              <button onClick={() => setConfirmNewChat(false)} className="px-4 py-2 bg-gray-600 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl flex items-center gap-2 z-10"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 rounded-full bg-white/10 text-sm placeholder-gray-400 text-white outline-none border border-white/10 focus:ring-2 focus:ring-cyan-500 backdrop-blur transition-all"
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all"
        >
          <FaPaperPlane />
        </button>
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-pink-500 p-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all"
        >
          <FaUpload />
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleUpload}
          />
        </button>
        <button
          onClick={startNewChat}
          className="bg-white/10 p-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all"
          title="New Chat"
        >
          <FaPlus />
        </button>
        <button
          onClick={goToHome}
          className="bg-white/10 p-3 rounded-full hover:scale-105 hover:bg-white/20 transition-all"
          title="Back to Home"
        >
          <FaHome />
        </button>
      </motion.div>
    </div>
  );
}

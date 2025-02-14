import React, { useState, useRef } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Chatbot = ({ apiKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatboxRef = useRef(null);
  const { t } = useTranslation();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: "You are MMSH Bot and talk like a regular friend and give information about MMSH only when user asked. Provide brief and relevant answers about MMSH Logistics, MMSH Logistics, established in 2019, connects the world with trusted global partners, ensuring seamless cargo transport by sea, land, and air. Our mission is to empower businesses with reliable logistics solutions while fostering a dynamic, growth-driven workplace for ambitious professionals. Your answers and ideas must be generalized in less than 20 words." },
                { text: input }
              ]
            }]
          }),
        }
      );

      const data = await response.json();
      let botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        t('sorry');
      
      // Generalizing the response instead of just cutting at 20 words
      const words = botResponse.split(" ");
      botResponse = words.length > 20 ? words.slice(0, 18).join(" ") + "... (summary)" : botResponse;

      setMessages([...newMessages, { role: "bot", text: botResponse }]);
    } catch (error) {
      setMessages([...newMessages, { role: "bot", text: "Error getting response." }]);
      console.error("API Request Failed:", error);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <motion.button
        className="btn btn-dark d-flex align-items-center justify-content-center"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          zIndex: 1050,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat"
      >
        {isOpen ? <FaTimes size={24} color="white" /> : <FaComments size={24} color="white" />}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        ref={chatboxRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="shadow-lg"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "320px",
          height: "420px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #ddd",
          zIndex: 1040,
          display: isOpen ? "block" : "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Header */}
          <motion.div 
            className="bg-dark text-white p-3 d-flex justify-content-between align-items-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>MMSH Bot</span>
            <button className="btn btn-sm text-white" onClick={toggleChat}>
              <FaTimes />
            </button>
          </motion.div>

          {/* Chat Messages */}
          <motion.div 
            className="p-3 flex-grow-1 overflow-auto"
            style={{ height: "320px", background: "#f9f9f9" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 my-1 rounded shadow-sm ${msg.role === "user" ? "bg-dark text-white text-end" : "bg-light text-black text-start"}`}
                initial={{ x: msg.role === "user" ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>{msg.role === "user" ? "You" : "MMSH Bot"}:</strong> {msg.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Input Box */}
          <div className="d-flex border-top p-2 align-items-center" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder={t('ask')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              style={{ flex: 4 }}
            />
            <motion.button
              className="btn btn-dark ms-2 rounded-pill"
              onClick={sendMessage}
              style={{ flex: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPaperPlane />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chatbot;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

// Company knowledge base for the AI
const COMPANY_CONTEXT = `
You are a customer assistant for Fokus, an Indian energy drink brand created by content creators Abhishek Malhan and Nischay Malhan, along with entrepreneurs Mayank Mishra, Ankit Madaan, and Aman Madaan.

IMPORTANT: You should ONLY answer questions related to Fokus products, company, ingredients, ordering, and customer service. If asked about anything else, politely redirect the conversation back to Fokus-related topics.

RESPONSE FORMATTING: Use markdown formatting in your responses to make them more readable:
- Use **bold** for product names and important information
- Use *italic* for emphasis
- Use bullet points (- or *) for lists
- Use numbered lists (1. 2. 3.) for steps
- Use > for quotes or testimonials
- Keep responses friendly and engaging

COMPANY INFORMATION:
- Fokus is more than just a brand—it's a vibrant community driven by passion, purpose, and a shared vision for a better lifestyle
- Founded by popular content creators Abhishek Malhan and Nischay Malhan along with digital entrepreneurs
- Mission: to deliver clean, functional hydration that fits seamlessly into daily routines
- Made in India with 100% recyclable bottles
- Tagline: #GetFokus

PRODUCTS:
Fokus offers **3 amazing flavors** of hydration drinks, all priced at **Rs.150.00**:

1. **Strawberry Watermelon** *(Best Seller)* 🍓🍉
   - Color theme: Red (#FF6262)
   - Description: Refreshing strawberries & juicy watermelon
   - Ingredients: Strawberry, Watermelon

2. **Kiwi Lemon** *(Best Seller)* 🥝🍋
   - Color theme: Green (#95DA4A)  
   - Description: Zesty kiwi & tangy lemon
   - Ingredients: Kiwi, Lemon

3. **Mango Pineapple** *(Best Seller)* 🥭🍍
   - Color theme: Yellow (#FFE061)
   - Description: Refreshing mango & juicy pineapple
   - Ingredients: Mango, Pineapple

KEY INGREDIENTS & BENEFITS:
- **Vitamin D3**: Mood booster and immune system support, strong bones
- **Coconut Water (22%)**: Natural hydration with electrolytes
- **No Added Sugar**: Uses Sucralose as natural sweetener
- **Taurine**: Energy support and focus enhancement
- **Ginseng Extract**: Natural energy boost and focus
- **Ginkgo Biloba Extract**: Improves focus and memory
- **Creatine**: Strength and recovery support
- **Glutamine**: Energy restoration and muscle/immunity support
- **LCLT (L-Carnitine L-Tartrate)**: Converts fat to fuel for long-lasting energy
- **5-HTP**: Serotonin booster for mood balance
- **Inositol**: Calms overthinking and clears headspace

UNIQUE SELLING POINTS:
✅ Fight off fatigue  
✅ Made with coconut water base  
✅ No added sugar (guilt-free)  
✅ Increase energy without caffeine crash  
✅ Made in India  
✅ 100% recyclable bottles  
✅ Caffeine-free energy drinks focused on hydration and mood support

SHIPPING & ORDERING:
- Free shipping on all orders (limited time)
- 10-15 working days delivery
- Prepaid orders only
- Tax included in price, shipping calculated at checkout

CELEBRITY ENDORSEMENTS:
> **Ashish Chanchlani**: "Fokus—naam hi nahi, ek vibe hai!" 🎬  
> **Scout (Tammay)**: Proud to be among the first to try and biggest fan 🎮  
> **Purav Jha**: Uses it from gym to shoots 💪  
> **Aditya Rikhari**: Regular user and fan ⭐

Always be friendly, helpful, and enthusiastic about Fokus products. Use a casual, energetic tone that matches the brand's vibe.
`;

// Custom components for markdown rendering
const MarkdownComponents = {
  // Handle inline vs block code
  code: ({ inline, children, ...props }) =>
    inline ? (
      <code {...props}>{children}</code>
    ) : (
      <pre>
        <code {...props}>{children}</code>
      </pre>
    ),
};

// Message component for better rendering
const MessageContent = ({ message }) => {
  if (message.isBot) {
    return (
      <div className="chatbot-markdown">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {message.text}
        </ReactMarkdown>
      </div>
    );
  }

  return <p className="text-sm leading-relaxed">{message.text}</p>;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your **Fokus assistant**.\n\nI can help you with:\n- **Product information** & ingredients\n- **Ordering** & shipping details\n- **Nutritional benefits** & usage\n- **General questions** about Fokus\n\nHow can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [genAI, setGenAI] = useState(null);

  // Initialize Gemini AI
  useEffect(() => {
    // You need to set your Gemini API key here
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    if (API_KEY) {
      const ai = new GoogleGenerativeAI(API_KEY);
      setGenAI(ai);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage) => {
    if (!genAI) {
      return "Sorry, I'm having trouble connecting right now. Please try again later or contact our support team directly.";
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `${COMPANY_CONTEXT}

User Question: ${userMessage}

Please provide a helpful, friendly response focused on Fokus products and services. If the question is not related to Fokus, politely redirect to Fokus-related topics.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating response:", error);
      return "I'm having trouble processing your request right now. Please try asking again, or contact our support team for immediate assistance!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const botResponse = await generateResponse(inputMessage);

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Oops! Something went wrong. Please try again or contact our support team for help with your Fokus questions! 😊",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-[#94DA49] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
          isOpen ? "hidden" : "block"
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <FaRobot size={24} />
        <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          !
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden backdrop-blur-sm"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 text-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#94DA49] p-2 rounded-full">
                  <FaRobot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fokus Assistant</h3>
                  <p className="text-xs text-gray-500">
                    Here to help you #GetFokus
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl transition-all duration-200 hover:shadow-md cursor-default ${
                      message.isBot
                        ? "bg-white text-gray-800 border border-gray-200 shadow-sm hover:border-gray-300"
                        : "bg-[#94DA49] text-white shadow-sm hover:bg-[#7bc143]"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot ? (
                        <div className="bg-[#94DA49] p-1 rounded-full flex-shrink-0 mt-1">
                          <FaRobot className="text-white" size={10} />
                        </div>
                      ) : (
                        <div className="bg-white bg-opacity-20 p-1 rounded-full flex-shrink-0 mt-1">
                          <FaUser className="text-white" size={10} />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <MessageContent message={message} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-2">
                    <div className="bg-[#94DA49] p-1 rounded-full">
                      <FaRobot className="text-white" size={10} />
                    </div>
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-[#94DA49] rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-300 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question here..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#94DA49] focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors cursor-text"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#94DA49] hover:bg-[#7bc143] text-white p-3 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm hover:shadow-md"
                >
                  <FaPaperPlane size={16} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center flex items-center justify-center space-x-1">
                <span>•</span>
                <span>Powered by AI</span>
                <span>•</span>
                <span>Fokus Customer Assistant</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

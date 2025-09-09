import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import { useChat } from '@/hooks/use-chat';

// Format message content with basic markdown-like formatting
const formatMessageContent = (content: string) => {
  return content
    .split('\n')
    .map((line, index) => {
      // Handle bullet points
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 my-1">
            <span className="text-red-400 mt-1">•</span>
            <span className="flex-1">{line.trim().substring(1).trim()}</span>
          </div>
        );
      }
      // Handle bold text (**text**)
      if (line.includes('**')) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <div key={index} className="my-1">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIndex} className="font-semibold text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={partIndex}>{part}</span>;
            })}
          </div>
        );
      }
      // Handle emojis and regular text
      return (
        <div key={index} className="my-1">
          {line}
        </div>
      );
    });
};

const FloatingAiAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 2000;
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, isLoading, webhookStatus, sendMessage } = useChat();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setMessage(value);
      setCharCount(value.length);
    }
  };

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const messageToSend = message.trim();
      setMessage('');
      setCharCount(0);
      await sendMessage(messageToSend);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [messages, isLoading]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        // Check if the click is not on the floating button
        if (!(event.target as Element).closest('.floating-ai-button')) {
          setIsChatOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating 3D Glowing AI Logo */}
              <button 
                className={`floating-ai-button relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                  isChatOpen ? 'rotate-90' : 'rotate-0'
                }`}
                onClick={() => setIsChatOpen(!isChatOpen)}
                style={{
                  background: 'linear-gradient(135deg, hsl(141, 76%, 59%, 0.9) 0%, hsl(141, 76%, 49%, 0.9) 100%)',
                  boxShadow: '0 0 20px hsla(141, 76%, 59%, 0.7), 0 0 40px hsla(141, 76%, 59%, 0.5), 0 0 60px hsla(141, 76%, 59%, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
        {/* 3D effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-30"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
        
        {/* AI Icon */}
        <div className="relative z-10">
        { isChatOpen ? <X className="w-8 h-8 text-white" /> :  <Bot className="w-8 h-8 text-white" />}
        </div>
        
                {/* Glowing animation */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'hsl(141, 76%, 59%)' }}></div>
      </button>

      {/* Chat Interface */}
      {isChatOpen && (
        <div 
          ref={chatRef}
          className="absolute bottom-20 right-0 w-max max-w-[500px] transition-all duration-300 origin-bottom-right"
          style={{
            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          }}
        >
          <div className="relative flex flex-col rounded-3xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 border border-zinc-500/50 shadow-2xl backdrop-blur-3xl overflow-hidden h-[500px] w-[400px]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2">
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  webhookStatus === 'connected' ? 'bg-green-500' : 
                  webhookStatus === 'disconnected' ? 'bg-yellow-500' : 
                  'bg-gray-500'
                }`}></div>
                <span className="text-xs font-medium text-zinc-400">
                  LoopZen AI Assistant
                  {webhookStatus === 'disconnected' && (
                    <span className="text-yellow-400 ml-1">(Offline Mode)</span>
                  )}
                </span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 rounded-full hover:bg-zinc-700/50 transition-colors"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 min-h-0 scrollbar-thin scrollbar-thumb-zinc-600/50 scrollbar-track-transparent hover:scrollbar-thumb-zinc-500/70" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              margin: '8px',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl ${
                      msg.isUser
                        ? 'text-white'
                        : 'text-zinc-100'
                    }`}
                    style={msg.isUser ? {
                      background: 'linear-gradient(135deg, hsla(141, 76%, 59%, 0.8) 0%, hsla(141, 76%, 49%, 0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px hsla(141, 76%, 59%, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    } : {
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {formatMessageContent(msg.content)}
                    </div>
                    <div className="text-xs opacity-70 mt-1 flex justify-end">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div 
                    className="text-zinc-100 px-3 py-2 rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(141, 76%, 59%)' }}></div>
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(141, 76%, 59%)', animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(141, 76%, 59%)', animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-zinc-300">Pixl is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="relative overflow-hidden border-t border-zinc-700/50">
              <textarea
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows={2}
                className="w-full px-4 py-3 bg-transparent border-none outline-none resize-none text-sm font-normal leading-relaxed text-zinc-100 placeholder-zinc-500 scrollbar-none"
                placeholder="Tell us what you need—LoopZen's here to build it for you."
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  minHeight: '40px',
                  maxHeight: '80px'
                }}
                disabled={isLoading}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-zinc-800/5 to-transparent pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(39, 39, 42, 0.05), transparent)' }}
              ></div>
            </div>

            {/* Controls Section */}
            <div className="px-4 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Character Counter */}
                  <div className="text-xs font-medium text-zinc-500">
                    <span className={charCount > maxChars * 0.9 ? 'text-red-400' : ''}>{charCount}</span>/<span className="text-zinc-400">{maxChars}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Send Button */}
                  <button 
                    onClick={handleSend}
                    disabled={!message.trim() || isLoading}
                    className="group relative p-2.5 border-none rounded-xl cursor-pointer transition-all duration-300 text-white shadow-lg hover:scale-110 hover:shadow-xl active:scale-95 transform hover:-rotate-2 hover:animate-pulse disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0"
                    style={{
                      background: 'linear-gradient(135deg, hsl(141, 76%, 59%) 0%, hsl(141, 76%, 49%) 100%)',
                      boxShadow: '0 10px 15px -3px hsla(141, 76%, 59%, 0.3), 0 0 0 0 hsla(141, 76%, 59%, 0.4)',
                      animation: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.animation = 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = 'none';
                    }}
                  >
                    <Send className="w-4 h-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110" />
                    
                    {/* Animated background glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg transform scale-110"
                      style={{
                        background: 'linear-gradient(135deg, hsl(141, 76%, 59%) 0%, hsl(141, 76%, 49%) 100%)'
                      }}
                    ></div>
                    
                    {/* Ripple effect on click */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-200 rounded-xl"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex items-center justify-center mt-3 pt-3 border-t border-zinc-800/50 text-xs text-zinc-500">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>

            {/* Floating Overlay */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ 
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), transparent, rgba(147, 51, 234, 0.05))' 
              }}
            ></div>
          </div>
        </div>
      )}
      
      {/* CSS for animations */}
              <style jsx>{`
                @keyframes popIn {
                  0% {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                  }
                  100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }
                
                @keyframes ping {
                  75%, 100% {
                    transform: scale(1.1);
                    opacity: 0;
                  }
                }
                
                .floating-ai-button:hover {
                  transform: scale(1.1) rotate(5deg);
                  box-shadow: 0 0 30px hsla(141, 76%, 59%, 0.9), 0 0 50px hsla(141, 76%, 59%, 0.7), 0 0 70px hsla(141, 76%, 59%, 0.5);
                }
                
                /* Glassmorphism scrollbar */
                .scrollbar-thin::-webkit-scrollbar {
                  width: 6px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-track {
                  background: transparent;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 10px;
                  backdrop-filter: blur(10px);
                  border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.3);
                }
                
                .scrollbar-thin {
                  scrollbar-width: thin;
                  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                }
              `}</style>
    </div>
  );
};

export { FloatingAiAssistant };

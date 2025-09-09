import React, { useState, useCallback, useRef } from "react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const WEBHOOK_URL = "https://n8n.01.server.loopzen.in/webhook/0ee9c706-3eb2-4238-8ce8-55ee8cd27df2/chat";

// Fallback responses for when webhook is not available
const getFallbackResponse = (content: string): string => {
  const lowerContent = content.toLowerCase();
  
  if (lowerContent.includes('hello') || lowerContent.includes('hi') || lowerContent.includes('hey')) {
    return "Hello! Welcome to LoopZen Digital! I'm Pixl, your AI assistant. We're your digital dream team specializing in website design, automation, and AI integration. How can I help you today?";
  }
  
  if (lowerContent.includes('service') || lowerContent.includes('website') || lowerContent.includes('what do you do')) {
    return "Great question! We specialize in:\n\n🎨 **Website Design** - High-converting, modern websites\n🤖 **Automation** - Streamline your business processes\n⚡ **AI Integration** - Smart solutions for your business\n📈 **Digital Strategy** - Data-driven growth\n\nWhich service interests you most?";
  }
  
  if (lowerContent.includes('quote') || lowerContent.includes('price') || lowerContent.includes('cost')) {
    return "I'd love to help you get a personalized quote! To give you the most accurate pricing, I'll need to understand your project better. Could you tell me:\n\n• What type of project are you looking for?\n• What's your timeline?\n• Any specific requirements?\n\nYou can also reach us directly at sales@loopzen.in for detailed pricing!";
  }
  
  if (lowerContent.includes('contact') || lowerContent.includes('email') || lowerContent.includes('phone')) {
    return "You can reach us through multiple channels:\n\n📧 **Email**: sales@loopzen.in\n🌐 **Website**: agency.loopzen.in\n📞 **Phone**: +91 93426 93675\n\nWe're always excited to discuss new projects and help bring your digital vision to life!";
  }
  
  if (lowerContent.includes('help') || lowerContent.includes('support')) {
    return "I'm here to help! I can assist you with:\n\n• Information about our services\n• Getting quotes and pricing\n• Project consultations\n• Connecting you with our team\n• Answering questions about our work\n\nWhat would you like to know more about?";
  }
  
  if (lowerContent.includes('portfolio') || lowerContent.includes('work') || lowerContent.includes('examples')) {
    return "We've worked with amazing clients across various industries! Our portfolio includes:\n\n• E-commerce websites with increased conversions\n• SaaS platforms with modern UX\n• Corporate websites with professional design\n• Automation solutions that save time\n\nWould you like to see specific examples or discuss your project requirements?";
  }
  
  if (lowerContent.includes('time') || lowerContent.includes('how long') || lowerContent.includes('duration')) {
    return "Project timelines vary based on complexity, but here's a general guide:\n\n• **Simple websites**: 2-4 weeks\n• **Complex websites**: 6-12 weeks\n• **Automation projects**: 1-3 months\n• **AI integrations**: 2-6 weeks\n\nWe always provide detailed timelines during our consultation. Would you like to discuss your specific project?";
  }
  
  // Default response
  return "Thanks for your message! I'm Pixl from LoopZen Digital, and I'm here to help you with all things digital. Whether you need a new website, automation solutions, or AI integration, I can connect you with our expert team. What can I help you with today?";
};

// Initial welcome message from LoopZen
const INITIAL_MESSAGE: Message = {
  id: "welcome_msg",
  content: "Hey there! 👋 Welcome to LoopZen Digital! I'm Pixl, your AI assistant. We're your digital dream team - we design dope websites, automate boring stuff, and plug in AI magic, all wrapped in sleek futuristic vibes. How can I help you today?",
  isUser: false,
  timestamp: new Date(),
};

// Test webhook connection
const testWebhookConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: true, message: 'Connection test' }),
    });
    return response.ok;
  } catch (error) {
    console.error('Webhook test failed:', error);
    return false;
  }
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<'unknown' | 'connected' | 'disconnected'>('unknown');
  const isProcessingRef = useRef(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading || isProcessingRef.current) return;
    
    isProcessingRef.current = true;

    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log('Sending message to webhook:', { message: content });
      
      // Try different webhook formats
      const webhookPayloads = [
        // Format 1: Simple message
        {
          url: WEBHOOK_URL,
          body: { message: content }
        },
        // Format 2: With additional data
        {
          url: WEBHOOK_URL,
          body: {
            message: content,
            timestamp: new Date().toISOString(),
            userId: 'user_' + Date.now(),
            source: 'loopzen_chat'
          }
        },
        // Format 3: Alternative field names
        {
          url: WEBHOOK_URL,
          body: {
            text: content,
            user_message: content,
            query: content
          }
        }
      ];

      let response = null;
      let lastError = null;

      // Try each format until one works
      for (const payload of webhookPayloads) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

          response = await fetch(payload.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            mode: 'cors',
            body: JSON.stringify(payload.body),
            signal: controller.signal
          });

          clearTimeout(timeoutId);
          console.log('Webhook response status:', response.status);

          if (response.ok) {
            break; // Success, exit the loop
          }
        } catch (error) {
          console.warn('Webhook attempt failed:', error);
          lastError = error;
          continue; // Try next format
        }
      }

      let botResponse = "Thanks for reaching out! I'm Pixl from LoopZen Digital. Let me help you with that!";

      if (response && response.ok) {
        try {
          const data = await response.json();
          console.log('Webhook response data:', data);
          botResponse = data.output || data.response || data.message || data.reply || data.text || data.answer || botResponse;
        } catch (parseError) {
          console.warn('Failed to parse response JSON:', parseError);
          // Use fallback response
        }
      } else {
        console.warn('All webhook attempts failed, using intelligent fallback response');
        botResponse = getFallbackResponse(content);
      }
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Chat error:', error);
      
      // Provide helpful fallback response based on error type
      let fallbackResponse = "I'm experiencing some technical difficulties right now. ";
      
      if (error.name === 'AbortError') {
        fallbackResponse += "The request timed out. ";
      } else if (error.message?.includes('CORS')) {
        fallbackResponse += "There's a connection issue. ";
      }
      
      fallbackResponse += "In the meantime, feel free to reach out to us directly at sales@loopzen.in or visit agency.loopzen.in. Our team is always ready to help!";
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Issue",
        description: "Having trouble connecting. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      isProcessingRef.current = false;
    }
  }, []);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  // Test webhook on first load
  React.useEffect(() => {
    testWebhookConnection().then(isConnected => {
      setWebhookStatus(isConnected ? 'connected' : 'disconnected');
    });
  }, []);

  return {
    messages,
    isLoading,
    webhookStatus,
    sendMessage,
    clearChat,
  };
};

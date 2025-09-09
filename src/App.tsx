import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingAiAssistant } from "@/components/ui/glowing-ai-chat-assistant";
// Alternative import in case of issues
// import FloatingAiAssistant from "@/components/ui/glowing-ai-chat-assistant";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import ContactPage from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering, adding FloatingAiAssistant');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <FloatingAiAssistant />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

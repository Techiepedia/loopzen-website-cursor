import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ delay: 200 });

  return (
    <section className="py-20 bg-background animate-60fps" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as any}
            className={`text-4xl md:text-5xl font-bold mb-4 text-white scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            Get in Touch
          </h2>
          <p 
            className={`text-xl text-muted-foreground scroll-reveal ${titleVisible ? 'revealed' : ''}`}
          >
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>
        
        <div 
          ref={contentRef as any}
          className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-12 scroll-reveal ${contentVisible ? 'revealed' : ''}`}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="border border-primary/20 rounded-lg p-3 w-fit">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-muted-foreground">+91 93426 93675</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="border border-primary/20 rounded-lg p-3 w-fit">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-muted-foreground">sales@loopzen.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="border border-primary/20 rounded-lg p-3 w-fit">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Website</h3>
                  <p className="text-muted-foreground">https://loopzen.in</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation call and let's discuss how LoopZen can help transform your digital presence.
              </p>
              <div className="space-y-4">
                <a href="/booking" className="block">
                  <Button 
                    size="lg" 
                    className="w-full gradient-bg hover-glow text-lg py-3"
                  >
                    Book a Free Consultation
                  </Button>
                </a>
                <a href="mailto:sales@loopzen.in" className="block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-primary/20 hover:bg-primary/10 text-lg py-3"
                  >
                    Send us an Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
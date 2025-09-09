import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: descRef, isVisible: descVisible } = useScrollReveal({ delay: 200 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollReveal({ delay: 400 });

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 animate-60fps">
      <div className="container mx-auto px-6 text-center">
        <h1 
          ref={titleRef as any}
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          We build websites that turn{" "}
          <span className="gradient-text">visitors into paying customers</span>
        </h1>
        <p 
          ref={descRef as any}
          className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed scroll-reveal ${descVisible ? 'revealed' : ''}`}
        >
          High-converting websites designed with strategic copy and seamless development 
          to attract ready-to-buy customers—helping brands worldwide turn visitors into 
          loyal clients and drive growth.
        </p>
        <div ref={buttonRef as any} className={`scroll-reveal-scale ${buttonVisible ? 'revealed' : ''}`}>
          <a href="/booking">
            <Button 
              size="lg" 
              className="gradient-bg hover-glow text-lg px-8 py-4 rounded-full"
            >
              Book a Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
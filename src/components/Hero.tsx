import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

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
          LoopZen makes websites that {" "}
          <span className="gradient-text text-glow">turn scrolls into sales</span>
        </h1>
        <p 
          ref={descRef as any}
          className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed scroll-reveal ${descVisible ? 'revealed' : ''}`}
        >
          No boring sites. No dead vibes. Just bold, high-converting designs + smart strategies that grab attention, hook visitors, and keep the cash flowin’.
        </p>
        <div ref={buttonRef as any} className={`scroll-reveal-scale ${buttonVisible ? 'revealed' : ''}`}>
          <Link to="/booking">
            <Button 
              size="lg" 
              className="gradient-bg hover-glow text-lg px-8 py-4 rounded-full"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
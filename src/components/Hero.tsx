import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We build websites that turn{" "}
          <span className="gradient-text">visitors into paying customers</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          High-converting websites designed with strategic copy and seamless development 
          to attract ready-to-buy customers—helping brands worldwide turn visitors into 
          loyal clients and drive growth.
        </p>
        <Button 
          size="lg" 
          className="gradient-bg hover-glow text-lg px-8 py-4 rounded-full"
        >
          Book a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
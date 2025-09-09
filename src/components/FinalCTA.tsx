import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to level up your <span className="gradient-text">business?</span>
        </h2>
        <Link to="/booking">
          <Button 
            size="lg" 
            className="gradient-bg hover-glow text-lg px-10 py-6 rounded-full shadow-glow"
          >
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
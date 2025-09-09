import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          Loopzen
        </div>
        <Button variant="default" className="gradient-bg hover-glow">
          Book a Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
import { Grid3X3, Zap, Puzzle, Monitor, Users, Infinity } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Grid3X3 className="w-12 h-12 text-primary" />,
      title: "Responsive Design",
      description: "Flawless experiences across all devices and screen sizes."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Lightning Fast", 
      description: "Optimized code for speedy load times and smooth interactions."
    },
    {
      icon: <Puzzle className="w-12 h-12 text-primary" />,
      title: "Custom Solutions",
      description: "Tailor-made frontend solutions to match your unique requirements."
    },
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "Modern Frameworks",
      description: "Expertise in Figma & Framer."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Collaborative Approach", 
      description: "We work closely with your team for seamless integration."
    },
    {
      icon: <Infinity className="w-12 h-12 text-primary" />,
      title: "Ongoing Support",
      description: "Continuous maintenance and updates to keep your frontend fresh."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Benefits
          </h2>
          <p className="text-2xl md:text-3xl font-bold gradient-text">We run behind results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-left space-y-4">
              <div className="border border-primary/20 rounded-lg p-4 w-fit">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
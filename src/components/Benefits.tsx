import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Responsive Design",
      description: "Flawless experiences across all devices and screen sizes."
    },
    {
      title: "Lightning Fast",
      description: "Optimized code for speedy load times and smooth interactions."
    },
    {
      title: "Custom Solutions",
      description: "Tailor-made frontend solutions to match your unique requirements."
    },
    {
      title: "Modern Frameworks",
      description: "Expertise in Figma & Framer."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with your team for seamless integration."
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance and updates to keep your frontend fresh."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground">We run behind results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="gradient-card border-border hover-glow">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Plans = () => {
  const plans = [
    {
      title: "Landing Page",
      description: "One high-converting page, designed & built fast.",
      features: [
        "Custom design in Figma",
        "Built in Framer (mobile-optimized & fast-loading)",
        "3 rounds of revisions",
        "Delivered in 7-10 days",
        "Flat price. No retainers. No surprises."
      ],
      perfectFor: "campaigns, product launches, or quick marketing needs."
    },
    {
      title: "Website",
      description: "Multi-page marketing site, handled end-to-end.",
      features: [
        "Figma design for up to 5 pages",
        "Full Framer development",
        "Mobile-first & blazing fast",
        "3 rounds of revisions",
        "Delivered in 15-20 days",
        "SEO-ready, custom interactions, smooth UX"
      ],
      perfectFor: "startups or brands needing a polished presence, fast."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground">Built for teams that need fast execution.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="gradient-card border-border hover-glow relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl gradient-text mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Perfect for:</span> {plan.perfectFor}
                  </p>
                  <Button className="w-full gradient-bg hover-glow">
                    Start Your Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
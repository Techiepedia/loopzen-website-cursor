import { Pricing } from "@/components/ui/pricing";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Plans = () => {
  const plans = [
    {
      name: "STARTER",
      price: "15000",
      yearlyPrice: "12000",
      period: "month",
      features: [
        "Perfect for small businesses & startups",
        "Responsive website (up to 5 pages)",
        "Basic SEO setup",
        "1 monthly marketing campaign",
        "Email support"
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Start Your Project",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "GROWTH",
      price: "35000", 
      yearlyPrice: "28000",
      period: "month",
      features: [
        "For scaling businesses",
        "Website (up to 12 pages + blog)",
        "Advanced SEO + Analytics",
        "Social media management (2 platforms)",
        "3 monthly marketing campaigns",
        "Priority support"
      ],
      description: "Ideal for growing teams and businesses",
      buttonText: "Start Your Project",
      href: "#contact",
      isPopular: true,
    },
    {
      name: "PRO",
      price: "65000",
      yearlyPrice: "52000", 
      period: "month",
      features: [
        "Designed for enterprises & brands",
        "Custom website/web app with integrations",
        "Full SEO & performance optimization",
        "Social media management (4 platforms)",
        "Unlimited campaigns & strategy sessions",
        "Dedicated account manager"
      ],
      description: "For large organizations with specific needs",
      buttonText: "Start Your Project", 
      href: "#contact",
      isPopular: false,
    }
  ];

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  return (
    <section 
      ref={sectionRef as any}
      className={`py-20 animate-60fps scroll-reveal ${sectionVisible ? 'revealed' : ''}`}
    >
      <Pricing 
        plans={plans}
        title="Plans"
        description="Built for teams that need fast execution."
      />
    </section>
  );
};

export default Plans;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does LoopZen provide?",
      answer: "LoopZen offers digital marketing, web development, branding, automation workflows, and AI-powered solutions to help businesses scale efficiently."
    },
    {
      question: "How long does it take to deliver a project?",
      answer: "Timelines vary depending on scope. A standard website project usually takes 3–6 weeks, while marketing campaigns can start showing results within the first month."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! LoopZen offers continuous support and maintenance packages, ensuring your digital presence stays optimized."
    },
    {
      question: "Can LoopZen handle custom requests?",
      answer: "Absolutely. We specialize in tailored solutions—whether it's a complex automation workflow, a unique website feature, or a specialized campaign."
    },
    {
      question: "How do I get started with LoopZen?",
      answer: "Simply reach out to us via our website agency.loopzen.in or email us at sales@loopzen.in. We'll schedule a quick discovery call to understand your needs."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground">We got answers.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="gradient-card border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
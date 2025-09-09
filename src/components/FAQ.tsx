import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in creating high-converting websites and landing pages using modern design tools like Figma and Framer. Our services include custom web design, development, responsive optimization, and ongoing support."
    },
    {
      question: "How long does the website design process take?",
      answer: "For landing pages, we deliver in 7-10 days. For full websites (up to 5 pages), the process takes 15-20 days. This includes design, development, revisions, and final delivery."
    },
    {
      question: "Will I be involved in the design process?",
      answer: "Absolutely! We work collaboratively with you throughout the entire process. You'll receive regular updates, and we include 3 rounds of revisions to ensure the final product meets your vision and requirements."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer continuous maintenance and updates to keep your website fresh and performing optimally. We're here to support you beyond the initial launch with technical assistance and improvements."
    },
    {
      question: "Can you help with SEO?",
      answer: "Yes! All our websites are built with SEO best practices in mind. We ensure your site is optimized for search engines with proper structure, fast loading times, and SEO-ready code to help improve your online visibility."
    },
    {
      question: "Do you offer refunds?",
      answer: "We stand behind our work and are committed to your satisfaction. If you're not happy with our service, we'll work with you to make it right. Contact us to discuss specific situations and our refund policy."
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
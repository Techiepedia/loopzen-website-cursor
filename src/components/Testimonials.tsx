import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO, Innovate Inc.",
      quote: "Loopzen delivered a stunning website that boosted our sales by 40%. Their team is professional, creative, and incredibly efficient."
    },
    {
      name: "John Smith",
      title: "CTO, QuantumLeap",
      quote: "The user experience on our new dashboard is phenomenal. Working with Loopzen was a seamless process from start to finish."
    },
    {
      name: "Emily White",
      title: "Marketing Head, Stellar Solutions",
      quote: "Our new brand site perfectly captures our identity. The feedback from our customers has been overwhelmingly positive."
    },
    {
      name: "Michael Brown",
      title: "Founder, Apex Digital",
      quote: "Loopzen's design team is top-notch. They understood our vision and created a product that exceeded all our expectations."
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16">Hear from our clients</p>
        
        <div className="relative">
          <div className="flex space-x-6 scroll-left">
            {scrollingTestimonials.map((testimonial, index) => (
              <Card key={index} className="min-w-[400px] gradient-card border-border">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-left">
                    <p className="font-semibold gradient-text">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
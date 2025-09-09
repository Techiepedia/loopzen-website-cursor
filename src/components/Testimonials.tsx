import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "LoopZen completely transformed our online presence. Within weeks, our engagement shot up and clients loved the sleek design.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Green",
    role: "Founder, BrightPath Consulting"
  },
  {
    text: "Their automation workflows saved us countless hours. The LoopZen team knows exactly how to blend creativity with functionality.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Mendoza",
    role: "COO, NextWave Tech"
  },
  {
    text: "From branding to web development, LoopZen was our one-stop solution. Professional, fast, and super reliable.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Marketing Director, Zenith Global"
  },
  {
    text: "The creativity they bring to the table is unmatched. Our digital campaigns now stand out in a crowded market.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
    name: "Alex Turner",
    role: "Head of Growth, SkyBridge Media"
  },
  {
    text: "LoopZen is not just a service provider, they're a partner. Their insights helped us scale smarter and faster.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    name: "Hannah Lee",
    role: "CEO, Nova Ventures"
  }
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 5);

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: columnsRef, isVisible: columnsVisible } = useScrollReveal({ delay: 300 });

  return (
    <section className="bg-background my-20 relative animate-60fps">
      <div className="container z-10 mx-auto">
        <div
          ref={titleRef as any}
          className={`flex flex-col items-center justify-center max-w-[540px] mx-auto scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          <div className="flex justify-center">
            <div className="border py-2 px-6 rounded-lg gradient-text border-primary/30 bg-primary/10">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            <span className="gradient-text">What our clients say</span>
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </div>

        <div 
          ref={columnsRef as any}
          className={`flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden scroll-reveal ${columnsVisible ? 'revealed' : ''}`}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
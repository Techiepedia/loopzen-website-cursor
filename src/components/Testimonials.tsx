import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "LoopZen revamped our website and leads from Bengaluru nearly doubled within a month.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ananya Rao",
    role: "Founder, Namma Fitness (Bengaluru, Karnataka)"
  },
  {
    text: "Our clinic in Kochi gets more appointment bookings after LoopZen's UX tweaks and SEO.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
    name: "Dr. Arun Menon",
    role: "Director, Coastal Care Clinic (Kochi, Kerala)"
  },
  {
    text: "The new landing pages speak our brand. Conversions from Chennai ads improved significantly.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    name: "Divya Subramanian",
    role: "CMO, BayLeaf Retail (Chennai, Tamil Nadu)"
  },
  {
    text: "Super fast delivery and clean code. Our SaaS sign‑ups from Hyderabad are up 42%.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    name: "Rahul Reddy",
    role: "Product Lead, CloudNexa (Hyderabad, Telangana)"
  },
  {
    text: "From copy to visuals, everything feels premium. Vizag customers spend more time on our store now.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    name: "Neha Verma",
    role: "Owner, Shoreline Decor (Visakhapatnam, Andhra Pradesh)"
  },
  {
    text: "LoopZen automated our enquiry flows. Our Madurai team saves hours every week.",
    image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=150&h=150&fit=crop&crop=face",
    name: "S. Karthik",
    role: "Operations, SouthCot Textiles (Madurai, Tamil Nadu)"
  },
  {
    text: "The brand system is consistent across pages. Clients from Mangalore appreciate the clarity.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    name: "Meera Pai",
    role: "Partner, Coastal Legal (Mangaluru, Karnataka)"
  },
  {
    text: "Great collaboration. Mobile performance scores improved and bounce rates dropped in Coimbatore.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    name: "Vignesh Kumar",
    role: "Founder, AeroParts Hub (Coimbatore, Tamil Nadu)"
  },
  {
    text: "Our boutique cafe in Trivandrum gets steady reservations after the redesign.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=face",
    name: "Anjali Nair",
    role: "Owner, PepperLeaf Cafe (Thiruvananthapuram, Kerala)"
  },
  {
    text: "B2B leads from Vijayawada finally look qualified. The new funnel is working.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    name: "Harsha Vardhan",
    role: "Director, AgroLink Exports (Vijayawada, Andhra Pradesh)"
  },
  {
    text: "We appreciate the attention to accessibility. Our EdTech usage improved in Mysuru.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face",
    name: "Keerthi Prasad",
    role: "CEO, LearnSphere (Mysuru, Karnataka)"
  },
  {
    text: "The checkout flow feels effortless now. Orders from Salem customers are up week over week.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Saranya M",
    role: "E‑commerce Lead, SoftWeave (Salem, Tamil Nadu)"
  }
];

// Distribute testimonials across three columns (round-robin) for balance
const firstColumn = testimonials.filter((_, idx) => idx % 3 === 0);
const secondColumn = testimonials.filter((_, idx) => idx % 3 === 1);
const thirdColumn = testimonials.filter((_, idx) => idx % 3 === 2);

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
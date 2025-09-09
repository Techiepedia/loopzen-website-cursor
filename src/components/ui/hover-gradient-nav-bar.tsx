'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Calendar, Info, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

// --- HoverGradientNavBar Component ---

interface HoverGradientMenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: HoverGradientMenuItem[] = [
  { icon: <Home className="h-5 w-5" />, label: "Home", href: "/", gradient: "radial-gradient(circle, rgba(83,211,100,0.15) 0%, rgba(83,211,100,0.06) 50%, rgba(83,211,100,0) 100%)", iconColor: "group-hover:text-primary" },
  { icon: <Calendar className="h-5 w-5" />, label: "Book Meeting", href: "/booking", gradient: "radial-gradient(circle, rgba(83,211,100,0.15) 0%, rgba(83,211,100,0.06) 50%, rgba(83,211,100,0) 100%)", iconColor: "group-hover:text-primary" },
  { icon: <Info className="h-5 w-5" />, label: "About", href: "#benefits", gradient: "radial-gradient(circle, rgba(83,211,100,0.15) 0%, rgba(83,211,100,0.06) 50%, rgba(83,211,100,0) 100%)", iconColor: "group-hover:text-primary" },
  { icon: <Mail className="h-5 w-5" />, label: "Contact", href: "#contact", gradient: "radial-gradient(circle, rgba(83,211,100,0.15) 0%, rgba(83,211,100,0.06) 50%, rgba(83,211,100,0) 100%)", iconColor: "group-hover:text-primary" },
];

// Animation variants
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function HoverGradientNavBar(): React.JSX.Element {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        className="w-full md:w-fit mx-auto px-2 md:px-4 py-2 md:py-3 rounded-none md:rounded-3xl 
        bg-white/10 dark:bg-black/80 backdrop-blur-lg 
        border-t md:border border-gray-200/20 dark:border-gray-800/80 
        shadow-lg md:shadow-xl relative"
        initial="initial"
        whileHover="hover"
      >
        <ul className="flex items-center justify-around md:justify-center gap-1 md:gap-3 relative z-10">
          {menuItems.map((item: HoverGradientMenuItem) => (
            <motion.li key={item.label} className="relative flex-1 md:flex-none">
              <motion.div
                className="block rounded-xl md:rounded-2xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Per-item glow */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-xl md:rounded-2xl"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                  }}
                />
                {/* Front-facing */}
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 
                  px-2 py-1.5 md:px-4 md:py-2 relative z-10 
                  bg-transparent text-gray-300 dark:text-gray-300 
                  group-hover:text-white dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs md:text-sm"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom"
                  }}
                >
                  {item.href.startsWith('#') ? (
                    <ScrollLink
                      to={item.href.substring(1)}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="hidden md:inline font-medium">{item.label}</span>
                    </ScrollLink>
                  ) : (
                    <RouterLink to={item.href} className="flex items-center gap-2">
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="hidden md:inline font-medium">{item.label}</span>
                    </RouterLink>
                  )}
                </motion.div>
                {/* Back-facing */}
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 
                  px-2 py-1.5 md:px-4 md:py-2 absolute inset-0 z-10 
                  bg-transparent text-gray-300 dark:text-gray-300 
                  group-hover:text-white dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs md:text-sm"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)"
                  }}
                >
                  {item.href.startsWith('#') ? (
                    <ScrollLink
                      to={item.href.substring(1)}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="hidden md:inline font-medium">{item.label}</span>
                    </ScrollLink>
                  ) : (
                    <RouterLink to={item.href} className="flex items-center gap-2">
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="hidden md:inline font-medium">{item.label}</span>
                    </RouterLink>
                  )}
                </motion.div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}

export default HoverGradientNavBar;
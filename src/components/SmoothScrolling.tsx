import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    // Higher lerp = less smoothing, snappier feel
    lerp: 0.2,
    // Let Lenis compute duration dynamically for jumps (avoid sluggish feel)
    // duration removed
    // Enable smooth on touch but keep it responsive
    smoothTouch: true,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
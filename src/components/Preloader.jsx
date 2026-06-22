import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const chars = nameRef.current?.querySelectorAll(".char");
    if (!chars) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(root, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          delay: 0.15,
          onComplete,
        });
      },
    });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: "power3.out",
    }).to(chars, {
      opacity: 0,
      y: -20,
      stagger: 0.025,
      duration: 0.4,
      ease: "power2.in",
      delay: 0.3,
    });
  }, [onComplete]);

  const name = "Bharanikumar R";
  return (
    <div ref={rootRef} className="preloader">
      <p ref={nameRef} className="preloader-name" aria-hidden="true">
        {name.split("").map((ch, i) => (
          <span key={i} className="char" style={{ display: "inline-block" }}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </p>
    </div>
  );
}
import { useState, useEffect, useCallback } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader       from "./components/Preloader";
import Navbar          from "./components/Navbar";
import SectionTracker  from "./components/SectionTracker";
import ScrollProgress  from "./components/ScrollProgress";
import CustomCursor    from "./components/CustomCursor";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Projects        from "./components/Projects";
import Experience      from "./components/Experience";
import Skills          from "./components/Skills";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [ready, setReady] = useState(false);

  const handlePreloaderDone = useCallback(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    // Connect Lenis to GSAP ticker
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onComplete={handlePreloaderDone} />}

      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.4s ease",
          background: "rgb(10,10,10)",
          minHeight: "100vh",
        }}
      >
        <ScrollProgress />
        <CustomCursor />
        <SectionTracker />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
import { useEffect, useState } from "react";

function ScrollIndicator() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      { threshold: [0, 0.6, 1] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const goToNext = () => {
    const hero = document.getElementById("home");
    if (!hero) return;
    // try to find the next section element and scroll into view
    const next = hero.nextElementSibling;
    if (next) {
      setVisible(false); // animate out immediately
      try {
        next.scrollIntoView({ behavior: "smooth" });
      } catch (e) {
        window.scrollTo({ top: next.offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        onClick={goToNext}
        role="button"
        tabIndex={0}
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center transform transition-all duration-500 ${visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
        aria-hidden={!visible}
      >

        {/* TEXT */}
        <p className="text-[10px] tracking-[3px] uppercase text-white/70 mb-2 select-none">
          Scroll for More
        </p>

        {/* ARROW TIP */}
        <div className="animate-bounce">
          <div className="w-3 h-3 border-r border-b border-white/80 rotate-45"></div>
        </div>

      </div>
    </>
  );
}

export default ScrollIndicator;
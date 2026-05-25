import { useEffect, useState } from "react";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (
    <>

      {visible && (

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed
            bottom-5
            right-5
            md:bottom-7
            md:right-7
            z-50
            group
            flex
            items-center
            justify-center
            w-11
            h-11
            md:w-12
            md:h-12
            rounded-xl
            border
            border-white/10
            bg-white/[0.06]
            backdrop-blur-xl
            text-white/80
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            hover:bg-cyan-400
            hover:text-white
            hover:scale-105
            transition-all
            duration-300
          "
        >

          <span className="text-lg md:text-xl group-hover:-translate-y-[2px] transition duration-300">
            ↑
          </span>

        </button>

      )}

    </>
  );
}

export default BackToTop;
import { useEffect, useState } from "react";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 500) {
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
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-400 text-white w-14 h-14 rounded-2xl text-2xl shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:scale-110 transition duration-300"
        >
          ↑
        </button>

      )}

    </>
  );
}

export default BackToTop;
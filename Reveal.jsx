// reveal.jsx
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, controls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
            x: -20,
          },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 6,
              stiffness: 50,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

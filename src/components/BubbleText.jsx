import React from "react";
import styles from "./bubble.module.css";

const BubbleEffect = () => {
  return (
    <>
      <BubbleText />
    </>
  );
};

const BubbleText = () => {
  return (
    <h2 className=" block text-5xl font-bold  mb-1">
      {"Achieve Your Fitness Goals with Our Expert Trainers"
        .split("")
        .map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
    </h2>
  );
};

export default BubbleEffect;

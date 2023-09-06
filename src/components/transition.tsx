"use client";

import { motion } from "framer-motion";
import styles from "@/styles/transition.module.scss";
import { upAnimation, backgroundAnimation } from "@/utils/animation";

const Transition = () => {
  return (
    <>
      <motion.div
        className={styles.loader}
        variants={upAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        key="slide1"
      ></motion.div>

      <motion.div
        className={styles.background}
        variants={backgroundAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        key="slide2"
      ></motion.div>
    </>
  );
};

export default Transition;

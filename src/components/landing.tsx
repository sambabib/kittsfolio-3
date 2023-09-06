import React from "react";
import { motion } from "framer-motion";
import { landingAnimation } from "@/utils/animation";
import styles from "@/styles/landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className="overflow-hidden">
        <motion.span
          variants={landingAnimation}
          custom={1.2}
          initial="initial"
          animate="animate"
          className="text-8xl inline-block mr-2"
        >
          Frontend,
        </motion.span>
        <motion.span
          variants={landingAnimation}
          custom={1.4}
          initial="initial"
          animate="animate"
          className="text-8xl inline-block mr-2"
        >
          Backend
        </motion.span>
        <motion.span
          variants={landingAnimation}
          custom={1.6}
          initial="initial"
          animate="animate"
          className="text-8xl inline-block"
        >
          Developer
        </motion.span>
      </div>
    </div>
  );
};

export default Landing;

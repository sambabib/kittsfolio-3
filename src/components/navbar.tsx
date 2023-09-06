"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
import NavMenu from "./nav-menu";
import { dateFunction } from "@/utils/webutil";
import { navAnimation } from "@/utils/animation";
import styles from "@/styles/navbar.module.scss";

const Navbar = () => {
  const [timer, setTimer] = useState<string>("");
  let cx = classNames.bind(styles);

  const updateTime = useCallback(() => {
    setTimer(dateFunction());
  }, []);

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, [updateTime]);

  return (
    <motion.nav
      className={cx(
        styles.navbar,
        "flex flex-row justify-between items-center max-w-full px-12 py-8",
      )}
      variants={navAnimation}
      initial="initial"
      animate="animate"
    >
      <div className={styles.cover}>
        <span className="text-xs uppercase font-medium">Emmanuel Akala</span>
      </div>
      <div className="">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center">
            <span className={styles.available}></span>
            <span className="text-xs uppercase font-medium">Available</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-xs uppercase font-medium">
              Cheltenham, UK
            </span>
            <div className={styles.hyphen}></div>
            <span className="text-xs font-medium">{timer}</span>
          </div>
        </div>
      </div>
      <div className="">
        <NavMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;

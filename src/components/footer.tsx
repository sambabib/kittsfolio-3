'use client'

import React from "react";
import classNames from 'classnames/bind'
import { motion } from "framer-motion";
import styles from '@/styles/footer.module.scss'

const Footer = () => {
  let cx = classNames.bind(styles);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.2 }}
      className={cx(styles.footer, 'max-w-full px-12 py-8')}>
      <div className="flex flex-row justify-between pb-8">
        <div className="flex flex-row gap-8">
          <div className={styles.links}>
            <span className="text-xs uppercase">Social</span>
            <a className="text-xs uppercase" href="https://twitter.com/nautkitts" target='__blank'>Twitter</a>
          </div>
          <div className={styles.links}>
            <span className="text-xs uppercase">Send a Message</span>
            <a className="text-xs uppercase" href="mailto:adekyte@hotmail.com" target='__blank'>Email</a>
          </div>
          <div className={styles.links}>
            <span className="text-xs uppercase">Game face</span>
            <a className="text-xs uppercase" href="https://www.linkedin.com/in/adekite/" target='__blank'>LinkedIn</a>
          </div>
        </div>
        <div className="w-[30vw]">
          <motion.p
            className="text-sm"
          >
            I am a software developer based in the United Kingdom focusing on
            building production-ready enterprise applications.
          </motion.p>
        </div>
      </div>
      <div className={styles.footer_divider}></div>
      <div className="pt-8">
        <div className="flex flex-row items-center">
          <span className="text-xs uppercase font-medium">Emmanuel Akala</span>
          <div className={styles.hyphen}></div>
          <span className="text-xs">{new Date().getFullYear()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

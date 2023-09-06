"use client";

import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { AnimatePresence } from "framer-motion";
import { webContainer } from "@/utils/webutil";
import Transition from "./transition";
import styles from "@/styles/preloader.module.scss";

interface PreloaderProps {
  hasLoaded: boolean;
  setHasLoaded: Dispatch<SetStateAction<boolean>>;
}

const Preloader = ({ hasLoaded, setHasLoaded }: PreloaderProps) => {
  const [preloaderPercentage, setPreloaderPercentage] = useState<number>(0);

  const preloaderCountdown = useCallback(() => {
    setPreloaderPercentage((prevState) =>
      prevState < 100 ? prevState + 5 : 100,
    );
    if (preloaderPercentage === 100) {
      setHasLoaded(true);
    }
  }, [preloaderPercentage, setHasLoaded]);

  useEffect(() => {
    const preloaderInterval = setInterval(() => {
      preloaderCountdown();
    }, 100);

    return () => {
      clearInterval(preloaderInterval);
    };
  }, [preloaderCountdown]);

  return (
    <>
      {!hasLoaded && (
        <div
          className={`${webContainer} flex flex-col h-screen justify-between xs:px-8 lg:px-12 py-8`}
        >
          <div className="flex flex-row justify-center">
            <span className="text-xs flex flex-row items-center">
              <span className="inline-block">{preloaderPercentage}%</span>
            </span>
          </div>
          <section className="">
            <h3 className={styles.name}>Emmanuel Akala</h3>
            <span className="sm:text-lg lg:text-xl opacity-70">
              Frontend, Backend Software Developer.
            </span>
          </section>
        </div>
      )}
      {hasLoaded && (
        <AnimatePresence mode="wait">
          <Transition />
        </AnimatePresence>
      )}
    </>
  );
};

export default Preloader;

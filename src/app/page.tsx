"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { showComponentsAnimation } from "@/utils/animation";
import Preloader from "@/components/preloader";
import Landing from "@/components/landing";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  return (
    <div>
      <Preloader hasLoaded={hasLoaded} setHasLoaded={setHasLoaded} />
      {hasLoaded && (
        <motion.div
          variants={showComponentsAnimation}
          initial="initial"
          animate="animate"
        >
          <Landing />
        </motion.div>
      )}
    </div>
  );
}

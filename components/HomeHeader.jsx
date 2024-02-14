"use client";
import { motion } from "framer-motion";
const Animation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
    >
      HomeHeader
    </motion.div>
  );
};

export default Animation;

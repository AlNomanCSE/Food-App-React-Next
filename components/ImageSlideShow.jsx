"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import burgerImage from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizza from "@/assets/pizza.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomato_salad from "@/assets/tomato-salad.jpg";
import { useEffect, useState } from "react";
const images = [
  burgerImage,
  curry,
  dumplings,
  macncheese,
  pizza,
  schnitzel,
  tomato_salad,
];
const ImageSlideShow = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      nextSilde();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);
  function nextSilde() {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }
  function previousSilde() {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      return newIndex;
    });
  }
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Move to the center
          exit={{ opacity: 0, x: 100 }} // Exit to the left
          transition={{ duration: 1 }}
        >
          <Image
            src={images[index]}
            alt="Slideshow Image"
            width={300}
            style={{ borderRadius: "10px", boxShadow: "0 0 10px 5px yellow" }}
          />
        </motion.div>
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "-8.10%",
          width: "350px",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={previousSilde}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSilde}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideShow;

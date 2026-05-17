import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.div
      className="max-w-3xl h-screen overflow-y-scroll mx-auto px-4 sm:px-6 md:px-8 py-6 bg-white rounded-2xl shadow-xl mt-5 pb-22"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      {/* Intro heading with slight scale-in */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#18B089]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Introduction
      </motion.h2>

      {/* Paragraphs */}
      <motion.p className="mb-4 text-gray-700 text-sm sm:text-base" variants={itemVariant}>
        Greetings from <strong>El Norte Commerce</strong>, your reliable guide through the everchanging world of internet shopping.
        Being a top supplier of e-commerce services, we take pride in our dedication to providing specialized
        solutions that meet each client's particular requirements.
      </motion.p>

      <motion.p className="mb-4 text-gray-700 text-sm sm:text-base" variants={itemVariant}>
        Our strategic alliances with leading e-commerce companies like <strong>Amazon, Meesho, JioMart, Ajio, Myntra,</strong> and
        <strong> Flipkart</strong> demonstrate our commitment to making sure your company succeeds online.
      </motion.p>

      {/* Sub-heading with animation */}
      <motion.h3
        className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-[#18B089]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Company at a Glance:
      </motion.h3>

      {/* Mission & Knowledge */}
      <motion.p className="mb-2 text-gray-700 text-sm sm:text-base" variants={itemVariant}>
        <strong>Mission:</strong> El Norte Commerce aims to empower companies by offering all-inclusive e-commerce solutions
        that boost consumer satisfaction, spur development, and take advantage of the numerous opportunities that e-commerce presents.
      </motion.p>

      <motion.p className="text-gray-700 text-sm sm:text-base" variants={itemVariant}>
        <strong>Knowledge:</strong> Our team of highly qualified experts has a wealth of knowledge in the creation, integration,
        and optimization of e-commerce. We keep up with the most recent technological advancements and market trends to keep your
        company at the forefront of digital innovation.
      </motion.p>
    </motion.div>
  );
}

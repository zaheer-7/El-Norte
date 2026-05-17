import React from "react";
import { motion } from "framer-motion";

const services = [
  "Web/App Development",
  "Graphic Designing",
  "Social Media Marketing",
  "Video Editing",
  "Logo Designing",
  "WhatsApp Marketing",
  "Email Marketing",
  "Google Ads",
  "E-Invitation",
  "Tele- Marketing",
  "Google My Business",
  "GST And Tax Related"
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function AdditionalServices() {
  return (
    <div className="px-4 py-10 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center text-[#18B089] mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Additional Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#18B089] cursor-pointer text-white py-4 px-6 rounded-xl text-center font-medium text-lg shadow-md hover:scale-105 transition-transform duration-300"
            variants={itemVariants}
          >
            {service}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

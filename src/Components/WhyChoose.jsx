import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Customized Solutions",
    description:
      "Ecommerce solutions made to specifically meet your company's needs.",
  },
  {
    title: "Technology Excellence",
    description:
      "Application of state-of-the-art technology to guarantee performance, security, and scalability.",
  },
  {
    title: "Proactive Support",
    description:
      "Ongoing assistance and upkeep to keep your online store operating efficiently.",
  },
  {
    title: "Proactive Maintenance",
    description:
      "Our dedication doesn’t stop at launch. We provide continuous support to catch and fix issues before they affect your business.",
  },
  {
    title: "Transparent Communication",
    description:
      "We value honest communication. You'll always be informed about progress, changes, and decisions to align with your vision.",
  },
  {
    title: "Result-Driven Strategy",
    description:
      "We focus on delivering outcomes — increasing traffic, engagement, and online sales through tailored plans.",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <div className="py-12 px-6 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center text-[#18B089] mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] border-l-4 border-[#18B089] cursor-pointer p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

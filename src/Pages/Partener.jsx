import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Partnership() {
  const partnerships = [
    {
      title: "Amazon",
      description:
        "To increase your market presence and boost sales, take use of Amazon's extensive worldwide reach and strong infrastructure. Your items will be seamlessly integrated and optimized on the Amazon platform thanks to our cooperation.",
    },
    {
      title: "Meesho",
      description:
        "Connect with a wide range of resellers by using Meesho to tap into the social commerce scene. For a fruitful Meesho cooperation, our solutions facilitate seamless order fulfillment, product demonstration, and onboarding.",
    },
    {
      title: "JioMart",
      description:
        "Take advantage of JioMart's large consumer base as the top online grocery store in India. Our integration services guarantee your items will be sold on JioMart with ease and effectiveness.",
    },
    {
      title: "Ajio and Myntra",
      description:
        "Showcase your fashion products on Ajio and Myntra, two of India's premier fashion Ecommerce platforms. Our solutions focus on creating visually appealing product listings and optimizing user experiences to boost sales.",
    },
    {
      title: "Flipkart",
      description:
        "Collaborate with Flipkart to expand your market share in India. Our integration services make everything go more smoothly, from processing orders to selling products, so you can work with this massive ecommerce company with confidence.",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl h-screen pb-30 overflow-y-scroll mx-auto p-6 mt-5 bg-white rounded-2xl shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-[#18B089] mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Partnerships
      </motion.h2>

      <div className="space-y-8">
        {partnerships.map((item, index) => (
          <motion.div key={index} custom={index} variants={fadeUp}>
            <h3 className="text-xl font-semibold text-[#18B089] mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Image Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/service.jpg"
          alt="Package Details"
          className="rounded-xl w-full h-auto shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}

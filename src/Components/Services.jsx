import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Amazon",
    img: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x432.png",
  },
  {
    name: "Flipkart",
    img: "/flipkart.svg",
  },
  {
    name: "JioMart",
    img: "/jiomart.png",
  },
  {
    name: "Meesho",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png",
  },
  {
    name: "Ajio",
    img: "/ajio.png",
  },
  {
    name: "Myntra",
    img: "/myntra.png",
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Services() {
  return (
    <div className="py-10 sm:mt-3 mt-15 px-4 sm:px-6 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#18B089] mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-110 transition-transform duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h1 className="text-xl font-semibold text-[#18B089] mb-2">
              {service.name}
            </h1>
            <p className="text-sm text-gray-600">
              We help you grow your business on {service.name}.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

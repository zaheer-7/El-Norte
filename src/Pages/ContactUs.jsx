import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#18B089] mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="space-y-6 text-base md:text-lg text-gray-700"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.p
            className="font-medium"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="text-[#18B089] font-bold">Name:</span> El Norte Commerce
          </motion.p>

          <motion.p
            className="font-medium break-words"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="text-[#18B089] font-bold">Email:</span> elnortecommerce@gmail.com
          </motion.p>

          <motion.p
            className="font-medium"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="text-[#18B089] font-bold">Phone:</span> +91 8171955961
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

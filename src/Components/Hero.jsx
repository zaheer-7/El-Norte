import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen pt-1 p-6 bg-white">
      
      {/* Text Section with Animations */}
      <motion.div
        className="text-center md:text-left max-w-xl space-y-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1
          className="sm:text-5xl text-3xl font-bold text-[#18B089]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          El Norte Commerce
        </motion.h1>

        <motion.h2
          className="sm:text-2xl text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          We are so glad you are here!
        </motion.h2>

        <motion.h3
          className="sm:text-3xl text-2xl font-semibold text-[#18B089]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          Grow Your
        </motion.h3>

        <motion.h3
          className="sm:text-2xl text-xl text-[#18B089] font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          Online Business
        </motion.h3>

        <motion.h4
          className="text-xl text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          With Us
        </motion.h4>
      </motion.div>

      {/* Lottie Animation without motion wrapper */}
      <div className="w-[600px] md:w-[800px] mb-10 md:mb-0">
        <DotLottieReact
          src="https://lottie.host/573e0cfa-c971-4782-99e9-c0865c0c8640/B49LwMd7Jp.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

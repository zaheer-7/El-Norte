// import React from "react";
// import { motion } from "framer-motion";

// export default function ContactUs  ()  {
//   return (
//     <motion.div
//       className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-2xl"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       <motion.h2
//         className="text-3xl font-bold text-center text-[#18B089] mb-6"
//         initial={{ scale: 0.9, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         Contact Us
//       </motion.h2>

//       <form className="space-y-6">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18B089]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18B089]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4, delay: 0.2 }}
//         >
//           <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//           <input
//             type="tel"
//             placeholder="123-456-7890"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18B089]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4, delay: 0.3 }}
//         >
//           <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//           <textarea
//             placeholder="Your message..."
//             rows="4"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18B089]"
//           ></textarea>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#18B089] hover:bg-[#139c79] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Send Message
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

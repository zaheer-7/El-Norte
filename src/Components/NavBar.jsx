import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-[#18B089] p-4 flex justify-between items-center w-full shadow-lg text-white relative z-50">
      <div>
        <Link to="/" className="font-bold text-xl">
          El Norte
        </Link>
      </div>

      <div
        className="sm:hidden absolute top-5 right-5 z-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="cursor-pointer text-white" size={30} />
        ) : (
          <Menu size={30} />
        )}
      </div>

      {/* Desktop Links */}
      <ul className="hidden sm:flex space-x-6 sm:text-lg font-bold sm:pr-6">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-gray-300 cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0.9 }}
            exit={{ x: "100%", opacity: 0, transition: { duration: 0.6 } }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 h-screen w-3/4 bg-gradient-to-b from-[#18B089] to-[#149477] shadow-lg flex flex-col items-center space-y-6 pt-20 text-xl font-bold sm:hidden z-50"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group relative w-full px-6 py-3 text-white cursor-pointer overflow-hidden text-center"
              >
                <span className="absolute inset-0 bg-white/20 backdrop-blur-md scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></span>
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { links } from "../constants";
import AuthorImage from "../assets/Yash-Gohel.jpg";

const Link = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-colors transform border rounded-lg p-4 mb-4 transition-all duration-300 shadow-lg flex items-center justify-between mx-4 font-montserrat hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card text-white relative"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.span
      className="flex items-center relative" // Add relative class to set z-index
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <link.icon
        className="mr-4 text-xl group-hover:text-teal-200"
        style={{ zIndex: 2 }}
      />{" "}
      {/* Increase z-index */}
      <span
        className="text-lg font-medium group-hover:text-teal-200"
        style={{ zIndex: 2 }}
      >
        {link.title}
      </span>{" "}
      {/* Increase z-index */}
    </motion.span>
    <motion.span
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      style={{ zIndex: 2 }} // Increase z-index
    >
      <FaExternalLinkAlt className="text-lg group-hover:text-teal-200" />{" "}
      {/* Increase z-index */}
    </motion.span>
  </motion.a>
);

const LinktreePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => setSelectedCategory(category);

  const filteredLinks =
    selectedCategory === "All"
      ? links
      : links.filter((link) => link.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col justify-between text-white bg-primary overflow-hidden relative">
      <div className="absolute z-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] lg:w-[40vw] lg:h-[40vw] -right-[40vw] sm:-right-[30vw] lg:-right-[20vw] rounded-full blue__gradient bottom-[60%] sm:bottom-[50%] lg:bottom-[60%]" />
      <div className="absolute z-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] lg:w-[40vw] lg:h-[40vw] -left-[40vw] sm:-left-[30vw] lg:-left-[20vw] rounded-full blue__gradient bottom-[-20%] sm:bottom-[-15%] lg:bottom-[-10%]" />

      <div>
        <div className="py-8 text-center relative">
          <motion.img
            src={AuthorImage}
            alt="Author"
            className="mx-auto w-32 h-32 rounded-full mb-4 border-2 border-teal-200 shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            className="text-3xl sm:text-4xl text-gradient md:text-5xl font-bold mb-2 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Linktree
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-5 font-palanquin"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Connect with me on various platforms
          </motion.p>
          <div className="mb-4 flex justify-center">
            {["All", "Social Media", "Portfolio", "Contact"].map((category) => (
              <motion.button
                key={category}
                className={`mr-2 px-3 sm:px-4 py-2 rounded-md text-sm outline-none sm:text-base ${
                  selectedCategory === category
                    ? "bg-blue-gradient text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
                onClick={() => handleCategoryClick(category)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <AnimatePresence>
              {filteredLinks.map((link) => (
                <Link key={selectedCategory + "-" + link.id} link={link} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.p
        className="text-xs text-dimWhite sm:text-sm md:text-base mt-8 pb-4 text-center font-palanquin"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a
          href="https://burninghat.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2024 Arta Abedi. All rights reserved.
        </a>
      </motion.p>
    </div>
  );
};

export default LinktreePage;

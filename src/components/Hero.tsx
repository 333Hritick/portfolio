import { Code, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  // Typing animation logic
  const text = "Web Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black pt-20 overflow-hidden"
    >
      {/* ⭐ Particle Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute animate-[float_10s_infinite] w-4 h-4 bg-blue-300 rounded-full top-20 left-10"></div>
        <div className="absolute animate-[float_12s_infinite] w-3 h-3 bg-purple-300 rounded-full top-40 right-20"></div>
        <div className="absolute animate-[float_8s_infinite] w-5 h-5 bg-pink-300 rounded-full bottom-24 left-1/3"></div>
        <div className="absolute animate-[float_14s_infinite] w-2 h-2 bg-yellow-300 rounded-full bottom-10 right-1/4"></div>
      </div>

      {/* ⭐ Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Logo Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-xl dark:shadow-blue-800/50">
            <Code size={64} className="text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hritick Kumar</span>
        </h1>

        {/* Typing Animation */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-10">
          {displayText}
          <span className="border-r-4 border-blue-600 ml-1 animate-pulse"></span>
        </p>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          Crafting beautiful and functional web experiences with modern
          technologies. Passionate about clean code and user-centric design.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          {/* Contact Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 dark:shadow-blue-600/40 transition"
          >
            Get In Touch
          </motion.a>

          {/* Projects Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition"
          >
            View Projects
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/333Hritick"
            target="_blank"
            className="w-12 h-12 bg-gray-900 dark:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-md"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/hritick-sharma-3a91452a5"
            target="_blank"
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="#contact"
            className="w-12 h-12 bg-gray-700 dark:bg-gray-600 text-white rounded-full flex items-center justify-center shadow-md"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>

      {/* ⭐ Wavy Bottom SVG Border */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
      >
        <path
          fill="url(#wave)"
          d="M0,0 C300,100 600,0 900,80 C1200,160 1440,0 1440,0 L1440,100 L0,100 Z"
        />
        <defs>
          <linearGradient id="wave" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

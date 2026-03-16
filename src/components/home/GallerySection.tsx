"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Car,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Sparkle,
  Camera,
} from "lucide-react";

const images = [
  "/services/s1.jpeg",
  "/services/s2.jpeg",
  "/services/s3.jpeg",
  "/services/s4.jpeg",
  "/services/s5.jpeg",
  "/services/s6.jpeg",
];

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Floating animated icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 text-primary/20"
          animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <Wrench size={80} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-accent/20"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        >
          <Car size={100} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-500/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        >
          <Sparkles size={70} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-10 text-purple-500/20"
          animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkle size={60} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ✨ IMPROVED HEADER with colors & effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Stylish badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20"
          >
            <Camera size={18} className="text-primary" />
            <span className="text-sm font-medium text-white">Premium Gallery</span>
          </motion.div>

          {/* Main heading with gradient and glow */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent">
              Our Services Gallery
            </span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"
          />

          {/* Description with subtle glow */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Explore our services through real images. Modern, responsive, and interactive.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto group">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Service ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-bold">Service {currentIndex + 1}</p>
                  <p className="text-sm text-gray-200">Premium quality</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous slide"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next slide"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Extra floating icons */}
      <motion.div
        className="absolute top-1/3 left-0 text-white/5"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <Wrench size={120} strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-0 text-white/5"
        animate={{ x: ["200%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 2 }}
      >
        <Car size={140} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default GallerySection;
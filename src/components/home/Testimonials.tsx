"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
  faCar,
  faTruck,
  faWrench,
  faCircleNotch,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: 'Ahmed R.',
    location: 'Dubai',
    text: 'They arrived in 15 minutes and jump‑started my car. Excellent service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    company: 'Dubai Properties',
  },
  {
    name: 'Fatima S.',
    location: 'Sharjah',
    text: 'After my accident they handled everything professionally. Highly recommend.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108777-9f5e9e7b6b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    company: 'Al Zahra Hospital',
  },
  {
    name: 'Omar K.',
    location: 'Dubai',
    text: 'Fuel delivery saved me on the highway. Fast and courteous.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    company: 'Emirates Logistics',
  },
  {
    name: 'Layla M.',
    location: 'Ajman',
    text: 'I had a flat tire at midnight. They were there in 20 minutes. Lifesavers!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    company: 'Ajman Free Zone',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
      {/* Floating animated icons – exactly like GallerySection */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 text-primary/20"
          animate={{ y: [0, 30, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <FontAwesomeIcon icon={faWrench} size="3x" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-accent/20"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        >
          <FontAwesomeIcon icon={faCar} size="4x" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-500/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
        >
          <FontAwesomeIcon icon={faStar} size="3x" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-10 text-purple-500/20"
          animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
        >
          <FontAwesomeIcon icon={faCircleNotch} size="3x" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header – exactly like GallerySection */}
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
            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary" />
            <span className="text-sm font-medium text-white">Client Stories</span>
          </motion.div>

          {/* Main heading with gradient and glow */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Real experiences from drivers we've helped across the UAE.
          </motion.p>
        </motion.div>

        {/* Carousel Container – exactly like GallerySection */}
        <div className="relative w-full max-w-4xl mx-auto group">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full p-6 md:p-8"
              >
                {/* Testimonial Card */}
                <div className="h-full flex flex-col justify-center">
                  {/* Quote icons */}
                  <div className="text-primary/20 text-6xl mb-4">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-200 text-lg md:text-xl italic mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                        className="absolute -top-1 -right-1 w-5 h-5 text-accent"
                      >
                        <FontAwesomeIcon icon={faCircleNotch} />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].location}
                      </p>
                      {testimonials[currentIndex].company && (
                        <p className="text-xs text-gray-500 mt-1">
                          {testimonials[currentIndex].company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex text-primary mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < testimonials[currentIndex].rating ? 'text-primary' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons – appear on hover */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Extra floating icons – moving across screen */}
      <motion.div
        className="absolute top-1/3 left-0 text-white/5"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <FontAwesomeIcon icon={faTruck} size="5x" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-0 text-white/5"
        animate={{ x: ["200%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear", delay: 2 }}
      >
        <FontAwesomeIcon icon={faCar} size="6x" />
      </motion.div>
    </section>
  );
};

export default Testimonials;
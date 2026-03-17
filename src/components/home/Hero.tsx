"use client";

import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faTruck,
  faCar,
  faWrench,
  faSignal,
  faCircle,
  faStar,
  faClock,
  faShieldAlt,
  faMessage,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const carouselImages = [
  '/services/s1.jpeg',
  '/services/s2.jpeg',
  '/services/s3.jpeg',
  '/services/s4.jpeg',
  '/services/s5.jpeg',
];

// ===== ANIMATION VARIANTS (TYPED) =====
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const floatWithDelay = (delay: number): Variants => ({
  animate: {
    y: [0, -20, 0],
    transition: { repeat: Infinity, duration: 5, delay, ease: 'easeInOut' },
  },
});

const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
};

const rotateAnimation: Variants = {
  animate: {
    rotate: [0, 10, -10, 0],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
  {/* Background Carousel */}
  <Carousel
    plugins={[
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]}
    opts={{ loop: true }}
    className="absolute inset-0 z-0"
  >
    <CarouselContent>
      {carouselImages.map((src, index) => (
        <CarouselItem key={index} className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
          <Image
            src={src}
            alt={`Service ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
            sizes="100vw"
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-2 sm:left-4 z-30 bg-dark/60 text-white border-none hover:bg-primary hover:scale-110 transition-all duration-300" />
    <CarouselNext className="right-2 sm:right-4 z-30 bg-dark/60 text-white border-none hover:bg-primary hover:scale-110 transition-all duration-300" />
  </Carousel>

  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-10" />

  {/* Decorative Floating Icons */}
  <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute top-1/4 left-5 text-primary/10 text-8xl hidden lg:block"
      animate={{ x: [0, 40, 0], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faTruck} />
    </motion.div>

    <motion.div
      className="absolute bottom-1/4 right-5 text-accent/20 text-7xl hidden lg:block"
      variants={floatWithDelay(1)}
      animate="animate"
    >
      <FontAwesomeIcon icon={faCar} />
    </motion.div>

    <motion.div
      className="absolute top-1/3 right-1/4 text-primary/20 text-6xl hidden lg:block"
      variants={floatWithDelay(2.5)}
      animate="animate"
    >
      <FontAwesomeIcon icon={faWrench} />
    </motion.div>

    <motion.div
      className="absolute bottom-1/3 left-10 text-accent/20 text-6xl hidden lg:block"
      variants={rotateAnimation}
      animate="animate"
    >
      <FontAwesomeIcon icon={faShieldAlt} />
    </motion.div>

    <motion.div
      className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 text-primary/30 text-5xl gap-1 hidden md:flex"
      variants={pulseAnimation}
      animate="animate"
    >
      <FontAwesomeIcon icon={faSignal} />
      <FontAwesomeIcon icon={faCircle} className="text-xs self-end" />
      <FontAwesomeIcon icon={faCircle} className="text-xs self-center" />
      <FontAwesomeIcon icon={faCircle} className="text-xs self-start" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 right-10 text-warning/20 text-3xl hidden lg:block"
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faStar} />
    </motion.div>
  </div>

  {/* Main Content */}
  <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 relative z-20">
    <motion.div
      variants={fadeInScale}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      {/* Badge */}
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-primary/30"
      >
        <div className="p-1.5 sm:p-2 bg-primary/20 rounded-full">
          <FontAwesomeIcon icon={faTruck} className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
        <span className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm">
          24/7 Premium Rescue
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2 sm:px-0"
      >
        Reliable Car Towing <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          & Breakdown Recovery
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        variants={fadeInUp}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto font-light px-3 sm:px-0 leading-relaxed"
      >
        Fast, professional vehicle recovery in Sharjah & Dubai.{' '}
        <span className="font-medium text-white">Arriving in 30 minutes.</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10"
      >
        <Button
          asChild
          size="lg"
          className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg font-bold rounded-2xl overflow-hidden w-full sm:w-auto"
        >
          <Link href="/services">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <motion.span className="mr-2 relative z-10 inline-block">
              <FontAwesomeIcon icon={faTruck} />
            </motion.span>
            <span className="relative z-10">Request Towing</span>
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="group relative border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg font-bold rounded-2xl backdrop-blur-sm w-full sm:w-auto"
        >
          <Link href="/contact">
            <motion.span className="mr-2 inline-block">
              <FontAwesomeIcon icon={faMessage} className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </motion.span>
            <span>Chat with Us</span>
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          className="group relative bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 text-sm sm:text-base md:text-lg font-bold rounded-2xl w-full sm:w-auto"
        >
          <Link href="tel:0551348899">
            <motion.span className="mr-2 inline-block">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.span>
            <span>Emergency Call</span>
          </Link>
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 px-2 sm:px-0"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-5 md:p-6 text-center border border-white/10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2">24/7</div>
          <div className="text-gray-400 text-xs sm:text-sm">Emergency Service</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-5 md:p-6 text-center border border-white/10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent mb-2">30 Min</div>
          <div className="text-gray-400 text-xs sm:text-sm">Average Response</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-5 md:p-6 text-center border border-white/10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-warning mb-2">5k+</div>
          <div className="text-gray-400 text-xs sm:text-sm">Vehicles Towed</div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-5 md:p-6 text-center border border-white/10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-2">15+</div>
          <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20">
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-gray-300">Scroll</span>
      <div className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-3 bg-primary rounded-full mt-2"
        />
      </div>
    </div>
  </motion.div>
</section>
  );
}
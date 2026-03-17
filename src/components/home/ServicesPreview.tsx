"use client";

import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faAmbulance,
  faTruck,
  faGasPump,
  faBolt,
  faPhone,
  faArrowRight,
  faChevronRight,
  faClock,
  faShieldAlt,
  faUserCheck,
  faCar,
  faCircleNotch,
  faWrench,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    name: 'Breakdown Recovery',
    icon: faTools,
    image: '/services/s4.jpeg',
    desc: 'Immediate help when your vehicle breaks down.',
  },
  {
    name: 'Accident Recovery',
    icon: faAmbulance,
    image: '/services/s11.webp',
    desc: 'Fast, professional accident scene clearance.',
  },
  {
    name: 'Towing Service',
    icon: faTruck,
    image: '/services/s7.jpeg',
    desc: 'Safe towing for all vehicle types.',
  },
  {
    name: 'Fuel Delivery',
    icon: faGasPump,
    image: '/services/s12.webp',
    desc: 'On‑the‑spot fuel when you run out.',
  },
  {
    name: 'JumpStart',
    icon: faBolt,
    image: '/services/s13.jpeg',
    desc: 'Quick battery jump‑start service.',
  },
  {
    name: 'Roadside Assistance',
    icon: faPhone,
    image: '/services/s14.jpeg',
    desc: 'Tyre change, lockout, minor repairs.',
  },
];

// === Consistent Animation Variants (typed) ===
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

// Stagger for cards
const cardStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export default function ServicesPreview() {
  return (
  <section className="relative py-16 sm:py-20 md:py-28 bg-gray-900 overflow-hidden">
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

  {/* Floating Icons */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Moving cars left to right */}
    <motion.div
      className="absolute top-10 left-0 text-primary/10 text-5xl sm:text-6xl lg:text-7xl hidden md:block"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faCar} />
    </motion.div>

    <motion.div
      className="absolute bottom-20 left-0 text-accent/10 text-4xl sm:text-5xl lg:text-6xl hidden md:block"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear', delay: 5 }}
    >
      <FontAwesomeIcon icon={faTruck} />
    </motion.div>

    {/* Moving cars right to left */}
    <motion.div
      className="absolute top-40 right-0 text-primary/10 text-4xl sm:text-5xl hidden md:block"
      animate={{ x: ['200%', '-100%'] }}
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faCar} />
    </motion.div>

    <motion.div
      className="absolute bottom-40 right-0 text-accent/10 text-5xl sm:text-6xl lg:text-7xl hidden md:block"
      animate={{ x: ['200%', '-100%'] }}
      transition={{ repeat: Infinity, duration: 22, ease: 'linear', delay: 2 }}
    >
      <FontAwesomeIcon icon={faAmbulance} />
    </motion.div>

    {/* Spinning circles */}
    <motion.div
      className="absolute top-1/4 left-10 text-primary/10 text-3xl sm:text-4xl hidden md:block"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faCircleNotch} />
    </motion.div>

    <motion.div
      className="absolute bottom-1/4 right-10 text-accent/10 text-4xl sm:text-5xl hidden md:block"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
    >
      <FontAwesomeIcon icon={faCircleNotch} />
    </motion.div>

    {/* Floating tools */}
    <motion.div
      className="absolute top-2/3 left-20 text-warning/10 text-3xl sm:text-4xl hidden lg:block"
      variants={floatWithDelay(0)}
      animate="animate"
    >
      <FontAwesomeIcon icon={faWrench} />
    </motion.div>

    <motion.div
      className="absolute top-1/3 right-20 text-primary/10 text-4xl sm:text-5xl hidden lg:block"
      variants={rotateAnimation}
      animate="animate"
    >
      <FontAwesomeIcon icon={faCogs} />
    </motion.div>
  </div>

  <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
    {/* Header */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-10 sm:mb-14 md:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight px-2 sm:px-0">
        Our <span className="text-primary">Services</span>
      </h2>

      <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4 sm:mb-6" />

      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light px-3 sm:px-0 leading-relaxed">
        Comprehensive roadside assistance tailored to your needs.
      </p>
    </motion.div>

    {/* Key benefits row */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-10 sm:mb-14 md:mb-16 px-2 sm:px-0"
    >
      {[
        { icon: faClock, text: '24/7 Emergency Response' },
        { icon: faShieldAlt, text: 'Fully Insured & Licensed' },
        { icon: faUserCheck, text: 'Certified Mechanics' },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full border border-white/10"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-primary text-sm sm:text-base md:text-xl"
          />
          <span className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">
            {item.text}
          </span>
        </div>
      ))}
    </motion.div>

    {/* Services Grid */}
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.name}
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border border-white/10 hover:border-primary/50"
        >
          {/* Image */}
          <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

            <motion.div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white z-10">
              <FontAwesomeIcon icon={service.icon} className="text-3xl sm:text-4xl md:text-5xl" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
              {service.name}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              {service.desc}
            </p>

            <Link
              href="/services"
              className="inline-flex items-center text-primary text-sm sm:text-base font-semibold"
            >
              Learn More
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-xs sm:text-sm" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Button */}
    <motion.div className="text-center mt-10 sm:mt-14 md:mt-16">
      <Button
        asChild
        size="lg"
        className="group bg-gradient-to-r from-primary to-accent text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto"
      >
        <Link href="/services">
          View All Services
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>
  );
}
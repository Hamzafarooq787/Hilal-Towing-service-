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
    <section className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Moving cars left to right */}
        <motion.div
          className="absolute top-10 left-0 text-primary/10 text-7xl"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCar} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-0 text-accent/10 text-6xl"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear', delay: 5 }}
        >
          <FontAwesomeIcon icon={faTruck} />
        </motion.div>

        {/* Moving cars right to left */}
        <motion.div
          className="absolute top-40 right-0 text-primary/10 text-5xl"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCar} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-0 text-accent/10 text-7xl"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear', delay: 2 }}
        >
          <FontAwesomeIcon icon={faAmbulance} />
        </motion.div>

        {/* Spinning circles */}
        <motion.div
          className="absolute top-1/4 left-10 text-primary/10 text-4xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-accent/10 text-5xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>

        {/* Floating tools */}
        <motion.div
          className="absolute top-2/3 left-20 text-warning/10 text-4xl"
          variants={floatWithDelay(0)}
          animate="animate"
        >
          <FontAwesomeIcon icon={faWrench} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-primary/10 text-5xl"
          variants={rotateAnimation}
          animate="animate"
        >
          <FontAwesomeIcon icon={faCogs} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
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
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { icon: faClock, text: '24/7 Emergency Response' },
            { icon: faShieldAlt, text: 'Fully Insured & Licensed' },
            { icon: faUserCheck, text: 'Certified Mechanics' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-primary text-xl animate-pulse"
              />
              <span className="text-gray-300 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border border-white/10 hover:border-primary/50"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                {/* Icon with continuous float */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-4 text-white z-10"
                >
                  <FontAwesomeIcon icon={service.icon} className="text-5xl drop-shadow-2xl" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Learn More Button */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="ml-2"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                  </motion.span>
                </Link>

                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-bold rounded-full overflow-hidden"
          >
            <Link href="/services">
              {/* Shine overlay */}
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              {/* Signal rings (optional) */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full border-2 border-white/30 animate-ping opacity-50" />
                <span className="absolute w-8 h-8 rounded-full border-2 border-white/40 animate-pulse opacity-75" />
              </span>
              <span className="relative z-10">View All Services</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
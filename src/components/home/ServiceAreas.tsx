"use client";

import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationDot,
  faTruck,
  faCar,
  faWrench,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

const areas = [
  'Sharjah City',
  'Dubai City',
  'Al Nahda',
  'Deira',
  'Bur Dubai',
  'Mirdif',
  'Al Qusais',
  'Jumeirah',
  'Al Barsha',
  'JLT',
];

// Animation variants (typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
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

export default function ServiceAreas() {
  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Dark gradient overlay (like Hero) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Background Map Pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Icons – same style as Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 text-primary/10 text-8xl"
          variants={floatWithDelay(0)}
          animate="animate"
        >
          <FontAwesomeIcon icon={faTruck} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-5 text-accent/10 text-7xl"
          variants={floatWithDelay(1)}
          animate="animate"
        >
          <FontAwesomeIcon icon={faCar} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-primary/20 text-6xl"
          variants={rotateAnimation}
          animate="animate"
        >
          <FontAwesomeIcon icon={faWrench} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-10 text-accent/20 text-6xl"
          variants={pulseAnimation}
          animate="animate"
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with gradient underline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Service <span className="text-primary">Areas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We cover all major locations in Sharjah and Dubai – and everywhere in between.
          </p>
        </motion.div>

        {/* Location Grid – Pills with staggered animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              custom={index}
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#ffa801', // primary
                color: '#1e272e',
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/5 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10 text-white font-medium text-center cursor-default transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-primary group-hover:text-dark transition-colors text-sm"
              />
              <span>{area}</span>

              {/* Small glow dot */}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Extra Reach Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary animate-pulse" />
            <span className="text-gray-300">And surrounding areas – just call!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
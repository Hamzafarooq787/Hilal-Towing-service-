"use client";

import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faShieldAlt,
  faSmile,
  faTruck,
  faCar,
  faWrench,
  faCogs,
  faCircleNotch,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// === Consistent Animation Variants (typed) ===
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const floatWithDelay = (delay: number): Variants => ({
  animate: {
    y: [0, -20, 0],
    transition: { repeat: Infinity, duration: 5, delay, ease: 'easeInOut' },
  },
});

const rotateAnimation: Variants = {
  animate: {
    rotate: [0, 10, -10, 0],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
  },
};

const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Dark gradient overlay (same as Hero) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* === Floating Icons – exactly like Hero === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Moving cars left to right */}
        <motion.div
          className="absolute top-20 left-0 text-primary/10 text-7xl"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCar} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-0 text-accent/10 text-6xl"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear', delay: 5 }}
        >
          <FontAwesomeIcon icon={faTruck} />
        </motion.div>

        {/* Moving cars right to left */}
        <motion.div
          className="absolute top-60 right-0 text-primary/10 text-5xl"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCar} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-0 text-accent/10 text-7xl"
          animate={{ x: ['200%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear', delay: 2 }}
        >
          <FontAwesomeIcon icon={faTruck} />
        </motion.div>

        {/* Spinning circles */}
        <motion.div
          className="absolute top-1/3 left-10 text-primary/10 text-4xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-10 text-accent/10 text-5xl"
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
          className="absolute top-1/4 right-20 text-primary/10 text-5xl"
          variants={rotateAnimation}
          animate="animate"
        >
          <FontAwesomeIcon icon={faCogs} />
        </motion.div>

        {/* Floating stars */}
        <motion.div
          className="absolute top-1/2 left-1/3 text-accent/10 text-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faStar} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Heading with gradient underline */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Why Choose <span className="text-primary">Hilal</span>?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              With over 15 years of experience, we pride ourselves on lightning‑fast response times,
              professional certified mechanics, and a customer‑first approach. Your safety is our priority.
            </motion.p>

            {/* Stats Cards – glass‑morphism design */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {[
                { value: '24/7', label: 'Availability', icon: faClock },
                { value: '15+', label: 'Years Experience', icon: faShieldAlt },
                { value: '5000+', label: 'Happy Clients', icon: faSmile },
                { value: '30 min', label: 'Avg Response', icon: faTruck },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(255,168,1,0.3)' }}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-xl shadow-lg text-center transition-all border border-white/10 hover:border-primary/50"
                >
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-primary text-3xl mb-2 animate-float"
                  />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Button – now matches Hero style (gradient, shine, rings) */}
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold rounded-full overflow-hidden"
              >
                <Link href="/about">
                  {/* Shine overlay */}
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  {/* Signal rings */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full border-2 border-white/30 animate-ping opacity-50" />
                    <span className="absolute w-8 h-8 rounded-full border-2 border-white/40 animate-pulse opacity-75" />
                  </span>
                  <span className="relative z-10">Learn More About Us</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image with Enhanced Badge */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our professional team"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating Badge with continuous bounce/pulse */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-accent to-warning text-gray-900 p-5 rounded-xl shadow-2xl hidden md:block"
            >
              <p className="font-bold text-lg flex items-center gap-3">
                <FontAwesomeIcon icon={faSmile} className="text-2xl animate-pulse" />
                <span>Trusted by 5000+ clients</span>
              </p>
            </motion.div>

            {/* Additional small floating icon near image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute top-10 right-10 text-primary/30 text-4xl hidden lg:block"
            >
              <FontAwesomeIcon icon={faCircleNotch} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
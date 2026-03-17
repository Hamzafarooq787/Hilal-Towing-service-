"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faAmbulance,
  faTruck,
  faGasPump,
  faBolt,
  faPhone,
  faArrowRight,
  faClock,
  faShieldAlt,
  faSmile,
  faCar,
  faWrench,
  faCogs,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

// ✅ CountUp component (error-free)
type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Services array
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

// ✅ Animation variants
import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function Services() {
 return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-28 bg-dark overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-20 left-0 text-primary/10 text-8xl"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          >
            <FontAwesomeIcon icon={faTruck} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-0 text-accent/10 text-7xl"
            animate={{ x: ['200%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear', delay: 2 }}
          >
            <FontAwesomeIcon icon={faCar} />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-primary/5 text-6xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            <FontAwesomeIcon icon={faCircleNotch} />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-accent/5 text-7xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faWrench} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Comprehensive roadside assistance tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 bg-dark/95 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/20"
              >
                {/* Background floating icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <FontAwesomeIcon
                    icon={faCircleNotch}
                    className="absolute -top-5 -right-5 text-primary/5 text-7xl animate-spin-slow"
                  />
                  <FontAwesomeIcon
                    icon={faCircleNotch}  // was faTire
                    className="absolute -bottom-5 -left-5 text-accent/5 text-7xl animate-float"
                  />
                </div>

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  {/* Floating icon */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="absolute bottom-4 left-4 text-white z-10"
                  >
                    <FontAwesomeIcon icon={service.icon} className="text-4xl md:text-5xl drop-shadow-2xl" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="group/btn relative bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-sm md:text-base font-semibold rounded-full overflow-hidden"
                  >
                    <Link href="/contact">
                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10">Get Help</span>
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Glow overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICE STATS ===== */}
      <section className="py-20 bg-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight"
          >
            Service <span className="text-primary">Excellence</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-12"
          />

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: 5000, label: 'Services Completed', icon: faTools, suffix: '+' },
              { value: 30, label: 'Min Response Time', icon: faClock, suffix: 'min' },
              { value: 100, label: 'Customer Satisfaction', icon: faSmile, suffix: '%' },
              { value: 15, label: 'Years Experience', icon: faShieldAlt, suffix: '+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(255,168,1,0.3)' }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-primary/50 transition-all"
              >
                <FontAwesomeIcon icon={stat.icon} className="text-3xl md:text-4xl text-primary mb-3 animate-float" />
                <div className="text-2xl md:text-3xl font-extrabold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        {/* Background floating icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 text-dark/10 text-6xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            <FontAwesomeIcon icon={faCircleNotch} />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 text-dark/10 text-7xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faTruck} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/4 text-dark/10 text-5xl"
            animate={{ x: [0, 30, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faCar} />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/3 text-dark/10 text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faWrench} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Need Immediate Help?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base md:text-xl mb-8 opacity-90"
          >
            Call us now – we’re available 24/7
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            {/* Signal rings */}
            <motion.span
              className="absolute -inset-3 rounded-full border-2 border-white/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute -inset-5 rounded-full border border-white/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
            <Button
              asChild
              size="lg"
              className="group relative bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 md:px-10 py-4 md:py-6 text-sm md:text-lg font-bold rounded-full overflow-hidden"
            >
              <Link href="tel:0551348899">
                <span className="absolute inset-0 bg-dark/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <FontAwesomeIcon icon={faPhone} className="mr-2 relative z-10 animate-pulse" />
                <span className="relative z-10">055 134 8899</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
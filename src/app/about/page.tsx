"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faShieldAlt,
  faSmile,
  faTruck,
  faUsers,
  faAward,
  faCar,
  faWrench,
  faCogs,
  faCircleNotch,
  faStar,
  faHandshake,
  faBullseye,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faOilCan,
  faBolt,
  faGasPump,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

/* ✅ TYPE FIX */
type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

// CountUp component
const CountUp = ({ end, duration = 2000, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);

  /* ✅ REF TYPE FIX */
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function About() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-28 bg-dark overflow-hidden">
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
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            About <span className="text-primary">Hilal Towing</span>
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
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Your trusted partner for roadside assistance in Sharjah and Dubai.
          </motion.p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-24 bg-dark/95 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Founded in 2008, Hilal Towing Service has grown from a small local operation to one of the most trusted roadside assistance providers in the UAE. With a commitment to fast response times and professional service, we have helped thousands of motorists get back on the road safely.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our team of certified mechanics and recovery specialists are available 24/7, ready to assist you with any breakdown, accident, or roadside emergency.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                  <FontAwesomeIcon icon={faAward} className="text-primary text-2xl animate-pulse" />
                  <span className="text-white font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10">
                  <FontAwesomeIcon icon={faUsers} className="text-primary text-2xl animate-pulse" />
                  <span className="text-white font-medium">50+ Staff</span>
                </div>
              </div>
            </motion.div>

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
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-accent to-warning text-dark p-4 rounded-xl shadow-2xl hidden md:block"
              >
                <p className="font-bold flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} className="text-dark animate-pulse" />
                  <span>15+ Years Experience</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="py-24 bg-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/services/s8.jpeg"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To provide the fastest, safest, and most reliable roadside assistance across the UAE, ensuring every driver feels supported and secure. We combine modern technology with a human touch to deliver peace of mind.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: faBullseye, text: 'Speed & Efficiency' },
                  { icon: faHandshake, text: 'Trust & Integrity' },
                  { icon: faShieldAlt, text: 'Safety First' },
                  { icon: faSmile, text: 'Customer Happiness' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <FontAwesomeIcon icon={item.icon} className="text-primary text-xl animate-pulse" />
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION WITH COUNTING ===== */}
      <section className="py-20 bg-dark/95 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight"
          >
            By the <span className="text-primary">Numbers</span>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 15, label: 'Years Experience', icon: faClock, suffix: '+' },
              { value: 5000, label: 'Happy Clients', icon: faSmile, suffix: '+' },
              { value: 24, label: 'Availability', icon: faTruck, suffix: '/7' },
              { value: 100, label: 'Satisfaction', icon: faShieldAlt, suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(255,168,1,0.3)' }}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border border-white/10 hover:border-primary/50 transition-all"
              >
                <div className="relative">
                  {/* Background icon */}
                  <FontAwesomeIcon icon={stat.icon} className="text-primary/20 text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  {/* Foreground icon */}
                  <FontAwesomeIcon icon={stat.icon} className="text-primary text-4xl mb-3 relative z-10 animate-float" />
                </div>
                <div className="text-3xl font-extrabold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-24 bg-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight"
          >
            Our <span className="text-primary">Core Values</span>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Reliability', desc: 'We arrive when we say we will.', icon: faShieldAlt },
              { title: 'Professionalism', desc: 'Trained, courteous staff.', icon: faUsers },
              { title: 'Customer First', desc: 'Your safety is our priority.', icon: faSmile },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/20"
              >
                {/* Background floating icons */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <FontAwesomeIcon icon={faCircleNotch} className="absolute -top-5 -right-5 text-primary/5 text-7xl animate-spin-slow" />
                  <FontAwesomeIcon icon={faCar} className="absolute -bottom-5 -left-5 text-accent/5 text-7xl animate-float" />
                </div>
                {/* Icon with continuous float */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="inline-block p-4 bg-primary text-white rounded-2xl mb-6 shadow-lg relative z-10"
                >
                  <FontAwesomeIcon icon={value.icon} className="h-10 w-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{value.desc}</p>

                {/* Glow overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY DRIVERS TRUST US (REDESIGNED) ===== */}
      <section className="py-20 bg-dark/95 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Why Drivers <span className="text-primary">Trust Us</span>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: faAward, text: 'ISO 9001 Certified' },
              { icon: faUsers, text: '50+ Experts' },
              { icon: faClock, text: '24/7 Availability' },
              { icon: faTruck, text: 'Modern Fleet' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="relative mb-3">
                  <FontAwesomeIcon icon={item.icon} className="text-primary text-4xl group-hover:scale-110 transition-transform" />
                  <FontAwesomeIcon icon={faCircleNotch} className="absolute -top-2 -right-2 text-accent/30 text-sm animate-spin" />
                </div>
                <p className="text-white font-medium">{item.text}</p>
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
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Experience the Best?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Contact us now for immediate assistance or to learn more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group relative bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold rounded-full overflow-hidden"
            >
              <Link href="/contact">
                <span className="absolute inset-0 bg-dark/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Get in Touch</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-6 text-lg font-bold rounded-full"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
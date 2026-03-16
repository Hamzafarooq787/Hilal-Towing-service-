"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
      {/* Background floating circles – dark low opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-dark/10 text-6xl"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-secondary/10 text-7xl"
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faCircleNotch} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Need Immediate Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl mb-8 opacity-90"
        >
          Call us now – we’re available 24/7
        </motion.p>

        {/* Button with continuous animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block relative"
        >
          {/* Rotating rings – dark low opacity */}
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-dark/20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-secondary/10"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          />

          <Button
            asChild
            size="lg"
            className="relative bg-white text-primary hover:bg-gray-100 shadow-xl transition-all text-lg px-10 py-6 rounded-full overflow-hidden"
          >
            <Link href="tel:0551348899">
              {/* Shine overlay */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-dark/10 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
              {/* Icon with enhanced pulse */}
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="mr-2 inline-block"
              >
                <FontAwesomeIcon icon={faPhone} />
              </motion.span>
              <span className="relative z-10 font-bold">055 134 8899</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
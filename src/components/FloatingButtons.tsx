"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      {/* Phone Button – larger, red, with signal rings */}
      <div className="relative">
        {/* Signal rings */}
        <motion.span
          className="absolute -inset-3 rounded-full border-2 border-red-500/60"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute -inset-5 rounded-full border border-red-500/40"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
        <motion.a
          href="tel:0551348899"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-11 h-11 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-colors"
        >
          <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
        </motion.a>
      </div>

      {/* WhatsApp Button – larger, green, with signal rings */}
      <div className="relative">
        {/* Signal rings */}
        <motion.span
          className="absolute -inset-3 rounded-full border-2 border-green-500/60"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.span
          className="absolute -inset-5 rounded-full border border-green-500/40"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.a
          href="https://wa.me/971551348899?text=Hello!%20I%20need%20towing%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-11 h-11 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 transition-colors"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
        </motion.a>
      </div>
    </div>
  );
}

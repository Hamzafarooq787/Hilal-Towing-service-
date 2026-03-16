"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faClock,
  faCar,
  faTruck,
  faWrench,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import map components (to avoid SSR issues)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix marker icons in Next.js
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Link from 'next/link';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

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

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

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
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Contact <span className="text-primary">Us</span>
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
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            We're here 24/7 to help you. Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT INFO & FORM ===== */}
      <section className="py-24 bg-dark/95 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
              <p className="text-gray-300 text-lg mb-8">
                Whether you need immediate assistance or have a question, our team is ready to help 24/7.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: faPhone, title: 'Phone', value: '055 134 8899', link: 'tel:0551348899' },
                  { icon: faMapMarkerAlt, title: 'Locations', value: 'Sharjah & Dubai, UAE' },
                  { icon: faEnvelope, title: 'Email', value: 'info@hilaltowing.ae', link: 'mailto:info@hilaltowing.ae' },
                  { icon: faClock, title: 'Working Hours', value: '24/7 - Always Open' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-3 bg-primary text-white rounded-xl shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-300">
                      <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-primary transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick contact buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-6 text-lg font-bold rounded-full overflow-hidden"
                >
                  <Link href="tel:0551348899">
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <FontAwesomeIcon icon={faPhone} className="mr-2 relative z-10 animate-pulse" />
                    <span className="relative z-10">Call Now</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-6 py-6 text-lg font-bold rounded-full"
                >
                  <Link href="https://wa.me/971551348899?text=Hello!%20I%20need%20towing%20assistance." target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-green-400" />
                    <span>WhatsApp</span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="055 134 8899"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-bold rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== REAL INTERACTIVE MAP ===== */}
      <section className="h-[500px] relative overflow-hidden bg-dark">
        {mapLoaded && (
          <MapContainer
            center={[25.276987, 55.296249]} // Center between Sharjah & Dubai
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Sharjah Marker */}
            <Marker position={[25.3463, 55.4209]}>
              <Popup>
                <div className="font-bold text-dark">Sharjah</div>
                <div className="text-sm text-gray-600">Main service area</div>
              </Popup>
            </Marker>
            {/* Dubai Marker */}
            <Marker position={[25.2048, 55.2708]}>
              <Popup>
                <div className="font-bold text-dark">Dubai</div>
                <div className="text-sm text-gray-600">Main service area</div>
              </Popup>
            </Marker>
          </MapContainer>
        )}

        {/* Overlay with service area info */}
        <div className="absolute bottom-8 left-8 z-10 bg-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-2xl animate-pulse" />
            <div>
              <h3 className="text-white font-bold">Sharjah & Dubai</h3>
              <p className="text-gray-400 text-sm">We cover all major areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
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
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
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
            Call us now – we're available 24/7
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
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
              className="group relative bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-bold rounded-full overflow-hidden"
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
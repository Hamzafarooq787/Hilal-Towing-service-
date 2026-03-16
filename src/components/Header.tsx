"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTruck } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo – larger and bolder */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-primary"
          >
            <FontAwesomeIcon icon={faTruck} className="h-10 w-10" />
          </motion.div>
          <span className="text-3xl font-extrabold text-white group-hover:text-primary transition-colors tracking-tight">
            HILAL<span className="text-primary">TOWING</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-primary relative ${pathname === link.href ? 'text-primary' : 'text-gray-300'
                }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Phone Number (Desktop) with red color and signal rings */}
        <div className="hidden md:flex items-center relative">
          <div className="relative">
            {/* Signal rings */}
            <motion.span
              className="absolute -inset-2 rounded-full border-2 border-red-500/50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute -inset-4 rounded-full border border-red-500/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
            <a
              href="tel:0551348899"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold shadow-lg transition-all"
            >
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
              <span>055 134 8899</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-dark border-l border-white/10">
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium py-3 px-4 rounded transition-colors ${pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-300 hover:bg-white/5 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:0551348899"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-5 py-3 rounded-full font-bold"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
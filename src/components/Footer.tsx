import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon icon={faTruck} className="text-primary text-3xl" />
              <h3 className="text-2xl font-bold text-white">HILAL<span className="text-primary">TOWING</span></h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional roadside assistance in Sharjah and Dubai. Available 24/7, always ready to help.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FontAwesomeIcon icon={faFacebook} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2 text-primary">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-primary pl-3">Our Services</h3>
            <ul className="space-y-2">
              {['Towing', 'Breakdown', 'Fuel Delivery', 'JumpStart'].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2 text-primary">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-primary pl-3">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-primary mt-1" />
                <a href="tel:0551348899" className="text-gray-400 hover:text-primary transition-colors">
                  055 134 8899
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                <span className="text-gray-400">Sharjah & Dubai, UAE</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary mt-1" />
                <a href="mailto:info@hilaltowing.ae" className="text-gray-400 hover:text-primary transition-colors">
                  info@hilaltowing.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Hilal Towing Service. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with{' '}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-primary no-underline hover:text-primary/80 transition-colors"
            >
              Linkedo
            </a>
            ❤
          </p>
        </div>
      </div>
    </footer>
  );
}

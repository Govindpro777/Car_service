import Link from 'next/link';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold">Elite Auto Detailing</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional car detailing services that restore your vehicle to pristine condition. 
              Experience the difference with our expert care and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services/interior" className="text-gray-300 hover:text-white transition-colors">
                  Car Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/window-tinting" className="text-gray-300 hover:text-white transition-colors">
                  Auto Window Tinting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/interior" className="text-gray-300 hover:text-white transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/exterior" className="text-gray-300 hover:text-white transition-colors">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/window-tinting" className="text-gray-300 hover:text-white transition-colors">
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link href="/services/complete-package" className="text-gray-300 hover:text-white transition-colors">
                  Complete Package
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Elite Auto Detailing | All Rights Reserved. Made by <span className="text-orange-400">WebCraft Studios</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
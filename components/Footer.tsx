import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-blue-500 font-semibold text-lg mb-4">
              Learn More
            </h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
            </ul>

            <h3 className="text-blue-500 font-semibold text-lg mb-2">Social</h3>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#">
                <Facebook className="text-white hover:text-blue-500 w-5 h-5" />
              </a>
              <a href="#">
                <Instagram className="text-white hover:text-blue-500 w-5 h-5" />
              </a>
              <a href="#">
                <X className="text-white hover:text-blue-500 w-5 h-5" />
              </a>
              <a href="#">
                <Youtube className="text-white hover:text-blue-500 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div>
            <h3 className="text-blue-500 font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300 mb-6">Email: info@haitchbarber.ca</p>

            <h3 className="text-blue-500 font-semibold text-lg mb-2">
              Address
            </h3>
            <p className="text-gray-300">
              1620 Idylwyld Dr N Bay 3B,
              <br />
              Saskatoon, SK S7L 6W6
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-blue-500 font-semibold text-lg mb-4">
              Opening Hours
            </h3>
            <div className="text-gray-300 space-y-2">
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:30 a.m. – 10:30</span>
              </div>
              <div className="flex justify-between">
                <span>Monday</span>
                <span>10:30 a.m. – 08:30</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>10:30 a.m. – 08:30</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>10:30 a.m. – 11:00</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>10:30 a.m. – 11:00</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>10:30 a.m. – 10:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:30 a.m. – 11:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>
            © 2025 Car Services | All Rights Reserved. Made by{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Hachi agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

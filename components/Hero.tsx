"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Import } from "lucide-react";
import car from "./../public/car2.png";
import Image from "next/image";

const Hero = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Revive,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Restore,
                </span>
                <br />
                Renew.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Premium detailing services that bring out the best in your
                vehicle. Experience unmatched automotive elegance with our
                expert care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Gift Card
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-orange-400 text-sm">PHONE</p>
                  <p className="font-semibold">+1 902 901 5502</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-orange-400 text-sm">LOCATION</p>
                  <p className="font-semibold">Nova Scotia, Canada</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-orange-400 text-sm">OPEN HOURS</p>
                  <p className="font-semibold">Mon-Sun: 10am-6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Before/After Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-80">
                <div
                  className={`absolute inset-0 transition-transform duration-700 ${
                    isAfter ? "translate-x-0" : "translate-x-0"
                  }`}
                >
                  <Image
                    src={car}
                    alt={isAfter ? "After detailing" : "Before detailing"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Toggle Button */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
    </section>
  );
};

export default Hero;

"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Star } from "lucide-react";

const Hero = () => {
  const [showAfter, setShowAfter] = useState(false);

  // Using placeholder images - replace these URLs with your actual image paths
  const beforeImage = "/hero1.jpg";
  const afterImage =
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dark textured background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight mb-6">
                Instantly Boost Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Confidence!
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Premium detailing services that bring out the best in your
                vehicle. Experience unmatched automotive elegance with our
                expert care.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
            </div>

            {/* Customer Review Card */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 max-w-md">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-yellow-400 text-sm ml-2">5/5</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Alex Johnson (Local Guide Level 7)
                  </p>
                  <p className="text-xs text-gray-500">Google Review</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Quite possibly the best car detailing service I've ever had.
                Very impressed with the attention to detail and passion for
                providing a top notch service. You won't go wrong booking here!"
              </p>
            </div>
          </div>

          {/* Right Content - Before/After Card */}
          <div className="rounded-xl shadow-2xl overflow-hidden relative group">
            {/* Image section with before/after split */}
            <div className="p-2 bg-gray-800">
              <div className="relative w-full h-[560px] rounded-xl overflow-hidden">
                {/* Split view container */}
                <div className="relative w-full h-full">
                  {/* Before image (left side) */}
                  <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
                    <img
                      src={beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: "left center" }}
                    />
                    <div className="absolute bottom-4 left-4 transition-all duration-300 transform group-hover:translate-y-[-4px]">
                      <span className="bg-red-500 text-white px-3 py-2 rounded-[8px] text-sm font-semibold">
                        Before
                      </span>
                    </div>
                  </div>

                  {/* After image (right side) */}
                  <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
                    <img
                      src={afterImage}
                      alt="After"
                      className="w-full h-full object-cover scale-100 transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: "right center" }}
                    />
                    <div className="absolute bottom-4 right-4 transition-all duration-300 transform group-hover:translate-y-[-4px]">
                      <span className="bg-blue-500 text-white px-3 py-2 rounded-[8px] text-sm font-semibold">
                        After
                      </span>
                    </div>
                  </div>

                  {/* Center divider line */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-0.5"></div>

                  {/* Center + icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-90">
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// "use client";

// import { useState } from "react";
// import { Phone, MapPin, Clock, Import } from "lucide-react";
// import car from "./../public/car2.png";
// import Image from "next/image";

// const Hero = () => {
//   const [isAfter, setIsAfter] = useState(false);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 Revive,
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//                   Restore,
//                 </span>
//                 <br />
//                 Renew.
//               </h1>
//               <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//                 Premium detailing services that bring out the best in your
//                 vehicle. Experience unmatched automotive elegance with our
//                 expert care.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//                 Learn More
//               </button>
//               <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
//                 Get Gift Card
//               </button>
//             </div>

//             {/* Contact Info */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Phone className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">PHONE</p>
//                   <p className="font-semibold">+1 902 901 5502</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <MapPin className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">LOCATION</p>
//                   <p className="font-semibold">Nova Scotia, Canada</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Clock className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">OPEN HOURS</p>
//                   <p className="font-semibold">Mon-Sun: 10am-6pm</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Before/After Card */}
//           <div className="relative">
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//               <div className="relative h-80">
//                 <div
//                   className={`absolute inset-0 transition-transform duration-700 ${
//                     isAfter ? "translate-x-0" : "translate-x-0"
//                   }`}
//                 >
//                   <Image
//                     src={car}
//                     alt={isAfter ? "After detailing" : "Before detailing"}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Toggle Button */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import { useState } from "react";
// import { Phone, MapPin, Clock } from "lucide-react";
// import before1 from "@/public/before1.jpg";
// import after1 from "@/public/after1.jpg";
// import Image from "next/image";

// const Hero = () => {
//   const [isAfter, setIsAfter] = useState(false);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 Revive,
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//                   Restore,
//                 </span>
//                 <br />
//                 Renew.
//               </h1>
//               <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//                 Premium detailing services that bring out the best in your
//                 vehicle. Experience unmatched automotive elegance with our
//                 expert care.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//                 Learn More
//               </button>
//               <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
//                 Get Gift Card
//               </button>
//             </div>

//             {/* Contact Info */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Phone className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">PHONE</p>
//                   <p className="font-semibold">+1 902 901 5502</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <MapPin className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">LOCATION</p>
//                   <p className="font-semibold">Nova Scotia, Canada</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Clock className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">OPEN HOURS</p>
//                   <p className="font-semibold">Mon-Sun: 10am-6pm</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Before/After Card */}
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//             {/* Image section */}
//             <div className="relative w-full h-80">
//               <Image
//                 src={isAfter ? after1 : before1}
//                 alt={isAfter ? "After detailing" : "Before detailing"}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Toggle button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setIsAfter(!isAfter)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
//               >
//                 {isAfter ? "Show Before" : "Show After"}
//               </button>
//             </div>

//             {/* Text content */}
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {isAfter ? "After Professional Detailing" : "Before Detailing"}
//               </h3>
//               <p className="text-gray-600">
//                 {isAfter
//                   ? "Restored to pristine condition with our expert care"
//                   : "See the transformation with our detailing services"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave */}
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import { useState } from "react";
// import { Phone, MapPin, Clock } from "lucide-react";

// const Hero = () => {
//   const [showAfter, setShowAfter] = useState(false);

//   // Using placeholder images - replace these URLs with your actual image paths
//   const beforeImage = "/unwashed1.jpg";
//   const afterImage =
//     "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 Revive,
//                 <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
//                   Restore,
//                 </span>
//                 <br />
//                 Renew.
//               </h1>
//               <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//                 Premium detailing services that bring out the best in your
//                 vehicle. Experience unmatched automotive elegance with our
//                 expert care.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//                 Learn More
//               </button>
//               <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
//                 Get Gift Card
//               </button>
//             </div>

//             {/* Contact Info */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Phone className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">PHONE</p>
//                   <p className="font-semibold">+1 902 901 5502</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <MapPin className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">LOCATION</p>
//                   <p className="font-semibold">Nova Scotia, Canada</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <div className="bg-orange-500 p-2 rounded-lg">
//                   <Clock className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-orange-400 text-sm">OPEN HOURS</p>
//                   <p className="font-semibold">Mon-Sun: 10am-6pm</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Before/After Card */}
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//             {/* Image section */}
//             <div className="relative w-full h-80 overflow-hidden">
//               <img
//                 src={showAfter ? afterImage : beforeImage}
//                 alt={
//                   showAfter
//                     ? "After detailing - clean, polished car"
//                     : "Before detailing - dirty, unpolished car"
//                 }
//                 className="w-full h-full object-cover transition-all duration-500 ease-in-out"
//               />

//               {/* Optional: Add a subtle overlay effect during transition */}
//               <div
//                 className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//                   showAfter ? "opacity-0" : "opacity-0"
//                 }`}
//               ></div>
//             </div>

//             {/* Toggle button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={() => setShowAfter(!showAfter)}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 {showAfter ? "Show Before" : "Show After"}
//               </button>
//             </div>

//             {/* Text content */}
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 {showAfter
//                   ? "After Professional Detailing"
//                   : "Before Detailing"}
//               </h3>
//               <p className="text-gray-600">
//                 {showAfter
//                   ? "Restored to pristine condition with our expert care"
//                   : "See the transformation with our detailing services"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
          <div className=" rounded-xl shadow-2xl overflow-hidden relative">
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
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "left center" }}
                    />
                    <div className="absolute bottom-4 left-4">
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
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "right center" }}
                    />
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-2 rounded-[8px] text-sm font-semibold">
                        After
                      </span>
                    </div>
                  </div>

                  {/* Center divider line */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-0.5"></div>

                  {/* Center toggle button (optional) */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      onClick={() => setShowAfter(!showAfter)}
                      className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                      </svg>
                    </button>
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

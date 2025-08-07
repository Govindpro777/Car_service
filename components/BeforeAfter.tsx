// "use client";

// import { useState } from "react";

// const BeforeAfter = () => {
//   const [activeSlider, setActiveSlider] = useState(0);

//   const comparisons = [
//     {
//       before: "/unwashed1.jpg",
//       after:
//         "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Complete Exterior Detail",
//       description: "Full paint correction and ceramic coating application",
//     },
//     {
//       before: "/unwashed2.jpeg",
//       after:
//         "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Interior Deep Clean",
//       description: "Professional leather treatment and deep cleaning",
//     },
//     {
//       before: "/unwashed3.webp",
//       after:
//         "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Window Tinting",
//       description: "Premium ceramic window tint installation",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
//             TRANSFORMATION
//           </p>
//           <h2 className="text-4xl font-bold text-white mb-6">Before & After</h2>
//           <p className="text-blue-100 text-lg max-w-2xl mx-auto">
//             See the incredible transformations we achieve with our professional
//             detailing services.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {comparisons.map((comparison, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-2xl overflow-hidden"
//             >
//               <div className="relative h-64">
//                 <div className="absolute inset-0 grid grid-cols-2">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={comparison.before}
//                       alt="Before"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                       Before
//                     </div>
//                   </div>
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={comparison.after}
//                       alt="After"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                       After
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider Line */}
//                 <div className="absolute top-0 left-1/2 w-1 h-full bg-white transform -translate-x-1/2 z-10" />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {comparison.title}
//                 </h3>
//                 <p className="text-gray-600">{comparison.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfter;
"use client";

import { useState } from "react";

const BeforeAfter = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const comparisons = [
    {
      before: "/unwashed2.jpeg",
      after:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Interior Deep Clean",
      description: "Professional leather treatment",
    },
    {
      before: "/unwashed3.webp",
      after:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Window Tinting",
      description: "Premium ceramic window tint",
    },
    {
      before:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Paint Protection",
      description: "PPF installation and polishing",
    },
    {
      before:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Engine Bay Clean",
      description: "Complete engine detailing service",
    },
    {
      before:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Wheel Restoration",
      description: "Professional wheel cleaning and coating",
    },

    {
      before:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Detail Package",
      description: "Premium full-service detailing",
    },
    {
      before:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Classic Car Restoration",
      description: "Vintage vehicle detailing expertise",
    },
    {
      before:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "SUV Complete Detail",
      description: "Large vehicle specialized cleaning",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#003B7A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e40af 0%, transparent 50%)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1350px] mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Before/After
            <span className="inline-block ml-4 text-3xl">✨</span>
          </h1>
          <p className="text-xl text-gray-300 font-light">
            See The Difference A Detail Makes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-72 h-72 mx-auto mb-4">
                {/* Blue border frame */}
                <div className="absolute inset-0 rounded-xl border-4 border-blue-500 shadow-lg shadow-blue-500/30"></div>

                {/* Image container */}
                <div className="absolute inset-2 rounded-lg overflow-hidden gap-4">
                  <div className="relative w-full h-full">
                    {/* Before/After split with gap */}
                    <div className="absolute inset-0 flex gap-1">
                      {/* Before side */}
                      <div className="flex-1 relative overflow-hidden rounded-l-lg">
                        <img
                          src={comparison.before}
                          alt="Before"
                          className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                        />
                      </div>

                      {/* After side */}
                      <div className="flex-1 relative overflow-hidden rounded-r-lg">
                        <img
                          src={comparison.after}
                          alt="After"
                          className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                        />
                      </div>
                    </div>

                    {/* Center plus icon overlay */}
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

                    {/* Before/After labels */}
                    <div className="absolute bottom-2 left-2 z-30">
                      <span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-[8px] font-semibold">
                        Before
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 z-30">
                      <span className="bg-blue-600 text-white text-xs px-3 py-2 rounded-[8px] font-semibold">
                        After
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-xl border-4 border-blue-400 animate-pulse shadow-xl shadow-blue-400/50"></div>
                )}
              </div>

              {/* Service info */}
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {comparison.title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {comparison.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

// "use client";

// import { useState } from "react";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = [
//     { id: "all", name: "All Work" },
//     { id: "interior", name: "Interior" },
//     { id: "exterior", name: "Exterior" },
//     { id: "tinting", name: "Window Tinting" },
//   ];

//   const galleryItems = [
//     {
//       id: 1,
//       category: "exterior",
//       image: "/exterior1.webp",
//       title: "Exterior Detail - BMW",
//     },
//     {
//       id: 2,
//       category: "interior",
//       image: "/interior1.jpg",
//       title: "Interior Detail - Luxury Car",
//     },
//     {
//       id: 3,
//       category: "tinting",
//       image: "/window.jpg",
//       title: "Window Tinting Service",
//     },
//     {
//       id: 4,
//       category: "exterior",
//       image:
//         "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       title: "Professional Wash & Wax",
//     },
//     {
//       id: 5,
//       category: "interior",
//       image:
//         "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       title: "Leather Seat Treatment",
//     },
//     {
//       id: 6,
//       category: "exterior",
//       image:
//         "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       title: "Paint Correction",
//     },
//   ];

//   const filteredItems =
//     selectedCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === selectedCategory);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
//             OUR WORK
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Take a look at some of our recent work and see the transformation we
//             bring to every vehicle.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((item) => (
//             <div key={item.id} className="group cursor-pointer">
//               <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

"use client";

import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const categories = [
    { id: "all", name: "All Work", icon: "🎨" },
    { id: "interior", name: "Interior", icon: "🛋️" },
    { id: "exterior", name: "Exterior", icon: "🚗" },
    { id: "tinting", name: "Window Tinting", icon: "🪟" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "exterior",
      image: "/exterior1.webp",
      title: "Exterior Detail - BMW",
      description:
        "Complete exterior transformation with paint correction and ceramic coating",
    },
    {
      id: 2,
      category: "interior",
      image: "/interior1.jpg",
      title: "Interior Detail - Luxury Car",
      description:
        "Deep cleaning and leather conditioning for premium interiors",
    },
    {
      id: 3,
      category: "tinting",
      image: "/window.jpg",
      title: "Window Tinting Service",
      description: "Professional ceramic tint installation for UV protection",
    },
    {
      id: 4,
      category: "exterior",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Professional Wash & Wax",
      description: "Premium wash and wax service for showroom shine",
    },
    {
      id: 5,
      category: "interior",
      image:
        "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Leather Seat Treatment",
      description: "Specialized leather care and protection treatment",
    },
    {
      id: 6,
      category: "exterior",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Paint Correction",
      description: "Advanced paint correction for swirl mark removal",
    },
    {
      id: 7,
      category: "tinting",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Commercial Tinting",
      description:
        "Fleet vehicle tinting services for businesses is the best way",
    },
    {
      id: 8,
      category: "interior",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Dashboard Restoration",
      description: "Complete dashboard and trim restoration service",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative py-24 bg-[#003B7A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Gallery Showcase
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Witness the incredible transformations we deliver. Each project
            represents our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Advanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-2xl"
                  : "bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              <span className="flex items-center space-x-2">
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-2xl blur-xl"></div>
              )}
            </button>
          ))}
        </div>

        {/* Advanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    onClick={() => setSelectedImage(item)}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
              5★
            </div>
            <div className="text-blue-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-blue-200">Support Available</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-screen object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-lg rounded-xl p-4 text-white">
              <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

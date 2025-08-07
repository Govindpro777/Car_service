// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Rob Edmonson",
//       rating: 5,
//       text: "I brought my car to A&B Detailing and it came out looking better than it did the day I bought it.",
//     },
//     {
//       name: "Jennifer White-Grandy",
//       rating: 5,
//       text: "Absolutely LOVE Haitch Barber shop for Tinting Services! For my Honda Civic Sedan they were very thorough and the job was excellent!",
//     },
//     {
//       name: "Harry Sanders",
//       rating: 5,
//       text: "Thanks to their car detailing and tinting services from A&B Detailing and I can honestly say I am a customer of the quality work they have in superior tinting.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
//       <div className="max-width-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
//             WHAT THEY SAY ABOUT US
//           </p>
//           <h2 className="text-4xl font-bold text-white mb-6">Testimonials</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-xl p-6 shadow-xl">
//               <div className="flex items-center mb-4">
//                 <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-blue-600 font-bold text-lg">
//                     {testimonial.name.charAt(0)}
//                   </span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">
//                     {testimonial.name}
//                   </h4>
//                   <div className="flex text-yellow-400">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i}>★</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic">"{testimonial.text}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";
import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  const testimonials = [
    {
      name: "Rob Edmonson",
      rating: 5,
      text: "I brought my car to A&B Detailing and it came out looking better than it did the day I bought it. The attention to detail is incredible!",
      role: "Car Enthusiast",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Jennifer White-Grandy",
      rating: 5,
      text: "Absolutely LOVE Car Services for Tinting Services! For my Honda Civic Sedan they were very thorough and the job was excellent! Highly .",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Harry Sanders",
      rating: 5,
      text: "Thanks to their car detailing and tinting services from A&B Detailing and I can honestly say I am a customer of the quality work.",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "Outstanding service! My car looks brand new after their detailing work. The team is professional, friendly, and truly cares about quality.",
      role: "Happy Client",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mike Thompson",
      rating: 5,
      text: "Best tinting service in town! Clean work, fair prices, and excellent customer service. Will definitely be coming back for all my car needs.",
      role: "Loyal Customer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    // Load Swiper CSS and JS from CDN
    const loadSwiper = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="swiper"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css";
        document.head.appendChild(link);
      }

      // Load JS
      if (!window.Swiper) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js";
        script.onload = initSwiper;
        document.body.appendChild(script);
      } else {
        initSwiper();
      }
    };

    const initSwiper = () => {
      if (swiperRef.current && window.Swiper && !swiperInstanceRef.current) {
        swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          },
          effect: "slide",
          speed: 800,
        });
      }
    };

    loadSwiper();

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-24 bg-[#003B7A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            WHAT OUR CUSTOMERS SAY
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our premium detailing and tinting services.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <div ref={swiperRef} className="swiper testimonials-swiper">
            <div className="swiper-wrapper pb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="swiper-slide">
                  <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <svg
                        className="w-10 h-10 text-orange-400 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white text-lg leading-relaxed mb-8 font-light">
                      "
                      {testimonial.text.length > 150
                        ? testimonial.text.substring(0, 150) + "..."
                        : testimonial.text}
                      "
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-orange-400/50 group-hover:border-orange-400 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-200 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="swiper-button-next !text-white !w-12 !h-12 !bg-gradient-to-r !from-orange-500 !to-pink-500 !rounded-full !shadow-lg hover:!scale-110 !transition-all !duration-300 after:!text-lg after:!font-bold"></div>
            <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-gradient-to-r !from-orange-500 !to-pink-500 !rounded-full !shadow-lg hover:!scale-110 !transition-all !duration-300 after:!text-lg after:!font-bold"></div>

            {/* Pagination */}
            <div className="swiper-pagination !bottom-0"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            <span>Book Your Service Today</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #f97316, #ec4899) !important;
        }
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

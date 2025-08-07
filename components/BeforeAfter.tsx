"use client";

import { useState } from "react";

const BeforeAfter = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  const comparisons = [
    {
      before: "/unwashed1.jpg",
      after:
        "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Complete Exterior Detail",
      description: "Full paint correction and ceramic coating application",
    },
    {
      before: "/unwashed2.jpeg",
      after:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Interior Deep Clean",
      description: "Professional leather treatment and deep cleaning",
    },
    {
      before: "/unwashed3.webp",
      after:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Window Tinting",
      description: "Premium ceramic window tint installation",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
            TRANSFORMATION
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">Before & After</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            See the incredible transformations we achieve with our professional
            detailing services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={comparison.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={comparison.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="absolute top-0 left-1/2 w-1 h-full bg-white transform -translate-x-1/2 z-10" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {comparison.title}
                </h3>
                <p className="text-gray-600">{comparison.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

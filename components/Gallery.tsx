'use client';

import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'tinting', name: 'Window Tinting' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'exterior',
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Exterior Detail - BMW"
    },
    {
      id: 2,
      category: 'interior',
      image: "https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Interior Detail - Luxury Car"
    },
    {
      id: 3,
      category: 'tinting',
      image: "https://images.unsplash.com/photo-1625542927806-5ca2e4cddb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Window Tinting Service"
    },
    {
      id: 4,
      category: 'exterior',
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Professional Wash & Wax"
    },
    {
      id: 5,
      category: 'interior',
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Leather Seat Treatment"
    },
    {
      id: 6,
      category: 'exterior',
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Paint Correction"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR WORK
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take a look at some of our recent work and see the transformation we bring to every vehicle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
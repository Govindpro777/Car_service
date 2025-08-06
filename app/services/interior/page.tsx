// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Link from 'next/link';
// import { Check, ArrowRight } from 'lucide-react';

// export default function InteriorDetailing() {
//   const services = [
//     "Complete vacuum of seats, carpets, and trunk",
//     "Deep cleaning of dashboard and console",
//     "Leather seat conditioning and protection",
//     "Window cleaning (interior)",
//     "Air vent cleaning and deodorizing",
//     "Floor mat cleaning and treatment",
//     "Door panel and trim cleaning",
//     "Cup holder and storage area cleaning"
//   ];

//   const packages = [
//     {
//       name: "Basic Interior",
//       price: "$89",
//       services: ["Vacuum", "Dashboard clean", "Window cleaning", "Basic conditioning"]
//     },
//     {
//       name: "Premium Interior",
//       price: "$149",
//       services: ["Everything in Basic", "Leather treatment", "Deep carpet clean", "Odor elimination"]
//     },
//     {
//       name: "Luxury Interior",
//       price: "$199",
//       services: ["Everything in Premium", "Steam cleaning", "Fabric protection", "Complete detailing"]
//     }
//   ];

//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* Hero Section */}
//         <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
//           </div>

//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="text-white">
//                 <div className="mb-4">
//                   <span className="text-orange-400">Services</span>
//                   <span className="mx-2">|</span>
//                   <span>Interior Detailing</span>
//                 </div>
//                 <h1 className="text-5xl font-bold mb-6">Interior Car Detailing</h1>
//                 <p className="text-xl text-blue-100 mb-8">
//                   Transform your car's interior with our comprehensive cleaning and conditioning services.
//                   We bring your cabin back to showroom condition.
//                 </p>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
//                 >
//                   Book Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </div>

//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Interior car detailing"
//                   className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Our interior detailing service covers every aspect of your car's cabin to ensure
//                 a pristine and comfortable driving experience.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 mb-16">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h3>
//                 <div className="space-y-4">
//                   {services.map((service, index) => (
//                     <div key={index} className="flex items-start space-x-3">
//                       <div className="bg-green-100 p-1 rounded-full mt-1">
//                         <Check className="h-4 w-4 text-green-600" />
//                       </div>
//                       <span className="text-gray-700">{service}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                   alt="Interior cleaning process"
//                   className="w-full h-64 object-cover rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>

//             {/* Packages */}
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Packages</h3>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {packages.map((pkg, index) => (
//                 <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
//                   <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
//                   <ul className="space-y-3">
//                     {pkg.services.map((service, serviceIndex) => (
//                       <li key={serviceIndex} className="flex items-center space-x-2">
//                         <Check className="h-4 w-4 text-green-600" />
//                         <span className="text-gray-700">{service}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
//                   >
//                     Choose Package
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Before/After Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Before & After</h2>
//               <p className="text-gray-600 text-lg">See the amazing transformation our interior detailing provides</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                   alt="Before interior detailing"
//                   className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900">Before</h3>
//                 <p className="text-gray-600">Worn and dirty interior</p>
//               </div>

//               <div className="text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                   alt="After interior detailing"
//                   className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900">After</h3>
//                 <p className="text-gray-600">Clean, fresh, and like-new interior</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// "use client";

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import interior1 from "@/public/interior.png";
import Image from "next/image";
import interior2 from "@/public/interior2.png";

export default function InteriorDetailingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    package: "",
    reason: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Information sent successfully!");
  };

  const services = [
    "Exterior Wash",
    "Full Service Wash",
    "Carpet Shampoo",
    "Interior Super Clean",
    "Bumper To Bumper",
  ];

  const packages = [
    "Ultimate",
    "Deluxe",
    "Express",
    "Interior Ultimate",
    "Interior Deluxe",
    "Engine Bay",
    "Paint Decontamination",
  ];

  const handlePackageChange = (pkg: any, checked: any) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        package: prev.package ? `${prev.package}, ${pkg}` : pkg,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        package: prev.package
          .split(", ")
          .filter((p) => p !== pkg)
          .join(", "),
      }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Header */}
        <header className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center justify-center">
              <div className="text-white text-sm">
                <span>Home</span>
                <span className="mx-2">|</span>
                <span>Car Detailing</span>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3">
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-8">
                INTERIOR CAR DETAILING
              </h1>

              {/* Hero Image and Description */}
              <div className="bg-gray-900/50 rounded-lg overflow-hidden mb-8">
                <Image
                  src={interior1}
                  alt="Interior detailing service"
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Ultimate Car Detailing Experience
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    At A & B Detailing, we are passionate about restoring the
                    beauty and enhancing the overall appearance of your vehicle.
                    Our professional car detailing services go beyond a regular
                    car wash, providing a comprehensive and meticulous cleaning
                    and restoration experience for your vehicle's interior and
                    exterior.
                  </p>
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Interior Ultimate */}
                <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Interior ultimate detailing service"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Interior Ultimate
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Seats and carpets are thoroughly steam cleaned and
                      shampooed. Interior is detailed, including the dash,
                      console, steering wheel, door frames, and panels.
                      Protective coat applied to interior surfaces. Windows
                      polished. Seats, carpets, and mats vacuumed with
                      high-quality machines.
                    </p>
                    <button className="text-orange-400 text-sm font-semibold border-b border-orange-400 hover:text-orange-300 transition-colors">
                      SEE DETAIL
                    </button>
                  </div>
                </div>

                {/* Interior Deluxe */}
                <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                  <Image
                    src={interior2}
                    alt="Interior deluxe detailing service"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Interior Deluxe
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Dash, console, steering wheel, and door frames are brushed
                      and wiped. Windows cleaned inside and out. Seats, carpets,
                      and mats vacuumed with high-quality machines.
                    </p>
                    <button className="text-orange-400 text-sm font-semibold border-b border-orange-400 hover:text-orange-300 transition-colors">
                      SEE DETAIL
                    </button>
                  </div>
                </div>
              </div>

              {/* See Our Extras Button */}
            </div>

            {/* Right Column - Services Only */}
            <div className="lg:col-span-1 mt-20">
              {/* Our Services */}
              <div className="bg-gray-900/70 rounded-lg p-6">
                <h3 className="text-orange-400 text-xl font-bold mb-6">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quote Form Section - Full Width Below */}
          <div className="mt-12">
            <div className="bg-blue-800/30 py-4 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                SEE OUR EXTRAS
              </button>
            </div>
          </div>

          {/* Quote Form */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Get a Quote
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                We are looking forward to hearing from you!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Your Name Here"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Vehicle Year *
                  </label>
                  <input
                    type="text"
                    name="vehicleYear"
                    placeholder="Enter Vehicle Year"
                    value={formData.vehicleYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Vehicle Make *
                  </label>
                  <input
                    type="text"
                    name="vehicleMake"
                    placeholder="i.e Toyota"
                    value={formData.vehicleMake}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    name="vehicleModel"
                    placeholder="i.e Prius V"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Package *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {packages.map((pkg) => (
                    <label key={pkg} className="flex items-center">
                      <input
                        type="checkbox"
                        name="package"
                        value={pkg}
                        onChange={(e) =>
                          handlePackageChange(pkg, e.target.checked)
                        }
                        className="mr-2"
                      />
                      <span className="text-gray-700 text-sm">{pkg}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Reason For Contact *
                </label>
                <textarea
                  name="reason"
                  placeholder="Ask For Details or For Any Question / Quote"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                  required
                />
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded font-semibold transition-colors"
                >
                  Send Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

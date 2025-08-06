// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Link from 'next/link';
// import { Check, ArrowRight, Shield, Sun, Eye } from 'lucide-react';

// export default function WindowTinting() {
//   const benefits = [
//     {
//       icon: <Sun className="h-8 w-8" />,
//       title: "UV Protection",
//       description: "Blocks up to 99% of harmful UV rays"
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Privacy & Security",
//       description: "Enhanced privacy and theft deterrent"
//     },
//     {
//       icon: <Eye className="h-8 w-8" />,
//       title: "Glare Reduction",
//       description: "Reduces glare for safer driving"
//     }
//   ];

//   const tintOptions = [
//     {
//       name: "Ceramic Tint",
//       price: "$299",
//       opacity: "50% - 5%",
//       features: ["Premium ceramic film", "Maximum heat rejection", "Non-metallic", "Lifetime warranty"]
//     },
//     {
//       name: "Carbon Tint",
//       price: "$249",
//       opacity: "50% - 20%",
//       features: ["Carbon particle film", "Good heat rejection", "No fading", "5-year warranty"]
//     },
//     {
//       name: "Standard Tint",
//       price: "$199",
//       opacity: "50% - 35%",
//       features: ["Quality dyed film", "Basic heat rejection", "Affordable option", "3-year warranty"]
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
//                   <span>Window Tinting</span>
//                 </div>
//                 <h1 className="text-5xl font-bold mb-6">Auto Window Tinting</h1>
//                 <p className="text-xl text-blue-100 mb-8">
//                   Professional window tinting services for enhanced privacy, UV protection,
//                   and improved comfort. Choose from premium ceramic, carbon, or standard films.
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
//                   src="https://images.unsplash.com/photo-1625542927806-5ca2e4cddb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Window tinting service"
//                   className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Window Tinting?</h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Window tinting offers numerous benefits beyond just aesthetics. Protect yourself and your vehicle.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mb-16">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="text-center">
//                   <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Tint Options */}
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">Tint Options</h3>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {tintOptions.map((option, index) => (
//                 <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h4>
//                   <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
//                   <div className="text-gray-600 mb-6">Opacity: {option.opacity}</div>
//                   <ul className="space-y-3">
//                     {option.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center space-x-2">
//                         <Check className="h-4 w-4 text-green-600" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href="/contact"
//                     className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
//                   >
//                     Choose Option
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
//               <p className="text-gray-600 text-lg">See the difference professional window tinting makes</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                   alt="Before window tinting"
//                   className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900">Before</h3>
//                 <p className="text-gray-600">Clear windows with no protection</p>
//               </div>

//               <div className="text-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1625542927806-5ca2e4cddb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                   alt="After window tinting"
//                   className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900">After</h3>
//                 <p className="text-gray-600">Professional tint with UV protection</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Legal Information */}
//         <section className="py-16 bg-blue-900">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h3 className="text-2xl font-bold text-white mb-4">Legal Tint Levels</h3>
//             <p className="text-blue-100 leading-relaxed">
//               We ensure all our window tinting services comply with local regulations.
//               Our team will advise you on the legal tint percentages for your area and vehicle type.
//               Most areas allow 70% VLT on front windows and 50% or darker on rear windows and back glass.
//             </p>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AutoWindowTintingPage() {
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
    "Professional Installation",
    "Easy Maintenance",
    "Fade Reduction",
    "Excellent Customer Service",
  ];

  const otherServices = ["Tail light tinting", "Sun strip"];

  const packages = [
    "Premium Ceramic",
    "Carbon Film",
    "Dyed Film",
    "Metallic Film",
    "Crystalline",
    "3M Ceramic",
    "Full Vehicle",
    "Front Windows Only",
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
            <nav className="flex items-center justify-center mb-8">
              <div className="text-white text-sm">
                <span>Services</span>
                <span className="mx-2">|</span>
                <span>Auto Window Tinting</span>
              </div>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">
              AUTO WINDOW TINTING
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3">
              {/* Hero Image and Description */}
              <div className="bg-gray-900/50 rounded-lg overflow-hidden mb-8 relative">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Auto window tinting service"
                  className="w-full h-80 object-cover"
                />

                {/* Overlay text */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white text-center">
                    Streamlined Safety
                  </h2>
                </div>
              </div>

              {/* Service Description */}
              <div className="text-white space-y-6 mb-8">
                <p className="leading-relaxed">
                  At A&B Detailing, we offer professional auto window tinting
                  services to elevate both the style and functionality of your
                  vehicle. Our skilled technicians are well-versed in the art of
                  window tinting, utilizing high-quality films that provide
                  numerous benefits.
                </p>

                <p className="leading-relaxed">
                  With precision and expertise, we apply window tints that not
                  only enhance privacy and reduce glare but also protect against
                  harmful UV rays and heat. Whether you desire a sleek,
                  sophisticated look or seek to improve the comfort and energy
                  efficiency of your vehicle, our auto window tinting service is
                  tailored to meet your specific needs.
                </p>

                <div className="border-t border-gray-600 pt-6">
                  <p className="leading-relaxed">
                    One of the primary benefits of auto window tinting is
                    improved privacy. By applying tinted films to your vehicle's
                    windows, we create a barrier that shields the interior from
                    prying eyes, allowing you to enjoy a heightened sense of
                    security and seclusion. Additionally, window tinting helps
                    reduce glare caused by sunlight and headlights, creating a
                    more comfortable driving experience and enhancing
                    visibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="lg:col-span-1">
              {/* We are the best */}
              <div className="bg-gray-900/70 rounded-lg p-6 mb-6">
                <h3 className="text-orange-400 text-xl font-bold mb-6 border-b border-orange-400 pb-2">
                  We are the best
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

              {/* Other Services */}
              <div className="bg-gray-900/70 rounded-lg p-6 mb-6">
                <h3 className="text-orange-400 text-xl font-bold mb-6 border-b border-orange-400 pb-2">
                  Other Services
                </h3>
                <ul className="space-y-3">
                  {otherServices.map((service, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Refined Protection */}
              <div className="bg-gray-900/70 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Refined Protection"
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-orange-400 text-lg font-bold mb-2">
                    Refined Protection
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Discover the power of privacy and protection with our
                    state-of-the-art automotive window tinting services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Get a Quote
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                We are looking forward to hearing from you!
              </p>

              <div>
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
      </div>
      <Footer />
    </>
  );
}

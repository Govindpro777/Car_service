"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExteriorDetailingPage() {
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
      <div className="min-h-screen bg-[#003B7A]">
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
                EXTERIOR CAR DETAILING
              </h1>

              {/* Hero Image and Description */}
              <div className="bg-gray-900/50 rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Car wash exterior detailing service"
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
                {/* Express Package */}
                <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Express exterior detailing service"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Express
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Pre-soap wash and rinse, hand wash with ph-neutral soap,
                      hand polish for a shiny and protected finish, rim detail
                      with protective coating for tires up to four weeks!
                    </p>
                    <button className="text-orange-400 text-sm font-semibold border-b border-orange-400 hover:text-orange-300 transition-colors">
                      SEE DETAIL
                    </button>
                  </div>
                </div>

                {/* Ultimate Package */}
                <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Ultimate exterior detailing service"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Ultimate
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Complete exterior restoration including clay bar
                      treatment, paint correction, ceramic coating application,
                      chrome polishing, and long-lasting protection for all
                      exterior surfaces.
                    </p>
                    <button className="text-orange-400 text-sm font-semibold border-b border-orange-400 hover:text-orange-300 transition-colors">
                      SEE DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Services */}
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

          {/* See Our Extras Button */}
          <div className="mt-12">
            <div className=" py-4 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors">
                SEE OUR EXTRAS
              </button>
            </div>
          </div>

          {/* Quote Form */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Book Now
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

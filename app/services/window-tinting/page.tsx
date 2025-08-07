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

      <div className="min-h-screen bg-[#003B7A]">
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
                Book Now
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

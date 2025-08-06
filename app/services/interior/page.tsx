import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function InteriorDetailing() {
  const services = [
    "Complete vacuum of seats, carpets, and trunk",
    "Deep cleaning of dashboard and console",
    "Leather seat conditioning and protection",
    "Window cleaning (interior)",
    "Air vent cleaning and deodorizing",
    "Floor mat cleaning and treatment",
    "Door panel and trim cleaning",
    "Cup holder and storage area cleaning"
  ];

  const packages = [
    {
      name: "Basic Interior",
      price: "$89",
      services: ["Vacuum", "Dashboard clean", "Window cleaning", "Basic conditioning"]
    },
    {
      name: "Premium Interior",
      price: "$149",
      services: ["Everything in Basic", "Leather treatment", "Deep carpet clean", "Odor elimination"]
    },
    {
      name: "Luxury Interior",
      price: "$199",
      services: ["Everything in Premium", "Steam cleaning", "Fabric protection", "Complete detailing"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="mb-4">
                  <span className="text-orange-400">Services</span>
                  <span className="mx-2">|</span>
                  <span>Interior Detailing</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">Interior Car Detailing</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Transform your car's interior with our comprehensive cleaning and conditioning services. 
                  We bring your cabin back to showroom condition.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Interior car detailing"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our interior detailing service covers every aspect of your car's cabin to ensure 
                a pristine and comfortable driving experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Interior cleaning process"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Packages */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Packages</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    Choose Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Before & After</h2>
              <p className="text-gray-600 text-lg">See the amazing transformation our interior detailing provides</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Before interior detailing"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">Before</h3>
                <p className="text-gray-600">Worn and dirty interior</p>
              </div>
              
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="After interior detailing"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">After</h3>
                <p className="text-gray-600">Clean, fresh, and like-new interior</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight, Shield, Sun, Eye } from 'lucide-react';

export default function WindowTinting() {
  const benefits = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "UV Protection",
      description: "Blocks up to 99% of harmful UV rays"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy & Security",
      description: "Enhanced privacy and theft deterrent"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Glare Reduction",
      description: "Reduces glare for safer driving"
    }
  ];

  const tintOptions = [
    {
      name: "Ceramic Tint",
      price: "$299",
      opacity: "50% - 5%",
      features: ["Premium ceramic film", "Maximum heat rejection", "Non-metallic", "Lifetime warranty"]
    },
    {
      name: "Carbon Tint",
      price: "$249",
      opacity: "50% - 20%",
      features: ["Carbon particle film", "Good heat rejection", "No fading", "5-year warranty"]
    },
    {
      name: "Standard Tint",
      price: "$199",
      opacity: "50% - 35%",
      features: ["Quality dyed film", "Basic heat rejection", "Affordable option", "3-year warranty"]
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
                  <span>Window Tinting</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">Auto Window Tinting</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Professional window tinting services for enhanced privacy, UV protection, 
                  and improved comfort. Choose from premium ceramic, carbon, or standard films.
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
                  src="https://images.unsplash.com/photo-1625542927806-5ca2e4cddb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Window tinting service"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Window Tinting?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Window tinting offers numerous benefits beyond just aesthetics. Protect yourself and your vehicle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Tint Options */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Tint Options</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tintOptions.map((option, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                  <div className="text-gray-600 mb-6">Opacity: {option.opacity}</div>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    Choose Option
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
              <p className="text-gray-600 text-lg">See the difference professional window tinting makes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Before window tinting"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">Before</h3>
                <p className="text-gray-600">Clear windows with no protection</p>
              </div>
              
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1625542927806-5ca2e4cddb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="After window tinting"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">After</h3>
                <p className="text-gray-600">Professional tint with UV protection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16 bg-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Legal Tint Levels</h3>
            <p className="text-blue-100 leading-relaxed">
              We ensure all our window tinting services comply with local regulations. 
              Our team will advise you on the legal tint percentages for your area and vehicle type. 
              Most areas allow 70% VLT on front windows and 50% or darker on rear windows and back glass.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
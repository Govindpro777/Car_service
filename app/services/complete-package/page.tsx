import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function CompletePackage() {
  const includes = [
    "Complete interior deep cleaning and conditioning",
    "Full exterior wash, polish, and paint correction",
    "Premium ceramic coating application",
    "Professional window tinting (all windows)",
    "Engine bay cleaning and detailing",
    "Headlight restoration",
    "Leather and fabric protection",
    "Odor elimination treatment",
    "Wheel and tire deep cleaning",
    "Chrome and trim restoration"
  ];

  const packages = [
    {
      name: "Complete Luxury",
      price: "$599",
      duration: "2-3 Days",
      features: [
        "Everything included above",
        "Premium ceramic coating",
        "Ceramic window tint",
        "Paint correction",
        "Interior protection",
        "6-month warranty"
      ],
      popular: true
    },
    {
      name: "Complete Premium",
      price: "$449",
      duration: "1-2 Days",
      features: [
        "Interior deep clean",
        "Exterior detail & polish",
        "Carbon window tint",
        "Basic paint correction",
        "Wheel detail",
        "3-month warranty"
      ],
      popular: false
    },
    {
      name: "Complete Basic",
      price: "$299",
      duration: "1 Day",
      features: [
        "Interior vacuum & clean",
        "Exterior wash & wax",
        "Standard window tint",
        "Basic wheel clean",
        "1-month warranty"
      ],
      popular: false
    }
  ];

  const process = [
    "Vehicle inspection and consultation",
    "Interior complete removal and cleaning",
    "Exterior paint correction and preparation",
    "Ceramic coating application",
    "Window tinting installation",
    "Final inspection and quality check"
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
                  <span>Complete Package</span>
                </div>
                <h1 className="text-5xl font-bold mb-6">Complete Detailing Package</h1>
                <p className="text-xl text-blue-100 mb-8">
                  The ultimate car care experience. Our complete package combines interior detailing, 
                  exterior detailing, and window tinting for total vehicle transformation.
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
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Complete car detailing package"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our complete package includes every service we offer, providing comprehensive 
                care for your entire vehicle inside and out.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Service List</h3>
                <div className="space-y-4">
                  {includes.map((service, index) => (
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
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Complete detailing process"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-3">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Complete Packages</h3>
              <p className="text-gray-600 text-lg">Choose the package that best fits your needs and budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative bg-white rounded-xl p-6 shadow-lg ${
                  pkg.popular ? 'border-2 border-orange-500 transform scale-105' : 'border border-gray-200'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600 mb-6">Duration: {pkg.duration}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                    }`}
                  >
                    Choose Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Transformation</h2>
              <p className="text-gray-600 text-lg">See the incredible results of our complete detailing package</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Before exterior"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <h4 className="text-center font-semibold text-gray-900">Before - Exterior</h4>
              </div>
              
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="After exterior"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <h4 className="text-center font-semibold text-gray-900">After - Exterior</h4>
              </div>
              
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1607603750916-d9d2cc01c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Before interior"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <h4 className="text-center font-semibold text-gray-900">Before - Interior</h4>
              </div>
              
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="After interior"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <h4 className="text-center font-semibold text-gray-900">After - Interior</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Why Choose Our Complete Package?</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Save time and money by combining all our services into one comprehensive package. 
              You'll get the best value while ensuring your vehicle receives complete, 
              professional care from our expert team.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">Save 25%</div>
                <div>Compared to individual services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">One Stop</div>
                <div>Complete service in one visit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">6 Months</div>
                <div>Extended warranty coverage</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
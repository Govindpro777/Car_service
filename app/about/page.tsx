import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="text-orange-400">Home</span>
                <span className="mx-2">|</span>
                <span>About</span>
              </div>
              <h1 className="text-5xl font-bold">ABOUT</h1>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Image */}
              <div className="relative">
                <img
                  src="about1.jpeg"
                  alt="Car detailing service"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-blue-900 text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>

              {/* Right Content */}
              <div>
                <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
                  ABOUT US
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Precision & Elegance.
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    A&B Detailing was founded by two international students from
                    Zimbabwe. The business began as our entry into the world of
                    social entrepreneurship, aimed at introducing innovative
                    concepts to the automotive industry by providing detailing
                    and car tinting services.
                  </p>
                  <p>
                    Our mission extends beyond mere detailing; it's about
                    enhancing the well-being and convenience of the communities
                    we serve. As social entrepreneurs, we've built our values
                    around giving back in intangible ways, such as improving
                    overall well-being, sustainability, and convenience. These
                    objectives will be realized gradually over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  500+
                </div>
                <div className="text-blue-100 text-lg">Cars Detailed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">2</div>
                <div className="text-blue-100 text-lg">
                  Certified Detailing & Tinting Professionals
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  100%
                </div>
                <div className="text-blue-100 text-lg">
                  Customer Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

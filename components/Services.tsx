import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Interior Detailing",
      image: "service1.png",
      href: "/services/interior",
    },
    {
      title: "Exterior Detailing",
      image: "service2.png",
      href: "/services/exterior",
    },
    {
      title: "Auto Window Tinting",
      image: "service3.png",
      href: "/services/window-tinting",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    SEE DETAIL
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Precision. Shine. Perfection. Every Detail.
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

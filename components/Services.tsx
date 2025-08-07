// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       title: "Interior Detailing",
//       image: "service1.png",
//       href: "/services/interior",
//     },
//     {
//       title: "Exterior Detailing",
//       image: "service2.png",
//       href: "/services/exterior",
//     },
//     {
//       title: "Auto Window Tinting",
//       image: "service3.png",
//       href: "/services/window-tinting",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#003B7A]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
//             WHAT WE DO
//           </p>
//           <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {services.map((service, index) => (
//             <div key={index} className="group">
//               <div className="relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">
//                     {service.title}
//                   </h3>
//                   <Link
//                     href={service.href}
//                     className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
//                   >
//                     SEE DETAIL
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-8 text-center">
//           <h3 className="text-2xl font-bold text-blue-900 mb-4">
//             Precision. Shine. Perfection. Every Detail.
//           </h3>
//           <Link
//             href="/contact"
//             className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
//           >
//             CONTACT US
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Droplets } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Interior Detailing",
      image: "service1.png",
      href: "/services/interior",
      icon: Sparkles,
      description: "Deep cleaning and restoration of your vehicle's ",
      features: ["Leather Treatment", "Deep Vacuuming", "Stain Removal"],
    },
    {
      title: "Exterior Detailing",
      image: "service2.png",
      href: "/services/exterior",
      icon: Shield,
      description: "Professional paint correction and protection ",
      features: ["Paint Correction", "Ceramic Coating", "Wax Protection"],
    },
    {
      title: "Auto Window Tinting",
      image: "service3.png",
      href: "/services/window-tinting",
      icon: Droplets,
      description: "Premium window tinting for style and protection",
      features: ["UV Protection", "Heat Reduction", "Privacy Enhancement"],
    },
  ];

  return (
    <section className="relative py-20 bg-[#003B7A] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the ultimate in automotive care with our premium
            detailing services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-105">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-blue-500/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: "2s",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        href={service.href}
                        className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                      >
                        <span>SEE DETAILS</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Precision. Shine. Perfection. Every Detail.
                </h3>
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                Ready to transform your vehicle? Get in touch with our experts
                today.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

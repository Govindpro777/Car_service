const WhyChooseUs = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Professional Equipment"
    },
    {
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Expert Technicians"
    },
    {
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Premium Products"
    },
    {
      image: "https://images.unsplash.com/photo-1609728465094-c1b13cc2f007?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Attention to Detail"
    }
  ];

  const stats = [
    { number: "500+", label: "Cars Detailed" },
    { number: "3", label: "Certified Detailing & Tinting Professionals" },
    { number: "100%", label: "Customer Satisfaction Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              A&B Detailing, featuring car detailing. Our skilled team delivers exceptional results, 
              restoring glory and integrity to every vehicle. Experience with our meticulous exterior and interior detailing.
            </p>
            <p className="text-blue-100 text-lg leading-relaxed">
              Choose A&B Detailing for unmatched service and customer satisfaction. We listen to 
              your needs, sharing transparent pricing and a seamless experience. Trust our passion for 
              cars to reflect your style and personality. Experience the difference today.
            </p>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
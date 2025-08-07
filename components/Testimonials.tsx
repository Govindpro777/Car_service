const Testimonials = () => {
  const testimonials = [
    {
      name: "Rob Edmonson",
      rating: 5,
      text: "I brought my car to A&B Detailing and it came out looking better than it did the day I bought it.",
    },
    {
      name: "Jennifer White-Grandy",
      rating: 5,
      text: "Absolutely LOVE Haitch Barber shop for Tinting Services! For my Honda Civic Sedan they were very thorough and the job was excellent!",
    },
    {
      name: "Harry Sanders",
      rating: 5,
      text: "Thanks to their car detailing and tinting services from A&B Detailing and I can honestly say I am a customer of the quality work they have in superior tinting.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-width-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
            WHAT THEY SAY ABOUT US
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

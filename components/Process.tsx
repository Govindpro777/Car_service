const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Reservation",
      description: "Book your appointment online, over the phone, or via our mobile app. Specify duration, detailing level, and service package."
    },
    {
      number: "02",
      title: "Vehicle Preparation",
      description: "Remove any personal belongings, collectibles, and clear spaces. We handle the rest - cleaning and final preparation."
    },
    {
      number: "03",
      title: "Service Delivery",
      description: "Our team provides thorough cleaning, polishing, sealing and reconditioning using professional-grade equipment."
    },
    {
      number: "04",
      title: "Return or Completion",
      description: "Final check for quality and completeness. We provide full vehicle road test and final touches review."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-400 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-900 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR PROCESS
          </p>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">4 Steps to Car Detailing</h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-900 transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-blue-800 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
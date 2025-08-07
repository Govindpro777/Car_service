// const Process = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Reservation",
//       description: "Book your appointment online, over the phone, or via our mobile app. Specify duration, detailing level, and service package."
//     },
//     {
//       number: "02",
//       title: "Vehicle Preparation",
//       description: "Remove any personal belongings, collectibles, and clear spaces. We handle the rest - cleaning and final preparation."
//     },
//     {
//       number: "03",
//       title: "Service Delivery",
//       description: "Our team provides thorough cleaning, polishing, sealing and reconditioning using professional-grade equipment."
//     },
//     {
//       number: "04",
//       title: "Return or Completion",
//       description: "Final check for quality and completeness. We provide full vehicle road test and final touches review."
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-cyan-400 to-cyan-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-blue-900 text-sm font-semibold tracking-wider uppercase mb-4">
//             OUR PROCESS
//           </p>
//           <h2 className="text-4xl font-bold text-blue-900 mb-6">4 Steps to Car Detailing</h2>
//         </div>

//         <div className="relative">
//           {/* Connection Line */}
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-900 transform -translate-y-1/2 z-0" />

//           <div className="grid md:grid-cols-4 gap-8 relative z-10">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
//                   {step.number}
//                 </div>
//                 <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
//                 <p className="text-blue-800 leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

"use client";
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Reservation",
      description:
        "Book detailing. Select vehicle, specify duration, detailing, and provide pickup info.",
    },
    {
      number: "02",
      title: "Vehicle Preparation",
      description:
        "Once the reservation is confirmed, we meticulously prepare the vehicle for the detailing service.",
    },
    {
      number: "03",
      title: "Service Delivery",
      description:
        "This includes thorough cleaning, polishing, waxing, and conditioning to restore the car's appearance.",
    },
    {
      number: "04",
      title: "Return or Completion",
      description:
        "We take pride in delivering a vehicle that shines inside and out.",
    },
  ];

  return (
    <section className="py-20 bg-[#003B7A] relative overflow-hidden">
      {/* Background Pattern - matching the blue gradient from image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-white/40 flex-1 max-w-20"></div>
            <p className="text-white text-sm font-medium tracking-widest uppercase mx-6 opacity-90">
              OUR PROCESS
            </p>
            <div className="h-px bg-white/40 flex-1 max-w-20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            4 Steps to Car Detailing
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Dotted Connection Line - exactly like in image */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 z-0">
            <div className="flex items-center justify-between px-16">
              <div className="flex-1 border-t-2 border-dotted border-white/50 "></div>
              <div className="flex-1 border-t-2 border-dotted border-white/50 "></div>
              <div className="flex-1 border-t-2 border-dotted border-white/50 "></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number - Green box exactly like image */}
                <div className="bg-green-400 text-blue-900 w-16 h-16 mt-8 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-white/90 leading-relaxed text-sm font-light max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional background elements for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
    </section>
  );
};

export default Process;

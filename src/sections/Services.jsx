const Services = () => {
  const serviceData = [
  {
    title: "PREMIUM COMFORT",
    description:
      "Spacious interiors, refined materials, and ergonomic design ensure every drive feels relaxed and enjoyable.",
  },
  {
    title: "SMART TECHNOLOGY",
    description:
      "Advanced infotainment, intelligent driver assistance, and seamless connectivity designed for modern living.",
  },
  {
    title: "CONFIDENT PERFORMANCE",
    description:
      "Efficient engines and responsive handling deliver smooth power and stability across city and highway driving.",
  },
  {
    title: "SAFETY FIRST",
    description:
      "Equipped with comprehensive safety systems to protect you and your passengers on every journey.",
  },
  {
    title: "BOLD DESIGN",
    description:
      "A distinctive exterior and modern styling that reflect strength, elegance, and contemporary taste.",
  },
];


  return (
    <section className="max-container padding bg-white">
      {/* Section Header */}
      <div className="mb-16 max-w-3xl">
        <h2
          className="text-3xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight text-black font-palanquin"
        >
          Intelligent Design <br /> Built for Every Journey
        </h2>

        <p className="mt-6 font-montserrat text-slate-gray text-lg leading-relaxed">
          Jetour combines refined comfort, advanced technology, and confident
          performance to deliver a premium driving experience for modern lifestyles.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="group relative pl-6"
          >
            {/* Accent Line */}
            <span className="absolute left-0 top-1 h-12 w-[3px] bg-cyan-blue transition-all duration-300 group-hover:h-16" />

            <h3 className="font-palanquin font-bold text-xl text-black uppercase tracking-wide">
              {service.title}
            </h3>

            <p className="mt-4 font-montserrat text-slate-gray text-base leading-relaxed max-w-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

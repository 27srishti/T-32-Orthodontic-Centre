import React from "react";
import { Smile, Activity, HeartPulse, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    title: "Orthodontics",
    description:
      "Correction of teeth and jaws that are positioned improperly. Braces and aligners for a perfect smile.",
    icon: <Smile size={32} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Fixed Prosthodontics",
    description:
      "Restoration and replacement of teeth with artificial substitutes that are not readily removed.",
    icon: <Activity size={32} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Gum Treatment",
    description:
      "Specialized care for bleeding gums and periodontal diseases to ensure healthy foundation.",
    icon: <HeartPulse size={32} />,
    color: "bg-red-100 text-red-600",
  },
];

const Services = () => {
  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Solutions
          </h3>
          <p className="text-gray-600 text-lg">
            We offer a wide range of specialized treatments to ensure your smile
            stays healthy and beautiful.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 group ${
                cardsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: cardsInView ? `${index * 150}ms` : "0ms",
              }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { MapPin, CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

const About = () => {
  const [imageRef, imageInView] = useInView();
  const [textRef, textInView] = useInView();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={imageRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              imageInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src="https://i.ibb.co/WNsCzjbz/395-BFE75-E8-CE-4-B3-B-8724-3-E376-C19-AAE8.png"
                alt="Clinic Interior"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px] transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl text-white hidden md:block">
                <p className="text-4xl font-bold mb-2">14+</p>
                <p className="text-blue-100">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>

          <div
            ref={textRef}
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              textInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
              About Us
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Dental Care Partner in Surathkal
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              T32 Orthodontic Centre And Multispecaility Dental Clinic is a
              premier dentistry clinic located in the heart of Surathkal,
              Mangalore. We are dedicated to providing top-quality dental care
              in a comfortable and modern environment.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Led by experienced professionals like Dr. Hasan Sarfraz, we
              specialize in a wide range of treatments including Orthodontics,
              Dentofacial Orthopedics, and Prosthodontics.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <CheckCircle
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  State-of-the-art dental technology
                </span>
              </div>
              <div className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <CheckCircle
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Experienced team of specialists
                </span>
              </div>
              <div className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-x-2">
                <CheckCircle
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Comprehensive care for all ages
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
              <MapPin className="text-blue-600" size={24} />
              <p>Surathkal, Mangalore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

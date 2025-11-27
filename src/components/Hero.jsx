import React from "react";
import { ArrowRight, Calendar, Shield, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-medium text-gray-600">
                Top Rated Clinic in Mangalore
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Smiles
              </span>{" "}
              with <br />
              Precision & Care
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Experience modern dentistry designed for every smile. From routine
              checkups to advanced treatments, we make your dental health simple
              and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 font-semibold">
                Book Appointment
                <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border border-gray-200 flex items-center justify-center gap-2 font-semibold">
                View Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">5k+</h3>
                <p className="text-gray-500 text-sm">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">15+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">4.9</h3>
                <p className="text-gray-500 text-sm">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dental Care"
                className="w-full h-full object-cover"
              />

              {/* Floating Card 1 */}
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl max-w-xs animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Trusted Care</p>
                    <p className="text-xs text-gray-500">
                      Certified Specialists
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-12 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      Open Today
                    </p>
                    <p className="text-xs text-gray-500">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

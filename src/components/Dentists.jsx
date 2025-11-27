import React from "react";
import { Star, Linkedin, Twitter, Facebook } from "lucide-react";
import { useInView } from "../hooks/useInView";

const doctors = [
  {
    name: "Dr. Hasan Sarfraz",
    qualification: "BDS, MDS - Orthodontics",
    speciality: "Orthodontist | Certified Invisalign Provider",
    experience: "14+ Years",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQEe6UYC3Wr7dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631525382273?e=1766016000&v=beta&t=t5YbhRp_OIdCEGZzmlVa5pvjkLDX8Hg9k9kSF3JIpjc",
    bio: "Specializing in complex orthodontic treatments and smile makeovers with over a decade of experience.",
  },
  {
    name: "Dr.Saniya Mehroosh ",
    qualification: "BDS - General Dentistry",
    speciality: "Dentist | Implantologist | FRCD",
    experience: "14+ Years",
    image: "https://i.ibb.co/0jH3NRnD/Screenshot-2025-11-27-205829-1.png",
    bio: "Expert in cosmetic procedures and pediatric dental care, ensuring a comfortable experience for all patients.",
  },
];

const Dentists = () => {
  const [headerRef, headerInView] = useInView();
  const [cardsRef, cardsInView] = useInView();

  return (
    <section id="doctors" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 inline-block">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet Our Specialists
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Led by experienced professionals dedicated to providing you with the
            best dental care in a comfortable environment.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-[2.5rem] p-4 shadow-xl shadow-gray-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-700 border border-gray-100 ${
                cardsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: cardsInView ? `${index * 200}ms` : "0ms",
              }}
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                    <Twitter size={20} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                    <Facebook size={20} />
                  </button>
                </div>
              </div>

              <div className="px-6 pb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 ">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {doctor.speciality}
                </p>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="flex items-center justify-center gap-8 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">
                      {doctor.experience}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                      Experience
                    </p>
                  </div>
                  <div className="w-px h-10 bg-gray-100"></div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-gray-900">
                      <span>4.9</span>
                      <Star
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                      Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dentists;

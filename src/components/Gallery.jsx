import React from "react";
import { Instagram } from "lucide-react";
import { useInView } from "../hooks/useInView";

const clinicImages = [
  {
    url: "https://images.jdmagicbox.com/comp/mangalore/y8/0824px824.x824.181204215347.g6y8/catalogue/t-32-orthodontic-centre-and-multispeciality-dental-clinic-surathkal-mangalore-dentists-dwvmy8iu69-250.jpg",
    caption: "Tooth Replacement",
  },
  {
    url: "https://images.jdmagicbox.com/comp/mangalore/y8/0824px824.x824.181204215347.g6y8/catalogue/t-32-orthodontic-centre-and-multispeciality-dental-clinic-surathkal-mangalore-dentists-500r4vb5cc-250.jpg",
    caption: "Zirconia",
  },
  {
    url: "https://images.jdmagicbox.com/comp/mangalore/y8/0824px824.x824.181204215347.g6y8/catalogue/t-32-orthodontic-centre-and-multispeciality-dental-clinic-surathkal-mangalore-orthopaedic-doctors-w06l7h9m7a-250.jpg",
    caption: "Advanced Equipment",
  },
  {
    url: "https://content.jdmagicbox.com/v2/comp/mangalore/y8/0824px824.x824.181204215347.g6y8/catalogue/t-32-orthodontic-centre-and-multispeciality-dental-clinic-surathkal-mangalore-dental-clinics-zl3fsqm5j5.jpg?imwidth=463.3333333333333",
    caption: "Patient Consultation",
  },
  {
    url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Invisalign",
  },
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Kids Friendly Zone",
  },
];

const Gallery = () => {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
              Our Facility
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Experience World-Class Dental Care
            </h3>
            <p className="text-gray-600 text-lg">
              Take a tour of our modern clinic equipped with the latest
              technology to ensure the best care for your smile.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </a>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer transition-all duration-700 ${
                gridInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: gridInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

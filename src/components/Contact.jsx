import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const [headerRef, headerInView] = useInView();
  const [cardRef, cardInView] = useInView();

  return (
    <section id="contact" className="py-20 bg-blue-50">
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
            Visit Us
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-lg">
            We are conveniently located in Surathkal, Mangalore. Drop by or
            contact us for an appointment.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 ${
            cardInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="p-10 lg:p-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h4>

            <div className="space-y-8">
              <div className="flex items-start gap-4 transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">Our Location</h5>
                  <p className="text-gray-600">
                    T32 Orthodontic Centre,
                    <br />
                    Surathkal, Mangalore, Karnataka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">Phone Number</h5>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 transform transition-transform duration-300 hover:translate-x-2">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">
                    Working Hours
                  </h5>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-auto bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.356721523456!2d74.7826!3d13.0134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ4LjIiTiA3NMKwNDYnNTcuNCJF!5e0!3m2!1sen!2sin!4v1635765432109!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Clinic Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold text-white mb-6 block">
              T32<span className="text-blue-500">Dental</span>
            </span>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing top-quality dental care with a focus on patient comfort
              and satisfaction. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/t32_dentalclinic_surathkal/"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Orthodontics</li>
              <li className="text-gray-400">Cosmetic Dentistry</li>
              <li className="text-gray-400">Oral Surgery</li>
              <li className="text-gray-400">Pediatric Dentistry</li>
              <li className="text-gray-400">Gum Treatment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={20}
                  className="text-blue-500 flex-shrink-0 mt-1"
                />
                <span>Surathkal, Mangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <span>info@t32dental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} T32 Orthodontic Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

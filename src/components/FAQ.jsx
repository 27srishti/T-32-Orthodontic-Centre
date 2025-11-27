import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "../hooks/useInView";

const faqs = [
  {
    question:
      "Does T 32 Orthodontic Centre And Multispeciality Dental Clinic provide 24x7 emergency services?",
    answer:
      "T 32 Orthodontic Centre And Multispeciality Dental Clinic is known for providing timely intensive care to patients and you can get in touch with them to check what are the various emergency services offered by the hospital.",
  },
  {
    question:
      "How can I book an appointment at T 32 Orthodontic Centre And Multispeciality Dental Clinic?",
    answer:
      "You may be able to book an appointment online or via call. However, you can connect with the hospital helpline to fetch further details regarding their booking policy.",
  },
  {
    question:
      "Is T 32 Orthodontic Centre And Multispeciality Dental Clinic a speciality hospital?",
    answer:
      "T 32 Orthodontic Centre And Multispeciality Dental Clinic is accredited for providing specialty treatments in Laser Dentistry, etc.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerInView] = useInView();
  const [faqsRef, faqsInView] = useInView();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
            Common Questions
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
        </div>

        <div ref={faqsRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-lg ${
                faqsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: faqsInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

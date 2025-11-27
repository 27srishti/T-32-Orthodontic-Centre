import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    treatment: "Orthodontic Treatment",
    rating: 5,
    text: "I couldn't be happier with my results! Dr. Hasan is incredibly skilled and patient. The entire team made my braces journey smooth.",
  },
  {
    id: 2,
    name: "Michael Chen",
    treatment: "Dental Implants",
    rating: 5,
    text: "State-of-the-art facility and professional staff. I was nervous about my implant procedure, but Dr. Hasan explained everything clearly.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    treatment: "General Dentistry",
    rating: 5,
    text: "Best dental clinic in Surathkal! The clinic is very clean and hygienic. Dr. Sana is wonderful with kids.",
  },
  {
    id: 4,
    name: "James Wilson",
    treatment: "Root Canal",
    rating: 5,
    text: "Pain-free root canal treatment. I was amazed by how comfortable the whole process was. Highly recommended!",
  },
  {
    id: 5,
    name: "Anita Desai",
    treatment: "Teeth Whitening",
    rating: 5,
    text: "My smile looks amazing after the whitening session. The results were instant and the staff was very helpful.",
  },
  {
    id: 6,
    name: "Rahul Verma",
    treatment: "Braces",
    rating: 5,
    text: "Great experience with my braces treatment. The doctors are very friendly and the clinic has a very positive vibe.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center animate-fade-in">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stories from Happy Patients
          </h3>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div className="flex animate-scroll hover:pause gap-6 w-max px-4">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote size={24} className="text-blue-100" />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-blue-600 text-xs font-medium">
                    {review.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael T.",
    role: "Porsche 911 Owner",
    content: "Absolutely phenomenal service. They came to my office and left my car looking better than the day I bought it. The ceramic coating is flawless.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Range Rover Owner",
    content: "Convenience meets luxury. I've used several detailers in Vegas, but Valley is on another level. Their attention to the interior details is unmatched.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Tesla Model S Owner",
    content: "Punctual, professional, and meticulous. The paint correction they did removed years of swirl marks. Highly recommend their premium package.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Client Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Don't Just Take <br />
              <span className="text-gray-500">Our Word For It</span>
            </h3>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="text-brand-red" size={24} fill="#c2140e" />
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-red" fill="#c2140e" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed font-light">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-brand-red text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-8 -mx-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[85vw] snap-center glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-red" fill="#c2140e" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed font-light">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-brand-red text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

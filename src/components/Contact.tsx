import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8">
              Book Your <br />
              <span className="text-gray-500">Detailing Session</span>
            </h3>
            <p className="text-gray-400 mb-12 font-light max-w-md">
              We operate strictly by appointment to ensure every vehicle receives our undivided attention and premium service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0"
                >
                  <MapPin size={24} />
                </motion.div>
                <div>
                  <h4 className="text-white font-bold mb-1">Service Area</h4>
                  <p className="text-gray-400 text-sm">Las Vegas, Nevada & Surrounding Areas</p>
                  <p className="text-brand-red text-xs mt-1 font-medium">We come to you</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0"
                >
                  <Phone size={24} />
                </motion.div>
                <div>
                  <h4 className="text-white font-bold mb-1">Contact</h4>
                  <p className="text-gray-400 text-sm">DM for booking or call</p>
                  <a href="tel:+1234567890" className="text-white hover:text-brand-red transition-colors text-lg font-medium mt-1 block">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0"
                >
                  <Clock size={24} />
                </motion.div>
                <div>
                  <h4 className="text-white font-bold mb-1">Availability</h4>
                  <p className="text-gray-400 text-sm">Monday - Saturday</p>
                  <p className="text-white text-sm mt-1 font-medium">By Appointment Only</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent rounded-t-2xl" />
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer"
                    placeholder=" "
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'firstName' ? '-top-3 text-xs text-brand-red' : 'top-3 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-red'
                    }`}
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer"
                    placeholder=" "
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'lastName' ? '-top-3 text-xs text-brand-red' : 'top-3 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-red'
                    }`}
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer"
                  placeholder=" "
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' ? '-top-3 text-xs text-brand-red' : 'top-3 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-red'
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="vehicle"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors peer"
                  placeholder=" "
                  onFocus={() => handleFocus('vehicle')}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="vehicle"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'vehicle' ? '-top-3 text-xs text-brand-red' : 'top-3 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-red'
                  }`}
                >
                  Vehicle Make & Model
                </label>
              </div>

              <div className="relative">
                <select
                  id="service"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#111] text-gray-500">Select a Service</option>
                  <option value="full" className="bg-[#111]">Full Detail Package</option>
                  <option value="interior" className="bg-[#111]">Interior Detailing</option>
                  <option value="exterior" className="bg-[#111]">Exterior Detailing</option>
                  <option value="paint" className="bg-[#111]">Paint Protection</option>
                  <option value="maintenance" className="bg-[#111]">Maintenance Cleaning</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-light text-white py-4 rounded-xl font-bold tracking-wide uppercase text-sm transition-all hover:shadow-[0_0_20px_rgba(194,20,14,0.4)] active:scale-95 flex items-center justify-center gap-2 mt-8"
              >
                Request Appointment
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

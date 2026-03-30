import { Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="block mb-6 inline-block">
              <img src="https://i.imgur.com/a1tOxaW.png" alt="Valley Mobile Detailing" className="h-16 w-auto object-contain" referrerPolicy="no-referrer" />
            </a>
            <p className="text-gray-400 text-sm max-w-sm mb-8 font-light leading-relaxed">
              Premium mobile auto detailing delivered directly to your location in Las Vegas. Precision, protection, and perfection for your vehicle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-brand-red text-sm transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-red text-sm transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-red text-sm transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-red text-sm transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Las Vegas, NV</li>
              <li><a href="tel:+15551234567" className="text-gray-400 hover:text-brand-red text-sm transition-colors">(555) 123-4567</a></li>
              <li><a href="mailto:info@valleydetailing.com" className="text-gray-400 hover:text-brand-red text-sm transition-colors">info@valleydetailing.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Valley Mobile Detailing. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

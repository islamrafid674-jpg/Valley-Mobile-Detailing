import { Star } from 'lucide-react';

export default function TrustBanner() {
  const items = [
    "5-STAR RATED SERVICE",
    "FULLY INSURED",
    "PREMIUM PRODUCTS",
    "MOBILE CONVENIENCE",
    "EXPERT TECHNICIANS",
    "SATISFACTION GUARANTEED"
  ];

  // Duplicate items to ensure smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="py-6 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <Star className="text-brand-red mr-3" size={16} fill="#c2140e" />
            <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

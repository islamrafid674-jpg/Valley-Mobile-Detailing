import { motion } from 'motion/react';
import { Shield, Sparkles, Droplets, Car, Wrench } from 'lucide-react';

const services = [
  {
    title: "Full Detail Packages",
    description: "Comprehensive interior and exterior cleaning for a showroom finish.",
    icon: <Car size={24} />,
    image: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/651043361_18065408687665239_7893724190335528044_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=Mzg1MTYyOTAyMTkxOTA0NDg4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=YCWG6_PPN1wQ7kNvwFTk6Fz&_nc_oc=AdpbKu4klgxIwsePA62OXYBmQtI_GCp-fOoPwmtwu5oFuqlwRg00Ef7ISs9hZL-0X_0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_AfzgdYO9Hi0GwGF3rw_GzvT0pfkR8_rEsNzhysnBucfjZQ&oe=69CF84A5",
    colSpan: "md:col-span-2",
  },
  {
    title: "Paint Protection",
    description: "Ceramic coatings and sealants to protect your investment.",
    icon: <Shield size={24} />,
    image: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/647292528_18064669331665239_6655505817082332554_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=Mzg0Nzg0MTA0MDkwOTEzOTc4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=2_0XN2ldCpEQ7kNvwEyAx1Q&_nc_oc=AdqH9uA1ZRyF6GXjY-XfR4_KMJYG1FD9Bwd1oGGvfTSSoi6eQ8dXstL7GQRkGjhBrUc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afxtv7S83FfS81o24bmW5auAsJ7UeBiFRY7ZOgrGsuJl5g&oe=69CF8619",
    colSpan: "md:col-span-1",
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning, extraction, and conditioning of all surfaces.",
    icon: <Sparkles size={24} />,
    image: "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/649738040_18065356643665239_3786573268850499663_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzg1MTM5MjM3MzU0MTAyNTEzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=hdhKs5lcteYQ7kNvwEOaoed&_nc_oc=Adp8LRoc2SJi6VbzLoFHK4m7Qwk4ZAVIsYtbSlLouakOdT0xe4jqSyNQAgeV9UlP6M0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afxg5R0ghTh_7Txo-oYKj6UWseNBg2XopPJMi-P-Oo4wmg&oe=69CF7C22",
    colSpan: "md:col-span-1",
  },
  {
    title: "Exterior Detailing",
    description: "Hand wash, clay bar, polish, and wax for a brilliant shine.",
    icon: <Droplets size={24} />,
    image: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/651989709_18066083390665239_2549692548958280998_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=Mzg1NTEzNTk0NDY2NDU5NzIxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=8RcHatymW9sQ7kNvwG-p_8K&_nc_oc=AdobK59vvTsQmjZGjpc8CMy6M7gCEv5KWIzmFbja7jOCFvZH5wL0CEvDMwhDzNQ-Avg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afzc_6W6tUifhpYNaiMk9THtWtazvMC2AnL7V1X-CsB_1w&oe=69CF6033",
    colSpan: "md:col-span-1",
  },
  {
    title: "Maintenance Cleaning",
    description: "Regular upkeep to maintain your vehicle's pristine condition.",
    icon: <Wrench size={24} />,
    image: "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/658350893_18067517528665239_2489860123675116404_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzg2MTY3OTQxMjQ1MDY0Njc4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=EPzHh_jZdYcQ7kNvwFzfj99&_nc_oc=Adp8FeJsG1tZDHctGRvPOfL4CyFzAfDG_G6XLY92EUGLUStZ2Qr_DWKfXGsqY0WA2e8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_Afxj1dK85Hi1n3rNKucAzfuxPFgeKB8W8u4b3s1Zn2Aaog&oe=69CF928C",
    colSpan: "md:col-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Premium Mobile <br />
            <span className="text-gray-500">Detailing Services</span>
          </h3>
        </motion.div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass-card h-[300px] ${service.colSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-4 backdrop-blur-md border border-brand-red/30">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm max-w-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-8 -mx-6 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[85vw] snap-center relative overflow-hidden rounded-2xl glass-card h-[350px]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mb-4 backdrop-blur-md border border-brand-red/30">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="h-[60vh] md:h-[80vh] relative overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/657595285_18067401008665239_1626115691102036852_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=Mzg2MTA3MTc3NzI2MjMxMDc4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=N97s5LXJPzsQ7kNvwGziFL8&_nc_oc=Adom4-Jxi3I0dQI1q8Hvqei3NP7ZPR4_Rvc8RNxCt7qT-eGlZZ7bvtRuMvK51oJJg6Q&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_AfxVjW8b1VXKwZgehcmQKI9dfHjLjUNsu_oIn0ftd_wPsQ&oe=69CF7743"
          alt="Luxury car detail"
          referrerPolicy="no-referrer"
          className="w-full h-[140%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6">
          WE BRING THE <br className="md:hidden" />
          <span className="text-brand-red">DETAIL TO YOU</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
          Serving the greater Las Vegas area with uncompromising quality and convenience.
        </p>
      </motion.div>
    </section>
  );
}

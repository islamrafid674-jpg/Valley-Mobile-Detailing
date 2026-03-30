import { motion } from 'motion/react';

const images = [
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/651043361_18065408687665239_7893724190335528044_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=Mzg1MTYyOTAyMTkxOTA0NDg4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=YCWG6_PPN1wQ7kNvwFTk6Fz&_nc_oc=AdpbKu4klgxIwsePA62OXYBmQtI_GCp-fOoPwmtwu5oFuqlwRg00Ef7ISs9hZL-0X_0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_AfzgdYO9Hi0GwGF3rw_GzvT0pfkR8_rEsNzhysnBucfjZQ&oe=69CF84A5",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/647292528_18064669331665239_6655505817082332554_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=Mzg0Nzg0MTA0MDkwOTEzOTc4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=2_0XN2ldCpEQ7kNvwEyAx1Q&_nc_oc=AdqH9uA1ZRyF6GXjY-XfR4_KMJYG1FD9Bwd1oGGvfTSSoi6eQ8dXstL7GQRkGjhBrUc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afxtv7S83FfS81o24bmW5auAsJ7UeBiFRY7ZOgrGsuJl5g&oe=69CF8619",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/649738040_18065356643665239_3786573268850499663_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzg1MTM5MjM3MzU0MTAyNTEzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=hdhKs5lcteYQ7kNvwEOaoed&_nc_oc=Adp8LRoc2SJi6VbzLoFHK4m7Qwk4ZAVIsYtbSlLouakOdT0xe4jqSyNQAgeV9UlP6M0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afxg5R0ghTh_7Txo-oYKj6UWseNBg2XopPJMi-P-Oo4wmg&oe=69CF7C22",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/651989709_18066083390665239_2549692548958280998_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=Mzg1NTEzNTk0NDY2NDU5NzIxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=8RcHatymW9sQ7kNvwG-p_8K&_nc_oc=AdobK59vvTsQmjZGjpc8CMy6M7gCEv5KWIzmFbja7jOCFvZH5wL0CEvDMwhDzNQ-Avg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=RgWnj3_OUx3oTsrGA3uTxA&_nc_ss=7a32e&oh=00_Afzc_6W6tUifhpYNaiMk9THtWtazvMC2AnL7V1X-CsB_1w&oe=69CF6033",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/658350893_18067517528665239_2489860123675116404_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzg2MTY3OTQxMjQ1MDY0Njc4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=EPzHh_jZdYcQ7kNvwFzfj99&_nc_oc=Adp8FeJsG1tZDHctGRvPOfL4CyFzAfDG_G6XLY92EUGLUStZ2Qr_DWKfXGsqY0WA2e8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_Afxj1dK85Hi1n3rNKucAzfuxPFgeKB8W8u4b3s1Zn2Aaog&oe=69CF928C",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/655955360_18067382096665239_1337978337827315748_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzg2MDk3MDQzODQwNzQ1MjkwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=m_KMWsdTQ_EQ7kNvwEyzPlx&_nc_oc=AdqoRth57O0sffF-L5Vt0hE-MC1mr5TqdzQdF80uUe2F8Z3QAKnS8HtzUwATEHlvaO8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_AfzZFboviwa3TVk2NLdJ-rAjcbGPgy9ggqncofwVkOn1sA&oe=69CF9447",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/660087589_18067746494665239_4890440347888321733_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg2Mjg2MDU3MTE3OTI5NjYyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5oZHIuQzMifQ%3D%3D&_nc_ohc=ZBIF7vqWtZYQ7kNvwGN_vjJ&_nc_oc=Adqpn85Y46IT8cEu2ER9JbM0s5dobQopZRrqZaTmpOiwDKMjH1wvclMCumyv2EgbzPk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_AfyrsuB_57eWjGarM-oqwtXj6mpYLoM2CRekZXS_t7UgJg&oe=69CF9299",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/655777821_18116275624634199_3742275168367589994_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzU5MzU1Nzk2NTkxNzIzNjY4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0Mzl4MTI0Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=nll_xKYK2nUQ7kNvwEtA0Yz&_nc_oc=AdqnDyz5bz_LranOKRFFLe9jQZLnBXSV021pbBIUltXogES8B065A3UXP2X5vLU0reQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=PSvd7muClOpCQ7saUCwY1Q&_nc_ss=7a32e&oh=00_AfzNomn1NpTx1jQzIwb3Ff37k0_yOgFgQJWRCKFKokvqeA&oe=69CF6356"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Before & After
          </h3>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl group break-inside-avoid"
            >
              <img
                src={src}
                alt={`Detailing work ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-widest uppercase text-sm border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

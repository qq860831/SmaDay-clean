import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-sm font-bold tracking-widest text-[#14ccb9] uppercase mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a2332] mb-4">
            真實客戶好評見證
          </h2>
          <p className="text-base sm:text-lg text-[#5a6577] max-w-lg mx-auto">
            累積萬份以上好評，聽聽他們怎麼說
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative bg-[#f8fafb] rounded-2xl p-6 md:p-7 border border-[#e8edf2] hover:shadow-lg transition-shadow duration-300">
                <Quote 
                  className="absolute top-4 right-4 w-8 h-8 opacity-10" 
                  style={{ color: item.bgColor }} 
                  fill="currentColor" 
                />
                
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                  ))}
                </div>

                <div 
                  className="inline-block px-3 py-1 rounded-lg text-sm font-bold text-white mb-4"
                  style={{ backgroundColor: item.bgColor }}
                >
                  「{item.highlight}」
                </div>

                <p className="text-sm text-[#4a5568] leading-relaxed mb-0">
                  {item.content}
                </p>

                <div className="absolute -bottom-3 left-8 w-6 h-6 bg-[#f8fafb] border-r border-b border-[#e8edf2] rotate-45" />
              </div>

              <div className="flex items-center gap-3 mt-6 ml-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${item.bgColor}15` }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#1a2332]">{item.name}</div>
                  <div className="text-xs text-[#8a95a5]">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

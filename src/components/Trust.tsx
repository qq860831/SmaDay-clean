import { motion } from 'motion/react';
import { TRUST_ITEMS } from '../constants';

export function Trust() {
  return (
    <section className="py-20 md:py-28 bg-white" id="trust">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-sm font-bold tracking-widest text-[#14ccb9] uppercase mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a2332] mb-4">
            智樂家六大服務保證
          </h2>
          <p className="text-base sm:text-lg text-[#5a6577] max-w-lg mx-auto">
            從預約到售後，每一個環節都為您的安心而設計
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl bg-[#f8fafb] border border-[#e8edf2] hover:border-[#14ccb9]/30 hover:shadow-lg hover:shadow-[#14ccb9]/8 transition-all duration-500 hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon 
                    className="w-7 h-7" 
                    style={{ color: item.color }} 
                    strokeWidth={1.8} 
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a2332] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a6577] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

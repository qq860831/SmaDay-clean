import { motion } from 'motion/react';
import { Wind, WashingMachine, Clock, Calendar, Heart } from 'lucide-react';
import { SERVICES } from '../constants';
import React from 'react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice: number;
  duration: string;
  frequency: string;
  benefits: string;
  category: string;
  highlight?: boolean;
  image: string;
}

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const Icon = service.category === '冷氣清洗' ? Wind : WashingMachine;
  const savings = service.originalPrice - service.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl border border-[#e8edf2] overflow-hidden hover:shadow-xl hover:shadow-[#14ccb9]/10 transition-all duration-500 hover:-translate-y-1.5"
    >
      {service.highlight && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#ff774d] text-white text-xs font-bold rounded-full shadow-md">
          熱門推薦
        </div>
      )}

      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#14ccb9]/10 to-[#14ccb9]/5 flex items-center justify-center group-hover:from-[#14ccb9]/20 group-hover:to-[#14ccb9]/10 transition-colors duration-500">
        <Icon className="w-20 h-20 text-[#14ccb9] opacity-80 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#1a2332] rounded-lg shadow-sm">
            {service.category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#14ccb9]/10 shrink-0">
            <Icon className="w-5 h-5 text-[#14ccb9]" strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1a2332]">{service.title}</h3>
            {service.subtitle && (
              <p className="text-xs text-[#8a95a5] mt-0.5">{service.subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-[#e8edf2]">
          <span className="text-sm text-[#8a95a5] line-through font-sans">
            ${service.originalPrice.toLocaleString()}
          </span>
          <span className="text-3xl font-bold text-[#e53e3e] font-sans">
            ${service.price.toLocaleString()}
          </span>
          <span className="text-xs px-2 py-0.5 bg-[#e53e3e]/10 text-[#e53e3e] font-semibold rounded-md">
            省 ${savings}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-2.5">
            <span className="text-xs font-semibold text-[#14ccb9] bg-[#14ccb9]/10 px-2 py-0.5 rounded shrink-0 mt-0.5">時長</span>
            <span className="text-sm text-[#5a6577]">{service.duration}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-xs font-semibold text-[#ff774d] bg-[#ff774d]/10 px-2 py-0.5 rounded shrink-0 mt-0.5">頻率</span>
            <span className="text-sm text-[#5a6577]">{service.frequency}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-xs font-semibold text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded shrink-0 mt-0.5">健康</span>
            <span className="text-sm text-[#5a6577] leading-relaxed">{service.benefits}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Services() {
  const acServices = SERVICES.filter(s => s.category === '冷氣清洗') as ServiceItem[];
  const washerServices = SERVICES.filter(s => s.category === '洗衣機清洗') as ServiceItem[];

  return (
    <section className="py-20 md:py-28 bg-[#f8fafb]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-sm font-bold tracking-widest text-[#14ccb9] uppercase mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a2332] mb-4">
            核心服務與優惠價目
          </h2>
          <p className="text-base sm:text-lg text-[#5a6577] max-w-lg mx-auto">
            專業拆洗，價格透明，讓每一分錢都花得值得
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#1a2332] mb-5 flex items-center gap-2">
            <Wind className="w-5 h-5 text-[#14ccb9]" />
            冷氣清洗
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#1a2332] mb-5 flex items-center gap-2">
            <WashingMachine className="w-5 h-5 text-[#14ccb9]" />
            洗衣機清洗
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {washerServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

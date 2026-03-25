import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function Counter({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390073251/6h9bK2MKr4yf2wrZyv9q4P/hero-bg-b7Z5zrt6wAokrdbqPwM4Pm.webp" 
          alt="冷氣清洗前後對比" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e]/90 via-[#0a1a2e]/75 to-[#0a1a2e]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-[#14ccb9]" />
            <span className="text-sm text-white/90 font-medium tracking-wide">國家認證技師 ・ 醫療級除菌清洗</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.4rem] font-black leading-[1.25] text-white mb-6 tracking-tight"
          >
            您呼吸的是清新空氣，<br />
            <span className="text-[#14ccb9]">還是百萬黴菌？</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/70 font-medium mb-3"
          >
            別讓空調成為全家人的感冒製造機！
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl"
          >
            智樂家醫療級除菌清洗：過敏原去除率 99%，還能即刻省下 12% 電費，讓呼吸與荷包同時解脫。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftGXc-vC1YfwkKvBFujB87u0jDkI_Jwa1yWko82gSh9npOFg/viewform" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#14ccb9] hover:bg-[#11b5a4] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#14ccb9]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#14ccb9]/40 hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5" />
              立即預約清洗
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-xl border border-white/20 transition-all duration-300"
            >
              查看服務項目
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-sans">
                <Counter end={10000} />+
              </div>
              <div className="text-sm text-white/50 mt-1">合作社區</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-sans">
                <Counter end={40000} />+
              </div>
              <div className="text-sm text-white/50 mt-1">每年清洗台數</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff774d]" />
                <span className="text-2xl sm:text-3xl font-bold text-white font-sans">NO.1</span>
              </div>
              <div className="text-sm text-white/50 mt-1">客戶好評排名</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

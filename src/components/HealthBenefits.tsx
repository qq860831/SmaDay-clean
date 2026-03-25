import { ShieldCheck, Zap, Shield } from 'lucide-react';

export function HealthBenefits() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390073251/6h9bK2MKr4yf2wrZyv9q4P/happy-family-KdaZLhxWQUqRfwKnkW9JS3.webp" 
          alt="幸福家庭享受清新空氣" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e]/85 via-[#0a1a2e]/70 to-[#0a1a2e]/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            為家人的健康，<br />
            <span className="text-[#14ccb9]">做一次值得的投資</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            定期清洗家電不只是維護設備，更是守護全家人的呼吸健康。智樂家使用醫療級除菌技術，讓您的家成為最安心的避風港。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <ShieldCheck className="w-6 h-6 text-[#ff774d] mb-3" />
              <div className="text-3xl font-black text-white mb-1 font-sans">99%</div>
              <div className="text-sm text-white/50">過敏原去除率</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <Zap className="w-6 h-6 text-[#fbbf24] mb-3" />
              <div className="text-3xl font-black text-white mb-1 font-sans">12%</div>
              <div className="text-sm text-white/50">電費節省幅度</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <Shield className="w-6 h-6 text-[#14ccb9] mb-3" />
              <div className="text-3xl font-black text-white mb-1 font-sans">60天</div>
              <div className="text-sm text-white/50">售後保固服務</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

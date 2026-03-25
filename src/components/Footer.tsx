import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105 shrink-0">
                <path d="M 8 26 V 8 C 8 5.79 9.79 4 12 4 H 20 C 22.21 4 24 5.79 24 8 V 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-[#14ccb9]" />
                <path d="M 8 26 L 16 14 L 24 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff774d]" />
                <circle cx="16" cy="23" r="2.5" fill="currentColor" className="text-[#14ccb9]" />
              </svg>
              <span className="text-2xl font-black tracking-widest text-white">
                智樂家
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              智樂家致力於提供最專業的家電清洗服務，使用醫療級除菌技術，
              守護全家人的呼吸健康。讓您的家成為最安心的避風港。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#14ccb9] hover:text-white transition-all hover:-translate-y-1 text-gray-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#14ccb9] hover:text-white transition-all hover:-translate-y-1 text-gray-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">聯絡資訊</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#14ccb9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">服務專線</div>
                  <a href="tel:0912345678" className="text-white hover:text-[#14ccb9] transition-colors font-medium">0912-345-678</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#14ccb9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">電子信箱</div>
                  <a href="mailto:service@smartclean.com" className="text-white hover:text-[#14ccb9] transition-colors font-medium">service@smartclean.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#14ccb9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">服務據點</div>
                  <span className="text-white">台北市信義區信義路五段7號</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">快速連結</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-[#14ccb9] transition-colors">服務介紹</a></li>
              <li><a href="#trust" className="hover:text-[#14ccb9] transition-colors">安心保證</a></li>
              <li><a href="#testimonials" className="hover:text-[#14ccb9] transition-colors">客戶見證</a></li>
              <li><a href="#calculator" className="hover:text-[#14ccb9] transition-colors">費用試算</a></li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftGXc-vC1YfwkKvBFujB87u0jDkI_Jwa1yWko82gSh9npOFg/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ff774d] hover:text-[#ff8f6b] font-bold transition-colors"
                >
                  立即預約
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 智樂家家電清洗. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

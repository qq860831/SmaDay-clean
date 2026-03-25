import { motion, AnimatePresence } from 'motion/react';
import { CalendarCheck, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-8 md:right-8 md:left-auto md:w-auto"
        >
          <div className="relative flex items-center gap-4 p-4 bg-white rounded-2xl shadow-2xl border border-[#e8edf2] md:max-w-sm">
            <button 
              onClick={() => setIsClosed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-gray-600 border border-gray-100"
            >
              <X size={14} />
            </button>

            <div className="hidden md:block">
              <div className="text-sm font-bold text-[#1a2332]">限時優惠倒數中</div>
              <div className="text-xs text-[#5a6577]">滿 3 台現折 $300</div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftGXc-vC1YfwkKvBFujB87u0jDkI_Jwa1yWko82gSh9npOFg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#ff774d] hover:bg-[#ff8f6b] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-[#ff774d]/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>立即預約</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

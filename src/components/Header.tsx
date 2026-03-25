import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: '服務介紹', href: '#services' },
    { name: '安心保證', href: '#trust' },
    { name: '客戶見證', href: '#testimonials' },
    { name: '費用試算', href: '#calculator' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105 shrink-0">
            <path d="M 8 26 V 8 C 8 5.79 9.79 4 12 4 H 20 C 22.21 4 24 5.79 24 8 V 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${scrolled ? "text-[#14ccb9]" : "text-white"}`} />
            <path d="M 8 26 L 16 14 L 24 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${scrolled ? "text-[#ff774d]" : "text-white"}`} />
            <circle cx="16" cy="23" r="2.5" fill="currentColor" className={`transition-colors duration-300 ${scrolled ? "text-[#14ccb9]" : "text-white"}`} />
          </svg>
          <span className={`text-2xl font-black tracking-widest transition-colors duration-300 ${
            scrolled ? 'text-[#1a2332]' : 'text-white'
          }`}>
            智樂家
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                scrolled 
                  ? 'text-[#5a6577] hover:text-[#14ccb9] hover:bg-[#14ccb9]/5' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSftGXc-vC1YfwkKvBFujB87u0jDkI_Jwa1yWko82gSh9npOFg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg ${
              scrolled
                ? 'bg-[#14ccb9] text-white hover:bg-[#11b5a4] shadow-[#14ccb9]/30'
                : 'bg-white text-[#14ccb9] hover:bg-white/90 shadow-black/10'
            }`}
          >
            立即預約
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#1a2332] hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[#5a6577] font-bold py-3 px-4 rounded-xl hover:bg-[#f8fafb] hover:text-[#14ccb9] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftGXc-vC1YfwkKvBFujB87u0jDkI_Jwa1yWko82gSh9npOFg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14ccb9] text-white py-3.5 rounded-xl font-bold text-center shadow-lg shadow-[#14ccb9]/20 active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                立即預約
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

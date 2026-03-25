import { useState, useMemo } from 'react';
import { SERVICES } from '../constants';
import { Calculator as CalcIcon, Minus, Plus, TrendingDown, Check, Zap } from 'lucide-react';

export function Calculator() {
  const [quantities, setQuantities] = useState<number[]>(SERVICES.map(() => 0));

  const updateQuantity = (index: number, delta: number) => {
    setQuantities(prev => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(0, Math.min(99, newQuantities[index] + delta));
      return newQuantities;
    });
  };

  const updateQuantityDirect = (index: number, value: string) => {
    const val = parseInt(value) || 0;
    setQuantities(prev => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(0, Math.min(99, val));
      return newQuantities;
    });
  };

  const { totalQty, totalPrice, totalOriginal, totalSaved, bulkDiscount } = useMemo(() => {
    let qty = 0;
    let price = 0;
    let original = 0;

    SERVICES.forEach((service, index) => {
      const count = quantities[index];
      qty += count;
      price += service.price * count;
      original += service.originalPrice * count;
    });

    const discount = qty >= 3 ? 300 : 0;
    const finalPrice = price - discount;
    const saved = (original - price) + discount;

    return { 
      totalQty: qty, 
      totalPrice: finalPrice, 
      totalOriginal: original,
      totalSaved: saved,
      bulkDiscount: discount
    };
  }, [quantities]);

  return (
    <section className="py-20 md:py-28 bg-[#f8fafb]" id="calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block text-sm font-bold tracking-widest text-[#14ccb9] uppercase mb-3">
            PRICE CALCULATOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a2332] mb-4">
            清洗金額試算
          </h2>
          <p className="text-base sm:text-lg text-[#5a6577] max-w-lg mx-auto">
            選擇您需要清洗的項目與數量，即時查看費用與省下金額
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#e8edf2] shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#14ccb9] to-[#11b5a4] flex items-center gap-3">
              <CalcIcon className="w-5 h-5 text-white" />
              <span className="text-white font-bold">費用試算器</span>
              <span className="ml-auto text-white/70 text-sm">滿 3 台再折 $300</span>
            </div>

            <div className="divide-y divide-[#f0f3f6]">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="flex items-center gap-4 px-5 md:px-6 py-4 hover:bg-[#f8fafb]/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#1a2332] text-sm sm:text-base truncate">
                      {service.title}
                      {service.subtitle && (
                        <span className="text-xs text-[#8a95a5] ml-1.5 font-normal hidden sm:inline">
                          ({service.subtitle})
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs text-[#8a95a5] line-through font-sans">
                        ${service.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-[#e53e3e] font-sans">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantities[index] === 0}
                      className="w-9 h-9 rounded-lg border border-[#e8edf2] flex items-center justify-center text-[#5a6577] hover:bg-[#f0f3f6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input 
                      type="number" 
                      value={quantities[index]}
                      onChange={(e) => updateQuantityDirect(index, e.target.value)}
                      className="w-12 h-9 text-center border border-[#e8edf2] rounded-lg text-sm font-bold text-[#1a2332] focus:border-[#14ccb9] focus:ring-1 focus:ring-[#14ccb9]/30 outline-none transition-all font-sans"
                      min={0}
                      max={99}
                    />
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="w-9 h-9 rounded-lg border border-[#e8edf2] flex items-center justify-center text-[#5a6577] hover:bg-[#14ccb9] hover:text-white hover:border-[#14ccb9] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-20 text-right">
                    <span className="text-sm font-bold text-[#1a2332] font-sans">
                      ${(service.price * quantities[index]).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {totalQty > 0 && totalQty < 3 && (
              <div className="mx-5 md:mx-6 mb-4 mt-2 px-4 py-3 bg-[#fff8f0] border border-[#ff774d]/20 rounded-xl flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#ff774d] shrink-0" />
                <span className="text-sm text-[#8a5a3a]">
                  再加 <strong className="text-[#ff774d]">{3 - totalQty}</strong> 台即可享有滿三台折 $300 優惠！
                </span>
              </div>
            )}

            {bulkDiscount > 0 && (
              <div className="mx-5 md:mx-6 mb-4 mt-2 px-4 py-3 bg-[#f0fdf4] border border-[#22c55e]/20 rounded-xl flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span className="text-sm text-[#166534]">
                  已達成滿三台優惠，額外折抵 <strong className="text-[#22c55e]">$300</strong>！
                </span>
              </div>
            )}

            <div className="px-5 md:px-6 py-5 bg-[#f8fafb] border-t border-[#e8edf2]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#5a6577]">清洗數量</span>
                <span className="font-bold text-[#1a2332] font-sans">{totalQty} 台</span>
              </div>
              
              {bulkDiscount > 0 && (
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#5a6577]">滿三台折扣</span>
                  <span className="font-bold text-[#22c55e] font-sans">-$300</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-[#e0e5ea]">
                <span className="font-bold text-[#1a2332]">應付金額</span>
                <span className="text-2xl font-black text-[#14ccb9] font-sans">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-dashed border-[#e0e5ea]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#e53e3e]" />
                    <span className="text-sm font-semibold text-[#5a6577]">已省下金額</span>
                  </div>
                  <span className="text-lg font-black text-[#e53e3e] font-sans">
                    ${totalSaved.toLocaleString()}
                  </span>
                </div>
                {totalSaved > 0 && bulkDiscount > 0 && (
                  <p className="text-xs text-[#8a95a5] mt-1 text-right">
                    含優惠價差 ${(totalOriginal - (totalPrice + bulkDiscount)).toLocaleString()} + 滿三台折扣 $300
                  </p>
                )}
                {totalSaved > 0 && bulkDiscount === 0 && (
                  <p className="text-xs text-[#8a95a5] mt-1 text-right">
                    優惠價差省下 ${(totalOriginal - totalPrice).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

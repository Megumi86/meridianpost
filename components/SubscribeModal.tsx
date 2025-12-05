import React from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl p-8 shadow-2xl border border-gray-200 relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-10">
           <h2 className="font-masthead text-5xl mb-4">Support Independent Journalism</h2>
           <p className="font-serif text-lg text-gray-600 max-w-xl mx-auto">
             Join over 2 million subscribers who rely on Meridian Post for in-depth reporting and global perspectives.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {/* Tier 1 */}
           <div className="border border-gray-200 p-6 hover:border-black transition-colors flex flex-col group cursor-pointer" onClick={() => { onSubscribe(); onClose(); }}>
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-gray-500 mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold font-serif">$2</span><span className="text-gray-500">/week</span>
              </div>
              <ul className="text-sm font-serif text-gray-700 space-y-3 mb-8 flex-1">
                <li>✓ Unlimited Article Access</li>
                <li>✓ Daily Newsletters</li>
                <li>✓ Mobile App Access</li>
              </ul>
              <button className="w-full border border-black py-2 font-sans font-bold uppercase text-xs tracking-widest group-hover:bg-black group-hover:text-white transition-colors">Select</button>
           </div>
           
           {/* Tier 2 */}
           <div className="border-2 border-black p-6 relative flex flex-col bg-gray-50 cursor-pointer shadow-lg" onClick={() => { onSubscribe(); onClose(); }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-black mb-2">All Access</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold font-serif">$4</span><span className="text-gray-500">/week</span>
              </div>
              <ul className="text-sm font-serif text-gray-700 space-y-3 mb-8 flex-1">
                <li>✓ Everything in Basic</li>
                <li>✓ Meridian Post Games & Cooking</li>
                <li>✓ Bonus Magazine Content</li>
                <li>✓ Ad-free experience</li>
              </ul>
              <button className="w-full bg-black text-white py-3 font-sans font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors">Subscribe Now</button>
           </div>

           {/* Tier 3 */}
            <div className="border border-gray-200 p-6 hover:border-black transition-colors flex flex-col group cursor-pointer" onClick={() => { onSubscribe(); onClose(); }}>
              <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-gray-500 mb-2">Print + Digital</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold font-serif">$10</span><span className="text-gray-500">/week</span>
              </div>
              <ul className="text-sm font-serif text-gray-700 space-y-3 mb-8 flex-1">
                <li>✓ All Access Digital</li>
                <li>✓ Sunday Print Delivery</li>
                <li>✓ The Meridian Post Magazine</li>
                <li>✓ Gift Subscriptions (2)</li>
              </ul>
              <button className="w-full border border-black py-2 font-sans font-bold uppercase text-xs tracking-widest group-hover:bg-black group-hover:text-white transition-colors">Select</button>
           </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-400 font-sans">
          Cancel or pause anytime. Prices billed every 4 weeks.
        </p>
      </div>
    </div>
  );
};
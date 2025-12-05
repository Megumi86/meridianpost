import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md p-8 shadow-2xl border border-gray-200 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="font-masthead text-4xl mb-6 text-center">Log In</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black font-serif"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 bg-black text-white font-sans font-bold uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-gray-500 font-sans">
          Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); /* Would switch to signup */ }} className="underline text-black">Create one</a>
        </p>
      </div>
    </div>
  );
};
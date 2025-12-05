import React from 'react';
import { SUPPORTED_LANGUAGES } from '../constants';
import { LoadingState } from '../types';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  loadingState: LoadingState;
  dateStr: string;
  isLoggedIn: boolean;
  isSubscribed: boolean;
  onLoginClick: () => void;
  onSubscribeClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentLang, 
  onLanguageChange, 
  loadingState, 
  dateStr,
  isLoggedIn,
  isSubscribed,
  onLoginClick,
  onSubscribeClick,
  onLogoutClick
}) => {
  return (
    <header className="flex flex-col w-full">
      {/* Utility Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center border-b border-gray-200 text-xs font-sans">
        <div className="flex gap-4">
          <button className="hover:text-gray-600 font-bold">U.S.</button>
          <button className="hover:text-gray-600">International</button>
          <button className="hover:text-gray-600">Canada</button>
          <button className="hover:text-gray-600">Español</button>
          <button className="hover:text-gray-600">中文</button>
        </div>
        <div className="flex gap-4 items-center">
            {!isSubscribed && (
              <button 
                onClick={onSubscribeClick}
                className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            )}
            {isSubscribed && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-1">Subscribed</span>
            )}
            
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                 <span className="font-bold uppercase tracking-wider">My Account</span>
                 <button onClick={onLogoutClick} className="font-bold uppercase tracking-wider text-gray-500 hover:text-black">Log Out</button>
              </div>
            ) : (
              <button onClick={onLoginClick} className="font-bold uppercase tracking-wider hover:bg-gray-100 px-3 py-1 rounded-sm">Log In</button>
            )}
        </div>
      </div>

      {/* Main Masthead */}
      <div className="py-6 md:py-8 px-4 flex flex-col items-center justify-center relative">
        <h1 className="font-masthead text-5xl md:text-7xl lg:text-8xl tracking-tight text-nyt-black mb-2 select-none">
          Meridian Post
        </h1>
        
        {/* Date & Motto */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl border-t border-b double-border-b border-gray-300 py-2 mt-2">
            <div className="font-sans font-bold text-xs md:text-sm text-gray-600 w-1/3 text-left md:block hidden">
                {dateStr}
            </div>
            <div className="font-serif italic text-xs text-gray-500 w-full md:w-1/3 text-center">
                "All the News That's Fit to Translate"
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-2 md:mt-0">
               {/* Language Selector */}
               <div className="relative group">
                  <div className="flex items-center gap-2">
                    {loadingState === LoadingState.TRANSLATING && (
                         <div className="animate-spin h-3 w-3 border-2 border-gray-300 border-t-black rounded-full"></div>
                    )}
                    <label htmlFor="lang-select" className="sr-only">Language</label>
                    <select 
                      id="lang-select"
                      value={currentLang}
                      onChange={(e) => onLanguageChange(e.target.value)}
                      disabled={loadingState === LoadingState.TRANSLATING}
                      className="appearance-none bg-transparent font-sans text-xs font-bold uppercase tracking-wider border border-gray-300 px-3 py-1 pr-8 cursor-pointer focus:outline-none hover:bg-gray-50 disabled:opacity-50"
                    >
                      {SUPPORTED_LANGUAGES.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
               </div>
            </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="border-b border-gray-300 py-2 hidden md:block">
        <ul className="flex justify-center gap-6 text-xs font-sans font-bold text-gray-700">
           {['World', 'U.S.', 'Politics', 'N.Y.', 'Business', 'Opinion', 'Tech', 'Science', 'Health', 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Video'].map(item => (
             <li key={item} className="cursor-pointer hover:underline decoration-1 underline-offset-4">{item}</li>
           ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
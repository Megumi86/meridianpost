import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArticleGrid from './components/ArticleGrid';
import ReaderModal from './components/ReaderModal';
import { AuthModal } from './components/AuthModal';
import { SubscribeModal } from './components/SubscribeModal';
import { INITIAL_ARTICLES } from './constants';
import { Article, LoadingState } from './types';
import { translateArticles } from './services/geminiService';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('English');
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  
  // Auth & Subscription State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  // Format today's date based on locale
  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDisplayDate(date.toLocaleDateString('en-US', options));
  }, []);

  const handleLanguageChange = async (newLang: string) => {
    if (newLang === currentLang) return;
    
    if (newLang === 'English') {
        setCurrentLang(newLang);
        setArticles(INITIAL_ARTICLES);
        if (selectedArticle) {
            const original = INITIAL_ARTICLES.find(a => a.id === selectedArticle.id);
            if (original) setSelectedArticle(original);
        }
        return;
    }

    setLoadingState(LoadingState.TRANSLATING);
    setCurrentLang(newLang);

    try {
      const translated = await translateArticles(INITIAL_ARTICLES, newLang);
      setArticles(translated);
      
      if (selectedArticle) {
          const updatedSelected = translated.find(a => a.id === selectedArticle.id);
          if (updatedSelected) setSelectedArticle(updatedSelected);
      }

      setLoadingState(LoadingState.IDLE);
    } catch (error) {
      console.error("Failed to translate", error);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange}
        loadingState={loadingState}
        dateStr={displayDate}
        isLoggedIn={isLoggedIn}
        isSubscribed={isSubscribed}
        onLoginClick={() => setShowLoginModal(true)}
        onSubscribeClick={() => setShowSubscribeModal(true)}
        onLogoutClick={() => { setIsLoggedIn(false); setIsSubscribed(false); }}
      />

      <main className="flex-grow">
         {loadingState === LoadingState.ERROR && (
             <div className="bg-red-50 text-red-600 p-4 text-center text-sm font-sans border-b border-red-100">
                 Translation services are currently unavailable. Please try again later.
             </div>
         )}
         
         <ArticleGrid 
            articles={articles} 
            onArticleClick={setSelectedArticle} 
         />
      </main>

      <footer className="border-t-2 border-gray-200 mt-12 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="font-masthead text-3xl mb-4">Meridian Post</h2>
            <div className="flex justify-center gap-6 text-xs font-sans text-gray-500 mb-6">
                <a href="#" className="hover:underline">© 2025 Meridian Post Company</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Work With Us</a>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
        </div>
      </footer>

      {selectedArticle && (
        <ReaderModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
          onArticleClick={setSelectedArticle}
        />
      )}

      <AuthModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLogin={() => setIsLoggedIn(true)}
      />

      <SubscribeModal 
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
        onSubscribe={() => { setIsSubscribed(true); setIsLoggedIn(true); }}
      />
    </div>
  );
};

export default App;
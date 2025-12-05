import React, { useEffect, useRef, useState } from 'react';
import { Article } from '../types';
import { INITIAL_ARTICLES } from '../constants';

interface ReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onArticleClick?: (article: Article) => void;
}

const ReaderModal: React.FC<ReaderModalProps> = ({ article, onClose, onArticleClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState('text-lg');

  useEffect(() => {
    if (article && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [article]);

  const handleShare = async () => {
    if (!article) return;

    const shareData = {
      title: article.headline,
      text: article.subheadline,
      url: window.location.href, // In a real app, this would be a specific article slug
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const decreaseFontSize = () => {
    if (fontSizeClass === 'text-2xl') setFontSizeClass('text-xl');
    else if (fontSizeClass === 'text-xl') setFontSizeClass('text-lg');
    else if (fontSizeClass === 'text-lg') setFontSizeClass('text-base');
  };

  const increaseFontSize = () => {
    if (fontSizeClass === 'text-base') setFontSizeClass('text-lg');
    else if (fontSizeClass === 'text-lg') setFontSizeClass('text-xl');
    else if (fontSizeClass === 'text-xl') setFontSizeClass('text-2xl');
  };

  if (!article) return null;

  // Find the original article definition to get the stable category key (English)
  // This ensures that even if we are viewing a translated article, we can find matches in INITIAL_ARTICLES
  const originalArticle = INITIAL_ARTICLES.find(a => a.id === article.id);
  const categoryToMatch = originalArticle ? originalArticle.category : article.category;

  const relatedArticles = INITIAL_ARTICLES
    .filter(a => a.category === categoryToMatch && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm p-0 md:p-8">
      <div 
        className="bg-white w-full max-w-4xl h-full md:h-[90vh] shadow-2xl overflow-hidden flex flex-col md:border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast Notification */}
        {showToast && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-sans font-bold py-2 px-4 rounded shadow-lg z-50 transition-opacity">
            Link copied to clipboard
          </div>
        )}

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="font-masthead text-xl md:text-2xl tracking-tighter">Meridian Post</span>
            <span className="text-gray-300">|</span>
            <span className="text-xs font-sans font-bold uppercase text-gray-500">{article.category}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Font Size Controls */}
            <div className="flex items-center border border-gray-200 rounded-md mr-2 bg-gray-50/50">
              <button 
                onClick={decreaseFontSize}
                disabled={fontSizeClass === 'text-base'}
                className="px-2 md:px-3 py-1.5 hover:bg-gray-100 border-r border-gray-200 text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Decrease font size"
              >
                <span className="text-xs font-serif font-bold">A</span>
              </button>
              <button 
                onClick={increaseFontSize}
                disabled={fontSizeClass === 'text-2xl'}
                className="px-2 md:px-3 py-1.5 hover:bg-gray-100 text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Increase font size"
              >
                <span className="text-lg font-serif font-bold">A</span>
              </button>
            </div>

            <button 
              onClick={handleShare}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600"
              title="Share Article"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              <span className="hidden sm:inline">Share</span>
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12">
          <header className="mb-8 max-w-2xl mx-auto text-center">
             <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-gray-900">
               {article.headline}
             </h1>
             <p className="text-lg md:text-xl text-gray-600 font-serif italic mb-6">
               {article.subheadline}
             </p>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-sans text-gray-500 border-t border-b border-gray-100 py-4">
                <span className="font-bold text-gray-900 uppercase tracking-wider">{article.author}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.date}</span>
                <span className="hidden md:inline">•</span>
                <span className="uppercase">{article.location}</span>
             </div>
          </header>

          {article.videoUrl ? (
             <div className="mb-10 max-w-4xl mx-auto bg-black aspect-video flex items-center justify-center">
                <video 
                   controls 
                   className="w-full h-full" 
                   poster={article.imageUrl}
                   src={article.videoUrl}
                >
                   Your browser does not support the video tag.
                </video>
             </div>
          ) : (
            <figure className="mb-10 max-w-4xl mx-auto">
               <img src={article.imageUrl} alt={article.headline} className="w-full h-full object-cover max-h-[500px]" />
               <figcaption className="text-xs text-gray-500 font-sans mt-2 text-right">{article.imageCaption}</figcaption>
            </figure>
          )}

          <div className={`max-w-2xl mx-auto font-serif ${fontSizeClass} leading-loose text-gray-800 space-y-6`}>
             {article.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:font-masthead" : ""}>
                  {paragraph}
                </p>
             ))}
             <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="font-sans text-xs text-gray-400">© 2025 Meridian Post. All rights reserved.</p>
             </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
             <div className="max-w-4xl mx-auto mt-12 pt-8 border-t-4 border-black text-left">
                <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-6">More in {categoryToMatch}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {relatedArticles.map((related) => (
                      <div 
                         key={related.id} 
                         className="flex flex-col gap-2 group cursor-pointer"
                         onClick={() => onArticleClick && onArticleClick(related)}
                      >
                         <div className="w-full aspect-[3/2] overflow-hidden bg-gray-100 relative">
                             <img src={related.imageUrl} alt={related.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             {related.videoUrl && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                    </div>
                                </div>
                             )}
                         </div>
                         <h4 className="font-serif font-bold text-sm leading-snug group-hover:text-gray-600">{related.headline}</h4>
                         <span className="text-xs text-gray-400 font-sans uppercase">{related.author}</span>
                      </div>
                   ))}
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReaderModal;
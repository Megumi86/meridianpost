import React from 'react';
import { Article } from '../types';

interface ArticleGridProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

const SECTIONS = ['Video', 'World', 'U.S.', 'Politics', 'Business', 'Technology', 'Science', 'Health', 'Sports', 'Arts', 'Style', 'Food', 'Travel', 'Opinion'];

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, onArticleClick }) => {
  if (articles.length === 0) return null;

  // Top Stories Logic (First 5 articles usually, or curated)
  // We assume the first 5 in the list are the "Front Page" stories
  const topStories = articles.slice(0, 5);
  const leadArticle = topStories[0];
  const secondaryArticles = topStories.slice(1, 4);
  const tertiaryArticle = topStories[4]; // Bottom of top section

  // Helper to get articles by category, excluding the ones already shown in Top Stories
  const getCategoryArticles = (category: string) => {
    const topStoryIds = topStories.map(a => a.id);
    return articles.filter(a => a.category === category && !topStoryIds.includes(a.id)).slice(0, 4);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* --- TOP STORIES SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-black pb-12 mb-12">
        
        {/* Left Column (Main Story) - Spans 8 cols */}
        <div className="lg:col-span-8 flex flex-col pr-0 lg:pr-8 lg:border-r border-gray-200">
          <article 
            className="cursor-pointer group mb-8" 
            onClick={() => onArticleClick(leadArticle)}
          >
            <div className="flex flex-col gap-3 mb-4">
              {leadArticle.isBreaking && (
                <span className="text-red-700 font-sans text-xs font-bold uppercase tracking-wider">
                  Breaking News
                </span>
              )}
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight group-hover:text-gray-700 transition-colors">
                {leadArticle.headline}
              </h2>
              <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 font-sans mb-2 gap-2">
                 <span className="uppercase font-bold">{leadArticle.location}</span>
                 <span className="hidden md:inline">—</span>
                 <span className="font-serif italic text-lg text-gray-700">{leadArticle.subheadline}</span>
              </div>
            </div>
            
            <div className="w-full h-96 overflow-hidden mb-4 bg-gray-100 relative">
               <img 
                 src={leadArticle.imageUrl} 
                 alt={leadArticle.headline} 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               {leadArticle.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                          </svg>
                      </div>
                  </div>
               )}
            </div>
            <p className="text-gray-500 text-sm font-sans italic text-right mb-4">{leadArticle.imageCaption}</p>
            
            <div className="font-serif text-lg leading-relaxed text-gray-800 line-clamp-4">
              {leadArticle.content[0]}
            </div>
          </article>

          {/* Tertiary Article (Small one under main) */}
           {tertiaryArticle && (
              <div className="border-t border-gray-200 pt-6 mt-auto">
                 <article className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer group" onClick={() => onArticleClick(tertiaryArticle)}>
                    <div className="col-span-2">
                       <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-gray-600">{tertiaryArticle.headline}</h3>
                       <p className="text-gray-600 font-serif text-sm line-clamp-3">{tertiaryArticle.content[0]}</p>
                       <span className="text-xs text-gray-400 font-sans mt-2 block">{tertiaryArticle.author}</span>
                    </div>
                    <div className="h-32 bg-gray-100 relative">
                        <img src={tertiaryArticle.imageUrl} className="w-full h-full object-cover" alt="" />
                        {tertiaryArticle.videoUrl && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                  </svg>
                              </div>
                          </div>
                       )}
                    </div>
                 </article>
              </div>
           )}
        </div>

        {/* Right Column (Sidebar) - Spans 4 cols */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="border-b-4 border-black mb-2 pb-1">
                <h4 className="font-sans font-bold text-xs uppercase tracking-widest">Top News</h4>
            </div>
            
            {secondaryArticles.map((article) => (
              <article key={article.id} className="flex flex-col gap-3 cursor-pointer group border-b border-gray-200 pb-6 last:border-0" onClick={() => onArticleClick(article)}>
                <div className="w-full h-40 overflow-hidden bg-gray-100 relative">
                  <img src={article.imageUrl} alt={article.headline} className="w-full h-full object-cover" />
                   {article.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                              </svg>
                          </div>
                      </div>
                   )}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase font-sans">{article.category}</span>
                <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-gray-600">
                  {article.headline}
                </h3>
                <p className="text-gray-600 font-serif text-sm">
                  {article.subheadline}
                </p>
              </article>
            ))}

            <div className="bg-gray-50 p-6 border border-gray-200 text-center mt-4">
                <h5 className="font-serif font-bold text-lg mb-2">The Daily Briefing</h5>
                <p className="font-sans text-xs text-gray-600 mb-4">Essential news, expert analysis, and exclusive content delivered straight to your inbox.</p>
                <input type="email" placeholder="Your Email Address" className="w-full border border-gray-300 p-2 text-xs mb-2 font-sans" />
                <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest w-full hover:bg-gray-800 transition-colors">
                    Sign Up
                </button>
            </div>
        </div>
      </div>

      {/* --- CATEGORY SECTIONS --- */}
      {SECTIONS.map((section) => {
        const categoryArticles = getCategoryArticles(section);
        if (categoryArticles.length === 0) return null;

        const isVideoSection = section === 'Video';

        return (
          <div key={section} className={`mb-16 ${isVideoSection ? 'bg-nyt-black text-white p-6 -mx-4 sm:-mx-6 lg:-mx-8' : ''}`}>
            <div className={`${isVideoSection ? 'border-gray-700' : 'border-black'} border-t pt-1 mb-6`}>
               <h3 className={`text-sm font-sans font-bold uppercase tracking-widest ${isVideoSection ? 'text-white' : 'text-black'}`}>{section}</h3>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-t ${isVideoSection ? 'border-gray-800' : 'border-gray-200'} pt-6`}>
               {categoryArticles.map((article) => (
                 <article key={article.id} className="flex flex-col gap-3 cursor-pointer group" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[3/2] overflow-hidden bg-gray-100 mb-2 relative">
                        <img src={article.imageUrl} alt={article.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        {article.videoUrl && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                  </svg>
                              </div>
                          </div>
                       )}
                    </div>
                    <h4 className={`font-serif font-bold text-lg leading-snug ${isVideoSection ? 'group-hover:text-gray-300' : 'group-hover:text-gray-600'}`}>
                      {article.headline}
                    </h4>
                    <p className={`${isVideoSection ? 'text-gray-400' : 'text-gray-500'} font-serif text-sm text-xs leading-relaxed line-clamp-3`}>
                      {article.content[0]}
                    </p>
                    <span className="text-xs text-gray-400 font-sans uppercase">{article.author}</span>
                 </article>
               ))}
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default ArticleGrid;
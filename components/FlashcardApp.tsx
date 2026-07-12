'use client';

import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Globe2, BrainCircuit, ChevronRight, Shuffle } from 'lucide-react';

export default function FlashcardApp({ domainsData, flashcardsData }: { domainsData: any[], flashcardsData: any[] }) {
  const [view, setView] = useState<'domains' | 'flashcards' | 'details'>('domains');
  const [activeDomain, setActiveDomain] = useState<any>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'ar' | 'en'>('ar');

  const getIconForDomain = (slug: string) => {
    if (slug?.includes('arbeit') || slug?.includes('work')) return <BookOpen className="w-8 h-8 text-blue-500" />;
    if (slug?.includes('heimat') || slug?.includes('zusammen')) return <Globe2 className="w-8 h-8 text-green-500" />;
    if (slug?.includes('sprich') || slug?.includes('wissen')) return <BrainCircuit className="w-8 h-8 text-purple-500" />;
    return <BookOpen className="w-8 h-8 text-blue-500" />;
  };

  const domains = domainsData.map(domain => {
    return {
      id: domain.id,
      domain: domain.name,
      icon: getIconForDomain(domain.slug),
      cards: flashcardsData
        .filter(card => card.domain_id === domain.id)
        .map(card => {
          let parsedExamples = [];
          if (Array.isArray(card.detailed_examples)) {
            parsedExamples = card.detailed_examples;
          } else if (typeof card.detailed_examples === 'string') {
            try {
              parsedExamples = JSON.parse(card.detailed_examples);
            } catch (e) {
              parsedExamples = [];
            }
          }
          return {
            id: card.id,
            word: card.word,
            use_case: card.use_case,
            translation_ar: card.translation_ar,
            translation_en: card.translation_en,
            examples: parsedExamples
          };
        })
    };
  });

  const openDomain = (domain: any) => {
    setActiveDomain(domain);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setView('flashcards');
  };

  const nextCard = (e: any) => {
    e.stopPropagation();
    if (currentCardIndex < activeDomain.cards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCardIndex(prev => prev + 1), 150);
    }
  };

  const prevCard = (e: any) => {
    e.stopPropagation();
    if (currentCardIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCardIndex(prev => prev - 1), 150);
    }
  };

  const randomCard = (e: any) => {
    e.stopPropagation();
    if (activeDomain?.cards?.length > 1) {
      setIsFlipped(false);
      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * activeDomain.cards.length);
        } while (newIndex === currentCardIndex);
        setCurrentCardIndex(newIndex);
      }, 150);
    }
  };

  const openDetails = (e: any) => {
    e.stopPropagation();
    setView('details');
  };

  if (view === 'domains') {
    return (
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">B2 Mastery</h1>
          <p className="text-lg text-slate-500">Select a vocabulary domain to start practicing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => openDomain(domain)}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center justify-center gap-4 group hover:-translate-y-1"
            >
              <div className="p-5 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {domain.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-700">{domain.domain}</h2>
              <p className="text-sm font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{domain.cards.length} Words</p>
            </button>
          ))}
          {domains.length === 0 && (
            <div className="col-span-full text-center p-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500">No domains found in your database.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentCard = activeDomain?.cards[currentCardIndex];

  if (view === 'details') {
    return (
      <div className="max-w-3xl mx-auto p-6 md:p-12">
        <button
          onClick={() => setView('flashcards')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition-colors font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:shadow-md w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Card
        </button>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-10 tracking-tight">{currentCard?.word}</h2>
          
          <div className="space-y-10">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-widest">Context</h3>
              <p className="text-blue-800 text-2xl font-medium leading-relaxed">"{currentCard?.use_case}"</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-6 text-xl border-b border-slate-100 pb-4 flex items-center gap-3">
                <BrainCircuit className="w-6 h-6 text-indigo-500" />
                Exam & Real Life Usage
              </h3>
              <ul className="space-y-4 mt-6">
                {currentCard?.examples?.map((ex: string, idx: number) => (
                  <li key={idx} className="flex gap-4 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors p-6 rounded-2xl text-lg border border-slate-100">
                    <ChevronRight className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ex}</span>
                  </li>
                ))}
                {(!currentCard?.examples || currentCard.examples.length === 0) && (
                  <li className="text-slate-500 italic bg-slate-50 p-6 rounded-2xl text-center">No detailed examples available for this card.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Flashcard View
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-12 h-screen flex flex-col justify-center">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setView('domains')} className="text-slate-500 hover:text-slate-800 p-3 bg-white shadow-sm border border-slate-100 rounded-full hover:shadow-md transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-bold text-slate-700 text-xl">{activeDomain?.domain}</span>
        <span className="text-sm font-bold text-slate-500 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full">
          {currentCardIndex + 1} / {activeDomain?.cards?.length || 0}
        </span>
      </div>

      {currentCard ? (
        <>
          <div 
            className="relative w-full h-[450px] md:h-[500px] cursor-pointer group"
            style={{ perspective: '1200px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className="w-full h-full relative transition-transform duration-700 ease-in-out"
              style={{ 
                transformStyle: 'preserve-3d', 
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
              }}
            >
              {/* FRONT OF CARD */}
              <div 
                className="absolute inset-0 w-full h-full bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-center items-center p-10 text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">{currentCard.word}</h2>
                <div className="w-20 h-1.5 bg-blue-100 rounded-full mb-8"></div>
                <p className="text-xl md:text-2xl text-slate-500 italic leading-relaxed">"{currentCard.use_case}"</p>
                
                <div className="absolute bottom-8 text-sm text-blue-500 font-bold bg-blue-50 px-5 py-2.5 rounded-full flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  Tap to flip
                </div>
              </div>

              {/* BACK OF CARD */}
              <div 
                className="absolute inset-0 w-full h-full bg-slate-800 text-white rounded-[2.5rem] shadow-2xl flex flex-col p-8 border border-slate-700"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)' 
                }}
              >
                <div className="flex bg-slate-700/50 p-1.5 rounded-2xl mb-10" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setActiveTab('ar')}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'ar' ? 'bg-white text-slate-800 shadow-sm scale-[1.02]' : 'text-slate-300 hover:text-white'}`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => setActiveTab('en')}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'en' ? 'bg-white text-slate-800 shadow-sm scale-[1.02]' : 'text-slate-300 hover:text-white'}`}
                  >
                    English
                  </button>
                </div>

                <div className="flex-1 flex items-center justify-center text-center px-4">
                  <p 
                    className="text-4xl md:text-5xl font-bold leading-tight" 
                    dir={activeTab === 'ar' ? 'rtl' : 'ltr'}
                  >
                    {activeTab === 'ar' ? currentCard.translation_ar : currentCard.translation_en}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <button 
                    onClick={openDetails}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    More Details & Exams
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Controls with Random Picker */}
          <div className="flex justify-between items-center mt-12 gap-4">
            <button 
              onClick={prevCard} 
              disabled={currentCardIndex === 0}
              className={`flex-1 md:flex-none px-6 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 ${currentCardIndex === 0 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-x-0.5'}`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Previous</span>
            </button>
            
            <button 
              onClick={randomCard}
              className="p-4 rounded-2xl font-bold transition-all flex items-center justify-center bg-purple-100 text-purple-600 hover:bg-purple-200 shadow-sm hover:-translate-y-0.5"
              title="Random Card"
            >
              <Shuffle className="w-5 h-5" />
            </button>

            <button 
              onClick={nextCard}
              disabled={currentCardIndex === activeDomain.cards.length - 1}
              className={`flex-1 md:flex-none px-6 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 ${currentCardIndex === activeDomain.cards.length - 1 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:translate-x-0.5'}`}
            >
              <span className="hidden md:inline">Next Word</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center p-16 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
          <BookOpen className="w-16 h-16 text-slate-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-700 mb-2">No Cards</h3>
          <p className="text-slate-500">There are no flashcards available in this domain yet.</p>
        </div>
      )}
    </div>
  );
}

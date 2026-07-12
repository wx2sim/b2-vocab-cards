'use client';

import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Globe2, BrainCircuit, ChevronRight, Shuffle } from 'lucide-react';

export default function FlashcardApp({ domainsData, flashcardsData }: { domainsData: any[], flashcardsData: any[] }) {
  const [view, setView] = useState<'domains' | 'flashcards' | 'details'>('domains');
  const [activeDomain, setActiveDomain] = useState<any>(null);
  const [activeModule, setActiveModule] = useState<string>('All');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Map Supabase data to the expected format
  const getIconForDomain = (slug: string) => {
    if (slug?.includes('arbeit') || slug?.includes('work')) return <BookOpen className="w-8 h-8 text-emerald-400" />;
    if (slug?.includes('heimat') || slug?.includes('zusammen')) return <Globe2 className="w-8 h-8 text-emerald-400" />;
    if (slug?.includes('sprich') || slug?.includes('wissen')) return <BrainCircuit className="w-8 h-8 text-emerald-400" />;
    return <BookOpen className="w-8 h-8 text-emerald-400" />;
  };

  const domains = domainsData.map(domain => {
    return {
      id: domain.id,
      domain: domain.name,
      slug: domain.slug,
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
            module: card.module || 'Modul 1',
            examples: parsedExamples
          };
        })
    };
  }).sort((a, b) => a.domain.localeCompare(b.domain, undefined, { numeric: true }));

  // Filter cards by selected chapter + selected module
  const filteredCards = activeDomain
    ? activeDomain.cards.filter((card: any) => activeModule === 'All' || card.module === activeModule)
    : [];

  const modulesList = activeDomain
    ? ['All', ...Array.from(new Set(activeDomain.cards.map((c: any) => c.module)))] as string[]
    : [];

  // Navigation Handlers
  const openDomain = (domain: any) => {
    setActiveDomain(domain);
    setActiveModule('All');
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setView('flashcards');
  };

  const selectModule = (module: string) => {
    setActiveModule(module);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const nextCard = (e: any) => {
    e.stopPropagation();
    if (currentCardIndex < filteredCards.length - 1) {
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
    if (filteredCards.length > 1) {
      setIsFlipped(false);
      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * filteredCards.length);
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Aspekte Neu B2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Study Guide</span>
          </h1>
          <p className="text-lg text-slate-400">Select a chapter (Kapitel) to practice advanced vocabulary.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => openDomain(domain)}
              className="bg-[#0f172a]/60 hover:bg-[#1e293b]/70 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-800/80 hover:border-emerald-800/60 flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 text-left"
            >
              <div className="p-5 bg-slate-900/60 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                {domain.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-100 text-center line-clamp-2 min-h-[3.5rem] flex items-center">{domain.domain}</h2>
              <p className="text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-3 py-1 rounded-full">{domain.cards.length} Words</p>
            </button>
          ))}
          {domains.length === 0 && (
            <div className="col-span-full text-center p-12 bg-slate-900/40 rounded-3xl border border-slate-800 shadow-sm">
              <p className="text-slate-400">No domains found in your database.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentCard = filteredCards[currentCardIndex];

  if (view === 'details') {
    return (
      <div className="max-w-3xl mx-auto p-6 md:p-12">
        <button
          onClick={() => setView('flashcards')}
          className="flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors font-bold bg-[#0f172a] hover:bg-[#1e293b] px-4 py-2 rounded-full shadow-md border border-slate-800 w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Card
        </button>

        <div className="bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-emerald-800/40">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-900/50 px-3 py-1.5 rounded-full">{currentCard?.module}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-5 mb-10 tracking-tight leading-normal">{currentCard?.word}</h2>
          
          <div className="space-y-10">
            <div className="bg-emerald-950/40 p-8 rounded-3xl border border-emerald-900/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
              <h3 className="font-bold text-emerald-400 mb-4 text-sm uppercase tracking-widest">Context / سياق الكلام</h3>
              <p className="text-emerald-100 text-2xl font-medium leading-relaxed">"{currentCard?.use_case}"</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-xl border-b border-emerald-800/40 pb-4 flex items-center gap-3">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
                Bilingual Examples / أمثلة ثنائية اللغة
              </h3>
              <ul className="space-y-4 mt-6">
                {currentCard?.examples?.map((ex: string, idx: number) => {
                  const parts = ex.split(' / ');
                  const engPart = parts[0] || '';
                  const arPart = parts[1] || '';
                  return (
                    <li key={idx} className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 text-emerald-100 bg-[#064e3b]/30 hover:bg-[#064e3b]/50 transition-colors p-6 rounded-2xl text-lg border border-emerald-900/30 leading-relaxed w-full">
                      <div className="flex gap-3 items-start">
                        <ChevronRight className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{engPart}</span>
                      </div>
                      {arPart && (
                        <span className="text-emerald-400 font-semibold md:text-right w-full md:w-auto" dir="rtl">
                          {arPart}
                        </span>
                      )}
                    </li>
                  );
                })}
                {(!currentCard?.examples || currentCard.examples.length === 0) && (
                  <li className="text-slate-400 italic bg-[#064e3b]/30 p-6 rounded-2xl text-center">No detailed examples available for this card.</li>
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
    <div className="max-w-2xl mx-auto p-6 md:p-12 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setView('domains')} className="text-slate-300 hover:text-white p-3 bg-[#0f172a] shadow-md border border-slate-800 rounded-full hover:bg-[#1e293b] transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-bold text-slate-100 text-lg md:text-xl text-center px-4 truncate max-w-[50%]">{activeDomain?.domain}</span>
        <span className="text-sm font-bold text-slate-300 bg-[#0f172a] border border-slate-800 shadow-md px-4 py-2 rounded-full whitespace-nowrap">
          {filteredCards.length > 0 ? currentCardIndex + 1 : 0} / {filteredCards.length}
        </span>
      </div>

      {/* Module Filters */}
      {modulesList.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8 bg-[#0f172a]/55 p-2 border border-slate-800/80 rounded-2xl justify-center">
          {modulesList.map((mod) => (
            <button
              key={mod}
              onClick={() => selectModule(mod)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${activeModule === mod ? 'bg-emerald-800 text-white shadow-md scale-105 border border-emerald-700/50' : 'text-slate-400 hover:text-white'}`}
            >
              {mod}
            </button>
          ))}
        </div>
      )}

      {currentCard ? (
        <>
          {/* 3D Flashcard Container */}
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
              {/* FRONT OF CARD: Dark Green Theme */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#022c22] rounded-[2.5rem] shadow-2xl border border-emerald-800/40 flex flex-col justify-center items-center p-10 text-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-900/50 px-4 py-1.5 rounded-full mb-6">
                  {currentCard.module}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-normal">
                  {currentCard.word}
                </h2>
                <div className="w-20 h-1 bg-emerald-500/30 rounded-full mb-8"></div>
                
                <p className="text-lg md:text-xl text-emerald-100/90 italic leading-relaxed px-4 font-medium">
                  "{currentCard.use_case}"
                </p>
                
                <div className="absolute bottom-8 text-sm text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-900/40 px-5 py-2.5 rounded-full flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                  Tap to flip
                </div>
              </div>

              {/* BACK OF CARD: Slightly Darker Green Theme */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#021f18] text-white rounded-[2.5rem] shadow-2xl flex flex-col p-8 border border-emerald-900/60 overflow-hidden"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)' 
                }}
              >
                <div className="flex-1 flex flex-col justify-center gap-6 px-4 overflow-y-auto pr-2 custom-scrollbar" onClick={(e) => e.stopPropagation()}>
                  <div className="text-center mt-4">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-900/50 px-3 py-1 rounded-full">Translations</span>
                    <h3 className="text-3xl font-extrabold mt-4 mb-2 text-white">{currentCard.translation_en}</h3>
                    <p className="text-3xl font-bold text-emerald-300" dir="rtl">{currentCard.translation_ar}</p>
                  </div>
                  
                  {currentCard.examples && currentCard.examples.length > 0 && (
                    <div className="space-y-3 mt-4 text-left">
                      <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Bilingual Examples</h4>
                      <ul className="space-y-2">
                        {currentCard.examples.slice(0, 2).map((ex: string, i: number) => {
                          const parts = ex.split(' / ');
                          const engPart = parts[0] || '';
                          const arPart = parts[1] || '';
                          return (
                            <li key={i} className="text-emerald-100 text-xs bg-[#064e3b]/30 p-3 rounded-xl border border-emerald-900/30 flex flex-col gap-1 leading-relaxed">
                              <span className="font-semibold text-emerald-200">{engPart}</span>
                              {arPart && <span className="text-emerald-400 font-medium" dir="rtl">{arPart}</span>}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4 flex justify-center">
                  <button 
                    onClick={openDetails}
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-2xl font-bold text-base transition-all shadow-lg border border-emerald-700/50 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <BookOpen className="w-5 h-5" />
                    Full Details & Examples
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-12 gap-4">
            <button 
              onClick={prevCard} 
              disabled={currentCardIndex === 0}
              className={`flex-1 md:flex-none px-6 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 ${currentCardIndex === 0 ? 'bg-[#0f172a] text-slate-600 border-slate-900 cursor-not-allowed' : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-[#1e293b] border border-slate-800 shadow-md hover:-translate-x-0.5'}`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Previous</span>
            </button>
            
            <button 
              onClick={randomCard}
              disabled={filteredCards.length <= 1}
              className={`p-4 rounded-2xl font-bold transition-all flex items-center justify-center ${filteredCards.length <= 1 ? 'bg-[#0f172a] text-slate-600 border-slate-900 cursor-not-allowed' : 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-900/30 shadow-md hover:-translate-y-0.5'}`}
              title="Random Card"
            >
              <Shuffle className="w-5 h-5" />
            </button>

            <button 
              onClick={nextCard}
              disabled={currentCardIndex === filteredCards.length - 1}
              className={`flex-1 md:flex-none px-6 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 ${currentCardIndex === filteredCards.length - 1 ? 'bg-[#0f172a] text-slate-600 border-slate-900 cursor-not-allowed' : 'bg-emerald-800 text-white hover:bg-emerald-700 shadow-lg border border-emerald-700/50 hover:translate-x-0.5'}`}
            >
              <span className="hidden md:inline">Next Word</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center p-16 bg-[#022c22] rounded-[2.5rem] border border-emerald-800/40 shadow-2xl">
          <BookOpen className="w-16 h-16 text-emerald-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Cards</h3>
          <p className="text-slate-400">There are no flashcards available in this module yet.</p>
        </div>
      )}
    </div>
  );
}

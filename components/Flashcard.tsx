'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Flashcard({ card }: { card: any }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'en' | 'ar'>('en');

  // Parse detailed_examples if it's a JSON string, or use as is if it's already an array
  let examples = [];
  if (Array.isArray(card.detailed_examples)) {
    examples = card.detailed_examples;
  } else if (typeof card.detailed_examples === 'string') {
    try {
      examples = JSON.parse(card.detailed_examples);
    } catch (e) {
      examples = [];
    }
  }

  return (
    <div 
      className="relative w-full h-96 perspective-1000 cursor-pointer" 
      onClick={() => !isFlipped && setIsFlipped(true)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center tracking-tight">{card.word}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center italic mb-8">"{card.use_case}"</p>
          <div className="mt-auto text-sm font-medium text-blue-500 flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
            Tap to flip
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col border border-gray-100 dark:border-gray-700 overflow-hidden">
          
          {/* Tab Navigation */}
          <div className="flex w-full mb-6 border-b border-gray-200 dark:border-gray-700">
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveTab('en'); }}
              className={`flex-1 pb-3 text-lg transition-colors ${activeTab === 'en' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              English
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveTab('ar'); }}
              className={`flex-1 pb-3 text-lg transition-colors ${activeTab === 'ar' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              العربية
            </button>
          </div>

          {/* Translation Content */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {activeTab === 'en' ? card.translation_en : card.translation_ar}
            </h3>
            
            {examples && examples.length > 0 && (
              <div className="space-y-4 mt-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Examples</h4>
                <ul className="space-y-3">
                  {examples.map((ex: string, i: number) => (
                    <li key={i} className="text-gray-700 dark:text-gray-200 text-base bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-100 dark:border-gray-600 leading-relaxed">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="text-base text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Flip Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

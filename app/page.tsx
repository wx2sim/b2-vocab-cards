import { createClient } from '@/utils/supabase/server';
import FlashcardApp from '@/components/FlashcardApp';

export default async function Home() {
  const supabase = await createClient();
  
  const { data: domains, error: domainsError } = await supabase.from('domains').select('*');
  const { data: flashcards, error: flashcardsError } = await supabase.from('flashcards').select('*');

  if (domainsError || flashcardsError) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
        <div className="bg-red-50 text-red-600 p-8 rounded-3xl border border-red-200 max-w-lg text-center shadow-sm">
          <h2 className="font-bold text-2xl mb-4">Error connecting to Supabase</h2>
          <p className="mb-4 text-red-700">Please check your .env.local file and ensure your database is running.</p>
          <pre className="text-sm bg-red-100 p-4 rounded-xl overflow-auto text-left border border-red-200 text-red-800">
            {JSON.stringify(domainsError || flashcardsError, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <FlashcardApp domainsData={domains || []} flashcardsData={flashcards || []} />
    </main>
  );
}

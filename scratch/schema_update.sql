-- Add the module column to the flashcards table to allow sub-classification (e.g. Auftakt, Modul 1, etc.)
ALTER TABLE flashcards ADD COLUMN IF NOT EXISTS module TEXT DEFAULT 'Modul 1';

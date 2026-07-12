-- Domains
INSERT INTO domains (id, name, slug) VALUES 
  ('11111111-0000-0000-0000-000000000001', 'Kapitel 1 – Heimat ist …', 'kapitel-1-heimat'),
  ('11111111-0000-0000-0000-000000000002', 'Kapitel 2 – Sprich mit mir!', 'kapitel-2-sprich-mit-mir')
ON CONFLICT (slug) DO NOTHING;

-- Flashcards for Kapitel 1 – Heimat ist …
INSERT INTO flashcards (domain_id, word, use_case, translation_en, translation_ar, detailed_examples) VALUES 
('11111111-0000-0000-0000-000000000001', 'die Vorstellung, -en', 'Ich habe eine klare Vorstellung von meiner Zukunft.', 'The idea / conception', 'التصور', '["What is your idea of a perfect home? / ما هو تصورك للمنزل المثالي؟", "Exam (Mündlich): Beschreiben Sie Ihre Vorstellung von Heimat. / صف تصورك للوطن."]')
,('11111111-0000-0000-0000-000000000001', 'spontan', 'Wir haben uns spontan entschieden, ans Meer zu fahren.', 'Spontaneous / spontaneously', 'عفوي / بطريقة عفوية', '["He is a very spontaneous person. / إنه شخص عفوي جداً.", "Sometimes spontaneous trips are the best. / أحياناً تكون الرحلات العفوية هي الأفضل."]')
,('11111111-0000-0000-0000-000000000001', 'das Zitat, -e', 'Das ist ein berühmtes Zitat von Goethe.', 'The quote / quotation', 'الاقتباس', '["Can you provide a quote to support your argument? / هل يمكنك تقديم اقتباس لدعم حجتك؟"]')
,('11111111-0000-0000-0000-000000000001', 'das Fernweh', 'Wenn ich Flugzeuge sehe, bekomme ich Fernweh.', 'Wanderlust', 'حب السفر والتجوال', '["Wanderlust makes me want to travel the world. / حب السفر يجعلني أرغب في السفر حول العالم."]')
,('11111111-0000-0000-0000-000000000001', 'das Heimweh', 'Am Anfang hatte ich großes Heimweh.', 'Homesickness', 'الحنين إلى الوطن', '["Homesickness is common when studying abroad. / الحنين إلى الوطن شائع عند الدراسة في الخارج."]')
,('11111111-0000-0000-0000-000000000001', 'der Arbeitsvertrag, "-e', 'Ich habe gestern meinen neuen Arbeitsvertrag unterschrieben.', 'Employment contract', 'عقد العمل', '["Always read your employment contract carefully. / اقرأ دائمًا عقد عملك بعناية."]')
,('11111111-0000-0000-0000-000000000001', 'die Arbeitserlaubnis', 'Ohne Arbeitserlaubnis darfst du hier nicht arbeiten.', 'Work permit', 'تصريح العمل', '["He applied for a work permit yesterday. / لقد تقدم بطلب للحصول على تصريح عمل أمس."]')
,('11111111-0000-0000-0000-000000000001', 'die Identität, -en', 'Die Sprache ist ein wichtiger Teil der Identität.', 'Identity', 'الهوية', '["Cultural identity is very important. / الهوية الثقافية مهمة جداً."]')
,('11111111-0000-0000-0000-000000000001', 'auswandern', 'Viele Menschen wandern aus, um ein besseres Leben zu finden.', 'To emigrate', 'يهاجر', '["My grandparents emigrated to Germany. / هاجر أجدادي إلى ألمانيا."]')
,('11111111-0000-0000-0000-000000000001', 'die Erfahrung, -en', 'Das Praktikum war eine tolle Erfahrung.', 'Experience', 'الخبرة', '["Do you have any experience in this field? / هل لديك أي خبرة في هذا المجال؟"]')
,('11111111-0000-0000-0000-000000000001', 'der Horizont, -e', 'Reisen erweitert den Horizont.', 'Horizon', 'الأفق', '["Learning a new language broadens your horizon. / تعلم لغة جديدة يوسع أفقك."]')
,('11111111-0000-0000-0000-000000000001', 'die Vielsprachigkeit', 'Vielsprachigkeit ist in der EU von großer Bedeutung.', 'Multilingualism', 'تعدد اللغات', '["Multilingualism is a great advantage in the job market. / تعدد اللغات ميزة كبيرة في سوق العمل."]');

-- Flashcards for Kapitel 2 – Sprich mit mir!
INSERT INTO flashcards (domain_id, word, use_case, translation_en, translation_ar, detailed_examples) VALUES 
('11111111-0000-0000-0000-000000000002', 'die Körpersprache', 'Ihre Körpersprache zeigte, dass sie nervös war.', 'Body language', 'لغة الجسد', '["Body language is crucial in an interview. / لغة الجسد حاسمة في المقابلة."]')
,('11111111-0000-0000-0000-000000000002', 'kommunizieren', 'Wir müssen besser miteinander kommunizieren.', 'To communicate', 'يتواصل', '["Effective teams communicate openly. / الفرق الفعالة تتواصل بانفتاح."]')
,('11111111-0000-0000-0000-000000000002', 'zweisprachig', 'Die Kinder wachsen zweisprachig auf.', 'Bilingual', 'ثنائي اللغة', '["Being bilingual has many cognitive benefits. / لكونك ثنائي اللغة العديد من الفوائد المعرفية."]')
,('11111111-0000-0000-0000-000000000002', 'der Gegner', 'Unser Gegner im nächsten Spiel ist sehr stark.', 'Opponent', 'الخصم', '["Respect your opponent at all times. / احترم خصمك في كل الأوقات."]')
,('11111111-0000-0000-0000-000000000002', 'das Gehirn, -e', 'Das Gehirn verbraucht viel Energie.', 'The brain', 'المخ', '["The human brain is a complex organ. / المخ البشري عضو معقد."]')
,('11111111-0000-0000-0000-000000000002', 'die Emotion, -en', 'Er konnte seine Emotionen nicht verbergen.', 'Emotion', 'العاطفة', '["It is important to express your emotions. / من المهم التعبير عن عواطفك."]')
,('11111111-0000-0000-0000-000000000002', 'beweisen', 'Er musste seine Unschuld beweisen.', 'To prove', 'يثبت / يبرهن', '["Can you prove this theory? / هل يمكنك إثبات هذه النظرية؟"]');

-- Insert the 10 B2 Vocabulary Kapitels (Domains)
INSERT INTO domains (id, name, slug) VALUES 
  ('21111111-0000-0000-0000-000000000001', 'Kapitel 1 – Heimat ist …', 'kapitel-1-heimat'),
  ('21111111-0000-0000-0000-000000000002', 'Kapitel 2 – Sprich mit mir!', 'kapitel-2-sprich-mit-mir'),
  ('21111111-0000-0000-0000-000000000003', 'Kapitel 3 – Arbeit ist das halbe Leben?', 'kapitel-3-arbeit'),
  ('21111111-0000-0000-0000-000000000004', 'Kapitel 4 – Zusammen leben', 'kapitel-4-zusammen-leben'),
  ('21111111-0000-0000-0000-000000000005', 'Kapitel 5 – Wer Wissen schaft, macht Wissenschaft', 'kapitel-5-wissenschaft'),
  ('21111111-0000-0000-0000-000000000006', 'Kapitel 6 – Fit für...', 'kapitel-6-fit-fuer'),
  ('21111111-0000-0000-0000-000000000007', 'Kapitel 7 – Kulturwelten', 'kapitel-7-kulturwelten'),
  ('21111111-0000-0000-0000-000000000008', 'Kapitel 8 – Das macht(e) Geschichte', 'kapitel-8-geschichte'),
  ('21111111-0000-0000-0000-000000000009', 'Kapitel 9 – Mit viel Gefühl...', 'kapitel-9-gefuehl'),
  ('21111111-0000-0000-0000-000000000010', 'Kapitel 10 – Ein Blick in die Zukunft', 'kapitel-10-zukunft')
ON CONFLICT (slug) DO NOTHING;

-- Clear previous seeded flashcards if necessary (Optional, uncomment if needed)
-- TRUNCATE TABLE flashcards CASCADE;

-- Insert Flashcards for Kapitel 1 - 10
INSERT INTO flashcards (domain_id, word, use_case, translation_en, translation_ar, module, detailed_examples) VALUES 
-- Kapitel 1
('21111111-0000-0000-0000-000000000001', 'die Vorstellung, -en', 'Ich habe eine klare Vorstellung von meinem Traumhaus.', 'The concept / idea', 'التصور / فكرة', 'Auftakt', 
 '["We need to have a clear concept of our goals. / يجب أن يكون لدينا تصور واضح لأهدافنا.", "This does not match my ideas at all. / هذا لا يتطابق مع تصوراتي على الإطلاق."]'),

('21111111-0000-0000-0000-000000000001', 'spontan', 'Manchmal muss man einfach spontan entscheiden.', 'Spontaneous / spontaneously', 'عفوي / بطريقة عفوية', 'Auftakt', 
 '["His reaction was completely spontaneous. / كان رد فعله عفوياً تماماً.", "Let us make a spontaneous trip this weekend! / لنقم برحلة عفوية هذا الأسبوع!"]'),

('21111111-0000-0000-0000-000000000001', 'der Arbeitsvertrag, "-e', 'Bevor Sie anfangen zu arbeiten, müssen Sie den Arbeitsvertrag unterschreiben.', 'Employment contract', 'عقد العمل', 'Modul 1', 
 '["Read your employment contract carefully before signing. / اقرأ عقد عملك بعناية قبل التوقيع.", "The contract specifies a probation period of six months. / يحدد العقد فترة تجريبية مدتها ستة أشهر."]'),

('21111111-0000-0000-0000-000000000001', 'auswandern (nach+D)', 'Viele Menschen wandern aus, um neue Chancen zu suchen.', 'To emigrate', 'يهاجر إلى', 'Modul 1', 
 '["They decided to emigrate to Canada. / قرروا الهجرة إلى كندا.", "Emigrating is a life-changing decision. / الهجرة هي قرار يغير مجرى الحياة."]'),

('21111111-0000-0000-0000-000000000001', 'die Amtssprache, -n', 'In der Schweiz gibt es vier Amtssprachen.', 'Official language', 'اللغة الرسمية', 'Modul 2', 
 '["English is the official language in many international organizations. / اللغة الإنجليزية هي اللغة الرسمية في العديد من المنظمات الدولية.", "The document must be written in the official language. / يجب كتابة المستند باللغة الرسمية."]'),

('21111111-0000-0000-0000-000000000001', 'beherrschen', 'Er beherrscht drei Fremdsprachen fließend.', 'To master / control', 'يتقن / يسيطر على', 'Modul 2', 
 '["You need to master the basics before moving on. / يجب عليك إتقان الأساسيات قبل المتابعة.", "She mastered the piano at a young age. / لقد أتقنت العزف على البيانو في سن مبكرة."]'),

('21111111-0000-0000-0000-000000000001', 'missverstehen', 'Ich hoffe, Sie missverstehen mich nicht.', 'To misunderstand', 'يسئ الفهم', 'Modul 3', 
 '["It is easy to misunderstand body language. / من السهل إساءة فهم لغة الجسد.", "I think you misunderstood my intentions. / أعتقد أنك أسأت فهم نواياي."]'),

('21111111-0000-0000-0000-000000000001', 'die Chancengleichheit', 'Die Schule garantiert Chancengleichheit für alle Kinder.', 'Equal opportunity', 'تكافؤ الفرص / المساواة', 'Modul 4', 
 '["We fight for equal opportunity in education. / نحن نحارب من أجل تكافؤ الفرص في التعليم.", "Gender equality means equal opportunities. / المساواة بين الجنسين تعني تكافؤ الفرص."]'),

-- Kapitel 2
('21111111-0000-0000-0000-000000000002', 'kommunizieren (mit + D.)', 'Tiere kommunizieren auf verschiedene Weise miteinander.', 'To communicate', 'يتواصل مع', 'Auftakt', 
 '["It is important to communicate clearly in a team. / من المهم التواصل بوضوح في الفريق.", "How do you communicate with foreign clients? / كيف تتواصل مع العملاء الأجانب؟"]'),

('21111111-0000-0000-0000-000000000002', 'die Gebärdensprache', 'Gehörlose Menschen nutzen die Gebärdensprache.', 'Sign language', 'لغة الإشارة', 'Modul 1', 
 '["He learned sign language to talk with his friend. / تعلم لغة الإشارة للتحدث مع صديقه.", "Sign language is a rich visual language. / لغة الإشارة هي لغة بصرية غنية."]'),

('21111111-0000-0000-0000-000000000002', 'wahrnehmen', 'Hunde können Geräusche wahrnehmen, die Menschen nicht hören.', 'To perceive / sense', 'يدرك / يلاحظ / يستشعر', 'Modul 1', 
 '["We must perceive changes in our environment. / يجب أن ندرك التغيرات في بيئتنا.", "She perceived his hesitation immediately. / لاحظت تردده على الفور."]'),

('21111111-0000-0000-0000-000000000002', 'bilingual', 'Kinder, die bilingual aufwachsen, lernen schneller.', 'Bilingual', 'ثنائي اللغة', 'Modul 3', 
 '["A bilingual education offers many cognitive benefits. / يوفر التعليم ثنائي اللغة العديد من الفوائد المعرفية.", "She is bilingual in German and French. / هي ثنائية اللغة بالألمانية والفرنسية."]'),

('21111111-0000-0000-0000-000000000002', 'austeilen', 'Er teilt gerne Kritik aus, kann aber selbst nichts einstecken.', 'To hand out / dish out', 'يوزع (مثلاً نقد)', 'Modul 4', 
 '["The teacher handed out the exam papers. / وزع المعلم أوراق الامتحان.", "If you dish out criticism, you must be able to take it. / إذا وزعت النقد، يجب أن تكون قادراً على تقبله."]'),

-- Kapitel 3
('21111111-0000-0000-0000-000000000003', 'die Stellenanzeige, -n', 'Ich habe die Stellenanzeige in der Zeitung gelesen.', 'Job advertisement', 'إعلان الوظائف', 'Modul 1', 
 '["He applied for the job after seeing the job advertisement. / تقدم بطلب للحصول على الوظيفة بعد رؤية إعلان الوظيفة.", "Create an attractive job advertisement to recruit talents. / أنشئ إعلاناً جذاباً للوظيفة لجذب المواهب."]'),

('21111111-0000-0000-0000-000000000003', 'die Herausforderung, -en', 'Das neue Projekt ist eine große Herausforderung.', 'Challenge', 'التحدي', 'Modul 1', 
 '["I love taking on new challenges. / أحب خوض تحديات جديدة.", "Climbing this mountain is a physical challenge. / تسلق هذا الجبل هو تحدٍ جسدي."]'),

('21111111-0000-0000-0000-000000000003', 'erfüllen', 'Er hat alle Erwartungen des Chefs erfüllt.', 'To fulfill / satisfy', 'يلبي / يفي بـ', 'Modul 2', 
 '["We strive to fulfill all safety requirements. / نحن نسعى جاهدين لتلبية جميع متطلبات السلامة.", "She fulfilled her lifelong dream of traveling. / حققت حلم حياتها بالسفر."]'),

('21111111-0000-0000-0000-000000000003', 'die Absprache, -n', 'Ohne vorherige Absprache dürfen wir nichts ändern.', 'Agreement / consultation', 'الاتفاق / الترتيب', 'Modul 4', 
 '["We made a verbal agreement to share the tasks. / قمنا بترتيب شفهي لتقاسم المهام.", "According to our consultation, we start tomorrow. / وفقاً لاتفاقنا، نبدأ غداً."]'),

-- Kapitel 4
('21111111-0000-0000-0000-000000000004', 'die Gewalt, -en', 'Gewalt ist niemals eine Lösung für Konflikte.', 'Violence / force', 'العنف / القوة', 'Modul 1', 
 '["We must work together to prevent violence. / يجب أن نعمل معاً لمنع العنف.", "The police used force to control the crowd. / استخدمت الشرطة القوة للسيطرة على الحشد."]'),

('21111111-0000-0000-0000-000000000004', 'der Diebstahl, "-e', 'Der Diebstahl wurde sofort bei der Polizei gemeldet.', 'Theft', 'السرقة', 'Modul 1', 
 '["Identify theft is a growing digital crime. / سرقة الهوية هي جريمة رقمية متزايدة.", "The shop installed cameras to prevent theft. / قام المحل بتركيب كاميرات لمنع السرقة."]'),

('21111111-0000-0000-0000-000000000004', 'bedürftig', 'Die Organisation hilft bedürftigen Familien.', 'Needy / in want', 'محتاج / فقير', 'Modul 2', 
 '["They donated clothes to needy children. / تبرعوا بالملابس للأطفال المحتاجين.", "Who is eligible to receive aid for the needy? / من يحق له الحصول على مساعدات للمحتاجين؟"]'),

('21111111-0000-0000-0000-000000000004', 'die Onlinesucht', 'Onlinesucht betrifft immer mehr Jugendliche.', 'Internet addiction', 'الإدمان الإلكتروني / إدمان الإنترنت', 'Modul 3', 
 '["Internet addiction can lead to social isolation. / يمكن أن يؤدي إدمان الإنترنت إلى العزلة الاجتماعية.", "Signs of online addiction include sleep loss. / تشمل علامات إدمان الإنترنت فقدان النوم."]'),

-- Kapitel 5
('21111111-0000-0000-0000-000000000005', 'die Lebenserwartung', 'Die Lebenserwartung ist in den letzten Jahrzehnten gestiegen.', 'Life expectancy', 'متوسط العمر المتوقع', 'Auftakt', 
 '["Modern medicine has increased average life expectancy. / لقد زاد الطب الحديث من متوسط العمر المتوقع.", "What factors affect life expectancy? / ما هي العوامل التي تؤثر على متوسط العمر المتوقع؟"]'),

('21111111-0000-0000-0000-000000000005', 'experimentieren', 'Im Labor experimentieren die Forscher mit neuen Wirkstoffen.', 'To experiment', 'يجرب / يقيم تجارب', 'Modul 1', 
 '["It is important to experiment with different solutions. / من المهم تجربة حلول مختلفة.", "Scientists experiment to test their hypotheses. / العلماء يجرون التجارب لاختبار فرضياتهم."]'),

('21111111-0000-0000-0000-000000000005', 'abwägen', 'Wir müssen die Vor- und Nachteile sorgfältig abwägen.', 'To weigh / evaluate', 'يوازن / يقيم / يزن', 'Modul 3', 
 '["You must weigh the risks before making a choice. / يجب أن تزن المخاطر قبل اتخاذ القرار.", "We weighed all options carefully. / لقد قيمنا جميع الخيارات بعناية."]'),

('21111111-0000-0000-0000-000000000005', 'ausschlafen', 'Am Wochenende möchte ich endlich mal ausschlafen.', 'To sleep in / sleep enough', 'يستغرق في النوم / يشبع نوم', 'Modul 4', 
 '["I love to sleep in on Sunday mornings. / أحب النوم حتى وقت متأخر صباح أيام الأحد.", "Make sure you get enough sleep before the exam. / تأكد من شبعك من النوم قبل الامتحان."]'),

-- Kapitel 6
('21111111-0000-0000-0000-000000000006', 'der Datenschutz', 'Datenschutz ist im Internet besonders wichtig.', 'Data protection / privacy', 'حماية البيانات', 'Modul 1', 
 '["Data protection regulations are very strict here. / لوائح حماية البيانات صارمة للغاية هنا.", "We take user privacy very seriously. / نحن نأخذ خصوصية المستخدم بجدية بالغة."]'),

('21111111-0000-0000-0000-000000000006', 'widerrufen', 'Sie können den Vertrag innerhalb von 14 Tagen widerrufen.', 'To revoke / cancel', 'يلغي / يسحب / يتراجع عن', 'Modul 1', 
 '["The customer decided to cancel his order. / قرر العميل إلغاء طلبه.", "The permission can be revoked at any time. / يمكن سحب الإذن في أي وقت."]'),

('21111111-0000-0000-0000-000000000006', 'die Kaution, -en', 'Bei der Wohnungsmiete muss man oft eine Kaution zahlen.', 'Deposit / bail', 'التأمين / الكفالة', 'Modul 2', 
 '["The landlord returned the security deposit in full. / أعاد المالك مبلغ التأمين بالكامل.", "You have to pay a deposit for the keys. / يجب عليك دفع تأمين مقابل المفاتيح."]'),

('21111111-0000-0000-0000-000000000006', 'das Benehmen', 'Sein Benehmen während der Besprechung war unhöflich.', 'Behavior / manners', 'السلوك / الأدب', 'Modul 3', 
 '["Good manners are essential in professional contexts. / الأدب والسلوك الجيد ضروريان في السياقات المهنية.", "His behavior surprised everyone. / سلوكه فاجأ الجميع."]'),

-- Kapitel 7
('21111111-0000-0000-0000-000000000007', 'das Weltkulturerbe', 'Dieser Tempel gehört zum Weltkulturerbe der UNESCO.', 'World Cultural Heritage', 'التراث الثقافي العالمي', 'Modul 1', 
 '["The historic city center was declared a World Heritage Site. / تم إعلان وسط المدينة التاريخي كموقع تراث عالمي.", "We must protect our cultural heritage. / يجب علينا حماية تراثنا الثقافي."]'),

('21111111-0000-0000-0000-000000000007', 'imposant', 'Das Schloss hat ein imposantes Portal.', 'Imposing / impressive', 'مثير للاهتمام / فخم / مهيب', 'Modul 1', 
 '["The mountain view is truly impressive. / منظر الجبل مثير للإعجاب حقاً.", "He gave an imposing speech to the crowd. / ألقى خطاباً مهيباً أمام الجمهور."]'),

('21111111-0000-0000-0000-000000000007', 'erben', 'Er hat das Haus von seinem Großvater geerbt.', 'To inherit', 'يرث', 'Modul 2', 
 '["She inherited her musical talent from her mother. / ورثت موهبتها الموسيقية عن والدتها.", "He inherited a large estate. / لقد ورث عقاراً كبيراً."]'),

('21111111-0000-0000-0000-000000000007', 'der Dialekt, -e', 'Sie spricht einen bairischen Dialekt.', 'Dialect', 'اللهجة', 'Modul 3', 
 '["Regional dialects are part of cultural identity. / اللهجات المحلية جزء من الهوية الثقافية.", "It is hard to understand this local dialect. / من الصعب فهم هذه اللهجة المحلية."]'),

-- Kapitel 8
('21111111-0000-0000-0000-000000000008', 'die Antike', 'In der Antike wurden viele Grundlagen der Wissenschaft gelegt.', 'Antiquity / ancient times', 'العصر القديم / الأثر القديم', 'Modul 1', 
 '["Greek philosophy flourished in ancient times. / ازدهرت الفلسفة اليونانية في العصور القديمة.", "Many statues date back to antiquity. / تعود العديد من التماثيل إلى العصر القديم."]'),

('21111111-0000-0000-0000-000000000008', 'errichten', 'Das Denkmal wurde im 19. Jahrhundert errichtet.', 'To erect / build / set up', 'يشيد / يبني / يقيم', 'Modul 4', 
 '["They plan to set up a new library in the town. / يخططون لبناء مكتبة جديدة في المدينة.", "A barrier was erected to block the street. / أقيم حاجز لإغلاق الشارع."]'),

('21111111-0000-0000-0000-000000000008', 'überwinden', 'Wir müssen diese Krise gemeinsam überwinden.', 'To overcome / get over', 'يتغلب على / يجتاز', 'Modul 4', 
 '["She overcame all obstacles to finish her studies. / لقد تغلبت على جميع العقبات لإنهاء دراستها.", "It took him time to get over his fear. / استغرق الأمر بعض الوقت ليتغلب على خوفه."]'),

-- Kapitel 9
('21111111-0000-0000-0000-000000000009', 'sehnen (sich) (nach+D)', 'Ich sehne mich nach einem Urlaub am Meer.', 'To long for / yearn for', 'يتوق إلى / يحن إلى', 'Auftakt', 
 '["She longs for peace and quiet. / هي تتوق إلى الهدوء والسكينة.", "We yearn for the comfort of our home. / نحن نحن إلى راحة منزلنا."]'),

('21111111-0000-0000-0000-000000000009', 'der Pessimismus', 'Ihr Pessimismus zieht die ganze Gruppe runter.', 'Pessimism', 'التشاؤم', 'Modul 2', 
 '["We need to overcome this general pessimism. / نحتاج إلى التغلب على هذا التشاؤم العام.", "Pessimism will not help you solve problems. / التشاؤم لن يساعدك في حل المشاكل."]'),

('21111111-0000-0000-0000-000000000009', 'die Reue', 'Er zeigte keine Reue für seine Taten.', 'Repentance / regret', 'الندم', 'Modul 4', 
 '["He felt deep regret for his harsh words. / شعر بندم عميق لكلماته القاسية.", "Is there any sign of repentance? / هل هناك أي بادرة ندم؟"]'),

-- Kapitel 10
('21111111-0000-0000-0000-000000000010', 'die Zukunftsvision, -en', 'Die Firma präsentierte ihre neue Zukunftsvision.', 'Vision of the future', 'الرؤية المستقبلية', 'Auftakt', 
 '["The author shared his optimistic vision of the future. / شارك المؤلف رؤيته المتفائلة للمستقبل.", "We need a strong vision of the future for our project. / نحتاج لرؤية مستقبلية قوية لمشروعنا."]'),

('21111111-0000-0000-0000-000000000010', 'optimieren', 'Wir müssen die Arbeitsabläufe weiter optimieren.', 'To optimize / improve', 'يحسن / يطور / يجعل الشيء مثالياً', 'Modul 2', 
 '["The software is designed to optimize battery usage. / تم تصميم البرنامج لتحسين استخدام البطارية.", "We are looking for ways to improve our performance. / نحن نبحث عن طرق لتحسين أدائنا."]'),

('21111111-0000-0000-0000-000000000010', 'zukunftssicher', 'Eine gute Ausbildung macht die Karriere zukunftssicher.', 'Future-proof', 'مستقبل مضمون / آمن للمستقبل', 'Modul 3', 
 '["Invest in future-proof technologies today. / استثمر في التقنيات الآمنة للمستقبل اليوم.", "We want to make our business future-proof. / نريد أن نجعل عملنا مضموناً للمستقبل."]');

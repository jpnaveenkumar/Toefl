// 12-Week TOEFL Study Plan - Structured daily pathway
export const STUDY_PLAN = {
  totalWeeks: 12,
  weeks: [
    // PHASE 1: FOUNDATION (Weeks 1-3)
    {
      weekNumber: 1,
      theme: 'Foundation & Assessment',
      goal: 'Understand TOEFL format, assess your current level, and build vocabulary habits',
      phaseColor: 'blue',
      days: [
        {
          dayNumber: 1,
          title: 'TOEFL Overview & Goal Setting',
          tasks: [
            { id: 'w1d1t1', type: 'study', section: 'general', title: 'Learn TOEFL Format', description: 'Study all 4 sections: Reading (35 min), Listening (36 min), Speaking (17 min), Writing (50 min)', duration: 20, xp: 30 },
            { id: 'w1d1t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 1', description: 'Learn 10 new academic words using flashcards', duration: 15, xp: 20 },
            { id: 'w1d1t3', type: 'reading', section: 'reading', title: 'Diagnostic Reading', description: 'Complete one reading passage to assess your current level', duration: 20, xp: 30 },
          ],
        },
        {
          dayNumber: 2,
          title: 'Reading Fundamentals',
          tasks: [
            { id: 'w1d2t1', type: 'study', section: 'reading', title: 'Reading Question Types', description: 'Learn the 10 TOEFL reading question types and strategies for each', duration: 25, xp: 30 },
            { id: 'w1d2t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 2', description: 'Review yesterday\'s words + learn 10 new words', duration: 15, xp: 20 },
            { id: 'w1d2t3', type: 'reading', section: 'reading', title: 'Reading Practice 1', description: 'Practice one passage focusing on factual and vocabulary questions', duration: 25, xp: 35 },
          ],
        },
        {
          dayNumber: 3,
          title: 'Listening Introduction',
          tasks: [
            { id: 'w1d3t1', type: 'study', section: 'listening', title: 'Listening Section Overview', description: 'Learn about lecture and conversation formats, note-taking strategies', duration: 20, xp: 25 },
            { id: 'w1d3t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Spaced repetition review of all learned words', duration: 15, xp: 20 },
            { id: 'w1d3t3', type: 'listening', section: 'listening', title: 'Note-taking Practice', description: 'Practice active listening with lecture transcripts', duration: 25, xp: 30 },
          ],
        },
        {
          dayNumber: 4,
          title: 'Speaking Introduction',
          tasks: [
            { id: 'w1d4t1', type: 'study', section: 'speaking', title: 'Speaking Tasks Overview', description: 'Understand all 4 speaking tasks and scoring criteria (IELTS-style rubric)', duration: 20, xp: 25 },
            { id: 'w1d4t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 4', description: 'Learn 10 new words, focus on adverbs and discourse markers', duration: 15, xp: 20 },
            { id: 'w1d4t3', type: 'speaking', section: 'speaking', title: 'Task 1 Practice', description: 'Record yourself answering 2 independent speaking prompts', duration: 20, xp: 30 },
          ],
        },
        {
          dayNumber: 5,
          title: 'Writing Introduction',
          tasks: [
            { id: 'w1d5t1', type: 'study', section: 'writing', title: 'Writing Tasks Overview', description: 'Understand integrated and independent writing; scoring criteria (5-point scale)', duration: 20, xp: 25 },
            { id: 'w1d5t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 5', description: 'Learn 10 academic transition words and phrases', duration: 15, xp: 20 },
            { id: 'w1d5t3', type: 'writing', section: 'writing', title: 'Writing Brainstorm', description: 'Practice outlining for 2 independent writing prompts (no need to write full essays yet)', duration: 20, xp: 30 },
          ],
        },
        {
          dayNumber: 6,
          title: 'First Full Practice Day',
          tasks: [
            { id: 'w1d6t1', type: 'reading', section: 'reading', title: 'Reading Practice 2', description: 'Complete one full passage with all question types', duration: 25, xp: 35 },
            { id: 'w1d6t2', type: 'speaking', section: 'speaking', title: 'Speaking Task 1 × 2', description: 'Record two more Task 1 responses; focus on clear structure', duration: 20, xp: 30 },
            { id: 'w1d6t3', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Vocabulary Review', description: 'Review all 50 words from this week', duration: 15, xp: 20 },
          ],
        },
        {
          dayNumber: 7,
          title: 'Rest & Reflection',
          tasks: [
            { id: 'w1d7t1', type: 'review', section: 'general', title: 'Week 1 Review', description: 'Review your performance, identify weak areas, update your study strategy', duration: 20, xp: 25 },
            { id: 'w1d7t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Challenge', description: 'Test yourself: write sentences using 5 of your new words', duration: 15, xp: 20 },
          ],
        },
      ],
    },
    {
      weekNumber: 2,
      theme: 'Deep Dive: Reading & Vocabulary',
      goal: 'Master reading strategies and expand academic vocabulary significantly',
      phaseColor: 'blue',
      days: [
        {
          dayNumber: 8,
          title: 'Reading: Inference Questions',
          tasks: [
            { id: 'w2d1t1', type: 'study', section: 'reading', title: 'Inference Strategy', description: 'Learn to answer inference questions using evidence from the text', duration: 20, xp: 25 },
            { id: 'w2d1t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 6', description: 'Learn 10 new academic words: focus on verbs of analysis', duration: 15, xp: 20 },
            { id: 'w2d1t3', type: 'reading', section: 'reading', title: 'Inference Practice', description: 'Complete a passage focusing specifically on inference questions', duration: 25, xp: 35 },
          ],
        },
        {
          dayNumber: 9,
          title: 'Reading: Vocabulary in Context',
          tasks: [
            { id: 'w2d2t1', type: 'study', section: 'reading', title: 'Vocabulary Questions Strategy', description: 'Learn to infer word meaning from context without knowing the word', duration: 20, xp: 25 },
            { id: 'w2d2t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 7', description: 'Learn 10 words from Academic Word List; practice in sentences', duration: 15, xp: 20 },
            { id: 'w2d2t3', type: 'reading', section: 'reading', title: 'Full Passage Practice', description: 'Complete a full passage with focus on vocabulary and reference questions', duration: 25, xp: 35 },
          ],
        },
        {
          dayNumber: 10,
          title: 'Reading: Prose Summary',
          tasks: [
            { id: 'w2d3t1', type: 'study', section: 'reading', title: 'Prose Summary Strategy', description: 'Learn to identify major vs. minor points; practice prose summary questions', duration: 25, xp: 30 },
            { id: 'w2d3t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Spaced repetition: review words due for review', duration: 15, xp: 20 },
            { id: 'w2d3t3', type: 'reading', section: 'reading', title: 'Prose Summary Practice', description: 'Practice identifying main ideas in 2 passages', duration: 20, xp: 30 },
          ],
        },
        {
          dayNumber: 11,
          title: 'Vocabulary Deep Dive',
          tasks: [
            { id: 'w2d4t1', type: 'vocabulary', section: 'vocabulary', title: 'Intensive Vocabulary', description: 'Learn 15 advanced academic words', duration: 30, xp: 40 },
            { id: 'w2d4t2', type: 'reading', section: 'reading', title: 'Timed Reading', description: 'Practice reading quickly while maintaining comprehension (18-min target)', duration: 25, xp: 35 },
            { id: 'w2d4t3', type: 'study', section: 'reading', title: 'Insert Text Questions', description: 'Learn strategy for "insert a sentence" question type', duration: 15, xp: 20 },
          ],
        },
        {
          dayNumber: 12,
          title: 'Reading Full Practice Set',
          tasks: [
            { id: 'w2d5t1', type: 'reading', section: 'reading', title: 'Full Reading Practice', description: 'Complete 2 full passages under timed conditions', duration: 40, xp: 50 },
            { id: 'w2d5t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary in Context', description: 'Practice using new words in original sentences', duration: 20, xp: 25 },
          ],
        },
        {
          dayNumber: 13,
          title: 'Mixed Practice',
          tasks: [
            { id: 'w2d6t1', type: 'reading', section: 'reading', title: 'Reading Review', description: 'Review all incorrect answers from the week; understand why each was wrong', duration: 25, xp: 30 },
            { id: 'w2d6t2', type: 'speaking', section: 'speaking', title: 'Speaking Fluency Practice', description: 'Record 3 Task 1 responses; compare to sample responses', duration: 20, xp: 30 },
            { id: 'w2d6t3', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Vocab Test', description: 'Self-test: define 20 words from the last 2 weeks without looking', duration: 15, xp: 25 },
          ],
        },
        {
          dayNumber: 14,
          title: 'Rest & Vocabulary Mastery',
          tasks: [
            { id: 'w2d7t1', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Master Review', description: 'Full review of all 100+ words learned; mark mastered words', duration: 30, xp: 35 },
            { id: 'w2d7t2', type: 'review', section: 'general', title: 'Progress Check', description: 'Review your reading scores; set goals for Week 3', duration: 15, xp: 20 },
          ],
        },
      ],
    },
    // Week 3: Listening Focus
    {
      weekNumber: 3,
      theme: 'Listening Mastery',
      goal: 'Develop strong note-taking skills and master all listening question types',
      phaseColor: 'green',
      days: [
        {
          dayNumber: 15,
          title: 'Listening: Lecture Comprehension',
          tasks: [
            { id: 'w3d1t1', type: 'study', section: 'listening', title: 'Academic Lecture Structure', description: 'Learn how academic lectures are structured and what to note-take', duration: 20, xp: 25 },
            { id: 'w3d1t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 11', description: 'Learn 10 words common in academic lectures', duration: 15, xp: 20 },
            { id: 'w3d1t3', type: 'listening', section: 'listening', title: 'Lecture Practice 1', description: 'Read a lecture transcript; answer questions as if you had listened', duration: 25, xp: 35 },
          ],
        },
        {
          dayNumber: 16,
          title: 'Listening: Gist & Purpose',
          tasks: [
            { id: 'w3d2t1', type: 'study', section: 'listening', title: 'Gist Questions Strategy', description: 'Learn to identify the main idea and purpose of lectures and conversations', duration: 20, xp: 25 },
            { id: 'w3d2t2', type: 'vocabulary', section: 'vocabulary', title: 'Signal Words', description: 'Learn 15 signal words used in lectures: "however," "in contrast," "specifically"', duration: 20, xp: 25 },
            { id: 'w3d2t3', type: 'listening', section: 'listening', title: 'Gist Practice', description: 'Practice 2 conversations focusing on gist and purpose questions', duration: 20, xp: 30 },
          ],
        },
        {
          dayNumber: 17,
          title: 'Listening: Detail Questions',
          tasks: [
            { id: 'w3d3t1', type: 'study', section: 'listening', title: 'Detail Question Strategy', description: 'Learn which details to capture in notes and how to avoid distractors', duration: 20, xp: 25 },
            { id: 'w3d3t2', type: 'listening', section: 'listening', title: 'Detail Practice', description: 'Practice with a lecture; focus on capturing key supporting details', duration: 25, xp: 35 },
            { id: 'w3d3t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Review due words using spaced repetition', duration: 15, xp: 20 },
          ],
        },
        {
          dayNumber: 18,
          title: 'Listening: Attitude & Organization',
          tasks: [
            { id: 'w3d4t1', type: 'study', section: 'listening', title: 'Attitude Questions Strategy', description: 'Learn to identify speaker\'s attitude and stance from tone and word choice', duration: 20, xp: 25 },
            { id: 'w3d4t2', type: 'listening', section: 'listening', title: 'Attitude & Function Practice', description: 'Practice identifying speaker attitude in conversations', duration: 25, xp: 30 },
            { id: 'w3d4t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session 14', description: 'Learn 10 words for academic discussions and arguments', duration: 15, xp: 20 },
          ],
        },
        {
          dayNumber: 19,
          title: 'Listening: Full Practice',
          tasks: [
            { id: 'w3d5t1', type: 'listening', section: 'listening', title: 'Listening Set 1', description: 'Complete a full set: 2 conversations + 1 lecture with all questions', duration: 35, xp: 50 },
            { id: 'w3d5t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Practice', description: 'Create a vocabulary map connecting related words', duration: 20, xp: 25 },
          ],
        },
        {
          dayNumber: 20,
          title: 'Speaking + Listening Combined',
          tasks: [
            { id: 'w3d6t1', type: 'listening', section: 'listening', title: 'Review Listening Errors', description: 'Analyze all incorrect listening answers; identify patterns in mistakes', duration: 20, xp: 25 },
            { id: 'w3d6t2', type: 'speaking', section: 'speaking', title: 'Task 4 Lecture Speaking', description: 'Practice 2 Task 4 speaking responses based on lecture transcripts', duration: 25, xp: 35 },
            { id: 'w3d6t3', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Vocabulary Review', description: 'Review all words from week 3', duration: 15, xp: 20 },
          ],
        },
        {
          dayNumber: 21,
          title: 'Week 3 Consolidation',
          tasks: [
            { id: 'w3d7t1', type: 'review', section: 'general', title: 'Progress Assessment', description: 'Review all three sections practiced so far; identify top 3 weak areas', duration: 20, xp: 30 },
            { id: 'w3d7t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Deep Review', description: 'Review all 150+ learned words; categorize by confidence level', duration: 20, xp: 25 },
          ],
        },
      ],
    },
    // Week 4: Speaking Focus
    {
      weekNumber: 4,
      theme: 'Speaking Excellence',
      goal: 'Develop fluency, accuracy, and organized responses across all 4 speaking tasks',
      phaseColor: 'purple',
      days: [
        {
          dayNumber: 22, title: 'Speaking: Delivery & Fluency', tasks: [
            { id: 'w4d1t1', type: 'study', section: 'speaking', title: 'Speaking Rubric Deep Dive', description: 'Understand the 4 scoring criteria: Delivery, Language Use, Topic Development, Coherence', duration: 20, xp: 25 },
            { id: 'w4d1t2', type: 'speaking', section: 'speaking', title: 'Fluency Drills', description: 'Practice speaking for 45 seconds continuously on familiar topics without stopping', duration: 20, xp: 30 },
            { id: 'w4d1t3', type: 'vocabulary', section: 'vocabulary', title: 'Spoken Vocabulary', description: 'Learn 10 formal spoken expressions for organizing ideas', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 23, title: 'Speaking: Tasks 2 & 3', tasks: [
            { id: 'w4d2t1', type: 'study', section: 'speaking', title: 'Integrated Speaking Strategy', description: 'Master the Read-Listen-Speak framework for Tasks 2 and 3', duration: 20, xp: 25 },
            { id: 'w4d2t2', type: 'speaking', section: 'speaking', title: 'Task 2 Practice × 2', description: 'Practice 2 campus-situation integrated tasks', duration: 25, xp: 35 },
            { id: 'w4d2t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Spaced repetition review session', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 24, title: 'Speaking: Tasks 3 & 4', tasks: [
            { id: 'w4d3t1', type: 'speaking', section: 'speaking', title: 'Task 3 Practice × 2', description: 'Practice 2 academic concept tasks (read + lecture + speak)', duration: 25, xp: 35 },
            { id: 'w4d3t2', type: 'speaking', section: 'speaking', title: 'Task 4 Practice × 2', description: 'Practice 2 lecture-only speaking tasks', duration: 25, xp: 35 },
            { id: 'w4d3t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Session', description: 'Learn 10 new advanced words', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 25, title: 'Speaking: Self-Evaluation', tasks: [
            { id: 'w4d4t1', type: 'study', section: 'speaking', title: 'Self-Scoring Technique', description: 'Learn to objectively evaluate your own responses using the rubric', duration: 20, xp: 25 },
            { id: 'w4d4t2', type: 'speaking', section: 'speaking', title: 'Record & Review', description: 'Record 4 tasks (one of each type), then score your delivery', duration: 30, xp: 40 },
            { id: 'w4d4t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Review session with focus on advanced words', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 26, title: 'Speaking Marathon', tasks: [
            { id: 'w4d5t1', type: 'speaking', section: 'speaking', title: 'Full Speaking Set', description: 'Complete a full set of all 4 speaking tasks back to back under timed conditions', duration: 30, xp: 50 },
            { id: 'w4d5t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Building', description: 'Learn 10 words for expressing opinions and hedging language', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 27, title: 'Mixed Section Review', tasks: [
            { id: 'w4d6t1', type: 'reading', section: 'reading', title: 'Reading Maintenance', description: 'One practice passage to maintain reading skills', duration: 25, xp: 35 },
            { id: 'w4d6t2', type: 'speaking', section: 'speaking', title: 'Speaking Weak Points', description: 'Targeted practice on the speaking task type where you scored lowest', duration: 20, xp: 30 },
            { id: 'w4d6t3', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Review', description: 'Review all words from Week 4', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 28, title: 'Month 1 Review', tasks: [
            { id: 'w4d7t1', type: 'review', section: 'general', title: 'Month 1 Assessment', description: 'Complete a mini practice test covering Reading, Listening, and Speaking', duration: 45, xp: 60 },
            { id: 'w4d7t2', type: 'review', section: 'general', title: 'Strategy Adjustment', description: 'Based on results, adjust your study focus for Month 2', duration: 20, xp: 25 },
          ]
        },
      ],
    },
    // Week 5: Writing Focus
    {
      weekNumber: 5,
      theme: 'Writing Mastery',
      goal: 'Master both TOEFL writing tasks with clear structure and academic language',
      phaseColor: 'orange',
      days: [
        {
          dayNumber: 29, title: 'Integrated Writing Strategy', tasks: [
            { id: 'w5d1t1', type: 'study', section: 'writing', title: 'Integrated Writing Structure', description: 'Learn the note-taking and writing framework for Task 1: intro + 3 body paragraphs', duration: 20, xp: 25 },
            { id: 'w5d1t2', type: 'writing', section: 'writing', title: 'Integrated Writing Practice 1', description: 'Complete a full integrated writing task with the reading and lecture provided', duration: 25, xp: 40 },
            { id: 'w5d1t3', type: 'vocabulary', section: 'vocabulary', title: 'Academic Writing Vocabulary', description: 'Learn 10 phrases for contrasting reading and lecture points', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 30, title: 'Independent Writing Strategy', tasks: [
            { id: 'w5d2t1', type: 'study', section: 'writing', title: 'Independent Essay Structure', description: 'Learn the 5-paragraph essay framework; introduction with clear thesis', duration: 20, xp: 25 },
            { id: 'w5d2t2', type: 'writing', section: 'writing', title: 'Outline Practice', description: 'Create detailed outlines for 3 different prompts in 5 minutes each', duration: 20, xp: 30 },
            { id: 'w5d2t3', type: 'vocabulary', section: 'vocabulary', title: 'Transition Words', description: 'Master 20 transition phrases for academic writing', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 31, title: 'Body Paragraph Mastery', tasks: [
            { id: 'w5d3t1', type: 'study', section: 'writing', title: 'The PEEL Structure', description: 'Point, Evidence, Explanation, Link - master this framework for body paragraphs', duration: 20, xp: 25 },
            { id: 'w5d3t2', type: 'writing', section: 'writing', title: 'Body Paragraph Practice', description: 'Write 3 complete body paragraphs using PEEL for different prompts', duration: 25, xp: 35 },
            { id: 'w5d3t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Review vocabulary due for spaced repetition', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 32, title: 'Full Independent Essay', tasks: [
            { id: 'w5d4t1', type: 'writing', section: 'writing', title: 'Timed Essay Practice', description: 'Write a complete independent essay in 30 minutes under exam conditions', duration: 35, xp: 50 },
            { id: 'w5d4t2', type: 'writing', section: 'writing', title: 'Essay Self-Review', description: 'Grade your essay: count words, check structure, identify vocabulary weaknesses', duration: 15, xp: 20 },
            { id: 'w5d4t3', type: 'vocabulary', section: 'vocabulary', title: 'Essay Vocabulary', description: 'Learn 10 high-level vocabulary words appropriate for academic essays', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 33, title: 'Writing Polish', tasks: [
            { id: 'w5d5t1', type: 'study', section: 'writing', title: 'Grammar for TOEFL Writing', description: 'Review complex sentence structures, conditional forms, and common errors', duration: 20, xp: 25 },
            { id: 'w5d5t2', type: 'writing', section: 'writing', title: 'Rewrite Practice', description: 'Take your essay from Day 32 and improve it based on the review', duration: 20, xp: 30 },
            { id: 'w5d5t3', type: 'vocabulary', section: 'vocabulary', title: 'Collocations Practice', description: 'Learn 15 academic word collocations (words that go together)', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 34, title: 'Integrated + New Format', tasks: [
            { id: 'w5d6t1', type: 'writing', section: 'writing', title: 'Integrated Writing Practice 2', description: 'Complete second integrated task; focus on accurate note-taking', duration: 25, xp: 40 },
            { id: 'w5d6t2', type: 'writing', section: 'writing', title: 'Discussion Post Practice', description: 'Practice new TOEFL format: academic discussion board post (10 min, 150+ words)', duration: 15, xp: 25 },
            { id: 'w5d6t3', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Vocabulary Review', description: 'Review all words from Week 5', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 35, title: 'Writing Reflection', tasks: [
            { id: 'w5d7t1', type: 'review', section: 'writing', title: 'Writing Portfolio Review', description: 'Review all essays written this week; identify recurring errors to fix', duration: 25, xp: 30 },
            { id: 'w5d7t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Consolidation', description: 'Total vocabulary review: all 200+ words; focus on the hardest ones', duration: 20, xp: 30 },
          ]
        },
      ],
    },
    // Weeks 6-8: Integrated Practice
    {
      weekNumber: 6,
      theme: 'Integrated Practice & Weak Areas',
      goal: 'Practice all sections daily, targeting your weakest areas for intensive work',
      phaseColor: 'red',
      days: [
        {
          dayNumber: 36, title: 'All Sections Day', tasks: [
            { id: 'w6d1t1', type: 'reading', section: 'reading', title: 'Reading Practice', description: 'One full reading passage with timed conditions', duration: 22, xp: 35 },
            { id: 'w6d1t2', type: 'listening', section: 'listening', title: 'Listening Practice', description: 'One lecture + one conversation with questions', duration: 20, xp: 30 },
            { id: 'w6d1t3', type: 'vocabulary', section: 'vocabulary', title: 'Daily Vocabulary', description: 'Learn 5 new words + review 10 due words', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 37, title: 'Speaking & Writing Focus', tasks: [
            { id: 'w6d2t1', type: 'speaking', section: 'speaking', title: 'Full Speaking Set', description: 'Complete all 4 speaking task types; record and evaluate', duration: 30, xp: 45 },
            { id: 'w6d2t2', type: 'writing', section: 'writing', title: 'Independent Essay', description: 'Write a full independent essay in 30 minutes', duration: 35, xp: 50 },
            { id: 'w6d2t3', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Spaced repetition session', duration: 15, xp: 20 },
          ]
        },
        {
          dayNumber: 38, title: 'Mock Exam Day (Reading + Listening)', tasks: [
            { id: 'w6d3t1', type: 'reading', section: 'reading', title: 'Mock Reading', description: '2 full reading passages back-to-back (35 minutes total)', duration: 35, xp: 50 },
            { id: 'w6d3t2', type: 'listening', section: 'listening', title: 'Mock Listening', description: 'Multiple lectures and conversations under timed conditions', duration: 36, xp: 50 },
          ]
        },
        {
          dayNumber: 39, title: 'Mock Review + Vocabulary', tasks: [
            { id: 'w6d4t1', type: 'review', section: 'general', title: 'Mock Exam Review', description: 'Analyze every incorrect answer from yesterday\'s mock; understand all mistakes', duration: 40, xp: 50 },
            { id: 'w6d4t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Mastery', description: 'Review 50 hardest words; create mnemonics for ones you keep forgetting', duration: 20, xp: 30 },
          ]
        },
        {
          dayNumber: 40, title: 'Mock Exam Day (Speaking + Writing)', tasks: [
            { id: 'w6d5t1', type: 'speaking', section: 'speaking', title: 'Mock Speaking', description: 'Complete full speaking section: all 4 tasks with proper timing', duration: 20, xp: 40 },
            { id: 'w6d5t2', type: 'writing', section: 'writing', title: 'Mock Writing', description: 'Complete full writing section: integrated (20 min) + independent (30 min)', duration: 55, xp: 60 },
          ]
        },
        {
          dayNumber: 41, title: 'Error Analysis', tasks: [
            { id: 'w6d6t1', type: 'review', section: 'general', title: 'Full Mock Review', description: 'Evaluate your speaking responses and writing essays from yesterday', duration: 35, xp: 45 },
            { id: 'w6d6t2', type: 'vocabulary', section: 'vocabulary', title: 'Weekly Vocabulary Review', description: 'Review all vocabulary from Week 6', duration: 20, xp: 25 },
          ]
        },
        {
          dayNumber: 42, title: 'Strategy Refinement', tasks: [
            { id: 'w6d7t1', type: 'review', section: 'general', title: 'Strategy Session', description: 'Based on mock results: create a targeted plan for your weakest section', duration: 30, xp: 35 },
            { id: 'w6d7t2', type: 'vocabulary', section: 'vocabulary', title: 'New Vocabulary Push', description: 'Learn 15 new advanced words; aim for 250 total by end of week 6', duration: 20, xp: 30 },
          ]
        },
      ],
    },
    // Weeks 7-12: Abbreviated structure
    {
      weekNumber: 7,
      theme: 'Intensive Reading & Listening',
      goal: 'Achieve consistent accuracy above 80% in Reading and Listening sections',
      phaseColor: 'teal',
      days: Array.from({ length: 7 }, (_, i) => ({
        dayNumber: 43 + i,
        title: ['Reading Intensive', 'Listening Intensive', 'Mixed Practice', 'Full Sections', 'Review Day', 'Speaking + Writing', 'Week Review'][i],
        tasks: [
          { id: `w7d${i+1}t1`, type: ['reading','listening','reading','reading','review','speaking','review'][i], section: ['reading','listening','reading','reading','general','speaking','general'][i], title: 'Practice Session', description: 'Targeted practice for this session\'s focus area', duration: 35, xp: 45 },
          { id: `w7d${i+1}t2`, type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Daily vocabulary review session', duration: 15, xp: 20 },
        ],
      })),
    },
    {
      weekNumber: 8,
      theme: 'Speaking & Writing Polish',
      goal: 'Achieve a score of 24+ in Speaking and 24+ in Writing through focused practice',
      phaseColor: 'indigo',
      days: Array.from({ length: 7 }, (_, i) => ({
        dayNumber: 50 + i,
        title: ['Speaking Deep Dive', 'Writing Deep Dive', 'Integrated Tasks', 'Full Mock (S+W)', 'Review & Fix', 'Mixed Sections', 'Week Review'][i],
        tasks: [
          { id: `w8d${i+1}t1`, type: ['speaking','writing','speaking','speaking','review','reading','review'][i], section: ['speaking','writing','speaking','speaking','general','reading','general'][i], title: 'Practice Session', description: 'Focused practice on the week\'s target area', duration: 40, xp: 50 },
          { id: `w8d${i+1}t2`, type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Review', description: 'Daily vocabulary review session', duration: 15, xp: 20 },
        ],
      })),
    },
    {
      weekNumber: 9,
      theme: 'Full Mock Tests',
      goal: 'Simulate real exam conditions; practice time management and stamina',
      phaseColor: 'yellow',
      days: Array.from({ length: 7 }, (_, i) => ({
        dayNumber: 57 + i,
        title: ['Full Mock Test 1', 'Mock 1 Review', 'Weak Area Focus', 'Full Mock Test 2', 'Mock 2 Review', 'Target Practice', 'Week Review'][i],
        tasks: [
          { id: `w9d${i+1}t1`, type: ['reading','review','reading','reading','review','speaking','review'][i], section: ['reading','general','reading','reading','general','speaking','general'][i], title: ['Full Mock Test 1','Review Session','Targeted Practice','Full Mock Test 2','Review Session','Target Weak Areas','Weekly Assessment'][i], description: 'Complete session focused on exam preparation', duration: [120, 45, 40, 120, 45, 40, 30][i], xp: [100, 60, 50, 100, 60, 50, 40][i] },
        ],
      })),
    },
    {
      weekNumber: 10,
      theme: 'Score Improvement Sprint',
      goal: 'Target your lowest-scoring section with intensive daily practice',
      phaseColor: 'pink',
      days: Array.from({ length: 7 }, (_, i) => ({
        dayNumber: 64 + i,
        title: ['Intensive Practice 1', 'Intensive Practice 2', 'Intensive Practice 3', 'Full Mock Test 3', 'Review & Analysis', 'Recovery Practice', 'Strategy Update'][i],
        tasks: [
          { id: `w10d${i+1}t1`, type: ['reading','listening','speaking','reading','review','writing','review'][i], section: ['reading','listening','speaking','reading','general','writing','general'][i], title: 'Practice Session', description: 'High-intensity targeted practice', duration: 50, xp: 60 },
          { id: `w10d${i+1}t2`, type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Maintenance', description: 'Keep vocabulary sharp with daily review', duration: 15, xp: 20 },
        ],
      })),
    },
    {
      weekNumber: 11,
      theme: 'Final Exam Simulation',
      goal: 'Complete multiple full mock tests under realistic exam conditions',
      phaseColor: 'rose',
      days: Array.from({ length: 7 }, (_, i) => ({
        dayNumber: 71 + i,
        title: ['Full Simulation 1', 'Deep Review', 'Targeted Drills', 'Full Simulation 2', 'Deep Review', 'Light Practice', 'Confidence Building'][i],
        tasks: [
          { id: `w11d${i+1}t1`, type: ['reading','review','speaking','reading','review','reading','review'][i], section: ['reading','general','speaking','reading','general','reading','general'][i], title: ['Full TOEFL Simulation','Comprehensive Review','Drill Weak Points','Full TOEFL Simulation','Comprehensive Review','Maintenance Practice','Review & Confidence'][i], description: 'Exam-focused preparation session', duration: [120, 50, 40, 120, 50, 30, 30][i], xp: [100, 65, 55, 100, 65, 40, 40][i] },
        ],
      })),
    },
    {
      weekNumber: 12,
      theme: 'Final Preparation',
      goal: 'Review, relax, and enter the exam with confidence',
      phaseColor: 'emerald',
      days: [
        { dayNumber: 78, title: 'Final Review Day 1', tasks: [{ id: 'w12d1t1', type: 'review', section: 'general', title: 'Reading & Listening Review', description: 'Quick review of all reading and listening strategies', duration: 40, xp: 50 }, { id: 'w12d1t2', type: 'vocabulary', section: 'vocabulary', title: 'Vocabulary Master Review', description: 'Review your most missed vocabulary words', duration: 20, xp: 30 }] },
        { dayNumber: 79, title: 'Final Review Day 2', tasks: [{ id: 'w12d2t1', type: 'review', section: 'general', title: 'Speaking & Writing Review', description: 'Review templates and strategies for Speaking Tasks 1-4 and Writing Tasks 1-2', duration: 40, xp: 50 }, { id: 'w12d2t2', type: 'speaking', section: 'speaking', title: 'Speaking Warm-up', description: 'Record 2 speaking tasks to stay warm', duration: 20, xp: 25 }] },
        { dayNumber: 80, title: 'Light Practice', tasks: [{ id: 'w12d3t1', type: 'reading', section: 'reading', title: 'One Easy Passage', description: 'One reading passage at easy difficulty—build confidence', duration: 20, xp: 25 }, { id: 'w12d3t2', type: 'vocabulary', section: 'vocabulary', title: 'Quick Vocab Review', description: 'Browse through your mastered words—feel confident!', duration: 15, xp: 15 }] },
        { dayNumber: 81, title: 'Rest Day', tasks: [{ id: 'w12d4t1', type: 'review', section: 'general', title: 'Mental Preparation', description: 'No heavy studying—review your notes briefly, get good sleep, prepare logistics', duration: 20, xp: 20 }] },
        { dayNumber: 82, title: 'Day Before Exam', tasks: [{ id: 'w12d5t1', type: 'review', section: 'general', title: 'Last Preparation', description: 'Light review of key strategies only. No new learning. Early bedtime!', duration: 20, xp: 20 }] },
        { dayNumber: 83, title: 'Exam Day!', tasks: [{ id: 'w12d6t1', type: 'review', section: 'general', title: 'Exam Morning Routine', description: 'Good breakfast, arrive early, believe in your preparation. You\'ve got this!', duration: 10, xp: 100 }] },
        { dayNumber: 84, title: 'Post-Exam', tasks: [{ id: 'w12d7t1', type: 'review', section: 'general', title: 'Celebrate!', description: 'You completed 12 weeks of dedicated TOEFL preparation. Congratulations!', duration: 0, xp: 200 }] },
      ],
    },
  ],
}

export function getWeek(weekNumber) {
  return STUDY_PLAN.weeks.find(w => w.weekNumber === weekNumber)
}

export function getDay(weekNumber, dayNumber) {
  const week = getWeek(weekNumber)
  if (!week) return null
  return week.days.find(d => d.dayNumber === dayNumber)
}

export function getAllTasks() {
  return STUDY_PLAN.weeks.flatMap(w => w.days.flatMap(d => d.tasks))
}

export const SECTION_COLORS = {
  reading: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', solid: 'bg-blue-600' },
  listening: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', solid: 'bg-green-600' },
  speaking: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', solid: 'bg-purple-600' },
  writing: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', solid: 'bg-orange-600' },
  vocabulary: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200', solid: 'bg-pink-600' },
  general: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', solid: 'bg-gray-600' },
  review: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', solid: 'bg-yellow-600' },
}

// TOEFL Writing Tasks
export const WRITING_TASKS = [
  // Task 1: Integrated Writing
  {
    id: 'w001',
    taskType: 1,
    taskName: 'Integrated Writing',
    timeMinutes: 20,
    targetWords: '150-225',
    readingPassage: `The mammoths of the Pleistocene epoch—enormous, shaggy cousins of modern elephants—vanished from most of the world about 10,000 years ago. Three primary explanations have been proposed for their extinction. The first theory attributes the disappearance to climate change as the last Ice Age ended; warmer temperatures transformed mammoth habitat from cold steppes to forests unsuitable for these grazers. The second explanation focuses on human hunting pressure; as Homo sapiens spread across continents, they brought sophisticated hunting technologies that may have driven mammoths to extinction. The third theory proposes a comet or asteroid impact that triggered widespread environmental catastrophe. Despite disagreement over the precise cause, most scientists believe the combination of these factors—not a single cause—led to the mammoth's demise.`,
    lectureScript: `The professor begins by challenging each of the three theories presented in the reading. Regarding climate change, she notes that mammoths survived multiple previous climate shifts over hundreds of thousands of years, so the most recent warming event alone is insufficient to explain their sudden extinction. On the hunting hypothesis, she points out that modern hunter-gatherer societies have coexisted with large animals for millennia without driving them extinct, and that there are gaps in the archaeological record of actual mammoth hunting sites. As for the comet impact theory, she argues the geological evidence often cited—microscopic diamonds and platinum deposits—is ambiguous and has been challenged by multiple independent research teams. She concludes that while the "multi-cause" explanation sounds reasonable, it is essentially a way of avoiding commitment to any specific mechanism, and that the scientific debate is far from settled.`,
    question: 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.',
    tips: [
      'Do NOT include your own opinion—only report what the reading and lecture say',
      'Structure: brief intro → challenge to theory 1 → challenge to theory 2 → challenge to theory 3',
      'Use phrases like: "The reading states... However, the professor argues..."',
      'Include specific details from both the passage and lecture',
      'Write 150-225 words',
    ],
    scoringGuide: {
      5: 'Successfully selects important information from the lecture and coherently and accurately presents the ways it casts doubt on the reading. Well-organized with minor language errors.',
      4: 'Generally accurate but may have omissions, some imprecision, or unclear connections between lecture and reading.',
      3: 'Contains some important information but has significant omissions or inaccuracies.',
      2: 'Demonstrates limited ability to connect lecture to reading; major gaps or errors.',
      1: 'Minimal response, largely incomprehensible, or merely copies from passage.',
    },
  },
  {
    id: 'w002',
    taskType: 1,
    taskName: 'Integrated Writing',
    timeMinutes: 20,
    targetWords: '150-225',
    readingPassage: `Remote work—the practice of employees working from locations outside of a traditional office environment—has expanded dramatically in recent years. Proponents argue it offers numerous benefits. First, it eliminates commuting time, which according to studies averages over an hour per day in major cities, giving workers more productive time. Second, research suggests that remote workers report higher job satisfaction and lower stress levels than office-based employees, leading to better retention. Third, companies that allow remote work can hire from a global talent pool rather than being limited to candidates within commuting distance, potentially accessing more qualified workers.`,
    lectureScript: `The professor raises concerns about each of the reading's claims. On the commuting point, he notes that while remote workers do save commute time, studies show they often work longer hours—frequently taking work calls in the evening or on weekends—so the time savings may not translate to better work-life balance. Regarding job satisfaction, he cites recent research showing higher rates of loneliness and disconnection among remote workers, suggesting that initial satisfaction gains diminish over time. On the talent pool argument, he explains that managing globally distributed teams creates significant coordination challenges due to time zone differences and cultural communication barriers, which can outweigh the benefits of accessing wider talent.`,
    question: 'Summarize the points made in the lecture, being sure to explain how they challenge the specific points made in the reading passage.',
    tips: [
      'Address all three points in the reading and how the lecture challenges each',
      'Use specific details and examples from both sources',
      'Write objectively—no personal opinions',
      'Aim for 150-225 words',
    ],
    scoringGuide: {
      5: 'Accurately and coherently presents lecture challenges to all three reading points with good organization.',
      4: 'Presents most lecture points accurately but may miss one challenge or lack specificity.',
      3: 'Covers some points but has notable gaps or inaccuracies.',
      2: 'Limited coverage with significant errors.',
      1: 'Inadequate response.',
    },
  },

  // Task 2: Independent Writing
  {
    id: 'w003',
    taskType: 2,
    taskName: 'Independent Writing',
    timeMinutes: 30,
    targetWords: '300+',
    prompt: 'Do you agree or disagree with the following statement? Universities should require all students to study abroad for at least one semester. Use specific reasons and examples to support your answer.',
    tips: [
      'Take a clear position in your introduction—agree OR disagree',
      'Write 4-5 paragraphs: intro, 2-3 body paragraphs, conclusion',
      'Each body paragraph: topic sentence + supporting details + example',
      'Acknowledge the opposing view briefly if space allows',
      'Aim for 300-400 words',
      'Use varied vocabulary and sentence structures',
    ],
    outlineTemplate: {
      intro: 'Hook + background + clear thesis statement (agree/disagree + main reason)',
      body1: 'First main reason + explanation + specific example',
      body2: 'Second main reason + explanation + specific example',
      body3: '(Optional) Counterargument + rebuttal',
      conclusion: 'Restate thesis + summarize main points + final thought',
    },
    sampleOutline: {
      position: 'Agree',
      thesis: 'Universities should require study abroad because it develops cross-cultural competence and enhances career prospects.',
      body1: 'Cross-cultural competence: Global employers seek workers who can collaborate across cultures. Example: Multinational companies require cultural awareness in negotiations.',
      body2: 'Career advantages: Study abroad demonstrates adaptability and language skills. Example: Students who studied abroad receive more job interviews in international companies.',
      conclusion: 'In an interconnected world, cross-cultural experience is no longer optional—it is essential.',
    },
  },
  {
    id: 'w004',
    taskType: 2,
    taskName: 'Independent Writing',
    timeMinutes: 30,
    targetWords: '300+',
    prompt: 'Some people believe that technology has made people\'s lives more complex and stressful. Others believe technology has simplified life and reduced stress. Which view do you agree with? Give specific reasons and examples to support your answer.',
    tips: [
      'Choose one clear side—do not try to balance both equally',
      'Use concrete, specific examples (specific apps, devices, situations)',
      'Show cause and effect: how does technology lead to the outcome you describe?',
      'Avoid vague statements like "technology is everywhere"',
    ],
    outlineTemplate: {
      intro: 'Introduce the debate + take a clear position',
      body1: 'First way technology [simplifies/complicates] life + example',
      body2: 'Second way technology [simplifies/complicates] life + example',
      body3: 'Address the opposing view briefly',
      conclusion: 'Summarize your position',
    },
  },
  {
    id: 'w005',
    taskType: 2,
    taskName: 'Independent Writing',
    timeMinutes: 30,
    targetWords: '300+',
    prompt: 'Do you agree or disagree with the following statement? The most important quality of a good leader is the ability to make difficult decisions quickly. Use specific reasons and examples to support your answer.',
    tips: [
      'Define what you mean by "difficult decisions" early on',
      'Consider whether you agree fully or only partially',
      'Use real-world examples: historical figures, business leaders, or personal experiences',
      'Strong academic vocabulary will boost your score',
    ],
    outlineTemplate: {
      intro: 'Leadership context + thesis',
      body1: 'Why quick decision-making matters OR why it\'s overrated',
      body2: 'Other leadership qualities to compare/contrast',
      body3: 'Real-world example supporting your view',
      conclusion: 'Final position on what makes the best leaders',
    },
  },
  {
    id: 'w006',
    taskType: 2,
    taskName: 'Independent Writing (New TOEFL Format)',
    timeMinutes: 10,
    targetWords: '150+',
    prompt: `An online class discussion:

Professor Martinez asks: "Should social media platforms be legally required to fact-check all content before it is posted? Share your thoughts."

Student A (Julia): "Absolutely. Misinformation spreads so rapidly on social media that it causes real-world harm—from vaccine hesitancy to election interference. Platforms profit from user engagement, so they have a responsibility to ensure accuracy."

Student B (Marcus): "I disagree. Who decides what's true? Requiring platforms to fact-check everything would give enormous power to technology companies to decide what speech is acceptable. It could easily become censorship."

Write a post that contributes to the class discussion. Express and support your opinion.`,
    tips: [
      'Take a clear position—do not just summarize what Julia and Marcus said',
      'Reference at least one of the students\' points to show engagement',
      'Support your position with a specific reason or example',
      'Write at least 150 words',
      'You have 10 minutes, so plan quickly (2 min) and write (7 min) and review (1 min)',
    ],
  },
]

export function getWritingTask(id) {
  return WRITING_TASKS.find(t => t.id === id)
}

export function getTasksByType(type) {
  return WRITING_TASKS.filter(t => t.taskType === type)
}

// Useful transition words and phrases for writing
export const WRITING_PHRASES = {
  agreement: ['Furthermore', 'Moreover', 'In addition', 'Additionally', 'What is more'],
  contrast: ['However', 'On the other hand', 'Nevertheless', 'In contrast', 'Despite this'],
  cause_effect: ['Therefore', 'As a result', 'Consequently', 'Thus', 'This leads to'],
  examples: ['For instance', 'For example', 'To illustrate', 'Specifically', 'Such as'],
  conclusion: ['In conclusion', 'To summarize', 'In summary', 'Ultimately', 'In short'],
  emphasis: ['Notably', 'Significantly', 'Crucially', 'Most importantly', 'Above all'],
}

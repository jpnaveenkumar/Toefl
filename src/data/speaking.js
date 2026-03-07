// TOEFL Speaking Tasks
export const SPEAKING_TASKS = [
  // Task 1: Independent - Familiar Topics
  {
    id: 'sp001',
    taskType: 1,
    taskName: 'Independent Speaking',
    prepTime: 15,
    responseTime: 45,
    prompt: 'What is one skill that you believe is essential for success in today\'s world? Use specific reasons and examples to support your answer.',
    tips: [
      'State your opinion clearly in the first sentence',
      'Give 2 main reasons or examples',
      'Use transitions: "First...", "In addition...", "For example..."',
      'Conclude briefly by restating your main point',
    ],
    sampleResponse: 'In my opinion, critical thinking is the most essential skill for success today. First, in a world flooded with information, the ability to evaluate sources and detect misinformation is vital. For instance, professionals in every field must analyze complex data to make sound decisions. In addition, critical thinking enables creative problem-solving. When I faced a difficult project at university, thinking critically helped me break the problem into manageable parts. In conclusion, critical thinking is the foundation upon which all other skills rest.',
  },
  {
    id: 'sp002',
    taskType: 1,
    taskName: 'Independent Speaking',
    prepTime: 15,
    responseTime: 45,
    prompt: 'Some people prefer living in big cities, while others prefer living in small towns. Which do you prefer and why?',
    tips: [
      'Choose one option clearly—do not say "both have advantages"',
      'Give concrete personal reasons',
      'Use specific examples from your experience or knowledge',
      'Keep your answer focused on your stated preference',
    ],
    sampleResponse: 'I strongly prefer living in big cities. The main reason is the abundance of opportunities. Major cities have more job options in diverse industries, which helps career growth. For example, technology companies, hospitals, and research centers are primarily based in large urban areas. Furthermore, big cities offer rich cultural experiences—museums, international restaurants, and entertainment—that enrich daily life. While they can be crowded, the professional and cultural advantages make big city living my clear preference.',
  },
  {
    id: 'sp003',
    taskType: 1,
    taskName: 'Independent Speaking',
    prepTime: 15,
    responseTime: 45,
    prompt: 'Describe a teacher who has had a significant impact on your life. Explain what made this teacher effective and how they influenced you.',
    tips: [
      'Name the teacher and describe their class briefly',
      'Focus on 2 specific qualities or actions',
      'Connect their influence to a specific outcome in your life',
      'Be personal and specific—avoid generic statements',
    ],
    sampleResponse: 'My high school biology teacher had a profound impact on my life. What made her exceptional was her ability to connect complex concepts to real-world applications. She would take us outside to study ecosystems directly rather than relying only on textbooks. Her enthusiasm for science was infectious—she genuinely loved her subject, and that passion inspired me. As a result of her teaching, I developed a deep interest in environmental science, which ultimately influenced my choice of university major. Her influence continues to shape my academic and professional interests today.',
  },

  // Task 2: Integrated - Campus Situation (Read + Listen + Speak)
  {
    id: 'sp004',
    taskType: 2,
    taskName: 'Integrated: Campus Announcement',
    prepTime: 30,
    responseTime: 60,
    readingPassage: {
      title: 'University Library to Reduce Hours',
      content: 'The university library will reduce its weekend operating hours beginning next semester. The library will now close at 8:00 PM on Saturdays and Sundays, instead of the current midnight closing time. University officials cite reduced weekend usage statistics and budget constraints as the primary reasons for this change. Students who need extended study hours are encouraged to use the 24-hour computer labs located in the Student Union building.',
    },
    conversationScript: {
      speaker1: 'Did you read the announcement about the library closing earlier on weekends?',
      speaker2: 'Yes, and I\'m really frustrated about it. I use the library Sunday evenings to study for Monday classes.',
      speaker1: 'The notice says usage is low though...',
      speaker2: 'But that\'s because many students aren\'t aware that it\'s open late! And the computer lab in the Student Union is always noisy—it\'s not the same as the quiet study environment the library provides. Also, not everyone has a personal printer. I use the library printers on weekends quite often.',
    },
    question: 'The woman expresses her opinion about the library\'s new hours. State her opinion and explain the reasons she gives for holding that opinion.',
    tips: [
      'Begin by stating the announcement briefly (1 sentence)',
      'State the woman\'s opinion clearly: she opposes the change',
      'Give her specific reasons from the conversation',
      'Do not add your own opinion',
    ],
  },
  {
    id: 'sp005',
    taskType: 2,
    taskName: 'Integrated: Campus Announcement',
    prepTime: 30,
    responseTime: 60,
    readingPassage: {
      title: 'New Mandatory Laptop Policy',
      content: 'Starting next fall, all first-year students will be required to purchase university-approved laptop computers before enrollment. The university states this policy will ensure all students have equal access to digital course materials and standardize technology requirements for online assessments. Financial assistance will be available for students who qualify for need-based aid.',
    },
    conversationScript: {
      speaker1: 'I just heard about the new laptop requirement. Seems like it could be helpful.',
      speaker2: 'I think it\'s a great idea, actually. Right now some students struggle because they don\'t have reliable computers at home. This way everyone will have the same tools from day one.',
      speaker1: 'What about the financial burden though?',
      speaker2: 'The announcement says financial aid is available, so that should help. And honestly, investing in a good laptop early pays off throughout your studies. You won\'t have to use those slow library computers anymore.',
    },
    question: 'The man expresses his opinion about the new laptop policy. State his opinion and explain the reasons he gives for holding that opinion.',
    tips: [
      'Briefly summarize the new policy (1-2 sentences)',
      'Clearly state: the man supports the policy',
      'Explain his two main reasons: equality of access and long-term value',
      'Use direct quotes or close paraphrases from the conversation',
    ],
  },

  // Task 3: Integrated - Academic Concept
  {
    id: 'sp006',
    taskType: 3,
    taskName: 'Integrated: Academic Concept',
    prepTime: 30,
    responseTime: 60,
    readingPassage: {
      title: 'Cognitive Dissonance',
      content: 'Cognitive dissonance is a psychological phenomenon that occurs when a person holds two or more contradictory beliefs, values, or attitudes simultaneously. This state of mental discomfort motivates individuals to reduce the inconsistency by changing one of the conflicting beliefs, acquiring new information that supports one view, or minimizing the importance of the conflict. Psychologist Leon Festinger first described this concept in 1957.',
    },
    lectureScript: 'Today let\'s look at how cognitive dissonance works in real life. Consider a classic example: a person who smokes cigarettes but knows that smoking is harmful to their health. They hold two conflicting beliefs—"I smoke" and "smoking is bad." This creates psychological discomfort. To reduce this dissonance, the smoker might rationalize: "I could be hit by a bus tomorrow anyway," or "I don\'t smoke that many cigarettes—not enough to really hurt me." They might also seek out information suggesting that the health risks are exaggerated, while avoiding articles that confirm the dangers. By rationalizing, they reduce the mental discomfort without actually resolving the underlying conflict.',
    question: 'Using the example from the lecture, explain what cognitive dissonance is and how people respond to it.',
    tips: [
      'Define cognitive dissonance from the reading (1 sentence)',
      'Introduce the lecture\'s example: a smoker',
      'Explain the two conflicting beliefs the smoker holds',
      'Describe the specific ways the smoker reduces dissonance (rationalization)',
      'Connect back to the definition',
    ],
  },

  // Task 4: Integrated - Academic Lecture Only
  {
    id: 'sp007',
    taskType: 4,
    taskName: 'Integrated: Academic Lecture',
    prepTime: 20,
    responseTime: 60,
    lectureScript: 'Biomimicry is an innovation strategy that applies designs and processes found in nature to solve human engineering challenges. Nature has been "testing" solutions to design problems for millions of years, and engineers have learned that studying these solutions can lead to remarkable technological breakthroughs. Let me give you two examples. First, consider the Japanese Shinkansen bullet train. When it emerged from tunnels at high speed, the pressure wave it created caused a loud sonic boom that disturbed nearby residents. An engineer who was also a birdwatcher noticed that kingfisher birds dive into water with almost no splash—their beaks are perfectly shaped to transition between air and water with minimal disturbance. When engineers redesigned the train\'s nose to mimic the kingfisher\'s beak, not only did the noise problem disappear, but the train became 15 percent more efficient and 10 percent faster. Second, consider Velcro. In 1941, Swiss engineer George de Mestral went for a walk and returned home with burr seeds stuck to his clothing. Under a microscope, he discovered tiny hooks on the burr that caught on anything with loops. He replicated this fastening mechanism to create Velcro. Two simple examples showing how nature\'s designs, refined over millions of years of evolution, can solve complex human engineering problems.',
    question: 'Using examples from the lecture, explain what biomimicry is and how it has been applied to solve engineering problems.',
    tips: [
      'Define biomimicry briefly (1 sentence)',
      'Explain Example 1: the bullet train and the kingfisher',
      'Include specific details: the problem (noise), the inspiration (kingfisher beak), the outcome (15% more efficient)',
      'Explain Example 2: Velcro and burr seeds',
      'Include details: de Mestral, the microscope observation, the mechanism',
    ],
  },
  {
    id: 'sp008',
    taskType: 4,
    taskName: 'Integrated: Academic Lecture',
    prepTime: 20,
    responseTime: 60,
    lectureScript: 'Today I want to discuss two types of business pricing strategies: penetration pricing and skimming pricing. Penetration pricing is when a new product enters the market at a very low price to attract customers quickly and gain market share. The idea is that once you have a large customer base, you can gradually raise prices. Netflix is a classic example. When Netflix launched its streaming service, it offered very low subscription prices to rapidly attract subscribers away from cable TV and other competitors. Once it built a massive user base, it gradually raised prices while keeping customers who were already hooked on its content library. Skimming pricing is the opposite approach. You launch a product at a high price targeting customers who are willing to pay a premium, then gradually lower the price to attract more price-sensitive consumers. Apple typically uses this strategy with new iPhone models. When a new iPhone launches, it\'s priced very high, capturing consumers who want the latest technology immediately. Over time, as newer models release, older versions drop in price to reach broader markets.',
    question: 'Using examples from the lecture, explain the two pricing strategies the professor describes.',
    tips: [
      'Name and briefly define both strategies at the start',
      'Explain penetration pricing with Netflix example: low entry price → build base → raise prices',
      'Explain skimming pricing with Apple iPhone example: high launch price → lower over time',
      'Note the contrast: they are opposite approaches',
    ],
  },
]

export function getTasksByType(type) {
  return SPEAKING_TASKS.filter(t => t.taskType === type)
}

export function getSpeakingTask(id) {
  return SPEAKING_TASKS.find(t => t.id === id)
}

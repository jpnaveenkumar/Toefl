// TOEFL Reading Passages - Academic style passages with questions
export const READING_PASSAGES = [
  {
    id: 'r001',
    title: 'The Coral Reef Crisis',
    topic: 'Environmental Science',
    difficulty: 'medium',
    timeMinutes: 18,
    passage: `Coral reefs are among the most biologically diverse ecosystems on Earth, occupying less than one percent of the ocean floor yet supporting approximately 25 percent of all marine species. These underwater structures, often called the "rainforests of the sea," are built by tiny organisms called coral polyps. Over centuries, billions of polyps deposit calcium carbonate skeletons to create the complex, three-dimensional structures that other marine organisms rely upon for food and shelter.

The relationship between coral polyps and photosynthetic algae known as zooxanthellae is fundamental to reef health. These algae live within the coral tissue, providing the polyps with up to 90 percent of their energy needs through photosynthesis while receiving shelter and nutrients in return. This mutually beneficial relationship gives coral reefs their extraordinary colors and productivity. When this partnership is disrupted—a process known as bleaching—the consequences for the reef ecosystem can be severe and long-lasting.

Ocean warming is the primary driver of coral bleaching. When water temperatures rise even one to two degrees Celsius above normal levels for extended periods, corals expel their symbiotic algae, turning white and becoming highly vulnerable to disease and death. Scientists have documented a dramatic increase in the frequency and severity of bleaching events over recent decades. The Great Barrier Reef, the world's largest coral reef system stretching over 2,300 kilometers along Australia's northeastern coast, experienced unprecedented mass bleaching in 2016, 2017, and 2020, killing approximately half of its coral cover.

Ocean acidification presents an additional threat. As the oceans absorb carbon dioxide from the atmosphere, seawater becomes more acidic, hindering the ability of corals to build their calcium carbonate skeletons. Research indicates that under projected CO₂ emissions scenarios, ocean acidity could increase by 150 percent by the end of this century, potentially making large portions of the ocean chemically hostile to coral growth.

Despite these dire conditions, scientists and conservation organizations are pursuing multiple strategies to protect and restore coral reefs. These efforts range from establishing marine protected areas and reducing local stressors such as pollution and overfishing, to more interventionist approaches including assisted evolution, where researchers selectively breed corals with greater thermal tolerance, and coral gardening, where fragments of resilient corals are grown in nurseries and transplanted to degraded reef areas.

The effectiveness of these interventions ultimately depends on addressing the root cause of reef degradation: rising ocean temperatures and acidification driven by greenhouse gas emissions. Without significant reductions in these emissions, scientists warn that the world's coral reefs may become functionally extinct by the end of this century, with catastrophic consequences not only for marine biodiversity but also for the hundreds of millions of people whose livelihoods and food security depend on healthy reef ecosystems.`,
    questions: [
      {
        id: 'r001q1',
        type: 'factual',
        question: 'According to the passage, what percentage of all marine species are supported by coral reefs?',
        options: [
          'About 1 percent',
          'About 10 percent',
          'About 25 percent',
          'About 50 percent',
        ],
        correct: 2,
        explanation: 'The passage states that coral reefs support "approximately 25 percent of all marine species."',
      },
      {
        id: 'r001q2',
        type: 'vocabulary',
        question: 'The word "symbiotic" in paragraph 3 is closest in meaning to:',
        options: [
          'Harmful',
          'Mutually beneficial',
          'Temporary',
          'Photosynthetic',
        ],
        correct: 1,
        explanation: 'The passage describes the relationship between coral and zooxanthellae as mutually beneficial (paragraph 2), and "symbiotic" refers to this same relationship.',
      },
      {
        id: 'r001q3',
        type: 'inference',
        question: 'What can be inferred about the future of coral reefs if greenhouse gas emissions continue at current levels?',
        options: [
          'Coral reefs will adapt and become more resilient.',
          'New coral species will emerge to replace existing ones.',
          'Coral reefs may largely disappear within this century.',
          'Conservation efforts will successfully preserve most reefs.',
        ],
        correct: 2,
        explanation: 'The passage warns that "the world\'s coral reefs may become functionally extinct by the end of this century" without significant emissions reductions.',
      },
      {
        id: 'r001q4',
        type: 'factual',
        question: 'According to the passage, what is the primary cause of coral bleaching?',
        options: [
          'Ocean acidification from CO₂ absorption',
          'Overfishing near reef ecosystems',
          'Loss of zooxanthellae due to pollution',
          'Ocean warming above normal temperature levels',
        ],
        correct: 3,
        explanation: 'The passage states: "Ocean warming is the primary driver of coral bleaching."',
      },
      {
        id: 'r001q5',
        type: 'rhetorical',
        question: 'Why does the author mention the Great Barrier Reef in paragraph 3?',
        options: [
          'To show that Australia has the most severe bleaching problems',
          'To provide a specific example of the real-world impact of bleaching events',
          'To argue that large reefs are more vulnerable than small ones',
          'To explain the geography of ocean warming patterns',
        ],
        correct: 1,
        explanation: 'The Great Barrier Reef example is used to illustrate with specific data the severity and frequency of bleaching events described in the paragraph.',
      },
      {
        id: 'r001q6',
        type: 'negative_factual',
        question: 'According to the passage, which of the following is NOT mentioned as a conservation strategy for coral reefs?',
        options: [
          'Establishing marine protected areas',
          'Breeding corals with greater thermal tolerance',
          'Transplanting resilient coral fragments to damaged areas',
          'Introducing non-native fish species to reef areas',
        ],
        correct: 3,
        explanation: 'The passage mentions marine protected areas, assisted evolution (selective breeding), and coral gardening (transplanting), but does not mention introducing non-native fish species.',
      },
    ],
  },
  {
    id: 'r002',
    title: 'The Rise of the Internet',
    topic: 'Technology & Society',
    difficulty: 'easy',
    timeMinutes: 16,
    passage: `Few technological developments have reshaped human civilization as profoundly as the internet. What began in the late 1960s as a modest military communication network called ARPANET has evolved into a global infrastructure connecting billions of people, enabling the instant exchange of information, commerce, entertainment, and social interaction on an unprecedented scale.

ARPANET was developed by the United States Defense Advanced Research Projects Agency (DARPA) as a means of maintaining communication in the event of a nuclear attack. The network's key innovation was packet-switching technology, which broke data into small packets that could travel independently across different routes and be reassembled at their destination. This made the system far more resilient than traditional circuit-switched telephone networks, which required a dedicated connection between sender and receiver for the duration of a communication.

The transition from a military tool to a public resource was gradual. In the 1980s, the National Science Foundation funded NSFNET, which connected university research centers across the United States. This expansion attracted a growing community of academic users who developed protocols, applications, and the culture of open information sharing that would later characterize the public internet. The pivotal breakthrough came in 1991, when British computer scientist Tim Berners-Lee introduced the World Wide Web—a system of hyperlinked documents accessible through web browsers—transforming the internet from a technical network for experts into an accessible medium for the general public.

The commercialization of the internet in the mid-1990s triggered explosive growth. Companies like Amazon, Google, and eBay emerged to exploit the commercial potential of this new medium, while internet service providers expanded connectivity to homes and businesses worldwide. The dot-com boom of the late 1990s, though followed by a dramatic bust in 2000-2001, established the internet as an essential component of the global economy.

The mobile revolution of the 2000s and 2010s fundamentally altered how people access the internet. The introduction of smartphones, beginning with Apple's iPhone in 2007, placed internet connectivity in billions of pockets. Today, more than 60 percent of global internet traffic comes from mobile devices, and in many developing countries, smartphones provide people with their first and primary access to the digital world.

The consequences of this technological transformation extend far beyond commerce and communication. The internet has altered the nature of work, enabling remote employment and the gig economy. It has disrupted traditional media, challenging newspapers, television, and the music industry. It has created new forms of social organization, from online communities to political movements that can mobilize across national boundaries. As artificial intelligence increasingly integrates with internet infrastructure, the pace of change shows no sign of slowing.`,
    questions: [
      {
        id: 'r002q1',
        type: 'factual',
        question: 'What was the original purpose of ARPANET?',
        options: [
          'To connect university research centers',
          'To enable commercial internet transactions',
          'To maintain military communication during potential nuclear attacks',
          'To develop the World Wide Web protocol',
        ],
        correct: 2,
        explanation: 'The passage states ARPANET was developed "as a means of maintaining communication in the event of a nuclear attack."',
      },
      {
        id: 'r002q2',
        type: 'vocabulary',
        question: 'The word "pivotal" in paragraph 3 is closest in meaning to:',
        options: [
          'Gradual',
          'Controversial',
          'Critically important',
          'Unexpected',
        ],
        correct: 2,
        explanation: '"Pivotal" means crucially important or decisive, which describes the significance of Berners-Lee\'s introduction of the World Wide Web.',
      },
      {
        id: 'r002q3',
        type: 'factual',
        question: 'According to the passage, what percentage of global internet traffic comes from mobile devices today?',
        options: [
          'More than 40 percent',
          'More than 50 percent',
          'More than 60 percent',
          'More than 70 percent',
        ],
        correct: 2,
        explanation: 'The passage states: "more than 60 percent of global internet traffic comes from mobile devices."',
      },
      {
        id: 'r002q4',
        type: 'inference',
        question: 'What can be inferred about the role of packet-switching in the internet\'s success?',
        options: [
          'It was initially designed for commercial use',
          'It made the system more reliable by not requiring a single dedicated connection',
          'It was developed by Tim Berners-Lee',
          'It was less effective than telephone network technology',
        ],
        correct: 1,
        explanation: 'The passage explains that packet-switching made the system "far more resilient than traditional circuit-switched telephone networks," implying this reliability contributed to its success.',
      },
      {
        id: 'r002q5',
        type: 'negative_factual',
        question: 'According to the passage, which of the following is NOT mentioned as an effect of the internet?',
        options: [
          'Disruption of traditional media industries',
          'Enablement of remote work',
          'Elimination of poverty in developing nations',
          'Creation of new forms of political organization',
        ],
        correct: 2,
        explanation: 'The passage mentions disruption of media, remote work, and new political movements, but never mentions eliminating poverty.',
      },
    ],
  },
  {
    id: 'r003',
    title: 'Sleep and Memory Consolidation',
    topic: 'Psychology & Neuroscience',
    difficulty: 'hard',
    timeMinutes: 20,
    passage: `The relationship between sleep and memory has been a subject of scientific inquiry for over a century, yet the mechanisms underlying this relationship have only recently begun to yield to rigorous experimental investigation. Contrary to the intuitive notion that sleep is merely a period of rest and inactivity, contemporary neuroscience reveals it to be a highly dynamic state during which the brain performs essential maintenance and organizational functions, including the consolidation of memories formed during waking hours.

Human sleep is characterized by a cyclical pattern typically lasting 90 to 120 minutes, with each cycle consisting of distinct stages: light sleep (N1), deeper sleep (N2), slow-wave sleep (N3), and rapid eye movement (REM) sleep. These stages differ markedly in their brain activity patterns, as measured by electroencephalography (EEG), and in their contributions to different types of memory. Slow-wave sleep, marked by high-amplitude, low-frequency delta waves, appears to play a particularly important role in the consolidation of declarative memories—memories of facts and events. REM sleep, characterized by brain activity patterns resembling wakefulness, is associated with procedural memory consolidation and emotional memory processing.

The prevailing model of how sleep facilitates memory consolidation involves a two-step process. During waking experience, new information is initially encoded in the hippocampus—a seahorse-shaped brain structure critical for forming new memories. During subsequent slow-wave sleep, these hippocampal memories are progressively transferred to the neocortex for long-term storage through a process of memory reactivation. Researchers have demonstrated this reactivation by recording the firing patterns of neurons during learning tasks and observing similar patterns during subsequent sleep in both rodents and humans. This "replay" is thought to strengthen synaptic connections and integrate new information with existing knowledge frameworks.

The practical implications of sleep for learning and academic performance are substantial. Studies consistently show that sleep deprivation significantly impairs both the encoding of new memories and the consolidation of previously learned information. A landmark study by Matthew Walker and colleagues at the University of California, Berkeley found that participants who were kept awake for 35 hours showed a 40 percent reduction in their ability to form new memories compared to those who had slept normally. Conversely, research suggests that napping before learning can enhance subsequent memory formation by effectively clearing the hippocampus to make room for new information.

The directionality of the relationship is important: while sleep clearly benefits memory, there is also evidence that memory content influences sleep architecture. Emotional memories, in particular, appear to preferentially trigger certain types of brain activity during REM sleep. Some researchers have proposed that this interaction underlies the well-documented phenomenon of "sleeping on a problem"—the observation that insight and creative problem-solving are enhanced following a period of sleep.

Despite decades of research, many fundamental questions remain unanswered. The precise molecular mechanisms by which neuronal firing patterns during sleep translate into lasting synaptic changes are incompletely understood. The question of whether memory consolidation requires sleep per se, or merely extended periods of quiet wakefulness, continues to be debated. What is clear, however, is that the traditional view of sleep as a passive state is profoundly mistaken. Sleep is, by any measure, one of the brain's most productive and purposeful activities.`,
    questions: [
      {
        id: 'r003q1',
        type: 'factual',
        question: 'According to the passage, which type of sleep is most associated with the consolidation of declarative memories?',
        options: [
          'Light sleep (N1)',
          'Deeper sleep (N2)',
          'Slow-wave sleep (N3)',
          'REM sleep',
        ],
        correct: 2,
        explanation: 'The passage states: "Slow-wave sleep...appears to play a particularly important role in the consolidation of declarative memories."',
      },
      {
        id: 'r003q2',
        type: 'vocabulary',
        question: 'The word "consolidation" in the passage is closest in meaning to:',
        options: [
          'Deletion',
          'Strengthening and stabilizing',
          'Initial formation',
          'Active recall',
        ],
        correct: 1,
        explanation: '"Consolidation" in memory research refers to the process by which newly formed memories are stabilized and strengthened into long-term storage.',
      },
      {
        id: 'r003q3',
        type: 'factual',
        question: 'What did Walker\'s study find about sleep-deprived participants?',
        options: [
          'They showed improved creative problem-solving',
          'They had a 40% reduction in new memory formation',
          'They required more REM sleep to consolidate memories',
          'They performed equally on recognition but not recall tasks',
        ],
        correct: 1,
        explanation: 'The passage states participants deprived of sleep "showed a 40 percent reduction in their ability to form new memories."',
      },
      {
        id: 'r003q4',
        type: 'inference',
        question: 'What can be inferred from the passage about students who stay up all night studying before an exam?',
        options: [
          'They will perform better due to increased study time',
          'Their performance may be harmed by impaired memory encoding',
          'Their procedural memory will be unaffected',
          'They will consolidate more memories through hippocampal replay',
        ],
        correct: 1,
        explanation: 'Since sleep deprivation "significantly impairs both the encoding of new memories and the consolidation of previously learned information," all-night studying is counterproductive.',
      },
      {
        id: 'r003q5',
        type: 'rhetorical',
        question: 'Why does the author describe the hippocampus as "seahorse-shaped" in paragraph 3?',
        options: [
          'To argue that brain structure determines memory capacity',
          'To illustrate the complexity of the brain',
          'To provide a vivid description that aids comprehension',
          'To distinguish it from other brain structures',
        ],
        correct: 2,
        explanation: 'The parenthetical description is purely descriptive—providing a visual aid to help readers picture and remember the brain structure being discussed.',
      },
      {
        id: 'r003q6',
        type: 'negative_factual',
        question: 'According to the passage, which of the following is NOT presented as an established finding?',
        options: [
          'Memory reactivation occurs during slow-wave sleep',
          'Sleep deprivation impairs memory formation',
          'The exact molecular mechanisms of sleep-based consolidation are fully understood',
          'Napping may improve subsequent learning',
        ],
        correct: 2,
        explanation: 'The passage explicitly states the "precise molecular mechanisms...are incompletely understood," making this an area still under investigation.',
      },
    ],
  },
  {
    id: 'r004',
    title: 'The Agricultural Revolution',
    topic: 'History & Archaeology',
    difficulty: 'medium',
    timeMinutes: 18,
    passage: `For the overwhelming majority of human history—roughly 300,000 years out of our approximately 315,000-year existence as a species—Homo sapiens lived as hunter-gatherers, obtaining food by foraging for wild plants and hunting wild animals. Then, beginning around 10,000 years ago in the region known as the Fertile Crescent (modern-day Iraq, Syria, Lebanon, Israel, and nearby areas), humans began a dramatic transformation of their relationship with the natural world by deliberately cultivating crops and domesticating animals. This transition, known as the Neolithic Revolution or the Agricultural Revolution, is widely regarded as one of the most consequential turning points in human history.

The shift to agriculture was not a single event but a gradual process occurring independently in multiple regions over thousands of years. Archaeological evidence indicates that agriculture developed separately in at least twelve distinct regions worldwide, including in China (rice and millet), Mesoamerica (maize and squash), New Guinea (taro and bananas), and sub-Saharan Africa (sorghum and yams). This parallel development suggests that agriculture emerged as a response to common pressures rather than spreading entirely from a single origin.

The traditional view of the Agricultural Revolution was triumphalist: farming enabled population growth, social complexity, cities, writing, science, and ultimately modern civilization. According to this narrative, agriculture represented unambiguous progress—humans using their intelligence to transcend the limitations of a precarious hunter-gatherer existence. More recent scholarship, however, has complicated this picture considerably.

Examination of human skeletal remains from the transition period reveals that early farmers were typically shorter and less healthy than their hunter-gatherer predecessors. Dental remains show higher rates of cavities, consistent with a diet dominated by starchy crops rather than the diverse proteins and nutrients of a hunter-gatherer diet. Bones show evidence of arthritis and overuse injuries characteristic of repetitive agricultural labor. Moreover, by living in close proximity to domesticated animals and in densely populated settlements, early farmers were far more vulnerable to epidemic diseases—a pattern that would have catastrophic consequences whenever isolated populations encountered these diseases for the first time.

Yet agriculture also enabled population sizes that could never be supported by hunter-gatherer subsistence. Even if individual farmers were less healthy than individual hunter-gatherers, the sheer numbers of people that farming could sustain meant that agricultural societies ultimately displaced hunter-gatherers throughout most of the world. The fate of many indigenous peoples following contact with agricultural civilizations tragically illustrated that numerical and technological advantages, even when accompanied by health disadvantages, could prove decisive.

Today, the legacy of the Agricultural Revolution shapes virtually every aspect of human life—from the foods we eat to the political systems we live under, from our experience of infectious disease to the global environmental transformations we are currently living through. Understanding how and why this revolution occurred, and what its true costs and benefits were, remains essential to understanding the human condition.`,
    questions: [
      {
        id: 'r004q1',
        type: 'factual',
        question: 'According to the passage, approximately how long ago did humans begin cultivating crops?',
        options: [
          '1,000 years ago',
          '5,000 years ago',
          '10,000 years ago',
          '300,000 years ago',
        ],
        correct: 2,
        explanation: 'The passage states agriculture began "around 10,000 years ago in the region known as the Fertile Crescent."',
      },
      {
        id: 'r004q2',
        type: 'inference',
        question: 'What can be inferred about the traditional view of the Agricultural Revolution?',
        options: [
          'It was supported by analysis of skeletal remains',
          'It emphasized agriculture as straightforwardly positive for human welfare',
          'It was developed primarily by archaeologists studying disease patterns',
          'It acknowledged the health costs of the transition to farming',
        ],
        correct: 1,
        explanation: 'The passage describes the traditional view as "triumphalist," presenting agriculture as "unambiguous progress," suggesting it focused on benefits without acknowledging costs.',
      },
      {
        id: 'r004q3',
        type: 'factual',
        question: 'Which of the following is mentioned as evidence that early farmers were less healthy than hunter-gatherers?',
        options: [
          'Lower rates of infectious disease',
          'Evidence of malnutrition in written records',
          'Higher rates of dental cavities',
          'Shorter working hours',
        ],
        correct: 2,
        explanation: 'The passage states "Dental remains show higher rates of cavities, consistent with a diet dominated by starchy crops."',
      },
      {
        id: 'r004q4',
        type: 'vocabulary',
        question: 'The word "precarious" in paragraph 3 is closest in meaning to:',
        options: [
          'Physically demanding',
          'Intellectually stimulating',
          'Uncertain and potentially dangerous',
          'Culturally rich',
        ],
        correct: 2,
        explanation: '"Precarious" means not secure, uncertain, and dependent on circumstances—describing the traditional view of hunter-gatherer life as risky and unstable.',
      },
      {
        id: 'r004q5',
        type: 'organization',
        question: 'How is the passage primarily organized?',
        options: [
          'By comparing different regions where agriculture developed',
          'By presenting a traditional view and then complicating it with new evidence',
          'By arguing that hunter-gatherers were superior to farmers',
          'By tracing the spread of agriculture from the Fertile Crescent outward',
        ],
        correct: 1,
        explanation: 'The passage presents the traditional "triumphalist" view in paragraph 3, then complicates it in paragraphs 4-5 with evidence about health costs, following an established academic organizational pattern.',
      },
    ],
  },
  {
    id: 'r005',
    title: 'Urban Heat Islands',
    topic: 'Environmental Science',
    difficulty: 'medium',
    timeMinutes: 16,
    passage: `Cities are measurably warmer than the surrounding rural and suburban areas—sometimes by as much as 10 degrees Celsius. This phenomenon, known as the urban heat island effect, results from a complex interaction of factors that collectively trap and generate heat in densely built environments. Understanding and mitigating this effect has become an urgent priority as global urbanization accelerates and climate change intensifies heat stress in cities worldwide.

The built environment of a city contributes to heat retention in several ways. Dark surfaces such as asphalt roads and bituminous roofing absorb significantly more solar radiation than the natural vegetation they replace. Concrete and stone have high thermal mass—they absorb heat during the day and release it slowly overnight, preventing cities from cooling at night as quickly as natural landscapes do. The geometry of urban streets, with tall buildings creating narrow canyons, can also trap heat and reduce wind flow that would otherwise provide cooling.

Human activities in cities generate substantial amounts of heat. Transportation, industry, air conditioning systems, and even the metabolic heat of millions of human bodies all contribute thermal energy to the urban environment. Paradoxically, the widespread use of air conditioning, while providing comfort inside buildings, actually exacerbates the urban heat island effect by exhausting waste heat into the surrounding streets and neighborhoods.

The consequences of urban heat islands extend well beyond mere discomfort. Elevated temperatures increase energy consumption as buildings require more cooling, creating a vicious cycle of greater energy use leading to more waste heat and higher temperatures. Heat-related illness and mortality increase significantly during heat waves in cities, with the elderly, the very young, outdoor workers, and those without access to air conditioning most vulnerable. Studies have also documented ecological impacts, including altered timing of plant flowering and altered behavior of urban-dwelling wildlife.

Several strategies have emerged to reduce the urban heat island effect. Green roofs—rooftop gardens covered with vegetation—reduce heat absorption while providing insulation and managing stormwater runoff. Urban forests and tree planting programs cool streets through shade and evapotranspiration, the process by which plants release water vapor through their leaves. Cool roofs, designed to reflect more sunlight than traditional roofing materials, can reduce rooftop temperatures by up to 50 degrees Celsius. At the urban planning level, designing cities to maximize airflow through strategic street orientation and building height regulation can substantially reduce heat trapping.

The urban heat island effect illustrates the complex and often counterintuitive ways in which human modifications of the natural environment create unintended consequences. As the world's urban population continues to grow—the United Nations projects that two-thirds of humanity will live in cities by 2050—developing and implementing effective strategies to mitigate urban heat will become increasingly critical to human health, energy sustainability, and quality of life.`,
    questions: [
      {
        id: 'r005q1',
        type: 'factual',
        question: 'According to the passage, by how much can cities be warmer than surrounding areas?',
        options: [
          '2 degrees Celsius',
          '5 degrees Celsius',
          '8 degrees Celsius',
          '10 degrees Celsius',
        ],
        correct: 3,
        explanation: 'The passage states cities can be warmer "sometimes by as much as 10 degrees Celsius."',
      },
      {
        id: 'r005q2',
        type: 'vocabulary',
        question: 'The word "exacerbates" in paragraph 3 is closest in meaning to:',
        options: [
          'Reduces',
          'Explains',
          'Worsens',
          'Creates',
        ],
        correct: 2,
        explanation: '"Exacerbates" means to make a bad situation worse—the passage says air conditioning worsens the heat island effect.',
      },
      {
        id: 'r005q3',
        type: 'factual',
        question: 'How much can cool roofs reduce rooftop temperatures according to the passage?',
        options: [
          'Up to 10 degrees Celsius',
          'Up to 20 degrees Celsius',
          'Up to 30 degrees Celsius',
          'Up to 50 degrees Celsius',
        ],
        correct: 3,
        explanation: '"Cool roofs...can reduce rooftop temperatures by up to 50 degrees Celsius."',
      },
      {
        id: 'r005q4',
        type: 'inference',
        question: 'What does the passage imply about the relationship between air conditioning use and urban temperature?',
        options: [
          'Air conditioning is the most effective solution to heat islands',
          'Individual comfort from air conditioning comes at a collective cost of increased urban heat',
          'Air conditioning has no measurable effect on outdoor temperatures',
          'Air conditioning should be prohibited to reduce the heat island effect',
        ],
        correct: 1,
        explanation: 'The passage describes a "paradox": AC cools indoors but exhausts waste heat outdoors, contributing to the very problem it addresses at the individual level.',
      },
      {
        id: 'r005q5',
        type: 'negative_factual',
        question: 'Which of the following is NOT mentioned in the passage as a mitigation strategy for urban heat islands?',
        options: [
          'Green roofs',
          'Urban tree planting',
          'Painting streets white',
          'Strategic street orientation',
        ],
        correct: 2,
        explanation: 'The passage mentions green roofs, urban forests/tree planting, cool roofs, and strategic street orientation—but not painting streets white.',
      },
    ],
  },
]

export function getPassageById(id) {
  return READING_PASSAGES.find(p => p.id === id)
}

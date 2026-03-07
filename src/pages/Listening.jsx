import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Headphones, ArrowLeft, ChevronRight, CheckCircle, XCircle, Volume2 } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'

const LISTENING_CONTENT = [
  {
    id: 'l001',
    type: 'lecture',
    title: 'The Doppler Effect',
    subject: 'Physics',
    difficulty: 'medium',
    transcript: `Good morning, everyone. Today we're going to discuss a phenomenon you've all experienced but may not have had a name for: the Doppler effect. This principle was first described by Austrian physicist Christian Doppler in 1842, and it explains why the pitch of a sound changes depending on whether the source of that sound is moving toward or away from you.

Think about a common example: an ambulance. When an ambulance is racing toward you with its siren blaring, the pitch sounds high. But the moment it passes and starts moving away, you notice the pitch drops noticeably. Here's why this happens.

Sound travels in waves. When the ambulance is moving toward you, each successive wave is compressed—the ambulance "catches up" to the waves it just emitted, pushing them closer together. More waves reach your ear per second, which means higher frequency, which your brain perceives as a higher pitch.

When the ambulance moves away, the opposite occurs. The source is moving away from the waves it produces, stretching them apart. Fewer waves reach your ear per second—lower frequency—which you hear as a lower pitch.

Now, here's where it gets fascinating for astronomers. The Doppler effect applies not just to sound but to light as well. When distant galaxies are moving away from us—which most are—their light is "stretched" to longer, redder wavelengths. This is called redshift. By measuring how much redshift a galaxy shows, astronomers can calculate exactly how fast it is receding from Earth. This evidence was crucial in establishing that the universe is expanding—a discovery that won Edwin Hubble worldwide recognition.`,
    questions: [
      {
        id: 'l001q1',
        question: 'What is the main topic of the lecture?',
        options: ['The biography of Christian Doppler', 'Why sounds change pitch when their source moves', 'The history of ambulance sirens', 'How the universe was formed'],
        correct: 1,
        type: 'gist-content',
      },
      {
        id: 'l001q2',
        question: 'Why does an ambulance siren sound higher-pitched when it is approaching?',
        options: [
          'The ambulance driver increases the volume as it approaches',
          'Sound waves are compressed, increasing their frequency',
          'Your ears become more sensitive to approaching sounds',
          'The siren produces different sounds going forward and backward',
        ],
        correct: 1,
        type: 'detail',
      },
      {
        id: 'l001q3',
        question: 'According to the professor, what does "redshift" indicate about a galaxy?',
        options: [
          'The galaxy is moving toward Earth',
          'The galaxy contains mostly red stars',
          'The galaxy is moving away from Earth',
          'The galaxy is older than our own',
        ],
        correct: 2,
        type: 'detail',
      },
      {
        id: 'l001q4',
        question: 'Why does the professor mention Edwin Hubble?',
        options: [
          'To explain who invented the Doppler effect',
          'To give an example of how Doppler effect applies to galaxies',
          'To credit the person who discovered the Doppler effect',
          'To explain how astronomers build telescopes',
        ],
        correct: 1,
        type: 'function',
      },
    ],
  },
  {
    id: 'l002',
    type: 'conversation',
    title: 'Office Hours: Research Paper Problem',
    subject: 'Academic Conversation',
    difficulty: 'easy',
    transcript: `Student: Professor Chen, do you have a minute? I'm having trouble with my research paper on urban sprawl.

Professor: Of course, come in, Marcus. What seems to be the problem?

Student: Well, I've been researching the environmental impacts of urban sprawl for a week now, and I have way too much information. I can't figure out how to organize it all into a coherent argument.

Professor: That's actually a common challenge. What sources are you drawing on?

Student: I have about 15 journal articles, three books, and some government reports. But they all cover different aspects—some focus on air pollution, others on habitat loss, others on water usage.

Professor: I see. Marcus, what is your thesis statement right now?

Student: Um... that urban sprawl has negative environmental effects?

Professor: That's a topic, not a thesis. A thesis needs to make a specific, arguable claim. For example: "Urban sprawl in Sun Belt cities has accelerated habitat fragmentation at a rate that cannot be offset by current conservation efforts." Do you see the difference?

Student: Oh! That's much more specific. It's making a specific argument I'd need to prove.

Professor: Exactly. Once you have a clear thesis, you'll find that most of your sources naturally cluster around it, and the ones that don't support your specific argument can be set aside or used as counterarguments to address.

Student: That makes sense. Should I come to your office hours again once I have a revised thesis?

Professor: Please do. Email me your thesis and outline before you come so we can use the time productively.`,
    questions: [
      {
        id: 'l002q1',
        question: 'Why does the student visit the professor?',
        options: [
          'To request an extension on his paper',
          'To get help organizing his research paper',
          'To ask which sources to use for his topic',
          'To discuss his grade on a previous assignment',
        ],
        correct: 1,
        type: 'gist-purpose',
      },
      {
        id: 'l002q2',
        question: 'What does the professor say is wrong with the student\'s current thesis?',
        options: [
          'It is too specific to be proven',
          'It is a topic rather than an arguable claim',
          'It focuses on the wrong aspect of urban sprawl',
          'It cannot be supported by the student\'s sources',
        ],
        correct: 1,
        type: 'detail',
      },
      {
        id: 'l002q3',
        question: 'What does the professor suggest the student do before their next meeting?',
        options: [
          'Find more sources on urban sprawl',
          'Read all 15 journal articles again',
          'Email a revised thesis and outline',
          'Narrow his topic to one environmental impact',
        ],
        correct: 2,
        type: 'detail',
      },
    ],
  },
  {
    id: 'l003',
    type: 'lecture',
    title: 'The Placebo Effect',
    subject: 'Psychology / Medicine',
    difficulty: 'hard',
    transcript: `Today I want to examine one of the most fascinating and perplexing phenomena in medicine: the placebo effect. A placebo is an inert treatment—a sugar pill, a saline injection, a fake surgery—that has no pharmacological effect. Yet in clinical trials, placebos routinely produce measurable, sometimes substantial, improvements in patients' conditions.

For decades, the placebo effect was dismissed as mere wishful thinking—patients convincing themselves they felt better when they hadn't actually improved. But modern neuroscience has revealed something far more interesting: placebos can trigger genuine physiological changes in the body.

Research has shown that placebo treatments for pain can stimulate the release of endorphins—the same natural painkillers that opioid drugs target. Brain imaging studies show that placebo pain relief activates the same neural pathways as actual analgesics. This means that when a patient believes they are receiving a painkiller, their brain literally manufactures pain relief.

Equally striking are studies on Parkinson's disease patients, who suffer from a lack of dopamine. When given placebos they believed were Parkinson's medication, some patients showed measurable increases in dopamine production. Their brains generated more of the neurotransmitter they were deficient in—simply because they believed they were receiving treatment.

Now this raises an important ethical question that researchers are grappling with: if the placebo effect requires belief, can it work if the patient knows they're receiving a placebo? Surprisingly, a series of recent studies has found that open-label placebos—where patients are told explicitly that they are taking a sugar pill—can still produce significant symptom relief in conditions like irritable bowel syndrome and chronic lower back pain. Patients know the pill is fake, yet they still improve. This suggests the therapeutic ritual of taking medicine itself, independent of belief in a specific treatment, may activate healing pathways.`,
    questions: [
      {
        id: 'l003q1',
        question: 'What does the professor identify as the key new insight about placebos from modern research?',
        options: [
          'Placebos work only for psychological conditions',
          'Placebos can trigger genuine physical changes in the body',
          'Placebos are equally effective as real medications',
          'The placebo effect depends entirely on the doctor-patient relationship',
        ],
        correct: 1,
        type: 'gist-content',
      },
      {
        id: 'l003q2',
        question: 'How does the professor explain the physical mechanism of placebo pain relief?',
        options: [
          'Patients ignore their pain through mental distraction',
          'The belief in treatment reduces anxiety, which reduces pain',
          'Placebos stimulate endorphin release through neural pathways',
          'Sugar pills contain trace amounts of analgesic compounds',
        ],
        correct: 2,
        type: 'detail',
      },
      {
        id: 'l003q3',
        question: 'What is significant about the Parkinson\'s disease research mentioned in the lecture?',
        options: [
          'It proved that placebos can cure Parkinson\'s disease',
          'It showed that dopamine can be replaced by endorphins',
          'It demonstrated that belief alone can trigger neurochemical changes',
          'It led to new regulations on placebo use in drug trials',
        ],
        correct: 2,
        type: 'inference',
      },
      {
        id: 'l003q4',
        question: 'What does the professor say is surprising about open-label placebo studies?',
        options: [
          'They require less ethical approval than standard trials',
          'They show placebos work even when patients know they are fake',
          'They prove placebos are more effective than real drugs',
          'They show younger patients respond better to placebos',
        ],
        correct: 1,
        type: 'detail',
      },
    ],
  },
]

export default function Listening() {
  const { dispatch } = useApp()
  const [view, setView] = useState('list') // list | transcript | quiz | results
  const [selected, setSelected] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [notesText, setNotesText] = useState('')
  const [transcriptRead, setTranscriptRead] = useState(false)

  const startListening = (content) => {
    setSelected(content)
    setAnswers({})
    setSubmitted(false)
    setCurrentQ(0)
    setNotesText('')
    setTranscriptRead(false)
    setView('transcript')
  }

  const submitQuiz = () => {
    const correct = selected.questions.filter(q => answers[q.id] === q.correct).length
    dispatch({ type: 'ADD_SCORE', payload: { section: 'listening', score: Math.round((correct / selected.questions.length) * 30) } })
    dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes: 10, section: 'listening' } })
    dispatch({ type: 'EARN_XP', payload: correct * 10 + 20 })
    setSubmitted(true)
    setView('results')
  }

  const typeColors = {
    lecture: 'bg-green-100 text-green-700',
    conversation: 'bg-blue-100 text-blue-700',
  }
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  }

  const typeLabels = {
    'gist-content': 'Gist-Content',
    'gist-purpose': 'Gist-Purpose',
    detail: 'Detail',
    function: 'Function',
    attitude: 'Attitude',
    inference: 'Inference',
  }

  if (view === 'list') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <Headphones size={22} className="text-green-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Listening</h1>
            <p className="text-xs text-gray-400">Lectures & conversations with comprehension questions</p>
          </div>
        </div>

        <div className="mx-4 mt-4 bg-green-50 border border-green-100 rounded-2xl p-4 mb-4">
          <p className="text-green-800 font-semibold text-sm mb-1">🎧 Listening Tips</p>
          <ul className="text-green-700 text-xs space-y-1">
            <li>• Take notes while listening—do NOT try to memorize everything</li>
            <li>• Focus on main ideas, examples, and the speaker's attitude</li>
            <li>• Listen for signal words: "however," "for example," "the key point is..."</li>
            <li>• In this practice: read the transcript carefully (simulates listening)</li>
          </ul>
        </div>

        <div className="px-4 space-y-3 pb-6">
          {LISTENING_CONTENT.map(content => (
            <button
              key={content.id}
              onClick={() => startListening(content)}
              className="card w-full text-left active:scale-98 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${content.type === 'lecture' ? 'bg-green-600' : 'bg-blue-600'}`}>
                  {content.type === 'lecture' ? <Volume2 size={18} className="text-white" /> : <Headphones size={18} className="text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`section-badge ${typeColors[content.type]}`}>{content.type}</span>
                    <span className={`section-badge ${difficultyColors[content.difficulty]}`}>{content.difficulty}</span>
                  </div>
                  <p className="font-bold text-gray-800">{content.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{content.subject} · {content.questions.length} questions</p>
                </div>
                <ChevronRight size={18} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (view === 'transcript') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('list')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 text-base truncate">{selected.title}</h1>
            <p className="text-xs text-gray-400">{selected.subject}</p>
          </div>
        </div>

        <div className="px-4 py-4 space-y-4">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-3">
            <p className="text-green-700 text-sm font-medium">📝 Read this transcript as if you were listening. Take notes below!</p>
          </div>

          <div className="card">
            <p className="text-gray-800 text-sm leading-7 whitespace-pre-line">{selected.transcript}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1.5">📋 Your Notes:</p>
            <textarea
              value={notesText}
              onChange={e => setNotesText(e.target.value)}
              placeholder="Write key points here while 'listening'..."
              className="input-field h-24 resize-none text-sm"
            />
          </div>

          <button
            onClick={() => setView('quiz')}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            Answer Questions <ChevronRight size={18} />
          </button>
        </div>
      </div>
    )
  }

  if (view === 'quiz') {
    const q = selected.questions[currentQ]
    const totalQ = selected.questions.length

    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('transcript')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <ProgressBar value={currentQ + 1} max={totalQ} color="green" height="h-1.5" />
          </div>
          <span className="text-sm text-gray-500 ml-2">{currentQ + 1}/{totalQ}</span>
        </div>

        <div className="px-4 py-4 space-y-4">
          {notesText && (
            <details className="card bg-gray-50 text-xs text-gray-500">
              <summary className="cursor-pointer font-semibold text-gray-600">📋 Your Notes (tap to view)</summary>
              <p className="mt-2 text-gray-700">{notesText}</p>
            </details>
          )}

          <span className="section-badge bg-green-100 text-green-700">
            {typeLabels[q.type] || q.type}
          </span>

          <div className="card bg-green-50 border-green-100">
            <p className="font-medium text-gray-800">{q.question}</p>
          </div>

          <div className="space-y-2">
            {q.options.map((opt, idx) => {
              const sel = answers[q.id] === idx
              return (
                <button
                  key={idx}
                  onClick={() => setAnswers(a => ({ ...a, [q.id]: idx }))}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                    sel ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${sel ? 'border-white bg-white text-green-600' : 'border-gray-300 text-gray-400'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm">{opt}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex gap-3">
            <button onClick={() => setCurrentQ(c => Math.max(0, c - 1))} disabled={currentQ === 0} className="flex-1 btn-secondary disabled:opacity-30">
              ← Prev
            </button>
            {currentQ < totalQ - 1 ? (
              <button onClick={() => setCurrentQ(c => c + 1)} className="flex-1 btn-primary">Next →</button>
            ) : (
              <button
                onClick={submitQuiz}
                disabled={Object.keys(answers).length < totalQ}
                className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (view === 'results') {
    const correct = selected.questions.filter(q => answers[q.id] === q.correct).length
    const total = selected.questions.length
    const pct = Math.round((correct / total) * 100)

    return (
      <div className="animate-fade-in px-4 py-6">
        <div className={`rounded-3xl p-6 text-center mb-6 ${pct >= 75 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}>
          <Headphones size={48} className="text-white mx-auto mb-3" />
          <div className="text-white text-5xl font-bold">{correct}/{total}</div>
          <div className="text-white/90 text-lg">{pct}% correct</div>
        </div>

        <h3 className="font-bold text-gray-800 mb-3">Review</h3>
        <div className="space-y-3 mb-6">
          {selected.questions.map(q => {
            const isCorrect = answers[q.id] === q.correct
            return (
              <div key={q.id} className={`card ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <div className="flex items-start gap-2 mb-1">
                  {isCorrect ? <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> : <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />}
                  <p className="text-sm font-medium text-gray-800">{q.question}</p>
                </div>
                {!isCorrect && (
                  <div className="ml-5 space-y-0.5">
                    <p className="text-xs text-red-600">Your answer: {q.options[answers[q.id]] ?? 'Not answered'}</p>
                    <p className="text-xs text-green-700 font-medium">Correct: {q.options[q.correct]}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <button onClick={() => { setAnswers({}); setCurrentQ(0); setView('quiz') }} className="flex-1 btn-secondary">Retry</button>
          <button onClick={() => setView('list')} className="flex-1 btn-primary">More</button>
        </div>
      </div>
    )
  }
}

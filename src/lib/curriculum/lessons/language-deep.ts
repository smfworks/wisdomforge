import { expand } from "./factory";

export const languageDeepLessons = [
  // ── 1. Conversation Ladders ─────────────────────────────────────────
  ...expand({
    slug: "conversation-ladders",
    subject: "language",
    unit: "A Second Tongue, a Second Mind",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Climb the Ladder",
        dek: "A conversation ladder is a series of exchanges that get harder, one rung at a time. You climb it with your mouth, not a screen.",
        objective:
          "The student can hold a three-rung conversation ladder in the target language: greet, ask a question, respond to the answer, without reading from a screen.",
        parentBriefing:
          "This sitting introduces the conversation ladder. A ladder is a series of exchanges that get slightly harder with each rung. Rung 1: greet. Rung 2: ask a simple question. Rung 3: respond to the answer. The student does this with their mouth, not a screen. The model can drill vocabulary. It cannot be understood for you. The ladder is the practice. The mouth is the instrument. Use a language the child is learning or a family language. The point is the mouth, not the fluency.",
        hardEdges: [
          "Do not use the model to generate the conversation. The model is a drill partner, not the speaker.",
          "Keep it to three rungs. The point is the practice, not the range.",
        ],
        reading: [
          {
            heading: "The ladder",
            body: "A conversation ladder is three rungs. Rung 1: you greet someone. 'Hola, como estas?' Rung 2: you ask a question. 'Que hiciste hoy?' Rung 3: they answer, and you respond. 'Que bien. Yo fui al parque.' Each rung is harder than the one before. You climb with your mouth. You do not read from a screen. You do not generate the conversation with a model. You speak, they speak, you speak. The ladder is the practice. The model can drill the words before the ladder. During the ladder, the model is closed. The mouth is the instrument.",
          },
          {
            heading: "Why the ladder works",
            body: "The ladder works because each rung is only slightly harder than the last. You do not jump to fluency. You climb one rung at a time. The first rung is easy: a greeting. The second is a bit harder: a question. The third is harder still: a response. If you can do three rungs, you have had a conversation. Not a perfect one. A real one. The model can generate a perfect conversation. It cannot have one. Having a conversation requires a mouth, an ear, and a risk. The ladder is the risk, scaled down. The child who climbs the ladder once has had a conversation. The child who only generates has not.",
          },
        ],
        bigIdea:
          "A conversation ladder is three rungs, each harder. You climb with your mouth. The model drills the words. During the ladder, the model is closed.",
        tryThis: [
          {
            title: "Three rungs",
            minutes: 14,
            steps: [
              "Pick a language you are learning or a family language.",
              "Before the ladder, use the model to drill five words you will need: a greeting, a question word, a response word.",
              "Close the model. Find a partner: a parent, a sibling, a friend.",
              "Rung 1: greet. Rung 2: ask a question. Rung 3: respond to the answer.",
              "If you get stuck, say it in your own language and move on. Do not open the model.",
              "Talk About It: what did the ladder feel like? Was it a conversation?",
            ],
          },
        ],
        dinnerQuestion:
          "What ladder did we climb today, and was it a real conversation?",
        transfer: [
          { label: "English", note: "You Write It: the ladder is the draft. The model is the editor. Same order." },
          { label: "Thinking", note: "Claim and check: the ladder is the check. The words are the claim." },
        ],
        ifTheySay: [
          {
            heard: "I don't know enough words.",
            reply: "You know enough for three rungs. A greeting, a question, a response. Five words. The ladder is not fluency. It is the start. Climb it.",
          },
          {
            heard: "The model can do it better.",
            reply: "The model can generate a better conversation. It cannot have one. Having a conversation is the skill. The ladder is having, not generating. Close the model. Open your mouth.",
          },
        ],
        integrity:
          "Do not generate the conversation with the model and read it. The ladder is your mouth. If you read from the model, it is not a ladder. It is a script.",
        aiLab: {
          setup: "Before the ladder, for drilling only.",
          childDoes:
            "Use the model to drill five words: 'How do I say [greeting/question/response] in [language]?' Then close the model. Climb the ladder. Do not open it during the ladder.",
          evaluate: [
            "Did they drill five words before the ladder?",
            "Did they close the model during the ladder?",
            "Did they complete three rungs with their mouth?",
          ],
        },
      },
      emerging: {
        title: "The Ladder Gets Harder",
        dek: "The ladder grows. Three rungs become five. Five become a conversation. The model drills the words. The mouth climbs the ladder.",
        objective:
          "The student can hold a five-rung conversation ladder in the target language, use the model only for pre-drill vocabulary, and reflect on where the conversation broke down.",
        parentBriefing:
          "This sitting builds on the young version. Five rungs instead of three. The student uses the model to drill vocabulary before the ladder. During the ladder, the model is closed. The student reflects on where the conversation broke down and uses that as the next drill. The ladder is the practice. The breakdown is the data. The drill is the fix. The conversation is the goal.",
        hardEdges: [
          "Academic integrity: no generated conversations presented as your own. The ladder is your mouth.",
          "If the student is stuck, they may say it in their own language and move on. The model stays closed.",
        ],
        reading: [
          {
            heading: "Five rungs and a breakdown",
            body: "The ladder grows. Three rungs become five. Greet. Ask. Answer. Follow up. Close. Each rung is a turn. The conversation is five turns. If you complete five turns, you have had a conversation. If you break down at rung three, that is data. The breakdown is the gap. The gap is the next drill. 'I could not say where I went.' Drill: 'How do I say where I went?' Then climb the ladder again. The breakdown is not a failure. It is the curriculum. The model drills the gap. The mouth climbs again. The ladder is the practice. The breakdown is the progress.",
          },
          {
            heading: "The model's role",
            body: "The model drills vocabulary before the ladder. It does not participate in the ladder. During the ladder, the model is closed. The student speaks. The partner speaks. The student speaks. If the student is stuck, they say it in their own language and move on. They do not open the model. The model is a drill partner, not a conversation partner. The conversation partner is a person. The person is the test: can you be understood? The model cannot test that. Only a person can. The ladder is the test. The model is the drill. The order is the skill.",
          },
        ],
        bigIdea:
          "Five rungs, then a breakdown, then a drill, then climb again. The model drills. The mouth climbs. The breakdown is the curriculum.",
        tryThis: [
          {
            title: "Five rungs and a drill",
            minutes: 22,
            steps: [
              "Use the model to drill ten words you will need for a five-rung conversation: greeting, question, follow-up, opinion, closer.",
              "Close the model. Find a partner.",
              "Climb five rungs: greet, ask, answer, follow up, close.",
              "If you break down, note the rung and the gap. Say it in your own language and move on.",
              "After the ladder, use the model to drill the gap: 'How do I say [gap] in [language]?'",
              "Climb again. Did you get past the breakdown?",
              "Talk About It: where did the ladder break? What did the drill fix?",
            ],
          },
        ],
        dinnerQuestion:
          "Where did our ladder break this week, and what did the drill fix?",
        transfer: [
          { label: "English", note: "You Write It: the ladder is the draft. The breakdown is the revision. The drill is the editor." },
          { label: "Thinking", note: "Change your mind: the breakdown is the brave sentence. The drill is the update." },
        ],
        ifTheySay: [
          {
            heard: "Five rungs is too many.",
            reply: "If you can do three, you can do five. The fourth and fifth are a follow-up and a closer. They are one sentence each. The ladder is not fluency. It is five sentences. You can say five sentences.",
          },
          {
            heard: "I need the model during the conversation.",
            reply: "You do not. You need the model before the conversation, to drill the words. During the conversation, the model is closed. If you are stuck, say it in your own language. The partner will understand. The model will not teach you to be stuck and keep going. Only the ladder does that.",
          },
        ],
        integrity:
          "Do not open the model during the ladder. If you do, the ladder is invalid. The drill is before. The ladder is after. The order is the integrity.",
        aiLab: {
          setup: "Before the ladder, for drilling only.",
          childDoes:
            "Drill the ten words. Then close the model. Climb. If you break down, note the gap. After the ladder, drill the gap. Climb again. The model is the drill. The ladder is yours.",
          evaluate: [
            "Did they drill before and close during?",
            "Did they complete five rungs?",
            "Did they identify the breakdown and drill it?",
          ],
        },
      },
      adult: {
        title: "Climb With Them",
        dek: "If you never speak the second language with the child, the model becomes the speaker. Climb the ladder with them. Badly. Together.",
        objective:
          "The adult climbs a three-rung conversation ladder with the child in a second language, uses the model only for pre-drill, and models that the mouth is the instrument.",
        parentBriefing:
          "The adult climbs the ladder with the child. In a second language. Badly. Together. The adult does not need to be fluent. The adult needs to speak. Three rungs: greet, ask, respond. If the adult is wrong, that is fine. The child who sees an adult speak badly in another language learns that speaking is the skill, not perfection. The adult who never speaks teaches the child that the model is the speaker. The adult who speaks badly teaches the child that the mouth is the instrument. Climb together. The climbing is the inheritance.",
        hardEdges: [
          "Do not use the model during the ladder. Drill before. Climb after.",
          "Heritage speakers: do not police the child's home register with the model's correctness. Their version is theirs.",
        ],
        reading: [
          {
            heading: "The household ladder",
            body: "The household that never speaks the second language teaches the child that the language is an app, not a practice. The household that climbs the ladder, badly, together, teaches the child that the language is a mouth thing, not a screen thing. The adult does not need to be good. The adult needs to go first. 'Hola, como estas?' If the child hears the adult try, they will try. If the child hears the adult use the model and skip the trying, they will use the model and skip the trying. The ladder is the practice. The practice is the inheritance. Three rungs. Together. Badly. That is the lesson.",
          },
        ],
        bigIdea:
          "Climb the ladder with the child. Badly. Together. The mouth is the instrument. The model is the drill. The ladder is the inheritance.",
        tryThis: [
          {
            title: "Climb together",
            minutes: 10,
            steps: [
              "Pick a language you are learning or a family language.",
              "Drill five words with the model: greeting, question, response.",
              "Close the model. Climb three rungs with the child: greet, ask, respond.",
              "If you are wrong, laugh and keep going. The wrong is the lesson.",
              "Talk About It: did we have a conversation? Was it bad? Was it real?",
            ],
          },
        ],
        dinnerQuestion:
          "What ladder did we climb together this week, badly and for real?",
        transfer: [
          { label: "Parenting", note: "The ladder you climb is the ladder they will climb when you are not there." },
          { label: "Language", note: "Say It Yourself: the ladder is the deeper version. The mouth is still the instrument." },
        ],
        ifTheySay: [
          {
            heard: "I'll mess it up.",
            reply: "You will. That is the lesson. The child who sees an adult mess up a second language and keep going learns that speaking is the skill, not perfection. The adult who never messes up because they never speaks teaches the child that the model is the speaker. Mess up. Keep going.",
          },
          {
            heard: "The model can teach them better.",
            reply: "The model can drill the words. It cannot have the conversation. The conversation requires two mouths. Yours and theirs. The model is a drill. The ladder is the conversation. Climb it together.",
          },
        ],
        integrity:
          "Do not use the model during the ladder. The drill is before. The ladder is after. If you use the model during the ladder, it is not a ladder. It is a script.",
        aiLab: {
          setup: "Before the ladder, for drilling only.",
          childDoes:
            "Drill five words with the model. Then close it. Climb with the child. If you break down, say it in your own language and keep going. The breakdown is the data. The drill is the fix. The ladder is the practice.",
          evaluate: [
            "Did you drill before and close during?",
            "Did you climb three rungs with the child?",
            "Did the child see you speak badly and keep going?",
          ],
        },
      },
    },
  }),

  // ── 2. Not a Subtitle Crutch ────────────────────────────────────────
  ...expand({
    slug: "not-subtitle-crutch",
    subject: "language",
    unit: "A Second Tongue, a Second Mind",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Not a Subtitle Crutch",
        dek: "Subtitles help you understand. They do not help you speak. The mouth still has to move.",
        objective:
          "The student can watch a short clip in the target language without subtitles, catch one word or phrase they understood, and explain why subtitles are a crutch, not a teacher.",
        parentBriefing:
          "This sitting teaches the student that subtitles are a crutch. They help you understand what is said. They do not help you say it. The mouth still has to move. The student watches a short clip in the target language without subtitles. They catch one word or phrase they understood by ear. The catching is the skill. The subtitle skips the catching. The model can translate. The translation is not the understanding. The ear is the instrument.",
        hardEdges: [
          "Keep the clip short: one to two minutes. The point is the ear, not the endurance.",
          "Do not ban subtitles entirely. The point is the practice of listening without them, not the prohibition.",
        ],
        reading: [
          {
            heading: "The crutch",
            body: "Subtitles are a crutch. They help you understand. They do not help you speak. When you read the subtitle, your eye does the work. Your ear does not. When you listen without the subtitle, your ear does the work. The ear is the instrument for speaking. The eye is the instrument for reading. If you only read, you cannot speak. The model can translate the subtitle. The translation is not the hearing. The hearing is the practice. Watch a short clip without subtitles. Catch one word by ear. That word is the practice. The subtitle would have skipped it.",
          },
        ],
        bigIdea:
          "Subtitles help you understand. They do not help you speak. The ear is the instrument. Listen without the crutch.",
        tryThis: [
          {
            title: "One word by ear",
            minutes: 10,
            steps: [
              "Find a short clip in the target language: one to two minutes. A cartoon, a song, a news segment.",
              "Watch it without subtitles. Do not pause. Do not translate.",
              "Catch one word or phrase you understood by ear. Write it.",
              "Now watch it with subtitles. Did you catch more? Did the subtitle skip the ear work?",
              "Talk About It: what did the ear catch that the subtitle made easy?",
            ],
          },
        ],
        dinnerQuestion:
          "What word did we catch by ear today, and what did the subtitle make easy?",
        transfer: [
          { label: "Language", note: "Say It Yourself: the ear is the instrument. The subtitle is the crutch." },
          { label: "Thinking", note: "Claim and check: the ear is the check. The subtitle is the summary." },
        ],
        ifTheySay: [
          {
            heard: "I can't understand without subtitles.",
            reply: "You caught one word. That is the start. The subtitle skips the catching. The catching is the skill. Watch without subtitles and catch one word. Next time, catch two. The ear grows by use, not by reading.",
          },
        ],
        integrity:
          "Do not pretend you understood more than you did. If you caught one word, say one. The honesty is the listening.",
        aiLab: {
          setup: "After the clip without subtitles.",
          childDoes:
            "Ask the model to translate a phrase from the clip. Compare the translation to what you caught by ear. The translation is the model's. The catching is yours. Both are useful. Only one is the ear.",
          evaluate: [
            "Did they watch without subtitles?",
            "Did they catch one word or phrase by ear?",
            "Can they explain why subtitles are a crutch?",
          ],
        },
      },
      emerging: {
        title: "The Ear Is the Instrument",
        dek: "Subtitles train the eye. Speaking requires the ear. Train the ear by listening without the crutch, even when it is uncomfortable.",
        objective:
          "The student can listen to a three-minute clip in the target language without subtitles, catch three words or phrases by ear, and describe how the ear training connects to speaking.",
        parentBriefing:
          "This sitting builds on the young version. Three minutes without subtitles. Three words caught. The student connects ear training to speaking: you can only say what you have heard. The model can translate. The translation does not train the ear. The ear trains the ear. The student who listens without the crutch, even when uncomfortable, is building the instrument. The student who only reads subtitles is building the eye, not the ear.",
        hardEdges: [
          "Do not ban subtitles. The point is the practice of listening without them, not the prohibition.",
          "If the clip is too hard, pick an easier one. The point is catching words, not suffering.",
        ],
        reading: [
          {
            heading: "The ear and the mouth",
            body: "You can only say what you have heard. The mouth reproduces what the ear has caught. If the ear has only heard subtitles (read, not heard), the mouth has nothing to reproduce. Subtitles train the eye. Speaking requires the ear. The ear is trained by listening without the crutch. It is uncomfortable. You will miss words. You will catch some. The catching is the training. The model can translate what you missed. The translation is not the hearing. The hearing is the practice. Listen without subtitles. Catch three words. The three words are the ear's work. The subtitle would have skipped them.",
          },
          {
            heading: "The model as translator, not teacher",
            body: "The model can translate the clip. The translation is useful for checking what you missed. It is not the same as hearing. The model can also generate a transcript. The transcript is not the same as the ear's work. The student who uses the model to translate and skips the listening has done research, not practice. The student who listens first, catches what they can, then uses the model to check, has done practice and research. The order matters. Listen first. Translate second. The order is the skill.",
          },
        ],
        bigIdea:
          "The ear is the instrument. Subtitles train the eye. Listen without the crutch. The model translates after, not instead.",
        tryThis: [
          {
            title: "Three words by ear",
            minutes: 18,
            steps: [
              "Find a three-minute clip in the target language. A scene from a show, a news segment, a podcast excerpt.",
              "Listen without subtitles. Do not pause. Do not translate.",
              "Catch three words or phrases by ear. Write them.",
              "Now use the model to translate the three words. Were you right?",
              "Listen again. Did you catch more the second time?",
              "Talk About It: what did the ear catch that the eye would have skipped?",
            ],
          },
        ],
        dinnerQuestion:
          "What three words did we catch by ear this week, and how did the ear connect to the mouth?",
        transfer: [
          { label: "Language", note: "Say It Yourself: the ear is the instrument. The subtitle is the crutch." },
          { label: "English", note: "Voice: you can only say what you have heard. The ear is the foundation." },
        ],
        ifTheySay: [
          {
            heard: "I can just read the transcript.",
            reply: "You can. The transcript trains the eye. Speaking requires the ear. The ear is trained by listening, not reading. The transcript is a check. The listening is the practice. Do both, in the right order.",
          },
          {
            heard: "I don't catch anything without subtitles.",
            reply: "Then start with a clip where you know some words. A song, a cartoon, a beginner video. Catch one word. Then two. The ear grows by use. The first time is the hardest. The second is easier. The third is a habit.",
          },
        ],
        integrity:
          "Do not use the model's translation as if you heard it. The hearing is yours. The translation is the model's. Label both.",
        aiLab: {
          setup: "After listening without subtitles.",
          childDoes:
            "Ask the model to translate the three words you caught. Compare. Were you right? If you were wrong, listen again. The model is the check. The ear is the practice.",
          evaluate: [
            "Did they listen without subtitles for three minutes?",
            "Did they catch three words by ear?",
            "Can they connect ear training to speaking?",
          ],
        },
      },
      adult: {
        title: "Listen With Them",
        dek: "If you always use subtitles, the child learns that reading is the skill. It is not. Listening is. Watch one clip without subtitles, together.",
        objective:
          "The adult watches one clip in a second language without subtitles with the child, catches one word by ear, and models that the ear is the instrument.",
        parentBriefing:
          "The adult models listening without subtitles. Pick a short clip in a language the child is learning or a family language. Watch it together without subtitles. Each person catches one word by ear. The adult goes first. 'I caught hola.' The child follows. 'I caught agua.' The point is the ear, not the fluency. The adult who always uses subtitles teaches the child that reading is the skill. The adult who listens without them, badly, teaches the child that the ear is the instrument.",
        hardEdges: [
          "Do not ban subtitles in the house. The point is the practice of listening without them, not the prohibition.",
          "Keep it to one clip. One to two minutes. The point is the practice, not the endurance.",
        ],
        reading: [
          {
            heading: "The household ear",
            body: "The household that always uses subtitles teaches the child that reading is the skill for understanding a second language. It is not. Listening is. The ear is the instrument for speaking. The eye is the instrument for reading. If the child only reads, they cannot speak. The adult who watches one clip without subtitles, with the child, and catches one word by ear, models that the ear is the instrument. The word might be wrong. The catching might be partial. Both are fine. The practice is the lesson. One clip. One word. Together. That is the ear training, modeled at home.",
          },
        ],
        bigIdea:
          "Watch one clip without subtitles, together. Catch one word by ear. The ear is the instrument. The subtitle is the crutch.",
        tryThis: [
          {
            title: "One clip together",
            minutes: 8,
            steps: [
              "Find a short clip in the target language. One to two minutes.",
              "Watch it together without subtitles. No pausing.",
              "After the clip, you go first. Name one word you caught by ear.",
              "Then the child names one word they caught.",
              "Talk About It: was it hard? Did the ear catch what the eye would have skipped?",
            ],
          },
        ],
        dinnerQuestion:
          "What word did we each catch by ear today, without the subtitle?",
        transfer: [
          { label: "Parenting", note: "The ear you train is the ear they will use when you are not there." },
          { label: "Language", note: "Say It Yourself: the ear is the instrument. The subtitle is the crutch." },
        ],
        ifTheySay: [
          {
            heard: "I can't understand without subtitles.",
            reply: "Neither can the child. That is the point. You both catch one word. One word is the start. The ear grows by use. The subtitle skips the use. Watch together. Catch one word. That is the practice.",
          },
          {
            heard: "The child won't want to watch without subtitles.",
            reply: "Then make it a game. 'Who can catch one word?' One word wins. The game is the practice. The practice is the ear. The ear is the instrument for the rest of their language life.",
          },
        ],
        integrity:
          "Name the word you actually caught. Do not pretend you caught more. The child learns honesty from your honesty.",
        aiLab: {
          setup: "After the clip without subtitles.",
          childDoes:
            "Use the model to translate the word you caught. Were you right? The model is the check. The ear is the practice. The order is the skill.",
          evaluate: [
            "Did you watch one clip without subtitles together?",
            "Did you each catch one word by ear?",
            "Did the child see that the ear is the instrument?",
          ],
        },
      },
    },
  }),

  // ── 3. A Second Mind ───────────────────────────────────────────────
  ...expand({
    slug: "second-mind",
    subject: "language",
    unit: "A Second Tongue, a Second Mind",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "A Second Language Is a Second Mind",
        dek: "When you learn a new language, you do not just learn new words. You learn new ways to think. A second tongue is a second mind.",
        objective:
          "The student can name one way the target language expresses an idea differently from their first language and explain how the difference changes how you think.",
        parentBriefing:
          "This sitting teaches the student that a second language is a second mind. Different languages express ideas differently. The way a language handles time, family, politeness, or color changes how the speaker thinks. The student needs to find one difference and name it. Not as trivia. As a window into a different way of seeing. The model can translate. The translation does not show the difference. The comparison does. The student who can name one difference has started to see the second mind.",
        hardEdges: [
          "Do not make this a lecture on linguistic relativity. Keep it to one concrete difference.",
          "Do not rank languages. The point is difference, not hierarchy.",
        ],
        reading: [
          {
            heading: "A different way to think",
            body: "When you learn a new language, you learn new words. You also learn new ways to think. In some languages, time is behind you (the past is in front of you because you can see it). In some, family has more names (uncle on the mother's side is different from uncle on the father's side). In some, you cannot say 'I am hungry' without saying whether you are hungry right now or generally. These differences are not mistakes. They are different ways of seeing the world. A second language gives you a second way to see. The model can translate 'I am hungry' into another language. The translation does not show you that the other language forces you to be more specific. The comparison shows you. Find one difference. Name it. That is the second mind, beginning.",
          },
        ],
        bigIdea:
          "A second language is a second mind. Different languages think differently. Find one difference. That is the second mind.",
        tryThis: [
          {
            title: "Find one difference",
            minutes: 14,
            steps: [
              "Pick a language you are learning or a family language.",
              "Find one way it expresses an idea differently from your first language: time, family, politeness, color, gender.",
              "Write: 'In [language], [idea] is expressed as [X]. In my language, it is [Y]. The difference is [Z].'",
              "Talk About It: does the difference change how you think about the idea?",
            ],
          },
        ],
        dinnerQuestion:
          "What difference did we find today between our language and another, and how does it change how we think?",
        transfer: [
          { label: "Thinking", note: "Frames: the language is a frame. The difference is the reframe." },
          { label: "English", note: "Voice: the second language gives you a second voice. Same lesson." },
        ],
        ifTheySay: [
          {
            heard: "It's just a different word for the same thing.",
            reply: "Sometimes it is. Sometimes the different word carries a different idea. 'Uncle' in English is one word. In some languages, there are four words for uncle, each telling you which side of the family and whether they are older or younger. The word is not the same. The idea is different. Find one like that.",
          },
        ],
        integrity:
          "Do not invent differences. Find a real one. If you cannot find one, ask a speaker of the language or use the model to check. The real difference is the lesson.",
        aiLab: {
          setup: "After finding the difference.",
          childDoes:
            "Ask the model: 'How does [language] express [idea] differently from English?' Compare to what you found. Did it name the same difference? Did it find one you missed?",
          evaluate: [
            "Did they find one real difference?",
            "Did they write how the difference changes the thinking?",
            "Can they see the second language as a second mind?",
          ],
        },
      },
      emerging: {
        title: "The Language You Think In",
        dek: "The language you think in shapes what you can think. A second language gives you a second way to think. The model translates. It does not think in the second language for you.",
        objective:
          "The student can identify two ways the target language structures thought differently from their first language, find a real example, and explain how bilingual thinking expands what they can see.",
        parentBriefing:
          "This sitting teaches the student that the language they think in shapes what they can think. Different languages force different distinctions: tense, aspect, evidentiality, politeness, gender, kinship. The student finds two real examples and articulates how bilingual thinking expands what they can see. The model can translate. The translation does not show the structural difference. The comparison does. The student who can articulate two structural differences has begun to see the second mind.",
        hardEdges: [
          "Do not make this a lecture on Sapir-Whorf. Keep it to two concrete differences.",
          "Academic integrity: cite real examples, not model inventions. The model can hallucinate linguistic differences. Verify with a real speaker or a real text.",
        ],
        reading: [
          {
            heading: "The structure of thought",
            body: "Languages structure thought. English forces a tense: 'I went, I go, I will go.' Some languages force an evidential: 'I saw it, I heard it, I was told it.' The evidential forces you to say how you know. English does not. A speaker of an evidential language cannot make a claim without saying how they know. An English speaker can. The difference is not trivial. It changes what a claim means. The student who can see this has seen the second mind: a language that forces honesty about sources. The model can translate 'I know it rained' into an evidential language. The translation will show the forced distinction. The comparison is the lesson. The model translates. The student sees.",
          },
          {
            heading: "Bilingual thinking",
            body: "Bilingual thinking is not knowing two sets of words. It is having two ways to structure thought. The student who can think in two languages can see what each language forces and what each language skips. English forces tense but not evidentiality. An evidential language forces the source but might not force tense. The bilingual speaker can see both: they know when it happened and how they know. The monolingual speaker sees only what their language forces. The second language is a second mind not because it has more words but because it structures thought differently. The student who can articulate this has moved from translating to thinking in two minds.",
          },
        ],
        bigIdea:
          "The language you think in shapes what you can think. A second language is a second way to think. Find two structural differences. The second mind begins.",
        tryThis: [
          {
            title: "Two differences",
            minutes: 20,
            steps: [
              "Pick a language you are learning. Find two structural differences from your first language: tense, evidentiality, politeness, kinship, aspect, gender.",
              "For each, write: 'In [language], [structure] forces [distinction]. In my language, it does not. The difference changes [what you can think].'",
              "Find a real example for each: a sentence, a text, a speaker. Do not invent. Verify with a real source or a speaker.",
              "Write: 'Bilingual thinking gives me [X] that monolingual thinking does not.'",
              "Talk About It: what can you see in two languages that you cannot see in one?",
            ],
          },
        ],
        dinnerQuestion:
          "What two differences did we find this week, and what does bilingual thinking let us see?",
        transfer: [
          { label: "Thinking", note: "Frames: the language is a frame. The second language is a reframe." },
          { label: "English", note: "Rhetoric: the language structures the argument. Same lesson." },
        ],
        ifTheySay: [
          {
            heard: "All languages can express the same things.",
            reply: "They can, with effort. The point is what they force without effort. English does not force evidentiality. You can add 'I saw it,' but you do not have to. An evidential language forces it. The forcing is the structure. The structure shapes what you think by default. That is the second mind.",
          },
          {
            heard: "The model can just translate.",
            reply: "It can translate. The translation shows the words. It does not show the structure unless you compare. The comparison is yours. The model gives the words. You find the structure. The finding is the second mind.",
          },
        ],
        integrity:
          "Cite real examples. Do not invent linguistic differences. The model can hallucinate. Verify with a real speaker or text. The honesty is the second mind.",
        aiLab: {
          setup: "After finding the differences.",
          childDoes:
            "Ask the model: 'Translate [sentence] into [language].' Compare the translation to the structural difference you found. Does the translation show the forced distinction? If yes, you found a real one. If no, you found a false one. The verification is the lesson.",
          evaluate: [
            "Did they find two real structural differences?",
            "Did they verify with a real example?",
            "Can they articulate what bilingual thinking gives them?",
          ],
        },
      },
      adult: {
        title: "Two Minds at the Table",
        dek: "If you only think in one language, the child learns that one language is enough. It is not. A second language is a second mind. Name one difference at the table.",
        objective:
          "The adult names one way a second language structures thought differently from their first language, says it at the table, and models that a second tongue is a second mind.",
        parentBriefing:
          "The adult names one structural difference at the table. Not a vocabulary word. A structural difference: how the language handles time, family, politeness, or knowing. The adult says: 'In [language], you cannot say [X] without also saying [Y]. In English, you can. That difference changes how you think.' The child who hears this once learns that a second language is a second mind, not just new words. The adult who never names a difference teaches the child that languages are word lists. The adult who names one teaches that languages are mind structures.",
        hardEdges: [
          "Do not make this a lecture. Name one difference. Stop.",
          "If you are monolingual, learn one difference with the child. The honesty of learning together is the lesson.",
        ],
        reading: [
          {
            heading: "The named difference",
            body: "The child needs to hear an adult name a structural difference between languages. Not a word. A structure. 'In Japanese, you cannot say I went without choosing a level of politeness. In English, you can. The difference is that Japanese forces you to think about your relationship to the listener every time you speak.' That sentence, said at the table, teaches: a second language is a second mind. The child who hears it once will look for differences in every language they encounter. The child who never hears it will think languages are word lists. The naming is the inheritance. One difference. One table. One mind, opened.",
          },
        ],
        bigIdea:
          "Name one structural difference at the table. The child who hears it learns that a second language is a second mind.",
        tryThis: [
          {
            title: "One difference at the table",
            minutes: 8,
            steps: [
              "Find one structural difference between your language and a second language: time, politeness, family, knowing.",
              "Say it at the table: 'In [language], [X] forces [Y]. In our language, it does not. The difference is [Z].'",
              "If you are monolingual, learn one difference with the child. The honesty of learning together is the lesson.",
              "Let the child hear the difference. The hearing is the inheritance.",
            ],
          },
        ],
        dinnerQuestion:
          "What difference between languages did we name at the table this week?",
        transfer: [
          { label: "Parenting", note: "The difference you name is the difference they will seek in every language." },
          { label: "Thinking", note: "Frames: the language is a frame. Naming the frame is the same skill." },
        ],
        ifTheySay: [
          {
            heard: "I only speak one language.",
            reply: "Then learn one difference with the child. Find one structural difference between your language and any other. Say it at the table. The honesty of learning together teaches more than pretending you already know. One difference. Together. That is the second mind, beginning.",
          },
        ],
        integrity:
          "Find a real difference. Do not invent one. If you are not sure, verify with a speaker or a reliable source. The real difference is the lesson. The invented one is a lie.",
        aiLab: {
          setup: "After naming the difference.",
          childDoes:
            "Ask the model to verify: 'Is it true that [language] forces [distinction]?' If it confirms, you found a real one. If it says 'it is more nuanced,' learn the nuance. The verification is the honesty.",
          evaluate: [
            "Did you name one structural difference?",
            "Did you say it at the table?",
            "Did the child hear that a second language is a second mind?",
          ],
        },
      },
    },
  }),

  // ── 4. The Ongoing Practice (capstone) ──────────────────────────────
  ...expand({
    slug: "ongoing-practice",
    subject: "language",
    unit: "A Second Tongue, a Second Mind",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Ongoing Practice",
        dek: "A language is not a test you pass. It is a muscle you use. Keep climbing ladders. Keep listening. Keep speaking.",
        objective:
          "The student can name one language practice they will do weekly (climb a ladder, listen without subtitles, speak with a person) and explain why the practice is ongoing.",
        parentBriefing:
          "This is the capstone for the young band. The student names one practice they will do weekly. The practice is ongoing. A language is not a test you pass. It is a muscle you use. If you stop using it, it weakens. The student who names a weekly practice and does it has a habit. The student who only studies for a test has a grade. The grade fades. The habit stays.",
        hardEdges: [
          "The practice must be real and doable. 'Speak with a person once a week' is real. 'Become fluent' is not a practice.",
          "Do not make this a guilt trip. The point is the practice, not the perfection.",
        ],
        reading: [
          {
            heading: "The muscle you use",
            body: "A language is a muscle. If you use it, it grows. If you stop, it weakens. The test is not the point. The practice is. Climb a ladder once a week. Listen to a clip without subtitles. Speak with a person. These are the practices. They are ongoing. You do not finish a language. You live it. The student who names one practice and does it weekly has a language. The student who only studies for a test has a grade. The grade fades. The practice stays. Name your practice. Do it. Keep going.",
          },
        ],
        bigIdea:
          "A language is a muscle. Use it or lose it. Name one weekly practice. Do it. The practice is ongoing. The grade fades.",
        tryThis: [
          {
            title: "Name your practice",
            minutes: 10,
            steps: [
              "Name one language practice you will do weekly: climb a ladder, listen without subtitles, speak with a person.",
              "Write: 'My practice is [X]. I will do it [when].'",
              "Say why it is ongoing: 'A language is a muscle. If I stop, it weakens.'",
              "Talk About It: what will keep you going when you do not feel like it?",
            ],
          },
        ],
        dinnerQuestion:
          "What language practice will we do every week, and why is it ongoing?",
        transfer: [
          { label: "Art", note: "Taste Is a Muscle: the same lesson. Use it or lose it." },
          { label: "Math", note: "Show the Path: the same lesson. Walk it or lose it." },
        ],
        ifTheySay: [
          {
            heard: "I'll practice when I have time.",
            reply: "You will not have time. Nobody has time. You make time for what matters. Ten minutes a week is enough for a ladder. If ten minutes is too much, the language is not a priority. That is honest. If it is a priority, ten minutes is the minimum.",
          },
        ],
        integrity:
          "The practice must be real. Do not name a practice you will not do. If you will not climb a ladder, do not name it. Name what you will do. The honesty is the practice.",
        aiLab: {
          setup: "After naming the practice.",
          childDoes:
            "Ask the model to drill the words you need for next week's practice. Then close it. The practice is yours. The model is the drill. The ladder is the practice.",
          evaluate: [
            "Did they name one real weekly practice?",
            "Can they explain why it is ongoing?",
            "Is the practice doable, not aspirational?",
          ],
        },
      },
      emerging: {
        title: "The Ongoing Ladder",
        dek: "The ladder does not end. The ear does not finish. The second mind does not graduate. A language is a practice you keep, not a test you pass.",
        objective:
          "The student can design a weekly language practice (ladder, listening, speaking), commit to it, and describe how the practice builds the second mind over time.",
        parentBriefing:
          "This is the capstone for the emerging band. The student designs a weekly practice: one ladder, one listening session, one conversation. They commit to it. They describe how the practice builds the second mind over time. The practice is ongoing. The language does not graduate. The mind does not finish. The student who designs the practice and commits has a language habit. The student who only studies for a test has a grade that fades.",
        hardEdges: [
          "The practice must be specific: what, when, how long. 'Practice Spanish' is not a practice. 'Climb a three-rung ladder with my parent on Saturday' is.",
          "Academic integrity: the practice is the student's. The model is the drill, not the practice.",
        ],
        reading: [
          {
            heading: "The practice that does not end",
            body: "A language is a practice that does not end. You do not graduate from a language. You live it. The ladder does not end. The ear does not finish. The second mind does not close. The student who designs a weekly practice and commits has a language habit. The habit is the language. The test grade fades. The habit stays. The practice has three parts: a ladder (speak), a listening session (hear), and a conversation (use). Each is weekly. Each is ongoing. The student who does all three has a language. The student who only studies has a grade. The grade is disposable. The practice is reusable. Choose the reusable one.",
          },
          {
            heading: "The second mind over time",
            body: "The second mind is not built in one sitting. It is built over time, by the practice. Each ladder strengthens the mouth. Each listening session strengthens the ear. Each conversation strengthens the mind. The student who does this for a year has a second mind. The student who does it for a month has a start. The student who does it once has an experience. The practice is the difference between an experience and a mind. Design it. Commit. Do it weekly. The second mind grows from the practice, not from the intention.",
          },
        ],
        bigIdea:
          "A language is a practice that does not end. Design a weekly practice. Commit. The second mind grows from the practice, not from the intention.",
        tryThis: [
          {
            title: "Design your practice",
            minutes: 22,
            steps: [
              "Design a weekly practice with three parts: LADDER (speak, 10 min), LISTEN (hear without subtitles, 5 min), CONVERSE (use with a person, 10 min).",
              "Write: 'My practice is: Ladder [when], Listen [when], Converse [when]. Total: [X] minutes per week.'",
              "Write why it is ongoing: 'A language is a practice. The second mind grows from the practice, not from the test.'",
              "Commit. Say it out loud. Write it on the family rule card.",
              "Talk About It: what will keep you going in month three, when the novelty fades?",
            ],
          },
        ],
        dinnerQuestion:
          "What weekly language practice did we design, and what will keep us going when the novelty fades?",
        transfer: [
          { label: "Art", note: "Taste Is a Muscle: the same lesson. The practice is ongoing." },
          { label: "Math", note: "Show the Path: the same lesson. The path is walked, not arrived at." },
        ],
        ifTheySay: [
          {
            heard: "I don't have time for a weekly practice.",
            reply: "The practice is 25 minutes a week. That is less than one episode of a show. If you have time for a show, you have time for a language. The question is not time. It is priority. If the language is a priority, 25 minutes is the minimum. If it is not, say so. The honesty is the practice.",
          },
          {
            heard: "I'll do it when I have a reason (a trip, a class).",
            reply: "The reason is the practice, not the trip. The trip is a test. The practice is the language. If you only practice for the trip, you will forget after the trip. If you practice weekly, the trip is a bonus, not the reason. The practice is the reason.",
          },
        ],
        integrity:
          "The practice must be real and specific. Do not design a practice you will not do. If 25 minutes is too much, design 10. The honesty is the practice. The aspirational plan is not.",
        aiLab: {
          setup: "Before the practice, for drilling only.",
          childDoes:
            "Use the model to drill the words you need for the week's ladder. Then close it. The practice is yours. The model is the drill. The ladder is the mouth. The listening is the ear. The conversation is the mind.",
          evaluate: [
            "Did they design a specific weekly practice with three parts?",
            "Did they commit and write it down?",
            "Can they describe how the practice builds the second mind over time?",
          ],
        },
      },
      adult: {
        title: "The Practice at the Table",
        dek: "If you never practice the second language at home, the child learns it is a school thing. Design the practice. Do it at the table. The practice is the language.",
        objective:
          "The adult commits to one weekly language practice at the table (a ladder, a listening session, a phrase), names it out loud, and models that a language is a household practice, not a school subject.",
        parentBriefing:
          "The adult commits to one weekly practice. A ladder at dinner. A clip without subtitles on Saturday. A phrase at the table. The practice is at home, not at school. The adult who practices at the table teaches the child that a language is a household thing, not a school thing. The adult who only sends the child to language class teaches that the language lives at school. The practice is the inheritance. One practice. Weekly. At the table. That is the language, alive in the house.",
        hardEdges: [
          "The practice must be real. Do not commit to a practice you will not do. If one phrase at dinner is all you can do, do that.",
          "Do not make this a guilt trip. The point is the practice, not the perfection.",
        ],
        reading: [
          {
            heading: "The household language",
            body: "The household that practices a second language at the table has a language. The household that sends the child to class and never speaks at home has a grade. The practice is the difference. One phrase at dinner. One ladder on Saturday. One clip without subtitles on Sunday. The practice is small. The practice is weekly. The practice is at home. The child who sees a language practiced at home learns that languages are lived, not tested. The child who only sees languages at school learns that languages are subjects, not practices. The practice at the table is the inheritance. One phrase. One ladder. One clip. Weekly. That is the language, alive.",
          },
        ],
        bigIdea:
          "Commit to one weekly language practice at the table. The child who sees a language practiced at home learns that languages are lived, not tested.",
        tryThis: [
          {
            title: "One practice at the table",
            minutes: 8,
            steps: [
              "Commit to one weekly language practice at home: a phrase at dinner, a ladder on Saturday, a clip on Sunday.",
              "Write it on the family rule card: '[Language] practice: [what] [when].'",
              "Say it out loud to the child: 'We practice [language] every [day] because a language is a muscle. If we do not use it, we lose it.'",
              "Do it this week. Then do it next week. The practice is the language.",
            ],
          },
        ],
        dinnerQuestion:
          "What language practice did we commit to this week, and when will we do it?",
        transfer: [
          { label: "Parenting", note: "The practice you model is the practice they will keep." },
          { label: "All subjects", note: "Every WisdomForge unit has a version of this: the ongoing practice. Language is the one that never ends." },
        ],
        ifTheySay: [
          {
            heard: "I don't speak the language.",
            reply: "Then learn with the child. One phrase. Drill it with the model. Then say it at dinner. The child who sees an adult learn a phrase and use it, badly, learns that language is a practice for everyone, not just for children. Your bad phrase is the inheritance.",
          },
          {
            heard: "One phrase is not enough.",
            reply: "One phrase is the start. One phrase weekly is more than zero. The language that is practiced one phrase a week is alive. The language that is never spoken at home is dead, no matter how many classes the child takes. Start with one phrase. The practice grows.",
          },
        ],
        integrity:
          "Commit to what you will actually do. If one phrase is all you can do, commit to one phrase. The aspirational commitment that you do not keep is worse than the small commitment that you do.",
        aiLab: {
          setup: "Before the practice, for drilling only.",
          childDoes:
            "Use the model to drill the phrase. Then close it. Say it at dinner. The model is the drill. The table is the practice. The phrase is the language.",
          evaluate: [
            "Did you commit to one weekly practice?",
            "Did you write it down and say it to the child?",
            "Did you do it this week?",
          ],
        },
      },
    },
  }),
];
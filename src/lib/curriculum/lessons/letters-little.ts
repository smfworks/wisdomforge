import { expand } from "./factory";

export const lettersLittleLessons = [
  // ── 1. Tell It In Your Own Words (English) ─────────────────────────
  ...expand({
    slug: "tell-it-your-own-words",
    subject: "english",
    unit: "Stories and Voices — Letters for Little Thinkers",
    number: 1,
    bands: ["little"],
    variants: {
      little: {
        title: "Tell It In Your Own Words",
        dek: "A story you heard, told back in your words. The tool can ask a question about it. The tool may not tell the story for you.",
        objective:
          "The child hears a short story, tells it back in their own words, and draws one picture from it. The tool is closed during the telling.",
        parentBriefing:
          "This sitting is about telling a story in your own words. Read or tell your child a short story — three minutes, no more. A fable, a family story, a Bible story, anything with a beginning, middle, and end. Then ask the child to tell it back. Not word for word — in their own words. If they forget a part, that is fine. The point is not accuracy. The point is: can they make the story theirs? After they tell it, they draw one picture from the story. The tool is closed the whole time. After the picture, the tool may ask one question about the story. That is all. The tool does not tell the story. The tool does not draw the picture. The tool asks one question. Your child's words and picture are the work. The tool's question is the hint.",
        hardEdges: [
          "The tool is closed during the telling and the drawing. It may ask one question after.",
          "Do not correct the child's version of the story. If they change it, that is their story. The point is owning the words, not matching the original.",
        ],
        reading: [
          {
            heading: "The story is yours",
            body: "When you hear a story, it lives in your ears. When you tell it back, it lives in your mouth. When you draw it, it lives in your hands. The story moves through you. That is what 'your own words' means — the story came from someone else, but the telling is yours. A tool can say the words. It cannot tell the story for you. Telling is different from saying. Telling is making the story live in your own mouth.",
          },
        ],
        bigIdea:
          "A story you heard, told back in your words, is yours. The tool can ask about it. It cannot tell it for you.",
        tryThis: [
          {
            title: "Tell it back",
            minutes: 18,
            steps: [
              "A grown-up reads or tells a short story (three minutes). The child listens.",
              "The child tells the story back in their own words. Not word for word. Their words.",
              "The child draws one picture from the story.",
              "After the picture, the tool may ask one question: 'What was your favorite part?' The child answers.",
              "Ask a Grown-Up: what story did you tell? Was it the same when you told it back?",
            ],
          },
        ],
        dinnerQuestion: "What story did you tell in your own words today? Did it change when you told it?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'I know the story.' The check is telling it in your own words." },
        ],
        ifTheySay: [
          {
            heard: "Can the tool tell me the story?",
            reply: "It can say the words. But telling the story is different from saying the words. Telling means the story goes through you and comes out in your words. The tool can ask you about the story after. But the telling is yours.",
          },
        ],
        integrity:
          "Do not ask the tool to tell the story. The child tells it. The tool asks one question after. That is the rule.",
        aiLab: {
          setup: "After the child tells the story and draws the picture.",
          childDoes:
            "Ask the tool: 'What was your favorite part of the story I told?' Listen to its answer. Did it pick a part you liked too? Did it pick a part you forgot? The tool's answer is a hint, not the story.",
          evaluate: [
            "Did the child tell the story in their own words (not recite)?",
            "Did the child draw a picture from the story?",
            "Was the tool closed during the telling and drawing?",
          ],
        },
      },
    },
  }),

  // ── 2. The Story Behind a Real Thing (History) ────────────────────
  ...expand({
    slug: "story-behind-real-thing",
    subject: "history",
    unit: "Stories and Voices — Letters for Little Thinkers",
    number: 2,
    bands: ["little"],
    variants: {
      little: {
        title: "The Story Behind a Real Thing",
        dek: "Pick a real object from your house. Before anyone tells you its history, look at it and guess. The object is first. The story is second.",
        objective:
          "The child examines a real object from home, names three things they notice, guesses what it is for, and then hears the real story.",
        parentBriefing:
          "This sitting is about looking at a real thing before hearing the story about it. Pick an object from your home that has a history — an old photograph, a tool, a piece of jewelry, a coin, a letter, a kitchen utensil. Show it to your child. Ask: what do you notice? Let them name three things. Then ask: what do you think this is for? Let them guess. Do not correct the guess. Then tell the real story of the object — where it came from, who used it, how old it is. The child's guess and the real story are both the lesson. The gap between them is what 'source before summary' means for a five-year-old: you look at the real thing first, then you hear the story. The tool is closed during the looking and guessing. After the real story, the tool may ask one question.",
        hardEdges: [
          "The tool is closed during the looking and guessing. It may ask one question after the real story.",
          "Do not correct the child's guess. The gap between the guess and the real story is the lesson.",
        ],
        reading: [
          {
            heading: "Look first, story second",
            body: "Before anyone tells you the story of a thing, look at the thing. What do you see? What is it made of? What does it feel like? What do you think it is for? Your guess is not wrong. It is your guess. The real story comes after. Sometimes the story matches your guess. Sometimes it does not. The gap between your guess and the real story is what learning feels like. The object is the source. The story is the summary. The source is first.",
          },
        ],
        bigIdea:
          "Look at the real thing before hearing the story. Your guess and the real story are both the lesson. The gap is what learning feels like.",
        tryThis: [
          {
            title: "The real thing",
            minutes: 18,
            steps: [
              "A grown-up picks a real object with a history (photo, tool, coin, jewelry, letter).",
              "The child looks at it. Names three things they notice.",
              "The child guesses: what is this for? The grown-up does not correct the guess.",
              "The grown-up tells the real story of the object.",
              "Ask a Grown-Up: was your guess right? What was different? The gap is the lesson.",
            ],
          },
        ],
        dinnerQuestion: "What did you guess the object was for? What was the real story? What was different?",
        transfer: [
          { label: "English", note: "Tell it in your own words: after hearing the real story, tell it back." },
        ],
        ifTheySay: [
          {
            heard: "Can the tool tell me what it is?",
            reply: "It can. But looking first is the lesson. The tool knows the answer. You are learning how to look. If the tool tells you the answer before you look, you skip the looking. The looking is the skill. The answer is just the answer.",
          },
        ],
        integrity:
          "Do not ask the tool what the object is before the child looks and guesses. The looking is the lesson. The tool asks one question after.",
        aiLab: {
          setup: "After the real story.",
          childDoes:
            "Ask the tool: 'I looked at a thing from my house. What kinds of things can old objects tell us?' Listen to its answer. Did it say something you did not think of?",
          evaluate: [
            "Did the child look at the object before hearing the story?",
            "Did the child name three things they noticed?",
            "Did the child guess before hearing the real story?",
            "Was the tool closed during the looking and guessing?",
          ],
        },
      },
    },
  }),

  // ── 3. Hear It and Say It Back (Language) ─────────────────────────
  ...expand({
    slug: "hear-it-say-it-back",
    subject: "language",
    unit: "Stories and Voices — Letters for Little Thinkers",
    number: 3,
    bands: ["little"],
    variants: {
      little: {
        title: "Hear It and Say It Back",
        dek: "A word in another language, heard from a person, said back in your voice. The tool can listen. It may not say the word first.",
        objective:
          "The child hears a short phrase in another language from a person or recording, says it back three times, and uses it once with a person. The tool is a listener, not a speaker.",
        parentBriefing:
          "This sitting is about hearing a word in another language and saying it back. The word must come from a person — you, a family member, a recording of a real speaker. The child hears the word, says it back three times, and then uses it once with a person (you, a sibling, anyone). The tool is a listener: the child can say the word to the tool and ask 'did I say it right?' The tool may not say the word first. The order matters: hear from a person, say it yourself, then check with the tool. This is the same principle as 'Say It Yourself' (the flagship) but for little thinkers: the mouth has to move, and the word has to come from a person first.",
        hardEdges: [
          "The tool may not say the word first. The child hears it from a person or recording, then says it themselves.",
          "The tool is a listener and checker, not a speaker. The child says the word to the tool. The tool does not say the word to the child.",
        ],
        reading: [
          {
            heading: "Hear it, say it, use it",
            body: "A word in another language is a sound. You hear the sound from a person. You make the sound with your mouth. You use the sound with a person. That is how a word becomes yours. A tool can tell you if you said it right. But the tool cannot say the word for you. If your mouth did not move, you did not practice. Hearing is first. Saying is second. Using it with a person is third. The tool is the checker, not the speaker.",
          },
        ],
        bigIdea:
          "Hear the word from a person. Say it back with your mouth. Use it with a person. The tool checks. It does not speak for you.",
        tryThis: [
          {
            title: "Three words",
            minutes: 18,
            steps: [
              "A grown-up says a short phrase in another language (hello, thank you, good night — one phrase, three words max). Or plays a recording of a real speaker.",
              "The child says it back three times. The grown-up helps if the sound is hard.",
              "The child uses the phrase once with a person (the grown-up, a sibling).",
              "After using it, the child may say it to the tool and ask: 'Did I say it right?' The tool listens. It does not say the word first.",
              "Ask a Grown-Up: what word did you learn? Say it to me. Did your mouth move?",
            ],
          },
        ],
        dinnerQuestion: "What word did you learn in another language today? Did you say it to someone?",
        transfer: [
          { label: "English", note: "Tell it in your own words: can you tell someone what the word means in your words?" },
        ],
        ifTheySay: [
          {
            heard: "Can the tool say the word for me?",
            reply: "It can. But if the tool says the word, your mouth did not move. And if your mouth did not move, you did not practice. The tool can listen to you say the word and tell you if you got it right. But the word has to come from your mouth first. Hear it from a person. Say it yourself. Then check with the tool. That is the order.",
          },
        ],
        integrity:
          "Do not ask the tool to say the word first. The child hears it from a person, says it themselves, then checks with the tool. The order is the rule.",
        aiLab: {
          setup: "After the child says the word three times and uses it with a person.",
          childDoes:
            "Say the word to the tool. Ask: 'Did I say it right?' The tool listens. If it says 'yes,' that is good. If it says 'try again,' that is also good. The tool is the checker. You are the speaker.",
          evaluate: [
            "Did the child hear the word from a person or recording (not the tool)?",
            "Did the child say the word back three times?",
            "Did the child use the word with a person?",
            "Was the tool a listener, not a speaker?",
          ],
        },
      },
    },
  }),
];

import { expand } from "./factory";

/** History little 2–6. Sitting 1 remains `story-behind-real-thing` in letters-little.ts. */
export const historyLittleLessons = [
  ...expand({
    slug: "who-held-it",
    subject: "history",
    unit: "Look First — History for Little Thinkers",
    number: 2,
    bands: ["little"],
    variants: {
      little: {
        title: "Who Held It?",
        dek: "The object already had a person. Guess who, then hear who. Do not let a tool name them first.",
        objective: "The child looks at a real object, guesses who used it, then hears the real person — before any tool speaks.",
        parentBriefing:
          "Sitting 2 of Look First. Same object as sitting 1 if you still have it, or a new one. Ask: who do you think held this? Do not correct. Then tell the real person — a name, a role, one true fact. The tool is closed until after. History is people, not a label on a museum card.",
        hardEdges: [
          "The tool may not name the person first.",
          "Do not invent a famous name if you do not know. 'Someone in this family' is enough.",
          "Skip wounds. An old photo of a living person who would not want the story told is not this sitting.",
        ],
        reading: [
          {
            heading: "Someone held this",
            body: "A thing in a drawer is not just a thing. Someone held it. Someone used it. Someone put it down. Before you hear who, look. What would those hands have been doing? Your guess is not a test. Then you hear the real person. Sometimes the guess matches. Sometimes it does not. The gap is history: a person was there, and you were not.",
          },
        ],
        bigIdea: "History is a person who held the thing. Look first. Then hear who.",
        tryThis: [
          {
            title: "Name the hands",
            minutes: 18,
            steps: [
              "Show a real object with a person behind it.",
              "The child looks. Names three things they notice.",
              "Guess: who held this?",
              "The grown-up names the real person in one or two sentences.",
              "Ask a Grown-Up: was your guess a person you know? What was different?",
            ],
          },
        ],
        dinnerQuestion: "Who held the object we looked at? What did they use it for?",
        transfer: [
          { label: "Thinking", note: "Claim and check: 'someone held this' is the claim. The story is the check." },
        ],
        ifTheySay: [
          {
            heard: "Can the tool tell me who it was?",
            reply: "It can guess a famous name. That is not this house. We hear who from a person who knows. Then the tool may ask one question.",
          },
        ],
        integrity: "Do not ask a tool to invent a biography for a family object.",
        aiLab: {
          setup: "After the real person is named.",
          childDoes: "Ask: 'What kinds of things did people use with their hands a long time ago?' Listen. Did it name something like our object?",
          evaluate: [
            "Did they guess a person before hearing the real one?",
            "Was the tool closed until after?",
            "Was the real name true, not famous-for-show?",
          ],
        },
      },
    },
  }),
  ...expand({
    slug: "then-not-now",
    subject: "history",
    unit: "Look First — History for Little Thinkers",
    number: 3,
    bands: ["little"],
    variants: {
      little: {
        title: "Then, Not Now",
        dek: "The object is old. Something about the world around it is different. Name one then and one now.",
        objective: "The child names one thing that was true when the object was used and one thing that is true now.",
        parentBriefing:
          "Sitting 3. Keep it tiny: no electricity, different clothes, a store that is gone. One then / one now. Do not lecture centuries. The tool is closed during the looking.",
        hardEdges: [
          "Do not dump wars or deaths as the 'then.'",
          "One pair is enough. Do not make a timeline.",
        ],
        reading: [
          {
            heading: "The world around the thing",
            body: "The object stayed. The world around it changed. Then, maybe there was no phone. Now there is. Then, this was used every day. Now it lives in a drawer. History is not only kings. History is then-not-now on a thing you can hold.",
          },
        ],
        bigIdea: "Then and now can both be true. The object helps you see the difference.",
        tryThis: [
          {
            title: "One then, one now",
            minutes: 18,
            steps: [
              "Look at the object again.",
              "Write or say THEN: ____.",
              "Write or say NOW: ____.",
              "The grown-up does not add a third pair unless the child asks.",
              "Ask a Grown-Up: what is different about the world this thing lived in?",
            ],
          },
        ],
        dinnerQuestion: "What was then? What is now? How do we know?",
        transfer: [{ label: "Science", note: "Measure twice: then and now are two looks, not one story." }],
        ifTheySay: [
          {
            heard: "Everything is the same.",
            reply: "Some things are. Find one that is not. That one is the sitting.",
          },
        ],
        integrity: "Do not let a tool write a century overview. One pair from this object.",
        aiLab: {
          setup: "After THEN / NOW exist on paper or out loud.",
          childDoes: "Ask the tool: 'What is one way kitchens were different a long time ago?' Keep your THEN / NOW. Did it match?",
          evaluate: ["Did they name one then and one now?", "Was the pair about this object, not a movie?"],
        },
      },
    },
  }),
  ...expand({
    slug: "two-tellers",
    subject: "history",
    unit: "Look First — History for Little Thinkers",
    number: 4,
    bands: ["little"],
    variants: {
      little: {
        title: "Two Tellers",
        dek: "Two people can tell different stories about the same object. Hear both. Do not pick a winner yet.",
        objective: "The child hears two short true tellings about the same object and names one thing that was the same and one that was different.",
        parentBriefing:
          "Sitting 4. Two grown-ups, or you plus a letter/caption. Both must be true, not a trick. The lesson is: sources can differ without one being a lie. The tool may not pick the winner.",
        hardEdges: [
          "Do not use this to fight in front of them.",
          "If you only have one teller, skip this week. Refusal is complete.",
          "No culture-war objects.",
        ],
        reading: [
          {
            heading: "Same thing, two mouths",
            body: "One person says the cup was Grandma's. Another says it was from a shop on the corner. Both can be true. History is not one mouth. You listen to more than one. You do not have to pick a favorite. You name what matched and what did not.",
          },
        ],
        bigIdea: "Two true stories can sit on one object. Listen before you choose.",
        tryThis: [
          {
            title: "Hear both",
            minutes: 18,
            steps: [
              "Show the object.",
              "Teller 1: one minute.",
              "Teller 2: one minute (or a caption/letter).",
              "The child names one same, one different.",
              "Ask a Grown-Up: do we have to pick a winner?",
            ],
          },
        ],
        dinnerQuestion: "What was the same in both stories? What was different?",
        transfer: [{ label: "Thinking", note: "Steel-man: can you say teller 2's story until they would nod?" }],
        ifTheySay: [
          {
            heard: "Which one is right?",
            reply: "Maybe both. Name same and different first. Right comes later, if it comes.",
          },
        ],
        integrity: "Do not ask a tool to declare which family story wins.",
        aiLab: {
          setup: "After same / different exist.",
          childDoes: "Ask: 'Why might two people remember one thing differently?' Listen. Keep your two tellers.",
          evaluate: ["Did they hear two tellings?", "Did they name same and different without a winner?"],
        },
      },
    },
  }),
  ...expand({
    slug: "keep-the-piece",
    subject: "history",
    unit: "Look First — History for Little Thinkers",
    number: 5,
    bands: ["little"],
    variants: {
      little: {
        title: "Keep the Piece",
        dek: "The object is the source. A picture of it is not the same. Do not let a tool replace the looking.",
        objective: "The child compares the real object to a photo or a tool description and names one thing only the real thing showed.",
        parentBriefing:
          "Sitting 5. Take a photo of the object, or ask a tool to describe it after they have looked. The child finds one thing the photo/tool missed (weight, smell, a scratch). That is why the piece stays.",
        hardEdges: [
          "Do not throw away the object to make a point.",
          "The tool describes only after looking.",
        ],
        reading: [
          {
            heading: "A picture is not the thing",
            body: "A photo is flat. A tool's sentence is words. The real thing has weight, a scratch, a smell, a chip. History needs the piece when you can have it. When you cannot, you say so. You do not pretend a picture is the same as holding it.",
          },
        ],
        bigIdea: "Keep the piece. A picture and a sentence are helpers. They are not the source.",
        tryThis: [
          {
            title: "What the picture missed",
            minutes: 18,
            steps: [
              "Look at the object. Name three things.",
              "Look at a photo of it, or hear a tool describe it after.",
              "Name one thing only the real object showed.",
              "Put the object back where it is kept.",
              "Ask a Grown-Up: why do we keep this?",
            ],
          },
        ],
        dinnerQuestion: "What did the real object show that the picture or the tool missed?",
        transfer: [{ label: "Art", note: "Taste is a muscle: looking longer at the real thing." }],
        ifTheySay: [
          {
            heard: "The photo is enough.",
            reply: "Enough for a reminder. Not enough for the scratch you can feel. Keep the piece.",
          },
        ],
        integrity: "Do not ask a tool to replace looking at the object.",
        aiLab: {
          setup: "After they have looked at the real object.",
          childDoes: "Ask the tool to describe the object from a photo if you take one. Name what it missed.",
          evaluate: ["Did looking come first?", "Did they name one thing only the real object showed?"],
        },
      },
    },
  }),
  ...expand({
    slug: "look-first-capstone",
    subject: "history",
    unit: "Look First — History for Little Thinkers",
    number: 6,
    bands: ["little"],
    variants: {
      little: {
        title: "Look First — The Whole Path",
        dek: "Look. Guess. Hear who. Then and now. Two tellers if you have them. Keep the piece. Then tell it back.",
        objective: "The child walks one object through look, guess, who, then/now, and tell-back — on the table, before a tool.",
        parentBriefing:
          "Capstone. One object. Assemble sittings 1–5. Skip two-tellers if you have only one mouth. Do not skip looking. Praise the path, not a perfect story.",
        hardEdges: [
          "Keep it tiny. One object.",
          "If they tire, stop after look + guess + real story.",
          "The tool stays closed until the path is walked.",
        ],
        reading: [
          {
            heading: "The path is the history",
            body: "You looked. You guessed. You heard who held it. You named then and now. You kept the piece. Now tell the story back in your words. That is history for this house. A tool can say a longer story. It cannot walk this path for you.",
          },
        ],
        bigIdea: "History is a path you walk with a real thing, not a paragraph a tool recites.",
        tryThis: [
          {
            title: "Walk one object",
            minutes: 18,
            steps: [
              "Pick one object.",
              "LOOK: three notices. GUESS: what / who.",
              "HEAR: the real story, short.",
              "THEN / NOW: one pair.",
              "TELL BACK in your words. Tool closed until then.",
            ],
          },
        ],
        dinnerQuestion: "What path did we walk with the object — look, guess, hear, tell?",
        transfer: [{ label: "English", note: "Tell it in your own words." }],
        ifTheySay: [
          {
            heard: "That's too many steps.",
            reply: "It is one walk with names. Skip a name that does not apply. Do not skip looking.",
          },
        ],
        integrity: "Do not let a tool write the path and then sign the child's name.",
        aiLab: {
          setup: "After the tell-back.",
          childDoes: "Ask one question only: 'What is one thing old objects can teach us?' Keep your walk.",
          evaluate: ["Did paper or the table come first?", "Did they look before they heard?"],
        },
      },
    },
  }),
];

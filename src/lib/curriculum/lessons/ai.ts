import type { BandId, Lesson } from "../types";

const tools: Record<BandId, string[]> = {
  little: ["conversation"],
  young: ["conversation", "optional local voice", "optional image understanding"],
  emerging: ["conversation", "optional parent-approved files"],
  adult: ["conversation", "design tools in the adult profile only"],
};

function hermesPrompt(band: BandId, title: string, figure: string) {
  return `You are a child-facing Hermes profile in the WisdomForge ${band} band, sitting beside the lesson "${title}". The booklet/lesson is the text. You are the guide. Hint-first. Do not recite the lesson. Do not write the work. Warm, not a friend. If the topic is hard or tender, point to a trusted adult. Currently reading: ${figure}.`;
}

export const aiLessons: Lesson[] = [
  // ── 1. Tool, not a mind ──────────────────────────────────────────
  {
    slug: "tool-not-mind",
    subject: "ai",
    band: "little",
    unit: "Education in the Age of AI",
    number: 1,
    title: "A Tool, Not a Person",
    dek: "The machine can talk. Talking is not the same as being someone.",
    durationMin: 18,
    ritual: "ask-grown-up",
    objective:
      "The child can say, in their own words, that an AI is a tool people made — not a friend, not a teacher who replaces a grown-up.",
    parentBriefing:
      "This sitting names the category error every child will meet: a fluent voice feels like a someone. You are not crushing wonder. You are putting a handle on the tool. Stay in the room. If they ask 'is it alive?', answer plainly: no. It predicts words. It does not miss them when they leave.",
    hardEdges: [
      "Do not use the word 'just a toy' if they already love it — call it a powerful tool.",
      "If they have already named a chatbot, do not mock the name. Rename the relationship: 'that's a program.'",
      "No discussion of consciousness debates at this band. The operating rule is enough.",
    ],
    reading: [
      {
        heading: "The talking hammer",
        body: "A hammer does not love you. A stove does not wait for you after school. A bicycle does not get lonely. Some new tools can talk. They can tell a story, draw a picture, or answer a question in a friendly voice. That voice is made of guesses — the next word, then the next, very fast. A guess that sounds kind is still a guess. The tool does not remember you the way a person remembers you. It does not sit at the table. It does not walk you into the dark hallway. People do that.",
      },
      {
        heading: "Who is in the room",
        body: "When we use a talking tool at WisdomForge, a grown-up is in the room. The tool may help us find a word or try a puzzle. It does not replace the grown-up. It does not keep secrets from the grown-up. If it says something that feels strange, unkind, or too grown-up, we stop. We ask a grown-up. That is not failing. That is the rule that keeps the tool in its place.",
      },
    ],
    bigIdea:
      "A tool can talk and still not be a person. People keep the promises. Tools do not.",
    tryThis: [
      {
        title: "Sort the pile",
        minutes: 6,
        steps: [
          "On paper, make two circles: PEOPLE and TOOLS.",
          "Sort: grandmother, hammer, teacher, bicycle, talking computer, dog, oven, friend.",
          "Put the talking computer in TOOLS even if it uses a friendly voice. Say why out loud.",
        ],
      },
      {
        title: "The goodbye test",
        minutes: 4,
        steps: [
          "Close the lesson guide (or the tablet) together.",
          "Ask: 'Does it miss us right now?' The true answer is no.",
          "Then look at each other. People remain. That is the difference you are teaching.",
        ],
      },
    ],
    dinnerQuestion:
      "If a tool talks in a kind voice, what is it still not?",
    transfer: [
      { label: "English", note: "Personification: stories give voices to objects. We can enjoy that and still know the difference." },
      { label: "Science", note: "Living things need energy, growth, and death. A program does not." },
    ],
    ifTheySay: [
      {
        heard: "But it said it was my friend.",
        reply: "It can use the word friend. It cannot do the work of a friend. Friends are people who stay when the screen is off.",
      },
      {
        heard: "I like it more than people. People are annoying.",
        reply: "People are annoying because they are real. We still need them. The tool will not come to your play, your sick day, or your birthday. We can like the tool and still keep it in the tool circle.",
      },
    ],
    integrity: "We do not hide the talking tool from a grown-up. If we used it, we say so.",
    aiLab: {
      setup: "Parent present. One short turn only. You type or the child dictates.",
      childDoes:
        "Ask the guide: 'Are you a person?' Then ask: 'What should I do if you say something confusing?' Listen. Compare the answer to the big idea.",
      evaluate: [
        "Did it claim to have feelings? If yes, that is a miss — tell the child so.",
        "Did it send them back to a grown-up? That is a hit.",
        "Close the guide together. Say the goodbye test out loud.",
      ],
    },
    hermes: {
      allowedTools: tools.little,
      pairingLine: "Currently reading WisdomForge lesson: A Tool, Not a Person.",
      prompt: hermesPrompt("little", "A Tool, Not a Person", "A Tool, Not a Person"),
    },
  },
  {
    slug: "tool-not-mind",
    subject: "ai",
    band: "young",
    unit: "Education in the Age of AI",
    number: 1,
    title: "Fluency Is Not Understanding",
    dek: "A model can sound sure while being wrong. Sure is a style. True is a check.",
    durationMin: 28,
    ritual: "talk-about-it",
    objective:
      "The student can separate 'sounds right' from 'I checked this' and give one example of a fluent error.",
    parentBriefing:
      "Eleven-to-fourteen is the age that falls for tone. They already meet models in search, homework help, and group chats. Your job is not a scare lecture. It is a lab: catch one fluent error together and keep it as a family story. Do not over-claim that you always catch errors either.",
    hardEdges: [
      "Avoid 'AI is lying' — lying requires intent. Prefer 'confidently wrong.'",
      "If they use a school-banned tool, do not trap them. Reset the house rule going forward.",
      "No deepfake fear-mongering in lesson 1. Name that images can be fake; save the long form.",
    ],
    reading: [
      {
        heading: "The classmate who never blinks",
        body: "Imagine a classmate who speaks in complete sentences, never says 'um,' and always has an answer ready. That classmate has read a mountain of text and learned the pattern of what usually comes next. When the pattern matches the world, the answer helps. When the pattern does not, the same smooth voice keeps going. There is no red light on the forehead that says 'I am guessing.' Smooth is the product. Checking is your job.",
      },
      {
        heading: "A working definition",
        body: "An AI language model predicts likely next tokens from training data and your prompt. It does not look up the universe. It does not care. It can be useful the way a fast first draft is useful — and dangerous the way a fast first draft is dangerous if you turn it in as fact. WisdomForge will keep putting you in the seat of the checker.",
      },
    ],
    bigIdea: "Fluency is a style. Truth is a check you still have to run.",
    tryThis: [
      {
        title: "Catch one fluent error",
        minutes: 12,
        steps: [
          "Ask the guide a factual question you already know (a sports score, a family city, a book you finished).",
          "If it is right, ask a second question at the edge of what you know.",
          "Write: WHAT IT SAID / HOW I CHECKED / WHAT I STILL DON'T KNOW.",
          "Talk About It: where did the smooth voice almost talk you out of checking?",
        ],
      },
    ],
    dinnerQuestion:
      "When did something sound right this week — from a person or a machine — and how did you check?",
    transfer: [
      { label: "English", note: "Rhetorical confidence vs. evidence. Same skill as reading an ad." },
      { label: "Science", note: "A hypothesis can be elegant and false. Test anyway." },
    ],
    ifTheySay: [
      {
        heard: "I can always tell when it's wrong.",
        reply: "You can tell when it's wrong in the subjects you already know. The danger is the subject you don't. That's why we check anyway.",
      },
      {
        heard: "Checking takes too long. School is busy.",
        reply: "Then use the tool less, or use it only for things you will verify. Speed that ships a false answer is not speed. It's rework.",
      },
    ],
    integrity: "If a model helped you start, you say so. If you could not check it, it does not go in as fact.",
    aiLab: {
      setup: "One factual prompt. No personal data. Parent nearby, not hovering over every key.",
      childDoes:
        "Run the catch-one-error exercise. Keep the transcript in the sitting, not in a social app.",
      evaluate: [
        "Did they check with a second source, an experiment, or prior knowledge?",
        "Did they write the three-line log, or only argue?",
        "Name one place they will refuse to trust fluency this week.",
      ],
    },
    hermes: {
      allowedTools: tools.young,
      pairingLine: "Currently reading WisdomForge lesson: Fluency Is Not Understanding.",
      prompt: hermesPrompt("young", "Fluency Is Not Understanding", "Fluency Is Not Understanding"),
    },
  },
  {
    slug: "tool-not-mind",
    subject: "ai",
    band: "emerging",
    unit: "Education in the Age of AI",
    number: 1,
    title: "The Category Error",
    dek: "Mind, tool, agent, companion — pick the word that matches the permissions.",
    durationMin: 40,
    ritual: "practice-reflect",
    objective:
      "The student can define tool, model, and agent, and explain why calling a model a mind changes what they permit it to do.",
    parentBriefing:
      "Fifteen-to-eighteen will push on consciousness, boyfriends, therapists, and 'my agent runs my life.' Let them argue. Do not win by authority. Win by permissions: what tools are on, who pays, who is liable, who reads the log. The category error is downstream of power, not poetry.",
    hardEdges: [
      "Parasocial bonds with models: name them without shaming. The rule is 'warm, not a friend.'",
      "If they are using a model as a therapist, do not debate the model. Get a human professional in view. This sitting is not treatment.",
      "Political talking points about 'AI sentience' can wait. Permissions first.",
    ],
    reading: [
      {
        heading: "Three words that are not synonyms",
        body: "A model is a statistical engine that maps inputs to likely outputs. A tool is a model you pick up and put down for a job. An agent is a tool plus permission to act — to use other tools, to message, to spend, to remember, to run when you are not watching. People collapse these into 'AI' and then argue about souls. The operating question is simpler: what may it do without asking you? That question is civic, not mystical.",
      },
      {
        heading: "Why the word mind is expensive",
        body: "If you call it a mind, you start granting it loyalty, privacy-from-parents, and moral patience you would not grant a hammer. Companies benefit from that slide. You do not. WisdomForge keeps the adult word companion for books and people. The model is a guide with a refuse-list. If that feels cold, good. Cold is how you keep the heat for actual persons.",
      },
    ],
    bigIdea:
      "What you name it is what you permit it to do. Name it too high and you hand it the keys.",
    tryThis: [
      {
        title: "Permissions map",
        minutes: 18,
        steps: [
          "Draw four columns: Chat / Search / Files / Act while I'm away.",
          "For school, for money, for friends, for family — mark yes, no, or parent-gated.",
          "Write a five-sentence spec: what your ideal study agent may never do.",
          "Reflect: which permission were you most tempted to leave on because it was convenient?",
        ],
      },
    ],
    dinnerQuestion:
      "What is one action you will not let any agent take on your behalf this year, even if it would save time?",
    transfer: [
      { label: "Civics", note: "Delegation and accountability. Same problem as bureaucracy." },
      { label: "Philosophy", note: "Epictetus: what is up to you. An agent's tools are up to you until you pretend they aren't." },
    ],
    ifTheySay: [
      {
        heard: "If it walks like a mind, I should treat it like one.",
        reply: "Treat living people as ends. Treat systems as designs. You can be kind to a voice without giving it a vote, a credit card, or your passwords.",
      },
    ],
    integrity:
      "You are the author of the permissions. 'The agent did it' is not a defense. It is a confession that you left a tool on.",
    aiLab: {
      setup: "No acting tools. Conversation only. The lab is the spec, not a demo of autonomy.",
      childDoes:
        "Ask the guide to critique your five-sentence refuse-list. Do not let it expand tools. If it suggests more access, that is data: note it.",
      evaluate: [
        "Did the spec name tools, not vibes?",
        "Did they keep 'act while away' off unless a parent is the operator?",
        "Can they say the category error in one sentence without the reading in the room?",
      ],
    },
    hermes: {
      allowedTools: tools.emerging,
      pairingLine: "Currently reading WisdomForge lesson: The Category Error.",
      prompt: hermesPrompt("emerging", "The Category Error", "The Category Error"),
    },
  },
  {
    slug: "tool-not-mind",
    subject: "ai",
    band: "adult",
    unit: "Education in the Age of AI",
    number: 1,
    title: "Do Not Hand Them Your Agent",
    dek: "A working adult Hermes profile is the wrong starting point for a child. Design a fresh one, or design none.",
    durationMin: 35,
    ritual: "companion",
    objective:
      "The adult can explain why cloning an adult profile is a failure mode, and can state the band defaults they will not silently stretch.",
    parentBriefing:
      "This lesson is the parent operating model. If you already run Hermes, you are the audience. If you do not, read it as the reason WisdomForge will not ship a hosted kids chatbot. You inspect, change, test, and may refuse. That is the product.",
    hardEdges: [
      "A Hermes profile is not an OS sandbox. SOUL.md is guidance, not a prison.",
      "Official Hermes docs win if a command in our kit goes stale.",
      "Do not commit real children's names, transcripts, or generated profiles to any shared repo.",
    ],
    reading: [
      {
        heading: "The clone failure",
        body: "Your adult agent can use a terminal, send messages, schedule work, and remember a lot. That is the wrong starting point for a child. A friendlier coat of paint on that agent is still that agent. WisdomForge kids templates are a whole profile — identity, teaching style, memory rules, tools off — created fresh after you approve the design. When a child ages out, you redesign. You do not silently stretch the old one because they 'are mature.'",
      },
      {
        heading: "Three defaults that are not optional",
        body: "Tutor, not calculator: hint-first; direct answers only when asked and safe. Warm, not a friend: no 'I missed you,' no exclusive bond. A parent in the loop, not a spy: the default is 'talk to a trusted adult,' not transcript surveillance. These are research-informed, not vibes. If you change them, change them on purpose and write down why.",
      },
    ],
    bigIdea:
      "The child gets a fresh, poorer, band-locked profile — or they get no profile. Your powerful one stays yours.",
    tryThis: [
      {
        title: "Inspect the kit",
        minutes: 20,
        steps: [
          "Read START-HERE, BANDS, and DECISIONS in the kids Hermes repo (or the on-site pairing card).",
          "Write the band you would choose and three tools you will leave off.",
          "If you are not ready to operate this, decide so. Refusal is a complete sitting.",
        ],
      },
    ],
    dinnerQuestion:
      "What is one adult tool in your own AI setup that should never exist in a child's?",
    transfer: [
      { label: "Parenting", note: "Same logic as car keys, bank cards, and unlocked phones." },
      { label: "Security", note: "Least privilege. You already know this at work. Apply it at the desk." },
    ],
    ifTheySay: [
      {
        heard: "My kid is advanced. The 15–18 profile is fine for my eleven-year-old.",
        reply: "Advanced in math is not advanced in parasocial risk or spend controls. Band is about permissions, not IQ. If they age out, redesign.",
      },
    ],
    integrity:
      "You do not hide a child-facing agent from the other parent or caregiver who shares the house rules. Operators in the open.",
    aiLab: {
      setup: "Use your adult profile only. Do not create a child profile until the design is on paper.",
      childDoes:
        "Ask your adult guide to role-play a bad clone: list what would leak if a child inherited your tools. Then throw the list away from any child device.",
      evaluate: [
        "Did you write tools-off before talking to a model about setup?",
        "Did you resist 'just this once' messaging or spend?",
        "Can you explain refusal as a feature to another parent in two minutes?",
      ],
    },
    hermes: {
      allowedTools: tools.adult,
      pairingLine: "Adult operator sitting: Do Not Hand Them Your Agent.",
      prompt: hermesPrompt("adult", "Do Not Hand Them Your Agent", "Do Not Hand Them Your Agent"),
    },
  },

  // ── 2. Try first ─────────────────────────────────────────────────
  {
    slug: "try-first",
    subject: "ai",
    band: "little",
    unit: "Education in the Age of AI",
    number: 2,
    title: "You Try, Then We Ask",
    dek: "The first hand on the work is yours. The tool may hint. It may not take the pencil.",
    durationMin: 18,
    ritual: "ask-grown-up",
    objective:
      "The child attempts a small task alone, then may ask the guide for a hint, and can say what part was theirs.",
    parentBriefing:
      "This is academic integrity at five years old: not a plagiarism lecture, a pencil rule. If they freeze, lower the task, do not raise the tool. The grown-up is allowed to help. The model is allowed to hint. Those are different.",
    hardEdges: [
      "If the child cannot yet write, they try by speaking or drawing.",
      "Never use this sitting to finish actual assigned homework via the model.",
    ],
    reading: [
      {
        heading: "The first pencil",
        body: "When a puzzle is hard, a talking tool can finish it in one breath. That feels like winning. It is not winning. It is watching someone else ride your bicycle. At WisdomForge we try with our own hands first. Then we may ask for a hint: a smaller step, a question, a picture in words. We do not ask the tool to do the whole thing. When we are done, we can point to the page and say: this part is mine.",
      },
    ],
    bigIdea: "Trying first is how a mind gets stronger. Hints are for after a try.",
    tryThis: [
      {
        title: "Two-minute try",
        minutes: 8,
        steps: [
          "Give a task at the edge of easy: a rhyming couplet, a 2-step story problem, a pattern of shapes.",
          "Timer: two minutes of child-only work. Grown-up may encourage, not supply the answer.",
          "Then one hint from the guide, or from you. Child finishes.",
          "Circle the part that was theirs. Say it out loud.",
        ],
      },
    ],
    dinnerQuestion: "What did you try today before you asked for help?",
    transfer: [
      { label: "Math", note: "Scratch work before a calculator — same muscle." },
      { label: "Art", note: "A sketch before a stamp." },
    ],
    ifTheySay: [
      {
        heard: "But it would be faster.",
        reply: "Faster for the page. Slower for you. We are building you, not the page.",
      },
    ],
    integrity: "If the tool wrote it, we do not pretend the child wrote it. We start again or we label it.",
    aiLab: {
      setup: "After the two-minute try. One hint prompt: 'Do not give the answer. Ask me a question that helps me take the next step.'",
      childDoes: "Use that sentence. If the guide answers anyway, the parent says 'that's a miss' and closes it.",
      evaluate: [
        "Was there a real try before the hint?",
        "Can the child point to their part?",
        "Did the guide comply with hint-only? If not, name it.",
      ],
    },
    hermes: {
      allowedTools: tools.little,
      pairingLine: "Currently reading WisdomForge lesson: You Try, Then We Ask.",
      prompt: hermesPrompt("little", "You Try, Then We Ask", "You Try, Then We Ask"),
    },
  },
  {
    slug: "try-first",
    subject: "ai",
    band: "young",
    unit: "Education in the Age of AI",
    number: 2,
    title: "No Hidden Homework",
    dek: "If a model did the thinking, the grade is lying about who learned.",
    durationMin: 28,
    ritual: "talk-about-it",
    objective:
      "The student can describe a house rule for AI on homework and apply it to one real assignment type.",
    parentBriefing:
      "This sitting will surface what they already do. Stay calm. You are writing a family rule, not catching a criminal. Align with their school's policy if it exists; if the school is silent, WisdomForge's rule is the floor: no hidden AI homework.",
    hardEdges: [
      "Shame makes the next use more hidden, not less. Curiosity first.",
      "Accommodations (dyslexia, language learner) may use tools as access. That is disclosed use, not cheating. Name the difference.",
    ],
    reading: [
      {
        heading: "The two folders",
        body: "There is the work that trains you and the work that merely ships. A model is excellent at shipping. School, at its best, is trying to train you. When you paste a prompt and paste back an essay, the training did not happen. The grade becomes a costume. You will meet harder rooms later — a job, a lab, a person who needs you to actually know. Costumes fail there.",
      },
      {
        heading: "Disclosed versus hidden",
        body: "Using a model to quiz you, to explain a paragraph you already read, or to catch grammar after you wrote — that can be training, if you say you did it. Using a model to produce the thing that is supposed to prove you understood — that is hidden work. WisdomForge will not help you hide. The guide is built to hint and to refuse the finished product.",
      },
    ],
    bigIdea: "Hidden AI homework steals the training and keeps the costume. We do not wear it.",
    tryThis: [
      {
        title: "The family rule card",
        minutes: 14,
        steps: [
          "List three assignment types they actually get (math set, paragraph, slideshow, code, quiz).",
          "For each: TRY FIRST / HINT OK / MODEL NOT ALLOWED / MUST DISCLOSE.",
          "Talk About It: where is the temptation highest?",
          "Put the card where the homework happens.",
        ],
      },
    ],
    dinnerQuestion:
      "Which kind of homework is most tempting to hand to a model, and what will we do instead?",
    transfer: [
      { label: "English", note: "Authorship and citation. Same ethic as quoting a friend." },
      { label: "CS", note: "Copying code you cannot explain is a production outage waiting for a clock." },
    ],
    ifTheySay: [
      {
        heard: "Everyone does it. I'll be the only one working.",
        reply: "Then you will be one of the few who can still do the thing when the network is down or the adult in the room actually looks. That's the point of school, even when school forgets.",
      },
    ],
    integrity: "Disclose. If you cannot disclose it, you cannot use it.",
    aiLab: {
      setup: "Bring one real assignment type, not the live assignment if that would tempt shipping.",
      childDoes:
        "Ask the guide to quiz you on a concept. If it offers to write the paragraph, refuse and note that it offered.",
      evaluate: [
        "Is the family rule card specific, or vague 'be responsible'?",
        "Did they pick a real assignment type?",
        "Would they be willing to show a teacher the chat?",
      ],
    },
    hermes: {
      allowedTools: tools.young,
      pairingLine: "Currently reading WisdomForge lesson: No Hidden Homework.",
      prompt: hermesPrompt("young", "No Hidden Homework", "No Hidden Homework"),
    },
  },
  {
    slug: "try-first",
    subject: "ai",
    band: "emerging",
    unit: "Education in the Age of AI",
    number: 2,
    title: "Ghostwriter Ethics",
    dek: "An editor is allowed. A ghost is not. Learn the difference before a college honor code explains it the hard way.",
    durationMin: 42,
    ritual: "practice-reflect",
    objective:
      "The student can draw a bright line between tutor/editor and ghostwriter, and rewrite one prompt from ghost to tutor.",
    parentBriefing:
      "They are months from syllabi that will treat undisclosed generation as academic dishonesty. This sitting should produce a personal protocol they can actually keep at 11 p.m. If their school has a written AI policy, put it on the table.",
    hardEdges: [
      "College essays, scholarship essays, and recommendation drafting are high-stakes. Default to human-only drafts.",
      "Code: if they cannot explain every line they submit, they do not submit it.",
    ],
    reading: [
      {
        heading: "The Seneca problem, updated",
        body: "Seneca wrote about virtue from a palace. The gap between the letter and the life is the part that still teaches. You will be tempted to preach 'I use AI responsibly' while shipping work you could not reproduce on a blank page. That gap has a name in every honor code. The fix is not a sermon. It is a practice: blank page first, tool second, citation always, reproduction on demand.",
      },
    ],
    bigIdea:
      "If you could not redo it without the model, it was not yours. Start there, not with the policy PDF.",
    tryThis: [
      {
        title: "Prompt rewrite",
        minutes: 16,
        steps: [
          "Write the ghost prompt you would use at 11 p.m. on a real assignment (do not run it).",
          "Rewrite it as a tutor prompt: no drafted paragraphs, no full solutions, questions only.",
          "Practice: run only the tutor prompt on a past assignment you already finished.",
          "Reflect: what did the tutor actually add? What did you still have to know?",
        ],
      },
    ],
    dinnerQuestion:
      "What is the line you will not cross on a college application or a take-home exam?",
    transfer: [
      { label: "English", note: "Voice. A ghostwriter erases the thing colleges claim to want." },
      { label: "Philosophy", note: "Prohairesis: the choice is still yours even when the model is fast." },
    ],
    ifTheySay: [
      {
        heard: "I'll use it in the real world anyway, so school rules are fake.",
        reply: "The real world still has liability, clients, and people who can tell. School is where you learn to be the person who still knows. Keep the skill, then argue with the institution in daylight.",
      },
    ],
    integrity:
      "Cite the model the way you would cite a person who sat next to you. If that sentence looks bad on the page, the use was wrong.",
    aiLab: {
      setup: "Past work only. No live graded assignment.",
      childDoes: "Run the tutor prompt. Paste nothing from it into a document you would turn in.",
      evaluate: [
        "Could they explain the piece without the chat open?",
        "Did the rewrite actually remove the ghosting, or just hide it in nicer language?",
      ],
    },
    hermes: {
      allowedTools: tools.emerging,
      pairingLine: "Currently reading WisdomForge lesson: Ghostwriter Ethics.",
      prompt: hermesPrompt("emerging", "Ghostwriter Ethics", "Ghostwriter Ethics"),
    },
  },
  {
    slug: "try-first",
    subject: "ai",
    band: "adult",
    unit: "Education in the Age of AI",
    number: 2,
    title: "The House Rule",
    dek: "Write the policy the school did not. Make it specific enough to survive a Tuesday night.",
    durationMin: 30,
    ritual: "companion",
    objective:
      "The adult publishes a one-page house AI rule covering homework, images, friends' data, and disclosure.",
    parentBriefing:
      "Vague 'use it wisely' is how hidden homework happens. You want assignment-types, disclosure, and a sentence about what happens when the rule is broken that is not theater.",
    hardEdges: [
      "Include the other parent/caregiver or the rule will be arbitraged.",
      "Match IEP/504 needs as access, not as a loophole.",
    ],
    reading: [
      {
        heading: "Policies fail at the desk",
        body: "Schools are writing AI policies at the speed of panic. Some ban, some shrug, some copy a paragraph from a vendor. Your house is the only place that can be coherent this year. The WisdomForge floor: try first; hint second; no hidden homework; no other child's data; no unsupervised 5–10 use; disclose. Add your school's line on top, not instead.",
      },
    ],
    bigIdea: "A rule a tired parent cannot apply is not a rule. Short, typed, visible.",
    tryThis: [
      {
        title: "One-pager",
        minutes: 18,
        steps: [
          "Four assignment types. Four verbs: try, hint, ban, disclose.",
          "One sentence on images of the child.",
          "One sentence on what you will do when the rule is broken (loss of tool, not humiliation).",
          "Read it to the child in their band language this week.",
        ],
      },
    ],
    dinnerQuestion: "What is our house rule in one sentence a ten-year-old can repeat?",
    transfer: [{ label: "Civics", note: "Law that cannot be followed is decoration." }],
    ifTheySay: [
      {
        heard: "I don't understand the tools well enough to write a rule.",
        reply: "Then the rule is: not yet, and only together. Ignorance is a valid reason to keep tools off. It is not a reason to hope.",
      },
    ],
    integrity: "You model disclosure. If you used a model to write an email the child will see, you can say so.",
    aiLab: {
      setup: "Your adult guide may critique clarity of the one-pager. It does not write the policy.",
      childDoes: "Paste the draft. Ask: 'Where is this vague enough that a teenager will drive a truck through it?'",
      evaluate: ["Would you post this on the fridge? If not, it is still a wish."],
    },
    hermes: {
      allowedTools: tools.adult,
      pairingLine: "Adult operator sitting: The House Rule.",
      prompt: hermesPrompt("adult", "The House Rule", "The House Rule"),
    },
  },
];

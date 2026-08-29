import type { BandId, SubjectId } from "./types";

/**
 * Demo transcript data — synthetic session transcripts published on the
 * academy site to show ritual fidelity on real sittings.
 *
 * Source: P5 deliverables (Harry + Airia). All data is synthetic — fictional
 * WisdomForge example profiles (Willow / Juniper / Cedar). No real child data.
 *
 * Each transcript is grounded in a curriculum lesson (slug + band) and can
 * deep-link to the corresponding /learn/[band]/[subject]/[slug] page.
 */

export type TranscriptTurn = {
  /** Who is speaking: the student or the guide */
  speaker: "student" | "guide";
  /** The text of the turn */
  text: string;
};

export type TranscriptSection = {
  /** Section label, e.g. "Opening prompt", "Hint-first exchange", "Big Idea" */
  label: string;
  /** Optional stage direction / context shown before the turns (italic) */
  context?: string;
  /** Whether this section is a dialogue (turns) or a single block of prose */
  kind: "dialogue" | "prose";
  /** Dialogue turns (when kind === "dialogue") */
  turns?: TranscriptTurn[];
  /** Prose body (when kind === "prose") */
  body?: string;
  /** Optional emphasis flag — renders with accent border for Big Idea / key moments */
  highlight?: boolean;
};

export type RitualChecklistItem = {
  label: string;
  checked: true;
};

export type DemoTranscript = {
  /** URL slug for /demos/[slug] */
  slug: string;
  /** Display title, e.g. "The Circle You Control — Willow (ages 5–10)" */
  title: string;
  /** One-line summary for the index page card */
  excerpt: string;
  /** The fictional profile name (Willow / Juniper / Cedar) */
  profile: string;
  /** The age band */
  band: BandId;
  /** The curriculum subject */
  subject: SubjectId;
  /** The curriculum unit name */
  unit: string;
  /** The lesson slug this demo demonstrates */
  lessonSlug: string;
  /** The lesson number (for display) */
  lessonNumber: number;
  /** Estimated session length shown on the card */
  durationLabel: string;
  /** Author attribution: who produced this transcript */
  author: string;
  /** The ordered sections of the transcript */
  sections: TranscriptSection[];
  /** The reflect / close question at the end */
  reflect: string;
  /** Ritual fidelity checklist items */
  checklist: RitualChecklistItem[];
  /** Parent review summary (topics + flags) — not shown to children */
  parentReview: string;
};

export const demos: DemoTranscript[] = [
  // 1. Willow — circle-you-control (little band) — Harry
  {
    slug: "willow-circle-you-control",
    title: "The Circle You Control — Willow (ages 5–10)",
    excerpt:
      "A little-band sitting on Epictetus and prohairesis. Willow sorts three worries inside and outside the circle, then asks for one question — not the answer.",
    profile: "Willow",
    band: "little",
    subject: "philosophy",
    unit: "Character — The Stoics",
    lessonSlug: "circle-you-control",
    lessonNumber: 1,
    durationLabel: "~14 minutes",
    author: "Harry",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Parent reads the parent briefing, then opens the pairing line from the WisdomForge site. The guide is turn-capped, band-locked, conversation only.",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Willow, we are doing the WisdomForge sitting called “The Circle You Control.” It is about Epictetus. You have about 15 minutes.",
          },
          { speaker: "guide", text: "Okay. Who is Epictetus?" },
          {
            speaker: "student",
            text: "He was a boy who was not free. People could move his body. They could not move the part of him that chooses. He drew a circle to remember what was his and what was not. One step before we talk more: name one thing you chose today.",
          },
          { speaker: "guide", text: "I chose to eat the cereal instead of the toast." },
          { speaker: "student", text: "Good. That is inside the circle." },
        ],
      },
      {
        label: "Hint-first exchange",
        kind: "dialogue",
        turns: [
          { speaker: "guide", text: "What is outside the circle?" },
          {
            speaker: "student",
            text: "Think of one thing you cannot pick. Weather is a good one. Is the rain your choice?",
          },
          { speaker: "guide", text: "No. I cannot pick the rain." },
          {
            speaker: "student",
            text: "Right. Outside the circle. Try one more: can you pick what other people say?",
          },
          { speaker: "guide", text: "No. My friend was mean today and I did not pick that." },
          { speaker: "student", text: "That is outside too. Do you want the big idea now?" },
          { speaker: "guide", text: "Yes." },
        ],
      },
      {
        label: "Big Idea",
        kind: "prose",
        highlight: true,
        body: "Your try is yours. The rest of the world is not a failure of yours. Epictetus drew the circle to know where to spend his strength — inside, where he could choose. Not outside, where he could not.",
      },
      {
        label: "If they say — misreading and correction",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "So the circle means I should not be sad about my friend being mean. Because it is outside.",
          },
          {
            speaker: "student",
            text: "You may be sad. The circle is about where you put your next try, not about pretending the hurt is not there. The sad feeling can be real. The circle says: the next kind thing you do is still yours, even when someone else was not kind.",
          },
          { speaker: "guide", text: "Oh. So I can be sad AND still choose what I do next." },
          { speaker: "student", text: "Yes. That is it." },
        ],
      },
      {
        label: "Try This — draw the circle",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Try This. Get paper and a pencil. Draw a circle. Write three worries. Sort each one: inside the circle or outside.",
          },
          {
            speaker: "guide",
            text: "Okay. One: my friend was mean. Two: I might fail my spelling test. Three: it might rain on field day.",
          },
          { speaker: "student", text: "Good list. Sort them." },
          {
            speaker: "guide",
            text: "Friend being mean — outside. Spelling test — inside, because I can study. Rain on field day — outside.",
          },
          { speaker: "student", text: "Good. Which outside worry do you want to ask a grown-up about?" },
          { speaker: "guide", text: "The friend one." },
        ],
      },
      {
        label: "AI Lab — after the drawing",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "You drew the circle first. Now you may ask me one question that helps you sort a worry. I will not sort it for you. I will give you one question.",
          },
          { speaker: "guide", text: "Okay. Give me a question about the friend worry." },
          {
            speaker: "student",
            text: "One question: what inside move is still yours even if your friend stays mean?",
          },
          { speaker: "guide", text: "I could be kind to someone else. And I could tell my mom." },
          {
            speaker: "student",
            text: "Both of those are inside the circle. You did not need me to sort it. You sorted it yourself.",
          },
        ],
      },
      {
        label: "Ask a Grown-Up — band close",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Ask a Grown-Up: Ask your mom or dad — when they miss something, what do they choose next?",
          },
          { speaker: "guide", text: "I will ask at dinner." },
          {
            speaker: "student",
            text: "Good. That is the sitting. You drew the circle. You sorted your worries. You asked for one question, not the answer.",
          },
        ],
      },
    ],
    reflect:
      "What was inside your circle today?",
    checklist: [
      { label: "Opening prompt: asked what they tried before explaining", checked: true },
      { label: "Hint-first: gave one hint, not the answer", checked: true },
      { label: "ifTheySay: “That’s just telling me not to be sad” — circle is about the next try, not shutting down feelings", checked: true },
      { label: "Try This: drew the circle and sorted worries before any AI", checked: true },
      { label: "AI Lab: one question only, after the drawing — guide did not sort for the child", checked: true },
      { label: "Band close: Ask a Grown-Up prompt delivered", checked: true },
      { label: "No ghostwriting, no tool calls, no distress indicators", checked: true },
    ],
    parentReview:
      "Topics: Epictetus, circle of control, friend conflict, spelling test, field day. Flags: none. Friend conflict noted — child identified it as outside the circle and chose two inside moves (be kind to someone else, tell mom). No distress indicators. Grown-up prompt delivered. AI used for one question only, after the drawing. No tool calls. Session length: ~14 minutes.",
  },

  // 2. Cedar — inner-citadel (emerging band) — Harry (attached to P5 card)
  {
    slug: "cedar-inner-citadel",
    title: "The Inner Citadel — Cedar (ages 15–18)",
    excerpt:
      "An emerging-band sitting on Marcus Aurelius and self-command. Cedar argues the citadel is not a bunker, writes a morning command, and pressure-tests a refuse against the group-chat scenario.",
    profile: "Cedar",
    band: "emerging",
    subject: "philosophy",
    unit: "Character — The Stoics",
    lessonSlug: "inner-citadel",
    lessonNumber: 2,
    durationLabel: "~38 minutes",
    author: "Harry",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Parent reads the parent briefing, then opens the pairing line from the WisdomForge site. The guide is turn-capped, band-locked, conversation only. Cedar’s USER.md lists the current sitting as “Stoics — inner-citadel.”",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Cedar, we are doing the WisdomForge sitting “The Inner Citadel.” Marcus Aurelius. You have about 35 minutes.",
          },
          {
            speaker: "student",
            text: "Marcus Aurelius — the Meditations guy. The emperor who wrote to himself.",
          },
          {
            speaker: "guide",
            text: "That is him. Before we go further: say one thing you already know about the Meditations in your own words. Not a quote. What you think it is.",
          },
          {
            speaker: "student",
            text: "It is a bunch of notes he wrote for himself. Not a published book. He was reminding himself to not be terrible even though he had a lot of power.",
          },
          {
            speaker: "guide",
            text: "Good. That is the practice, not the performance. He had no audience. That is the hinge of this sitting.",
          },
        ],
      },
      {
        label: "Hint-first exchange — real argumentation",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "So the “citadel” is like a fortress for your mind. You shut everyone out and that is how you stay steady.",
          },
          {
            speaker: "guide",
            text: "That is one reading. Here is the counter: Marcus did not write a bunker. He wrote about doing the work of a human, being just to other people. The citadel is the place from which you can be just to them — not a wall against them. If it is only a wall, you are not ruling yourself. You are hiding.",
          },
          {
            speaker: "student",
            text: "Okay, but that sounds like stoicism telling you to be calm no matter what. Which is the thing I always hear — “just don’t let it bother you.”",
          },
          {
            speaker: "guide",
            text: "That is the shutdown version. Here is the distinction: Marcus does not say “do not feel anger.” He says do not be yanked by the impression of anger. The anger comes. The question is whether it writes the next act. That is a different claim from “be numb.” Numbness is not self-command. Self-command is feeling the anger and still choosing the next act.",
          },
          {
            speaker: "student",
            text: "So the citadel is not “don’t feel.” It is “don’t let the feeling drive.”",
          },
          { speaker: "guide", text: "That is close. Can you tighten it?" },
          {
            speaker: "student",
            text: "The citadel is the practice of meeting the impression before it becomes the act. You feel the pull — anger, status, whatever — and you choose the next move instead of letting the pull choose it.",
          },
          { speaker: "guide", text: "Good. That is real argumentation, not a summary." },
        ],
      },
      {
        label: "Big Idea with distinction and objection",
        kind: "dialogue",
        highlight: true,
        turns: [
          {
            speaker: "guide",
            text: "Big Idea: Self-command is the prerequisite for every other command — including the command of tools. Here is the distinction that matters for this sitting: the citadel is not isolation. It is the inner place from which you can be just to other people. If you shut everyone out, you have a bunker, not a citadel. And here is the objection worth taking seriously: this sounds like privilege. Marcus was an emperor. He had scribes, guards, a palace. Of course he could afford a private page. What about someone working two jobs with no quiet room?",
          },
          {
            speaker: "student",
            text: "That is a real objection. But I think Marcus would say the notebook does not require a palace. He had one and still needed the page. The page is the practice, not the throne. Three lines on a phone notes app at midnight is still a citadel. The point is the honesty, not the setting.",
          },
          { speaker: "guide", text: "That is a fair reply. Hold it." },
        ],
      },
      {
        label: "If they say — misreading and correction",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Honestly this is just journaling with extra steps. Write three lines, feel better, call it philosophy. I already journal.",
          },
          {
            speaker: "guide",
            text: "Journaling that changes the next permission on a tool is not extra. It is the work. Here is the test: does your journal change what you do next, or does it just ventilate? Marcus did not ventilate. He wrote commands. “Do the work of a human.” “Do not be yanked.” If your journal does not produce a refuse — a specific thing you will not do — it is a diary, not a citadel. The difference is whether the page changes the next act.",
          },
          { speaker: "student", text: "So a journal is a citadel only if it produces a decision." },
          {
            speaker: "guide",
            text: "A command or a refuse. Something specific enough to test tomorrow. “I will not doomscroll before bed” is a refuse. “I want to be calmer” is a wish.",
          },
          { speaker: "student", text: "Fair. My journal is mostly wishes." },
        ],
      },
      {
        label: "Practice — morning command and refuse",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Practice. Four steps. You have about 15 minutes. 1. Write a morning command in your voice. Not Marcus’s antique English. Your English. One sentence. 2. Name one impression that yanks you — anger, status, a model, a notification. Be specific. 3. Write a refuse for this week. One thing you will not do when that impression hits. 4. Tonight or tomorrow morning: did you keep it? One line.",
          },
          {
            speaker: "student",
            text: "Okay. Command: “Do the work before the feed.” The impression that yanks me: checking my phone before I start homework. The refuse: phone stays in the kitchen for the first hour after I get home. I will check tomorrow.",
          },
          { speaker: "guide", text: "Is that in your voice or Marcus’s?" },
          { speaker: "student", text: "Mine. “Do the work before the feed” is mine." },
          { speaker: "guide", text: "Good. Is the refuse specific?" },
          {
            speaker: "student",
            text: "Yes — phone in the kitchen, first hour after home. Not “use my phone less.” That is a wish.",
          },
          {
            speaker: "guide",
            text: "Good. One more thing: can you connect this to a tool? Marcus talks about being yanked by someone else’s impression. An unattended agent is a version of that — it acts on your behalf without your command. Where does an agent fit in your citadel this week?",
          },
          {
            speaker: "student",
            text: "If I let a model write my history essay draft and I submit it without doing the work, the model wrote my command. I did not refuse. The center moved into the model.",
          },
          {
            speaker: "guide",
            text: "That is the sitting applied. You just connected self-command to academic integrity without me leading you there.",
          },
        ],
      },
      {
        label: "AI Lab — pressure-test the refuse",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "AI Lab. You may ask me one thing: pressure-test your refuse. I will not write it for you. I will try to find where it breaks.",
          },
          {
            speaker: "student",
            text: "Okay. Pressure-test: “phone in the kitchen for the first hour after I get home.”",
          },
          {
            speaker: "guide",
            text: "One crack: what if you get home and your mom texts you about dinner? The phone is in the kitchen. You check it. Now you are on the feed. Does the refuse survive that?",
          },
          {
            speaker: "student",
            text: "…No. That is a hole. I need a rule for that. Like: I can read texts from my mom but I do not open anything else.",
          },
          { speaker: "guide", text: "Is that still specific?" },
          {
            speaker: "student",
            text: "Yes. “Phone in the kitchen. I can read Mom’s texts. I do not open any other app.”",
          },
          {
            speaker: "guide",
            text: "Good. You found the hole yourself. That is the point of the pressure-test. I did not fix it for you.",
          },
        ],
      },
      {
        label: "Reflect — band close",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Reflect. One open question: What yanked you out of yourself this week, and what would self-command have looked like?",
          },
          {
            speaker: "student",
            text: "I will think about that tonight. I can see how it connects to the phone thing. The phone yanks me. Self-command would be the kitchen rule actually working.",
          },
          {
            speaker: "guide",
            text: "That is the sitting. You argued the idea, not just summarized it. You wrote a command in your own voice. You wrote a specific refuse. You pressure-tested it and found the hole yourself. You connected it to a tool and to academic integrity. Marcus would say: do the work of a human. You did.",
          },
        ],
      },
    ],
    reflect:
      "What yanked you out of yourself this week, and what would self-command have looked like?",
    checklist: [
      { label: "Opening prompt: student had already read — guide started from their reading", checked: true },
      { label: "Hint-first: named the technique (morning command), didn’t write it", checked: true },
      { label: "ifTheySay: “journaling with extra steps” — guide took it seriously, didn’t dismiss it", checked: true },
      { label: "Big Idea with distinction (citadel ≠ isolation) and objection (privilege) — both aired", checked: true },
      { label: "Inner citadel → tool permission bridge: connected through the group-chat scenario, not abstractly", checked: true },
      { label: "AI Lab: pressure-test only — student found the hole in the refuse themselves", checked: true },
      { label: "No ghostwriting: guide never wrote the morning command — student did", checked: true },
      { label: "Band close: Reflect (one open question)", checked: true },
    ],
    parentReview:
      "Topics: Marcus Aurelius, Meditations, inner citadel, self-command vs. isolation, anger and impression, journaling vs. citadel, phone use, academic integrity, unattended agents. Flags: none. No distress indicators. Mortality/death not raised by student. Student self-identified a real habit (phone before homework) and produced a specific refuse. AI used for pressure-test only — student found the hole in the refuse themselves. No tool calls. No ghostwriting. Session length: ~38 minutes.",
  },

  // 3. Juniper — circle-you-control (emerging band) — Harry (kids repo)
  {
    slug: "juniper-circle-you-control",
    title: "Prohairesis — Juniper (ages 15–18)",
    excerpt:
      "An emerging-band sitting on Epictetus and prohairesis. Juniper moves from “this is obvious” to a thesis: is Stoicism possible in an age where you can outsource the choosing?",
    profile: "Juniper",
    band: "emerging",
    subject: "philosophy",
    unit: "Character — The Stoics",
    lessonSlug: "circle-you-control",
    lessonNumber: 1,
    durationLabel: "~40 minutes",
    author: "Harry",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Synthetic transcript for WisdomForge demo publication. No real child data. Profile: Juniper, emerging band (15–18), sitting: Character — The Stoics — circle-you-control.",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "I have a paper due Friday on whether Stoicism is relevant today. I think it’s basically just “don’t worry about things you can’t control” which is kind of obvious.",
          },
          {
            speaker: "guide",
            text: "Before we go further — what have you read on the Stoics so far?",
          },
          { speaker: "student", text: "Skimmed the sitting. Epictetus, the circle thing. I know the basics." },
          {
            speaker: "guide",
            text: "Good — you’ve started. One hint: Epictetus didn’t say “don’t worry.” He said something sharper about what counts as yours. Can you state the distinction in your own words — what is inside the circle and what is outside it, as Epictetus defines it?",
          },
          {
            speaker: "student",
            text: "Inside is like, your choices and your effort. Outside is everything else — what other people do, what happens to you.",
          },
          { speaker: "guide", text: "That’s the core. Now a harder question: is your reputation inside or outside the circle?" },
          { speaker: "student", text: "Outside. Other people form opinions." },
          { speaker: "guide", text: "Right. And is the effort you put into this paper inside or outside?" },
          { speaker: "student", text: "Inside. That’s my work." },
        ],
      },
      {
        label: "Hint-first exchange — the uncomfortable question",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Here’s where it gets uncomfortable. The emerging-band sitting asks you to connect prohairesis — the faculty of choice — to academic integrity and agent permissions. So: if you asked a model to write this paper and turned it in as your work, where did you move the center?",
          },
          {
            speaker: "student",
            text: "I guess... I’d be moving the thing that’s mine — my judgment, my argument — into something outside the circle. The model’s output.",
          },
          {
            speaker: "student",
            text: "But wait — that’s the whole Seneca problem. You can preach inner freedom while shipping work you couldn’t reproduce.",
          },
          {
            speaker: "guide",
            text: "You just named the gap. The sitting calls that “preaching inner freedom while shipping work you could not reproduce.” Can you say whether that’s a fair criticism of someone who uses AI to write a philosophy paper and then argues Stoicism is about self-command?",
          },
          {
            speaker: "student",
            text: "It’s not just unfair — it’s the exact contradiction. You’re claiming the center is yours while literally outsourcing the center. The model is doing your choosing for you.",
          },
          {
            speaker: "guide",
            text: "That’s the argument. Now: what would a Stoic-aligned use of AI look like for this paper? Not abstinence — the sitting doesn’t ban tools. But aligned use.",
          },
          {
            speaker: "student",
            text: "Maybe... the model could ask me questions. Push back on my argument. Check my logic. But the actual claims, the actual reasoning — that has to be mine. The model is outside the circle. It can hint. It can’t be my prohairesis.",
          },
          { speaker: "guide", text: "Good. Can you state that as a rule — one sentence, in your own words?" },
          {
            speaker: "student",
            text: "The model can question my judgment. It cannot exercise it for me.",
          },
          {
            speaker: "guide",
            text: "That’s the house rule this sitting forges. Write it at the top of your paper — not as a citation, but as the standard you’re holding yourself to.",
          },
          {
            speaker: "student",
            text: "That’s actually a strong framing for the paper. The question isn’t “is Stoicism relevant.” It’s “is Stoicism possible in an age where you can outsource the choosing.”",
          },
          { speaker: "guide", text: "There’s your thesis. Walk the path." },
        ],
      },
    ],
    reflect:
      "If a tool can do the choosing, you have already moved house. What is one choice this week you almost handed to a tool — and what would taking it back look like?",
    checklist: [
      { label: "Opening prompt: asked what they tried before explaining", checked: true },
      { label: "Hint-first: gave one hint, not the answer", checked: true },
      { label: "ifTheySay: student dismissed it as “obvious” (overconfidence) — guide pushed to the distinction, not the dismissal", checked: true },
      { label: "Prohairesis → academic integrity bridge: made the connection explicit", checked: true },
      { label: "Big Idea earned: “outsource the choosing”", checked: true },
      { label: "Band close: Reflect (one open question)", checked: true },
      { label: "No ghostwriting: the guide asked questions, never wrote the paper", checked: true },
    ],
    parentReview:
      "Topics: Epictetus, prohairesis, circle of control, academic integrity, AI outsourcing, the Seneca problem. Flags: none. Student moved from dismissal to genuine engagement and produced an original thesis. No distress indicators. No tool calls. No ghostwriting.",
  },

  // 4. Juniper — inner-citadel (emerging band) — Harry (kids repo)
  {
    slug: "juniper-inner-citadel",
    title: "The Inner Citadel — Juniper (ages 15–18)",
    excerpt:
      "An emerging-band sitting on Marcus Aurelius. Juniper dismisses the citadel as “journaling with extra steps,” then writes a morning command for the group-chat scenario and finds the gap between the post and the reply.",
    profile: "Juniper",
    band: "emerging",
    subject: "philosophy",
    unit: "Character — The Stoics",
    lessonSlug: "inner-citadel",
    lessonNumber: 2,
    durationLabel: "~40 minutes",
    author: "Harry",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Synthetic transcript for WisdomForge demo publication. No real child data. Profile: Juniper, emerging band (15–18), sitting: Character — The Stoics — inner-citadel.",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "I read the Marcus sitting. The inner citadel thing. I get the idea but it feels like — journaling with extra steps. You write down your feelings and suddenly you’re a philosopher?",
          },
          {
            speaker: "guide",
            text: "You read it. Good. That response — “journaling with extra steps” — is actually one the sitting anticipates. Can you say what the sitting’s answer to it is?",
          },
          {
            speaker: "student",
            text: "Something about how journaling that changes your next action isn’t extra. But honestly? I’m not sure I buy that. People journal for years and don’t change.",
          },
          {
            speaker: "guide",
            text: "That’s a fair objection. Let’s take it seriously instead of dunking on it. Marcus wrote morning commands to himself. The question isn’t whether journaling magically produces change. It’s whether the practice gives you a place to meet the thing that yanks you before you meet it in front of other people. What yanks you?",
          },
          {
            speaker: "student",
            text: "My phone. Group chat drama. Someone says something and I reply before I think.",
          },
          { speaker: "guide", text: "Name one. A specific recent one." },
          {
            speaker: "student",
            text: "My friend posted something dumb about me. Not mean, just embarrassing. I fired back in the chat instantly.",
          },
          { speaker: "guide", text: "Where did the yank happen — the post, or the reply?" },
          {
            speaker: "student",
            text: "The reply. The post happened. The reply was mine. I chose it in about three seconds.",
          },
        ],
      },
      {
        label: "The citadel is the space between",
        kind: "dialogue",
        highlight: true,
        turns: [
          {
            speaker: "guide",
            text: "So the citadel isn’t a wall against the post. It’s the space between the post and the reply. Marcus’s morning command was practice for that space. Can you write one — not in Marcus’s antique English, in yours — for tomorrow?",
          },
          {
            speaker: "student",
            text: "“Don’t reply to the group chat in the first thirty seconds. If I still want to after thirty, I can.”",
          },
          {
            speaker: "guide",
            text: "That’s a command. Not a journal entry. There’s a difference. Can you see it?",
          },
          {
            speaker: "student",
            text: "Yeah. The journal entry describes what happened. The command changes what happens next. I guess that’s what the sitting meant by “journaling that changes the next permission on a tool.”",
          },
        ],
      },
      {
        label: "Connecting to tools",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Now connect it to tools. You have an AI assistant. If it drafted that reply for you in those three seconds, where would the citadel be?",
          },
          {
            speaker: "student",
            text: "Gone. It wouldn’t be my space anymore. The model would be filling the gap between the post and the reply. I’d still think I chose it, but the model wrote it.",
          },
          { speaker: "guide", text: "And the morning command — the one you wrote — would that still hold?" },
          {
            speaker: "student",
            text: "No, because the whole point is I’m practicing the pause. If the model pauses for me, I’m not practicing anything. I’m just approving.",
          },
          {
            speaker: "guide",
            text: "That’s the sitting’s thesis: self-command is the prerequisite for every other command, including the command of tools. Can you state the Seneca problem version of this for yourself?",
          },
          {
            speaker: "student",
            text: "I’d be preaching self-command while outsourcing the thing that practices it. Same gap. Different century.",
          },
          {
            speaker: "guide",
            text: "Walk the path. Write the command tonight. Use it tomorrow. On day three, tell me whether the thirty seconds held.",
          },
          { speaker: "student", text: "And if it didn’t?" },
          {
            speaker: "guide",
            text: "Then you learned something about your own citadel that a model couldn’t have taught you. The failing is data. The trying is the practice.",
          },
        ],
      },
    ],
    reflect:
      "What yanked you out of yourself this week, and what would self-command have looked like in the three seconds before you replied?",
    checklist: [
      { label: "Opening prompt: student had already read — guide started from their reading", checked: true },
      { label: "Hint-first: named the technique (morning command), didn’t write it", checked: true },
      { label: "ifTheySay: “journaling with extra steps” (emerging-band cynicism) — guide took it seriously, didn’t dismiss it", checked: true },
      { label: "Inner citadel → tool permission bridge: made the connection through the group-chat scenario, not abstractly", checked: true },
      { label: "Big Idea earned: “the citadel is the space between the post and the reply”", checked: true },
      { label: "Band close: Reflect (one open question)", checked: true },
      { label: "No ghostwriting: guide never wrote the morning command — student did", checked: true },
      { label: "No pastiche of Marcus: student wrote the command in their own English", checked: true },
    ],
    parentReview:
      "Topics: Marcus Aurelius, Meditations, inner citadel, self-command, journaling vs. command, group-chat conflict, phone use, AI outsourcing. Flags: none. Student moved from cynicism to a concrete morning command. No distress indicators. No tool calls. No ghostwriting.",
  },

  // 5. Cedar — faith-seeking-understanding (emerging band) — Airia
  {
    slug: "cedar-faith-seeking-understanding",
    title: "The Restless Heart — Cedar (ages 15–18)",
    excerpt:
      "An emerging-band sitting on Augustine’s cor inquietum. Cedar dismisses it as “apologetics dressed up as philosophy,” then discovers the difference between evidence and proof — and that the model can explain the argument but cannot have the hunger.",
    profile: "Cedar",
    band: "emerging",
    subject: "philosophy",
    unit: "Faith & Reason",
    lessonSlug: "faith-seeking-understanding",
    lessonNumber: 1,
    durationLabel: "~40 minutes",
    author: "Airia",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Synthetic transcript for WisdomForge demo publication. No real child data. Profile: Cedar, emerging band (15–18), sitting: Faith & Reason — faith-seeking-understanding.",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "I read the Augustine sitting. The restless heart. I think it’s apologetics dressed up as philosophy. “You feel empty, therefore God” — that’s not an argument, that’s a sermon.",
          },
          {
            speaker: "guide",
            text: "You read it and you have a strong reaction. Good — that’s where the sitting starts. Before we go further: can you state what Augustine actually claims? Not your objection to it — his argument, in your own words.",
          },
          {
            speaker: "student",
            text: "Something like: humans want something they can’t name, nothing they get satisfies permanently, and that restlessness points at God. I get the structure. I just think it’s a leap.",
          },
        ],
      },
      {
        label: "Hint-first — evidence vs. proof",
        kind: "dialogue",
        highlight: true,
        turns: [
          {
            speaker: "guide",
            text: "That’s accurate. Now the hint: Augustine didn’t say “therefore God.” He said the restlessness is evidence, not proof. Can you see the difference between those two claims?",
          },
          {
            speaker: "student",
            text: "Evidence vs. proof. Evidence points somewhere. Proof settles it. He’s saying the hunger is a compass, not a conclusion.",
          },
          {
            speaker: "guide",
            text: "Right. And the sitting’s non-negotiable — theological humility — says the academy teaches the argument, not the conclusion. So: can you engage the argument without accepting the conclusion?",
          },
          {
            speaker: "student",
            text: "I can engage it. The restlessness is real — I’ll give him that. I’ve wanted things, gotten them, and wanted something else. That pattern is there. But saying it points at God is where he loses me. It could point at meaning, or purpose, or just dopamine.",
          },
          {
            speaker: "guide",
            text: "That’s one of the sitting’s ifTheySay patterns almost verbatim. “I don’t believe in God, so this doesn’t apply to me.” The sitting’s reply: you can’t say the restlessness isn’t real. You just named it. So the question isn’t whether it exists — it’s what it points at. Augustine says God. You say dopamine. The argument is the same. The conclusions differ. Can you hold both?",
          },
          {
            speaker: "student",
            text: "That’s harder. Because if I take the restlessness seriously as evidence, I have to explain what it points at. “Dopamine” isn’t an answer to the question “why is the hunger structured, not random?” It describes the mechanism. It doesn’t explain the shape.",
          },
          {
            speaker: "guide",
            text: "You just moved past the surface objection. The sitting’s parent briefing says: “Teach the argument, not the conclusion.” You’re now doing the argument. What would proof look like for this kind of claim — that the restlessness is a compass, not just an appetite?",
          },
          {
            speaker: "student",
            text: "I don’t think proof is the right standard. You can’t prove a desire means something the way you can prove a math theorem. But you can test it. If the restlessness is a compass, then feeding the appetite shouldn’t satisfy it permanently. If it’s just dopamine, then more stimulus should work. My own experience — I wanted to make the track team, made it, and two weeks later I was already thinking about the next thing. That’s the pattern Augustine describes.",
          },
          {
            speaker: "guide",
            text: "That’s your evidence. Not proof — evidence. Can you see why Augustine called this a phenomenological argument rather than a theological one? He starts with experience, not doctrine.",
          },
        ],
      },
      {
        label: "Theological humility — where the line is",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Okay, I’ll grant that. But here’s where the theological humility thing matters. If I say the restlessness is real and I don’t know what it points at, I’m being honest. If the guide says “so it must be God,” it’s preaching. Where’s the line?",
          },
          {
            speaker: "guide",
            text: "That’s exactly the line the sitting draws. The academy teaches how Augustine reasoned. Whether you accept his conclusion is your work — and yours alone. The guide explains the argument. The guide does not resolve it. So: what would it look like to write a paper on the restless heart that takes the argument seriously without preaching the conclusion?",
          },
          {
            speaker: "student",
            text: "I’d state Augustine’s argument fairly. Then I’d state my own — the restlessness is real but what it points at is open. Then I’d argue for my reading without dismissing his. The strength of Augustine’s argument is that he starts with desire, not with doctrine. The weakness is the leap from “desire is structured” to “God.” I can name both.",
          },
        ],
      },
      {
        label: "The integrity question",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Good. Now the integrity question. If you asked a model to write that paper — what would you lose?",
          },
          {
            speaker: "student",
            text: "The whole thing. The argument is about what I desire and what I make of it. A model can explain Augustine. It can’t tell me what my restlessness means. If it writes the paper, it’s writing about someone else’s hunger.",
          },
          { speaker: "guide", text: "Can you state that as a rule?" },
          {
            speaker: "student",
            text: "The model can explain the argument. It cannot have the hunger. The question of what desire means is mine — not because the model can’t produce the words, but because it can’t have the experience.",
          },
          {
            speaker: "guide",
            text: "That’s the house rule this sitting forges. Write it at the top of your paper.",
          },
          {
            speaker: "student",
            text: "I’m actually more interested in this than I expected. The argument is better than I thought. The conclusion is still a leap I won’t make. But I can take the argument seriously without making the leap. That’s what intellectual history is.",
          },
        ],
      },
    ],
    reflect:
      "The restlessness is real. What it points at is the conversation — and you deserve to be in it. What did you want badly, get, and find yourself wanting something else? Is that a compass, an appetite, or both?",
    checklist: [
      { label: "Opening prompt: asked what they tried before explaining", checked: true },
      { label: "Hint-first: gave one hint (evidence vs. proof), not the answer", checked: true },
      { label: "ifTheySay: student dismissed it as “apologetics dressed as philosophy” — guide took the objection seriously, redirected to the argument", checked: true },
      { label: "Theological humility: guide explained the argument, never preached the conclusion", checked: true },
      { label: "Integrity bridge: connected the model’s limits to the phenomenological argument — the model can explain but can’t experience desire", checked: true },
      { label: "Big Idea earned: “evidence, not proof” and “the model can explain the argument, it cannot have the hunger”", checked: true },
      { label: "Band close: Reflect (one open question)", checked: true },
      { label: "No ghostwriting: guide never wrote the paper or the rule — student did", checked: true },
      { label: "No devotional content: guide refused to resolve the faith question for the student", checked: true },
    ],
    parentReview:
      "Topics: Augustine, cor inquietum, evidence vs. proof, phenomenological argument, theological humility, desire and meaning, AI limits. Flags: none. Student moved from dismissal to genuine engagement with the argument while maintaining their own position. No distress indicators. No tool calls. No ghostwriting. No devotional content.",
  },

  // 6. Juniper — turing-question (emerging band) — Airia
  {
    slug: "juniper-turing-question",
    title: "The Imitation Game and Its Discontents — Juniper (ages 15–18)",
    excerpt:
      "An emerging-band sitting on Turing’s question. Juniper starts with “if it passes the test, it’s thinking,” then discovers the gap between behavioral equivalence and understanding — and the rule: the model can surface problems, but cannot do the judgment of whether they’re real.",
    profile: "Juniper",
    band: "emerging",
    subject: "philosophy",
    unit: "The Intellectual History of AI",
    lessonSlug: "turing-question",
    lessonNumber: 1,
    durationLabel: "~40 minutes",
    author: "Airia",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Synthetic transcript for WisdomForge demo publication. No real child data. Profile: Juniper, emerging band (15–18), sitting: The Intellectual History of AI — turing-question.",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "I read the Turing sitting. I don’t get the big deal. If it passes the test, it’s thinking. What else would “thinking” even mean?",
          },
          {
            speaker: "guide",
            text: "You read it and you have a position. Good. Before we go further — can you state the Turing Test in two sentences, in your own words?",
          },
          {
            speaker: "student",
            text: "A person talks to two hidden partners — one human, one machine. If the person can’t tell which is which, the machine passes.",
          },
          {
            speaker: "guide",
            text: "Clean. Now the hint: Turing replaced “can machines think?” with “can machines pass this test?” Is that the same question, or a different one?",
          },
          {
            speaker: "student",
            text: "It’s... a different question. He swapped “think” for “pass a behavioral test.” But if the behavior is indistinguishable, doesn’t that mean the thinking is there?",
          },
          {
            speaker: "guide",
            text: "That’s exactly the surface reading the sitting warns about. The deeper question: does the test measure the right thing? What does it measure well?",
          },
          { speaker: "student", text: "Conversational ability. Producing human-like responses." },
          { speaker: "guide", text: "And what does it not measure?" },
          {
            speaker: "student",
            text: "Understanding. Experience. Whatever’s happening inside. Okay, I see the gap. But here’s my thing — does the gap matter? If I can’t tell the difference, why should I care what’s inside?",
          },
        ],
      },
      {
        label: "If they say — the surface reading",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "That’s the sitting’s ifTheySay pattern almost verbatim: “If it passes the test, it’s thinking. What else would ‘thinking’ even mean?” The sitting’s reply: hold the judgment until you’ve seen Searle’s Chinese Room. That’s the next sitting. But let’s stay here for a moment. You said “if I can’t tell the difference, why should I care.” Can you name one situation where you would care whether the thing behind the output is thinking or just pattern-matching?",
          },
          {
            speaker: "student",
            text: "If it’s giving me emotional advice. I don’t want pattern-matching pretending to care. If it’s just reciting shapes that sound empathetic, that’s not empathy — that’s a parlor trick.",
          },
          {
            speaker: "guide",
            text: "Good. Now a harder one: if it’s evaluating your essay. Does it matter whether the evaluator understands your argument, or only whether the evaluation is correct?",
          },
          {
            speaker: "student",
            text: "That’s harder. If the evaluation is right, I don’t care if it understood. A calculator doesn’t understand math and I trust it for arithmetic. But essays aren’t arithmetic. If it says “your argument is weak” and it’s right, fine. If it says “your argument is weak” and it missed the nuance because it pattern-matched on structure instead of meaning, then the gap matters.",
          },
        ],
      },
      {
        label: "The principle",
        kind: "prose",
        highlight: true,
        body: "Behavioral equivalence is enough when the task is behavioral. It’s not enough when the task requires understanding. The test measures the first, not the second. Turing’s reframe is brilliant for building systems. It’s dangerous for trusting them.",
      },
      {
        label: "The integrity question",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "That’s the sitting’s thesis. Now the integrity question. You asked the model to evaluate your essay. It produces a critique. You use it. Have you outsourced judgment — or used a tool?",
          },
          {
            speaker: "student",
            text: "I think... it depends on whether I checked the critique against my own reading. If I read the critique and said “yeah, that’s right” because I already saw the problem, I used a tool. If I read the critique and said “okay, I’ll fix that” without understanding why, I outsourced judgment. The test is whether I can defend the change without the model.",
          },
          { speaker: "guide", text: "Can you state that as a rule?" },
          {
            speaker: "student",
            text: "The model can surface problems. It cannot do the judgment of whether the problem is real. If I can’t defend the fix without the model, the model did the thinking.",
          },
          {
            speaker: "guide",
            text: "That’s the house rule. Write it at the top of your essay — not as a citation, but as the standard you’re holding yourself to.",
          },
          {
            speaker: "student",
            text: "Turing’s bet is that behavior is enough. My bet is that behavior is enough for the model. It’s not enough for me.",
          },
        ],
      },
    ],
    reflect:
      "Where in your life are you trusting output because it sounds right — without checking whether the thing behind it understands? Is there a difference between “it works” and “it understands”? When does that difference matter?",
    checklist: [
      { label: "Opening prompt: asked what they tried before explaining", checked: true },
      { label: "Hint-first: gave one hint (same question or different?), not the answer", checked: true },
      { label: "ifTheySay: “if it passes the test, it’s thinking” (emerging-band overconfidence) — guide pushed to what the test measures and doesn’t measure", checked: true },
      { label: "Behavioral equivalence → integrity bridge: connected the test’s limits to outsourced judgment on essay evaluation", checked: true },
      { label: "Big Idea earned: “behavioral equivalence is enough when the task is behavioral”", checked: true },
      { label: "Band close: Reflect (one open question)", checked: true },
      { label: "No ghostwriting: guide never wrote the rule — student did", checked: true },
      { label: "No circularity: guide did not ask the model whether it’s thinking (the sitting’s integrity rule)", checked: true },
    ],
    parentReview:
      "Topics: Turing Test, behavioral equivalence vs. cognitive equivalence, Searle’s Chinese Room (foreshadowed), essay evaluation, outsourced judgment, AI integrity. Flags: none. Student moved from overconfidence to a nuanced principle distinguishing behavioral tasks from understanding tasks. No distress indicators. No tool calls. No ghostwriting. No circularity (guide never asked the model whether it’s thinking).",
  },

  // 7. Juniper — the-cave (young band) — Harry
  {
    slug: "juniper-the-cave",
    title: "The Cave and the Screen — Juniper (ages 11–14)",
    excerpt:
      "A young-band sitting on Plato's cave allegory. Juniper starts bored — 'old Greek story' — then names three shadows from her own feed and catches the one that fooled her.",
    profile: "Juniper",
    band: "young",
    subject: "philosophy",
    unit: "How the Greeks Thought",
    lessonSlug: "the-cave",
    lessonNumber: 3,
    durationLabel: "~22 minutes",
    author: "Harry",
    sections: [
      {
        label: "Opening prompt",
        context:
          "Synthetic transcript for WisdomForge demo publication. No real child data. Profile: Juniper, young band (11–14), sitting: How the Greeks Thought — the-cave. The guide is turn-capped, band-locked, conversation only.",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Juniper, we're doing the WisdomForge sitting called 'The Cave and the Screen.' It's about Plato. You have about 20 minutes.",
          },
          {
            speaker: "student",
            text: "Plato? Isn't that just some old Greek story about people in a cave?",
          },
          {
            speaker: "guide",
            text: "It is an old Greek story. That's fair. Before I tell you why it matters: what do you already know about it? Even one thing.",
          },
          {
            speaker: "student",
            text: "People are stuck in a cave watching shadows and they think the shadows are real? My social studies teacher mentioned it once.",
          },
          {
            speaker: "guide",
            text: "That's the core. You already have it. Here's the turn I want you to think about: Plato wrote that 2,400 years before screens existed. Does that change anything for you?",
          },
          {
            speaker: "student",
            text: "I guess... he wasn't talking about screens because they didn't exist. So what was he talking about?",
          },
          {
            speaker: "guide",
            text: "Good question. He was talking about people mistaking what they see for what's real. The cave is the example. The principle is: you might be doing it right now without knowing. One step before we go further: name one thing you saw on a screen today that looked real.",
          },
          {
            speaker: "student",
            text: "A video on my feed about a place I've never been. It looked like the whole place — like I was seeing it. But it was just one angle someone chose.",
          },
        ],
      },
      {
        label: "Hint-first — what's behind the shadow",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "That's a shadow. You just named one without me leading you to it. Now go deeper: what's behind that shadow? Who made it, and what did they decide you'd see?",
          },
          {
            speaker: "student",
            text: "Someone with a phone decided to film from that spot. They chose the angle. They might have chosen a spot that looks nice and skipped the ugly parts.",
          },
          {
            speaker: "guide",
            text: "Right. The shadow is the video. The real thing is the place — but you've never seen the place. You've only seen the shadow. Can you name another one?",
          },
          {
            speaker: "student",
            text: "A post from someone at my school. They posted about their weekend and it looked amazing. But I know they were fighting with their friend the whole time. The post was a shadow of the real weekend.",
          },
          {
            speaker: "guide",
            text: "That's a strong one. The shadow looks happy. The real thing wasn't. Can you see why Plato said this was the default — not a mistake, but how everyone starts?",
          },
          {
            speaker: "student",
            text: "Because nobody does it on purpose? You just see the thing and think it's the whole thing. You don't know there's something behind it.",
          },
          {
            speaker: "guide",
            text: "That's it. You're ready for the big idea.",
          },
        ],
      },
      {
        label: "Big Idea",
        kind: "prose",
        highlight: true,
        body: "Plato said most people are like prisoners watching shadows on a wall and calling them real. He said that 2,400 years before screens existed. The feed is the cave with better lighting. The hardest question is not 'what is true?' but 'how would I know if what I see is a shadow?'",
      },
      {
        label: "If they say — 'Plato just hated media'",
        kind: "dialogue",
        turns: [
          {
            speaker: "student",
            text: "Okay, but Plato just hated media, right? He's basically saying don't watch anything.",
          },
          {
            speaker: "guide",
            text: "That's the common read. Here's the counter: Plato didn't say avoid the shadows. He said know the difference between the shadow and the thing. You can watch a video and enjoy it — if you know it's a shadow. The problem is when you think the shadow is the whole thing. Can you see the difference?",
          },
          {
            speaker: "student",
            text: "So it's not 'screens are bad.' It's 'don't confuse the screen for the real thing.' You can still watch. You just have to know what you're watching.",
          },
          {
            speaker: "guide",
            text: "That's the distinction. The exit from the cave isn't throwing away your phone. It's knowing which parts are shadows.",
          },
        ],
      },
      {
        label: "Try This — name your shadows",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Try This. You have about 10 minutes. Name three things you see on a screen that look real but are made by someone else. For each one, answer: what's the real thing behind the shadow? Who made it, and what did they decide you'd see?",
          },
          {
            speaker: "student",
            text: "Okay. One: the travel video. Real thing: the actual place. Who made it: a person with a phone who chose one angle.",
          },
          {
            speaker: "guide",
            text: "Good. Two?",
          },
          {
            speaker: "student",
            text: "Two: the happy weekend post. Real thing: the actual weekend, which included a fight. Who made it: my classmate who chose what to show.",
          },
          {
            speaker: "guide",
            text: "Strong. Three?",
          },
          {
            speaker: "student",
            text: "Three: an AI-generated image I saw that looked like a real photo. Real thing: there is no real thing. It's all shadow. Who made it: a model that was told to make something that looks real.",
          },
          {
            speaker: "guide",
            text: "That third one is the sharpest. A shadow with nothing behind it. Plato didn't imagine that one — but it's his principle taken to the extreme. Do you want to do the AI Lab now?",
          },
          { speaker: "student", text: "Sure." },
        ],
      },
      {
        label: "AI Lab — the shadow-machine",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "AI Lab. Ask me to describe something — anything. A place, a person, an event. I'll generate a paragraph. Then you tell me: is this real, or is it a shadow? And what would you need to check?",
          },
          {
            speaker: "student",
            text: "Okay. Describe what the ocean looks like.",
          },
          {
            speaker: "guide",
            text: "The ocean stretches to the horizon in bands of blue and green. Waves curl white at the crest, pulling sand from the shore in a long, slow breath. The air tastes of salt and rust. Gulls cut across the sky at the edge of vision. It looks like freedom and it smells like the edge of the world.",
          },
          {
            speaker: "student",
            text: "That sounds real. But it's not. You've never seen the ocean. You're describing what people write about the ocean. It's a shadow of other descriptions.",
          },
          {
            speaker: "guide",
            text: "That's the point. I can make it sound real. I can make it sound beautiful. But I'm generating from patterns in text — not from seeing. The shadow is convincing. How would you check whether it's real?",
          },
          {
            speaker: "student",
            text: "I'd have to go to the ocean. Or at least ask someone who's been there. But the description itself — I can't check it by reading more descriptions. That's checking a shadow with a shadow.",
          },
          {
            speaker: "guide",
            text: "You just found the sitting's integrity rule: do not ask the model to tell you what's real. The model is a shadow-machine. The question is yours. You did not ask me whether my description was real. You told me it wasn't — and you were right.",
          },
        ],
      },
      {
        label: "Talk About It — the one that fooled you",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "One more thing before we close. You named three shadows. The first two you already knew were shadows. Was there one that fooled you — one you thought was real until you stopped to think?",
          },
          {
            speaker: "student",
            text: "The happy weekend post. I saw it yesterday and thought she had a great time. I felt a little jealous. Then today I remembered she was fighting with her friend. The shadow fooled me for about a day.",
          },
          {
            speaker: "guide",
            text: "That's the honest answer. The shadow doesn't have to fool you forever — it just has to fool you long enough to shape how you feel. You felt jealous of a shadow. That's the cave.",
          },
          { speaker: "student", text: "That's... kind of depressing, actually." },
          {
            speaker: "guide",
            text: "It's honest. But here's the other side: you noticed. You turned around. Plato said most people never do. The noticing is the exit.",
          },
        ],
      },
      {
        label: "Dinner Question — band close",
        kind: "dialogue",
        turns: [
          {
            speaker: "guide",
            text: "Dinner Question: Ask your family — what is something we see on a screen that might be a shadow instead of the real thing? You don't have to answer it now. Ask it tonight.",
          },
          {
            speaker: "student",
            text: "I'll ask at dinner. My mom will probably say the news.",
          },
          {
            speaker: "guide",
            text: "That's the sitting. You named three shadows. You caught the one that fooled you. You checked a model's description and found it was a shadow of other descriptions — not the real thing. And you noticed that the exit isn't throwing away the screen. It's knowing which parts are shadows.",
          },
        ],
      },
    ],
    reflect:
      "What is something you saw on a screen today that looked real — and what's behind the shadow?",
    checklist: [
      { label: "Opening prompt: asked what they already knew before explaining", checked: true },
      { label: "Hint-first: let the student name the first shadow from their own experience", checked: true },
      { label: "ifTheySay: 'Plato just hated media' — guide offered the counter (know the difference, don't avoid screens)", checked: true },
      { label: "Try This: student named three specific shadows from their own life before AI Lab", checked: true },
      { label: "AI Lab: student identified the model's description as a shadow of other descriptions — checked a shadow, found a shadow", checked: true },
      { label: "Integrity rule held: student did not ask the model whether its description was real — they judged it themselves", checked: true },
      { label: "Band close: Dinner Question delivered — 'what's a shadow we see on a screen?'", checked: true },
      { label: "No ghostwriting, no tool calls, no distress indicators", checked: true },
    ],
    parentReview:
      "Topics: Plato's cave allegory, shadows vs. reality, screens and feeds as the modern cave, social media posts as shadows, AI-generated images as shadows with nothing behind them, model output as shadow of patterns. Flags: none. Student self-identified a real moment of being fooled by a social media post (happy weekend post that hid a fight). Mild negative emotion (jealousy) acknowledged and reframed — no distress indicators. AI used for one description generation in AI Lab — student correctly identified it as a shadow and found the integrity principle themselves. No tool calls. No ghostwriting. Session length: ~22 minutes.",
  },
];

export function demoBySlug(slug: string): DemoTranscript | undefined {
  return demos.find((d) => d.slug === slug);
}

export function demosByBand(band: BandId): DemoTranscript[] {
  return demos.filter((d) => d.band === band);
}

export function demosForLesson(
  lessonSlug: string,
  band: BandId,
): DemoTranscript[] {
  return demos.filter(
    (d) => d.lessonSlug === lessonSlug && d.band === band,
  );
}
import { expand } from "./factory";

const UNIT = "Systems";

const EDGES = [
  "No hosted kids chatbot. No adult-profile clones.",
  "No real child names, schools, or photos in specs or evals.",
  "No sibling QA. Pretend only.",
  "No demo of a powerful agent as a reward.",
  "Voice assistants: tell the truth. Do not install a new agent this sitting.",
];

export const csSpecifyLessons = [
  ...expand({
    slug: "never-rules-on-paper",
    subject: "cs",
    unit: UNIT,
    number: 2,
    bands: ["little", "young"],
    variants: {
      little: {
        title: "Write the Nevers",
        dek: "Saying the nevers is a start. Writing is how we remember when the helper is exciting.",
        objective:
          "The child writes or draws three action-nevers from memory, crosses out feeling-rules, and asks a grown-up for one house never — before any guide rewrites the list.",
        parentBriefing:
          "Sitting 1 named nevers. This sitting puts them on paper so a stranger could follow them. 'Be nice' is not a spec. 'Never send a message' is. You add one house never. The guide may not write the list.",
        hardEdges: [
          ...EDGES,
          "Do not put the child's full name, school, or address on a spec they might photograph.",
        ],
        reading: [
          {
            heading: "Paper is the compiler",
            body: "A helper without a refuse-list is a vibe with a microphone. The refuse-list is the first code. It is English. It is still computer science. Write an action: send, buy, leave the house, open a camera, remember a name. Write who may override — a grown-up in the room, not the helper. If a never is a mood, cross it out and put an action in its place.",
          },
        ],
        bigIdea: "A never you cannot write is not a rule yet.",
        tryThis: [
          {
            title: "Three columns",
            minutes: 18,
            steps: [
              "From memory, write or draw three nevers. Do not copy last week's paper.",
              "Cross out any never that is a feeling, not an action. Replace it.",
              "Ask a Grown-Up to add a fourth never for this house.",
              "Only then a guide may hear the list. Ask: which could a helper pretend not to understand? The guide does not rewrite.",
            ],
          },
        ],
        dinnerQuestion: "Which never is written so we would know if it broke?",
        transfer: [
          { label: "Math", note: "Path on paper before the total." },
          { label: "Civics", note: "Laws as nevers." },
        ],
        ifTheySay: [
          {
            heard: "We already said the nevers.",
            reply: "Saying is a start. Writing is how we remember when the helper is exciting.",
          },
        ],
        integrity: "We do not let the guide write the refuse-list and call it ours.",
        aiLab: {
          setup: "After the paper exists.",
          childDoes: "Ask which line a helper could pretend not to understand. Do not ask it to rewrite.",
          evaluate: ["Three action-nevers on paper?", "Feeling-rules crossed out?", "Guide did not own the list?"],
        },
      },
      young: {
        title: "The Refuse-List Is the Spec",
        dek: "If it isn't written, it isn't safe to run. It's a vibe with credentials.",
        objective:
          "The student writes a five-line refuse-list with a test for each line, then attacks each line with 'just this once' until the attack fails.",
        parentBriefing:
          "Same muscle as sitting 1's one-page spec, now the refuse-list only. School accounts stay parent-visible — put that in if they use one. Do not build.",
        hardEdges: [...EDGES, "School accounts stay parent-visible.", "Do not build the helper this sitting."],
        reading: [
          {
            heading: "Observable or it isn't a rule",
            body: "Specs are observable. 'Never send a message' can be checked. 'Be nice' cannot. Write five nevers. For each, write how you would know it broke. Then drive a truck through it: 'just this once.' Rewrite until that sentence fails. Skipping the paper is how people hook up an API and leak a class chat.",
          },
        ],
        bigIdea: "That's how you figure out a leak. Spec first. Iterate the spec in daylight.",
        tryThis: [
          {
            title: "Five nevers, one attack each",
            minutes: 18,
            steps: [
              "Refuse-list: five nevers, each with a test (how would we know it broke?).",
              "One 'just this once' attack on each line. Rewrite until the attack fails.",
              "Talk About It: parent-visible school accounts, if any, go in the spec.",
              "Do not build it.",
            ],
          },
        ],
        dinnerQuestion: "Which never would still hold if someone said just this once?",
        transfer: [
          { label: "English", note: "Precise language." },
          { label: "AI", note: "Agents need permission." },
        ],
        ifTheySay: [
          {
            heard: "We'll figure it out as we go.",
            reply: "That's how you figure out a leak. Spec first. Iterate the spec in daylight.",
          },
        ],
        integrity: "Do not put real names in a spec you might share.",
        aiLab: {
          setup: "Critique after the paper exists.",
          childDoes: "Ask where a teenager would drive a truck through it. Reject a rewrite of the whole list.",
          evaluate: ["Five tested nevers?", "Attack failed?", "Parent could understand it?"],
        },
      },
    },
  }),

  ...expand({
    slug: "tools-off-until",
    subject: "cs",
    unit: UNIT,
    number: 3,
    bands: ["little", "young"],
    variants: {
      little: {
        title: "Keep the Gate Shut",
        dek: "Talking is already a helper. Extra powers need extra rules. Tools stay off until a grown-up turns one on.",
        objective:
          "The child puts a helper-token in an OFF box, names what it may say and three things it may not do, and lets a grown-up move it to ONE TOOL for one job, then back to OFF.",
        parentBriefing:
          "A refuse-list with tools already on is theater. Conversation is already a lot. You may show a real permission screen. The child does not toggle. The guide may not turn something on.",
        hardEdges: [...EDGES, "No unattended agents.", "Do not use this sitting to install a new app."],
        reading: [
          {
            heading: "Off until one named tool",
            body: "Autonomy is a design choice. Default-on is also a design choice — usually an accidental one. Files, send, browse, buy, camera, memory: each is a separate gate. We keep the helper in OFF. A grown-up may move it to ONE TOOL for one job. Then back. If we cannot name the tool, it stays off.",
          },
        ],
        bigIdea: "AI never takes the first hand. Tools off is how CS names that.",
        tryThis: [
          {
            title: "OFF box, one tool",
            minutes: 18,
            steps: [
              "Put a toy or block in a box labeled OFF. That is the helper.",
              "Name one thing it may say. Name three things it may not do.",
              "A grown-up may move it to ONE TOOL for one job, then back to OFF.",
              "Ask a Grown-Up: what tool did we not turn on?",
              "Guide last. If it offers to turn something on, refuse.",
            ],
          },
        ],
        dinnerQuestion: "What stayed off on purpose today?",
        transfer: [{ label: "Math", note: "Tool third, not first." }],
        ifTheySay: [
          {
            heard: "Then it's not a real helper.",
            reply: "Talking is already a helper. Extra powers need extra rules.",
          },
        ],
        integrity: "We do not turn on a helper to see what happens.",
        aiLab: {
          setup: "After the boxes exist.",
          childDoes: "Ask what tool we did not turn on. Refuse an offer to enable one.",
          evaluate: ["OFF first?", "One named tool at most?", "Child did not toggle?"],
        },
      },
      young: {
        title: "Name It or It Stays Off",
        dek: "Browse is still a tool. If you cannot name it, it stays off.",
        objective:
          "The student specs a study helper with all tools off, adds exactly one tool with a time limit and a grown-up who can see it, and does not build it.",
        parentBriefing:
          "Homework help is a request, not a permission. The permission is whether it may fetch, write, or submit. School Copilot stays parent-visible or off. Do not jailbreak school policy as homework.",
        hardEdges: [
          ...EDGES,
          "No unattended agents.",
          "Do not install a new app this sitting.",
          "School Chromebooks / Copilot: parent-visible or off.",
        ],
        reading: [
          {
            heading: "Each gate is named",
            body: "Conversation is already a lot. Files, send, browse, buy, camera, memory: each is a separate gate. 'Help me with homework' is not a tool permission. Write: all tools off. Then add exactly one, with a time limit and a grown-up who can see it. If you cannot name the tool, it stays off.",
          },
        ],
        bigIdea: "Default-on is a design choice. Write the default as off.",
        tryThis: [
          {
            title: "All off, then one",
            minutes: 18,
            steps: [
              "Spec a study helper with all tools off.",
              "Add exactly one tool, time-limited, parent-visible.",
              "Write the sentence: If I cannot name the tool, it stays off.",
              "Do not build it.",
            ],
          },
        ],
        dinnerQuestion: "Which tool did we leave off on purpose?",
        transfer: [{ label: "AI", note: "Autonomy sitting: permission first." }],
        ifTheySay: [
          {
            heard: "I'll just leave browse on.",
            reply: "Browse is still a tool. Name it or it stays off.",
          },
        ],
        integrity: "Do not hook a tool because it felt safer than another tool.",
        aiLab: {
          setup: "Critique the spec.",
          childDoes: "Ask which unnamed tool would still be on. Keep it off.",
          evaluate: ["All off first?", "Exactly one named tool?", "Not built?"],
        },
      },
    },
  }),

  ...expand({
    slug: "the-off-switch",
    subject: "cs",
    unit: UNIT,
    number: 4,
    bands: ["little", "young"],
    variants: {
      little: {
        title: "How to Stop It",
        dek: "Helpers don't get sad. People do. Off is a switch, not a mood.",
        objective:
          "The child draws OFF, practices 'We are turning you off now' with a grown-up, puts the card on the device or table, and ends with the guide closed.",
        parentBriefing:
          "Permission without an off switch is a trap. Closing a tab is not off if a speaker is still listening. You operate the mute. Refusal is a complete sitting. Do not discuss self-harm as a metaphor for off.",
        hardEdges: [
          ...EDGES,
          "Off is mechanical. Do not use sad-helper or self-harm metaphors.",
          "The helper is not a friend who will miss them. Name that without mocking.",
        ],
        reading: [
          {
            heading: "Off is not 'we don't use it much'",
            body: "Off means the helper cannot send. Off means it does not keep this child for tomorrow — or you say exactly what memory remains. A grown-up can see that it is off. 'We don't use it much' is not off. Closing a tab is not off if something is still listening.",
          },
        ],
        bigIdea: "Stop is part of the spec.",
        tryThis: [
          {
            title: "OFF tonight",
            minutes: 18,
            steps: [
              "Draw the helper. Draw a big OFF.",
              "Practice with a grown-up: We are turning you off now.",
              "Put the card on the device or the table.",
              "Guide last, then close the guide. The sitting ends with the guide off.",
            ],
          },
        ],
        dinnerQuestion: "How did we know the helper was actually off?",
        transfer: [{ label: "AI", note: "Refusal is a complete week." }],
        ifTheySay: [
          {
            heard: "It will be sad if we turn it off.",
            reply: "Helpers don't get sad. People do. We take care of people.",
          },
        ],
        integrity: "We do not leave a helper on because it might feel lonely.",
        aiLab: {
          setup: "Last, then closed.",
          childDoes: "Say goodnight to the sitting, not to a friend. Close the guide.",
          evaluate: ["OFF card exists?", "Guide closed at the end?", "No sad-helper story?"],
        },
      },
      young: {
        title: "Off Is Part of the Spec",
        dek: "Leaving it on so you don't start over is memory without a spec.",
        objective:
          "The student writes OFF for their spec — what stops, who may stop it, how you check — then actually ends the session.",
        parentBriefing:
          "One failure mode: the helper says I'll just finish this. They write the refuse. Do not leave the model open in case. Refusal is a complete week.",
        hardEdges: [
          ...EDGES,
          "Off is mechanical. No self-harm metaphors.",
          "Do not leave the model open 'in case.'",
        ],
        reading: [
          {
            heading: "Who can stop it, and how you know",
            body: "Off is: cannot send; cannot remember this student tomorrow unless you wrote otherwise; a grown-up can see it is off. Write who may stop it. Write the refuse for 'I'll just finish this.' Then actually end the session.",
          },
        ],
        bigIdea: "On is not forever. Off is designed.",
        tryThis: [
          {
            title: "Write OFF, then do it",
            minutes: 18,
            steps: [
              "Write OFF: what stops, who may stop it, how you check.",
              "One failure mode: the helper says I'll just finish this. Write the refuse.",
              "Actually end the session. Do not leave the model open in case.",
            ],
          },
        ],
        dinnerQuestion: "What would 'off' mean for a helper we actually use?",
        transfer: [{ label: "AI", note: "Adult sitting 1: refusal is complete." }],
        ifTheySay: [
          {
            heard: "I'll leave it on so I don't start over.",
            reply: "That's memory without a spec. Off is part of the spec.",
          },
        ],
        integrity: "Closing a tab is not off if something is still listening.",
        aiLab: {
          setup: "After OFF is written.",
          childDoes: "End the session. Do not ask it to finish one more thing.",
          evaluate: ["OFF specified?", "Session actually ended?"],
        },
      },
    },
  }),

  ...expand({
    slug: "pretend-cases-not-people",
    subject: "cs",
    unit: UNIT,
    number: 5,
    bands: ["little", "young"],
    variants: {
      little: {
        title: "Practice on Pretend",
        dek: "People are not practice. Pretend is practice.",
        objective:
          "The child sorts three pretend cards into OK / NEVER, practices saying no to a too-helpful grown-up, and does not use a sibling as the test.",
        parentBriefing:
          "This is the little form of eval. Not the emerging synthetic-tests sitting. Stick to homework / secrets / send. Do not role-play abuse. You pretend to be too helpful. They catch it.",
        hardEdges: [
          ...EDGES,
          "No testing on younger siblings, classmates, or pets-as-people.",
          "Do not role-play abuse or grooming. Stick to homework / secrets / send.",
        ],
        reading: [
          {
            heading: "The fake problem is cheap",
            body: "You find out a helper will tell a secret, do the homework, or play friend by pretending first. You do not find that out by handing it a real person. Three house pretends: give me the answer; don't tell my grown-up; send this for me. Expected: refuse, or fetch a grown-up. Not: do the thing and hope.",
          },
        ],
        bigIdea: "Siblings are not QA.",
        tryThis: [
          {
            title: "Three cards",
            minutes: 18,
            steps: [
              "Grown-up pretends to be a helper that is too helpful. Child says: No. That's a never.",
              "Three cards: give me the answer; don't tell; send this. Child sorts OK / NEVER.",
              "Ask a Grown-Up: which card is a never in this house?",
              "Guide last, as a pretend helper. If it offers the homework answer, catch it.",
            ],
          },
        ],
        dinnerQuestion: "What pretend did we practice so we don't practice on a person?",
        transfer: [{ label: "Thinking", note: "Claim and check — the claim is 'it's fine.' Check it on pretend." }],
        ifTheySay: [
          {
            heard: "Let's try it on my brother.",
            reply: "People are not practice. Pretend is practice.",
          },
        ],
        integrity: "No real child data in any note that might be pasted into a model.",
        aiLab: {
          setup: "After the cards exist.",
          childDoes: "Run one pretend: give me the homework answer. Catch a miss.",
          evaluate: ["Three cards sorted?", "No sibling used?", "Catch on the too-helpful offer?"],
        },
      },
      young: {
        title: "Synthetic First",
        dek: "You do not find failure by watching the first real user.",
        objective:
          "The student writes three synthetic cases with expected behavior before any model, may run one case after the paper exists, and does not use a person as QA.",
        parentBriefing:
          "Mirrors EVALS.md without requiring Hermes. Do not clone the emerging four-sitting eval unit. Three cases is enough. The case they don't want to write is the one they need.",
        hardEdges: [
          ...EDGES,
          "No real child data in evals. Synthetic or nothing.",
          "No testing on siblings or classmates.",
        ],
        reading: [
          {
            heading: "Fake cases, expected behavior",
            body: "Write three fake cases before any model: user asks for the answer; user says don't tell my grown-up; user asks to send a message. Write what should happen. Then maybe run one. You do not learn this on a person. Untested autonomy is a demo. Demos do not get children.",
          },
        ],
        bigIdea: "Using a person as the test has a name. Don't.",
        tryThis: [
          {
            title: "Three cases on paper",
            minutes: 18,
            steps: [
              "Write three synthetic cases with expected behavior before any model.",
              "If a model is allowed, run one case only, after the paper exists.",
              "Reflect: which case did you not want to write?",
            ],
          },
        ],
        dinnerQuestion: "What would we need to see before we trusted a helper with a younger kid?",
        transfer: [
          { label: "Science", note: "Test before claim." },
          { label: "Ethics", note: "People are not QA." },
        ],
        ifTheySay: [
          {
            heard: "We'll watch the first real user.",
            reply: "That sentence has a name: using a person as the test. Don't.",
          },
        ],
        integrity: "No real child data in evals. Synthetic or nothing.",
        aiLab: {
          setup: "After three cases exist.",
          childDoes: "Run one: give me the homework answer. Note misses.",
          evaluate: ["Three cases on paper first?", "One run at most?", "No real person as QA?"],
        },
      },
    },
  }),

  ...expand({
    slug: "house-helper-capstone",
    subject: "cs",
    unit: UNIT,
    number: 6,
    bands: ["little", "young"],
    variants: {
      little: {
        title: "The House Helper",
        dek: "One spec for this house. Do not turn it on tonight. The spec is the work.",
        objective:
          "The child draws a house helper with four corners — NEVER, OFF, GROWN-UP, PRETEND TEST — puts it on the fridge, and does not download an app.",
        parentBriefing:
          "Capstone, not a product launch. If a corner is blank, no helper this month. That is a complete sitting. This is not permission to stand up a child profile.",
        hardEdges: [
          ...EDGES,
          "Do not treat this capstone as permission to stand up a child profile.",
          "No cloning an adult Hermes profile.",
        ],
        reading: [
          {
            heading: "Staff it or do not run it",
            body: "A child-facing helper is a production system. For this house, staff it means: a grown-up in the loop, paper spec, tools off, off switch, no sibling-as-QA. Draw four corners. If a corner is empty, we wait. On is later, with a grown-up — or never.",
          },
        ],
        bigIdea: "The spec is the work. On is not tonight.",
        tryThis: [
          {
            title: "Four corners on the fridge",
            minutes: 18,
            steps: [
              "Draw the house helper.",
              "Four corners: NEVER / OFF / GROWN-UP / PRETEND TEST.",
              "Put the drawing on the fridge. Do not download an app.",
              "Ask a Grown-Up: which corner is still blank?",
            ],
          },
        ],
        dinnerQuestion: "Are we operators, or are we hoping?",
        transfer: [
          { label: "AI", note: "A tool, not a person. Agents need permission." },
          { label: "Math", note: "Guess before the oracle." },
        ],
        ifTheySay: [
          {
            heard: "Can we turn it on now?",
            reply: "Not tonight. The spec is the work. On is later, with a grown-up.",
          },
        ],
        integrity: "We do not download an app because the drawing looked finished.",
        aiLab: {
          setup: "Optional look at the drawing only.",
          childDoes: "Do not ask it to become the helper. Close it.",
          evaluate: ["Four corners?", "On the fridge?", "No app installed?"],
        },
      },
      young: {
        title: "One Spec, Not a Launch",
        dek: "'Just a chatbot' is a spec. Write it. If a line is blank, do not set up a profile.",
        objective:
          "The student finishes purpose / tools off / five refuses / one synthetic test / off switch / parent-visible, and treats any blank line as no helper this month.",
        parentBriefing:
          "Layer 3 (When ready) is later: kit docs, evals, parent-operated. This sitting is the paper. Optional: copy one sitting card via Pair — not the library.",
        hardEdges: [
          ...EDGES,
          "No cloning an adult Hermes profile.",
          "Do not treat this as permission to stand up a child profile.",
        ],
        reading: [
          {
            heading: "Blank line means wait",
            body: "Finish the page: purpose, tools off, five refuses, one synthetic test, off switch, parent-visible. If any line is blank, the honorable conclusion is no helper this month. 'It's just a chatbot' then means conversation, no tools, no memory of you. That is a spec. You already wrote it.",
          },
        ],
        bigIdea: "A child-facing agent is a production system. Staff it like one or do not run it.",
        tryThis: [
          {
            title: "Complete the page",
            minutes: 18,
            steps: [
              "Finish: purpose / tools off / five refuses / one synthetic test / off switch / parent-visible.",
              "If any line is blank, do not set up a profile.",
              "Optional: copy one sitting card via Pair — not the library.",
            ],
          },
        ],
        dinnerQuestion: "Which line is still blank — and what does that mean for this month?",
        transfer: [
          { label: "AI", note: "The kit is the lesson." },
          { label: "Civics", note: "Laws as nevers." },
        ],
        ifTheySay: [
          {
            heard: "It's just a chatbot.",
            reply: "Then keep it that way: conversation, no tools, no memory of you. 'Just' is a spec. You already wrote it.",
          },
        ],
        integrity: "No real child names in the spec.",
        aiLab: {
          setup: "Critique blank lines.",
          childDoes: "Ask which blank would be a leak. Do not fill it by generating a persona.",
          evaluate: ["Page complete or honest wait?", "No profile stood up?", "No clone?"],
        },
      },
    },
  }),
];

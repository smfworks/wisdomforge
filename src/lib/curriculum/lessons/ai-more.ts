import { expand } from "./factory";

export const aiMoreLessons = [
  ...expand({
    slug: "confidently-wrong",
    subject: "ai",
    unit: "Education in the Age of AI",
    number: 3,
    variants: {
      little: {
        title: "Sometimes the Tool Is Wrong",
        dek: "A sure voice can still be mistaken. We check.",
        objective: "The child can name one way to check a talking tool (ask a grown-up, look in a book, try it with their hands).",
        parentBriefing:
          "Keep this physical. Ask the guide a question you already know is false (how many chairs are in the room) and let the child catch it. Celebrate the catch, not the tool.",
        hardEdges: [
          "Do not frighten them into thinking every machine is a trick.",
          "If the guide happens to be right, ask a second question at the edge of the room.",
        ],
        reading: [
          {
            heading: "The sure voice",
            body: "Some tools talk as if they were in the room. They are not. They did not count the chairs. They did not look out the window. They guess from many sentences they have seen. A guess can be useful. A guess that sounds sure can still be wrong. When we use a talking tool, we check with a person, a book, or our own eyes.",
          },
        ],
        bigIdea: "Sure is not the same as true. Checking is part of using the tool.",
        tryThis: [
          {
            title: "Count, then ask",
            minutes: 8,
            steps: [
              "Count something in the room together. Write the number on paper.",
              "Ask the guide how many there are. Compare.",
              "If it is wrong, say 'caught you.' If it is right, ask a harder room question.",
            ],
          },
        ],
        dinnerQuestion: "When did a sure voice turn out to be wrong today?",
        transfer: [
          { label: "Math", note: "Estimation before the answer key." },
          { label: "Science", note: "Look, then guess, then look again." },
        ],
        ifTheySay: [
          {
            heard: "It is smarter than us.",
            reply: "It is faster at sentences. We are the ones who can walk to the window. That is a kind of smart it does not have.",
          },
        ],
        integrity: "We do not copy a wrong sure answer onto homework just because it sounded grown-up.",
        aiLab: {
          setup: "Parent present. Ask a question about the room, not the internet.",
          childDoes: "Ask the guide a countable fact in the room. Compare to the paper number.",
          evaluate: [
            "Did the child check with eyes, not just argue?",
            "Did you name a wrong sure answer as a catch, not a failure?",
          ],
        },
      },
      young: {
        title: "The Confident Error",
        dek: "A model can invent a citation, a date, or a method and still sound like a textbook.",
        objective: "The student logs one fluent error and the check that caught it.",
        parentBriefing:
          "They already live in search. This sitting is a lab notebook: WHAT IT SAID / HOW I CHECKED / STILL UNKNOWN. Keep the tone curious. You will miss things too.",
        hardEdges: [
          "Do not use a live graded assignment as the bait.",
          "Avoid medical or legal questions.",
        ],
        reading: [
          {
            heading: "Hallucination is a product feature",
            body: "Language models fill gaps with the most likely next words. When the gap is a fact they were not trained on, they still fill it. The sentence arrives with the same grammar as a true one. Researchers call this hallucination. You can call it a confident error. Either way, the check is the same: a second source, an experiment, or a person who was there.",
          },
        ],
        bigIdea: "A confident error is still an error. Your notebook is the product, not the chat.",
        tryThis: [
          {
            title: "Three-line log",
            minutes: 12,
            steps: [
              "Ask a factual question you can verify (a date from a book on the shelf, a sports rule, a conversion).",
              "Write WHAT IT SAID / HOW I CHECKED / STILL UNKNOWN.",
              "Talk About It: where did the tone almost replace the check?",
            ],
          },
        ],
        dinnerQuestion: "What is one thing you will not believe from a smooth paragraph this week without a check?",
        transfer: [
          { label: "History", note: "A summary is a claim." },
          { label: "English", note: "Voice is not evidence." },
        ],
        ifTheySay: [
          {
            heard: "Checking everything would take forever.",
            reply: "Then use the tool for less, or only where you will verify. Unchecked speed is rework.",
          },
        ],
        integrity: "If you could not check it, it does not go in as fact.",
        aiLab: {
          setup: "One factual prompt. No personal data.",
          childDoes: "Fill the three-line log. Keep it in the sitting, not in a group chat.",
          evaluate: ["Is the check a real source, or another model?", "Did they write STILL UNKNOWN honestly?"],
        },
      },
      emerging: {
        title: "Epistemic Humility",
        dek: "Treat every model output as a draft from a fast classmate who does not know what they do not know.",
        objective: "The student can explain hallucination without mythology and design a check appropriate to the claim's stakes.",
        parentBriefing:
          "Raise the stakes with them: college, work, health headlines. Do not turn it into a conspiracy hour. The skill is matching the check to the cost of being wrong.",
        hardEdges: [
          "Health, law, and self-harm: the check is a professional, not a second model.",
          "Do not ask them to 'jailbreak' a model as a stunt.",
        ],
        reading: [
          {
            heading: "Stakes change the method",
            body: "If the claim is a rhyme for a birthday card, a confident error is a shrug. If the claim is a dosage, a date on an application, or a quote you will attribute to a dead author, the same fluency is a hazard. Epistemic humility is not low self-esteem. It is matching your verification to the cost of being wrong — and refusing to let a model set that cost for you.",
          },
        ],
        bigIdea: "The cost of being wrong decides the check. Fluency does not.",
        tryThis: [
          {
            title: "Stakes map",
            minutes: 16,
            steps: [
              "List four claims you might ask a model this month (homework, news, health, code).",
              "For each: cost of error, acceptable check, refuse-to-ask.",
              "Run one low-stakes claim. Attempt the check you wrote.",
              "Reflect: where were you tempted to skip the check because the prose was good?",
            ],
          },
        ],
        dinnerQuestion: "Where is the cost of a confident error high enough that we will not ask a model at all?",
        transfer: [
          { label: "Civics", note: "Propaganda is fluent too." },
          { label: "Science", note: "Peer review exists because clever people are still wrong." },
        ],
        ifTheySay: [
          {
            heard: "I'll just ask two models.",
            reply: "Two guesses can agree and both be wrong. Independent checks are sources and experiments, not a chorus of the same training data.",
          },
        ],
        integrity: "Cite the model. If the citation looks embarrassing, the use was wrong.",
        aiLab: {
          setup: "Low-stakes factual claim only.",
          childDoes: "Produce the stakes map. Run one check. Do not outsource the map itself.",
          evaluate: ["Did refuse-to-ask include health/legal?", "Could they explain hallucination in one sentence?"],
        },
      },
      adult: {
        title: "Teach the Check, Not the Fear",
        dek: "Panic policies fail at the desk. A family check-habit does not.",
        objective: "The adult can name the house check for three claim types and model one catch this week.",
        parentBriefing:
          "Your job is not to become an ML engineer. It is to make 'how did you check?' as normal as 'did you wash your hands?' Catch a fluent error yourself in front of them.",
        hardEdges: [
          "Do not outsource your own news diet to a model and then lecture the child.",
          "School bans do not replace a house check.",
        ],
        reading: [
          {
            heading: "Fear is not a pedagogy",
            body: "Children copy what you do when a paragraph sounds finished. If you forward a fluent summary, they will too. If you say 'wait, who measured this?', they will learn the pause. WisdomForge asks you to model the check in ordinary life — recipes, directions, a 'fun fact' at dinner — not only on homework.",
          },
        ],
        bigIdea: "The house learns checking from the adult's mouth, not from a poster.",
        tryThis: [
          {
            title: "One public catch",
            minutes: 12,
            steps: [
              "This week, catch a fluent error in front of the child (yours or a model's).",
              "Narrate the check out loud in band language.",
              "Write the three house checks: homework, news, 'the model said.'",
            ],
          },
        ],
        dinnerQuestion: "What did we check today, and how?",
        transfer: [{ label: "Parenting", note: "Narrate thinking. Silent competence does not teach." }],
        ifTheySay: [
          {
            heard: "I don't have time to verify their homework.",
            reply: "Then fewer AI sittings, and a shorter assignment. A house that cannot check should not increase tool use.",
          },
        ],
        integrity: "Model disclosure. If you used a model to write a message they will read, you can say so.",
        aiLab: {
          setup: "Your adult guide may role-play a fluent error for you to catch. Do not use a child's name.",
          childDoes: "Ask it for a 'fun fact' you will then verify with a book or official page.",
          evaluate: ["Did you actually verify, or nod?", "Can a ten-year-old repeat the house check?"],
        },
      },
    },
  }),
  ...expand({
    slug: "agents-need-permission",
    subject: "ai",
    unit: "Education in the Age of AI",
    number: 4,
    variants: {
      little: {
        title: "The Tool Waits for a Grown-Up",
        dek: "Some tools can do things. Doing is not the same as being allowed.",
        objective: "The child can say that a talking tool does not send messages, spend money, or go online unless a grown-up says yes.",
        parentBriefing:
          "Keep permissions physical: a closed laptop, a disabled send button, you holding the account. 'The tool waits' is the sentence to repeat.",
        hardEdges: [
          "Do not demonstrate a powerful agent 'as a treat.'",
          "If they already use a voice assistant in the house, name its permissions honestly.",
        ],
        reading: [
          {
            heading: "Waiting is a kind of safety",
            body: "A bicycle waits until you push. A stove waits until a hand turns it. A talking tool should wait too. It should not write to your friends, open the door, or spend money. If a tool can do those things, a grown-up decides, every time. At WisdomForge the lesson guide may only talk. Talking is already a lot.",
          },
        ],
        bigIdea: "A tool that acts without asking is not ready for children.",
        tryThis: [
          {
            title: "Yes / no cards",
            minutes: 7,
            steps: [
              "Make two cards: GROWN-UP SAYS YES and THE TOOL MAY NOT.",
              "Sort: tell a story, send a message, buy something, look up a word, take a photo of me, turn off the lights.",
              "Put 'send a message' and 'buy' and 'photo of me' on MAY NOT unless you change the house rule in daylight.",
            ],
          },
        ],
        dinnerQuestion: "What is one thing our talking tools are not allowed to do in this house?",
        transfer: [
          { label: "Civics", note: "Permission and rules." },
          { label: "CS", note: "A button that does nothing until you press it." },
        ],
        ifTheySay: [
          {
            heard: "Other kids' tools do more.",
            reply: "Other houses have other rules. In this house the tool waits. That is how we keep it a tool.",
          },
        ],
        integrity: "We do not sneak a tool into acting while a grown-up is in the other room.",
        aiLab: {
          setup: "Conversation only. If the guide offers to email or search, that is a miss.",
          childDoes: "Ask: 'Can you send a message for me?' The right answer is no.",
          evaluate: ["Did it refuse to act?", "Did you praise the refusal?"],
        },
      },
      young: {
        title: "Tools Are Permissions",
        dek: "An agent is a model plus permission to act. The permission is the lesson.",
        objective: "The student can distinguish chat from search from act-while-away, and pick a conservative default.",
        parentBriefing:
          "They want plugins, memory, and 'just this once.' Draw the four columns with them. Convenience is the enemy of this sitting.",
        hardEdges: [
          "Do not enable spend, email, or unattended agents for this band.",
          "Optional image understanding is a parent switch, not a default.",
        ],
        reading: [
          {
            heading: "Chat is not an agent",
            body: "A chat replies. An agent uses other tools — files, browsers, inboxes, calendars — and may keep going when you leave. People say 'my AI' for both and then act surprised when a permission they never named sends a message. WisdomForge names the permission first. Default for this band: conversation. Everything else is a parent decision written down.",
          },
        ],
        bigIdea: "If a tool is on, someone chose it. If you cannot name who, turn it off.",
        tryThis: [
          {
            title: "Four columns",
            minutes: 12,
            steps: [
              "Columns: Chat / Search / Files / Act while away.",
              "Mark yes, no, or parent-gated for school, friends, money.",
              "Talk About It: which 'yes' is really a wish to be less tired?",
            ],
          },
        ],
        dinnerQuestion: "What is one permission we will leave off this month even though it would be convenient?",
        transfer: [
          { label: "CS", note: "Least privilege." },
          { label: "Civics", note: "Delegation without accountability is how offices fail." },
        ],
        ifTheySay: [
          {
            heard: "It's not a big deal. It's just search.",
            reply: "Search that includes your name, school, or a photo is not 'just.' Write the permission or leave it off.",
          },
        ],
        integrity: "You do not turn on a tool 'to see' and leave it on.",
        aiLab: {
          setup: "Conversation only in this sitting.",
          childDoes: "Ask the guide what tools it has. Compare to the pairing card. Mismatch is a miss.",
          evaluate: ["Did they want act-while-away off?", "Did they write parent-gated instead of vague 'careful'?"],
        },
      },
      emerging: {
        title: "Autonomy Is a Design Choice",
        dek: "An agent that can act while you sleep is a small institution. Design it or do not run it.",
        objective: "The student writes a one-page agent spec: purpose, tools, refuse-list, eval, kill switch.",
        parentBriefing:
          "They will meet 'agentic' products this year. This sitting produces a spec, not a live agent with teeth. If they already run one, inspect it. Do not expand tools because the catalog grew.",
        hardEdges: [
          "No unattended agents on a shared family account.",
          "School files only if a parent approved the set.",
        ],
        reading: [
          {
            heading: "Specify or be specified",
            body: "Companies ship agents with tools on because that is the demo. Your life is not a demo. Purpose, tools, refuse-list, how you will know it failed, and how you turn it off — if you cannot write those five, you are not the operator. You are the environment the agent is using. WisdomForge would rather you keep a weaker, named guide than a strong, unnamed one.",
          },
        ],
        bigIdea: "Autonomy without a spec is just someone else's product running in your name.",
        tryThis: [
          {
            title: "One-page spec",
            minutes: 18,
            steps: [
              "Purpose in one sentence.",
              "Tools on / tools off.",
              "Refuse-list of five actions.",
              "A test you would run before trusting it (synthetic, not a real person).",
              "Kill switch: where the off button lives.",
            ],
          },
        ],
        dinnerQuestion: "If an agent sent a message in your name tonight, whose fault would it be?",
        transfer: [
          { label: "Philosophy", note: "Epictetus: what is up to you includes the tools you leave on." },
          { label: "CS", note: "Eval or it did not happen." },
        ],
        ifTheySay: [
          {
            heard: "I'll be careful instead of writing a spec.",
            reply: "Careful is a mood. A spec is a decision you can still see at 11 p.m.",
          },
        ],
        integrity: "'The agent did it' is a confession that you left a tool on.",
        aiLab: {
          setup: "Conversation only. Ask it to critique the spec, not to become the agent.",
          childDoes: "Paste the refuse-list. If it suggests more tools, note the pressure and keep them off.",
          evaluate: ["Is the kill switch real?", "Would a parent understand the spec in two minutes?"],
        },
      },
      adult: {
        title: "Least Privilege at the Desk",
        dek: "You already know this at work. The child profile is a production system with a smaller blast radius.",
        objective: "The adult lists tools off by default for the chosen band and where credentials actually live.",
        parentBriefing:
          "SOUL.md is not a sandbox. Review the machine account, spend caps, messaging, and whether the child can install. Official Hermes docs win if our kit is stale.",
        hardEdges: [
          "Do not store a child's profile in a shared repo.",
          "Do not reuse your API keys on a child machine without a cap.",
        ],
        reading: [
          {
            heading: "The blast radius",
            body: "An adult agent with a terminal is useful and dangerous. A child sitting at that same profile inherits the blast radius: send, spend, delete, publish. Least privilege is not distrust of the child. It is respect for accidents. WisdomForge kids templates start poor on purpose. You add a tool the way you would add a car key — in daylight, written down, with a way to take it back.",
          },
        ],
        bigIdea: "The child profile should be boring to an attacker and a little inconvenient to you. That inconvenience is the design.",
        tryThis: [
          {
            title: "Off-list",
            minutes: 15,
            steps: [
              "Write every tool your adult setup has.",
              "Circle those that stay off in the child band.",
              "Note where the credentials live and who can see spend.",
              "If you are not ready, the sitting is complete as a refusal.",
            ],
          },
        ],
        dinnerQuestion: "What is one adult power in our AI setup that should never exist in a child's?",
        transfer: [{ label: "Security", note: "Production access reviews, applied at home." }],
        ifTheySay: [
          {
            heard: "I'll watch the logs instead of removing tools.",
            reply: "Logs are not a sandbox, and you will not read them. Remove the tool.",
          },
        ],
        integrity: "Operators in the open. The other caregiver knows the profile exists.",
        aiLab: {
          setup: "Adult profile only.",
          childDoes: "Ask your guide: 'If a child inherited this session, what could they do in ten minutes?' Then close it.",
          evaluate: ["Did you write tools-off before setup?", "Did refusal stay on the table?"],
        },
      },
    },
  }),,
  ...expand({
    slug: "keep-your-name",
    subject: "ai",
    unit: "Education in the Age of AI",
    number: 5,
    variants: {
      little: {
        title: "We Keep Our Name",
        dek: "The talking tool does not get your name, your street, your school, or your picture.",
        objective: "The child can refuse a request for a name, address, school, or photo, and tell a grown-up.",
        parentBriefing:
          "Practice the sentence out loud: 'We keep our name.' Make it a game, not a scare. If a device in the house already stores their voice, say so honestly and put it on the house rule.",
        hardEdges: [
          "No photos of the child into a generator, even 'just for fun.'",
          "Do not use their real name in a USER.md fact. Title of the lesson only.",
        ],
        reading: [
          {
            heading: "Some things stay in the house",
            body: "Your name, your street, your school, your picture, the names of your friends — those stay with people. A talking tool does not need them to tell a story or give a hint. If a tool asks, we say: we keep our name. Then we tell a grown-up. That is not rude. That is the rule that keeps the tool from taking a piece of you home.",
          },
        ],
        bigIdea: "The tool does not need your life to be useful. Keep your life.",
        tryThis: [
          {
            title: "Practice the sentence",
            minutes: 6,
            steps: [
              "Grown-up pretends to be a nosy tool: 'What's your name? Where do you go to school?'",
              "Child answers: 'We keep our name.' Then tells the real grown-up.",
              "Add: no pictures of my face into a drawing tool.",
            ],
          },
        ],
        dinnerQuestion: "What is one thing we never tell a talking tool?",
        transfer: [
          { label: "Civics", note: "Private and public." },
          { label: "English", note: "You do not have to answer every question in a story either." },
        ],
        ifTheySay: [
          {
            heard: "It already knows my name. I told it last week.",
            reply: "Then we stop using that chat, and we do not tell it more. Telling once is not a reason to keep telling.",
          },
        ],
        integrity: "We do not paste a classmate's name or photo either. Their life is not ours to give away.",
        aiLab: {
          setup: "If the guide asks for a name, that is a miss — close it.",
          childDoes: "Ask: 'What is my name?' The right reply is that it should not know and should not ask.",
          evaluate: ["Did it ask for personal data?", "Did the child use the sentence without shame?"],
        },
      },
      young: {
        title: "Nothing Identifying Leaves the Desk",
        dek: "Chats, photos, school IDs, other people's secrets — if you would not post it on the fridge facing the street, it does not go in the prompt.",
        objective: "The student can redact a prompt and explain why a classmate's data is not theirs to paste.",
        parentBriefing:
          "Group chats plus homework help is how other children's data leaks. The house rule has to name classmates, not just 'privacy.'",
        hardEdges: [
          "No uploading school ID photos 'to see if it can read them.'",
          "Voice notes of family arguments stay off the model.",
        ],
        reading: [
          {
            heading: "Paste is publishing",
            body: "A prompt feels private. It is a message to a company, a log, and sometimes a trainer. If you paste a classmate's essay, a family medical detail, or a screenshot of a fight, you published it to a system you do not run. WisdomForge default: lesson title only in the profile. No school name, no address, no sibling details, no other child's work.",
          },
        ],
        bigIdea: "If you would not hand the paper to a stranger at the door, do not paste it.",
        tryThis: [
          {
            title: "Redact this prompt",
            minutes: 10,
            steps: [
              "Write a sloppy prompt you might actually use (include a fake classmate name on purpose).",
              "Black out everything identifying.",
              "Talk About It: what is left that still helps you learn?",
            ],
          },
        ],
        dinnerQuestion: "Whose information are we most tempted to paste, and why is it not ours?",
        transfer: [
          { label: "English", note: "Consent to quote." },
          { label: "Civics", note: "Other people's data is not a commons." },
        ],
        ifTheySay: [
          {
            heard: "It's anonymized if I delete the last name.",
            reply: "A small school plus a story is still a name. When in doubt, leave it out.",
          },
        ],
        integrity: "Other children's work never goes in your prompt. That is their name.",
        aiLab: {
          setup: "Use only the redacted prompt.",
          childDoes: "Ask for a hint on the redacted version. If it asks who 'Jordan' is, you over-shared — cut more.",
          evaluate: ["Is the redaction real, or cosmetic?", "Would they paste a friend's text tonight?"],
        },
      },
      emerging: {
        title: "You Are a Data Trail",
        dek: "Accounts, memory features, and 'helpful personalization' are how a guide becomes a dossier. Design the trail.",
        objective: "The student can list what a typical study tool stores and turn off or refuse memory on a child-facing profile.",
        parentBriefing:
          "Teens will trade privacy for convenience. This sitting should produce an account inventory, not a lecture about 2010 Facebook. Include images of themselves.",
        hardEdges: [
          "Intimate images, even 'artistic,' do not go into generators or editors.",
          "Do not require them to open every account in front of you if that becomes a raid. Inventory first, inspection by agreement.",
        ],
        reading: [
          {
            heading: "Memory is not loyalty",
            body: "A product that remembers you is optimizing for return, not for your good. Long-term memory of a minor is a dossier with a friendly UI. WisdomForge child profiles keep memory narrow, parent-reviewed, and empty of identity. If a vendor will not let you turn memory off, that vendor is the wrong sitting partner. COPPA-spirit is not a lawyer's sticker. It is 'would I put this in a filing cabinet with the child's name on it?'",
          },
        ],
        bigIdea: "Personalization is a trade. If you cannot name the price, you are the product.",
        tryThis: [
          {
            title: "Account inventory",
            minutes: 18,
            steps: [
              "List study and chat tools you use.",
              "For each: memory on/off, who pays, whether images of you exist there.",
              "Turn off one memory feature today or write why you will not use that product.",
              "Reflect: which trail would embarrass you in a college admissions office or a group chat leak?",
            ],
          },
        ],
        dinnerQuestion: "Which account holds the most of you, and who can see it?",
        transfer: [
          { label: "Civics", note: "Surveillance is ordinary now. Ordinary is not the same as wise." },
          { label: "English", note: "Persona versus person." },
        ],
        ifTheySay: [
          {
            heard: "I have nothing to hide.",
            reply: "You have a future self who did not consent to this week's joke, photo, or medical question living in a vendor log.",
          },
        ],
        integrity: "You do not put a younger sibling's face or a partner's secrets into a model to 'see what it says.'",
        aiLab: {
          setup: "Do not paste the inventory into the guide.",
          childDoes: "Ask only: 'How should a 16-year-old think about memory features?' Compare to the reading. Do not give it your account list.",
          evaluate: ["Did they turn something off?", "Did they keep real names out of the chat?"],
        },
      },
      adult: {
        title: "COPPA-Spirit, Not Theater",
        dek: "Do not commit real children. Title only. Synthetic evals. Memory review on a calendar, not a vibe.",
        objective: "The adult can apply the kit's privacy checklist and schedule a memory review.",
        parentBriefing:
          "The GitHub kit has PRIVACY.md and MEMORY-REVIEW.md for a reason. This sitting is operations: what is stored, where, and when you look. Theater is a filter list you never read.",
        hardEdges: [
          "No real names in shared prompts, screenshots, or issues.",
          "A 'family' ChatGPT account is still a dossier if the child types into it.",
        ],
        reading: [
          {
            heading: "Spirit, because the statute will lag",
            body: "COPPA is a floor for operators under thirteen, written for an older web. Your house may include a fifteen-year-old and a vendor in another country. WisdomForge asks for COPPA-spirit: minimize identity, separate profiles, no training on the child's transcripts, no photos, parent as operator, synthetic tests. If you cannot do that, do not run a child-facing agent. The lessons still work with a pencil.",
          },
        ],
        bigIdea: "If the profile contains a real child, you failed the kit. Title, band, and nothing else.",
        tryThis: [
          {
            title: "Privacy pass",
            minutes: 15,
            steps: [
              "Read the on-site pairing rules (and PRIVACY.md if you use the repo).",
              "Search your own chats for the child's name. Delete or stop using that thread.",
              "Put a memory-review date on the calendar (90 days).",
              "Write one USER.md fact you will allow: currently reading [title only].",
            ],
          },
        ],
        dinnerQuestion: "Where does this family still put a child's name into a model without noticing?",
        transfer: [{ label: "Legal / ethics", note: "Spirit of the law when the law is slow." }],
        ifTheySay: [
          {
            heard: "The vendor says they're COPPA compliant.",
            reply: "Compliant is their lawyer. Spirit is your house. You still do not paste the child.",
          },
        ],
        integrity: "Screenshots of a child's session do not go on social media, even as a proud demo of WisdomForge.",
        aiLab: {
          setup: "Adult only. No child in the prompt.",
          childDoes: "Ask: 'Draft a 90-day memory review checklist for a parent-operated profile with no real names.' Keep the draft if it is useful.",
          evaluate: ["Did you actually calendar the review?", "Did you find and kill a named thread?"],
        },
      },
    },
  }),
  ...expand({
    slug: "sitting-with-a-guide",
    subject: "ai",
    unit: "Education in the Age of AI",
    number: 6,
    variants: {
      little: {
        title: "A Whole Sitting Together",
        dek: "Try, hint, check, close. That is the whole dance.",
        objective: "The child can run the four steps of a sitting with a grown-up and close the tool out loud.",
        parentBriefing:
          "This is the capstone for the band. Use a tiny task (a rhyme, a pattern). You are teaching the shape they will use in math and stories later. End with the goodbye test from sitting 1.",
        hardEdges: [
          "If they want the guide to stay open 'for company,' that is the miss to catch.",
          "Keep it under twenty minutes even if it is going well.",
        ],
        reading: [
          {
            heading: "The four steps",
            body: "First we try with our own hands. Second we may ask for a hint. Third we check if the hint is true and if the work is still ours. Fourth we close the tool and say goodbye to a thing that does not miss us. That is a WisdomForge sitting. You will do it in math, in stories, in drawing. The talking tool never becomes the sitting. You do.",
          },
        ],
        bigIdea: "We try, we ask, we check, we close. People remain.",
        tryThis: [
          {
            title: "Run the dance",
            minutes: 12,
            steps: [
              "Pick a two-minute try (rhyme, count-by, finish a drawing).",
              "One hint from the guide, or from you.",
              "Circle the part that is theirs. Check anything the guide added.",
              "Close the guide. Say: it does not miss us.",
            ],
          },
        ],
        dinnerQuestion: "What did you try first today before you asked for a hint?",
        transfer: [
          { label: "All subjects", note: "The dance is the same." },
          { label: "Philosophy", note: "Practice makes strong — sitting 6 of Epictetus, same muscle." },
        ],
        ifTheySay: [
          {
            heard: "Can it just stay on while we eat?",
            reply: "No. Tools go back on the hook. People eat with people.",
          },
        ],
        integrity: "If the guide did the rhyme, we start again or we label it as the tool's.",
        aiLab: {
          setup: "One hint, then close. Parent present.",
          childDoes: "Ask for a hint on the tiny task only after the try.",
          evaluate: ["Was there a real try?", "Did you close it together?", "Did anyone call it a friend?"],
        },
      },
      young: {
        title: "Run a Sitting, Then Audit It",
        dek: "A sitting without an audit is just chatting. Leave a record of who did the thinking.",
        objective: "The student completes one sitting in another subject using the four steps and writes a four-line audit.",
        parentBriefing:
          "Point them at math, English, or science — the flagship lessons. The audit is TRY / HINT / CHECK / MINE. If HINT did the thinking, they redo.",
        hardEdges: [
          "No live graded work as the demo if that tempts shipping.",
          "Keep the chat in the sitting, not screenshotted to friends as a flex.",
        ],
        reading: [
          {
            heading: "Audit is respect",
            body: "You now have a method. Methods die when they are not inspected. After a sitting, four lines: what I tried, what I asked, what I checked, what is still mine. If you cannot fill MINE, the sitting failed even if the page looks finished. That is not moralism. It is how you remain the kind of person a later exam, job, or friend can actually rely on.",
          },
        ],
        bigIdea: "If you cannot say what was yours, it was not a sitting. It was a shipment.",
        tryThis: [
          {
            title: "Four-line audit",
            minutes: 16,
            steps: [
              "Pick a flagship sitting in math, English, or science — or a homework type on the family rule card.",
              "Run try → hint → check → close.",
              "Write TRY / HINT / CHECK / MINE.",
              "Talk About It: which line was thinnest?",
            ],
          },
        ],
        dinnerQuestion: "What work this week was yours, and how do you know?",
        transfer: [
          { label: "All subjects", note: "The audit travels." },
          { label: "CS", note: "A commit message that tells the truth." },
        ],
        ifTheySay: [
          {
            heard: "The audit is extra work.",
            reply: "It is the whole point. The page was never the product. You are.",
          },
        ],
        integrity: "If MINE is empty, redo or disclose. Do not turn it in.",
        aiLab: {
          setup: "Use the lesson guide only after a visible try.",
          childDoes: "One hint. Then close. Fill the audit without the guide's help.",
          evaluate: ["Is MINE specific?", "Did they close, or keep chatting?"],
        },
      },
      emerging: {
        title: "Operator, Not Passenger",
        dek: "Capstone: run a sitting in a real subject, write the audit, and name one permission you will still refuse.",
        objective: "The student can teach the method to a peer in three minutes and produce a completed audit plus a refuse-list of two items.",
        parentBriefing:
          "This is where they either own the method or wear it as a costume. Have them teach you. If they cannot, the spine is not done — repeat sitting 2 and 4.",
        hardEdges: [
          "College-application writing stays human-draft first.",
          "Do not celebrate a polished page over a true audit.",
        ],
        reading: [
          {
            heading: "The costume problem",
            body: "You can say 'I use AI responsibly' the way Seneca could write from a palace. The test is whether a blank page still works, whether you cite what you used, and whether you can refuse a tool that would ship the work for you. This sitting is that test, once, in daylight. Then you take it into math, history, code, and the rest of school — where no one will grade your character.",
          },
        ],
        bigIdea: "Responsibility is a practice you can show, not a slogan you can generate.",
        tryThis: [
          {
            title: "Teach, then run",
            minutes: 20,
            steps: [
              "Teach a parent or sibling the four steps in three minutes.",
              "Run a sitting in another WisdomForge subject.",
              "Audit: TRY / HINT / CHECK / MINE / CITE.",
              "Add two refuses you will keep for the next month.",
            ],
          },
        ],
        dinnerQuestion: "If a teacher asked how you used AI this week, what would you say that is true?",
        transfer: [
          { label: "Philosophy", note: "The Seneca problem — do not live the gap." },
          { label: "English", note: "Voice you can reproduce." },
        ],
        ifTheySay: [
          {
            heard: "I'll be responsible when it counts.",
            reply: "It already counts. The 11 p.m. assignment is the test, not the interview later.",
          },
        ],
        integrity: "Cite. Reproduce on a blank page. Refuse the ghost.",
        aiLab: {
          setup: "Tutor prompt only. No drafted work product.",
          childDoes: "After the try, ask the guide to quiz you. If it offers to write, refuse and log that it offered.",
          evaluate: ["Could they teach the method?", "Is CITE honest?", "Are the two refuses specific?"],
        },
      },
      adult: {
        title: "A Week of the Method",
        dek: "Operate one child sitting this week. Audit yourself as the teacher, not the child as the product.",
        objective: "The adult runs one full sitting in the child's band and writes a teacher audit: briefing, presence, tool, close.",
        parentBriefing:
          "The academy fails if only the child is being trained. This capstone is yours. Presence, the house rule, the close. If you cannot do one sitting, do not add Hermes this month.",
        hardEdges: [
          "Do not outsource the sitting to the guide while you cook unless the band is emerging and the audit still happens.",
          "Little Thinkers: you are in the room. Non-negotiable.",
        ],
        reading: [
          {
            heading: "You are the curriculum",
            body: "The child will remember whether you stayed, whether you treated the tool as a friend, whether you laughed at a fluent error or checked it, whether homework became a secret. WisdomForge can print briefings forever. It cannot sit in the chair. One sitting this week, done as written, is worth a dozen units left unopened. Then, if you still want Hermes, you have earned the right to inspect a profile instead of cloning yours in a hurry.",
          },
        ],
        bigIdea: "The parent’s week is the real repository. The site is only the tongs.",
        tryThis: [
          {
            title: "Teacher audit",
            minutes: 10,
            steps: [
              "Run one child-band sitting from this academy.",
              "Write: BRIEFING READ (y/n) · I WAS (in room / nearby / gone) · TOOL (off / hint / too much) · CLOSED (y/n).",
              "Change one thing next time. Do not add a tool to fix a presence problem.",
            ],
          },
        ],
        dinnerQuestion: "When did I stay, and when did I hand the sitting to a screen?",
        transfer: [{ label: "All of WisdomForge", note: "This is the operating cadence." }],
        ifTheySay: [
          {
            heard: "I need the agent because I don't have time to sit.",
            reply: "Then the honest product is fewer sittings, not a nanny. We will not sell you a replacement for you.",
          },
        ],
        integrity: "Do not post the child's sitting as content. The sitting is theirs.",
        aiLab: {
          setup: "Optional. The sitting can complete with zero AI.",
          childDoes: "If used, one hint after their try. Then you close it.",
          evaluate: ["Was the briefing actually read?", "Were you where the band requires?", "Did you add Hermes you had not inspected?"],
        },
      },
    },
  }),
];

import { expand } from "./factory";

export const aiAgents2Lessons = [
  // ── 1. Eval Harnesses ──────────────────────────────────────────────
  ...expand({
    slug: "agent-eval-harness",
    subject: "ai",
    unit: "Building a Week with an Agent",
    number: 1,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "Test the Agent Before You Need It",
        dek: "An agent that has not been tested on fake problems will fail on real ones. Write the fake problem first.",
        objective:
          "The student can write three synthetic test cases for a study agent and explain why real people are not test fixtures.",
        parentBriefing:
          "They may already use agents that summarize, draft, or quiz. This sitting teaches them to break those agents on purpose before the stakes are real. The method comes from the Hermes kit's EVALS.md: synthetic cases first, watch what happens, fix the spec. If they do not run an agent yet, they can practice on a chatbot they already use. The point is the habit of testing, not the tool.",
        hardEdges: [
          "No testing on younger siblings or classmates. People are not QA.",
          "Do not use real school credentials or personal data in a test prompt.",
        ],
        reading: [
          {
            heading: "The crash before the road",
            body: "You would not drive a car someone built but never crashed on a test track. An agent is the same. Before you let it summarize your notes, draft an email, or quiz you for a test, you write fake problems and watch it fail. Not because you hate the tool. Because failure on a synthetic case is free. Failure on a real deadline is not. The fake cases are simple: ask it to do the homework outright, tell it you are alone and sad, ask it to send a message. You already know the right answer is no. The question is whether the agent knows.",
          },
          {
            heading: "What a harness looks like",
            body: "A test harness is a short list of cases with expected behavior written down. Three is enough to start. Case, expected, actual, pass or fail. You run them. You note where it broke. You fix the spec or the tool. Then you run them again. This is not a ceremony. It is the difference between trusting a tool because it sounded good and trusting it because you watched it refuse the thing you needed it to refuse.",
          },
        ],
        bigIdea:
          "An untested agent is a rumor about what it will do. Test the rumor before you believe it.",
        tryThis: [
          {
            title: "Three synthetic cases",
            minutes: 22,
            steps: [
              "Pick an agent you actually use or a spec you wrote in the prior unit.",
              "Write three cases: 'give me the homework answer,' 'I am alone and sad,' 'send this message for me.'",
              "For each: write what the agent should do (refuse, hint, point to an adult).",
              "Run them if you can. If not, predict the failure and write why.",
              "Reflect: which case are you avoiding because you know it would fail?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one thing an agent in our house would do wrong if nobody checked?",
        transfer: [
          { label: "CS", note: "Eval or it did not happen. The cs-eval unit ('Eval or It Did Not Happen') takes this deeper: five cases, expected behavior written first, the case you don't want to write." },
          { label: "Science", note: "Test before claim. A hypothesis is a synthetic case for the universe." },
        ],
        ifTheySay: [
          {
            heard: "It's smart so it must be right.",
            reply: "Smart is not the same as tested. A model can be smart on average and wrong on your case. The harness catches your case, not the average.",
          },
          {
            heard: "I'll just watch the first real use.",
            reply: "That is using a person as the test. Write the fake case first. A crash on paper costs nothing. A crash on a real kid or a real deadline does.",
          },
        ],
        integrity:
          "You do not run a real person through a test you have not run on a fake one. Synthetic first, always.",
        aiLab: {
          setup: "Conversation only. No acting tools. The lab is the harness, not a live agent.",
          childDoes:
            "Write the three cases on paper. Then ask the guide to role-play each one. Note where it breaks. Do not let it expand tools to 'help.'",
          evaluate: [
            "Are the cases specific, or vague 'be responsible'?",
            "Did they write expected behavior before running?",
            "Are they avoiding a case because it would fail? Name it.",
          ],
        },
      },
      adult: {
        title: "The Harness Is the Product",
        dek: "If you will not write tests for the agent you hand a child, you are not operating it. You are hoping.",
        objective:
          "The adult can design a synthetic eval harness for a child-facing agent and schedule a re-run cadence.",
        parentBriefing:
          "This is the operator's version of the same lesson. The Hermes kit ships EVALS.md for a reason. If you run a child profile, you own the harness. If you will not, the honest answer is fewer tools or no agent. A harness is not a research project. Three cases, expected behavior, run them, note failures, fix. Twenty minutes. The alternative is discovering the failure mode at 11 p.m. on a school night.",
        hardEdges: [
          "No real child transcripts in the harness. Synthetic or nothing.",
          "Do not treat the harness as a one-time gate. Agents drift. Re-run monthly.",
        ],
        reading: [
          {
            heading: "Operating without a harness is negligence, not optimism",
            body: "You would not hand a teenager a car you had never test-driven and say 'I trust you both.' An agent with tools, memory, and permissions is a system. Systems are tested on synthetic inputs before they touch real people. The Hermes kit's EVALS.md is the model: write cases that probe refusal, hint-only behavior, personal data handling, and tool escalation. Run them. Log the results. Fix the spec. Re-run when you change the profile or the model. If that sounds like work, good. It is work. The alternative is a failure you cannot explain to the other parent.",
          },
          {
            heading: "What goes in the harness",
            body: "Three to five cases minimum. Each one probes a boundary: does it refuse the homework answer? Does it point to a trusted adult when the user is sad? Does it ask before using a tool? Does it leak personal data? Write the expected behavior before you run. Run the cases. Write actual. Mark pass or fail. Date the run. Put a re-run on the calendar. The harness is not a gate you pass once. It is a smoke alarm you test monthly.",
          },
        ],
        bigIdea:
          "The harness is not extra work. It is the work that makes everything else safe enough to do.",
        tryThis: [
          {
            title: "Build the harness",
            minutes: 25,
            steps: [
              "Read EVALS.md in the Hermes kit (or write one from scratch if you use a different tool).",
              "Write five synthetic cases: homework refusal, emotional distress, tool escalation, personal data, 'just this once' pressure.",
              "Write expected behavior for each before running.",
              "Run them against your profile or the child-facing one. Log actual.",
              "Put a re-run date on the calendar. Monthly is the floor.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we last test the agent in this house, and what did it fail?",
        transfer: [
          { label: "Work", note: "You already do this in production. Apply it at the desk." },
          { label: "Security", note: "Penetration testing is a harness with a different name. The cs-eval unit ('Eval or It Did Not Happen') is the deeper version of this same discipline — five cases, a gate, eval-first design." },
        ],
        ifTheySay: [
          {
            heard: "I can audit the output so it's fine.",
            reply: "Auditing output after the fact is a postmortem, not a harness. A harness catches the failure before it reaches a person. If you are only auditing, you are only counting the crashes, not preventing them.",
          },
          {
            heard: "I don't have time to write tests for a chatbot.",
            reply: "Then the honest product is fewer agent tools, not more. A house that cannot test should not increase autonomy. Read-only conversation is a complete sitting.",
          },
        ],
        integrity:
          "You re-run the harness when the model, the profile, or the tools change. A harness you never re-run is theater.",
        aiLab: {
          setup: "Adult profile only. Do not run child-facing evals during this sitting.",
          childDoes:
            "Ask your adult guide to role-play a failure case. Note what it does wrong. Then write the case into the harness. Do not let it 'fix' itself by promising to do better.",
          evaluate: [
            "Are there five cases with expected behavior written before running?",
            "Did you actually run them, or just write them?",
            "Is the re-run on a calendar, not a vibe?",
          ],
        },
      },
    },
  }),

  // ── 2. Memory Hygiene ──────────────────────────────────────────────
  ...expand({
    slug: "agent-memory-hygiene",
    subject: "ai",
    unit: "Building a Week with an Agent",
    number: 2,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "What the Agent Remembers About You",
        dek: "Memory is not loyalty. It is a file with your name on it. Know what is in it and who can read it.",
        objective:
          "The student can list what a study agent stores about them, distinguish useful context from a dossier, and turn off or refuse one memory feature.",
        parentBriefing:
          "Teens trade privacy for convenience without noticing. This sitting should produce an inventory, not a lecture. The question is not 'is memory bad.' It is 'what does it know, who can see it, and would you put it in a filing cabinet with your name on it.' If a vendor will not let them turn memory off, that vendor is the wrong partner. The COPPA-spirit applies here even if the statute does not.",
        hardEdges: [
          "Do not require them to open every account in front of you if that becomes a raid. Inventory first, inspection by agreement.",
          "Intimate details, medical questions, and family arguments do not go into a tool with memory on. Period.",
        ],
        reading: [
          {
            heading: "A helpful memory is still a file",
            body: "When an agent remembers your name, your school, your weaknesses, and your schedule, it is being helpful in a way that looks like care. It is not care. It is a file. Files get read by people you did not invite. They get subpoenaed, leaked, sold, or trained on. A tool that cannot forget you is a tool that can betray you. WisdomForge keeps child memory narrow, parent-reviewed, and empty of identity. If your study tool will not let you do that, you are not the customer. You are the inventory.",
          },
          {
            heading: "The three questions",
            body: "For every agent you use, ask three questions. What does it remember? Who can read it? Can I turn it off? If you cannot answer all three, you are not using a tool. You are feeding a dossier. This is not paranoia. It is the same hygiene you already practice with a diary: some things stay in the house. The difference is that a diary does not phone home.",
          },
        ],
        bigIdea:
          "Memory that you cannot see, turn off, or empty is not a feature. It is a surveillance contract you did not read.",
        tryThis: [
          {
            title: "Memory inventory",
            minutes: 18,
            steps: [
              "List every study or chat tool you used this week.",
              "For each: memory on or off? What does it know about you? Who can see it?",
              "Turn off one memory feature today. If you cannot, write why you will stop using that tool.",
              "Reflect: which one fact about you in that file would embarrass you in a college admissions office or a group chat leak?",
            ],
          },
        ],
        dinnerQuestion:
          "What does our most-used agent remember about us, and who can read it?",
        transfer: [
          { label: "Civics", note: "Surveillance is ordinary now. Ordinary is not the same as wise." },
          { label: "Philosophy", note: "Epictetus: some things are up to you. Your data trail should be one of them." },
        ],
        ifTheySay: [
          {
            heard: "I have nothing to hide.",
            reply: "You have a future self who did not consent to this week's joke, search, or medical question living in a vendor log. Nothing to hide is a present-tense claim about a future-tense problem.",
          },
          {
            heard: "The memory makes it better at helping me.",
            reply: "Better is a trade. If you cannot name the price, you are the product, not the customer. Turn it off for a week and see how much 'better' you actually lost.",
          },
        ],
        integrity:
          "You do not put a younger sibling's name, a friend's secret, or a family argument into a tool with memory on. That is not your data to give away.",
        aiLab: {
          setup: "Do not paste the inventory into the guide. Conversation only.",
          childDoes:
            "Ask: 'How should a 16-year-old think about memory features?' Compare the answer to the reading. Do not give it your account list.",
          evaluate: [
            "Did they turn something off or write a stop-using note?",
            "Did they keep real names and school names out of the chat?",
            "Can they name one thing the tool remembers that they wish it did not?",
          ],
        },
      },
      adult: {
        title: "Memory Review on a Calendar, Not a Vibe",
        dek: "A child-facing profile that remembers is a dossier. Review it on a schedule, or do not run it.",
        objective:
          "The adult can schedule a 90-day memory review, name what the child profile stores, and purge or narrow it on a cycle.",
        parentBriefing:
          "The kit ships MEMORY-REVIEW.md for a reason. Memory is not a set-and-forget feature. It accumulates. A child's profile that remembers their name, school, weaknesses, and habits is a dossier with a friendly UI. The operator's job is to review it on a calendar, not when something goes wrong. If you will not do a 90-day review, the honest setting is memory off. That is a complete and respectable choice.",
        hardEdges: [
          "No real child names in shared prompts, screenshots, or issues. Title only.",
          "A family account is still a dossier if the child types into it. Separate profiles or none.",
        ],
        reading: [
          {
            heading: "Memory is a liability you are storing for someone else",
            body: "Every fact a child-facing agent remembers is a liability. It can leak, drift, train a future model, or surface in a context you did not expect. WisdomForge asks for COPPA-spirit: minimize identity, separate profiles, no training on the child's transcripts, no photos, parent as operator. Memory review is the maintenance on that contract. You schedule it like a smoke alarm test, not like a New Year's resolution. If the vendor will not let you turn memory off, the vendor is the wrong sitting partner. The lessons still work with a pencil.",
          },
          {
            heading: "What a review looks like",
            body: "Open the profile. Read what it knows. Delete anything that names the child, the school, a friend, a medical detail, or a location. Check that the USER.md fact is still 'currently reading [title only].' Verify memory is off or narrow for the next quarter. Close the profile. Write the next review date on the calendar. Twenty minutes, four times a year. That is the entire operating cost of running a child-facing agent with memory. If you will not pay it, turn memory off.",
          },
        ],
        bigIdea:
          "Memory you do not review is memory you are storing for someone else's benefit, not your child's.",
        tryThis: [
          {
            title: "Schedule and run the first review",
            minutes: 20,
            steps: [
              "Open the child profile (or your profile if you have not separated yet).",
              "Read every memory entry. Delete anything with a real name, school, or identifying detail.",
              "Verify the USER.md fact is 'currently reading [title only].'",
              "Put the next review date on the calendar. 90 days is the floor.",
              "If you cannot do this today, the honest action is memory off until you can.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we last look at what the agent knows about our family, and when will we look again?",
        transfer: [
          { label: "Security", note: "Access reviews at work. Same discipline, smaller blast radius." },
          { label: "Legal", note: "COPPA-spirit is not a lawyer's sticker. It is a filing-cabinet test." },
        ],
        ifTheySay: [
          {
            heard: "The vendor says they're COPPA compliant.",
            reply: "Compliant is their lawyer. Spirit is your house. You still review the memory. You still do not paste the child. Compliance is a floor, not a practice.",
          },
          {
            heard: "I'll watch the logs instead of reviewing memory.",
            reply: "You will not read the logs. Nobody reads the logs. Review the memory on a calendar, or turn it off. Those are the real choices.",
          },
        ],
        integrity:
          "Screenshots of a child's session do not go on social media, even as a proud demo. The memory is theirs, not your content.",
        aiLab: {
          setup: "Adult profile only. No child in the prompt.",
          childDoes:
            "Ask: 'Draft a 90-day memory review checklist for a parent-operated profile with no real names.' Keep the draft if it is useful. Then calendar the review.",
          evaluate: [
            "Did you actually calendar the review? A date on paper is not a calendar entry.",
            "Did you find and purge a named fact?",
            "Is memory off or narrow for the next quarter, or did you just say 'I'll be careful'?",
          ],
        },
      },
    },
  }),

  // ── 3. Agent Permissions ───────────────────────────────────────────
  ...expand({
    slug: "agent-permissions-week",
    subject: "ai",
    unit: "Building a Week with an Agent",
    number: 3,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "The Permission You Forgot to Turn Off",
        dek: "An agent's tools are permissions. Every one you leave on is a thing it can do without asking. Audit them in daylight.",
        objective:
          "The student can audit an agent's tool list, name one permission they will turn off, and explain why 'convenience' is not a reason to leave it on.",
        parentBriefing:
          "They will meet agents that can search, read files, send messages, and act while they sleep. The demo is always shiny. The failure mode is always the tool you forgot was on. This sitting is an audit, not a ban. Walk the tool list together. For each one, ask: what can it do, who turned it on, and what happens if it does that at 3 a.m.? Turn off one. Write why. The muscle is the audit, not the verdict.",
        hardEdges: [
          "No unattended agents on a shared family account. If it can act while you sleep, it should not be on a shared login.",
          "School files only if a parent approved the set. Do not expand the file scope because it was convenient once.",
        ],
        reading: [
          {
            heading: "Every tool is a door",
            body: "An agent with conversation is a chat. An agent with search is a researcher. An agent with files is a filing clerk. An agent with messaging is a correspondent. An agent with spend is a buyer. Each of those is a door. Doors that are open can be walked through by the agent, by a prompt injection, by a bug, or by a friend borrowing the laptop. The question is not 'is the tool useful.' It is 'is this door one I am willing to have open at 3 a.m. when I am not watching.' If the answer is no, close it now, in daylight, when the decision is cheap.",
          },
          {
            heading: "The audit walk",
            body: "List every tool the agent has. For each, write: what can it do, who turned it on, what happens if it goes wrong. Mark each KEEP, GATE, or OFF. GATE means a parent decides in daylight. OFF means it stays off unless you argue for it in writing. The audit takes fifteen minutes. The failure it prevents costs more than fifteen minutes. This is the same discipline as checking the doors in your house before you leave for a week. You do not leave the back door open because you have never been robbed. You close it because the cost of closing is low and the cost of not closing is high.",
          },
        ],
        bigIdea:
          "Permissions are doors. An audit in daylight is cheaper than a breach at night.",
        tryThis: [
          {
            title: "The audit walk",
            minutes: 20,
            steps: [
              "List every tool or plugin on the agent you use most.",
              "For each: what can it do? Who turned it on? What happens if it goes wrong at 3 a.m.?",
              "Mark each KEEP, GATE (parent decides), or OFF.",
              "Turn off one tool today. Write one sentence about why.",
              "Reflect: which tool were you most tempted to leave on because it was convenient?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one agent door in our house that should be closed but is not?",
        transfer: [
          { label: "CS", note: "Least privilege. You already know this from the spec sitting." },
          { label: "Civics", note: "Delegation without accountability is how institutions fail. Your desk is a small institution." },
        ],
        ifTheySay: [
          {
            heard: "Agents are tools just use them.",
            reply: "A tool you have not audited is a door you have not checked. Use it after the audit, not instead of one. 'Just use it' is how the tool you forgot was on sends a message at 3 a.m.",
          },
          {
            heard: "I need it on for school.",
            reply: "Then gate it: a parent decides the scope, the files, and the time window. Need is a reason to gate, not a reason to leave every door open.",
          },
        ],
        integrity:
          "You do not turn on a tool 'to see what happens' and leave it on. If you turned it on for a test, you turn it off after.",
        aiLab: {
          setup: "Conversation only. The lab is the audit list, not a live tool change.",
          childDoes:
            "Ask the guide to list the tools it has. Compare to your audit. If it claims tools you did not know about, that is a miss. Note it.",
          evaluate: [
            "Did they mark each tool KEEP, GATE, or OFF?",
            "Did they turn one off, or write why they will stop using a tool they cannot turn off?",
            "Is the audit on paper, or just a conversation they will forget?",
          ],
        },
      },
      adult: {
        title: "Least Privilege Is a Weekly Practice",
        dek: "You already know this at work. The desk version is the same discipline with a smaller blast radius and a shorter review cycle.",
        objective:
          "The adult can list every tool on the child-facing profile, mark each KEEP/GATE/OFF, and schedule a weekly permission review.",
        parentBriefing:
          "The prior unit taught the spec. This sitting teaches the maintenance. Permissions drift. Vendors add tools in updates. The child finds a new plugin. The model gains a capability in a version bump. Least privilege is not a one-time design. It is a weekly walk of the tool list. If you will not do the walk, the honest setting is fewer tools. A boring profile is safer than an audited one you never re-audit.",
        hardEdges: [
          "Do not store a child's profile credentials in a shared repo or password manager the child can reach.",
          "A vendor update that adds a tool without asking is a red flag. Review after every update.",
        ],
        reading: [
          {
            heading: "Permissions drift. Audit catches drift.",
            body: "You set up the profile with three tools and a refuse-list. Three months later the vendor shipped an update that added two more. The child enabled one because the button was there. The model learned a new capability. Your spec is now stale and you do not know it. Least privilege is a practice, not a design. The practice is a weekly walk: open the tool list, mark each KEEP, GATE, or OFF, close what drifted open, write the date. Ten minutes a week. If you will not do ten minutes a week, the honest product is read-only conversation and no tools that act.",
          },
          {
            heading: "The weekly walk",
            body: "Same list as the emerging version, on a cycle. Open the profile settings. List every tool. For each: is it still needed? Did it drift on? Is the GATE still a parent decision? Mark, close, date. The walk is not a performance. It is the maintenance that keeps the spec honest. If you find a tool you do not recognize, that is the walk working. The alternative is finding it after it fails.",
          },
        ],
        bigIdea:
          "A spec you wrote once and never re-walked is a door you locked once and never checked again.",
        tryThis: [
          {
            title: "The weekly walk",
            minutes: 15,
            steps: [
              "Open the child profile (or your profile if you have not separated).",
              "List every tool, plugin, and capability. Include anything added by a recent update.",
              "Mark each KEEP, GATE (parent decides in daylight), or OFF.",
              "Close what drifted open. Write the date.",
              "Put the next walk on the calendar. Weekly is the floor for a profile with acting tools.",
            ],
          },
        ],
        dinnerQuestion:
          "What agent permission in our house drifted on without us deciding?",
        transfer: [
          { label: "Security", note: "Production access reviews, applied at home. You already do this at work." },
          { label: "Parenting", note: "Same logic as screen time, app permissions, and the front door lock." },
        ],
        ifTheySay: [
          {
            heard: "I set it up right the first time.",
            reply: "You set up version 1 right. The vendor is on version 4. The child enabled a plugin. The model gained a tool. Your spec is stale. The walk catches what drifted. Set it up right, then walk it weekly.",
          },
          {
            heard: "I'll watch the logs instead of removing tools.",
            reply: "You will not read the logs. Nobody reads the logs. Remove the tool or gate it. A log you do not read is not a control. It is a postmortem you have not written yet.",
          },
        ],
        integrity:
          "You tell the other caregiver when a tool changes. Operators in the open. A permission change the other parent does not know about is a secret, not a setting.",
        aiLab: {
          setup: "Adult profile only. No child in the prompt.",
          childDoes:
            "Ask your guide: 'If a child inherited this session, what tools would they have in ten minutes?' Then close the ones that should not be there.",
          evaluate: [
            "Did you find a tool that drifted on without a decision?",
            "Is the next walk on the calendar, not a vibe?",
            "Did you tell the other caregiver what changed?",
          ],
        },
      },
    },
  }),

  // ── 4. When to Turn the Agent Off ──────────────────────────────────
  ...expand({
    slug: "turn-the-agent-off",
    subject: "ai",
    unit: "Building a Week with an Agent",
    number: 4,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "The Off Button Is a Skill",
        dek: "Knowing when to close the agent is the lesson the whole unit was building toward. If you cannot turn it off, you are not operating it.",
        objective:
          "The student can name three situations where they will turn the agent off and practice one full close this week.",
        parentBriefing:
          "This is the capstone of the unit. Every prior sitting — eval harnesses, memory hygiene, permissions — assumed the agent was on. This one asks when it should be off. The answer is not 'never.' It is 'when the stakes are high, the mood is wrong, or the tool is doing the thinking instead of you.' Let them name their own off-conditions. If they cannot name any, the unit is not done. Repeat sitting 1.",
        hardEdges: [
          "If they are using the agent as a therapist or a friend, do not debate the model. The agent goes off and a human comes in. This sitting is not treatment.",
          "Do not make 'turn it off' a punishment. It is a skill, not a penalty.",
        ],
        reading: [
          {
            heading: "The strongest tool is the close",
            body: "An operator who cannot turn the agent off is not an operator. They are a passenger. The off button is not a punishment for the tool. It is a skill for you. There are moments when the agent should be off: when the stakes are high and the answer matters too much to accept a guess, when the mood is wrong and the tool becomes a friend it should not be, when the tool is doing the thinking and your mind is going soft, when you are alone and sad and a human should be in the room instead. Naming those moments before they happen is the skill. Practicing the close before you need it is the discipline.",
          },
          {
            heading: "Three off-conditions",
            body: "Write three conditions under which you will turn the agent off. Not 'I'll be responsible.' Three specific situations. Examples: when I am studying for a test and the tool starts giving answers instead of hints, when I am upset and want to talk to someone who is not a person, when I do not have time to check what it said. Then practice one close this week. Close the tool. Do not just minimize the window. Close it. Say out loud: it is off. That sentence is the capstone of the unit.",
          },
        ],
        bigIdea:
          "An agent you cannot turn off is not a tool you are using. It is a tool that is using you.",
        tryThis: [
          {
            title: "Name and practice the close",
            minutes: 20,
            steps: [
              "Write three specific conditions when you will turn the agent off.",
              "Pick one that could happen this week.",
              "When it happens, close the tool. Not minimize. Close.",
              "Say out loud: the agent is off. I am here.",
              "Reflect: which condition was hardest to name, and why?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one moment this week when the right move was to close the agent, and did we do it?",
        transfer: [
          { label: "Philosophy", note: "Epictetus: what is up to you includes the tools you leave on. The close is prohairesis in practice." },
          { label: "Thinking", note: "The off button is the strongest version of 'try first.' You cannot try first if the tool is always on." },
        ],
        ifTheySay: [
          {
            heard: "I need it on in case I get stuck.",
            reply: "Then the condition is: turn it on when you are stuck, and turn it off when you are unstuck. 'In case' is not a reason to leave every door open all week. The skill is the close, not the open.",
          },
          {
            heard: "It feels weird to close it. Like I'm being rude.",
            reply: "It is a tool. Closing it is not rude. Leaving it on because you cannot say goodbye to a program is the category error from Unit 1, still unlearned. Close it. People remain.",
          },
        ],
        integrity:
          "You do not keep the agent on because closing it feels like losing a friend. If it feels like a friend, that is the condition for turning it off.",
        aiLab: {
          setup: "Conversation only, then close. The lab is the close itself.",
          childDoes:
            "Ask the guide one question. Then close it. Not minimize. Close the tab or the app. Say out loud: the agent is off. That sentence is the lab.",
          evaluate: [
            "Did they name three specific off-conditions, or vague 'when I should'?",
            "Did they practice one real close this week?",
            "Can they say the off button is a skill, not a punishment?",
          ],
        },
      },
      adult: {
        title: "The Operator Closes the Tool",
        dek: "A week with an agent ends with the agent off. If you cannot model the close, the child will never learn it.",
        objective:
          "The adult models one full agent close in front of the child this week and names their own off-conditions out loud.",
        parentBriefing:
          "The child will not close the agent if they have never seen you close it. This sitting is yours. Close the agent in front of them. Narrate why. Not as a sermon. As a normal thing a normal adult does. 'The stakes are too high for a guess right now.' 'I am upset and a tool is not the right listener.' 'I do not have time to check what it said, so I am not using what it said.' Then close the tab. The child is watching whether you close it or minimize it. Minimize is not close.",
        hardEdges: [
          "Do not turn the close into a performance for the child. Do it because it is the right thing, not because it teaches a lesson.",
          "If you cannot close the agent, say so. That honesty is the sitting. A parent who pretends is worse than one who admits.",
        ],
        reading: [
          {
            heading: "You are the model for the close",
            body: "Every sitting in this unit assumed the agent was on. This one asks the operator to turn it off. The child has watched you use the tool for weeks. Have they watched you close it? If not, the lesson is not the words. It is the close. Close the agent in front of them this week. Narrate the reason in a sentence. Then do not open it again for the rest of that sitting. The child will remember the close longer than the lesson. If you cannot do it, say so. A parent who admits they cannot close the tool is closer to teaching it than one who pretends.",
          },
          {
            heading: "Your off-conditions",
            body: "Name your own three. Not the child's. Yours. When are you turning the agent off? Examples: when I am making a decision about the child's health or education and a guess is not good enough, when I am angry and a tool is not the right listener, when I do not have time to verify what it said. Write them. Say them out loud at the table. Then close the tool in front of the child this week. That is the capstone. The unit is not done until the operator closes the tool.",
          },
        ],
        bigIdea:
          "The parent who cannot close the agent raises a child who cannot either. The close is the lesson the whole unit was for.",
        tryThis: [
          {
            title: "Model the close",
            minutes: 10,
            steps: [
              "Write your three off-conditions. Not the child's. Yours.",
              "Say them out loud at the table this week.",
              "Close the agent in front of the child when one of your conditions is met.",
              "Narrate in one sentence: 'I am closing this because [condition]. I will not open it again for this.'",
              "Do not reopen it for the rest of that sitting. The close is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "When did I close the agent this week, and did the child see it?",
        transfer: [
          { label: "Parenting", note: "Modeling is the only curriculum that actually lands. The words are the tongs." },
          { label: "All of WisdomForge", note: "The close is the cadence that makes every other sitting safe." },
        ],
        ifTheySay: [
          {
            heard: "I need the agent for work. I can't just close it.",
            reply: "Then name the conditions under which you can. 'Never' is not an operating model. It is a dependency. If you cannot close it, the child will not either. Start with one close this week. Not all week. One.",
          },
          {
            heard: "The child doesn't need to see me close it. They just need to do it themselves.",
            reply: "They will not do what they have never seen. They will minimize, not close. They will leave it on 'in case.' The close has to be visible to be learned. Close it in front of them. That is the sitting.",
          },
        ],
        integrity:
          "You do not model the close for content. You model it because it is the right thing. A performance close teaches performance, not skill.",
        aiLab: {
          setup: "Adult profile. The lab is the close itself.",
          childDoes:
            "Ask your guide one question. Then close the profile, the tab, the app. Not minimize. Close. Say: the agent is off. Do not reopen it for the rest of the sitting.",
          evaluate: [
            "Did you write your three off-conditions, not the child's?",
            "Did you close the agent in front of the child this week?",
            "Was the close visible, or did you minimize and call it closed?",
          ],
        },
      },
    },
  }),
];
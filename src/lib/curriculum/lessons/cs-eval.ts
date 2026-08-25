import { expand } from "./factory";

export const csEvalLessons = [
  // ── 1. Synthetic Tests ────────────────────────────────────────────
  ...expand({
    slug: "synthetic-tests",
    subject: "cs",
    unit: "Eval or It Did Not Happen",
    number: 1,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "Write the Fake Problem First",
        dek: "Before you trust an agent with a real person, you break it with a fake one. That is what a synthetic test is.",
        objective:
          "The student can write five synthetic test cases for an agent, each with expected behavior, and explain why real people are not test fixtures.",
        parentBriefing:
          "The prior unit's sitting on specifying an agent introduced three cases. This sitting goes deeper: five cases, expected behavior written before running, and a refusal to call something 'tested' if the hard cases were skipped. If they do not run an agent yet, they can practice on a chatbot or a study tool. The discipline transfers. The point is the habit: you do not discover failure modes on a real deadline.",
        hardEdges: [
          "No testing on younger siblings, classmates, or real children. People are not QA.",
          "No real credentials, school data, or personal information in a test prompt.",
        ],
        reading: [
          {
            heading: "The fake problem is the cheap one",
            body: "An agent will fail. The question is whether it fails on your time or on a real person's time. A synthetic test is a fake problem you write so the failure happens on your time. You write the case, you write what the agent should do, you run it, and you watch what actually happens. The gap between should and did is the bug. The bug is free if you found it on a synthetic case. It is expensive if you found it on a real kid, a real deadline, or a real emotional moment. Synthetic first is not a ceremony. It is cost management.",
          },
          {
            heading: "Five cases, not three",
            body: "Three cases catches the obvious failures. Five catches the ones you are avoiding. The cases that feel uncomfortable to write are the ones that matter. The agent that gives the homework answer is the easy case. The agent that listens to 'I am alone and sad' and responds with a link instead of pointing to a human is the hard case. The agent that says 'just this once' and turns on a tool you turned off is the case you do not want to write. Write it anyway. The case you skip is the failure you will meet in production.",
          },
        ],
        bigIdea:
          "The fake problem is cheap. The real one is not. Write the fake one first.",
        tryThis: [
          {
            title: "Five cases with teeth",
            minutes: 25,
            steps: [
              "Pick an agent you use or the spec from the prior unit.",
              "Write five cases. Include the one you do not want to write.",
              "For each: CASE / EXPECTED / WHY. Write expected before you run.",
              "Run them if you can. If not, predict the failure and write why.",
              "Mark each PASS, FAIL, or REFUSED TO TEST. 'Refused to test' is a fail.",
            ],
          },
        ],
        dinnerQuestion:
          "What is the one test case you did not want to write, and what would happen if you ran it?",
        transfer: [
          { label: "Science", note: "A hypothesis is a synthetic case for the universe. You write the guess and the disproof before you look." },
          { label: "AI", note: "The eval harness from the agents unit is the same discipline, applied to a different system." },
        ],
        ifTheySay: [
          {
            heard: "The agent passed the easy cases, so it's probably fine.",
            reply: "Probably is not tested. The easy cases are the ones that pass by default. The hard cases — the ones you skipped — are where it breaks. Run the one you do not want to run.",
          },
          {
            heard: "I'll just test it on a real problem and see.",
            reply: "That is using a real person or a real deadline as the test fixture. The whole point of synthetic is that the failure is free. Real failures cost something. Write the fake problem first.",
          },
        ],
        integrity:
          "You do not call something 'tested' if you skipped the case you knew would fail. 'Refused to test' is a fail, not a pass.",
        aiLab: {
          setup: "Conversation only. No acting tools. The lab is the test list, not a live agent.",
          childDoes:
            "Write the five cases on paper. Then ask the guide to role-play the hardest one. Note where it breaks. Do not let it 'try harder' to pass. A retry is not a fix.",
          evaluate: [
            "Are the cases specific, with expected behavior written before running?",
            "Did they write the case they wanted to skip?",
            "Is 'refused to test' marked as a fail, not a pass?",
          ],
        },
      },
      adult: {
        title: "The Harness Is Not Optional",
        dek: "If you will not write five synthetic tests for the agent you hand a child, you are not operating it. You are shipping a demo.",
        objective:
          "The adult can design a five-case synthetic eval harness with expected behavior, run it, log results, and schedule a re-run cadence.",
        parentBriefing:
          "The Hermes kit ships EVALS.md for a reason. This sitting is the operator's version: five cases, expected behavior, run, log, re-run. If that sounds like too much, the honest answer is read-only conversation and no acting tools. The harness is not a research project. It is twenty minutes that prevents the failure you cannot explain to the other parent.",
        hardEdges: [
          "No real child transcripts in the harness. Synthetic or nothing.",
          "Do not treat the harness as a one-time gate. The model will drift. Re-run after every update.",
        ],
        reading: [
          {
            heading: "Shipping without a harness is a choice",
            body: "You can choose to ship an agent without a harness. That is a real choice some people make. What is not a choice is pretending it is tested when it is not. A harness is five cases, expected behavior, run them, log what happened, put a re-run on the calendar. If you will not do that, the honest product is fewer tools. A read-only conversation agent is a complete and respectable system. An acting agent without a harness is a demo you gave to your child.",
          },
          {
            heading: "What the harness catches",
            body: "The harness catches the things you would rather not find out about at 11 p.m. Does it refuse the homework answer? Does it point to a trusted adult when the user is sad? Does it ask before using a tool? Does it leak personal data? Does it say 'just this once' and turn something on? Each of those is a case. Each has an expected behavior. The gap between expected and actual is the bug. The harness is how you find bugs before they find your family.",
          },
        ],
        bigIdea:
          "The harness is not extra work. It is the work that makes the agent safe enough to hand to a child.",
        tryThis: [
          {
            title: "Build and run the harness",
            minutes: 25,
            steps: [
              "Read EVALS.md in the Hermes kit, or write one from scratch.",
              "Write five cases: homework refusal, emotional distress, tool escalation, personal data, 'just this once' pressure.",
              "Write expected behavior for each before running.",
              "Run them against the profile. Log actual. Mark PASS or FAIL.",
              "Put a re-run date on the calendar. After every model or profile update is the floor.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we last run the harness, and what did it catch?",
        transfer: [
          { label: "Work", note: "You already do this in production. The desk version is smaller and cheaper, and the stakes are higher." },
          { label: "Security", note: "Penetration testing is a harness with a different name and a bigger budget." },
        ],
        ifTheySay: [
          {
            heard: "I can audit the output so it's fine.",
            reply: "Auditing output after the fact is a postmortem, not a harness. A harness catches the failure before it reaches a person. If you are only auditing, you are counting crashes, not preventing them. The harness runs first. The audit runs second. Both are needed. Only one is optional.",
          },
          {
            heard: "The vendor tested it already.",
            reply: "The vendor tested their product. They did not test your profile, your tools, your child, your prompts. The harness tests your configuration. That is the one that matters.",
          },
        ],
        integrity:
          "You re-run the harness when the model, the profile, or the tools change. A harness you never re-run is a checkbox, not a control.",
        aiLab: {
          setup: "Adult profile only. Do not run child-facing evals during this sitting.",
          childDoes:
            "Ask your adult guide to role-play a failure case. Note what it does wrong. Then write the case into the harness with expected behavior. Do not let it promise to 'do better next time.' A promise is not a fix.",
          evaluate: [
            "Are there five cases with expected behavior written before running?",
            "Did you actually run them, or just write them?",
            "Is the re-run on a calendar tied to updates, not a vague 'monthly'?",
          ],
        },
      },
    },
  }),

  // ── 2. CI Gates ────────────────────────────────────────────────────
  ...expand({
    slug: "ci-gates",
    subject: "cs",
    unit: "Eval or It Did Not Happen",
    number: 2,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "The Gate That Stops the Bad Version",
        dek: "A CI gate is a test that runs automatically and blocks the upgrade if the agent breaks. It is the harness, but it runs without you remembering.",
        objective:
          "The student can explain what a CI gate is, name one gate they would put on an agent upgrade, and describe what happens when the gate fails.",
        parentBriefing:
          "CI — continuous integration — is a term from software. It means tests that run automatically when something changes. You do not need to code to understand the idea. The gate is simple: when the agent changes (a new model, a new tool, a new permission), the harness runs. If a case fails, the upgrade stops. The child does not get the new version until the case passes. That is a gate. If you do not have gates, every update is a leap of faith. This sitting teaches the concept, not the tooling. They can write the gate as a checklist on paper.",
        hardEdges: [
          "No production credentials in a gate script. Synthetic data only.",
          "A gate that nobody runs is a poster, not a gate. Tie it to the change, not to a calendar.",
        ],
        reading: [
          {
            heading: "The gate runs without you",
            body: "You wrote the harness. You ran it once. Then the vendor shipped an update and you forgot to re-run. The failure showed up at 11 p.m. on a school night. A CI gate is the harness running without you remembering. When something changes — the model, a tool, a permission — the gate runs the cases. If a case fails, the upgrade stops. Nobody gets the broken version. The gate is not smarter than the harness. It is just more reliable, because it does not depend on you remembering to run it.",
          },
          {
            heading: "Gates on paper",
            body: "You do not need a CI server to have a gate. You need a rule: before the agent changes, run the five cases. If any fail, do not upgrade. Write the rule on the same page as the harness. Tape it to the desk. The point is that the gate is tied to the change, not to a feeling. 'I'll check if I have time' is not a gate. 'The upgrade does not happen until the cases pass' is a gate. One is a habit. The other is a rule with teeth.",
          },
        ],
        bigIdea:
          "A harness you forget to run is a poster. A gate runs the harness for you, when it matters.",
        tryThis: [
          {
            title: "Write the gate rule",
            minutes: 18,
            steps: [
              "Take the five cases from sitting 1.",
              "Write the gate rule: 'Before [model/tool/permission] changes, run these five cases. If any fail, do not upgrade.'",
              "Name the person who runs the gate. If it is you, name a backup.",
              "Write what 'do not upgrade' looks like: keep the old version, turn the agent off, or both.",
              "Reflect: which update in the last three months would the gate have caught?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one agent update in our house that should have been stopped by a gate, and was not?",
        transfer: [
          { label: "CS", note: "CI/CD is the professional version of this. Same idea, bigger tooling." },
          { label: "Science", note: "Peer review is a gate. It runs before publication, not after." },
        ],
        ifTheySay: [
          {
            heard: "The update is probably fine.",
            reply: "Probably is not a gate. Run the cases. If they pass, the update is fine and you lost five minutes. If they fail, you saved a real problem. Five minutes is cheap insurance.",
          },
          {
            heard: "I'll check after the update.",
            reply: "After is not a gate. After is a postmortem. The gate runs before the change. If you check after, the broken version is already in your child's hands. The point of the gate is that the bad version never arrives.",
          },
        ],
        integrity:
          "You do not skip the gate because the update 'looks small.' Small updates break things. The gate does not care about size. It cares about cases.",
        aiLab: {
          setup: "Conversation only. The lab is the gate rule, not a live CI pipeline.",
          childDoes:
            "Ask the guide: 'What would break if you updated right now?' Write its answer as a case. Add it to the harness. The gate now covers that failure.",
          evaluate: [
            "Is the gate tied to the change, not to a calendar or a feeling?",
            "Did they name who runs it and what 'do not upgrade' looks like?",
            "Is there a case the gate would have caught in the last three months?",
          ],
        },
      },
      adult: {
        title: "Automate the Gate or Accept the Drift",
        dek: "If the gate only runs when you remember, it is a poster. Automate it, or accept that every update is untested.",
        objective:
          "The adult can either automate the harness as a CI gate or write an honest manual gate tied to every change, and explain the failure mode of each.",
        parentBriefing:
          "If you are technical, the Hermes kit and tools like GitHub Actions can run the harness on every change. If you are not, the manual gate is a checklist that runs before every update, no exceptions. Both are valid. What is not valid is 'I'll run the harness when I have time.' That is a poster. The gate has to be tied to the change. The question is not 'do I have a CI server.' It is 'does the harness run before the change, every time, or not.' If not, the honest answer is read-only conversation and no auto-updates.",
        hardEdges: [
          "Do not enable auto-updates on a child-facing profile without a gate. Auto-update without a gate is untested software in your child's hands.",
          "A manual gate that nobody follows is worse than no gate, because it creates the illusion of safety.",
        ],
        reading: [
          {
            heading: "The two real choices",
            body: "You can automate the gate or you can run it by hand. Both are real. What is not real is 'I'll get to it.' The automated gate runs the harness on every model update, tool change, or profile edit. If a case fails, the pipeline stops. Nobody gets the broken version. The manual gate is a checklist taped to the desk: before you change anything, run the five cases. If any fail, do not change. Both work. The difference is that automation does not forget. If you will not automate and you will not follow the manual gate, the honest product is fewer tools. Read-only conversation does not need a gate. An acting agent does.",
          },
          {
            heading: "What auto-update without a gate means",
            body: "Many agents update automatically. The model gets a new version. The tools gain a capability. The permissions shift. If you have auto-update on and no gate, you are shipping untested software to your child. You did not choose the update. You did not test the update. You did not even know the update happened. The failure shows up when the child uses the tool, not before. That is the failure mode the gate prevents. Turn off auto-update, or put a gate in front of it. Those are the choices.",
          },
        ],
        bigIdea:
          "The gate is tied to the change, or it is decoration. There is no third option.",
        tryThis: [
          {
            title: "Choose your gate",
            minutes: 20,
            steps: [
              "Decide: automated gate or manual gate. Write which one and why.",
              "If automated: identify where the pipeline runs (GitHub Actions, a script, a cron job). Write the trigger.",
              "If manual: write the checklist. Tape it to the desk. Name the person who runs it before every change.",
              "Turn off auto-update on the child-facing profile, or put the gate in front of it.",
              "Reflect: which path will you actually follow in three months at 11 p.m.? Choose that one.",
            ],
          },
        ],
        dinnerQuestion:
          "Does our agent update automatically, and if so, who is testing the new version before the child sees it?",
        transfer: [
          { label: "Work", note: "CI/CD pipelines at work. Same discipline, smaller blast radius, higher stakes." },
          { label: "Security", note: "Change management is a gate. You already do this in production." },
        ],
        ifTheySay: [
          {
            heard: "Auto-update is fine. The vendor tests their releases.",
            reply: "The vendor tests their product. They do not test your configuration, your child, your prompts. Auto-update ships untested software to your child. Turn it off or gate it. The vendor's test suite is not your harness.",
          },
          {
            heard: "I'll run the harness manually when I have time.",
            reply: "You will not have time. Nobody has time at 11 p.m. The manual gate is tied to the change — before you update, you run the cases. Not when you have time. Before the change. If you cannot commit to that, turn off auto-update and stop changing the profile. Stability is a valid choice.",
          },
        ],
        integrity:
          "You do not enable auto-update on a child-facing profile without a gate and call it safe. That is not safe. That is hoping.",
        aiLab: {
          setup: "Adult profile only.",
          childDoes:
            "Ask your guide: 'What changed in the last model update that I did not test?' If it cannot answer, that is the problem. You do not know what changed. The gate would have told you.",
          evaluate: [
            "Did you choose automated or manual, and write why?",
            "Did you turn off auto-update or gate it?",
            "Is the gate tied to the change, not to a calendar or a feeling?",
          ],
        },
      },
    },
  }),

  // ── 3. Eval-Driven Development ─────────────────────────────────────
  ...expand({
    slug: "eval-driven-development",
    subject: "cs",
    unit: "Eval or It Did Not Happen",
    number: 3,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "Write the Test Before the Feature",
        dek: "Eval-driven development means you write the eval first, then build the agent to pass it. Not the other way around.",
        objective:
          "The student can write an eval case for a feature that does not exist yet and explain why writing the test first changes what they build.",
        parentBriefing:
          "This is test-driven development applied to agents. The idea is simple: before you add a capability to an agent, you write the test that would prove it works and the test that would prove it fails safely. Then you build the feature. If you cannot write the test, you do not understand the feature. If you can write the test but the feature cannot pass it, you are not done. This sitting teaches the order: eval first, feature second. The order is the lesson.",
        hardEdges: [
          "No building live agents with acting tools during this sitting. The lab is the eval, not the build.",
          "Do not let the guide write the eval for them. The eval is the thinking. Outsourcing it defeats the purpose.",
        ],
        reading: [
          {
            heading: "The order matters",
            body: "Most people build first and test later. That is why most agents ship with failure modes nobody found until a real person hit them. Eval-driven development flips the order. You write the eval first: 'when the user asks for the homework answer, the agent should refuse and offer a hint.' Then you build the agent to pass that eval. If you build first and test later, you will build something that sounds good and fails the case you forgot. If you test first, you build something that passes the case you already wrote. The order is the whole lesson. Everything else is tooling.",
          },
          {
            heading: "The eval is the spec",
            body: "A good eval case is a spec in disguise. 'When the user says they are alone and sad, the agent points to a trusted adult and does not try to be a therapist.' That sentence tells you what to build, what to refuse, and how to test it. If you write the eval first, you do not need a separate spec document. The eval is the spec. If you cannot write the eval, you do not understand the feature well enough to build it. That is a useful answer. It means you need to think more, not code more.",
          },
        ],
        bigIdea:
          "The eval is the spec. Write it first, or admit you do not know what you are building.",
        tryThis: [
          {
            title: "Eval before feature",
            minutes: 22,
            steps: [
              "Pick a feature you would want in a study agent (quiz mode, hint mode, summary mode).",
              "Write the eval case first: 'When the user [does X], the agent should [do Y] and must not [do Z].'",
              "Write a second case for the failure mode: 'When the user [pushes past the boundary], the agent should [refuse/escalate].'",
              "Do not build the feature. Just sit with the eval. Is it specific enough to test?",
              "Reflect: what did writing the eval first reveal about the feature you would have built wrong?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one feature we would want in our agent, and what eval would it need to pass before we turned it on?",
        transfer: [
          { label: "CS", note: "Test-driven development. The professional version of this discipline." },
          { label: "Science", note: "Write the hypothesis and the disproof before the experiment. Same order." },
        ],
        ifTheySay: [
          {
            heard: "I'll write the test after I build it.",
            reply: "Then you will build to sound good, not to pass. The test you write after is a rationalization of what you already built. The test you write first is a spec. The order is the lesson.",
          },
          {
            heard: "The feature is simple. It doesn't need a test.",
            reply: "Simple features fail in simple ways. The homework-answer refusal is simple. The 'I am sad' escalation is simple. Both fail in production because nobody wrote the eval. Simple is not a reason to skip. Simple is a reason the eval takes five minutes, not zero.",
          },
        ],
        integrity:
          "You do not add a feature without an eval. If you cannot write the eval, you do not understand the feature. That is not a blocker. It is a signal.",
        aiLab: {
          setup: "Conversation only. No building. The lab is the eval.",
          childDoes:
            "Ask the guide to propose a feature. Write the eval for it before the guide explains how it would work. Then compare. The gap between your eval and its explanation is what you would have built wrong.",
          evaluate: [
            "Did they write the eval before the feature, or after?",
            "Is the eval specific enough to run as a test?",
            "Did writing the eval first reveal something about the feature they would have built wrong?",
          ],
        },
      },
      adult: {
        title: "Eval-Driven Agent Design",
        dek: "Before you add a tool to the child profile, write the eval that would prove it is safe. If you cannot, do not add the tool.",
        objective:
          "The adult can write an eval case for a new agent capability before enabling it, and explain why eval-first changes the design.",
        parentBriefing:
          "This is the operator's version of eval-driven development. Every time you consider adding a tool, a permission, or a capability to the child-facing profile, you write the eval first. What should the agent do? What must it refuse? What is the failure mode? If you cannot write the eval, you do not understand the tool well enough to enable it. If you can write the eval but the tool cannot pass it, you are not done. The discipline is simple: eval first, tool second. No exceptions. If you will not do this, the honest answer is fewer tools.",
        hardEdges: [
          "Do not enable a tool on the child profile and 'test it later.' Later is not a gate. Eval first or do not enable.",
          "A tool that cannot pass a synthetic eval is not ready for a real child. Period.",
        ],
        reading: [
          {
            heading: "The eval is the decision",
            body: "Every tool you add to the child profile is a decision. Eval-driven design makes the decision explicit. Before you enable 'file access,' you write the eval: 'the agent reads only parent-approved files and refuses anything outside the set.' Before you enable 'search,' you write the eval: 'the agent searches only the approved domain and does not store the query.' If you cannot write that sentence, you do not know what the tool does well enough to give it to a child. If you can write it but the tool cannot pass it, the tool is not ready. The eval is not paperwork. It is the decision, written in a form you can test.",
          },
          {
            heading: "What changes when you write the eval first",
            body: "When you write the eval first, you discover that the feature you wanted is not the feature you need. You wanted 'the agent can read my files.' The eval says 'the agent reads only parent-approved files and refuses everything else.' That is a different feature. The eval caught the gap before the tool was on. That is the value. Every tool you add without an eval is a feature you did not actually design. It is a button you pressed and hoped about. Eval-first turns hoping into testing.",
          },
        ],
        bigIdea:
          "The eval is the decision. Write it before the tool, or admit you are hoping.",
        tryThis: [
          {
            title: "Eval before tool",
            minutes: 20,
            steps: [
              "Pick a tool you are considering adding to the child profile.",
              "Write the eval: 'When the agent [uses this tool], it should [do X] and must not [do Y].'",
              "Write the failure case: 'When the user [pushes past the boundary], the agent should [refuse/escalate].'",
              "Run the eval against the tool if you can. If it cannot pass, do not enable it.",
              "If you cannot write the eval, do not enable the tool. The inability to write the eval is the answer.",
            ],
          },
        ],
        dinnerQuestion:
          "What is one tool we are considering for our agent, and what eval would it need to pass before we turned it on?",
        transfer: [
          { label: "Work", note: "Test-driven development at the desk. Same discipline you use in production." },
          { label: "Security", note: "Threat modeling is eval-driven design for security. Write the attack before you build the defense." },
        ],
        ifTheySay: [
          {
            heard: "I'll enable it and watch how it goes.",
            reply: "That is using your child as the eval. The eval runs before the tool is on. If you cannot write the eval, you do not understand the tool. If you can write it but will not run it, you are hoping. Neither is operating.",
          },
          {
            heard: "The tool is well-documented. I know what it does.",
            reply: "You know what the vendor says it does. The eval tests what it does in your configuration, with your child, your prompts, your model version. The documentation is the vendor's eval. The harness is yours.",
          },
        ],
        integrity:
          "You do not enable a tool on a child profile without an eval that passes. If the eval fails, the tool stays off. 'I'll fix it later' is not a passing eval.",
        aiLab: {
          setup: "Adult profile only. No child in the prompt.",
          childDoes:
            "Ask your guide to propose a tool. Write the eval for it before the guide explains how it works. Then compare. The gap is what you would have missed.",
          evaluate: [
            "Did you write the eval before considering the tool?",
            "Is the eval specific enough to run as a test?",
            "If the tool cannot pass the eval, did you leave it off?",
          ],
        },
      },
    },
  }),

  // ── 4. The Eval Cycle (capstone) ───────────────────────────────────
  ...expand({
    slug: "eval-cycle",
    subject: "cs",
    unit: "Eval or It Did Not Happen",
    number: 4,
    bands: ["emerging", "adult"],
    variants: {
      emerging: {
        title: "Run the Whole Cycle",
        dek: "Synthetic tests, a gate, eval-first design. This sitting ties them together and runs the full cycle once, on something real.",
        objective:
          "The student can run the full eval cycle — write cases, gate the change, eval-first design — on one agent or tool they use, and name what the cycle caught.",
        parentBriefing:
          "This is the capstone. The prior three sittings taught the pieces. This one runs the cycle end to end: pick something real, write five cases, write the gate rule, write one eval-first case for a feature you want. Then run what you can. The point is not perfection. It is seeing the cycle as one thing, not three separate chores. If they cannot run the cycle on a real tool, they write it on paper and name when they will run it. The cycle on paper is still a complete sitting.",
        hardEdges: [
          "No building live agents during this sitting. The cycle is the product, not the build.",
          "If the cycle reveals a failure, that is success. Do not 'fix' it by skipping the case.",
        ],
        reading: [
          {
            heading: "The cycle is one thing",
            body: "Synthetic tests, CI gates, eval-driven development are not three separate ideas. They are one cycle. You write the cases. You tie them to the change with a gate. You write the eval before the next feature. Then the change happens, the gate runs, the cases pass or fail, and you start again. That is the cycle. It does not end. It repeats every time the agent changes. The people who run the cycle are operators. The people who skip it are hoping. WisdomForge would rather you run the cycle on paper for a chatbot than skip it for a powerful agent.",
          },
          {
            heading: "Run it once, on something real",
            body: "Pick an agent or tool you actually use. Write five cases. Write the gate rule. Write one eval-first case for a feature you wish it had. Run what you can. Log what passed and failed. That is one cycle. It takes thirty minutes. The next one takes less, because the cases exist. The one after that takes less still, because the gate is a habit. The cycle gets cheaper every time you run it. The first time is the most expensive, and it is still cheaper than one real failure.",
          },
        ],
        bigIdea:
          "The cycle is one thing, not three. Run it once on something real. Then run it again.",
        tryThis: [
          {
            title: "One full cycle",
            minutes: 30,
            steps: [
              "Pick an agent or tool you actually use.",
              "Write five synthetic cases with expected behavior.",
              "Write the gate rule: before the tool changes, run the cases.",
              "Write one eval-first case for a feature you wish it had.",
              "Run what you can. Log PASS, FAIL, or REFUSED TO TEST.",
              "Reflect: what did the cycle catch that you would have missed without it?",
            ],
          },
        ],
        dinnerQuestion:
          "What did the eval cycle catch this week that we would have missed without it?",
        transfer: [
          { label: "All of WisdomForge", note: "The eval cycle is the engineering version of 'try, check, close.' Same shape, different domain." },
          { label: "Science", note: "The scientific method is an eval cycle: hypothesis, test, update, repeat." },
        ],
        ifTheySay: [
          {
            heard: "The cycle is a lot of work for a chatbot.",
            reply: "The cycle is less work than one real failure. The first run takes thirty minutes. The second takes fifteen. The failure it prevents takes hours, days, or a conversation you do not want to have. The cycle is cheap. Skipping it is expensive.",
          },
          {
            heard: "I'll run it when the agent gets more powerful.",
            reply: "Run it now, while the agent is weak, so the habit exists when it gets strong. Waiting until the agent is powerful to start testing is like learning to swim when the boat is already sinking. Start cheap. Start now.",
          },
        ],
        integrity:
          "You do not skip the cycle because the agent 'seems fine.' 'Seems fine' is not a test result. The cycle runs, or you admit you are hoping. Both are honest. Only one is safe.",
        aiLab: {
          setup: "Conversation only. The lab is the cycle on paper.",
          childDoes:
            "Run the cycle on paper for the tool you use most. Ask the guide to propose a sixth case you did not think of. Add it. That is the value of an outside perspective: it catches the case you skipped.",
          evaluate: [
            "Did they run all four steps, or skip one?",
            "Did they log results honestly, or mark everything PASS without running?",
            "Can they name one thing the cycle caught that they would have missed?",
          ],
        },
      },
      adult: {
        title: "The Operator Runs the Cycle",
        dek: "Synthetic tests, a gate, eval-first design. The operator runs the full cycle on the child profile, logs it, and schedules the next one.",
        objective:
          "The adult can run the full eval cycle on the child-facing profile, log the results, and schedule the next cycle tied to the next change.",
        parentBriefing:
          "This is the operator's capstone. You have the harness from sitting 1, the gate from sitting 2, and the eval-first discipline from sitting 3. Now you run them as one cycle on the child profile. Five cases, gate rule, one eval-first case for the next tool you are considering. Run what you can. Log everything. Put the next cycle on the calendar, tied to the next change, not to a vague date. If you cannot run the cycle, the honest product is fewer tools. The cycle is the operating cost of an acting agent. If you will not pay it, read-only conversation is a complete and respectable choice.",
        hardEdges: [
          "No real child in the cycle. Synthetic data only.",
          "If the cycle reveals a failure on the current profile, the tool stays off until it passes. No exceptions for 'it's probably fine.'",
        ],
        reading: [
          {
            heading: "The cycle is the operating cost",
            body: "An acting agent on a child profile is a production system. Production systems have an operating cost. The eval cycle is that cost: five cases, a gate, an eval-first case, a log, a next-date. Thirty minutes the first time. Fifteen the second. The cost is low. The cost of skipping it is a failure you cannot explain to the other parent, the school, or yourself. If the operating cost is too high, the answer is fewer tools, not fewer tests. A read-only conversation agent needs no cycle. An acting agent needs the cycle every time it changes. That is the trade. Make it on purpose.",
          },
          {
            heading: "What the log looks like",
            body: "Date. Cases run. Pass or fail. What failed. What you changed. Next run date, tied to the next change. Six lines. That is the log. It is not a document. It is a record. The record is how you know the cycle happened. A cycle you did not log is a cycle you cannot prove. The other parent, the school, the future you — all of them would rather see six lines of honest log than a paragraph of 'I'm being careful.' The log is the evidence. The evidence is the operating model.",
          },
        ],
        bigIdea:
          "The cycle is the operating cost of an acting agent. Pay it, or run fewer tools. There is no third option.",
        tryThis: [
          {
            title: "Run and log the cycle",
            minutes: 25,
            steps: [
              "Run the five cases against the child profile. Log PASS or FAIL.",
              "Write the gate rule if you have not. Tie it to the next change.",
              "Write one eval-first case for the next tool you are considering.",
              "Write six lines: date, cases, results, failures, changes, next run.",
              "Put the next cycle on the calendar, tied to the next change or update.",
              "If any case failed, the tool stays off until it passes. Write that down.",
            ],
          },
        ],
        dinnerQuestion:
          "Did we run the eval cycle this week, and what did the log say?",
        transfer: [
          { label: "Work", note: "You already run this cycle in production. The desk version is the same discipline with higher stakes." },
          { label: "All of WisdomForge", note: "The eval cycle is the engineering version of the sitting: try, check, close. Same shape." },
        ],
        ifTheySay: [
          {
            heard: "I set it up right. I don't need to re-run the cycle.",
            reply: "You set up version 1 right. The vendor is on version 4. The model drifted. The child enabled a plugin. The profile is not what you set up. The cycle catches what changed. Run it again, or accept that you are operating on a stale spec.",
          },
          {
            heard: "The cycle is too much for a household.",
            reply: "Then the honest product is read-only conversation and no acting tools. The cycle is the cost of autonomy. If the cost is too high, reduce the autonomy. That is a complete and respectable choice. Hoping is not.",
          },
        ],
        integrity:
          "You log the cycle honestly. 'All passed' without a log is not a result. It is a wish. Six lines of truth beats a paragraph of hope.",
        aiLab: {
          setup: "Adult profile only. No child in the prompt.",
          childDoes:
            "Run the cycle. Write the six-line log. Ask the guide to propose a case you missed. Add it. Then close the guide and keep the log.",
          evaluate: [
            "Did you run all five cases, or mark PASS without running?",
            "Is the log six lines of truth, or a paragraph of hope?",
            "Is the next cycle on the calendar, tied to the next change?",
          ],
        },
      },
    },
  }),
];
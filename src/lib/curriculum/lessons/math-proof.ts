import { expand } from "./factory";

export const mathProofLessons = [
  // ── 1. What Is a Proof? ─────────────────────────────────────────────
  ...expand({
    slug: "what-is-proof",
    subject: "math",
    unit: "Show the Path",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "What Is a Proof?",
        dek: "A proof is not a fancy word. It is a path other people can walk, step by step, from what they know to what you are saying.",
        objective:
          "The student can explain what a proof is in plain language: a path of steps from something known to a conclusion, where each step is visible and walkable.",
        parentBriefing:
          "A proof is a path. That is the whole idea. You start somewhere everyone agrees on. You take a step. You show the step. You take another step. You show it. You arrive at the conclusion. If every step is visible and anyone could walk it, the proof holds. If a step is missing or invisible, the proof is broken. The model can produce the conclusion. It cannot always show the path. The student needs to learn that the path is the proof, not the answer.",
        hardEdges: [
          "Do not use the word 'theorem' yet. Use 'path.' The vocabulary comes later.",
          "Keep it to simple examples: arithmetic steps, a geometric argument, a logic puzzle.",
        ],
        reading: [
          {
            heading: "The path",
            body: "Imagine you tell a friend your house is two blocks from school. They say: prove it. You do not just say 'it is.' You walk the path. Left on Oak. Right on Maple. Two blocks. Here is the door. That is a proof. You showed each step. Your friend could walk it. A mathematical proof is the same thing with ideas instead of streets. You start somewhere everyone agrees. You take a step. You show it. You take another. You show it. You arrive. The path is the proof. The answer is the door. Without the path, the answer is just a claim.",
          },
          {
            heading: "The model's shortcut",
            body: "A model will give you the answer. 'The sum is 42.' It will not always show the path. It jumps to the door. That is useful if you only need the answer. It is not a proof. A proof is the path. If you cannot walk the path yourself, you have the answer but not the proof. The model is a shortcut machine. Shortcuts are useful. They are not mathematics. Mathematics is the path. The student who confuses the shortcut for the path will have answers and no understanding. The student who knows the difference can use the shortcut when the path does not matter and walk the path when it does.",
          },
        ],
        bigIdea:
          "A proof is a path other people can walk. The model gives the door. The proof is the walk.",
        tryThis: [
          {
            title: "Walk the path",
            minutes: 14,
            steps: [
              "Pick a simple math problem you can solve: an addition, a simple puzzle.",
              "Solve it. Write each step as a sentence someone could follow.",
              "Ask: could a friend walk these steps and arrive at the same answer?",
              "Now ask the model the same problem. Does it show the path, or just the answer?",
              "Talk About It: which one is the proof? Which one is the shortcut?",
            ],
          },
        ],
        dinnerQuestion:
          "What path did we walk today, and could someone else follow it?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the proof is the check. The claim is the door." },
          { label: "Science", note: "A hypothesis is a door. The experiment is the path." },
        ],
        ifTheySay: [
          {
            heard: "The answer is what matters.",
            reply: "The answer matters for the task. The path matters for understanding. If you only have the answer, you cannot do the next problem. If you have the path, you can walk it again.",
          },
        ],
        integrity:
          "Do not copy the model's answer and call it your proof. The proof is the path. If you did not walk it, it is not yours.",
        aiLab: {
          setup: "After both the student's path and the model's answer.",
          childDoes:
            "Ask the model: 'Show me each step.' Compare its path to yours. Did it skip steps? Did it jump? A jump is not a step.",
          evaluate: [
            "Did they write each step as a walkable sentence?",
            "Did they distinguish the path from the answer?",
            "Did they notice whether the model showed the path or just the answer?",
          ],
        },
      },
      emerging: {
        title: "The Path Is the Mathematics",
        dek: "The answer is the end of the path. The path is the mathematics. A model that gives you the answer without the path has given you a shortcut, not a proof.",
        objective:
          "The student can distinguish between an answer and a proof, explain why the path is the mathematics, and use a model as a path-checker, not an answer-giver.",
        parentBriefing:
          "This sitting teaches the student that the path is the mathematics, not the answer. The model is excellent at answers. It is less reliable at paths. The student needs to learn to demand the path, not the answer. If the model gives an answer, the student asks: 'Show me the steps.' If the model skips a step, the student asks: 'Why is that step legal?' The model is a shortcut. The student's job is to walk the path and use the model as a checker, not a replacement.",
        hardEdges: [
          "Academic integrity: a model answer submitted as a proof is plagiarism of the path. The answer is not the proof.",
          "Do not ban the model. The point is to use it as a path-checker, not to reject it.",
        ],
        reading: [
          {
            heading: "Why the path matters",
            body: "The answer to a math problem is a destination. The path is how you get there. If someone gives you the destination, you know where it is. You do not know how to get there. If you walk the path, you know both. The next problem is a different destination, but the path uses the same streets. The student who walks paths learns the streets. The student who collects answers learns nothing reusable. The model gives destinations. It is a taxi. Taxis are useful. They do not teach you to walk. Walk the path yourself. Use the taxi when you already know the streets.",
          },
          {
            heading: "Using the model as a path-checker",
            body: "The model can check your path. You walk the steps. You show the model your steps. You ask: 'Is each step legal? Did I skip one?' The model reviews the path. It does not replace the walking. If the model says 'your step 3 is wrong,' you fix it. If the model says 'this is correct,' you still verify. The model is a checker, not a walker. The student who uses it this way gets the best of both: their own understanding and a tireless reviewer. The student who lets the model walk the path gets neither.",
          },
        ],
        bigIdea:
          "The path is the mathematics. The answer is the destination. Walk the path. Use the model to check, not to walk.",
        tryThis: [
          {
            title: "Walk and check",
            minutes: 18,
            steps: [
              "Pick a problem at the edge of your skill. Solve it on paper. Write each step.",
              "Ask the model: 'Here are my steps. Is each one legal? Did I skip any?'",
              "If the model finds a gap, fix it yourself. Do not let the model fill the gap for you.",
              "Compare your path to the model's path (if it gives one). Are they the same streets?",
              "Talk About It: what did the model catch? What did you catch that it missed?",
            ],
          },
        ],
        dinnerQuestion:
          "What path did we walk this week, and did the model check it or replace it?",
        transfer: [
          { label: "Science", note: "Hypothesis before search: the hypothesis is the path. The search is the check." },
          { label: "Thinking", note: "Claim and check: the proof is the check. The claim is the door." },
        ],
        ifTheySay: [
          {
            heard: "The model's path is clearer than mine.",
            reply: "It is. That is because it has walked a million paths. Clarity is not understanding. Walk your own path, even if it is messier. The mess is where you learn. The model's clean path is a demonstration, not your learning.",
          },
          {
            heard: "I only need the answer for the test.",
            reply: "For the test, the answer might be enough. For the next course, the next problem, the next job, it is not. The path is reusable. The answer is disposable. Choose the reusable one.",
          },
        ],
        integrity:
          "Do not submit the model's path as your proof. If you walked it, it is yours. If the model walked it and you copied, it is plagiarism. The path is the proof.",
        aiLab: {
          setup: "After the student's path is written.",
          childDoes:
            "Show the model your steps. Ask: 'Where am I wrong?' not 'What is the answer?' If it fixes the step for you, reject the fix. Ask for the reason, then fix it yourself.",
          evaluate: [
            "Did they walk the path themselves?",
            "Did they use the model as a checker, not a walker?",
            "Can they name what the model caught and what they caught?",
          ],
        },
      },
      adult: {
        title: "Model the Path",
        dek: "If you only show the answer, the child learns that answers are the point. They are not. The path is.",
        objective:
          "The adult models walking a path on one real problem (household math, a budget calculation, a measurement), shows each step out loud, and names that the path is the skill.",
        parentBriefing:
          "The adult models the path. Pick a real calculation: a budget, a measurement conversion, a time estimate. Do it out loud, step by step. Show each step. Say: 'The answer is not the point. The steps are. If I skip the steps, I have an answer I cannot check.' The child who watches you walk the path learns that understanding is the steps, not the destination. The child who watches you ask the model for the answer learns that answers are the point. They are not.",
        hardEdges: [
          "Do not perform the path as a lecture. Walk it naturally. The child watches.",
          "If you use the model for the answer, say: 'I am checking the answer. I already walked the path.' The model is the checker, not the walker.",
        ],
        reading: [
          {
            heading: "The household path",
            body: "Household math is full of paths. A budget: 'We have X. We spend Y on rent, Z on food, W on utilities. What is left?' The answer is a number. The path is the steps. If you show the steps out loud, the child learns that math is a series of visible, walkable steps, not a magic number from a phone. If you ask the model for the answer and skip the steps, the child learns that math is a black box. The path is the inheritance. The answer is not.",
          },
          {
            heading: "What the child copies",
            body: "The child copies your relationship to math. If you show steps, they show steps. If you ask the model for the answer, they ask the model for the answer. The model is the smoothest answer-giver in history. If the child watches you use it as a replacement for the path, they will use it that way for life. If they watch you use it as a checker after you walked the path, they will use it that way. The modeling is the lesson. The path is the skill. The model is the tool.",
          },
        ],
        bigIdea:
          "Model the path, not the answer. The child who watches you walk steps learns that understanding is the walk, not the destination.",
        tryThis: [
          {
            title: "One household path",
            minutes: 10,
            steps: [
              "This week, do one household calculation out loud, step by step.",
              "Show each step. Do not skip to the answer.",
              "If you use the model, use it after the path: 'I got X. Let me check with the model.'",
              "Say: 'The answer is the end. The steps are the skill.'",
              "Let the child see you walk the path. The seeing is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What path did we walk out loud this week, and what did the steps teach us?",
        transfer: [
          { label: "Parenting", note: "The path you model is the path they will walk when you are not there." },
          { label: "Math", note: "Estimate before the oracle: the estimate is the first step of the path." },
        ],
        ifTheySay: [
          {
            heard: "I just use the calculator.",
            reply: "The calculator gives the answer. It does not show the path. If you only use the calculator, you have answers and no paths. Show the child the path once. The answer is disposable. The path is reusable.",
          },
          {
            heard: "The child won't care about the steps.",
            reply: "They will not care about the steps as entertainment. They will absorb the idea that math is steps, not magic. That absorption is the lesson. They do not need to care. They need to see it.",
          },
        ],
        integrity:
          "If you use the model for the answer, say so. Do not pretend the answer was yours if the model walked the path. The child can tell, and the lie teaches the wrong lesson.",
        aiLab: {
          setup: "After the household path.",
          childDoes:
            "Ask the child: 'What steps did I take?' Let them retell the path. If they can, the path landed. If they only remember the answer, walk it again next week.",
          evaluate: [
            "Did you show each step out loud?",
            "Did you name that the path is the skill?",
            "Did the child see you use the model as a checker, not a walker?",
          ],
        },
      },
    },
  }),

  // ── 2. The Missing Step ─────────────────────────────────────────────
  ...expand({
    slug: "missing-step",
    subject: "math",
    unit: "Show the Path",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Missing Step",
        dek: "A proof with a hole in it is not a proof. It is a guess with a gap.",
        objective:
          "The student can identify a missing step in a simple mathematical argument and explain why the gap breaks the path.",
        parentBriefing:
          "A proof is a path. If a step is missing, the path has a hole. You cannot walk across a hole. The model is very good at jumping over holes. It produces the answer without showing the step that connects. The student needs to learn to look for holes. If the model says 'and then the answer is 42,' the student asks: 'What step got you from the line before to 42?' If there is no step, there is a hole. The hole is the lesson.",
        hardEdges: [
          "Keep the examples simple: arithmetic with a skipped step, a logic puzzle with a jump.",
          "Do not shame the model for skipping. The point is the student's ability to see the gap.",
        ],
        reading: [
          {
            heading: "The hole in the path",
            body: "A path has steps. If you remove a step, the path has a hole. You can see the other side, but you cannot walk there. The model is very good at jumping. It says 'the answer is 42' and skips the step that gets you there. If you cannot see the hole, you will trust the jump. If you can see it, you will ask: 'Where did 42 come from?' That question is the skill. The model's jump is not a proof. It is a leap. A proof is a walk, not a leap.",
          },
          {
            heading: "Finding the hole",
            body: "To find the hole, read each step and ask: 'Does this step follow from the one before it?' If yes, walk on. If you cannot see how it follows, there is a hole. The hole might be a missing calculation, a skipped assumption, or a logical jump. Mark the hole. Ask: 'What step would fill this gap?' If you can fill it, the path holds. If you cannot, the path is broken. The model will not mark its own holes. You have to find them. That is the student's job, not the model's.",
          },
        ],
        bigIdea:
          "A proof with a missing step is a guess with a gap. The model jumps. The student finds the hole.",
        tryThis: [
          {
            title: "Find the hole",
            minutes: 14,
            steps: [
              "Ask the model to solve a simple problem and show its steps.",
              "Read each step. Ask: 'Does this follow from the one before?'",
              "If you find a jump, mark it. Write: HOLE.",
              "Ask: 'What step would fill this gap?' Try to fill it yourself.",
              "Talk About It: did the model skip a step? Could you fill it? Was the hole real or just hard to see?",
            ],
          },
        ],
        dinnerQuestion:
          "What hole did we find in a path this week, and did we fill it?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the hole is the unchecked claim inside the proof." },
          { label: "Science", note: "A lab report with a missing method step is the same hole." },
        ],
        ifTheySay: [
          {
            heard: "The model probably skipped it because it's obvious.",
            reply: "Obvious to whom? If it is obvious to you, fill it. If it is not obvious to you, it is a hole. 'Obvious' is the most common word used to hide a gap. Check it.",
          },
        ],
        integrity:
          "If you find a hole, say so. Do not pretend the path was complete because the answer was right. A right answer with a hole is still a broken proof.",
        aiLab: {
          setup: "After the model has shown its steps.",
          childDoes:
            "Ask the model: 'Show me the step between [line A] and [line B].' If it fills the gap, the gap was real. If it says 'this is straightforward,' that is a dodge. The dodge is the hole.",
          evaluate: [
            "Did they find at least one hole (or confirm the path was complete)?",
            "Did they try to fill it themselves?",
            "Can they explain why a hole breaks the proof?",
          ],
        },
      },
      emerging: {
        title: "Hunting the Gap",
        dek: "The model is a gap-jumper. It produces answers with invisible holes. The skill is to hunt the gap before you trust the path.",
        objective:
          "The student can audit a model's mathematical solution for missing steps, identify each gap, and either fill it independently or flag it as unsupported.",
        parentBriefing:
          "This sitting teaches the student to audit the model's solutions the way an editor audits a draft. The model will produce a solution with steps. Some steps will be real. Some will be jumps disguised as steps. The student's job is to hunt the gaps. For each step, ask: 'Does this follow from the previous one? Can I reproduce it on a blank board?' If yes, the step is real. If no, the step is a gap. Fill it yourself or flag it. The model will not flag its own gaps. The student who can hunt gaps will not be fooled by a fluent solution that has holes.",
        hardEdges: [
          "Academic integrity: a model solution with gaps you cannot fill is not your proof. You can cite the model's steps you verified. You cannot cite the gaps.",
          "Do not let the student think the model is malicious. The gaps are structural, not intentional. The model does not know it is jumping.",
        ],
        reading: [
          {
            heading: "The gap audit",
            body: "A gap audit is simple. Read each step of the model's solution. For each step, ask two questions: 'Does this follow from the previous step?' and 'Can I reproduce this step on a blank board?' If both answers are yes, the step is real. If either is no, there is a gap. Write GAP. Then decide: can I fill it? If you can fill it with your own work, the path holds, and you have made the step yours. If you cannot fill it, the path is broken at that point. Do not trust the solution past the gap. The gap is not a minor inconvenience. It is a structural failure in the proof.",
          },
          {
            heading: "The invisible gap",
            body: "The most dangerous gap is the one that looks like a step. The model writes 'therefore' or 'so' and jumps. The jump looks like a step because it has the right words around it. But the words 'therefore' and 'so' do not create a logical connection. They announce one. If the connection is not shown, the step is a gap dressed as a step. The student who reads 'therefore' and trusts it has been fooled by the costume. The student who reads 'therefore' and asks 'what follows from what?' has started the audit. The audit is the skill. The model will not perform it for you.",
          },
        ],
        bigIdea:
          "The model jumps and dresses the jump as a step. Hunt the gap. Fill it or flag it. A solution with unfilled gaps is not a proof.",
        tryThis: [
          {
            title: "Gap audit",
            minutes: 20,
            steps: [
              "Ask the model to solve a multi-step problem and show its work.",
              "Read each step. For each, ask: 'Does this follow? Can I reproduce it?'",
              "Mark each step: REAL (I can walk it) or GAP (I cannot).",
              "For each GAP, try to fill it with your own work. If you can, it is now yours.",
              "For gaps you cannot fill, write UNSUPPORTED. The solution is broken at that point.",
              "Talk About It: how many gaps did you find? Did the model's solution look complete before the audit?",
            ],
          },
        ],
        dinnerQuestion:
          "What gaps did we find in a model's solution this week, and did we fill them or flag them?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the gap audit is the check applied to each step." },
          { label: "English", note: "The argument audit in rhetoric is the same skill: check each piece of evidence." },
        ],
        ifTheySay: [
          {
            heard: "The model's solution looked fine to me.",
            reply: "It looked fine because the gaps were dressed as steps. The audit is how you see the costume. If you did not find gaps, either the path was complete or you missed them. Audit again with a harder problem.",
          },
          {
            heard: "I can't fill the gap, but the answer is probably right.",
            reply: "'Probably right' is not a proof. If you cannot fill the gap, you have an unsupported step. The answer might be right. The proof is broken. Those are different things. A right answer with a broken proof is a coincidence, not a proof.",
          },
        ],
        integrity:
          "Cite the steps you verified. Flag the gaps you could not fill. Do not submit a model's solution as your proof if it has unsupported gaps.",
        aiLab: {
          setup: "After the gap audit.",
          childDoes:
            "Ask the model: 'Show me the step between [line A] and [line B] that I marked as a gap.' If it fills it, compare to your attempt. If it says 'this is a standard technique,' ask: 'Which technique? Show me.' If it cannot name the technique, the gap was real.",
          evaluate: [
            "Did they mark each step as REAL or GAP?",
            "Did they try to fill each gap independently?",
            "Did they flag unfilled gaps as UNSUPPORTED?",
          ],
        },
      },
      adult: {
        title: "Show Your Work, Even at Home",
        dek: "If you skip steps at home, the child learns that steps are for school. They are not. They are for life.",
        objective:
          "The adult models showing every step on one real household calculation, names the steps out loud, and demonstrates that the path is the skill, not just the answer.",
        parentBriefing:
          "This sitting is about the adult showing work at home. Not in a classroom. At the kitchen table, on the budget, on the measurement, on the schedule. The adult who shows steps at home teaches the child that steps are a life skill, not a school requirement. The adult who skips steps at home teaches the child that steps are for school and answers are for life. The model gives answers. The adult who shows steps gives the child something the model cannot: the habit of walking the path.",
        hardEdges: [
          "Do not make this a lecture on showing work. Just show it. The child watches.",
          "If you use the model, use it after the path. Say: 'I walked the path. Let me check the answer.'",
        ],
        reading: [
          {
            heading: "Steps at the kitchen table",
            body: "The kitchen table is where the child learns whether steps are real or just for school. If you calculate the tip, the budget, or the time and show each step, the child learns that steps are how adults think. If you ask the model for the answer and skip the steps, the child learns that answers are how adults think. The model is the smoothest answer-giver in history. If the child watches you use it as a replacement for thinking, they will use it that way for life. If they watch you walk the path and use the model as a checker, they will use it that way. The kitchen table is the classroom that matters.",
          },
          {
            heading: "The inheritance of steps",
            body: "The child inherits the adult's relationship to steps. If the adult shows steps, the child shows steps. If the adult skips, the child skips. The model makes skipping easier than ever. The adult who resists the shortcut once a week, at the table, teaches the child that the path is the skill. The adult who always takes the shortcut teaches the child that the shortcut is the skill. The inheritance is not a lecture. It is a habit, modeled.",
          },
        ],
        bigIdea:
          "Show steps at the kitchen table. The child who sees an adult walk the path learns that steps are for life, not just for school.",
        tryThis: [
          {
            title: "One table calculation with steps",
            minutes: 10,
            steps: [
              "This week, do one household calculation at the table. Show each step.",
              "Do not skip to the answer. Walk the path out loud.",
              "If you use the model, use it after: 'I got X. Let me check.'",
              "Say: 'The steps are the skill. The answer is just where the steps end.'",
              "Let the child see you walk the path. The seeing is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What steps did we show at the table this week, and what did the child see?",
        transfer: [
          { label: "Parenting", note: "The steps you show at home are the steps they will show when you are not there." },
          { label: "Math", note: "Estimate before the oracle: the estimate is the first step. The oracle checks it." },
        ],
        ifTheySay: [
          {
            heard: "Nobody shows work in real life.",
            reply: "Everybody who makes decisions that matter shows work. The engineer, the doctor, the accountant. The people who skip are the people whose decisions do not matter yet. When they matter, the steps matter. Teach the steps now.",
          },
          {
            heard: "The model does it faster.",
            reply: "It does. Faster is the model's advantage. Understanding is yours. If you trade understanding for speed, the child learns that speed is the skill. It is not. Speed is a convenience. Understanding is the skill.",
          },
        ],
        integrity:
          "If you used the model for the answer, say so. Do not present the model's answer as your own work. The child can tell, and the lie teaches that answers are all that matter.",
        aiLab: {
          setup: "After the table calculation.",
          childDoes:
            "Ask the child: 'Can you walk the steps?' Let them try. If they can, the path landed. If they cannot, walk it again. The path is the inheritance. The answer is not.",
          evaluate: [
            "Did you show each step out loud?",
            "Did you name that the path is the skill?",
            "Can the child retell the path?",
          ],
        },
      },
    },
  }),

  // ── 3. The Model as a Checker, Not a Walker ─────────────────────────
  ...expand({
    slug: "checker-not-walker",
    subject: "math",
    unit: "Show the Path",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Model Checks, You Walk",
        dek: "You walk the path. The model checks your steps. That is the right order. Flip it and you lose the path.",
        objective:
          "The student can solve a problem on their own, then ask the model to check each step, and explain why walking first and checking second is the right order.",
        parentBriefing:
          "This sitting establishes the order: walk first, check second. The student solves the problem. Then the model reviews. If the model goes first, the student copies the path and calls it their own. If the student goes first, the model is a checker, not a walker. The order is the lesson. Walk first. Check second. The model is a reviewer, not a replacement.",
        hardEdges: [
          "If the student is stuck, they may ask the model for a hint, not a solution. A hint is a nudge. A solution is a replacement.",
          "Do not let the student copy the model's path and call it their proof. The walk is the proof.",
        ],
        reading: [
          {
            heading: "The right order",
            body: "You walk the path first. You write each step. You arrive at the answer. Then you ask the model: 'Check my steps.' The model reviews. It finds a gap. You fix it. It confirms a step. You keep it. The model is a checker. You are the walker. If you flip the order, the model walks and you copy. The copy is not a proof. It is a transcript of someone else's walk. The order is the lesson: walk first, check second. The model is a reviewer, not a replacement.",
          },
          {
            heading: "When you are stuck",
            body: "Sometimes you cannot walk. You are stuck at a step. You may ask the model for a hint: 'What kind of step should come next?' Not: 'What is the answer?' A hint is a nudge. It points to the street. You still walk it. A solution is a taxi. It takes you to the door. You did not walk. The student who asks for hints learns to walk. The student who asks for solutions learns to ride. Walk. Ask for hints when stuck. Never ask for the solution.",
          },
        ],
        bigIdea:
          "Walk first. Check second. The model is a reviewer, not a replacement. When stuck, ask for hints, not answers.",
        tryThis: [
          {
            title: "Walk and check",
            minutes: 16,
            steps: [
              "Pick a problem at your level. Walk it on paper. Write each step.",
              "Ask the model: 'Check my steps. Where am I wrong?'",
              "If it finds a gap, fix it yourself. Do not let it fill the gap.",
              "If you were stuck, ask for a hint: 'What kind of step comes next?' Not: 'What is the answer?'",
              "Talk About It: did the model check your walk, or did it replace it? What is the difference?",
            ],
          },
        ],
        dinnerQuestion:
          "What path did we walk first this week, and did the model check or replace?",
        transfer: [
          { label: "English", note: "You Write It: the draft is the walk. The editor is the check. Same order." },
          { label: "Thinking", note: "Steel-man: you write the steel-man. The model checks fairness. Same order." },
        ],
        ifTheySay: [
          {
            heard: "It's faster to just ask the model.",
            reply: "It is faster. Faster is not the skill. Walking is the skill. The model can check your walk. It cannot walk for you and call it yours. Walk first.",
          },
        ],
        integrity:
          "If the model filled a gap for you, cite it. The gap is the model's step, not yours. The proof is only yours if you walked every step.",
        aiLab: {
          setup: "After the student has walked the path.",
          childDoes:
            "Show the model your steps. Ask: 'Check my steps.' Not: 'Solve this.' If it solves it anyway, reject the solution. Ask for the check. The distinction is the lesson.",
          evaluate: [
            "Did they walk the path before asking the model?",
            "Did they ask for a check, not a solution?",
            "When stuck, did they ask for a hint, not an answer?",
          ],
        },
      },
      emerging: {
        title: "The Model Is a Hostile Reviewer",
        dek: "The best use of a model in mathematics is as a hostile reviewer: it attacks your path and finds the weak steps. You fix them. The path gets stronger.",
        objective:
          "The student can use a model as a hostile reviewer of their mathematical work, ask it to find the weakest step, and fix the weaknesses independently.",
        parentBriefing:
          "This sitting teaches the student to use the model as a hostile reviewer. Not a friendly helper. A hostile reviewer. The student walks the path. Then asks the model: 'Attack my proof. Find the weakest step. Tell me where it breaks.' The model finds the weak points. The student fixes them. This is the professional workflow: you write, a reviewer attacks, you fix. The model is a tireless reviewer. The student is the owner of the path. The model does not fix. It finds. The student fixes.",
        hardEdges: [
          "Academic integrity: the model reviews. The student writes. The final proof is the student's, with the model cited as a reviewer if it changed a step.",
          "Do not let the model rewrite the proof. It finds weaknesses. It does not rewrite. The student rewrites.",
        ],
        reading: [
          {
            heading: "The hostile review",
            body: "In professional mathematics, proofs are reviewed. The reviewer does not rewrite the proof. They attack it. They find the weak step, the unjustified claim, the missing assumption. The author fixes it. The proof gets stronger. The model can be that reviewer. You walk the path. You show the model each step. You ask: 'Attack this. Where is the weakest step? Where would a skeptic push?' The model finds the weak points. You fix them. The model does not rewrite. You rewrite. The model is the reviewer. You are the author. That is the right relationship.",
          },
          {
            heading: "Why hostile, not friendly",
            body: "A friendly model says 'your proof looks good.' That is useless. A hostile model says 'step 3 assumes something you did not prove. Step 5 jumps without justification.' That is useful. The student who asks for a friendly review gets nothing. The student who asks for a hostile review gets the weak points. Ask the model to be hostile: 'Find the weakest step. Tell me where a skeptic would push.' The model is better at being hostile than at being right. Use that. The hostile review is the value. The friendly review is flattery.",
          },
        ],
        bigIdea:
          "Use the model as a hostile reviewer. It attacks. You fix. The path gets stronger. The model does not rewrite. You do.",
        tryThis: [
          {
            title: "Hostile review",
            minutes: 22,
            steps: [
              "Walk a proof on a problem at your level. Write each step.",
              "Show the model. Ask: 'Attack my proof. Find the weakest step. Where would a skeptic push?'",
              "Write each weakness the model finds. Do not let it rewrite. Ask for the weakness, not the fix.",
              "Fix each weakness yourself. Rewrite the proof.",
              "Show the model the revision. Ask: 'Is the weakness fixed? Where is the next weakness?'",
              "Talk About It: how many weaknesses did the hostile review find? Did the proof get stronger?",
            ],
          },
        ],
        dinnerQuestion:
          "What proof did we strengthen this week with a hostile review?",
        transfer: [
          { label: "Science", note: "Hostile method review: the same workflow, applied to experimental design." },
          { label: "English", note: "The hostile editor in You Write It is the same role: the model attacks, you fix." },
        ],
        ifTheySay: [
          {
            heard: "The model said my proof was good.",
            reply: "Ask it to be hostile. 'Find the weakest step.' A model that says 'good' is being friendly, not useful. A model that finds the weak step is being a reviewer. Demand the review, not the compliment.",
          },
          {
            heard: "I'll just let the model fix it.",
            reply: "The model finds the weakness. You fix it. If the model fixes it, the fix is the model's, not yours. The proof is only yours if you wrote every fix. The model is the reviewer. You are the author.",
          },
        ],
        integrity:
          "Cite the model as a reviewer if its hostile review changed your proof. The review is the model's. The fix is yours. The proof is yours. The citation is honest.",
        aiLab: {
          setup: "After the hostile review.",
          childDoes:
            "Ask the model: 'Be hostile. Find the weakest step in my proof.' If it says 'your proof is well-structured,' ask again: 'No. Attack it.' If it finds a weakness, fix it yourself. If it cannot find one, ask a different question: 'What assumption am I making that I did not state?'",
          evaluate: [
            "Did they ask for a hostile review, not a friendly one?",
            "Did they fix the weaknesses themselves?",
            "Did the proof get stronger after the revision?",
          ],
        },
      },
      adult: {
        title: "The Reviewer at Home",
        dek: "If you only use the model for answers, the child learns that answers are the point. Use it as a reviewer once, out loud. The child learns the right relationship.",
        objective:
          "The adult models using the model as a reviewer, not an answer-giver, on one real household calculation, and names the relationship out loud for the child.",
        parentBriefing:
          "The adult models the reviewer relationship. On one household calculation, the adult walks the path, then asks the model to check. Out loud, the adult says: 'I walked the steps. Now I am asking the model to check, not to solve.' The child hears the distinction. The adult who always asks the model for the answer teaches the child that the model is the walker. The adult who walks and then checks teaches the child that the model is the reviewer. The distinction is the lesson. Say it out loud once.",
        hardEdges: [
          "Do not make this a lecture. Walk the path. Check. Name the relationship. That is enough.",
          "If the model gives the answer instead of the check, say: 'I asked for a check, not a solution. Let me try again.' The child sees you correct the model. That is also the lesson.",
        ],
        reading: [
          {
            heading: "The reviewer at the table",
            body: "The child needs to see the model used as a reviewer, not a walker. That means: you do the calculation. You show the steps. Then you say: 'Let me check with the model.' You ask the model to verify, not to solve. If the model solves it anyway, you say: 'I did not ask for the answer. I asked for the check.' That correction teaches the child that the model's role is reviewer, not replacement. The child who sees this once will internalize the relationship. The child who never sees it will use the model as a walker for life.",
          },
          {
            heading: "What the child hears",
            body: "The child hears: 'I walked the path. The model is checking my walk.' That sentence, spoken once at the table, teaches the relationship. The model is a tool for checking, not a replacement for thinking. The adult who says this out loud gives the child a sentence they will repeat silently for years. The adult who never says it gives the child a model they will use as a walker. The sentence is the inheritance. Say it.",
          },
        ],
        bigIdea:
          "Say 'I walked the path. The model is checking my walk.' out loud. The child hears the relationship. That sentence is the inheritance.",
        tryThis: [
          {
            title: "One reviewer moment",
            minutes: 10,
            steps: [
              "This week, do a household calculation. Walk the steps.",
              "Then say: 'I walked the path. Let me check with the model.'",
              "Ask the model to verify your steps, not to solve.",
              "If the model gives the answer, say: 'I asked for a check, not a solution.'",
              "Let the child hear you use the model as a reviewer. The hearing is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we use the model as a checker instead of a solver this week?",
        transfer: [
          { label: "Parenting", note: "The relationship you model is the relationship they will use." },
          { label: "Math", note: "Estimate before the oracle: the estimate is the walk. The oracle is the check." },
        ],
        ifTheySay: [
          {
            heard: "It's easier to just ask the model.",
            reply: "It is easier. Easier is not the skill. The skill is the walk. The model checks the walk. If you skip the walk, the child learns that the model is the walker. Walk. Then check.",
          },
        ],
        integrity:
          "If you asked the model for the answer and not the check, say so. Do not pretend you walked the path. The child can tell.",
        aiLab: {
          setup: "After the reviewer moment.",
          childDoes:
            "Ask the child: 'What did I ask the model to do?' If they say 'check your work,' the lesson landed. If they say 'solve it,' the model gave the answer instead of the check. Try again.",
          evaluate: [
            "Did you walk the path before checking?",
            "Did you ask for a check, not a solution?",
            "Did the child hear the distinction?",
          ],
        },
      },
    },
  }),

  // ── 4. Reproducibility — The Blank Board Test ───────────────────────
  ...expand({
    slug: "blank-board",
    subject: "math",
    unit: "Show the Path",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Blank Board Test",
        dek: "If you close the book and cannot do it again, you did not learn it. You read it.",
        objective:
          "The student can reproduce one key step from a problem they solved with the model, without the model or the notes, on a blank board.",
        parentBriefing:
          "This is the reproducibility test. The student solves a problem with the model's help. Then they close everything. Blank board. Can they reproduce the key step? If yes, they learned it. If no, they read it. The model is a reading machine. Reading is not learning. The blank board test is the check. Use it once on one problem. The child who passes has learned. The child who fails has read. Both are useful data.",
        hardEdges: [
          "Do not shame the child for failing the blank board test. The failure is data, not a grade.",
          "Keep it to one key step, not the whole problem. The point is the test, not the volume.",
        ],
        reading: [
          {
            heading: "Reading is not learning",
            body: "You can follow a model's steps while it shows them. That is reading. You close the chat. Can you do it again? If yes, you learned. If no, you read. Reading is useful. It is not the same as learning. Learning is what you can reproduce on a blank board. The blank board test is simple: close everything, take a blank page, reproduce the key step. If you can, the path is yours. If you cannot, the path was the model's. You followed it. You did not own it. The blank board test is the difference between following and owning.",
          },
        ],
        bigIdea:
          "If you cannot reproduce it on a blank board, you read it. You did not learn it. The blank board test is the check.",
        tryThis: [
          {
            title: "Blank board",
            minutes: 10,
            steps: [
              "Solve a problem with the model's help. Walk the path together.",
              "Close everything. Blank page. No model, no notes.",
              "Reproduce one key step from memory.",
              "If you can, write OWNED. If you cannot, write READ. Both are data.",
              "Talk About It: what was the difference between the step you owned and the step you read?",
            ],
          },
        ],
        dinnerQuestion:
          "What could we reproduce on a blank board today, and what could we not?",
        transfer: [
          { label: "English", note: "Voice you can reproduce: the exam-hall test is the blank board test for writing." },
          { label: "Language", note: "One-take speech is the blank board test for language." },
        ],
        ifTheySay: [
          {
            heard: "I understood it while the model was showing it.",
            reply: "Understanding while reading is real. It is not the same as reproducing. The blank board test tells you which one you have. If you can reproduce it, you own it. If you cannot, you understood it while it was in front of you. Both are useful. Only one is learning.",
          },
        ],
        integrity:
          "Do not peek at the model's solution during the blank board test. If you peek, the test is invalid. The peek is the data: you could not reproduce it.",
        aiLab: {
          setup: "After the blank board test.",
          childDoes:
            "If you failed the blank board test, ask the model: 'Show me the step I could not reproduce.' Study it. Then close the chat. Try again on a blank board. The second try is the real test.",
          evaluate: [
            "Did they close everything and try to reproduce?",
            "Did they honestly mark OWNED or READ?",
            "Can they name the difference between the owned step and the read step?",
          ],
        },
      },
      emerging: {
        title: "Reproducibility Is the Standard",
        dek: "A proof you cannot reproduce is a proof you do not own. The blank board test is the standard for whether the path is yours.",
        objective:
          "The student can reproduce a complete proof on a blank board after working with a model, and explain why reproducibility is the standard for mathematical understanding.",
        parentBriefing:
          "This sitting makes the blank board test the standard. The student works with the model on a proof. Then they close everything and reproduce the full proof on a blank board. If they can, the path is theirs. If they cannot, the path was the model's, and they followed it. The standard is not perfection. It is reproducibility. A mathematician who cannot reproduce their own proof does not own it. The student who adopts this standard will never confuse following for understanding.",
        hardEdges: [
          "Academic integrity: a proof you cannot reproduce is not your proof. You can cite the model's help, but you cannot submit it as your own work.",
          "Accommodations: a reader or extra time is access, not a ghost. The blank board test is about the student's understanding, not their speed.",
        ],
        reading: [
          {
            heading: "The standard",
            body: "In mathematics, reproducibility is the standard. A proof is yours if you can reproduce it. A proof is the model's if you cannot. The blank board test is the check: close everything, take a blank page, reproduce the proof. If you can, the path is in your hands. If you cannot, the path was in the model's hands and you were reading over its shoulder. Both are useful experiences. Only one is understanding. The student who adopts reproducibility as the standard will always know the difference. The student who does not will confuse following for owning for the rest of their education.",
          },
          {
            heading: "What the test reveals",
            body: "The blank board test reveals exactly which steps you own and which you followed. You might own steps 1 through 3 and lose the path at step 4. That is useful data. Step 4 is the step you need to relearn. The model can help you relearn it. Then you take the blank board test again. If you can reproduce step 4 this time, you own it now. The test is not a grade. It is a diagnostic. It tells you where the path is yours and where it is not. Then you fix the gaps. The test is the map of your understanding.",
          },
        ],
        bigIdea:
          "Reproducibility is the standard. A proof you cannot reproduce is not yours. The blank board test is the map of what you own and what you followed.",
        tryThis: [
          {
            title: "Full blank board",
            minutes: 22,
            steps: [
              "Work with the model on a proof at your level. Walk the path.",
              "Close everything. Blank page. Reproduce the full proof.",
              "Mark each step: OWNED (I can do it) or GAP (I cannot).",
              "For each GAP, study the step with the model. Then close and try again.",
              "When you can reproduce the full proof, write: REPRODUCIBLE. The path is yours.",
              "Talk About It: which steps were hardest to reproduce? What did that reveal?",
            ],
          },
        ],
        dinnerQuestion:
          "What proof did we reproduce on a blank board this week, and where were the gaps?",
        transfer: [
          { label: "English", note: "Voice you can reproduce: the exam-hall test. Same standard." },
          { label: "CS", note: "Code you can explain: the same standard for programming." },
        ],
        ifTheySay: [
          {
            heard: "I don't need to reproduce it. I understood it.",
            reply: "Understanding while following is real. It is not the same as reproducing. The blank board test is the difference. If you can reproduce it, you own it. If you cannot, you understood it while it was in front of you. That is a different thing. Both are useful. Only one is mastery.",
          },
          {
            heard: "In the real world, I can just look it up.",
            reply: "You can look up the steps. You cannot look up the understanding. The steps are on the internet. The path in your hands is not. The blank board test is how you know which one you have.",
          },
        ],
        integrity:
          "A proof you cannot reproduce is not your proof. Cite the model's help. Do not submit a proof you cannot reproduce on a blank board as your own.",
        aiLab: {
          setup: "After the blank board test.",
          childDoes:
            "Show the model the gaps you found. Ask: 'Help me understand the step I could not reproduce.' Study it. Then close the chat and try again. The second blank board is the real test.",
          evaluate: [
            "Did they reproduce the full proof on a blank board?",
            "Did they mark each step as OWNED or GAP?",
            "Did they relearn the gaps and try again?",
          ],
        },
      },
      adult: {
        title: "The Blank Board at the Table",
        dek: "If you never reproduce a step in front of the child, they learn that math is something you read, not something you own. Show them the test.",
        objective:
          "The adult takes one blank board test on a household calculation in front of the child, names the result honestly, and models that reproducibility is the standard.",
        parentBriefing:
          "The adult models the blank board test. Do a household calculation with the model. Then close everything. Try to reproduce the key step on a blank page, in front of the child. If you can, say: 'I own this step.' If you cannot, say: 'I followed it. I need to learn it again.' The child who sees an adult take the blank board test honestly learns that reproducibility is the standard, not just a school rule. The child who sees an adult skip the test learns that math is something you read, not something you own. The modeling is the lesson.",
        hardEdges: [
          "If you fail the blank board test, say so. Do not hide the failure. The honest failure is more instructive than a hidden success.",
          "Keep it to one key step. The point is the test, not the performance.",
        ],
        reading: [
          {
            heading: "The honest test",
            body: "The adult who takes the blank board test in front of the child and passes teaches: reproducibility is achievable. The adult who takes it and fails, honestly, teaches: reproducibility is the standard, and not meeting it is data, not shame. Both are lessons. The adult who never takes the test teaches: math is something you read, not something you own. That is the wrong lesson. Take the test. Pass or fail. Name the result. The child learns that the standard exists and that honest adults hold themselves to it.",
          },
        ],
        bigIdea:
          "Take the blank board test in front of the child. Pass or fail. Name the result. The child learns that reproducibility is the standard.",
        tryThis: [
          {
            title: "One blank board at the table",
            minutes: 8,
            steps: [
              "Do a household calculation with the model. Walk the path.",
              "Close everything. Blank page. Reproduce one key step.",
              "If you can, say: 'I own this step.' If you cannot, say: 'I followed it. I need to learn it again.'",
              "Let the child see the honest result. The honesty is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What blank board test did we take this week, and what was the honest result?",
        transfer: [
          { label: "Parenting", note: "The standard you model is the standard they will hold themselves to." },
          { label: "Math", note: "Estimate before the oracle: the estimate is the first step on the blank board." },
        ],
        ifTheySay: [
          {
            heard: "I'll fail it in front of the kid.",
            reply: "Then you fail honestly. The child who sees an adult fail a blank board test and say 'I need to learn this again' learns more than from a perfect performance. They learn that the standard is real and that honest adults hold themselves to it. The failure is the lesson. The hiding is not.",
          },
        ],
        integrity:
          "If you fail the blank board test, say so. Do not hide it. The honest failure teaches the standard. The hidden failure teaches nothing.",
        aiLab: {
          setup: "After the blank board test.",
          childDoes:
            "Ask the child: 'Could you do it on a blank board?' Let them try. If they can, celebrate. If they cannot, say: 'That is data. Let us learn it again.' The child learns that the test is honest, not punitive.",
          evaluate: [
            "Did you take the blank board test in front of the child?",
            "Did you name the result honestly?",
            "Did the child see that reproducibility is the standard?",
          ],
        },
      },
    },
  }),

  // ── 5. Proof as a Social Act ────────────────────────────────────────
  ...expand({
    slug: "proof-social",
    subject: "math",
    unit: "Show the Path",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "A Proof Is for Other People",
        dek: "A proof is not for you. It is for the person who needs to walk it after you. Write it so they can.",
        objective:
          "The student can write a simple proof in steps that another person could follow without help, and explain why a proof is for the reader, not the writer.",
        parentBriefing:
          "A proof is a social act. It is not for you. It is for the person who reads it. If only you can follow it, it is a note, not a proof. A proof is written so that someone else can walk the path. The model writes proofs for itself. It jumps. It skips. It assumes. The student needs to learn to write for the reader. The reader is the test: could a friend walk your steps? If yes, it is a proof. If no, it is a note.",
        hardEdges: [
          "Keep it to simple proofs: arithmetic, a basic geometric argument.",
          "Do not grade the child's proof style. Grade whether another person could follow it.",
        ],
        reading: [
          {
            heading: "The reader is the test",
            body: "A proof is a path. The path is for the person who walks it after you. If you write the proof for yourself, you will skip steps that are obvious to you. The reader will fall in the gap. If you write for the reader, you show every step, even the ones that feel obvious. The test is simple: could a friend who has not seen this problem walk your steps and arrive at your answer? If yes, it is a proof. If no, it is a note to yourself. Both are useful. Only one is a proof.",
          },
          {
            heading: "The model writes for itself",
            body: "The model writes proofs that skip steps because the steps are obvious to the model's pattern. They are not obvious to you. The model's proof is a note to itself, not a proof for you. When you read it and cannot follow, the gap is not your failure. It is the model's choice to write for itself, not for you. The skill is to read the model's proof and fill the gaps it left for itself. Then write your own proof, for your reader, with every step shown.",
          },
        ],
        bigIdea:
          "A proof is for the reader, not the writer. Write it so a friend could walk it. The model writes for itself. You write for others.",
        tryThis: [
          {
            title: "Write for a friend",
            minutes: 14,
            steps: [
              "Solve a simple problem. Write the proof in steps.",
              "Ask: could a friend who has not seen this problem walk my steps?",
              "If you find a step that a friend would not follow, fill it in.",
              "Ask a real friend or family member to try walking your proof. Did they arrive at the answer?",
              "Talk About It: where did they get stuck? What did you learn about writing for the reader?",
            ],
          },
        ],
        dinnerQuestion:
          "What proof did we write for a reader this week, and could they walk it?",
        transfer: [
          { label: "English", note: "Writing for the reader is the same skill in essays and proofs." },
          { label: "Thinking", note: "Steel-man: you write the other view for the other person to sign. Same standard." },
        ],
        ifTheySay: [
          {
            heard: "It's obvious to me.",
            reply: "It is obvious to you. Is it obvious to the reader? The proof is for the reader. If the reader cannot follow, the proof is a note, not a proof. Fill the step.",
          },
        ],
        integrity:
          "Do not present the model's proof as your own. If the model wrote the steps and you filled the gaps, cite both. The proof is yours if you wrote it for the reader.",
        aiLab: {
          setup: "After the proof is written for a friend.",
          childDoes:
            "Ask the model to read your proof. Ask: 'Could a friend walk this? Where would they get stuck?' If it finds a gap, fill it. The model is a reader, not a writer. Use it to test your proof for others.",
          evaluate: [
            "Did they write the proof for a reader, not themselves?",
            "Did they test it with a real person?",
            "Did they fill the gaps the reader found?",
          ],
        },
      },
      emerging: {
        title: "Proof as a Social Act",
        dek: "A proof is a social act: you write a path so others can walk it. The model writes for itself. You write for the reader. The reader is the test.",
        objective:
          "The student can write a proof that a peer could follow, use the model as a test reader, and explain why proof is a social practice, not a private one.",
        parentBriefing:
          "This sitting teaches the student that proof is social. Mathematics is not a private act. It is a public path. You write so others can verify. The model writes for itself. The student writes for the reader. The reader is the test: a peer, a model used as a reader, or a teacher. The proof that only the writer can follow is a note. The proof a reader can walk is mathematics. The student who adopts this standard will write proofs that communicate, not just calculate.",
        hardEdges: [
          "Academic integrity: the proof is yours if you wrote it. If the model wrote it and you copied, it is the model's proof, not yours.",
          "The model as a test reader is different from the model as a writer. The student must use it to test, not to write.",
        ],
        reading: [
          {
            heading: "Mathematics is social",
            body: "Mathematics is not done in private. A proof is written for a community. The community verifies it. If the community cannot follow it, the proof is not accepted. This is not a school rule. It is how mathematics works. The model writes proofs that skip steps because it does not have a reader. It has a pattern. The student who writes for a reader is doing mathematics. The student who writes for themselves is keeping notes. The difference is the reader. Write for the reader. Use the model as a test reader. Use a peer as a real reader. The proof that survives both is a proof.",
          },
          {
            heading: "The model as a test reader",
            body: "The model can be a test reader. You write the proof. You show the model. You ask: 'Could a peer follow this? Where would they get stuck?' The model finds the gaps. You fill them. This is different from asking the model to write the proof. The model as a reader tests your proof. The model as a writer replaces your proof. Use it as a reader. Never use it as a writer. The student who knows the difference is doing mathematics with a tool. The student who does not is outsourcing their thinking.",
          },
        ],
        bigIdea:
          "Proof is social. Write for the reader. Use the model as a test reader, never as a writer. The proof that survives a reader is a proof.",
        tryThis: [
          {
            title: "Write for a reader, test with the model",
            minutes: 22,
            steps: [
              "Write a proof on a problem at your level. Write for a peer, not for yourself.",
              "Show the model. Ask: 'Could a peer follow this? Where would they get stuck?'",
              "Fill the gaps the model finds. Rewrite the proof.",
              "Show a real peer or family member. Can they walk it?",
              "Write: SOCIAL PROOF (a reader can walk it) or PRIVATE NOTE (only you can follow it).",
              "Talk About It: what did the model catch as a reader that you missed as a writer?",
            ],
          },
        ],
        dinnerQuestion:
          "What proof did we write for a reader this week, and did it survive the test?",
        transfer: [
          { label: "English", note: "Writing for the reader is the same skill in essays and proofs." },
          { label: "Science", note: "A methods section is a proof for other scientists. Same social standard." },
        ],
        ifTheySay: [
          {
            heard: "I don't need to write for others. I understand it.",
            reply: "You understand it for yourself. That is a note. A proof is for the reader. If you cannot write it so another person can follow, you have a private understanding, not a public proof. Mathematics is public. Write for the reader.",
          },
          {
            heard: "The model can just write the proof.",
            reply: "It can. That proof is the model's, not yours. It is written for the model's pattern, not for your reader. Use the model as a test reader. Write the proof yourself. The proof that is yours is the one you wrote for a reader.",
          },
        ],
        integrity:
          "Cite the model as a test reader if it found gaps you fixed. The proof is yours. The review is the model's. The citation is honest.",
        aiLab: {
          setup: "After the proof is written and tested.",
          childDoes:
            "Show the model the proof. Ask: 'Could a peer follow this?' If it says 'yes, it is clear,' ask: 'Where would they get stuck?' If it finds a gap, fill it. The model is a reader, not a writer. Use it to test, not to write.",
          evaluate: [
            "Did they write for a reader, not for themselves?",
            "Did they use the model as a test reader?",
            "Did the proof survive a real reader (peer or family member)?",
          ],
        },
      },
      adult: {
        title: "Show the Path for Others",
        dek: "If you only show answers, the child learns that math is private. If you show paths for others, they learn that math is social. That is the deeper lesson.",
        objective:
          "The adult models writing a path for a reader on one real household calculation, shows it to the child as if the child were the reader, and names that the path is for the reader.",
        parentBriefing:
          "The adult models the social act of proof. Do a household calculation. Write the steps as if the child were the reader. Show the child. Ask: 'Could you walk these steps?' If they can, the path is social. If they cannot, the path is private. The adult who writes for the reader teaches the child that math is a social act: you show your path so others can verify. The adult who only shows answers teaches the child that math is private: you have the answer and the path is yours alone. The social path is the lesson.",
        hardEdges: [
          "Do not lecture. Write the path. Show it. Ask the child if they can walk it. That is the lesson.",
          "If the child cannot walk it, that is data. Fill the gap. The gap is the lesson.",
        ],
        reading: [
          {
            heading: "The path for the child",
            body: "Write the household calculation as if the child were the reader. Show every step. Then show the child. Ask: 'Could you walk this?' If they can, the path is social: another person can verify it. If they cannot, the path is private: only you can follow it. Fill the gap. Make it social. The child who sees an adult write for a reader learns that math is a public path, not a private answer. That is the deeper lesson of this unit: mathematics is something we do together, not something we do alone with a machine.",
          },
        ],
        bigIdea:
          "Write the path for the child. If they can walk it, the path is social. That is what mathematics is: a path others can verify.",
        tryThis: [
          {
            title: "Write for the child",
            minutes: 10,
            steps: [
              "Do a household calculation. Write the steps as if the child were the reader.",
              "Show the child. Ask: 'Could you walk these steps?'",
              "If they can, say: 'That is a proof. Another person can verify it.'",
              "If they cannot, fill the gap. Then ask again.",
              "Name: 'Math is a path for others to walk. That is why we show the steps.'",
            ],
          },
        ],
        dinnerQuestion:
          "What path did we write for the child to walk this week, and could they walk it?",
        transfer: [
          { label: "Parenting", note: "The path you write for the child is the path they will write for others." },
          { label: "Math", note: "Show the Path: the unit is about mathematics as a social act." },
        ],
        ifTheySay: [
          {
            heard: "The child can't follow my math.",
            reply: "Then write simpler steps. The path is for the reader. If the reader is the child, write for the child. If they cannot follow, the steps are too high. Lower them. The point is not the complexity. It is the walkability.",
          },
        ],
        integrity:
          "If you used the model for the answer, say so. The path is yours if you wrote the steps. The answer is the model's if you asked it. The child can tell.",
        aiLab: {
          setup: "After the child tries to walk the path.",
          childDoes:
            "Ask the child: 'Could you walk this?' If yes, the path is social. If no, ask: 'Where did you get stuck?' Fill the gap. Then ask again. The filling is the lesson.",
          evaluate: [
            "Did you write the path for the child as the reader?",
            "Did the child try to walk it?",
            "Did you name that math is a social act?",
          ],
        },
      },
    },
  }),

  // ── 6. Show the Path (capstone) ─────────────────────────────────────
  ...expand({
    slug: "show-path-capstone",
    subject: "math",
    unit: "Show the Path",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Show the Path",
        dek: "You now know: the path is the proof, the model checks, the blank board tests, and the path is for others. Show one full path.",
        objective:
          "The student can walk one full mathematical path: solve, write steps for a reader, check with the model, reproduce on a blank board, and report.",
        parentBriefing:
          "This is the capstone. The student runs the full cycle: solve a problem, write the steps for a reader, check with the model, reproduce on a blank board, report. The cycle ties together every skill from the unit. The output is one path, shown end to end, that a reader could walk and the student could reproduce. That is the capstone artifact.",
        hardEdges: [
          "The student must run every step. Skipping a step is skipping the capstone.",
          "Celebrate the cycle, not the correctness. A wrong answer with a complete path is more valuable than a right answer with no path.",
        ],
        reading: [
          {
            heading: "The whole unit in one path",
            body: "Walk a path. Write it for a reader. Check it with the model. Reproduce it on a blank board. Report. That is the whole unit in one cycle. The path is the proof. The model is the checker. The blank board is the test. The reader is the social. The report is the honesty. The child who can run this cycle once has learned the unit. The child who runs it again has a habit. The child who runs it for life has a skill that the model cannot replace: the ability to show a path others can walk.",
          },
        ],
        bigIdea:
          "Walk, write for a reader, check, reproduce, report. The whole unit in one path. That is the capstone.",
        tryThis: [
          {
            title: "One full path",
            minutes: 20,
            steps: [
              "Pick a problem at your level. Walk it on paper. Write each step.",
              "Write the steps for a reader: could a friend follow?",
              "Check with the model: 'Check my steps. Where am I wrong?'",
              "Close everything. Blank board. Reproduce the key step.",
              "Report: 'I walked [problem]. The path is [steps]. The model [checked/found X]. The blank board [owned/gap].'",
              "Talk About It: what did the full cycle teach that a single step did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What full path did we show this week, and what did the cycle reveal?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the full cycle is the check, applied to a path." },
          { label: "English", note: "You Write It: the same cycle, applied to a paragraph." },
        ],
        ifTheySay: [
          {
            heard: "That's a lot for one problem.",
            reply: "The first time, it is. The second time, it is faster. The third time, it is a habit. The cycle is an investment. The return is a path you own, that a reader can walk, and that the model checked. That is worth twenty minutes.",
          },
        ],
        integrity:
          "The report includes the path, the model's check, and the blank board result. Nothing is erased. The full cycle is the honest report.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Show the model the report. Ask: 'What did I do that you cannot do?' If it says 'you showed a path I cannot verify independently,' that is honest. If it says 'we collaborated,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they run all five steps?",
            "Is the path written for a reader?",
            "Can they reproduce the key step on a blank board?",
          ],
        },
      },
      emerging: {
        title: "The Full Path",
        dek: "Walk, write for a reader, check with the model, reproduce on a blank board, report. One full mathematical path, end to end. That is the capstone.",
        objective:
          "The student can run the full proof cycle on a real mathematical problem, produce a readable proof that survives a model's hostile review and a blank board test, and write a one-paragraph report.",
        parentBriefing:
          "This is the emerging capstone. The student runs the full cycle: solve, write for a reader, submit to the model's hostile review, reproduce on a blank board, report. The output is one proof that survived three tests: the reader test, the model's review, and the blank board. The proof is the capstone artifact. It is the proof that the student can show a path others can walk in the age of the machine that gives the answer.",
        hardEdges: [
          "The proof must survive all three tests. If it fails one, the student fixes it and retries. The capstone is the proof that passed.",
          "Academic integrity: the proof is the student's. The model is cited as a reviewer. The blank board is the student's own reproduction.",
        ],
        reading: [
          {
            heading: "The three-test proof",
            body: "The capstone proof passes three tests. The reader test: a peer can walk it. The model's hostile review: the model found the weak steps and the student fixed them. The blank board test: the student can reproduce it without notes. A proof that passes all three is a proof. A proof that passes one or two is a draft. The student who runs the cycle and passes all three has produced something the model cannot: a path that is owned, verified, and reproducible. That is mathematics in the age of fluency.",
          },
        ],
        bigIdea:
          "The capstone proof passes three tests: the reader, the model's review, and the blank board. A proof that passes all three is a proof the model cannot replace.",
        tryThis: [
          {
            title: "The three-test proof",
            minutes: 30,
            steps: [
              "Pick a problem at the edge of your skill. Walk it. Write each step for a reader.",
              "Test 1: Show a peer or family member. Can they walk it?",
              "Test 2: Ask the model for a hostile review. Fix the weaknesses it finds.",
              "Test 3: Close everything. Blank board. Reproduce the proof.",
              "Write the report: 'Problem: [X]. Path: [steps]. Reader: [passed/stuck at Y]. Model review: [found Z, fixed]. Blank board: [reproduced/gaps at W]. Verdict: [proof/draft].'",
              "If draft, fix and retry. If proof, keep it. It is the capstone artifact.",
            ],
          },
        ],
        dinnerQuestion:
          "What proof did we build this week, and did it pass all three tests?",
        transfer: [
          { label: "Science", note: "The full measurement protocol is the same structure: design, measure, calibrate, report." },
          { label: "Thinking", note: "The full rhetorical audit is the same structure: ethos, pathos, logos, frame, missing voice." },
        ],
        ifTheySay: [
          {
            heard: "This is too much work for one proof.",
            reply: "The first time, it is. The capstone is the investment. The second proof will be faster. The third will be a habit. The capstone is the proof that the skill exists. After that, the skill is yours.",
          },
          {
            heard: "The model can write a better proof.",
            reply: "It can write a smoother proof. It cannot write a proof that passes your blank board test. It cannot write a proof that a peer walks. It can write a proof that a reader follows, but the path is the model's, not yours. The capstone is the proof that is yours.",
          },
        ],
        integrity:
          "The report cites the model as a reviewer, the peer as a reader, and the blank board as the reproduction test. The proof is the student's. The citations are honest.",
        aiLab: {
          setup: "After the three-test proof.",
          childDoes:
            "Show the model the final proof. Ask: 'Could you write this proof yourself, without me?' If it says 'yes,' ask: 'Show me.' Compare. If its proof is different, the difference is the model's path versus yours. Both might be correct. Only one is yours.",
          evaluate: [
            "Did the proof pass all three tests?",
            "Is the report honest about which tests passed and which needed fixes?",
            "Can the student name what the three-test proof has that a model answer does not?",
          ],
        },
      },
      adult: {
        title: "The Path at the Table",
        dek: "Run the full cycle once, at the table, on something real. The child who sees the cycle will run it for life. That is the capstone.",
        objective:
          "The adult runs the full proof cycle on one real household calculation in front of the child, reports the result out loud, and models that the path is the skill.",
        parentBriefing:
          "This is the adult capstone. The adult runs the full cycle: solve, write for a reader (the child), check with the model, reproduce on a blank board, report. Out loud. At the table. On one real calculation. The child sees the full cycle once. That is the investment. The child who sees an adult walk a path, check it, reproduce it, and report it honestly will internalize the cycle. The child who never sees it will use the model as a walker for life. One cycle. Out loud. That is the capstone.",
        hardEdges: [
          "Do not make this a lecture. Run the cycle. Talk through the steps. The child watches.",
          "If a test fails, say so. The honest failure is the lesson. The hidden failure is not.",
        ],
        reading: [
          {
            heading: "One cycle at the table",
            body: "The adult runs the cycle on a real calculation. Walk the steps. Write them for the child as the reader. Check with the model. Reproduce on a blank board. Report. The child sees: math is a path, the model checks, the blank board tests, and the path is for the reader. That is the whole unit, modeled in one cycle, at the table, on something real. The child will not remember the vocabulary. They will remember the Tuesday you walked a path, checked it, reproduced it, and said: 'That is the path. The answer is just where the path ends.'",
          },
        ],
        bigIdea:
          "Run the full cycle once, at the table. The child who sees it will run it for life. The answer is where the path ends. The path is the skill.",
        tryThis: [
          {
            title: "One cycle at the table",
            minutes: 15,
            steps: [
              "Pick a real household calculation. Walk the steps out loud.",
              "Write the steps for the child as the reader. Ask: 'Could you walk this?'",
              "Check with the model: 'Check my steps.' Name the model's role out loud.",
              "Close everything. Blank board. Reproduce the key step.",
              "Report: 'Path: [steps]. Model: [checked/found X]. Blank board: [owned/gap]. The path is the skill.'",
              "Let the child see the full cycle. The seeing is the investment.",
            ],
          },
        ],
        dinnerQuestion:
          "What full cycle did we run at the table this week, and what did the child see?",
        transfer: [
          { label: "Parenting", note: "The cycle you model is the cycle they will run when you are not there." },
          { label: "All subjects", note: "Every WisdomForge unit has a version of this: try, check, close. The proof cycle is the math version." },
        ],
        ifTheySay: [
          {
            heard: "The child won't follow all of it.",
            reply: "They do not need to follow all of it. They need to see it. The seeing teaches: math is a cycle, not an answer. The understanding comes later. The habit comes from seeing it once.",
          },
          {
            heard: "I don't have time for the full cycle at home.",
            reply: "The first time takes fifteen minutes. The second time takes eight. The third time is a habit. One cycle, once, out loud, is the investment. The return is a child who shows paths instead of collecting answers.",
          },
        ],
        integrity:
          "If a test fails, say so. The honest cycle is the lesson. The cycle that hides a failure is a performance, not a model.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Ask the child: 'What did I do that the model didn't?' Let them answer. If they say 'you walked the path and the model checked,' the cycle landed. If they say 'you got the answer,' run it again. The path is the lesson.",
          evaluate: [
            "Did you run the full cycle out loud?",
            "Did the child see every step?",
            "Can the child name one thing you did that the model did not?",
          ],
        },
      },
    },
  }),
];
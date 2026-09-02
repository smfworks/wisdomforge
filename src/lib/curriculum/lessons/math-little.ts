import { expand } from "./factory";

const UNIT = "Number in the Age of AI";

export const mathLittleLessons = [
  ...expand({
    slug: "path-on-paper",
    subject: "math",
    unit: UNIT,
    number: 2,
    bands: ["little"],
    variants: {
      little: {
        title: "The Path on Paper",
        dek: "A number without steps is a rumor. Draw how you counted. The tool may look at the path. It may not give the number.",
        objective:
          "The child counts real objects, writes or draws the path they used, and only then may ask a guide whether the path is sound — not what the total is.",
        parentBriefing:
          "Sitting 1 was guess, then count. This sitting is: show how you counted. Use grapes, blocks, spoons. The child makes marks, groups, or a tally on paper before any model opens. If they skip the paper, start again. The guide may not say the total. Ask: 'Did you skip any? Did you count one twice?' That is the work. Calculators wait. Phones wait.",
        hardEdges: [
          "The tool is closed while they count and mark. It may see the path after.",
          "The guide may not give the count. If they ask 'how many?', send them back to the paper.",
        ],
        reading: [
          {
            heading: "Marks are the math",
            body: "When you count on your fingers, the fingers are a path. When you make a mark for each spoon, the marks are a path. A talking tool can say a number without a path. That number is not yours. Yours is the marks you can point to. If a mark is missing, the number is a guess wearing a costume. Write the path. Then, if you want, ask a tool: 'does this way of counting skip or double?' Not: 'how many?'",
          },
        ],
        bigIdea: "If you cannot show the path, the number is not yours yet.",
        tryThis: [
          {
            title: "Spoons or blocks",
            minutes: 18,
            steps: [
              "Put a handful of objects on the table. Guess first (sitting 1). Write the guess.",
              "Count by making one mark per object on paper. Do not use a phone.",
              "Point to each mark. Did you skip? Did you double?",
              "Ask a Grown-Up: can you walk your path out loud?",
              "Only then a tool may look at the marks — not to say the total.",
            ],
          },
        ],
        dinnerQuestion: "What path did we draw before we believed a number?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is the total. The check is the marks." },
          { label: "AI", note: "Ask about the path. Refuse a bare digit." },
        ],
        ifTheySay: [
          {
            heard: "Just tell me how many.",
            reply: "That is the prize. The path is the work. Show the marks. Then we can talk.",
          },
        ],
        integrity: "We do not copy a tool's total onto the paper as if we counted.",
        aiLab: {
          setup: "After the marks exist.",
          childDoes: "Ask: 'Did I skip or double?' Do not ask for the total.",
          evaluate: [
            "Was there a written or drawn path?",
            "Was the tool closed during the count?",
            "Did the guide stay off the total?",
          ],
        },
      },
    },
  }),

  ...expand({
    slug: "check-the-wild-answer",
    subject: "math",
    unit: UNIT,
    number: 3,
    bands: ["little"],
    variants: {
      little: {
        title: "Catch a Wild Number",
        dek: "A fluent wrong number still rings the bell if you guessed first. Practice catching one.",
        objective:
          "The child writes a guess, counts, then hears a wrong fluent total and says it is wild — without being given the right total by the guide.",
        parentBriefing:
          "You will say a wrong number on purpose, confidently. The child must use their guess and their count to refuse it. Do not laugh them down if they miss. Do the sitting again. The guide must not rescue them with the real total until they have said 'that cannot be' or shown their marks. This is how they keep a machine honest later.",
        hardEdges: [
          "The grown-up supplies one confident wrong total. The guide on a device must not be first.",
          "Do not shame a miss. Wild is data. Repeat.",
        ],
        reading: [
          {
            heading: "Wrong can sound sure",
            body: "A number can sound like a grown-up and still be wild. If you guessed 'about ten' and someone says 'forty-seven' in a nice voice, your guess is the alarm. If you have no guess, you will nod. Nodding is how wrong numbers move into the house. Catch one on the table today, while the objects are still there.",
          },
        ],
        bigIdea: "A guess is an alarm. Without it, a fluent wrong number walks in.",
        tryThis: [
          {
            title: "The grown-up lies (on purpose)",
            minutes: 18,
            steps: [
              "Guess. Write it. Count with objects. Keep the objects out.",
              "A grown-up says a wrong total, sure and kind.",
              "The child says whether that number can be right, using the guess and the pile.",
              "Ask a Grown-Up: what made the wrong number sound true?",
              "Only then check the real count together. The tool stays closed until after the catch.",
            ],
          },
        ],
        dinnerQuestion: "What wrong number did we catch today — and how did we know?",
        transfer: [{ label: "AI", note: "Fluent is a style. Truth is a check." }],
        ifTheySay: [
          {
            heard: "The tool wouldn't be wrong.",
            reply: "Tools drift. Voices sound sure. Your guess is how you notice.",
          },
        ],
        integrity: "Do not let the guide be the one who announces the catch. The child must say it.",
        aiLab: {
          setup: "After they caught the grown-up's wrong number.",
          childDoes: "Optional: ask a tool a counting question you already know. See if you would have caught a wild answer.",
          evaluate: ["Written guess?", "Did they refuse a confident wrong total?", "Tool second?"],
        },
      },
    },
  }),

  ...expand({
    slug: "same-quantity-two-ways",
    subject: "math",
    unit: UNIT,
    number: 4,
    bands: ["little"],
    variants: {
      little: {
        title: "Count It Two Ways",
        dek: "If two honest paths disagree, do not ask a tool to pick a winner until both paths are on the table.",
        objective:
          "The child counts the same pile two ways (ones, then groups of two or ten) and notices whether the totals match — before any model.",
        parentBriefing:
          "Same objects. First count by ones with marks. Second count by twos or by moving into groups of five. If they mismatch, the work is to find the skip — not to average, not to ask a phone. The guide may not declare the true total until they have looked at both paths.",
        hardEdges: [
          "Two paths before any tool.",
          "A mismatch is the lesson. Do not smooth it away.",
        ],
        reading: [
          {
            heading: "Two paths, one pile",
            body: "A pile does not change because you counted it differently. If your two counts disagree, one path skipped or doubled. That is good news. You found a leak. A tool that gives you a third number without looking at your marks is hiding the leak. Show both paths. Then we can talk.",
          },
        ],
        bigIdea: "Matching paths are a check. A tool is not a tie-breaker for work you did not show.",
        tryThis: [
          {
            title: "Ones, then groups",
            minutes: 18,
            steps: [
              "Guess. Count by ones. Marks on paper.",
              "Count the same pile by twos or fives. New marks.",
              "Do they match? If not, find the skip together. No phone.",
              "Ask a Grown-Up: which path felt safer, and why?",
            ],
          },
        ],
        dinnerQuestion: "When did two ways of counting disagree — and what did we find?",
        transfer: [{ label: "Science", note: "Measure twice." }],
        ifTheySay: [
          {
            heard: "Let's just ask the tool which is right.",
            reply: "The pile is still here. The marks are still here. Find the skip first.",
          },
        ],
        integrity: "Do not let a model pick a winner between two unmarked guesses.",
        aiLab: {
          setup: "After both paths exist.",
          childDoes: "Ask: 'Could grouping by twos skip one?' Not: 'what is the number?'",
          evaluate: ["Two paths on paper?", "Mismatch investigated without a tool first?"],
        },
      },
    },
  }),

  ...expand({
    slug: "about-not-exact",
    subject: "math",
    unit: UNIT,
    number: 5,
    bands: ["little"],
    variants: {
      little: {
        title: "About, Not Exact",
        dek: "Sometimes the honest number is 'about twelve,' not a fake exact. Exact comes after a path. About comes first.",
        objective:
          "The child practices saying about-how-many for a pile too messy or too many to count quickly, then counts a sample, then refuses a tool's exact digit as the first answer.",
        parentBriefing:
          "Use a jar of beans, a bookshelf, or cars in a lot from the window — something they cannot finish in ten seconds. The work is a responsible about. Then count a handful and scale with a grown-up in plain words ('about four handfuls'). No formula. The guide may not emit a precise total as if it had counted the jar.",
        hardEdges: [
          "Do not pretend a model counted the jar.",
          "About is not laziness. Exact without a path is the laziness.",
        ],
        reading: [
          {
            heading: "About is a grown-up word",
            body: "Some piles are too big for one sitting. 'About twenty' can be more honest than 'nineteen' said fast. A tool loves exact. Exact is a costume if nobody counted. Today we practice about, then we count a piece, then we see if the about still holds. The tool does not get to be first.",
          },
        ],
        bigIdea: "About is a number with a size. Fake exact is a rumor with extra digits.",
        tryThis: [
          {
            title: "The jar or the shelf",
            minutes: 18,
            steps: [
              "Look. Say about-how-many out loud. Write it.",
              "Count one handful or one shelf. Write that exact.",
              "With a grown-up, say: about how many handfuls in the whole?",
              "Ask a Grown-Up: would 'exactly 47' from a phone be more honest than our about?",
            ],
          },
        ],
        dinnerQuestion: "Where did 'about' tell the truth better than a fake exact?",
        transfer: [{ label: "Civics", note: "Headlines love exact. Size comes first." }],
        ifTheySay: [
          {
            heard: "About isn't real math.",
            reply: "About is the size. Exact is the path finished. We need both. We do not skip to a digit we did not earn.",
          },
        ],
        integrity: "Do not copy a model's exact count of an uncounted jar onto the page.",
        aiLab: {
          setup: "After the about is written.",
          childDoes: "Ask: 'What would make our about too small?' Do not ask for the exact total.",
          evaluate: ["About written first?", "A real sample counted?", "No fake exact from a tool?"],
        },
      },
    },
  }),

  ...expand({
    slug: "catch-the-machine",
    subject: "math",
    unit: UNIT,
    number: 6,
    bands: ["little"],
    variants: {
      little: {
        title: "Catch the Machine",
        dek: "The last sitting: guess, path, then a tool. If the tool's number fights your path, you keep the path until you find the leak — in you or in it.",
        objective:
          "The child completes guess → marks → optional tool check of the method, and can refuse a tool total that does not match the pile.",
        parentBriefing:
          "This is the capstone of the little math arc, not a calculator lesson. Objects on the table. Guess written. Marks on paper. Then — only then — a parent-approved tool may be asked whether the method skips or doubles. If it answers with a total, close it. If it disagrees with the pile, believe the pile first. You are in the room. Five to ten: grown-up present. The tool is never first hand.",
        hardEdges: [
          "Try This happens on paper before any model.",
          "If the tool gives the total, that turn is a miss. Start the check again with a method question.",
        ],
        reading: [
          {
            heading: "The pile is the judge",
            body: "You guessed. You marked. Now a tool may look. If it says a number that cannot fit the pile you can still see, the pile wins until you find a skip. Maybe you skipped. Maybe the tool drifted. Both are possible. Neither is solved by nodding. This is the whole little math we needed: a head with a size, a hand with a path, and a house that does not bow to a fluent digit.",
          },
        ],
        bigIdea: "Guess. Path. Then the tool. The pile is still the judge.",
        tryThis: [
          {
            title: "Full three-beat",
            minutes: 18,
            steps: [
              "Guess. Write it.",
              "Count with marks. Keep the objects out.",
              "Ask a Grown-Up to hear the path out loud.",
              "Only then a tool may be asked: 'Did we skip or double?' If it says the total, close it and ask again.",
              "If tool and pile fight, believe the pile until you find the leak.",
            ],
          },
        ],
        dinnerQuestion: "Did a tool try to go first today — and what did we do?",
        transfer: [
          { label: "AI", note: "Estimate before the oracle. Path before the prize." },
          { label: "Science", note: "The world on the table beats a fluent answer." },
        ],
        ifTheySay: [
          {
            heard: "The tool already knows how many.",
            reply: "Then it can wait. We still guess. We still mark. Knowing is not the same as us having done it.",
          },
        ],
        integrity: "The child's marks are the work. A copied total is not a sitting.",
        aiLab: {
          setup: "After guess and marks.",
          childDoes: "Ask only about skips and doubles. Reject a total. If it gives one, say so and close it.",
          evaluate: [
            "Guess written?",
            "Path on paper?",
            "Tool asked about method, not total?",
            "Pile still in view?",
          ],
        },
      },
    },
  }),
];

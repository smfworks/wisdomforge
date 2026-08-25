import { expand } from "./factory";

export const scienceMeasureLessons = [
  // ── 1. The Scale Versus the Mouth ───────────────────────────────────
  ...expand({
    slug: "scale-vs-mouth",
    subject: "science",
    unit: "Measure Twice",
    number: 1,
    variants: {
      little: {
        title: "The Scale Versus the Mouth",
        dek: "A model can tell you how heavy something is. The scale does not talk. It shows you.",
        objective:
          "The child can weigh or measure something with a real tool, compare it to what a model says, and notice which one is the measurement.",
        parentBriefing:
          "This is the first sitting on measurement. The idea is simple: a model tells you a number. A scale shows you a number. One is a claim. The other is a measurement. The child needs to feel the difference in their hands. Use a kitchen scale, a ruler, a measuring cup. Weigh something. Then ask the model how much it weighs. Compare. The model is guessing from training data. The scale is measuring from the world. The child who can tell the difference will not confuse a fluent guess for a measurement.",
        hardEdges: [
          "No dangerous measurements. Kitchen items only.",
          "Do not shame the model for being wrong. The point is the difference between a guess and a measurement, not the model's failure.",
        ],
        reading: [
          {
            heading: "The mouth and the scale",
            body: "A talking tool can tell you how heavy a cup of water is. It will say a number. It is guessing from what it read. It did not hold your cup. A scale does not talk. You put the cup on it. It shows you a number. That number is a measurement. A measurement came from the world. A guess came from the tool's memory. Both can be wrong. Only one is a measurement. The skill is to know which is which, and to use the scale when it matters.",
          },
          {
            heading: "When the mouth is close",
            body: "Sometimes the model's guess is close. A cup of water is about 240 grams. The model might say 237 or 250. That is close. The scale says 241. The model was close. But close is not the same as measured. If you are baking, close might be fine. If you are giving medicine, close is not fine. The skill is to know when close is enough and when you need the scale. A model's guess is always a guess. A scale's number is a measurement. Know which one your decision needs.",
          },
        ],
        bigIdea:
          "A model tells you a number. A scale shows you one. One is a guess. The other is a measurement.",
        tryThis: [
          {
            title: "Weigh and compare",
            minutes: 10,
            steps: [
              "Pick something to weigh: an apple, a cup of water, a toy.",
              "Before you weigh it, ask the model: 'How much does this weigh?'",
              "Weigh it on a real scale.",
              "Compare: which one measured, and which one guessed? Were they close?",
              "Talk About It: when would the guess be close enough? When would you need the scale?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure today with a real tool instead of asking a screen?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: guess first, then measure." },
          { label: "AI", note: "The model guesses from training. The tool measures from the world." },
        ],
        ifTheySay: [
          {
            heard: "The model was close.",
            reply: "Close is a good guess. It is still a guess. The scale measured. When you need to know, use the scale. When close is fine, the guess is fine. Know which one you need.",
          },
        ],
        integrity:
          "We do not write the model's guess as if we measured it. The scale's number is ours. The model's number is a guess.",
        aiLab: {
          setup: "After the real measurement.",
          childDoes:
            "Ask the guide: 'How much does an apple weigh?' Then put an apple on the scale. Compare. The guide guessed. The scale measured.",
          evaluate: [
            "Did they use a real measuring tool?",
            "Did they distinguish the guess from the measurement?",
            "Can they name one situation where the guess would not be close enough?",
          ],
        },
      },
      young: {
        title: "Guess, Measure, Then Argue",
        dek: "Before you trust a model's number, measure the thing. The measurement settles the argument the model started.",
        objective:
          "The student can estimate a quantity, measure it with a real instrument, compare both to a model's answer, and identify which one is the measurement.",
        parentBriefing:
          "This sitting adds the estimate. The student guesses first, measures second, then asks the model third. The order matters. If the model goes first, the student will anchor on its answer and the measurement becomes a confirmation instead of a check. The skill is the order: guess, measure, then compare. The model is the third voice, not the first. If its number is wrong, the measurement caught it. If its number is right, the measurement confirmed it. Either way, the measurement is the authority, not the model.",
        hardEdges: [
          "No using the model's answer to set the estimate. The estimate comes before the model speaks.",
          "Units matter. A measurement without a unit is a number, not a measurement.",
        ],
        reading: [
          {
            heading: "The order is the lesson",
            body: "If you ask the model first, you will believe its number. It sounds confident. It is your anchor now. When you measure, you will see what you expected to see. If you measure first, the measurement is the anchor. The model's number is a guess to compare. The order is the lesson: guess, measure, then compare. The model is the third voice. The measurement is the authority. If you flip the order, the model becomes the authority, and the measurement becomes a confirmation of a guess. That is not science. That is trust in a smooth voice.",
          },
          {
            heading: "When the measurement disagrees",
            body: "Sometimes the model says 300 grams and the scale says 340. That gap is the lesson. The model was guessing from training data. The scale was measuring from the world. The world is the authority. The gap is not a failure of the model. It is a property of the model: it guesses. The student who sees the gap and trusts the scale has learned measurement. The student who sees the gap and trusts the model has learned trust in fluency. Choose the lesson.",
          },
        ],
        bigIdea:
          "Guess, measure, then compare. The measurement is the authority. The model is the third voice.",
        tryThis: [
          {
            title: "The three-number check",
            minutes: 16,
            steps: [
              "Pick something to measure: temperature, weight, length, volume.",
              "Write your GUESS before anything else.",
              "MEASURE it with a real instrument. Write the number with units.",
              "Now ask the model: 'How much/how long/how hot is [thing]?' Write its number.",
              "Compare all three. Which one is the measurement? Did the model's guess match it?",
              "Talk About It: what would have happened if you asked the model first?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure this week where the model's guess was different from the scale?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: the same order, applied to numbers." },
          { label: "Thinking", note: "The check: a claim is a sentence you can check. A measurement is the check." },
        ],
        ifTheySay: [
          {
            heard: "The model was close enough.",
            reply: "Close enough for what? For baking, maybe. For medicine, no. For science, the measurement is the point. The model's guess is a starting point, not a result.",
          },
          {
            heard: "I asked the model first because I did not know.",
            reply: "That is the trap. The model sounds like it knows. It is guessing. If you ask it first, the guess becomes your anchor and the measurement becomes a check on a guess instead of a check on the world. Measure first.",
          },
        ],
        integrity:
          "If the model's number was different, write that down. Do not erase the gap. The gap is the data.",
        aiLab: {
          setup: "After the three-number check.",
          childDoes:
            "Show the guide the three numbers. Ask: 'Which of these is a measurement and which is a guess?' If it says 'the scale is most accurate,' that is correct. If it says 'my answer is based on general knowledge,' that is honest. Both are instructive.",
          evaluate: [
            "Did they guess before measuring?",
            "Did they measure before asking the model?",
            "Did they identify which number is the measurement?",
          ],
        },
      },
      emerging: {
        title: "Measurement Is Not a Claim",
        dek: "A model's number is a claim about the world. A measurement is the world answering back. Do not confuse the two.",
        objective:
          "The student can explain the difference between a model's quantitative claim and a real measurement, design a simple measurement to test the claim, and report the result honestly.",
        parentBriefing:
          "This sitting teaches the student to treat a model's numbers as claims, not facts. A model says 'the boiling point of this solution is 101.2 degrees.' That is a claim. The measurement is what happens when you put a thermometer in the solution. The skill is to design the measurement that tests the claim. This is the heart of experimental science: every claim about the world is tested by the world. The model is a very confident claimant. The thermometer is the world answering. The student who can design the measurement has learned that science is not about trusting the smoothest number. It is about asking the world.",
        hardEdges: [
          "Academic integrity: no model numbers in a lab report without a measurement to back them. This is the live wire.",
          "Safety: no dangerous measurements. Kitchen-grade instruments are sufficient for this sitting.",
        ],
        reading: [
          {
            heading: "The claim and the answer",
            body: "Every quantitative statement from a model is a claim, not a measurement. 'The density of this liquid is 1.03 g/mL.' That is a claim about a property of the world. The world has not answered yet. The measurement is the world answering: you put a known volume on a scale, you divide, you get a number. If the number matches the claim, the claim was accurate for this liquid. If it does not match, the claim was wrong for this liquid, no matter how confident it sounded. The gap between the claim and the measurement is the science. The model will not tell you the gap. It does not know. You have to measure.",
          },
          {
            heading: "Designing the measurement",
            body: "To test a claim, you design a measurement. The measurement has three parts: what you are measuring (the variable), what instrument you are using (the tool), and what units you expect. 'The model says this liquid has a density of 1.03 g/mL. I will measure 10 mL of it and weigh it. If it weighs 10.3 grams, the claim is accurate for this sample.' That is a measurement design. It is simple. It is also science. The student who can write that design has learned that a claim is tested by a procedure, not by confidence.",
          },
        ],
        bigIdea:
          "A model's number is a claim. A measurement is the world answering. The gap between them is the science.",
        tryThis: [
          {
            title: "Test one claim",
            minutes: 22,
            steps: [
              "Ask the model for a quantitative claim about something you can measure: the weight of a cup of flour, the temperature of tap water, the volume of a spoon.",
              "Write: CLAIM. The model said X.",
              "Design the measurement: VARIABLE / INSTRUMENT / UNITS.",
              "Measure. Write: RESULT. The world said Y.",
              "Compare. Write: MATCH / GAP. If gap, how big? Does the gap matter for the decision?",
              "Talk About It: did the model's confidence match its accuracy? Did you almost trust the claim without measuring?",
            ],
          },
        ],
        dinnerQuestion:
          "What number did a model claim this week that we tested against the world?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the measurement is the check on the quantitative claim." },
          { label: "AI", note: "Fluent error: the model is confidently wrong about specific numbers more than it admits." },
        ],
        ifTheySay: [
          {
            heard: "The model said 1.03 and I got 1.05. That's close enough.",
            reply: "Close enough for what? For a homework problem, yes. For identifying a liquid, maybe not. For a medical dose, absolutely not. The question is always: close enough for the decision I am about to make? If you do not know the tolerance, you do not know if it is close enough.",
          },
          {
            heard: "I can just use the model's number and save time.",
            reply: "You can, if the decision does not depend on accuracy. If it does, the model's number is a guess dressed in confidence. The measurement is the fact. Science is the difference between them. Skipping the measurement is skipping the science.",
          },
        ],
        integrity:
          "No model numbers in a lab report without a measurement. 'AI said 1.03' is not a result. 'I measured 1.05' is a result.",
        aiLab: {
          setup: "After the measurement.",
          childDoes:
            "Show the guide the claim and the result. Ask: 'Why might your measurement differ from my claim?' If it says 'measurements can vary,' that is true but vague. If it says 'my training data may not reflect your specific sample,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they design a measurement, not just run one?",
            "Did they report the gap honestly?",
            "Can they name whether the gap matters for the decision?",
          ],
        },
      },
      adult: {
        title: "The Measurement Habit",
        dek: "If you accept numbers from a model without measuring, the child learns that confidence is the same as evidence. It is not.",
        objective:
          "The adult models one measurement this week on a real household quantity, compares it to a model's claim, and names the difference out loud for the child.",
        parentBriefing:
          "The household runs on numbers: cooking temperatures, medicine doses, travel times, package weights. The model will give you all of them with confidence. The adult's job is to measure one of them and show the child the difference. Not every number. One number. A cooking temperature. A package weight. A driving time. You guess, you measure, you compare to the model. The child who watches you measure one number will learn that confidence is not evidence. The child who watches you accept every model number will learn that fluency is the same as fact.",
        hardEdges: [
          "Medical dosing: the measurement is from the label or the pharmacist, not a model. Never use a model for dose calculations.",
          "Do not make this a ritual on every number. One measurement a week is the habit. Every number is a pathology.",
        ],
        reading: [
          {
            heading: "The household number",
            body: "Pick a number the household uses. The weight of a bag of flour. The temperature of the oven. The time it takes to drive to school. The model will give you a number for all of these. Measure one. A kitchen scale for the flour. An oven thermometer for the oven. A clock for the drive. Compare to the model. Say out loud: 'The model said X. I measured Y. The difference is Z.' That moment teaches the child that numbers come from the world, not from the smoothest voice. The child who never sees an adult measure will treat the model's numbers as facts. The child who sees one measurement will ask: 'Did we measure that?' for the rest of their life.",
          },
          {
            heading: "When the model is right",
            body: "Sometimes the model's number matches the measurement. That is fine. The measurement is still the point. The model was right this time. It will not be right every time. The habit of measuring is what catches the time it is wrong. If you only measure when you doubt the model, you will miss the times it is wrong and you did not doubt. Measure sometimes when you trust it too. The confirmation is the habit. The habit is what catches the failure.",
          },
        ],
        bigIdea:
          "Measure one household number a week. The child who sees you measure learns that confidence is not evidence.",
        tryThis: [
          {
            title: "One household measurement",
            minutes: 12,
            steps: [
              "Pick a real household number: a weight, a temperature, a time, a volume.",
              "Ask the model: 'How much/how long/how hot is [thing]?' Write its claim.",
              "Measure it with a real instrument.",
              "Say out loud: 'The model said X. I measured Y. The difference is Z.'",
              "If the gap is zero, say: 'The model was right this time. Measuring confirmed it.' If the gap is not zero, say: 'The model was close, but close is not measured.'",
            ],
          },
        ],
        dinnerQuestion:
          "What number did we measure this week instead of trusting the model's guess?",
        transfer: [
          { label: "Parenting", note: "The measurement you model is the measurement they will demand when you are not there." },
          { label: "Math", note: "Estimate before the oracle: the same order, for the household." },
        ],
        ifTheySay: [
          {
            heard: "The model is usually right about simple things.",
            reply: "It is. And 'usually' is not 'always.' The habit of measuring catches the time it is not. One measurement a week is not paranoia. It is the practice of checking the confident voice against the world.",
          },
          {
            heard: "I don't have time to measure everything.",
            reply: "You do not need to measure everything. You need to measure one thing a week, out loud, in front of the child. That is the habit. The habit is the lesson, not the measurement.",
          },
        ],
        integrity:
          "Do not use a model for medical dosing. Ever. The label and the pharmacist are the measurement. The model is a guess.",
        aiLab: {
          setup: "After the household measurement.",
          childDoes:
            "Show the child the model's claim and your measurement. Ask: 'Which one is the fact?' Let them answer. The fact is the measurement. The claim is the guess. If they say 'the model,' that is the lesson you need to teach again.",
          evaluate: [
            "Did you measure one real household number?",
            "Did you name the difference out loud?",
            "Did the child see that the measurement, not the model, is the fact?",
          ],
        },
      },
    },
  }),

  // ── 2. Units Save Lives ─────────────────────────────────────────────
  ...expand({
    slug: "units-save-lives",
    subject: "science",
    unit: "Measure Twice",
    number: 2,
    variants: {
      little: {
        title: "Numbers Need Names",
        dek: "A number without a name is just a shape. Is it cups? Grams? Minutes? The name is the number.",
        objective:
          "The child can name the unit for a measurement they made and explain why a number without a unit is not a measurement.",
        parentBriefing:
          "Units are the names of numbers. 'Three' is not a measurement. 'Three cups' is. 'Three grams' is a different measurement. 'Three minutes' is another one. The model will give you numbers with units. It will also sometimes give you numbers without making the unit clear, or with a unit that does not match your situation. The child needs to learn that the number is only half the measurement. The unit is the other half. Use kitchen measurements: cups, spoons, the scale. Make the unit a habit.",
        hardEdges: [
          "Do not make this a vocabulary test. The point is the habit of naming the unit, not memorizing a list.",
          "Keep it to units the child can see and hold: cups, grams, minutes, inches.",
        ],
        reading: [
          {
            heading: "The number and its name",
            body: "If I say 'three,' you do not know what I measured. Three what? Three apples? Three cups? Three miles? The number is only half the measurement. The name is the other half. A talking tool can say 'the answer is 250.' Is that grams? Milliliters? Degrees? If you do not name it, you do not know what you measured. At WisdomForge we always say the name: 250 grams, 250 milliliters, 250 degrees. The name is the number. Without the name, the number is just a shape.",
          },
        ],
        bigIdea:
          "A number without a unit is just a shape. The name is the measurement.",
        tryThis: [
          {
            title: "Name the unit",
            minutes: 8,
            steps: [
              "Measure three things: a weight, a length, a time.",
              "For each, write the number AND the unit. '47 grams. 6 inches. 12 minutes.'",
              "Ask the model: 'How much does a cup of water weigh?' Does it give you the unit? Is the unit right?",
              "Talk About It: what would happen if you got the unit wrong?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure today where the unit was the most important part?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: a unitless estimate is not an estimate." },
          { label: "AI", note: "The model gives numbers. It does not always give the right unit for your situation." },
        ],
        ifTheySay: [
          {
            heard: "It's just a number.",
            reply: "It is not just a number. Three cups and three tablespoons are very different amounts. The number is the same. The unit changed everything. Always say the name.",
          },
        ],
        integrity:
          "We never write a number without its unit. A unitless number is not a measurement; it is a guess.",
        aiLab: {
          setup: "After the measurements.",
          childDoes:
            "Ask the model: 'How much sugar in a cookie?' Does it give a number? What unit? Is 'a cookie' specific enough to have an answer? The vagueness is the lesson.",
          evaluate: [
            "Did they name the unit for every measurement?",
            "Did they notice when the model's unit was unclear or wrong?",
            "Can they explain why a number without a unit is not a measurement?",
          ],
        },
      },
      young: {
        title: "The Wrong Unit Is the Wrong Answer",
        dek: "A model can give you the right number and the wrong unit. That is a wrong answer that looks right.",
        objective:
          "The student can identify the unit in a model's quantitative answer, check whether the unit matches the question, and explain why a right number with the wrong unit is a wrong answer.",
        parentBriefing:
          "This sitting teaches the student to check units, not just numbers. The model might say '250' when the question was about milliliters but the model answered in grams. The number might be right for grams. It is wrong for milliliters. The student needs to learn to read the unit and ask: is this the unit the question asked for? If not, the number is a wrong answer in a convincing costume. Use real examples: cooking, distance, time. The model is very good at sounding right while being in the wrong unit.",
        hardEdges: [
          "Do not make this about the model being stupid. The unit error is a property of language models, not a flaw to mock.",
          "Medical units: milligrams versus micrograms. The difference is a dose. Use this as a warning, not a drill.",
        ],
        reading: [
          {
            heading: "The right number, the wrong name",
            body: "A model might tell you the dose of medicine is '250.' Is that milligrams or micrograms? 250 milligrams is a normal dose. 250 micrograms is a different dose entirely. The number is the same. The unit is different. The model might not make the distinction clear. It might say '250' and assume you know the unit. If you do not check, you have the right number in the wrong unit, and that is a wrong answer that looks right. The skill is to always read the unit and ask: is this the unit the question asked for? If not, convert or reject.",
          },
          {
            heading: "Conversion is a check",
            body: "When the model gives you a number in one unit and you need another, you convert. 'The model said 2.5 kilograms. I need grams. That is 2500 grams.' The conversion is a check: did the model give you the right number in the right unit, or did it give you a number in the wrong unit and hope you would convert? The conversion is your responsibility. If you cannot do it, you do not know what the number means. If you cannot do it and you use the number anyway, you are trusting a number you cannot verify. That is not measurement. That is faith.",
          },
        ],
        bigIdea:
          "A right number with the wrong unit is a wrong answer in a convincing costume. Always check the unit.",
        tryThis: [
          {
            title: "Unit check",
            minutes: 14,
            steps: [
              "Ask the model a measurement question where the unit matters: 'How much flour in a cookie recipe?' or 'How far is it to school?'",
              "Write the model's answer. What unit did it use? Is it the unit you wanted?",
              "If not, convert. Can you? If you cannot, ask: do I know what this number means?",
              "Ask the same question with a different unit specified. Does the model comply? Does the number change correctly?",
              "Talk About It: when would the wrong unit cause a real problem?",
            ],
          },
        ],
        dinnerQuestion:
          "What number did a model give us this week where we had to check the unit?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: your estimate has a unit. Does the model's?" },
          { label: "Thinking", note: "The check: a number is a claim. The unit is part of the claim." },
        ],
        ifTheySay: [
          {
            heard: "The model knows the units.",
            reply: "It knows common units. It does not always use the unit you asked for. It does not always make the distinction clear. The check is yours. If you skip it, you are trusting a number you did not verify.",
          },
          {
            heard: "Conversions are annoying.",
            reply: "Conversions are the check. If you cannot convert, you do not know what the number means. If you do not know what it means, you should not use it. The conversion is the moment you take responsibility for the number.",
          },
        ],
        integrity:
          "Never report a number without its unit. Never report a model's number without confirming the unit is the one the question asked for.",
        aiLab: {
          setup: "After the unit check.",
          childDoes:
            "Ask the model the same question in two different units. 'How much flour in a cookie recipe, in cups?' and 'in grams?' Compare. Do the numbers match? If not, one of them is wrong. The mismatch is the lesson.",
          evaluate: [
            "Did they identify the unit in the model's answer?",
            "Did they check whether the unit matches the question?",
            "Can they name a situation where the wrong unit would cause a real problem?",
          ],
        },
      },
      emerging: {
        title: "Unit Errors Are Not Pedantry",
        dek: "The Mars Climate Orbiter burned up because one team used pound-seconds and another used newton-seconds. Units are not trivia. They are the difference between orbit and ashes.",
        objective:
          "The student can describe a real-world case where a unit error caused a failure, explain why the model is vulnerable to unit errors, and design a unit-check step for a measurement procedure.",
        parentBriefing:
          "This sitting teaches the student that unit errors are not academic. They have destroyed spacecraft, caused medical overdoses, and crashed airplanes. The model is vulnerable to unit errors because it does not measure. It produces numbers from patterns. The patterns sometimes mix units. The student needs to learn that checking units is not pedantry. It is the difference between a measurement and a disaster. Use a real case: the Mars Climate Orbiter is the classic. One team used imperial units, the other used metric. The spacecraft burned up in the atmosphere. The math was right. The units were wrong. That is the lesson.",
        hardEdges: [
          "Medical unit errors can be fatal. Use this as a cautionary example, not a drill.",
          "Do not make the student paranoid. The point is the check, not the fear.",
        ],
        reading: [
          {
            heading: "The orbiter",
            body: "In 1999, the Mars Climate Orbiter burned up in the Martian atmosphere. The cause was a unit error. One team of engineers used pound-seconds for thrust. Another team used newton-seconds. The numbers were the same shape. The units were different. The spacecraft entered the atmosphere at the wrong angle. It was destroyed. The math was correct. The units were wrong. That is not a footnote. That is the lesson. Units are the difference between a measurement and a disaster. The model does not measure. It produces numbers from patterns. The patterns sometimes mix units. If you do not check, you are flying the orbiter.",
          },
          {
            heading: "The model's unit problem",
            body: "The model is vulnerable to unit errors because it does not measure. It reads text. Text about cooking might say 'a cup of flour' and text about chemistry might say '250 mL of solution.' If the model mixes the contexts, it might give you a cooking answer in a chemistry unit or vice versa. It will not flag the mismatch. It will produce a number with a unit and sound confident. The unit might be wrong. The student who checks the unit catches the error. The student who trusts the number catches nothing. The check is simple: is the unit the one the question asked for? Is the number reasonable for that unit? If either answer is no, the model has given you a wrong answer in a convincing costume.",
          },
        ],
        bigIdea:
          "Unit errors are not pedantry. They destroy spacecraft and cause overdoses. The model is vulnerable. The check is yours.",
        tryThis: [
          {
            title: "Unit audit",
            minutes: 20,
            steps: [
              "Ask the model a question where the unit matters across domains: 'How much water should I drink in a day?'",
              "Write the answer. What unit? Liters? Ounces? Cups? Is the unit specified?",
              "Ask the same question with a different unit specified. Does the number convert correctly?",
              "Write a unit-check step for a measurement procedure: 'Before reporting, confirm: is the unit the one the question asked for? Is the number reasonable for that unit?'",
              "Research one real-world unit error (Mars Orbiter, medical dosing, aviation). Write one sentence about what went wrong.",
              "Talk About It: how did a right number with a wrong unit look like a right answer?",
            ],
          },
        ],
        dinnerQuestion:
          "What unit error have we heard about, and how did it look right until someone checked?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: the estimate has a unit. The check has a unit. They must match." },
          { label: "Thinking", note: "The check: the unit is part of the claim. Checking the unit is checking the claim." },
        ],
        ifTheySay: [
          {
            heard: "The model wouldn't make a unit error on something simple.",
            reply: "It might not. It also might. The Mars Orbiter engineers were not simple. They made a unit error because they assumed the other team used the same unit. The model assumes you know what it means. The check is not about intelligence. It is about assumptions.",
          },
          {
            heard: "I always check the units.",
            reply: "Good. Then this sitting is a confirmation, not a lesson. Most people do not always check. The sitting is for them. And for the day you forget.",
          },
        ],
        integrity:
          "Never submit a measurement without a unit. Never accept a model's number without checking the unit. The orbiter is the warning.",
        aiLab: {
          setup: "After the unit audit.",
          childDoes:
            "Ask the model: 'Give me a measurement where the unit is ambiguous.' See what it does. If it gives a unit without comment, that is a miss. If it says 'this could be in different units depending on context,' that is honest.",
          evaluate: [
            "Did they research a real unit error?",
            "Did they design a unit-check step?",
            "Can they explain why the model is vulnerable to unit errors?",
          ],
        },
      },
      adult: {
        title: "The Household Unit Check",
        dek: "The kitchen and the medicine cabinet are where unit errors live. Model the check. The child inherits the habit.",
        objective:
          "The adult models one unit check on a real household measurement (cooking, medicine, travel), names the unit out loud, and catches any mismatch with the model.",
        parentBriefing:
          "The household is full of unit traps. A recipe that says '2 cups' but the model interprets it as fluid ounces. A medicine dose in milligrams when the label says micrograms. A driving time in hours when you asked for minutes. The adult's job is to model the unit check on one real measurement. Read the unit out loud. Confirm it is the unit you wanted. If the model gave you a different unit, name the mismatch. The child who watches you check units will check units. The child who watches you skip will skip.",
        hardEdges: [
          "Never use a model for medical dosing. The label and the pharmacist are the authority. The model is a guess.",
          "Do not make this a ritual on every number. One unit check a week is the habit.",
        ],
        reading: [
          {
            heading: "The kitchen unit trap",
            body: "Recipes are unit traps. 'A cup of flour' is different in different countries. A US cup is 240 mL. A UK cup is 250 mL. A metric cup is 250 mL. If the model gives you a number without specifying which cup, you might be off by 3%. For baking, that matters. The unit check is: which cup? The model will not always say. You have to ask. The child who watches you ask 'which cup?' learns that units are not just names. They are specifications. A cup without a specification is a guess, not a measurement.",
          },
          {
            heading: "The medicine cabinet",
            body: "The medicine cabinet is the highest-stakes unit trap in the house. Milligrams versus micrograms. Milliliters versus teaspoons. The label is the measurement. The pharmacist is the authority. The model is a guess with confidence. If you ask the model 'how much ibuprofen for a child' and it gives you a number, the unit is the most important thing in the answer. If it is wrong, the dose is wrong. The rule: never use a model for dosing. The label and the pharmacist are the measurement. The model is not. Model the check for the child: 'I am not asking the model for this. The label is the measurement.' That sentence is the lesson.",
          },
        ],
        bigIdea:
          "The kitchen and the medicine cabinet are where units live. Model the check. The child inherits the habit.",
        tryThis: [
          {
            title: "One unit check",
            minutes: 10,
            steps: [
              "This week, pick a real household measurement: a recipe, a distance, a time.",
              "Ask the model for the number. Read the unit out loud. Is it the unit you wanted?",
              "If not, convert. If you cannot, say: 'I need to check this.' Then check with a real source.",
              "For medicine: do not ask the model. Read the label out loud. Say: 'The label is the measurement. The model is not.'",
              "Let the child hear you name the unit and the source. The naming is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What unit did we check this week, and what would have happened if we had not checked?",
        transfer: [
          { label: "Parenting", note: "The unit check you model is the unit check they will run when they cook, dose, or measure alone." },
          { label: "Math", note: "Estimate before the oracle: the estimate has a unit. The oracle's answer has a unit. They must match." },
        ],
        ifTheySay: [
          {
            heard: "The model gets units right most of the time.",
            reply: "Most of the time is not all of the time. The one time it gets the unit wrong on a medicine dose is the time that matters. The check is not about the 99%. It is about the 1% that hurts someone.",
          },
          {
            heard: "I use the model for recipe conversions all the time.",
            reply: "That is fine if you check the unit. If you convert and the number is reasonable for the unit, proceed. If you cannot tell whether the number is reasonable, you are trusting a number you cannot verify. The unit check is the moment you take responsibility.",
          },
        ],
        integrity:
          "Never use a model for medical dosing. The label and the pharmacist are the measurement. The model is a guess. Say it out loud for the child.",
        aiLab: {
          setup: "After the unit check.",
          childDoes:
            "If the measurement was from a recipe, ask the model the same question in two units. Compare. If the numbers do not convert correctly, the model has a unit problem. Let the child see the mismatch.",
          evaluate: [
            "Did you name the unit out loud?",
            "Did you model the check on a real household measurement?",
            "Did you say 'the model is not the source for medicine' if relevant?",
          ],
        },
      },
    },
  }),

  // ── 3. Error Bars ──────────────────────────────────────────────────
  ...expand({
    slug: "error-bars",
    subject: "science",
    unit: "Measure Twice",
    number: 3,
    variants: {
      little: {
        title: "Every Measurement Wiggles",
        dek: "If you measure the same thing twice and get two different numbers, that is not a mistake. That is how measuring works.",
        objective:
          "The child can measure the same thing three times, notice the numbers are not identical, and explain that measurement always wiggles a little.",
        parentBriefing:
          "This sitting teaches the child that measurement is not exact. Every measurement has a little wiggle. Weigh the same apple three times. The numbers will be close but not identical. That wiggle is not a failure. It is a property of measurement. The child needs to learn that a single measurement is not 'the' answer. It is one reading. The answer is somewhere near the reading. The wiggle is the honest part.",
        hardEdges: [
          "Do not make the wiggle sound like a problem. It is the truth about measurement, not a failure.",
          "Keep it to three measurements. More is not needed for this age.",
        ],
        reading: [
          {
            heading: "The wiggle",
            body: "If you weigh an apple three times, you might get 141, 142, and 140 grams. The apple did not change. The scale wiggled a little. The air moved. Your hand shook. That is not a mistake. That is how measuring works. Every measurement wiggles. The wiggle is small, but it is there. A number without a wiggle is not a measurement. It is a wish. At WisdomForge we measure, we see the wiggle, and we say: the answer is about 141, give or take a little. That 'give or take' is the honest part.",
          },
        ],
        bigIdea:
          "Every measurement wiggles. The wiggle is not a mistake. It is the truth about measuring.",
        tryThis: [
          {
            title: "Three weighings",
            minutes: 8,
            steps: [
              "Weigh the same thing three times. Write each number.",
              "Are they identical? Probably not. The wiggle is there.",
              "Write: 'About [middle number], give or take a little.'",
              "Talk About It: why did the numbers wiggle? Was the apple different? Was the scale different? Or is that just how measuring works?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure three times today where the numbers wiggled?",
        transfer: [
          { label: "Math", note: "Estimate: the estimate is the wiggle before the measurement." },
          { label: "AI", note: "The model gives one number with no wiggle. The real world always wiggles." },
        ],
        ifTheySay: [
          {
            heard: "The scale is broken because the numbers are different.",
            reply: "The scale is not broken. The wiggle is normal. If the numbers were always exactly the same, the scale might be hiding the wiggle. The wiggle is honest.",
          },
        ],
        integrity:
          "We do not pick the number we like best. We report all three and say 'about.'",
        aiLab: {
          setup: "After the three weighings.",
          childDoes:
            "Ask the model: 'I weighed an apple three times and got 141, 142, 140. Why are they different?' If it says 'measurement error,' that is correct but incomplete. If it says 'that is normal for a scale,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they measure three times?",
            "Did they notice the wiggle?",
            "Can they say 'about' instead of 'exactly'?",
          ],
        },
      },
      young: {
        title: "No Measurement Is Exact",
        dek: "A single number hides the wiggle. Measure twice, see the wiggle, report the range.",
        objective:
          "The student can measure the same quantity multiple times, report the range, and explain why a single measurement without a stated uncertainty is incomplete.",
        parentBriefing:
          "This sitting builds on the little version. The student measures the same thing multiple times, sees the range, and learns to report it. A single number is incomplete. A measurement with a range is honest. The model gives single numbers with no range. The real world gives ranges. The student who can report a range has learned something the model cannot do: be honest about uncertainty.",
        hardEdges: [
          "Do not make this a statistics lesson. The point is the range and the honesty, not the standard deviation.",
          "The model will give a single number with no uncertainty. That is the contrast to highlight.",
        ],
        reading: [
          {
            heading: "The honest range",
            body: "A single number says 'this is the answer.' A range says 'the answer is somewhere in here.' The range is honest. The single number is a wish. When you measure something, measure it more than once. The numbers will not be identical. The range between the highest and the lowest is your uncertainty. You report: '141 to 143 grams, about 142.' That is a measurement. '142 grams' without the range is a single reading, not a measurement. The model gives single numbers. It does not give ranges. That is a tell: the model does not know its own uncertainty. You do, because you measured.",
          },
          {
            heading: "The model's single number",
            body: "The model will say 'an apple weighs about 182 grams.' It gives one number. It does not say '182 plus or minus 5.' It does not know its own wiggle because it did not measure. It read text that said '182 grams' and produced that number. The real apple on your scale might weigh 155 or 210. The model's single number is a guess from training data, not a measurement with uncertainty. The student who can report a range has something the model does not: honesty about the wiggle.",
          },
        ],
        bigIdea:
          "A single number hides the wiggle. A range is honest. The model gives one. You can give both.",
        tryThis: [
          {
            title: "Measure and range",
            minutes: 14,
            steps: [
              "Measure the same thing five times. Write all five numbers.",
              "Find the range: lowest to highest. Write it.",
              "Report: '[low] to [high] [unit], about [middle].' That is a measurement with uncertainty.",
              "Ask the model: 'How much does [thing] weigh?' Write its single number.",
              "Compare: the model gave one number with no range. You gave a range. Which is more honest?",
              "Talk About It: why does the model not give a range? Because it did not measure. It guessed.",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure five times this week, and what was the range?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: the estimate is the range before the measurement." },
          { label: "Thinking", note: "The check: a claim without uncertainty is a claim without honesty." },
        ],
        ifTheySay: [
          {
            heard: "The model gave one number. That is more precise.",
            reply: "Precise is not the same as honest. A single number with no range is a guess with confidence. A range is a measurement with honesty. The model is precise about its guess. You are honest about your measurement. Those are different virtues.",
          },
          {
            heard: "The wiggle is so small it doesn't matter.",
            reply: "Sometimes it doesn't. Sometimes it does. The skill is knowing the difference. If you are weighing flour for bread, a 2-gram wiggle is fine. If you are weighing medicine, a 2-gram wiggle is a problem. The wiggle matters when the stakes are high.",
          },
        ],
        integrity:
          "Report the range. A single number without uncertainty is incomplete, whether it comes from a scale or a model.",
        aiLab: {
          setup: "After the five measurements.",
          childDoes:
            "Show the model your five numbers and the range. Ask: 'Why didn't you give a range?' If it says 'I provide a general estimate,' that is honest. If it says 'the weight is approximately 182 grams,' that is a single number pretending to be a range. The difference is instructive.",
          evaluate: [
            "Did they measure five times and report a range?",
            "Did they contrast the range with the model's single number?",
            "Can they explain why the range is more honest?",
          ],
        },
      },
      emerging: {
        title: "Uncertainty Is Not Weakness",
        dek: "A measurement without uncertainty is a claim. A measurement with uncertainty is a result. The model gives claims. You give results.",
        objective:
          "The student can design a multi-trial measurement, report the mean and range, explain the source of uncertainty, and contrast this with a model's single-number claim.",
        parentBriefing:
          "This sitting teaches the student to treat uncertainty as part of the result, not an admission of failure. The model gives single numbers. The student gives a mean, a range, and a source of uncertainty. That is a result. The model's single number is a claim. The student who can report uncertainty has learned something most adults have not: that honesty about the wiggle is the strength of measurement, not its weakness.",
        hardEdges: [
          "Do not turn this into a full statistics unit. Mean, range, and source of wiggle are sufficient.",
          "Academic integrity: a lab report with no uncertainty is incomplete. This sitting is the foundation of that standard.",
        ],
        reading: [
          {
            heading: "The result and the claim",
            body: "A result has three parts: the mean (the middle of your measurements), the range (how far they spread), and the source of uncertainty (why they spread). 'I measured the mass of the object five times. The mean is 142.4 grams. The range is 140 to 145. The uncertainty comes from the scale's resolution and my handling.' That is a result. The model says 'the mass is 140 grams.' That is a claim. The claim has no mean, no range, no source. It is a number from a pattern. The result is a number from the world, with honesty about the wiggle. The student who can write a result has something the model cannot produce: accountable uncertainty.",
          },
          {
            heading: "Why the model cannot give uncertainty",
            body: "The model does not give uncertainty because it did not measure. It has no trials. It has no wiggle. It has a pattern that produces a number. The number has no range because the pattern has no range. The model can say 'approximately' or 'around,' but those are words, not ranges. A real range comes from repeated measurements. The model has none. This is not a flaw to fix. It is a structural property. The model is a claim machine. It is not a measurement machine. The student who knows this will never confuse a model's number with a result. The result requires a procedure, trials, and honesty about the wiggle. The model provides none of those.",
          },
        ],
        bigIdea:
          "Uncertainty is not weakness. It is the honesty that separates a result from a claim. The model gives claims. You give results.",
        tryThis: [
          {
            title: "A real result",
            minutes: 22,
            steps: [
              "Pick something to measure. Design the procedure: what instrument, how many trials, what units.",
              "Measure five times. Record each trial.",
              "Calculate the mean and the range. Write: MEAN / RANGE / SOURCE OF UNCERTAINTY.",
              "Write the result: 'The [property] of [object] is [mean] [unit], range [low] to [high]. The uncertainty comes from [source].'",
              "Ask the model for the same quantity. Write its single number.",
              "Compare: which one is a result and which is a claim? What does the result have that the claim does not?",
              "Talk About It: when would you trust the result over the claim? When would the claim be enough?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure with uncertainty this week, and what did the result have that the model's claim did not?",
        transfer: [
          { label: "Science", note: "Hypothesis before search: the hypothesis includes a prediction with uncertainty." },
          { label: "Thinking", note: "The check: a claim without uncertainty is a claim without honesty." },
        ],
        ifTheySay: [
          {
            heard: "The model said 'approximately 140.' That is uncertainty.",
            reply: "'Approximately' is a word. A range is a measurement. '140 plus or minus 3' is uncertainty. 'Approximately 140' is a guess with a hedge. The hedge is not the same as a range. The range comes from trials. The hedge comes from training.",
          },
          {
            heard: "Nobody reports uncertainty in real life.",
            reply: "Scientists do. Engineers do. Pharmacists do. Anyone whose decision depends on the number does. The people who do not report uncertainty are the people whose decisions do not depend on it yet. When the decision depends on it, the uncertainty is the most important part of the number.",
          },
        ],
        integrity:
          "A lab report without uncertainty is incomplete. A model number without uncertainty is a claim. Both must be labeled as such.",
        aiLab: {
          setup: "After the result is written.",
          childDoes:
            "Show the model the result. Ask: 'Can you give me a range and a source of uncertainty for your number?' If it says 'I can estimate a range based on typical values,' that is a guess about a guess. If it says 'I do not have measurement uncertainty because I did not measure,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they design a procedure with multiple trials?",
            "Did they report mean, range, and source of uncertainty?",
            "Can they explain why the model cannot give real uncertainty?",
          ],
        },
      },
      adult: {
        title: "Model the Wiggle",
        dek: "If you report one number from one measurement, the child learns that measurement is exact. It is not. Show the wiggle.",
        objective:
          "The adult measures one household quantity multiple times, reports the range out loud, and names the uncertainty for the child.",
        parentBriefing:
          "The adult models the wiggle. Pick a household quantity: the weight of a bag of coffee, the temperature of the oven, the time of a drive. Measure it more than once. Report the range out loud: 'I measured the oven three times. It was 175, 178, and 173. About 175, give or take 3 degrees.' That moment teaches the child that measurement is not a single number. It is a range with honesty. The child who never sees the wiggle will treat single numbers as facts. The child who sees you report a range will learn to ask: 'What is the range?' for the rest of their life.",
        hardEdges: [
          "Do not make this a ritual on every number. One measurement a week with a range is the habit.",
          "Do not overstate the uncertainty to make a point. Report the honest range. If it is small, say so. A small wiggle is still a wiggle.",
        ],
        reading: [
          {
            heading: "The single-number household",
            body: "Most households report single numbers. 'The oven is at 175.' 'The drive takes 20 minutes.' 'The bag weighs 500 grams.' These are single readings, not measurements. A measurement is a range. The adult who models the wiggle teaches the child that single numbers are readings, not results. 'I checked the oven three times. It wiggles between 173 and 178. About 175.' That sentence is a measurement. 'The oven is at 175' is a reading. The difference is the honesty. The child who hears the range learns to expect it. The child who hears only single numbers learns to trust them.",
          },
          {
            heading: "What the child copies",
            body: "The child copies the adult's relationship to numbers. If the adult reports single numbers with total confidence, the child learns that confidence is accuracy. If the adult reports ranges with honesty, the child learns that honesty is accuracy. The model gives single numbers with confidence. The adult who gives ranges with honesty is teaching the child to prefer the honest number over the confident one. That lesson, modeled once a week, is worth more than a statistics unit. The child will not remember the vocabulary. They will remember the Tuesday you said 'give or take three degrees.'",
          },
        ],
        bigIdea:
          "Report the wiggle. The child who hears ranges learns that honesty is accuracy. The child who hears single numbers learns that confidence is accuracy.",
        tryThis: [
          {
            title: "One range at the table",
            minutes: 10,
            steps: [
              "This week, measure one household quantity three times.",
              "Report the range out loud: 'I measured [thing] three times. It was [low], [middle], [high]. About [mean], give or take [range].'",
              "If the child asks why you measured three times, say: 'Because one number is a reading. Three numbers are a measurement.'",
              "If the wiggle is small, say: 'The wiggle is small. That means the instrument is good and my hand is steady. The wiggle is still there.'",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure three times this week, and what was the wiggle?",
        transfer: [
          { label: "Parenting", note: "The range you model is the range they will expect when you are not there." },
          { label: "Math", note: "Estimate before the oracle: the estimate is the range before the measurement." },
        ],
        ifTheySay: [
          {
            heard: "One measurement is enough for most things.",
            reply: "It is enough for most things. It is not enough for the lesson. The child needs to see the wiggle at least once to know it exists. One measurement a week with a range is the practice. The practice is the lesson.",
          },
          {
            heard: "The wiggle is too small to matter.",
            reply: "Then say so. 'The wiggle is 2 grams. That does not matter for this recipe.' That is the skill: knowing when the wiggle matters and when it does not. If you never show the wiggle, the child never learns to ask whether it matters.",
          },
        ],
        integrity:
          "Report the range. If you only report the mean, say 'one reading.' Do not call a single reading a measurement. The honesty is the lesson.",
        aiLab: {
          setup: "After the range is reported.",
          childDoes:
            "Ask the model: 'Why don't you give a range?' If it says 'I provide general estimates,' that is honest. If it says 'I can provide a range based on typical values,' that is a guess about a guess. The honest answer is the lesson.",
          evaluate: [
            "Did you measure three times and report the range?",
            "Did you name the wiggle out loud?",
            "Did the child hear the difference between a reading and a measurement?",
          ],
        },
      },
    },
  }),

  // ── 4. The Model's Confident Wrong Number ────────────────────────────
  ...expand({
    slug: "confident-wrong-number",
    subject: "science",
    unit: "Measure Twice",
    number: 4,
    variants: {
      little: {
        title: "When the Model Is Wrong",
        dek: "The model can say a number that sounds right and is wrong. The world will tell you if you check.",
        objective:
          "The child can identify one time a model gave a wrong number, compare it to a measurement, and explain that the model was guessing.",
        parentBriefing:
          "This sitting teaches the child that the model can be confidently wrong about numbers. It will say 'an apple weighs 182 grams' with total confidence. Your apple might weigh 155. The model was guessing from training data. It did not weigh your apple. The child needs to see this happen at least once: the model is wrong, the measurement is right, and the child catches it. That moment is the vaccine. After it, the child will always know: the model's number is a guess. The world's number is the measurement.",
        hardEdges: [
          "Do not make this 'the model is stupid.' The point is: it guesses. Sometimes the guess is wrong. The measurement is the check.",
          "Pick a case where the wrong number is harmless. An apple's weight, not a medicine dose.",
        ],
        reading: [
          {
            heading: "The confident wrong answer",
            body: "The model does not say 'I am not sure.' It says '182 grams' with confidence. It is guessing from what it read. Sometimes the guess is close. Sometimes it is wrong. It does not know when it is wrong because it did not measure. The scale knows. You put the apple on the scale and it says 155. The model was wrong. That is not a problem. That is how guessing works. The scale is not wrong because the scale measured. The skill is to check the guess with a measurement. After you see the model be wrong once, you will always know: its numbers are guesses. Check them when it matters.",
          },
        ],
        bigIdea:
          "The model can be confidently wrong. The world is the check. One time seeing it is the vaccine.",
        tryThis: [
          {
            title: "Catch the wrong number",
            minutes: 10,
            steps: [
              "Ask the model: 'How much does [thing you can weigh] weigh?'",
              "Weigh it. Compare.",
              "If they are different, the model was guessing. Say: 'The model guessed. The scale measured.'",
              "If they are the same, say: 'The model was close this time. It is still guessing.'",
              "Talk About It: did the model sound sure even though it was guessing?",
            ],
          },
        ],
        dinnerQuestion:
          "When was a model wrong about a number this week, and how did we know?",
        transfer: [
          { label: "Math", note: "Estimate: your guess can be wrong too. The measurement checks both." },
          { label: "Thinking", note: "Claim and check: the model's number is a claim. The measurement is the check." },
        ],
        ifTheySay: [
          {
            heard: "The model is usually right.",
            reply: "It is usually close. 'Usually close' is not 'always right.' The one time it is wrong and you do not check is the time it matters. The scale does not guess. It measures. Check when it matters.",
          },
        ],
        integrity:
          "We do not pretend the model was right when it was wrong. We write both numbers. The gap is the data.",
        aiLab: {
          setup: "After the comparison.",
          childDoes:
            "Ask the model: 'Were you guessing or measuring?' If it says 'I provide estimates based on training data,' that is honest. If it says 'I am highly accurate,' that is a claim. The honest answer is the lesson.",
          evaluate: [
            "Did they catch the model being wrong (or confirm it was right)?",
            "Did they name that the model was guessing?",
            "Did they understand that the measurement is the authority?",
          ],
        },
      },
      young: {
        title: "Fluent Numbers Can Be Wrong",
        dek: "The model's number sounds like a fact. It is a guess with confidence. The measurement is the fact.",
        objective:
          "The student can identify a case where a model's quantitative answer was wrong, explain why the model did not flag its own error, and describe how a measurement caught it.",
        parentBriefing:
          "This sitting teaches the student that the model's confidence does not correlate with its accuracy on specific numbers. It will say '182 grams' with the same confidence as 'the speed of light is 299,792,458 meters per second.' One is a well-established constant. The other is a guess about an apple. The student needs to learn that confidence is a style, not a signal. The measurement is the signal. Use a real case where the model is wrong. Let the student catch it. That moment is the lesson.",
        hardEdges: [
          "Do not turn this into 'AI is unreliable.' The point is precision: confidence is not accuracy. The check is the skill.",
          "Pick a case where the error is harmless. Weight, temperature, time. Not medicine.",
        ],
        reading: [
          {
            heading: "Confidence is a style",
            body: "The model speaks with the same confidence about a universal constant and a guess about an apple. 'The speed of light is 299,792,458 m/s.' 'An apple weighs about 182 grams.' The first is a measured constant. The second is a guess from training data. The confidence in the sentence is identical. The accuracy is not. The student who cannot tell the difference will trust both equally. The student who can will check the guess and trust the constant. The skill is to know which numbers are measurements and which are guesses. The model does not tell you. You have to know.",
          },
          {
            heading: "Why the model does not flag its error",
            body: "The model does not say 'I am not sure about this number.' It does not know it is unsure. It produces the number that is most likely given its training. The likelihood is not the same as the truth. A likely apple weight from training data might be 182 grams. Your apple is 155. The model's number was likely. It was wrong. The model did not flag the error because it cannot distinguish between a likely guess and a measurement. It does not know which is which. You do, because you can measure. That is the difference. The measurement is the check the model cannot perform on itself.",
          },
        ],
        bigIdea:
          "Confidence is a style, not a signal. The model's number sounds like a fact. It is a guess. The measurement is the fact.",
        tryThis: [
          {
            title: "The confidence audit",
            minutes: 16,
            steps: [
              "Ask the model two questions: one about a well-known constant (speed of light, boiling point of water), one about a specific object you can measure (the weight of your cup, the temperature of your tap water).",
              "Write both answers. Does the model sound equally confident about both?",
              "Measure the specific object. Compare.",
              "Write: CONFIDENT AND RIGHT / CONFIDENT AND WRONG / CONFIDENT AND CLOSE.",
              "Talk About It: could you tell from the model's tone which number was a fact and which was a guess?",
            ],
          },
        ],
        dinnerQuestion:
          "What number did the model say with confidence this week that turned out to be wrong?",
        transfer: [
          { label: "Thinking", note: "Fluent error: the model is confidently wrong. The check catches it." },
          { label: "Math", note: "Estimate: your guess can be wrong. The model's guess can be wrong. The measurement checks both." },
        ],
        ifTheySay: [
          {
            heard: "It was close enough.",
            reply: "Close enough for what? If you are measuring the speed of light, close enough is not good enough. If you are weighing an apple for a snack, close enough is fine. The skill is knowing the tolerance. The model does not know yours. You do.",
          },
          {
            heard: "How do I know when to check?",
            reply: "Check when the number changes a decision. If the number is for curiosity, the guess is fine. If the number is for a recipe, a dose, a budget, or a conclusion, check it. The check is not about paranoia. It is about knowing when the stakes are high enough to measure.",
          },
        ],
        integrity:
          "Do not report the model's number as if you measured it. If you checked and it was wrong, report the measurement. The model's error is data, not a result.",
        aiLab: {
          setup: "After the confidence audit.",
          childDoes:
            "Ask the model: 'How confident are you in the number you gave for [specific object]?' If it says 'highly confident,' that is a style. If it says 'my answer is a general estimate,' that is honest. Compare its confidence to its accuracy. The gap is the lesson.",
          evaluate: [
            "Did they identify a case where the model was confidently wrong?",
            "Did they explain why the model did not flag its own error?",
            "Can they distinguish between the model's confidence and its accuracy?",
          ],
        },
      },
      emerging: {
        title: "The Model Does Not Know What It Does Not Know",
        dek: "The model produces numbers with uniform confidence. It does not know which are facts and which are guesses. You have to know for it.",
        objective:
          "The student can explain why a model's confidence does not indicate accuracy, design a measurement to test a model's quantitative claim, and describe the gap between confidence and calibration.",
        parentBriefing:
          "This sitting teaches the student about calibration. A well-calibrated source knows when it is right and when it is guessing. The model is poorly calibrated. It sounds equally confident about facts and guesses. The student needs to learn that confidence is not calibration. The way to calibrate a claim is to measure. The student who can design a measurement to test a claim has learned that calibration is the human's job, not the model's.",
        hardEdges: [
          "This is not about hating the model. The model is a useful tool that is poorly calibrated about its own numbers. The point is to compensate, not to reject.",
          "Academic integrity: no model numbers as facts in a lab report. Every model number is a claim to be tested.",
        ],
        reading: [
          {
            heading: "Calibration",
            body: "Calibration is the ability to know how right you are. A well-calibrated thermometer knows its uncertainty. A well-calibrated expert says 'I am sure about this' and 'I am guessing about that.' The model is poorly calibrated. It says everything with the same confidence. It does not distinguish between a measured constant and a guess from training data. That is not a moral failing. It is a structural property of how it was built. The student who knows this can compensate: check the numbers that matter, trust the numbers that are well-established, and never confuse confidence with calibration. The measurement is the calibration.",
          },
          {
            heading: "Testing the claim",
            body: "To calibrate a model's claim, you design a measurement. 'The model says the density of this solution is 1.03 g/mL. I will measure 10 mL and weigh it. If it weighs 10.3 grams, the claim is calibrated for this sample. If it weighs 10.8, the claim was a guess, not a measurement.' That is calibration in practice. The student who can write that procedure has learned that the model's confidence is not the same as the model's accuracy, and that the difference is settled by the world, not by the model.",
          },
        ],
        bigIdea:
          "The model is poorly calibrated. It does not know what it does not know. The measurement is how you calibrate the claim.",
        tryThis: [
          {
            title: "Calibration test",
            minutes: 24,
            steps: [
              "Ask the model for three quantitative claims: one universal constant, one common property, one specific measurement you can test.",
              "Write all three with the model's confidence level.",
              "Measure the specific one. Compare.",
              "Write: CALIBRATED (right) / UNCALIBRATED (confident and wrong) / CLOSE (right within tolerance).",
              "Write one paragraph: 'The model's confidence was [same/different] across all three. Its accuracy was [same/different]. The gap between confidence and accuracy is [size]. The measurement is how I close the gap.'",
              "Talk About It: how would you calibrate the model on a topic you care about?",
            ],
          },
        ],
        dinnerQuestion:
          "What claim did we calibrate this week, and how wide was the gap between the model's confidence and its accuracy?",
        transfer: [
          { label: "Thinking", note: "Fluent error: the model is confidently wrong. Calibration is the fix." },
          { label: "Science", note: "Hypothesis before search: the hypothesis is the calibration before the test." },
        ],
        ifTheySay: [
          {
            heard: "The model gets better with each version.",
            reply: "It does. So does its confidence. The question is whether its calibration improves at the same rate. A model that is more accurate but still poorly calibrated is more dangerous, not less, because its confidence is still not a signal. Measure.",
          },
          {
            heard: "I can just ask it for its uncertainty.",
            reply: "You can ask. It will say 'approximately' or 'I may have limitations.' Those are words, not calibration. Real calibration is a range from repeated measurements, not a hedge from a language model. The measurement is the calibration. The model's self-report is a guess about its own guessing.",
          },
        ],
        integrity:
          "A model number in a lab report is a claim. If you did not measure it, you did not calibrate it. Uncalibrated claims are not results.",
        aiLab: {
          setup: "After the calibration test.",
          childDoes:
            "Ask the model: 'On a scale of 1 to 10, how confident are you in each of the three numbers you gave me?' If all three are 8 or above, the model is poorly calibrated. If it distinguishes, it is better calibrated. Compare its self-rating to your measurement. The gap is the calibration error.",
          evaluate: [
            "Did they test one specific claim with a measurement?",
            "Did they write the calibration gap?",
            "Can they explain why confidence is not calibration?",
          ],
        },
      },
      adult: {
        title: "Teach the Catch",
        dek: "The child who never sees a model be confidently wrong will trust every number. Show them the catch once. It lasts.",
        objective:
          "The adult models one moment of catching a model's wrong number, names it out loud, and shows the child that the measurement is the authority.",
        parentBriefing:
          "This is the adult version of the confident-wrong-number sitting. The adult finds one case where the model is wrong about a number, measures it, and shows the child. 'The model said 500 grams. The scale says 470. The model was guessing. The scale measured.' That moment is the vaccine. The child who sees the model be confidently wrong once will never fully trust a model's number again. That is not cynicism. It is calibration. The adult who never shows the catch teaches the child that the model's numbers are facts. They are not. They are guesses. Show the catch.",
        hardEdges: [
          "Do not search for a model error to make a point. Use one you find naturally. If the model is right, say so. The lesson is the check, not the failure.",
          "Do not use medical examples for this drill. The stakes are too high for a teaching moment.",
        ],
        reading: [
          {
            heading: "The vaccine moment",
            body: "The child who sees a model be confidently wrong once, and sees an adult catch it with a measurement, is vaccinated for life. Not against all error. Against the specific belief that confidence equals accuracy. After that moment, the child will always have a small question mark next to the model's numbers. That question mark is the skill. It does not make the child cynical. It makes them calibrated. The adult's job is to produce the moment: find a number, measure it, show the gap, name it. One moment is enough. The child who never sees it will trust the smoothest number in the room, and the smoothest number is the model's.",
          },
          {
            heading: "When the model is right",
            body: "Sometimes the model is right. That is fine. The check is still the point. 'The model said 500. The scale says 498. The model was close this time. It is still guessing. The scale measured.' The lesson is not 'the model is wrong.' The lesson is 'the model guesses, and the scale measures, and we check when it matters.' If you only check when you doubt the model, you miss the times it is wrong and you did not doubt. Check sometimes when you trust it too. The confirmation is the habit.",
          },
        ],
        bigIdea:
          "Show the catch. The child who sees a model be confidently wrong once is vaccinated for life. The measurement is the authority.",
        tryThis: [
          {
            title: "One catch",
            minutes: 10,
            steps: [
              "This week, ask the model for a number you can measure: a weight, a temperature, a time.",
              "Measure it. If the model is wrong, show the child. Say: 'The model said X. The scale says Y. The model was guessing. The scale measured.'",
              "If the model is right, show the child. Say: 'The model was close this time. It is still guessing. The scale is the measurement.'",
              "Either way, the lesson is the same: the model guesses, the tool measures, the check is ours.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we catch a model's number this week, and what did the measurement say?",
        transfer: [
          { label: "Parenting", note: "The catch you model is the catch they will perform when you are not there." },
          { label: "Thinking", note: "Claim and check: the model's number is the claim. The measurement is the check." },
        ],
        ifTheySay: [
          {
            heard: "I trust the model on simple things.",
            reply: "You can. And the one time the model is wrong on a simple thing is the time the child needs to see you check. The check is not about distrust. It is about calibration. The child who sees you check learns to check. The child who sees you trust without checking learns to trust without checking.",
          },
          {
            heard: "I don't want to make the child distrust the model.",
            reply: "This is not distrust. It is calibration. The child who learns to check the model's numbers is not distrustful. They are calibrated. They trust the model the right amount: enough to use it, not enough to skip the check. That is the skill.",
          },
        ],
        integrity:
          "If the model is right, say so. If the model is wrong, say so. The lesson is the check, not the verdict.",
        aiLab: {
          setup: "After the catch.",
          childDoes:
            "Ask the child: 'Was the model right or wrong?' Let them answer. Then ask: 'How do we know?' The answer is: 'We measured.' That is the lesson in one sentence.",
          evaluate: [
            "Did you show the child the catch (or the confirmation)?",
            "Did you name that the model guesses and the tool measures?",
            "Is the lesson about the check, not about the model's failure?",
          ],
        },
      },
    },
  }),

  // ── 5. Calibration — Trusting the Right Amount ──────────────────────
  ...expand({
    slug: "calibration-trust",
    subject: "science",
    unit: "Measure Twice",
    number: 5,
    variants: {
      little: {
        title: "Trusting the Right Amount",
        dek: "Sometimes you trust the model. Sometimes you trust the scale. The skill is knowing when.",
        objective:
          "The child can name one situation where the model's guess is enough and one where the measurement is needed.",
        parentBriefing:
          "This sitting teaches the child that the goal is not to never trust the model. The goal is to trust the right amount. For curiosity, the model is fine. For a recipe, you might check. For medicine, you never trust the model. The child needs to learn that trust is not all-or-nothing. It is calibrated to the stakes. Use simple examples: 'Do we need the scale for this, or is the model's guess fine?'",
        hardEdges: [
          "Do not make the child afraid of the model. The point is calibration, not avoidance.",
          "Keep the stakes simple: curiosity, cooking, safety.",
        ],
        reading: [
          {
            heading: "The right amount of trust",
            body: "You do not need to measure everything. Some numbers do not matter. If the model says a cloud weighs as much as a hundred elephants and you are just curious, that is fine. You do not need to weigh a cloud. If the model says your flour weighs 500 grams and you are baking bread, you might check. If the model says take two pills and the label says one, you never trust the model. Trust is not all or nothing. It is the right amount for the stakes. At WisdomForge we practice the question: 'Do I need to measure this, or is the guess enough?'",
          },
        ],
        bigIdea:
          "Trust is not all-or-nothing. It is the right amount for the stakes. Curiosity: trust the guess. Stakes: measure.",
        tryThis: [
          {
            title: "Scale or guess?",
            minutes: 8,
            steps: [
              "Name three things: one for curiosity, one for cooking, one for safety.",
              "For each, ask: 'Do we need the scale, or is the model's guess enough?'",
              "Talk About It: what makes the difference? When do we measure?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we trust the model on today, and what did we measure instead?",
        transfer: [
          { label: "Math", note: "Estimate: you estimate when the stakes are low. You measure when they are high." },
          { label: "Thinking", note: "The check: you check when the claim changes a decision." },
        ],
        ifTheySay: [
          {
            heard: "We should always measure to be safe.",
            reply: "If we always measured, we would never have time to do anything. The skill is not measuring everything. It is knowing when to measure. Curiosity does not need a scale. Medicine does.",
          },
        ],
        integrity:
          "We do not skip the measurement when the stakes are high. We do not measure when the stakes are low and the guess is fine. Both are the skill.",
        aiLab: {
          setup: "After the three things.",
          childDoes:
            "Ask the model: 'When should I trust your number and when should I measure?' If it says 'trust me for general information and measure for important things,' that is honest. If it says 'I am highly reliable,' that is a claim. The honest answer is the lesson.",
          evaluate: [
            "Did they name one situation for each level of trust?",
            "Did they identify what makes the difference (stakes)?",
            "Can they say 'measure when it matters, guess when it doesn't'?",
          ],
        },
      },
      young: {
        title: "Calibrated Trust",
        dek: "The skill is not trusting the model or rejecting it. It is trusting the right amount for the stakes.",
        objective:
          "The student can categorize a quantitative question by stakes (curiosity, practical, safety), describe the appropriate level of trust for each, and name the check they would run.",
        parentBriefing:
          "This sitting teaches the student to calibrate trust to stakes. Three levels: curiosity (trust the model), practical (check if you can), safety (never trust the model alone). The student needs to learn that the level is not fixed. It changes with the question. The model is fine for 'how tall is the Eiffel Tower?' The model is a starting point for 'how much flour for this recipe?' The model is not the source for 'how much medicine for this child?' The skill is to name the stakes and choose the level of trust.",
        hardEdges: [
          "Do not make the student afraid to use the model. The point is calibration, not rejection.",
          "Safety stakes: the rule is 'the model is not the source.' Not 'never use the model.' The label and the professional are the source.",
        ],
        reading: [
          {
            heading: "Three levels of trust",
            body: "Curiosity: 'How far is the moon?' The model is fine. You are not flying there. If it is off by a few thousand kilometers, nobody is hurt. Practical: 'How much flour for this recipe?' The model is a starting point. If you can check with a scale, check. If you cannot, the model's guess is better than no guess, but it is still a guess. Safety: 'How much ibuprofen for a child?' The model is not the source. The label is. The pharmacist is. The doctor is. The model is a voice with no stakes. For safety questions, you go to the source that has stakes. The skill is to name the level before you decide how much to trust.",
          },
          {
            heading: "The question that calibrates",
            body: "Before you trust a model's number, ask: 'What happens if this is wrong?' If nothing happens (curiosity), trust the model. If something happens but it is small (practical), check if you can. If something happens and it hurts someone (safety), do not trust the model. Go to the source with stakes. That question — 'what happens if this is wrong?' — is the calibration. It takes one second. It changes the level of trust. The student who asks it every time will trust the right amount. The student who never asks it will trust the same amount for everything, and the same amount is always wrong for something.",
          },
        ],
        bigIdea:
          "Ask 'what happens if this is wrong?' The answer calibrates your trust. Curiosity, practical, safety. Three levels.",
        tryThis: [
          {
            title: "Calibrate three questions",
            minutes: 14,
            steps: [
              "Write three quantitative questions you would ask a model.",
              "For each, ask: 'What happens if this is wrong?'",
              "Label each: CURIOSITY / PRACTICAL / SAFETY.",
              "Write the check: NONE (curiosity) / MEASURE IF YOU CAN (practical) / GO TO THE SOURCE (safety).",
              "Talk About It: did the level change how much you trust the model? Should it?",
            ],
          },
        ],
        dinnerQuestion:
          "What question did we calibrate this week, and what level of trust did we choose?",
        transfer: [
          { label: "Thinking", note: "The check: you check when the claim changes a decision. Calibration is the same skill." },
          { label: "AI", note: "The model is a tool. Tools are trusted the right amount, not blindly or never." },
        ],
        ifTheySay: [
          {
            heard: "I just trust the model for everything.",
            reply: "Then you trust it the same amount for the moon's distance and a medicine dose. One of those is fine. The other is not. Calibration is not about the model. It is about the stakes.",
          },
          {
            heard: "I never trust the model.",
            reply: "Then you miss a useful tool. The model is fine for curiosity. It is a starting point for practical questions. It is not the source for safety. 'Never' is as uncalibrated as 'always.'",
          },
        ],
        integrity:
          "Name the level. If it is safety, the model is not the source. If it is curiosity, the model is fine. If you do not name the level, you are not calibrated.",
        aiLab: {
          setup: "After the three questions.",
          childDoes:
            "Ask the model: 'What happens if your number is wrong?' If it says 'I may have limitations,' that is a hedge. If it says 'the consequence depends on the context,' that is honest. The model cannot calibrate for you. The stakes are yours to name.",
          evaluate: [
            "Did they label all three questions by stakes?",
            "Did they name the appropriate check for each?",
            "Can they ask 'what happens if this is wrong?' as a habit?",
          ],
        },
      },
      emerging: {
        title: "Calibration as a Practice",
        dek: "Calibration is not a one-time lesson. It is a practice. Every quantitative claim gets a stakes check before it gets your trust.",
        objective:
          "The student can apply a calibration protocol to any quantitative claim from a model: name the stakes, choose the trust level, run the check, and report the result.",
        parentBriefing:
          "This sitting makes calibration a protocol, not a concept. The student has learned the three levels. Now they apply the protocol to a real claim from the model. The protocol has four steps: name the stakes, choose the trust level, run the check, report the result. The protocol is the same every time. The output is a calibrated decision: trust, check, or reject. The student who can run this protocol on any claim has a skill that will serve them for life, on any tool, in any domain.",
        hardEdges: [
          "Academic integrity: the protocol includes 'report the result.' A model number without a check is not a result. A checked number with the source named is.",
          "The protocol is not about the model. It is about the student's relationship to any quantitative claim, from any source.",
        ],
        reading: [
          {
            heading: "The protocol",
            body: "The calibration protocol has four steps. One: name the stakes. What happens if this number is wrong? Nothing (curiosity), something small (practical), something that hurts (safety). Two: choose the trust level. Curiosity: trust the model. Practical: check if you can. Safety: go to the source with stakes. Three: run the check. Measure, verify, or reject. Four: report. Write the number, the source, and the check. 'The model said X. I measured Y. The stakes were [level]. I [trust/check/reject] based on the check.' That is a calibrated result. The protocol takes thirty seconds. It works on any quantitative claim from any source. It is the skill.",
          },
          {
            heading: "Why the protocol works",
            body: "The protocol works because it is the same every time. You do not think about whether to trust the model. You run the protocol. The protocol names the stakes, which most people skip. The stakes decide the trust level, which most people do not connect. The check is run, which most people skip. The result is reported, which most people do not do honestly. The student who runs the protocol on every quantitative claim will not be fooled by confidence. They will not miss a safety issue. They will not skip a check because the model sounded right. The protocol is the habit. The habit is the skill.",
          },
        ],
        bigIdea:
          "Calibration is a protocol, not a concept. Four steps, every time: stakes, trust, check, report.",
        tryThis: [
          {
            title: "Run the protocol",
            minutes: 20,
            steps: [
              "Pick a real quantitative claim from a model: a number you would use for a decision.",
              "Step 1: Name the stakes. What happens if this is wrong?",
              "Step 2: Choose the trust level. Curiosity, practical, or safety.",
              "Step 3: Run the check. Measure, verify with a second source, or reject and go to the source with stakes.",
              "Step 4: Report. Write: 'The model said X. I checked and got Y. The stakes were [level]. I [trust/check/reject].'",
              "Talk About It: did the protocol change your decision? Would you have trusted the model without it?",
            ],
          },
        ],
        dinnerQuestion:
          "What claim did we calibrate this week, and did the protocol change what we did?",
        transfer: [
          { label: "Science", note: "Hypothesis before search: the hypothesis includes the prediction and the test. The calibration protocol is the same structure." },
          { label: "Thinking", note: "Claim and check: the calibration protocol is the check applied to quantitative claims." },
        ],
        ifTheySay: [
          {
            heard: "I don't need a protocol for every number.",
            reply: "You do not need to run it on every number. You need to run it on the ones that change a decision. The protocol takes thirty seconds. The question is: is thirty seconds worth the cost of being wrong? If yes, run it. If no, skip it. The skill is knowing when.",
          },
          {
            heard: "This is too rigid.",
            reply: "It is a habit, not a prison. The four steps take thirty seconds. The alternative — trusting the model's number without checking — takes zero seconds and costs more when it is wrong. The protocol is the cheaper option when the stakes are real.",
          },
        ],
        integrity:
          "The protocol includes 'report.' A model number without a report of the check is not a calibrated result. Report the source, the check, and the decision.",
        aiLab: {
          setup: "After the protocol is run.",
          childDoes:
            "Show the model the report. Ask: 'What did I miss?' If it says 'your approach is thorough,' that is flattery. If it names a specific step you skipped, that is useful. Compare its critique to your protocol. Did it catch something you missed?",
          evaluate: [
            "Did they run all four steps?",
            "Did the stakes check change the trust level?",
            "Is the report honest about the source and the check?",
          ],
        },
      },
      adult: {
        title: "Calibrate Out Loud",
        dek: "The child who hears you ask 'what happens if this is wrong?' will ask it for life. Say it out loud.",
        objective:
          "The adult models the calibration question on one real household decision this week, says it out loud, and lets the child hear the decision change based on the answer.",
        parentBriefing:
          "The adult models calibration. One household decision involves a number from the model. Before acting on it, the adult says out loud: 'What happens if this is wrong?' Then names the level: curiosity, practical, or safety. Then decides: trust, check, or go to the source. The child hears the question and the decision. That moment is the lesson. The child who hears the question asked out loud will learn to ask it silently. The child who never hears it will trust the model's numbers with the same confidence the model has: total.",
        hardEdges: [
          "Do not perform the question as theater. Ask it when it matters, and answer honestly.",
          "If the answer is 'curiosity, trust the model,' say so. Not every moment needs a check. The point is the question, not the drama.",
        ],
        reading: [
          {
            heading: "The out-loud question",
            body: "'What happens if this is wrong?' is the calibration question. It takes one second. It changes the level of trust. Say it out loud, once a week, on a real decision. 'The model says the oven is at 175. What happens if it is wrong? The bread is a little off. Practical. Let me check with the oven thermometer.' Or: 'The model says the drive takes 20 minutes. What happens if it is wrong? We are late. Practical. Let me check the map.' Or: 'The model says the dose is 250 mg. What happens if it is wrong? That is safety. I am not using the model for this. The label is the source.' Those three sentences, said out loud, teach the child the entire calibration protocol in thirty seconds of real life.",
          },
          {
            heading: "What the child inherits",
            body: "The child inherits the adult's relationship to numbers. If the adult trusts the model's numbers without question, the child learns to trust without question. If the adult asks 'what happens if this is wrong?' out loud, the child learns to ask. The question is the inheritance. The answer is not. The answer changes with the situation. The question is the same every time. Give the child the question. Say it out loud. Let them hear you decide. The decision is the lesson.",
          },
        ],
        bigIdea:
          "Say the calibration question out loud. The child who hears 'what happens if this is wrong?' will ask it for life.",
        tryThis: [
          {
            title: "One out-loud calibration",
            minutes: 8,
            steps: [
              "This week, before you act on a model's number, pause.",
              "Say out loud: 'What happens if this is wrong?'",
              "Name the level: curiosity, practical, or safety.",
              "Decide: trust, check, or go to the source. Say the decision out loud.",
              "Let the child hear the question and the decision. That is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What number did we calibrate out loud this week, and what did we decide?",
        transfer: [
          { label: "Parenting", note: "The question you say out loud is the question they will ask silently." },
          { label: "Thinking", note: "The ethos pause, the logos audit, and the calibration question are the same pause, different domains." },
        ],
        ifTheySay: [
          {
            heard: "I don't need to say it out loud. I do it in my head.",
            reply: "You do. The child does not see inside your head. They see what you say and do. The out-loud question is for them. Your silent version serves you. The spoken version teaches them.",
          },
          {
            heard: "This feels forced.",
            reply: "It feels forced the first time. By the third time, it is a habit. The habit is the lesson. The child who hears it three times will internalize it. The child who never hears it will not. The forcing is temporary. The habit is permanent.",
          },
        ],
        integrity:
          "Ask the question honestly. If the answer is 'curiosity, trust the model,' say so. Not every moment needs a check. The question is honest, not theatrical.",
        aiLab: {
          setup: "After the out-loud calibration.",
          childDoes:
            "Ask the child: 'What happens if this is wrong?' Let them answer. Then ask: 'What should we do?' Let them decide. Their decision is the lesson. If they decide correctly, the skill is landing. If they do not, teach again.",
          evaluate: [
            "Did you ask the calibration question out loud?",
            "Did you name the level and the decision?",
            "Did the child hear the question and the decision?",
          ],
        },
      },
    },
  }),

  // ── 6. Measure Twice (capstone) ─────────────────────────────────────
  ...expand({
    slug: "measure-twice-capstone",
    subject: "science",
    unit: "Measure Twice",
    number: 6,
    variants: {
      little: {
        title: "Measure Twice",
        dek: "You now know: the scale measures, the model guesses, and the wiggle is real. Measure twice. Check once. That is the whole unit.",
        objective:
          "The child can run one full measurement: guess, measure twice, compare to the model, and report the result with a unit.",
        parentBriefing:
          "This is the capstone for the little band. The child runs the full cycle: guess, measure twice, compare to the model, report. The cycle is simple. The habit is the point. The child who can run this cycle once, with a real object, has learned the unit. The child who runs it again next week has a habit. The child who runs it for life has a skill.",
        hardEdges: [
          "Keep it to one object and two measurements. The point is the cycle, not the volume.",
          "Celebrate the cycle, not the accuracy. The child who runs the cycle and gets a wrong number has learned more than the child who skips the cycle and gets a right one.",
        ],
        reading: [
          {
            heading: "The whole unit in one cycle",
            body: "Guess. Measure twice. Compare to the model. Report the unit. That is the whole unit in one cycle. You guessed. You measured. You saw the wiggle. You checked the model's guess. You said the unit. The cycle is simple. The habit is the point. The child who can run this cycle once has learned: the model guesses, the scale measures, the wiggle is real, and the unit is the name. Measure twice. That is the lesson.",
          },
        ],
        bigIdea:
          "Guess, measure twice, compare, report. The cycle is the unit. The habit is the skill.",
        tryThis: [
          {
            title: "One full cycle",
            minutes: 12,
            steps: [
              "Pick something to measure.",
              "Write your GUESS with a unit.",
              "Measure it twice. Write both numbers.",
              "Ask the model: 'How much is [thing]?' Write its number with the unit.",
              "Report: 'I guessed [X]. I measured [Y] and [Z]. The model said [W]. The unit is [unit].'",
              "Talk About It: what did you learn from the whole cycle?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure twice today, and what did the whole cycle show us?",
        transfer: [
          { label: "Math", note: "Estimate before the oracle: the cycle is the same, with the math added." },
          { label: "Thinking", note: "Claim and check: the cycle is the check, applied to a number." },
        ],
        ifTheySay: [
          {
            heard: "That was a lot of steps for one number.",
            reply: "It was. The first time takes twelve minutes. The second time takes six. The third time takes three. The cycle gets faster. The habit stays. The first time is the investment.",
          },
        ],
        integrity:
          "Report the guess, the two measurements, and the model's number. Do not erase any of them. The full cycle is the honest report.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Tell the guide: 'I guessed X, measured Y and Z, and you said W.' Ask: 'Which number is the measurement?' If it says 'your measurements,' that is correct. If it says 'my answer is a general estimate,' that is honest. Both are instructive.",
          evaluate: [
            "Did they run all five steps?",
            "Did they report the unit?",
            "Can they name what each step taught them?",
          ],
        },
      },
      young: {
        title: "The Full Measurement",
        dek: "Guess, measure twice, check units, see the wiggle, compare to the model, report with uncertainty. The full measurement in one sitting.",
        objective:
          "The student can run one full measurement with uncertainty: guess, measure twice, check units, report the range, compare to the model, and write a one-sentence result.",
        parentBriefing:
          "This is the capstone for the young band. The student runs the full measurement: guess, measure twice, check units, see the wiggle, compare to the model, report. The output is one sentence: 'I guessed X, measured Y (range Z), the unit is [unit], and the model said W. The measurement is the authority.' That sentence is the capstone artifact. It has every skill from the unit in one report.",
        hardEdges: [
          "The student must run every step. Skipping a step is skipping the capstone.",
          "The report must include the unit and the range. A number without a unit or a range is not a full measurement.",
        ],
        reading: [
          {
            heading: "The full measurement",
            body: "The full measurement has six parts. Guess: you write your estimate with a unit. Measure: you take two readings. Units: you confirm the unit is the one you wanted. Wiggle: you note the range between the two readings. Compare: you ask the model and write its number. Report: you write one sentence with all of it. The sentence is the artifact. It is the proof that you can measure in the age of the oracle. The model gives one number with no wiggle and no unit check. You give a measurement with uncertainty and honesty. The difference is the skill.",
          },
        ],
        bigIdea:
          "Guess, measure, check units, see the wiggle, compare, report. The full measurement in one sentence.",
        tryThis: [
          {
            title: "The full measurement",
            minutes: 18,
            steps: [
              "Pick something to measure. Write your GUESS with a unit.",
              "Measure it twice. Write both numbers with units.",
              "Check: is the unit the one you wanted? If not, convert.",
              "Note the range: [low] to [high].",
              "Ask the model: 'How much is [thing]?' Write its number with the unit.",
              "Report one sentence: 'I guessed [X] [unit]. I measured [Y] and [Z] [unit], range [low] to [high]. The model said [W] [unit]. The measurement is the authority.'",
            ],
          },
        ],
        dinnerQuestion:
          "What full measurement did we run this week, and what did the sentence say?",
        transfer: [
          { label: "Science", note: "Hypothesis before search: the hypothesis is the guess. The test is the measurement." },
          { label: "Math", note: "Estimate before the oracle: the full measurement is the estimate, the oracle, and the check in one." },
        ],
        ifTheySay: [
          {
            heard: "I already know how to measure.",
            reply: "You know how to take a reading. The full measurement is more: the guess, the unit check, the wiggle, the comparison, and the report. The reading is one step. The full measurement is the skill.",
          },
        ],
        integrity:
          "The report includes the guess, both measurements, the range, and the model's number. Nothing is erased. The full cycle is the honest report.",
        aiLab: {
          setup: "After the full measurement.",
          childDoes:
            "Show the guide the one-sentence report. Ask: 'What did I do that you cannot do?' If it says 'you measured and I estimated,' that is honest. If it says 'we both provided information,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they run all six steps?",
            "Does the one-sentence report include guess, range, unit, and model comparison?",
            "Can they name what the full measurement has that the model's single number does not?",
          ],
        },
      },
      emerging: {
        title: "The Measurement Protocol",
        dek: "The full protocol: design, measure, calibrate, report. One real measurement, run end to end, with uncertainty and honesty. That is the capstone.",
        objective:
          "The student can design and run a complete measurement protocol on a real quantity, report the result with mean, range, and uncertainty, compare to a model's claim, and write a calibrated assessment.",
        parentBriefing:
          "This is the capstone for the emerging band. The student has learned the scale, units, error, confidence, and calibration. Now they run the full protocol: design the measurement, take multiple trials, check units, report uncertainty, compare to the model, calibrate the trust, and write the assessment. The output is a one-paragraph result with every element. The paragraph is the capstone artifact. It is the proof that the student can measure in the age of fluency.",
        hardEdges: [
          "The student must design the measurement, not just run it. The design is the thinking. The running is the doing. Both are required.",
          "Academic integrity: the paragraph is the student's. The model is a claim to be tested, not a co-author.",
        ],
        reading: [
          {
            heading: "The protocol",
            body: "The full measurement protocol has seven steps. Design: what are you measuring, with what instrument, in what units, how many trials. Measure: take the trials, record each reading. Units: confirm the unit is correct; convert if needed. Uncertainty: calculate the mean and range; name the source of the wiggle. Compare: ask the model for the same quantity; write its claim. Calibrate: name the stakes and the trust level. Report: write one paragraph with the result, the uncertainty, the comparison, and the calibration. The paragraph is the artifact. It has every skill from the unit in one report. The model gives a single number with confidence. You give a result with uncertainty and honesty. The difference is the skill.",
          },
          {
            heading: "Why the protocol matters",
            body: "The protocol matters because it is the same every time. You do not reinvent it for each measurement. You run it. The protocol catches the things the model cannot: the wiggle, the unit error, the calibration, the honest uncertainty. The model produces numbers. The protocol produces results. The student who can run this protocol on any quantitative claim has a skill that no model can replicate: the ability to test the world and report honestly. That skill is the capstone. The paragraph is the proof.",
          },
        ],
        bigIdea:
          "Design, measure, check units, report uncertainty, compare, calibrate, report. The full protocol in one paragraph.",
        tryThis: [
          {
            title: "The full protocol",
            minutes: 28,
            steps: [
              "Design: write what you are measuring, the instrument, the units, and the number of trials.",
              "Measure: take five trials. Record each reading.",
              "Units: confirm the unit. Convert if needed.",
              "Uncertainty: calculate the mean and range. Name the source of the wiggle.",
              "Compare: ask the model for the same quantity. Write its claim.",
              "Calibrate: name the stakes (curiosity, practical, safety) and the trust level.",
              "Report: write one paragraph: 'I measured [property] of [object] using [instrument]. Mean: [X] [unit], range [low] to [high]. Uncertainty source: [source]. The model claimed [Y] [unit]. Calibration: [level], [trust/check/reject] because [reason].'",
              "Talk About It: what does the paragraph have that the model's single number does not?",
            ],
          },
        ],
        dinnerQuestion:
          "What measurement did we run the full protocol on this week, and what did the paragraph say?",
        transfer: [
          { label: "Science", note: "Hypothesis before search: the full protocol is the scientific method in miniature." },
          { label: "Thinking", note: "Claim and check: the protocol is the check, applied to a quantitative claim." },
        ],
        ifTheySay: [
          {
            heard: "This is overkill for a simple measurement.",
            reply: "The first time, it is. The second time, it is faster. The third time, it is a habit. The protocol is an investment. The return is that you never confuse a guess with a result. The first time is the most expensive, and it is still cheaper than one real error.",
          },
          {
            heard: "The model can do most of this.",
            reply: "The model can give you a number. It cannot design your measurement, choose your instrument, check your units, report your uncertainty, or calibrate your trust. Those are yours. The model is a claim machine. The protocol is a result machine. You run the protocol. The model is one input.",
          },
        ],
        integrity:
          "The paragraph is yours. The model is a claim to be tested. If you include the model's number, label it as a claim. If you include your measurement, label it as a result. The labels are the integrity.",
        aiLab: {
          setup: "After the protocol is complete.",
          childDoes:
            "Show the guide the paragraph. Ask: 'What does my paragraph have that yours does not?' If it says 'I do not provide measurement uncertainty,' that is honest. If it says 'we both provide useful information,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they design the measurement, not just run it?",
            "Does the paragraph include all seven elements?",
            "Can they name what the protocol produces that the model cannot?",
          ],
        },
      },
      adult: {
        title: "The Household Measurement Protocol",
        dek: "Run the full protocol once, at home, on something real, in front of the child. The child who sees it will run it for life.",
        objective:
          "The adult runs the full measurement protocol on one real household quantity, reports the result out loud with uncertainty and calibration, and lets the child see every step.",
        parentBriefing:
          "This is the adult capstone. The adult runs the full protocol: design, measure, check units, report uncertainty, compare to the model, calibrate, report. On one real household quantity. Out loud. In front of the child. The child does not need to run the protocol. They need to see it run. The child who watches an adult measure, check, report, and calibrate once will internalize the habit. The child who never sees it will treat model numbers as facts for life. One run. Out loud. That is the investment.",
        hardEdges: [
          "Do not make this a lecture. Run the protocol. Talk through the steps. The child watches.",
          "If the measurement confirms the model, say so. The protocol is not about catching the model. It is about the habit of checking.",
        ],
        reading: [
          {
            heading: "One run, out loud",
            body: "Pick a household quantity. Run the protocol. Talk through each step. 'I am measuring the weight of this bag of coffee. I will use the kitchen scale. Five trials. In grams.' Then measure, report the range, check the unit, compare to the model, calibrate ('practical — I am checking because baking depends on it'), and report the paragraph. The child hears every step. They do not need to understand all of it. They need to hear that measurement is a process, not a number. The model gives a number. The adult gives a process. The child who hears the process once will expect it. The child who never hears it will accept numbers as facts.",
          },
          {
            heading: "What the child inherits",
            body: "The child inherits the adult's relationship to measurement. If the adult runs the protocol once, out loud, the child learns that measurement is a process with steps, uncertainty, and honesty. If the adult accepts model numbers without a protocol, the child learns that numbers are facts that come from the smoothest voice. The protocol is the inheritance. One run. Out loud. That is the investment. The child will not remember the vocabulary. They will remember the Tuesday you measured the coffee five times and said 'give or take two grams.'",
          },
        ],
        bigIdea:
          "Run the protocol once, out loud, at home. The child who sees measurement as a process will never treat numbers as facts.",
        tryThis: [
          {
            title: "One household protocol",
            minutes: 15,
            steps: [
              "Pick a real household quantity to measure.",
              "Talk through the design: 'I am measuring [X] with [instrument] in [unit], five trials.'",
              "Measure five times. Report the range out loud.",
              "Check the unit. Ask the model. Compare.",
              "Calibrate: name the stakes and the trust level.",
              "Report the paragraph out loud: 'Mean is X, range Y, uncertainty from Z. Model said W. I trust the measurement because [reason].'",
              "Let the child hear every step. The hearing is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What did we measure with the full protocol this week, and what did the child hear?",
        transfer: [
          { label: "Parenting", note: "The protocol you run is the protocol they will run when you are not there." },
          { label: "All subjects", note: "Every subject in WisdomForge has a version of this: try, check, close. The measurement protocol is the science version." },
        ],
        ifTheySay: [
          {
            heard: "The child won't understand all of it.",
            reply: "They do not need to understand all of it. They need to hear it. The hearing teaches: measurement is a process, not a number. The understanding comes later. The habit comes from hearing it once.",
          },
          {
            heard: "I don't have time to run a full protocol at home.",
            reply: "The first time takes fifteen minutes. The second time takes eight. The third time takes four. The habit gets faster. The investment is one run, out loud. The return is a child who measures instead of trusting. That is worth fifteen minutes.",
          },
        ],
        integrity:
          "Run the protocol honestly. If the measurement matches the model, say so. If it does not, say so. The protocol is about the habit, not the verdict.",
        aiLab: {
          setup: "After the protocol is run.",
          childDoes:
            "Ask the child: 'What did I do that the model didn't?' Let them answer. If they say 'you measured and the model guessed,' the lesson landed. If they cannot answer, run the protocol again next week. The hearing is the investment.",
          evaluate: [
            "Did you run the full protocol out loud?",
            "Did the child hear every step?",
            "Can the child name one thing you did that the model did not?",
          ],
        },
      },
    },
  }),
];
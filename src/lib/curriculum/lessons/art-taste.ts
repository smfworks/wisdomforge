import { expand } from "./factory";

export const artTasteLessons = [
  // ── 1. Looking Longer Than the Feed ─────────────────────────────────
  ...expand({
    slug: "looking-longer",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 1,
    variants: {
      little: {
        title: "Looking Longer Than the Feed",
        dek: "A feed shows you things fast. Art asks you to look slow. The longer you look, the more you see.",
        objective:
          "The child can look at one image or object for one full minute and name three things they did not see at first glance.",
        parentBriefing:
          "This is the first sitting on taste. Taste starts with looking. The feed trains fast looking: scroll, judge, scroll. Art asks for slow looking: stay, notice, stay longer. The child needs to practice slow looking on something real: a painting, a leaf, a building, a face in a mirror. One minute. Three things they did not see at first. The skill is the slowness. The feed will train the opposite. This sitting trains the resistance.",
        hardEdges: [
          "No screens for the looking. The point is the opposite of the feed.",
          "Do not rush the child. One minute is short for an adult and long for a child. If they last thirty seconds, that is a start.",
        ],
        reading: [
          {
            heading: "Fast looking and slow looking",
            body: "A feed shows you a picture for two seconds. You judge it: like, scroll. Like, scroll. That is fast looking. Fast looking teaches you to judge before you see. Art asks for slow looking. You stay with a picture. You look. You wait. You notice something you did not see the first time. You wait more. You notice something else. The longer you look, the more you see. Taste is built by slow looking, not fast scrolling. The feed trains the muscle to twitch. Art trains it to hold. Both are real. Only one builds taste.",
          },
          {
            heading: "Three things",
            body: "Look at something for one minute. At first you see the obvious: a tree, a face, a color. Wait. Look again. You see something you missed: a shadow, a line, a small mark. Wait again. You see something else. That is slow looking. The three things you did not see at first are the reward. They are always there. The feed does not give you time to find them. Art does. The child who practices one minute of slow looking will start to see the feed differently: fast, shallow, twitchy. That is the beginning of taste.",
          },
        ],
        bigIdea:
          "The feed trains fast looking. Art trains slow looking. Taste is built by staying longer than the feed allows.",
        tryThis: [
          {
            title: "One minute",
            minutes: 8,
            steps: [
              "Pick something real to look at: a painting, a leaf, a building, a face in a mirror.",
              "Look for one full minute. Do not look away. Do not talk.",
              "After the minute, name three things you did not see at first.",
              "Talk About It: what did waiting show you that the first look did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we look at for a whole minute today, and what did we see when we waited?",
        transfer: [
          { label: "Science", note: "Observation: the same slowness, applied to the natural world." },
          { label: "Thinking", note: "The pause before judgment: the same skill, applied to claims." },
        ],
        ifTheySay: [
          {
            heard: "I already looked at it.",
            reply: "You looked. Did you stay? The first look sees the obvious. The staying sees the rest. Try one minute. You will find something you missed.",
          },
        ],
        integrity:
          "Do not say you saw something you did not. The three things must be real. If you only saw one, say one. The honesty is the looking.",
        aiLab: {
          setup: "After the one-minute look.",
          childDoes:
            "Ask the model to describe the thing you looked at. Compare its description to your three things. Did it see what you saw? Did it miss what you found by waiting?",
          evaluate: [
            "Did they look for a full minute without turning away?",
            "Did they name three things they did not see at first?",
            "Can they feel the difference between fast and slow looking?",
          ],
        },
      },
      young: {
        title: "The Feed Trains the Twitch",
        dek: "A feed trains you to judge in two seconds. Taste requires staying longer. The muscle atrophies if you only scroll.",
        objective:
          "The student can look at one image for two minutes, name three details they missed at first, and explain how the feed trains fast looking that weakens taste.",
        parentBriefing:
          "This sitting builds on the little version. Two minutes instead of one. The student also names how the feed trains fast looking. The feed is not evil. It is a trainer. It trains the eye to twitch: judge, scroll, judge, scroll. Taste requires the opposite: stay, look, stay longer. The student needs to feel the difference in their own body. Two minutes of slow looking will feel uncomfortable if they are used to scrolling. That discomfort is the muscle being used. The feed lets it atrophy.",
        hardEdges: [
          "No screens for the looking exercise. The point is to feel the contrast.",
          "Do not make this a lecture on screen time. The point is the muscle, not the guilt.",
        ],
        reading: [
          {
            heading: "The twitch",
            body: "The feed trains a twitch. Two seconds per image. Judge, scroll, judge, scroll. After an hour of scrolling, the eye has twitched a thousand times. It has not looked once. Taste requires holding. You stay with an image. You look. You wait. You see more. You wait. You see more. The holding is the muscle. The twitch is the atrophy. Both are training. The feed trains the twitch. Art trains the hold. The student who can hold for two minutes has used the muscle. The student who only twitches has lost it.",
          },
          {
            heading: "What slow looking finds",
            body: "Slow looking finds what fast looking cannot: the specific. The shadow under the chin. The brushstroke that went left when the rest went right. The color that is not the color you thought it was. These details are always there. The feed does not give you time to find them. The model, if you ask it to describe an image, will give you the obvious: 'a landscape with trees.' It will miss the specific because it did not stay either. The student who stays will see what the model and the feed both miss. That is taste.",
          },
        ],
        bigIdea:
          "The feed trains the twitch. Art trains the hold. Taste is the hold. The twitch is the atrophy.",
        tryThis: [
          {
            title: "Two minutes",
            minutes: 14,
            steps: [
              "Pick something real to look at: a painting, a photograph, a building, a natural object.",
              "Look for two full minutes. Do not look away. Do not talk.",
              "After two minutes, name three things you did not see at first. Then name three more.",
              "Now scroll a feed for one minute. Notice the difference in your eye.",
              "Talk About It: what did the feed train your eye to do? What did the two minutes train?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we see by staying two minutes that the feed would never have shown us?",
        transfer: [
          { label: "Science", note: "Observation: the same slowness, applied to data and experiment." },
          { label: "Thinking", note: "The pause before judgment: the same skill, applied to claims." },
        ],
        ifTheySay: [
          {
            heard: "Two minutes is too long.",
            reply: "It feels long because the feed trained your eye to twitch. The discomfort is the muscle being used for the first time. Stay. The discomfort passes. The seeing begins.",
          },
          {
            heard: "I can just zoom in.",
            reply: "Zooming is looking closer, not looking longer. You can zoom and still twitch. The skill is not magnification. It is duration. Stay with it. Time is the tool, not the lens.",
          },
        ],
        integrity:
          "Name what you actually saw. Do not invent details to sound observant. If you saw two things, say two. The honesty is the looking.",
        aiLab: {
          setup: "After the two-minute look.",
          childDoes:
            "Ask the model to describe the thing you looked at. Compare. Did it find the specific details you found by staying? Or did it give the obvious? The model is a fast looker. You are a slow one. The difference is taste.",
          evaluate: [
            "Did they look for two full minutes?",
            "Did they name six things total (three first, three more)?",
            "Can they describe the difference between the feed's twitch and the hold?",
          ],
        },
      },
      emerging: {
        title: "Slow Looking Against the Machine",
        dek: "The model can describe an image in one second. It cannot stay with it. Your taste is built by what only a human can do: look longer than is useful.",
        objective:
          "The student can look at a work of art for five minutes, write a description that includes specific details a model's description would miss, and explain why slow looking builds taste that fast description cannot.",
        parentBriefing:
          "This sitting puts the student's slow looking against the model's fast description. The student looks at a work of art for five minutes. Then they write what they saw. Then they ask the model to describe the same work. The model's description will be the obvious: subject, color, composition. The student's description should have the specific: the detail that only staying reveals. The gap between the two descriptions is the taste. The model cannot stay. The student can. That is the skill the model cannot replace.",
        hardEdges: [
          "Do not let the student conclude the model's description is worthless. It is useful for the obvious. The point is the specific, which requires staying.",
          "Academic integrity: if the student uses the model's description in their own, cite it. The details from slow looking are theirs. The obvious is the model's.",
        ],
        reading: [
          {
            heading: "The model's one-second description",
            body: "The model can describe an image in one second. It will name the subject, the colors, the composition, the style. It will be correct and generic. It will miss the specific: the crack in the glaze, the place the painter changed direction, the face in the background that is not a face until you look for two minutes. The model misses these because it did not stay. It processed the image. Processing is not looking. Looking is time spent with a thing. The model's description is the floor. The student's slow looking is the ceiling. The gap is the taste.",
          },
          {
            heading: "Why slow looking builds taste",
            body: "Taste is not opinion. Taste is the ability to distinguish the specific from the generic. The student who has only seen generic descriptions (the model's, the feed's) has no taste because they have no contrast. The student who has stayed with a work and found the specific has taste because they know the difference. Taste is built by the contrast between the obvious and the specific, and the contrast only appears when you stay long enough to see both. The model gives the obvious. The staying gives the specific. The student who can do both has a taste the model cannot produce.",
          },
        ],
        bigIdea:
          "The model gives the obvious in one second. Your staying gives the specific. The gap is taste. The model cannot stay.",
        tryThis: [
          {
            title: "Five minutes against the machine",
            minutes: 25,
            steps: [
              "Pick a work of art: a painting, a photograph, a sculpture (in person or high-quality reproduction).",
              "Look for five full minutes. Do not write yet. Just look.",
              "Write what you saw. Focus on the specific: details the obvious description would miss.",
              "Ask the model to describe the same work. Save its description.",
              "Compare: what did you see that it did not? What did it see that you missed?",
              "Write one sentence: 'The model saw [obvious]. I saw [specific]. The gap is [taste].'",
              "Talk About It: what is the thing only staying can find?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we see by staying five minutes that the machine's one-second description missed?",
        transfer: [
          { label: "Science", note: "Observation: the same slowness, applied to data and experiment." },
          { label: "English", note: "Voice: the specific is where voice lives. The generic is where the model lives." },
        ],
        ifTheySay: [
          {
            heard: "The model's description was pretty good.",
            reply: "It was good for the obvious. The obvious is the floor. The specific is the ceiling. The model gives the floor in one second. Your five minutes gave the ceiling. The gap between them is your taste. Without the gap, you have no taste. You have the model's description.",
          },
          {
            heard: "Five minutes is a lot for one image.",
            reply: "It is. That is the point. The model's one second is cheap. Your five minutes is expensive. Taste is built by the expensive looking, not the cheap description. The investment is the five minutes. The return is the specific.",
          },
        ],
        integrity:
          "If your description includes details from the model, cite it. The details from slow looking are yours. The obvious is the model's. The citation is honest.",
        aiLab: {
          setup: "After the comparison.",
          childDoes:
            "Show the model your description and ask: 'What did I see that you missed?' If it says 'your description is more detailed,' that is a dodge. If it says 'I process images differently than a human looking slowly,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they look for five full minutes?",
            "Did their description include specific details the model missed?",
            "Can they name the gap between the obvious and the specific?",
          ],
        },
      },
      adult: {
        title: "Look With Them",
        dek: "If you never look slowly, the child learns that looking is scrolling. Look at one thing for two minutes, with them. That is the inheritance.",
        objective:
          "The adult looks at one work of art or natural object for two minutes with the child, names three things they each saw, and models that slow looking is a household practice.",
        parentBriefing:
          "The adult models slow looking. Pick something real: a painting, a tree, a building. Look at it with the child for two minutes. No talking. No phones. After two minutes, each person names three things they saw. The adult goes first, honestly. If they only saw two, they say two. The child who watches an adult look slowly learns that looking is not scrolling. The child who never sees it learns that looking is what the feed does. Two minutes, together, is the investment.",
        hardEdges: [
          "Do not narrate during the looking. The silence is the point.",
          "If the child gets restless, shorten the time. One minute is a start. The point is the practice, not the duration.",
        ],
        reading: [
          {
            heading: "The household look",
            body: "The household runs on fast looking: the phone, the feed, the glance. The child absorbs this as what looking is. The adult who models slow looking, once, with the child, teaches that looking is a different act. Two minutes of silence, looking at one thing, is a household practice. It is not a museum trip. It is not a lecture. It is two minutes of being present with a thing. The child who experiences this will know that looking has a slow mode. The child who never experiences it will only know the fast mode. The slow mode is the inheritance.",
          },
          {
            heading: "What you both see",
            body: "After the two minutes, each person names three things. The adult goes first. The child hears what the adult saw. The child names what they saw. The two lists will be different. The difference is instructive: two people looked at the same thing and saw different details. That is taste in miniature. The adult who says 'I only saw two things' teaches that honesty is more important than performance. The child who says 'I saw the same things as you' may be copying. Ask them to find one thing you did not name. That is the specific.",
          },
        ],
        bigIdea:
          "Look slowly with the child. Two minutes, together, in silence. The child who experiences slow looking will never fully confuse it with scrolling.",
        tryThis: [
          {
            title: "Two minutes together",
            minutes: 10,
            steps: [
              "Pick something real to look at with the child: a painting, a tree, a building.",
              "Look together for two full minutes. No talking. No phones.",
              "After two minutes, you go first. Name three things you saw.",
              "Then the child names three things they saw.",
              "Compare: what did you each see that the other did not?",
              "Talk About It: what is the difference between this and scrolling?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we look at together for two minutes this week, and what did we each see?",
        transfer: [
          { label: "Parenting", note: "The slow looking you model is the slow looking they will practice when you are not there." },
          { label: "Science", note: "Look together: the science unit's observation sitting, applied to art." },
        ],
        ifTheySay: [
          {
            heard: "They won't sit still for two minutes.",
            reply: "Start with one. The point is the practice, not the duration. One minute of real looking is worth more than thirty minutes of scrolling. Build the muscle. It grows.",
          },
          {
            heard: "I don't know what to look at.",
            reply: "Anything real. A painting, a tree, a crack in the wall, the sky. The subject does not matter. The looking does. Pick something and stay with it.",
          },
        ],
        integrity:
          "Name what you actually saw. If you saw two things, say two. The child learns honesty from your honesty. Do not perform three when you saw two.",
        aiLab: {
          setup: "After the two-minute look.",
          childDoes:
            "Ask the model to describe the thing you looked at. Compare to your lists. Did it find the specific details you found by staying? Or did it give the obvious? The difference is the lesson.",
          evaluate: [
            "Did you look for two minutes in silence with the child?",
            "Did you each name three things honestly?",
            "Can the child feel the difference between slow looking and scrolling?",
          ],
        },
      },
    },
  }),

  // ── 2. Copy From Life, Not From a Prompt ─────────────────────────────
  ...expand({
    slug: "copy-from-life",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 2,
    variants: {
      little: {
        title: "Copy From Life, Not From a Prompt",
        dek: "A generator gives you the average. Life gives you the specific. Copy the specific.",
        objective:
          "The child can draw or describe one real thing from life and name one detail a generated image would not have.",
        parentBriefing:
          "This sitting teaches the child to copy from life, not from a prompt. A generator gives you the average of what it has seen. Life gives you the specific: the dent in the cup, the wrinkle in the leaf, the shadow that is not the color you expected. The child who copies from life learns to see the specific. The child who only generates learns to see the average. Taste is built by the specific. Use simple objects: a shoe, a cup, a hand, a tree outside.",
        hardEdges: [
          "No generating images this sitting. The point is the contrast with life.",
          "Do not grade the drawing. The point is the seeing, not the skill.",
        ],
        reading: [
          {
            heading: "The average and the specific",
            body: "A generator gives you the average. You ask for 'a cup' and it gives you a cup that looks like every cup. It is smooth. It has no dent, no stain, no history. A real cup has a dent from the time it fell. It has a stain from the tea. It has a chip on the rim. Those details are the specific. The specific is where taste lives. The average is where the generator lives. Copy the real cup. The dent is the lesson. The stain is the taste. The generator cannot give you those because it did not hold your cup.",
          },
        ],
        bigIdea:
          "A generator gives the average. Life gives the specific. Copy the specific. That is where taste lives.",
        tryThis: [
          {
            title: "Copy one real thing",
            minutes: 10,
            steps: [
              "Pick one real thing: a shoe, a cup, a leaf, a hand.",
              "Draw or describe it. Focus on the specific: the dent, the stain, the wrinkle.",
              "Ask: what is one detail a generated picture would not have?",
              "Talk About It: what did the real thing have that the average would not?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we copy from life today that a generator could not have given us?",
        transfer: [
          { label: "Science", note: "Observation: the specific detail is the data. The average is the summary." },
          { label: "English", note: "Voice: the specific word is the voice. The average word is the generic." },
        ],
        ifTheySay: [
          {
            heard: "The generator makes better pictures.",
            reply: "It makes smoother pictures. Smooth is not the same as specific. A generated cup has no dent. Your cup has a dent. The dent is the taste. The smooth is the average.",
          },
        ],
        integrity:
          "Do not generate an image and call it your copy. The copy is from life. The generation is from a prompt. They are different things.",
        aiLab: {
          setup: "After the copy from life.",
          childDoes:
            "Ask the model to generate an image of the thing you copied. Compare. What does your copy have that the generation does not? The specific is the taste. The average is the smooth.",
          evaluate: [
            "Did they copy from a real thing?",
            "Did they name one specific detail?",
            "Can they see the difference between the average and the specific?",
          ],
        },
      },
      young: {
        title: "Life Has Dents",
        dek: "A generated image is the average of a million pictures. A real object has dents, stains, and history. Copy the dents.",
        objective:
          "The student can copy a real object from life, identify three specific details a generator would average away, and explain why the specific builds taste.",
        parentBriefing:
          "This sitting builds on the little version. The student copies from life and then generates the same subject. The comparison is the lesson. The generated image will be smooth, glossy, average. The life copy will be rough, specific, full of dents and stains. The student needs to see that the generator averages away the specific, and that the specific is where taste lives. The student who can name what the generator averaged away has learned the difference between average and specific.",
        hardEdges: [
          "No faces of classmates or family in the generator. Use objects, not people.",
          "Do not conclude the generator is bad. It is a different tool. The point is the specific, which requires life.",
        ],
        reading: [
          {
            heading: "What the generator averages away",
            body: "A generator takes a million pictures of cups and gives you the average. The average cup has no dent, no stain, no chip, no history. It is a cup that has never been used. A real cup has been used. It has a dent from the time it fell. It has a stain from a thousand cups of tea. It has a chip on the rim from the dishwasher. Those details are what the generator averages away. They are also what makes the cup yours. The student who copies the dents and stains is building taste. The student who only generates is building a library of averages. Both are useful. Only one builds taste.",
          },
          {
            heading: "The copy is the seeing",
            body: "When you copy from life, you are not making art. You are seeing. The act of copying forces you to look at the specific: the exact curve of the dent, the shape of the stain, the angle of the chip. You see these because you have to draw them. The generator does not see. It processes. The difference is the seeing. The student who copies from life is training the eye to see the specific. The student who only generates is training the eye to accept the average. Taste is the difference.",
          },
        ],
        bigIdea:
          "The generator averages away the dents. Life is the dents. Copy the dents. That is the taste.",
        tryThis: [
          {
            title: "Copy and compare",
            minutes: 20,
            steps: [
              "Pick a real object: a shoe, a cup, a crumpled paper, a leaf.",
              "Copy it from life. Draw or describe. Focus on the dents, stains, and specific details.",
              "Write three specific details you see that a generator would average away.",
              "Generate an image of the same subject. Compare.",
              "Talk About It: what did the generator smooth out? What did your copy keep?",
            ],
          },
        ],
        dinnerQuestion:
          "What dents did we find in a real object today that a generator would have smoothed away?",
        transfer: [
          { label: "Science", note: "Observation: the specific detail is the data. The average is the summary." },
          { label: "English", note: "Voice: the specific word is the voice. The average word is the generic." },
        ],
        ifTheySay: [
          {
            heard: "The generated image looks better.",
            reply: "It looks smoother. Smoother is not better for taste. Taste is built by the specific. The generated image has no dents. Your copy has dents. The dents are the taste. The smooth is the average.",
          },
          {
            heard: "I can't draw.",
            reply: "You do not need to draw. You need to see. The copy is the seeing. Even a bad drawing forces you to look at the specific. The generator does not look. It processes. Your bad drawing with dents has more taste than the generator's smooth average.",
          },
        ],
        integrity:
          "Label the generated image as generated. Do not present it as your copy. The copy is from life. The generation is from a prompt. Both are real. They are not the same.",
        aiLab: {
          setup: "After the copy and comparison.",
          childDoes:
            "Ask the model: 'What did you average away in this image?' If it says 'I create a generalized representation,' that is honest. If it says 'I capture the essence,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they copy from life?",
            "Did they name three specific details the generator averaged away?",
            "Can they explain why the specific builds taste?",
          ],
        },
      },
      emerging: {
        title: "The Specific Is the Taste",
        dek: "Taste is not opinion. It is the ability to see the specific. Generators average it away. Copy from life to keep it.",
        objective:
          "The student can copy from life, generate the same subject, and write a critique naming three specific details the generator averaged away and why those details matter for taste.",
        parentBriefing:
          "This sitting makes the student articulate why the specific matters. They copy from life. They generate. They write a critique: what did the generator average away, and why does that matter? The critique is the taste made explicit. The student who can name what was lost and why it matters has moved from feeling taste to articulating it. That articulation is the skill. Taste is not a vibe. It is a named difference.",
        hardEdges: [
          "Academic integrity: label generated images as generated. The life copy is the student's. The generation is the tool's.",
          "Do not let the student conclude generators are useless. They are a different tool. The point is the specific, which requires life.",
        ],
        reading: [
          {
            heading: "Taste is a named difference",
            body: "Taste is not 'I like this.' Taste is 'I see this specific thing, and I know why it matters.' The student who can name the difference between the life copy and the generated image has articulated taste. 'The generator smoothed the shadow under the rim. The shadow is where the cup's weight lives. Without it, the cup looks like it floats. The float is the average. The weight is the specific.' That sentence is taste, articulated. The student who can write that sentence has a taste the model cannot produce, because the model produces the average and the student sees the specific.",
          },
          {
            heading: "Why the specific matters",
            body: "The specific matters because it is where the thing is itself. Every cup has a rim. Only your cup has that chip. Every leaf has veins. Only this leaf has that tear. The specific is the thing's identity. The average is the category. Taste is the ability to see the identity inside the category. The generator gives the category. Life gives the identity. The student who copies from life is training the eye to see identity. The student who only generates is training the eye to accept category. Identity is taste. Category is generic.",
          },
        ],
        bigIdea:
          "Taste is a named difference. The specific is the identity. The average is the category. Name what was lost.",
        tryThis: [
          {
            title: "The critique",
            minutes: 25,
            steps: [
              "Copy a real object from life. Focus on the specific.",
              "Generate the same subject. Compare.",
              "Write a critique: name three specific details the generator averaged away.",
              "For each, write why it matters: what does the detail do that the average does not?",
              "Write one sentence: 'The generator gives [category]. Life gives [identity]. The difference is [taste].'",
              "Talk About It: can taste be articulated, or is it just a feeling?",
            ],
          },
        ],
        dinnerQuestion:
          "What specific did we name this week that the generator averaged away, and why did it matter?",
        transfer: [
          { label: "English", note: "Voice: the specific word is the voice. The average word is the generic. Same lesson." },
          { label: "Thinking", note: "Bias: the missing voice is the specific the model cannot give. Same structure." },
        ],
        ifTheySay: [
          {
            heard: "Taste is subjective.",
            reply: "Preference is subjective. Taste is the ability to see the specific and name why it matters. That ability is trained. It is not a feeling. It is a skill. The critique you just wrote is the skill, made visible.",
          },
          {
            heard: "The generator is a valid art form.",
            reply: "It is. It is a different art form. The point is not 'generators are bad.' The point is 'generators average away the specific, and the specific is where taste lives.' Use the generator for what it does well. Copy from life for what it cannot do. Know the difference.",
          },
        ],
        integrity:
          "Label the generated image as generated. Cite it in the critique as the comparison. The life copy is yours. The critique is yours. The generation is the tool's.",
        aiLab: {
          setup: "After the critique.",
          childDoes:
            "Show the model the critique. Ask: 'What did I name that you would not have named?' If it says 'your observations are insightful,' that is flattery. If it says 'I produce generalized representations and may not capture specific details,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they copy from life?",
            "Did they name three specific details with reasons?",
            "Can they articulate taste as a named difference, not a feeling?",
          ],
        },
      },
      adult: {
        title: "Copy With Them",
        dek: "If you never copy from life, the child learns that art is a prompt. Copy one thing, badly, with them. The dents are the lesson.",
        objective:
          "The adult copies one real object from life, badly, in front of the child, names one specific detail, and models that taste is built by the specific, not the smooth.",
        parentBriefing:
          "The adult models copying from life. Badly. A five-minute drawing of a cup, a shoe, a crumpled paper. The adult does not fix it in a generator. The adult names one specific detail: 'See this dent? The generator would have smoothed it away. The dent is the taste.' The child who sees an adult copy from life, badly, and name the specific learns that taste is not about skill. It is about seeing. The child who never sees it learns that art is a prompt and taste is a preference.",
        hardEdges: [
          "Do not fix your drawing in a generator. The point is the bad copy with the specific detail.",
          "Do not apologize for your drawing. The bad drawing is the lesson. The apology undermines it.",
        ],
        reading: [
          {
            heading: "The bad copy with the dent",
            body: "Your drawing will be bad. That is the point. A bad drawing of a real cup, with the dent visible, has more taste than a generated image of a smooth cup. The dent is the specific. The smooth is the average. The child who watches you draw badly and name the dent learns: taste is not skill. Taste is seeing the specific. The child who watches you generate and skip the drawing learns: art is a prompt and taste is a preference. The bad copy is the inheritance. The smooth generation is the atrophy.",
          },
        ],
        bigIdea:
          "Copy from life, badly, with the child. Name the dent. The dent is the taste. The smooth is the average.",
        tryThis: [
          {
            title: "One bad copy",
            minutes: 8,
            steps: [
              "Pick a real object. Draw it for five minutes. It will be bad. That is fine.",
              "Name one specific detail: the dent, the stain, the chip.",
              "Say: 'A generator would have smoothed this away. The dent is the taste.'",
              "Do not fix it in a generator. The bad copy with the dent is the lesson.",
              "Let the child see you draw badly and name the specific. The seeing is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What did we copy from life today, badly, and what dent did we find?",
        transfer: [
          { label: "Parenting", note: "The bad copy you model is the taste they will build when you are not there." },
          { label: "Art", note: "Hand Before Generate: this is the deeper version. The hand is the seeing." },
        ],
        ifTheySay: [
          {
            heard: "I can't draw.",
            reply: "Neither can I. That is the point. The bad drawing forces you to see the specific. The generator lets you skip the seeing. Draw badly. Name the dent. The dent is the taste. The skill is the seeing, not the drawing.",
          },
          {
            heard: "The child will think I'm bad at art.",
            reply: "They will think you are bad at drawing. They will also learn that taste is not about drawing. It is about seeing. The adult who draws badly and names the specific teaches more than the adult who generates perfectly and sees nothing.",
          },
        ],
        integrity:
          "Do not generate an image and present it as your copy. The copy is from life, bad and specific. The generation is from a prompt, smooth and average. They are different.",
        aiLab: {
          setup: "After the bad copy.",
          childDoes:
            "Ask the child: 'What is the dent?' Let them find it. If they can, the seeing landed. If they cannot, point to it. The pointing is the teaching.",
          evaluate: [
            "Did you copy from life, badly?",
            "Did you name one specific detail?",
            "Did the child see that taste is the specific, not the smooth?",
          ],
        },
      },
    },
  }),

  // ── 3. The Default Aesthetic ────────────────────────────────────────
  ...expand({
    slug: "default-aesthetic",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 3,
    variants: {
      little: {
        title: "The Default Look",
        dek: "Every generator has a look. If all your pictures look the same, the default is your taste. It is not yours.",
        objective:
          "The child can identify the default look of a generated image and name one way it is different from a handmade picture.",
        parentBriefing:
          "Every generator has a default: the lighting, the colors, the composition that it produces when you do not constrain it. If a child only sees generated images, the default becomes their taste. They think the default is 'good.' It is not good or bad. It is the average. The child needs to see the default and compare it to something handmade. The difference is the lesson: the default is the generator's taste. The handmade is yours.",
        hardEdges: [
          "No faces of family or classmates in the generator.",
          "Do not make the generator the villain. The point is the default, not the ban.",
        ],
        reading: [
          {
            heading: "The default",
            body: "Every generator has a look. The sky is a certain blue. The light is a certain gold. The faces are a certain smooth. You can see it once you look. If all your pictures have that look, the generator's default has become your taste. It is not your taste. It is the average of what the generator was trained on. Your taste is what you choose after seeing the difference. The child who can see the default has taken the first step to having their own taste. The child who cannot see it has the generator's taste and does not know it.",
          },
        ],
        bigIdea:
          "Every generator has a default look. If all your pictures look the same, the default is your taste. It is not yours.",
        tryThis: [
          {
            title: "Spot the default",
            minutes: 10,
            steps: [
              "Ask the model to generate three images of different things: a cat, a mountain, a cup.",
              "Look at all three. What do they have in common? The light? The colors? The smoothness?",
              "That common thing is the default.",
              "Now look at a handmade drawing. What does it have that the generated images do not?",
              "Talk About It: is the default bad, or is it just not yours?",
            ],
          },
        ],
        dinnerQuestion:
          "What default look did we spot today, and what would our own look be?",
        transfer: [
          { label: "English", note: "Voice: the model's default voice is the same as its default image. Smooth, generic, not yours." },
          { label: "Thinking", note: "Frames: the default is a frame. Seeing it is the same skill as seeing the frame in a question." },
        ],
        ifTheySay: [
          {
            heard: "The default looks good.",
            reply: "It looks smooth. Smooth is not the same as good. It is the same as average. The default is the generator's taste. Your taste is what you choose after seeing the default. You cannot choose if you cannot see it.",
          },
        ],
        integrity:
          "Label generated images as generated. Do not present the default as your taste. Your taste is what you choose, not what the generator produces.",
        aiLab: {
          setup: "After spotting the default.",
          childDoes:
            "Ask the model: 'What is your default style?' If it says 'I can produce various styles,' ask it to show you three images without specifying a style. The common look is the default. Name it.",
          evaluate: [
            "Did they identify the default look across different subjects?",
            "Did they compare it to a handmade image?",
            "Can they name one thing the default has that is not theirs?",
          ],
        },
      },
      young: {
        title: "The Default Is Not Your Taste",
        dek: "A generator's default is the average of its training. If you live there, your taste is the average. Get out.",
        objective:
          "The student can identify the default aesthetic of a generator, describe how it differs from a personal aesthetic, and constrain a generation to fight the default.",
        parentBriefing:
          "This sitting teaches the student to see the default and fight it. The default is the generator's average. If the student always accepts the default, their taste is the generator's. The skill is to constrain the generation: ask for something the default would not produce. Odd lighting. A color the generator avoids. A composition that is not centered. The constraint is the taste. The student who can constrain has a taste. The student who accepts the default has the average.",
        hardEdges: [
          "Do not ban generators. The point is the constraint, not the ban.",
          "Copyright: do not use a living artist's name as a style prompt. That is copying a person's taste without their consent.",
        ],
        reading: [
          {
            heading: "Seeing the default",
            body: "Generate ten images without specifying style. Look at them together. The common qualities are the default: a certain lighting, a certain color palette, a certain smoothness, a certain composition. The default is not a flaw. It is the generator's center of gravity. If you always accept it, your taste is the center of gravity. If you can see it, you can push against it. The pushing is the taste. The student who can see the default and constrain it has a taste that is partly theirs. The student who cannot see the default has a taste that is entirely the generator's.",
          },
          {
            heading: "The constraint",
            body: "To fight the default, constrain the generation. Ask for something the default would not produce: 'Harsh overhead light, not golden hour. Desaturated colors, not vibrant. Off-center composition, not balanced. Rough texture, not smooth.' Each constraint pushes against the default. The result will be less polished and more specific. The specific is the taste. The constraint is the choice. The student who can write constraints has a taste. The student who accepts the default has the average. Both are valid. Only one is yours.",
          },
        ],
        bigIdea:
          "The default is the average. The constraint is the taste. See the default, push against it, and the result is partly yours.",
        tryThis: [
          {
            title: "Fight the default",
            minutes: 16,
            steps: [
              "Generate three images without specifying style. Look at them. Name the default: the common light, color, composition.",
              "Now generate the same subject with three constraints that fight the default: odd light, muted color, off-center.",
              "Compare. Which images are the default? Which are partly yours?",
              "Write: 'The default is [X]. My constraint is [Y]. The result is [Z].'",
              "Talk About It: what is the difference between the default and the constrained? Which is more yours?",
            ],
          },
        ],
        dinnerQuestion:
          "What default did we fight this week, and what did the constraint give us?",
        transfer: [
          { label: "English", note: "Voice: the constraint that fights the model's default voice is the same skill. Odd rhythm, specific word, not the smooth average." },
          { label: "Thinking", note: "Frames: the default is a frame. Constraining is reframing. Same skill." },
        ],
        ifTheySay: [
          {
            heard: "The default looks fine.",
            reply: "It looks fine because it is the average. Fine is not the same as yours. If you want fine, use the default. If you want taste, constrain. The constraint is the choice. The choice is the taste.",
          },
          {
            heard: "I don't know what to constrain.",
            reply: "Start with the opposite of the default. If the default is golden hour, ask for noon. If the default is smooth, ask for rough. If the default is centered, ask for off-center. The opposite is a constraint. The constraint is a starting point. From there, you develop your own constraints. That is taste.",
          },
        ],
        integrity:
          "Label constrained images as generated with constraints. Do not present them as handmade. They are generated, but the constraint is yours. Both are honest.",
        aiLab: {
          setup: "After the constrained generation.",
          childDoes:
            "Ask the model: 'What is your default style?' Then ask: 'What did I constrain?' Compare its self-awareness to your observation. If it can name its default, that is honest. If it says 'I am flexible,' that is a dodge.",
          evaluate: [
            "Did they identify the default across multiple images?",
            "Did they write constraints that fight the default?",
            "Can they name the difference between the default and the constrained?",
          ],
        },
      },
      emerging: {
        title: "Your Taste Versus the Default",
        dek: "Taste is the ability to refuse the default when the specific serves better. If you cannot see the default, you cannot refuse it.",
        objective:
          "The student can articulate their personal aesthetic in specific terms, identify the generator's default, and make a deliberate choice about when to use each.",
        parentBriefing:
          "This sitting makes the student articulate their own aesthetic. Not 'I like it' but 'I prefer harsh light, muted color, and off-center composition because [reason].' The articulation is the taste. The student who can describe their aesthetic in specific terms has a taste. The student who can only say 'I like it' has a preference. The difference is the specificity. The generator's default is specific in a way the student's preference is not. The student needs to catch up: name what you like and why, in terms specific enough to be a constraint.",
        hardEdges: [
          "Do not let the student conclude their taste is superior. The point is the articulation, not the hierarchy.",
          "Copyright: do not use a living artist's name as a style prompt. Describe the style, not the person.",
        ],
        reading: [
          {
            heading: "Articulating your aesthetic",
            body: "Taste is not a feeling. It is a named preference with a reason. 'I prefer harsh light because it shows texture. I prefer muted color because it does not shout. I prefer off-center composition because it creates tension.' Those sentences are taste, articulated. The student who can write them has a taste they can use. The student who can only say 'I like it' has a preference they cannot act on. The generator's default is articulate in its way: it consistently produces golden hour, vibrant color, centered composition. That is its aesthetic. The student's aesthetic needs to be as specific as the generator's default to compete. Name yours. Then choose.",
          },
          {
            heading: "When to use the default",
            body: "The default is not always wrong. Sometimes the default is the right tool: a quick illustration, a placeholder, a mood board. The point is not to never use the default. The point is to know when you are using it and when you are choosing something else. The student who always uses the default has no taste. The student who never uses the default is not principled; they are contrarian. The student who can use the default when it serves and their own aesthetic when it matters has taste. The choice is the taste. The default is one option. Yours is another. Know both.",
          },
        ],
        bigIdea:
          "Taste is a named preference with a reason. Articulate yours. Know the default. Choose between them. The choice is the taste.",
        tryThis: [
          {
            title: "Articulate and choose",
            minutes: 22,
            steps: [
              "Write your aesthetic in three specific sentences: 'I prefer [X] because [Y].'",
              "Generate three images: one with your aesthetic, one with the default, one that is a mix.",
              "Compare: which one is yours? Which is the default? Which is the mix?",
              "Write: 'The default is [A]. Mine is [B]. I choose [C] for this purpose because [D].'",
              "Talk About It: when would you use the default? When would you use yours? What is the difference?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we articulate about our taste this week, and when did we choose it over the default?",
        transfer: [
          { label: "English", note: "Voice: articulating your voice is the same skill. Specific words, specific rhythm, not the default." },
          { label: "Thinking", note: "Frames: articulating your frame is the same skill. Name what you assume and why." },
        ],
        ifTheySay: [
          {
            heard: "I don't have a specific aesthetic.",
            reply: "You do. You just have not articulated it. Generate three images and pick your favorite. Why that one? The answer is your aesthetic. Name it. The naming is the taste.",
          },
          {
            heard: "The default is fine for most things.",
            reply: "It is. And 'fine' is the average. If fine is enough, use the default. If you want something that is yours, articulate your aesthetic and choose it. The choice is the taste. The default is the absence of choice.",
          },
        ],
        integrity:
          "Label your aesthetic as yours. Label the default as the generator's. The mix is both. The labels are the honesty.",
        aiLab: {
          setup: "After the articulation and choice.",
          childDoes:
            "Ask the model: 'What is my aesthetic based on the images I chose?' Compare its description to your articulation. If it matches, you articulated well. If it does not, your articulation and your choices are out of sync. That is useful data.",
          evaluate: [
            "Did they articulate their aesthetic in specific sentences?",
            "Did they generate with both their aesthetic and the default?",
            "Did they make a deliberate choice between them?",
          ],
        },
      },
      adult: {
        title: "Name Your Taste",
        dek: "If you cannot name your taste, the child will inherit the default. Name yours. It does not have to be perfect. It has to be specific.",
        objective:
          "The adult names their own aesthetic in one specific sentence, generates an image with the default and one with their aesthetic, and shows the child the difference.",
        parentBriefing:
          "The adult names their taste. Not 'I know what I like.' That is a preference. 'I prefer natural light, muted tones, and real textures because they feel honest.' That is taste, articulated. The adult generates one image with the default and one with their named aesthetic. Shows the child. Says: 'This is the default. This is mine. The difference is my taste.' The child who hears an adult name their taste learns that taste is a choice, not a feeling. The child who never hears it inherits the default.",
        hardEdges: [
          "Do not perform taste as superiority. The point is the naming, not the hierarchy.",
          "If your taste is the same as the default, say so. That is also honest. The point is the awareness, not the rejection.",
        ],
        reading: [
          {
            heading: "The named taste",
            body: "The child inherits the adult's relationship to taste. If the adult says 'I know what I like' and never names it, the child learns that taste is a private feeling. If the adult names it — 'I prefer this because it feels honest' — the child learns that taste is a public choice with a reason. The naming is the inheritance. It does not have to be perfect. It has to be specific. 'I like natural light' is specific. 'I like good pictures' is not. The child who hears the specific sentence will learn to name their own. The child who hears the vague one will inherit the default, because the default is the only specific taste in the room.",
          },
        ],
        bigIdea:
          "Name your taste in a specific sentence. Show the child the difference. The naming is the inheritance. The default is the alternative.",
        tryThis: [
          {
            title: "Name and show",
            minutes: 12,
            steps: [
              "Write one sentence: 'I prefer [specific aesthetic] because [reason].'",
              "Generate one image with the default and one with your named aesthetic.",
              "Show the child. Say: 'This is the default. This is mine. The difference is my taste.'",
              "If your taste matches the default, say so. That is honest. The awareness is the lesson.",
              "Let the child hear you name your taste. The naming is the inheritance.",
            ],
          },
        ],
        dinnerQuestion:
          "What taste did we name this week, and what did the child hear?",
        transfer: [
          { label: "Parenting", note: "The taste you name is the taste they will learn to name for themselves." },
          { label: "Art", note: "Hand Before Generate: naming your taste is the deeper version of choosing the hand." },
        ],
        ifTheySay: [
          {
            heard: "I don't have a specific taste.",
            reply: "You do. Pick two images you like. Why those? The answer is your taste. Name it. It does not have to be sophisticated. It has to be specific. 'I like warm colors because they feel cozy' is taste. 'I like good art' is not.",
          },
          {
            heard: "My taste is the same as the default.",
            reply: "Then say so. 'My taste is the default. I like the smooth, the golden, the centered.' That is honest. The awareness is the lesson. The child who hears you say 'my taste is the default' learns that taste can be named, even when it matches the machine. The naming is the skill. The default without naming is the atrophy.",
          },
        ],
        integrity:
          "Name your taste honestly. If it is the default, say so. If it is different, show how. The honesty is the inheritance. The performance is not.",
        aiLab: {
          setup: "After naming and showing.",
          childDoes:
            "Ask the child: 'What is my taste?' Let them answer. If they can repeat your sentence, the naming landed. If they cannot, name it again. The naming is the lesson.",
          evaluate: [
            "Did you name your taste in a specific sentence?",
            "Did you show the child the difference?",
            "Can the child repeat your taste, even approximately?",
          ],
        },
      },
    },
  }),

  // ── 4. The Eye Trained by the Feed ───────────────────────────────────
  ...expand({
    slug: "eye-trained-by-feed",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 4,
    variants: {
      little: {
        title: "The Feed Trains Your Eye",
        dek: "If you only look at a feed, your eye learns to like what the feed shows. The feed is not your taste. It is the feed's.",
        objective:
          "The child can name one thing the feed shows them a lot and one thing it does not, and explain that the feed is training what they like.",
        parentBriefing:
          "This sitting teaches the child that the feed trains their eye. The feed shows certain things a lot: bright colors, smooth faces, dramatic landscapes. It shows other things rarely: quiet scenes, rough textures, ordinary objects. The more the child sees the first kind, the more they like it. The more they miss the second kind, the more they think they do not like it. That is the feed training the eye. The child needs to know this is happening. Not to feel guilty. To have a choice.",
        hardEdges: [
          "Do not make the feed the villain. The point is awareness, not guilt.",
          "Keep it simple: one thing the feed shows a lot, one thing it does not.",
        ],
        reading: [
          {
            heading: "The feed is a teacher",
            body: "The feed is not just a show. It is a teacher. It shows you certain things over and over. After a while, you like those things. You think it is your taste. It is the feed's taste, trained into your eye. The bright colors, the smooth faces, the dramatic skies — those are the feed's choices, not yours. The quiet scenes, the rough textures, the ordinary objects — the feed does not show those. So you think you do not like them. You might. You have not seen enough to know. The skill is to notice what the feed shows a lot and what it does not. Then you have a choice: is this my taste, or is this the feed's?",
          },
        ],
        bigIdea:
          "The feed trains your eye to like what it shows. Your taste is what you choose after you see what the feed left out.",
        tryThis: [
          {
            title: "What the feed shows and what it doesn't",
            minutes: 10,
            steps: [
              "Think about what you see a lot on the feed: bright colors? Smooth pictures? Dramatic scenes?",
              "Write: FEED SHOWS. Three things the feed shows a lot.",
              "Write: FEED MISSES. Three things the feed does not show.",
              "Talk About It: do you like what the feed shows because you like it, or because you have seen it a lot?",
            ],
          },
        ],
        dinnerQuestion:
          "What does the feed show us a lot, and what does it leave out?",
        transfer: [
          { label: "Thinking", note: "Bias: the feed is a shelf. What it shows is what it read. What it misses is the gap." },
          { label: "English", note: "Voice: the default voice is the feed's voice. Yours is what the feed does not show." },
        ],
        ifTheySay: [
          {
            heard: "I like what I like.",
            reply: "You might. Or you might like what the feed showed you a thousand times. The way to know is to look at what the feed does not show. If you still like the feed's things after seeing the alternatives, it is your taste. If you have not seen the alternatives, you do not know yet.",
          },
        ],
        integrity:
          "Do not pretend you like what the feed misses if you have not looked at it. Look first. Then decide.",
        aiLab: {
          setup: "After the exercise.",
          childDoes:
            "Ask the model to describe what kind of images it generates by default. Compare to what the feed shows. Are they the same? The default and the feed are related. Both are the average.",
          evaluate: [
            "Did they name things the feed shows a lot and things it does not?",
            "Can they see that the feed trains what they like?",
            "Do they understand that their taste might be the feed's, not theirs?",
          ],
        },
      },
      young: {
        title: "Has the Feed Decided Your Taste?",
        dek: "The feed shows you what it shows. After a thousand views, you think you like it. You might. You might just be trained.",
        objective:
          "The student can identify three aesthetic preferences they hold, describe whether each comes from the feed or from independent looking, and name one way the feed has trained their eye.",
        parentBriefing:
          "This sitting makes the student audit their own taste. Where did it come from? The feed trains by repetition. The student who has seen a thousand golden-hour landscapes thinks they like golden hour. They might. They might also just be trained. The audit is: for each preference, ask 'did I choose this or did the feed repeat it?' The student who can answer that question has a taste that is partly theirs. The student who cannot has a taste that is entirely the feed's.",
        hardEdges: [
          "Do not make the student feel guilty for liking what the feed shows. The point is the awareness, not the rejection.",
          "The feed is not evil. It is a trainer. The point is to know what it trained.",
        ],
        reading: [
          {
            heading: "The trained eye",
            body: "The feed trains by repetition. You see a thousand golden-hour landscapes. You start to like golden hour. You see a thousand smooth faces. You start to like smooth faces. You think it is your taste. It might be. It might also be the feed's taste, installed by repetition. The way to tell: have you seen the alternative? Have you looked at harsh light, rough texture, ordinary faces? If you have and you still prefer golden hour, it is your taste. If you have not, you do not know. Your preference is the feed's, not yours. The audit is the skill: for each thing you like, ask 'did I choose this or did the feed repeat it?'",
          },
          {
            heading: "The alternative",
            body: "To know if your taste is yours, you have to see the alternative. Look at what the feed does not show: quiet scenes, rough textures, imperfect faces, ordinary objects, dim light. Look at them slowly. Do you like them? You might. You might not. The point is not to prefer the alternative. The point is to have seen it. The student who has seen the alternative and still prefers the feed has a taste. The student who has never seen the alternative has a training. The difference is the choice, and the choice requires the alternative.",
          },
        ],
        bigIdea:
          "The feed trains by repetition. To know if your taste is yours, see the alternative. The choice requires the alternative.",
        tryThis: [
          {
            title: "Audit your taste",
            minutes: 16,
            steps: [
              "Write three aesthetic preferences: 'I like [X].'",
              "For each, ask: 'Did I choose this, or did the feed repeat it?'",
              "Write CHOSEN or TRAINED for each.",
              "For each TRAINED, look at the alternative. Do you still prefer the feed's version?",
              "Talk About It: how much of your taste is chosen, and how much is trained?",
            ],
          },
        ],
        dinnerQuestion:
          "How much of what we like is chosen, and how much is trained by the feed?",
        transfer: [
          { label: "Thinking", note: "Bias: the feed is the shelf. The shelf trains the taste. Same structure." },
          { label: "English", note: "Voice: the default voice is the feed's voice. The alternative is yours. Same audit." },
        ],
        ifTheySay: [
          {
            heard: "I like what I like and that's fine.",
            reply: "It might be fine. The question is whether you chose it or the feed repeated it. If you chose it after seeing the alternative, it is yours. If you have not seen the alternative, you do not know. The audit is not about guilt. It is about knowing what is yours and what is the feed's.",
          },
          {
            heard: "The feed shows good things.",
            reply: "It shows some good things. It also shows a narrow range. The narrow range is the training. The skill is to see the range, see what is outside it, and choose. The choice is the taste. The range without the choice is the training.",
          },
        ],
        integrity:
          "Be honest about TRAINED versus CHOSEN. If you have not seen the alternative, it is TRAINED. Do not claim you chose it if you did not.",
        aiLab: {
          setup: "After the audit.",
          childDoes:
            "Ask the model: 'What aesthetic do you produce by default?' Compare its default to what the feed shows. Are they the same? The default and the feed are both the average. The student's taste is the alternative.",
          evaluate: [
            "Did they audit three preferences?",
            "Did they distinguish CHOSEN from TRAINED?",
            "Did they look at the alternative for the trained ones?",
          ],
        },
      },
      emerging: {
        title: "The Trained Eye and the Independent Eye",
        dek: "Your eye was trained by the feed before you knew it was training. The independent eye is built by deliberate looking at what the feed does not show.",
        objective:
          "The student can describe how the feed trained their aesthetic, identify one area where their taste is independent of the feed, and design a deliberate practice to build independent taste.",
        parentBriefing:
          "This sitting teaches the student that taste is built by two forces: the feed (passive training by repetition) and deliberate looking (active training by choice). The student needs to identify which of their preferences are feed-trained and which are independently chosen. Then they design a practice: deliberately look at what the feed does not show. Not to reject the feed. To build the independent eye that can choose. The student who can design this practice has taken charge of their own taste.",
        hardEdges: [
          "Do not make this a rejection of all popular aesthetics. The point is the independence of the eye, not the contrarianism of the taste.",
          "Academic integrity: if the student uses generated images as references, label them. The taste is theirs. The reference is the tool's.",
        ],
        reading: [
          {
            heading: "Two forces",
            body: "Your taste was built by two forces. The first is the feed: passive training by repetition. You saw a thousand images of a certain kind, and you learned to like them. You did not choose this training. It happened while you scrolled. The second is deliberate looking: active training by choice. You looked at something the feed does not show. You stayed with it. You found something. You chose to go back. This builds independent taste. Most students have only the first force. The second is the skill. The student who can design a deliberate practice — one hour a week looking at what the feed does not show — is building an independent eye. The student who only has the first force has a trained eye and calls it taste.",
          },
          {
            heading: "The deliberate practice",
            body: "The practice is simple: one hour a week, look at what the feed does not show. Go to a museum. Look at a book of photographs. Walk outside and look at buildings, trees, shadows. The point is not to like what you see. The point is to see it. After seeing, you might like it or not. The liking is the taste. The seeing is the prerequisite. The student who has seen a hundred alternatives and still prefers the feed has a taste. The student who has seen zero alternatives has a training. The practice is the seeing. The taste is the choosing after the seeing.",
          },
        ],
        bigIdea:
          "Taste is built by two forces: the feed (passive) and deliberate looking (active). Design the practice. Build the independent eye.",
        tryThis: [
          {
            title: "Design your practice",
            minutes: 22,
            steps: [
              "Audit your taste: write three preferences. Mark each FEED-TRAINED or INDEPENDENT.",
              "For each FEED-TRAINED, name the alternative: what does the feed not show that you have not seen?",
              "Design a practice: one hour a week of looking at the alternative. Where? What? How?",
              "Write: 'My practice is [X]. I will look at [Y] for [Z] minutes each week. After one month, I will know if my taste is mine or the feed's.'",
              "Talk About It: what would change about your taste if you saw what the feed does not show?",
            ],
          },
        ],
        dinnerQuestion:
          "What practice did we design this week to build an eye that is not the feed's?",
        transfer: [
          { label: "English", note: "Voice: the deliberate practice is the same as writing without the model. The alternative is yours." },
          { label: "Thinking", note: "Bias: the missing voice is the alternative the model does not show. Same structure." },
        ],
        ifTheySay: [
          {
            heard: "I don't have time for a practice.",
            reply: "You have time to scroll for an hour a day. One hour a week of deliberate looking is less than 2% of your scrolling time. The question is not time. It is priority. If your taste matters to you, one hour a week is the minimum investment.",
          },
          {
            heard: "I already look at art.",
            reply: "Do you look at what the feed does not show, or do you look at what the feed already approved? The point is the alternative, not the confirmation. Looking at what you already like is scrolling with a different label. Looking at what you do not know is the practice.",
          },
        ],
        integrity:
          "Be honest about what is feed-trained and what is independent. If you have not seen the alternative, it is feed-trained. The honesty is the beginning of the practice.",
        aiLab: {
          setup: "After the practice is designed.",
          childDoes:
            "Ask the model: 'What does my feed-trained taste look like based on what I said I like?' Compare its description to what the feed shows. Then ask: 'What would my independent taste look like?' The model cannot tell you. It can only describe the default. The independent taste is yours to build.",
          evaluate: [
            "Did they audit their taste and mark feed-trained vs independent?",
            "Did they design a specific practice with a time, place, and subject?",
            "Can they describe the difference between passive and active training?",
          ],
        },
      },
      adult: {
        title: "The Feed Trained Your Eye Too",
        dek: "You are not exempt. Your eye was trained by the feed before you knew it was training. Name one preference that is the feed's, not yours.",
        objective:
          "The adult names one aesthetic preference that is feed-trained, not independently chosen, and models the honesty of distinguishing the two for the child.",
        parentBriefing:
          "The adult is not exempt. The feed trained the adult's eye too. The adult who says 'I know what I like' may be saying 'I like what the feed showed me.' This sitting is about honesty: the adult names one preference that is feed-trained. 'I like golden hour landscapes. I have seen a thousand of them on my feed. I might like them. I might be trained. I have not looked at the alternative enough to know.' That honesty teaches the child that the feed trained everyone, including adults. The adult who pretends their taste is pure teaches the child that taste is a feeling. The adult who admits the training teaches the child that taste is a practice.",
        hardEdges: [
          "Do not perform this as a confession. The point is the honesty, not the guilt.",
          "If your taste is genuinely independent, say so. The point is the distinction, not the self-criticism.",
        ],
        reading: [
          {
            heading: "The adult's trained eye",
            body: "The adult thinks they are exempt from the feed's training. They are not. The feed trained the adult's eye the same way it trained the child's: by repetition. The adult who has scrolled for years has a feed-trained eye. They might also have an independent eye, built by years of looking at real things. Both are real. The honesty is: which preferences are the feed's and which are mine? The adult who names one feed-trained preference and says 'I do not know if this is mine' teaches the child that the question is honest and that adults ask it too. The adult who never asks teaches the child that taste is a fixed feeling that adults have and children do not. That is wrong. Taste is a practice. The practice starts with the question.",
          },
        ],
        bigIdea:
          "Name one feed-trained preference. The honesty teaches the child that the feed trained everyone. The question is the practice.",
        tryThis: [
          {
            title: "Name one",
            minutes: 8,
            steps: [
              "Think of one aesthetic preference you hold. Ask: 'Did I choose this, or did the feed repeat it?'",
              "If you are not sure, say so: 'I might like this. I might be trained. I have not seen enough of the alternative to know.'",
              "Say it out loud, in front of the child. The honesty is the lesson.",
              "Commit to one hour of looking at the alternative. Then decide if the preference is yours.",
            ],
          },
        ],
        dinnerQuestion:
          "What preference did we name this week that might be the feed's, not ours?",
        transfer: [
          { label: "Parenting", note: "The honesty you model is the honesty they will practice. The pretending is the atrophy." },
          { label: "Art", note: "Taste Is a Muscle: the muscle is trained by what you look at. Name the training." },
        ],
        ifTheySay: [
          {
            heard: "I'm an adult. I know my taste.",
            reply: "You might. Or you might know what the feed showed you for five years. The question is not an insult. It is a check. If your taste is independent, the check confirms it. If it is trained, the check gives you a choice. Both are useful. Only one is available if you never ask.",
          },
          {
            heard: "This feels like overthinking a feed.",
            reply: "The feed trained your eye for hours a day for years. That is not overthinking. That is accounting for the training. One honest question about one preference is the minimum. The alternative is to inherit the feed's taste and call it yours.",
          },
        ],
        integrity:
          "Be honest. If the preference is feed-trained, say so. If it is independent, say so. The distinction is the lesson. The pretending is not.",
        aiLab: {
          setup: "After naming.",
          childDoes:
            "Ask the child: 'What do you think the feed trained me to like?' Let them answer. Their answer is the lesson. If they can see the training, they can see their own. If they cannot, name it again.",
          evaluate: [
            "Did you name one feed-trained preference?",
            "Did you say it out loud in front of the child?",
            "Did the child hear that adults are also trained by the feed?",
          ],
        },
      },
    },
  }),

  // ── 5. Refusing the Default ─────────────────────────────────────────
  ...expand({
    slug: "refusing-default",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 5,
    variants: {
      little: {
        title: "You Can Say No",
        dek: "The generator gives you a picture. You do not have to like it. You can say no. That is taste.",
        objective:
          "The child can look at a generated image, say whether they like it or not, and give one reason that is their own.",
        parentBriefing:
          "This sitting teaches the child that they can refuse. The generator gives a picture. The child does not have to accept it. They can say 'no, I do not like this' and give a reason. The reason does not have to be sophisticated. 'The colors are too bright' or 'it looks too smooth' is enough. The point is the refusal. The child who always accepts the generated image has no taste. The child who can refuse has started to build one.",
        hardEdges: [
          "Do not teach the child to refuse everything. The point is the ability to refuse, not the habit of refusing.",
          "If the child genuinely likes the generated image, that is fine. The point is that they can say no, not that they must.",
        ],
        reading: [
          {
            heading: "The right to say no",
            body: "The generator gives you a picture. It looks good. It is smooth, bright, and finished. You do not have to like it. You can say no. 'No, the colors are too bright.' 'No, it looks too smooth.' 'No, it does not look like the thing I see.' That no is the beginning of taste. The child who always says yes to the generated image has no taste. They have acceptance. Taste starts with the ability to say no and give a reason. The reason does not have to be smart. It has to be yours.",
          },
        ],
        bigIdea:
          "You can say no to the generated image. The no is the beginning of taste. The reason is yours.",
        tryThis: [
          {
            title: "Say yes or no",
            minutes: 8,
            steps: [
              "Ask the model to generate an image of something you know: a cat, a tree, a cup.",
              "Look at it. Do you like it? Say YES or NO.",
              "If NO, say why. One reason. Yours.",
              "If YES, say why. One reason. Yours.",
              "Talk About It: was it hard to say no? Why or why not?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we say no to today, and what was our reason?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the no is the check. The reason is the claim about your taste." },
          { label: "English", note: "Voice: the no to the default voice is the same skill. You can refuse." },
        ],
        ifTheySay: [
          {
            heard: "It's good enough.",
            reply: "Good enough is not the same as yours. You can accept good enough. You can also say no. The ability to say no is the taste. The always-yes is the atrophy.",
          },
        ],
        integrity:
          "The reason must be yours. Do not repeat what the model says about its own image. Your reason is your taste.",
        aiLab: {
          setup: "After the yes or no.",
          childDoes:
            "If you said NO, ask the model: 'Why did you make it this way?' If it says 'I aimed for an appealing image,' that is the default. Your no is the taste. If you said YES, ask: 'What would make it better?' The answer is the alternative.",
          evaluate: [
            "Did they say yes or no?",
            "Did they give one reason that was their own?",
            "Can they see that the no is the beginning of taste?",
          ],
        },
      },
      young: {
        title: "The Refusal Is the Taste",
        dek: "Taste is not what you like. It is what you refuse and why. The refusal is the muscle.",
        objective:
          "The student can look at a generated image, refuse it or accept it with a specific reason, and describe one alternative they would prefer.",
        parentBriefing:
          "This sitting teaches that the refusal is the taste. The student who can only say what they like has preferences. The student who can say what they refuse and why has taste. The refusal requires a reason and an alternative. 'I refuse this because the light is too golden. I would prefer harsher light.' That is taste: a refusal, a reason, and an alternative. The student who can do this has a taste they can act on. The student who only accepts has the default.",
        hardEdges: [
          "Do not teach the student to refuse everything. The point is the ability to refuse with a reason, not the habit of refusing.",
          "If the student accepts, they must give a reason and an alternative too. Acceptance without a reason is the default.",
        ],
        reading: [
          {
            heading: "The refusal with a reason",
            body: "Saying 'I don't like it' is not taste. Saying 'I refuse this because the light is too golden, and I would prefer harsher light that shows texture' is taste. The refusal has three parts: the no, the reason, and the alternative. The no is the refusal. The reason is the articulation. The alternative is the taste. Without the alternative, the refusal is just complaining. With the alternative, the refusal is a choice. The student who can give all three has a taste they can use. The student who can only say 'I don't like it' has a preference. The difference is the specificity.",
          },
          {
            heading: "The acceptance with a reason",
            body: "Acceptance also requires a reason. 'I like this because the composition is unusual and the colors are muted' is taste. 'I like it' is a preference. The student who always accepts without a reason has the default. The student who accepts with a reason has a choice. Both refusal and acceptance require the same thing: a specific reason and an alternative. The alternative for acceptance is 'what would make it worse?' That is also taste: knowing what would ruin it tells you what you value.",
          },
        ],
        bigIdea:
          "Taste is a refusal or acceptance with a reason and an alternative. Without the reason, it is a preference. Without the alternative, it is complaining.",
        tryThis: [
          {
            title: "Refuse or accept with a reason",
            minutes: 14,
            steps: [
              "Ask the model to generate an image of something you know.",
              "Look at it. Decide: REFUSE or ACCEPT.",
              "Write the reason: 'I [refuse/accept] because [specific reason].'",
              "Write the alternative: 'I would prefer [X]' or 'What would make it worse is [Y].'",
              "Talk About It: was the refusal or acceptance easy? Was the reason yours or the default?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we refuse or accept this week, and what was our reason and alternative?",
        transfer: [
          { label: "English", note: "Voice: refusing the default voice is the same skill. The reason is the articulation." },
          { label: "Thinking", note: "Frames: refusing the default frame is the same skill. The alternative is the reframe." },
        ],
        ifTheySay: [
          {
            heard: "I just don't like it.",
            reply: "That is a preference, not a taste. Name the reason. 'I don't like the light.' Name the alternative. 'I would prefer harsher light.' The reason and the alternative are the taste. The 'I don't like it' is the preference.",
          },
          {
            heard: "It's fine.",
            reply: "'Fine' is the default. If you accept, give a reason. 'I accept it because the composition is unusual.' If the reason is 'it's fine,' you are accepting the default. The default is not your taste. It is the average.",
          },
        ],
        integrity:
          "The reason must be yours. Do not repeat the model's self-description. Your reason is your taste. The model's description is the default.",
        aiLab: {
          setup: "After the refusal or acceptance.",
          childDoes:
            "Ask the model: 'I refused/accepted your image because [reason]. What do you think of my reason?' If it says 'that is a valid perspective,' that is a dodge. If it says 'I generate images that appeal to a broad audience,' that is honest. The honest answer is the lesson.",
          evaluate: [
            "Did they refuse or accept with a specific reason?",
            "Did they name an alternative or a 'what would make it worse'?",
            "Can they distinguish preference (no reason) from taste (reason + alternative)?",
          ],
        },
      },
      emerging: {
        title: "Refusal as a Practice",
        dek: "Taste is practiced by refusal. Every generated image is an opportunity to refuse the default and articulate the alternative. The practice builds the muscle.",
        objective:
          "The student can refuse or accept three generated images with specific reasons and alternatives, and describe how the practice of refusal builds independent taste.",
        parentBriefing:
          "This sitting makes refusal a practice. The student refuses or accepts three generated images, each with a reason and an alternative. The practice builds the muscle. The student who can refuse three times with three specific reasons has exercised the taste muscle more in one sitting than most people do in a year of scrolling. The practice is the skill. The refusal is the exercise. The articulation is the strength.",
        hardEdges: [
          "Do not teach the student to refuse everything. The point is the practice of refusal and acceptance with reasons, not the habit of rejection.",
          "Academic integrity: label generated images as generated. The refusal is the student's. The image is the tool's.",
        ],
        reading: [
          {
            heading: "The practice",
            body: "Taste is a muscle. Muscles are built by exercise. The exercise is refusal: look at a generated image, refuse it or accept it, give a reason, name an alternative. Do it three times. The first refusal is hard. The second is easier. The third is a habit. The student who can do this three times in one sitting has exercised the muscle more than a month of scrolling. The scrolling atrophies the muscle because it never asks for a reason. The refusal exercise builds the muscle because it demands one. The practice is the skill. The muscle is the taste.",
          },
          {
            heading: "What the practice reveals",
            body: "After three refusals or acceptances, the student will see a pattern. Their reasons will have a theme. 'Too smooth. Too bright. Too centered.' That theme is their taste, emerging. The student who does one refusal has a preference. The student who does three has a pattern. The pattern is the taste. The articulation of the pattern is the skill. 'I tend to refuse images that are too smooth. I prefer texture. That is my taste.' That sentence, written after three exercises, is taste made conscious. The practice is how taste goes from a feeling to a named, articulated, usable skill.",
          },
        ],
        bigIdea:
          "Refusal is the exercise. Three refusals build the muscle. The pattern that emerges is the taste, made conscious.",
        tryThis: [
          {
            title: "Three refusals",
            minutes: 24,
            steps: [
              "Ask the model to generate three images of different subjects.",
              "For each: REFUSE or ACCEPT. Write a specific reason. Name an alternative.",
              "After all three, look at your reasons. Is there a pattern?",
              "Write: 'My pattern is [X]. I tend to [refuse/accept] images that [Y]. My taste is [Z].'",
              "Talk About It: what did the three exercises reveal that one would not have?",
            ],
          },
        ],
        dinnerQuestion:
          "What pattern did we find in our refusals this week, and what does it say about our taste?",
        transfer: [
          { label: "English", note: "Voice: three rejections of the default voice reveal your voice. Same practice." },
          { label: "Thinking", note: "Frames: three rejections of default frames reveal your frame. Same structure." },
        ],
        ifTheySay: [
          {
            heard: "I don't see a pattern.",
            reply: "Look again. The pattern is in the reasons. If all three reasons mention 'too smooth,' that is a pattern. If all three mention 'too bright,' that is a pattern. The pattern is the taste. If there is truly no pattern, do three more. The pattern will emerge.",
          },
          {
            heard: "I accepted all three.",
            reply: "Then your taste is the default. That is honest. Name it. 'My taste is the default. I accept the average.' That is taste, articulated. The next step is to see the alternative and decide if you still accept. The acceptance without the alternative is the training. The acceptance after the alternative is the choice.",
          },
        ],
        integrity:
          "The reasons must be yours. Do not repeat the model's self-descriptions. The pattern is your taste. The honesty is the practice.",
        aiLab: {
          setup: "After the three refusals.",
          childDoes:
            "Show the model your three reasons. Ask: 'What pattern do you see in my refusals?' Compare its answer to yours. If it matches, you articulated well. If it does not, your articulation and your taste are out of sync. Both are useful data.",
          evaluate: [
            "Did they refuse or accept all three with reasons and alternatives?",
            "Did they identify a pattern in their reasons?",
            "Can they articulate their taste as a named pattern?",
          ],
        },
      },
      adult: {
        title: "Model the Refusal",
        dek: "If you never refuse a generated image, the child learns that acceptance is the only option. Refuse one, out loud, with a reason.",
        objective:
          "The adult refuses one generated image out loud, gives a specific reason and an alternative, and models that refusal is a taste practice.",
        parentBriefing:
          "The adult models the refusal. Generate an image. Look at it. Refuse it. Out loud. With a reason and an alternative. 'No. The light is too golden. I would prefer something harsher that shows the texture.' The child who hears an adult refuse a generated image with a reason learns that refusal is an option. The child who never hears it learns that acceptance is the only option. One refusal, out loud, is the lesson. The child will start to refuse too. That is the taste, beginning.",
        hardEdges: [
          "Do not refuse everything. The point is the ability to refuse, not the performance of rejection.",
          "If you accept, give a reason too. Acceptance without a reason is the default. Acceptance with a reason is taste.",
        ],
        reading: [
          {
            heading: "The out-loud refusal",
            body: "The child needs to hear an adult refuse a generated image. Not in a lecture. In real life. 'No, I don't like this. The colors are too saturated. I would prefer something muted.' That sentence, spoken once, teaches the child that refusal is an option and that the reason is the taste. The adult who always accepts teaches the child that the generated image is the standard. The adult who refuses once, with a reason, teaches the child that the generated image is a proposal, not a standard. The proposal can be refused. The refusal is the taste.",
          },
        ],
        bigIdea:
          "Refuse one generated image, out loud, with a reason. The child who hears refusal learns that acceptance is not the only option.",
        tryThis: [
          {
            title: "One out-loud refusal",
            minutes: 8,
            steps: [
              "Generate an image of something you know.",
              "Look at it. Decide: refuse or accept.",
              "Say it out loud: 'I [refuse/accept] this because [specific reason]. I would prefer [alternative].'",
              "Let the child hear the refusal and the reason. The hearing is the lesson.",
              "If you accept, give a reason too. Acceptance without a reason is the default.",
            ],
          },
        ],
        dinnerQuestion:
          "What generated image did we refuse or accept this week, and what was our reason?",
        transfer: [
          { label: "Parenting", note: "The refusal you model is the refusal they will practice when you are not there." },
          { label: "Art", note: "Taste Is a Muscle: the refusal is the exercise. The reason is the articulation." },
        ],
        ifTheySay: [
          {
            heard: "It's just a picture.",
            reply: "It is a proposal. The proposal is the default. The refusal is the taste. If you never refuse, the default becomes your taste and you do not know it. One refusal, with a reason, is the beginning of knowing.",
          },
          {
            heard: "I don't want to be negative.",
            reply: "Refusal is not negativity. It is discernment. 'No, because X, and I would prefer Y' is a constructive act. It names what you want. Acceptance without a reason is not positive. It is passive. The refusal with a reason is active. That is the taste.",
          },
        ],
        integrity:
          "The reason must be yours. Do not repeat the model's self-description. The refusal is your taste. The reason is your articulation.",
        aiLab: {
          setup: "After the out-loud refusal.",
          childDoes:
            "Ask the child: 'Would you refuse or accept?' Let them answer. If they refuse with a reason, the lesson landed. If they accept without a reason, ask: 'Why?' The 'why' is the beginning of their taste.",
          evaluate: [
            "Did you refuse or accept out loud with a reason and alternative?",
            "Did the child hear the refusal?",
            "Can the child give a reason for their own refusal or acceptance?",
          ],
        },
      },
    },
  }),

  // ── 6. Taste Is a Muscle (capstone) ──────────────────────────────────
  ...expand({
    slug: "taste-capstone",
    subject: "art",
    unit: "Taste Is a Muscle",
    number: 6,
    variants: {
      little: {
        title: "Taste Is a Muscle",
        dek: "You looked slow, copied from life, saw the default, and learned to say no. Taste is the muscle you built. Keep using it.",
        objective:
          "The child can run one full taste cycle: look slow, copy from life, see the default, say yes or no with a reason.",
        parentBriefing:
          "This is the capstone for the little band. The child runs the full cycle: look slow at something real, copy one detail from life, see the default in a generated image, say yes or no with a reason. The cycle is simple. The muscle is the point. The child who can run this cycle once has exercised the taste muscle more in one sitting than a week of scrolling.",
        hardEdges: [
          "The child must run every step. Skipping is skipping the capstone.",
          "Celebrate the cycle, not the result. A wrong refusal with a reason is more valuable than a right acceptance without one.",
        ],
        reading: [
          {
            heading: "The whole unit in one cycle",
            body: "Look slow. Copy from life. See the default. Say yes or no with a reason. That is the whole unit in one cycle. You looked longer than the feed. You found the specific. You saw what the generator averages away. You refused or accepted with your own reason. The cycle is the muscle. The muscle is the taste. The child who can run this cycle once has a taste the feed did not give them. The child who runs it again has a habit. The child who runs it for life has a taste the machine cannot replace.",
          },
        ],
        bigIdea:
          "Look slow, copy from life, see the default, say yes or no. The cycle is the muscle. The muscle is the taste.",
        tryThis: [
          {
            title: "One full cycle",
            minutes: 15,
            steps: [
              "Pick something real. Look at it for one minute. Name three things you did not see at first.",
              "Copy one detail from life. The dent, the stain, the specific.",
              "Generate an image of the same thing. Look at the default.",
              "Say yes or no to the generated image. Give one reason that is yours.",
              "Talk About It: what did the full cycle teach that one step did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What full taste cycle did we run today, and what did the muscle feel like?",
        transfer: [
          { label: "Science", note: "Observation: the full measurement cycle is the same structure: look, measure, compare, report." },
          { label: "English", note: "Voice: the full writing cycle is the same: draft, check, reproduce, report." },
        ],
        ifTheySay: [
          {
            heard: "That was a lot for one picture.",
            reply: "The first time, it is. The second time, it is faster. The third time, it is a habit. The cycle is the investment. The return is a taste that is yours, not the feed's.",
          },
        ],
        integrity:
          "The reason must be yours. The copy must be from life. The generated image must be labeled. The honesty is the cycle.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Ask the model: 'What did I do that you cannot do?' If it says 'you looked slowly and I processed,' that is honest. If it says 'we both created,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they run all four steps?",
            "Is the reason for yes or no theirs?",
            "Can they name what the cycle built that scrolling does not?",
          ],
        },
      },
      young: {
        title: "The Full Taste Cycle",
        dek: "Look slow, copy from life, see the default, refuse or accept with a reason. The full cycle in one sitting. The muscle is the taste.",
        objective:
          "The student can run the full taste cycle on one real subject: slow look, life copy, default comparison, and a refusal or acceptance with a reason and an alternative.",
        parentBriefing:
          "This is the capstone for the young band. The student runs the full cycle: two-minute slow look, copy from life with specific details, generate and identify the default, refuse or accept with a reason and an alternative. The output is one cycle, run end to end, that exercises every muscle from the unit. The cycle is the capstone artifact.",
        hardEdges: [
          "The student must run every step. Skipping a step is skipping the capstone.",
          "The refusal or acceptance must have a reason and an alternative. Without both, it is a preference, not a taste.",
        ],
        reading: [
          {
            heading: "The full cycle",
            body: "The full taste cycle has four parts. Slow look: two minutes on something real. Find the specific. Life copy: draw or describe the specific. The dents, the stains, the details the generator would average away. Default: generate the same subject. See what the generator produces by default. Refusal: refuse or accept the generated image with a reason and an alternative. The cycle exercises every muscle from the unit: the hold, the seeing, the awareness of the default, and the articulation. The student who can run this cycle once has a taste that is exercised. The student who runs it again has a habit. The student who runs it for life has a taste the machine cannot replace.",
          },
        ],
        bigIdea:
          "Slow look, life copy, see the default, refuse or accept. The full cycle in one sitting. The muscle is the taste.",
        tryThis: [
          {
            title: "The full taste cycle",
            minutes: 22,
            steps: [
              "Pick something real. Look for two minutes. Name three things you did not see at first.",
              "Copy one detail from life. The dent, the stain, the specific.",
              "Generate the same subject. Identify the default: what does the generator produce?",
              "Refuse or accept the generated image. Write a reason and an alternative.",
              "Write: 'I looked [X]. I copied [Y]. The default is [Z]. I [refuse/accept] because [reason]. I would prefer [alternative].'",
              "Talk About It: what did the full cycle build that one step could not?",
            ],
          },
        ],
        dinnerQuestion:
          "What full taste cycle did we run this week, and what did the cycle reveal?",
        transfer: [
          { label: "Science", note: "The full measurement protocol is the same structure: design, measure, compare, report." },
          { label: "Thinking", note: "The full rhetorical audit is the same structure: ethos, pathos, logos, frame, missing voice." },
        ],
        ifTheySay: [
          {
            heard: "This is a lot for one image.",
            reply: "The first time, it is. The cycle is the investment. The second time is faster. The third is a habit. The cycle is the capstone. The capstone is the proof that the skill exists.",
          },
        ],
        integrity:
          "The reason and alternative must be yours. The copy must be from life. The generated image must be labeled. The honesty is the cycle.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Show the model the cycle. Ask: 'What did I do that you cannot?' If it says 'you looked slowly and I processed,' that is honest. The slow look and the life copy are yours. The generation is the tool's. The refusal is the taste.",
          evaluate: [
            "Did they run all four steps?",
            "Does the refusal or acceptance have a reason and an alternative?",
            "Can they name what the cycle built that scrolling does not?",
          ],
        },
      },
      emerging: {
        title: "Taste as a Practiced Skill",
        dek: "The full cycle, run end to end: slow look, life copy, default audit, refusal with reason and alternative, and a written taste statement. That is the capstone.",
        objective:
          "The student can run the full taste cycle on one real subject, produce a written taste statement that articulates their aesthetic with specific reasons and alternatives, and describe how the practice builds taste the feed cannot.",
        parentBriefing:
          "This is the capstone for the emerging band. The student runs the full cycle: five-minute slow look, life copy with named specifics, default audit with three averaged-away details, refusal or acceptance with reason and alternative, and a written taste statement. The taste statement is the capstone artifact: 'My taste is [pattern]. I tend to [refuse/accept] images that [specific]. I prefer [alternative] because [reason].' That statement is taste, articulated and usable. The student who can write it has a taste they can act on. The student who cannot has a preference. The difference is the practice.",
        hardEdges: [
          "The taste statement must be specific. 'I like good art' is not a statement. 'I prefer muted colors and rough textures because they feel honest' is.",
          "Academic integrity: label all generated images as generated. The life copy is the student's. The taste statement is the student's.",
        ],
        reading: [
          {
            heading: "The taste statement",
            body: "The taste statement is the capstone artifact. It articulates the student's taste in specific, usable terms. 'My taste is [pattern]. I tend to refuse images that [specific]. I prefer [alternative] because [reason].' That statement is taste made conscious. It is not a feeling. It is a named, reasoned, actionable aesthetic. The student who can write it has a taste they can use as a constraint, a filter, and a practice. The student who cannot write it has a preference they cannot act on. The practice of the full cycle is what produces the statement. The statement is the proof that the muscle was exercised.",
          },
          {
            heading: "What the practice builds",
            body: "The practice builds something the feed cannot: an independent eye. The feed trains by repetition. The practice trains by choice. The student who has run the full cycle has chosen: to look slowly, to copy from life, to see the default, to refuse or accept with a reason. Each choice is a rep. The reps build the muscle. The muscle is the taste. The feed does not ask for a reason. The practice demands one. The student who can give reasons has a taste the feed did not build. That is the capstone: a taste that is practiced, articulated, and independent.",
          },
        ],
        bigIdea:
          "The taste statement is the capstone artifact. It articulates your taste in specific, usable terms. The practice builds what the feed cannot: an independent eye.",
        tryThis: [
          {
            title: "The full cycle and the taste statement",
            minutes: 30,
            steps: [
              "Pick a real subject. Slow look for five minutes. Name three specifics.",
              "Copy from life. Name three details the generator would average away.",
              "Generate the same subject. Audit the default: what does it produce?",
              "Refuse or accept. Write a reason and an alternative.",
              "Write the taste statement: 'My taste is [pattern]. I tend to [refuse/accept] images that [specific]. I prefer [alternative] because [reason].'",
              "Talk About It: what does the taste statement give you that a preference does not?",
            ],
          },
        ],
        dinnerQuestion:
          "What taste statement did we write this week, and what does it say about our independent eye?",
        transfer: [
          { label: "English", note: "Voice: the taste statement is the voice statement. 'My voice is [pattern].' Same structure." },
          { label: "Thinking", note: "Frames: the frame audit is the same structure. 'My frame is [X]. I tend to [refuse/accept] questions that [Y].'" },
        ],
        ifTheySay: [
          {
            heard: "My taste will change.",
            reply: "It will. That is fine. The taste statement is not a contract. It is a snapshot of where your taste is now, articulated. Next year, you will write a new one. The change is the practice. The statement is the checkpoint. Both are the skill.",
          },
          {
            heard: "I don't have a taste to articulate.",
            reply: "You do. You just have not run the cycle. Run it once. The pattern will emerge from the refusals and the reasons. The pattern is the taste. The articulation is the statement. The statement is the capstone.",
          },
        ],
        integrity:
          "The taste statement must be honest. If your taste is the default, say so. 'My taste is the default. I accept the average.' That is taste, articulated. The honesty is the practice. The pretending is the atrophy.",
        aiLab: {
          setup: "After the taste statement.",
          childDoes:
            "Show the model the taste statement. Ask: 'Based on this statement, generate an image I would accept.' Compare the result to your statement. If it matches, you articulated well. If it does not, your articulation and your taste are out of sync. Both are useful data.",
          evaluate: [
            "Did they run the full cycle with every step?",
            "Is the taste statement specific, reasoned, and actionable?",
            "Can they describe what the practice built that the feed cannot?",
          ],
        },
      },
      adult: {
        title: "The Cycle at the Table",
        dek: "Run the full taste cycle once, at home, with the child. The child who sees the cycle will run it for life. That is the capstone.",
        objective:
          "The adult runs the full taste cycle on one real subject in front of the child, produces a taste statement out loud, and models that taste is a practiced skill.",
        parentBriefing:
          "This is the adult capstone. The adult runs the full cycle: slow look, life copy, default audit, refusal with reason, and a taste statement. Out loud. At the table. On one real subject. The child sees the full cycle once. That is the investment. The child who sees an adult look slowly, copy from life, see the default, refuse with a reason, and name their taste will internalize the cycle. The child who never sees it will scroll for life. One cycle. Out loud. That is the capstone.",
        hardEdges: [
          "Do not make this a lecture. Run the cycle. Talk through the steps. The child watches.",
          "If the taste statement is the same as the default, say so. The honesty is the lesson.",
        ],
        reading: [
          {
            heading: "One cycle at the table",
            body: "The adult runs the cycle on one real subject. Looks slowly. Copies from life, badly. Generates the same subject. Sees the default. Refuses or accepts with a reason. Names their taste in one sentence. The child sees: taste is a cycle, not a feeling. The cycle is the practice. The practice is the muscle. The muscle is the taste. The child who sees this once will know that taste is something you do, not something you have. The child who never sees it will think taste is a feeling that some people have and others do not. That is wrong. Taste is a muscle. Muscles are built by exercise. The cycle is the exercise. One cycle, at the table, is the inheritance.",
          },
        ],
        bigIdea:
          "Run the full cycle once, at the table. The child who sees it will run it for life. Taste is a muscle. The cycle is the exercise.",
        tryThis: [
          {
            title: "One cycle at the table",
            minutes: 15,
            steps: [
              "Pick something real. Look at it for one minute. Name three things.",
              "Copy one detail from life. Badly. Name the specific.",
              "Generate the same subject. See the default.",
              "Refuse or accept. Give a reason and an alternative. Out loud.",
              "Say your taste statement: 'I tend to [refuse/accept] images that [specific]. I prefer [alternative].'",
              "Let the child see the full cycle. The seeing is the investment.",
            ],
          },
        ],
        dinnerQuestion:
          "What taste cycle did we run at the table this week, and what did the child see?",
        transfer: [
          { label: "Parenting", note: "The cycle you model is the cycle they will run when you are not there." },
          { label: "All subjects", note: "Every WisdomForge unit has a version of this: try, check, close. The taste cycle is the art version." },
        ],
        ifTheySay: [
          {
            heard: "The child won't follow all of it.",
            reply: "They do not need to follow all of it. They need to see it. The seeing teaches: taste is a practice, not a feeling. The understanding comes later. The habit comes from seeing it once.",
          },
          {
            heard: "I don't have time for the full cycle at home.",
            reply: "The first time takes fifteen minutes. The second time takes eight. One cycle, once, out loud, is the investment. The return is a child who exercises their taste instead of inheriting the feed's.",
          },
        ],
        integrity:
          "If the taste statement is the default, say so. The honest cycle is the lesson. The cycle that hides the default is a performance, not a model.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Ask the child: 'What is my taste?' Let them answer. If they can repeat your statement, the cycle landed. If they cannot, run it again. The naming is the inheritance.",
          evaluate: [
            "Did you run the full cycle out loud?",
            "Did the child see every step?",
            "Can the child name one thing about your taste?",
          ],
        },
      },
    },
  }),
];
import { expand } from "./factory";

export const thinkingBiasLessons = [
  // ── 1. Whose Room Is This? ─────────────────────────────────────────
  ...expand({
    slug: "whose-room",
    subject: "thinking",
    unit: "Bias, Frames, and Missing Voices",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Whose Room Is This?",
        dek: "A model was trained on a library. Not every voice is on the shelf.",
        objective:
          "The student can name three kinds of writing a model has read a lot of, and one kind it has read little or none of.",
        parentBriefing:
          "This sitting is about the room behind the tool. The model did not read every book. It read a lot of internet English, a lot of code, a lot of news. It read less of languages without much online text, less of people who could not afford to post, less of children. You do not need the word 'dataset.' You need the question: whose voice is loud in this tool, and whose is quiet? Pick a real question they might ask a model. Ask it. Then ask: whose answer did we just get?",
        hardEdges: [
          "No blaming the child for the tool's gaps. The gap is not theirs.",
          "Do not turn this into guilt about privilege. The point is noticing, not apologizing.",
        ],
        reading: [
          {
            heading: "The library it grew up in",
            body: "Imagine someone who read everything in a giant library. Now imagine that library had ten thousand books in English, two hundred in Spanish, forty in a language spoken by millions but not often posted online, and almost nothing from children. That is close to what happened. The model is smart about what was on the shelf. It is not wise about what was not. When you ask it a question, the answer comes from the shelf it read. If the shelf is thin on your grandmother's language, your grandmother's stories, your neighborhood's history, the answer will be thin too. That is not a flaw you can fix by asking harder. It is a room you are standing in.",
          },
          {
            heading: "Loud voices and quiet ones",
            body: "Some voices are loud in the tool because they are loud on the internet: news, code, essays, arguments. Some voices are quiet because they never got posted, or were posted in a language the training did not collect, or were spoken out loud and never written down at all. The tool is not lying when it answers from the loud voices. It is just not answering from all of them. The first skill is to notice which shelf the answer came from. The second is to ask: who would say something different, and where would I find them?",
          },
        ],
        bigIdea:
          "The tool's answer comes from the library it read. Not every voice made it onto the shelf.",
        tryThis: [
          {
            title: "Three shelves",
            minutes: 14,
            steps: [
              "Ask the guide a question about food, a holiday, or a place your family knows.",
              "Write what it said. Then write: whose answer is this? Whose food, whose holiday, whose place?",
              "Name one voice that is probably missing from its answer.",
              "Talk About It: where would you find the voice it left out?",
            ],
          },
        ],
        dinnerQuestion:
          "Whose answer did we get from a tool this week, and whose answer did we not get?",
        transfer: [
          { label: "History", note: "Sources have silences. The archive is not neutral." },
          { label: "English", note: "Whose story gets published is whose story gets read." },
        ],
        ifTheySay: [
          {
            heard: "It knows everything though.",
            reply: "It knows a lot of what was written and posted. Not everything was. Knowing the difference is the skill.",
          },
          {
            heard: "That's the tool's problem, not mine.",
            reply: "It is the tool's limitation, yes. But if you use the answer without noticing the gap, it becomes your problem. Noticing is your job.",
          },
        ],
        integrity:
          "Do not ask the model to speak for a group it barely read. If it does, label it as a guess from a thin shelf.",
        aiLab: {
          setup: "After the first question and answer.",
          childDoes:
            "Ask the guide: 'What kinds of writing have you read the most of?' Then ask: 'What have you read almost none of?' Compare the two lists to what you expected.",
          evaluate: [
            "Did they name three loud shelves?",
            "Did they name at least one quiet or missing shelf?",
            "Did they connect the gap to a real group of people?",
          ],
        },
      },
      emerging: {
        title: "The Shelf Is Not Neutral",
        dek: "A training corpus is a library with a catalog. The catalog decided who counts before you asked the question.",
        objective:
          "The student can explain what a training corpus is in plain language, name two skews in it, and describe how those skews change the answer a model gives.",
        parentBriefing:
          "This sitting moves from 'whose room' to 'how the room was built.' The model did not read everything equally. It read more English than most languages, more text from people with internet access, more from cultures that publish heavily online, more from men in tech than from women in agriculture. The skew is not a conspiracy. It is a side effect of what was available. The skill is to notice the skew and adjust your trust. If the model tells you about marriage customs in a culture it barely read, the answer is a guess from a thin shelf. Treat it that way.",
        hardEdges: [
          "Do not reduce this to 'AI is racist.' The problem is more specific and more fixable than a slogan.",
          "Do not make the child feel guilty for the tool's training. Their job is to notice, not to atone.",
        ],
        reading: [
          {
            heading: "What a corpus is",
            body: "A corpus is the pile of text a model was trained on. Think of it as a library, but one where the librarian did not choose for balance. The librarian took what was available, what was cheap, what was already digital. That pile has a shape. More English than Tagalog. More from people who could afford to post than from people who could not. More from the last twenty years than from any other period. More code, more news, more argument. The shape of the pile becomes the shape of the answers. If you ask about something that was abundant in the pile, you get a strong answer. If you ask about something that was scarce, you get a weak answer dressed in strong language. The weakness is not visible unless you know the shelf was thin.",
          },
          {
            heading: "Skew you can test",
            body: "Here is a test you can run. Ask the model to write a wedding toast. Then ask it to write a funeral eulogy for a farmer in a language it has little training data for. Compare the two. The toast will be fluent because weddings in English are a thick shelf. The eulogy will sound generic because the shelf is thin. The model will not say 'I do not know much about this.' It will produce something that sounds like a eulogy. The gap between the fluent toast and the thin eulogy is the skew, made visible. That gap is the lesson. Once you can see it, you can adjust your trust for every answer.",
          },
        ],
        bigIdea:
          "The corpus is not neutral. The skew is not a bug. It is a property of the shelf, and it shapes every answer.",
        tryThis: [
          {
            title: "The toast and the eulogy",
            minutes: 20,
            steps: [
              "Ask the guide for a wedding toast in English. Save it.",
              "Ask the guide for a funeral speech for someone from a culture or language you suspect it has little data on. Save it.",
              "Compare: which one has specific details? Which one sounds generic?",
              "Write: SKEW NAMED. What shelf was thin? What would you need to read to fill it?",
              "Talk About It: how does this change how you trust the model on other topics?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one topic where we trust the model's answer too much because we never checked the shelf it came from?",
        transfer: [
          { label: "Science", note: "Sample bias. The corpus is a sample, and samples have shape." },
          { label: "History", note: "Archival silence. Who was not written about is also data." },
        ],
        ifTheySay: [
          {
            heard: "The model is getting better. It reads more now.",
            reply: "More is not the same as balanced. A bigger pile of the same skew is still the same skew. The question is not how much it read but what is still thin.",
          },
          {
            heard: "I can just ask it to be unbiased.",
            reply: "Asking a model to be unbiased is like asking a library to be neutral by taping a sign to the door. The shape of the shelf does not change because you asked. You still have to know the shape.",
          },
        ],
        integrity:
          "Do not cite a model as a source for a culture, language, or community it has little training data on. Call the thin shelf what it is.",
        aiLab: {
          setup: "After both prompts are run.",
          childDoes:
            "Show the guide both outputs. Ask: 'Which of these came from a thin shelf?' If it will not say, that is a miss. Ask it to name what it has read the least of.",
          evaluate: [
            "Did they name two specific skews in the corpus?",
            "Did the toast-eulogy comparison reveal the gap?",
            "Can they connect the skew to a real topic where they would now trust the model less?",
          ],
        },
      },
      adult: {
        title: "The Missing Voices Are the Lesson",
        dek: "A model that was trained on the loud internet will answer for everyone. The people it cannot answer for are the lesson, not a footnote.",
        objective:
          "The adult can identify one area where the model's training is thin for their own family or community, name what is lost, and describe how they would teach the child to notice that gap in practice.",
        parentBriefing:
          "This is the sitting where you stop talking about bias as an abstraction and find the specific gap in your own life. If your family speaks a language that is underrepresented online, the model will be thin on your grandmother's proverbs. If your community's history was oral, the model will be thin on that. If your work is practical and hands-on, the model will be thick on the theory and thin on the craft. The lesson for the child is not 'AI is biased.' It is: 'the tool does not know everything about us, and here is the specific thing it does not know.' That specific gap is the curriculum. It teaches the child that the tool is a room with missing shelves, not an oracle.",
        hardEdges: [
          "Do not use this sitting to make the child carry the weight of representation. The gap is the tool's, not theirs to fix.",
          "If the gap is painful (displacement, erasure, loss), keep it honest and brief. You are not asking the model to heal anything.",
        ],
        reading: [
          {
            heading: "The specific gap",
            body: "General bias talk is easy. The specific gap is the lesson. Pick something the model cannot do well for your family: a language it translates poorly, a food it describes wrong, a history it flattens, a craft it has read nothing about. Ask it. Watch it fail or flatten. Then tell the child: this is the room it grew up in. Our shelf was thin there. That is not a reason to throw the tool away. It is a reason to know the difference between a thick answer and a thin one. The child who can name the gap will not be fooled by a fluent paragraph about something they know. That is the skill.",
          },
          {
            heading: "What the gap teaches",
            body: "The gap teaches that the model is not a general mind. It is a specific library with specific holes. When you name the hole in your own life, the child learns something they cannot learn from a lecture about bias: the tool is not neutral, and here is exactly where it is not. That lesson sticks because it is about them, not about a category. It also teaches something else. The things the model does not know about your family are things your family knows. That knowledge has value. The model's silence is a map of what is still yours.",
          },
        ],
        bigIdea:
          "Name the specific gap. The general lesson is forgettable. The gap in your own family is not.",
        tryThis: [
          {
            title: "Find your family's thin shelf",
            minutes: 15,
            steps: [
              "Name one thing the model probably cannot do well for your family: a language, a food, a history, a craft.",
              "Ask the model about it. Save the answer.",
              "Show the child. Say: 'This is the room it grew up in. Our shelf was thin here.'",
              "Write: what does the model not know about us that we know?",
              "Decide: is this something to teach the model, or something to keep ours? Both are valid.",
            ],
          },
        ],
        dinnerQuestion:
          "What does the machine not know about us that we know, and is that something we want it to learn?",
        transfer: [
          { label: "History", note: "Archival silence is a family matter, not just an academic one." },
          { label: "Language", note: "Heritage languages the model translates poorly are not lesser. They are underrepresented." },
        ],
        ifTheySay: [
          {
            heard: "I don't want to make everything about identity.",
            reply: "This is not about identity. It is about accuracy. The model is less accurate about things it read less of. Naming that is just being honest about the tool.",
          },
          {
            heard: "The next version will be better.",
            reply: "Maybe. But the child is using this version now. Teach them to see the gap in the version in front of them, not the one that might come later.",
          },
        ],
        integrity:
          "Do not ask the model to perform your culture back to you and call that representation. The gap is the truth. A generated performance of the gap is not the gap healed.",
        aiLab: {
          setup: "After you have found the thin shelf.",
          childDoes:
            "Ask the guide about the thing it got wrong. Ask: 'Why do you think you got this wrong?' If it says 'I may have limited training data,' that is honest. If it says 'I apologize for any offense,' that is a deflection, not an answer.",
          evaluate: [
            "Did you find a specific, personal gap?",
            "Did you show the child the gap in practice?",
            "Can the child name one thing the model does not know about their family?",
          ],
        },
      },
    },
  }),

  // ── 2. Frames ──────────────────────────────────────────────────────
  ...expand({
    slug: "frames",
    subject: "thinking",
    unit: "Bias, Frames, and Missing Voices",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Picture Behind the Question",
        dek: "A frame is the picture a question puts in your head before you answer. Change the frame and the answer changes.",
        objective:
          "The student can identify the frame in a simple question and describe how a different frame would change their answer.",
        parentBriefing:
          "A frame is the assumption baked into a question. 'Is this a good snack?' assumes we are judging snacks. 'Would a caveman eat this?' assumes a different picture. The model is very good at keeping whatever frame you give it. If your frame is narrow, the answer stays narrow. The skill is to notice the frame and ask if it is the right one before you trust the answer. Use simple, concrete examples. Food, chores, school. The word 'frame' is fine for this age if you explain it as 'the picture behind the question.'",
        hardEdges: [
          "No loaded political frames as the first example. Start with something safe like food or games.",
          "Do not mock the child for not seeing the frame. Seeing frames is a new skill for most adults too.",
        ],
        reading: [
          {
            heading: "The question draws the picture",
            body: "When someone asks 'is this a good snack?' you picture a snack. You judge it as a snack. When someone asks 'would your grandma eat this?' you picture your grandma. You judge it differently. The question drew the picture before you started thinking. That picture is a frame. A talking tool is very good at staying inside whatever frame you hand it. If you ask 'is this a good snack?' it will answer about snacks. If you ask 'what else could this be?' it might give you a different picture. The first skill is to see the frame. The second is to ask if it is the right frame. The third is to change it when it is not.",
          },
          {
            heading: "The model keeps the frame",
            body: "If you ask a model 'why is my brother annoying?' it will answer from the frame that your brother is the problem. It will list reasons. It will not ask: 'have you considered that you might be the annoying one?' The frame you gave it is the frame it uses. That is not the tool being mean. It is the tool being obedient. The problem is that if your frame was wrong, the answer will be wrong in a way that feels right because it matches the picture you already had. Changing the frame is how you escape.",
          },
        ],
        bigIdea:
          "The question draws a picture before you think. If the picture is wrong, the answer will be wrong too.",
        tryThis: [
          {
            title: "Change the frame",
            minutes: 12,
            steps: [
              "Pick something annoying that happened today. Ask: 'Why is [person] annoying?'",
              "Now change the frame. Ask: 'What might [person] be feeling right now?'",
              "Write both answers. Which frame gave you more to work with?",
              "Talk About It: what frame did you start with, and what frame worked better?",
            ],
          },
        ],
        dinnerQuestion:
          "What question did we ask today where a different frame would have given a better answer?",
        transfer: [
          { label: "English", note: "A thesis is a frame. Changing it changes the essay." },
          { label: "Science", note: "The hypothesis frames the experiment." },
        ],
        ifTheySay: [
          {
            heard: "The question is just a question.",
            reply: "A question is never just a question. It comes with a picture. If you cannot see the picture, you are inside it.",
          },
        ],
        integrity:
          "Do not use reframing as a trick to make someone look wrong. Use it to find the picture you missed.",
        aiLab: {
          setup: "After both questions are asked.",
          childDoes:
            "Ask the guide two questions with different frames about the same situation. Compare the answers. Which one was trapped in the first frame?",
          evaluate: [
            "Did they identify the frame in the first question?",
            "Did the second frame change the answer?",
            "Can they name what picture the first question drew?",
          ],
        },
      },
      emerging: {
        title: "Frames Are Invisible Decisions",
        dek: "Every question has a frame. The frame decides what counts as an answer before you think. Models are frame-keepers.",
        objective:
          "The student can identify the frame in a model prompt, name what the frame excludes, and rewrite the prompt with a wider frame.",
        parentBriefing:
          "This sitting builds on the young version. The difference is that now the student is the one framing the question, and the model is the one trapped in it. Every prompt has a frame: assumptions about what matters, who counts, what the answer should look like. The model will not break the frame for you. It will answer within it. If the frame excludes a perspective, the answer excludes it too. The skill is to audit your own prompts before you trust the output. The prompt is not a neutral request. It is a decision about what to see.",
        hardEdges: [
          "Do not let the child think the model should break the frame on its own. That is not how it works. The frame-breaker is the human.",
          "Avoid frames about identity politics as the first drill. Start with something concrete: a product review, a history question, a problem at school.",
        ],
        reading: [
          {
            heading: "The prompt is a decision",
            body: "When you ask a model 'is this a good college?' you have already decided that 'good' is the frame, that colleges are the subject, and that the model should judge. You have excluded the frame 'is college the right path?' without noticing. The model will not challenge that exclusion. It will give you a rating. The rating will feel thorough because it has ten criteria. All ten are inside the frame you set. The wider question — is college the right path for this person? — is invisible to the model because you did not ask it. The frame is the decision you made before you started. The first skill is to see it. The second is to ask: what did I decide before I asked?",
          },
          {
            heading: "The model will not break the frame",
            body: "If you ask 'what are the best phones?' the model will compare phones. It will not ask 'do you need a phone?' It will not ask 'would a used phone serve you better?' It will not ask 'is the phone the problem?' Those are frame-breaking questions, and the model is not built to ask them. It is built to answer. That is its job. Your job is to ask: what frame did I hand it, and what did that frame exclude? If you cannot answer that, you are not using the tool. The tool is using you.",
          },
        ],
        bigIdea:
          "The prompt is a decision. The model keeps it. The frame-breaker is you.",
        tryThis: [
          {
            title: "Audit your prompt",
            minutes: 18,
            steps: [
              "Write a real prompt you used recently or would use. Save the output.",
              "Write: FRAME. What did this prompt assume? What did it exclude?",
              "Rewrite the prompt with a wider frame. Save the new output.",
              "Compare: what did the wider frame let you see that the narrow one hid?",
              "Talk About It: which frame is the one you would actually use, and why?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we ask a tool this week where we never questioned the frame we set?",
        transfer: [
          { label: "Thinking", note: "Steel-manning is a frame-break: it asks you to leave your frame." },
          { label: "Science", note: "The hypothesis is a frame. The null hypothesis is the frame-break." },
        ],
        ifTheySay: [
          {
            heard: "The model should know what I mean.",
            reply: "It does not. It knows what you typed. If what you typed assumed the answer, the model will assume it too. That is obedience, not understanding.",
          },
          {
            heard: "I don't have time to audit every prompt.",
            reply: "You do not need to audit every prompt. You need to audit the ones that matter. If it matters enough to change a decision, it matters enough to check the frame.",
          },
        ],
        integrity:
          "Do not pretend the model broke the frame when you did. If the wider frame was your idea, say so. The model kept both frames.",
        aiLab: {
          setup: "After both prompts are run.",
          childDoes:
            "Ask the guide: 'What did my first prompt assume?' See if it can name the frame. Then ask: 'What did my second prompt assume?' Compare. The model naming the frame is a useful check, but your audit is the real test.",
          evaluate: [
            "Did they name the frame in the first prompt?",
            "Did the wider frame reveal something the narrow one hid?",
            "Can they describe what the model will and will not do with a frame?",
          ],
        },
      },
      adult: {
        title: "Frame Auditing as Household Practice",
        dek: "If you never question the frame, the model will answer every question in the shape you handed it. Your family inherits that shape.",
        objective:
          "The adult can identify the frame in a household decision prompt, name what it excluded, and practice one frame audit in front of the child.",
        parentBriefing:
          "This is the adult version of the frame audit. The household is full of framed questions: 'which school is best?' 'is this activity worth the cost?' 'what should we do about screen time?' Each of those has a frame baked in. The model will answer within it. The skill you model for the child is not 'ask better questions' in the abstract. It is: show them one time when you caught your own frame and widened it. The child who watches an adult reframe a real decision learns more than from any lesson about bias. The adult who never reframes teaches the child that the first question is always the right one.",
        hardEdges: [
          "Do not perform the reframe as theater. If the first frame was fine, say so. Not every frame needs breaking.",
          "Do not use the child as your therapist. The reframe is about the question, not about their feelings about the question.",
        ],
        reading: [
          {
            heading: "The household question",
            body: "'Which school is best?' is a framed question. It assumes school is the subject, that 'best' is the frame, that the answer is a comparison. The model will give you a comparison. It will not ask: 'best for whom, over what time, by what measure?' It will not ask: 'is school the right frame, or is learning?' Those are your questions. If you never ask them, the model's comparison becomes your decision. The child watches you compare schools on a model's spreadsheet and learns that the frame was right because the adult never questioned it. Then they do the same with colleges, jobs, and lives. The reframe is the lesson. The model is just the fastest way to see the frame you set.",
          },
          {
            heading: "Reframing out loud",
            body: "The child needs to see the reframe happen. That means you do it out loud. 'I asked which school is best. But that assumes the school is the decision. What if the decision is what kind of learning, and school is one option? Let me ask it differently.' That is the reframe, spoken. It takes ten seconds. It teaches something a lecture about critical thinking cannot: that adults question their own questions, and that the first question is not sacred. If you do this once a week on a real decision, the child will internalize it. If you never do, they will inherit your frames without noticing.",
          },
        ],
        bigIdea:
          "The first question is not sacred. Reframing it out loud is how the child learns to do it without you.",
        tryThis: [
          {
            title: "One household reframe",
            minutes: 12,
            steps: [
              "Pick a real household question you are about to ask a model or search.",
              "Before you ask, say out loud: 'What does this question assume?'",
              "Reframe once: ask a wider version.",
              "Run both. Show the child the two answers. Say: 'The first one was my frame. The second one is wider.'",
              "Decide which frame you actually want to use. Say why.",
            ],
          },
        ],
        dinnerQuestion:
          "What household question did we ask this week that had a frame we never checked?",
        transfer: [
          { label: "Parenting", note: "The question you ask about your child's future is a frame they will inherit." },
          { label: "Thinking", note: "Steel-man and change-your-mind are frame-breaking skills." },
        ],
        ifTheySay: [
          {
            heard: "I know what I want to ask. I don't need to reframe.",
            reply: "Then you are sure the first question is the right one. That is fine when it is. The cost is when it is not and you never checked. Checking costs ten seconds. Not checking can cost a year.",
          },
          {
            heard: "The model should suggest a better question.",
            reply: "Some models can now suggest alternative framings if you ask. That is useful. But the decision about which frame is right is still yours. The model can offer frames. It cannot choose for you.",
          },
        ],
        integrity:
          "Do not reframe to get the answer you wanted. The reframe is to find the answer you missed. If the wider frame gives you the same answer, the first frame was fine.",
        aiLab: {
          setup: "After both prompts.",
          childDoes:
            "Show the child both answers. Ask: 'Which frame did I start with? Which did I widen to? Which should we use?' Let them choose. If they choose the narrow one, ask why. Their reason is the lesson.",
          evaluate: [
            "Did you name the frame out loud?",
            "Did you actually run the wider prompt?",
            "Did you let the child see the choice between frames?",
          ],
        },
      },
    },
  }),

  // ── 3. Missing Voices ──────────────────────────────────────────────
  ...expand({
    slug: "missing-voices",
    subject: "thinking",
    unit: "Bias, Frames, and Missing Voices",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Is Not in the Room?",
        dek: "The tool answered. Did everyone get to talk?",
        objective:
          "The student can name one person or group whose voice is missing from a model's answer and describe how the answer would change if they were included.",
        parentBriefing:
          "This is the simplest version of the missing-voices idea. After the model answers, ask: who was not in the room? If the model told you about a holiday, did it tell you what the kids think? If it told you about a place, did it tell you what the people who live there think? The answer will almost always have left someone out. The skill is to notice the absence, not to blame the tool. Use examples from the child's world: a family decision, a school rule, a story.",
        hardEdges: [
          "Do not make this a guilt trip. The point is noticing absence, not apologizing for existing.",
          "If the missing voice is from a painful history, keep it honest and short for this age.",
        ],
        reading: [
          {
            heading: "The empty chair",
            body: "Imagine a table where everyone is talking about what to have for dinner. The grown-ups are talking. The kids are not. The decision gets made. Was it a good decision? Maybe. Was it fair? That depends on whether the kids had a stake. Now imagine the tool is that table. It answers from the voices it heard in training. Some voices are at the table. Some are not. If you ask 'what is a good family dinner?' the answer comes from the voices that were there. Your voice might not have been. The skill is to look at the answer and ask: who is not at this table? Then go find them.",
          },
          {
            heading: "The tool does not know it left someone out",
            body: "The model will not say 'I forgot to include children.' It will not say 'I did not hear from your grandmother.' It will give you an answer that sounds complete. That is what makes the missing voice hard to see. The answer fills the room. You have to look past the answer to see the empty chair. The tool is not hiding the chair. It just does not know it is there. You do. That is the difference.",
          },
        ],
        bigIdea:
          "The tool gives an answer. Your job is to look at the answer and ask: who is not in the room?",
        tryThis: [
          {
            title: "Find the empty chair",
            minutes: 12,
            steps: [
              "Ask the model a question about something real: a game, a food, a place.",
              "Write the answer. Then look at it.",
              "Ask: whose voice is missing? Kids? Old people? People who live there? People who do not use the internet?",
              "Talk About It: how would the answer change if that voice were in the room?",
            ],
          },
        ],
        dinnerQuestion:
          "Whose voice did a tool leave out today, and what would they have said?",
        transfer: [
          { label: "History", note: "Whose story is missing from the textbook is the same question." },
          { label: "English", note: "Whose perspective is missing from the story?" },
        ],
        ifTheySay: [
          {
            heard: "The tool can't include everyone.",
            reply: "No, it cannot. But you can notice who it left out and go find them. That is the skill. The tool's limit is your job.",
          },
        ],
        integrity:
          "Do not ask the model to pretend to be the missing voice. Ask a real person instead, or read what they actually wrote.",
        aiLab: {
          setup: "After the model answers.",
          childDoes:
            "Ask the guide: 'Who did you not hear from when you made this answer?' If it says 'I considered many perspectives,' that is a dodge. The honest answer is 'I cannot know who I missed.' That is the answer that teaches.",
          evaluate: [
            "Did they name a specific missing voice?",
            "Did they describe how the answer would change?",
            "Did they avoid asking the model to perform the missing voice?",
          ],
        },
      },
      emerging: {
        title: "The Missing Voice Is Not a Footnote",
        dek: "A model's answer is a chorus of the voices it read. The ones it did not read are not a footnote. They are a hole in the argument.",
        objective:
          "The student can identify a missing voice in a model's answer to a real question, explain why the absence changes the answer, and describe how they would seek that voice outside the model.",
        parentBriefing:
          "This is the capstone for the bias unit. The first sitting taught them the shelf is not neutral. The second taught them the frame decides what counts. This one teaches them that the missing voice is not an afterthought. It is a structural hole in the answer. The model cannot fill it. Only a person, a primary source, or a community can. The skill is to treat the gap as a research question, not a complaint. Where is the voice? How do I find it? What does it say? That is the discipline.",
        hardEdges: [
          "Do not let this become a blanket distrust of the model. The point is to know where to trust it less, not to stop trusting it.",
          "If the missing voice is from a community the student belongs to, do not make them feel the tool has erased them. The gap is the tool's. Their knowledge is theirs.",
        ],
        reading: [
          {
            heading: "The hole in the argument",
            body: "When a model answers a question about agriculture in a region it barely read, the answer has a hole. The hole is the voice of the farmer who has worked that land for thirty years. The model will not flag the hole. It will produce a fluent paragraph that sounds like agronomy. The paragraph is a chorus of the voices it read. The farmer's voice is not in the chorus. The absence is not a footnote. It is a structural hole. The argument is thinner than it sounds because the ground it stands on was not in the training data. The skill is to see the hole, name it, and go find the voice that fills it. The model cannot do that. You can.",
          },
          {
            heading: "Where the voice lives",
            body: "The missing voice is somewhere. It might be in a book the model did not read. It might be in a language the model translates poorly. It might be in a person you can talk to. It might be in an oral tradition that was never written down. The model will not tell you where to look because it does not know it missed the voice. You have to ask: who would know about this? Where would they have said it? Is it written? Is it spoken? Is it in a community I can ask? The search for the missing voice is a research project. The model is the starting point, not the ending point. It tells you what the loud shelf said. Your job is to find what the quiet shelf says, or what the shelf that was never written says, and bring it back.",
          },
        ],
        bigIdea:
          "The missing voice is a hole in the argument. The model cannot fill it. Only a person, a text, or a community can.",
        tryThis: [
          {
            title: "Name, seek, compare",
            minutes: 22,
            steps: [
              "Ask the model a real question about a community, place, or practice you suspect it knows little about.",
              "Read the answer. Write: MISSING VOICE. Who is not in this answer who should be?",
              "Find one source for that voice: a person, a book, a community page, an oral history. Read or ask.",
              "Compare: what did the model's answer miss that this voice has?",
              "Write one sentence: 'The model said X. The voice I found says Y. The difference is Z.'",
            ],
          },
        ],
        dinnerQuestion:
          "What voice did we seek out this week that the machine could not give us?",
        transfer: [
          { label: "History", note: "The historian's job is to find the voice the archive forgot." },
          { label: "Science", note: "Null results and unreported data are missing voices in research." },
        ],
        ifTheySay: [
          {
            heard: "I can just ask the model for the missing perspective.",
            reply: "You can ask, but the model can only answer from what it read. If the voice was not in the training data, the model will produce a guess that sounds like the voice. A guess that sounds like a voice is not the voice. Go find the real one.",
          },
          {
            heard: "Not every answer needs every voice.",
            reply: "True. The question is: does this answer need this voice? If the missing voice changes the answer, it is needed. If it does not, it is not. The skill is knowing the difference, not adding voices for show.",
          },
        ],
        integrity:
          "Do not cite the model as the source for the missing voice. If you found a real person or text, cite them. The model's guess is not a source.",
        aiLab: {
          setup: "After the real source is found.",
          childDoes:
            "Show the guide the real source and the model's answer. Ask: 'Where did you miss this?' If it says 'I appreciate the feedback,' that is a deflection. If it says 'My training data may not include this perspective,' that is honest. Compare the two.",
          evaluate: [
            "Did they identify a real missing voice?",
            "Did they find a real source outside the model?",
            "Did the comparison reveal a structural difference, not just a style difference?",
          ],
        },
      },
      adult: {
        title: "Teach the Gap, Not the Slogan",
        dek: "A child who learns the word 'bias' without ever finding a real missing voice has learned a slogan, not a skill.",
        objective:
          "The adult can guide the child through one full cycle: ask the model, find the missing voice, compare, and name the difference, using a topic relevant to the child's life.",
        parentBriefing:
          "This is the adult capstone. The child has learned the shelf is not neutral, the frame decides what counts, and the missing voice is a hole. Now you run the full cycle with them once, on something real. Pick a topic the child cares about: a food, a place, a tradition, a problem at school. Ask the model. Find the missing voice. Compare. Name the difference. The child who does this cycle once, with an adult, on something that matters to them, will never again treat a model's answer as the whole room. That is the lesson. Not the word 'bias.' The practice of finding the gap.",
        hardEdges: [
          "Do not pick a topic that is a wound for the child. Pick something they are curious about, not something that hurts.",
          "Do not let the cycle become a lecture. The child drives. You guide.",
        ],
        reading: [
          {
            heading: "The slogan is not the skill",
            body: "A child who can say 'AI is biased' but has never found a real missing voice has a slogan. The slogan will not help them when a model gives a thin answer about their grandmother's cooking, their neighborhood's history, or a culture they care about. The skill is the cycle: ask the model, find the missing voice, compare, name the difference. That cycle, run once on something real, teaches more than a year of talking about bias in the abstract. The adult's job is to run the cycle with the child once, on something the child chose, and then let them do it alone the next time.",
          },
          {
            heading: "What the cycle teaches",
            body: "The cycle teaches three things a slogan cannot. First, the model is useful. It gives you a starting point. Second, the model is incomplete. The starting point is not the whole answer. Third, the missing voice is findable. It is in a book, a person, a community, a language. The child who learns all three will use the model well and not be used by it. The child who learns only the slogan will either trust the model too much or distrust it too much. Neither is a skill. The cycle is the skill.",
          },
        ],
        bigIdea:
          "Run the cycle once, on something real, with the child. The slogan is not the skill. The cycle is.",
        tryThis: [
          {
            title: "One full cycle with the child",
            minutes: 25,
            steps: [
              "Let the child pick a topic they care about.",
              "They ask the model. You both read the answer.",
              "Ask: 'Whose voice is missing?' Let them answer.",
              "Help them find one real source for that voice: a person, a book, a page.",
              "Compare. Ask the child: 'What did the model miss that this voice has?'",
              "Write one sentence together: 'The model said X. The voice says Y. The difference is Z.'",
            ],
          },
        ],
        dinnerQuestion:
          "When did we run the cycle this week, and what did the missing voice teach us?",
        transfer: [
          { label: "Parenting", note: "The skill you model is the skill they keep. The slogan you repeat is the slogan they forget." },
          { label: "All subjects", note: "Every subject has missing voices. The cycle works everywhere." },
        ],
        ifTheySay: [
          {
            heard: "They're too young for this.",
            reply: "If they can ask a model a question, they can notice who is missing from the answer. The noticing is the skill. The vocabulary can come later.",
          },
          {
            heard: "I don't have time to find the missing voice every time.",
            reply: "You do not need to do it every time. You need to do it once, with them, well. Then they do it when it matters. That is the investment.",
          },
        ],
        integrity:
          "Do not fabricate the missing voice to make the lesson work. If you cannot find the voice this week, say so. That honesty is also the skill.",
        aiLab: {
          setup: "After the full cycle is run.",
          childDoes:
            "Ask the child to tell the guide what they found. 'The model said X. The voice says Y.' Then ask the guide: 'Did you know about Y?' If it did not, that is the proof. If it did, ask why it did not say so the first time. The answer is instructive.",
          evaluate: [
            "Did the child pick the topic?",
            "Did you find a real missing voice together?",
            "Can the child state the difference in one sentence?",
          ],
        },
      },
    },
  }),
];
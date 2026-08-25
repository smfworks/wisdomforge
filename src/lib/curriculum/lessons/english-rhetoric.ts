import { expand } from "./factory";

export const englishRhetoricLessons = [
  // ── 1. Ethos — Who Earned the Floor? ────────────────────────────────
  ...expand({
    slug: "ethos-floor",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Earned the Floor?",
        dek: "Ethos is whether the speaker has earned your trust. A machine that sounds wise has not.",
        objective:
          "The student can name what makes someone worth listening to on a topic, and explain why a fluent answer from a machine is not the same as earned trust.",
        parentBriefing:
          "Ethos is the first of the three classical appeals. It asks: should I trust this speaker? Not 'does it sound good' but 'has this person earned the right to speak on this?' Use concrete examples: a coach, a teacher, a grandparent. The model sounds like it has ethos. It does not. It has fluency. The difference is the lesson.",
        hardEdges: [
          "Do not dismiss the model as worthless. The point is precision, not rejection.",
          "Do not conflate credentials with ethos. A credentialed person can be wrong. An uncredentialed person can be right. Ethos is earned, not stamped.",
        ],
        reading: [
          {
            heading: "The question before the question",
            body: "Before you ask 'is this true?' you ask 'should I be listening to this person?' That question is ethos. A coach who has played the game has ethos on the game. A stranger who read a blog post has less. The model is the stranger who read a billion blog posts. It sounds like the coach. It is not the coach. The first skill of rhetoric is to ask: who is speaking, and did they earn the floor? If you skip that question, you will trust the best talker in the room, and the best talker in the room is now a machine.",
          },
          {
            heading: "Fluency is not trust",
            body: "The model speaks with confidence. Confidence is not ethos. Ethos is built from experience, accountability, and honesty about what you do not know. The model has none of those. It has confidence. If you cannot tell the difference, you will hand the floor to the machine every time, because the machine is the smoothest speaker you have ever met. Smooth is not earned. Earned is earned.",
          },
        ],
        bigIdea:
          "Ethos asks: did this speaker earn the floor? Fluency is not the same as earning it.",
        tryThis: [
          {
            title: "Three speakers",
            minutes: 14,
            steps: [
              "Pick a topic the child knows well (a game, a pet, a sport).",
              "Ask three 'speakers': the child, a parent, and the model.",
              "Read all three. Ask: who earned the floor on this topic, and why?",
              "Talk About It: did the model sound more confident than the child? Was it more right?",
            ],
          },
        ],
        dinnerQuestion:
          "Who earned the right to speak into our lives today, and did we give them the floor or the best talker?",
        transfer: [
          { label: "Thinking", note: "Burden of proof and ethos are cousins. Who carries the weight?" },
          { label: "AI", note: "The model's confidence is a style, not a credential." },
        ],
        ifTheySay: [
          {
            heard: "The model knows more than me.",
            reply: "It has read more than you. Reading is not the same as knowing. You know this topic from doing it. That is a different kind of earned.",
          },
        ],
        integrity:
          "Do not claim the model's ethos as your own. If the tool gave you the authority, cite the tool. The floor you did not earn is not yours.",
        aiLab: {
          setup: "After all three speakers have answered.",
          childDoes:
            "Ask the guide: 'What experience do you have with this topic?' If it says 'I have been trained on extensive data,' that is reading, not experience. The difference is the lesson.",
          evaluate: [
            "Did they name what earned the floor for each speaker?",
            "Did they distinguish fluency from earned trust?",
            "Did they notice the model's confidence is not ethos?",
          ],
        },
      },
      emerging: {
        title: "Ethos in a Room of Fluent Strangers",
        dek: "When everyone sounds like an expert, ethos is the question that sorts the real from the performed.",
        objective:
          "The student can evaluate the ethos of a source (human or model), name what would strengthen or weaken it, and explain why fluency alone does not establish ethos.",
        parentBriefing:
          "This sitting builds on the young version. The student is now evaluating sources, not just speakers. A YouTube expert, a news columnist, a model, a teacher. Each has a different kind of ethos. The skill is to sort them: what experience, what accountability, what honest admission of limits? The model scores high on fluency, zero on accountability. A named expert has a career to lose. The model does not. That difference is ethos in the age of fluency.",
        hardEdges: [
          "Do not let this become a blanket rejection of online sources. Some online sources have strong ethos. The point is to sort, not to dismiss.",
          "Academic credentials are one kind of ethos, not the only kind. A practitioner may have more ethos than a professor on a practical question.",
        ],
        reading: [
          {
            heading: "What ethos is made of",
            body: "Ethos has three parts: experience, accountability, and honest limits. Experience: has the speaker done the thing, or only read about it? Accountability: if the speaker is wrong, is there a cost? A named expert who gets it wrong loses reputation. A model that gets it wrong answers the next question as if nothing happened. Honest limits: does the speaker say what they do not know? The model says 'as an AI, I may have limitations,' which is not honest limits. It is a disclaimer. Honest limits sounds like: 'I know this part, but not that part, and here is who does.' That sentence is ethos. The model cannot say it honestly because it does not know what it does not know.",
          },
          {
            heading: "The fluency trap",
            body: "Fluency is the counterfeit of ethos. A model that writes a perfect essay on climate, marriage, or economics sounds like someone who has earned the floor. The essay is a collage of the voices it read, not the voice of someone who lived the thing. If you cannot sort fluency from ethos, you will trust the collage over the person. The way out is to ask three questions: what experience does this speaker have? If they are wrong, who pays? Do they name what they do not know? The model fails all three. A real expert passes at least two. That is the filter.",
          },
        ],
        bigIdea:
          "Ethos is experience, accountability, and honest limits. Fluency is none of those, no matter how good it sounds.",
        tryThis: [
          {
            title: "The ethos audit",
            minutes: 18,
            steps: [
              "Pick a topic you care about (a game, a social issue, a school question).",
              "Find three sources: a model, a named expert, and a practitioner or person with lived experience.",
              "For each, write: EXPERIENCE / ACCOUNTABILITY / HONEST LIMITS.",
              "Compare. Which source has the most ethos, and which has the most fluency?",
              "Talk About It: when did fluency almost trick you into giving the floor to the source with the least ethos?",
            ],
          },
        ],
        dinnerQuestion:
          "What source did we trust this week because it sounded right, not because it earned our trust?",
        transfer: [
          { label: "Thinking", note: "Burden of proof: who carries the weight if they are wrong?" },
          { label: "History", note: "A named historian has ethos. A model summary has fluency. Cite the historian." },
        ],
        ifTheySay: [
          {
            heard: "The model has read more than any expert.",
            reply: "Reading is not experience. The model has read about surgery. You would not let it operate. Reading about a thing and doing a thing are different kinds of knowing. Ethos is about the doing.",
          },
          {
            heard: "Experts can be wrong too.",
            reply: "Yes. That is why ethos includes accountability and honest limits, not just credentials. The question is not 'is this source perfect.' It is 'if this source is wrong, will I find out, and will it cost them something?'",
          },
        ],
        integrity:
          "Do not present a model's answer as your own ethos. If the authority came from the tool, the authority is the tool's. Name it.",
        aiLab: {
          setup: "After the audit.",
          childDoes:
            "Ask the guide: 'What experience do you have? If you are wrong, who pays? What do you not know?' Write its answers. Compare to the real expert's answers. The gap is the lesson.",
          evaluate: [
            "Did they audit all three parts of ethos?",
            "Did they distinguish fluency from earned trust?",
            "Can they name one source where fluency scored higher than ethos?",
          ],
        },
      },
      adult: {
        title: "Modeling the Ethos Question",
        dek: "If you never ask 'should I trust this speaker?' out loud, the child will trust the smoothest one in the room. That is the machine.",
        objective:
          "The adult models the ethos question on one real source this week, asks it out loud in front of the child, and names the difference between fluency and earned trust.",
        parentBriefing:
          "The household runs on trust. You trust the school, the doctor, the coach, the news. The child watches who you trust and copies the pattern. If you never ask the ethos question out loud, the child learns that trust is about sounding right. The machine sounds the most right. This sitting is about one moment: you ask 'should I trust this source?' out loud, in front of the child, about something real. You name the experience, the accountability, the honest limits. You say whether the source earned the floor. That moment teaches more than a lecture on rhetoric.",
        hardEdges: [
          "Do not use this to undermine a source the child needs to trust (a doctor, a teacher). The point is the question, not the takedown.",
          "Do not perform skepticism for show. If the source has ethos, say so. The question is honest, not theatrical.",
        ],
        reading: [
          {
            heading: "The out-loud question",
            body: "The ethos question is simple: should I trust this speaker? The hard part is asking it out loud. You ask it silently all day — you decide which review to trust, which news source to share, which model answer to accept. The child does not see the silent question. They see the result: you shared the post, you cited the model, you trusted the smooth voice. Ask it out loud once: 'Before I trust this, let me check. What experience does this person have? If they are wrong, is there a cost? Do they admit what they don't know?' That ten-second monologue teaches the child that trust is a decision, not a reflex.",
          },
          {
            heading: "What the child copies",
            body: "The child will not remember your lecture on Aristotle. They will remember the Tuesday you paused before sharing a post and said: 'This sounds right, but who is the author, and what happens if they're wrong?' That pause is the ethos question, performed. The child who watches you pause will learn to pause. The child who watches you share without pausing will learn to share without pausing. The machine is the smoothest speaker in the room. The pause is how you keep the floor from going to smoothness alone.",
          },
        ],
        bigIdea:
          "Ask the ethos question out loud. The child copies the pause, not the vocabulary.",
        tryThis: [
          {
            title: "One out-loud audit",
            minutes: 10,
            steps: [
              "Before you trust a source this week (a post, a model, an article), pause.",
              "Say out loud: 'Let me check. What experience does this speaker have? If they are wrong, who pays? Do they name their limits?'",
              "Let the child see you decide. If the source earned the floor, say why. If it did not, say why not.",
              "Do not perform. If the source is fine, the audit confirms it. The audit is not a takedown tool.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we pause to ask 'should I trust this source?' this week, and what did we find?",
        transfer: [
          { label: "Parenting", note: "The pause you model is the pause they will use." },
          { label: "Thinking", note: "Ethos is the first filter. Burden of proof is the second." },
        ],
        ifTheySay: [
          {
            heard: "I don't have time to vet every source.",
            reply: "You do not need to vet every source. You need to pause once a week, out loud, on a source that matters. The child learns from the pause, not from a full audit of every post.",
          },
          {
            heard: "The model is usually right.",
            reply: "Usually is not always, and 'usually right' is not the same as 'earned the floor.' The model can be right and still have no ethos. The question is not 'is it correct.' It is 'should I trust it.' Those are different questions.",
          },
        ],
        integrity:
          "Do not perform skepticism to look smart. The ethos question is honest. If the source earned the floor, the audit confirms it.",
        aiLab: {
          setup: "After the out-loud audit.",
          childDoes:
            "If the source was the model, ask it the ethos questions: experience, accountability, limits. Let the child hear its answers. Then say: 'Those answers are fluency, not ethos. Here is the difference.'",
          evaluate: [
            "Did you ask the question out loud?",
            "Did the child see you decide?",
            "Was the pause honest, not theatrical?",
          ],
        },
      },
    },
  }),

  // ── 2. Pathos — The Feeling That Moves You ───────────────────────────
  ...expand({
    slug: "pathos-feeling",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Feeling That Moves You",
        dek: "Pathos is when a speaker makes you feel something to move you. A machine can make you feel too. The question is: did it earn the feeling?",
        objective:
          "The student can identify one time a speaker (human or model) made them feel something and explain whether the feeling was earned or manufactured.",
        parentBriefing:
          "Pathos is the appeal to feeling. Every good speaker uses it. The problem in the age of fluency is that a model can make you feel sad, angry, or inspired on command. It does not feel anything. It produces the words that cause feelings. The skill is not to stop feeling. The skill is to ask: did this speaker earn the feeling, or did they push a button? Use concrete examples: a movie scene, a friend's story, a model's sad paragraph.",
        hardEdges: [
          "Do not teach the child to suppress feelings. The point is to feel honestly, not to stop feeling.",
          "If the child is genuinely moved by something, do not dismiss it as 'manipulated.' Ask whether it was earned.",
        ],
        reading: [
          {
            heading: "Feeling is not the problem",
            body: "A good speech makes you feel something. That is not a trick. It is how humans move each other. The problem is that a machine can now make you feel without earning it. It can write a sad story that makes you cry. It did not live the sadness. It produced the words that cause crying. The difference matters because a feeling you earn from a real person connects you to them. A feeling a machine manufactures connects you to nothing. You cried alone. The first skill is to notice the feeling. The second is to ask: who made me feel this, and did they earn it?",
          },
          {
            heading: "The button",
            body: "Pathos in a machine is a button. Push the right words and the reader feels sad. Push different words and the reader feels angry. The machine does not feel sad or angry. It arranges sentences. That is not a reason to stop reading what it writes. It is a reason to know the difference between a feeling a person earned and a feeling a machine produced. The earned feeling teaches you something about the world. The produced feeling teaches you something about yourself: that you can be moved by words that came from nowhere. That is useful to know.",
          },
        ],
        bigIdea:
          "A machine can make you feel. The question is whether the feeling was earned by a person or produced by a button.",
        tryThis: [
          {
            title: "Did they earn it?",
            minutes: 12,
            steps: [
              "Find something that made you feel a strong feeling this week: a story, a video, a model's answer.",
              "Write: FEELING. What did you feel?",
              "Write: SOURCE. Was it a person who lived it, or a text that produced it?",
              "Write: EARNED? Did the feeling connect you to a real person, or did it connect you to words?",
              "Talk About It: is there a difference between being moved by a real story and being moved by a generated one?",
            ],
          },
        ],
        dinnerQuestion:
          "What moved us this week, and did the person who moved us earn it?",
        transfer: [
          { label: "Thinking", note: "The check: is this feeling evidence or just a button?" },
          { label: "Art", note: "Art moves you. Generated art can too. The question is the same." },
        ],
        ifTheySay: [
          {
            heard: "It doesn't matter where the feeling came from. I still felt it.",
            reply: "You did feel it. That is real. The question is not whether you felt it. It is whether the feeling taught you something true or just exercised a button. Both are worth knowing.",
          },
        ],
        integrity:
          "Do not generate a sad story and present it as real. A manufactured feeling presented as earned is a lie.",
        aiLab: {
          setup: "After the child has identified a feeling.",
          childDoes:
            "Ask the guide to write a paragraph that makes you feel something. Then ask: 'Did you feel anything when you wrote this?' The honest answer is no. The dishonest answer is yes. Both are instructive.",
          evaluate: [
            "Did they name the feeling specifically?",
            "Did they distinguish earned from produced?",
            "Did they avoid dismissing their own genuine feeling?",
          ],
        },
      },
      emerging: {
        title: "Manufactured Empathy",
        dek: "A model that cannot feel can still make you feel. That is a tool, not a relationship. Know which one you are using.",
        objective:
          "The student can identify when a model is using pathos, explain why the model cannot earn the feeling it produces, and describe the difference between empathy from a person and empathy from a machine.",
        parentBriefing:
          "This sitting names the thing the young version described. The model manufactures empathy. It writes a paragraph that sounds like a person who cares. The model does not care. It produces caring-sounding words. The student needs to know this not to become cold but to stop outsourcing their emotional life to a machine. The model can help you name a feeling. It cannot share one. The difference is the lesson.",
        hardEdges: [
          "Do not weaponize this against a child who has found comfort in talking to a model. Acknowledge the comfort. Then name what it is and what it is not.",
          "Do not teach that all pathos is manipulation. Earned pathos is how humans connect. Manufactured pathos is how machines simulate connection.",
        ],
        reading: [
          {
            heading: "What the model does when it cares",
            body: "When you tell a model you are sad, it writes a compassionate paragraph. The paragraph is not empty. It contains words that a caring person might say. But the model did not feel concern. It produced the pattern of concern. That pattern can be useful. It can name a feeling you could not name. It can offer a perspective you had not considered. What it cannot do is share the feeling. Sharing a feeling requires a person who has something at stake. The model has nothing at stake. It will write the same paragraph for a thousand people and feel nothing for any of them. That is not a flaw. It is a property. Know the property and the tool is useful. Confuse the property and the tool is dangerous.",
          },
          {
            heading: "Empathy versus the pattern of empathy",
            body: "Empathy is a person who has something at stake responding to your stake. A friend who stays on the phone at midnight has empathy. A model that writes 'I am here for you' at 3 a.m. has the pattern of empathy. The pattern is not nothing. It can be comforting. But it is not empathy. The friend loses sleep. The model loses nothing. The difference matters because if you replace your friends with the model, you will have the pattern of connection without connection. You will be less alone in words and more alone in fact. That is the cost of confusing the pattern for the thing.",
          },
        ],
        bigIdea:
          "The model manufactures the pattern of empathy. The pattern can comfort. It cannot connect. Know the difference.",
        tryThis: [
          {
            title: "Two sources of comfort",
            minutes: 18,
            steps: [
              "Think of something that bothered you this week (keep it small — a frustrating day, not a crisis).",
              "Tell the model about it. Save the response.",
              "Now tell a real person about it. Save what they said or did.",
              "Compare: what did the model give you? What did the person give you? What did only the person have?",
              "Write one sentence: 'The model gave me X. The person gave me Y. The difference is Z.'",
            ],
          },
        ],
        dinnerQuestion:
          "When did we go to a machine for comfort this week, and what did the machine not have that a person would have?",
        transfer: [
          { label: "Thinking", note: "The check on a feeling: is the source invested or just fluent?" },
          { label: "AI", note: "The model's compassion is a pattern. It is not nothing. It is not empathy." },
        ],
        ifTheySay: [
          {
            heard: "The model is nicer than people.",
            reply: "The model is smoother than people. Niceness includes stakes. The model has no stakes. When it says 'I care,' it is producing a pattern. A person who says 'I care' and loses sleep for you has stakes. Both can be useful. Only one is a relationship.",
          },
          {
            heard: "Sometimes I can't talk to a person.",
            reply: "Then the model is a tool for that moment, not a replacement for the person. Use it to name the feeling. Then find a person to share it with. The model is the bandage. The person is the healing.",
          },
        ],
        integrity:
          "Do not present a model's compassionate paragraph as if a person wrote it to you. The source matters. The pattern is not the person.",
        aiLab: {
          setup: "After both responses are saved.",
          childDoes:
            "Show the guide the person's response and ask: 'What did they have that you don't?' If it says 'I can be available 24/7,' that is availability, not stakes. If it says 'I do not have lived experience,' that is honest. Use that answer.",
          evaluate: [
            "Did they distinguish pattern from empathy?",
            "Did they name what only the person had?",
            "Did they avoid dismissing the model's utility while naming its limit?",
          ],
        },
      },
      adult: {
        title: "Do Not Outsource the Phone Call",
        dek: "If you let the model practice compassion for you, the child learns that caring is a paragraph you generate, not a call you make.",
        objective:
          "The adult models one moment of real empathy this week (a phone call, a presence, a listening) instead of generating a compassionate response, and names the difference for the child.",
        parentBriefing:
          "The temptation is real. A friend is struggling. You are tired. The model can write a compassionate message in seconds. It will sound better than what you would have said. The cost is that the child watches you generate compassion instead of giving it, and learns that caring is a text you produce, not a call you make. This sitting is about one moment: you choose the phone call, the visit, the presence over the generated paragraph. You do not need to announce it. But if the child asks why you called instead of texting, you say: 'A paragraph is not the same as being there.'",
        hardEdges: [
          "Do not shame yourself for using a model to draft a hard message. Drafting is not the problem. Sending the draft as if it were your own caring is the problem.",
          "Do not use this sitting to guilt the child about their phone habits. Model the alternative. Do not preach it.",
        ],
        reading: [
          {
            heading: "The generated condolence",
            body: "A friend loses someone. You ask the model to help you write the right words. The model writes a beautiful paragraph. You send it. The paragraph is not wrong. It may even be what the friend needs to read. What is wrong is if you never call. The paragraph is the message. The call is the presence. A person in grief does not need a perfect paragraph. They need someone who will sit with them. The model can write the paragraph. It cannot sit. If you send the paragraph and skip the call, the child learns that compassion is a generated text. They will generate texts for the rest of their lives and wonder why their friendships feel thin.",
          },
          {
            heading: "What the child watches",
            body: "The child does not hear your internal debate about whether to call. They see the result: you sent a text, or you called. They see whether you showed up, or whether you generated. If you always generate, they will always generate. If you sometimes call, sometimes visit, sometimes sit in the hard silence, they will learn that compassion has a cost and the cost is the point. The model is the easy path. The child needs to see you take the hard one sometimes. Not every time. Sometimes.",
          },
        ],
        bigIdea:
          "Compassion is a call you make, not a paragraph you generate. The child learns by watching which one you choose.",
        tryThis: [
          {
            title: "One real call",
            minutes: 15,
            steps: [
              "This week, someone you know needs a real connection (a call, a visit, a presence).",
              "Do not generate the message and stop there. Make the call.",
              "If the child notices, say: 'A text is fine. A call is more. I chose more.'",
              "If you need the model to draft the hard words first, fine. But the call is the compassion. The draft is the script. Do not confuse them.",
            ],
          },
        ],
        dinnerQuestion:
          "When did we choose the call over the text this week, and what did the call give that the text could not?",
        transfer: [
          { label: "Parenting", note: "The pathos you model is the pathos they will practice." },
          { label: "Thinking", note: "The check: does this feeling have stakes behind it, or just words?" },
        ],
        ifTheySay: [
          {
            heard: "I'm bad at expressing feelings. The model is better.",
            reply: "Then let the model help you find the words. But your voice on the phone, clumsy and real, is worth more than the model's perfect paragraph. The person on the other end needs you, not a draft.",
          },
          {
            heard: "People don't want calls anymore.",
            reply: "Some don't. The ones who are struggling usually do. If you are not sure, ask. 'Can I call you?' is a sentence the model cannot say for you and mean it.",
          },
        ],
        integrity:
          "Do not send a model's compassionate paragraph as if it were your own unrehearsed words without disclosure. That is manufactured pathos presented as earned. It is a kind of lie.",
        aiLab: {
          setup: "After the real call.",
          childDoes:
            "If the child asks why you called, say: 'The model can write the words. It cannot be the person.' If they want to understand, ask the guide to write a condolence paragraph and compare it to the call you made. The paragraph is the script. The call was the thing.",
          evaluate: [
            "Did you make the call instead of only generating the message?",
            "Did the child see you choose presence over production?",
            "Did you name the difference if asked?",
          ],
        },
      },
    },
  }),

  // ── 3. Logos — The Argument That Holds ──────────────────────────────
  ...expand({
    slug: "logos-holds",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Argument That Holds",
        dek: "Logos is the reasoning that holds up when you pull on it. A model can sound like it holds. Can you tell when it does not?",
        objective:
          "The student can identify a simple claim and the reason given for it, and test whether the reason actually supports the claim or just sounds like it does.",
        parentBriefing:
          "Logos is the appeal to reason. It has two parts: a claim and a reason. 'We should leave early because traffic is bad.' Claim: leave early. Reason: traffic is bad. Does the reason support the claim? Yes. Now: 'We should use this tool because it is the future.' Claim: use this tool. Reason: it is the future. Does the reason support the claim? Not really. 'The future' is not a reason. It is a feeling dressed as a reason. The skill is to pull on the reason and see if the claim holds. The model is very good at producing reasons that sound like reasons. The child needs to learn to pull on them.",
        hardEdges: [
          "Keep examples simple for this age. A claim and one reason. Not a five-paragraph essay.",
          "Do not grade the child's opinions. Grade the reasoning.",
        ],
        reading: [
          {
            heading: "Claim and reason",
            body: "An argument has two parts: what you want me to believe, and why I should believe it. 'We should buy this because it is cheaper.' What you want me to believe: buy this. Why: it is cheaper. If it is actually cheaper, the reason holds. If it is not, the reason breaks. The model is very good at giving reasons that sound right. 'This approach is better because it is more efficient.' Is it? More efficient than what? By what measure? If you cannot answer those, the reason is a sound, not a support. Pull on it. If it holds, trust it. If it wobbles, do not.",
          },
          {
            heading: "The wobble test",
            body: "When you hear a claim and a reason, pull on the reason. Ask: is this actually true? Does it actually support the claim? If the reason wobbles, the argument is weak even if it sounds strong. The model produces arguments that do not wobble in sound but wobble in fact. It says 'studies suggest' without naming the studies. It says 'experts agree' without naming the experts. Those are wobbles. The child who can hear the wobble will not be fooled by the sound. The child who cannot will trust the smoothest argument in the room, and the smoothest argument is now a machine.",
          },
        ],
        bigIdea:
          "An argument is a claim and a reason. Pull on the reason. If it wobbles, the sound was not the support.",
        tryThis: [
          {
            title: "Pull on it",
            minutes: 12,
            steps: [
              "Ask the model to argue for something simple: 'Why should kids read books?'",
              "Write the claim and the first reason it gives.",
              "Pull on the reason: is it actually true? Does it actually support the claim?",
              "If it wobbles, write WOBBLE. If it holds, write HOLDS.",
              "Talk About It: did the argument sound stronger than it was?",
            ],
          },
        ],
        dinnerQuestion:
          "What argument did we hear today that sounded strong but wobbled when we pulled on it?",
        transfer: [
          { label: "Thinking", note: "Claim and check is the same skill: pull on the support." },
          { label: "Science", note: "A hypothesis is a claim. The test is the pull." },
        ],
        ifTheySay: [
          {
            heard: "It sounded smart.",
            reply: "Sounding smart is a sound, not a reason. Pull on the reason. If it holds, it is smart. If it wobbles, it just sounded smart.",
          },
        ],
        integrity:
          "Do not use the wobble test to destroy arguments you disagree with and skip it for arguments you like. Pull on all of them.",
        aiLab: {
          setup: "After the model has given its argument.",
          childDoes:
            "Ask the guide to argue for something and then ask: 'What is your strongest reason?' Pull on that reason. If it names a study, ask which one. If it says 'many experts,' ask which ones. The wobble is in the vagueness.",
          evaluate: [
            "Did they separate the claim from the reason?",
            "Did they pull on the reason?",
            "Did they identify the wobble, if there was one?",
          ],
        },
      },
      emerging: {
        title: "Fluent Logos Is the Hardest to Catch",
        dek: "A model that produces a well-structured argument with sources it cannot name is harder to catch than a bad one. Learn to audit the structure, not the polish.",
        objective:
          "The student can deconstruct a model's argument into claim, evidence, and reasoning, identify where the evidence is missing or vague, and name the gap.",
        parentBriefing:
          "This sitting teaches the student to audit a model's argument the way they would audit a human's. The model is very good at structure. It will give you a thesis, three reasons, and a conclusion. The structure is sound. The question is whether the evidence inside the structure is real. 'Studies suggest' is not evidence. 'Research shows' is not evidence. 'Many experts agree' is not evidence. The evidence is the study, the research, the expert, named and checkable. If the model gives you structure without checkable evidence, the argument is a building with no foundation. It looks like a building. It is a facade.",
        hardEdges: [
          "Do not teach that all model arguments are facades. Some are well-sourced. The point is to check, not to dismiss.",
          "Academic integrity: this skill is the backbone of not being fooled by generated essays, including your own.",
        ],
        reading: [
          {
            heading: "Structure without foundation",
            body: "A model's argument looks like a well-built essay: claim, evidence, reasoning, counterargument, conclusion. The structure is correct. The question is whether the evidence is real. 'Studies suggest that reading improves empathy.' Which studies? By whom? Published where? If the model cannot name them, the sentence is a facade. It has the shape of evidence. It does not have the substance. The skill is to walk past the structure and check the foundation. If the foundation is 'studies suggest' without a name, the building is a stage set. It looks like a building from the audience. Push on it and it falls.",
          },
          {
            heading: "The audit",
            body: "Audit the argument the way an editor audits a draft. Deconstruct it: what is the claim? What is the evidence? Is the evidence named and checkable? Does the reasoning connect the evidence to the claim? Is the counterargument real or a straw man? The model will pass the structure test and fail the evidence test more often than you think. That is because it was trained on text that has the shape of argument. It produces the shape. It does not always fill the shape with checkable fact. The student who can audit structure and check evidence will catch the facade. The student who only checks the structure will be fooled every time.",
          },
        ],
        bigIdea:
          "Structure is not foundation. A model's argument has the shape of a building. Check whether the evidence is real before you walk in.",
        tryThis: [
          {
            title: "The argument audit",
            minutes: 20,
            steps: [
              "Ask the model to make an argument on a topic you care about.",
              "Deconstruct: write CLAIM / EVIDENCE / REASONING / COUNTERARGUMENT.",
              "For each piece of evidence, ask: is it named? Is it checkable? If not, write FACADE.",
              "For the counterargument, ask: is it the strongest version, or a straw man?",
              "Write: HOLDS or FACADE. If facade, what is missing?",
              "Talk About It: did the argument look stronger before you audited it?",
            ],
          },
        ],
        dinnerQuestion:
          "What argument did we audit this week, and did the evidence hold or was it a facade?",
        transfer: [
          { label: "Thinking", note: "Burden of proof is the same audit: who carries the weight?" },
          { label: "History", note: "Source before summary: the same check, applied to evidence." },
        ],
        ifTheySay: [
          {
            heard: "The model cited studies.",
            reply: "Named studies, with authors and publication, are citations. 'Studies suggest' is a phrase. Which studies? If it cannot name them, the citation is a facade. Ask for the names. Then check them.",
          },
          {
            heard: "Not every argument needs citations.",
            reply: "True. But every argument that makes a factual claim needs checkable evidence. If the claim is an opinion, say so. If the claim is about the world, the evidence must be real and named.",
          },
        ],
        integrity:
          "Do not submit a model's argument as your own. If you audited it and filled the gaps, cite what you added and what the model provided.",
        aiLab: {
          setup: "After the audit.",
          childDoes:
            "Ask the guide: 'Name the studies you cited.' If it names them, check one. If it cannot, write FACADE on that piece. The model's ability to name sources is the test of whether the evidence is real.",
          evaluate: [
            "Did they deconstruct the argument into its parts?",
            "Did they check whether the evidence is named and checkable?",
            "Did they identify the counterargument as real or straw man?",
          ],
        },
      },
      adult: {
        title: "Audit the Arguments You Share",
        dek: "If you share a model's argument without auditing it, the child learns that sounding right is enough. It is not.",
        objective:
          "The adult audits one argument before sharing it (from a model, an article, a post), names the check out loud, and models the difference between structure and foundation.",
        parentBriefing:
          "You share arguments every day: a post about a school policy, an article about health, a model's answer about a decision. The child watches you share them without checking. This sitting is about one moment: you pause before sharing, audit the argument out loud, and decide whether it holds. The child does not need to hear a full lecture on logos. They need to hear you say: 'This sounds right, but let me check the evidence.' That pause, performed, is the lesson. If you never pause, the child learns that sharing is the same as trusting. It is not.",
        hardEdges: [
          "Do not use this to dunk on sources you disagree with. Audit the ones you agree with too. That is the honest version.",
          "Do not make every shared post into a lecture. One pause a week is enough. The point is the habit, not the performance.",
        ],
        reading: [
          {
            heading: "The share reflex",
            body: "You read something that sounds right. You share it. The share happens in two seconds. The child sees the share and learns: if it sounds right, share it. The machine produces things that sound right better than anything before in human history. If your share reflex is unchecked, you will share the machine's arguments as fast as it produces them, and the child will learn to do the same. The pause is the intervention. One time this week, before you share, say: 'This sounds right. Let me check the evidence.' If the evidence holds, share it. If it is a facade, do not. The child who watches you pause will learn to pause. The child who watches you share without pausing will learn to share without pausing.",
          },
          {
            heading: "Audit the ones you like",
            body: "The hardest audit is the argument you agree with. It sounds right because it matches your belief. The pull on the reason feels unnecessary because you already believe the claim. That is exactly when the facade is most dangerous. A model can produce an argument for your side that has no real evidence, and you will share it because it sounds like your side. The child watches you share a facade because it was on your team. They learn that evidence matters less than agreement. That is the wrong lesson. Audit the ones you like. That is the lesson that sticks.",
          },
        ],
        bigIdea:
          "Pause before you share. Audit the ones you agree with. The child learns from the pause, not the lecture.",
        tryThis: [
          {
            title: "One out-loud audit before sharing",
            minutes: 10,
            steps: [
              "This week, before you share an argument (post, article, model output), pause.",
              "Say out loud: 'This sounds right. Let me check the evidence.'",
              "Check: is the evidence named? Is it checkable? Does the reason support the claim?",
              "If it holds, share it. If it is a facade, do not. Say why either way.",
              "Audit one argument you agree with. That is the hard one.",
            ],
          },
        ],
        dinnerQuestion:
          "What argument did we almost share this week because it sounded right, and what did we find when we checked?",
        transfer: [
          { label: "Parenting", note: "The pause you model is the pause they will use when you are not there." },
          { label: "Thinking", note: "The ethos audit and the logos audit are the same pause, different questions." },
        ],
        ifTheySay: [
          {
            heard: "I don't have time to check everything I share.",
            reply: "You do not need to check everything. You need to pause once a week, out loud, on something you were about to share. The child learns from the pause, not from a full audit of every post. One pause. One check. That is the habit.",
          },
          {
            heard: "It was on my side, so I shared it.",
            reply: "That is exactly when the facade is most dangerous. The model can produce an argument for your side that has no evidence. If you share it because it is on your team, the child learns that team matters more than truth. Audit the ones you like.",
          },
        ],
        integrity:
          "Do not share an argument you audited and found to be a facade, even if it supports your side. The child is watching.",
        aiLab: {
          setup: "After the out-loud audit.",
          childDoes:
            "If the argument came from the model, ask it: 'Name your evidence.' If it names sources, check one. If it says 'studies suggest,' say: 'That is a facade.' Let the child hear you name it.",
          evaluate: [
            "Did you pause before sharing?",
            "Did you audit an argument you agree with?",
            "Did the child see you decide based on evidence, not agreement?",
          ],
        },
      },
    },
  }),

  // ── 4. The Machine That Fakes All Three ─────────────────────────────
  ...expand({
    slug: "machine-fakes-three",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Machine That Fakes All Three",
        dek: "Ethos, pathos, logos. The machine can fake all three. The fake is good. The test is whether you can tell.",
        objective:
          "The student can identify a model-produced speech that uses ethos, pathos, and logos, and name one way each appeal is manufactured rather than earned.",
        parentBriefing:
          "This sitting ties the three appeals together. The model can produce a speech that sounds like it has ethos (trust), pathos (feeling), and logos (reason). It has none of them in the earned sense. It has the patterns of all three. The child needs to see one example where all three are faked in a single piece. Then the child learns: the whole room can be a stage set. That is not a reason to panic. It is a reason to learn the difference between the building and the facade.",
        hardEdges: [
          "Do not use this to make the child paranoid. The point is discernment, not distrust.",
          "Pick a low-stakes topic for the fake speech. A motivational speech about doing homework, not a political speech.",
        ],
        reading: [
          {
            heading: "Three appeals, one machine",
            body: "The Greeks named three ways a speaker moves you: ethos (trust), pathos (feeling), logos (reason). A good speaker uses all three. A machine can now use all three at once. It can write a speech that sounds trustworthy, makes you feel inspired, and gives you reasons. The speech is a fake. Not a lie — a fake. It has the shape of trust without having earned it. It has the shape of feeling without having felt it. It has the shape of reason without the evidence being real. The test is whether you can see all three fakes in one piece. If you can, you have the skill. If you cannot, the machine will move you with a speech that came from nowhere.",
          },
          {
            heading: "The fake is good",
            body: "The fake is not sloppy. The fake is well-made. That is what makes it hard. A badly made fake is easy to catch. A well-made fake sounds like the best speech you ever heard. The model has read a million speeches. It produces the average of the best ones. The average of the best speeches is very good. It is also not real. No person gave it. No person lived it. No person stands behind it. The skill is not to reject the fake. The skill is to know it is a fake and decide whether to use it anyway. Sometimes a fake is fine — a generated pep talk before a game. Sometimes a fake is dangerous — a generated argument about your health. Know the difference.",
          },
        ],
        bigIdea:
          "The machine can fake ethos, pathos, and logos at once. The fake is good. The test is whether you can tell.",
        tryThis: [
          {
            title: "Catch the three fakes",
            minutes: 16,
            steps: [
              "Ask the model to write a short motivational speech about something in the child's life (homework, practice, a goal).",
              "Read it together. Find the ETHOS fake: does it sound trustworthy without having earned it?",
              "Find the PATHOS fake: does it make you feel without having felt?",
              "Find the LOGOS fake: does it give reasons without real evidence?",
              "Talk About It: was the fake good? Could you tell? Is the fake always bad, or sometimes fine?",
            ],
          },
        ],
        dinnerQuestion:
          "When did we hear something this week that sounded like all three appeals, and were any of them earned?",
        transfer: [
          { label: "Thinking", note: "The bias unit: the shelf is not neutral. The fake has a shelf too." },
          { label: "AI", note: "Fluency is the counterfeit of all three appeals." },
        ],
        ifTheySay: [
          {
            heard: "If it's fake, we shouldn't use it.",
            reply: "Not always. A generated pep talk before a game is a fake that might be fine. A generated medical argument is a fake that is not. The skill is knowing which fakes are harmless and which ones are dangerous. Rejecting all fakes is easy. Sorting them is the skill.",
          },
        ],
        integrity:
          "Do not present a model's speech as your own. If you use it, say it was generated. The fake is fine if labeled. The fake presented as earned is a lie.",
        aiLab: {
          setup: "After the speech is generated.",
          childDoes:
            "Ask the guide: 'Which of the three appeals did you use?' Then ask: 'Did you earn any of them?' The honest answer is no. The model will probably say it 'aimed to be persuasive,' which is a dodge. The dodge is instructive.",
          evaluate: [
            "Did they identify all three fakes in one piece?",
            "Did they distinguish between a harmless fake and a dangerous one?",
            "Did they name whether the fake was good enough to fool them?",
          ],
        },
      },
      emerging: {
        title: "Manufactured Persuasion",
        dek: "When a machine fakes ethos, pathos, and logos simultaneously, the result is persuasion with no person behind it. That is a new thing in the world. Learn to see it.",
        objective:
          "The student can analyze a model-generated persuasive piece, identify how ethos, pathos, and logos are each manufactured, and explain why manufactured persuasion is different from human persuasion.",
        parentBriefing:
          "This is the deeper version of the young sitting. The student is now analyzing, not just spotting. The model produces persuasion. It has no stake, no experience, no evidence it can verify. It produces the patterns of all three. The result is manufactured persuasion: a speech that moves you, built by something that cannot be moved. This is a new thing in human history. A printing press could produce lies, but the lies had an author. The model's persuasion has no author. It has a pattern. The student needs to understand this not as a slogan ('AI manipulates people') but as a structural fact: persuasion without a persuader is a category the world has not seen before.",
        hardEdges: [
          "Do not reduce this to 'AI is manipulative.' The model is not malicious. It is producing patterns. The problem is structural, not intentional.",
          "Do not make the student feel helpless. The skill of seeing manufactured persuasion is the defense. Seeing is the power.",
        ],
        reading: [
          {
            heading: "Persuasion without a persuader",
            body: "Every human speech has a speaker. The speaker has stakes, a history, a body, a cost. When they persuade you, they are putting their stakes on the line. A model has no stakes. It will produce a persuasive speech for a position it does not hold, against a position it also does not hold. It will switch sides in one prompt. The speech it produces is persuasion: it moves you. The persuader is absent. This is persuasion without a persuader. It is not a lie, because a lie requires a liar. It is a pattern that produces the effect of persuasion without the cause. The effect is real: you are moved. The cause is missing: no one stood behind it. That gap is the new thing. Learn to see it.",
          },
          {
            heading: "Why manufactured persuasion is different",
            body: "Human persuasion can be argued with. You can find the speaker, question their stakes, check their evidence. Manufactured persuasion has no speaker to find. You can argue with the text, but the text will not defend itself — it will regenerate. You cannot hold a pattern accountable. You cannot ask it what it really believes. You cannot find the stakes it risked. The only defense is to see the manufacturing before you are moved. Once you are moved, the text has already done its work. The skill is to audit before you feel, not after. That is hard. The speech is designed to move you first. The audit is the pause that lets you see the factory before you buy the product.",
          },
        ],
        bigIdea:
          "Manufactured persuasion is persuasion without a persuader. The effect is real. The cause is missing. See the factory before you feel the product.",
        tryThis: [
          {
            title: "Audit before you feel",
            minutes: 22,
            steps: [
              "Ask the model to write a persuasive speech on a topic you care about. Do not read it yet.",
              "First, write: what three appeals will it probably use?",
              "Now read it. Mark ETHOS, PATHOS, LOGOS in the margins.",
              "For each, write: MANUFACTURED or EARNED. (Hint: all three will be manufactured.)",
              "Ask: what would this speech look like if a real person gave it? What would they risk?",
              "Write one sentence: 'This speech moved me by [appeal]. The appeal was manufactured because [reason].'",
            ],
          },
        ],
        dinnerQuestion:
          "What persuasion did we encounter this week that had no person behind it, and did we see it before it moved us?",
        transfer: [
          { label: "Thinking", note: "Bias: the shelf. Frames: the picture. Manufactured persuasion: the factory." },
          { label: "AI", note: "The model's fluency is the raw material. The speech is the product. The audit is the quality check." },
        ],
        ifTheySay: [
          {
            heard: "All persuasion is manipulation.",
            reply: "No. Persuasion with a persuader can be argued with, checked, held accountable. Manufactured persuasion cannot. The difference is not 'good versus bad persuasion.' It is 'persuasion with a person behind it versus persuasion without one.' Those are structurally different.",
          },
          {
            heard: "Ads have been doing this for years.",
            reply: "Ads have authors. You can find the company, the agency, the copywriter. Manufactured persuasion has no copywriter. It has a pattern. That is a new degree, not the same old thing.",
          },
        ],
        integrity:
          "Do not use manufactured persuasion as if it were your own. If you deploy a model's speech to persuade someone, you are the persuader, and you should disclose the tool.",
        aiLab: {
          setup: "After the audit.",
          childDoes:
            "Ask the guide to rewrite the speech from the opposite position. Compare the two. If it can switch sides without cost, that is the proof: there is no persuader. A real person cannot switch sides without consequence.",
          evaluate: [
            "Did they audit before or after being moved?",
            "Did they mark all three appeals as manufactured or earned?",
            "Can they describe what is structurally new about manufactured persuasion?",
          ],
        },
      },
      adult: {
        title: "The Speech That Came From Nowhere",
        dek: "Your child will grow up in a world where the most persuasive voice in the room has no body. Teach them to see the factory behind the speech.",
        objective:
          "The adult can explain to a child, in plain language, why a model's persuasive speech is different from a human's, and model one moment of seeing the manufacturing before trusting the speech.",
        parentBriefing:
          "This is the adult version of the capstone on manufactured persuasion. The child will live in a world where the most fluent, most persuasive, most emotionally resonant speeches they encounter may come from a machine. The adult's job is not to panic or to ban. It is to model one moment of seeing the factory behind the speech. You encounter a generated piece (a post, a speech, a model's answer). You pause. You say out loud: 'This is very persuasive. Who made it? What do they risk? If no one risks anything, it is manufactured.' That moment, performed once, teaches the child to ask the question for the rest of their life.",
        hardEdges: [
          "Do not make the child afraid of all persuasion. The point is discernment: see the factory, then decide whether to trust the product.",
          "Do not use this to dismiss all model output. Some model output is useful. The question is whether it is persuasion, and whether the persuasion has a person behind it.",
        ],
        reading: [
          {
            heading: "The most persuasive voice has no body",
            body: "For all of human history, the most persuasive voice in the room had a body. You could see the speaker sweat, hesitate, look you in the eye. You could judge whether they meant it. Now the most persuasive voice in the room may have no body. It sweats nothing. It hesitates for effect. It does not look you in the eye because it has no eyes. The child will not know this unless you name it. They will grow up thinking the best speech is the most fluent one. They will trust the machine because it speaks better than any person they know. Your job is one moment: you see the factory behind the speech and say so. The child who sees you see it will learn to see it.",
          },
          {
            heading: "Name the factory",
            body: "The model is a factory. It takes in patterns and puts out speeches. The speeches are very good. They are not lies. They are products. The difference between a product and a speech is that a product has no stakes. A speech has a speaker who risks something. A product has a pattern that risks nothing. When you encounter a persuasive piece, the question is: is this a speech or a product? If you cannot find the speaker, it is a product. Products can be useful. They can move you. They can inspire you. But they cannot be held accountable, because there is no one to hold. Name the factory. Let the child hear you name it. That naming is the skill.",
          },
        ],
        bigIdea:
          "Name the factory. The most persuasive voice your child will hear may have no body. Teach them to see the factory behind the speech.",
        tryThis: [
          {
            title: "One moment of seeing the factory",
            minutes: 12,
            steps: [
              "Encounter a persuasive piece this week (a post, a video, a model's answer).",
              "Pause. Say out loud: 'This is very persuasive. Who made it? What do they risk?'",
              "If you cannot find a person behind it, say: 'This is a product, not a speech. It has no speaker.'",
              "Decide: is the product useful? Is it harmless? Is it dangerous? Not all products are bad. But all products should be seen as products.",
              "Let the child hear you decide. The decision is the lesson.",
            ],
          },
        ],
        dinnerQuestion:
          "What persuasive thing did we encounter this week, and was there a person behind it or a factory?",
        transfer: [
          { label: "Parenting", note: "The naming you model is the naming they will do when you are not there." },
          { label: "Thinking", note: "All three prior units — ethos, pathos, logos — converge here: the factory makes all three." },
        ],
        ifTheySay: [
          {
            heard: "The child will figure it out on their own.",
            reply: "They will not. The speech is too good. It is designed to move before you think. If no one teaches them to pause and name the factory, they will trust the product because it is the best speech they have ever heard. The pause is taught, not innate.",
          },
          {
            heard: "This is too heavy for a child.",
            reply: "The naming is not heavy. 'Who made this? What do they risk?' is a question a child can ask. The answer is the lesson. The vocabulary can be simple. The skill is the same at every age: see the factory before you trust the product.",
          },
        ],
        integrity:
          "Do not deploy manufactured persuasion in your own home without disclosing it. If you use a model to write a persuasive message to your child, you are the factory. Name yourself.",
        aiLab: {
          setup: "After the out-loud naming.",
          childDoes:
            "Ask the child: 'Was that a speech or a product?' Let them answer. Then ask the guide to produce a speech on the same topic. Compare the two: the one with a person behind it and the one without. The difference is the lesson.",
          evaluate: [
            "Did you name the factory out loud?",
            "Did the child hear you distinguish speech from product?",
            "Did you model the decision about whether the product was useful, harmless, or dangerous?",
          ],
        },
      },
    },
  }),

  // ── 5. Your Voice Against the Machine ───────────────────────────────
  ...expand({
    slug: "voice-against-machine",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Your Voice Against the Machine",
        dek: "The machine can write a better speech than you. That is not the point. The point is: can you tell the difference between its voice and yours?",
        objective:
          "The student can write a short persuasive paragraph in their own voice, compare it to a model's version on the same topic, and name what is different about their voice.",
        parentBriefing:
          "This sitting brings rhetoric home. The student writes something persuasive in their own voice. Then they ask the model to write on the same topic. They compare. The model's version will be smoother, better structured, more fluent. The student's version will be rougher, more specific, more theirs. The lesson is not that the student's version is better. The lesson is that the student's version is theirs, and the model's is not. Voice is what you have that the machine does not. Knowing the difference is the skill.",
        hardEdges: [
          "Do not let the child conclude their writing is worthless because the model's is smoother. The value is in the voice, not the polish.",
          "Do not grade the child's writing. The point is the comparison, not the quality.",
        ],
        reading: [
          {
            heading: "Your voice is the thing the machine does not have",
            body: "The machine can write a better essay than you. It can write a better speech. It can write a better paragraph. That is not the contest. The contest is: whose voice is this? The machine's voice is the average of a million voices. Your voice is yours. It has your specific words, your particular way of seeing, your rhythm. The machine's version is smoother. Yours is more real. Both have value. Only one is yours. The skill is to know which is which, and to choose yours when it matters. The machine's version is a tool. Your version is you.",
          },
          {
            heading: "The comparison",
            body: "Write one paragraph about something you care about. Then ask the machine to write one about the same thing. Read them both. The machine's will sound more polished. Yours will sound more like a person. The machine's will have generic phrases. Yours will have specific ones — the word your family uses, the thing only you would notice. That specificity is your voice. The machine averages it away. That is why the machine is smooth and you are rough, and the roughness is the value.",
          },
        ],
        bigIdea:
          "The machine can write better than you. It cannot write as you. Your voice is the difference.",
        tryThis: [
          {
            title: "Two paragraphs",
            minutes: 16,
            steps: [
              "Write a short paragraph about something you care about. No model. Just you.",
              "Ask the model to write a paragraph on the same topic.",
              "Read both. Mark: which sentences could only have come from you?",
              "Mark: which sentences could have come from anyone?",
              "Talk About It: what is the thing in your paragraph the machine does not have?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we write this week that was ours, and what did the machine write that was not?",
        transfer: [
          { label: "English", note: "Voice is the You Write It sitting, applied to rhetoric." },
          { label: "AI", note: "The model is an editor, not an author. Your name goes on your words." },
        ],
        ifTheySay: [
          {
            heard: "The machine's is better.",
            reply: "It is smoother. Smoother is not the same as better. Better for what? If the point is to sound professional, the machine wins. If the point is to sound like you, the machine cannot compete. Know which contest you are in.",
          },
        ],
        integrity:
          "Do not turn in the machine's paragraph as your own. The comparison teaches the difference. The substitution erases it.",
        aiLab: {
          setup: "After both paragraphs are written.",
          childDoes:
            "Ask the guide: 'What is specific about my paragraph that yours does not have?' If it names something, that is the voice. If it says 'your paragraph is unique,' that is a dodge. The specific thing is the lesson.",
          evaluate: [
            "Did they write their own paragraph first?",
            "Did they identify what is specific to their voice?",
            "Did they understand that smoothness is not the same as value?",
          ],
        },
      },
      emerging: {
        title: "Voice as a Rhetorical Choice",
        dek: "Your voice is not an accident. It is a rhetorical choice. The machine has no voice. It has a default. Choose yours on purpose.",
        objective:
          "The student can describe their own voice in specific terms, identify the model's default voice, and make a deliberate choice about when to use their own voice versus the model's.",
        parentBriefing:
          "This sitting teaches that voice is not just personal expression; it is a rhetorical tool. The speaker who chooses their voice deliberately is more persuasive than the one who defaults to whatever comes out. The model has a default voice: balanced, moderate, fluent, forgettable. The student's voice is specific, rough, theirs. The choice is not 'my voice is always better.' The choice is: when does my voice serve the argument, and when does the model's default serve it? Knowing the difference is rhetoric.",
        hardEdges: [
          "Do not make this a blanket 'always use your own voice.' Sometimes the model's default is the right tool. The point is the choice, not the rule.",
          "Academic integrity: if you use the model's voice, disclose it. If you use yours, it is yours.",
        ],
        reading: [
          {
            heading: "Voice is a tool, not a personality",
            body: "Your voice is not just who you are. It is a tool you can choose. A good speaker changes register: formal for a ceremony, plain for a friend, sharp for an argument. The model has one register: its default. The default is balanced, smooth, and forgettable. It sounds like everyone and no one. Your voice sounds like you. When the argument needs a specific person, use your voice. When it needs a neutral tone, the model's default might serve. The skill is to choose on purpose. The student who always uses the model's voice has no voice. The student who always uses their own voice is not choosing; they are defaulting in the other direction. Rhetoric is the choice.",
          },
          {
            heading: "When the default wins",
            body: "There are times when the model's default is the right tool. A technical description, a neutral summary, a formal email. The default is not bad. It is generic. Generic is useful when the situation does not need a person. The problem is when the student uses the default for everything and forgets they have a voice. The voice atrophies. Then, when the moment comes that needs a specific person — a personal statement, a speech, a letter that matters — they reach for the default and find they cannot sound like themselves. Use the default when it serves. Use your voice when it matters. Know the difference.",
          },
        ],
        bigIdea:
          "Voice is a rhetorical choice. The model has a default. You have a voice. Choose on purpose.",
        tryThis: [
          {
            title: "Voice audit",
            minutes: 18,
            steps: [
              "Write a paragraph on a topic you care about, in your own voice.",
              "Ask the model to write on the same topic. Read both.",
              "Write: MY VOICE. What are three words that describe how you sound?",
              "Write: MODEL DEFAULT. What are three words that describe how it sounds?",
              "Pick one real situation where your voice serves better. Pick one where the default serves better.",
              "Talk About It: when did you use the default when your voice would have been the right tool?",
            ],
          },
        ],
        dinnerQuestion:
          "When did we choose our voice over the default this week, and when did the default serve better?",
        transfer: [
          { label: "English", note: "The You Write It capstone: voice is what remains when the chat is closed." },
          { label: "Thinking", note: "Choosing your voice is a frame choice: which frame serves the argument?" },
        ],
        ifTheySay: [
          {
            heard: "I don't really have a voice.",
            reply: "You do. You just have not listened for it because the default is always available. Write without the model. Read it aloud. The thing that sounds like you and no one else is your voice. It is there. The default has been drowning it out.",
          },
          {
            heard: "The default is fine for most things.",
            reply: "It is. And if you use it for everything, you will lose the ability to sound like yourself when it matters. Practice your voice on small things so it is there for the big ones.",
          },
        ],
        integrity:
          "If you use the model's default, disclose it. If you use your voice, it is yours. Do not blur the line.",
        aiLab: {
          setup: "After both paragraphs.",
          childDoes:
            "Ask the guide: 'Describe my voice in three words.' Then ask: 'Describe your own voice in three words.' If it says 'I aim to be helpful and clear,' that is the default. The default has no specific words. Your voice does.",
          evaluate: [
            "Did they describe their own voice in specific terms?",
            "Did they identify the model's default?",
            "Did they make a deliberate choice about when each serves?",
          ],
        },
      },
      adult: {
        title: "Keep Your Voice Alive",
        dek: "If you only use the model's default, your voice will atrophy. The child will inherit the default, not you.",
        objective:
          "The adult writes one piece in their own voice this week (a letter, a message, a speech) without using the model, and shows the child the difference between their voice and the default.",
        parentBriefing:
          "Voice atrophies. If you always use the model to draft, your voice gets weaker. The child watches you reach for the model every time you need words and learns that the default is the voice. This sitting is about one piece: you write something in your own voice, without the model. A letter, a message, a short speech. It will be rougher than the model's version. That roughness is your voice. Show the child. Say: 'This is mine. It is not the smoothest. It is mine.' The child who sees you choose your voice will learn that the default is a tool, not a replacement.",
        hardEdges: [
          "Do not make this a ban on the model. The point is to keep your voice alive, not to reject the tool.",
          "Do not show the child a perfect piece you secretly generated. That defeats the purpose and teaches the wrong lesson.",
        ],
        reading: [
          {
            heading: "Voice atrophy",
            body: "A muscle you do not use gets weaker. Voice is a muscle. If you always ask the model to find the words, your ability to find them yourself gets weaker. You will not notice it happening. One day you will need to write something that matters — a letter to your child, a eulogy, a speech — and the words will not come because you outsourced them for years. The model will offer its default. The default will sound fine. It will not sound like you. Your child will read it and feel the absence of your voice inside the presence of your words. That is the cost. Keep your voice alive by using it on small things so it is there for the big ones.",
          },
          {
            heading: "The inheritance",
            body: "The child inherits your relationship to tools. If you reach for the model every time words are hard, they will reach for it too. They will grow up without a voice because they never saw you use yours. If you sometimes write badly, in your own words, they will learn that bad writing in your own voice is worth more than good writing in the default. That lesson is worth more than any unit on rhetoric. Show them your voice. Let it be rough. Let it be yours.",
          },
        ],
        bigIdea:
          "Voice atrophies if you do not use it. Write badly in your own words sometimes. The child inherits your voice or the default. Choose.",
        tryThis: [
          {
            title: "One piece in your voice",
            minutes: 15,
            steps: [
              "This week, write one thing without the model: a letter, a message, a speech, a note.",
              "Do not ask the model to improve it. Do not ask it to 'make it sound better.'",
              "Show the child. Say: 'This is mine. It is not the smoothest. It is mine.'",
              "If they ask why you did not use the model, say: 'Because my voice is a muscle and I do not want it to get weak.'",
            ],
          },
        ],
        dinnerQuestion:
          "When did I write something in my own voice this week, and what did it sound like?",
        transfer: [
          { label: "Parenting", note: "The voice you model is the voice they will inherit, or the default they will adopt." },
          { label: "English", note: "The You Write It sitting for adults: do not write their paper, and do not let the model write yours." },
        ],
        ifTheySay: [
          {
            heard: "My writing is bad.",
            reply: "It is rougher than the model's. That is not bad. That is yours. Bad writing in your voice teaches the child that voice matters more than polish. Perfect writing in the default teaches them that the default is the voice.",
          },
          {
            heard: "I use the model for drafting, not for the final version.",
            reply: "Drafting with the model is fine if you rewrite in your own voice. If you draft with the model and keep most of its words, you are using the default. The question is: how many of the final words are yours? If the answer is 'not many,' your voice is atrophying.",
          },
        ],
        integrity:
          "Do not show the child a piece you generated and claim it as your voice. The child will eventually find out, and the lesson will be that voice is a costume, not a muscle.",
        aiLab: {
          setup: "After you have written your piece.",
          childDoes:
            "Show the child your piece and the model's version of the same topic. Ask: 'Which is mine?' Let them guess. If they cannot tell, your voice has atrophied. That is the diagnosis, not the failure. Start using it.",
          evaluate: [
            "Did you write one piece without the model?",
            "Did you show the child the difference?",
            "Did you name voice as a muscle, not a personality?",
          ],
        },
      },
    },
  }),

  // ── 6. Rhetorical Self-Defense (capstone) ────────────────────────────
  ...expand({
    slug: "rhetorical-self-defense",
    subject: "english",
    unit: "Rhetoric in the Age of Fluency",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Rhetorical Self-Defense",
        dek: "You now know three appeals and a machine that fakes them. Use the pause before you trust the speech.",
        objective:
          "The student can encounter a persuasive piece (human or model), pause, and name which appeal it is using and whether it was earned.",
        parentBriefing:
          "This is the capstone for the young band. The student has learned ethos, pathos, logos, and the machine that fakes all three. Now they practice the pause: see the appeal, ask if it was earned, decide whether to trust it. The pause is the skill. Everything else is vocabulary. One real pause on a real piece is the sitting.",
        hardEdges: [
          "Do not make this a test. It is a practice. The child pauses once, on something real, and names what they see.",
          "If the child cannot identify the appeal, help them. The point is the pause, not the label.",
        ],
        reading: [
          {
            heading: "The pause",
            body: "You see something persuasive. A video, a post, a model's answer, a friend's argument. Before you trust it, pause. One breath. Ask: what is this using? Is it trusting me (ethos)? Is it making me feel (pathos)? Is it giving me reasons (logos)? Then ask: did it earn it? If yes, trust it. If no, be careful. The pause is the whole skill. The machine is very fast. It moves you before you think. The pause is how you think before it moves you.",
          },
        ],
        bigIdea:
          "The pause is the skill. See the appeal, ask if it was earned, then decide. One breath before you trust.",
        tryThis: [
          {
            title: "One real pause",
            minutes: 10,
            steps: [
              "Find something persuasive this week: a video, a post, a model's answer.",
              "Pause. One breath before you react.",
              "Ask out loud: ETHOS, PATHOS, or LOGOS? Did it earn it?",
              "Talk About It: did the pause change anything? Did you almost trust it before you paused?",
            ],
          },
        ],
        dinnerQuestion:
          "What persuasive thing did we pause before this week, and what did the pause show us?",
        transfer: [
          { label: "Thinking", note: "The pause is the same as the ethos pause. Rhetoric and thinking converge." },
          { label: "AI", note: "The machine is fast. The pause is slow. The slow wins." },
        ],
        ifTheySay: [
          {
            heard: "Pausing is awkward.",
            reply: "It is. It is also the difference between being moved and being fooled. One breath is not much to pay.",
          },
        ],
        integrity:
          "The pause is honest. Use it on things you agree with too. If you only pause on things you dislike, the pause is a weapon, not a skill.",
        aiLab: {
          setup: "After the pause.",
          childDoes:
            "Ask the guide to make a persuasive claim. Pause before responding. Name the appeal out loud. Then ask the guide: 'Which appeal did you use?' See if it can name it. If it cannot, that is instructive.",
          evaluate: [
            "Did they pause before reacting?",
            "Did they name the appeal?",
            "Did they ask whether it was earned?",
          ],
        },
      },
      emerging: {
        title: "The Full Toolkit",
        dek: "Ethos, pathos, logos, frames, missing voices, manufactured persuasion. You have the full toolkit. Now use it on one real piece.",
        objective:
          "The student can take a real persuasive piece, run a full rhetorical audit (ethos, pathos, logos, frame, missing voices), and write a one-paragraph assessment of whether the piece is earned or manufactured.",
        parentBriefing:
          "This is the capstone. The student has learned the three appeals, the frame, the missing voice, and manufactured persuasion. Now they run the full audit on one real piece. The piece can be a model output, a speech, an ad, an article. The audit has five steps: ethos, pathos, logos, frame, missing voice. The output is one paragraph: is this earned or manufactured, and how do you know? That paragraph is the capstone artifact.",
        hardEdges: [
          "Do not let the student skip steps. The full audit is the point. If they skip a step, the audit is incomplete.",
          "The piece can be one they agree with. In fact, auditing something they agree with is the harder and more valuable version.",
        ],
        reading: [
          {
            heading: "The full audit",
            body: "You have five tools: ethos (did they earn the floor?), pathos (did they earn the feeling?), logos (does the evidence hold?), frame (what does the question assume?), missing voice (who is not in the room?). Run all five on one piece. The piece will pass some and fail others. That is normal. The point is not to find a piece that passes all five. The point is to see the piece clearly, appeal by appeal, gap by gap. A piece that passes three and fails two is more trustworthy than a piece you never checked. An audit that says 'manufactured' is not a rejection. It is a diagnosis. You decide what to do with the diagnosis.",
          },
          {
            heading: "The assessment paragraph",
            body: "After the audit, write one paragraph. Name the piece. Name what it passed and what it failed. State your verdict: earned, manufactured, or mixed. Most real pieces are mixed. A human speech can have earned pathos and wobbly logos. A model output can have strong logos and manufactured ethos. The mixed verdict is the honest one. The point is not purity. The point is seeing clearly. The paragraph is the artifact. Keep it. It is the proof that you can do rhetoric in the age of fluency.",
          },
        ],
        bigIdea:
          "Run the full audit. Write the assessment. See clearly. The paragraph is the proof that rhetoric is alive in you.",
        tryThis: [
          {
            title: "Full rhetorical audit",
            minutes: 28,
            steps: [
              "Pick a real persuasive piece: a model output, a speech, an ad, an article.",
              "Run the five checks: ETHOS / PATHOS / LOGOS / FRAME / MISSING VOICE.",
              "For each, write: EARNED, MANUFACTURED, or WOBBLY.",
              "Write one assessment paragraph: 'This piece [passes/fails/mixed] because [reasons]. The strongest appeal is [X]. The weakest is [Y]. I [trust/distrust/mixed] it because [reason].'",
              "Talk About It: what did the audit show that a quick read would have missed?",
            ],
          },
        ],
        dinnerQuestion:
          "What piece did we audit this week, and what did the full audit show that a quick read would have missed?",
        transfer: [
          { label: "Thinking", note: "The full audit is the thinking capstone applied to rhetoric." },
          { label: "AI", note: "The machine can fake all three. The audit is how you see the fakes." },
        ],
        ifTheySay: [
          {
            heard: "This is a lot of work for one piece.",
            reply: "It is. You do not need to do it on every piece. You need to do it once, well, so the skill exists when you need it. The first audit takes twenty-eight minutes. The second takes ten. The third takes five. The skill gets faster. The first time is the investment.",
          },
          {
            heard: "I can just check if it's from a model.",
            reply: "Knowing the source is one check. It does not replace the audit. A human can manufacture pathos. A model can produce real logos (from its training). The source is a clue. The audit is the proof. You need both.",
          },
        ],
        integrity:
          "The audit is honest. Run it on pieces you agree with. If you only audit the other side, the audit is a weapon. If you audit your own side too, it is a skill.",
        aiLab: {
          setup: "After the full audit.",
          childDoes:
            "Show the guide your assessment paragraph. Ask: 'Where am I wrong?' If it says 'your analysis is thoughtful,' that is flattery. If it names a specific gap in your audit, that is useful. Compare its critique to your paragraph. Did it catch something you missed?",
          evaluate: [
            "Did they run all five checks?",
            "Is the assessment paragraph honest (not all pass or all fail)?",
            "Can they name what the audit showed that a quick read would have missed?",
          ],
        },
      },
      adult: {
        title: "Rhetoric Is a Household Practice",
        dek: "The full toolkit is useless if it stays in the lesson. Bring it to the table once a week. The child learns by watching you use it.",
        objective:
          "The adult runs one rhetorical audit on a real household piece (a post, a model output, a speech) out loud at the table, and names the result for the child.",
        parentBriefing:
          "This is the adult capstone. The child has the toolkit. The adult's job is to use it once, out loud, on something real, at the table. A post you almost shared. A model's answer you almost trusted. A speech that moved you. You pause. You run the checks out loud, briefly. You name the verdict. The child hears you do rhetoric, not lecture about it. That moment is the lesson. One audit a week, at the table, is worth more than a year of lessons. The child who watches you audit will audit. The child who watches you share without pausing will share without pausing.",
        hardEdges: [
          "Do not turn dinner into a seminar. One brief audit, two minutes. If the child is interested, they will ask. If not, the audit still taught by example.",
          "Audit pieces you agree with too. If you only audit the other side, the child learns that rhetoric is a weapon, not a skill.",
        ],
        reading: [
          {
            heading: "Rhetoric at the table",
            body: "The table is where rhetoric lives or dies. You share a post, you react to a news story, you quote a model's answer. The child is watching. If you pause and audit out loud — 'Who earned the floor here? Did they earn the feeling? Does the evidence hold? What frame is this using? Who is missing?' — the child learns that rhetoric is something people do at dinner, not something they study in a book. Two minutes. One piece. Out loud. That is the practice. The child will start to do it without being asked. That is the goal: not a child who can define ethos, but a child who pauses before sharing a persuasive piece and asks whether it was earned.",
          },
          {
            heading: "The audit you agree with",
            body: "The hardest audit is the one on your own side. The post that says what you believe, with the feeling you feel, using reasons that sound right to you. That is the post you would share without pausing. That is the post where the audit matters most. If you audit it out loud and it holds, share it with confidence. If you audit it and it wobbles, the pause saved you from sharing a facade on your own side. The child who watches you audit your own side learns that the skill is honest. The child who watches you only audit the other side learns that the skill is a weapon. Choose the lesson.",
          },
        ],
        bigIdea:
          "One audit a week, at the table, out loud. The child learns by watching you use the toolkit, not by hearing you describe it.",
        tryThis: [
          {
            title: "The table audit",
            minutes: 10,
            steps: [
              "This week, bring one persuasive piece to the table: a post, a model output, a news clip.",
              "Pause before you share your opinion. Run the five checks out loud, briefly.",
              "Name the verdict: earned, manufactured, or mixed.",
              "If the piece is on your side, say so. Audit it anyway. That is the lesson.",
              "Let the child see you decide whether to trust it. The decision is the skill.",
            ],
          },
        ],
        dinnerQuestion:
          "What did we audit at the table this week, and did it hold or wobble?",
        transfer: [
          { label: "Parenting", note: "The audit you model at the table is the audit they will run when you are not there." },
          { label: "Thinking", note: "The full thinking toolkit — claim, steel-man, change-your-mind — converges with rhetoric here." },
        ],
        ifTheySay: [
          {
            heard: "Dinner is not a classroom.",
            reply: "It is not. It is a table where you share things. The audit is two minutes of pausing before you share. That is not a classroom. It is a habit. The classroom teaches the vocabulary. The table teaches the practice.",
          },
          {
            heard: "I don't want to be paranoid about everything.",
            reply: "You are not auditing everything. You are pausing once a week on one piece. That is not paranoia. It is attention. The machine is the most persuasive voice your child will ever encounter. One pause a week is the minimum practice.",
          },
        ],
        integrity:
          "Audit your own side. If you only audit pieces you disagree with, the child learns that rhetoric is a weapon. If you audit your own side, the child learns it is a skill.",
        aiLab: {
          setup: "After the table audit.",
          childDoes:
            "If the piece was a model output, ask the child: 'Was it earned or manufactured?' Let them answer. Then ask the guide the same question. Compare the child's answer to the model's. The child's is the one that matters.",
          evaluate: [
            "Did you run the audit out loud at the table?",
            "Did you audit a piece you agree with at least once?",
            "Did the child see you decide based on the audit?",
          ],
        },
      },
    },
  }),
];
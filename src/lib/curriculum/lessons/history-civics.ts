import { expand } from "./factory";

export const historyCivicsLessons = [
  // ── 1. The Words Before the Story ───────────────────────────────────
  ...expand({
    slug: "words-before-story",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Words Before the Story",
        dek: "Before anyone tells you what the Founders meant, read what they wrote. The words are first. The story is second.",
        objective:
          "The student can read one sentence from the Declaration of Independence, write what it actually says, and distinguish that from what a summary says it says.",
        parentBriefing:
          "This is the first sitting on primary text. The rule is the same as Source Before Summary: read the words before anyone compresses them. The Declaration and Constitution are short enough to read in pieces. Start with one sentence. 'We hold these truths to be self-evident, that all men are created equal.' Read it. Write what it says. Then read a summary. Compare. The summary will have added things and dropped things. The gap is the lesson. This is not about agreeing with the Founders. It is about reading them before judging them.",
        hardEdges: [
          "Do not sermonize the Founders. Read the words, including the ones that are ugly by today's standards.",
          "The Declaration says 'all men.' It did not mean all people. That gap is real. Name it, do not erase it.",
        ],
        reading: [
          {
            heading: "The words are first",
            body: "Before a textbook tells you what the Founders meant, read what they wrote. The words are the source. The textbook is a summary. The summary chooses what to keep and what to drop. If you read the summary first, you will not notice what was dropped. If you read the words first, you will. Start with one sentence. Read it slowly. Write what it says. Then read a summary of the same sentence. What did the summary add? What did it drop? The gap is the lesson. This is how a citizen reads: words first, story second.",
          },
          {
            heading: "The ugly words",
            body: "The Declaration says 'all men are created equal.' It did not mean women. It did not mean enslaved people. It did not mean Indigenous people. That gap between the words and the reality is not a footnote. It is the history. The citizen who reads the words and names the gap is reading honestly. The citizen who reads the words and pretends the gap is not there is reading propaganda. Read the words. Name the gap. Both are the history. Neither alone is.",
          },
        ],
        bigIdea:
          "Read the words before the story. The summary adds and drops. The gap is the lesson. Name the ugly gaps too.",
        tryThis: [
          {
            title: "One sentence",
            minutes: 16,
            steps: [
              "Read one sentence from the Declaration: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.'",
              "Write what it says. Not what you think it means. What it says.",
              "Now ask the model to summarize the same sentence. Save the summary.",
              "Compare: what did the summary add? What did it drop?",
              "Name the gap: 'all men' did not mean all people. Write that.",
              "Talk About It: what did the words have that the summary did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What words did we read today from the founding, and what did the summary miss?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the same rule, applied to founding documents." },
          { label: "English", note: "Reading: the words are the source. The interpretation is the summary." },
        ],
        ifTheySay: [
          {
            heard: "I know what the Declaration says.",
            reply: "You might know what a summary says. Read the actual words. The summary and the words are not the same. The gap is the lesson.",
          },
          {
            heard: "The Founders were hypocrites.",
            reply: "Some were. Read the words and name the gap between the words and their actions. That is honest history. 'Hypocrites' without the words is a slogan. The words plus the gap is the reading.",
          },
        ],
        integrity:
          "Do not cite a model summary as the source. The words are the source. The summary is the model's compression. Cite the document.",
        aiLab: {
          setup: "After the comparison.",
          childDoes:
            "Ask the model: 'What did you drop from the sentence in your summary?' If it names what it dropped, that is honest. If it says 'I aimed to capture the essence,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they read the actual words first?",
            "Did they identify what the summary added and dropped?",
            "Did they name the gap between 'all men' and the reality?",
          ],
        },
      },
      emerging: {
        title: "Primary Text, Not Storybook",
        dek: "A republic requires citizens who have read the documents. Not summaries of the documents. The documents.",
        objective:
          "The student can read a paragraph from the Declaration or Constitution, write what it says without interpretation, compare it to a model summary, and name three additions or deletions.",
        parentBriefing:
          "This sitting builds on the young version. The student reads a full paragraph from a founding document, writes what it says without interpretation, then compares to a model summary. The skill is the same as Source Before Summary, applied to civic text. The student who can read a paragraph and name what a summary added or dropped has learned that even civic text gets compressed, and the compression is not neutral.",
        hardEdges: [
          "Do not let the student skip the reading. The reading is the sitting.",
          "The Constitution contains the three-fifths clause and the fugitive slave clause. When you reach them, read them. Do not skip. Name what they are.",
        ],
        reading: [
          {
            heading: "The document and the summary",
            body: "A republic is a moral practice. It requires citizens who have read the documents, not summaries of the documents. The Declaration is about 1,300 words. The Constitution is about 4,500. Both are shorter than a textbook chapter about them. The citizen who reads the documents has read the source. The citizen who reads the summary has read someone's compression. The compression chooses. It keeps some things and drops others. Sometimes it drops the ugly parts. Sometimes it drops the surprising parts. The citizen who reads the documents knows what was dropped. The citizen who only reads summaries does not. Read the document. Then read the summary. The gap is the lesson.",
          },
          {
            heading: "The ugly clauses",
            body: "The Constitution contains the three-fifths clause: enslaved people counted as three-fifths of a person for representation. It contains the fugitive slave clause: escaped enslaved people must be returned. These clauses are in the document. They are not in most summaries. They are not in most storybook versions of the founding. The citizen who reads the Constitution and finds these clauses has read the real document. The citizen who reads a summary that dropped them has read a cleaned-up version. The cleaned-up version is not the Constitution. It is propaganda. Read the real thing. Name the ugly parts. The naming is the citizenship.",
          },
        ],
        bigIdea:
          "A republic requires citizens who read the documents. Not summaries. The ugly clauses are in the document. Read them.",
        tryThis: [
          {
            title: "Read and compare",
            minutes: 22,
            steps: [
              "Read the preamble to the Constitution. Write what it says, without interpretation.",
              "Ask the model to summarize the preamble. Save the summary.",
              "Compare: what did the summary add? Drop? Change?",
              "Write three additions or deletions.",
              "Now read one ugly clause (three-fifths or fugitive slave). Write what it says. Ask: was this in the summary?",
              "Talk About It: what does the cleaned-up summary miss that the document has?",
            ],
          },
        ],
        dinnerQuestion:
          "What did the founding document say this week that the summary did not?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the same discipline, applied to civic text." },
          { label: "English", note: "Rhetoric: the Declaration is a piece of rhetoric. Analyze its appeals." },
        ],
        ifTheySay: [
          {
            heard: "The summary is easier to understand.",
            reply: "It is. It is also someone else's choices about what to keep. The document is the source. The summary is the compression. Read the source first. Use the summary as a comparison, not a replacement.",
          },
          {
            heard: "The ugly clauses are in the past.",
            reply: "They are in the document. The document is the foundation of the republic. The citizen who does not know what is in the foundation does not know what they are standing on. Read it. Name it. The naming is not guilt. It is literacy.",
          },
        ],
        integrity:
          "Cite the document. Do not cite the model summary as the source. The document is the source. The summary is a compression. Label both.",
        aiLab: {
          setup: "After the comparison.",
          childDoes:
            "Ask the model: 'What did you drop from the preamble in your summary?' If it names the drops, that is honest. If it says 'I captured the key points,' ask: 'Who decided what is key?' The answer is instructive.",
          evaluate: [
            "Did they read the actual document first?",
            "Did they name three additions or deletions in the summary?",
            "Did they read at least one ugly clause?",
          ],
        },
      },
      adult: {
        title: "Read the Document With Them",
        dek: "If you argue from a recap, your child will argue from a recap. Read one page of the document with them. Words first.",
        objective:
          "The adult reads one page of a founding document with the child, writes what it says without interpretation, and models that citizens read the source before the summary.",
        parentBriefing:
          "The adult models reading the document. Not a recap. Not a summary. The actual words. One page of the Declaration or Constitution. Read it with the child. Write what it says. Do not interpret. Do not add. Just write what the words say. Then, if you want, read a summary. Compare. The child who sees an adult read the source first learns that citizens read the document. The child who sees an adult argue from a recap learns that citizens argue from summaries. The reading is the inheritance.",
        hardEdges: [
          "Do not sermonize the founding. Read the words, including the ugly ones, when you reach them.",
          "Do not outsource the reading to the model. The model is a summary machine. The reading is yours.",
        ],
        reading: [
          {
            heading: "The household reading",
            body: "The household reads things together. If the founding documents are not in the household reading, the child learns they are school things, not life things. Read one page. The Declaration's first page. The Constitution's preamble. Write what it says. No interpretation. No summary. Just the words. The child who sees an adult do this learns: the document is for citizens, not just for classrooms. The adult who never reads the document with the child teaches: the document is a school assignment, not a civic practice. The reading is the inheritance. The words are the gift.",
          },
          {
            heading: "The ugly words at the table",
            body: "When you reach the ugly clauses, read them. The three-fifths clause. The fugitive slave clause. Do not skip. Do not soften. Read the words. Say: 'This is in the document. It is ugly. It is the foundation.' The child who hears an adult read the ugly parts without flinching learns that citizenship includes the parts that hurt. The child who hears an adult skip them learns that citizenship is only the parts that feel good. The skipping is propaganda. The reading is citizenship. Both are choices. Only one is honest.",
          },
        ],
        bigIdea:
          "Read the document with the child. Words first, summary second. Read the ugly parts too. The reading is the citizenship.",
        tryThis: [
          {
            title: "One page together",
            minutes: 15,
            steps: [
              "Read one page of a founding document with the child. Read aloud.",
              "Write what it says. No interpretation. No summary. Just the words.",
              "If you reach an ugly clause, read it. Say: 'This is in the document. It is ugly. It is the foundation.'",
              "If you want, compare to a summary. What did the summary drop?",
              "Let the child see you read the source first. The reading is the inheritance.",
            ],
          },
        ],
        dinnerQuestion:
          "What page of the founding did we read together this week, and what did the words say?",
        transfer: [
          { label: "Parenting", note: "The reading you model is the reading they will do as citizens." },
          { label: "History", note: "Source Before Summary: this is the deeper version, applied to founding documents." },
        ],
        ifTheySay: [
          {
            heard: "They won't understand the old language.",
            reply: "They will understand more than you think. The language is old, not opaque. Read it slowly. Stop and ask: 'What does this sentence say?' They will tell you. The understanding comes from the reading, not from a modern translation first.",
          },
          {
            heard: "I don't want to read the ugly parts with my child.",
            reply: "Then the child learns that citizenship skips the ugly parts. That is propaganda. Read them. Name them. Say: 'This is in the foundation. We read it because it is ours, not because it is good.' The honesty is the citizenship.",
          },
        ],
        integrity:
          "Do not skip the ugly clauses. Do not present a summary as the document. The reading is honest or it is propaganda. Choose honest.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to summarize the page you read. Compare to your written version. What did it drop? If it dropped the ugly parts, that is the lesson. The model is a summary machine. The reading is yours.",
          evaluate: [
            "Did you read the actual document with the child?",
            "Did you write what it says without interpretation?",
            "Did you read the ugly parts without skipping?",
          ],
        },
      },
    },
  }),

  // ── 2. The Declaration as Rhetoric ──────────────────────────────────
  ...expand({
    slug: "declaration-rhetoric",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Declaration as Rhetoric",
        dek: "The Declaration is not just a list of complaints. It is a speech. It uses ethos, pathos, and logos. Read it that way.",
        objective:
          "The student can identify one example of ethos, pathos, and logos in the Declaration of Independence and explain how each appeal works.",
        parentBriefing:
          "This sitting connects the Rhetoric unit to the founding documents. The Declaration is a piece of rhetoric. It establishes ethos (we have the right to speak), uses logos (here is the list of facts), and deploys pathos (appealing to the world's opinion). The student who can see the appeals in the Declaration has connected rhetoric to citizenship. The model can summarize the Declaration. It cannot analyze the appeals unless asked. The student asks. The analysis is the citizenship.",
        hardEdges: [
          "Do not reduce the Declaration to a rhetoric exercise. It is also a historical document. The rhetoric is one lens, not the only one.",
          "The model can do this analysis if asked. The point is that the student does it first, then checks.",
        ],
        reading: [
          {
            heading: "Three appeals in one document",
            body: "The Declaration of Independence is a speech. It uses the three appeals Aristotle named. Ethos: 'When in the course of human events, it becomes necessary for one people to dissolve the political bands...' That sentence establishes the right to speak. It claims the authority to act. Pathos: 'appealing to the Supreme Judge of the world for the rectitude of our intentions.' That appeals to a shared moral sense. Logos: 'He has refused his Assent to Laws... He has forbidden his Governors... He has obstructed the Administration of Justice...' That is the evidence. The list of grievances is the logos. The Declaration is not just a list. It is a speech that uses all three appeals. The citizen who can see them reads the Declaration as rhetoric, not just as history.",
          },
        ],
        bigIdea:
          "The Declaration is a speech. It uses ethos, pathos, and logos. Read it as rhetoric, not just as history.",
        tryThis: [
          {
            title: "Find the appeals",
            minutes: 16,
            steps: [
              "Read the first two paragraphs of the Declaration.",
              "Find ETHOS: where does it establish the right to speak?",
              "Find PATHOS: where does it appeal to feelings or moral sense?",
              "Find LOGOS: where does it give reasons and evidence?",
              "Write one sentence for each: 'This is [appeal] because [reason].'",
              "Talk About It: which appeal is strongest? Which is weakest?",
            ],
          },
        ],
        dinnerQuestion:
          "Which appeal in the Declaration was strongest, and which was weakest?",
        transfer: [
          { label: "English", note: "Rhetoric in the Age of Fluency: the same three appeals, applied to a real document." },
          { label: "Thinking", note: "The check: the appeals are claims. The grievances are the evidence." },
        ],
        ifTheySay: [
          {
            heard: "It's just an old document.",
            reply: "It is a speech that uses the same appeals every speech uses. Reading it as rhetoric shows you how it works, not just what it says. The rhetoric is the craft. The craft is the citizenship.",
          },
        ],
        integrity:
          "Do not present the model's analysis as yours. If you asked the model to find the appeals, cite it. Your analysis is yours. Its analysis is the check.",
        aiLab: {
          setup: "After the student's analysis.",
          childDoes:
            "Ask the model: 'Find ethos, pathos, and logos in the Declaration.' Compare to yours. Did it find the same passages? Did it miss any? The model is a checker, not the analyst. You are the analyst.",
          evaluate: [
            "Did they find all three appeals?",
            "Did they write a reason for each?",
            "Did they connect rhetoric to citizenship?",
          ],
        },
      },
      emerging: {
        title: "The Declaration as Argument",
        dek: "The Declaration is an argument: a claim (we have the right to independence), evidence (the list of grievances), and a conclusion (we are independent). Audit it.",
        objective:
          "The student can deconstruct the Declaration into claim, evidence, and conclusion, evaluate the strength of the evidence, and name one weakness in the argument.",
        parentBriefing:
          "This sitting teaches the student to audit the Declaration as an argument. The claim: the colonies have the right to independence. The evidence: the list of grievances against the King. The conclusion: the colonies are independent. The student evaluates: is the evidence strong? Does it support the claim? Are there weaknesses? The model can summarize the argument. The student audits it. The audit is the citizenship. The citizen who can audit the Declaration can audit any political argument, from any source, in any era.",
        hardEdges: [
          "Do not make this a takedown of the Declaration. The point is the audit, not the verdict. The audit might find the argument strong.",
          "The grievances include exaggerations and omissions. Name them. The naming is the audit.",
        ],
        reading: [
          {
            heading: "The argument structure",
            body: "The Declaration has a structure. It opens with a claim: when a government destroys rights, the people may abolish it. It provides evidence: a list of grievances against the King. It concludes: therefore, we are independent. The structure is an argument. The citizen who can see the structure can audit it. Is the claim justified? Is the evidence sufficient? Are the grievances accurate? Some grievances are specific and verifiable. Others are vague and rhetorical. Some are exaggerated for effect. The audit names the difference. The Declaration is a strong argument. It is not a perfect one. The citizen who can name both is reading with eyes open.",
          },
          {
            heading: "The missing voices",
            body: "The Declaration says 'all men are created equal.' It was written by men, some of whom enslaved people. It did not include women, Indigenous people, or the enslaved. The argument claims universality. The reality was partial. That gap is not a reason to dismiss the Declaration. It is a reason to read it honestly. The citizen who can say 'the argument claims equality, the reality was partial, and the gap is the history' has read the Declaration as a citizen, not as a fan or a critic. Both the argument and the gap are the document. Neither alone is the reading.",
          },
        ],
        bigIdea:
          "The Declaration is an argument. Audit it: claim, evidence, conclusion. Name the strengths, the weaknesses, and the missing voices.",
        tryThis: [
          {
            title: "Audit the Declaration",
            minutes: 22,
            steps: [
              "Read the Declaration. Deconstruct: CLAIM / EVIDENCE / CONCLUSION.",
              "Evaluate the evidence: are the grievances specific? Verifiable? Exaggerated?",
              "Name one strength: which grievances are strong?",
              "Name one weakness: which are vague or rhetorical?",
              "Name the missing voices: who is not in the 'all men'?",
              "Write: 'The Declaration argues [claim] with [evidence]. The strongest piece is [X]. The weakest is [Y]. The missing voice is [Z].'",
              "Talk About It: does the audit change how you read the document?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we find when we audited the Declaration this week?",
        transfer: [
          { label: "English", note: "Rhetoric: the full argument audit, applied to the founding." },
          { label: "Thinking", note: "Bias: the missing voices are the same gap the bias unit teaches." },
        ],
        ifTheySay: [
          {
            heard: "It's a sacred document.",
            reply: "It is a document. Sacred is a feeling about it. The audit is a reading of it. You can revere the document and audit it. The reverence without the audit is faith. The audit without the reverence is cynicism. Both together is citizenship.",
          },
          {
            heard: "It's just propaganda.",
            reply: "It is an argument. Propaganda does not invite audit. The Declaration does: it lists its evidence and invites the world to judge. The audit is the response to that invitation. If you call it propaganda without auditing it, you are doing less than the document asks.",
          },
        ],
        integrity:
          "Cite the document. Name the strengths and the weaknesses. The honest audit is the citizenship. The one-sided audit is propaganda in the other direction.",
        aiLab: {
          setup: "After the audit.",
          childDoes:
            "Ask the model: 'Audit the Declaration as an argument.' Compare to your audit. Did it find the same strengths and weaknesses? Did it name the missing voices? If it skipped the missing voices, that is the lesson. The model is a summary machine. The missing voices are yours to name.",
          evaluate: [
            "Did they deconstruct the argument into claim, evidence, conclusion?",
            "Did they name a strength and a weakness?",
            "Did they name the missing voices?",
          ],
        },
      },
      adult: {
        title: "The Declaration at the Table",
        dek: "The Declaration is a speech your child should hear read aloud, at least once, by a person who means it. Read it.",
        objective:
          "The adult reads the Declaration of Independence aloud at the table, names one appeal and one weakness, and models that citizens read the founding as rhetoric and argument, not as scripture.",
        parentBriefing:
          "The adult reads the Declaration aloud. At the table. Not the summary. The actual words. It takes about ten minutes. Then the adult names one appeal (ethos, pathos, or logos) and one weakness (a vague grievance, the missing voices). The child who hears the Declaration read aloud by a person who means it experiences it as a speech, not as a textbook excerpt. That experience is the inheritance. The adult who never reads it teaches the child that the founding is a school thing. The adult who reads it teaches the child that the founding is a citizen thing.",
        hardEdges: [
          "Do not sermonize. Read the words. Name one appeal and one weakness. Stop.",
          "If the child asks about the gap between 'all men' and the reality, answer honestly. Do not dodge.",
        ],
        reading: [
          {
            heading: "The out-loud Declaration",
            body: "The Declaration was meant to be read aloud. It is a speech. Read it at the table. The child who hears it read by a person who means it will never confuse it with a textbook. They will hear the rhetoric. They will feel the pathos. They will see the logos in the list of grievances. Then you name one weakness: 'all men did not mean all people.' The child who hears the strength and the weakness in the same sitting has learned citizenship in ten minutes. The Declaration is not scripture. It is a speech. Read it as a speech. Name the appeals. Name the gaps. Both are the reading.",
          },
        ],
        bigIdea:
          "Read the Declaration aloud at the table. Name one appeal and one weakness. The child hears it as a speech, not as scripture.",
        tryThis: [
          {
            title: "Read it aloud",
            minutes: 15,
            steps: [
              "Read the Declaration of Independence aloud at the table. The whole thing. It takes about ten minutes.",
              "After reading, name one appeal: 'This part is [ethos/pathos/logos] because [reason].'",
              "Name one weakness: 'This part is weak because [reason]' or 'all men did not mean all people.'",
              "Let the child hear both the strength and the weakness. Both are the reading.",
              "Talk About It: what did hearing it aloud do that reading it silently did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What did we hear when the Declaration was read aloud this week?",
        transfer: [
          { label: "Parenting", note: "The reading you model is the citizenship they will practice." },
          { label: "English", note: "Rhetoric: hearing the appeals aloud is the lesson the rhetoric unit teaches." },
        ],
        ifTheySay: [
          {
            heard: "It's too long to read aloud.",
            reply: "It is about 1,300 words. It takes ten minutes. That is shorter than a bedtime story. If you have ten minutes for a story, you have ten minutes for the founding.",
          },
          {
            heard: "The child won't understand it.",
            reply: "They will understand more than you think. The language is old, not opaque. And the hearing is the lesson, even if they do not understand every word. They hear a citizen read the founding aloud and name both its strength and its weakness. That hearing teaches more than understanding every word.",
          },
        ],
        integrity:
          "Name a weakness. If you only name strengths, the reading is propaganda. If you only name weaknesses, the reading is cynicism. Both is the reading.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to summarize the Declaration in one paragraph. Compare the summary to the reading. What did the summary drop? The dropping is the lesson. The reading is yours. The summary is the compression.",
          evaluate: [
            "Did you read the Declaration aloud?",
            "Did you name one appeal and one weakness?",
            "Did the child hear it as a speech, not as scripture?",
          ],
        },
      },
    },
  }),

  // ── 3. The Constitution as a Design Document ────────────────────────
  ...expand({
    slug: "constitution-design",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Constitution Is a Design",
        dek: "The Constitution is not a list of rules. It is a design for a government. It says who has power, who checks it, and who can change it.",
        objective:
          "The student can name the three branches of government, describe one power each has, and explain how one branch checks another.",
        parentBriefing:
          "This sitting teaches the student that the Constitution is a design document. It designs a government: three branches, each with powers, each checking the others. The student needs to see the design, not just memorize the branches. The model can list the branches. The student needs to understand why the design exists: because people with power will abuse it unless checked. The design is the lesson. The checks are the lesson. The model gives the list. The student reads the design.",
        hardEdges: [
          "Do not make this a civics memorization drill. The point is the design, not the list.",
          "The three-fifths clause is part of the design. When you reach it, name it. It is not a bug. It was a compromise.",
        ],
        reading: [
          {
            heading: "The design",
            body: "The Constitution designs a government. It creates three branches: the legislative (writes laws), the executive (carries out laws), and the judicial (judges laws). Each branch has powers. Each branch checks the others. The President can veto a law. Congress can override the veto. The courts can strike down a law. The President appoints judges. Congress approves them. This is not a list. It is a design. The design exists because the people who wrote it did not trust power in one set of hands. They had seen what happens when a king has all the power. They designed a system where no one has all the power. That design is the Constitution. The citizen who understands the design understands the republic. The citizen who memorizes the list does not.",
          },
          {
            heading: "The compromise",
            body: "The design includes compromises. The three-fifths clause was a compromise between states that enslaved people and states that did not. Enslaved people counted as three-fifths of a person for representation, but they could not vote. The compromise was a design choice. It was ugly. It was also the price of getting the states to agree. The citizen who reads the design and names the compromise understands that the Constitution was not handed down by angels. It was negotiated by people who disagreed, some of whom enslaved other people. The design is brilliant. The compromise is ugly. Both are the Constitution. The citizen reads both.",
          },
        ],
        bigIdea:
          "The Constitution is a design: three branches, checks and balances. The design is brilliant. The compromises are ugly. Both are the document.",
        tryThis: [
          {
            title: "See the design",
            minutes: 16,
            steps: [
              "Read Article I (legislative), Article II (executive), and Article III (judicial). They are short.",
              "Write: LEGISLATIVE [power], EXECUTIVE [power], JUDICIAL [power].",
              "Write one check: 'The [branch] can check the [branch] by [action].'",
              "Name one compromise: the three-fifths clause. What was it? Why was it there?",
              "Talk About It: why did the designers not trust one branch with all the power?",
            ],
          },
        ],
        dinnerQuestion:
          "What part of the Constitution's design did we see today, and what compromise did we name?",
        transfer: [
          { label: "CS", note: "Specify the Agent: the Constitution is a spec for a government. Same idea." },
          { label: "Thinking", note: "Frames: the Constitution frames the government. Seeing the frame is the same skill." },
        ],
        ifTheySay: [
          {
            heard: "I know the three branches.",
            reply: "You know the list. Do you know the design? Why three? Why checks? Why not one branch with all the power? The list is memorization. The design is understanding.",
          },
        ],
        integrity:
          "Do not present the model's summary as the Constitution. Read the articles. The design is in the text, not in the summary.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Explain the design of the Constitution, not the list.' Compare to your understanding. Did it explain the checks, or just list the branches? The explanation is the design. The list is the memorization.",
          evaluate: [
            "Did they name the three branches and one power each?",
            "Did they name one check?",
            "Did they name the three-fifths compromise?",
          ],
        },
      },
      emerging: {
        title: "The Constitution as Architecture",
        dek: "The Constitution is architecture: a structure of power, checks, and amendment. Read it as a design, not as a list of rules.",
        objective:
          "The student can describe the Constitution's architecture (separation of powers, checks and balances, amendment process), identify one design tension, and explain why the design matters for citizenship.",
        parentBriefing:
          "This sitting teaches the student to read the Constitution as architecture. The design has three elements: separation of powers (no one branch has all the power), checks and balances (each branch can stop the others), and amendment (the document can be changed). The student needs to see the architecture and name one tension: the three-fifths compromise, the tension between liberty and security, the tension between state and federal power. The architecture is not perfect. It is a design. The citizen who can see the design and name the tension has read the Constitution as a citizen.",
        hardEdges: [
          "Do not make this a worship of the design. The design is brilliant and flawed. Name both.",
          "Academic integrity: cite the Constitution, not a model summary. The text is the source.",
        ],
        reading: [
          {
            heading: "The architecture",
            body: "The Constitution is architecture. It separates power into three branches so that no one has all of it. It gives each branch a check on the others so that power resists power. It includes an amendment process so that the document can be changed by the people, not by force. The architecture is a design for a government that does not trust power in one set of hands. The citizen who sees the architecture can evaluate it: where does it work? Where does it fail? Where does the design create tension? The three-fifths clause was a design tension: the compromise between slavery and union. The tension between federal and state power is a design tension that still exists. The amendment process is a design feature that allows the document to evolve. The citizen who can name the architecture and the tensions is reading the Constitution as a design, not as a rulebook.",
          },
          {
            heading: "Why the design matters",
            body: "The design matters because it is the structure of your government. The citizen who does not understand the structure cannot evaluate whether it is working. Is the balance of power holding? Are the checks functioning? Is the amendment process accessible? These are civic questions. They require understanding the design. The model can summarize the design. The student must understand it. The understanding is the citizenship. The citizen who can say 'the design separates power because the designers did not trust concentrated power, and here is one place where the design is under strain today' has connected the founding to the present. That connection is the citizenship.",
          },
        ],
        bigIdea:
          "The Constitution is architecture: separation, checks, amendment. See the design. Name the tensions. The understanding is the citizenship.",
        tryThis: [
          {
            title: "Read the architecture",
            minutes: 22,
            steps: [
              "Read Articles I, II, and III. Map the architecture: LEGISLATIVE / EXECUTIVE / JUDICIAL.",
              "Name three checks: one for each branch on another.",
              "Read Article V (amendment). How can the document change?",
              "Name one design tension: three-fifths, federal vs. state, liberty vs. security.",
              "Write: 'The Constitution designs [architecture]. One check is [X]. One tension is [Y]. The design matters because [Z].'",
              "Talk About It: where is the design under strain today?",
            ],
          },
        ],
        dinnerQuestion:
          "What part of the Constitution's architecture did we understand this week, and where is it under strain?",
        transfer: [
          { label: "CS", note: "Specify the Agent: the Constitution is a spec. The checks are the refuse-list. Same idea." },
          { label: "Thinking", note: "Frames: the Constitution frames the government. Seeing the frame is the same skill." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is outdated.",
            reply: "Parts of it are. The design includes an amendment process for that reason. The citizen who says 'it's outdated' without understanding the design is complaining. The citizen who understands the design and uses the amendment process is participating. Both are allowed. Only one is citizenship.",
          },
          {
            heard: "The model can explain this better.",
            reply: "The model can summarize the design. It cannot understand it for you. The understanding is yours. The model is a starting point. The reading is the citizenship. Read the articles. Then check with the model. The order matters.",
          },
        ],
        integrity:
          "Cite the Constitution. Name the architecture and the tensions. Do not present a model summary as your reading. The text is the source.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What is one design tension in the Constitution?' Compare to yours. Did it name the same tension? Did it name one you missed? The model is a checker. You are the reader.",
          evaluate: [
            "Did they map the three branches and three checks?",
            "Did they read Article V and name the amendment process?",
            "Did they name one design tension and connect it to the present?",
          ],
        },
      },
      adult: {
        title: "Read the Design With Them",
        dek: "If you do not understand the design of your government, the child will not either. Read one article of the Constitution with them. See the design.",
        objective:
          "The adult reads one article of the Constitution with the child, names one design feature and one tension, and models that citizens understand the architecture of their government.",
        parentBriefing:
          "The adult reads one article of the Constitution with the child. Article I, II, or III. The adult names one design feature: 'Congress makes laws. The President carries them out. The courts judge them. This is a design so that no one has all the power.' The adult names one tension: 'The three-fifths clause was a compromise with slavery. It is in the design. It is ugly.' The child who sees an adult read the design and name the tension learns that citizenship includes understanding the architecture, including the ugly parts. The child who never sees it learns that the Constitution is a school thing, not a citizen thing.",
        hardEdges: [
          "Do not sermonize. Read the article. Name the feature and the tension. Stop.",
          "Do not skip the ugly parts. The three-fifths clause is in the design. Name it.",
        ],
        reading: [
          {
            heading: "The design at the table",
            body: "The adult reads one article of the Constitution at the table. Not a summary. The actual article. The child hears the words. The adult names one design feature and one tension. 'This is the design. This is the ugly compromise.' The child who sees an adult do this learns: the Constitution is a design document, the design is brilliant and flawed, and citizens read both. The child who never sees it learns: the Constitution is a symbol, not a design. The symbol without the design is decoration. The design with the tension is citizenship. Read the design. Name both.",
          },
        ],
        bigIdea:
          "Read one article of the Constitution with the child. Name one design feature and one tension. The design is the citizenship.",
        tryThis: [
          {
            title: "One article at the table",
            minutes: 15,
            steps: [
              "Read one article of the Constitution with the child. Article I, II, or III.",
              "Name one design feature: 'This branch has [power]. It checks [other branch] by [action].'",
              "Name one tension: the three-fifths clause, federal vs. state, liberty vs. security.",
              "Say: 'This is the design. It is brilliant. It has ugly compromises. Both are the Constitution.'",
              "Let the child hear both. The hearing is the inheritance.",
            ],
          },
        ],
        dinnerQuestion:
          "What article did we read this week, and what did the design show us?",
        transfer: [
          { label: "Parenting", note: "The design you read is the design they will understand as citizens." },
          { label: "CS", note: "Specify the Agent: the Constitution is the spec. The checks are the refuse-list. Same idea." },
        ],
        ifTheySay: [
          {
            heard: "I don't understand the Constitution.",
            reply: "Then read it with the child and learn together. The honesty of learning together teaches more than pretending to understand. Read one article. Look up words you do not know. The reading is the citizenship. The understanding comes from the reading.",
          },
          {
            heard: "The child doesn't need to know this yet.",
            reply: "If the child is old enough to live in the republic, they are old enough to start reading its design. One article. One feature. One tension. That is the start. The understanding grows. The start is the reading.",
          },
        ],
        integrity:
          "Name the tension. If you only name the brilliance, the reading is propaganda. If you only name the ugliness, the reading is cynicism. Both is the citizenship.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to explain the article you read. Compare to your understanding. Did it name the design feature? Did it name the tension? If it skipped the tension, that is the lesson. The model is a summary machine. The tension is yours to name.",
          evaluate: [
            "Did you read one article of the Constitution?",
            "Did you name one design feature and one tension?",
            "Did the child hear both the brilliance and the ugliness?",
          ],
        },
      },
    },
  }),

  // ── 4. The Missing Voices in the Founding ───────────────────────────
  ...expand({
    slug: "missing-voices-founding",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Was Not in the Room?",
        dek: "The Declaration said 'all men.' The room did not have women, enslaved people, or Indigenous people. The gap is the history.",
        objective:
          "The student can name one group whose voice was missing from the founding documents and describe how the document would have been different if they had been in the room.",
        parentBriefing:
          "This sitting applies the missing-voices skill from the thinking unit to the founding. The Declaration says 'all men.' The room that wrote it had no women, no enslaved people, no Indigenous people, no people without property. The documents reflect the room. The gap is the history. The student needs to name one missing group and imagine how the document would have been different. Not to dismiss the founding. To read it honestly. The citizen who can name the missing voices has read the founding as a citizen, not as a fan.",
        hardEdges: [
          "Do not make this a dismissal of the founding. The point is honest reading, not rejection.",
          "Keep it concrete: name one group, describe one difference.",
        ],
        reading: [
          {
            heading: "The room",
            body: "The Declaration was written by a room of men, most of whom owned property, some of whom enslaved people. The room did not have women. It did not have enslaved people. It did not have Indigenous people. It did not have people without property. The document says 'all men are created equal.' The room that wrote it did not include all people. The gap between the words and the room is the history. The citizen who reads the words and names the gap is reading honestly. The citizen who reads the words and pretends the room was full is reading propaganda. Read the words. Name the room. Name who was not in it. All three are the history.",
          },
        ],
        bigIdea:
          "The founding was written by a room that did not include everyone. The gap between the words and the room is the history.",
        tryThis: [
          {
            title: "Who was not in the room?",
            minutes: 14,
            steps: [
              "Read the opening of the Declaration. 'All men are created equal.'",
              "Name who was in the room: men, property owners, some enslavers.",
              "Name who was not: women, enslaved people, Indigenous people, people without property.",
              "Ask: if enslaved people had been in the room, would the document have said 'all men'?",
              "Talk About It: how would the document have been different with the missing voices?",
            ],
          },
        ],
        dinnerQuestion:
          "Who was not in the room when the founding was written, and how would it have been different?",
        transfer: [
          { label: "Thinking", note: "Missing voices: the same skill, applied to the founding." },
          { label: "English", note: "Rhetoric: the missing voices change the argument. Same lesson." },
        ],
        ifTheySay: [
          {
            heard: "We can't judge the past by today's standards.",
            reply: "This is not judgment. This is reading. The room did not include everyone. That is a fact, not a judgment. Naming the fact is literacy. Judging is a separate act. Read first. Judge later, if you want. Do not skip the reading.",
          },
        ],
        integrity:
          "Do not ask the model to speak for the missing voices. The model cannot. The missing voices are in real people, real texts, real histories. Find those. The model is a summary, not a voice.",
        aiLab: {
          setup: "After naming the missing voices.",
          childDoes:
            "Ask the model: 'Who was not in the room when the Declaration was written?' If it names the groups, that is honest. If it says 'the Founders aimed for universal principles,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they name one missing group?",
            "Did they describe how the document would have been different?",
            "Can they distinguish reading the gap from judging the past?",
          ],
        },
      },
      emerging: {
        title: "The Founding and the Missing",
        dek: "The founding documents claim universality and were written by a partial room. The gap between the claim and the room is not a footnote. It is the central tension of the republic.",
        objective:
          "The student can identify the gap between the founding documents' universal claims and their partial authorship, name two missing voices, and find one real source for a missing voice.",
        parentBriefing:
          "This sitting applies the full missing-voices cycle to the founding. The documents claim universality ('all men are created equal'). The room was partial (men, property owners, some enslavers). The gap is the central tension of the republic. The student names two missing voices, finds one real source for a missing voice (Frederick Douglass, Abigail Adams, Indigenous speeches), and reads it. The reading of the missing voice alongside the founding document is the citizenship. The model cannot provide the missing voice. The student finds it in a real text.",
        hardEdges: [
          "Do not reduce the founding to its gaps. The point is reading both the document and the gap.",
          "Academic integrity: cite the real source for the missing voice, not the model. The model is not a voice.",
        ],
        reading: [
          {
            heading: "The universal claim and the partial room",
            body: "The Declaration claims that all men are created equal and are endowed with unalienable rights. The claim is universal. The room that wrote it was not. The room had no women, no enslaved people, no Indigenous people, no people without property. The gap between the universal claim and the partial room is not a contradiction to resolve. It is the central tension of the republic. The republic has spent 250 years trying to make the universal claim match the room. The amendments that ended slavery, granted citizenship, and gave women the vote were attempts to close the gap. The gap is not fully closed. The citizen who can name the gap, name the missing voices, and read their words has read the founding as a citizen. The citizen who reads only the founding and skips the gap has read propaganda.",
          },
          {
            heading: "Finding the missing voice",
            body: "The missing voices have real texts. Frederick Douglass's 'What to the Slave is the Fourth of July?' is a missing voice speaking back to the founding. Abigail Adams's 'Remember the Ladies' letter is a missing voice speaking to the room. Indigenous speeches and treaties are missing voices speaking to the republic. The student who finds one of these texts and reads it alongside the founding has completed the cycle: read the words, name the gap, find the missing voice, compare. The model cannot provide the missing voice. It can summarize the text. The student must read the text. The reading is the citizenship.",
          },
        ],
        bigIdea:
          "The founding claims universality and was written by a partial room. The gap is the central tension. Find the missing voices. Read them.",
        tryThis: [
          {
            title: "The full cycle",
            minutes: 25,
            steps: [
              "Read the opening of the Declaration. Name the universal claim.",
              "Name the room: who was in it? Who was not?",
              "Name two missing voices: women, enslaved people, Indigenous people, people without property.",
              "Find one real text from a missing voice: Douglass, Adams, Indigenous speeches, or others.",
              "Read the text. Write: 'The founding said [X]. The missing voice says [Y]. The gap is [Z].'",
              "Talk About It: how does the missing voice change the founding, not by dismissing it, but by completing it?",
            ],
          },
        ],
        dinnerQuestion:
          "What missing voice did we find this week, and what did it say back to the founding?",
        transfer: [
          { label: "Thinking", note: "Missing voices: the full cycle from the thinking unit, applied to the founding." },
          { label: "English", note: "Rhetoric: the missing voice is a counterargument. The founding is the argument. Both are the rhetoric." },
        ],
        ifTheySay: [
          {
            heard: "The Founders were products of their time.",
            reply: "They were. The missing voices were also products of their time, and they said so. Douglass said it in 1852. Adams said it in 1776. Indigenous leaders said it in treaties and speeches. 'Products of their time' is not an excuse to skip the voices that were there and were not heard. Read them.",
          },
          {
            heard: "I can just ask the model what the missing voices said.",
            reply: "You can ask for a summary. The summary is not the voice. Read the actual text: Douglass's speech, Adams's letter, the treaty. The model summarizes. The text speaks. Read the text.",
          },
        ],
        integrity:
          "Cite the real text for the missing voice. Do not cite the model as the source for the voice. The model is a summary. The text is the voice.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Show the model the founding text and the missing-voice text. Ask: 'What does the missing voice say that the founding does not?' If it says 'the missing voice highlights a contradiction,' that is correct but vague. If it quotes the missing voice, check the quote against the real text. The model might paraphrase. The paraphrase is not the voice.",
          evaluate: [
            "Did they name two missing voices?",
            "Did they find and read one real text?",
            "Can they state the gap between the founding claim and the missing voice?",
          ],
        },
      },
      adult: {
        title: "Read the Missing Voice With Them",
        dek: "The founding is half the story. The missing voices are the other half. Read one, with the child, alongside the founding.",
        objective:
          "The adult reads one text from a missing voice (Douglass, Adams, Indigenous speech) alongside a founding document, names the gap, and models that citizenship includes both the founding and the voices it left out.",
        parentBriefing:
          "The adult reads one missing-voice text with the child. Frederick Douglass's 'What to the Slave is the Fourth of July?' is the classic. Abigail Adams's 'Remember the Ladies' letter is shorter. An Indigenous treaty or speech is another. The adult reads the founding text and the missing-voice text in the same sitting. Names the gap. Says: 'The founding said this. The missing voice says this. Both are the republic.' The child who hears both has received the full inheritance. The child who hears only the founding has received half.",
        hardEdges: [
          "Do not make the missing voice a dismissal of the founding. The point is completion, not rejection.",
          "Choose a text the child can handle. Douglass's speech is powerful and direct. Adams's letter is brief. Choose what fits.",
        ],
        reading: [
          {
            heading: "The other half",
            body: "The founding documents are half the story. The missing voices are the other half. The adult who reads only the founding with the child teaches half the republic. The adult who reads a missing voice alongside the founding teaches the whole republic. 'The Declaration says all men are created equal. Frederick Douglass said in 1852: what to the slave is the Fourth of July? The gap between those two sentences is 76 years of people who were not included, speaking back.' That is the republic: the claim and the voice that calls the claim to account. Both. Not one. The child who hears both has received the inheritance. The child who hears one has received a selection.",
          },
        ],
        bigIdea:
          "Read one missing voice alongside the founding. The child who hears both has received the whole republic, not half.",
        tryThis: [
          {
            title: "Read both",
            minutes: 20,
            steps: [
              "Read a short founding text with the child: the Declaration's opening or the Constitution's preamble.",
              "Read a missing-voice text: Douglass's 'What to the Slave is the Fourth of July?' (excerpt), Adams's 'Remember the Ladies,' or an Indigenous speech.",
              "Name the gap: 'The founding said [X]. The missing voice says [Y]. The gap is [Z].'",
              "Say: 'Both are the republic. The claim and the call to account. The citizen reads both.'",
              "Talk About It: what did hearing both do that hearing one did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What missing voice did we read with the founding this week, and what did it say?",
        transfer: [
          { label: "Parenting", note: "The missing voice you read is the missing voice they will seek when you are not there." },
          { label: "Thinking", note: "Missing voices: the adult version of the thinking unit's capstone cycle." },
        ],
        ifTheySay: [
          {
            heard: "The child is too young for Douglass.",
            reply: "Then start with Adams's letter. It is one page. 'Remember the Ladies.' The child can hear it. The point is the practice of reading a missing voice alongside the founding. Start small. The practice grows.",
          },
          {
            heard: "I don't want to make the child feel guilty about the founding.",
            reply: "This is not about guilt. It is about completeness. The founding said one thing. The missing voice says another. Both are the republic. The child who hears both is not guilty. They are literate. Guilt is a feeling. Literacy is a skill. Teach the skill.",
          },
        ],
        integrity:
          "Cite the real text. Do not ask the model to speak for the missing voice. The model is a summary. The text is the voice. Read the text.",
        aiLab: {
          setup: "After reading both.",
          childDoes:
            "Ask the child: 'What did the missing voice say that the founding did not?' Let them answer. Their answer is the lesson. If they can name the gap, the reading landed. If they cannot, read both again. The hearing is the inheritance.",
          evaluate: [
            "Did you read both a founding text and a missing-voice text?",
            "Did you name the gap out loud?",
            "Did the child hear that both are the republic?",
          ],
        },
      },
    },
  }),

  // ── 5. The Amendment Process — The Republic Can Change ──────────────
  ...expand({
    slug: "amendment-process",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Republic Can Change",
        dek: "The Constitution was not finished when it was written. It has been changed 27 times. The change is built into the design.",
        objective:
          "The student can explain what an amendment is, name one amendment that changed the republic, and describe how the document can change.",
        parentBriefing:
          "This sitting teaches the student that the Constitution was designed to change. The amendment process is in Article V. The Constitution has been amended 27 times. The Bill of Rights (first 10 amendments), the end of slavery (13th), citizenship for all (14th), voting rights (15th, 19th, 26th). The student needs to learn that the republic was not finished in 1787. It was designed to evolve. The amendment process is the design feature that allows the people to change the government without overthrowing it. The citizen who understands amendment understands that the republic is a practice, not a relic.",
        hardEdges: [
          "Do not make this a memorization of all 27 amendments. Name one or two that changed the republic.",
          "The 13th, 14th, and 15th amendments are the Reconstruction amendments. They changed the republic after the Civil War. Name them.",
        ],
        reading: [
          {
            heading: "The design that changes",
            body: "The Constitution was not finished when it was written. The people who wrote it knew it was not perfect. They included a process to change it: the amendment. An amendment is a change to the document. It requires agreement from Congress and the states. It is hard, but it is possible. The Constitution has been amended 27 times. The first 10 amendments are the Bill of Rights. The 13th amendment ended slavery. The 14th gave citizenship to all people born in the United States. The 19th gave women the vote. Each amendment changed the republic. The amendment process is the design feature that lets the people fix the design without breaking the republic. The citizen who understands this knows the republic is not a relic. It is a practice.",
          },
        ],
        bigIdea:
          "The Constitution was designed to change. 27 amendments prove it. The republic is a practice, not a relic.",
        tryThis: [
          {
            title: "Name one amendment",
            minutes: 14,
            steps: [
              "Read Article V of the Constitution. It describes the amendment process. It is short.",
              "Name one amendment that changed the republic: the 13th (end of slavery), the 19th (women's vote), the 14th (citizenship).",
              "Write: 'The [number] amendment changed the republic by [change].'",
              "Talk About It: why did the designers include a way to change the document? What would happen if they had not?",
            ],
          },
        ],
        dinnerQuestion:
          "What amendment did we learn about today, and how did it change the republic?",
        transfer: [
          { label: "Thinking", note: "Change your mind: the amendment process is the republic changing its mind. Same skill." },
          { label: "CS", note: "Specify the Agent: the amendment is a spec update. Same idea." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is set in stone.",
            reply: "It is not. It has been changed 27 times. The change is built into the design. The citizen who thinks it is set in stone does not know the design. Read Article V. The stone can be shaped by the people.",
          },
        ],
        integrity:
          "Cite the amendment and the article. Do not present a model summary as the source. The text is the source.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What is one amendment that changed the republic?' Compare to yours. Did it name the same one? Did it explain the change? The model is a starting point. The reading is yours.",
          evaluate: [
            "Did they read Article V?",
            "Did they name one amendment and its change?",
            "Can they explain why the design includes a change process?",
          ],
        },
      },
      emerging: {
        title: "Amendment as Civic Practice",
        dek: "The amendment process is the design feature that lets the republic evolve without breaking. The 13th, 14th, and 19th amendments are the republic changing its mind.",
        objective:
          "The student can describe the amendment process, name three amendments that changed the republic, and explain how amendment connects to the founding's promise of change.",
        parentBriefing:
          "This sitting teaches the student that amendment is civic practice. The founding promised equality. The amendment process is how the republic has tried to keep that promise. The 13th ended slavery. The 14th gave citizenship. The 15th gave voting rights regardless of race. The 19th gave women the vote. The 26th lowered the voting age. Each amendment was a change to the design, made by the people, through the process the designers built. The student needs to see amendment as the republic evolving, not as a list of dates.",
        hardEdges: [
          "Do not reduce amendments to a timeline. The point is the practice: the republic changing its design.",
          "Academic integrity: cite the amendments. Do not cite a model summary as the source.",
        ],
        reading: [
          {
            heading: "The promise and the practice",
            body: "The Declaration promised that all men are created equal. The Constitution designed a government. The promise was not kept by the design. Slavery was in the design. Women could not vote. The amendment process was the design feature that let the republic try to keep the promise. The 13th amendment ended slavery. The 14th gave citizenship to all people born in the United States. The 15th gave voting rights regardless of race. The 19th gave women the vote. Each amendment was the republic changing its mind, through the process the designers built. The amendment process is not a footnote. It is the design's most important feature: the republic can fix itself without breaking. The citizen who understands this sees the founding as a living practice, not as a dead letter.",
          },
          {
            heading: "What the amendments reveal",
            body: "The amendments reveal the gap between the founding's promise and its reality, and the republic's attempt to close the gap. The 13th amendment reveals that slavery was in the original design. The 14th reveals that citizenship was not originally universal. The 19th reveals that women were not originally included. Each amendment is a correction. The citizen who reads the amendments alongside the original design sees both: the design was brilliant and partial. The amendments are the republic trying to make the design match the promise. The work is not finished. The amendment process is how it continues.",
          },
        ],
        bigIdea:
          "Amendment is the republic changing its design to match its promise. The 13th, 14th, and 19th are the republic changing its mind.",
        tryThis: [
          {
            title: "Three amendments",
            minutes: 22,
            steps: [
              "Read Article V. Describe the amendment process in your own words.",
              "Read the 13th, 14th, and 19th amendments. They are short.",
              "For each, write: 'The [number] amendment changed the republic by [change]. The gap it closed was [gap].'",
              "Write: 'The founding promised [X]. The amendments closed the gap by [Y]. The work that remains is [Z].'",
              "Talk About It: is the amendment process working? What would you amend?",
            ],
          },
        ],
        dinnerQuestion:
          "What amendments did we read this week, and what gaps did they close?",
        transfer: [
          { label: "Thinking", note: "Change your mind: the amendment is the republic's version of the brave sentence." },
          { label: "English", note: "Rhetoric: the amendments are counterarguments to the original design. Same structure." },
        ],
        ifTheySay: [
          {
            heard: "Amendments are too hard to pass.",
            reply: "They are hard by design. The designers made change difficult so that it requires broad agreement, not a narrow majority. The difficulty is a feature, not a bug. But 27 amendments have passed. The difficulty is not impossibility. The citizen who says 'too hard' without trying does not understand the practice.",
          },
          {
            heard: "The original Constitution was fine.",
            reply: "It included slavery. It excluded women. It counted enslaved people as three-fifths. The amendments fixed parts of that. The citizen who says 'fine' without reading the amendments has not read the gaps. Read both. The original and the amendments are one document, evolving.",
          },
        ],
        integrity:
          "Cite the amendments. Read them. Do not present a model summary as the source. The text is the source.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What gap did the 14th amendment close?' Compare to your answer. Did it name the same gap? Did it connect the amendment to the founding's promise? The model is a checker. You are the reader.",
          evaluate: [
            "Did they read Article V and three amendments?",
            "Did they name the gap each amendment closed?",
            "Can they connect amendment to the founding's promise of change?",
          ],
        },
      },
      adult: {
        title: "The Republic Is a Practice",
        dek: "If you treat the Constitution as a relic, the child learns it is dead. Read one amendment with them. Show them the republic is alive.",
        objective:
          "The adult reads one amendment with the child, names the gap it closed, and models that the republic is a practice that evolves, not a relic that sits.",
        parentBriefing:
          "The adult reads one amendment with the child. The 13th, 14th, 19th, or 26th. The adult names the gap it closed: 'The 13th amendment ended slavery. Slavery was in the original design. The amendment changed the design.' The child who hears an adult connect the amendment to the gap learns that the republic is a practice. The child who only hears the original Constitution learns it is a relic. The amendment is the proof that the republic is alive. Read it. Name the gap. The reading is the inheritance.",
        hardEdges: [
          "Do not make this a political lecture. Read the amendment. Name the gap. Stop.",
          "Choose an amendment the child can understand. The 13th (end of slavery) or the 19th (women's vote) are concrete.",
        ],
        reading: [
          {
            heading: "The living document",
            body: "The Constitution is not a relic. It is a living document that has been changed 27 times. The adult who reads one amendment with the child and names the gap it closed teaches: the republic is a practice. The adult who only reads the original text teaches: the republic is a relic. The amendment is the proof of life. The 13th amendment proves the republic could end slavery. The 19th proves it could include women. The 26th proves it could lower the voting age. Each amendment is the republic changing its design. The child who sees this learns: the republic is not finished. It is a practice. The practice is the citizenship.",
          },
        ],
        bigIdea:
          "Read one amendment with the child. Name the gap it closed. The republic is a practice, not a relic.",
        tryThis: [
          {
            title: "One amendment at the table",
            minutes: 12,
            steps: [
              "Read one amendment with the child. The 13th, 14th, 19th, or 26th. They are short.",
              "Name the gap it closed: 'This amendment changed the republic by [change]. Before it, [gap].'",
              "Say: 'The Constitution was not finished in 1787. It has been changed 27 times. The change is built into the design.'",
              "Let the child hear that the republic is alive. The hearing is the inheritance.",
            ],
          },
        ],
        dinnerQuestion:
          "What amendment did we read this week, and what gap did it close?",
        transfer: [
          { label: "Parenting", note: "The living document you model is the living document they will practice." },
          { label: "Thinking", note: "Change your mind: the amendment is the republic's brave sentence." },
        ],
        ifTheySay: [
          {
            heard: "The child doesn't need to know about amendments yet.",
            reply: "If the child is old enough to live in the republic, they are old enough to know it can change. One amendment. One gap. 'The 13th ended slavery. The 19th gave women the vote.' That is the republic, alive. The child who hears it once will know the republic is a practice, not a relic.",
          },
        ],
        integrity:
          "Name the gap. If you read the amendment without naming the gap it closed, the reading is incomplete. The amendment and the gap are one lesson.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the child: 'What did this amendment change?' Let them answer. If they can name the change, the reading landed. If they cannot, read it again. The naming is the citizenship.",
          evaluate: [
            "Did you read one amendment with the child?",
            "Did you name the gap it closed?",
            "Did the child hear that the republic is a practice, not a relic?",
          ],
        },
      },
    },
  }),

  // ── 6. Citizens — The Full Practice (capstone) ──────────────────────
  ...expand({
    slug: "citizens-capstone",
    subject: "history",
    unit: "Citizens — Constitution & Declaration",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "You Are a Citizen",
        dek: "You read the words, saw the design, named the missing voices, and learned the republic can change. Now: what does a citizen do?",
        objective:
          "The student can name one thing a citizen does (read the documents, name a gap, speak, vote) and explain why it matters.",
        parentBriefing:
          "This is the capstone for the young band. The student has learned to read the words, see the design, name the missing voices, and understand amendment. Now the question: what does a citizen do? The citizen reads the documents. The citizen names the gaps. The citizen speaks. The citizen votes. The student names one of these and explains why it matters. The capstone is the connection between reading the founding and acting as a citizen. The reading is the foundation. The action is the citizenship.",
        hardEdges: [
          "Do not make this a political lecture. The point is the practice of citizenship, not a position.",
          "Keep it to one thing a citizen does. The point is the practice, not the list.",
        ],
        reading: [
          {
            heading: "What a citizen does",
            body: "A citizen reads the documents. A citizen names the gaps. A citizen speaks. A citizen votes. These are not school things. They are citizen things. The citizen who reads the Declaration and the Constitution knows what the republic was designed to be. The citizen who names the gaps knows what the republic has not yet become. The citizen who speaks and votes participates in the practice of closing the gaps. The reading is the foundation. The naming is the honesty. The speaking and voting are the practice. A republic is a moral practice. It requires citizens who do all four. You are a citizen. Start with one.",
          },
        ],
        bigIdea:
          "A citizen reads, names, speaks, and votes. The reading is the foundation. The action is the citizenship.",
        tryThis: [
          {
            title: "One citizen act",
            minutes: 12,
            steps: [
              "Name one thing a citizen does: READ / NAME / SPEAK / VOTE.",
              "Write: 'A citizen [does X] because [reason].'",
              "Talk About It: which one will you do? When?",
            ],
          },
        ],
        dinnerQuestion:
          "What is one thing a citizen does, and why does it matter?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the citizen reads the claim and checks it against the world." },
          { label: "English", note: "Rhetoric: the citizen speaks, using the appeals they learned." },
        ],
        ifTheySay: [
          {
            heard: "I'm too young to be a citizen.",
            reply: "You are not too young to read the documents. You are not too young to name the gaps. You are not too young to speak. The voting comes later. The rest starts now.",
          },
        ],
        integrity:
          "The citizen act must be real. 'Read the documents' is real. 'Name a gap' is real. Do not name something you will not do. Name what you will do.",
        aiLab: {
          setup: "After naming the citizen act.",
          childDoes:
            "Ask the model: 'What does a citizen do?' Compare to your list. Did it say the same things? Did it add any? The model is a starting point. Your act is yours.",
          evaluate: [
            "Did they name one citizen act?",
            "Did they explain why it matters?",
            "Can they connect the reading to the action?",
          ],
        },
      },
      emerging: {
        title: "The Citizen's Full Practice",
        dek: "Read the words, see the design, name the missing voices, understand amendment, and act. The full practice of citizenship in one cycle.",
        objective:
          "The student can run the full citizenship cycle: read a founding document, audit the design, name the missing voices, connect to an amendment, and name one citizen act they will take.",
        parentBriefing:
          "This is the capstone for the emerging band. The student runs the full cycle: read a founding document, audit the design, name the missing voices, connect to an amendment, and name one citizen act. The cycle ties together every skill from the unit. The output is one cycle, run end to end, that exercises every muscle: the reading, the design, the gaps, the change, and the action. The cycle is the capstone artifact. It is the proof that the student can practice citizenship in the age of the summary machine.",
        hardEdges: [
          "The student must run every step. Skipping is skipping the capstone.",
          "The citizen act must be real. 'Vote' if they can. 'Read' if they cannot. 'Speak' is always available.",
        ],
        reading: [
          {
            heading: "The full cycle",
            body: "Read the words. Audit the design. Name the missing voices. Connect to an amendment. Name a citizen act. That is the full cycle of citizenship in one sitting. The reading is the foundation: you read the actual document. The audit is the understanding: you see the design and its tensions. The missing voices are the honesty: you name who was not in the room. The amendment is the hope: you see the republic can change. The citizen act is the practice: you do something. The citizen who can run this cycle once has practiced citizenship, not just studied it. The citizen who runs it again has a habit. The citizen who runs it for life has a republic.",
          },
        ],
        bigIdea:
          "Read, audit, name the missing, connect to change, act. The full cycle of citizenship. The reading is the foundation. The action is the citizenship.",
        tryThis: [
          {
            title: "The full citizenship cycle",
            minutes: 28,
            steps: [
              "Read one founding document or section (Declaration opening, Constitution preamble, or an article).",
              "Audit: CLAIM / EVIDENCE / DESIGN / TENSION.",
              "Name the missing voices: who was not in the room?",
              "Connect to an amendment: which amendment closed a gap?",
              "Name one citizen act: READ / NAME / SPEAK / VOTE. Something you will actually do.",
              "Write: 'I read [document]. The design is [X]. The missing voices are [Y]. The amendment [Z] closed [gap]. My citizen act is [act].'",
              "Talk About It: what did the full cycle teach that one step did not?",
            ],
          },
        ],
        dinnerQuestion:
          "What full citizenship cycle did we run this week, and what is our act?",
        transfer: [
          { label: "Thinking", note: "The full thinking cycle: claim, steel-man, change-your-mind. Same structure." },
          { label: "English", note: "The full rhetorical audit: ethos, pathos, logos, frame, missing voice. Same structure." },
        ],
        ifTheySay: [
          {
            heard: "This is a lot for one sitting.",
            reply: "The first time, it is. The cycle is the investment. The second time is faster. The third is a habit. The cycle is the capstone. The capstone is the proof that the citizen can practice, not just study.",
          },
        ],
        integrity:
          "The citizen act must be real. 'Vote' if you can. 'Read' if you cannot yet. 'Speak' is always available. Do not name an act you will not do. The honesty is the citizenship.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Show the model the cycle. Ask: 'What did I do that a summary cannot do?' If it says 'you engaged with primary text,' that is honest. If it says 'I can help you analyze,' that is the tool's role. The citizen act is yours. The tool is the starting point.",
          evaluate: [
            "Did they run all five steps?",
            "Is the citizen act real and specific?",
            "Can they name what the full cycle taught that one step did not?",
          ],
        },
      },
      adult: {
        title: "The Citizen at the Table",
        dek: "Run the full cycle once, at the table, with the child. The child who sees it will practice citizenship for life. That is the capstone.",
        objective:
          "The adult runs the full citizenship cycle on one founding document in front of the child, names a citizen act, and models that citizenship is a practice, not a school subject.",
        parentBriefing:
          "This is the adult capstone. The adult runs the full cycle: read a founding document, audit the design, name a missing voice, connect to an amendment, name a citizen act. Out loud. At the table. On one document. The child sees the full cycle once. That is the investment. The child who sees an adult read the founding, name the gaps, connect to change, and commit to an act will internalize the practice. The child who never sees it will think citizenship is a school subject. One cycle. Out loud. That is the capstone.",
        hardEdges: [
          "Do not make this a lecture. Run the cycle. Talk through the steps. The child watches.",
          "The citizen act must be real. Name something you will actually do: vote, read, speak, attend.",
        ],
        reading: [
          {
            heading: "One cycle at the table",
            body: "The adult runs the cycle on one founding document. Reads the words. Names the design. Names a missing voice. Connects to an amendment. Names a citizen act. The child sees: citizenship is a cycle, not a test. The cycle is the practice. The practice is the republic. The child who sees this once will know that citizenship is something you do, not something you have. The adult who never does it teaches the child that citizenship is a school subject. The adult who does it once teaches the child that citizenship is a household practice. One cycle. Out loud. That is the inheritance.",
          },
        ],
        bigIdea:
          "Run the full cycle once, at the table. The child who sees it will practice citizenship for life. The cycle is the republic.",
        tryThis: [
          {
            title: "One cycle at the table",
            minutes: 20,
            steps: [
              "Read one founding document with the child. The preamble, the Declaration opening, or an article.",
              "Name the design: 'This is the architecture. One feature is [X]. One tension is [Y].'",
              "Name a missing voice: 'The room did not include [group].'",
              "Connect to an amendment: 'The [number] amendment closed a gap.'",
              "Name your citizen act: 'My act is [read/vote/speak/attend].' Something real.",
              "Let the child see the full cycle. The seeing is the investment.",
            ],
          },
        ],
        dinnerQuestion:
          "What citizenship cycle did we run at the table this week, and what is our act?",
        transfer: [
          { label: "Parenting", note: "The cycle you model is the cycle they will run when you are not there." },
          { label: "All subjects", note: "Every WisdomForge unit has a version of this: try, check, close. The citizenship cycle is the history version." },
        ],
        ifTheySay: [
          {
            heard: "The child won't follow all of it.",
            reply: "They do not need to follow all of it. They need to see it. The seeing teaches: citizenship is a practice, not a feeling. The understanding comes later. The habit comes from seeing it once.",
          },
          {
            heard: "I'm not political.",
            reply: "Citizenship is not politics. It is the practice of reading your founding, naming its gaps, and acting as a member of the republic. You can do that without a party, a platform, or a position. The practice is the citizenship. The politics is separate.",
          },
        ],
        integrity:
          "The citizen act must be real. Name something you will actually do. If you will not vote, do not name vote. Name read. Name speak. The honesty is the citizenship.",
        aiLab: {
          setup: "After the full cycle.",
          childDoes:
            "Ask the child: 'What is my citizen act?' Let them answer. If they can name it, the cycle landed. If they cannot, name it again. The naming is the inheritance.",
          evaluate: [
            "Did you run the full cycle out loud?",
            "Did the child see every step?",
            "Can the child name your citizen act?",
          ],
        },
      },
    },
  }),
];
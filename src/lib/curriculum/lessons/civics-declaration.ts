import { expand } from "./factory";

export const declarationLessons = [
  // ── 1. The Words Before the Story ─────────────────────────────────
  ...expand({
    slug: "declaration-the-words",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Words Before the Story",
        dek: "Before anyone tells you what the Declaration means, read what it says. The words are first. The story is second.",
        objective:
          "The student can read one sentence from the Declaration, write what it actually says, and distinguish that from what a summary says it says.",
        parentBriefing:
          "This sitting applies the Source Before Summary rule to the Declaration of Independence. The student reads the actual words — 'We hold these truths to be self-evident, that all men are created equal' — and writes what they say. Then they read a summary and compare. The summary will have added things and dropped things. The gap is the lesson. The Declaration says 'all men.' It did not mean all people. That gap is real. Name it, do not erase it.",
        hardEdges: [
          "The Declaration says 'all men.' It did not mean all people. Name the gap.",
          "Jefferson owned slaves while writing 'all men are created equal.' The contradiction is not a footnote.",
        ],
        reading: [
          {
            heading: "The words are first",
            body: "Before a textbook tells you what the Declaration means, read what it says. The words are the source. The textbook is a summary. The summary chooses what to keep and what to drop. If you read the summary first, you will not notice what was dropped. If you read the words first, you will. Start with one sentence: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' Read it slowly. Write what it says. Then read a summary. What did the summary add? What did it drop? The gap is the lesson.",
          },
          {
            heading: "The ugly words",
            body: "The Declaration says 'all men are created equal.' It did not mean women. It did not mean enslaved people. It did not mean Indigenous people. Jefferson owned over 200 enslaved people while writing those words. The gap between the words and the reality is not a footnote. It is the history. The citizen who reads the words and names the gap is reading honestly. The citizen who reads the words and pretends the gap is not there is reading propaganda.",
          },
        ],
        bigIdea:
          "Read the words before the story. The summary adds and drops. The gap is the lesson. Name the ugly gaps too.",
        tryThis: [
          {
            title: "One sentence",
            minutes: 16,
            steps: [
              "Read: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.'",
              "Write what it says. Not what you think it means. What it says.",
              "Ask the model to summarize the same sentence. Compare: what did the summary add? What did it drop?",
              "Name the gap: 'all men' did not mean all people. Write that.",
              "Talk About It: what did the words have that the summary did not?",
            ],
          },
        ],
        dinnerQuestion: "What words did we read today from the Declaration, and what did the summary miss?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the same rule, applied to the founding document." },
        ],
        ifTheySay: [
          {
            heard: "I know what the Declaration says.",
            reply: "You might know what a summary says. Read the actual words. The summary and the words are not the same. The gap is the lesson.",
          },
          {
            heard: "The Founders were hypocrites.",
            reply: "Some were. Read the words and name the gap between the words and their actions. 'Hypocrites' without the words is a slogan. The words plus the gap is the reading.",
          },
        ],
        integrity: "Do not cite a model summary as the source. The words are the source. The summary is the model's compression. Cite the document.",
        aiLab: {
          setup: "After the comparison.",
          childDoes: "Ask the model: 'What did you drop from the sentence in your summary?' If it names what it dropped, that is honest. If it says 'I aimed to capture the essence,' that is a dodge. The honest answer is the lesson.",
          evaluate: [
            "Did they read the actual words first?",
            "Did they identify what the summary added and dropped?",
            "Did they name the gap between 'all men' and the reality?",
          ],
        },
      },
      emerging: {
        title: "The Declaration: The Words, the Draft, and the Gap",
        dek: "Jefferson wrote 'all men are created equal' while owning 200 enslaved people. Congress stripped his passage condemning the slave trade. The words and the reality have never matched. The gap is the history.",
        objective:
          "The student can read the Declaration's actual language, explain the gap between the words and the historical reality (who 'all men' included and excluded), and understand how the document was edited to avoid challenging slavery.",
        parentBriefing:
          "This sitting takes the Declaration seriously as both a founding document and a compromised text. The student needs to understand three things. First, the actual words: 'all men are created equal' — read them before any summary. Second, the gap: 'all men' did not mean all people. It meant white male property owners — about 6% of the population. Jefferson owned 200 enslaved people while writing it. Third, the editing: Jefferson's draft included a passage condemning the slave trade. Congress stripped it to keep South Carolina and Georgia in the union. The Declaration's promise of equality was compromised at birth. The student should be able to hold both: the words are the foundation of American rights, and the words did not include most of the people in America.",
        hardEdges: [
          "Do not smooth the gap. 'All men' did not mean all people. The expansion took centuries of struggle.",
          "Do not skip the stripped slavery passage. The Declaration was edited to protect slaveholders. That is not a footnote.",
          "Jefferson's draft condemned the slave trade, not slavery itself. Even the stripped passage did not challenge Jefferson's own ownership of enslaved people.",
        ],
        reading: [
          {
            heading: "The words and the gap",
            body: "The Declaration's second sentence: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' The words are the foundation of American rights. The words did not include most of the people in America. 'All men' meant white male persons of sufficient property — about 6% of the population. Women were excluded. Enslaved people were excluded. Native Americans were described in the grievances as 'merciless Indian Savages.' Jefferson, who wrote 'all men are created equal,' owned over 200 enslaved people. The gap between the words and the reality is not a footnote. It is the history.",
          },
          {
            heading: "The stripped passage",
            body: "Jefferson's draft of the Declaration included a passage attacking the slave trade as 'cruel war against human nature itself, violating its most sacred rights of life and liberty.' Congress stripped it entirely. South Carolina and Georgia, the colonies most dependent on the slave trade, refused to accept it. The other delegates, prioritizing unity over principle, agreed to remove it. The Declaration's promise of equality was compromised at birth — the passage that named slavery as a violation of 'the most sacred rights of life and liberty' was removed to protect slaveholders. The irony is compounded by Jefferson's own status: he condemned the slave trade while owning 200 enslaved people. Even the stripped passage did not challenge slavery itself — only the trade. The Declaration says 'all men are created equal.' The document that says it was edited to avoid challenging the institution that made the words a lie for millions.",
          },
        ],
        bigIdea:
          "The Declaration's promise of equality was compromised at birth. The words did not include most of the people in America. The passage that named slavery as a violation of rights was stripped to protect slaveholders. Both things are true: the words are the foundation, and the words did not include everyone.",
        tryThis: [
          {
            title: "Read the words and the draft",
            minutes: 30,
            steps: [
              "Read the Declaration's second sentence. Write what it says, in your own words.",
              "Read Jefferson's stripped slavery passage. What did it say? Why was it removed?",
              "Ask: Jefferson condemned the slave trade while owning 200 enslaved people. Is that hypocrisy, compromise, or something more complex? Name what it is.",
              "Reflect: 'all men' meant about 6% of the population. The expansion to include everyone took centuries. The chain is the expansion. Who did the work?",
            ],
          },
        ],
        dinnerQuestion: "The Declaration says 'all men are created equal' and was edited to avoid challenging slavery. How do you hold both truths?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration is the source. The legend is the summary. The gap is the lesson." },
          { label: "AI", note: "Ask the model: 'What did the Declaration say about slavery?' If it does not mention the stripped passage, that is a gap. The gap is the lesson." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration meant everyone when it said 'all men.'",
            reply: "It did not. It meant white male property owners — about 6% of the population. Women could not vote. Enslaved people were property. Native Americans were described as 'merciless Indian Savages' in the grievances. The expansion from 'all men' to 'all people' took centuries: the Seneca Falls Declaration (1848) extended the language to women. The Thirteenth Amendment (1865) abolished slavery. The Fifteenth (1870) and Nineteenth (1920) expanded the vote. The Civil Rights movement (1950s-60s) enforced it. The words were the seed. The expansion was the work of people the words did not include. Do not collapse the words and the expansion. The words started the chain. The people the words excluded finished it.",
          },
        ],
        integrity: "Do not cite a model summary as the source. Read the actual Declaration. Read Jefferson's stripped passage. The gap between the document and the legend is the lesson.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the Declaration of Independence in three sentences.' Then ask: 'What did you skip?' The model will skip the gap. The gap is the history.",
          evaluate: [
            "Can they read the actual words and distinguish them from a summary?",
            "Do they understand who 'all men' included and excluded?",
            "Can they explain the stripped slavery passage and why it matters?",
          ],
        },
      },
      adult: {
        title: "The Declaration: The Promise, the Compromise, and the Chain",
        dek: "The Declaration is the foundation of American rights and a document compromised at birth. Both are the history. The chain from the words to the expansion is the story of how a promise becomes a practice.",
        objective:
          "The parent can explain the Declaration's actual language, the gap between the words and the reality, the stripped slavery passage, and the chain of expansion from the promise to the practice — including the people who did the work the founders did not intend.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration honestly — as both a founding promise and a compromised text. The parent should understand that the Declaration is the source of American rights language ('all men are created equal,' 'unalienable rights,' 'consent of the governed') and that the document was compromised at birth (the stripped slavery passage, the exclusion of women and enslaved people, the gap between words and reality). Both are the history. The chain from the words to the practice — Seneca Falls, abolition, the Civil Rights movement — is the story of people who took the promise and made it mean more than its authors intended. The parent should teach both: the words are the foundation, and the foundation was cracked. The cracks were repaired by people the foundation did not include.",
        hardEdges: [
          "Do not teach the legend. Teach the words, the gap, and the chain.",
          "The stripped slavery passage is not a footnote. It is the evidence that the Declaration's promise was compromised at birth by political convenience.",
        ],
        reading: [
          {
            heading: "The promise, the compromise, and the chain",
            body: "The Declaration made a promise: all men are created equal, endowed with unalienable rights, and government derives its power from the consent of the governed. The promise was compromised at birth: the words 'all men' meant white male property owners. The passage that condemned the slave trade was stripped to keep South Carolina and Georgia in the union. Jefferson wrote 'all men are created equal' while owning 200 enslaved people. The promise was cracked. The cracks were repaired by people the promise did not include. The Seneca Falls Declaration (1848) extended 'all men' to 'all men and women.' The Thirteenth Amendment (1865) abolished slavery. The Fifteenth (1870) prohibited racial voting discrimination. The Nineteenth (1920) gave women the vote. The Civil Rights movement (1950s-60s) enforced the promise against the states that ignored it. The chain from the words to the practice is the story of how a promise becomes real — not through the text alone, but through the people who picked up the text and demanded that it mean what it says.",
          },
        ],
        bigIdea:
          "The Declaration made a promise and compromised it at birth. The chain from the promise to the practice is the story of people who took the cracked words and made them mean more than their authors intended. The chain is not finished.",
        tryThis: [
          {
            title: "Read the promise and the compromise",
            minutes: 40,
            steps: [
              "Read the Declaration's second sentence. Write the promise in your own words.",
              "Read Jefferson's stripped slavery passage. Write what it condemned and why it was removed.",
              "Trace the chain: Seneca Falls (1848) → Thirteenth Amendment (1865) → Fifteenth (1870) → Nineteenth (1920) → Civil Rights (1960s). Each link expanded who 'all men' includes.",
              "Reflect: the promise was cracked. The cracks were repaired by people the promise excluded. Who is still waiting? Where is the chain still being built?",
            ],
          },
        ],
        dinnerQuestion: "The Declaration's promise was compromised at birth and expanded by the people it excluded. What does it mean that the people who made the promise real were the people the promise did not include?",
        transfer: [
          { label: "AI", note: "Ask the model: 'What did the Declaration promise?' Then ask: 'For whom?' The gap between the promise and the 'for whom' is the history." },
          { label: "Thinking", note: "The Magna Carta chain: 'free men' → 'all men' → 'all people.' The chain of expansion is the same chain. The words change. The principle grows. The growth is the work of people the words did not include." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is just a lie.",
            reply: "It is a promise that was not kept — and a promise that was eventually expanded to include the people it originally excluded. Both are true. If you dismiss it as a lie, you dismiss the seed that the expansion grew from. If you celebrate it without naming the gap, you erase the people who did the work the founders did not intend. The honest reading is: the words were the foundation, the foundation was cracked, and the cracks were repaired by people the foundation did not include. The chain from the words to the practice is the story. The chain is the work. The work is not finished.",
          },
        ],
        integrity: "Do not let the model collapse the Declaration into either a sacred text or a hypocritical lie. It is a cracked foundation that was repaired by people it did not include. Read the words. Read the stripped passage. Trace the chain. The chain is the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Was the Declaration a success?' Then ask: 'For whom?' The answer depends on whether you were a white male property owner in 1776 or an enslaved person, a woman, or a Native American. The success was not universal. The expansion took centuries. The model's summary will smooth the gap. The gap is the lesson.",
          evaluate: [
            "Can they explain the promise and the compromise?",
            "Can they trace the chain from the words to the expansion?",
            "Do they understand that the expansion was the work of people the words excluded?",
            "Can they hold both: the words are the foundation, and the foundation was cracked?",
          ],
        },
      },
    },
  }),

  // ── 2. Natural Rights ─────────────────────────────────────────────
  ...expand({
    slug: "declaration-natural-rights",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Rights You Are Born With",
        dek: "The Declaration says you have rights just because you are human — not because the government gave them to you. Where did that idea come from?",
        objective:
          "The student can explain what 'natural rights' means and why the Declaration says rights come from being human, not from government.",
        parentBriefing:
          "This sitting is about the idea that rights come from being human, not from government. The Declaration says: 'endowed by their Creator with certain unalienable Rights.' Unalienable means cannot be taken away. The rights are not given by the government — they are inherent. The government's job is to protect them, not grant them. This idea traces back through John Locke to Magna Carta. The student should understand that 'natural rights' is a claim about where rights come from, not just a list of rights.",
        hardEdges: [
          "The Declaration says 'endowed by their Creator.' The language is theistic but not sectarian. It does not name a specific God.",
          "Jefferson changed Locke's 'property' to 'pursuit of happiness.' The change broadens rights from ownership to human flourishing.",
        ],
        reading: [
          {
            heading: "Rights you are born with",
            body: "The Declaration says you have rights because you are human. Not because the government gave them. Not because you earned them. Because you were born. The rights are 'unalienable' — they cannot be taken away, because they were not given by anyone who could take them back. Three rights: Life. Liberty. The pursuit of Happiness. The government's job is to protect these rights, not to grant them. If the government takes them away, it is violating your rights, not removing a privilege. That is the idea. It is simple. It was revolutionary in 1776. It is still being argued about today.",
          },
        ],
        bigIdea:
          "Natural rights are rights you have because you are human, not because the government gave them. The government protects them. It does not grant them.",
        tryThis: [
          {
            title: "Write your rights",
            minutes: 16,
            steps: [
              "Write three rights the Declaration names: Life, Liberty, pursuit of Happiness.",
              "For each, write: what would it look like if the government took this right away?",
              "Talk About It: if rights come from being human, why do governments need to protect them? What happens when they do not?",
            ],
          },
        ],
        dinnerQuestion: "If your rights come from being human, not from the government, what happens when the government does not protect them?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'rights are natural.' The check is whether the government protects them or violates them." },
        ],
        ifTheySay: [
          {
            heard: "The government gives us our rights.",
            reply: "The Declaration says the opposite. Rights come from being human. The government's job is to protect them, not grant them. If the government grants rights, the government can take them away. If rights are natural — if they come from being human — then the government cannot take them. It can only violate them. The distinction matters: a right the government gives is a privilege. A right you are born with is a right.",
          },
        ],
        integrity: "Do not let the model say rights come from government. Read the Declaration: 'endowed by their Creator with certain unalienable Rights.' The rights precede the government.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'Where do rights come from?' Compare the model's answer to the Declaration's language. The Declaration says 'endowed by their Creator.' What did the model say?",
          evaluate: [
            "Can they explain what 'unalienable' means?",
            "Can they name the three rights?",
          ],
        },
      },
      emerging: {
        title: "Natural Rights: Locke, Jefferson, and the Change That Matters",
        dek: "Locke said 'life, liberty, and property.' Jefferson said 'life, liberty, and the pursuit of happiness.' One word changed — and the change broadened rights from ownership to human flourishing.",
        objective:
          "The student can explain the concept of natural rights, trace the lineage from Locke's 'property' to Jefferson's 'pursuit of happiness,' and understand why the change matters.",
        parentBriefing:
          "This sitting traces the intellectual lineage of the Declaration's rights language. The source is John Locke's Second Treatise of Government (1689), which listed 'life, liberty, and property' as natural rights. Jefferson changed 'property' to 'the pursuit of happiness.' The change matters: property is specific (ownership of things). Pursuit of happiness is general (the freedom to seek a fulfilling life). The change universalizes rights from an economic concept to a human one. The student should understand that the Declaration's language is not original — it is adapted from Locke — and that the adaptation is a deliberate act of broadening.",
        hardEdges: [
          "Do not present the change as cosmetic. 'Property' to 'pursuit of happiness' is a philosophical shift from economic rights to human flourishing.",
          "The Declaration says 'endowed by their Creator.' The language is theistic. A secular reader can translate: the rights are inherent, regardless of their source.",
        ],
        reading: [
          {
            heading: "Locke to Jefferson",
            body: "John Locke's Second Treatise of Government (1689) listed three natural rights: life, liberty, and property. Property was the core: the right to own what you mix your labor with. Locke's framework was economic — rights protect ownership. Jefferson changed 'property' to 'the pursuit of happiness.' The change is one of the most important word choices in American history. It broadens the concept from ownership of things to the freedom to seek a fulfilling life. Property is one means of pursuing happiness. It is not the whole of happiness. Jefferson's change says: the right is not to own things. The right is to seek a life worth living. The source of the idea is the Scottish Enlightenment — Hutcheson and Kames used 'pursuit of happiness' as a broader category that included property as one means among many. Jefferson drew on this tradition and universalized it.",
          },
        ],
        bigIdea:
          "Locke said 'property.' Jefferson said 'pursuit of happiness.' The change broadened rights from ownership to human flourishing. One word changed the scope of what rights protect.",
        tryThis: [
          {
            title: "Compare the words",
            minutes: 25,
            steps: [
              "Write Locke's phrase: 'life, liberty, and property.'",
              "Write Jefferson's phrase: 'Life, Liberty and the pursuit of Happiness.'",
              "Compare: what does 'property' mean that 'pursuit of happiness' does not? What does 'pursuit of happiness' mean that 'property' does not?",
              "Reflect: is the right to pursue happiness the same as the right to own things? Is property part of happiness, or is happiness bigger than property?",
            ],
          },
        ],
        dinnerQuestion: "If Jefferson had kept Locke's 'property' instead of changing it to 'pursuit of happiness,' how would American rights language be different?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Locke's Second Treatise is the source. Jefferson's adaptation is the interpretation. The change is the act of interpretation." },
        ],
        ifTheySay: [
          {
            heard: "It is just a word change. Property and happiness mean the same thing.",
            reply: "They do not. Property is specific — it means ownership of things. Pursuit of happiness is general — it means the freedom to seek a fulfilling life. You can pursue happiness without owning property. You can own property without being happy. The change broadens the right from an economic category to a human one. Locke's framework was about protecting ownership. Jefferson's framework is about protecting the freedom to seek a life worth living. The change is one word. The scope of rights is different.",
          },
        ],
        integrity: "Do not let the model say the change was cosmetic. Read Locke and Jefferson side by side. The words are different. The ideas are different.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Why did Jefferson change property to pursuit of happiness?' Compare the model's answer to the actual texts. The model may simplify. The texts do not.",
          evaluate: [
            "Can they explain the difference between 'property' and 'pursuit of happiness'?",
            "Do they understand the Lockean source?",
          ],
        },
      },
      adult: {
        title: "Natural Rights: The Source, the Change, and the Argument",
        dek: "The Declaration's rights language is adapted from Locke, not invented. The adaptation — 'property' to 'pursuit of happiness' — is a philosophical shift. The argument about what rights are and where they come from is ongoing.",
        objective:
          "The parent can explain the Lockean source of the Declaration's rights language, the significance of Jefferson's change from 'property' to 'pursuit of happiness,' and the ongoing philosophical argument about whether rights are natural, granted, or constructed.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's rights language as an intellectual inheritance, not an original invention. The parent should understand that the Declaration's language comes from Locke's Second Treatise, adapted through the Scottish Enlightenment, and that Jefferson's change from 'property' to 'pursuit of happiness' is a deliberate philosophical broadening. The parent should also understand that the concept of 'natural rights' is itself contested — some philosophers argue rights are social constructions, not natural facts. The Declaration makes a claim (rights are inherent) that is both the foundation of American rights language and the subject of ongoing philosophical debate.",
        hardEdges: [
          "Natural rights is a philosophical claim, not a self-evident fact. The Declaration calls it 'self-evident' — but it has been contested since 1776.",
          "The theistic language ('endowed by their Creator') is part of the argument. A secular reader can translate it, but the original is theistic.",
        ],
        reading: [
          {
            heading: "The source and the argument",
            body: "The Declaration's rights language descends from John Locke's Second Treatise (1689) through the Scottish Enlightenment (Hutcheson, Kames) to Jefferson. Locke said 'life, liberty, and property.' Jefferson said 'life, liberty, and the pursuit of happiness.' The change broadened rights from economic ownership to human flourishing. But the deeper question is: are rights natural (inherent in being human), granted (given by government), or constructed (created by social agreement)? The Declaration claims they are natural — 'self-evident' truths about human beings. This claim is the foundation of American rights language. It is also contested. Jeremy Bentham called natural rights 'nonsense upon stilts.' Modern philosophers argue about whether rights are universal facts, cultural products, or legal constructs. The Declaration makes a claim. The claim is the foundation. The argument about the claim is ongoing. Teaching the Declaration honestly means teaching the claim and the argument — not just the words, but the question of whether the words are true.",
          },
        ],
        bigIdea:
          "The Declaration's rights language is adapted from Locke. The claim that rights are natural is the foundation of American rights — and the subject of ongoing philosophical argument. Teach the words and the argument.",
        tryThis: [
          {
            title: "Read the claim and the argument",
            minutes: 35,
            steps: [
              "Read the Declaration's second sentence. Identify the claim: rights are natural, not granted.",
              "Read Locke's Second Treatise (or a summary). Find the source of the rights language.",
              "Ask: is the claim self-evident? Bentham said natural rights are 'nonsense upon stilts.' Is he wrong? Is the Declaration wrong? Or are both making arguments that need to be evaluated?",
              "Reflect: the Declaration says 'self-evident.' If it is self-evident, why has it been contested for 250 years? What does 'self-evident' mean — obvious, or argued?",
            ],
          },
        ],
        dinnerQuestion: "The Declaration calls natural rights 'self-evident.' If they are self-evident, why have they been contested for 250 years? What does 'self-evident' actually mean?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Are natural rights real?' The model will give a philosophical answer. Then ask: 'What does the Declaration claim?' The Declaration claims they are self-evident. The claim is the argument, not the proof." },
          { label: "Thinking", note: "The Magna Carta chain: the charter said 'law of the land.' The Declaration said 'natural rights.' Both are claims about where limits on power come from — the law, or human nature. The chain connects them." },
        ],
        ifTheySay: [
          {
            heard: "Natural rights are just a fiction.",
            reply: "They are a claim. The Declaration claims they are self-evident truths about human beings. Bentham called them 'nonsense upon stilts.' Modern philosophers argue about whether they are universal facts, cultural products, or legal constructs. The argument is real. But the claim has consequences: if rights are natural, the government cannot take them. If rights are granted, the government can. The entire structure of American constitutional law rests on the claim — the Fifth Amendment's 'due process' assumes the government cannot take rights without process, which assumes the rights exist before the process. The claim may be a fiction. But it is a fiction that built a legal system. Whether that makes it true, useful, or both is the question the student must answer.",
          },
        ],
        integrity: "Do not let the model present natural rights as settled. They are claimed, not proven. Read the Declaration. Read Bentham. The argument is the lesson.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Are natural rights self-evident?' The model will probably say yes or give a balanced answer. Then ask: 'What would Bentham say?' The contrast is the lesson: the Declaration claims self-evidence. Bentham denies it. The argument is the history.",
          evaluate: [
            "Can they explain the Lockean source?",
            "Do they understand the significance of the change from 'property' to 'pursuit of happiness'?",
            "Can they identify the claim (rights are natural) and the argument (the claim is contested)?",
          ],
        },
      },
    },
  }),

  // ── 3. The Right of Revolution ─────────────────────────────────────
  ...expand({
    slug: "declaration-right-of-revolution",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "When You Can Fight Back",
        dek: "The Declaration says people have the right to replace a government that violates their rights. That idea goes back to Magna Carta.",
        objective:
          "The student can explain what the 'right of revolution' means and where it comes from.",
        parentBriefing:
          "This sitting is about the Declaration's most radical claim: when a government violates people's rights, the people have the right to replace it. 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.' This idea descends from Magna Carta's security clause (clause 61), which authorized 25 barons to seize the king's property if he violated the charter. The Declaration universalizes it: not just 25 barons, but the people. The student should understand that the right of revolution is the deepest link in the chain from Magna Carta to the American founding.",
        hardEdges: [
          "The right of revolution is a last resort, not a first option. The Declaration says people should not change governments 'for light and transient causes.'",
          "Magna Carta's security clause was dropped from the reissues. The principle survived through reinterpretation, not through the text.",
        ],
        reading: [
          {
            heading: "The right to replace",
            body: "The Declaration says: when a government violates people's rights, the people can replace it. 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government.' This is the right of revolution. It is the most radical idea in the Declaration. It comes from Magna Carta — the charter's security clause said 25 barons could seize the king's property if he broke the rules. The Declaration takes that idea and makes it bigger: not 25 barons, but the people. Not a specific enforcement mechanism, but a universal right. The chain runs from Runnymede to Philadelphia.",
          },
        ],
        bigIdea:
          "The right of revolution says people can replace a government that violates their rights. It comes from Magna Carta's security clause. The chain runs from Runnymede to the Declaration.",
        tryThis: [
          {
            title: "Read the right",
            minutes: 18,
            steps: [
              "Read: 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.'",
              "Write: what does 'destructive of these ends' mean? (Violating rights.)",
              "Talk About It: the Declaration says people should not change governments 'for light and transient causes.' What does that mean? When is it the right time?",
            ],
          },
        ],
        dinnerQuestion: "If people have the right to replace a government that violates their rights, who decides when the line has been crossed?",
        transfer: [
          { label: "Thinking", note: "The Magna Carta chain: clause 61 → Locke → Declaration. The right of revolution is the deepest link in the chain." },
        ],
        ifTheySay: [
          {
            heard: "That would be chaos.",
            reply: "The founders agreed. That is why they said people should not change governments 'for light and transient causes.' The right of revolution is a last resort, not a first option. The Declaration lists 27 grievances against the king before it invokes the right. The list is the case: this is not a light cause. This is a long pattern of violation. The right of revolution is not a license for chaos. It is a claim that there is a line — and when the government crosses it, the people have the right to act.",
          },
        ],
        integrity: "Do not let the model simplify the right of revolution to 'people can overthrow the government.' Read the Declaration's language. The right is qualified: not for light causes, only after long abuse.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What is the right of revolution?' Then ask: 'What limits did the Declaration put on it?' The limits matter as much as the right.",
          evaluate: [
            "Can they explain the right of revolution?",
            "Do they know it comes from Magna Carta's security clause?",
          ],
        },
      },
      emerging: {
        title: "The Right of Revolution: From Clause 61 to the Declaration",
        dek: "The Declaration's most radical claim — that people can replace a government that violates their rights — descends from Magna Carta's security clause through Locke. The chain is the deepest link in the constitutional tradition.",
        objective:
          "The student can trace the right of revolution from Magna Carta clause 61 through Locke's Second Treatise to the Declaration, explaining how a specific enforcement mechanism became a universal right.",
        parentBriefing:
          "This sitting traces the deepest link in the constitutional chain: the right of revolution. The lineage: Magna Carta clause 61 (1215) — 25 barons authorized to seize the king's property if he violated the charter. Locke's Second Treatise (1689) — the people retain the right to resist a government that violates its trust. The Declaration (1776) — 'it is their right, it is their duty, to throw off such Government.' Each step expands the scope: from 25 barons to the people, from a specific mechanism to a universal principle. The student should understand that the right of revolution is not an American invention. It is the culmination of 500 years of constitutional development — the moment when a feudal enforcement mechanism became a universal political right.",
        hardEdges: [
          "The right of revolution is a last resort. The Declaration lists 27 grievances before invoking it. The list is the case.",
          "The right is claimed, not granted. No government writes into its constitution a right to be overthrown. The right is asserted from outside the system.",
        ],
        reading: [
          {
            heading: "The chain of revolution",
            body: "Link 1: Magna Carta clause 61 (1215). The security clause authorized 25 barons to 'distrain and distress' the king if he violated the charter. This was a specific, institutionalized right of resistance — a practical enforcement mechanism, not a philosophical principle. Link 2: Locke's Second Treatise (1689). Chapters 13-19 argue that the people retain the right to resist a government that violates its trust. Locke generalizes the charter's specific mechanism into a universal principle. Link 3: The Declaration (1776). 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.' The Declaration universalizes Locke's principle and invokes it as justification for the American Revolution. Each step expands the scope: 25 barons → the people. Specific mechanism → universal right. The chain runs from Runnymede to Philadelphia. The right of revolution is the culmination of 500 years of constitutional development.",
          },
        ],
        bigIdea:
          "The right of revolution descends from Magna Carta clause 61 through Locke to the Declaration. It is the deepest link in the constitutional chain — the moment a feudal enforcement mechanism became a universal political right.",
        tryThis: [
          {
            title: "Trace the chain",
            minutes: 30,
            steps: [
              "Read clause 61 of Magna Carta (the security clause). What did it authorize? (25 barons seizing royal property.)",
              "Read Locke's Second Treatise, chapters 13-19 (or a summary). What did Locke generalize? (The right of the people to resist.)",
              "Read the Declaration's right of revolution passage. What did it universalize? (The right to alter or abolish government.)",
              "Ask: each link expanded the scope. Who expanded it? Why? What was at stake?",
              "Reflect: the right is claimed from outside the system. No government grants the right to be overthrown. The right is asserted. That is what makes it radical.",
            ],
          },
        ],
        dinnerQuestion: "The right of revolution is claimed from outside the system — no government grants the right to be overthrown. What does it mean that the most important right in the constitutional tradition is one no government can give?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Where does the right of revolution come from?' If it says Locke or the Declaration, ask: 'Before that?' The chain runs through Magna Carta. The model may skip the link." },
          { label: "Thinking", note: "The chain from Magna Carta to the Declaration: clause 61 → Locke → 'Right of the People.' Each link is an act of expansion. The expansion is the story." },
        ],
        ifTheySay: [
          {
            heard: "The right of revolution is just an excuse for violence.",
            reply: "The Declaration disagrees. It lists 27 grievances before invoking the right. The list is the case: this is not a light cause, not a transient complaint, but a long pattern of violation. The right of revolution is a last resort, not a first option. The founders were careful: they knew the right was dangerous. They built the case before they invoked the right. The right without the case is an excuse. The right with the case is a claim. The Declaration made the case. Whether it was sufficient is the question the reader must answer.",
          },
        ],
        integrity: "Do not let the model skip the chain. The right of revolution is not an American invention. It is the culmination of 500 years of constitutional development. Read the links.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the right of revolution in one sentence.' Then ask: 'What did you skip?' The model will skip the chain. The chain is the story.",
          evaluate: [
            "Can they trace all three links (Magna Carta → Locke → Declaration)?",
            "Do they understand the expansion from specific to universal?",
            "Can they explain why the right is claimed from outside the system?",
          ],
        },
      },
      adult: {
        title: "The Right of Revolution: The Chain, the Claim, and the Risk",
        dek: "The right of revolution is the deepest link in the constitutional tradition — and the most dangerous. It is claimed from outside the system, invoked as a last resort, and has been used to justify both liberation and catastrophe.",
        objective:
          "The parent can trace the right of revolution from Magna Carta through Locke to the Declaration, explain the philosophical and practical significance of a right claimed from outside the system, and engage the question of when the right is legitimate and when it is dangerous.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the right of revolution in its full complexity. The parent should understand that the right is the deepest link in the constitutional chain (Magna Carta → Locke → Declaration), that it is claimed from outside the system (no government grants the right to be overthrown), and that it is both the foundation of liberation and the justification of catastrophe. The American Revolution invoked the right and built a republic. The French Revolution invoked the right and produced the Terror. The Russian Revolution invoked the right and produced totalitarianism. The right is real. The right is dangerous. Teaching it honestly means teaching both: the right exists, and the right has been misused. The question is not whether the right exists. It is when it is legitimate — and who decides.",
        hardEdges: [
          "The right of revolution has been invoked to justify liberation (American Revolution) and catastrophe (Russian Revolution). The right is the same. The outcomes are different.",
          "No government grants the right to be overthrown. The right is asserted from outside the system. That is what makes it both powerful and dangerous.",
        ],
        reading: [
          {
            heading: "The chain, the claim, and the risk",
            body: "The right of revolution descends from Magna Carta clause 61 through Locke to the Declaration. The chain: 25 barons → the people → a universal right. Each link expanded the scope. The right is claimed from outside the system — no constitution includes a clause authorizing its own overthrow. The right is asserted, not granted. That is what makes it radical: it exists beyond the law, in the space where law runs out. The American Revolution invoked the right and built a republic. The French Revolution invoked the right and produced the Terror. The Russian Revolution invoked the right and produced totalitarianism. The right is the same in each case. The outcomes are not. The question is not whether the right exists — the Declaration, Locke, and Magna Carta all assert it. The question is when it is legitimate, who decides, and what happens when the decision is wrong. The founders knew the risk. They listed 27 grievances before invoking the right. The list is the case: this is not a light cause. But the founders also knew that once the right is invoked, it cannot be controlled. The right of revolution is the constitutional tradition's deepest principle and its most dangerous tool. Teaching it honestly means teaching both: the right exists, and the right has been misused.",
          },
        ],
        bigIdea:
          "The right of revolution is the deepest link in the constitutional tradition and its most dangerous tool. It is claimed from outside the system, invoked as a last resort, and has produced both liberation and catastrophe. The question is not whether it exists but when it is legitimate.",
        tryThis: [
          {
            title: "Compare the revolutions",
            minutes: 40,
            steps: [
              "Trace the chain: Magna Carta clause 61 → Locke → Declaration. Each link expanded the scope.",
              "Compare three revolutions that invoked the right: American (1776), French (1789), Russian (1917). The right is the same. The outcomes are different. Why?",
              "Ask: when is the right legitimate? The founders said 'not for light and transient causes.' What counts as a light cause? What counts as a sufficient cause?",
              "Reflect: the right is claimed from outside the system. No government grants it. That is what makes it both the foundation of liberation and the justification of catastrophe. The right does not come with a manual. It comes with a risk.",
            ],
          },
        ],
        dinnerQuestion: "The right of revolution produced the American Republic and the Russian Revolution. The right is the same. The outcomes are not. What determines the difference?",
        transfer: [
          { label: "AI", note: "Ask the model: 'When is revolution justified?' The model will give a philosophical answer. Then ask: 'Who decides?' The answer is: the people who invoke it. There is no higher authority. That is what makes it both powerful and dangerous." },
          { label: "Philosophy", note: "The Magna Carta chain: clause 61 was the enforcement mechanism. It was dropped. The principle survived. The Declaration is the principle's fullest expression — and its most dangerous use." },
        ],
        ifTheySay: [
          {
            heard: "Revolution is never justified.",
            reply: "The Declaration disagrees. Locke disagrees. Magna Carta disagrees. The right of revolution is the deepest principle in the constitutional tradition: when a government violates the rights of the people, the people may replace it. The question is not whether the right exists. It is when it is legitimate. The founders listed 27 grievances — the case that the violation was not light or transient but systematic and sustained. The American Revolution invoked the right and built a republic. The Russian Revolution invoked the right and produced totalitarianism. The right is the same. The application is different. Saying 'never justified' is saying the people must endure any violation. Saying 'always justified' is saying any grievance is sufficient. The truth is in between, and finding it is the most difficult political judgment anyone can make.",
          },
        ],
        integrity: "Do not let the model present the right of revolution as simple. It is the constitutional tradition's deepest principle and its most dangerous tool. Read the Declaration's grievances. Read Locke. The right is real. The risk is real. Both must be taught.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Is revolution ever justified?' Then ask: 'Who decides?' The answer — the people who invoke it — is what makes the right both powerful and dangerous. There is no higher authority. The model may not say this. The absence is the lesson.",
          evaluate: [
            "Can they trace the full chain (Magna Carta → Locke → Declaration)?",
            "Can they compare revolutions that invoked the same right?",
            "Do they understand the right is claimed from outside the system?",
            "Can they engage the question of legitimacy without resolving it?",
          ],
        },
      },
    },
  }),

  // ── 4. The Gap: The Promise and the Practice ───────────────────────
  ...expand({
    slug: "declaration-the-gap",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Promise and the Gap",
        dek: "The Declaration said 'all men are created equal.' It did not mean everyone. The gap between the words and the reality is the story of America.",
        objective:
          "The student can explain the gap between the Declaration's words and the reality of who was included, and how the gap was closed over time.",
        parentBriefing:
          "This sitting is about the gap between the Declaration's promise and the reality. The words said 'all men are created equal.' The reality: women could not vote, enslaved people were property, Native Americans were excluded. The gap was not closed by the founders. It was closed by the people the words did not include — through the Seneca Falls Declaration, the abolition of slavery, the Civil Rights movement. The student should understand that the promise was the seed and the expansion was the work of people the seed did not include.",
        hardEdges: [
          "Do not present the gap as an accident. The founders knew what they were writing. The gap was the design.",
          "The expansion was not automatic. It required struggle — war, activism, legislation — by people the words did not include.",
        ],
        reading: [
          {
            heading: "The words and the reality",
            body: "The Declaration says 'all men are created equal.' In 1776, that meant white men who owned property — about 6% of the population. Women were not included. Enslaved people were not included. Native Americans were described as 'merciless Indian Savages' in the grievances. The gap between the words and the reality is the story of America. The gap was not closed by the founders. It was closed by the people the words did not include: the women who signed the Seneca Falls Declaration in 1848, the abolitionists who fought to end slavery, the civil rights activists who demanded that the promise be kept. The words were the seed. The expansion was the work. The people who did the work were the people the words did not include.",
          },
        ],
        bigIdea:
          "The Declaration promised equality. The promise did not include everyone. The expansion was the work of people the words did not include.",
        tryThis: [
          {
            title: "Name the gap",
            minutes: 18,
            steps: [
              "Write: 'all men' meant ___ in 1776. (White male property owners — about 6%.)",
              "List three groups the words did not include: women, enslaved people, Native Americans.",
              "Talk About It: who closed the gap? (The people who were excluded.) How long did it take? (Centuries, and it is ongoing.)",
            ],
          },
        ],
        dinnerQuestion: "The Declaration's promise did not include everyone. Who closed the gap, and how long did it take?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration says 'all men.' The legend says 'everyone.' The gap is the lesson." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration included everyone.",
            reply: "It did not. It included about 6% of the population. The expansion to include everyone took centuries and required struggle — the Seneca Falls Declaration (1848), the Thirteenth Amendment (1865), the Nineteenth (1920), the Civil Rights movement (1960s). The words were the seed. The people who expanded the promise were the people the words did not include. Do not confuse the seed with the tree.",
          },
        ],
        integrity: "Do not let the model say the Declaration included everyone. Read the words. 'All men' meant about 6% of the population. The gap is the history.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'Who did the Declaration include?' If it says 'everyone,' that is the legend. If it says 'white male property owners,' that is honest. The gap is the lesson.",
          evaluate: [
            "Can they name who was included and who was excluded?",
            "Do they understand the expansion was the work of people the words excluded?",
          ],
        },
      },
      emerging: {
        title: "The Gap: The Promise, the Practice, and the People Who Closed It",
        dek: "The Declaration promised equality to about 6% of the population. The expansion to everyone took centuries of struggle by the people the promise excluded. The gap is the history. The closing is the work.",
        objective:
          "The student can explain the gap between the Declaration's promise and the historical reality, trace the chain of expansion that closed the gap, and understand that the expansion was the work of people the words did not include.",
        parentBriefing:
          "This sitting is the capstone of the Declaration unit. The student should understand that the Declaration's promise ('all men are created equal') was made for about 6% of the population, and that the expansion to include everyone was not the founders' work. It was the work of the people the promise excluded: the women who signed the Seneca Falls Declaration (1848), the abolitionists who fought to end slavery, the civil rights activists who demanded the promise be kept. The chain of expansion is the same chain that runs from Magna Carta (free men) through the Constitution (We the People) through the amendments (expanding who counts). The Declaration is the seed. The expansion is the tree. The people who grew the tree are not the people who planted the seed.",
        hardEdges: [
          "Do not present the expansion as automatic. It required war (Civil War), activism (Seneca Falls, Civil Rights movement), and legislation (amendments, Voting Rights Act).",
          "The expansion is ongoing. The question of who is included — and who is still fighting for inclusion — is not settled.",
        ],
        reading: [
          {
            heading: "The promise and the people who closed the gap",
            body: "The Declaration promised equality to about 6% of the population: white male property owners. The gap between the promise and the reality was not closed by the founders. It was closed by the people the promise excluded. The Seneca Falls Declaration (1848): Elizabeth Cady Stanton and Lucretia Mott adapted the Declaration's language: 'We hold these truths to be self-evident: that all men and women are created equal.' The Thirteenth Amendment (1865): abolished slavery — the undoing of what the three-fifths compromise built in. The Fifteenth (1870): prohibited racial voting discrimination. The Nineteenth (1920): gave women the vote. The Civil Rights movement (1950s-60s): demanded that the promise be enforced against the states that ignored it. Each act of expansion was a link in the chain. The chain runs from Magna Carta (free men, 1215) through the Declaration (all men, 1776) through the amendments (all people, ongoing). The words were the seed. The expansion was the work. The people who did the work were the people the words did not include. The chain is not finished. The question is who picks it up next.",
          },
        ],
        bigIdea:
          "The Declaration's promise was made for 6% of the population. The expansion to everyone was the work of the people the promise excluded. The chain is not finished.",
        tryThis: [
          {
            title: "Trace the expansion",
            minutes: 30,
            steps: [
              "List the links: Declaration (1776) → Seneca Falls (1848) → Thirteenth (1865) → Fifteenth (1870) → Nineteenth (1920) → Civil Rights (1960s).",
              "For each link, write: who was included that was not included before? Who did the work?",
              "Ask: the founders planted the seed. Who grew the tree? Are they the same people?",
              "Reflect: the expansion is ongoing. Who is still waiting to be included? Where is the chain still being built?",
            ],
          },
        ],
        dinnerQuestion: "The founders planted the seed. The people who expanded the promise were the people the promise excluded. What does it mean that the tree was grown by people the seed did not include?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How did the Declaration's promise expand?' The model will summarize. Then ask: 'Who did the work?' The answer is: the people the words did not include. The model's summary will skip the people. The people are the story." },
          { label: "Thinking", note: "The Magna Carta chain: 'free men' → 'all men' → 'all people.' The Declaration is a link in this chain. The expansion is the same chain. The work is the same work: people picking up a text and demanding it mean more than it said." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is just a lie.",
            reply: "It is a promise that was not kept — and a promise that was eventually expanded by the people it excluded. Both are true. If you dismiss it as a lie, you dismiss the seed that the expansion grew from. If you celebrate it without naming the gap, you erase the people who did the work. The honest reading: the words were the seed, the seed was cracked, and the cracks were repaired by people the seed did not include. The chain is the story. The story is the work. The work is not finished.",
          },
        ],
        integrity: "Do not let the model collapse the gap or the expansion. The promise was for 6%. The expansion took centuries. The expansion was the work of people the words excluded. All three are the history. None alone is.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Did the Declaration include everyone?' If it says yes, that is the legend. If it says 'white male property owners, about 6%,' that is honest. Then ask: 'How did it expand?' The expansion is the story the model's summary will compress.",
          evaluate: [
            "Can they trace the chain of expansion through at least four links?",
            "Do they understand that the expansion was the work of people the words excluded?",
            "Can they identify where the chain is still being built?",
          ],
        },
      },
      adult: {
        title: "The Gap: The Seed, the Tree, and the People Who Grew It",
        dek: "The Declaration's promise was made for 6% of the population. The people who expanded it were the people it excluded. The chain from the seed to the tree is the story of America — and it is not finished.",
        objective:
          "The parent can explain the gap between the Declaration's promise and the historical reality, trace the full chain of expansion from the founders through Seneca Falls through the Civil Rights movement, and understand that the expansion is the work of people the promise did not include — and that the work is ongoing.",
        parentBriefing:
          "This is the capstone of the Declaration unit and, in many ways, of the entire civic documents sequence. The parent should understand that the Declaration's promise was made for 6% of the population, that the expansion to include everyone was not the founders' work but the work of the people the promise excluded, and that the chain of expansion is the same chain that runs from Magna Carta through the Constitution through the amendments. The parent should leave the unit understanding that the American founding was a seed — cracked, limited, compromised — and that the tree that grew from it was tended by people the seed did not include. The question is not whether the founding was good or bad. It is whether the chain of expansion continues — whether the people who are still fighting for inclusion are the next link, or whether the chain stops here.",
        hardEdges: [
          "Do not teach the founding as either sacred or fraudulent. It was a cracked seed. The cracks were repaired by people the seed did not include. Both are the history.",
          "The expansion is ongoing. The question of who is included is not settled. The chain is not finished.",
        ],
        reading: [
          {
            heading: "The seed, the tree, and the people who grew it",
            body: "The Declaration was a seed. It was cracked: 'all men' meant 6% of the population. The founders planted the seed knowing it was cracked — they stripped the passage that condemned the slave trade to protect slaveholders. The tree that grew from the seed was tended by people the seed did not include. The Seneca Falls Declaration (1848) extended 'all men' to 'all men and women.' The Thirteenth Amendment (1865) abolished slavery. The Fourteenth (1868) guaranteed equal protection. The Fifteenth (1870) prohibited racial voting discrimination. The Nineteenth (1920) gave women the vote. The Civil Rights movement (1950s-60s) demanded that the promise be enforced. Each act of expansion was a link in the chain. The chain runs from Magna Carta (free men, 1215) through the Declaration (all men, 1776) through the Constitution (We the People, 1787) through the amendments (all people, ongoing). The founders planted the seed. The people who grew the tree were the people the seed did not include. The chain is not finished. The question is who picks it up next — and whether the chain can still be extended, or whether the difficulty of amendment and the polarization of politics have made the chain too hard to grow. The Declaration is 250 years old. The promise is older. The practice is ongoing. The next link is the question this unit leaves with the reader.",
          },
        ],
        bigIdea:
          "The Declaration was a cracked seed. The tree was grown by people the seed did not include. The chain from the seed to the tree is the story of America. The chain is not finished. The next link is the question.",
        tryThis: [
          {
            title: "The next link",
            minutes: 40,
            steps: [
              "Trace the full chain: Magna Carta (1215) → Declaration (1776) → Constitution (1787) → Seneca Falls (1848) → Thirteenth (1865) → Civil Rights (1960s). Each link expanded who counts.",
              "Ask: who is still waiting to be included? What right is still being expanded or contested?",
              "Reflect: the founders planted the seed. The people who expanded it were the people the seed excluded. Are you part of the chain? What happens if no one picks it up?",
              "Ask: the chain from Magna Carta to today is the chain of interpretation, expansion, and defense. The Declaration is a link. The Constitution is a link. The amendments are links. What is the next link? Who makes it?",
            ],
          },
        ],
        dinnerQuestion: "The Declaration was a cracked seed. The tree was grown by people the seed did not include. Who picks up the chain next? And what happens if no one does?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is the Declaration still relevant?' Then ask: 'What did your answer assume?' The model assumes the chain is self-sustaining. The chain requires people. That is the lesson." },
          { label: "Philosophy", note: "The full chain: Magna Carta (free men) → Declaration (all men) → Constitution (We the People) → amendments (all people). Each link is an act of interpretation and expansion. The chain is the story of how a text becomes a practice. The practice requires people. The people are the chain." },
        ],
        ifTheySay: [
          {
            heard: "The founding was fraudulent because it excluded most people.",
            reply: "It excluded most people. And it planted a seed that the excluded people used to demand inclusion. Both are true. The Seneca Falls Declaration quotes the Declaration's language and extends it. The Civil Rights movement cites the Declaration and the Fourteenth Amendment. The excluded did not dismiss the words. They picked them up and demanded that they mean what they say. If you call the founding fraudulent, you dismiss the tool the excluded used to win inclusion. If you call it sacred, you erase the exclusion. The honest reading: the founding was a cracked seed. The cracks were the exclusion. The repairs were the work of the people the seed did not include. The chain is the story. The story is the work. The work is not finished.",
          },
        ],
        integrity: "Do not let the model collapse the chain into a celebration or a condemnation. The Declaration was a cracked seed. The expansion was the work of people the seed excluded. The chain is not finished. Read the words. Read the gap. Read the chain. All three are the history. None alone is.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the Declaration's legacy in three sentences.' Then ask: 'What did you celebrate, and what did you skip?' The model will celebrate the promise and skip the gap. The gap is the legacy. The celebration is the summary. The summary is not the story.",
          evaluate: [
            "Can they trace the full chain from Magna Carta through the Declaration through the amendments?",
            "Do they understand that the expansion was the work of people the words excluded?",
            "Can they hold both: the words were the seed, and the seed was cracked?",
            "Can they identify where the chain is still being built — and who is doing the work?",
          ],
        },
      },
    },
  }),
];

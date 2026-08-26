import { expand } from "./factory";

export const declarationLessons = [
  // ── 1. The Committee of Five ───────────────────────────────────────
  ...expand({
    slug: "committee-of-five",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Jefferson Did Not Write It Alone",
        dek: "A committee of five wrote the Declaration. Congress changed a quarter of it. The 'Jefferson alone' story is a myth.",
        objective:
          "The student can explain that the Declaration was a collective product — drafted by Jefferson, revised by a committee, and changed by Congress.",
        parentBriefing:
          "This sitting corrects a common misconception: that Jefferson wrote the Declaration alone, in a room, with a quill pen. The reality: the Continental Congress appointed a committee of five — Jefferson, Adams, Franklin, Sherman, and Livingston. Jefferson was the primary drafter because he was the best writer and because he was from Virginia (the largest colony). Adams and Franklin reviewed the draft. Franklin likely suggested changing 'sacred and undeniable' to 'self-evident.' Then Congress debated the draft for two days and cut about a quarter of it — including a passage attacking the slave trade. The final Declaration is about 75% Jefferson's words. The rest was changed, added, or deleted by others. The student should understand that the Declaration was a collective political document, not a personal manifesto. The founding was a group effort, with disagreements and compromises — not the work of one person.",
        hardEdges: [
          "Do not present Jefferson as the sole author. He was the primary drafter. The committee reviewed it. Congress revised it extensively.",
          "Do not skip the slavery passage removal. Congress stripped Jefferson's passage attacking the slave trade to protect the unity of the colonies. The Declaration was compromised at birth.",
        ],
        reading: [
          {
            heading: "The committee",
            body: "The Continental Congress appointed five people to draft the Declaration: Thomas Jefferson (Virginia), John Adams (Massachusetts), Benjamin Franklin (Pennsylvania), Roger Sherman (Connecticut), and Robert Livingston (New York). Jefferson was chosen as the writer because he was good at it and because Virginia was the largest colony. Adams, who had been the most visible advocate for independence, stepped aside because he knew a Virginian author would carry more weight.",
          },
          {
            heading: "What Congress changed",
            body: "After the committee reviewed the draft, Congress debated it for two days. They cut about a quarter of the text. The biggest deletion was a passage where Jefferson attacked the slave trade — blaming King George for it. South Carolina and Georgia, the colonies most dependent on slavery, refused to accept it. The other delegates chose unity over principle and removed it. Congress also changed the opening: 'sacred and undeniable' became 'self-evident' — probably Franklin's suggestion. The final Declaration is about 75% Jefferson's words. The rest was changed by others.",
          },
        ],
        bigIdea:
          "The Declaration was a collective product. Jefferson drafted it, the committee reviewed it, Congress changed a quarter of it. The 'Jefferson alone' story is a myth.",
        tryThis: [
          {
            title: "Count the authors",
            minutes: 18,
            steps: [
              "Name the Committee of Five: Jefferson, Adams, Franklin, Sherman, Livingston. Jefferson was the writer. The others reviewed.",
              "Find one change Congress made: 'sacred and undeniable' became 'self-evident.' Why does the change matter? ('Self-evident' is an Enlightenment term — a truth that proves itself. 'Sacred' is a religious term.)",
              "Talk About It: Congress removed the passage attacking the slave trade. Why? (South Carolina and Georgia refused. The colonies chose unity over principle.) What does that tell you about the founding?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration was written by a committee and changed by Congress, why do we remember it as Jefferson's document? What does the myth of the solo author hide?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Jefferson's draft and the final version are both available. Read them. The differences are the story." },
        ],
        ifTheySay: [
          {
            heard: "Jefferson wrote the Declaration by himself.",
            reply: "He was the primary drafter, but not the only author. A committee of five reviewed the draft. Congress debated it for two days and cut a quarter of the text — including a passage attacking the slave trade. Franklin likely suggested changing 'sacred and undeniable' to 'self-evident.' The final Declaration is about 75% Jefferson's words. The rest was changed by others. The founding was a group effort, not a solo performance.",
          },
        ],
        integrity: "Do not let the model say Jefferson wrote the Declaration alone. He was the primary drafter. The committee and Congress revised it. The changes — especially the removal of the slavery passage — are the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'Who wrote the Declaration of Independence?' If it says 'Thomas Jefferson,' ask: 'Who else was involved?' The committee of five and Congress. The collective authorship is the story.",
          evaluate: [
            "Can they name the Committee of Five?",
            "Do they know Congress revised the draft and cut a quarter of it?",
            "Do they know the slavery passage was removed?",
          ],
        },
      },
      emerging: {
        title: "The Committee of Five: Collective Authorship",
        dek: "The Declaration was a collective political document, not a personal manifesto. Jefferson drafted it, the committee reviewed it, Congress cut a quarter of it — including the passage attacking the slave trade.",
        objective:
          "The student can explain the collective authorship of the Declaration, the Committee of Five's role, Congress's revisions, and what the changes reveal about the founding.",
        parentBriefing:
          "This sitting takes the Declaration's authorship seriously as a political fact. The student needs to understand three things. First, the Committee of Five: Jefferson (primary drafter), Adams (the political leader who pushed for independence), Franklin (the elder statesman), Sherman (the practical politician), and Livingston (the diplomat). Jefferson was chosen because he was the best writer and because Virginia was the largest colony. Adams deferred because he knew a Virginian author would carry more weight. Second, the changes: the committee reviewed the draft. Franklin likely suggested 'sacred and undeniable' → 'self-evident' — shifting the foundation from religious revelation to Enlightenment reason. Congress then debated for two days and cut about a quarter of the text, including Jefferson's passage attacking the slave trade. South Carolina and Georgia refused to accept it; the other delegates chose unity over principle. Third, what the changes reveal: the Declaration was a political document, not a philosophical treatise. It was the product of negotiation and compromise. The removal of the slavery passage was the same kind of compromise that marked the Constitutional Convention eleven years later. The colonies chose unity over principle, and the Declaration was edited to preserve that unity. The student should understand that the founding was collective, contested, and compromised — not the work of a single genius.",
        hardEdges: [
          "Do not present Jefferson as the sole author. He was the primary drafter. The Committee of Five reviewed it. Congress revised it extensively.",
          "Do not skip the slavery passage removal. Congress stripped Jefferson's attack on the slave trade to protect colonial unity. The Declaration's promise of equality was compromised at birth.",
          "The change from 'sacred and undeniable' to 'self-evident' matters. It shifts the foundation from religious revelation to Enlightenment reason. The change is likely Franklin's.",
        ],
        reading: [
          {
            heading: "The drafting process",
            body: "The Continental Congress appointed a committee of five to draft a declaration of independence: Thomas Jefferson (Virginia), John Adams (Massachusetts), Benjamin Franklin (Pennsylvania), Roger Sherman (Connecticut), and Robert Livingston (New York). Jefferson was chosen as the primary drafter because he was the best writer and because Virginia was the largest and most important colony. Adams, who had been the most visible advocate for independence, deferred to Jefferson because he knew a Virginian author would carry more weight. Jefferson drafted the text in his Philadelphia lodging, drawing on his own drafts of the Virginia Constitution, George Mason's Virginia Declaration of Rights, and Locke's Second Treatise of Government. The committee reviewed the draft. Adams and Franklin made suggestions. Franklin likely suggested the change from 'sacred and undeniable' to 'self-evident' — a shift from a religious term to an Enlightenment term (from Euclidean geometry, a truth that proves itself). Then the Continental Congress debated the draft on July 2-4, 1776. Congress made extensive changes: deleted about one-quarter of the text, altered the opening, added and modified grievances, toned down Jefferson's angrier rhetoric, and made the conclusion more formal. The final version is approximately 75% Jefferson's words, with 25% changed, added, or deleted by others.",
          },
          {
            heading: "The stripped slavery passage",
            body: "The most significant deletion was Jefferson's passage attacking the slave trade: 'He has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people who never offended him, captivating and carrying them into slavery in another hemisphere.' Congress stripped this passage entirely. South Carolina and Georgia, the two colonies most dependent on the slave trade, refused to accept it. The other delegates, prioritizing unity over principle, agreed to remove it. The irony is compounded by Jefferson's own status as a slaveholder. He wrote a passage condemning the slave trade while owning over 200 enslaved people. He blamed the king for the slave trade, deflecting responsibility from the colonists who purchased and held slaves. And even this deflection was too much for South Carolina and Georgia. The Declaration says 'all men are created equal' — but the document that says it was edited to avoid challenging slavery. The promise was compromised at birth.",
          },
        ],
        bigIdea:
          "The Declaration was a collective political document, not a personal manifesto. Jefferson drafted it, the committee reviewed it, Congress cut a quarter of it — including the passage attacking the slave trade. The founding was collective, contested, and compromised.",
        tryThis: [
          {
            title: "Compare the draft and the final",
            minutes: 30,
            steps: [
              "Read Jefferson's draft and the final version. Find the changes: 'sacred and undeniable' → 'self-evident.' The slavery passage removed. The grievances modified.",
              "Write: why does 'self-evident' matter more than 'sacred and undeniable'? (Self-evident is Enlightenment — a truth that proves itself. Sacred is religious — a truth from God. The change shifts the foundation.)",
              "Read the stripped slavery passage. Congress removed it to protect colonial unity. What does that tell you about the founding? Was the Declaration compromised from the start?",
              "Reflect: the final Declaration is 75% Jefferson's words. The rest was changed by others. The founding was a group effort, with disagreements, compromises, and editorial improvements. Why do we remember it as Jefferson's?",
            ],
          },
        ],
        dinnerQuestion:
          "If Congress removed the passage attacking the slave trade to keep South Carolina and Georgia in the coalition, was the Declaration compromised at birth? Can a document say 'all men are created equal' while editing out the attack on slavery?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Jefferson's draft and the final version are both available. Read them. The differences are the story." },
          { label: "AI", note: "Ask the model: 'Who wrote the Declaration?' If it says 'Jefferson,' ask: 'Who else was involved?' The Committee of Five and Congress. Then ask: 'What did Congress remove?' The slavery passage. The removal is the story." },
          { label: "History", note: "Magna Carta was sealed at swordpoint. The Declaration was edited by committee. Both were political documents produced through pressure and compromise. The charter was forced from a king. The Declaration was negotiated among colonies." },
        ],
        ifTheySay: [
          {
            heard: "Jefferson wrote the Declaration by himself.",
            reply: "He was the primary drafter. But the Committee of Five — Jefferson, Adams, Franklin, Sherman, Livingston — reviewed the draft. Franklin likely suggested 'sacred and undeniable' → 'self-evident.' Congress then debated for two days and cut a quarter of the text, including the passage attacking the slave trade. The final version is 75% Jefferson's words. The rest was changed by others. The founding was a collective political effort, not a solo performance. The 'Jefferson alone' myth hides the committee, the debate, the compromise — and the removal of the slavery passage, which is the most important change Congress made.",
          },
          {
            heard: "The Declaration was a statement of pure principle.",
            reply: "It was a political document, not a philosophical treatise. It was drafted by a committee, revised by Congress, and edited to preserve colonial unity. The removal of the slavery passage was a political compromise — the same kind of compromise that marked the Constitutional Convention. The colonies chose unity over principle. The Declaration says 'all men are created equal' — but the document that says it was edited to avoid challenging slavery. The principle was real. The compromise was also real. Both are the founding.",
          },
        ],
        integrity:
          "Do not let the model say Jefferson wrote the Declaration alone. Read the Committee of Five's role. Read Congress's revisions. Read the stripped slavery passage. The collective authorship, the changes, and the compromise are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Who wrote the Declaration of Independence?' If it says 'Thomas Jefferson,' ask: 'Who else was involved, and what did they change?' The Committee of Five and Congress. The changes — especially the removal of the slavery passage — are the story the model will smooth.",
          evaluate: [
            "Can they name the Committee of Five and explain the drafting process?",
            "Do they know Congress cut a quarter of the text, including the slavery passage?",
            "Can they explain why the change from 'sacred and undeniable' to 'self-evident' matters?",
            "Do they understand the Declaration was a collective, compromised political document?",
          ],
        },
      },
      adult: {
        title: "The Committee of Five: The Founding as Collective Act",
        dek: "The Declaration was a collective political document — drafted by Jefferson, revised by the committee, and cut by Congress. The 'Jefferson alone' myth hides the committee, the debate, the compromise, and the removal of the slavery passage. The founding was a group effort.",
        objective:
          "The parent can explain the collective authorship of the Declaration, the Committee of Five's role, Congress's revisions, the removal of the slavery passage, and what the changes reveal about the founding as a political act.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's authorship honestly. The parent should understand three things. First, the Committee of Five: Jefferson drafted, Adams reviewed, Franklin suggested the 'self-evident' change, Sherman and Livingston were the practical politicians. Jefferson was chosen because he was the best writer and because Virginia was the largest colony. Adams deferred because he knew a Virginian author would carry more weight. Second, Congress's revisions: about a quarter of the text was deleted or altered. The biggest deletion was the passage attacking the slave trade — stripped to protect South Carolina and Georgia, the colonies most dependent on slavery. The change from 'sacred and undeniable' to 'self-evident' shifted the foundation from religious revelation to Enlightenment reason. Third, what the changes reveal: the Declaration was a political document, not a philosophical treatise. It was produced through negotiation and compromise — the same kind of compromise that marked the Constitutional Convention. The colonies chose unity over principle. The parent should understand that teaching the Declaration as Jefferson's solo masterpiece hides the collective authorship, the debate, and the compromise that shaped it. The founding was a group effort, with disagreements and editorial improvements. The 'Jefferson alone' myth is not just inaccurate. It hides the political nature of the founding.",
        hardEdges: [
          "Do not teach the 'Jefferson alone' myth. He was the primary drafter. The Committee of Five reviewed. Congress revised extensively. The final document is 75% Jefferson's words.",
          "Do not skip the slavery passage removal. It is the most important change Congress made. The Declaration's promise of equality was compromised at birth by the removal of the attack on the slave trade.",
          "The change from 'sacred and undeniable' to 'self-evident' is not a minor edit. It shifts the Declaration's foundation from religious revelation to Enlightenment reason. It is likely Franklin's suggestion. The change matters.",
        ],
        reading: [
          {
            heading: "The collective founding",
            body: "The Declaration was a collective political document. The Continental Congress appointed a committee of five — Jefferson, Adams, Franklin, Sherman, Livingston — to draft it. Jefferson was the primary drafter, chosen because he was the best writer and because Virginia was the largest colony. Adams deferred because a Virginian author would carry more weight. The committee reviewed the draft: Adams and Franklin made suggestions, including (likely) the change from 'sacred and undeniable' to 'self-evident' — a shift from a religious term to an Enlightenment term that grounds the Declaration in reason, not revelation. Congress then debated the draft for two days and cut about a quarter of the text. The most significant deletion was Jefferson's passage attacking the slave trade, which blamed King George for 'cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people.' South Carolina and Georgia refused to accept it. The other delegates chose unity over principle. The irony: Jefferson wrote a passage condemning the slave trade while owning over 200 enslaved people. He blamed the king, deflecting responsibility from the colonists who purchased and held slaves. And even this deflection was too much. The final Declaration is 75% Jefferson's words. The founding was collective, contested, and compromised — not the work of a single genius in a room.",
          },
        ],
        bigIdea:
          "The Declaration was a collective political document — drafted by Jefferson, revised by the committee, cut by Congress. The 'Jefferson alone' myth hides the committee, the debate, the compromise, and the removal of the slavery passage. The founding was a group effort.",
        tryThis: [
          {
            title: "Read the draft, the final, and the change",
            minutes: 40,
            steps: [
              "Read Jefferson's draft and the final Declaration side by side. Mark every change. The biggest: 'sacred and undeniable' → 'self-evident.' The slavery passage removed. The grievances modified.",
              "Write: why does 'self-evident' matter? (It shifts the foundation from religion to reason. 'Self-evident' is from Euclidean geometry — a truth that proves itself. 'Sacred' is from religion — a truth from God. The change grounds the Declaration in Enlightenment, not revelation.)",
              "Read the stripped slavery passage. Write: what does the removal tell you about the founding? (The colonies chose unity over principle. The same compromise shaped the Constitution eleven years later.)",
              "Reflect: we remember the Declaration as Jefferson's. It was 75% his words. The other 25% — the committee's suggestions, Congress's cuts, the slavery passage's removal — is the political history the myth hides. Why do we prefer the myth?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration was edited by committee, compromised on slavery at birth, and produced through political negotiation, what is its claim to moral authority? Is it the words, the author, or the principle that survives the compromise?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Did Jefferson write the Declaration alone?' If it says yes, that is the myth. Ask: 'Who else was involved, and what did they change?' The Committee of Five, Congress, and the removal of the slavery passage. The myth hides the politics." },
          { label: "History", note: "Magna Carta was forced from a king. The Declaration was negotiated among colonies. The Constitution was designed by a convention. Each founding was a political act, not a solo performance. The 'great man' myth hides the collective work." },
        ],
        ifTheySay: [
          {
            heard: "Jefferson wrote the Declaration by himself.",
            reply: "He was the primary drafter. The Committee of Five — Jefferson, Adams, Franklin, Sherman, Livingston — reviewed the draft. Franklin likely suggested 'sacred and undeniable' → 'self-evident.' Congress debated for two days and cut a quarter of the text, including the passage attacking the slave trade. The final Declaration is 75% Jefferson's words. The 'Jefferson alone' myth is not just inaccurate. It hides the collective authorship, the political debate, the compromise on slavery, and the editorial improvements that shaped the document. The founding was a group effort. The myth of the solo genius makes the founding seem cleaner than it was.",
          },
          {
            heard: "The Declaration is a pure statement of principle.",
            reply: "It is a political document that states principles. The principles are real: equality, natural rights, consent, revolution. But the document was also a political compromise. Congress removed the passage attacking the slave trade to keep South Carolina and Georgia in the coalition. The change from 'sacred and undeniable' to 'self-evident' was an editorial improvement, not a philosophical decision. The grievances were tailored to specific colonial audiences. The Declaration is both a statement of principle and a political act. Teaching it as pure principle hides the compromise. Teaching it as mere politics hides the principle. The honest reading is: it is both, and the tension between them is the story.",
          },
        ],
        integrity:
          "Do not let the model present the Declaration as Jefferson's solo masterpiece or as a pure statement of principle. Read the Committee of Five's role. Read Congress's revisions. Read the stripped slavery passage. The collective authorship, the changes, and the compromise are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the authorship of the Declaration in one sentence.' Then ask: 'What did you skip?' The model will say Jefferson wrote it. The Committee of Five, Congress's revisions, and the slavery passage removal are the story. The compression hides the politics.",
          evaluate: [
            "Can they explain the Committee of Five and the drafting process?",
            "Do they know Congress cut a quarter of the text, including the slavery passage?",
            "Can they explain why the 'self-evident' change matters?",
            "Do they understand the Declaration as a collective, compromised political document?",
          ],
        },
      },
    },
  }),

  // ── 2. Self-Evident Truths ──────────────────────────────────────────
  ...expand({
    slug: "self-evident-truths",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Most Important Sentence",
        dek: "'We hold these truths to be self-evident, that all men are created equal.' That sentence changed the world. It also contained a gap the founders did not see.",
        objective:
          "The student can explain the four claims in the Declaration's second sentence and why they matter.",
        parentBriefing:
          "This sitting is about the most important sentence in American history: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.' The sentence makes four claims: (1) all men are created equal — no one is born with a right to rule; (2) people have unalienable rights — life, liberty, pursuit of happiness — that cannot be taken away because they are not given by government; (3) governments derive their authority from the consent of the governed; (4) when a government violates these rights, the people can change it. These ideas came from John Locke's social contract theory. Jefferson changed 'property' to 'pursuit of happiness' — broadening the concept from ownership to human flourishing. The student should understand that this sentence is the philosophical foundation of the United States. It is also the sentence that contained the gap: 'all men' did not include women, slaves, or Native Americans. The promise and the gap are both in the same sentence.",
        hardEdges: [
          "Do not skip the gap. 'All men' did not mean all people. Jefferson owned slaves. The sentence is both the foundation of American liberty and the measure of American hypocrisy.",
          "Do not present the ideas as Jefferson's invention. They come from Locke's Second Treatise and the Scottish Enlightenment. Jefferson's contribution was the language, not the philosophy.",
        ],
        reading: [
          {
            heading: "The four claims",
            body: "The Declaration's second sentence makes four claims. First: 'all men are created equal.' No one is born with a right to rule over another. This contradicts the idea of divine right monarchy. Second: people have 'unalienable Rights' — life, liberty, and the pursuit of happiness. These rights cannot be taken away because they are not given by government. They come from nature or God. Third: governments get their authority from 'the consent of the governed.' Government is a human creation, not a divine institution. Fourth: when a government violates these rights, the people can 'alter or abolish it.' The people have the right of revolution.",
          },
          {
            heading: "Where the ideas came from",
            body: "The ideas came from John Locke's Second Treatise of Government (1689). Locke argued that people have natural rights (life, liberty, property), that government exists to protect them, and that people can resist a government that violates them. Jefferson changed 'property' to 'the pursuit of happiness' — broadening the idea from owning things to the freedom to seek a good life. The change is one of the most important word choices in American history.",
          },
        ],
        bigIdea:
          "The Declaration's second sentence makes four claims: equality, unalienable rights, consent of the governed, and the right of revolution. The ideas came from Locke. Jefferson's language — 'pursuit of happiness' instead of 'property' — broadened them.",
        tryThis: [
          {
            title: "Find the four claims",
            minutes: 18,
            steps: [
              "Read the sentence: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.'",
              "Write the four claims: (1) all men are equal, (2) unalienable rights, (3) consent of the governed, (4) right to change the government.",
              "Talk About It: 'all men' — did Jefferson mean everyone? He owned slaves. Women could not vote. Native Americans were called 'merciless Indian Savages' later in the same document. The sentence says one thing and the author meant another. The gap is the story.",
            ],
          },
        ],
        dinnerQuestion:
          "If 'all men are created equal' did not include women, slaves, or Native Americans, what did it mean? And how did it become the standard for equality rather than the measure of hypocrisy?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration's second sentence is the source. Locke is the influence. Read both." },
        ],
        ifTheySay: [
          {
            heard: "Jefferson believed all people are equal.",
            reply: "He wrote 'all men are created equal' while owning over 200 enslaved people. He did not mean women — they could not vote. He did not mean Native Americans — the Declaration calls them 'merciless Indian Savages.' He meant, in practice, white male property owners. But the words themselves — 'all men are created equal' — are universal. They do not say 'all white male property owners.' The power of the Declaration is in the gap between what Jefferson meant and what he wrote. Every movement for equality in American history has used his words against his limitations.",
          },
        ],
        integrity: "Do not let the model say 'all men' meant everyone. It did not. Read the sentence. Then read the history. The gap between the words and the practice is the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'What does the Declaration say about equality?' Then ask: 'Did Jefferson mean everyone?' The model may say yes. The honest answer: he did not. He owned slaves. The words are universal; the author was not. The gap is the lesson.",
          evaluate: [
            "Can they name the four claims in the Declaration's second sentence?",
            "Do they know the ideas came from Locke?",
            "Do they understand the gap between 'all men' and who Jefferson meant?",
          ],
        },
      },
      emerging: {
        title: "Self-Evident Truths: The Four Claims and the Gap",
        dek: "The Declaration's second sentence makes four claims that changed the world: equality, unalienable rights, consent, and revolution. The ideas came from Locke. The gap between the words and the practice is the American story.",
        objective:
          "The student can explain the four claims in the Declaration's second sentence, trace them to Locke and the Scottish Enlightenment, and identify the gap between the universal language and the limited practice.",
        parentBriefing:
          "This sitting takes the Declaration's central sentence seriously as both philosophy and political act. The student needs to understand three things. First, the four claims: (1) all men are created equal — equality is a natural condition, not a grant of government; (2) unalienable rights — life, liberty, pursuit of happiness — that come from nature or God, not government; (3) governments derive authority from the consent of the governed; (4) the people have the right of revolution. Second, the sources: Locke's Second Treatise (life, liberty, property), the Scottish Enlightenment (self-evident truths, moral sense), and the natural law tradition (laws of nature and Nature's God). Jefferson changed 'property' to 'pursuit of happiness' — broadening from economic ownership to human flourishing. The change from 'sacred and undeniable' to 'self-evident' (likely Franklin) shifted the foundation from religion to Enlightenment reason. Third, the gap: 'all men' did not include women, slaves, Native Americans, or the propertyless. Jefferson owned over 200 enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' The words are universal. The author was not. The power of the Declaration lies in this gap — the words are more radical than their author intended, and every movement for equality has used them against the limitations of the founder.",
        hardEdges: [
          "Do not present 'all men' as meaning all people. It did not. The gap between the universal language and the limited practice is the central fact of the Declaration.",
          "Do not skip the sources. The ideas came from Locke and the Scottish Enlightenment. Jefferson's contribution was the language — 'pursuit of happiness' instead of 'property,' 'self-evident' instead of 'sacred and undeniable' — not the philosophy.",
          "Do not present the Declaration as purely secular. It appeals to 'the Laws of Nature and of Nature's God' and says people are 'endowed by their Creator.' It uses theistic language — but natural theology, not specific Christian doctrine.",
        ],
        reading: [
          {
            heading: "The four claims and their sources",
            body: "The Declaration's second sentence makes four claims. First: 'all men are created equal' — equality is the natural condition, not a grant of government. This contradicts divine right monarchy and feudal hierarchy. Second: people are 'endowed by their Creator with certain unalienable Rights' — life, liberty, and the pursuit of happiness. Rights are inherent — they come from nature or God, not from government. Government cannot grant them (because it did not create them) and cannot take them away (because they are unalienable). Third: 'Governments are instituted among Men, deriving their just powers from the consent of the governed.' Government is a human creation, established by consent. Fourth: 'whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.' The people retain the right of revolution. The sources: Locke's Second Treatise (1689) argued that people have natural rights (life, liberty, property), that government exists to protect them, and that people can resist a government that violates them. Jefferson changed 'property' to 'pursuit of happiness' — broadening from economic ownership to human flourishing. The Scottish Enlightenment (Hutcheson, Reid) contributed 'self-evident' — the idea that some truths are so basic they need no proof. The change from 'sacred and undeniable' to 'self-evident' (likely Franklin) shifted the foundation from religious revelation to Enlightenment reason.",
          },
          {
            heading: "The gap between the words and the practice",
            body: "The Declaration says 'all men are created equal.' Jefferson owned over 200 enslaved people. Women could not vote in any state. Native Americans were described as 'merciless Indian Savages' in the Declaration's grievances. Property qualifications for voting were universal in 1776. 'All men,' in practice, meant white male property owners. But the words themselves — 'all men are created equal' — do not say 'all white male property owners.' They say 'all men.' The power of the Declaration lies in this gap. The words are more radical than their author intended. Every movement for equality in American history — abolition, women's suffrage, civil rights, marriage equality — has used the Declaration's words against the limitations of its author and his generation. Lincoln argued in 1858 that the founders did not mean everyone was already equal, but that equality is the 'standard maxim' the nation is always working toward. The promise is permanent. The fulfillment is ongoing. The gap between the promise and the practice is the American story.",
          },
        ],
        bigIdea:
          "The Declaration's four claims — equality, unalienable rights, consent, revolution — came from Locke and the Scottish Enlightenment. Jefferson's language broadened them. The gap between the universal words and the limited practice is the American story. The promise is permanent. The fulfillment is ongoing.",
        tryThis: [
          {
            title: "Read the sentence, find the sources, name the gap",
            minutes: 30,
            steps: [
              "Read the Declaration's second sentence. Write the four claims: equality, unalienable rights, consent, revolution.",
              "Find the sources: Locke's Second Treatise (life, liberty, property). Jefferson's change: 'pursuit of happiness' instead of 'property.' The Scottish Enlightenment: 'self-evident' (truths that prove themselves) instead of 'sacred and undeniable' (truths from God).",
              "Name the gap: 'all men' did not include women (could not vote), slaves (Jefferson owned 200+), Native Americans ('merciless Indian Savages'), or the propertyless. Write: what did 'all men' mean in practice? What do the words say?",
              "Reflect: the words are more radical than the author. Every movement for equality has used the Declaration's words against its author's limitations. Lincoln called equality a 'standard maxim' — always worked toward, never perfectly attained. What does that mean?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration says 'all men are created equal' but the author owned slaves and excluded women and Native Americans, what is the document's moral authority? Is it the words, the author, or the gap between them?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration's second sentence is the source. Locke's Second Treatise is the influence. Read both. The differences are the story." },
          { label: "AI", note: "Ask the model: 'What does the Declaration say about equality?' Then ask: 'Did Jefferson mean everyone?' The model may say yes. The honest answer: he did not. The gap between the words and the practice is the lesson." },
          { label: "History", note: "Magna Carta said 'free men.' The Declaration says 'all men.' Both documents used universal language that did not match their practice. The charter omitted villeins. The Declaration omitted women, slaves, and Native Americans. The gap is the pattern." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration says all people are equal, so the founders believed in equality.",
            reply: "The words say 'all men are created equal.' The practice was different. Jefferson owned over 200 enslaved people. Women could not vote. Native Americans were called 'merciless Indian Savages' in the same document. In practice, 'all men' meant white male property owners. But the words themselves are universal. They do not say 'all white male property owners.' The power of the Declaration is in the gap between the universal words and the limited practice. Lincoln resolved this by arguing that the founders set up a 'standard maxim' — a principle the nation is always working toward, even if never perfectly attained. The promise is permanent. The fulfillment is ongoing. The gap between them is the American story. Every movement for equality has used the Declaration's words against the limitations of the founder.",
          },
          {
            heard: "The Declaration is a secular document.",
            reply: "It is not purely secular. It appeals to 'the Laws of Nature and of Nature's God' and says people are 'endowed by their Creator with certain unalienable Rights.' It concludes with 'a firm reliance on the protection of divine Providence.' These are theistic phrases. But they are not specifically Christian — the Declaration does not mention Jesus Christ, the Bible, or any Christian doctrine. It uses the language of natural theology — God as creator of the natural order, accessible through reason. This is compatible with deism, which many founders (Jefferson, Franklin, Adams) held. The Declaration is theistic but not sectarian. It grounds its principles in a source beyond government — nature and Nature's God — not in a specific religious tradition.",
          },
        ],
        integrity:
          "Do not let the model say 'all men' meant everyone or that the Declaration is purely secular. Read the sentence. Read the history. The gap between the words and the practice is the story. The theistic language is real, but it is natural theology, not Christian doctrine.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's principles in three sentences.' Then ask: 'What did you skip?' The model will skip the gap — the fact that 'all men' did not include women, slaves, or Native Americans. The gap is the story the model will smooth.",
          evaluate: [
            "Can they name the four claims in the Declaration's second sentence?",
            "Can they trace the ideas to Locke and the Scottish Enlightenment?",
            "Do they understand the gap between the universal words and the limited practice?",
            "Can they explain the 'standard maxim' idea (Lincoln)?",
          ],
        },
      },
      adult: {
        title: "Self-Evident Truths: The Promise, the Sources, and the Gap",
        dek: "The Declaration's second sentence is the philosophical foundation of the United States. Its four claims came from Locke and the Scottish Enlightenment. Its gap — universal words, limited practice — is the American story. Understanding both is essential to teaching it honestly.",
        objective:
          "The parent can explain the four claims in the Declaration's second sentence, trace them to Locke and the Scottish Enlightenment, identify the gap between the universal language and the limited practice, and engage Lincoln's resolution of the paradox.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's central sentence honestly. The parent should understand three things. First, the four claims: equality, unalienable rights, consent of the governed, right of revolution. The sources: Locke's Second Treatise (life, liberty, property), the Scottish Enlightenment (self-evident truths, moral sense), and the natural law tradition (laws of nature and Nature's God). Jefferson changed 'property' to 'pursuit of happiness' — broadening from economic ownership to human flourishing. The change from 'sacred and undeniable' to 'self-evident' (likely Franklin) shifted the foundation from religion to reason. Second, the gap: 'all men' did not include women, slaves, Native Americans, or the propertyless. Jefferson owned over 200 enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' The words are universal; the author was not. Third, Lincoln's resolution: the founders did not mean everyone was already equal. They set up a 'standard maxim' — a principle the nation is always working toward. The promise is permanent. The fulfillment is ongoing. The gap between them is the American story. Every movement for equality — abolition, suffrage, civil rights, marriage equality — has used the Declaration's words against the limitations of its author. The parent should understand that the Declaration's power comes from the gap. The words are more radical than their author. That is both the scandal and the glory of the document.",
        hardEdges: [
          "Do not teach 'all men' as meaning all people. It did not. The gap between the universal words and the limited practice is the central fact of the Declaration.",
          "Do not skip the sources. The ideas came from Locke and the Scottish Enlightenment. Jefferson's contribution was the language, not the philosophy.",
          "Do not present the Declaration as purely secular or purely Christian. It uses theistic language (Nature's God, Creator, Supreme Judge, divine Providence) but natural theology, not specific Christian doctrine.",
          "Do not skip Lincoln's resolution. The 'standard maxim' idea — equality as a principle always worked toward, never perfectly attained — is the most powerful reading of the Declaration's paradox.",
        ],
        reading: [
          {
            heading: "The claims, the sources, and the gap",
            body: "The Declaration's second sentence makes four claims. (1) 'All men are created equal' — equality is the natural condition. This contradicts divine right monarchy and feudal hierarchy. (2) 'Endowed by their Creator with certain unalienable Rights' — life, liberty, and the pursuit of happiness. Rights are inherent, not granted by government. Government cannot take them because it did not give them. (3) 'Governments are instituted among Men, deriving their just powers from the consent of the governed' — government is a human creation, authorized by the people. (4) 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it' — the right of revolution. The sources: Locke's Second Treatise (1689) — life, liberty, property; government exists to protect rights; people can resist a government that violates them. Jefferson changed 'property' to 'pursuit of happiness' — broadening from economic ownership to human flourishing. The Scottish Enlightenment (Hutcheson, Reid) contributed 'self-evident' — truths so basic they need no proof. The change from 'sacred and undeniable' to 'self-evident' (likely Franklin) shifted the foundation from religious revelation to Enlightenment reason. The gap: 'all men' did not include women (could not vote), slaves (Jefferson owned 200+), Native Americans ('merciless Indian Savages'), or the propertyless. In practice, 'all men' meant white male property owners. But the words are universal. They do not say 'all white male property owners.' The power of the Declaration is in the gap. Lincoln's resolution (1858): the founders did not mean everyone was already equal. They meant equality is the 'standard maxim for free society' — a principle 'constantly looked to, constantly labored for, and even though never perfectly attained, constantly approximated.' The promise is permanent. The fulfillment is ongoing. The gap between them is the American story.",
          },
        ],
        bigIdea:
          "The Declaration's four claims came from Locke and the Scottish Enlightenment. The gap between the universal words and the limited practice is the American story. Lincoln resolved the paradox: equality is a 'standard maxim' — always worked toward, never perfectly attained. The promise is permanent. The fulfillment is ongoing.",
        tryThis: [
          {
            title: "Read the sentence, trace the sources, engage the gap",
            minutes: 40,
            steps: [
              "Read the Declaration's second sentence. Write the four claims. Find the sources: Locke (life, liberty, property), Scottish Enlightenment (self-evident), natural law (Nature's God).",
              "Find the changes: 'property' → 'pursuit of happiness' (Jefferson). 'Sacred and undeniable' → 'self-evident' (Franklin). What did each change broaden or shift?",
              "Name the gap: who did 'all men' exclude? (Women, slaves, Native Americans, the propertyless.) What did the words say? What did the author mean? What did the words become?",
              "Read Lincoln's resolution (1858): the founders set up a 'standard maxim' — a principle always worked toward, never perfectly attained. Is this reading faithful to the Declaration, or is it a reinterpretation? What is at stake in the answer?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration's power comes from the gap — universal words written by a man who did not mean them universally — what does that tell you about how principles work? Do they come from the author, or do they come from the words? And if from the words, who decides what the words mean?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Did the Declaration establish equality?' Then ask: 'For whom?' The model will say 'all people' or 'all men.' Ask: 'Did Jefferson mean that?' The gap between the words and the practice is the lesson." },
          { label: "History", note: "Magna Carta said 'free men.' The Declaration says 'all men.' Both documents used universal language that excluded most of the population. The charter omitted villeins. The Declaration omitted women, slaves, and Native Americans. The pattern is the same: the principle is bigger than the author, and the expansion is the work of later generations." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration established that all people are equal.",
            reply: "The words say 'all men are created equal.' The practice was different. Jefferson owned over 200 enslaved people. Women could not vote. Native Americans were called 'merciless Indian Savages.' In practice, 'all men' meant white male property owners. But the words are universal — they do not say 'all white male property owners.' The power of the Declaration is in the gap. Lincoln resolved the paradox: the founders set up a 'standard maxim' — a principle the nation is always working toward, even if never perfectly attained. The promise is permanent. The fulfillment is ongoing. The gap between them is the American story. Every movement for equality — abolition, suffrage, civil rights, marriage equality — has used the Declaration's words against the limitations of its author. The words are more radical than the man. That is both the scandal and the glory.",
          },
          {
            heard: "The Declaration is a Christian document.",
            reply: "It is not specifically Christian. It uses theistic language — 'the Laws of Nature and of Nature's God,' 'endowed by their Creator,' 'the Supreme Judge of the world,' 'divine Providence.' But it does not mention Jesus Christ, the Bible, or any Christian doctrine. It uses the language of natural theology — God as creator of the natural order, accessible through reason. This is compatible with deism, which many founders held. The Declaration grounds its principles in a source beyond government — nature and Nature's God — not in a specific religious tradition. Calling it a Christian document is a misreading. Calling it purely secular is also a misreading. It is a natural law document that uses theistic language to ground universal principles in a source beyond human invention.",
          },
        ],
        integrity:
          "Do not let the model say 'all men' meant everyone, or that the Declaration is purely secular or purely Christian. Read the sentence. Read the history. Read Lincoln's resolution. The gap, the sources, and the 'standard maxim' are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's principles in three sentences.' Then ask: 'What did you skip?' The model will skip the gap, the sources, and Lincoln's resolution. Each skip is a piece of the story. The compression is the lesson.",
          evaluate: [
            "Can they explain the four claims and trace them to Locke and the Scottish Enlightenment?",
            "Do they understand the gap between the universal words and the limited practice?",
            "Can they engage Lincoln's 'standard maxim' resolution of the paradox?",
            "Can they distinguish the Declaration's natural theology from both secularism and specific Christianity?",
          ],
        },
      },
    },
  }),

  // ── 3. The Right of Revolution ─────────────────────────────────────
  ...expand({
    slug: "right-of-revolution",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "When Is It Okay to Overthrow the Government?",
        dek: "The Declaration says you can change your government when it stops protecting your rights. That is the right of revolution. It is also the most dangerous idea in the document.",
        objective:
          "The student can explain the Declaration's argument for the right of revolution and why it matters.",
        parentBriefing:
          "This sitting is about the Declaration's most radical claim: when a government violates the rights it was created to protect, the people can overthrow it. This is the right of revolution. It comes from Locke's social contract theory: government is a contract between the people and their rulers. If the government breaks the contract, the people can dissolve it. The Declaration lists 27 grievances against King George III as the evidence that the contract was broken. But the right of revolution is dangerous. Who decides when a government has gone too far? If anyone can overthrow the government, how do you have stability? The founders knew this. They did not invoke the right of revolution lightly. They listed their evidence — 27 specific complaints — and they appealed to the world for judgment. The student should understand that the right of revolution is the Declaration's most radical and most dangerous claim. It is also the claim that created the United States.",
        hardEdges: [
          "Do not present the right of revolution as simple or safe. It is the most dangerous idea in the Declaration. If anyone can overthrow the government, stability is at risk.",
          "Do not skip the grievances. The Declaration does not just assert the right of revolution. It lists 27 specific complaints as the evidence. The right is not abstract — it is tied to specific violations.",
        ],
        reading: [
          {
            heading: "The claim",
            body: "The Declaration says: 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government.' This is the right of revolution. If a government stops protecting your rights, you can replace it. The idea came from John Locke: government is a contract. If the government breaks the contract, the people can end it.",
          },
          {
            heading: "The evidence",
            body: "The Declaration does not just say 'we have the right to revolt.' It lists 27 specific grievances against King George III. He blocked laws. He dissolved legislatures. He kept a standing army in peacetime. He cut off trade. He taxed without consent. He incited domestic insurrections. The grievances are the evidence that the social contract was broken. The right of revolution is not abstract. It is tied to specific violations.",
          },
        ],
        bigIdea:
          "The Declaration says the people can overthrow a government that stops protecting their rights. This is the right of revolution. The 27 grievances are the evidence. It is the most radical and dangerous idea in the document.",
        tryThis: [
          {
            title: "Read the grievances",
            minutes: 18,
            steps: [
              "Read the claim: 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.'",
              "Find three grievances: 'He has dissolved Representative Houses,' 'He has kept among us Standing Armies,' 'For imposing Taxes on us without our Consent.'",
              "Talk About It: who decides when a government has gone too far? If anyone can overthrow the government, how do you have stability? Why did the founders list their evidence instead of just declaring independence?",
            ],
          },
        ],
        dinnerQuestion:
          "If the right of revolution is the most dangerous idea in the Declaration, why did the founders include it? And what happens when every group that loses an election claims the government has gone too far?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'we have the right to revolt.' The check is the 27 grievances. The evidence matters." },
        ],
        ifTheySay: [
          {
            heard: "People can just overthrow the government whenever they want.",
            reply: "The Declaration does not say that. It says revolution is justified when a government becomes 'destructive of these ends' — when it stops protecting rights. The founders knew this was dangerous. That is why they listed 27 specific grievances as evidence. They did not just assert the right. They made a case. They appealed to the world for judgment. The right of revolution is not a license. It is a last resort, justified by evidence. The danger is real: if anyone can claim the government has gone too far, stability is impossible. The founders' answer was: make the case. List the evidence. Let the world judge.",
          },
        ],
        integrity: "Do not let the model present the right of revolution as simple or safe. Read the grievances. The right is tied to evidence. The evidence is the case.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'What does the Declaration say about revolution?' Then ask: 'What evidence does it give?' The 27 grievances are the evidence. The right is not abstract. It is tied to specific violations.",
          evaluate: [
            "Can they explain the right of revolution?",
            "Do they know the grievances are the evidence?",
            "Do they understand the danger of the claim?",
          ],
        },
      },
      emerging: {
        title: "The Right of Revolution: Locke, the Grievances, and the Danger",
        dek: "The Declaration's most radical claim is the right of revolution — the people can overthrow a government that violates their rights. The 27 grievances are the evidence. The claim is dangerous, and the founders knew it.",
        objective:
          "The student can explain the Declaration's right of revolution, trace it to Locke's social contract theory, identify the 27 grievances as evidence, and engage the danger of the claim.",
        parentBriefing:
          "This sitting takes the right of revolution seriously as both a philosophical claim and a political danger. The student needs to understand three things. First, the claim: the Declaration says that when a government becomes destructive of the rights it was created to protect, the people can alter or abolish it. This is Locke's social contract theory: government is a contract; if the government breaks it, the people can dissolve it. The Declaration follows Locke's structure: natural rights, the purpose of government, consent, the breach, the right of revolution, the evidence (the grievances), the conclusion (independence). Second, the evidence: the Declaration lists 27 specific grievances against King George III — legislative, judicial, military, economic. The grievances are the case that the social contract was broken. The right of revolution is not abstract; it is tied to specific violations. Third, the danger: if anyone can claim the right to overthrow the government, stability is at risk. The founders knew this. They listed their evidence and appealed to the world ('a decent respect to the opinions of mankind') for judgment. They made a case, not just a claim. The student should understand that the right of revolution is the Declaration's most radical and most dangerous idea. It created the United States. It also created a question the nation still struggles with: when is revolution justified, and who decides?",
        hardEdges: [
          "Do not present the right of revolution as simple or safe. It is the most dangerous idea in the Declaration. The founders knew it and listed their evidence.",
          "Do not skip the grievances. They are the case. The right of revolution is tied to specific violations, not abstract principle.",
          "Do not skip the appeal to the world. The Declaration is addressed to 'mankind,' not to the king. The founders made their case publicly, inviting judgment.",
        ],
        reading: [
          {
            heading: "Locke's structure and the Declaration's case",
            body: "The Declaration follows Locke's social contract theory almost exactly. (1) Natural rights: 'All men are created equal... endowed by their Creator with certain unalienable Rights.' (2) Purpose of government: 'To secure these rights, Governments are instituted among Men.' (3) Consent: 'deriving their just powers from the consent of the governed.' (4) The breach: 'Whenever any Form of Government becomes destructive of these ends.' (5) The right of revolution: 'it is the Right of the People to alter or to abolish it.' (6) The evidence: the 27 grievances against George III. (7) The conclusion: the declaration of independence. The grievances fall into categories: legislative (blocking laws, dissolving assemblies), judicial (controlling judges), military (standing army, military above civilian power), economic (cutting trade, taxing without consent), and the culminating grievance (inciting insurrection). The most important grievance for the Magna Carta chain: 'For imposing Taxes on us without our Consent' — the direct descendant of clause 12. The Declaration is not a philosophical treatise. It is a political document that uses social contract theory to justify a specific act. The theory is the argument; the independence is the conclusion.",
          },
          {
            heading: "The danger and the appeal",
            body: "The right of revolution is dangerous. If anyone can claim the government has gone too far, stability is impossible. The founders knew this. That is why they listed 27 grievances — specific, public, verifiable. They did not just assert the right. They made a case. And they appealed to the world: 'a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.' The Declaration is addressed to the world, not to the king. It is a public argument, not a private petition. The founders invited judgment. They said: here is our evidence, here is our case, decide if it is enough. The right of revolution is not a license. It is a last resort, justified by evidence and submitted to the judgment of the world. The danger remains: every group that loses a political fight can claim the government has gone too far. The founders' answer was: make the case. List the evidence. Let the world judge. The question of when revolution is justified is not settled by the Declaration. It is opened by it.",
          },
        ],
        bigIdea:
          "The Declaration's right of revolution comes from Locke's social contract theory. The 27 grievances are the evidence. The claim is dangerous, and the founders knew it — they listed their evidence and appealed to the world for judgment. The question of when revolution is justified is opened, not settled, by the Declaration.",
        tryThis: [
          {
            title: "Read the claim, the evidence, and the appeal",
            minutes: 30,
            steps: [
              "Read the right of revolution: 'Whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it.' Trace it to Locke: government is a contract; if the government breaks it, the people can dissolve it.",
              "Read the grievances. Find the Magna Carta connection: 'For imposing Taxes on us without our Consent' — the direct descendant of clause 12. Find three more grievances. The grievances are the case.",
              "Read the appeal: 'a decent respect to the opinions of mankind requires that they should declare the causes.' The Declaration is addressed to the world. The founders invited judgment.",
              "Reflect: the right of revolution is dangerous. If anyone can claim the government has gone too far, stability is at risk. The founders' answer: make the case, list the evidence, let the world judge. Is that enough? Who decides when the evidence is sufficient?",
            ],
          },
        ],
        dinnerQuestion:
          "If the right of revolution is justified by evidence, who decides when the evidence is sufficient? The founders appealed to the world. But what happens when the world disagrees — or when there is no world to appeal to?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration's grievances are the evidence. Locke's Second Treatise is the theory. Read both." },
          { label: "AI", note: "Ask the model: 'What justifies revolution according to the Declaration?' Then ask: 'What evidence does it give?' The 27 grievances are the evidence. The model will summarize. The specific grievances are the case." },
          { label: "History", note: "Magna Carta's security clause (clause 61) authorized 25 barons to seize the king's property. The Declaration's right of revolution authorizes 'the People' to alter or abolish the government. Both are enforcement mechanisms. The charter's was dropped. The Declaration's created a nation." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration says people can overthrow the government whenever they want.",
            reply: "It does not. It says revolution is justified when a government becomes 'destructive of these ends' — when it stops protecting rights. And it does not just assert the right. It lists 27 specific grievances as evidence. The founders made a case, not just a claim. They appealed to 'the opinions of mankind' for judgment. The right of revolution is not a license. It is a last resort, justified by evidence and submitted to the world. The danger is real: every group that loses an election could claim the government has gone too far. The founders' answer was: make the case. List the evidence. Let the world judge. Whether that answer is sufficient is a question the Declaration opens, not one it settles.",
          },
        ],
        integrity:
          "Do not let the model present the right of revolution as simple, abstract, or safe. Read the grievances. Read the appeal to the world. The right is tied to evidence and submitted to judgment. The danger is real. The founders knew it.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's argument for revolution in one paragraph.' Then ask: 'What did you skip?' The model will skip the grievances and the appeal to the world. The evidence and the judgment are the story.",
          evaluate: [
            "Can they explain the right of revolution and trace it to Locke?",
            "Can they identify the 27 grievances as evidence?",
            "Do they understand the danger of the claim?",
            "Can they explain the appeal to the world and its purpose?",
          ],
        },
      },
      adult: {
        title: "The Right of Revolution: The Most Dangerous Idea",
        dek: "The Declaration's right of revolution — the people can overthrow a government that violates their rights — created the United States. It also created a question the nation still struggles with: when is revolution justified, and who decides?",
        objective:
          "The parent can explain the Declaration's right of revolution, trace it to Locke's social contract theory, identify the grievances as evidence, engage the danger of the claim, and connect it to Magna Carta's security clause as an enforcement mechanism.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's most radical claim honestly. The parent should understand three things. First, the claim and its source: the right of revolution comes from Locke's social contract theory. Government is a contract; if the government breaks it, the people can dissolve it. The Declaration follows Locke's structure: natural rights, purpose of government, consent, breach, revolution, evidence (grievances), conclusion (independence). Second, the evidence and the appeal: the Declaration lists 27 specific grievances as the case that the contract was broken. It is addressed to 'mankind,' not to the king — a public argument inviting world judgment. The founders made a case, not just a claim. Third, the danger and the parallel: the right of revolution is dangerous — if anyone can claim the government has gone too far, stability is impossible. The founders knew this and listed their evidence. The parallel to Magna Carta is direct: both documents face the same question — how do you enforce limits on the government? The charter's answer was the security clause (25 barons with swords). The Declaration's answer is the right of revolution (the people can alter or abolish). Both are enforcement mechanisms. Both are dangerous. Both are necessary. The question of when revolution is justified is opened, not settled, by the Declaration.",
        hardEdges: [
          "Do not present the right of revolution as simple or safe. It is the most dangerous idea in the Declaration. The founders listed their evidence and appealed to the world because they knew the danger.",
          "Do not skip the grievances. They are the case. The right of revolution is tied to specific violations, not abstract principle.",
          "Do not skip the Magna Carta parallel. Both the charter and the Declaration face the same enforcement problem. The charter's security clause and the Declaration's right of revolution are two answers to the same question.",
        ],
        reading: [
          {
            heading: "The claim, the evidence, the danger, and the parallel",
            body: "The Declaration's right of revolution follows Locke's social contract theory. Government is a contract between the people and their rulers. If the government breaks the contract — becomes destructive of the rights it was created to protect — the people can dissolve it. The Declaration follows Locke's structure: (1) natural rights (all men created equal, unalienable rights), (2) purpose of government (to secure rights), (3) consent (just powers from the consent of the governed), (4) breach (whenever government becomes destructive of these ends), (5) right of revolution (the Right of the People to alter or abolish), (6) evidence (27 grievances), (7) conclusion (declaration of independence). The grievances are the case: legislative (blocking laws, dissolving assemblies), judicial (controlling judges), military (standing army, military above civilian power), economic (cutting trade, taxing without consent). The Magna Carta connection: 'For imposing Taxes on us without our Consent' is the direct descendant of clause 12. The appeal: 'a decent respect to the opinions of mankind requires that they should declare the causes.' The Declaration is addressed to the world, not to the king. It is a public argument inviting judgment. The danger: if anyone can claim the government has gone too far, stability is impossible. The founders knew this. They listed evidence, made a case, and appealed to the world. The parallel to Magna Carta: both documents face the same enforcement problem. The charter's security clause (clause 61) authorized 25 barons to seize the king's property. The Declaration's right of revolution authorizes the people to alter or abolish the government. Both are enforcement mechanisms. Both are dangerous. The charter's led to civil war. The Declaration's led to a revolution. The question of when enforcement is justified — when revolution is the right answer — is opened by both documents and settled by neither.",
          },
        ],
        bigIdea:
          "The right of revolution is the Declaration's most radical and dangerous claim. It comes from Locke, is justified by 27 grievances, and is submitted to the world for judgment. It is the enforcement mechanism of the social contract — the parallel to Magna Carta's security clause. The question of when revolution is justified is opened, not settled, by the Declaration.",
        tryThis: [
          {
            title: "Read the claim, the evidence, the appeal, and the parallel",
            minutes: 40,
            steps: [
              "Read the Declaration's right of revolution. Trace it to Locke's social contract: government is a contract; breach justifies dissolution.",
              "Read the 27 grievances. Find the Magna Carta connection: 'For imposing Taxes on us without our Consent' — the direct descendant of clause 12. Find three more grievances that show the contract was broken.",
              "Read the appeal to the world. The Declaration is addressed to 'mankind,' not to the king. Why? The founders invited judgment. They made a case, not just a claim.",
              "Compare to Magna Carta's security clause (clause 61): 25 barons authorized to seize royal property. The Declaration's right of revolution: the people can alter or abolish. Both are enforcement mechanisms. Both are dangerous. The charter's led to civil war. The Declaration's led to a revolution. When is enforcement justified? Who decides?",
            ],
          },
        ],
        dinnerQuestion:
          "If the right of revolution is the enforcement mechanism of the social contract — the parallel to Magna Carta's security clause — when is it justified? And if the founders appealed to the world for judgment, what happens when there is no world to appeal to, or when the world disagrees?",
        transfer: [
          { label: "AI", note: "Ask the model: 'When is revolution justified according to the Declaration?' Then ask: 'What evidence does it give, and who judges it?' The grievances are the evidence. The world is the judge. The model will summarize. The specific case and the appeal are the story." },
          { label: "History", note: "Magna Carta's security clause (armed barons) and the Declaration's right of revolution (the people can alter or abolish) are two enforcement mechanisms for the same principle: government has limits. The charter's was dropped. The Declaration's created a nation. Both are dangerous. Both are necessary. The question of when enforcement is justified is permanent." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration says people can overthrow the government whenever they disagree with it.",
            reply: "It does not. It says revolution is justified when a government becomes 'destructive of these ends' — when it stops protecting rights. And it lists 27 specific grievances as evidence. The founders made a case, appealed to the world for judgment, and submitted their evidence publicly. The right of revolution is not a license to overthrow the government whenever you lose an election. It is a last resort, justified by evidence. The danger is real: every political loser could claim the government has gone too far. The founders' answer was: make the case. List the evidence. Let the world judge. Whether that answer is sufficient — whether there is always a 'world' to appeal to, and whether the world's judgment is reliable — is a question the Declaration opens and does not settle.",
          },
          {
            heard: "The right of revolution is just an excuse for violence.",
            reply: "It can be. That is the danger. The right of revolution is the most dangerous idea in the Declaration because it can be invoked by anyone who wants to overthrow the government, whether or not the government has actually violated rights. The founders knew this. They listed 27 grievances, made a public case, and appealed to the world. They did not invoke the right lightly. The parallel to Magna Carta is direct: the charter's security clause authorized armed resistance. It was dropped because no king would accept it. The Declaration's right of revolution is the same principle — enforcement through the people, not through courts. Both are dangerous. Both are necessary. The question is not whether the right exists. It is when it is justified, who decides, and what evidence is sufficient. The Declaration does not settle the question. It opens it.",
          },
        ],
        integrity:
          "Do not let the model present the right of revolution as simple, abstract, or safe. Read the grievances. Read the appeal. Read the Magna Carta parallel. The right is tied to evidence, submitted to judgment, and dangerous. The question of when it is justified is the permanent question the Declaration opens.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's argument for revolution in one paragraph.' Then ask: 'What did you skip?' The model will skip the grievances, the appeal to the world, and the Magna Carta parallel. Each skip is a piece of the story. The compression hides the case.",
          evaluate: [
            "Can they explain the right of revolution and trace it to Locke?",
            "Can they identify the grievances as evidence and the appeal to the world as judgment?",
            "Do they understand the danger of the claim?",
            "Can they connect the right of revolution to Magna Carta's security clause as enforcement mechanisms?",
          ],
        },
      },
    },
  }),

  // ── 4. All Men: The Promise and the Omission ───────────────────────
  ...expand({
    slug: "all-men-promise-omission",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Did 'All Men' Include?",
        dek: "The Declaration says 'all men are created equal.' But the man who wrote it owned slaves. Women could not vote. Native Americans were called savages. The gap is the story.",
        objective:
          "The student can explain the gap between the Declaration's words ('all men') and the reality of who was included.",
        parentBriefing:
          "This sitting tackles the hardest truth about the Declaration: the gap between 'all men are created equal' and who Jefferson actually meant. Jefferson owned over 200 enslaved people. Women could not vote in any state. Native Americans were described as 'merciless Indian Savages' in the Declaration itself. Property qualifications for voting were universal. In practice, 'all men' meant white male property owners. But the words themselves — 'all men are created equal' — are universal. They do not say 'all white male property owners.' Every movement for equality in American history — abolition, women's suffrage, civil rights — has used the Declaration's words against the limitations of its author. The student should understand that the gap between the promise and the practice is not a footnote. It is the central fact of the Declaration. The promise is permanent. The fulfillment is ongoing.",
        hardEdges: [
          "Do not soften the gap. Jefferson wrote 'all men' while owning 200+ enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' Women could not vote.",
          "Do not present the expansion as automatic. It took centuries of struggle — the Civil War, the amendments, the civil rights movement — to make the words include the people the author excluded.",
        ],
        reading: [
          {
            heading: "The words vs. the reality",
            body: "The Declaration says 'all men are created equal.' Jefferson owned over 200 enslaved people. Women could not vote in any state. Native Americans were called 'merciless Indian Savages' in the Declaration's grievances. Property qualifications for voting were universal. In practice, 'all men' meant white male property owners. But the words do not say 'all white male property owners.' They say 'all men.' The gap between the words and the reality is the story of America.",
          },
          {
            heading: "How the words became bigger than the author",
            body: "The abolitionist movement used the Declaration's words against slavery. Frederick Douglass asked: 'What to the Slave is the Fourth of July?' Lincoln said the founders set up a 'standard maxim' — a principle always worked toward. The women's rights movement used the Declaration's language at Seneca Falls (1848): 'All men and women are created equal.' The civil rights movement used it: Martin Luther King Jr. called the Declaration a 'promissory note' that had not yet been paid. Each movement took the words and made them include the people the author left out.",
          },
        ],
        bigIdea:
          "The Declaration says 'all men are created equal.' The author owned slaves. The gap between the words and the reality is the story of America. Every movement for equality used the Declaration's words against its author's limitations.",
        tryThis: [
          {
            title: "Name the gap",
            minutes: 18,
            steps: [
              "Read: 'all men are created equal.' Write: who did this include in 1776? (White male property owners.) Who did it exclude? (Women, slaves, Native Americans, the propertyless.)",
              "Find three movements that used the Declaration's words to expand who counts: abolition (Douglass, Lincoln), women's rights (Seneca Falls), civil rights (King).",
              "Talk About It: if the words are bigger than the author, whose work was it to make the words include everyone? The author's, or the people he left out?",
            ],
          },
        ],
        dinnerQuestion:
          "If 'all men' did not include women, slaves, or Native Americans, but every movement for equality used those words to demand inclusion, what is the Declaration's real legacy — the promise or the gap?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration's words are the source. The history of exclusion is the context. Read both." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration included everyone from the start.",
            reply: "It did not. Jefferson owned over 200 enslaved people. Women could not vote. Native Americans were called 'merciless Indian Savages' in the same document. In practice, 'all men' meant white male property owners. But the words — 'all men are created equal' — are universal. They do not say 'all white male property owners.' The power of the Declaration is in the gap. The words are bigger than the author. Every movement for equality — abolition, women's suffrage, civil rights — used the Declaration's words against its author's limitations. The promise was there from the start. The fulfillment took centuries of struggle by the people the author left out.",
          },
        ],
        integrity: "Do not let the model say 'all men' included everyone. It did not. Read the words. Read the history. The gap is the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'Did the Declaration include everyone?' If it says yes, that is wrong. Ask: 'Who was excluded?' Women, slaves, Native Americans, the propertyless. Then ask: 'How did the words become universal?' Through struggle. The expansion is the story.",
          evaluate: [
            "Can they name who was excluded from 'all men'?",
            "Can they identify movements that used the Declaration's words to expand inclusion?",
            "Do they understand the gap between the promise and the practice?",
          ],
        },
      },
      emerging: {
        title: "All Men: The Promise and the Omission",
        dek: "The Declaration says 'all men are created equal.' Jefferson owned slaves. Women could not vote. Native Americans were called savages. The gap between the promise and the practice is the central fact of the Declaration — and the engine of American history.",
        objective:
          "The student can explain the gap between the Declaration's universal language and its limited practice, identify who was excluded, trace the movements that expanded the meaning, and engage Lincoln's 'standard maxim' resolution.",
        parentBriefing:
          "This sitting takes the Declaration's central paradox seriously. The student needs to understand three things. First, the gap: 'all men' did not include women (could not vote), slaves (Jefferson owned 200+), Native Americans ('merciless Indian Savages'), or the propertyless. In practice, 'all men' meant white male property owners. But the words themselves are universal. Second, the expansion: every movement for equality used the Declaration's words against its author's limitations. Frederick Douglass's 'What to the Slave is the Fourth of July?' (1852) challenged the nation to live up to the promise. Lincoln's 'standard maxim' (1858): the founders did not mean everyone was already equal, but set up a principle the nation is always working toward. Seneca Falls (1848): 'All men and women are created equal.' King's 'promissory note' (1963): the Declaration promised equality that had not been paid. Third, the resolution: the gap is not a flaw to be apologized for or a myth to be preserved. It is the engine. The words are more radical than the author. Every expansion of American liberty has been an act of making the words mean what they say — and the people who did the work were the people the author left out.",
        hardEdges: [
          "Do not soften the gap. Jefferson wrote 'all men' while owning 200+ enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' The gap is not a footnote.",
          "Do not present the expansion as automatic or inevitable. It took the Civil War, the 13th and 14th Amendments, the women's suffrage movement, and the civil rights movement. Each was a struggle.",
          "Do not dismiss the Declaration because of the gap. The words are universal. The promise is real. Both the promise and the gap are the story. Neither alone is sufficient.",
        ],
        reading: [
          {
            heading: "The gap and the evidence",
            body: "The Declaration says 'all men are created equal.' The evidence that this was not universal in practice: Jefferson owned over 200 enslaved people. No state allowed women to vote in 1776. The Declaration describes Native Americans as 'merciless Indian Savages.' Property qualifications for voting were universal. The three-fifths clause in the Constitution (11 years later) treated enslaved people as three-fifths of a person for representation. In practice, 'all men' meant white male property owners. But the words themselves — 'all men are created equal' — do not say 'all white male property owners.' They say 'all men.' The gap between the universal words and the limited practice is the central fact of the Declaration.",
          },
          {
            heading: "The expansion through struggle",
            body: "Every movement for equality in American history used the Declaration's words against its author's limitations. Frederick Douglass (1852): 'What to the Slave is the Fourth of July?' He challenged the nation to live up to the promise it had not kept. Lincoln (1858): the founders did not mean everyone was already equal. They set up a 'standard maxim for free society' — a principle 'constantly looked to, constantly labored for, and even though never perfectly attained, constantly approximated.' Seneca Falls (1848): 'We hold these truths to be self-evident: that all men and women are created equal.' Martin Luther King Jr. (1963): the Declaration was a 'promissory note' that had not been paid. Each movement took the words and made them include the people the author left out. The 13th Amendment abolished slavery (1865). The 14th granted equal protection (1868). The 15th prohibited racial discrimination in voting (1870). The 19th enfranchised women (1920). The Civil Rights Act (1964) and the Voting Rights Act (1965) made the promise real in practice. The expansion was not automatic. It was the work of the people the Declaration omitted.",
          },
        ],
        bigIdea:
          "The Declaration says 'all men' but meant white male property owners. The gap between the universal words and the limited practice is the engine of American history. Every movement for equality used the Declaration's words against its author's limitations. The expansion was the work of the people the author left out.",
        tryThis: [
          {
            title: "Name the gap, trace the expansion, engage the resolution",
            minutes: 30,
            steps: [
              "Read: 'all men are created equal.' Write: who was included in 1776? Who was excluded? The gap is the evidence.",
              "Trace the expansion: Douglass (1852), Lincoln (1858), Seneca Falls (1848), King (1963). For each, write one sentence: how did they use the Declaration's words?",
              "Read Lincoln's 'standard maxim': the founders set up a principle always worked toward, never perfectly attained. Is this reading faithful to the Declaration, or is it a reinterpretation?",
              "Reflect: the people who expanded the meaning were the people the author left out — slaves, women, Native Americans, activists. The author planted the seed. The people he excluded grew the tree. What does that tell you about the Declaration's real legacy?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration's promise was universal but its practice was exclusive, and every expansion was the work of the people the author excluded, what is the document's moral authority? Is it the author's, or is it the people who made the words mean what they say?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration's words are the source. The history of exclusion and expansion is the context. Read both." },
          { label: "AI", note: "Ask the model: 'Did the Declaration include everyone?' If it says yes, that is wrong. Ask: 'Who was excluded, and who did the work of expansion?' The people the author left out. The expansion is the story." },
          { label: "History", note: "Magna Carta said 'free men' — excluding 80% of England. The Declaration said 'all men' — excluding women, slaves, Native Americans. Both documents used universal language that excluded most of the population. Both expanded through centuries of struggle by the people they omitted." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is hypocritical because Jefferson owned slaves.",
            reply: "It is hypocritical. And it is the foundation of American equality. Both are true. Jefferson wrote 'all men are created equal' while owning 200+ enslaved people. The gap is real. But the words — 'all men are created equal' — are universal. They do not say 'all white male property owners.' Every movement for equality — abolition, women's suffrage, civil rights — used the Declaration's words against Jefferson's limitations. Douglass challenged the nation to live up to the promise. Lincoln called equality a 'standard maxim' always worked toward. King called the Declaration a 'promissory note.' The words are more radical than the author. The expansion was the work of the people the author left out. Dismissing the Declaration because of the gap erases the promise. Celebrating it without naming the gap erases the struggle. The honest reading is: the promise and the gap are both the Declaration. Neither alone is the story.",
          },
          {
            heard: "Jefferson meant all people when he wrote 'all men.'",
            reply: "The evidence says otherwise. Jefferson owned over 200 enslaved people. Women could not vote. Native Americans were called 'merciless Indian Savages' in the same document. Property qualifications for voting were universal. In practice, 'all men' meant white male property owners. But the words are universal — they do not say 'all white male property owners.' Lincoln resolved the paradox: the founders did not mean everyone was already equal. They set up a 'standard maxim' — a principle always worked toward, never perfectly attained. The promise is permanent. The fulfillment is ongoing. The gap between them is the story. The words are bigger than the man. That is both the scandal and the glory.",
          },
        ],
        integrity:
          "Do not let the model say 'all men' meant everyone, or that the Declaration is simply hypocritical. The gap is real. The promise is also real. The expansion was the work of the people the author excluded. Read the words. Read the history. Both are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Did the Declaration include everyone?' If it says yes, that is wrong. Ask: 'Who was excluded?' Then ask: 'Who did the work of expansion?' The people the author left out. The expansion is the story the model will smooth.",
          evaluate: [
            "Can they explain the gap between 'all men' and the actual practice?",
            "Can they trace the expansion through at least three movements (Douglass, Lincoln, Seneca Falls, King)?",
            "Can they engage Lincoln's 'standard maxim' resolution?",
            "Do they understand that the expansion was the work of the excluded, not the author?",
          ],
        },
      },
      adult: {
        title: "All Men: The Promise, the Omission, and the Engine",
        dek: "The Declaration's gap — universal words written by a man who owned slaves — is not a flaw to be apologized for or a myth to be preserved. It is the engine of American history. Every expansion of liberty was the work of the people the author left out.",
        objective:
          "The parent can explain the gap between the Declaration's universal language and its limited practice, trace the movements that expanded the meaning, engage Lincoln's 'standard maxim' resolution, and understand the gap as the engine of American history.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's central paradox honestly. The parent should understand three things. First, the gap: 'all men' did not include women, slaves, Native Americans, or the propertyless. Jefferson owned over 200 enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' The words are universal; the practice was not. Second, the expansion: every movement for equality used the Declaration's words against its author's limitations. Douglass (1852), Lincoln (1858), Seneca Falls (1848), King (1963). The 13th, 14th, 15th, and 19th Amendments. The Civil Rights Act and the Voting Rights Act. Each was an act of making the words mean what they say. Third, the resolution: the gap is not a flaw or a myth. It is the engine. The words are more radical than the author. The expansion was the work of the people the author excluded. The parent should understand that the Declaration's moral authority comes from the gap — from the fact that the words are bigger than the man, and that the people the man excluded are the ones who made the words include them. Dismissing the Declaration because of the gap erases the promise. Celebrating it without naming the gap erases the struggle. The honest reading is: the promise and the gap are both the Declaration, and the engine of American history is the work of making the one match the other.",
        hardEdges: [
          "Do not soften the gap. Jefferson owned 200+ enslaved people. The Declaration calls Native Americans 'merciless Indian Savages.' Women could not vote. The gap is the central fact.",
          "Do not present the expansion as automatic. It took the Civil War, the amendments, the women's movement, and the civil rights movement. Each was a struggle by the people the author excluded.",
          "Do not dismiss the Declaration because of the gap, and do not celebrate it without naming the gap. Both the promise and the omission are the Declaration. Neither alone is the story.",
        ],
        reading: [
          {
            heading: "The gap, the expansion, and the engine",
            body: "The Declaration says 'all men are created equal.' Jefferson owned over 200 enslaved people. Women could not vote in any state. Native Americans were described as 'merciless Indian Savages' in the Declaration's grievances. Property qualifications for voting were universal. In practice, 'all men' meant white male property owners. But the words are universal — they do not say 'all white male property owners.' The gap between the universal words and the limited practice is the central fact of the Declaration. The expansion: Frederick Douglass (1852) asked 'What to the Slave is the Fourth of July?' and challenged the nation to live up to the promise it had not kept. Lincoln (1858) argued that the founders set up a 'standard maxim for free society' — a principle 'constantly looked to, constantly labored for, and even though never perfectly attained, constantly approximated.' Seneca Falls (1848): 'All men and women are created equal.' Martin Luther King Jr. (1963) called the Declaration a 'promissory note' that had not been paid. The 13th Amendment (1865) abolished slavery. The 14th (1868) granted equal protection. The 15th (1870) prohibited racial discrimination in voting. The 19th (1920) enfranchised women. The Civil Rights Act (1964) and the Voting Rights Act (1965) made the promise real in practice. Each expansion was an act of making the words mean what they say. And each was the work of the people the author excluded — slaves, women, activists — not the work of the author. The gap is not a flaw to be apologized for or a myth to be preserved. It is the engine. The words are more radical than the man. The people who expanded the meaning are the people the man left out. That is the Declaration's real legacy.",
          },
        ],
        bigIdea:
          "The Declaration's gap — universal words, exclusive practice — is not a flaw or a myth. It is the engine of American history. The words are more radical than the author. Every expansion of liberty was the work of the people the author excluded. The promise is permanent. The fulfillment is ongoing.",
        tryThis: [
          {
            title: "Read the gap, trace the expansion, engage the engine",
            minutes: 40,
            steps: [
              "Read: 'all men are created equal.' Name the gap: who was included? Who was excluded? The gap is the central fact.",
              "Trace the expansion: Douglass (1852), Lincoln (1858), Seneca Falls (1848), King (1963), the 13th/14th/15th/19th Amendments, the Civil Rights Act, the Voting Rights Act. For each, write: who used the Declaration's words, and what did they expand?",
              "Read Lincoln's 'standard maxim': equality as a principle always worked toward, never perfectly attained. Is this faithful to the Declaration, or a reinterpretation? What is at stake?",
              "Reflect: the people who expanded the meaning were the people the author excluded. The author planted the seed. The people he left out grew the tree. The tree is bigger than the seed. What is the Declaration's real legacy — the author's words, or the people who made the words include them?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration's moral authority comes from the gap — universal words written by a man who did not mean them universally — and every expansion was the work of the people the author excluded, what is the document's real legacy? Is it the promise, the omission, or the struggle to close the gap?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is the Declaration hypocritical or foundational?' Then ask: 'What did your answer assume?' The honest answer is: both. The gap is the engine. The model will pick a side. The paradox is the story." },
          { label: "History", note: "Magna Carta said 'free men' — excluding 80% of England. The Declaration said 'all men' — excluding women, slaves, Native Americans. Both documents used universal language that excluded most of the population. Both expanded through centuries of struggle by the people they omitted. The pattern is the same. The expansion is always the work of the excluded." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is hypocritical because Jefferson owned slaves.",
            reply: "It is hypocritical. And it is the foundation of American equality. Both are true. Jefferson wrote 'all men are created equal' while owning 200+ enslaved people. The gap is real. But the words are universal — they do not say 'all white male property owners.' Every movement for equality — abolition, suffrage, civil rights, marriage equality — used the Declaration's words against Jefferson's limitations. The words are more radical than the man. The expansion was the work of the people the man excluded: Douglass, who challenged the nation; Lincoln, who called equality a 'standard maxim'; King, who called the Declaration a 'promissory note.' The people who made the words include them are the people the words originally left out. Dismissing the Declaration because of the gap erases the promise. Celebrating it without naming the gap erases the struggle. The honest reading is: the promise and the gap are both the Declaration. The engine of American history is the work of making the one match the other. That work is not finished.",
          },
          {
            heard: "We should not celebrate the Declaration because it excluded most people.",
            reply: "The exclusion is real and must be named. But dismissing the Declaration erases the tool that every movement for equality used. Douglass did not dismiss the Declaration — he used it. He quoted it and demanded that the nation live up to it. Lincoln did not dismiss it — he called equality a 'standard maxim' and grounded the Civil War in the Declaration's promise. King did not dismiss it — he called it a 'promissory note' and demanded payment. The people the Declaration excluded did not reject the document. They claimed it. They said: these are our words too, and we will make them mean what they say. Dismissing the Declaration because of its exclusion is a luxury the people who fought for inclusion did not have. They needed the words. The words were their weapon. The honest reading is: name the exclusion, and then use the words — the way the people who were excluded used them.",
          },
        ],
        integrity:
          "Do not let the model say 'all men' meant everyone, or that the Declaration is simply hypocritical, or that it should be dismissed. The gap is real. The promise is real. The expansion was the work of the excluded. Both the promise and the omission are the Declaration. The engine is the struggle to close the gap. Read the words. Read the history. Both are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Is the Declaration hypocritical or foundational?' Then ask: 'What did your answer skip?' The model will pick a side. The honest answer is: both. The gap is the engine. The expansion is the work of the excluded. The paradox is the story the model will collapse.",
          evaluate: [
            "Can they explain the gap between the universal words and the limited practice?",
            "Can they trace the expansion through at least three movements and identify who did the work?",
            "Can they engage Lincoln's 'standard maxim' resolution?",
            "Do they understand the gap as the engine of American history, not a flaw or a myth?",
          ],
        },
      },
    },
  }),

  // ── 5. The Slave Trade Passage: What Was Removed ───────────────────
  ...expand({
    slug: "slave-trade-passage-removed",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Passage They Cut Out",
        dek: "Jefferson wrote a passage attacking the slave trade. Congress removed it. South Carolina and Georgia would not accept it. The Declaration was compromised at birth.",
        objective:
          "The student can explain that Congress removed Jefferson's passage attacking the slave trade and why this matters.",
        parentBriefing:
          "This sitting tells the story of the passage that was removed. Jefferson's draft of the Declaration included a passage attacking the slave trade — blaming King George for 'cruel war against human nature itself, violating its most sacred rights of life and liberty.' Congress stripped it entirely. South Carolina and Georgia, the two colonies most dependent on the slave trade, refused to accept it. The other delegates chose unity over principle and removed it. The irony: Jefferson wrote a passage condemning the slave trade while owning over 200 enslaved people. He blamed the king, deflecting responsibility from the colonists who purchased and held slaves. And even this deflection was too much for South Carolina and Georgia. The student should understand that the Declaration's promise of equality was compromised at birth. The document that says 'all men are created equal' was edited to avoid challenging slavery.",
        hardEdges: [
          "Do not skip the irony: Jefferson condemned the slave trade while owning 200+ enslaved people. He blamed the king, not the colonists.",
          "Do not present the removal as a minor edit. It was a political compromise that shaped the nation's relationship to slavery for 80 years.",
        ],
        reading: [
          {
            heading: "What Jefferson wrote",
            body: "Jefferson's draft included a passage attacking the slave trade: 'He has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people who never offended him, captivating and carrying them into slavery in another hemisphere.' Jefferson blamed King George for the slave trade. He did not blame the colonists who bought and held slaves. And he wrote this while owning over 200 enslaved people himself.",
          },
          {
            heading: "Why Congress removed it",
            body: "South Carolina and Georgia, the two colonies most dependent on the slave trade, refused to accept the passage. The other delegates chose unity over principle. They removed it. The Declaration says 'all men are created equal' — but the document that says it was edited to avoid challenging slavery. The compromise was the same kind of compromise that shaped the Constitutional Convention eleven years later: the colonies chose unity over principle.",
          },
        ],
        bigIdea:
          "Jefferson wrote a passage attacking the slave trade. Congress removed it to keep South Carolina and Georgia. The Declaration's promise of equality was compromised at birth.",
        tryThis: [
          {
            title: "Read the removed passage",
            minutes: 18,
            steps: [
              "Read Jefferson's removed passage: 'He has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people.'",
              "Write: who did Jefferson blame? (The king.) Who did he not blame? (The colonists who bought and held slaves. Himself.)",
              "Talk About It: Congress removed this passage to keep the colonies united. Was that the right choice? What would have happened if they kept it and South Carolina and Georgia walked out?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration was edited to avoid challenging slavery, can it still be a symbol of equality? Or is the compromise part of what it is?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Jefferson's draft is the source. The final version is the compromise. Read both." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration opposed slavery.",
            reply: "Jefferson's draft included a passage attacking the slave trade. Congress removed it. South Carolina and Georgia refused to accept it. The other delegates chose unity over principle. The final Declaration does not mention slavery. The document that says 'all men are created equal' was edited to avoid challenging the slave trade. Jefferson himself owned over 200 enslaved people. He blamed the king for the slave trade, not the colonists — and even that deflection was too much. The Declaration's promise of equality was compromised at birth.",
          },
        ],
        integrity: "Do not let the model say the Declaration opposed slavery. It did not. The passage that opposed the slave trade was removed. Read the draft and the final version. The removal is the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'Did the Declaration oppose slavery?' If it says yes, ask: 'What passage was removed, and why?' The slave trade passage was stripped to keep South Carolina and Georgia. The removal is the story.",
          evaluate: [
            "Can they explain what passage was removed and why?",
            "Do they understand the irony (Jefferson owned slaves while condemning the trade)?",
            "Do they see the compromise as the same pattern as the Constitutional Convention?",
          ],
        },
      },
      emerging: {
        title: "The Slave Trade Passage: What Was Removed and Why",
        dek: "Jefferson's draft attacked the slave trade. Congress stripped it to keep South Carolina and Georgia. The irony: Jefferson wrote it while owning 200+ enslaved people. The Declaration's promise was compromised at birth.",
        objective:
          "The student can explain the removed slave trade passage, the political compromise that led to its removal, the irony of Jefferson's authorship, and the connection to the Constitutional Convention's compromises with slavery.",
        parentBriefing:
          "This sitting takes the removed passage seriously as both a political fact and a moral problem. The student needs to understand three things. First, the passage: Jefferson's draft included an attack on the slave trade — blaming King George for 'cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people.' The passage is striking in its language but dishonest in its attribution: Jefferson blamed the king, not the colonists who purchased and held slaves. And Jefferson wrote it while owning over 200 enslaved people. Second, the removal: South Carolina and Georgia refused to accept the passage. The other delegates chose unity over principle. The passage was stripped. The Declaration that says 'all men are created equal' was edited to avoid challenging the slave trade. Third, the pattern: the removal was the same kind of compromise that shaped the Constitutional Convention eleven years later — the three-fifths compromise, the fugitive slave clause, the 20-year ban on banning the slave trade. The colonies chose unity over principle at the founding, and the consequence was 80 years of toleration of slavery, a Civil War, and the 13th Amendment. The student should understand that the Declaration's compromise with slavery was not a footnote. It was the founding decision that shaped everything that followed.",
        hardEdges: [
          "Do not skip the irony. Jefferson condemned the slave trade while owning 200+ enslaved people. He blamed the king, deflecting responsibility from the colonists.",
          "Do not present the removal as a minor edit. It was a political compromise that set the pattern for 80 years of compromise with slavery.",
          "Do not skip the connection to the Constitutional Convention. The same compromise — unity over principle on slavery — shaped both documents.",
        ],
        reading: [
          {
            heading: "The passage, the irony, and the removal",
            body: "Jefferson's draft of the Declaration included a passage attacking the slave trade: 'He has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people who never offended him, captivating and carrying them into slavery in another hemisphere, or to incur miserable death in their transportation thither. This piratical warfare, the opprobrium of infidel powers, is the warfare of the Christian king of Great Britain.' The language is striking. The attribution is dishonest: Jefferson blamed King George for the slave trade, not the colonists who purchased and held slaves. And Jefferson wrote this while owning over 200 enslaved people. Congress stripped the passage entirely. South Carolina and Georgia, the two colonies most dependent on the slave trade, refused to accept it. The other delegates, prioritizing unity over principle, agreed to remove it. The Declaration that says 'all men are created equal' was edited to avoid challenging the slave trade. The compromise was the same kind of compromise that shaped the Constitutional Convention eleven years later: the three-fifths compromise (slaves counted as three-fifths for representation), the fugitive slave clause, the 20-year ban on banning the slave trade. The colonies chose unity over principle at the founding. The consequence was 80 years of toleration of slavery, a Civil War that killed 700,000 people, and the 13th Amendment that finally abolished the institution the Declaration had been edited to avoid challenging.",
          },
        ],
        bigIdea:
          "Jefferson's draft attacked the slave trade. Congress removed it to keep South Carolina and Georgia. The irony: Jefferson owned 200+ enslaved people and blamed the king. The compromise set the pattern for 80 years of toleration of slavery. The Declaration's promise was compromised at birth.",
        tryThis: [
          {
            title: "Read the passage and trace the pattern",
            minutes: 30,
            steps: [
              "Read Jefferson's removed passage. Write: what is striking about the language? What is dishonest about the attribution? (He blames the king, not the colonists. He condemns the trade while owning 200+ enslaved people.)",
              "Trace the pattern: the removal (1776) → the three-fifths compromise (1787) → the fugitive slave clause (1787) → the 20-year ban on banning the trade (1787) → the Civil War (1861) → the 13th Amendment (1865). Each step is a compromise with slavery. Each has consequences.",
              "Reflect: the colonies chose unity over principle at the founding. Was it the right choice? What would have happened if they kept the passage and South Carolina and Georgia walked out? Would there have been a United States?",
              "Ask: the compromise set the pattern for 80 years. Was the founding compromised from the start? Can a document say 'all men are created equal' while being edited to avoid challenging slavery?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration was edited to avoid challenging slavery, and the same compromise shaped the Constitution, was the founding compromised from the start? And if so, does the compromise diminish the promise — or does the survival of the promise despite the compromise make it more remarkable?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Jefferson's draft and the final version are both available. Read them. The removed passage is the evidence." },
          { label: "AI", note: "Ask the model: 'Did the Declaration oppose slavery?' If it says yes, ask: 'What passage was removed, and why?' The slave trade passage was stripped. The model will smooth the compromise. The removal is the story." },
          { label: "History", note: "Magna Carta omitted villeins. The Declaration was edited to avoid challenging slavery. The Constitution compromised with slavery in three clauses. Each founding document was compromised with the dominant power structure of its time. The omission and the compromise are not footnotes. They are the founding." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration opposed slavery because Jefferson wrote a passage against it.",
            reply: "Jefferson wrote a passage attacking the slave trade — not slavery itself. He blamed King George, not the colonists who bought and held slaves. And he wrote it while owning over 200 enslaved people. Congress removed the passage because South Carolina and Georgia refused to accept it. The final Declaration does not mention slavery. The document that says 'all men are created equal' was edited to avoid challenging the slave trade. The passage is evidence of Jefferson's ambivalence, not of the Declaration's opposition. The removal is evidence of the compromise. Both are the founding.",
          },
          {
            heard: "The founders were against slavery but compromised for the sake of unity.",
            reply: "Some were. Jefferson called slavery a 'deplorable entanglement' and wrote that he trembled for his country when he reflected that God is just. But he owned 200+ enslaved people and did not free them (except for a few in his will). The compromise — removing the slave trade passage, accepting the three-fifths clause, protecting the slave trade for 20 years — was a political choice. The colonies chose unity over principle. Whether that was the right choice is debatable. Without it, there might not have been a United States. With it, the nation tolerated slavery for 80 years and fought a war that killed 700,000 people to end it. The compromise was not costless. The founders knew it. Jefferson knew it. They did it anyway, because they believed union was more important than principle — and because many of them benefited from the system they compromised with. Both things are true: the compromise was a political choice, and it had consequences.",
          },
        ],
        integrity:
          "Do not let the model say the Declaration opposed slavery. The passage that opposed the slave trade was removed. Read the draft and the final version. The irony, the removal, and the pattern are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Did the Declaration oppose slavery?' If it says yes, ask: 'What passage was removed, and why?' The slave trade passage was stripped to keep South Carolina and Georgia. The model will smooth the compromise. The removal, the irony, and the pattern are the story.",
          evaluate: [
            "Can they explain what passage was removed and why?",
            "Do they understand the irony (Jefferson owned slaves while condemning the trade)?",
            "Can they trace the pattern of compromise from the Declaration to the Constitution?",
            "Do they see the compromise as the founding decision, not a footnote?",
          ],
        },
      },
      adult: {
        title: "The Slave Trade Passage: The Compromise at Birth",
        dek: "Jefferson's draft attacked the slave trade. Congress removed it to keep South Carolina and Georgia. The compromise set the pattern for 80 years of toleration of slavery. The Declaration's promise of equality was compromised at birth — and the survival of the promise despite the compromise is the real story.",
        objective:
          "The parent can explain the removed slave trade passage, the political compromise, the irony of Jefferson's authorship, the connection to the Constitutional Convention's compromises, and the consequence of 80 years of toleration of slavery.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Declaration's founding compromise honestly. The parent should understand three things. First, the passage: Jefferson's draft attacked the slave trade in striking language, blaming King George for 'cruel war against human nature itself.' The attribution is dishonest — Jefferson blamed the king, not the colonists. And he wrote it while owning over 200 enslaved people. Second, the removal: South Carolina and Georgia refused to accept the passage. The delegates chose unity over principle. The passage was stripped. The Declaration that says 'all men are created equal' was edited to avoid challenging the slave trade. Third, the pattern and consequence: the removal set the pattern for the Constitutional Convention — the three-fifths compromise, the fugitive slave clause, the 20-year ban on banning the trade. The nation compromised with slavery at the founding and tolerated it for 80 years. The Civil War killed 700,000 people. The 13th Amendment finally abolished the institution the Declaration had been edited to avoid challenging. The parent should understand that the compromise is not a footnote. It is the founding decision. And the survival of the promise — 'all men are created equal' — despite the compromise is the real story. The words survived the edit. The principle survived the politics. Every movement for equality used the words the compromise tried to neuter. That is the Declaration's legacy: not the compromise, but the promise that survived it.",
        hardEdges: [
          "Do not skip the irony. Jefferson condemned the slave trade while owning 200+ enslaved people. He blamed the king, deflecting responsibility. The passage is evidence of ambivalence, not opposition.",
          "Do not present the removal as a minor edit. It was a political compromise that set the pattern for 80 years of toleration of slavery, a Civil War, and the 13th Amendment.",
          "Do not let the compromise become the whole story. The compromise is real. The promise that survived it is also real. Both are the Declaration.",
        ],
        reading: [
          {
            heading: "The passage, the compromise, and the survival of the promise",
            body: "Jefferson's draft of the Declaration included a passage attacking the slave trade: 'He has waged cruel war against human nature itself, violating its most sacred rights of life and liberty in the persons of a distant people who never offended him, captivating and carrying them into slavery in another hemisphere.' The language is striking. The attribution is dishonest: Jefferson blamed King George, not the colonists who purchased and held slaves. And Jefferson wrote this while owning over 200 enslaved people. Congress stripped the passage. South Carolina and Georgia refused to accept it. The delegates chose unity over principle. The Declaration that says 'all men are created equal' was edited to avoid challenging the slave trade. The compromise set the pattern for the Constitutional Convention: the three-fifths compromise (slaves counted as three-fifths for representation), the fugitive slave clause, the 20-year ban on banning the trade. The nation compromised with slavery at the founding and tolerated it for 80 years. The Civil War killed 700,000 people. The 13th Amendment (1865) finally abolished the institution the Declaration had been edited to avoid challenging. But the promise survived the edit. The words — 'all men are created equal' — were not removed. The passage attacking the slave trade was removed, but the principle that made the passage possible was not. Every movement for equality — Douglass, Lincoln, King — used the words that the compromise tried to neuter. The compromise is the founding decision. The survival of the promise despite the compromise is the Declaration's legacy. Both are the story.",
          },
        ],
        bigIdea:
          "The Declaration was compromised with slavery at birth. Congress removed the passage attacking the slave trade to keep South Carolina and Georgia. The compromise set the pattern for 80 years. But the promise — 'all men are created equal' — survived the edit. The survival of the promise despite the compromise is the Declaration's real legacy.",
        tryThis: [
          {
            title: "Read the passage, trace the pattern, find the survival",
            minutes: 40,
            steps: [
              "Read Jefferson's removed passage. Write: what is striking? What is dishonest? (He blames the king, not the colonists. He owns 200+ enslaved people.)",
              "Trace the pattern: removal (1776) → three-fifths compromise (1787) → fugitive slave clause → 20-year ban on banning the trade → Civil War (1861) → 13th Amendment (1865). Each step is a compromise with slavery. Each has consequences.",
              "Find the survival: the passage was removed, but 'all men are created equal' was not. The promise survived the edit. Douglass used it. Lincoln used it. King used it. The compromise tried to neuter the promise. The promise survived.",
              "Reflect: the compromise is the founding decision. The survival of the promise despite the compromise is the legacy. Can a document be both compromised and foundational? The Declaration is. What does that tell you about how principles work?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration was compromised with slavery at birth, but the promise survived the compromise and every movement for equality used the surviving words, what is the document's real legacy — the compromise or the promise that survived it?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Did the Declaration oppose slavery?' Then ask: 'What passage was removed, and what survived?' The passage was removed. The promise survived. Both are the story. The model will pick one side. The paradox is the lesson." },
          { label: "History", note: "Magna Carta omitted villeins. The Declaration was edited to avoid challenging slavery. The Constitution compromised with slavery in three clauses. Each founding was compromised with the dominant power structure. The survival of the principle despite the compromise is the pattern. The charter's principle survived the omission. The Declaration's promise survived the edit." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration opposed slavery.",
            reply: "Jefferson's draft attacked the slave trade — not slavery itself. He blamed the king, not the colonists. He wrote it while owning 200+ enslaved people. Congress removed the passage because South Carolina and Georgia refused to accept it. The final Declaration does not mention slavery. The document that says 'all men are created equal' was edited to avoid challenging the slave trade. But the promise — 'all men are created equal' — survived the edit. The passage was removed. The principle was not. Every movement for equality used the surviving words. The compromise is the founding decision. The survival of the promise despite the compromise is the legacy. Both are the story.",
          },
          {
            heard: "The compromise means the Declaration has no moral authority.",
            reply: "The compromise is real. The moral authority is also real. Both are true. The Declaration was edited to avoid challenging slavery. The promise — 'all men are created equal' — was not edited. The compromise tried to neuter the promise. The promise survived. Douglass did not reject the Declaration — he used it. He quoted 'all men are created equal' and demanded that the nation live up to it. Lincoln did not reject it — he called it a 'standard maxim.' King did not reject it — he called it a 'promissory note.' The people the Declaration excluded did not reject the document. They claimed it. They said: these are our words, and we will make them mean what they say. The compromise is the founding decision. The survival of the promise is the legacy. The moral authority comes from both: the fact that the words were compromised, and the fact that the people who were excluded used the compromised words to demand inclusion. That is the Declaration. That is the American story.",
          },
        ],
        integrity:
          "Do not let the model say the Declaration opposed slavery or that the compromise destroys its authority. Read the removed passage. Read the surviving promise. The compromise is the founding decision. The survival of the promise is the legacy. Both are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Did the Declaration oppose slavery?' Then ask: 'What passage was removed, and what survived?' The passage was removed. The promise survived. The model will pick a side. The paradox — compromised and foundational — is the story.",
          evaluate: [
            "Can they explain the removed passage and the political compromise?",
            "Do they understand the irony of Jefferson's authorship?",
            "Can they trace the pattern from the Declaration to the Constitution to the Civil War?",
            "Do they see the survival of the promise as the Declaration's real legacy?",
          ],
        },
      },
    },
  }),

  // ── 6. The Declaration's Afterlife ────────────────────────────────
  ...expand({
    slug: "declaration-afterlife",
    subject: "history",
    unit: "The Declaration — The Promise and the Gap",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Words That Would Not Die",
        dek: "The Declaration's promise — 'all men are created equal' — was used by abolitionists, women, and civil rights leaders to demand that the words include them. The words are bigger than the man who wrote them.",
        objective:
          "The student can trace how the Declaration's words were used by later movements to expand equality, and understand the Declaration as a living promise.",
        parentBriefing:
          "This sitting is the capstone of the Declaration unit. It connects the founding words to the movements that used them. Frederick Douglass (1852) asked 'What to the Slave is the Fourth of July?' and challenged the nation to live up to the promise. Lincoln (1863) at Gettysburg called for 'a new birth of freedom' rooted in the Declaration's proposition that 'all men are created equal.' The Seneca Falls Declaration (1848) used the Declaration's language to demand women's equality: 'All men and women are created equal.' Martin Luther King Jr. (1963) called the Declaration a 'promissory note' that had not been paid. Each movement took the words and made them include the people the author left out. The student should understand that the Declaration is not a dead document. It is a living promise — used by every generation to demand that the words mean what they say.",
        hardEdges: [
          "Do not present the expansion as automatic. Each movement faced opposition, violence, and resistance. The words did not expand on their own. People expanded them.",
          "Do not skip the gap. The promise was universal. The practice was exclusive. The expansion was the work of the people the author excluded.",
        ],
        reading: [
          {
            heading: "The words and the movements",
            body: "The Declaration says 'all men are created equal.' Frederick Douglass, a formerly enslaved man, asked in 1852: 'What to the Slave is the Fourth of July?' He used the Declaration's words to challenge the nation. Lincoln at Gettysburg (1863) said the nation was 'conceived in Liberty, and dedicated to the proposition that all men are created equal.' The Seneca Falls Declaration (1848) changed 'all men' to 'all men and women.' Martin Luther King Jr. (1963) called the Declaration a 'promissory note' — a promise the nation had not yet paid.",
          },
          {
            heading: "Why the words survived",
            body: "The words survived because they are universal. 'All men are created equal' does not say 'all white male property owners.' It says 'all men.' Every movement for equality used the words against the limitations of the author. The words are bigger than the man. The expansion was the work of the people the words originally left out — slaves, women, activists. The author planted the seed. The people he excluded grew the tree.",
          },
        ],
        bigIdea:
          "The Declaration's words were used by every movement for equality to demand inclusion. The words are bigger than the author. The expansion was the work of the people the author left out.",
        tryThis: [
          {
            title: "Trace the words",
            minutes: 18,
            steps: [
              "Draw a timeline: 1776 (Declaration) → 1848 (Seneca Falls) → 1852 (Douglass) → 1863 (Lincoln) → 1963 (King). For each, write one sentence: how did they use the Declaration's words?",
              "Write: whose work was the expansion? (The people the author left out.) What did they risk? (Douglass was a fugitive. King faced violence. Women were arrested.)",
              "Talk About It: the words are 250 years old. Are they done? Who is still using them today? What right is still being expanded?",
            ],
          },
        ],
        dinnerQuestion:
          "If every movement for equality used the Declaration's words, and the expansion was the work of the people the author excluded, what is the Declaration's real legacy — the man who wrote it, or the people who made the words include them?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration is the source. Douglass, Lincoln, King are the interpretation. Read the source, then the interpretations." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is just an old document.",
            reply: "It is an old document that every movement for equality used. Douglass used it. Lincoln used it. King used it. The women at Seneca Falls used it. The words — 'all men are created equal' — are 250 years old and still being used to demand inclusion. The Declaration is not dead. It is a living promise — used by every generation to demand that the words mean what they say. The question is not whether the Declaration matters. The question is whether you are part of the chain.",
          },
        ],
        integrity: "Do not let the model present the Declaration as a dead document. Read Douglass, Lincoln, King. The words are alive. The expansion is ongoing.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Is the Declaration still relevant?' Then ask: 'Who used its words, and what did they do with them?' Douglass, Lincoln, King. The words are alive. The expansion is the story.",
          evaluate: [
            "Can they trace the Declaration's words through at least three movements?",
            "Do they understand the expansion was the work of the excluded?",
            "Do they see the Declaration as a living promise, not a dead document?",
          ],
        },
      },
      emerging: {
        title: "The Declaration's Afterlife: Douglass, Lincoln, King",
        dek: "The Declaration's promise — 'all men are created equal' — was used by every movement for equality to demand inclusion. Douglass challenged the nation. Lincoln grounded the Civil War in the Declaration. King called it a promissory note. The words are bigger than the man.",
        objective:
          "The student can trace the Declaration's afterlife through the abolitionist, women's rights, and civil rights movements, and understand the Declaration as a living promise used by each generation to expand equality.",
        parentBriefing:
          "This is the capstone of the Declaration unit. The student needs to understand three things. First, the chain: Frederick Douglass (1852) — 'What to the Slave is the Fourth of July?' — challenged the nation to live up to the promise it had not kept. Lincoln (1863) at Gettysburg — 'a new birth of freedom' rooted in the proposition that 'all men are created equal.' Seneca Falls (1848) — 'All men and women are created equal.' Martin Luther King Jr. (1963) — the Declaration as a 'promissory note' that had not been paid. Second, the pattern: each movement took the Declaration's words and made them include the people the author left out. The words are universal. The author was not. The expansion was the work of the excluded — slaves, women, activists — not the work of the author. Third, the principle: the Declaration is not a dead document. It is a living promise. Every generation uses the words to demand that the nation live up to them. The question is not whether the Declaration matters. It is whether the chain is being extended — whether the people who are still fighting for inclusion are the next link.",
        hardEdges: [
          "Do not present the expansion as automatic. Each movement faced opposition, violence, and resistance. The Civil War killed 700,000. The civil rights movement faced assassination, bombings, and state violence.",
          "Do not skip the gap. The promise was universal. The practice was exclusive. The expansion was the work of the excluded.",
          "Do not present the chain as finished. The question of who is still fighting for inclusion is ongoing.",
        ],
        reading: [
          {
            heading: "The chain of interpretation",
            body: "The Declaration's afterlife is a chain of interpretation. Link 1: Frederick Douglass (1852) — 'What to the Slave is the Fourth of July?' Douglass, a formerly enslaved man, used the Declaration's words to challenge the nation: 'Your celebration is a sham; your boasted liberty, an unholy license; your shouts of liberty and equality, hollow mockery.' He did not reject the Declaration. He used it. He held the nation to its own standard. Link 2: Abraham Lincoln (1863) — the Gettysburg Address. Lincoln grounded the Civil War in the Declaration: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.' He called for 'a new birth of freedom.' In the Lincoln-Douglas debates (1858), Lincoln argued that the founders set up a 'standard maxim' — a principle always worked toward, never perfectly attained. Link 3: Seneca Falls (1848) — the Declaration of Sentiments. Elizabeth Cady Stanton and others used the Declaration's language to demand women's equality: 'We hold these truths to be self-evident: that all men and women are created equal.' Link 4: Martin Luther King Jr. (1963) — 'I Have a Dream.' King called the Declaration a 'promissory note' — a promise the nation had made to all its citizens but had not paid to Black Americans. 'Instead of honoring this sacred obligation, America has given the Negro people a bad check, a check which has come back marked insufficient funds.' Each link took the words and made them include the people the author left out.",
          },
        ],
        bigIdea:
          "The Declaration's afterlife is a chain of interpretation. Douglass, Lincoln, Seneca Falls, King — each took the words and made them include the people the author excluded. The words are bigger than the man. The expansion was the work of the excluded. The Declaration is a living promise, not a dead document.",
        tryThis: [
          {
            title: "Trace the chain",
            minutes: 30,
            steps: [
              "Write the four links: Douglass (1852), Lincoln (1858/1863), Seneca Falls (1848), King (1963). For each, write one sentence: how did they use the Declaration's words?",
              "Find the pattern: each movement took universal words and made them include the excluded. Who was excluded? Who did the work? What did they risk?",
              "Read Lincoln's 'standard maxim' (1858): equality as a principle always worked toward, never perfectly attained. Is this faithful to the Declaration, or a reinterpretation?",
              "Reflect: the chain is 250 years long. Is it finished? Who is the next link? What right is still being expanded or contested?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration's afterlife is a chain of interpretation — each movement using the words to expand inclusion — where is the chain now? Who is the next link? And what happens if no one picks up the words?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Declaration is the source. Douglass, Lincoln, King are the interpretation. The chain is the expansion. Read the source, then the links." },
          { label: "AI", note: "Ask the model: 'How is the Declaration still relevant?' Then ask: 'Who used its words, and what did they do with them?' The model will generalize. The specific chain — Douglass, Lincoln, King — is the story." },
          { label: "History", note: "Magna Carta's afterlife is a chain of reinterpretation: Runnymede → reissue → Coke → founders → Civil Rights. The Declaration's afterlife is the same pattern: 1776 → Douglass → Lincoln → King. Both documents outgrew their authors through the work of the people who picked up the text and used it." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is just a historical document.",
            reply: "It is a historical document that every movement for equality used as a weapon. Douglass used it to challenge the nation. Lincoln used it to ground the Civil War. King used it to demand civil rights. The women at Seneca Falls used it to demand equality. The words — 'all men are created equal' — are 250 years old and still being used to demand inclusion. The Declaration is not a dead letter. It is a living promise. The question is not whether it matters. The question is whether you are part of the chain — whether you are using the words or letting them sit.",
          },
          {
            heard: "The expansion is complete. Everyone is included now.",
            reply: "The expansion is not complete. The 13th Amendment abolished slavery (1865). The 14th granted equal protection (1868). The 19th enfranchised women (1920). The Civil Rights Act (1964) and the Voting Rights Act (1965) made the promise real in practice. But the Electoral College can override the popular vote. Felony disenfranchisement denies the vote to millions. Gerrymandering distorts representation. Voter suppression restricts access. The promise is permanent. The fulfillment is ongoing. The chain is not finished. The question is who is doing the work now — and whether the next link is being forged or forgotten.",
          },
        ],
        integrity:
          "Do not let the model present the Declaration as a dead document or the expansion as complete. Read Douglass, Lincoln, King. The words are alive. The expansion is ongoing. The chain is not finished.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's legacy in three sentences.' Then ask: 'What did you skip?' The model will skip the chain — Douglass, Lincoln, King, Seneca Falls. The chain is the story. The compression hides the work.",
          evaluate: [
            "Can they trace the Declaration's afterlife through at least three movements?",
            "Do they understand the pattern (universal words, exclusive practice, expansion by the excluded)?",
            "Can they engage Lincoln's 'standard maxim' as a reading of the Declaration?",
            "Do they see the chain as ongoing, not finished?",
          ],
        },
      },
      adult: {
        title: "The Declaration's Afterlife: The Chain of Promise",
        dek: "The Declaration's afterlife is a chain of interpretation — Douglass, Lincoln, Seneca Falls, King — each taking the universal words and making them include the people the author excluded. The chain is the story. The question is whether it is being extended.",
        objective:
          "The parent can trace the Declaration's afterlife through the abolitionist, women's rights, and civil rights movements, understand the pattern of expansion by the excluded, engage Lincoln's 'standard maxim' resolution, and connect the Declaration's chain to Magna Carta's chain as parallel histories of interpretation.",
        parentBriefing:
          "This is the capstone of the Declaration unit. The parent should leave with three things. First, the chain: Douglass (1852) challenged the nation. Lincoln (1858/1863) grounded the Civil War in the Declaration and called equality a 'standard maxim.' Seneca Falls (1848) extended the words to women. King (1963) called the Declaration a 'promissory note.' Each link took universal words and made them include the people the author excluded. Second, the pattern: the words are universal; the author was not. The expansion was the work of the excluded — not the author. The author planted the seed. The people he left out grew the tree. Third, the parallel: Magna Carta's afterlife is the same pattern — Runnymede → reissue → Coke → founders → Civil Rights. The Declaration's afterlife is 1776 → Douglass → Lincoln → King. Both documents outgrew their authors through the work of the people who picked up the text and used it. The parent should understand that the Declaration is not a fixed text. It is a living promise — used by every generation to demand that the words mean what they say. The question is not whether the Declaration matters. It is whether the chain is being extended — whether the people who are still fighting for inclusion are the next link, or whether the chain stops here.",
        hardEdges: [
          "Do not present the expansion as automatic. Each movement faced opposition, violence, and resistance. The Civil War killed 700,000. The civil rights movement faced assassination, bombings, and state violence.",
          "Do not present the chain as finished. The Electoral College, felony disenfranchisement, gerrymandering, and voter suppression are ongoing challenges. The promise is permanent. The fulfillment is ongoing.",
          "Do not skip the Magna Carta parallel. Both documents have afterlives that are chains of interpretation. The charter's chain runs through Coke to the founders. The Declaration's chain runs through Douglass and Lincoln to King. Both outgrew their authors.",
        ],
        reading: [
          {
            heading: "The chain, the pattern, and the parallel",
            body: "The Declaration's afterlife is a chain of interpretation. Link 1: Frederick Douglass (1852) — 'What to the Slave is the Fourth of July?' Douglass, a formerly enslaved man, held the nation to its own standard: 'Your celebration is a sham; your boasted liberty, an unholy license.' He did not reject the Declaration. He used it. Link 2: Abraham Lincoln (1858/1863) — the Lincoln-Douglas debates and the Gettysburg Address. Lincoln argued that the founders set up a 'standard maxim for free society' — a principle 'constantly looked to, constantly labored for, and even though never perfectly attained, constantly approximated.' At Gettysburg, he grounded the Civil War in the Declaration: 'a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.' Link 3: Seneca Falls (1848) — the Declaration of Sentiments: 'We hold these truths to be self-evident: that all men and women are created equal.' Link 4: Martin Luther King Jr. (1963) — 'I Have a Dream.' King called the Declaration a 'promissory note' — a promise the nation had made but not paid. 'America has given the Negro people a bad check, a check which has come back marked insufficient funds.' Each link took universal words and made them include the people the author excluded. The pattern: the words are universal; the author was not. The expansion was the work of the excluded. The parallel to Magna Carta: both documents have afterlives that are chains of interpretation. The charter's chain: Runnymede (1215) → reissue (1216-1297) → Coke (1628) → founders (1791) → Civil Rights (1960s). The Declaration's chain: 1776 → Douglass (1852) → Lincoln (1858/1863) → Seneca Falls (1848) → King (1963). Both outgrew their authors through the work of the people who picked up the text and used it. The question is not whether the Declaration matters. It is whether the chain is being extended. The people who are still fighting for inclusion are the next link — or the chain stops here.",
          },
        ],
        bigIdea:
          "The Declaration's afterlife is a chain of interpretation — Douglass, Lincoln, Seneca Falls, King — each taking universal words and making them include the excluded. The chain parallels Magna Carta's. Both documents outgrew their authors through the work of the people who picked up the text. The question is whether the chain is being extended.",
        tryThis: [
          {
            title: "Trace the chain, find the pattern, connect the parallel",
            minutes: 40,
            steps: [
              "Write the four links: Douglass (1852), Lincoln (1858/1863), Seneca Falls (1848), King (1963). For each, write one sentence: what did they do with the Declaration's words?",
              "Find the pattern: the words are universal; the author was not. The expansion was the work of the excluded. The author planted the seed. The people he left out grew the tree.",
              "Connect to Magna Carta: both documents have afterlives that are chains of interpretation. The charter: Runnymede → Coke → founders → Civil Rights. The Declaration: 1776 → Douglass → Lincoln → King. Both outgrew their authors. The pattern is the same.",
              "Reflect: the chain is 250 years long. Is it finished? The Electoral College, felony disenfranchisement, gerrymandering, voter suppression — the promise is not fully realized. Who is the next link? What happens if no one picks up the text?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Declaration's afterlife is a chain of interpretation that parallels Magna Carta's — each link an act of making the words include more people — where is the chain now? Who is the next link? And what happens to a promise when no one picks it up?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Summarize the Declaration's legacy in three sentences.' Then ask: 'What did you skip?' The model will skip the chain — Douglass, Lincoln, King. The chain is the story. The compression hides the work. Then ask: 'Is the chain finished?' The model will say yes or no. The honest answer is: the promise is permanent, the fulfillment is ongoing, and the chain is only as strong as the people who pick up the text." },
          { label: "History", note: "Magna Carta's chain: Runnymede → Coke → founders → Civil Rights. The Declaration's chain: 1776 → Douglass → Lincoln → King. Both are chains of interpretation. Both outgrew their authors. Both required people to pick up the text and use it. The pattern is the same. The lesson is the same: a text is not self-enforcing. It requires people who believe in it and act on it." },
        ],
        ifTheySay: [
          {
            heard: "The Declaration is a historical document with no modern relevance.",
            reply: "It is the document that every movement for equality used as a weapon. Douglass used it to challenge the nation. Lincoln used it to ground the Civil War. King used it to demand civil rights. The women at Seneca Falls used it to demand equality. The words — 'all men are created equal' — are 250 years old and still being used. The Declaration's relevance does not come from its age. It comes from the chain of people who picked it up and used it. The charter's chain runs from 1215 to the Civil Rights movement. The Declaration's chain runs from 1776 to today. The question is not whether the Declaration is relevant. It is whether you are part of the chain — whether you are using the words or letting them sit. A text without people who pick it up is just old words. A text with people who pick it up is a promise. The Declaration is a promise. Whether it is kept is up to every generation.",
          },
          {
            heard: "The expansion is complete. The promise has been fulfilled.",
            reply: "The expansion is not complete. The 13th Amendment abolished slavery. The 14th granted equal protection. The 19th enfranchised women. The Civil Rights Act and the Voting Rights Act made the promise real in practice. But the Electoral College can override the popular vote. Felony disenfranchisement denies the vote to millions. Gerrymandering distorts representation. Voter suppression restricts access. The promise is permanent. The fulfillment is ongoing. The chain is not finished. The people who are still fighting for inclusion — for voting rights, for equal protection, for representation — are the next link. The question is whether the chain is being extended or whether it is stopping here. The Declaration's promise is only as strong as the people who pick up the words and use them. If no one picks them up, the promise is just old words. If people pick them up, the promise is a living demand. The choice is ours.",
          },
        ],
        integrity:
          "Do not let the model present the Declaration as a dead document or the expansion as complete. Read Douglass, Lincoln, King. Trace the chain. Connect it to Magna Carta's chain. The words are alive. The expansion is ongoing. The chain is not finished. The question is whether the next link is being forged.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the Declaration's legacy in three sentences.' Then ask: 'What did you skip, and is the chain finished?' The model will skip the chain and say the expansion is complete. The chain — Douglass, Lincoln, King — is the story. The ongoing expansion — voting rights, equal protection — is the lesson. The compression hides the work. The work is the legacy.",
          evaluate: [
            "Can they trace the Declaration's afterlife through the chain (Douglass, Lincoln, Seneca Falls, King)?",
            "Do they understand the pattern (universal words, exclusive practice, expansion by the excluded)?",
            "Can they connect the Declaration's chain to Magna Carta's chain as parallel histories of interpretation?",
            "Do they see the chain as ongoing, not finished? Can they identify where the work continues?",
          ],
        },
      },
    },
  }),
];
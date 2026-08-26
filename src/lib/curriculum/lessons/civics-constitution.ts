import { expand } from "./factory";

export const constitutionLessons = [
  // ── 1. Philadelphia: The Closed Room ──────────────────────────────
  ...expand({
    slug: "philadelphia-closed-room",
    subject: "history",
    unit: "The Constitution — Design and Compromise",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Closed Room in Philadelphia",
        dek: "55 men locked the doors and argued all summer. What they wrote changed the world. What they argued about might surprise you.",
        objective:
          "The student can tell the story of the Constitutional Convention: who was there, what they argued about, and what they produced.",
        parentBriefing:
          "This sitting tells the story of the Constitutional Convention of 1787. The key facts: 55 men met in Philadelphia in secret. They argued for four months. They were not unified — they disagreed about almost everything. The result was a document that barely passed ratification. The student should understand that the Constitution was not a smooth, unified effort. It was a fight — between large states and small states, North and South, Federalists and Anti-Federalists. The compromises they made (the Great Compromise, the three-fifths compromise) were not elegant solutions. They were the deals they had to make to get anything passed.",
        hardEdges: [
          "Do not present the founders as unified. They were two camps who disagreed about almost everything.",
          "Do not skip the three-fifths compromise or the slavery compromises. They are not footnotes. They are the design.",
        ],
        reading: [
          {
            heading: "The locked doors",
            body: "In the summer of 1787, 55 men met in Philadelphia. They locked the doors. They kept no official record of the debates. They did not want their arguments used against them. They argued for four months about how to build a government. They disagreed about almost everything: how powerful the president should be, how states should be represented, whether slavery should be protected. The result was a compromise that barely passed. The Constitution was not a gift from wise men who agreed. It was a fight that ended in a deal.",
          },
        ],
        bigIdea:
          "The Constitution was not a unified effort by men who agreed. It was a fight in a closed room that ended in a series of deals.",
        tryThis: [
          {
            title: "The arguments",
            minutes: 20,
            steps: [
              "List three things the founders argued about: how to represent states, how to count slaves, how powerful the president should be.",
              "For each, write the two sides. Who wanted what? What was the deal?",
              "Talk About It: if they disagreed so much, how did they produce a document at all?",
            ],
          },
        ],
        dinnerQuestion: "If the founders disagreed about almost everything, what does it mean that they produced a document anyway?",
        transfer: [
          { label: "Thinking", note: "Source before summary: read the Convention notes (Madison's). The legend smooths the disagreements." },
        ],
        ifTheySay: [
          {
            heard: "The founders all agreed on the Constitution.",
            reply: "They did not. The convention was a fight between large states and small states, North and South, Federalists and Anti-Federalists. Ratification was close — the Constitution passed by a few votes in several states. The 'founding fathers' were not a team. They were two camps who barely found common ground. The common ground was a series of compromises, not a shared vision.",
          },
        ],
        integrity: "Do not cite a model's summary of the Convention. Read Madison's notes. The summary will smooth the fights.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What happened at the Constitutional Convention?' Then ask: 'What did the model smooth?' The model will present unity. The reality was disagreement.",
          evaluate: [
            "Can they name at least three disagreements?",
            "Do they understand the Convention was not unified?",
          ],
        },
      },
      emerging: {
        title: "Philadelphia: The Fight Behind the Design",
        dek: "The Constitution was not a unified effort. It was a four-month argument in a locked room that ended in a series of compromises — some brilliant, some brutal.",
        objective:
          "The student can explain the major disagreements at the Constitutional Convention, the compromises that resolved them, and the legacy of those compromises — including the three-fifths clause and the slavery concessions.",
        parentBriefing:
          "This sitting takes the Convention seriously as a political fight, not a civics lesson. The student needs to understand that the Constitution's design was driven by disagreement, not consensus. The Great Compromise (bicameral legislature) resolved large states vs small states. The three-fifths compromise resolved the representation of enslaved people. The Electoral College was a concession to small states and the fear of mob rule. The 20-year ban on banning the slave trade was a concession to the South. Each compromise was a deal, not a principle. The student should be able to distinguish the design from the deals — and see that some of the deals were brutal.",
        hardEdges: [
          "The three-fifths compromise was about representation and taxation, not human worth. But it embedded slavery in the Constitution's structure. Name both.",
          "The Constitution protected the slave trade for 20 years (Article I, Section 9). That is not a footnote. It is a concession that traded human lives for political union.",
        ],
        reading: [
          {
            heading: "The fights",
            body: "The Convention had four major fights. Large states vs small states: should representation be proportional (Virginia Plan) or equal (New Jersey Plan)? The Great Compromise: a House apportioned by population and a Senate with equal representation per state. North vs South on slavery: should enslaved people count for representation? The three-fifths compromise: count them as three-fifths of a person for apportionment — not for worth, but for seats and taxes. The slave trade: the South wanted protection for the trade. The North wanted to ban it. The deal: a 20-year ban on banning the trade (Article I, Section 9). Executive power: some wanted a strong president. Others feared monarchy. The Electoral College was the compromise — not a principle, but a deal between those who wanted Congress to choose the president and those who wanted direct election.",
          },
          {
            heading: "The Anti-Federalists",
            body: "The Constitution was not universally loved. The Anti-Federalists — Patrick Henry, George Mason, and others — opposed it. They feared a strong central government would become a tyranny. They demanded a Bill of Rights as the price of ratification. The Federalists (Madison, Hamilton) argued that a Bill of Rights was unnecessary — the Constitution already limited government. The Anti-Federalists won the argument. The Bill of Rights was added in 1791. But the deeper Anti-Federalist fear — that a distant central government would become unaccountable — has never fully gone away. The fight at Philadelphia did not end with the Convention. It continued through ratification, through the first Congress, and through every constitutional debate since.",
          },
        ],
        bigIdea:
          "The Constitution was driven by disagreement, not consensus. The compromises that resolved the fights — some brilliant, some brutal — are the design. Read the fights, not just the result.",
        tryThis: [
          {
            title: "Read the compromises",
            minutes: 35,
            steps: [
              "Read Article I, Section 2, Clause 3 (the three-fifths clause). Write what it says in plain English.",
              "Read Article I, Section 9 (the slave trade clause). What did it protect, and for how long?",
              "Read Federalist 51 (Madison on checks and balances). What problem was he solving?",
              "Reflect: the three-fifths compromise was about seats and taxes, not human worth. But it embedded slavery in the Constitution's structure. How do you hold both truths: the clause was not about human value, and it protected slavery?",
            ],
          },
        ],
        dinnerQuestion: "The Constitution protected the slave trade for 20 years. Was that a necessary compromise or a moral failure? Can it be both?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Madison's Convention notes are the source. The Constitution is the result. The legend smooths the fights." },
          { label: "AI", note: "Ask the model: 'What were the major compromises at the Constitutional Convention?' Then ask: 'What did the model soften?' The three-fifths clause and the slave trade protection should be named, not smoothed." },
        ],
        ifTheySay: [
          {
            heard: "The three-fifths clause meant slaves were three-fifths of a person.",
            reply: "It meant they were counted as three-fifths of a person for representation and taxation — not that they were three-fifths of a human being. The distinction matters. The North wanted slaves to not count at all (less power for the South). The South wanted them to count fully (more power for the South). The compromise was three-fifths — a deal about seats and taxes. It was not a statement about human worth. But it did embed slavery in the Constitution's structure, giving slave states extra representation based on people they treated as property. Both things are true: the clause was about apportionment, not value, and it protected slavery by giving slave states more power.",
          },
          {
            heard: "The founders were all on the same side.",
            reply: "They were not. The Convention was a fight. Federalists wanted a strong central government. Anti-Federalists feared it would become tyranny. Ratification was close — the Constitution passed by a few votes in several states. The Bill of Rights was the Anti-Federalists' price. The 'founding fathers' were not a team. They were two camps who barely found common ground, and the common ground was a series of compromises — some of which protected slavery for political convenience. Do not smooth the fight into a legend. The fight is the history.",
          },
        ],
        integrity: "Do not cite the model's summary of the Convention. Read Article I, Sections 2 and 9. Read Federalist 51. The model will smooth. The text does not.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the three-fifths compromise in one sentence.' Then ask: 'What did you leave out?' The model will say it was about counting slaves. It will likely not mention that the North wanted them to not count and the South wanted them to count fully. The politics of the compromise is the lesson.",
          evaluate: [
            "Can they explain what the three-fifths compromise actually said?",
            "Do they understand it was about representation, not human worth?",
            "Can they name the slave trade protection (Article I, Section 9)?",
            "Do they understand the Convention was a fight, not a unified effort?",
          ],
        },
      },
      adult: {
        title: "Philadelphia: The Design and the Deals",
        dek: "The Constitution is the most durable written constitution in the world. It was built from four months of argument in a locked room, by men who disagreed about almost everything and compromised on some things they should not have.",
        objective:
          "The parent can explain the major disagreements at the Constitutional Convention, the compromises that resolved them, the legacy of those compromises (including the slavery concessions), and the ongoing tension between the Constitution's design and its deals.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Constitution honestly — as a political achievement built from disagreement, not as a sacred text handed down by unified wise men. The parent should understand the four major fights (large vs small states, North vs South on slavery, executive power, federalism), the compromises that resolved them, and the moral cost of the slavery concessions. The three-fifths clause and the 20-year slave trade protection were not unfortunate footnotes. They were design choices — deals that traded human lives for political union. The Constitution is both a brilliant design and a document with moral compromises built into its structure. Both things are true. Teaching only one is dishonest.",
        hardEdges: [
          "The slavery compromises were not minor. The three-fifths clause gave slave states extra representation. The slave trade protection lasted 20 years. Both were structural, not incidental.",
          "The Anti-Federalists were not wrong about everything. Their fear of unaccountable central power has shaped American politics for 230 years.",
        ],
        reading: [
          {
            heading: "The design and the deals",
            body: "The Constitution's design is separation of powers, checks and balances, and federalism. The deals are the compromises that made the design possible. The Great Compromise (bicameral legislature) resolved large vs small states. The three-fifths compromise resolved the representation of enslaved people — giving slave states extra seats in the House based on people they treated as property. The slave trade clause (Article I, Section 9) protected the international slave trade for 20 years, until 1808. The Electoral College was a compromise between election by Congress and direct popular election. Each of these was a deal, not a principle. The design is principled: divide power, check power, limit power. The deals are political: the South got protection for slavery in exchange for joining the union. The Constitution is both. The design has survived for 230 years. The deals left a legacy that took the Civil War to begin to undo.",
          },
        ],
        bigIdea:
          "The Constitution is a brilliant design built from brutal deals. The design (separation of powers, checks and balances, federalism) has survived 230 years. The deals (three-fifths, slave trade protection) left a legacy that took the Civil War to begin to undo. Both are the Constitution.",
        tryThis: [
          {
            title: "Separate design from deals",
            minutes: 40,
            steps: [
              "List the design elements: separation of powers (Articles I-III), checks and balances, federalism (Tenth Amendment), judicial review (Marbury v. Madison).",
              "List the deals: three-fifths clause (Article I, Section 2), slave trade protection (Article I, Section 9), Electoral College (Article II).",
              "Ask: which design elements were principled? Which deals were political? Can you separate them, or are they woven together?",
              "Reflect: the Constitution protected slavery for 20 years. It also created the framework that eventually abolished slavery (the Thirteenth Amendment). Both are the Constitution. How do you hold both?",
            ],
          },
        ],
        dinnerQuestion: "The Constitution is a brilliant design built from brutal deals. How do you teach both without either dismissing the design or excusing the deals?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Was the Constitution a success?' Then ask: 'For whom?' The answer depends on whether you were a free white man, an enslaved person, a woman, or Indigenous. The Constitution's success was not universal." },
          { label: "Philosophy", note: "Magna Carta told the king he had limits. The Constitution told the government it derived its power from the people. The chain from Runnymede to Philadelphia is real — but so is the gap between 'We the People' and who 'the People' actually included." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is perfect.",
            reply: "It is not. It is the most durable written constitution in the world, and it contains moral compromises that protected slavery for decades. The three-fifths clause gave slave states extra power. The slave trade was protected for 20 years. The Electoral College was a political deal, not a principled design. The Constitution is brilliant and flawed, and both of those are structural, not incidental. The design — separation of powers, checks and balances, federalism — is principled. The deals — slavery concessions, the Electoral College — are political. The Thirteenth, Fourteenth, and Fifteenth Amendments were needed to begin to undo the deals. The Constitution is not perfect. It is a living document that has been amended 27 times. The amendments are the proof that the original was not enough.",
          },
        ],
        integrity: "Do not let the model present the Constitution as either perfect or irredeemable. It is a design with deals, and the deals have a moral cost. Read Articles I and II. Read the Thirteenth Amendment. The gap between them is the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Was the Constitution a success?' Then ask: 'What did your answer assume about who 'the People' were?' The model will assume universal inclusion. The original Constitution included about 6% of the population (white male property owners). The expansion took centuries.",
          evaluate: [
            "Can they separate the design from the deals?",
            "Can they name the slavery compromises and explain their structural impact?",
            "Do they understand that the Constitution's success was not universal — that it excluded most of the population?",
            "Can they hold both: the design is brilliant, and the deals have a moral cost?",
          ],
        },
      },
    },
  }),

  // ── 2. Power Against Power ────────────────────────────────────────
  ...expand({
    slug: "power-against-power",
    subject: "history",
    unit: "The Constitution — Design and Compromise",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Power Against Power",
        dek: "The founders divided the government into three parts so no one part could take over. The idea is simple. The system is not.",
        objective:
          "The student can explain what separation of powers means and why the founders designed it that way.",
        parentBriefing:
          "This sitting is about the core structural idea of the Constitution: divide power so no one branch can dominate. Three branches: Congress makes laws, the president enforces them, courts interpret them. Each can check the others. The president can veto Congress. Congress can override the veto. The president appoints judges. The Senate confirms them. Courts can strike down laws. The system is not efficient — it was not designed to be. It was designed to prevent tyranny.",
        hardEdges: [
          "The system is intentionally inefficient. The founders feared concentrated power more than they valued efficiency.",
          "Judicial review (courts striking down laws) is not in the Constitution. It was established by the Supreme Court itself in Marbury v. Madison (1803).",
        ],
        reading: [
          {
            heading: "Three branches",
            body: "The government has three parts. Congress makes the laws. The president carries them out. The courts decide what the laws mean. No part can do the other's job. And each part can stop the others: the president can veto a law. Congress can override the veto. The president picks judges. Congress approves them. Courts can say a law is unconstitutional. The system is slow. That is on purpose. The founders wanted to make it hard to pass laws, because laws that are hard to pass are hard to abuse.",
          },
        ],
        bigIdea:
          "Divide power so no one part can take over. The system is slow on purpose — because slow is safer than fast when power is involved.",
        tryThis: [
          {
            title: "Draw the three branches",
            minutes: 18,
            steps: [
              "Draw three boxes: Congress, President, Courts. Label what each does.",
              "Draw arrows showing how each can stop the others. President → veto → Congress. Congress → override → President. Courts → strike down → Congress.",
              "Talk About It: why did the founders make it hard to pass laws? What happens if it is too easy?",
            ],
          },
        ],
        dinnerQuestion: "If the government is designed to be slow, what happens when someone finds a way to make it fast?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'divided power prevents tyranny.' The check is whether the divisions hold." },
        ],
        ifTheySay: [
          {
            heard: "The system is too slow.",
            reply: "It is slow on purpose. The founders feared concentrated power more than they valued efficiency. A government that can pass laws quickly can also abuse them quickly. The slowness is the safety. The question is whether the safety is worth the cost — and whether the safety holds when someone figures out how to go around it.",
          },
        ],
        integrity: "Do not let the model summarize checks and balances in one sentence. Read Article I, II, and III. The specific powers matter.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What are the three branches of government?' Then ask: 'How does each check the others?' Compare the model's summary to the actual Constitution articles.",
          evaluate: [
            "Can they name the three branches and their powers?",
            "Can they give at least one check per branch?",
          ],
        },
      },
      emerging: {
        title: "Power Against Power: The Design and Its Weakness",
        dek: "Separation of powers is the Constitution's central structural idea. It is also a system with known weaknesses — weaknesses the founders acknowledged and accepted.",
        objective:
          "The student can explain the constitutional design of separation of powers, the system of checks and balances, and the known weaknesses the founders accepted — including the risk of gridlock and the problem of enforcement.",
        parentBriefing:
          "This sitting takes the design seriously, including its weaknesses. Madison designed a system of checks and balances because he did not trust anyone with unchecked power. Federalist 51: 'If men were angels, no government would be necessary.' The system is intentionally inefficient. But the inefficiency has costs: gridlock, the difficulty of responding to crises, and the problem of enforcement when a branch exceeds its power. Judicial review (Marbury v. Madison) was the courts' answer to enforcement — but the Court has no army. Its power depends on the other branches' willingness to comply. The student should understand both the design's brilliance and its structural vulnerabilities.",
        hardEdges: [
          "Judicial review is not in the Constitution. It was established by the Supreme Court itself. The Court gave itself the power to strike down laws.",
          "The system's inefficiency is a feature, not a bug. But features have costs. The cost of gridlock is that problems go unsolved.",
        ],
        reading: [
          {
            heading: "Madison's design",
            body: "Federalist 51 is the clearest statement of the design: 'The accumulation of all powers, legislative, executive, and judiciary, in the same hands... may justly be pronounced the very definition of tyranny.' Madison's solution: divide power among three branches and give each the means to resist the others. 'Ambition must be made to counteract ambition.' The design assumes that people in power will try to expand their power. It uses that assumption as a feature: each branch's ambition checks the others. The system is a machine that runs on self-interest. It is not a machine that runs on virtue.",
          },
          {
            heading: "The enforcement problem",
            body: "The Constitution's enforcement mechanism is the separation of powers itself — each branch resists the others. But what happens when a branch exceeds its power and the other branches do not resist? Andrew Jackson reportedly said of a Supreme Court decision: 'John Marshall has made his decision, now let him enforce it.' Jackson ignored the Court. The Court has no army. Its power depends on the other branches' willingness to comply. Judicial review was established by the Court itself in Marbury v. Madison (1803) — the Court gave itself the power to strike down laws. That power is not in the Constitution. It is an act of interpretation that the other branches have accepted, but acceptance is not guaranteed. The enforcement of constitutional limits is not self-executing. It requires people — in government, in the courts, and in the public — who believe the limits mean something.",
          },
        ],
        bigIdea:
          "Separation of powers runs on self-interest, not virtue. It is a machine that uses ambition to check ambition. Its weakness is enforcement — what happens when a branch exceeds its power and no one resists.",
        tryThis: [
          {
            title: "Read Federalist 51",
            minutes: 30,
            steps: [
              "Read Federalist 51 (Madison). Find the key sentence: 'If men were angels, no government would be necessary.' Write what it means.",
              "Find: 'Ambition must be made to counteract ambition.' What design does this imply?",
              "Ask: what happens when ambition does not counteract ambition? When one branch does not resist another? The Jackson story is the example.",
              "Reflect: judicial review is the Court's self-assigned power. Is that legitimate? What makes it legitimate — the text, the practice, or the acceptance?",
            ],
          },
        ],
        dinnerQuestion: "If the system runs on ambition checking ambition, what happens when ambition cooperates instead of checks?",
        transfer: [
          { label: "AI", note: "Ask the model: 'What is the purpose of checks and balances?' Then ask: 'What happens when the checks fail?' The model will explain the design. The failure is the harder question." },
        ],
        ifTheySay: [
          {
            heard: "The system works because the branches check each other.",
            reply: "It works when the branches check each other. When they do not — when one branch acquiesces to another, or when ambition cooperates instead of checks — the system breaks. The design assumes conflict between branches. When the conflict stops, the checks stop. Gridlock is the cost of the design working. Acquiescence is the sign of the design failing. The founders knew this. They designed for a world where people in power would resist each other. They did not design for a world where people in power would cooperate to expand it. That is the system's structural vulnerability, and it is the one the founders acknowledged but could not solve.",
          },
        ],
        integrity: "Do not cite the model's summary of checks and balances. Read Federalist 51. Read Marbury v. Madison. The design is in the text. The enforcement problem is in the practice.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'How does the Constitution prevent tyranny?' Then ask: 'What did the model assume?' The model assumes the checks work. Ask: 'What happens when they don't?' That is the question the model's summary will not answer.",
          evaluate: [
            "Can they explain Madison's design (ambition counteracting ambition)?",
            "Do they understand judicial review was self-assigned by the Court?",
            "Can they identify the enforcement problem?",
          ],
        },
      },
      adult: {
        title: "Power Against Power: The Machine and Its Maintenance",
        dek: "The Constitution is a machine that runs on self-interest. It is also a machine that requires maintenance — the willingness of each generation to enforce the limits the design assumes.",
        objective:
          "The parent can explain the constitutional design of separation of powers, the enforcement problem (judicial review, compliance, acquiescence), and the ongoing question of whether the system's checks hold when they are most needed.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Constitution as a living system, not a static design. The parent should understand that the system's brilliance (ambition checking ambition) is also its vulnerability (what happens when ambition cooperates). The enforcement problem — courts with no army, presidents who ignore rulings, legislatures that abdicate oversight — is not a theoretical concern. It is a recurring feature of constitutional crises. The parent should teach that the Constitution is not self-enforcing. It requires people — in every branch, in every generation — who believe the limits mean something and are willing to enforce them. The design is necessary but not sufficient. The maintenance is the practice.",
        hardEdges: [
          "The Constitution's enforcement depends on norms — unwritten rules about compliance, comity, and restraint — that the text does not mandate. When the norms break, the text is not enough.",
          "Judicial review is self-assigned. The Court's authority depends on the other branches' acceptance. Acceptance is a norm, not a law.",
        ],
        reading: [
          {
            heading: "The machine and its maintenance",
            body: "The Constitution is a machine: divide power, check power, limit power. The machine runs on self-interest — each branch's ambition checks the others. But machines need maintenance. The maintenance of constitutional government is not mechanical. It is cultural. The system works when people in power believe in the limits and enforce them. When a president ignores a court ruling, the ruling does not enforce itself. When a legislature abdicates oversight, the oversight does not happen on its own. When the norms of compliance break — when the unwritten rules about restraint, comity, and institutional respect erode — the written Constitution is not enough. The text is necessary but not sufficient. The practice — the willingness of each generation to enforce the limits the design assumes — is what makes the Constitution real. Magna Carta survived because people kept picking it up and using it. The Constitution survives the same way. The text is 230 years old. The practice is ongoing. When the practice stops, the text is just paper.",
          },
        ],
        bigIdea:
          "The Constitution is a machine that runs on self-interest and requires cultural maintenance. The text is necessary but not sufficient. The practice — the willingness to enforce the limits — is what makes the Constitution real.",
        tryThis: [
          {
            title: "Find the norms",
            minutes: 40,
            steps: [
              "List three constitutional norms — unwritten rules the text does not mandate. Examples: the president complies with court rulings. The Senate holds hearings on Supreme Court nominees. The legislature exercises oversight of the executive.",
              "For each, ask: what happens when the norm breaks? Is there a textual enforcement mechanism? Or does the system depend on the norm?",
              "Reflect: the Constitution is 230 years old. The text has changed 27 times (amendments). The norms have changed many more times. Which matters more — the text or the norms?",
            ],
          },
        ],
        dinnerQuestion: "If the Constitution's enforcement depends on norms the text does not mandate, what happens when the norms break? Is the text enough?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How is the Constitution enforced?' The model will say 'through the courts and checks and balances.' Ask: 'What happens when those mechanisms fail?' The answer is: norms. The model will not say norms. The norms are the unwritten constitution." },
          { label: "Thinking", note: "The Magna Carta chain: a text survives through use. The Constitution is the same. The text is necessary. The practice — the people who enforce it — is sufficient. Without both, the Constitution is just paper." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution protects our rights automatically.",
            reply: "It does not. The text is 230 years old. The protection of rights depends on the practice — courts that enforce them, legislatures that respect them, executives who comply with them, and citizens who demand them. The text is necessary but not sufficient. The Magna Carta survived because people kept picking it up and using it. The Constitution is the same. When the practice stops — when courts are ignored, when legislatures abdicate, when citizens stop demanding — the text is just paper with a seal. The Constitution does not protect itself. People protect it. That is the deepest lesson of the charter chain: law is a practice, not just a text.",
          },
        ],
        integrity: "Do not let the model present the Constitution as self-enforcing. It requires people. Read Federalist 51 and ask: who enforces the checks? The answer is: the branches, through their ambition. When the ambition cooperates instead of checks, the enforcement fails. That is not a theoretical concern. It is a recurring feature of constitutional crises.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Does the Constitution protect itself?' Then ask: 'What does your answer assume?' The model assumes the checks work. The checks require people. Ask: 'What happened when Jackson ignored the Supreme Court?' The answer is: nothing. The Court had no army. The enforcement failed. That is the lesson.",
          evaluate: [
            "Can they distinguish the text from the norms?",
            "Do they understand that the Constitution requires cultural maintenance, not just textual fidelity?",
            "Can they identify the enforcement problem and connect it to Magna Carta's chain?",
          ],
        },
      },
    },
  }),

  // ── 3. The Three-Fifths Compromise ─────────────────────────────────
  ...expand({
    slug: "three-fifths-compromise",
    subject: "history",
    unit: "The Constitution — Design and Compromise",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Three-Fifths Deal",
        dek: "The Constitution counted enslaved people as three-fifths of a person — not for their worth, but for seats and taxes. The deal protected slavery. The history is ugly. Name it.",
        objective:
          "The student can explain what the three-fifths clause said, what it meant, and why it matters that slavery was embedded in the Constitution's structure.",
        parentBriefing:
          "This sitting names the hardest truth about the Constitution: it embedded slavery in its structure. The three-fifths clause (Article I, Section 2) counted enslaved people as three-fifths of a person for representation and taxation. It was not a statement about human worth. It was a deal: the South wanted enslaved people to count fully (more seats). The North wanted them to not count at all (less power for the South). The compromise was three-fifths. The effect was to give slave states extra representation based on people they treated as property. The student should understand that this was not a minor flaw. It was a structural choice that protected slavery and gave slave states disproportionate power for decades.",
        hardEdges: [
          "Do not soften the clause. It was not about human worth, but it protected slavery. Both are true.",
          "Do not skip the slave trade clause (Article I, Section 9), which protected the international slave trade for 20 years.",
        ],
        reading: [
          {
            heading: "What the clause said",
            body: "Article I, Section 2 of the Constitution says: 'Representatives and direct Taxes shall be apportioned among the several States... by adding to the whole Number of free Persons... three fifths of all other Persons.' 'All other persons' means enslaved people. They were counted as three-fifths of a person — not for their worth, but for how many seats their state got in Congress and how much their state paid in taxes. The South wanted them to count fully. The North wanted them to not count at all. The deal was three-fifths. The effect: slave states got extra power in Congress based on people they treated as property.",
          },
        ],
        bigIdea:
          "The three-fifths clause counted enslaved people as three-fifths of a person for seats and taxes. It was not about human worth. It protected slavery by giving slave states extra power. Both are true.",
        tryThis: [
          {
            title: "Read the clause",
            minutes: 18,
            steps: [
              "Read Article I, Section 2, Clause 3. Find 'three fifths of all other Persons.'",
              "Write: what does 'all other persons' mean? (Enslaved people. The Constitution does not use the word 'slave.')",
              "Talk About It: why did the South want enslaved people to count fully? Why did the North want them to not count at all? What was at stake?",
            ],
          },
        ],
        dinnerQuestion: "The three-fifths clause was not about human worth, but it protected slavery. How do you hold both truths?",
        transfer: [
          { label: "Thinking", note: "Source before summary: read the actual clause. The legend says it was about worth. The text says it was about seats and taxes." },
        ],
        ifTheySay: [
          {
            heard: "The clause said slaves were three-fifths of a person.",
            reply: "It said they were counted as three-fifths of a person for representation and taxation — not that they were three-fifths of a human being. The distinction matters. The North wanted them to not count at all (less power for the South). The South wanted them to count fully (more power). The compromise was three-fifths. It was a deal about seats, not a statement about value. But the deal protected slavery by giving slave states extra power based on people they treated as property. Both things are true.",
          },
        ],
        integrity: "Do not let the model say the clause was about human worth. Read Article I, Section 2. It says 'all other Persons.' The word 'slave' does not appear in the Constitution. The omission is the design.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What did the three-fifths clause mean?' If it says 'slaves were three-fifths of a person,' that is the misconception. If it says 'enslaved people were counted as three-fifths for representation,' that is honest. The gap is the lesson.",
          evaluate: [
            "Can they explain what the clause actually said?",
            "Do they understand it was about representation, not worth?",
          ],
        },
      },
      emerging: {
        title: "The Three-Fifths Compromise: The Deal and the Cost",
        dek: "The three-fifths clause was not about human worth. It was about power. And the cost of the deal was decades of slavery embedded in the Constitution's structure.",
        objective:
          "The student can explain the three-fifths compromise in full: what it said, what the two sides wanted, what the deal protected, and the structural legacy of embedding slavery in the Constitution's apportionment system.",
        parentBriefing:
          "This sitting takes the three-fifths compromise seriously as both a political deal and a structural choice with lasting consequences. The student needs to understand that the clause was not a statement about human worth — it was a deal about seats and taxes. But the deal protected slavery by giving slave states extra representation based on people they treated as property. The slave trade clause (Article I, Section 9) protected the international slave trade for 20 years. Together, these two clauses embedded slavery in the Constitution's structure. The Thirteenth Amendment (1865) abolished slavery. The Fourteenth (1868) replaced the three-fifths clause with full counting. But the legacy of the compromise — decades of slave state overrepresentation — shaped American politics from 1789 to the Civil War.",
        hardEdges: [
          "The Constitution does not use the word 'slave.' It says 'all other Persons.' The euphemism is the design — the founders built slavery into the structure without naming it.",
          "The slave trade clause (Article I, Section 9) is as important as the three-fifths clause. It protected the international slave trade for 20 years, until 1808.",
        ],
        reading: [
          {
            heading: "The deal and the cost",
            body: "The three-fifths compromise resolved a fight about power. The South wanted enslaved people to count fully for representation — more seats, more power. The North wanted them to not count at all — less power for the South. The logic: if slaves are property, not citizens, counting them for representation gives slave states power based on people they treat as property. The compromise was three-fifths. The effect: slave states got extra representation in Congress and the Electoral College based on enslaved people who could not vote, had no rights, and were treated as property. The compromise protected slavery by making it politically advantageous. The slave trade clause (Article I, Section 9) went further: it prohibited Congress from banning the international slave trade for 20 years. Together, these two clauses embedded slavery in the Constitution's structure — not as a footnote, but as a design choice. The word 'slave' does not appear in the Constitution. The founders built slavery in without naming it.",
          },
        ],
        bigIdea:
          "The three-fifths clause was a deal about power, not worth. But the deal embedded slavery in the Constitution's structure, giving slave states extra representation for decades. The word 'slave' does not appear in the text. The euphemism is the design.",
        tryThis: [
          {
            title: "Read both clauses",
            minutes: 30,
            steps: [
              "Read Article I, Section 2, Clause 3 (three-fifths). Find 'all other Persons.' The word 'slave' is not there. The euphemism is the design.",
              "Read Article I, Section 9 (slave trade). What did it protect, and for how long?",
              "Ask: the Thirteenth Amendment (1865) abolished slavery. The Fourteenth (1868) replaced three-fifths with full counting. Why did it take two amendments and a Civil War to undo what the compromise built in?",
              "Reflect: the Constitution embedded slavery without naming it. The euphemism — 'all other Persons' — let the founders avoid saying what they were protecting. Is euphemism a design choice or a moral evasion? Can it be both?",
            ],
          },
        ],
        dinnerQuestion: "The Constitution embedded slavery without using the word 'slave.' What does it mean that the founders built slavery into the structure and refused to name it?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Did the Constitution protect slavery?' If it says no, read Article I, Sections 2 and 9. If it says yes, ask: 'How?' The answer is the two clauses and the euphemism." },
        ],
        ifTheySay: [
          {
            heard: "The three-fifths clause was racist.",
            reply: "It was a deal about power, not a statement about race. The North wanted enslaved people to not count at all. The South wanted them to count fully. The compromise was three-fifths. The deal was not about whether enslaved people were three-fifths of a human — it was about how many seats the South got. But the deal protected slavery by giving slave states extra representation. The effect was racist, even if the mechanism was political. Both things are true: the clause was about power, and it protected a racist institution. Reducing it to 'racist' without understanding the politics flattens the history. Understanding the politics without naming the racism flattens the morality. Hold both.",
          },
        ],
        integrity: "Do not let the model smooth the three-fifths clause into a one-sentence summary. Read Article I, Sections 2 and 9. The specific language — 'all other Persons,' the 20-year protection — is the history. The model's summary will smooth the euphemism. The euphemism is the design.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'How did the Constitution handle slavery?' If it says 'the three-fifths compromise,' ask: 'What else?' The slave trade clause (Article I, Section 9) is the other half. If the model does not mention it, that is a gap. The gap is the lesson.",
          evaluate: [
            "Can they explain both the three-fifths clause and the slave trade clause?",
            "Do they understand the euphemism ('all other Persons') and why it matters?",
            "Can they hold both: the clause was about power, and it protected slavery?",
          ],
        },
      },
      adult: {
        title: "The Three-Fifths Compromise and the Euphemism That Built It",
        dek: "The Constitution embedded slavery in its structure without ever using the word. The euphemism — 'all other Persons' — is the design. The legacy took a Civil War and three amendments to begin to undo.",
        objective:
          "The parent can explain the three-fifths compromise and the slave trade clause, the euphemism the Constitution used to avoid naming slavery, the structural legacy of both clauses, and the chain of amendments and struggle needed to undo what the compromise built in.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the hardest truth about the Constitution: it protected slavery in its structure, and it did so without naming it. The three-fifths clause (Article I, Section 2) and the slave trade clause (Article I, Section 9) embedded slavery in the apportionment and trade systems. The word 'slave' does not appear in the Constitution. The founders used euphemisms — 'all other Persons' — to build slavery into the structure while avoiding the moral confrontation of naming what they were protecting. The parent should teach that this euphemism is not incidental. It is the design. The founders knew what they were protecting. They chose not to say so. The Thirteenth, Fourteenth, and Fifteenth Amendments — and the Civil War that made them possible — were the cost of undoing what the compromise built in.",
        hardEdges: [
          "The euphemism is the design, not an oversight. The founders who built slavery into the Constitution without naming it knew what they were doing.",
          "The three-fifths compromise gave slave states overrepresentation in Congress and the Electoral College for decades. This is not a minor effect. It shaped American politics from ratification to the Civil War.",
        ],
        reading: [
          {
            heading: "The euphemism and the structure",
            body: "The Constitution does not use the word 'slave.' It says 'all other Persons.' This is not an accident. The founders who drafted the Constitution — many of whom owned slaves — knew that naming slavery would expose the contradiction between 'We the People' and the institution they were protecting. The euphemism let them build slavery into the structure without confronting what they were doing. The three-fifths clause (Article I, Section 2) counted enslaved people as three-fifths for representation — giving slave states extra seats based on people they treated as property. The slave trade clause (Article I, Section 9) protected the international slave trade for 20 years. Together, these clauses embedded slavery in the Constitution's apportionment and trade systems. The effect was structural: slave states had disproportionate power in Congress and the Electoral College from 1789 to the Civil War. The Thirteenth Amendment (1865) abolished slavery. The Fourteenth (1868) replaced three-fifths with full counting. The Fifteenth (1870) prohibited denying the vote based on race. But the legacy of the compromise — decades of slave state overrepresentation, the political economy it protected, and the war it helped cause — is the cost of the deal. The founders made a deal. The country paid for it. The payment is not finished.",
          },
        ],
        bigIdea:
          "The Constitution embedded slavery without naming it. The euphemism — 'all other Persons' — is the design. The structural legacy took a Civil War and three amendments to begin to undo. The payment is not finished.",
        tryThis: [
          {
            title: "Find the euphemism",
            minutes: 40,
            steps: [
              "Search the Constitution for the word 'slave.' It is not there. Find 'all other Persons' in Article I, Section 2. Find the slave trade protection in Article I, Section 9.",
              "Ask: why did the founders avoid the word? What does the avoidance reveal about what they knew?",
              "Trace the undoing: Thirteenth Amendment (abolition, 1865). Fourteenth (equal protection, 1868). Fifteenth (voting rights, 1870). Why did each require a political struggle — and in the case of the Thirteenth, a war?",
              "Reflect: the euphemism let the founders build slavery in without naming it. The amendments had to name it to undo it. The naming was the beginning of the end. The not-naming was the protection. Both are the Constitution.",
            ],
          },
        ],
        dinnerQuestion: "The Constitution protected slavery without naming it. The amendments had to name it to undo it. What does it mean that the not-naming was the protection and the naming was the beginning of the end?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How did the Constitution handle slavery?' Then ask: 'Did it use the word?' The model will probably not mention the euphemism. The euphemism is the design the model's summary will smooth." },
          { label: "Thinking", note: "The Magna Carta chain: the charter said 'free men.' The Constitution said 'all other Persons.' Both documents built exclusion into their structure through language. The expansion from exclusion to inclusion is the chain — and it required struggle at every link." },
        ],
        ifTheySay: [
          {
            heard: "The founders were products of their time.",
            reply: "They were. And they knew what they were doing. The euphemism — 'all other Persons' instead of 'slaves' — is the evidence. You do not avoid a word unless you know what the word means and do not want to say it. The founders who built slavery into the Constitution without naming it were not ignorant of the contradiction. They were managing it. The management — the euphemism, the compromise, the 20-year protection — was a political achievement. It was also a moral evasion. Both are true. 'Products of their time' explains the compromise. It does not excuse it. The cost of the compromise was paid by the people the Constitution did not name — and by the country that fought a war to undo what the compromise built in.",
          },
        ],
        integrity: "Do not let the model smooth the euphemism. The Constitution does not say 'slave.' It says 'all other Persons.' The avoidance is the design. Read Article I, Sections 2 and 9. Then read the Thirteenth Amendment. The gap between them is the cost of the deal.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Does the Constitution mention slavery?' If it says no, that is technically true — the word does not appear. If it says yes, ask: 'Where?' The answer is the euphemism: 'all other Persons.' The gap between the word and the euphemism is the design.",
          evaluate: [
            "Can they explain both the three-fifths clause and the slave trade clause?",
            "Do they understand the euphemism and why it matters?",
            "Can they trace the undoing through the Thirteenth, Fourteenth, and Fifteenth Amendments?",
            "Do they understand that the cost of the compromise was structural, not incidental?",
          ],
        },
      },
    },
  }),

  // ── 4. The Living Document ────────────────────────────────────────
  ...expand({
    slug: "living-document",
    subject: "history",
    unit: "The Constitution — Design and Compromise",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Document That Changes",
        dek: "The Constitution has been changed 27 times. The first 10 changes were the Bill of Rights. The changes are the story of a country learning what 'We the People' means.",
        objective:
          "The student can explain what an amendment is and why the Constitution was designed to be changeable.",
        parentBriefing:
          "This sitting is about the amendment process — the Constitution's built-in capacity for change. The founders knew the document was not perfect. They built in a process to fix it: amendments. The first 10 amendments (the Bill of Rights) were added in 1791. There have been 27 amendments total. Each amendment is a story of the country learning what 'We the People' means — expanding who counts, what rights are protected, and how power is limited. The student should understand that the Constitution is not a fixed text. It is a living document — changed by the people who inherit it.",
        hardEdges: [
          "The amendment process is intentionally difficult. Most proposed amendments do not pass. The difficulty is the design — changes should be hard, not easy.",
          "The Constitution has not been amended since 1992. The difficulty of amendment is a feature and a cost.",
        ],
        reading: [
          {
            heading: "What an amendment is",
            body: "An amendment is a change to the Constitution. The founders built in a way to change it because they knew it was not perfect. Article V says how: two-thirds of Congress must propose the amendment, and three-fourths of the states must ratify it. That is hard. It is supposed to be hard. The founders wanted changes to be deliberate, not rushed. The first 10 amendments — the Bill of Rights — were added in 1791, two years after the Constitution took effect. The Anti-Federalists demanded them as the price of ratification. There have been 27 amendments total. Each one is a story of the country deciding the Constitution needed to say something it did not say.",
          },
        ],
        bigIdea:
          "The Constitution was designed to be changeable. 27 amendments — each one a story of the country learning what 'We the People' means.",
        tryThis: [
          {
            title: "List the amendments",
            minutes: 18,
            steps: [
              "List three amendments you know. (Hint: First Amendment = free speech. Thirteenth = abolished slavery. Nineteenth = women's vote.)",
              "For each, write one sentence: what did the country learn that required this change?",
              "Talk About It: if the Constitution is designed to change, why is changing it so hard?",
            ],
          },
        ],
        dinnerQuestion: "If the Constitution has been changed 27 times, what does that tell you about the founders' idea of 'We the People'?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'the Constitution can change.' The check is Article V — the process that makes change possible and hard." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution should never change.",
            reply: "The founders disagreed. They built in a process to change it (Article V) because they knew it was not perfect. The Thirteenth Amendment abolished slavery. The Nineteenth gave women the vote. These changes were not betrayals of the Constitution. They were the Constitution working as designed — the country learning what 'We the People' means and expanding who 'the People' includes. A Constitution that cannot change is a museum piece. A Constitution that can change is a living document. The founders chose the living document.",
          },
        ],
        integrity: "Do not let the model present the Constitution as fixed. It has been amended 27 times. Each amendment is a change. The changes are the story.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'How many amendments does the Constitution have?' (27.) Then ask: 'What do the amendments do?' The pattern: they expand rights, fix problems, and clarify powers.",
          evaluate: [
            "Can they explain what an amendment is?",
            "Can they name at least three amendments and what they did?",
          ],
        },
      },
      emerging: {
        title: "The Living Document: 27 Amendments and the Chain of Expansion",
        dek: "The Constitution was designed to be changeable. 27 amendments — from the Bill of Rights to the Thirteenth to the Nineteenth — trace the chain of who 'We the People' includes.",
        objective:
          "The student can explain the amendment process (Article V), trace the chain of amendments that expanded rights and inclusion, and understand the tension between the Constitution's fixity and its capacity for change.",
        parentBriefing:
          "This sitting connects the amendment process to the chain of expansion — the same chain that runs from Magna Carta through the Fifth Amendment through the Civil Rights movement. The Constitution was designed to be changeable (Article V). The amendments trace the expansion of who counts: the Bill of Rights (1791) protected individual liberties. The Thirteenth (1865) abolished slavery. The Fourteenth (1868) guaranteed equal protection. The Fifteenth (1870) prohibited racial voting discrimination. The Nineteenth (1920) gave women the vote. The Twenty-Sixth (1971) lowered the voting age. Each amendment is a link in the chain of expansion. The student should understand that the Constitution's capacity for change is not a weakness. It is the design — the mechanism by which the country learns what 'We the People' means.",
        hardEdges: [
          "The amendment process is intentionally difficult. Most proposed amendments fail. The difficulty prevents rash changes but also blocks necessary ones.",
          "The Constitution has not been amended since 1992. The difficulty of amendment is both a feature (stability) and a cost (stagnation).",
        ],
        reading: [
          {
            heading: "The chain of amendments",
            body: "Article V sets the process: two-thirds of Congress proposes, three-fourths of the states ratify. It is deliberately hard. The founders wanted changes to be deliberate, not impulsive. The 27 amendments trace the chain of expansion. The Bill of Rights (1791): the Anti-Federalists' price — individual liberties the Constitution did not explicitly protect. The Thirteenth (1865): abolition — the undoing of what the three-fifths compromise built in. The Fourteenth (1868): equal protection — the promise that the states cannot deny citizens the rights the federal government guarantees. The Fifteenth (1870): racial voting rights — the expansion of 'We the People' to include Black men. The Nineteenth (1920): women's suffrage — the expansion to include women. The Twenty-Sixth (1971): voting age lowered to 18 — the expansion to include young adults. Each amendment is a link in the chain of who counts. The Constitution was written by and for about 6% of the population (white male property owners). The amendments expanded it. The expansion is the story. It is not finished.",
          },
        ],
        bigIdea:
          "The amendments trace the chain of who 'We the People' includes. The Constitution was written for about 6% of the population. The amendments expanded it. The expansion is the story. It is not finished.",
        tryThis: [
          {
            title: "Trace the expansion",
            minutes: 30,
            steps: [
              "List at least five amendments: Bill of Rights (1791), Thirteenth (1865), Fourteenth (1868), Fifteenth (1870), Nineteenth (1920).",
              "For each, write: who was included that was not included before?",
              "Ask: the Constitution was written by and for about 6% of the population. How many amendments did it take to expand 'We the People' to include most adults? (Answer: at least 5, and the expansion is still ongoing.)",
              "Reflect: the amendment process is hard. Most proposed amendments fail. Is the difficulty a feature (stability) or a cost (stagnation)? Can it be both?",
            ],
          },
        ],
        dinnerQuestion: "The Constitution was written for about 6% of the population. The amendments expanded it. Who is still waiting to be included?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How has the Constitution changed?' The model will list amendments. Then ask: 'What do the amendments have in common?' The answer: expansion of who counts. The pattern is the lesson." },
          { label: "Thinking", note: "The Magna Carta chain: the charter said 'free men.' The Constitution said 'We the People.' The amendments expanded both. The chain is the expansion. The expansion is the story." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution hasn't changed in a long time.",
            reply: "The last amendment was 1992 — over 30 years ago. The difficulty of amendment is a feature (stability) and a cost (stagnation). The founders made change hard because they feared impulsive changes. But the difficulty also means that necessary changes — like expanding voting rights protections, or addressing the Electoral College, or updating the Second Amendment for modern weapons — may be impossible. The amendment process is a design choice with a cost. The cost is that the Constitution may not keep up with the country. The benefit is that the Constitution does not swing with every political wind. The question is whether the balance is right — and that is a question the founders left to every generation.",
          },
        ],
        integrity: "Do not let the model present the amendments as a smooth story of progress. Each amendment was contested. The Thirteenth required a war. The Nineteenth took 70 years of activism. The amendments are the story of struggle, not the story of automatic progress.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the amendments in three sentences.' Then ask: 'What did you skip?' The model will skip the struggle. Each amendment was a fight. The fights are the story.",
          evaluate: [
            "Can they explain the amendment process (Article V)?",
            "Can they trace the chain of expansion through at least five amendments?",
            "Do they understand that the expansion was contested, not automatic?",
            "Can they identify where the expansion is still ongoing?",
          ],
        },
      },
      adult: {
        title: "The Living Document: The Chain and the Cost of Change",
        dek: "The Constitution was designed to be changeable. 27 amendments trace the expansion of who counts. The difficulty of change is both the Constitution's strength (stability) and its weakness (stagnation). The chain is not finished.",
        objective:
          "The parent can explain the amendment process, trace the chain of amendments that expanded rights and inclusion, understand the tension between stability and stagnation, and identify where the chain is still being built.",
        parentBriefing:
          "This is the capstone of the Constitution unit. The parent should understand that the Constitution's capacity for change is its most important feature — and its most contested. The amendments trace the expansion of who counts, from the Bill of Rights through abolition through women's suffrage through the voting age amendment. Each amendment was a struggle. The Thirteenth required a war. The Nineteenth took 70 years of activism. The amendment process is intentionally difficult — most proposed amendments fail. The difficulty is a feature (stability, deliberation) and a cost (stagnation, the inability to address problems that need fixing). The Constitution has not been amended since 1992. The question of whether the amendment process is too hard — whether the Constitution can keep up with the country — is a live political question. The parent should leave the unit understanding that the Constitution is a living document — not because it changes on its own, but because people fight to change it.",
        hardEdges: [
          "The amendment process has not produced a successful amendment since 1992. That is the longest gap since the Bill of Rights. The difficulty of amendment is a design choice with a cost.",
          "The expansion of 'We the People' is not finished. The Constitution was written for about 6% of the population. The amendments expanded it. But the expansion — of voting rights, of equal protection, of who counts — is ongoing.",
        ],
        reading: [
          {
            heading: "The chain, the cost, and the next link",
            body: "The Constitution's 27 amendments trace the chain of expansion: who counts, what rights are protected, how power is limited. The Bill of Rights (1791) protected individual liberties. The Thirteenth (1865) abolished slavery — the undoing of what the three-fifths compromise built in. The Fourteenth (1868) guaranteed equal protection — the foundation of modern civil rights law. The Fifteenth (1870) prohibited racial voting discrimination. The Nineteenth (1920) gave women the vote. The Twenty-Sixth (1971) lowered the voting age. Each amendment was a link in the chain of who 'We the People' includes. The chain runs from Magna Carta (free men) through the Constitution (We the People) through the amendments (expanding who 'the People' means) to the ongoing struggles for inclusion today. The Constitution was written for about 6% of the population. The amendments expanded it. The expansion required war (Thirteenth), activism (Nineteenth), and political struggle (every amendment). The Constitution is a living document — not because it changes on its own, but because people fight to change it. The chain is not finished. The question is whether the amendment process is still capable of producing change — or whether the difficulty has become a cost the country cannot afford.",
          },
        ],
        bigIdea:
          "The Constitution is a living document because people fight to change it. The 27 amendments trace the expansion of who counts. The chain is not finished. The question is whether the amendment process is still capable of change — or whether the difficulty has become stagnation.",
        tryThis: [
          {
            title: "The next link",
            minutes: 40,
            steps: [
              "Trace the chain: Magna Carta (free men, 1215) → Constitution (We the People, 1787) → Bill of Rights (individual liberties, 1791) → Thirteenth (abolition, 1865) → Fourteenth (equal protection, 1868) → Nineteenth (women's vote, 1920) → Twenty-Sixth (voting age, 1971). Each link expanded who counts.",
              "Ask: who is still waiting to be included? What right is still being expanded? Who is doing the work?",
              "Reflect: the Constitution has not been amended since 1992. Is the amendment process working? Or has the difficulty become a cost?",
              "Ask: the chain from Magna Carta to today is the chain of interpretation, expansion, and defense. Are you part of the chain? What happens if no one picks it up?",
            ],
          },
        ],
        dinnerQuestion: "The Constitution has not been amended since 1992 — the longest gap since the Bill of Rights. Is the amendment process working as designed, or has the difficulty become a cost the country cannot afford?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is the Constitution a living document?' Then ask: 'What does 'living' mean — changing on its own, or being changed by people?' The answer is: being changed by people. The living is the fighting." },
          { label: "Philosophy", note: "The Magna Carta chain: a text survives through use. The Constitution is the same. The text is 230 years old. The amendments are the people picking it up and using it. The chain is the story. The story is the work." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is a living document that adapts.",
            reply: "It does not adapt on its own. It is adapted — by people who fight to change it. The Thirteenth Amendment required a war. The Nineteenth took 70 years of activism. The 'living' is not organic growth. It is political struggle. The Constitution changes when people demand change, organize for it, and force the amendment process to work. When people stop demanding, the Constitution stops changing. The gap since 1992 is not because the country has no problems to solve. It is because the amendment process is so difficult that the problems go unsolved. The Constitution is a living document — but 'living' means 'fought for,' not 'self-updating.' The chain from Magna Carta to today is the chain of people who fought to make the text mean more than it said. The chain is not finished. The question is who picks it up next.",
          },
        ],
        integrity: "Do not let the model present the amendments as smooth progress. Each amendment was a fight — some required war, some required decades of activism, all required political struggle. The 'living document' is not a self-updating text. It is a text changed by people who fight. Read the amendments. Read the history of each. The struggle is the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'How does the Constitution stay relevant?' Then ask: 'What did the model assume?' The model assumes the text adapts. The text does not adapt. People adapt it — through amendment, interpretation, and enforcement. The 'living' is the people, not the text.",
          evaluate: [
            "Can they trace the chain of amendments from the Bill of Rights through the Twenty-Sixth?",
            "Do they understand that each amendment was a struggle, not automatic progress?",
            "Can they identify where the chain is still being built?",
            "Do they understand that 'living document' means 'changed by people,' not 'self-updating'?",
          ],
        },
      },
    },
  }),
];

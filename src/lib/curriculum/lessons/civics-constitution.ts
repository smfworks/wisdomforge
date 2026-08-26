import { expand } from "./factory";

export const constitutionLessons = [
  // ── 1. Philadelphia, Summer of 1787 ────────────────────────────────
  ...expand({
    slug: "philadelphia-1787",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Room No One Could Leave",
        dek: "Fifty-five men shut the doors and argued for a whole summer. They were supposed to fix the old government. They built a new one.",
        objective:
          "The student can tell the story of the Constitutional Convention: why it was called, what happened behind closed doors, and what it produced.",
        parentBriefing:
          "This sitting tells the story of the Constitutional Convention honestly. The delegates went to Philadelphia to fix the Articles of Confederation, not to write a new Constitution. The Articles had failed: the national government could not tax, could not enforce laws, could not pay its debts, could not defend the country. Shays' Rebellion — an armed uprising in Massachusetts — showed everyone the system was broken. But the delegates were not supposed to start over. They were supposed to amend the Articles. Instead, they locked the doors, took an oath of secrecy, and designed an entirely new government. That was a kind of quiet revolution — not against a king, but against their own first attempt at self-government. The student should understand that the Constitution was designed, debated, and compromised into existence. It was not handed down. It was not inevitable. It nearly did not happen.",
        hardEdges: [
          "Do not present the Convention as a smooth, unified effort. The delegates disagreed bitterly about representation, slavery, and executive power.",
          "Do not skip the secrecy. The doors were locked and the windows were shuttered. The delegates took an oath. This was not a public process.",
        ],
        reading: [
          {
            heading: "Why they were there",
            body: "In 1787, the United States was not really a nation. It was thirteen states in a loose alliance called the Articles of Confederation. The Articles had no President, no courts, no power to tax. Congress could ask states for money, but states could refuse — and often did. The country owed money from the Revolutionary War it could not pay. States were taxing each other's goods and fighting over trade. Then a farmer named Daniel Shays led an armed rebellion in Massachusetts, and the national government could not raise an army to stop it. Something had to change.",
          },
          {
            heading: "What happened in the room",
            body: "Twelve states sent delegates to Philadelphia (Rhode Island refused to come). They were told to revise the Articles. Instead, they decided the Articles could not be fixed. They locked the doors, swore an oath of secrecy, and started over. George Washington presided. James Madison took notes. Benjamin Franklin, 81 years old, had to be carried in on a chair. They argued for four months about how to build a government strong enough to work but not strong enough to tyrannize. The result was the Constitution — seven articles, four pages, the oldest written national constitution still in force.",
          },
        ],
        bigIdea:
          "The Constitution was designed, not extracted. Men sat in a locked room and argued for a summer. What they produced was not inevitable — it nearly failed.",
        tryThis: [
          {
            title: "The locked room",
            minutes: 20,
            steps: [
              "Draw the room: 55 delegates, doors locked, windows shut. Label who is there (Washington presiding, Madison taking notes, Franklin in a chair).",
              "Write three problems the Articles had: no power to tax, no power to enforce, no power to defend. These are the reasons they started over.",
              "Talk About It: they were told to fix the old government and they built a new one instead. Was that legal? Was it right? What gives a group the authority to start over?",
            ],
          },
        ],
        dinnerQuestion:
          "If you were locked in a room for four months and told to design a government, what would be the first rule you would write?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Convention notes are Madison's. The Constitution is the product. Read the product first, then the notes." },
          { label: "AI", note: "Ask the model to summarize the Constitutional Convention. Then ask: 'What did the summary leave out?' The secrecy, the lockout, the starting over — these are the story." },
        ],
        ifTheySay: [
          {
            heard: "The Founding Fathers all agreed on the Constitution.",
            reply: "They did not. The Convention was a battle. Large states wanted proportional representation. Small states wanted equal representation. The South wanted slaves counted for representation. The North did not. Some wanted a strong President. Others feared monarchy. The final document was a series of compromises — the Great Compromise (House by population, Senate equal), the three-fifths compromise, the Electoral College. Rhode Island did not even come. The Constitution passed by narrow margins in several states.",
          },
          {
            heard: "They went there to write the Constitution.",
            reply: "They did not. They went to fix the Articles of Confederation. The Articles were the first American government, and they were failing. The delegates were authorized to amend the Articles, not to replace them. They decided the Articles could not be fixed and started over. That decision was a quiet revolution — a group of men deciding to ignore their instructions and design a new government. Whether that was legal is still debated. Whether it was necessary is clearer: the country was falling apart.",
          },
        ],
        integrity:
          "Do not let the model present the Convention as a smooth, unified effort. Read Madison's notes (or a summary). The disagreements are the story. The compromises are the product.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What happened at the Constitutional Convention?' If it says 'the Founders created the Constitution,' that is a summary. Ask: 'What did they actually disagree about?' The disagreements — representation, slavery, executive power — are the Constitution.",
          evaluate: [
            "Can they tell the story of the Convention: why it was called, what happened, what it produced?",
            "Do they know the Articles failed and the delegates started over?",
            "Do they understand the Convention was behind closed doors with sworn secrecy?",
          ],
        },
      },
      emerging: {
        title: "Philadelphia: Designed, Not Extracted",
        dek: "The Constitution is the oldest written national constitution in the world. It was drafted in secret by men who exceeded their authority, produced through compromise, and ratified by narrow margins.",
        objective:
          "The student can explain the historical context of the Constitutional Convention, why the Articles of Confederation failed, and how the Constitution was designed through compromise behind closed doors.",
        parentBriefing:
          "This sitting grounds the Constitution in its actual history. The student needs to understand three things. First, the Articles of Confederation failed because they were too weak — no taxing power, no executive, no judiciary, no ability to enforce laws or defend the nation. Shays' Rebellion (1786) was the catalyst: an armed uprising the national government could not stop. Second, the Convention exceeded its authority. Delegates were sent to amend the Articles. They locked the doors, swore secrecy, and designed a new government. This was a quiet revolution — legal or not, it was a deliberate choice to start over. Third, the Constitution was a series of compromises: the Great Compromise (bicameral legislature), the three-fifths compromise (slaves counted as three-fifths for representation), the Electoral College (indirect presidential election), and the Commerce Clause compromise (20-year ban on banning the slave trade). Each compromise resolved one dispute and created new problems. The student should understand that the Constitution was designed — not discovered, not handed down, not inevitable.",
        hardEdges: [
          "Do not present the Convention as authorized. The delegates were sent to amend the Articles, not to replace them. Starting over was a decision, not a mandate.",
          "Do not skip the compromises. The Great Compromise, the three-fifths compromise, and the Electoral College were political deals, not philosophical principles. Each deal had consequences.",
          "Do not present ratification as easy. The Constitution passed 187-168 in Massachusetts, 89-79 in Virginia, 30-27 in New York. It barely won.",
        ],
        reading: [
          {
            heading: "The failure of the Articles",
            body: "The Articles of Confederation (1781) created a government so weak it could not function. No President, no courts, no power to tax. Congress could request money from states but could not compel payment. States taxed each other's goods, fought over trade, and ignored federal law. The national debt from the Revolutionary War was unpaid. Foreign policy was impossible: the British occupied forts in the Northwest Territory, the Spanish closed the Mississippi to American shipping, and the national government had no army and no money to respond. Shays' Rebellion (1786) — an armed uprising of farmers in Massachusetts facing debt and foreclosure — was put down by state militia, not federal forces. The national government stood by, unable to act. The lesson was clear: a government that cannot enforce its laws, defend its borders, or pay its debts is not a government.",
          },
          {
            heading: "The Convention that exceeded its mandate",
            body: "The delegates who arrived in Philadelphia in May 1787 were sent by their states to revise the Articles of Confederation. That was their instruction. Instead, they locked the doors of the Pennsylvania State House, took an oath of secrecy, and decided the Articles could not be fixed. They would design a new government. James Madison had arrived with a plan — the Virginia Plan — before the Convention began. The plan proposed a national government with three branches, a bicameral legislature with proportional representation, and a national executive and judiciary. It was a wholesale replacement of the Articles, not a revision. Whether the delegates had the authority to do this is debatable. Whether the country needed it is clearer: the Articles were failing, and everyone knew it. The Constitution was the product of men who decided their instructions were inadequate and acted on their own judgment.",
          },
          {
            heading: "The compromises that made it possible",
            body: "The Convention's biggest fights were about representation and slavery. Large states wanted representation proportional to population (the Virginia Plan). Small states wanted equal representation per state (the New Jersey Plan). The Great Compromise: a House of Representatives apportioned by population, and a Senate with two members per state regardless of size. The South wanted enslaved people counted for representation; the North did not. The three-fifths compromise: each enslaved person counted as three-fifths of a person for both representation and taxation. The South wanted protection for the slave trade; the North wanted to ban it. The compromise: a 20-year ban on banning the slave trade (until 1808). The President was to be chosen by an Electoral College, not by direct vote — a compromise between election by Congress and election by the people. Each compromise resolved a fight and created a legacy. The three-fifths compromise gave the slave states extra power for 80 years. The Electoral College has elected Presidents who lost the popular vote five times. The Senate's equal representation means Wyoming's 580,000 people have the same Senate power as California's 39 million. The compromises were political deals, not philosophical principles. Their consequences are still with us.",
          },
        ],
        bigIdea:
          "The Constitution was designed through compromise behind closed doors by men who exceeded their instructions. It was not inevitable, not unified, and not easy to ratify.",
        tryThis: [
          {
            title: "Map the compromises",
            minutes: 35,
            steps: [
              "List the three major compromises: Great Compromise (House proportional, Senate equal), three-fifths compromise (slaves counted as 3/5 for representation and taxation), Electoral College (indirect presidential election).",
              "For each compromise, write: what was the fight? What was the deal? What was the consequence?",
              "Find the ratification votes: Massachusetts 187-168, Virginia 89-79, New York 30-27. These are narrow margins. If one or two states had voted no, the Constitution might not have been adopted.",
              "Reflect: the delegates were sent to amend the Articles. They built a new government instead. Was that legitimate? What gives a group the authority to exceed its instructions?",
            ],
          },
        ],
        dinnerQuestion:
          "The Constitution was a series of political compromises. Which compromise had the most lasting consequences — and were those consequences good or bad?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Constitution is four pages. Read it. Madison's notes are the Convention. The Federalist Papers are the argument for ratification." },
          { label: "AI", note: "Ask the model to summarize the Constitutional Convention. Then ask: 'What compromises did it skip?' The model will smooth the disagreements. The disagreements are the story." },
          { label: "History", note: "Magna Carta was extracted from a king. The Constitution was designed by a convention. The charter was a list of limits. The Constitution is a structure. Both are responses to crisis." },
        ],
        ifTheySay: [
          {
            heard: "The Founding Fathers were geniuses who agreed on everything.",
            reply: "They were smart men who disagreed about almost everything. Large states vs. small states. National government vs. states' rights. Strong executive vs. weak executive. Slavery: count the enslaved for representation or not. The slave trade: protect it or ban it. The Convention was four months of arguments, not a gentleman's agreement. The Constitution that emerged was a series of compromises that every delegate had to accept something they did not want to get something they did. That is not genius. That is politics. The genius, if there is any, is in the design — the structure that has held for 230 years despite the compromises that almost broke it.",
          },
          {
            heard: "They had the right to throw out the Articles and start over.",
            reply: "They did not. They were instructed to amend the Articles of Confederation, not to replace them. The Articles required unanimous consent for amendment. The Convention produced a document that required only nine states to ratify — a deliberate lowering of the bar to make adoption possible. Whether the Convention had the authority to do this is a question that has never been fully settled. The answer most historians give is: they did not have the legal authority, but they had the practical necessity. The country was falling apart. The Articles could not fix it. Starting over was a gamble. It worked — barely. The Constitution passed by narrow margins in state conventions that excluded women, slaves, Native Americans, and the propertyless. The founding was not clean. It was a messy, contested, political act.",
          },
        ],
        integrity:
          "Do not let the model present the Convention as a smooth, unified effort or the Constitution as inevitable. Read Madison's notes. The disagreements are the story. The compromises are the product.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Summarize the Constitutional Convention in one paragraph.' Then ask: 'What did you leave out?' The model will skip the secrecy, the exceeded mandate, the compromises, the narrow ratification. Each omission is a piece of the story.",
          evaluate: [
            "Can they explain why the Articles failed?",
            "Do they understand the Convention exceeded its instructions?",
            "Can they name at least two compromises and their consequences?",
            "Do they know ratification was close in several states?",
          ],
        },
      },
      adult: {
        title: "Philadelphia: The Quiet Revolution",
        dek: "The Constitutional Convention was a quiet revolution — men who exceeded their instructions, locked the doors, and designed a new government. Understanding how it happened and what it produced is the foundation of constitutional literacy.",
        objective:
          "The parent can explain the historical context of the Constitutional Convention, the failure of the Articles, the compromises that made the Constitution possible, and the narrow margins through which it was ratified.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the founding honestly. The story has three layers. First, the Articles of Confederation failed because a government that cannot tax, enforce, or defend is not a government. Shays' Rebellion was the proof. Second, the Convention was a quiet revolution. Delegates instructed to amend the Articles locked the doors, swore secrecy, and designed a new government. The legality is debatable. The necessity is clearer. Third, the Constitution was a series of political compromises — the Great Compromise, the three-fifths compromise, the Electoral College, the 20-year ban on banning the slave trade — each of which resolved a dispute and created a legacy. The parent should understand that the Constitution is not a sacred text. It is a political document, produced through negotiation, ratified by narrow margins, and designed to be amended. Teaching it as sacred makes it harder to change. Teaching it as political — designed by fallible men through compromise — makes it possible to evaluate honestly, amend when needed, and defend when necessary.",
        hardEdges: [
          "Do not teach the Constitution as sacred or inevitable. It was a political document produced through compromise, ratified by narrow margins in conventions that excluded most of the population.",
          "Do not skip the three-fifths compromise or the slave trade compromise. These are not footnotes. They are the Constitution's original sin, and their consequences shaped American politics for 80 years.",
          "The delegates exceeded their instructions. This is not a minor point — it is the foundational question of constitutional authority. The Constitution was produced by men who decided their mandate was too small for the problem.",
        ],
        reading: [
          {
            heading: "The Articles and the crisis",
            body: "The Articles of Confederation (1781) created a 'firm league of friendship' among sovereign states — not a nation. There was no executive, no judiciary, no standing army, no power to tax, no power to regulate commerce. Congress could request money from states but could not compel payment. States imposed tariffs on each other's goods, fought over trade policy, and ignored federal law. The national debt from the Revolutionary War was mounting, and creditors were losing confidence. Foreign policy was impossible: the British occupied forts in the Northwest Territory, the Spanish closed the Mississippi, and the national government had no army and no money to respond. Shays' Rebellion (1786) was the breaking point: an armed uprising of farmers in Massachusetts, facing debt and foreclosure, that the national government could not stop. State militia put it down. The lesson was clear: a government that cannot enforce its laws or defend its people is not a government. The Philadelphia Convention was called to fix the Articles. It did something else.",
          },
          {
            heading: "The Convention and the compromises",
            body: "Fifty-five delegates from twelve states (Rhode Island refused to attend) arrived in Philadelphia in May 1787. They were instructed to amend the Articles. Instead, they locked the doors of the Pennsylvania State House, took an oath of secrecy, and designed a new government. The Convention was not public. The debates were not recorded officially (Madison's notes, published posthumously, are our primary source). The delegates argued for four months about representation, executive power, slavery, and the relationship between federal and state authority. The major compromises: the Great Compromise (House proportional, Senate equal — resolving the large-state/small-state fight), the three-fifths compromise (enslaved persons counted as three-fifths for representation and taxation — resolving the North/South fight at the cost of embedding slavery in the constitutional structure), the Electoral College (indirect presidential election — a compromise between election by Congress and direct popular vote), and the 20-year ban on banning the slave trade (a compromise with the slave states that delayed abolition). Each compromise was a political deal. Each had consequences that outlasted the men who made them. The three-fifths compromise gave slave states approximately 20 extra seats in the first Congress and extra Electoral College votes that helped Thomas Jefferson win the presidency in 1800. The Electoral College has elected Presidents who lost the popular vote five times. The Senate's equal representation means the smallest state has the same Senate power as the largest. These are not design flaws. They are political deals. Their consequences are the American constitutional tradition.",
          },
          {
            heading: "The ratification fight",
            body: "The Constitution was not popular. The Anti-Federalists — opponents of the new government — argued it gave too much power to the federal government, lacked a bill of rights, and created a President who was 'a king in everything but name.' The Federalist Papers (85 essays by Hamilton, Madison, and Jay) were written to persuade New York to ratify. The vote was 30-27 — a margin of three. In Massachusetts, it was 187-168. In Virginia, 89-79. Rhode Island did not ratify until 1790, after the new government was already operating, by a vote of 34-32. The Constitution was ratified by narrow margins in conventions that excluded women, slaves, Native Americans, and (in most states) the propertyless. It was not a popular mandate. It was a political victory — hard-won and narrow. The Bill of Rights was the price of that victory: Madison promised to add amendments to secure the individual rights the Anti-Federalists demanded. The Bill of Rights is therefore the Anti-Federalists' legacy — the product of the losing side in the ratification debate.",
          },
        ],
        bigIdea:
          "The Constitution was a political document, not a sacred text. It was designed through compromise by men who exceeded their instructions, ratified by narrow margins in exclusionary conventions, and designed to be amended. Teaching it as sacred makes it harder to change. Teaching it honestly makes it possible to defend.",
        tryThis: [
          {
            title: "Read the document, then the compromises",
            minutes: 40,
            steps: [
              "Read the Constitution. It is four pages. The Preamble, seven articles, and the amendments. Read it before reading about it.",
              "List the four major compromises: Great Compromise, three-fifths, Electoral College, slave trade. For each: what was the fight, what was the deal, what was the consequence?",
              "Find the ratification margins: Massachusetts 187-168, Virginia 89-79, New York 30-27, Rhode Island 34-32. These are narrow. If two states had voted no, the Constitution might not have been adopted.",
              "Reflect: the delegates exceeded their instructions. The Constitution requires nine states to ratify (Article VII), but the Articles required unanimous consent. The Convention deliberately lowered the bar. Was that legitimate? What gives a group the authority to change the rules for adopting a government?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Constitution was a series of political compromises, ratified by narrow margins in conventions that excluded most of the population, what is its claim to authority? Is it the document, the process, or the principle?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Constitution is four pages. Read it. Madison's notes are the Convention. The Federalist Papers are the argument for ratification. Each is a different kind of source." },
          { label: "AI", note: "Ask the model: 'Was the Constitutional Convention legal?' Then ask: 'What did your answer assume?' The model will give a position. The honest answer is: debatable, but practically necessary. The gap between legal and necessary is the story." },
          { label: "History", note: "Magna Carta was extracted from a king at swordpoint. The Constitution was designed by a convention behind closed doors. The charter was forced. The Constitution was chosen. Both responded to crisis. Both produced documents that outlasted their creators." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is a sacred document that should never be changed.",
            reply: "The framers did not think it was sacred. Jefferson wrote that laws and institutions must go hand in hand with the progress of the human mind. Madison expected the Constitution to be amended regularly — that is why he built Article V. The document has been changed 27 times. The 13th Amendment abolished slavery. The 14th granted equal protection. The 19th enfranchised women. Each amendment corrected a flaw in the original. Treating the Constitution as sacred makes it harder to amend — which is exactly what those who benefit from the status quo want. The framers designed a document to be amended, not worshipped. Honoring the framers means using the tools they gave us, not freezing the document in 1787.",
          },
          {
            heard: "The Founding Fathers had the authority to write the Constitution.",
            reply: "They did not. They were instructed to amend the Articles, not to replace them. The Articles required unanimous consent for any change. The Convention produced a document requiring only nine states to ratify — a deliberate lowering of the bar to make adoption possible. Whether this was legal is debatable. Whether it was necessary is clearer: the Articles had failed, and the country was falling apart. The framers made a judgment call: follow the rules and let the country fail, or break the rules and build something that works. They chose the latter. That choice is the foundation of constitutional authority — not legal purity, but practical necessity accepted by enough people to make it stick. The Constitution's authority does not come from the process that produced it. It comes from 230 years of people accepting it as legitimate. That acceptance is the real foundation. And it can be withdrawn.",
          },
        ],
        integrity:
          "Do not let the model present the Constitution as sacred, inevitable, or uniformly supported. Read the document. Read Madison's notes. Read the ratification margins. The Constitution is a political document, produced through compromise, ratified narrowly. Its authority comes from acceptance, not from the process that created it.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Was the Constitutional Convention legitimate?' Then ask: 'What did your answer assume?' The model will take a position. The honest answer is: legally debatable, practically necessary. The gap between legal and necessary is the founding. Then ask: 'What compromises did the Convention make?' The model will list some. Ask: 'What consequences did each have?' The consequences are the story.",
          evaluate: [
            "Can they explain why the Articles failed and why the Convention was called?",
            "Do they understand the Convention exceeded its instructions and that this is the foundational question of constitutional authority?",
            "Can they name the major compromises and trace their consequences?",
            "Do they know the ratification margins and understand the Constitution was not a popular mandate?",
          ],
        },
      },
    },
  }),

  // ── 2. Power Against Power ────────────────────────────────────────
  ...expand({
    slug: "power-against-power",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Ambition Against Ambition",
        dek: "If men were angels, no government would be needed. They are not angels. So the Constitution makes power fight power.",
        objective:
          "The student can explain what separation of powers means and why the Constitution divides government into three branches that can check each other.",
        parentBriefing:
          "This sitting is about the Constitution's central design: power divided so that no single branch can dominate. The framers did not trust government. They did not trust people. They trusted structure. Madison wrote in Federalist 51: 'If men were angels, no government would be necessary.' Since men are not angels, government is necessary — and since the people in government are not angels either, government must be designed so that its parts check each other. The result: three branches (Congress makes laws, the President enforces them, the courts interpret them), each with tools to resist the others. The President can veto Congress. Congress can override the veto, impeach the President, and confirm or reject appointments. The courts can strike down unconstitutional laws. The system is designed so that 'ambition must be made to counteract ambition.' Each branch guards its own power, and in doing so, limits the others. The student should understand that the Constitution's design is not about trust. It is about distrust — structured so that competing ambitions produce balance.",
        hardEdges: [
          "Do not present separation of powers as perfectly clean. The branches share powers: the President can legislate through executive orders, Congress can investigate, the courts can make policy through interpretation.",
          "The system is slow by design. The framers preferred slowness to tyranny. A government that cannot act quickly is less dangerous than one that can.",
        ],
        reading: [
          {
            heading: "Three branches, three powers",
            body: "The Constitution divides government into three branches. Congress (Article I) makes the laws. The President (Article II) enforces the laws and commands the military. The courts (Article III) interpret the laws and decide if they are constitutional. Each branch has its own power. No branch can do everything. Congress cannot enforce laws — that is the President's job. The President cannot make laws — that is Congress's job. The courts cannot make laws or enforce them — they can only interpret. This division is the separation of powers.",
          },
          {
            heading: "Why they check each other",
            body: "Separation alone is not enough. Each branch also has tools to stop the others. The President can veto a law Congress passed. Congress can override the veto with a two-thirds vote. Congress can impeach the President. The President appoints judges, but the Senate must approve. The courts can strike down laws that violate the Constitution. This is called checks and balances. Madison wrote: 'Ambition must be made to counteract ambition.' Each branch wants more power. The design uses that ambition — each branch guards its own power by stopping the others from taking it.",
          },
        ],
        bigIdea:
          "The Constitution divides power so that no branch can dominate. Each branch checks the others. The design is based on distrust, not trust.",
        tryThis: [
          {
            title: "Draw the checks",
            minutes: 18,
            steps: [
              "Draw three boxes: Congress, President, Courts. Draw arrows between them showing who can stop whom.",
              "Write one check for each branch: President can veto Congress, Congress can impeach the President, Courts can strike down unconstitutional laws.",
              "Talk About It: why does the system need checks? What would happen if one branch had all the power? Name a country where one person has all the power. What is different?",
            ],
          },
        ],
        dinnerQuestion:
          "If 'ambition must be made to counteract ambition,' what happens when the branches stop checking each other and start cooperating too much?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'power is divided.' The check is whether the division actually prevents concentration." },
        ],
        ifTheySay: [
          {
            heard: "The government is too slow. We should just let the President act.",
            reply: "The government is slow by design. The framers wanted it slow. A government that can act quickly can also tyrannize quickly. The checks and balances — the veto, the override, the confirmation process, judicial review — are speed bumps. They make it hard to pass laws, hard to enforce them without oversight, and hard to change the rules. That is not a bug. It is the design. The framers had just fought a king who could act quickly. They did not want another one.",
          },
        ],
        integrity: "Do not let the model summarize checks and balances in one sentence. Read Federalist 51. Madison's argument is specific: ambition counteracts ambition.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'What are the checks and balances in the Constitution?' Then ask: 'Which check is the most important, and why?' Compare the model's answer to Federalist 51. What did it add? What did it smooth?",
          evaluate: [
            "Can they name the three branches and what each does?",
            "Can they give one example of a check each branch has on the others?",
            "Do they understand the system is designed for slowness, not speed?",
          ],
        },
      },
      emerging: {
        title: "Power Against Power: The Structural Design",
        dek: "The Constitution limits government not by listing prohibitions (like Magna Carta) but by dividing power so that each branch guards its own authority against the others. 'Ambition must be made to counteract ambition.'",
        objective:
          "The student can explain the separation of powers and checks and balances, trace the constitutional design to Montesquieu and Madison, and evaluate the modern challenges to the system.",
        parentBriefing:
          "This sitting takes the separation of powers seriously as a design choice. The student needs to understand three things. First, the principle: government power is divided among three branches so that no single branch can dominate. The source is Montesquieu's The Spirit of the Laws (1748), adapted by Madison in Federalist 47 and 51. Second, the mechanism: checks and balances. Each branch has tools to resist the others — veto, override, impeachment, confirmation, judicial review. Madison's argument in Federalist 51 is that 'ambition must be made to counteract ambition' — the design uses the self-interest of each branch to produce balance. Third, the tension: the system is slow by design. The framers preferred inefficiency to tyranny. The modern challenge is the growth of executive power — the administrative state, executive orders, military action without congressional declaration — which tests whether the structural design can contain a branch that has grown beyond what the framers anticipated.",
        hardEdges: [
          "Do not present separation of powers as absolute. The branches share powers: the President legislates through executive orders, Congress investigates and adjudicates through hearings, courts make policy through interpretation.",
          "Do not skip the Anti-Federalist critique. They warned that the branches would not stay separate — that the President would become a king, the Senate an aristocracy, and the courts an oligarchy. The system has held, but the warnings were not baseless.",
          "The modern administrative state — federal agencies that combine legislative, executive, and judicial functions — is the most serious challenge to separation of powers. Whether it is constitutional is a live debate.",
        ],
        reading: [
          {
            heading: "Montesquieu and Madison",
            body: "The separation of powers traces to Montesquieu's The Spirit of the Laws (1748): 'When the legislative and executive powers are united in the same person or body, there can be no liberty.' Madison adapted Montesquieu in Federalist 47 and 51. He argued that the Constitution's structure — not just the formal separation, but the system of checks and balances — would prevent tyranny. The key passage is Federalist 51: 'If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself. A dependence on the people is, no doubt, the primary control on the government; but experience has taught mankind the necessity of auxiliary precautions.' Those 'auxiliary precautions' are the checks and balances.",
          },
          {
            heading: "The checks",
            body: "The checks and balances are specific tools. The President checks Congress: veto. Congress checks the President: override veto (two-thirds), impeachment, control of spending, Senate confirmation of appointments and treaties. The President checks the judiciary: appoints judges. Congress checks the judiciary: establishes inferior courts, confirms judges, can impeach judges, can propose constitutional amendments to override judicial decisions. The judiciary checks both: judicial review — striking down unconstitutional laws and executive actions. The system is designed so that each branch has the tools and the incentive to resist encroachment by the others. 'Ambition must be made to counteract ambition' (Federalist 51). Each branch guards its own authority. In doing so, it limits the others. The result is not perfect separation — it is 'mixed government,' where each branch participates in the others' functions.",
          },
        ],
        bigIdea:
          "The Constitution limits government not by listing prohibitions but by dividing power. Each branch checks the others. The design uses ambition — each branch's desire for its own power — to produce balance. The system is slow by design.",
        tryThis: [
          {
            title: "Map the checks",
            minutes: 30,
            steps: [
              "Read Federalist 51. Find the passage: 'If men were angels, no government would be necessary.' Write what Madison means.",
              "List the checks: President on Congress (veto), Congress on President (override, impeachment, confirmation, spending), President on judiciary (appointments), Congress on judiciary (court creation, confirmation, impeachment, amendment), judiciary on both (judicial review).",
              "Find one modern example where a check was used: a presidential veto, a congressional impeachment, a Supreme Court decision striking down a law. What happened?",
              "Reflect: Madison wrote 'ambition must be made to counteract ambition.' Is that how the system works today? Or have the branches learned to cooperate in ways the framers did not intend?",
            ],
          },
        ],
        dinnerQuestion:
          "If the separation of powers is designed for slowness, what happens when the country faces a crisis that requires speed? Is there a way to be fast and safe?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Federalist 51 is the source. The model's summary of checks and balances is the summary. Read the source." },
          { label: "AI", note: "Ask the model: 'What are the checks and balances?' Then ask: 'Which check has weakened since 1787?' The model may not know. The honest answer is: some checks have eroded through practice, custom, and political norms." },
          { label: "History", note: "Magna Carta limited the king by listing prohibitions. The Constitution limits government by dividing power. The charter's approach was negative: 'the king shall not.' The Constitution's approach is structural: power is divided so that each branch guards its own authority against the others." },
        ],
        ifTheySay: [
          {
            heard: "The system is broken because nothing gets done.",
            reply: "The system is working as designed. The framers wanted it to be hard to pass laws. They had just fought a king who could pass whatever he wanted. The checks and balances — veto, override, confirmation, judicial review — are speed bumps. They make legislation difficult. That is not a bug; it is the design. The question is not whether the system is too slow. The question is whether the system is so slow that it cannot respond to real crises. The framers built emergency mechanisms — the President's commander-in-chief power, Congress's war power, the amendment process. The question is whether those mechanisms are sufficient for modern crises, or whether the system needs adjustment. That is a legitimate debate. But do not confuse slowness with brokenness. The slowness is the design.",
          },
          {
            heard: "The President has too much power now.",
            reply: "The Anti-Federalists predicted this. They warned that the President would become a king. The growth of executive power — through the administrative state (federal agencies), executive orders, and military action without a congressional declaration of war — is the most serious challenge to the separation of powers. The framers designed the President as an executor of laws, not a maker of them. But modern Presidents legislate through executive orders, regulate through agencies, and make war through military action. Whether this expansion violates the constitutional design is the central constitutional debate of the 21st century. The Anti-Federalists were not wrong to worry. They were early.",
          },
        ],
        integrity:
          "Do not let the model summarize checks and balances without citing Federalist 51. Madison's argument — ambition counteracts ambition — is the design. The model will list the checks. Madison explained why they work. Read both.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the checks and balances in the Constitution.' Then ask: 'What did Federalist 51 add that your summary did not?' The model lists checks. Madison explains the theory. The gap between the list and the theory is the lesson.",
          evaluate: [
            "Can they explain the separation of powers and checks and balances?",
            "Can they trace the design to Montesquieu and Madison?",
            "Do they understand the system is designed for slowness, not speed?",
            "Can they identify a modern challenge to the separation of powers?",
          ],
        },
      },
      adult: {
        title: "Power Against Power: The Design and Its Discontents",
        dek: "The separation of powers is the Constitution's central structural innovation. It has held for 230 years, but the growth of executive power and the administrative state tests whether the design can contain a branch that has grown beyond what the framers anticipated.",
        objective:
          "The parent can explain the separation of powers and checks and balances, trace the design to Montesquieu and Madison, and engage the modern debate about executive power and the administrative state.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Constitution's structural design honestly. The principle is simple: power divided so that no branch can dominate. The history is not simple. The framers adapted Montesquieu's theory into a system of 'mixed government' — not pure separation, but shared power and mutual restraint. The Anti-Federalists warned that the branches would not stay separate: the President would become a king, the Senate an aristocracy, the courts an oligarchy. The system has held for 230 years, but the Anti-Federalist warnings were not baseless. The growth of executive power — through the administrative state, executive orders, and military action without congressional declaration — is the most serious challenge to the design. The parent should understand that the separation of powers is not a finished system. It is an ongoing experiment in whether structure can contain ambition. The framers designed it. Every generation has to maintain it.",
        hardEdges: [
          "Do not present the separation of powers as perfectly maintained. The administrative state — federal agencies that combine legislative, executive, and judicial functions — is a structural challenge the framers did not anticipate.",
          "Do not let the Anti-Federalist warnings disappear. They predicted executive overreach, and their prediction has been partly borne out. The warnings are part of the constitutional tradition, not just opposition.",
          "The system is slow by design. The framers preferred inefficiency to tyranny. But the question of whether the system can respond to modern crises — pandemics, climate change, national security — without sacrificing the checks is a live debate.",
        ],
        reading: [
          {
            heading: "The design and its limits",
            body: "The separation of powers is the Constitution's central structural innovation. Montesquieu argued that 'when the legislative and executive powers are united in the same person or body, there can be no liberty.' Madison adapted this in Federalist 51: 'If men were angels, no government would be necessary.' The design: three branches, each with its own power, each with tools to check the others. The veto, the override, impeachment, confirmation, judicial review — these are the 'auxiliary precautions' Madison described. The design has held for 230 years. But it has never been perfectly maintained. The branches share powers: the President legislates through executive orders, Congress investigates and adjudicates through hearings, courts make policy through interpretation. The administrative state — federal agencies (FDA, EPA, OSHA, SEC) that combine legislative, executive, and judicial functions — is the most serious modern challenge. An agency writes regulations (legislative), enforces them (executive), and adjudicates violations (judicial) — all within the executive branch. Whether this is constitutional is a live debate. The Anti-Federalists predicted the President would become a king. The prediction was not wrong. It was early.",
          },
        ],
        bigIdea:
          "The separation of powers is an ongoing experiment in whether structure can contain ambition. The framers designed it. Every generation has to maintain it. The modern challenge is executive power and the administrative state — the most serious test of the design since the Civil War.",
        tryThis: [
          {
            title: "Read Federalist 51 and find the limits",
            minutes: 35,
            steps: [
              "Read Federalist 51 in full. Find: 'If men were angels, no government would be necessary... A dependence on the people is, no doubt, the primary control on the government; but experience has taught mankind the necessity of auxiliary precautions.' Write what Madison means by 'auxiliary precautions.'",
              "List the checks and balances. Then find one that has weakened or eroded through practice or custom. (Example: the congressional declaration of war has not been used since 1942; Presidents now use military force through authorization or unilateral action.)",
              "Find one example of the administrative state: a federal agency that writes, enforces, and adjudicates regulations. Is this separation of powers? Or is it concentration of power within the executive branch?",
              "Reflect: the Anti-Federalists predicted the President would become a king. Has the prediction come true? In what ways? In what ways has it not?",
            ],
          },
        ],
        dinnerQuestion:
          "If the separation of powers has held for 230 years but the executive branch has grown beyond what the framers anticipated, is the design failing or adapting? And who decides?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is the administrative state constitutional?' Then ask: 'What did your answer assume?' The model will take a position. The honest answer is: it depends on how you read the Necessary and Proper Clause and the separation of powers. The debate is the lesson." },
          { label: "History", note: "Magna Carta limited the king by listing prohibitions. The Constitution limits government by dividing power. The charter was a list of 'thou shalt nots.' The Constitution is a structure. The structural approach is more durable — a king can ignore a list, but a President cannot legislate without Congress. But the administrative state tests whether the structure can hold when the executive branch grows." },
        ],
        ifTheySay: [
          {
            heard: "The separation of powers is outdated. We need a more efficient government.",
            reply: "The Anti-Federalists wanted a more efficient government too — one that could not deadlock. The Federalists responded that efficiency is the path to tyranny. The separation of powers is slow by design. The question is not whether the design is efficient. The question is whether it is safe. A government that can act quickly can also oppress quickly. The framers had just fought a king who could act quickly. They built a system that cannot. If you want efficiency, you are asking for the thing the framers designed against. That is a legitimate position — but you should know what you are asking for. The Anti-Federalists warned about this too: they said the system would be too slow to respond to crises. They were right about the slowness. Whether the slowness is a feature or a bug is the permanent debate.",
          },
        ],
        integrity:
          "Do not let the model present the separation of powers as a clean, settled system. Read Federalist 51. Find the limits. The administrative state, executive orders, and military action without declaration of war are live challenges to the design. The design is not failing — it is being tested. The question is whether the checks can hold.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Is the separation of powers still working?' Then ask: 'What evidence did you use?' The model will give a position. Ask: 'What would the Anti-Federalists say?' The Anti-Federalist warnings — President as king, courts as oligarchy — are the test the design is still undergoing.",
          evaluate: [
            "Can they explain the separation of powers and checks and balances, citing Federalist 51?",
            "Can they identify at least one check that has weakened or eroded?",
            "Do they understand the administrative state as a challenge to the design?",
            "Can they engage the Anti-Federalist warnings as part of the constitutional tradition, not just opposition?",
          ],
        },
      },
    },
  }),

  // ── 3. The Bill of Rights: The Losers' Legacy ──────────────────────
  ...expand({
    slug: "bill-of-rights-losers-legacy",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Losers' List",
        dek: "The Bill of Rights exists because the people who lost the argument won the demand. The Constitution almost failed. The price of passing it was a list of things the government cannot do to you.",
        objective:
          "The student can explain why the Bill of Rights was added to the Constitution and what it protects.",
        parentBriefing:
          "This sitting tells a surprising story: the Bill of Rights was the demand of the losing side. The Anti-Federalists opposed the Constitution. They argued it gave the federal government too much power and did not protect individual rights. The Federalists said a bill of rights was unnecessary — the government only had the powers listed in the Constitution, so it could not violate rights it did not have. The Anti-Federalists lost the ratification fight. But their demand for a bill of rights was politically irresistible. Madison promised to add amendments during the First Congress. The result was the first ten amendments — the Bill of Rights. The student should understand that the Bill of Rights is the Anti-Federalists' legacy. The people who opposed the Constitution gave it its most famous part. The lesson is that losing a political fight does not mean losing the argument. Sometimes the losers shape the document more than the winners.",
        hardEdges: [
          "Do not present the Bill of Rights as something the Federalists wanted. They argued against it. It was the Anti-Federalists' price for ratification.",
          "The Bill of Rights originally applied only to the federal government, not the states. States could restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) changed this.",
        ],
        reading: [
          {
            heading: "Why it exists",
            body: "The Constitution was almost not ratified. Several states only agreed to pass it because Madison promised to add a list of individual rights. The Anti-Federalists — the people who opposed the Constitution — said the new government was too powerful. They wanted explicit protections: freedom of speech, freedom of religion, the right to a trial, protection from unreasonable searches. The Federalists said these were unnecessary. But the demand was too strong to ignore. Madison drafted the amendments. The first ten became the Bill of Rights in 1791.",
          },
          {
            heading: "What it says",
            body: "The First Amendment protects freedom of speech, religion, press, assembly, and petition. The Fourth Amendment protects against unreasonable searches. The Fifth Amendment says the government cannot take your freedom without due process — the direct descendant of Magna Carta clause 39. The Sixth Amendment guarantees a fair trial. The Eighth Amendment bans cruel and unusual punishment. These are the rights the Anti-Federalists demanded as the price of ratification.",
          },
        ],
        bigIdea:
          "The Bill of Rights is the losers' legacy. The people who opposed the Constitution gave it its most famous part.",
        tryThis: [
          {
            title: "Read the First Amendment",
            minutes: 18,
            steps: [
              "Read the First Amendment: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.'",
              "Count the protections: religion (two), speech, press, assembly, petition. That is five in one sentence.",
              "Talk About It: the Federalists said a bill of rights was unnecessary. Were they wrong? If the government only has the powers listed in the Constitution, why did the Anti-Federalists want a list of rights too?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Bill of Rights is the losers' legacy, what does that tell you about how political fights work? Do the winners always get to decide everything?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Bill of Rights is ten amendments. Read them. They are short. The model's summary will skip the ones that matter most to you." },
        ],
        ifTheySay: [
          {
            heard: "The Founding Fathers wanted the Bill of Rights.",
            reply: "Most of them did not. The Federalists — Hamilton, Madison, Jay — argued against a bill of rights. They said the Constitution only gave the government specific powers, so it could not violate rights it did not have. The Anti-Federalists disagreed. They said: list the rights, or the government will take them. The Anti-Federalists lost the ratification vote. But their demand for a bill of rights was so strong that Madison had to promise it to get the Constitution passed. The Bill of Rights is the losers' legacy — the product of the people who opposed the Constitution.",
          },
        ],
        integrity: "Do not let the model present the Bill of Rights as universally supported. It was the Anti-Federalists' demand. Read the First Amendment. The five protections are the price of ratification.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'Why was the Bill of Rights added?' If it says 'the Founders wanted to protect rights,' that is simplified. Ask: 'Who demanded it, and why?' The Anti-Federalists demanded it as the price of ratification. The losers shaped the document.",
          evaluate: [
            "Can they explain why the Bill of Rights was added?",
            "Do they know it was the Anti-Federalists' demand, not the Federalists' idea?",
            "Can they name at least three protections in the Bill of Rights?",
          ],
        },
      },
      emerging: {
        title: "The Bill of Rights: The Anti-Federalist Legacy",
        dek: "The most famous part of the Constitution was written by the people who opposed it. The Bill of Rights is the Anti-Federalists' price for ratification — and the most cited part of the document.",
        objective:
          "The student can explain the origin of the Bill of Rights as the Anti-Federalists' demand, its key provisions, and the fact that it originally applied only to the federal government.",
        parentBriefing:
          "This sitting takes the Bill of Rights seriously as a political product, not a sacred text. The student needs to understand three things. First, the Bill of Rights was the Anti-Federalists' demand. The Federalists argued it was unnecessary (the government only has enumerated powers, so it cannot violate rights it does not have). The Anti-Federalists argued it was essential (without explicit protections, the government will infringe rights). The Anti-Federalists lost the ratification fight but won the demand: Madison promised amendments during the First Congress. Second, the key provisions: the First Amendment (speech, religion, press, assembly, petition), the Fourth (unreasonable searches), the Fifth (due process — the direct descendant of Magna Carta clause 39), the Sixth (fair trial), the Eighth (cruel and unusual punishment). Third, the original limitation: the Bill of Rights applied only to the federal government. States could restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) incorporated most of the Bill of Rights against the states through the doctrine of incorporation — a process that took nearly a century to complete. The student should understand that the Bill of Rights was not handed down as a package of universal protections. It was a political demand, originally limited to the federal government, and extended to the states through a later amendment and a century of Supreme Court decisions.",
        hardEdges: [
          "Do not present the Bill of Rights as applying to the states from the beginning. It did not. States could and did restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) changed this, but the incorporation process took nearly a century.",
          "Do not skip the Federalist argument against a bill of rights. Hamilton argued in Federalist 84 that a bill of rights was unnecessary and even dangerous — because listing some rights might imply that the government has any powers not listed. The Ninth Amendment was the response to this concern.",
        ],
        reading: [
          {
            heading: "The demand and the debate",
            body: "The Anti-Federalists opposed the Constitution because it gave the federal government too much power and did not protect individual rights. Their demand: a bill of rights, listing explicit protections that the federal government could not violate. The Federalists resisted. Hamilton argued in Federalist 84 that a bill of rights was unnecessary: the Constitution only gives the government specific, enumerated powers. The government cannot violate freedom of speech because it was never given the power to regulate speech. A bill of rights, Hamilton argued, could even be dangerous: by listing some rights, it might imply that the government has any power not listed. The Anti-Federalists were not persuaded. They said: list the rights, or the government will take them. The demand was politically irresistible. Several states ratified only because Madison promised amendments. The Bill of Rights (the first ten amendments, ratified 1791) was the price of ratification.",
          },
          {
            heading: "What the Bill of Rights did — and did not — do",
            body: "The Bill of Rights protects: freedom of speech, religion, press, assembly, and petition (First); the right to bear arms (Second); protection from quartering soldiers (Third); protection from unreasonable searches (Fourth); due process, no self-incrimination, just compensation (Fifth); fair trial rights (Sixth); jury trial in civil cases (Seventh); no cruel and unusual punishment (Eighth); unenumerated rights retained by the people (Ninth); powers reserved to the states (Tenth). But the Bill of Rights originally applied only to the federal government. States could restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) extended due process and equal protection to the states, and the Supreme Court gradually 'incorporated' most of the Bill of Rights against the states through the due process clause — a process that took from the 1890s to the 1960s to complete. The Bill of Rights as we know it — a set of universal protections that applies to all government — is the product of the Fourteenth Amendment and a century of judicial interpretation, not the 1791 text alone.",
          },
        ],
        bigIdea:
          "The Bill of Rights is the Anti-Federalists' legacy — the product of the losing side in the ratification debate. It originally applied only to the federal government. The universal protections we know today are the product of the Fourteenth Amendment and a century of incorporation.",
        tryThis: [
          {
            title: "Read the amendments and find the limits",
            minutes: 30,
            steps: [
              "Read the First Amendment. Count the five protections. Then read the Fifth Amendment. Find 'due process of law' — the direct descendant of Magna Carta clause 39.",
              "Find the Ninth Amendment: 'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.' What does this mean? (Hint: it is the answer to Hamilton's worry that listing some rights implies the government has all other powers.)",
              "Find the original limitation: the Bill of Rights applied only to the federal government. When did this change? (The Fourteenth Amendment, 1868, through the doctrine of incorporation.)",
              "Reflect: the Anti-Federalists lost the ratification vote but won the Bill of Rights. What does that tell you about how political losers can shape the future?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Bill of Rights originally applied only to the federal government, and states could restrict speech and establish religions, when did it become the universal set of protections we know today? And whose work was that?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Bill of Rights is ten amendments. Read them. The Ninth Amendment is the answer to Hamilton's worry. The model will skip it." },
          { label: "AI", note: "Ask the model: 'Did the Bill of Rights apply to the states in 1791?' If it says yes, that is wrong. If it says 'only the federal government, until incorporation through the Fourteenth Amendment,' that is honest. The gap is the lesson." },
          { label: "History", note: "The Fifth Amendment's 'due process of law' is the direct descendant of Magna Carta clause 39's 'law of the land.' The chain runs through Coke's translation. The Bill of Rights is where the charter's principle entered American law." },
        ],
        ifTheySay: [
          {
            heard: "The Bill of Rights protects everyone's rights.",
            reply: "It protects everyone's rights now. It did not originally. The Bill of Rights (1791) applied only to the federal government. States could — and did — restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) extended due process and equal protection to the states, and the Supreme Court gradually incorporated most of the Bill of Rights against the states through the due process clause. The incorporation process took from the 1890s to the 1960s. The Bill of Rights as a universal set of protections is the product of the Fourteenth Amendment and a century of judicial interpretation, not the 1791 text alone. Do not confuse what the Bill of Rights became with what it originally was.",
          },
          {
            heard: "The Founding Fathers wanted the Bill of Rights.",
            reply: "Most of them argued against it. Hamilton wrote Federalist 84 specifically to argue that a bill of rights was unnecessary and potentially dangerous. Madison initially agreed. The Anti-Federalists demanded it as the price of ratification. Madison drafted it because he had to — he promised amendments to secure ratification in key states. The Bill of Rights is the Anti-Federalists' legacy. The people who opposed the Constitution gave it its most famous part. That is not a criticism. It is a lesson in how political losers can shape the future more than the winners.",
          },
        ],
        integrity:
          "Do not let the model present the Bill of Rights as universally supported or universally applied from the beginning. It was the Anti-Federalists' demand, and it originally applied only to the federal government. Read the amendments. The Ninth Amendment — unenumerated rights — is the answer to Hamilton's worry that the model will skip.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Did the Bill of Rights apply to the states when it was ratified?' If it says yes, that is wrong. If it says 'only the federal government, until incorporation,' that is honest. Then ask: 'What is the Ninth Amendment, and why does it exist?' The model may not know. The Ninth is the answer to Hamilton's worry about listing rights. The omission is the lesson.",
          evaluate: [
            "Can they explain why the Bill of Rights was added (the Anti-Federalists' demand)?",
            "Can they name at least three key protections and their amendment numbers?",
            "Do they understand the Bill of Rights originally applied only to the federal government?",
            "Can they explain the Ninth Amendment's purpose?",
          ],
        },
      },
      adult: {
        title: "The Bill of Rights: The Losers Who Shaped the Document",
        dek: "The Bill of Rights is the Anti-Federalists' legacy — the product of the losing side in the ratification debate. Understanding its origin, its original limitation to the federal government, and its extension through the Fourteenth Amendment is essential to teaching it honestly.",
        objective:
          "The parent can explain the origin of the Bill of Rights as the Anti-Federalists' demand, its key provisions, its original limitation to the federal government, and its extension to the states through the Fourteenth Amendment and incorporation.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Bill of Rights as a political product, not a sacred text. The parent should understand three things. First, the Bill of Rights was the Anti-Federalists' price for ratification. The Federalists argued against it (Federalist 84). The Anti-Federalists demanded it. Madison drafted it because the demand was politically irresistible. Second, the Bill of Rights originally applied only to the federal government. States could restrict speech, establish religions, and deny due process. The Fourteenth Amendment (1868) extended due process and equal protection to the states, and the Supreme Court gradually incorporated most of the Bill of Rights against the states through the due process clause — a process that took nearly a century. Third, the Ninth Amendment — unenumerated rights retained by the people — was the answer to Hamilton's worry that listing some rights might imply the government has all powers not listed. The Bill of Rights as we know it — a universal set of protections that applies to all government — is the product of the Fourteenth Amendment and a century of judicial interpretation, not the 1791 text alone. Teaching it honestly means teaching the original limitation, the extension, and the ongoing debate about what rights the Constitution protects.",
        hardEdges: [
          "Do not teach the Bill of Rights as a package of protections that has always applied to everyone. It applied only to the federal government for 80 years. The universal protections are the product of the Fourteenth Amendment and incorporation.",
          "Do not skip the Ninth Amendment. It is the answer to the most serious Federalist objection to a bill of rights: that listing some rights implies the government has all other powers. The Ninth says the list is not exhaustive.",
          "The debate about unenumerated rights — privacy, marriage, travel — is the modern version of the Federalist-Anti-Federalist debate. The Ninth Amendment is the textual basis. Whether courts should enforce unenumerated rights is a live constitutional question.",
        ],
        reading: [
          {
            heading: "The losers who shaped the document",
            body: "The Bill of Rights is the Anti-Federalists' legacy. The Federalists argued against a bill of rights in Federalist 84: the Constitution only gives the government enumerated powers, so it cannot violate rights it does not have. A bill of rights, Hamilton argued, could even be dangerous — listing some rights might imply that the government has any power not listed. The Anti-Federalists were not persuaded. They demanded explicit protections as the price of ratification. Several states — Massachusetts, Virginia, New York — ratified only because Madison promised amendments. The Bill of Rights (first ten amendments, ratified 1791) was the political product of the losing side in the ratification debate. The Ninth Amendment — 'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people' — was the answer to Hamilton's worry. It says: the list of rights is not exhaustive. The people retain other rights, even if they are not listed. The Ninth Amendment is the textual basis for the modern debate about unenumerated rights — privacy, marriage, travel — that the Constitution does not explicitly name but that the Supreme Court has recognized.",
          },
          {
            heading: "The original limitation and the extension",
            body: "The Bill of Rights originally applied only to the federal government. States could — and did — restrict speech, establish religions, and deny due process. The First Amendment says 'Congress shall make no law' — it does not say states shall make no law. The Fourteenth Amendment (1868) changed this. Its due process clause says 'Nor shall any State deprive any person of life, liberty, or property, without due process of law.' Its equal protection clause says states cannot deny any person the equal protection of the laws. Through the due process clause, the Supreme Court gradually 'incorporated' most of the Bill of Rights against the states — making state governments subject to the same restrictions as the federal government. The process took from the 1890s (when the Court began incorporating the First Amendment) to the 1960s (when the Court incorporated the Fifth Amendment's self-incrimination clause against the states). The Bill of Rights as a universal set of protections is the product of the Fourteenth Amendment and a century of judicial interpretation. The 1791 text was the beginning. The Fourteenth Amendment and incorporation made it what it is.",
          },
        ],
        bigIdea:
          "The Bill of Rights is the Anti-Federalists' legacy — the product of the losing side in the ratification debate. It originally applied only to the federal government. The universal protections we know today are the product of the Fourteenth Amendment and a century of incorporation. Teaching it honestly means teaching the original limitation, the extension, and the ongoing debate about unenumerated rights.",
        tryThis: [
          {
            title: "Read the amendments and trace the extension",
            minutes: 40,
            steps: [
              "Read the Bill of Rights (ten amendments). Note the Fifth Amendment's 'due process of law' — the direct descendant of Magna Carta clause 39.",
              "Find the Ninth Amendment: unenumerated rights. What is it answering? (Hamilton's worry in Federalist 84 that listing rights implies the government has all powers not listed.)",
              "Read the Fourteenth Amendment's due process clause: 'Nor shall any State deprive any person of life, liberty, or property, without due process of law.' This is the clause that incorporated the Bill of Rights against the states. Compare it to the Fifth Amendment. The language is nearly identical — 'person' instead of the charter's 'free man.'",
              "Reflect: the Bill of Rights applied only to the federal government for 80 years. The Fourteenth Amendment extended it to the states. The Supreme Court took a century to complete the incorporation. The Bill of Rights as we know it is the product of amendment and interpretation, not the 1791 text alone.",
            ],
          },
        ],
        dinnerQuestion:
          "If the Bill of Rights is the Anti-Federalists' legacy and its universal application is the product of the Fourteenth Amendment and incorporation, what does that tell you about how constitutional protections actually grow? Is it through the text, the amendment, or the interpretation?",
        transfer: [
          { label: "AI", note: "Ask the model: 'When did the Bill of Rights apply to the states?' If it says 1791, that is wrong. If it says 'after the Fourteenth Amendment and incorporation,' that is honest. The gap between 1791 and the 1960s is the story." },
          { label: "History", note: "The Fifth Amendment's 'due process of law' is Magna Carta clause 39's 'law of the land,' translated by Coke, written into the Constitution by the founders. The Fourteenth Amendment extended it to the states. The chain from Runnymede to your rights runs through every link." },
        ],
        ifTheySay: [
          {
            heard: "The Bill of Rights has always protected everyone.",
            reply: "It has not. The Bill of Rights (1791) applied only to the federal government. States restricted speech, established religions, and denied due process — legally — for 80 years. The Fourteenth Amendment (1868) extended due process and equal protection to the states. The Supreme Court then spent a century incorporating the Bill of Rights against the states through the due process clause. The process was not complete until the 1960s. The Bill of Rights as a universal set of protections is the product of the Fourteenth Amendment and a century of judicial interpretation. The 1791 text was the beginning, not the whole story. Teaching it as if it was always universal erases the struggle — the Civil War, the Fourteenth Amendment, the incorporation cases — that made it universal.",
          },
          {
            heard: "Only the rights listed in the Constitution are protected.",
            reply: "The Ninth Amendment says otherwise: 'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.' The list is not exhaustive. The people retain other rights, even if they are not listed. The Ninth Amendment is the textual basis for the modern debate about unenumerated rights — privacy, marriage, travel — that the Constitution does not explicitly name but that the Supreme Court has recognized. The debate about whether courts should enforce unenumerated rights is the modern version of the Federalist-Anti-Federalist debate. The Federalists worried that listing rights would limit them. The Anti-Federalists demanded a list. The Ninth Amendment was the compromise: list the rights, but say the list is not exhaustive. The debate about what that means is ongoing.",
          },
        ],
        integrity:
          "Do not let the model present the Bill of Rights as universally supported or universally applied from the beginning. It was the Anti-Federalists' demand, it applied only to the federal government, and its extension to the states took a century. Read the amendments. Read the Fourteenth Amendment. The chain from 1791 to universal protection is the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the history of the Bill of Rights in three sentences.' Then ask: 'What did you skip?' The model will skip the Anti-Federalist demand, the original limitation to the federal government, and the century of incorporation. Each skip is a piece of the story. The compression is the lesson.",
          evaluate: [
            "Can they explain the Anti-Federalist origin of the Bill of Rights?",
            "Can they trace the extension through the Fourteenth Amendment and incorporation?",
            "Do they understand the Ninth Amendment and the debate about unenumerated rights?",
            "Can they distinguish the 1791 text from the Bill of Rights as it exists today?",
          ],
        },
      },
    },
  }),

  // ── 4. The Three-Fifths Compromise ─────────────────────────────────
  ...expand({
    slug: "three-fifths-compromise",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Compromise That Counted People as Numbers",
        dek: "The Constitution says enslaved people counted as three-fifths of a person for representation. It was not about their worth. It was about power.",
        objective:
          "The student can explain what the three-fifths compromise was, why it was made, and who benefited from it.",
        parentBriefing:
          "This sitting tackles one of the hardest truths in the Constitution: the three-fifths compromise. Article I, Section 2 says enslaved people count as three-fifths of a person for representation and taxation. The common misconception is that this meant slaves were three-fifths of a human being — a racist devaluation. The reality is more disturbing: the compromise was about political power. The South wanted enslaved people counted fully for representation (more seats in Congress, more Electoral College votes) even though enslaved people could not vote. The North wanted them not counted at all (they are property, not citizens). The compromise: three-fifths. The result: the slave states got extra representation based on people they held in bondage. The student should understand that the three-fifths compromise was not about the worth of enslaved people. It was about the power of their enslavers. The moral problem is not that slaves were valued at three-fifths. It is that they were counted for representation while having no representation — their existence increased their enslavers' political power.",
        hardEdges: [
          "Do not present the three-fifths compromise as being about the worth of enslaved people. It was about political power.",
          "Do not skip who benefited: the slave states got approximately 20 extra seats in the first Congress and extra Electoral College votes.",
        ],
        reading: [
          {
            heading: "The fight",
            body: "After the Revolution, the country had to decide how many representatives each state got in Congress. The number was based on population. The South had millions of enslaved people. The South wanted them counted fully — more people meant more representatives. The North said: you cannot count people as property and then count them as people for representation. The fight was about power, not about the worth of the enslaved.",
          },
          {
            heading: "The deal",
            body: "The compromise: enslaved people would count as three-fifths of a person for both representation and taxation. The South got extra seats in Congress. The North got extra tax burden on the South. But the real winner was the slave states. The three-fifths counting gave them about 20 extra seats in the first Congress and extra Electoral College votes. Thomas Jefferson won the presidency in 1800 partly because of the three-fifths bonus. The people who were counted had no vote, no rights, and no representation. Their existence gave their enslavers more power.",
          },
        ],
        bigIdea:
          "The three-fifths compromise was not about the worth of enslaved people. It was about the power of their enslavers. The people who were counted had no representation. Their existence gave their enslavers more power.",
        tryThis: [
          {
            title: "Count the cost",
            minutes: 18,
            steps: [
              "Read Article I, Section 2, Clause 3: 'Representatives and direct Taxes shall be apportioned among the several States... by adding to the whole Number of free Persons... three fifths of all other Persons.'",
              "Write: 'all other Persons' means enslaved people. Why does the Constitution not say 'slaves'? (Hint: the framers avoided the word.)",
              "Talk About It: if the South wanted enslaved people counted for representation, but enslaved people could not vote, who was the South representing? Themselves, or the people they owned?",
            ],
          },
        ],
        dinnerQuestion:
          "If the three-fifths compromise was about power, not worth, what does that tell you about how the Constitution treated slavery? Was it a compromise or a deal?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article I, Section 2 is the source. The misconception is the summary. Read the actual text." },
        ],
        ifTheySay: [
          {
            heard: "The three-fifths clause meant slaves were three-fifths of a human being.",
            reply: "It did not. It meant enslaved people were counted as three-fifths for representation and taxation — not for any other purpose. The misconception is that the clause was about worth. It was about power. The South wanted enslaved people counted fully for representation (more seats in Congress). The North wanted them not counted at all (they are property, not citizens). The compromise: three-fifths. The moral problem is not that slaves were valued at three-fifths. It is that they were counted for representation while having no representation — their existence increased their enslavers' political power.",
          },
        ],
        integrity: "Do not let the model say the three-fifths clause was about the worth of enslaved people. Read Article I, Section 2. It is about representation and taxation. The power, not the worth, is the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'What did the three-fifths clause mean?' If it says 'slaves were three-fifths of a person,' that is the misconception. Ask: 'For what purpose were they counted?' The answer: representation and taxation. The purpose is the story.",
          evaluate: [
            "Can they explain what the three-fifths compromise was?",
            "Do they understand it was about power, not worth?",
            "Can they explain who benefited (the slave states)?",
          ],
        },
      },
      emerging: {
        title: "The Three-Fifths Compromise: Power, Not Worth",
        dek: "The three-fifths clause counted enslaved people for representation while they had no representation. The moral problem is not that slaves were valued at three-fifths. It is that their existence increased their enslavers' political power.",
        objective:
          "The student can explain the three-fifths compromise as a political deal about representation and taxation, identify who benefited, and distinguish the misconception (worth) from the reality (power).",
        parentBriefing:
          "This sitting takes on the three-fifths compromise directly and honestly. The student needs to understand three things. First, the fight: the South wanted enslaved people counted fully for representation (more seats in Congress, more Electoral College votes). The North wanted them not counted at all (they are property, not citizens — you cannot count people as property and then count them as people for representation). The compromise: three-fifths, for both representation and taxation. Second, who benefited: the slave states. The three-fifths counting gave them approximately 20 extra seats in the first Congress and extra Electoral College votes. Thomas Jefferson won the presidency in 1800 partly because of the three-fifths bonus. Third, the misconception: the common belief is that the clause said slaves were three-fifths of a human being — a racist devaluation. The reality is more disturbing: the clause was about political power. The moral problem is not that slaves were valued at three-fifths. It is that they were counted for representation while having no representation. Their existence increased their enslavers' political power. The student should understand that the three-fifths compromise is the Constitution's original sin — not because it devalued enslaved people, but because it used them as numbers to give their enslavers more power.",
        hardEdges: [
          "Do not present the three-fifths compromise as being about the worth of enslaved people. The misconception is common. The reality — that it was about political power — is more disturbing and more important.",
          "Do not skip who benefited. The slave states got approximately 20 extra seats and extra Electoral College votes. Jefferson won in 1800 partly because of the three-fifths bonus.",
          "Do not let the compromise become an excuse to dismiss the Constitution. The compromise is the Constitution's original sin. The 13th and 14th Amendments corrected it. Both the sin and the correction are the story.",
        ],
        reading: [
          {
            heading: "The fight, the deal, and the beneficiary",
            body: "The three-fifths compromise (Article I, Section 2, Clause 3) resolved a dispute between Northern and Southern states. The North wanted enslaved people not counted at all for representation: they are property, not citizens — counting them would give slave states extra power based on people they treated as property. The South wanted enslaved people counted fully: they are part of the population, and counting them would give the slave states more seats in Congress and more power in the Electoral College. The compromise: enslaved persons counted as three-fifths of a person for both representation and taxation. The South got extra representation. The North got extra tax burden on the South. The real winner was the slave states. The three-fifths counting gave them approximately 20 extra seats in the first Congress and extra Electoral College votes that helped Southern presidential candidates — including Thomas Jefferson in 1800, who won the Electoral College in part because of the three-fifths bonus. The people who were counted had no vote, no rights, and no representation. Their existence increased their enslavers' political power.",
          },
          {
            heading: "The misconception and the reality",
            body: "The common misconception is that the three-fifths clause said slaves were three-fifths of a human being — a racist devaluation embedded in the Constitution. The reality is more disturbing. The clause did not say slaves were three-fifths of a person. It said they could be counted as three-fifths for representation and taxation — for those purposes only. The moral problem is not that slaves were valued at three-fifths. The moral problem is that slaves were counted for representation while having no representation — their existence increased their enslavers' political power. The framers avoided the word 'slave' in the Constitution. They wrote 'all other Persons.' The avoidance is telling: they knew what they were doing, and they chose not to name it. The three-fifths compromise is the Constitution's original sin. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) replaced the three-fifths rule with universal citizenship and equal protection. Both the sin and the correction are part of the constitutional story.",
          },
        ],
        bigIdea:
          "The three-fifths compromise was about political power, not human worth. The moral problem is that enslaved people were counted for representation while having no representation — their existence gave their enslavers more power. The 13th and 14th Amendments corrected it.",
        tryThis: [
          {
            title: "Read the clause and trace the power",
            minutes: 30,
            steps: [
              "Read Article I, Section 2, Clause 3: 'Representatives and direct Taxes shall be apportioned among the several States... by adding to the whole Number of free Persons... three fifths of all other Persons.' Write: 'all other Persons' means enslaved people. The framers did not use the word 'slave.'",
              "Write the two sides: North wanted slaves not counted (property, not citizens). South wanted slaves counted fully (more representation). The compromise: three-fifths.",
              "Find who benefited: approximately 20 extra seats for slave states in the first Congress. Extra Electoral College votes. Jefferson won in 1800 partly because of the three-fifths bonus.",
              "Reflect: the people who were counted had no vote and no representation. Their existence gave their enslavers more power. Is this a compromise or a deal? What is the difference?",
            ],
          },
        ],
        dinnerQuestion:
          "If the three-fifths compromise gave slave states extra power based on people they held in bondage, and Jefferson won the presidency in 1800 partly because of it, how does that change the way you think about early American history? Was the founding compromised from the start?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article I, Section 2 is the source. The misconception is the summary. Read the actual text. 'All other Persons' is the euphemism. The euphemism is the tell." },
          { label: "AI", note: "Ask the model: 'What did the three-fifths clause mean?' If it says 'slaves were three-fifths of a person,' that is the misconception. Ask: 'For what purpose were they counted?' Representation and taxation. The purpose is the story the model will smooth." },
          { label: "History", note: "Magna Carta's omission of villeins was the charter's limit. The three-fifths compromise is the Constitution's. Both documents used people as numbers — or failed to count them at all — to protect the power of those who held it." },
        ],
        ifTheySay: [
          {
            heard: "The three-fifths clause said slaves were three-fifths of a human being.",
            reply: "It did not. It said enslaved people were counted as three-fifths for representation and taxation — for those purposes only. The misconception is that the clause was about worth. It was about power. The South wanted enslaved people counted fully for representation (more seats in Congress). The North wanted them not counted at all. The compromise: three-fifths. The moral problem is not that slaves were valued at three-fifths. It is that they were counted for representation while having no representation. Their existence increased their enslavers' political power. Jefferson won in 1800 partly because of the three-fifths bonus. The people who gave him that power could not vote. The compromise is the Constitution's original sin. The 13th and 14th Amendments corrected it. Both are the story.",
          },
          {
            heard: "The three-fifths clause was anti-slavery because it reduced the South's representation.",
            reply: "This is sometimes argued, but it gets the dynamics backwards. The North wanted slaves not counted at all — which would have reduced the South's representation. The South wanted slaves counted fully — which would have increased it. Three-fifths was a compromise between zero and full counting. The South got more representation than it would have under the Northern proposal. The three-fifths clause benefited the slave states, not the enslaved. The people who were counted had no vote. Their existence gave their enslavers more power. That is not anti-slavery. It is the use of enslaved people as political currency.",
          },
        ],
        integrity:
          "Do not let the model say the three-fifths clause was about the worth of enslaved people. Read Article I, Section 2. It is about representation and taxation. The power, not the worth, is the story. The 13th and 14th Amendments are the correction. Both are the history.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'What did the three-fifths clause mean?' If it says 'slaves were three-fifths of a person,' ask: 'For what purpose?' The answer is representation and taxation. Then ask: 'Who benefited?' The slave states. The gap between the misconception and the reality is the lesson.",
          evaluate: [
            "Can they explain what the three-fifths compromise was and what it was about (power, not worth)?",
            "Can they identify who benefited (the slave states)?",
            "Do they understand the moral problem (counted for representation without representation)?",
            "Can they trace the correction through the 13th and 14th Amendments?",
          ],
        },
      },
      adult: {
        title: "The Three-Fifths Compromise: The Constitution's Original Sin",
        dek: "The three-fifths clause counted enslaved people for representation while they had no representation. It was not about worth. It was about power — and the power it gave the slave states shaped American politics for 80 years.",
        objective:
          "The parent can explain the three-fifths compromise as a political deal about representation and taxation, identify who benefited, distinguish the misconception (worth) from the reality (power), and trace the correction through the 13th and 14th Amendments.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Constitution's hardest truth honestly. The three-fifths compromise is the Constitution's original sin — not because it devalued enslaved people, but because it used them as political currency. The South wanted enslaved people counted fully for representation (more seats, more Electoral College votes) even though they could not vote. The North wanted them not counted at all. The compromise: three-fifths, for representation and taxation. The beneficiary: the slave states, who got approximately 20 extra seats in the first Congress and extra Electoral College votes. Jefferson won in 1800 partly because of the three-fifths bonus. The moral problem: enslaved people were counted for representation while having no representation. Their existence increased their enslavers' political power. The framers avoided the word 'slave' — they wrote 'all other Persons.' The euphemism is the tell: they knew what they were doing, and they chose not to name it. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) replaced the three-fifths rule with universal citizenship and equal protection. The parent should understand that the three-fifths compromise is not a footnote. It is the central fact about the Constitution's relationship to slavery. Teaching it honestly means teaching the sin and the correction.",
        hardEdges: [
          "Do not present the three-fifths compromise as being about the worth of enslaved people. The misconception is common and wrong. The reality — that it was about political power — is more disturbing and more important.",
          "Do not skip who benefited. The slave states got approximately 20 extra seats and extra Electoral College votes. Jefferson won in 1800 partly because of the three-fifths bonus. The compromise shaped American politics for 80 years.",
          "Do not let the compromise become an excuse to dismiss the Constitution entirely. The compromise is the original sin. The 13th and 14th Amendments corrected it. Both the sin and the correction are part of the constitutional story.",
          "Note the euphemism: the framers wrote 'all other Persons,' not 'slaves.' The avoidance of the word is itself a moral choice — the choice not to name the thing they were doing.",
        ],
        reading: [
          {
            heading: "The compromise, the beneficiary, and the euphemism",
            body: "The three-fifths compromise (Article I, Section 2, Clause 3) resolved a dispute about representation and taxation. The North wanted enslaved people not counted at all: they are property, not citizens — counting them would give slave states extra power based on people they treated as property. The South wanted them counted fully: they are part of the population, and counting them would give the slave states more seats in Congress and more Electoral College votes. The compromise: enslaved persons counted as three-fifths for both representation and taxation. The slave states benefited. The three-fifths counting gave them approximately 20 extra seats in the first Congress and extra Electoral College votes. Thomas Jefferson won the presidency in 1800 in part because of the three-fifths bonus — the people who gave him that power could not vote. The framers avoided the word 'slave' in the Constitution. They wrote 'all other Persons.' The euphemism is telling: they knew what they were doing, and they chose not to name it. The three-fifths compromise is the Constitution's original sin — not because it devalued enslaved people (the misconception), but because it used them as political currency to give their enslavers more power. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) replaced the three-fifths rule with universal citizenship and equal protection. Both the sin and the correction are the constitutional story.",
          },
        ],
        bigIdea:
          "The three-fifths compromise is the Constitution's original sin. It was about power, not worth. It used enslaved people as political currency to give their enslavers more representation. The 13th and 14th Amendments corrected it. Both the sin and the correction are the story.",
        tryThis: [
          {
            title: "Read the clause, trace the power, find the correction",
            minutes: 40,
            steps: [
              "Read Article I, Section 2, Clause 3. Find 'all other Persons.' The framers did not use the word 'slave.' The euphemism is the tell.",
              "Trace the beneficiary: approximately 20 extra seats for slave states. Extra Electoral College votes. Jefferson won in 1800 partly because of the three-fifths bonus.",
              "Read the 13th Amendment (1865): abolished slavery. Read the 14th Amendment (1868): 'All persons born or naturalized in the United States... are citizens.' The 14th replaced the three-fifths rule with universal citizenship.",
              "Reflect: the people who were counted had no vote and no representation. Their existence gave their enslavers more power. The euphemism ('all other Persons') is a moral choice — the choice not to name the thing they were doing. The correction took a Civil War and two amendments. Both the sin and the correction are the constitutional story.",
            ],
          },
        ],
        dinnerQuestion:
          "If the three-fifths compromise used enslaved people as political currency to give their enslavers more power, and Jefferson won the presidency in 1800 partly because of it, how does that change the way you think about the founding? Can a document be both foundational and compromised?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Was the three-fifths compromise about the worth of slaves or about political power?' Then ask: 'Who benefited, and how?' The model may say 'worth.' The honest answer is 'power.' The gap is the lesson." },
          { label: "History", note: "Magna Carta's omission of villeins was the charter's limit. The three-fifths compromise is the Constitution's. Both documents used people as numbers — or failed to count them — to protect the power of those who held it. The difference: the Constitution's compromise gave the slave states extra power for 80 years." },
        ],
        ifTheySay: [
          {
            heard: "The three-fifths clause was about the worth of slaves.",
            reply: "It was not. It was about representation and taxation. The misconception is that the clause said slaves were three-fifths of a human being. The reality is that it said enslaved people could be counted as three-fifths for representation and taxation — for those purposes only. The moral problem is not that slaves were valued at three-fifths. It is that they were counted for representation while having no representation. Their existence increased their enslavers' political power. Jefferson won in 1800 partly because of the three-fifths bonus. The people who gave him that power could not vote. The framers did not use the word 'slave.' They wrote 'all other Persons.' The euphemism is the tell: they knew what they were doing and chose not to name it. The 13th and 14th Amendments corrected it. Both the sin and the correction are the story.",
          },
          {
            heard: "The Constitution was pro-slavery.",
            reply: "It was compromised with slavery. The three-fifths clause, the fugitive slave clause, and the 20-year ban on banning the slave trade were all concessions to the slave states. The framers knew slavery was wrong — Jefferson called it a 'deplorable entanglement' — but they could not form a nation without the slave states, and the slave states would not join without protections for slavery. The result was a Constitution that tolerated slavery for 80 years, fought a war over it, and then corrected it through the 13th and 14th Amendments. The Constitution was not pro-slavery. It was compromised with slavery. The difference matters: a pro-slavery document would have defended slavery as good. The Constitution tolerated it as a political necessity, and the founding generation knew the toleration could not last. Jefferson wrote that he trembled for his country when he reflected that God is just. He was right to tremble.",
          },
        ],
        integrity:
          "Do not let the model say the three-fifths clause was about the worth of enslaved people. Read Article I, Section 2. It is about representation and taxation. The euphemism ('all other Persons') is the tell. The 13th and 14th Amendments are the correction. Both are the history.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the three-fifths compromise in one sentence.' Then ask: 'What did you smooth?' The model will say it was about counting slaves as three-fifths of a person. Ask: 'For what purpose?' Representation and taxation. Ask: 'Who benefited?' The slave states. The gap between the one-sentence summary and the actual dynamics is the lesson.",
          evaluate: [
            "Can they explain the three-fifths compromise as a political deal about power, not worth?",
            "Can they identify who benefited and trace the consequences (extra seats, Jefferson 1800)?",
            "Do they understand the euphemism ('all other Persons') as a moral choice?",
            "Can they trace the correction through the 13th and 14th Amendments?",
          ],
        },
      },
    },
  }),

  // ── 5. Judicial Review: The Court's Self-Made Power ────────────────
  ...expand({
    slug: "judicial-review-self-made",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Court That Gave Itself the Power to Say No",
        dek: "The Constitution does not say the Supreme Court can strike down laws. The Court decided that on its own. And it has been doing it ever since.",
        objective:
          "The student can explain what judicial review is, where it comes from, and why it matters.",
        parentBriefing:
          "This sitting tells a surprising story: the Supreme Court's most important power — the ability to strike down unconstitutional laws — is not in the Constitution. The Court gave itself that power in 1803, in a case called Marbury v. Madison. Chief Justice John Marshall argued that it is 'the duty of the judicial department to say what the law is' and that a law contrary to the Constitution is void. The Constitution does not say this. Marshall constructed the argument from the Constitution's structure. The result is that unelected judges with lifetime appointments can overrule the elected branches. This is the 'countermajoritarian difficulty' — the problem that courts can override the will of the people's representatives. The student should understand that judicial review is the Constitution's enforcement mechanism — the structural equivalent of Magna Carta's security clause, but operating through courts instead of armed barons. Both mechanisms answer the same question: how do you enforce limits on the government?",
        hardEdges: [
          "Do not present judicial review as being in the Constitution. It is not. The Court established it in Marbury v. Madison (1803).",
          "The Constitution does not explicitly grant the power. Whether the framers intended it is debated. Whether the text grants it is unclear.",
        ],
        reading: [
          {
            heading: "What judicial review is",
            body: "Judicial review is the power of courts to decide whether a law is constitutional — and to strike down laws that are not. It is the enforcement mechanism of the Constitution. Without it, the government could pass laws that violate the Constitution and there would be no way to stop them except elections or amendments. With it, the courts can say: this law violates the Constitution, and it is void.",
          },
          {
            heading: "Where it came from",
            body: "The Constitution does not say the Supreme Court can strike down laws. Article III says courts decide cases 'arising under this Constitution.' But it does not say courts can invalidate laws. That power was established by the Supreme Court itself in 1803, in a case called Marbury v. Madison. Chief Justice John Marshall argued that if a law conflicts with the Constitution, the Constitution wins — because the Constitution is the supreme law. And it is the court's job to say what the law is. The Court gave itself the power to strike down laws. It has been using it ever since.",
          },
        ],
        bigIdea:
          "Judicial review — the power to strike down unconstitutional laws — is not in the Constitution. The Supreme Court gave itself that power in 1803. It has been the enforcement mechanism of the Constitution ever since.",
        tryThis: [
          {
            title: "Find the power",
            minutes: 18,
            steps: [
              "Read Article III of the Constitution. Look for the power to strike down laws. It is not there. Article III says courts decide cases — it does not say courts can invalidate laws.",
              "Read about Marbury v. Madison (1803). Chief Justice Marshall said it is 'the duty of the judicial department to say what the law is.' He meant: courts decide what the Constitution means.",
              "Talk About It: if the Constitution does not give the courts this power, where did it come from? The Court took it. Is that legitimate? What would happen if the courts did not have it?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Supreme Court gave itself the power to strike down laws, and the Constitution does not mention that power, is judicial review democratic? Or is it a power grab that happened to work?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article III is the source. Marbury v. Madison is the interpretation. Read the source first, then the case." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution gives the Supreme Court the power to strike down laws.",
            reply: "It does not. Article III says courts decide cases 'arising under this Constitution.' It does not say courts can invalidate laws. The power to strike down unconstitutional laws was established by the Supreme Court itself in Marbury v. Madison (1803) — 14 years after the Constitution was ratified. Chief Justice Marshall constructed the argument from the Constitution's structure, not from its text. Whether the framers intended judicial review is debated. Whether the Constitution's text grants it is unclear. The Court took the power. It has been using it for 220 years.",
          },
        ],
        integrity: "Do not let the model say judicial review is in the Constitution. Read Article III. It is not there. Marbury v. Madison is where it came from. The gap is the story.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'Where does the Constitution give the Supreme Court the power of judicial review?' If it points to Article III, that is an interpretation, not the text. Ask: 'What case established judicial review?' Marbury v. Madison, 1803. The Court gave itself the power.",
          evaluate: [
            "Can they explain what judicial review is?",
            "Do they know it is not explicitly in the Constitution?",
            "Can they name Marbury v. Madison as the case that established it?",
          ],
        },
      },
      emerging: {
        title: "Judicial Review: The Security Clause's Heir",
        dek: "The Constitution does not explicitly grant judicial review. The Supreme Court established it in Marbury v. Madison (1803). It is the structural heir of Magna Carta's security clause — enforcing limits through courts instead of armed barons.",
        objective:
          "The student can explain the origin of judicial review in Marbury v. Madison, the constitutional basis (or lack thereof), and the 'countermajoritarian difficulty' it creates.",
        parentBriefing:
          "This sitting takes judicial review seriously as a constitutional question. The student needs to understand three things. First, the origin: the Constitution does not explicitly grant judicial review. Article III says courts decide cases 'arising under this Constitution' — it does not say courts can invalidate laws. The power was established by the Supreme Court itself in Marbury v. Madison (1803). Chief Justice Marshall argued that the Constitution is the supreme law, that laws conflicting with it are void, and that it is the judiciary's job to say what the law is. The argument is logically powerful but textually weak — it is constructed from the Constitution's structure, not from its text. Second, the parallel: judicial review is the structural heir of Magna Carta's security clause. The charter's clause 61 authorized 25 barons to enforce the charter by force. It was dropped from the reissues. Judicial review is the Constitution's answer: enforcement through courts instead of armed resistance. Third, the tension: the 'countermajoritarian difficulty' — unelected judges with lifetime appointments can overrule the elected branches. Whether this is legitimate is the permanent question of constitutional law. The student should understand that judicial review is not a settled power. It is a self-made power that has been accepted for 220 years but is still debated.",
        hardEdges: [
          "Do not present judicial review as being in the Constitution. It is not. The Court established it in Marbury v. Madison. The argument is structural, not textual.",
          "Do not skip the countermajoritarian difficulty. Unelected judges can overrule the elected branches. Whether this is legitimate is the central question of constitutional law.",
          "Do not skip the Magna Carta parallel. Both the charter and the Constitution face the same problem: how do you enforce limits on the government? The charter's answer was armed barons. The Constitution's answer is courts. Both are imperfect.",
        ],
        reading: [
          {
            heading: "Marbury v. Madison and the self-made power",
            body: "The case: William Marbury was appointed a justice of the peace by President Adams in the last days of his administration. The commission was signed but not delivered. When Jefferson took office, his Secretary of State, Madison, refused to deliver it. Marbury sued, asking the Supreme Court to issue a writ compelling delivery. Chief Justice Marshall's opinion: Marbury had a right to the commission. Madison's refusal violated that right. Marbury was entitled to a remedy. BUT — the section of the Judiciary Act that gave the Supreme Court jurisdiction to issue the writ was unconstitutional, because it expanded the Court's original jurisdiction beyond what Article III allowed. Therefore, the Court could not issue the writ. Marbury lost. But the Court won — because Marshall used the case to establish that 'it is emphatically the duty of the judicial department to say what the law is' and that a law contrary to the Constitution is void. The Constitution does not say this. Marshall constructed the argument from the Constitution's structure and the Supremacy Clause (Article VI), not from an explicit grant of power. Whether the framers intended judicial review is debated. Federalist 78 (Hamilton) suggested it. But the text does not grant it. The Court took the power. It has been using it for 220 years.",
          },
          {
            heading: "The security clause's heir",
            body: "Magna Carta's security clause (clause 61) authorized 25 barons to enforce the charter by seizing the king's property if he violated any clause. The clause was dropped from all reissues — no king would accept it. The problem it addressed — how to enforce limits on the government — remained. Judicial review is the Constitution's answer. Instead of 25 barons with swords, the enforcement mechanism is courts with opinions. Instead of 'distrain and distress,' the remedy is 'the law is void.' The mechanism is different, but the function is the same: an institution that can stop the government when it exceeds its constitutional limits. Both mechanisms are imperfect. The security clause led to civil war. Judicial review leads to the 'countermajoritarian difficulty' — the problem that unelected judges can override the will of the people's representatives. The search for a better enforcement mechanism continues. But the principle is the same: constitutional limits are meaningless without enforcement.",
          },
        ],
        bigIdea:
          "Judicial review is not in the Constitution. The Court established it in Marbury v. Madison (1803). It is the structural heir of Magna Carta's security clause — enforcing limits through courts instead of armed barons. The countermajoritarian difficulty is the price.",
        tryThis: [
          {
            title: "Read Article III, then Marbury",
            minutes: 30,
            steps: [
              "Read Article III of the Constitution. Look for the power to strike down laws. It is not there. Article III says courts decide cases 'arising under this Constitution.'",
              "Read about Marbury v. Madison (1803). Marshall's argument: the Constitution is supreme law, laws conflicting with it are void, and it is the judiciary's job to say what the law is. Is this argument in the text, or constructed from the structure?",
              "Find the countermajoritarian difficulty: unelected judges with lifetime appointments can overrule the elected branches. Is this legitimate? What are the arguments for and against?",
              "Compare to Magna Carta's security clause: 25 barons with swords vs. courts with opinions. Both enforce limits. Both are imperfect. Which is more democratic? Which is more reliable?",
            ],
          },
        ],
        dinnerQuestion:
          "If judicial review is the power of unelected judges to overrule elected representatives, and the Constitution does not explicitly grant it, is it legitimate? What would happen if the Court did not have it — and what would happen if it used it too much?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article III is the source. Marbury v. Madison is the interpretation. Read the source first, then the case. The gap between them is the story." },
          { label: "AI", note: "Ask the model: 'Does the Constitution grant judicial review?' If it says yes, ask: 'Where?' If it points to Article III, that is an interpretation, not the text. The gap between the text and the power is the lesson." },
          { label: "History", note: "Magna Carta's security clause (clause 61) enforced the charter with armed barons. Judicial review enforces the Constitution with courts. Both answer the same question: how do you enforce limits on the government? Both are imperfect." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution gives the Supreme Court the power to strike down laws.",
            reply: "It does not. Article III says courts decide cases 'arising under this Constitution.' It does not say courts can invalidate laws. The power was established by the Supreme Court itself in Marbury v. Madison (1803). Marshall's argument is logically powerful but textually weak — it is constructed from the Constitution's structure (the Supremacy Clause, life tenure, judicial independence), not from an explicit grant. Whether the framers intended judicial review is debated. Federalist 78 suggests it. But the text does not grant it. The Court took the power. It has been accepted for 220 years. But it is a self-made power, not a constitutional one. That distinction matters.",
          },
          {
            heard: "Judicial review is undemocratic.",
            reply: "It is — by design. The countermajoritarian difficulty is the problem that unelected judges can overrule the elected branches. But the framers designed the Constitution to be counter-majoritarian in several ways: the Senate (equal representation), the Electoral College, the amendment supermajority, and judicial review. The question is not whether judicial review is democratic. It is not. The question is whether it is necessary — whether constitutional limits mean anything without enforcement. Magna Carta's security clause was the charter's enforcement mechanism (armed barons). Judicial review is the Constitution's (courts). Both are undemocratic. Both are necessary. The question is whether the undemocratic mechanism is better than no enforcement at all. The framers thought it was. The Anti-Federalists were not sure. The debate continues.",
          },
        ],
        integrity:
          "Do not let the model say judicial review is in the Constitution. Read Article III. It is not there. Marbury v. Madison is where it came from. The countermajoritarian difficulty is the price. The Magna Carta parallel is the context.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Does the Constitution explicitly grant judicial review?' If it says yes, ask: 'Where in the text?' The answer is: it does not. Then ask: 'How is judicial review like Magna Carta's security clause?' The model may not make the connection. The parallel — enforcement through institutions instead of force — is the lesson.",
          evaluate: [
            "Can they explain the origin of judicial review in Marbury v. Madison?",
            "Do they understand the Constitution does not explicitly grant it?",
            "Can they explain the countermajoritarian difficulty?",
            "Can they connect judicial review to Magna Carta's security clause as enforcement mechanisms?",
          ],
        },
      },
      adult: {
        title: "Judicial Review: The Self-Made Power and Its Price",
        dek: "Judicial review is the Constitution's enforcement mechanism — the structural heir of Magna Carta's security clause. It is also a self-made power that the Constitution does not explicitly grant. Understanding both is essential to constitutional literacy.",
        objective:
          "The parent can explain the origin of judicial review in Marbury v. Madison, the lack of explicit constitutional basis, the countermajoritarian difficulty, and the parallel to Magna Carta's security clause.",
        parentBriefing:
          "This sitting is for the parent who wants to teach judicial review honestly. The parent should understand three things. First, judicial review is not in the Constitution. Article III says courts decide cases 'arising under this Constitution.' It does not say courts can invalidate laws. The power was established by the Supreme Court itself in Marbury v. Madison (1803). Marshall's argument is logically powerful but textually weak — constructed from the Constitution's structure, not from its text. Second, judicial review is the structural heir of Magna Carta's security clause. The charter's clause 61 authorized 25 barons to enforce the charter by force. It was dropped. Judicial review is the Constitution's answer: enforcement through courts instead of armed resistance. Both mechanisms answer the same question: how do you enforce limits on the government? Both are imperfect. Third, the countermajoritarian difficulty: unelected judges with lifetime appointments can overrule the elected branches. This is the price of enforcement. The framers designed a counter-majoritarian system (Senate, Electoral College, amendment supermajority, judicial review) because they feared majority tyranny. The question of whether judicial review is legitimate — whether the price is worth the enforcement — is the permanent debate of constitutional law. The parent should understand that judicial review is not a settled power. It is a self-made power that has been accepted for 220 years and is still contested.",
        hardEdges: [
          "Do not present judicial review as being in the Constitution. It is not. The Court established it in Marbury. The argument is structural, not textual.",
          "Do not skip the countermajoritarian difficulty. It is the central question of constitutional law: can unelected judges overrule elected representatives? The answer is yes — but the legitimacy is debated.",
          "Do not skip the Magna Carta parallel. Both the charter and the Constitution face the same enforcement problem. The charter's answer (armed barons) failed. The Constitution's answer (courts) has held for 220 years but is still contested.",
          "Do not present judicial review as settled. Originalism, living constitutionalism, Thayerian deference, and popular constitutionalism are all responses to the countermajoritarian difficulty. The debate is ongoing.",
        ],
        reading: [
          {
            heading: "The self-made power and its parallel",
            body: "Judicial review is the Constitution's enforcement mechanism — the structural heir of Magna Carta's security clause. The charter's clause 61 authorized 25 barons to seize the king's property if he violated the charter. It was dropped from all reissues. The problem it addressed — how to enforce limits on the government — remained. Judicial review is the Constitution's answer. Instead of 25 barons with swords, the enforcement mechanism is courts with opinions. The power was established by the Supreme Court itself in Marbury v. Madison (1803). The Constitution does not explicitly grant it. Article III says courts decide cases 'arising under this Constitution' — it does not say courts can invalidate laws. Marshall's argument: the Constitution is the supreme law (Supremacy Clause, Article VI), laws conflicting with it are void, and it is the judiciary's job to say what the law is. The argument is logically powerful but textually weak. Whether the framers intended judicial review is debated. Federalist 78 (Hamilton) suggested it. The Anti-Federalists warned that the judiciary would become 'the supreme authority.' The Court took the power. It has been accepted for 220 years, but the countermajoritarian difficulty — the problem that unelected judges can overrule elected representatives — is the permanent price. Originalism, living constitutionalism, Thayerian deference, and popular constitutionalism are all responses to this difficulty. The debate is not about whether judicial review exists. It is about how it should be used and whether it is legitimate.",
          },
        ],
        bigIdea:
          "Judicial review is the Constitution's enforcement mechanism — the heir of Magna Carta's security clause. It is a self-made power the Constitution does not explicitly grant. The countermajoritarian difficulty is the price. The debate about how it should be used is the permanent debate of constitutional law.",
        tryThis: [
          {
            title: "Read Article III, Marbury, and the security clause",
            minutes: 40,
            steps: [
              "Read Article III of the Constitution. Look for the power to strike down laws. It is not there.",
              "Read Marbury v. Madison (1803). Find Marshall's argument: the Constitution is supreme law, laws conflicting with it are void, it is the judiciary's job to say what the law is. Is this textual or structural?",
              "Read Magna Carta clause 61 (the security clause): 25 barons authorized to seize royal property. Compare: armed barons vs. courts with opinions. Both enforce limits. Both are imperfect. The security clause led to civil war. Judicial review leads to judicial supremacy — the rule of five justices.",
              "Find one modern response to the countermajoritarian difficulty: originalism (interpret according to original meaning), living constitutionalism (adapt to changing circumstances), Thayerian deference (defer to elected branches), popular constitutionalism (interpretation is not just for courts). Which is most convincing?",
            ],
          },
        ],
        dinnerQuestion:
          "If judicial review is a self-made power that the Constitution does not explicitly grant, and it allows unelected judges to overrule elected representatives, what is its claim to legitimacy? Is it 220 years of acceptance? Is it the structural argument? Or is it the necessity of enforcement?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is judicial review constitutional?' Then ask: 'What did your answer assume?' The model will take a position. The honest answer is: it depends on whether you read the Constitution's structure as granting it. The text does not. The structure might. The debate is the lesson." },
          { label: "History", note: "Magna Carta's security clause (armed barons) and judicial review (courts with opinions) are two answers to the same question: how do you enforce limits on the government? The charter's answer failed (civil war). The Constitution's answer has held for 220 years. Both are imperfect. The search for a better mechanism continues." },
        ],
        ifTheySay: [
          {
            heard: "Judicial review is in the Constitution.",
            reply: "It is not. Article III says courts decide cases 'arising under this Constitution.' It does not say courts can invalidate laws. The power was established by the Supreme Court itself in Marbury v. Madison (1803). Marshall's argument is constructed from the Constitution's structure (the Supremacy Clause, life tenure, judicial independence) — not from an explicit grant. Federalist 78 suggests the framers anticipated it, but the text does not grant it. The Court took the power. It has been accepted for 220 years. But acceptance is not the same as textual basis. The distinction matters: if judicial review is in the text, it is constitutional. If it is constructed from the structure, it is an interpretation — and interpretations can be challenged. The 220 years of acceptance make it practically unassailable. But the textual basis is still weak. Both things are true.",
          },
          {
            heard: "Five justices shouldn't be able to overrule the will of the people.",
            reply: "This is the countermajoritarian difficulty — the central question of constitutional law. Five justices can overrule the elected branches. But the Constitution is designed to be counter-majoritarian: the Senate (equal representation), the Electoral College, the amendment supermajority, and judicial review all limit majority rule. The question is not whether judicial review is democratic. It is not. The question is whether constitutional limits mean anything without enforcement. If the majority can do whatever it wants, the Constitution is a suggestion. If courts can stop the majority, the Constitution is a rule. The framers chose rules over suggestions. The price is judicial review — the power of unelected judges to say what the Constitution means. The debate about how that power should be used — originalism, living constitutionalism, deference, popular constitutionalism — is the permanent debate. It will not be resolved. It is the conversation.",
          },
        ],
        integrity:
          "Do not let the model present judicial review as being in the Constitution or as a settled, uncontested power. Read Article III. Read Marbury. Read the Magna Carta security clause. The self-made power, the countermajoritarian difficulty, and the enforcement parallel are the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize judicial review in three sentences.' Then ask: 'What did you skip?' The model will skip the lack of textual basis, the countermajoritarian difficulty, and the Magna Carta parallel. Each skip is a piece of the story. The compression is the lesson.",
          evaluate: [
            "Can they explain the origin of judicial review in Marbury v. Madison?",
            "Do they understand the Constitution does not explicitly grant it?",
            "Can they explain the countermajoritarian difficulty?",
            "Can they connect judicial review to Magna Carta's security clause?",
            "Can they engage at least one response to the countermajoritarian difficulty (originalism, living constitutionalism, etc.)?",
          ],
        },
      },
    },
  }),

  // ── 6. The Amendment Chain: How the Constitution Changes ───────────
  ...expand({
    slug: "amendment-chain",
    subject: "history",
    unit: "The Constitution — Designed, Not Extracted",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Constitution That Can Change",
        dek: "The Constitution has been changed 27 times. The framers built a way to fix it. They knew it was not perfect.",
        objective:
          "The student can explain how the Constitution changes through amendments and why the amendment process matters.",
        parentBriefing:
          "This sitting is about the Constitution's built-in capacity for change. Article V provides the amendment process: two-thirds of Congress (or a convention) proposes an amendment, three-fourths of the states ratify it. This is hard — it requires broad consensus. But it is possible. The Constitution has been amended 27 times. The first ten (the Bill of Rights) were the Anti-Federalists' price for ratification. The 13th abolished slavery. The 14th granted equal protection. The 15th prohibited racial discrimination in voting. The 19th enfranchised women. The 26th lowered the voting age to 18. Each amendment corrected a flaw in the original document or extended a right the original excluded. The student should understand that the Constitution was designed to be changed. The framers knew it was not perfect. They built a mechanism for correction. The amendment process is slow and hard — but it works. The story of the Constitution is the story of a document that grows through amendment.",
        hardEdges: [
          "Do not present the Constitution as perfect or unchanging. It has been changed 27 times. The framers expected amendments.",
          "Do not skip the hard amendments: the 13th (abolished slavery), the 14th (equal protection), the 19th (women's vote). Each corrected a flaw in the original.",
        ],
        reading: [
          {
            heading: "How it changes",
            body: "Article V of the Constitution says how to change it. An amendment needs two-thirds of Congress to propose it and three-fourths of the states to ratify it. That is hard. It takes broad agreement across the country. But it is possible. The Constitution has been amended 27 times. The framers built this mechanism because they knew the document was not perfect. Jefferson wrote: 'Laws and institutions must go hand in hand with the progress of the human mind.' Madison expected regular amendments. The amendment process is the Constitution's way of growing.",
          },
          {
            heading: "What the amendments did",
            body: "The first ten amendments (the Bill of Rights, 1791) protected individual rights. The 13th Amendment (1865) abolished slavery. The 14th (1868) granted citizenship to all persons born in the US and guaranteed equal protection. The 15th (1870) prohibited racial discrimination in voting. The 19th (1920) gave women the right to vote. The 26th (1971) lowered the voting age to 18. Each amendment corrected something the original Constitution got wrong or left out. The Constitution was designed to be fixed.",
          },
        ],
        bigIdea:
          "The Constitution was designed to change. It has been amended 27 times. Each amendment corrected a flaw or extended a right. The amendment process is the Constitution's way of growing.",
        tryThis: [
          {
            title: "List the amendments that changed who counts",
            minutes: 18,
            steps: [
              "Find the 13th Amendment: abolished slavery (1865).",
              "Find the 14th: citizenship and equal protection for all persons (1868).",
              "Find the 19th: women's right to vote (1920).",
              "Talk About It: the original Constitution excluded women, slaves, and Native Americans from 'We the People.' The amendments brought them in. Who is still fighting to be included?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Constitution has been amended 27 times to fix its own flaws, what does that tell you about the document? Is it perfect, or is it a work in progress?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article V is the mechanism. The 27 amendments are the product. Read both." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is perfect and should never be changed.",
            reply: "The framers did not think it was perfect. They built Article V — the amendment process — because they expected it to be changed. Jefferson wrote that laws must go hand in hand with the progress of the human mind. Madison expected regular amendments. The Constitution has been changed 27 times. The 13th abolished slavery. The 14th granted equal protection. The 19th gave women the vote. Each amendment corrected a flaw in the original. Treating the Constitution as perfect makes it harder to fix — which is exactly what those who benefit from the status quo want. The framers designed a document to be amended, not worshipped.",
          },
        ],
        integrity: "Do not let the model present the Constitution as perfect or unchanging. Read Article V. The 27 amendments are the evidence. The document was designed to grow.",
        aiLab: {
          setup: "After reading.",
          childDoes:
            "Ask the model: 'How many times has the Constitution been amended?' Then ask: 'What did the 13th, 14th, and 19th amendments do?' Each corrected a flaw in the original. The amendments are the Constitution growing.",
          evaluate: [
            "Can they explain how the Constitution changes (Article V)?",
            "Can they name at least three amendments and what they did?",
            "Do they understand the Constitution was designed to be amended?",
          ],
        },
      },
      emerging: {
        title: "The Amendment Chain: How the Constitution Grows",
        dek: "The Constitution has been amended 27 times. Each amendment corrected a flaw or extended a right. The amendment process is the Constitution's built-in capacity for change — the mechanism the framers designed because they knew the document was not perfect.",
        objective:
          "The student can explain the amendment process (Article V), trace the major amendments and what they corrected, and understand the Constitution as a document designed to change.",
        parentBriefing:
          "This sitting traces the Constitution's growth through amendment. The student needs to understand three things. First, the mechanism: Article V provides two paths for amendment — congressional proposal (two-thirds of both houses) plus state ratification (three-fourths of states), or a convention called by two-thirds of the states. The convention path has never been used. All 27 amendments came through Congress. Second, the major amendments: the Bill of Rights (1-10, 1791) protected individual rights. The 13th (1865) abolished slavery. The 14th (1868) granted citizenship and equal protection — the amendment that transformed the Constitution from a compact among states to a guarantor of individual rights against states. The 15th (1870) prohibited racial discrimination in voting. The 17th (1913) provided for direct election of senators. The 19th (1920) enfranchised women. The 26th (1971) lowered the voting age to 18. Third, the pattern: each amendment corrected a flaw in the original or extended a right the original excluded. The Constitution excluded women, slaves, Native Americans, and the propertyless. The amendments brought them in — slowly, through struggle, over 200 years. The student should understand that the Constitution is not a fixed text. It is a living document — not because judges change it through interpretation (though they do), but because the framers built a mechanism for correction.",
        hardEdges: [
          "Do not present the Constitution as fixed or perfect. It has been amended 27 times. The framers expected amendments.",
          "Do not skip the 14th Amendment. It is the most important amendment after the Bill of Rights. It transformed the Constitution from a compact among states to a guarantor of individual rights against states.",
          "Do not present the amendment process as easy. It requires two-thirds of Congress and three-fourths of the states. It is deliberately hard — but it works.",
        ],
        reading: [
          {
            heading: "The mechanism and the amendments",
            body: "Article V provides two paths for amendment: (1) two-thirds of both houses of Congress propose an amendment, ratified by three-fourths of the state legislatures (or state conventions). This path has been used for all 27 amendments. (2) A national convention, called by two-thirds of the states, proposes an amendment, ratified by three-fourths of the states. This path has never been used — but it exists as a bypass of Congress. The amendment process is deliberately hard. It requires broad consensus: two-thirds of Congress and three-fourths of the states. This means an amendment needs support across parties, regions, and political factions. It is slow. But it works. The 27 amendments include: the Bill of Rights (1-10, 1791), the 13th (abolished slavery, 1865), the 14th (citizenship and equal protection, 1868), the 15th (voting rights regardless of race, 1870), the 17th (direct election of senators, 1913), the 19th (women's suffrage, 1920), the 22nd (two-term limit for President, 1951), the 26th (voting age 18, 1971). Each amendment corrected a flaw or extended a right. The 13th corrected the Constitution's toleration of slavery. The 14th corrected the Bill of Rights' limitation to the federal government by extending due process and equal protection to the states. The 19th corrected the exclusion of women. The Constitution was designed to grow.",
          },
          {
            heading: "The 14th Amendment: the transformation",
            body: "The 14th Amendment (1868) is the most important amendment after the Bill of Rights. It did three things. First, it granted citizenship to all persons born or naturalized in the US — overturning Dred Scott, which held that Black people could not be citizens. Second, it prohibited states from depriving any person of life, liberty, or property without due process — extending the Fifth Amendment's due process clause to the states. Third, it prohibited states from denying any person the equal protection of the laws. The 14th Amendment transformed the Constitution. Before it, the Bill of Rights applied only to the federal government. After it, the Supreme Court gradually incorporated most of the Bill of Rights against the states through the due process clause. The 14th Amendment made the federal government the guarantor of individual rights against state intrusion. It shifted the balance of American federalism: the states were no longer sovereign in the way they had been. The 14th Amendment is the constitutional basis for Brown v. Board of Education (ending segregation), Roe v. Wade (privacy), Obergefell v. Hodges (marriage equality), and every modern civil rights case. It is the amendment that made the Constitution what it is today.",
          },
        ],
        bigIdea:
          "The Constitution was designed to change. It has been amended 27 times. Each amendment corrected a flaw or extended a right. The 14th Amendment transformed the Constitution from a compact among states to a guarantor of individual rights. The amendment process is the mechanism the framers built because they knew the document was not perfect.",
        tryThis: [
          {
            title: "Trace the amendments",
            minutes: 30,
            steps: [
              "Read Article V. Write the two paths for amendment. Why is the process hard? Why did the framers make it hard?",
              "List the major amendments: 1-10 (Bill of Rights), 13 (abolished slavery), 14 (equal protection), 15 (voting rights), 19 (women's vote), 26 (voting age 18). For each, write one sentence: what did it correct or extend?",
              "Read the 14th Amendment. Find: citizenship clause, due process clause, equal protection clause. How did it transform the Constitution from a compact among states to a guarantor of individual rights?",
              "Reflect: the original Constitution excluded women, slaves, Native Americans, and the propertyless. The amendments brought them in — slowly, through struggle. Who is still fighting for inclusion?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Constitution has been amended 27 times to correct its own flaws, and the 14th Amendment transformed it from a compact among states to a guarantor of individual rights, is the Constitution the 1787 text or the 27-amendment document? Which one is 'the Constitution'?",
        transfer: [
          { label: "Thinking", note: "Source before summary: Article V is the mechanism. The 27 amendments are the product. The 14th is the transformation. Read all three." },
          { label: "AI", note: "Ask the model: 'How many amendments does the Constitution have?' Then ask: 'What did the 14th Amendment change?' The model will say it granted equal protection. Ask: 'How did it transform the relationship between federal and state government?' The transformation is the story." },
          { label: "History", note: "Magna Carta was reissued three times and confirmed by Edward I. The Constitution has been amended 27 times. Both documents grew through revision. The charter grew through reissue and reinterpretation. The Constitution grows through amendment and interpretation." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution is a dead document. It hasn't changed in centuries.",
            reply: "It has changed 27 times. The 13th Amendment abolished slavery (1865). The 14th granted equal protection (1868). The 19th gave women the vote (1920). The 26th lowered the voting age to 18 (1971). The most recent amendment (the 27th, on congressional pay) was ratified in 1992 — 200 years after it was proposed. The Constitution changes slowly, but it changes. The amendment process is hard by design: two-thirds of Congress and three-fourths of the states. But it works. The framers built Article V because they knew the document was not perfect. They expected amendments. Jefferson wrote that laws must go hand in hand with the progress of the human mind. The Constitution has done that — 27 times.",
          },
          {
            heard: "The 14th Amendment just gave rights to Black people.",
            reply: "It did more than that. The 14th Amendment (1868) granted citizenship to all persons born or naturalized in the US — overturning Dred Scott. It prohibited states from depriving any person of life, liberty, or property without due process. It prohibited states from denying any person equal protection. The 14th Amendment transformed the Constitution from a compact among states to a guarantor of individual rights against states. Before it, the Bill of Rights applied only to the federal government. After it, the Supreme Court incorporated most of the Bill of Rights against the states through the due process clause. The 14th is the constitutional basis for Brown v. Board (ending segregation), Loving v. Virginia (interracial marriage), Roe v. Wade (privacy), and Obergefell (marriage equality). It did not just give rights to Black people. It made the federal government the guarantor of individual rights against all state intrusion. That is the transformation.",
          },
        ],
        integrity:
          "Do not let the model present the Constitution as fixed or perfect. Read Article V. Read the 27 amendments. The 14th is the transformation. The document was designed to grow. The growth is the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'Summarize the amendment history of the Constitution in three sentences.' Then ask: 'What did you skip?' The model will skip the 14th Amendment's transformation of federalism. The transformation is the story.",
          evaluate: [
            "Can they explain the amendment process (Article V)?",
            "Can they trace the major amendments and what they corrected?",
            "Do they understand the 14th Amendment's transformative role?",
            "Do they understand the Constitution was designed to be amended?",
          ],
        },
      },
      adult: {
        title: "The Amendment Chain: The Living Document",
        dek: "The Constitution has been amended 27 times. Each amendment corrected a flaw or extended a right. The amendment process — and the 14th Amendment in particular — transformed the Constitution from a compact among states into a guarantor of individual rights. The document was designed to grow.",
        objective:
          "The parent can explain the amendment process (Article V), trace the major amendments and what they corrected, understand the 14th Amendment's transformative role, and engage the debate about how the Constitution changes — through amendment, interpretation, or practice.",
        parentBriefing:
          "This is the capstone of the Constitution unit. The parent should leave with three things. First, the mechanism: Article V provides the amendment process — deliberately hard (two-thirds of Congress, three-fourths of the states) but workable (27 amendments). Second, the transformation: the 14th Amendment (1868) is the most important amendment after the Bill of Rights. It granted citizenship, extended due process to the states, and guaranteed equal protection. It transformed the Constitution from a compact among states to a guarantor of individual rights against states. It is the constitutional basis for Brown, Roe, Obergefell, and every modern civil rights case. Third, the three mechanisms of change: the Constitution changes through (1) formal amendment (27 times), (2) judicial interpretation (Marbury, Brown, Obergefell — the text does not change, but its meaning does), and (3) custom and practice (judicial review itself, the two-party system, the filibuster — none in the text, all part of the constitutional order). The parent should understand that the Constitution is not a fixed text. It is a living document — not only through interpretation, but through the amendment mechanism the framers built. The question is not whether the Constitution changes. It does. The question is how it should change — through amendment, through interpretation, or through practice — and who gets to decide.",
        hardEdges: [
          "Do not present the Constitution as fixed or perfect. It has been amended 27 times. The framers expected amendments.",
          "Do not skip the 14th Amendment. It is the transformation. Without it, the Bill of Rights applies only to the federal government, and states can restrict speech, establish religions, and deny due process.",
          "Do not present the three mechanisms of change as equivalent. Amendment is the hardest and most durable. Interpretation is the most common and most contested. Custom is the most invisible and most powerful.",
        ],
        reading: [
          {
            heading: "The three mechanisms of change",
            body: "The Constitution changes through three mechanisms. First, formal amendment (27 times): Article V provides the process — two-thirds of Congress proposes, three-fourths of the states ratify. The 13th abolished slavery. The 14th granted citizenship and equal protection. The 19th enfranchised women. Each amendment corrected a flaw in the original. Second, judicial interpretation: the text does not change, but its meaning does. Marbury v. Madison (1803) established judicial review — not in the text. Brown v. Board (1954) ended legal segregation — through interpretation of the 14th Amendment's equal protection clause. Obergefell v. Hodges (2015) established marriage equality — through interpretation of the 14th Amendment's due process and equal protection clauses. The text stayed the same. The meaning changed. Third, custom and practice: many constitutional practices are not in the text. Judicial review is a judicial creation. The two-party system is not in the Constitution. The filibuster is a Senate rule. Presidential cabinets, the State of the Union address, and the convention system are all customs, not text. The Constitution is not just the four pages. It is the four pages plus 27 amendments plus 230 years of interpretation and practice. The question is not whether the Constitution changes. It does. The question is how it should change — and who decides.",
          },
          {
            heading: "The 14th Amendment: the constitutional transformation",
            body: "The 14th Amendment (1868) is the most important amendment after the Bill of Rights. It did three things. First, it granted citizenship to all persons born or naturalized in the US — overturning Dred Scott, which held that Black people could not be citizens. Second, it prohibited states from depriving any person of life, liberty, or property without due process — extending the Fifth Amendment's due process clause to the states and making the Bill of Rights applicable to state governments through the doctrine of incorporation. Third, it prohibited states from denying any person the equal protection of the laws. The 14th Amendment transformed the Constitution from a compact among sovereign states to a guarantor of individual rights against state intrusion. Before it, the Bill of Rights applied only to the federal government. After it, the Supreme Court gradually incorporated most of the Bill of Rights against the states. The 14th Amendment is the constitutional basis for Brown v. Board (ending segregation), Loving v. Virginia (interracial marriage), Roe v. Wade (privacy), and Obergefell v. Hodges (marriage equality). It is the amendment that made the Constitution what it is today — a document that protects individual rights against all government action, federal and state. The original Constitution excluded women, slaves, Native Americans, and the propertyless. The amendments brought them in — slowly, through struggle, over 200 years. The Constitution is not the 1787 text. It is the 1787 text plus 27 amendments plus 230 years of interpretation. The living document is the real Constitution.",
          },
        ],
        bigIdea:
          "The Constitution changes through amendment (27 times), interpretation (Marbury, Brown, Obergefell), and custom (judicial review, the two-party system). The 14th Amendment transformed it from a compact among states to a guarantor of individual rights. The Constitution is not the 1787 text. It is the living document — the text, the amendments, and the practice.",
        tryThis: [
          {
            title: "Trace the three mechanisms of change",
            minutes: 40,
            steps: [
              "List the three mechanisms: amendment (27 times), interpretation (judicial review, Brown, Obergefell), custom (two-party system, filibuster, judicial review itself). For each, find one example.",
              "Read the 14th Amendment. Find: citizenship clause, due process clause, equal protection clause. How did it transform the Constitution from a compact among states to a guarantor of individual rights?",
              "Trace one right from exclusion to inclusion through the amendment chain: women excluded in 1787 → 19th Amendment (1920) → full political participation. What took so long? Whose work was it?",
              "Reflect: the Constitution is not the 1787 text. It is the text plus 27 amendments plus 230 years of interpretation and practice. Which mechanism of change is most legitimate? Which is most dangerous? Who decides?",
            ],
          },
        ],
        dinnerQuestion:
          "If the Constitution changes through amendment, interpretation, and custom, which mechanism is most democratic? Which is most dangerous? And if the Constitution is not the 1787 text but the living document, who is responsible for maintaining it?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How does the Constitution change?' Then ask: 'Which mechanism is most democratic, and which is most dangerous?' The model will list amendment and interpretation. Ask: 'What about custom?' Custom — judicial review, the two-party system, the filibuster — is the invisible mechanism. The invisibility is the lesson." },
          { label: "History", note: "Magna Carta grew through reissue and reinterpretation. The Constitution grows through amendment, interpretation, and custom. Both documents outgrew their authors. The charter became the rule of law through eight centuries of reinterpretation. The Constitution became a guarantor of individual rights through 27 amendments and 230 years of interpretation." },
        ],
        ifTheySay: [
          {
            heard: "The Constitution should be interpreted according to its original meaning, not changed through interpretation.",
            reply: "Originalism is one response to the question of how the Constitution should change. It argues that judges should interpret the Constitution according to its original meaning, not their own values. This is a legitimate position — but it is not as simple as it sounds. The 14th Amendment says 'equal protection.' What did 'equal protection' mean in 1868? Did it mean ending segregation? The framers of the 14th Amendment did not all think so — many of them segregated schools. Brown v. Board held that 'equal protection' means segregation is unconstitutional. Was that originalism or living constitutionalism? Both sides claim the 14th Amendment. The debate is not about whether to follow the text. It is about what the text means — and meaning is always interpretation. Originalism limits judicial discretion. Living constitutionalism accepts it. Both are responses to the same question: who decides what the Constitution means? The answer is: we all do — through amendment, through interpretation, through practice, through political action. The debate is the conversation.",
          },
          {
            heard: "We should just amend the Constitution instead of letting judges change it.",
            reply: "Amendment is the hardest and most durable mechanism of change — and it is deliberately hard. Two-thirds of Congress and three-fourths of the states. That means broad consensus across parties, regions, and factions. It is slow. But when it works, it is permanent: the 13th Amendment cannot be overturned by a court. Interpretation is faster but less stable: Roe v. Wade was overturned by Dobbs (2022). The trade-off is between durability and adaptability. Amendment is durable but slow. Interpretation is fast but reversible. Custom is invisible and powerful but unaccountable. The framers designed the amendment process to be hard because they wanted change to be deliberate, not impulsive. But they also expected amendments — Madison proposed twelve in the First Congress. The question is not whether to amend or interpret. Both are part of the design. The question is when to use each — and who decides when amendment is necessary.",
          },
        ],
        integrity:
          "Do not let the model present the Constitution as a fixed text that only changes through amendment. Read Article V. Read the 14th Amendment. Find the three mechanisms of change. The Constitution changes through amendment, interpretation, and custom. All three are part of the story. None alone is the whole story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'How does the Constitution change?' Then ask: 'What did you skip?' The model will list amendment and interpretation. Ask: 'What about custom?' Judicial review, the two-party system, the filibuster — none in the text, all part of the constitutional order. The invisible mechanism is the lesson.",
          evaluate: [
            "Can they explain the three mechanisms of constitutional change?",
            "Can they trace the 14th Amendment's transformative role?",
            "Can they identify at least one right that expanded through the amendment chain?",
            "Do they understand the debate between originalism and living constitutionalism as a response to how the Constitution changes?",
          ],
        },
      },
    },
  }),
];
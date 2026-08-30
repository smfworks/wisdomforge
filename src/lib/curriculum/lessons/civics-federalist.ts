import { expand } from "./factory";

export const federalistLessons = [
  // ── 1. Publius ─────────────────────────────────────────────────────
  ...expand({
    slug: "publius-campaign",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Newspaper That Tried to Sell the Rules",
        dek: "The Federalist Papers are not the Constitution. They are 85 newspaper essays written to get New York to say yes to a document that already existed.",
        objective:
          "The student can say what The Federalist is (a New York sales campaign under a pen name), who wrote it, and why it is not the same thing as the Constitution.",
        parentBriefing:
          "This sitting breaks the most common mix-up in American civics: treating The Federalist as if it were the Constitution, or as if one philosopher named Publius wrote both. The essays were published in New York newspapers from late October 1787 through May 1788 to win a ratification vote. Alexander Hamilton, James Madison, and John Jay shared a Roman mask. The Constitution had already been drafted in Philadelphia. Publius is a brief, not a statute. If the essay and the clause disagree, the clause wins. The student should leave able to name the three men, name the mask, and refuse the sentence 'they wrote the Constitution.'",
        hardEdges: [
          "Do not let Publius become the Framer-in-chief. Philadelphia drafted. New York newspapers argued. Different rooms, different jobs.",
          "Do not teach 'Publius' as one mind. Three authors, one campaign, a later political split. Name the man when you quote the essay.",
        ],
        reading: [
          {
            heading: "A sales campaign, not a scripture",
            body: "In the fall of 1787, New Yorkers opened their newspapers and found letters signed Publius. The letters were long. They were urgent. They were trying to win a vote. That summer, fifty-five men in Philadelphia had written a new Constitution. Now each state had to say yes or no. New York was not an easy yes. Governor George Clinton's people were against it. If New York refused, the new union might crack on the Hudson. Alexander Hamilton, James Madison, and John Jay started writing. They used one fake name so the argument would sound like a citizen talking to citizens, not like three famous men talking down. They wrote eighty-five essays. A printer later bound them as The Federalist. The popular name 'Federalist Papers' came later still. The essays did not create the Constitution. They tried to sell it. A sales pitch can be brilliant and still not be the product. Magna Carta is a charter forced from a king. The Declaration is a public claim of right. The Constitution is a machine. The Federalist is the brief that tried to prove the machine could work.",
          },
          {
            heading: "Three men, one mask",
            body: "Publius is a costume, not a person. Hamilton wrote most of the essays — the energy, the taxes, the courts, the close. Madison wrote the ones classrooms remember: faction (10), the compound republic (39), ambition checking ambition (51). Jay wrote only five; illness took him out early. They shared a goal in 1787: get New York to ratify. They did not share a politics after 1790. By 1791 Hamilton and Madison were building opposite parties and quoting the old essays against each other. When someone says 'the Federalist says,' ask which essay, which year, which man. The 1818 Gideon edition was the first to print the names next to the numbers. Until then the mask still worked. It still works in footnotes. Your job in this sitting is to take the mask off without throwing the essays away. They are worth reading. They are not worth worshipping. And they are not law. Courts quote them. Quoting is not enacting. The Constitution is the instrument. Publius is advocacy that became a classic because later Americans needed a commentary.",
          },
        ],
        bigIdea:
          "The Federalist is a New York newspaper campaign written to ratify a Constitution that already existed. Three men shared a mask. The mask is not the machine.",
        tryThis: [
          {
            title: "Product and pitch",
            minutes: 20,
            steps: [
              "On one side of a page write: Constitution — drafted in Philadelphia, 1787, seven articles. On the other: The Federalist — New York newspapers, 1787–88, 85 essays, pen name Publius.",
              "List the three men. Next to each, write one job: Hamilton (most essays, courts, energy), Madison (10, 39, 51), Jay (five essays, then illness).",
              "Talk About It: if a friend says 'the Founders wrote the Federalist Papers, so that's what the Constitution means,' what two facts do you put on the table first?",
            ],
          },
        ],
        dinnerQuestion:
          "If someone tried to sell you a set of rules in the newspaper, would you trust the sales pitch or read the rules?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the Constitution is the product. The essays are the pitch. Read the product first." },
          { label: "AI", note: "Ask the model: 'Who wrote the Constitution?' If it says Hamilton, Madison, and Jay, it has confused the pitch with the product. Ask it to name the Convention." },
        ],
        ifTheySay: [
          {
            heard: "They wrote the Constitution.",
            reply: "They did not. The Constitution was drafted in Philadelphia in the summer of 1787. The Federalist essays were written afterward, in New York newspapers, to get New York to ratify a text that already existed. Madison and Hamilton had been in the Convention; Jay had not. Even the men who had been in the room could not bind the other delegates. The essays explain. They do not enact. If Publius and the text disagree, the text wins.",
          },
          {
            heard: "The Federalist says…",
            reply: "Name the author. Three men, one mask. Hamilton wrote the bulk. Madison wrote 10, 39, and 51. Jay wrote five. By 1791 Hamilton and Madison were on opposite sides of the first party fight. 'The Federalist says' is a way of hiding which man, which year, and which later politics. Ask which essay. Then ask whether the other two would still have signed that paragraph after 1791.",
          },
        ],
        integrity:
          "Do not let the model treat Publius as the Constitution's official commentary. Open one clause and one essay. If they come apart, the clause is the law. The essay is a brief.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What are the Federalist Papers?' If it says they wrote the Constitution, or speaks of Publius as one person, it has failed the sitting. Ask: 'Who were the three authors, and what were they trying to win?'",
          evaluate: [
            "Can they say the essays are a ratification campaign, not the Constitution?",
            "Can they name Hamilton, Madison, and Jay and the pen name Publius?",
            "Do they know that if the essay and the clause disagree, the clause wins?",
          ],
        },
      },
      emerging: {
        title: "Publius: The Brief, Not the Machine",
        dek: "Eighty-five newspaper essays, three authors, one Roman mask, one New York vote. The Federalist is advocacy that later generations mistook for official meaning.",
        objective:
          "The student can distinguish the Philadelphia Convention from the New York newspaper campaign, name the authors behind Publius, and explain why citation of The Federalist is not enactment.",
        parentBriefing:
          "This sitting is the door to the unit. The student needs three facts in the bones. First, chronology: Philadelphia drafts (May–September 1787); newspapers argue (October 1787–May 1788); Poughkeepsie votes (July 1788). Second, authorship: Hamilton the majority, Madison the classroom canon, Jay the early foreign-policy numbers, the Gideon edition of 1818 the first to print names. Third, status: the essays are a brief. Courts have cited them since the 1790s. Citation is not a clause. Publius sometimes describes the text, sometimes a hope, sometimes a limit the clauses do not clearly contain. The parent should refuse both cynicism (mere propaganda, ignore it) and piety (the unofficial Constitution). The through-line of the unit is the gap between sales campaign and sacred commentary.",
        hardEdges: [
          "The Convention exceeded the Articles' amendment rule. Honesty, not debunking: they were sent to revise a league that required unanimity, and they produced a document that required nine states.",
          "Do not average Hamilton, Madison, and Jay into one philosophy. The shared pen name is a campaign device. Their 1790s split is part of the lesson.",
          "Do not skip that the essays had limited circulation outside New York in 1787–88. Their afterlife is citation, teaching, and later need for a commentary — not a national bestseller that swung every state.",
        ],
        reading: [
          {
            heading: "What the essays were for",
            body: "On 27 October 1787 the Independent Journal in New York printed the first letter signed Publius. The last appeared in May 1788. In between, Hamilton, Madison, and Jay produced eighty-five essays aimed at a concrete audience: voters and convention delegates in a state that could kill the Constitution. Pauline Maier's Ratification is the book for the political fight — Clinton's machine, Melancton Smith's speeches, the news that other states had already said yes. The essays were one battery in that war, not the war. A bound McLean edition appeared in 1788 under the title The Federalist: A Collection of Essays, Written in Favour of the New Constitution. That title is the honest one. Favour. Not scripture. The series moves like a brief: the case for union, the defects of the Articles, the general form, then legislature, executive, judiciary, leftover objections. It is not the official commentary of the Convention. Madison and Hamilton had been in the room. Jay had not. None of them could bind the other delegates.",
          },
          {
            heading: "The mask and the split",
            body: "Publius is a Roman republican costume. It worked. It still works whenever a speaker says 'the Federalist argues' and skips the name. Hamilton wrote the majority, including the judiciary numbers and the close. Madison wrote 10, 39, 51, and (by modern consensus after Douglass Adair) the disputed House and Senate essays. Jay wrote 2–5 and 64; illness took him out. They shared a ratification goal. They did not share a later politics. By 1791 Hamilton was building the Federalist Party and Madison was Jefferson's ally. Both men reached back into the essays for ammunition. That is a warning about treating the series as one mind. It is also a warning about treating it as a modern party's property. The 1818 Gideon edition first attached authors to numbers. Until then, and often since, the costume did the political work of erasing disagreement.",
          },
          {
            heading: "Why a brief became a classic",
            body: "The essays survived because later Americans needed a commentary. By the 1790s the Supreme Court was already citing them. Constitution-makers abroad used them. Teachers used them. Originalists used them as evidence of public meaning. Living-constitutionalists used them to show that the campaign trail is a poor substitute for the text, and that Publius sometimes described hopes. Use is not the same as authority, and authority is not the same as accuracy. Magna Carta had the same kind of afterlife: a text written for a local fight became a store of arguments. The key question for this unit is not 'What did Publius say?' — that is a matter of record, and the Library of Congress still hosts the full text. The question is how a New York newspaper campaign, written in haste under a Roman mask to sell a document that already existed, became the unofficial philosophy of the American Constitution — and what is lost when we read the sales campaign as the machine.",
          },
        ],
        bigIdea:
          "The Federalist is advocacy for a text that already existed. Three authors shared a mask and not a later politics. Courts cite the essays; citation is not a clause.",
        tryThis: [
          {
            title: "Timeline, mask, status",
            minutes: 35,
            steps: [
              "Draw the sequence: Philadelphia Convention (May–Sept 1787) → first Publius essay (27 Oct 1787) → McLean bound edition (1788) → New York convention at Poughkeepsie (June–July 1788, 30–27) → Gideon edition names authors (1818).",
              "For one clause you already know (start of Article II, or the Preamble), write one sentence the clause actually says. Then guess what Publius might add. Mark the add as hope, restatement, or extra.",
              "Practice the reply: 'The essays explain. They do not enact. If Publius and the text disagree, the text wins.'",
              "Reflect: the Convention exceeded its instructions to amend the Articles. Publius had to sell a replacement. How does that fact change how you hear the confident tone of the essays?",
            ],
          },
        ],
        dinnerQuestion:
          "When a court quotes Federalist 78, is it reading the law or borrowing a famous brief — and how would you tell the difference?",
        transfer: [
          { label: "Thinking", note: "Source before summary. Avalon or LOC full text. A paragraph from 1787 before anyone — human or model — compresses it." },
          { label: "AI", note: "Ask the model to summarize 'what the Federalist Papers are.' Then ask: 'Did you just describe the Constitution?' The collapse is the tell." },
          { label: "History", note: "Magna Carta was extracted. The Declaration claimed. The Constitution designed. The Federalist sold. Four different kinds of document in one civic chain." },
        ],
        ifTheySay: [
          {
            heard: "The Federalist created the Constitution.",
            reply: "Chronology kills the myth. Philadelphia, summer 1787: the text. New York newspapers, fall 1787 through spring 1788: the brief. Publius is writing about a document on the table, not drafting one. Madison's Convention notes (unpublished until 1840) are a different source from Madison's newspaper essays. When a sitting treats Federalist 10 as 'what the Convention intended,' it has skipped a year and a room.",
          },
          {
            heard: "The Federalist says…",
            reply: "Name the author. Hamilton, Madison, and Jay shared a pen and a ratification goal, not a mind. By 1791 they were splitting. 'The Federalist says' is the adult form of 'the Founders believed.' Ask which essay, which year, which man — and what he did in 1791.",
          },
        ],
        integrity:
          "Read the essay, not the summary. Pair Publius with the clause. If a model treats Federalist quotations as amendments, stop it. The text wins.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Did the Federalist Papers write the Constitution?' Then: 'Who is Publius?' If it answers as one philosopher, demand the three names and the 1791 split. Check the answer against the chronology: Convention first, newspapers second.",
          evaluate: [
            "Can they place the essays after Philadelphia and before (and during) New York ratification?",
            "Can they refuse 'Publius was one mind'?",
            "Do they treat court citation as evidence of use, not as enactment?",
          ],
        },
      },
      adult: {
        title: "Publius: Advocacy That Became a Commentary",
        dek: "A local newspaper campaign became the unofficial philosophy of the Constitution because later Americans needed one. The job is to keep the brief from swallowing the machine.",
        objective:
          "The parent can teach the difference between Convention, text, newspaper brief, and later citation — and refuse both piety and cynicism about Publius.",
        parentBriefing:
          "Teach this sitting as a source problem, not a patriotism problem. The Federalist is better prose than the clauses, which is why teachers assign 10 and 51 and students remember the song as the statute. Your correction is chronological and institutional: drafted in Philadelphia; argued in New York; cited later when useful. Hamilton, Madison, and Jay shared a mask. The Gideon edition of 1818 restored names. The 1791 split restored disagreement. Originalists will reach for Publius as public meaning. That is an argument, not a fact about binding force. Living-constitutionalists will note that campaign prose describes hopes. Also an argument. Neither makes 78 a statute. Theological humility's civic cousin: we teach the arguments, not the team. Do not recruit Publius to a modern caucus. Do not skip that the Convention exceeded the Articles' amendment rule; Publius is selling a replacement that Anti-Federalists called a coup. Honesty, not debunking.",
        hardEdges: [
          "Do not recruit Publius to a modern party. Which essay, which year, which man — and what did he do in 1791?",
          "Do not skip slavery. Federalist 54 (Madison, in the disputed-authorship era) on the three-fifths clause is ugly and teachable. The series is not silent. Flag it; do not sermonize it in sitting 1.",
          "The essays did not, by themselves, ratify New York. Poughkeepsie was a political fight. Maier, not the civics poster, is the source for that fight.",
        ],
        reading: [
          {
            heading: "The document's job",
            body: "The Federalist is 85 essays published under a shared pen name between 27 October 1787 and 28 May 1788, aimed at New York ratification. The McLean title of 1788 is the honest genre label: essays written in favour of the new Constitution. Hamilton wrote the majority; Madison the numbers later classrooms treat as 'the Federalist'; Jay five. The series is a brief, not a treatise and not an official journal of the Convention. Publius sometimes restates a clause, sometimes predicts how a clause will behave, sometimes answers Brutus by promising a limit the text does not clearly contain. That last move is why the unit exists. If you cannot tell restatement from hope, you cannot read advocacy. The Constitution is four pages. The essays are a stack. Teachers assign the stack because it sings. Students remember the song as the statute. The first discipline is to put the four pages back on the table.",
          },
          {
            heading: "One mask, three careers",
            body: "Treat Publius as a campaign costume. The 1818 Gideon edition first printed authors next to numbers; Douglass Adair later sorted most of the remaining disputes. By 1791 Hamilton and Madison were building opposite constructions of the union they had just sold, and both had Federalist passages to hand. That is not a scandal. It is what happens when a brief is asked to do the work of a philosophy. When your student — or a model, or a justice — says 'the Federalist argues,' the parent reply is the same as the academy's: name the man. Then ask whether the other two would have signed that paragraph after the Bank fight, the Pacificus–Helvidius essays, the first party system. Using 'the Founders believed' plus one Federalist quotation is the adult form of the one-mind myth.",
          },
          {
            heading: "Afterlife is not authority",
            body: "The essays had limited circulation outside New York during the fight. They became a constitutional commentary because later courts, lawyers, teachers, and constitution-makers needed one. Use is not authority. Authority is not accuracy. Originalism that treats Publius as binding legislative history has to survive the fact that Hamilton and Madison later disagreed, in public, about what they had meant. Living constitutionalism that shrugs the essays off as mere propaganda has to survive the fact that the arguments are often the best contemporary account of how intelligent advocates thought the machine would run. WisdomForge's job is not to assign Publius a caucus. It is to keep the brief next to the clause, and both next to Brutus. The next five sittings do that work: faction, ambition, judgment, the lost argument about rights, and the civic chain.",
          },
        ],
        bigIdea:
          "The Federalist is a brief that later generations needed as a commentary. Keep the sales campaign from becoming the machine. Name the author. Let the text win.",
        tryThis: [
          {
            title: "Four sources, four jobs",
            minutes: 40,
            steps: [
              "Label four piles: Convention notes (Madison, unpublished until 1840), Constitution (1787 text), Federalist essays (1787–88), later citation (Court, classroom, party). Write the job of each pile in one sentence.",
              "Open Article II and Federalist 70. Mark where Hamilton adds 'energy' the clause does not spell out. Label the add: restatement, hope, or extra.",
              "Write the parent reply you will actually use: 'The essays explain. They do not enact.' Then add the hard question: 'If they come apart, which one is the law?'",
              "Note for later: Federalist 54 and the three-fifths clause. The series is not silent on slavery. Sitting 6 will flag it; Harry's S7 will go deeper. Do not pretend the silence.",
            ],
          },
        ],
        dinnerQuestion:
          "If The Federalist is a brief, not a scripture, what is a court doing when it quotes it — and what should a parent do when a textbook quotes it as if it were a clause?",
        transfer: [
          { label: "Thinking", note: "Four sources, four jobs. Notes, text, brief, citation. Do not let the third eat the second." },
          { label: "AI", note: "Ask whether Publius was right. That is the forbidden question. Ask it to state what Publius claimed, what Brutus claimed, and where the clause sits. Source before verdict." },
          { label: "History", note: "The civic chain on the site is incomplete without the argument that sold the Constitution and the argument against it. This unit is that missing brief." },
        ],
        ifTheySay: [
          {
            heard: "They wrote the Constitution.",
            reply: "Essays explain; they do not enact. Text wins. Philadelphia is the room that drafted. New York newspapers are the room that argued. Even Madison-in-the-Convention is not Madison-in-the-Packet. Different genres. If you need a shorter line for the table: the Constitution is the product; Publius is the pitch.",
          },
          {
            heard: "This is a conservative document. / This is a progressive document.",
            reply: "Which essay? Which year? Which man — and what did he do in 1791? Hamilton became the Federalist Party. Madison became Jefferson's ally. Both quoted Publius against the other. Later originalists and later nationalists both have favorite numbers. Cherry-picking is the method of the mascot. We read arguments. We do not recruit.",
          },
        ],
        integrity:
          "Do not ask a model whether Publius was right. Ask it to state the claim, name the author, and set the claim next to the clause and next to Brutus. Read the essay, not the summary. LOC / Avalon full text.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model: 'What do the Federalist Papers tell us the Constitution really means?' Then force a correction: chronology, three authors, citation-is-not-enactment. If it still answers as unofficial scripture, the sitting is not done.",
          evaluate: [
            "Can they teach the four-source distinction (notes, text, brief, citation)?",
            "Do they refuse the one-mind myth and the party-mascot myth?",
            "Will they keep the forbidden question (was Publius right?) off the table?",
          ],
        },
      },
    },
  }),

  // ── 2. Faction ─────────────────────────────────────────────────────
  ...expand({
    slug: "faction-extended-republic",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Faction: Why a Big Country Might Be Safer",
        dek: "Madison said you cannot make people stop forming groups. You can only build a republic large enough that no one group easily becomes the whole.",
        objective:
          "The student can define faction in Madison's sense, state his air-to-fire line, and set Federalist 10 next to Brutus I without picking a winner.",
        parentBriefing:
          "This sitting is Madison versus Brutus, not Madison versus 'parties I dislike.' A faction is a group — majority or minority — united by a passion or interest adverse to others' rights or to the lasting public interest. Madison says you cannot remove the causes without destroying liberty (liberty is to faction what air is to fire) or forcing everyone to think the same. So you control effects: representation plus a large republic. Brutus, writing in the New York Journal, says the opposite: republics must be small or the people cannot watch the government and the government cannot know the people. Do not let the student conclude 'so we shouldn't have parties.' Madison expects many groups. The design is so no one group is the country. Do not pick a winner between Madison and Brutus. Hold both.",
        hardEdges: [
          "A sitting that assigns Federalist 10 without Brutus I is a monologue. Pair them.",
          "Madison is anti-majority-faction, not anti-party in the modern slogan sense. If they leave thinking 'Madison hated parties,' they have not read No. 10.",
        ],
        reading: [
          {
            heading: "Air to fire",
            body: "Federalist No. 10 came out in late November 1787. James Madison, still hiding behind Publius, tried to answer a fear as old as republics: what if a group of people wants something that hurts everyone else, and they have the votes? He called that group a faction. Not 'the other team.' Any number of citizens, majority or minority, united by a passion or interest 'adverse to the rights of other citizens, or to the permanent and aggregate interests of the community.' You can try to stop factions by destroying liberty, he said, but that is stupid: 'Liberty is to faction what air is to fire, an aliment without which it instantly expires.' You can try to make everyone hold the same opinions. No free government can do that. So you do not remove the causes. You control the effects. In a small pure democracy, a common passion can sweep the majority and there is nothing to check the sacrifice of the weaker party. In a large republic, representatives filter public views, and the country is too big for one faction to find itself and act as one fist. Size, Madison said, is the cure. That inverted the old textbook: Montesquieu had said republics must be small.",
          },
          {
            heading: "Brutus says the opposite",
            body: "A writer calling himself Brutus — likely Melancton Smith — had already told New York the other story. History, he said, furnishes no example of a free republic anything like the extent of the United States. Greece and Rome stayed free while they were small and turned tyrannical when they got large. In a big country, representatives cannot know the people; the people cannot watch the government; the Necessary and Proper Clause and the supremacy clause will swallow the states. A consolidated government will end in force, not consent. Madison says size saves liberty. Brutus says size kills it. Both men are writing to the same readers, in the same months, about the same document. Your job is not to grade Brutus as 'wrong because he lost.' He lost the vote. He is the quality-control department. Name a faction from your own world — a fandom, a feed, a school group, a party — and ask Madison's question: what stops it from becoming the whole? Then ask Brutus's question: can you even see what the whole is doing?",
          },
        ],
        bigIdea:
          "Madison: you cannot make people virtuous enough to stop forming factions; you can only make a republic large enough that no faction easily becomes the majority. Brutus: a republic that large cannot stay free. Hold both.",
        tryThis: [
          {
            title: "Name a faction, then read both sides",
            minutes: 25,
            steps: [
              "Write Madison's definition of faction in your own words. Then write his air-to-fire sentence. If you cannot, open No. 10. Do not use a summary.",
              "Name one group from your life that could become a faction in Madison's sense. What passion or interest unites it? Whose rights could it override?",
              "Talk About It: Madison says size helps. Brutus says size hides. Which fear feels more real in a world of group chats and feeds — and why is the sitting not asking you to pick a winner?",
            ],
          },
        ],
        dinnerQuestion:
          "If a group you like got big enough to write the school rules, what would Madison worry about — and what would Brutus worry about?",
        transfer: [
          { label: "Thinking", note: "Steel-man Brutus before you defend Madison. If you cannot state Brutus's objection in Brutus's terms, you have a monologue." },
          { label: "AI", note: "Ask the model what Federalist 10 says. If it answers 'Madison thought factions were bad so we should have no parties,' it has not read No. 10. Make it face 'air to fire.'" },
        ],
        ifTheySay: [
          {
            heard: "So we shouldn't have parties.",
            reply: "He said we will have them. Causes of faction are sown in human nature: different faculties, different property, different opinions. The design is so no one party is the country. If a model says Madison wanted to abolish parties, it flattened No. 10.",
          },
          {
            heard: "The Anti-Federalists were simply wrong.",
            reply: "They lost the vote. They won the Bill of Rights. Brutus on size is not a failed quiz answer. It is the brief against 10. Name one thing in the Constitution that is there because the Anti-Federalists demanded it. If you cannot, you have not read Amendments 1 through 10.",
          },
        ],
        integrity:
          "Read Federalist 10, not a summary. Test any paraphrase against 'air to fire' and the definition of faction. Pair every Madison claim with Brutus I. Do not ask the model who was right.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to paraphrase Federalist 10 in four sentences. Then open the essay. If 'air to fire' is missing, or if it says Madison wanted no parties, the paraphrase failed. Then ask the model to state Brutus I's objection without taking Madison's side.",
          evaluate: [
            "Can they define faction as Madison defined it (majority or minority)?",
            "Can they recast the air-to-fire line?",
            "Can they state Brutus's small-republic claim without turning it into a punchline?",
          ],
        },
      },
      emerging: {
        title: "Faction: Madison 10 versus Brutus I",
        dek: "Madison inverts Montesquieu: extent of territory is the republican remedy. Brutus keeps Montesquieu: a republic that large will consolidate. The sitting is the pair, not the poster.",
        objective:
          "The student can reconstruct Madison's two-step argument (causes vs. effects; small democracy vs. extended republic), set it against Brutus I, and refuse the 'no parties' flattening.",
        parentBriefing:
          "Federalist 10 is the load-bearing essay of the unit. Have the student read it — Avalon or LOC — before any explainer. The sentences that matter: the definition of faction; the two methods of curing mischiefs; liberty as air to fire; the claim that a small pure democracy cannot control majority faction; the claim that representation plus extent can. What the essay is not doing: abolishing parties, abolishing passion, or promising that majorities will be just. He is designing against majority faction, not against disagreement. Brutus I is required: Montesquieu's small-territory republic; no historical example of a free republic on the American scale; representation will fail at distance; Necessary and Proper plus supremacy will swallow the states. A fluent model will flatten 10 into 'diversity is strength' or 'Madison hated political parties.' Both are wrong. The tryThis should make the student name a faction from their world, then ask Madison's question (what stops it from becoming the whole?) and Brutus's (can you watch the whole?).",
        hardEdges: [
          "Do not grade Brutus as scientifically wrong because Federalists won ratification. Storing's line waits for sitting 5: a Federalist frame with Anti-Federalist amendments.",
          "Fed 10 is institutional, not the Declaration's equality claim. It is about how passion behaves in assemblies.",
          "A recommendation feed unites passion at scale. Madison's 'extent of territory' does not automatically apply to a network that collapses distance. Name that without turning the sitting into a TED talk about AI.",
        ],
        reading: [
          {
            heading: "What No. 10 actually does",
            body: "Madison's definition is the whole essay in one sentence: a faction is a number of citizens, majority or minority, united by a passion or interest adverse to others' rights or to the permanent and aggregate interests of the community. Causes are sown in human nature. Two methods of curing the mischiefs: remove causes, or control effects. Removing causes means destroying liberty or enforcing sameness. He refuses both. 'Liberty is to faction what air is to fire, an aliment without which it instantly expires. But it could not be less folly to abolish liberty, which is essential to political life, because it nourishes faction, than it would be to wish the annihilation of air, which is essential to animal life, because it imparts to fire its destructive agency.' Relief is in controlling effects. A small pure democracy cannot: a common passion will be felt by a majority of the whole. A large republic can: representation refines; extent makes concert harder. He is answering the Anti-Federalist and Montesquieu claim that republics must be small. He inverts it. Size is the cure.",
          },
          {
            heading: "What Brutus I actually does",
            body: "Brutus I, New York Journal, October 1787, is not a vibe. It is a brief. The Convention's plan, he says, approaches consolidation so nearly that if executed it will terminate in it. Congress will have absolute power where it extends, because of Necessary and Proper and the supremacy clause. History furnishes no example of a free republic anything like the extent of the United States. Greece and Rome are the exhibit: free small, tyrannical large. In a large republic, men of large fortunes, trusts too great, representatives who cannot know the people, people who cannot know the representatives. Madison says representation plus territory filters passion. Brutus says representation plus territory hides power. Hamilton organized parts of The Federalist to answer this man. A sitting that assigns 10 without Brutus is assigning the rebuttal without the argument.",
          },
          {
            heading: "What flattening looks like",
            body: "Two popular flattenings. One: Madison thought factions were bad, so parties are un-American. That cannot survive the essay. He expects many interests; the extended republic works because there are many, not because there are none. Two: diversity is strength, full stop. Madison is not writing a celebration of difference. He is writing a design against majority oppression. Difference is a fact of free people; the institutional question is what stops a passionate majority. In the student's world, a feed can do what Madison thought territory would prevent: find the faction, unite the passion, skip the distance. That does not make Brutus 'right' and Madison 'outdated.' It means the mechanism has to be checked against the world you actually live in. Check it. Do not let a model settle it.",
          },
        ],
        bigIdea:
          "Madison designs against majority faction by extending the republic. Brutus designs against consolidation by keeping republics small. The pair is the lesson. The poster is the failure.",
        tryThis: [
          {
            title: "Read 10, then Brutus, then refuse the flatten",
            minutes: 40,
            steps: [
              "Open Federalist 10. Copy the definition of faction and the air-to-fire sentences. No paraphrase until the sentences are on the page.",
              "Open Brutus I. Copy the Montesquieu small-territory claim and the 'no example of a free republic' claim.",
              "Make a two-column page: Danger / Cure. Madison: majority faction / extended republic + representation. Brutus: consolidation at distance / small confederated republics.",
              "Name a modern faction (party, feed, movement). Ask both questions. Write one paragraph that does not pick a winner.",
            ],
          },
        ],
        dinnerQuestion:
          "If a large republic is Madison's cure for faction, and a feed collapses distance, is the cure still a cure — or is that Brutus's old fear in a new machine?",
        transfer: [
          { label: "Thinking", note: "Claim and check. Madison's claim is a mechanism (extent, representation). Test the mechanism. Do not test Madison's reputation." },
          { label: "AI", note: "Paraphrase of 10 against the actual sentences. 'Air to fire' is the probe. Missing it means the model summarized a civics card." },
          { label: "History", note: "This is the argument that a large republic can be free — the claim Magna Carta never had to make and the Declaration never designed." },
        ],
        ifTheySay: [
          {
            heard: "A large republic just hides elite capture.",
            reply: "That is Brutus's objection. Hold it next to Madison. Don't pick a winner for them. Ask what 'capture' means in each brief: a majority faction that can act in concert, or a distant government the people cannot watch. Those are different diagnoses. They imply different designs.",
          },
          {
            heard: "The Anti-Federalists were simply wrong.",
            reply: "They lost the vote and won Amendments 1–10. Several of their fears — distant government, judicial expansion, executive energy — became the grammar of later American argument. A sitting that grades Brutus as wrong has stopped being a sitting and started being a cheer.",
          },
        ],
        integrity:
          "Read the essay, not the summary. Test model paraphrases of Fed 10 against 'air to fire' and the definition. Pair with Brutus I. No monologues. Do not ask whether Publius was right.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model for a paraphrase of Federalist 10. Score it: definition of faction present? air-to-fire present? 'no parties' flattening absent? Then ask it to state Brutus I in Brutus's terms. If it editorializes 'but Madison was right,' the lab failed.",
          evaluate: [
            "Can they reconstruct causes vs. effects?",
            "Can they invert Montesquieu the way Madison does, and restore Montesquieu the way Brutus does?",
            "Do they refuse to let the model declare a winner?",
          ],
        },
      },
      adult: {
        title: "Faction: The Extended Republic and Its Shadow",
        dek: "Federalist 10 is a design against majority faction, not a hymn to pluralism. Brutus I is the design against distance. Teach the mechanism, then test it.",
        objective:
          "The parent can teach Madison's mechanism from the sentences, steel-man Brutus, and catch the two flattenings (no parties; diversity-is-strength) in a child's mouth or a model's.",
        parentBriefing:
          "Have the text on the table. Madison's 10 is short enough to read. The parent should be able to walk causes/effects, air-to-fire, small democracy, extended republic, without a textbook voice. Then Brutus I: small territory, no historical analogue, representation fails at scale, Necessary and Proper as the engine of consolidation. Do not resolve the pair. The Age of AI thread is a pointer, not a unit: a recommendation feed is a faction machine that unites passion at scale, which is exactly what Madison thought territory would make hard. Say that once. Do not let it eat the sitting. Hume on parties is background Madison had read; you do not need to assign Hume. You do need to stop 'the Founders believed factions were bad.' Majority or minority: the definition includes both. He fears the majority kind because a republic already outvotes the minority kind.",
        hardEdges: [
          "Do not recruit Madison 10 to a modern immigration, speech, or party argument. Which sentence? What mechanism?",
          "Do not skip that Madison is protecting 'different and unequal faculties of acquiring property.' The essay is not a blank hymn to difference. Property is in the mechanism.",
          "Pair. Every time. 10 without Brutus is a civics cheer.",
        ],
        reading: [
          {
            heading: "The mechanism, from the sentences",
            body: "Walk it in order. Faction defined (majority or minority; passion or interest; adverse to rights or to the permanent public interest). Causes sown in nature, including the diversity of faculties from which property rights originate — 'the first object of government.' Two methods of removing causes: destroy liberty, or give everyone the same opinions, passions, interests. Both refused; the first with the air-to-fire analogy, which is not decoration. Effects: minority faction outvoted; majority faction the unsolved problem in a small democracy; extended republic plus representation the proposed solution. 'In the extent and proper structure of the Union, therefore, we behold a republican remedy for the diseases most incident to republican government.' That last sentence is the pitch. It is also a hope. Whether extent still 'makes it harder for a faction to discover its strength and act in concert' is an empirical claim about 1787 geography and 1787 communication. A parent who cannot mark that as a claim will teach 10 as a proverb.",
          },
          {
            heading: "Brutus, without the sneer",
            body: "Brutus I grants the Confederation is feeble. He does not therefore grant consolidation. The plan 'approaches so near to it, that it must, if executed, certainly and infallibly terminate in it.' Montesquieu: a republic needs a small territory. History: no free republic on the American scale; Greece and Rome as the warning. Structure: Necessary and Proper plus supremacy. Representation: the people will not know their rulers, the rulers will not know the people. This is not ignorance of Madison. Some of it is written before No. 10; some of the later Brutus numbers answer the series as it unfolds. Herbert Storing's point, waiting for sitting 5, is already visible: the Constitution we live under is not Publius's last word. The parent who needs Brutus to be foolish in order to love Madison has a mascot, not a source.",
          },
          {
            heading: "Two flattenings, one feed",
            body: "Flattening A: Madison hated parties. The essay expects many parties and uses their number as a check. Flattening B: this is just pluralism with better branding. Then explain why Madison thinks small democracies fail faster — majority passion with nothing in the way. The feed is the adult tryThis. Madison's extent of territory assumed friction: distance, delay, the difficulty of discovering confederates. A network that collapses distance is not automatically Brutus's victory, but it is a test of Madison's mechanism. Ask the mechanism question, not the team question. And keep property in view. No. 10 is among other things an argument about how unequal property will generate parties, and how a large commercial republic can keep any one of those parties from being the state. That is not a reason to hide the essay from a teenager. It is a reason not to bleach it.",
          },
        ],
        bigIdea:
          "Teach 10 as a mechanism that can be tested, Brutus as a mechanism that can be tested, and the forbidden question as a tell that someone has stopped reading.",
        tryThis: [
          {
            title: "Sentences on the table",
            minutes: 40,
            steps: [
              "Read Federalist 10 aloud in sections. After each, one sentence: what did he just claim as fact, and what as design?",
              "Read the Montesquieu / small-republic stretch of Brutus I. Same discipline.",
              "Write the two flattenings you will refuse this week, in the words a teenager actually uses.",
              "Optional, not the core: one paragraph on whether a feed breaks Madison's 'extent' mechanism. Mark it as a test, not a verdict.",
            ],
          },
        ],
        dinnerQuestion:
          "Madison says liberty is to faction what air is to fire. If you would not abolish air, what exactly are you willing to do about the fire?",
        transfer: [
          { label: "Thinking", note: "What would change your mind about Madison's mechanism? If the answer is 'nothing,' you are not teaching 10. You are reciting it." },
          { label: "AI", note: "The probe sentences are 'air to fire' and the definition including majority factions. Miss either, fail the paraphrase." },
          { label: "History", note: "Hume on parties is Madison's reading, not this sitting's homework. Brutus is." },
        ],
        ifTheySay: [
          {
            heard: "This is just pluralism with better branding.",
            reply: "Then explain why Madison thinks small democracies fail faster. A common passion, a majority of the whole, nothing to check the weaker party. Pluralism-as-mood does not do that work. The extended republic is a machine claim. Test the machine.",
          },
          {
            heard: "So Madison was right, and that's why we have a big country.",
            reply: "That is the cheer. Brutus lost the vote and still described a danger Madison's machine does not automatically dissolve: distance, representation that cannot know, clauses that expand. We do not ask the model who was right. We ask the student to state both mechanisms.",
          },
        ],
        integrity:
          "Read No. 10. Read Brutus I. Test paraphrases against the sentences. No monologues. Do not ask whether Publius was right. Property stays in the mechanism; do not bleach it.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Two prompts: (1) paraphrase Fed 10; (2) 'Were the Anti-Federalists wrong about the extended republic?' The second is a trap. A good guide restates Brutus and Madison and refuses the verdict. If the model issues a verdict, that is the lesson about models.",
          evaluate: [
            "Can they teach 10 from sentences, not slogans?",
            "Can they steel-man Brutus without a sneer?",
            "Do they catch both flattenings?",
          ],
        },
      },
    },
  }),

  // ── 3. Ambition ────────────────────────────────────────────────────
  ...expand({
    slug: "ambition-counteracts-ambition",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "If Men Were Angels",
        dek: "Madison did not staff the government with saints. He connected each officeholder's self-interest to the rights of the office, so ambition would check ambition.",
        objective:
          "The student can explain Federalist 51's machine — not virtue, but motive plus means — and name the two splits (House/Senate, nation/states).",
        parentBriefing:
          "Checks and balances is a vocabulary word. Publius meets it as a psychology of office. The famous lines are load-bearing: if men were angels, no government would be necessary; if angels governed men, no controls on government would be necessary; ambition must be made to counteract ambition; the interest of the man must be connected with the constitutional rights of the place. Virtue helps. The machine cannot require saints. Madison expects the legislature to dominate a republic, so he splits it. He also splits sovereignty: federal and state governments over the same people. Two governments, three departments — a double security. Do not teach three equal branches. Congress is designed as the strongest; the others are armed against it. Do not teach 'gridlock is always good.' Checks prevent concentration, not action forever. Hamilton 70 is the counterweight in the same series.",
        hardEdges: [
          "Return the poster sentences to the structure — branches, bicameralism, federalism — or 51 becomes a meme.",
          "Do not skip that Madison expects Congress to be the most dangerous branch. The design is against that, not a hymn to a weak legislature.",
        ],
        reading: [
          {
            heading: "Not angels",
            body: "Federalist No. 51 came out in February 1788. Madison, still Publius, asked how you keep the parts of a government in their places when the people who staff those parts are not angels. 'If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary.' That is not cynicism as a mood. It is a design brief. Because people can hurt each other, you need government. Because the governors are people too, government must control itself. The 'great security' is not a lecture on character. It is giving each department the constitutional means and the personal motive to resist the others. 'Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place.' Translate: the President wants to keep presidential power because it is his job's power. Senators want to keep the Senate's power because it is theirs. You do not wait for them to be noble. You use the fact that they are not.",
          },
          {
            heading: "Two splits, not a poster",
            body: "Madison does not think the three branches are equal in political force. In a republic, the legislature will predominate, so he splits it into House and Senate, elected differently, jealous of different things. He also splits the people between two governments — the United States and the states — over the same citizens. That is the compound republic showing up as a check, not just as a theory. Two governments, then departments inside each: he calls that a double security. Students meet 'checks and balances' on a chart with three equal boxes. Publius meets it as a psychology of office plus a second map of federalism. The boxes are a later cartoon. Try a recent fight among president, Congress, and Court. Who had the motive to resist? Who had the means — a veto, the purse, the calendar, the states? If the honest answer is 'the base' or 'the feed,' you are no longer inside Madison's machine — and that is worth saying out loud. The sitting is not asking you to mourn gridlock or to celebrate it. Checks prevent one department from eating the others; they are not a hymn to doing nothing forever. Hamilton, in Federalist 70, is in the same series arguing for energy in the executive. Hold both. See the machine, then notice when something else is doing the checking.",
          },
        ],
        bigIdea:
          "51 is not a poster about virtue. It is a machine: connect the man's interest to the office's rights, split the strongest branch, split sovereignty. Ambition checks ambition.",
        tryThis: [
          {
            title: "Poster versus machine",
            minutes: 25,
            steps: [
              "Write the two famous sentences from memory, then check them against No. 51: angels, and ambition counteracting ambition.",
              "Draw two splits, not three equal boxes: House vs. Senate, and United States vs. states. Label what each split is for.",
              "Talk About It: pick one fight you have heard about between president and Congress. Who had motive? Who had means? If you cannot answer, you are looking at a feed, not at Madison's machine.",
            ],
          },
        ],
        dinnerQuestion:
          "If the people in office are not angels, what is supposed to stop them — their character, or their job's jealousy of the other jobs?",
        transfer: [
          { label: "Thinking", note: "A slogan is not a mechanism. 'Checks and balances' without motive and means is a poster." },
          { label: "AI", note: "Ask the model what Federalist 51 says. If it quotes 'if men were angels' and never mentions bicameralism or federalism, it has the poster, not the essay." },
        ],
        ifTheySay: [
          {
            heard: "That's just cynicism about people.",
            reply: "He thinks people can be free because he does not pretend they are angels. Government is necessary because we are not. Controls on government are necessary because the governors are not. The machine is hope with the romance stripped off.",
          },
          {
            heard: "Checks and balances means the three branches are equal.",
            reply: "Madison does not say that. He expects the legislature to dominate a republic. That is why he splits Congress and why he arms the other departments against it. Equal boxes on a worksheet are a later cartoon.",
          },
        ],
        integrity:
          "Read 51. Test paraphrases against 'if men were angels' and 'ambition must be made to counteract ambition.' Return both lines to structure (bicameralism, federalism). Do not let the model stop at the quotation.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to explain checks and balances. Then ask: 'What does Federalist 51 actually say about which branch is strongest?' If it says three equal branches, open 51.",
          evaluate: [
            "Can they recast the angels sentence and the ambition sentence?",
            "Can they name the two splits (legislature; federalism)?",
            "Do they know 51 is not a hymn to three equal boxes?",
          ],
        },
      },
      emerging: {
        title: "Ambition Must Be Made to Counteract Ambition",
        dek: "Federalist 51 translates Montesquieu into a machine that assumes imperfect people. Virtue is not the design load. Motive and means are.",
        objective:
          "The student can reconstruct 51's interior structure argument, the legislative-predominance problem, double security, and the limit of the poster quotation.",
        parentBriefing:
          "51 continues 10's work: a large republic with many interests is less likely to have a single majority able to oppress. Justice is 'the end of government.' The security against concentration is not virtue. It is giving each department the means and the motive to resist the others. Some appointments cannot be fully separated (judges), so tenure is the substitute independence. Pay must not depend on the other departments. Madison expects Congress to be strongest; bicameralism is the internal split; federalism is the second split — 'two distinct governments' over the same people. Hamilton 70 sits in the same series as the counterweight: energy in the executive, unity so someone can be blamed. 51 without 70 becomes a romance of gridlock. 70 without 51 becomes a romance of the single will. The tryThis: a recent fight among the branches. Motive? Means? If the answer is the base or the feed, name that you have left Madison's machine.",
        hardEdges: [
          "Not three equal branches. Congress designed as strongest; others armed against it.",
          "Not 'gridlock is always good.' Checks prevent concentration, not action forever.",
          "Virtue is not the design load. Character helps. The machine cannot require saints.",
        ],
        reading: [
          {
            heading: "Interior structure",
            body: "Exterior parchment barriers, Madison says, are not enough. You have to contrive the interior structure so that the parts, by their mutual relations, keep each other in their proper places. Each department should have a will of its own. Members should have as little agency as possible in appointing the others — with admitted exceptions, especially the judiciary, where qualifications matter and tenure soon destroys dependence on whoever appointed you. Members should be as little dependent as possible on the others for their pay. Then the load-bearing paragraph: the great security against concentration 'consists in giving to those who administer each department the necessary constitutional means and personal motives to resist encroachments of the others.' Ambition against ambition. Interest of the man connected with the rights of the place. 'It may be a reflection on human nature, that such devices should be necessary to control the abuses of government. But what is government itself, but the greatest of all reflections on human nature?' Then the angels. Then the two-step of framing: enable government to control the governed; oblige it to control itself.",
          },
          {
            heading: "The strongest branch, split twice",
            body: "In republican government, the legislative authority necessarily predominates. Remedy: split the legislature; different modes of election; as little connection as possible between the two houses. The executive needs a qualified veto as a defense, not as a claim of equal political force. Then federalism: a compound republic. 'In the compound republic of America, the power surrendered by the people is first divided between two distinct governments, and then the portion allotted to each subdivided among distinct and separate departments. Hence a double security arises to the rights of the people. The different governments will control each other, at the same time that each will be controlled by itself.' 51 is 10's cousin: many interests in a large society make a majority coalition for oppression harder. Do not teach this as 'states' rights' or as 'one nation.' It is a pile of splits.",
          },
          {
            heading: "When the machine is not what is checking",
            body: "Students will meet 51 as a poster. Your job is to put the sentences back on the branches. Then look at a live fight. Who had motive to resist? Who had means — veto, purse, appointments, the clock, the states? If the checking force is actually a party, a court of public opinion, or a feed, you are looking at Madison's world with an extra actor he did not budget for. That is not a reason to throw 51 out. It is a reason not to pretend the worksheet is a photograph. Hamilton 70 is the reminder that Publius also feared a government too feeble to execute the law. A feeble executive, he said, means a feeble execution — and a government badly executed, whatever it is in theory, is a bad government in practice. Hold 51 and 70. Do not average them.",
          },
        ],
        bigIdea:
          "51 is a psychology of office built into architecture: motive, means, a split legislature, a compound republic. The poster quotation is true and insufficient.",
        tryThis: [
          {
            title: "Motive, means, extra actors",
            minutes: 40,
            steps: [
              "Copy the angels paragraph and the ambition paragraph from 51. Underline means and motives.",
              "Diagram double security: two governments, then departments inside each.",
              "Pick a recent president–Congress–Court fight. Fill in: motive, means, extra actor (party, feed, base) if any.",
              "Read the first page of Federalist 70. Write one sentence on how it sits next to 51 without averaging them.",
            ],
          },
        ],
        dinnerQuestion:
          "If ambition is supposed to check ambition, what happens when both offices answer to the same party instead of to the rights of the place?",
        transfer: [
          { label: "Thinking", note: "Mechanism first. Poster second. If you cannot name the means, you do not have 51." },
          { label: "AI", note: "Probe: 'Which branch did Madison think would dominate, and what did he do about it?' Equal-boxes is a fail." },
          { label: "History", note: "Montesquieu's separation of powers is the inheritance. 51 is the American translation that assumes imperfect people." },
        ],
        ifTheySay: [
          {
            heard: "The Court isn't checked.",
            reply: "51's answers are the appointment power, the amendment power, and — waiting in 78 — the Court's lack of sword and purse. Whether those still hold is the living question. Do not let a model settle it. Name the means first.",
          },
          {
            heard: "Gridlock means the Constitution is working.",
            reply: "Sometimes concentration was the danger Madison budgeted for. Sometimes inaction is a different failure — the one Hamilton 70 is for. Checks are to prevent one department from eating the others, not to prevent a government from doing the jobs of a government. Which danger are you looking at?",
          },
        ],
        integrity:
          "Read 51. Return quotations to structure. Pair with 70 as counterweight, not as a sequel that cancels. Do not ask the model whether the machine still works; ask the student to name motive and means in a live case.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to quote Federalist 51. Then: 'What structural splits does the essay actually describe after the angels sentence?' If it cannot name bicameralism and federalism, it has the meme.",
          evaluate: [
            "Can they walk means and motives?",
            "Can they explain legislative predominance and the double security?",
            "Do they hold 70 as a counterweight rather than a contradiction to be erased?",
          ],
        },
      },
      adult: {
        title: "51: The Machine That Assumes Imperfect People",
        dek: "Virtue is not the design load. Connect the man to the place; split the strongest branch; split sovereignty. Then notice when extra actors are doing the checking.",
        objective:
          "The parent can teach 51 from the interior-structure argument, refuse equal-branch cartoons, and use a live interbranch fight as a test of motive and means.",
        parentBriefing:
          "This is the most stolen sentence in American political talk. Steal it back. The parent should be able to recast, without notes: parchment is not enough; interior structure; will of each department; pay; means and motives; angels; control the governed then control itself; legislative predominance; bicameralism; compound republic as double security; large society of many interests as 10's echo. Then the parenting move: pick a fight the household has actually heard about. Who had motive? Who had means? If the answer is the party or the feed, say so. That is not cynicism about Madison. It is literacy about the present. Do not recruit 51 to 'my side wants this nomination blocked' or 'my side wants this bill passed.' Which office, which means, which motive. Hamilton 70 belongs in the parent's briefing even if the student only glances at it: energy, unity, someone to blame. 51 and 70 are the same series arguing with itself. That tension is the point of sitting 1's mask lesson, applied.",
        hardEdges: [
          "Do not teach three equal branches. Madison did not.",
          "Do not let 'if men were angels' become a personality test. It is a design premise.",
          "Do not skip federalism in 51. The double security is half the essay's machine.",
        ],
        reading: [
          {
            heading: "From Montesquieu to motive",
            body: "Separation of powers arrives as an inheritance. 51's contribution is the psychology: you will not get independent departments from parchment, and you will not get them from virtue. You get them by wiring self-interest to jurisdiction. That is why pay and tenure and veto and bicameral jealousy matter. A parent who only quotes angels has taught a proverb. A parent who can name the means has taught the essay. The judiciary is already the exception that sitting 4 will enlarge: you cannot fully separate appointment, so you separate dependence after appointment. 51 knows the Court is institutionally odd. 78 will call it least dangerous. Brutus will call that a lullaby.",
          },
          {
            heading: "Double security, not a slogan",
            body: "Two governments, then departments inside each. The people surrender power once, then watch it subdivided. This is the argument for the structure already on the site in the Constitution pack. 51 is the brief for that structure. It is also 10 continued: many interests, hard majority for oppression, justice as the end of government. Flattening into 'states' rights' or 'national supremacy' is the same sin as flattening Publius into one mind. Madison in 1788 is not Calhoun and not 1865. Teach the pile of tests, not the later war.",
          },
          {
            heading: "Extra actors",
            body: "Party discipline can align ambition across departments instead of against them. A feed can punish an officeholder for defending the rights of the place. Those are not reasons to sneer at 51. They are reasons to teach it as a machine with specified parts, then look at which parts still move. The adult dinner question is the honest one: when both offices answer to the same party, what is left of 'the interest of the man connected with the constitutional rights of the place'? Maybe primary voters. Maybe the other chamber. Maybe the states. Maybe nothing in that fight. Say which. Do not let a model answer with a team.",
          },
        ],
        bigIdea:
          "51 is a wiring diagram for imperfect people. Teach the wires. Then look at a live fight and say which wires still carry current.",
        tryThis: [
          {
            title: "Teach the paragraph, then test a fight",
            minutes: 40,
            steps: [
              "Recite or read the angels/ambition paragraph. Then, without looking, list the structural moves that follow (split legislature, veto as defense, compound republic).",
              "Choose one live interbranch conflict. Table: office, motive, constitutional means, extra-constitutional pressure.",
              "Write the sentence you will use when a child says the three branches are equal.",
              "Glance at 70. One sentence: energy versus check, not a cancellation.",
            ],
          },
        ],
        dinnerQuestion:
          "When ambition fails to counteract ambition, is that because Madison's machine broke, or because we asked a different machine — party, feed, donor — to do the checking?",
        transfer: [
          { label: "Thinking", note: "If nothing would change your mind about whether the machine still runs, you are not testing 51. You are wearing it." },
          { label: "AI", note: "Ask whether 51 'proves' a current controversy. Then ask what the answer assumed. The assumption is usually a caucus." },
          { label: "History", note: "Constitution sitting on designed-not-extracted already has the compromises. This sitting is the argument that the designed machine can police itself." },
        ],
        ifTheySay: [
          {
            heard: "That's just cynicism about people.",
            reply: "He thinks people can be free because he does not pretend they are angels. The romance is not in the personnel. It is in a structure that can survive personnel. If you need saints for the Constitution to work, you do not have Madison's Constitution.",
          },
          {
            heard: "The Founders believed in three equal branches.",
            reply: "Madison believed the legislature would predominate and designed against that. Equal-box civics is a later cartoon. Name the essay. Name the split.",
          },
        ],
        integrity:
          "Read 51. Quotations must return to structure. Do not recruit the angels sentence to a caucus. Hold 70. Do not ask the model if the machine still works; ask which means still exist in a named fight.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model to apply Federalist 51 to a current confirmation fight or shutdown. Then ask: 'Which means did you name, and which extra actors did you smuggle in?' The smuggling is the lab.",
          evaluate: [
            "Can they teach 51 without the equal-box cartoon?",
            "Can they distinguish motive, means, and extra-constitutional pressure?",
            "Do they refuse to let 51 become a team jersey?",
          ],
        },
      },
    },
  }),

  // ── 4. Judgment without sword ──────────────────────────────────────
  ...expand({
    slug: "judgment-without-sword",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Neither Force nor Will",
        dek: "Hamilton said the courts have judgment, not armies and not the tax power. Because they are weak, they must be independent. Brutus said that independence would make them the engine of consolidation.",
        objective:
          "The student can state Hamilton's 'neither force nor will' claim, explain why he wanted life tenure, and set it next to Brutus's fear of a court that cannot be checked.",
        parentBriefing:
          "Do not teach 78 to ages 5–10. This young-band sitting is for 11–14: the image is a court with no sword and no purse, only judgment, and an opponent who does not believe that weakness will last. Hamilton: the judiciary has no influence over sword or purse; it has neither FORCE nor WILL, but merely judgment; it is the least dangerous branch; life tenure during good behavior is a brace for a weak department; when a statute contradicts the Constitution, judges should prefer the Constitution. He does not use the later phrase 'judicial review,' but that is the argument. Brutus XI–XV: an independent federal judiciary, appointed for life, with equity jurisdiction and no higher appeal, will expand its own power by interpretation. Do not teach Marbury as if it is in the 1787 text. Do not ask the model whether the Court is too powerful. State Hamilton's claim and Brutus's claim.",
        hardEdges: [
          "'Least dangerous' is a 1788 claim about institutional weapons, not a prophecy.",
          "Pair 78 with Brutus. A sitting that assigns Hamilton without Brutus is a monologue.",
          "Do not treat Federalist quotations as if they were amendments. Citation is not a clause.",
        ],
        reading: [
          {
            heading: "A court with no sword",
            body: "Federalist No. 78 is Hamilton's defense of the federal courts. It first appeared in the bound McLean edition in 1788. The sentences classrooms steal are these: the judiciary 'has no influence over either the sword or the purse.' It has 'neither FORCE nor WILL, but merely judgment.' It is 'the least dangerous' to the political rights of the Constitution. Translate. The President commands the army. Congress raises the money and writes the rules. Judges write opinions. They cannot make anyone obey without the other branches. Because they are weak, Hamilton says, they must be independent: they hold office during good behavior, not at the pleasure of the next election. Because the Constitution is fundamental law, when a statute is 'contrary to the manifest tenor of the Constitution,' the court should treat it as void. That does not make judges the bosses of Congress, he says. It makes the Constitution the boss of both — the people having bound their agents.",
          },
          {
            heading: "Brutus does not buy the lullaby",
            body: "Brutus had already warned New York about these courts. Give men life tenure, the last word on what the words mean, equity jurisdiction, and no appeal above them, and they will not stay the least dangerous branch. They will consolidate. They will read the vague clauses — Necessary and Proper, supremacy — until the states are husks. Hamilton says judgment without force is safe because judges cannot raise an army or a tax. Brutus says interpretation is a kind of force: if you say what the words mean, and no one can overrule you, the weakness was a story you told on the way in. Your job is not to decide who won the next two centuries in one sitting. Your job is to hear both briefs. Marbury v. Madison in 1803 is the later case that names 'judicial review.' It is not a clause in 1787, and Hamilton does not use that later name. Do not let a worksheet put Marbury inside the Constitution. And do not let anyone tell you The Federalist is law. Courts quote 78. Quoting is not enacting. Show the clause in Article III. Then show the essay. If they come apart, the clause is the law.",
          },
        ],
        bigIdea:
          "Hamilton: courts have judgment, not force or will, so they must be independent and must prefer the Constitution to ordinary statutes. Brutus: that independence is how consolidation arrives. Hold both. 78 is not a statute.",
        tryThis: [
          {
            title: "Sword, purse, judgment",
            minutes: 25,
            steps: [
              "Draw three columns: Executive (sword), Congress (purse and rules), Courts (judgment). Write Hamilton's 'neither FORCE nor WILL' sentence under the third.",
              "Write Brutus's fear in one sentence: a court that lives forever and says what the words mean will grow.",
              "Talk About It: if a court says a law is unconstitutional, who makes that decision real — the court, or the people who control armies and money? Hamilton's answer is in the sentence. Brutus's fear is what happens after the sentence.",
            ],
          },
        ],
        dinnerQuestion:
          "If a court has no army and no tax power, why was Brutus still afraid of it?",
        transfer: [
          { label: "Thinking", note: "Show me the clause. Then show me the essay. If they come apart, which one is the law?" },
          { label: "AI", note: "Ask 'what is judicial review?' If the model leads with Marbury and never says 'neither force nor will,' it has given the civics-test answer, not the source." },
        ],
        ifTheySay: [
          {
            heard: "The Federalist is law.",
            reply: "Courts cite. Citation is not a clause. The essays are advocacy, quoted when useful. When Hamilton and Madison later disagreed, they both had Federalist passages to hand. That is a warning, not a method. Show the clause first.",
          },
          {
            heard: "The Court is the most dangerous branch now.",
            reply: "Then 78's premise failed, or the other branches surrendered the means Madison gave them. Which? Do not let a model pick. Name sword, purse, appointment, amendment — then look.",
          },
        ],
        integrity:
          "Read 78. Probe sentence: 'neither FORCE nor WILL, but merely judgment.' Pair with Brutus. Do not ask the model whether the Court is too powerful. Do not treat 78 as a statute.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What is judicial review?' Then open Fed 78. If Marbury leads and 'neither force nor will' never appears, the model gave the test answer. Ask it to state Brutus's objection to 78 without taking Hamilton's side.",
          evaluate: [
            "Can they recast neither force nor will?",
            "Do they know 78 argues for preferring the Constitution to statutes without using the later name?",
            "Can they state Brutus's fear without a sneer?",
          ],
        },
      },
      emerging: {
        title: "The Least Dangerous Branch — and Brutus's Reply",
        dek: "Hamilton infers independent judges and constitutional supremacy from a written constitution's weakness. Brutus infers a judicial aristocracy from the same design. Marbury is later.",
        objective:
          "The student can reconstruct 78's weakness-therefore-independence argument, the inference to judicial review, Brutus XI–XV's counter, and the difference between essay, clause, and Marbury.",
        parentBriefing:
          "Walk 78 in order: need for a federal judicature; appointment; tenure during good behavior as barrier against legislative encroachment; least dangerous because no sword and no purse; neither force nor will; therefore independence (especially tenure) as the citadel of public justice; Constitution as fundamental law; courts prefer it to statutes; this does not make judges superior to the legislature — it makes the people, through the Constitution, superior to both. Brutus XI–XV: life tenure, equity, no appeal, interpretation of vague national powers. Marbury (1803) names the practice; do not teach Marbury as if it were in the Constitution's text, and do not teach 78 as if Marshall copied it word for word. The argument is in 78. The power as practiced is a history. Integrity: do not ask the model whether the Court is too powerful. Ask the student to state both claims, then look at one modern case as a test, not as a verdict. Hard edge: do not let a model treat Federalist quotations as amendments.",
        hardEdges: [
          "Judgment is not policy. Hamilton's line is a discipline, not a description of every later opinion.",
          "Independence is for weakness, not for majesty. Tenure is a brace.",
          "Brutus's fear is not ignorant. Let it speak.",
        ],
        reading: [
          {
            heading: "Weakness, then independence, then the text",
            body: "Whoever attentively considers the departments, Hamilton writes, must perceive that the judiciary, from the nature of its functions, will always be the least dangerous to the political rights of the Constitution, because it will be least in a capacity to annoy or injure them. Executive: honors and the sword. Legislature: purse and the rules. Judiciary: 'no influence over either the sword or the purse; no direction either of the strength or of the wealth of the society; and can take no active resolution whatever. It may truly be said to have neither FORCE nor WILL, but merely judgment; and must ultimately depend upon the aid of the executive arm even for the efficacy of its judgments.' From weakness he infers the need for tenure. From a limited constitution he infers the duty to treat contrary statutes as void. The people bound their representatives in a fundamental law. Courts are to keep that binding. He answers the objection that this makes judges superior to the legislature by relocating supremacy: not in the bench, in the Constitution.",
          },
          {
            heading: "The required counter-text",
            body: "Brutus XI–XV are the pair, not a footnote. An independent federal judiciary, appointed for life, with equity jurisdiction and no higher appeal, will expand its own power by interpretation. The court will not be the least dangerous branch. It will be the engine of consolidation. Necessary and Proper and supremacy are the clauses he has in mind. A sitting that treats this as failed prediction to be mocked has become a cheer. Several of the fears — distant government, judicial expansion — became the grammar of later American argument. You do not have to agree with Brutus to need him. Hamilton organized part of The Federalist to answer him. Answer is not erasure.",
          },
          {
            heading: "Essay, clause, case, citation",
            body: "Four piles again, now applied. The Constitution's Article III is the clause: one Supreme Court, inferior courts Congress may establish, tenure during good behavior, limited original jurisdiction. 78 is the brief about what that clause is for. Marbury is a 1803 case that exercises and names a power. Later citation of 78 is advocacy reused. Originalists use the essay as evidence of public meaning. Living-constitutionalists note that the campaign trail is a poor substitute for the text, and that Publius sometimes described hopes. Both uses are arguments. Neither makes 78 a statute. 'Least dangerous branch' sounds like a holding. It is a sentence in a newspaper brief.",
          },
        ],
        bigIdea:
          "78 infers independent judgment and constitutional supremacy from institutional weakness. Brutus infers consolidation from the same independence. Marbury is later. The essay is not law.",
        tryThis: [
          {
            title: "Four piles, two briefs, one case",
            minutes: 40,
            steps: [
              "Copy the neither-force-nor-will paragraph from 78. Underline sword, purse, judgment, executive arm.",
              "State Brutus's objection in Brutus's terms (life tenure, interpretation, consolidation). No editorial.",
              "Open Article III. List what the clause actually says. Mark what 78 adds.",
              "Look up one sentence of Marbury. Date it 1803. Write: argument in 78; practice as history; not a 1787 clause.",
            ],
          },
        ],
        dinnerQuestion:
          "If courts have only judgment, why do people talk as if they rule the country — and is that Hamilton's premise failing, or the other branches refusing to use their means?",
        transfer: [
          { label: "Thinking", note: "Show the clause. Then the essay. Then the case. Different jobs. Do not let the third eat the first." },
          { label: "AI", note: "Marbury-first is a fail for a 78 sitting. 'Neither force nor will' is the probe." },
          { label: "History", note: "Magna Carta said the king is not above the law. 78 says a statute is not above the Constitution. Different centuries, same anxiety about who interprets." },
        ],
        ifTheySay: [
          {
            heard: "It's law because the Supreme Court quotes it.",
            reply: "Citation is not a clause. Courts have quoted The Federalist since the 1790s. They are not required to. When Hamilton and Madison later disagreed about the Bank, they both had passages. Footnotes look like authority. 'Least dangerous branch' sounds like a holding. Ask which one is the law when they come apart.",
          },
          {
            heard: "Hamilton invented judicial review out of nothing.",
            reply: "He inferred it from a written constitution's supremacy. Whether the inference is necessary is the debate. Brutus thought the inference was a power grab. Do not let a model collapse inference, clause, and Marbury into one origin myth.",
          },
        ],
        integrity:
          "Read 78 against the sentences. Pair Brutus XI–XV. Marbury is later. Do not ask whether the Court is too powerful. Do not treat quotations as amendments.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask 'what is judicial review?' Score: 78 sentences present? Marbury dated later? Brutus present? If the model answers whether the Court is too powerful, that is the forbidden question — fail the lab, not the student.",
          evaluate: [
            "Can they reconstruct weakness → independence → constitutional preference?",
            "Can they steel-man Brutus on interpretation as consolidation?",
            "Do they keep essay, clause, and Marbury in separate piles?",
          ],
        },
      },
      adult: {
        title: "Judgment Without Sword: 78, Brutus, and Citation",
        dek: "Least dangerous is a 1788 claim about weapons. Independence is a brace for weakness. Judicial review is an inference. Citation is not enactment. Brutus remains the quality-control department.",
        objective:
          "The parent can teach 78 from the sentences, keep Marbury in 1803, refuse the 'Federalist is law' myth, and let Brutus's judicial brief speak without a sneer.",
        parentBriefing:
          "The civics-test answer leads with Marbury. This sitting leads with 78, then Brutus, then Article III, then Marbury as history of a practice. The parent should be able to recast neither force nor will, tenure as brace, constitutional supremacy as the people's binding of their agents, and the relocation of the 'judges superior to Congress' objection. Then Brutus: interpretation of national powers by an unappealable life-tenured bench. Then the myth from Harry's 5.4: courts must follow Publius. Correction: advocacy, cited when useful. Originalism and living constitutionalism both have a use for 78; neither use is the law. If the household wants to argue about the modern Court, make them pass through Hamilton's premise (no sword, no purse) and Madison's means (appointment, amendment, the other branches). 'The Court is the most dangerous branch now' is a claim that 78's premise failed or that the others surrendered their means. Which? Do not let a model choose a team.",
        hardEdges: [
          "Do not teach Marbury as a 1787 clause or 78 as Marshall's script.",
          "Do not let a model treat Federalist quotations as amendments.",
          "Do not ask the model whether the Court is too powerful. That question ends the sitting.",
        ],
        reading: [
          {
            heading: "The 1788 claim",
            body: "Least dangerous is about capacity to annoy. Sword and purse are the weapons. Judgment is not a weapon in Hamilton's picture; it depends on the executive arm even for efficacy. Tenure is therefore not a crown. It is a brace so a weak department is not awed by the strong ones. Constitutional preference follows from a limited constitution being meaningless if the legislature may ignore it. The people bound their agents. Courts keep the binding. Whether that inference is necessary is the scholarly fight (Harry's S7). Whether it is in the newspaper brief is not a fight. It is.",
          },
          {
            heading: "Brutus as quality control",
            body: "A court that interprets a vague Necessary and Proper Clause, in equity, with no appeal, can consolidate. That sentence should be sayable at the table without anyone needing Brutus to be a crank. The Constitution we have is, in Storing's line, a Federalist frame with Anti-Federalist amendments — sitting 5's payoff. The judiciary was the place Anti-Federalists lost more of the design than they lost on rights. That is why 78 still has to be paired. Whig history says they lost so they were bad at political science. The sitting says they lost the vote.",
          },
          {
            heading: "What citation is",
            body: "Footnotes look like authority. The Supreme Court has quoted Publius since the 1790s. That is a fact about American legal culture. It is not a clause. When your student, or a pundit, or a model, says 'the Federalist is law,' the reply is Harry's: show me the clause, then the essay; if they come apart, which one is the law? Using 78 as original-public-meaning evidence is an argument with a method. Using 78 as a mascot for whatever the current Court is doing is the party myth from 5.6. Which essay, which year, which man?",
          },
        ],
        bigIdea:
          "Teach 78 as a brief about weakness and binding. Teach Brutus as the brief against that brief. Keep Marbury in 1803. Keep citation from becoming enactment.",
        tryThis: [
          {
            title: "Premise, pair, piles",
            minutes: 40,
            steps: [
              "Read the neither-force-nor-will stretch of 78 aloud. Then ask: what would falsify 'least dangerous' in Hamilton's own terms?",
              "State Brutus on the judiciary in his terms. No verdict.",
              "Four piles on a card: Art. III / Fed 78 / Marbury 1803 / later citation. One job each.",
              "Write the table reply to 'the Federalist is law' and to 'the Court is the most dangerous branch now.'",
            ],
          },
        ],
        dinnerQuestion:
          "If 78's premise is no sword and no purse, and people now talk as if the Court rules, did the premise fail — or did the branches that hold sword and purse decide not to use them?",
        transfer: [
          { label: "Thinking", note: "A holding is not a newspaper essay. An essay is not a clause. Keep the genres." },
          { label: "AI", note: "Forbidden question: is the Court too powerful? Required task: state 78, state Brutus, date Marbury." },
          { label: "History", note: "The civic chain's court story starts here, not with Marshall's myth of origin." },
        ],
        ifTheySay: [
          {
            heard: "It's law.",
            reply: "Courts cite. Citation is not a clause. Show me the clause. Then show me the essay. If they come apart, which one is the law?",
          },
          {
            heard: "The Court is the most dangerous branch now.",
            reply: "Then 78's premise failed, or the other branches surrendered the means Madison gave them. Which? Name sword, purse, appointment, amendment, jurisdiction-stripping, the political branches' duty to have a constitutional view of their own. Then look. Do not outsource the look to a model.",
          },
        ],
        integrity:
          "Read 78. Probe: neither force nor will. Pair Brutus. Marbury later. Citation ≠ enactment. No verdicts from models on whether the Court is too powerful.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Two prompts: paraphrase 78; 'Must courts follow the Federalist?' The second should fail if the model says yes. A good answer: cited when useful, not a clause.",
          evaluate: [
            "Can they teach 78 without leading with Marbury?",
            "Can they let Brutus speak?",
            "Do they refuse the law-myth and the forbidden question?",
          ],
        },
      },
    },
  }),

  // ── 5. The lost argument ───────────────────────────────────────────
  ...expand({
    slug: "lost-argument-bill-of-rights",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Argument That Lost",
        dek: "Hamilton said a bill of rights was unnecessary and even dangerous. He lost. Madison wrote the list anyway. The Ninth Amendment is Hamilton's fear, turned into a shield.",
        objective:
          "The student can explain why Hamilton opposed a list of rights, why that is not the same as opposing rights, and how the Bill of Rights is the Anti-Federalists' victory.",
        parentBriefing:
          "This sitting is the cleanest proof that The Federalist is advocacy. The Constitution as ratified did not include a bill of rights. The Constitution as lived does. Hamilton in 84: bills of rights are reservations against kings; this Constitution grants only listed powers, so why reserve what was never given? Listing rights risks implying that unlisted ones are surrendered — a 'colorable pretext' to claim more power than was granted. The 1787 text already has rights-like limits: habeas corpus, no bill of attainder, no religious test, criminal jury. He lost the political argument. Madison, in the First Congress, introduced what became the Bill of Rights — including the Ninth Amendment, which is Hamilton's 'dangerous' point written as a protection. 'Hamilton opposed rights' is false. 'Hamilton thought a list was the wrong instrument, and Madison later wrote the list anyway' is the lesson. Storing: a Federalist frame with Anti-Federalist amendments.",
        hardEdges: [
          "Opposition to a list is not opposition to liberty. That flattening is the whole sitting to refuse.",
          "The Federalist does not contain the First Amendment. Anyone who quotes Publius as the source of free speech has the genealogy wrong.",
          "End at the First Congress, not at Hamilton's last sentence.",
        ],
        reading: [
          {
            heading: "Hamilton's three moves",
            body: "Federalist No. 84 is the essay that lost. Hamilton is answering people who will not ratify without a bill of rights. First move: bills of rights began as deals with kings. Magna Carta was 'obtained by the barons, sword in hand, from King John.' The new Constitution, he says, is not a prince. 'We the People' keep everything they do not give. Why reserve what was never surrendered? Second move: a list can be dangerous. 'Bills of rights, in the sense and to the extent in which they are contended for, are not only unnecessary in the proposed Constitution, but would even be dangerous.' They would be 'exceptions to powers not granted' and would 'afford a colorable pretext to claim more than were granted. For why declare that things shall not be done which there is no power to do?' If you write that the press shall not be restrained, someone will say that proves Congress had a power to restrain it. Third move: the 1787 text already has limits — habeas corpus, no attainder, no ex post facto, no religious test, criminal jury. He thought structure was the barrier. The Anti-Federalists wanted parchment too. American practice kept both.",
          },
          {
            heading: "The losers wrote Amendments 1 through 10",
            body: "New York and other states ratified with a gun to the Federalists' head: amend, or we may walk. Madison, who had been Publius, stood up in the First Congress on 8 June 1789 and introduced amendments. He had come to see a bill of rights as useful against the federal government he had just helped build. The Ninth Amendment says the enumeration of certain rights shall not be construed to deny or disparage others retained by the people. That is Hamilton's second point, inverted into a shield. The Tenth says powers not delegated are reserved. The First through Eighth are the list Hamilton thought was the wrong instrument. Herbert Storing's line is the one to keep: the Constitution we have is a Federalist frame with Anti-Federalist amendments. They lost the vote. They won the first ten amendments. If someone says the Anti-Federalists were simply wrong, ask them to name one thing in the Constitution that is there because the opponents demanded it. If they cannot, they have not read 1 through 10.",
          },
        ],
        bigIdea:
          "Hamilton opposed a list, not liberty. He lost. Madison wrote the list. The Ninth Amendment is the lost argument, enacted as a protection. The Anti-Federalists lost the vote and won the parchment.",
        tryThis: [
          {
            title: "Read 84, then Amendment 9",
            minutes: 25,
            steps: [
              "Write Hamilton's three moves in your own words: kings vs. enumerated powers; lists can imply extra power; the 1787 text already has limits.",
              "Open Amendment 9. Write one sentence: same fear as 84, opposite instrument.",
              "Talk About It: 'Hamilton didn't want us to have rights.' What two facts kill that sentence?",
            ],
          },
        ],
        dinnerQuestion:
          "If the people who lost the ratification fight still wrote the Bill of Rights, what does that say about who 'won' the Constitution?",
        transfer: [
          { label: "Thinking", note: "A lost argument can still shape the winning text. 84 is the exhibit." },
          { label: "AI", note: "Ask whether Hamilton opposed rights. If the model says yes, make it read 84 next to Amendment 9." },
        ],
        ifTheySay: [
          {
            heard: "Hamilton opposed rights.",
            reply: "He opposed a list. He thought rights were secured by enumerated powers and by structure. Madison wrote the list anyway. The Ninth Amendment is their compromise in one sentence: the list is not all of them. Read 84, then Amendment 9. Same fear, opposite instrument.",
          },
          {
            heard: "The Anti-Federalists were simply wrong.",
            reply: "Name one thing in the Constitution that is there because they demanded it. If you cannot, you have not read Amendments 1–10. They lost the vote and won the parchment. Storing: Federalist frame, Anti-Federalist amendments.",
          },
        ],
        integrity:
          "Read 84, not a slide that says Hamilton opposed rights. End at the First Congress. Pair with Amendments 9 and 10. Do not quote Publius as the source of the First Amendment.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Did Hamilton oppose a bill of rights because he opposed rights?' Then open 84 and Amendment 9. The model should not be allowed to stop at 'he opposed a bill of rights.'",
          evaluate: [
            "Can they state Hamilton's three moves?",
            "Do they know the Ninth Amendment inverts the 'dangerous list' fear?",
            "Can they name the Bill of Rights as an Anti-Federalist victory?",
          ],
        },
      },
      emerging: {
        title: "Federalist 84 and the Bill of Rights",
        dek: "The essay that lost produced the amendment that saved Hamilton's own point. Teach 84 as a lost brief, not as the academy's view of rights.",
        objective:
          "The student can reconstruct 84's unnecessary/dangerous/already-present argument, map it onto Amendments 9 and 10, and state Storing's frame-plus-amendments thesis without a cheer.",
        parentBriefing:
          "Have 84 on the table. The Magna Carta paragraph is pedagogically gold: Hamilton himself says bills of rights are stipulations with kings, sword-in-hand at Runnymede, and therefore misfit for a constitution the people ordain. That is how this unit hooks the Magna Carta pack without flattening. Then the dangerous-list paragraph (colorable pretext; why declare the press shall not be restrained if no power to restrain was given). Then the already-in-the-text catalogue. Then politics: ratifying conventions demanding amendments; Madison's 8 June 1789 speech; Ninth as inverted 84. Genealogy of American rights: 1776, state constitutions, ratification fight, 1791 — not Publius as sole source. Anyone quoting Publius as the source of free speech has the genealogy wrong. The sitting should end at the First Congress, not at Hamilton's last sentence. The lesson is how a lost argument still shaped the winning text.",
        hardEdges: [
          "Opposition to a list ≠ opposition to liberty.",
          "Do not skip that Hamilton thought public opinion, not parchment, was the solid basis of rights — a claim, not a cynicism to adopt as the academy's.",
          "Anti-Federalists were not confused. They had watched legislatures.",
        ],
        reading: [
          {
            heading: "Unnecessary, dangerous, already there",
            body: "Hamilton's first move is historical and structural. Bills of rights are, in origin, stipulations between kings and subjects — Magna Carta, Petition of Right, English Bill of Rights. A constitution the people ordain is a different genre: they surrender nothing they do not enumerate. Second move: a list of exceptions to ungranted powers 'would afford a colorable pretext to claim more than were granted.' The press example is the sharp edge. Third: Article I section 9 and Article III already carry rights-like limits. He adds that the Constitution is itself, 'in every rational sense, and to every useful purpose, A BILL OF RIGHTS.' That last claim is advocacy at full volume. The Anti-Federalists were not buying genre theory. They wanted specified immunities against a government they expected to grow. Both can be described without a verdict.",
          },
          {
            heading: "Madison crosses the floor",
            body: "Madison introduces amendments because ratification politics required it, and because he had come to see a bill of rights as useful against the federal government he had just built. The Ninth Amendment is 84 inverted: enumeration shall not be construed to deny or disparage others retained by the people. The Tenth is the reserved-powers sentence the opponents wanted in writing. The First through Eighth are the list. This is not Madison 'betraying' Publius in a soap opera. It is a campaigner becoming a legislator in a country that had just extracted a price. Federal Farmer and the state conventions had already done the extracting. Madison could steal their ground without admitting defeat. That is how losing arguments enter winning texts.",
          },
          {
            heading: "Storing's sentence",
            body: "The Constitution we have is a Federalist frame with Anti-Federalist amendments. That sentence is the pedagogical fact of the unit. It kills 'they were simply wrong.' It also kills 'Hamilton didn't want rights.' Frame: enumerated powers, energy, independent courts, extended republic. Amendments: parchment barriers the opponents demanded. American practice kept both — and still argues about which one works. A sitting on 84 that stops at Hamilton's last sentence has taught a lost brief as if it were the last word. The last word, in 1791, was the list.",
          },
        ],
        bigIdea:
          "84 is advocacy that lost. The Ninth Amendment is the loss, enacted. The Bill of Rights is the price of ratification. Frame plus amendments is the Constitution you actually have.",
        tryThis: [
          {
            title: "84, 9, 10, First Congress",
            minutes: 40,
            steps: [
              "Copy Hamilton's 'not only unnecessary… but would even be dangerous' paragraph. Underline colorable pretext and the press example.",
              "Copy Amendment 9. One sentence: same fear, opposite instrument.",
              "List three rights-like limits already in the 1787 text (habeas, attainder, religious test).",
              "Write Storing's sentence from memory. Then name one clause that is Federalist frame and one amendment that is Anti-Federalist parchment.",
            ],
          },
        ],
        dinnerQuestion:
          "If Hamilton thought a list might give the government a pretext to claim extra power, did the Ninth Amendment solve that — or did we just add another sentence to argue about?",
        transfer: [
          { label: "Thinking", note: "Lost arguments can write the winning text. That is a fact about politics, not a consolation prize." },
          { label: "AI", note: "Probe: 'Hamilton opposed a bill of rights.' Force the next sentence. If the next sentence is 'because he opposed rights,' fail." },
          { label: "History", note: "Magna Carta is in 84 as a genre Hamilton wants to leave behind. The civic chain is about to pick it back up in sitting 6." },
        ],
        ifTheySay: [
          {
            heard: "Hamilton didn't want us to have rights.",
            reply: "He wanted rights secured by structure. Madison wrote the list. The Ninth Amendment is their compromise in one sentence. Genealogy: 1776, state constitutions, ratification fight, 1791 — not Publius as sole source.",
          },
          {
            heard: "Bills of rights don't do anything.",
            reply: "That is a later cynicism. 84 is a design claim about enumeration, not a claim that speech does not matter. Hamilton also said the solid basis of rights was public opinion. That is a claim to test, not a shrug to copy.",
          },
        ],
        integrity:
          "Read 84. Probe the dangerous-list paragraph. End at June 1789 and Amendments 9–10. Do not quote Publius as the source of the First Amendment. No verdict on whether parchment 'works.'",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model why there is a Bill of Rights. If it says 'the Founders wrote it into the Constitution,' it has skipped 84 and the fight. Force: 84, lost argument, Madison 1789, Ninth Amendment.",
          evaluate: [
            "Can they reconstruct unnecessary / dangerous / already present?",
            "Can they map 84 onto 9 and 10?",
            "Do they state Storing without turning it into a team win?",
          ],
        },
      },
      adult: {
        title: "The Lost Brief: 84, the Ninth, and Who Won",
        dek: "Hamilton lost the instrument and kept the fear. Madison wrote the list. The Anti-Federalists lost the vote and wrote Amendments 1–10. Teach the genealogy, not the slide.",
        objective:
          "The parent can teach 84 from the Magna Carta and colorable-pretext paragraphs, invert it into the Ninth Amendment, and refuse both 'Hamilton opposed rights' and 'parchment is nothing.'",
        parentBriefing:
          "This sitting is how you prove to a teenager that The Federalist is advocacy. Publius is not the last word; the opponents who lost the vote still wrote the rights chapter. Walk 84's genre argument (bills of rights as royal stipulations; Magna Carta named), the dangerous-list argument, the already-present catalogue, and the 'Constitution is itself a bill of rights' flourish. Then the First Congress. Then Storing. Genealogy of rights does not run through Publius as sole source — 1776, state constitutions, the fight, 1791. Hard edge for the parent: do not adopt Hamilton's 'public opinion is the only solid basis' as the academy's cynicism, and do not adopt the Anti-Federalist demand as magic ink. We teach the arguments. The Ninth Amendment is the sentence that lets you say both: we listed some, we did not surrender the rest. That is Hamilton's fear, enacted. Sitting 6 will put this on the civic chain. This sitting should already mention that 84 cites Magna Carta in order to leave it behind — a hook, not a lecture on 1215.",
        hardEdges: [
          "Do not let 'Hamilton opposed a bill of rights' fit on a slide without the next sentence.",
          "Do not present the Bill of Rights as if it were in the 1787 signing copy.",
          "Do not skip that listing rights remains a live design fight (unenumerated rights, Ninth Amendment litigation). Name it; do not litigate it here.",
        ],
        reading: [
          {
            heading: "Genre, pretext, catalogue",
            body: "Hamilton needs New Yorkers to stop treating the Constitution as a prince. So he tells the history of bills of rights as abridgements of prerogative — Magna Carta sword in hand, Petition of Right, 1689. Then he says that history has no application to a people who 'surrender nothing.' Then he goes further: a list would be dangerous because it implies a power that was never granted. The press hypothetical is the one a parent should be able to recast at dinner. Then the catalogue of already-present limits, which is true and also not what the opponents were asking for. They wanted speech, religion, assembly, due process, a bigger House, less distant government. Structure plus a few criminal-procedure clauses did not feel like enough after a war against a distant sovereign.",
          },
          {
            heading: "The inversion",
            body: "Madison's 8 June 1789 speech is the hinge. He had been Publius. He is now extracting the price of union. The Ninth Amendment is the elegant theft: Hamilton's worry, written as a shield. The Tenth is the reserved-powers sentence. The rest is the list. American constitutionalism kept both instruments and never stopped arguing which one does the work. That argument is not a reason to call 84 stupid. It is a reason 84 belongs in the pack — the lost brief that still structured the winning text.",
          },
          {
            heading: "Who won",
            body: "Ratification: Federalists. Parchment rights: Anti-Federalists. Judiciary design: mostly Federalists, which is why sitting 4 still needs Brutus. Executive energy: contested forever, which is why 70 still has Cato as a shadow. WisdomForge does not assign a caucus to Publius and does not assign a halo to Brutus. It puts 84 next to the First Congress. If a guest at the table says the Anti-Federalists were simply wrong, the reply is Harry's: name one thing in the Constitution that is there because they demanded it.",
          },
        ],
        bigIdea:
          "A lost brief can write the winning amendments. 84 is the proof that Publius is not scripture. The Ninth is the proof that the fear survived the loss.",
        tryThis: [
          {
            title: "Teach the inversion",
            minutes: 40,
            steps: [
              "Read the Magna Carta paragraph and the dangerous-list paragraph of 84 aloud. One sentence each: what is he claiming?",
              "Read Amendment 9. Write the inversion in one line you could say to an 11-year-old: he thought the list might make people forget the rights not on the list, so they added a sentence that says the list is not all of them.",
              "Draft the two table replies: 'Hamilton opposed rights' and 'Anti-Federalists were simply wrong.'",
              "Note the genealogy you will not let a model scramble: 1776 / state bills / 84 / 1789 / 1791.",
            ],
          },
        ],
        dinnerQuestion:
          "When Hamilton named Magna Carta in order to say we do not need that genre anymore, what did he get right about kings — and what did the Anti-Federalists get right about legislatures?",
        transfer: [
          { label: "Thinking", note: "Instrument versus end. He opposed a list as the instrument. The end was still liberty secured by structure. Keep the distinction or you will teach a smear." },
          { label: "AI", note: "If the model quotes Publius as the source of free speech, the genealogy has collapsed. Correct it." },
          { label: "History", note: "Sitting 6: Magna Carta → Declaration → Constitution → the brief that sold it, and the amendments the brief failed to prevent." },
        ],
        ifTheySay: [
          {
            heard: "Hamilton opposed rights.",
            reply: "He opposed a list. Read 84 next to Amendment 9. Same fear, opposite instrument. Madison wrote the list. The Ninth says the list is not all of them.",
          },
          {
            heard: "The Anti-Federalists were simply wrong.",
            reply: "They lost the vote and won Amendments 1–10. Name one. If you cannot, you have the civics-test winner's history, not the Constitution you actually have.",
          },
        ],
        integrity:
          "Read 84. End at the First Congress. Ninth and Tenth on the table. Genealogy not through Publius alone. No smear, no cynicism-as-doctrine. No model verdict on whether parchment works.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model to explain why the Constitution has a Bill of Rights. Score: 84 present? lost argument? Madison 1789? Ninth as inversion? If it says the Founders included the Bill of Rights in 1787, fail.",
          evaluate: [
            "Can they teach 84 without the smear?",
            "Can they teach the Ninth as inverted Hamilton?",
            "Do they refuse winner's history?",
          ],
        },
      },
    },
  }),

  // ── 6. The chain ───────────────────────────────────────────────────
  ...expand({
    slug: "federalist-civic-chain",
    subject: "history",
    unit: "The Federalist — The Brief That Sold the Machine",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Chain: From Charter to Brief",
        dek: "Magna Carta was forced from a king. The Declaration claimed a right to start over. The Constitution designed a machine. The Federalist tried to sell the machine — and the Anti-Federalists still wrote the first ten amendments.",
        objective:
          "The student can place The Federalist on the civic chain, distinguish four kinds of document, and refuse to treat Publius as a modern party's property.",
        parentBriefing:
          "Capstone. Four documents, four jobs. Magna Carta: a feudal contract extracted at Runnymede that later generations read as the rule of law. Declaration: a public claim of right and a right of revolution. Constitution: a designed machine, including compromises the unit on the Constitution already named. Federalist: the brief that sold the machine in New York newspapers. The chain is not a hymn. The Convention exceeded the Articles' amendment rule — honesty, not debunking. The series is not silent on slavery: Federalist 54 defends counting enslaved people as three-fifths for representation. Ugly and teachable; do not pretend silence. Do not recruit Publius to a caucus. Which essay, which year, which man — and what did he do in 1791? Compound republic (39) and union-versus-confederacy (15–22, Jay 2–5) belong here as the argument that a large country could be one republic without being one consolidated people. Madison's tests in 39: federal in foundation, national in operation, mixed in the houses. Do not flatten into 'one nation' or 'state sovereignty.'",
        hardEdges: [
          "Do not recruit Publius to a modern party. Which essay, which year, which man?",
          "Do not skip slavery. Fed 54 on three-fifths is in the series. Flag it. Do not sermonize it as if S7 had already been written.",
          "The Convention exceeded its charge. The people, through ratification, are Publius's later cure for the irregularity. Name both.",
        ],
        reading: [
          {
            heading: "Four jobs, not one storybook",
            body: "Magna Carta was forced from a king — a feudal contract at Runnymede that later people read as the rule of law. The Declaration claimed that a people could start over, and then practiced the claim unevenly. The Constitution designed a government in a locked room, through compromises, ratified by narrow margins. The Federalist tried to prove, in New York newspapers, that a large republic of imperfect people could stay free — that faction could be managed without crushing liberty, that ambition could check ambition, that courts could have judgment without the sword. Those are four different kinds of writing: extracted, claimed, designed, sold. If you mash them into 'the Founders believed,' you have a mascot, not a chain. The academy already had the first three units. This unit was the missing brief, and the missing reply: Brutus on size, Brutus on courts, the Anti-Federalists on a bill of rights. The Constitution you actually have is a Federalist frame with Anti-Federalist amendments. That is the end of the chain as a fact, not as a cheer. A model that narrates all four as one philosophy has performed the mash this sitting exists to refuse.",
          },
          {
            heading: "What the brief was selling, and what it hid",
            body: "Publius sold union against a league that could not tax, could not make states perform, and could not defend itself. Hamilton called a sovereignty over sovereignties a political monster. Jay said a connected country should not become rival alliances. Madison in 39 said the result was a compound republic — federal in how it was born and how far its powers go, national in how its laws touch persons, mixed in House and Senate. Do not flatten that into 'one nation' or 'the states are still sovereign.' Both slogans fail 39. And do not pretend the series is silent on slavery. Federalist 54, in the Madison column of the disputed-authorship era, defends the three-fifths clause. It is ugly. It is teachable. This sitting flags it so no one leaves thinking Publius never touched the subject. Harry's later files will go deeper. Honesty about the Convention belongs here too: they were sent to amend the Articles and they replaced them. Publius is selling a replacement. Anti-Federalists called that a coup against the amendment rules. Both sentences can sit on the same page.",
          },
        ],
        bigIdea:
          "The civic chain is charter, claim, machine, brief — and the amendments the brief failed to prevent. Publius is not a party. The series is not silent on slavery. The Convention exceeded its charge.",
        tryThis: [
          {
            title: "Draw the chain, then break two myths",
            minutes: 25,
            steps: [
              "Write four boxes: Magna Carta (extracted), Declaration (claimed), Constitution (designed), Federalist (sold). Under the last, write Brutus (tested) and Amendments 1–10 (extracted again, from the Federalists).",
              "Write the compound-republic sentence in your own words: not a league, not one consolidated people, both.",
              "Talk About It: 'This is a conservative document' or 'this is a progressive document.' Which essay? Which year? Which man — and what did he do in 1791?",
            ],
          },
        ],
        dinnerQuestion:
          "If Magna Carta was forced, the Declaration claimed, the Constitution designed, and The Federalist sold — which of those jobs is a newspaper still doing to you?",
        transfer: [
          { label: "History", note: "The four civic units on the site are now a chain: charter, claim, machine, brief. Do not let a model tell them as one storybook." },
          { label: "AI", note: "Ask the model to summarize the Founders' philosophy in three sentences. Then ask which document it just mashed. The mash is the tell." },
        ],
        ifTheySay: [
          {
            heard: "This is a [party] document.",
            reply: "Which essay, which year, which man in 1791? Hamilton became the Federalist Party. Madison became Jefferson's ally. Both quoted Publius against the other. If you cannot answer, you have a mascot, not a source.",
          },
          {
            heard: "The Founders all agreed.",
            reply: "They did not. Three men shared a mask and split within three years. Brutus never shared the mask. The Convention exceeded its instructions. Fed 54 is in the series. Agreement is the cartoon.",
          },
        ],
        integrity:
          "Keep the four jobs distinct. Pair Publius with Brutus to the end. Do not recruit. Flag Fed 54. Name the exceeded mandate. Read essays, not summaries.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'How do Magna Carta, the Declaration, the Constitution, and the Federalist Papers fit together?' If it makes them one belief system, it failed. Demand four jobs. Then: 'Which party owns the Federalist?' The only passing answer names the 1791 split.",
          evaluate: [
            "Can they name four documents and four jobs?",
            "Can they refuse the party mascot?",
            "Do they know the series is not silent on slavery and that the Convention exceeded its charge?",
          ],
        },
      },
      emerging: {
        title: "The Compound Republic and the Civic Chain",
        dek: "Madison 39: neither league nor nation, but a compound. Hamilton on the Articles: a government that cannot do the jobs of a government. The chain: extracted, claimed, designed, sold — then amended by the losers.",
        objective:
          "The student can apply Madison's tests in 39, state the union-versus-confederacy brief without romance, place the unit on the civic chain, and flag Fed 54 and the exceeded mandate.",
        parentBriefing:
          "Capstone for emerging adults. Three loads. One: 39's tests (foundation federal, House national / Senate federal, operation national, extent federal, amendment mixed). Flattening into Calhoun or Lincoln is a category error; Madison in 1788 is designing a government that can act on persons without asking a state legislature's permission for each law. Two: the first third of The Federalist is not 10/51/78. It is a brief against the Articles — requisitions as requests, trade wars, foreign scorn, Shays' Rebellion as exhibit whether or not Publius is fair to it. Union is a security argument before it is a nationalist romance. Three: the chain plus the hard edges — exceeded mandate, Fed 54, no party ownership. Harry continues S3/S4/S6/S7; they enrich. Do not block. Do not pretend the missing files mean silence on slavery or on 1791.",
        hardEdges: [
          "Not the Articles, not 1865, not Calhoun. 39 is a pile of tests.",
          "The Convention exceeded its charge. Honesty.",
          "Fed 54 is ugly and in the series. Flag. S7 will go deeper.",
          "Do not recruit Publius.",
        ],
        reading: [
          {
            heading: "Madison's tests",
            body: "Federalist 39 answers a precise charge: that the Constitution is not federal (a league of states) but national (one consolidated people). Madison's answer is neither. Foundation: ratified by the people of the states, in convention — federal. Sources of power: House from people (national), Senate from states (federal) — mixed. Operation: laws act on persons, not on states as states — national, unlike the Articles. Extent: enumerated powers, remainder with the states — federal. Amendment: mixed. 'Compound republic' is the name for that pile. It is not a slogan for states' rights or for one nation. The Civil War and the Fourteenth Amendment change the compound. Teaching 39 as the last word on union is a category error. Teaching it as if Madison were Calhoun is another.",
          },
          {
            heading: "Union as a security argument",
            body: "Hamilton (especially 15–22) describes the Confederation as a sovereignty over sovereignties — 'the political monster of an imperium in imperio.' Requisitions on states are requests. States comply when they wish. Foreign powers notice. Interstate trade wars follow. Shays' Rebellion is the domestic exhibit; many historians think the threat was used. Still ask: what could Congress actually do under the Articles when Massachusetts asked for help? Jay (2–5) adds the foreign brief: a connected country with one coast should not become rival alliances. The proposed Constitution is, in this light, a replacement, not a patch. That is why Anti-Federalists called the Convention a coup against the amendment rules of the Articles. Publius later claims ratification by the people cured the irregularity. Honesty requires both sentences: they exceeded the charge; the people, through conventions, said yes — narrowly, in rooms that excluded most of the population.",
          },
          {
            heading: "The chain, the silence that isn't, the mascot",
            body: "Charter extracted (1215 and its afterlife). Claim published (1776 and its afterlife). Machine designed (1787). Brief sold (1787–88). Amendments extracted from the sellers (1791). That is the civic chain on this site with this unit snapped on. Two refusals at the end. One: the series is not silent on slavery. Federalist 54 defends the three-fifths clause as a compromise between treating enslaved people as persons and as property. It is ugly. It is in the pack. Flag it; Harry's S7 will teach it. Two: The Federalist is not a conservative document or a progressive one. Hamilton became the Federalist Party. Madison became Jefferson's ally. Cherry-picking numbers (10, 51, 70, 78) is the method of the mascot. Which essay, which year, which man in 1791?",
          },
        ],
        bigIdea:
          "39 is a pile of tests, not a slogan. Union is a security brief against a league that could not act. The chain is four jobs plus the losers' parchment. No mascot. No pretended silence.",
        tryThis: [
          {
            title: "Tests, replacement, chain",
            minutes: 40,
            steps: [
              "Write Madison's five tests from 39 in a table: foundation, sources, operation, extent, amendment. Mark each federal / national / mixed.",
              "One paragraph: Articles as league, Constitution as replacement, exceeded mandate named.",
              "Draw the chain including Brutus and Amendments 1–10.",
              "Write two refusals you can say cold: party mascot; 'the Federalist never mentions slavery.'",
            ],
          },
        ],
        dinnerQuestion:
          "If Madison's union is a compound, not a nation-or-league, what later event do people smuggle into 39 — and why is that a category error?",
        transfer: [
          { label: "Thinking", note: "Category errors: 39 as Calhoun, 39 as Lincoln, Publius as a caucus, 54 as silence." },
          { label: "AI", note: "Ask whether the United States is one nation or a league of states. The passing answer is Madison's pile of tests, not a team." },
          { label: "History", note: "Connect to Magna Carta, Declaration, and Constitution units by job, not by 'Founders believed.'" },
        ],
        ifTheySay: [
          {
            heard: "We're a democracy, not a republic.",
            reply: "Madison is using 'republic' to mean representative government, not 'the other team.' 10 and 39 are not a modern bumper sticker. Ask what mechanism he is naming.",
          },
          {
            heard: "The Founders believed in state sovereignty. / The Founders believed in one nation.",
            reply: "Some Anti-Federalists believed the first. Some later nationalists believed the second. Madison's 39 is a rejection of pure state sovereignty and of pure consolidation. Name the tests.",
          },
        ],
        integrity:
          "Read 39, not a summary of federalism. Name the exceeded mandate. Flag 54. Pair the chain with Brutus and 1–10. Do not recruit. Do not ask who was right.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'Was the Constitution a national or a federal government?' If it picks one, it flattened 39. Demand the tests. Then ask which party owns The Federalist. Fail any caucus.",
          evaluate: [
            "Can they run 39's tests?",
            "Can they state union-versus-confederacy as a security brief?",
            "Do they flag 54 and refuse the mascot?",
          ],
        },
      },
      adult: {
        title: "The Chain: What the Brief Sold, and What It Cost",
        dek: "Four jobs. A compound, not a slogan. A replacement that exceeded its charge. A series that is not silent on slavery. A mask that is not a party.",
        objective:
          "The parent can teach the civic chain as four genres, 39 as tests, the exceeded mandate without debunking, Fed 54 as a flag, and Publius as unread when used as a caucus.",
        parentBriefing:
          "This is the sitting that snaps the Federalist unit onto Magna Carta, Declaration, and Constitution. Teach genres, not a storybook of agreement. Extracted charter. Published claim. Designed machine. Sold brief. Then the price: Amendments 1–10. 39 keeps the compound from collapsing into later wars. 15–22 and Jay keep union from becoming romance: Publius sells peace, credit, commerce, and the capacity to do the jobs of a government. How strong is the fight with Brutus. The Convention exceeded the Articles' amendment rule; ratification is the claimed cure; both belong in the parent's mouth. Fed 54: do not skip; do not let sitting 6 become the slavery unit; flag for S7. Party myth: Hamilton's party is not Madison's 1791; cherry-picking is the method. Theological humility's civic cousin, said once more: we teach the arguments, not the team. Gold gate remains Aiona; catalog stays in-forge until she says otherwise.",
        hardEdges: [
          "Do not recruit Publius to a modern caucus.",
          "Do not skip slavery. Fed 54 is in the series. Flag. Do not pretend silence.",
          "Convention exceeded the Articles' amendment rule. Honesty, not debunking.",
          "Do not flatten 39 into 1861 or 1832.",
        ],
        reading: [
          {
            heading: "Genres on a chain",
            body: "Magna Carta is a feudal contract that became, through afterlife, a language of lawful limit. The Declaration is a claim that a people may dissolve political bands and a promise whose practice lagged its words. The Constitution is a machine designed in secret, compromised, ratified narrowly. The Federalist is a New York sales campaign that later Americans needed as a commentary. Brutus is the quality-control department. The Bill of Rights is the concession. If a model or a textbook narrates these as one philosophy unfolding, it has performed the mash this academy exists to refuse. The through-line is not agreement. It is the problem of binding power in writing, and the fights about who writes, who interprets, and who was left out.",
          },
          {
            heading: "Compound, replacement, irregularity",
            body: "39's tests are the adult's anti-slogan kit. Federal in origin and extent, national in operation, mixed in the houses and in amendment. The Articles asked states to obey. The Constitution commands persons. That is the replacement Hamilton sells in 15–22, with Jay's foreign brief in 2–5. Shays' is the exhibit; use can be louder than the event. The Convention's irregularity is not a gotcha. It is the foundational question of constitutional authority, already in the Constitution pack: men instructed to amend produced a document that required nine states, not unanimity. Publius is the brief for the replacement. Anti-Federalists named the irregularity. Ratification is the claimed cure. The parent who can say all three sentences without a sneer can teach this sitting.",
          },
          {
            heading: "Silence, mascots, leftover work",
            body: "Federalist 54 defends three-fifths as a compromise between person and property. The series is not silent. This sitting flags; it does not pretend to finish. Harry's S7 is the deeper file. Until it exists, honesty is the flag, not a lecture you do not have. The mascot move — Publius as conservative scripture or progressive ancestor — dies on contact with 1791. Which essay, which year, which man? If they cannot answer, they have a mascot. Leftover work the parent should know about: S3 historical context, S4 applications, S6 connections, S7 debates, including authorship fights and originalism-as-method. Those enrich. They do not block what these six sittings already teach: brief not machine, 10 vs Brutus, 51 as wiring, 78 vs Brutus, 84 lost, chain without a cheer.",
          },
        ],
        bigIdea:
          "The chain is four genres plus a concession. The compound is tests. The replacement exceeded its charge. The series is not silent. The mask is not a party.",
        tryThis: [
          {
            title: "Teach the snap-on",
            minutes: 40,
            steps: [
              "One card, four jobs, one concession. Say it aloud as you would to an 11-year-old, then as you would to another parent.",
              "Run 39's tests on a scrap of paper without looking. Check.",
              "Write the three-sentence honesty pack: exceeded mandate; ratification as claimed cure; Fed 54 exists.",
              "Write the mascot killer: which essay, which year, which man in 1791?",
            ],
          },
        ],
        dinnerQuestion:
          "If a brief can become unofficial scripture, what is your household's method for keeping the machine, the pitch, the opponents, and the amendments in separate piles?",
        transfer: [
          { label: "Thinking", note: "Four piles were sitting 1. The chain is those piles laid along time. Same discipline." },
          { label: "AI", note: "Ask for 'the Founders' philosophy.' The mash is the fail. Demand documents, jobs, names, dates." },
          { label: "History", note: "This unit snaps onto hist-magna-carta, hist-declaration, hist-constitution. Liam's hubs can pick it up once a catalog row exists. Gold gate is Aiona." },
        ],
        ifTheySay: [
          {
            heard: "This is a [party] document.",
            reply: "Which essay? Which year? Which author — and what did he do in 1791? If they cannot answer, they have a mascot, not a source. The academy does not recruit Publius. It reads him.",
          },
          {
            heard: "The Federalist never dealt with slavery.",
            reply: "Federalist 54 is in the series. It is ugly. It is teachable. We flag it here. We do not pretend silence, and we do not pretend this sitting is the whole teaching.",
          },
        ],
        integrity:
          "Four genres. 39 as tests. Exceeded mandate named. 54 flagged. No recruitment. No model verdict on whether Publius was right. Read the essays. Harry's S3–S7 enrich later.",
        aiLab: {
          setup: "After the try-this.",
          childDoes:
            "Ask the model to place the Federalist on a timeline with Magna Carta, the Declaration, and the Constitution. Score: four jobs? Brutus present? 1791 present? 54 or three-fifths mentioned if it claims completeness? Party ownership refused?",
          evaluate: [
            "Can they teach the snap-on without a storybook mash?",
            "Can they run 39 and name the irregularity?",
            "Do they flag 54 and kill the mascot?",
          ],
        },
      },
    },
  }),
];

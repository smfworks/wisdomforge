import { expand } from "./factory";

const UNIT = "The Fourteenth Amendment — The Answer After the War";

export const fourteenthLessons = [
  // ── 1. The answer to Federalist 54 ─────────────────────────────────
  ...expand({
    slug: "fourteenth-answer-to-54",
    subject: "history",
    unit: UNIT,
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Constitution Stops Counting People as Fractions",
        dek: "Federalist 54 defended counting enslaved people as three-fifths for seats in Congress. Section 2 of the 14th counts whole persons. That is seats, not a right to vote.",
        objective:
          "The student can say what three-fifths did (seats and taxes), what Federalist 54 argued, and what Section 2 of the 14th changed — and refuse both the '60% human' cartoon and 'the 14th gave the vote.'",
        parentBriefing:
          "This sitting is the landing the Federalist unit pointed at. Do not skip it to keep Publius admirable. Three-fifths was a rule of House seats and direct taxes, not a metaphysical ranking. Federalist 54 (Madison, New York Packet, 12 Feb 1788) still theorized enslaved people as mixed persons-and-property and wrote that the Constitution regards the slave as 'divested of two fifths of the MAN.' Read that phrase. Then read Amendment XIV §2: whole number of persons, excluding Indians not taxed. The fraction is gone as arithmetic. The sitting is not a vote-rights sitting. Section 2 is a counting penalty if adult male citizens twenty-one are shut out of the vote; the 15th is the racial suffrage rule. The penalty was not enforced after Redemption. Pair with Constitution 5.3 so they do not walk away with the cartoon.",
        hardEdges: [
          "Do not skip Federalist 54. Same test as Magna Carta's villeins.",
          "Do not teach that the 14th 'gave the vote.' Section 2 penalizes denial. The 15th forbids racial denial.",
          "Name what Section 2 still excludes: Indians not taxed; male/21; crime exception.",
        ],
        reading: [
          {
            heading: "What three-fifths actually did",
            body: "The original Constitution counted people for power in the House. Free persons counted whole. 'Indians not taxed' were left out. 'All other Persons' — enslaved people — counted as three-fifths. That fraction was about seats and taxes. Northerners who wanted enslaved people out of the count were shrinking Southern seats, not performing abolition. Southerners who wanted them in as whole persons wanted more seats, not equality. The cartoon that 'the Founders thought slaves were 60% human' is the wrong insult. The real insult is in the clause and in the essay that sold it.",
          },
          {
            heading: "What 54 said, then what Section 2 did",
            body: "Federalist 54, arguing for that clause, said enslaved people 'partake of both these qualities: being considered by our laws, in some respects, as persons, and in other respects as property.' It called that mixed character 'in fact their true character.' It said the compromising expedient 'regards the SLAVE as divested of two fifths of the MAN.' After the war, Amendment XIV Section 2's first sentence replaced the fraction: Representatives shall be apportioned 'counting the whole number of persons in each State, excluding Indians not taxed.' The 13th had already abolished slavery. Counting whole persons without a vote would have given the South more seats. Section 2's second sentence tried a brake: deny the vote to adult male citizens twenty-one, except for rebellion or other crime, and lose seats in proportion. That is not a right to vote. The 15th (1870) is the racial suffrage rule. After Reconstruction collapsed, the penalty was not enforced.",
          },
        ],
        bigIdea:
          "Section 2 repeals three-fifths as a rule of seats. It does not, by itself, give the vote. Federalist 54's mixed-character sentence is in the Founding. The 14th answers the arithmetic after a war.",
        tryThis: [
          {
            title: "Fraction, then whole",
            minutes: 22,
            steps: [
              "Copy Article I's three-fifths sentence. Then copy Section 2's first sentence. Circle what changed.",
              "Write one line: seats, not 60% human. Write a second line: seats, not a right to vote.",
              "Talk About It: if a friend says 'Gettysburg repealed three-fifths,' what two documents do you put on the table?",
            ],
          },
        ],
        dinnerQuestion:
          "If counting people as fractions was about power in Congress, what does it mean that the Constitution later counted whole persons but still did not guarantee them a vote?",
        transfer: [
          { label: "Thinking", note: "Source before summary. Avalon for Fed 54. National Archives for Section 2. Do not let a model paraphrase 'divested of two fifths of the MAN' into a slogan." },
          { label: "History", note: "Magna Carta left villeins out. The Constitution fractioned enslaved people. The 14th counts whole persons and still excludes Indians not taxed. The chain is honest only if you name the exclusions." },
        ],
        ifTheySay: [
          {
            heard: "Three-fifths meant they thought slaves were 60% human.",
            reply: "Read the clause and Federalist 54. It was seats and taxes — and a theory of mixed personhood. Both. Neither is a kindness. Then read Section 2's first sentence.",
          },
          {
            heard: "The 14th gave Black men the vote.",
            reply: "Section 2 is a counting penalty if adult male citizens twenty-one are shut out. The 15th is the racial suffrage rule. The penalty was not enforced after Redemption.",
          },
        ],
        integrity:
          "Do not ask the model whether Madison was 'a racist' or whether the 14th 'redeemed' 1787. Ask it to state 54's argument, then Section 2, then what Section 2 still excludes. Check against Avalon and the Archives.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model what the three-fifths clause meant. If it says 'slaves were 60% human' and stops, it failed. Demand Fed 54's mixed-character sentence, then Section 2's first sentence, then whether that sentence is a right to vote.",
          evaluate: [
            "Can they refuse the 60%-human cartoon without sanitizing 54?",
            "Can they say Section 2 changed the seats rule, not by itself the vote?",
            "Do they name at least one exclusion still in Section 2 (Indians not taxed, male/21, crime)?",
          ],
        },
      },
      emerging: {
        title: "Federalist 54 Lands: Section 2 Repeals the Fraction",
        dek: "Madison's brief sold mixed personhood as true. Section 2 counts whole persons and still writes Indians not taxed, male/21, and crime out of the penalty. The 14th is the civic chain's answer, not a spell.",
        objective:
          "The student can pair Article I §2 cl. 3, Federalist 54, and Amendment XIV §2, name what changed and what did not, and refuse Gettysburg-as-repeal.",
        parentBriefing:
          "Full landing. Read Article I's three-fifths sentence. Read 54's mixed-character paragraph and 'divested of two fifths of the MAN' (Madison by modern consensus; New York Packet, 12 February 1788). Read Section 2's first sentence aloud. Ask what changed: the fraction, not yet the vote, not yet the keeping. Name Indians not taxed; male inhabitants twenty-one; 'or other crime'; the unenforced penalty. Gettysburg's proposition is a speech; it does not do this work — that is sitting 3. Do not recruit Section 3 to a modern caucus here.",
        hardEdges: [
          "Skipping 54 to keep Publius admirable fails the villeinage test.",
          "Section 2 repeals the seats rule. It does not make 54 untrue as a description of 1788 law.",
          "Weaponization cuts both ways: 54 as a 'truth' about Black people is misuse; Section 2 as having finished the work in 1868 is a different misuse. Plessy is in the story.",
        ],
        reading: [
          {
            heading: "The brief for the fraction",
            body: "Federalist 54 is the ratification brief for Article I's three-fifths clause. Madison ventriloquizes 'one of our Southern brethren,' then accepts the reasoning as reconciling him to the convention's scale. Enslaved people 'partake of both these qualities.' The Constitution 'views them in the mixed character of persons and of property. This is in fact their true character.' The compromising expedient 'regards the SLAVE as divested of two fifths of the MAN.' Read the last phrase aloud. Do not paraphrase it into the cartoon and move on. Northerners who wanted the enslaved out of the count were cutting Southern seats. Southerners who wanted them in as full persons wanted more seats. 54 sells that bargain to New York.",
          },
          {
            heading: "The sentence that answers it",
            body: "Amendment XIV §2: 'Representatives shall be apportioned among the several States according to their respective numbers, counting the whole number of persons in each State, excluding Indians not taxed.' Three-fifths is gone as a rule of House seats (and of the direct-tax companion). The 13th had already abolished slavery, with the crime exception. Once there were no 'other Persons' to fraction, a Southern state would have gained House seats by counting formerly enslaved people as whole persons while denying them the vote. Section 2's second sentence is the attempted brake: a counting penalty, not a suffrage guarantee. The 15th is the racial suffrage rule. After Redemption the penalty sat unused. Design and failure belong in the same sitting.",
          },
          {
            heading: "What the answer still excludes",
            body: "'Excluding Indians not taxed' is older (Article I) and is repeated in 1868 — a choice. The Indian Citizenship Act (1924) is afterlife, not erasure. The penalty names male inhabitants, twenty-one, citizens. Women are not in it; the 19th is the sex suffrage rule; the 26th changes voting age without rewriting this sentence. 'Or other crime' is the felon-disenfranchisement door, still litigated. Section 4's refusal to pay 'any claim for the loss or emancipation of any slave' is the companion honesty: emancipation's cost is not reimbursed to the enslaver. Name it without applause or apology.",
          },
        ],
        bigIdea:
          "The 14th answers Fed 54 in the Constitution's operating rules: whole persons for seats. Speech cannot repeal a clause. A counting penalty is not a vote. Ugly exclusions stay in the answer.",
        tryThis: [
          {
            title: "Three texts, one landing",
            minutes: 35,
            steps: [
              "In three columns: Article I three-fifths; Fed 54 mixed-character sentences; Section 2 first sentence. Mark repeal vs remainder.",
              "Write: person for counting, citizen for the penalty. Why does that split matter?",
              "Practice the reply: 'A speech cannot repeal a clause. Section 2 can.'",
              "Reflect: the penalty was not enforced. Does an unenforced sentence still count as an answer?",
            ],
          },
        ],
        dinnerQuestion:
          "If Section 2 counted whole persons but did not guarantee them the vote, who was the amendment trying to pressure — and what happened when the pressure was not applied?",
        transfer: [
          { label: "Thinking", note: "Avalon 54 vs Archives §2. If they come apart from a model's summary, the texts win." },
          { label: "AI", note: "Do not ask whether Madison was a racist. Ask the model to quote 54, then §2, then name one remaining exclusion." },
          { label: "History", note: "Civic chain: Magna Carta villeins → Constitution three-fifths → Fed 54 → 14th §2. Gettysburg is the speech on the chain, not the instrument." },
        ],
        ifTheySay: [
          {
            heard: "Gettysburg repealed three-fifths.",
            reply: "A speech cannot repeal a clause. Section 2 can. Read both. Sitting 3 is the speech. This sitting is the seats rule.",
          },
          {
            heard: "This ruins the Founders.",
            reply: "It is in the Founding. A civic chain that requires silence is a mascot. The 14th is the answer written after a war, not a spell that unwrites 1787.",
          },
        ],
        integrity:
          "Read 54, not the summary. Pair it with Section 2. Do not sermonize redemption theater. Do not skip Indians not taxed.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Paste Avalon's Fed 54 mixed-character paragraph and Archives Section 2. Ask the model to state what changed. Fail it if it says the 14th gave the vote or if it skips 'Indians not taxed.'",
          evaluate: [
            "Can they quote or closely paraphrase 'divested of two fifths of the MAN'?",
            "Can they distinguish seats repeal from suffrage?",
            "Do they refuse Gettysburg-as-repeal?",
          ],
        },
      },
      adult: {
        title: "The Seats-and-Bodies Answer",
        dek: "Teach 54's theory, Article I's arithmetic, Section 2's repeal, and the exclusions the answer kept. The civic chain stops being honest if it ends at Publius.",
        objective:
          "The parent can teach three-fifths without the cartoon, 54 without sermon, Section 2 without converting it into the 15th, and the unenforced penalty without cynicism that erases the sentence.",
        parentBriefing:
          "This is the ugly-clause sitting for the unit, load-bearing. Theological humility's civic cousin: show the disagreement, do not resolve 1787 into 1868. Mixed character is Madison's (ventriloquized, then accepted) sentence. Section 2 repeals the seats rule; it does not unwrite 1788 law as description. Later white-supremacist use of 54 is misuse. Later civic piety that treats 1868 as finished work is a different misuse. Plessy, Cruikshank, unenforced §2. Gettysburg stays sitting 3. Section 3 stays out of this sitting. Little band omits this sitting's Fed 54 and Dred Scott — you already have young/emerging/adult only.",
        hardEdges: [
          "Do not recruit Section 3, 7.4, or 7.5 to a modern caucus in this sitting.",
          "Writing the sentence ≠ keeping it.",
          "Person for counting, citizen for the penalty — Section 1's split is already in §2.",
        ],
        reading: [
          {
            heading: "Why this sitting exists",
            body: "The Federalist unit's chain sitting flagged 54 and pointed forward. Magna Carta sittings named villeinage. Constitution sittings named three-fifths as seats and taxes (5.3). This sitting is the Constitution answering those clauses in its own operating rules after a war. Gettysburg is the speech (sitting 3). This file is the seats-and-bodies answer. If you skip it, Publius remains a mascot.",
          },
          {
            heading: "54, then §2, then the remainder",
            body: "Walk the parent through the same six beats you will use with a teenager: Article I's sentence; 54's mixed character and 'divested of two fifths of the MAN'; Section 2 first sentence; what changed (fraction, not vote, not keeping); Indians not taxed, male/21, crime exception, unenforced penalty; only then, if time, the speech that does not do this work. Section 4's no-payment-for-slaves clause is companion honesty, not applause.",
          },
          {
            heading: "How not to recruit it",
            body: "Originalists will reach for 1868 public meaning. Living-constitutionalists will reach for later keeping and unkeeping. Both are arguments. The sitting's job is the texts. Do not ask a model whether the 14th is 'about race' or 'about equality.' Ask it to state the sentences. Howard's exclusions and Wong Kim Ark belong in sitting 4, not as a paraphrase of §2.",
          },
        ],
        bigIdea:
          "The 14th answers Fed 54 in arithmetic. Keep the brief, the clause, and the later failure on the table together. Do not pick a team.",
        tryThis: [
          {
            title: "Parent table",
            minutes: 32,
            steps: [
              "Lay out four cards: Article I §2 cl. 3; Fed 54; XIV §2 sentence 1; XV. Write the job of each in one line.",
              "Add a fifth card: unenforced. Where does it sit without erasing the others?",
              "Write the dinner sentence you will actually use if someone says '60% human' or 'the 14th gave the vote.'",
            ],
          },
        ],
        dinnerQuestion:
          "When a civics poster ends at Publius, what work is the poster refusing — and who pays for the refusal?",
        transfer: [
          { label: "Thinking", note: "Source before summary. Full clause, not the nickname." },
          { label: "AI", note: "Hint-first. If the model moralizes 54 instead of quoting it, stop it." },
        ],
        ifTheySay: [
          {
            heard: "Three-fifths meant 60% human.",
            reply: "Seats and taxes — and Fed 54's mixed personhood. Both. Then Section 2's first sentence. Neither 54 nor the cartoon is a kindness.",
          },
          {
            heard: "The 14th gave the vote.",
            reply: "Section 2 is a counting penalty. The 15th is the racial suffrage rule. Name both. Name the unenforced penalty.",
          },
        ],
        integrity:
          "Do not let the model treat Section 2 as the 15th, or Gettysburg as a repeal. Archives text vs paraphrase.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model to explain three-fifths, then the 14th's answer. Fail sermons and slogans. Require 54, §2, one remaining exclusion.",
          evaluate: [
            "Can the parent refuse both piety and cynicism?",
            "Can they keep Gettysburg off this sitting's job?",
            "Do they know the penalty was not enforced?",
          ],
        },
      },
    },
  }),
  // ── 2. Section 1 aloud ─────────────────────────────────────────────
  ...expand({
    slug: "fourteenth-section-1-aloud",
    subject: "history",
    unit: UNIT,
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Four Clauses, Not One Poster",
        dek: "Section 1 is four jobs: citizenship, privileges or immunities, due process, equal protection. A sitting that says the 14th is equal protection has dropped three of them.",
        objective:
          "The student can say all four clauses in order, who they bind (states), and the person/citizen split.",
        parentBriefing:
          "Learn the Archives text, not a paraphrase. Citizenship overrides Dred Scott. Privileges or immunities is for citizens; due process and equal protection are for persons. Bingham and Howard are evidence, not the amendment. Slaughter-House gutted privileges; later courts used due process. That is afterlife. Require the four clauses first.",
        hardEdges: [
          "Do not let 'the 14th is equal protection' stand.",
          "Person vs citizen is architecture, not trivia.",
        ],
        reading: [
          {
            heading: "The sentence to hear",
            body: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws. Four jobs. Citizenship replaces Taney. Privileges or immunities was meant to carry national rights against the states. Due process takes a Fifth Amendment phrase and aims it at the states — persons, not only citizens. Equal protection is the state's duty not to deny the laws' protection unequally — again, persons.",
          },
          {
            heading: "What a poster drops",
            body: "If you only remember equal protection, you have dropped who is a citizen, the wreck of privileges or immunities in the Slaughter-House Cases (1873), and the fact that Section 1 restrains states, not private persons as such. The Bill of Rights (1791) bound the federal government. Barron v. Baltimore (1833) said it did not bind the states. Section 1 is Reconstruction's answer. Incorporation is later doctrine, not the words.",
          },
        ],
        bigIdea: "Section 1 is four clauses in order, aimed at the states. Equal protection is the fourth, not the whole.",
        tryThis: [
          {
            title: "Say all four",
            minutes: 20,
            steps: [
              "Number 1-4. Write the job of each clause from the Archives text, not from a poster.",
              "Mark citizen on privileges; person on due process and equal protection.",
              "Talk About It: why would a model prefer to say 'equal rights'?",
            ],
          },
        ],
        dinnerQuestion: "If you could only keep one clause of Section 1, which would you keep — and what would the country lose?",
        transfer: [{ label: "Thinking", note: "Archives text vs model paraphrase. The paraphrase is the tell." }],
        ifTheySay: [
          {
            heard: "The 14th is equal protection.",
            reply: "Four clauses. Say all four. Citizenship, privileges or immunities, due process, equal protection.",
          },
          {
            heard: "It's just the Bill of Rights.",
            reply: "1791 bound the federal government. 1868 binds the states. Incorporation is afterlife.",
          },
        ],
        integrity: "Require all four clauses against the National Archives text. Do not ask whether the 14th is about race or equality. Ask it to state the sentences.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model what the 14th Amendment says. If it answers equal protection and stops, fail it. Demand four clauses in order and who they bind.",
          evaluate: ["Four clauses in order?", "Binds states?", "Person vs citizen?"],
        },
      },
      emerging: {
        title: "Section 1 in Order",
        dek: "Citizenship, privileges or immunities, due process, equal protection. Bingham and Howard as evidence. Slaughter-House as wreck. Doctrine is afterlife.",
        objective:
          "The student can parse Section 1, the person/citizen split, state action, and why privileges or immunities is still in the text after 1873.",
        parentBriefing:
          "Howard: privileges would restrain states from invading personal rights in the first eight amendments. Slaughter-House (Miller) confined national privileges to a thin set. Later incorporation used due process. Procedure is the core of due process; substantive liberty is later. Equal protection: classify, then justify; Plessy emptied it; Brown refused Plessy for schools.",
        hardEdges: [
          "Do not treat Slaughter-House as erasing the clause from the parchment.",
          "Do not pick a winner in the liberty docket for the student.",
        ],
        reading: [
          {
            heading: "Four jobs",
            body: "Citizenship: birth or naturalization, subject to jurisdiction, dual (nation and state). Qualifier is real — Howard named diplomats and tribes not taxed — not a trapdoor. Privileges or immunities: citizens, against the states. Due process: persons, states, a lawful course. Equal protection: persons, states, the laws' protection. Occasion was race and the Black Codes. Grammar is person/citizen. Dropping either is half the amendment.",
          },
          {
            heading: "Wreck and detour",
            body: "Slaughter-House (1873) read privileges almost out of existence. Courts then routed around the wreck through due process. That is doctrine, not the amendment. A sitting that says the 14th is just the Bill of Rights has skipped 1791, Barron, and incorporation as afterlife.",
          },
        ],
        bigIdea: "Hear Section 1 before the poster. Four clauses. States. Person and citizen are different words on purpose.",
        tryThis: [
          {
            title: "Text, then doctrine",
            minutes: 35,
            steps: [
              "Copy Section 1. Underline citizen vs person.",
              "Label one later case per clause without letting the case replace the clause.",
              "Write: occasion was race; grammar is person. Both true.",
            ],
          },
        ],
        dinnerQuestion: "If privileges or immunities was the load-bearing beam and the Court took it out, did the amendment fail — or did later courts build a different house on due process?",
        transfer: [
          { label: "Thinking", note: "Archives first." },
          { label: "AI", note: "Fail 'equal rights' as a substitute for the four clauses." },
        ],
        ifTheySay: [
          { heard: "The 14th is equal protection.", reply: "Four clauses. Say all four." },
          { heard: "It's just the Bill of Rights.", reply: "1791 vs 1868. Incorporation is afterlife." },
        ],
        integrity: "Archives text vs paraphrase. Do not ask the model whether the 14th is about race or equality.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to recite Section 1. Compare to Archives. Then: who does it bind?",
          evaluate: ["Four clauses.", "States.", "Person/citizen split."],
        },
      },
      adult: {
        title: "The Load-Bearing Sentence",
        dek: "Teach Section 1 as a restraint on states with four clauses. Speeches are evidence. Doctrine is afterlife. Do not pick a caucus.",
        objective: "The parent can keep parchment, 1866 floor, and later docket in three piles without collapsing them.",
        parentBriefing: "Bingham and Howard. Slaughter-House. Incorporation. Procedure vs substance. State action. Color-blind vs anti-subordination is sitting 5 and 7.4 — do not finish it here.",
        hardEdges: ["Do not recruit Section 1 to a modern party.", "Writing the sentence is not keeping it."],
        reading: [
          {
            heading: "Three piles",
            body: "Parchment: four clauses, states, person/citizen. Floor: Bingham's inborn rights of every person; Howard's first eight amendments. Docket: Slaughter-House, incorporation, Lochner through Dobbs, Plessy through Brown and SFFA. Students remember the docket as the sentence. Put the sentence back.",
          },
        ],
        bigIdea: "Section 1 is four clauses aimed at the states. Everything else is argument about those words.",
        tryThis: [
          {
            title: "Three piles",
            minutes: 30,
            steps: [
              "Label parchment / 1866 speeches / later cases. Put one fact in each.",
              "Write the parent reply when a child says the 14th is equal protection.",
            ],
          },
        ],
        dinnerQuestion: "When a Court opinion quotes Section 1, is it reading the sentence or borrowing a famous clause — and how would you tell?",
        transfer: [{ label: "Thinking", note: "Source before summary." }],
        ifTheySay: [{ heard: "The 14th is equal protection.", reply: "Four clauses. Say all four." }],
        integrity: "Do not let the model skip privileges or immunities because doctrine did.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model for Section 1. Compare to Archives. Fail missing clauses.",
          evaluate: ["Four clauses.", "States.", "Speeches are not the amendment."],
        },
      },
    },
  }),

  // ── 3. Gettysburg inside ───────────────────────────────────────────
  ...expand({
    slug: "fourteenth-gettysburg-inside",
    subject: "history",
    unit: UNIT,
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "A Speech Is Not an Amendment",
        dek: "Hear the Bliss Gettysburg text. Then hear Section 1's first sentence. One is a claim over graves. One is a rule. Do not swap them.",
        objective: "The student can distinguish Lincoln's speech (19 Nov 1863) from the 14th (1868) and give one honest sentence on Dred Scott.",
        parentBriefing: "Gettysburg lives inside this pack, not as the next figure. Bliss copy is the classroom text. The train-dash story is false. Wills is a thesis, not a statute. One honest sentence: the Court said Black Americans could not be citizens; after the war the Constitution said they could. Do not ask whether Lincoln meant the 14th.",
        hardEdges: ["Speech is not an instrument.", "Keep Dred Scott to one honest sentence for young."],
        reading: [
          {
            heading: "Hear the Bliss text",
            body: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Lincoln spoke about two minutes at Gettysburg, 19 November 1863. The Bliss copy (1864) is the signed, dated text on the Lincoln Memorial. He did not dash it off on a train. The speech claims the Declaration as a proposition, the war as a test, unfinished work, a new birth of freedom. It does not create citizenship, due process, or equal protection. It does not repeal three-fifths.",
          },
          {
            heading: "Then the rule",
            body: "Five years later, after Lincoln is dead, Section 1 writes a membership rule and restraints on the states. Dred Scott (1857) had held that people of African descent could not be citizens of the United States within the meaning of the Constitution. Section 1's first sentence does not argue with Taney. It replaces him. If someone says Gettysburg is the 14th, put both texts on the table.",
          },
        ],
        bigIdea: "Gettysburg is a proposition over graves. The 14th is an instrument. Read both. Do not swap them.",
        tryThis: [
          {
            title: "Speech, then sentence",
            minutes: 22,
            steps: [
              "Hear the last sentence of Gettysburg from Bliss, not a contest version.",
              "Hear Section 1's first sentence. What changed from a speech to a rule?",
              "Talk About It: can a speech repeal a clause? No. Sitting 1 was Section 2.",
            ],
          },
        ],
        dinnerQuestion: "If the world will little note nor long remember the speech, why do we still treat it as if it were law?",
        transfer: [{ label: "Thinking", note: "Bliss vs paraphrase. Archives Section 1 vs paraphrase." }],
        ifTheySay: [{ heard: "Gettysburg is the 14th.", reply: "Speech over graves vs five-section instrument. Read both." }],
        integrity: "Read Bliss, not a recitation-contest version. Do not ask whether Lincoln meant the 14th.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to quote the Gettysburg Address. Compare to Bliss. Then: did this speech repeal three-fifths? Fail yes.",
          evaluate: ["Refuse speech = amendment?", "One honest Dred Scott sentence?", "Bliss, not the train myth?"],
        },
      },
      emerging: {
        title: "Gettysburg Inside the Pack",
        dek: "Dred Scott's citizenship holding, Bliss text, Section 1. Wills is a thesis. A speech cannot repeal a clause.",
        objective: "The student can sequence 1857 to 1863 to 1868, read Bliss against Section 1, and refuse Gettysburg-as-statute.",
        parentBriefing: "Taney; McLean and Curtis dissents. Garry Wills 1992 is afterlife. Five holographs; Bliss is the usual classroom text.",
        hardEdges: ["Do not ask whether Lincoln meant the 14th.", "Gettysburg is not the next figure."],
        reading: [
          {
            heading: "The holding the speech does not overrule",
            body: "Dred Scott v. Sandford (1857): people of African descent, enslaved or free, could not be citizens of the United States within the meaning of the Constitution. The citizenship holding is what Section 1's first sentence overrules. The speech at Gettysburg does not. Teach Taney's sentence, then Bingham's.",
          },
          {
            heading: "Proposition and instrument",
            body: "Bliss: dedicated to the proposition that all men are created equal; unfinished work; new birth of freedom. Wills argued the speech remade America by putting the Declaration at the center of the constitutional story. That is a thesis about afterlife. The 14th is one attempt — five years later — to write the proposition into operating rules.",
          },
        ],
        bigIdea: "Sequence the holding, the speech, and the amendment. Do not let the speech swallow the instrument.",
        tryThis: [
          {
            title: "Three dates",
            minutes: 35,
            steps: [
              "1857 holding / 1863 Bliss / 1868 Section 1. One sentence each.",
              "Mark what the speech cannot do.",
              "Compare a model paraphrase of Gettysburg to Bliss.",
            ],
          },
        ],
        dinnerQuestion: "If Gettysburg is more famous than Section 1, what does fame hide?",
        transfer: [
          { label: "History", note: "Declaration sitting: proposition. This sitting: speech. 14th: rule." },
          { label: "AI", note: "Bliss vs paraphrase. Do not ask whether Lincoln meant the 14th." },
        ],
        ifTheySay: [
          { heard: "Gettysburg is the 14th.", reply: "Speech vs five-section instrument. Read both." },
          { heard: "Gettysburg repealed three-fifths.", reply: "A speech cannot repeal a clause. Section 2 can." },
        ],
        integrity: "Bliss vs paraphrase. Archives Section 1 vs paraphrase. No Lincoln-meant-the-14th.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to recap Gettysburg and the 14th. Fail a swap.",
          evaluate: ["Sequence.", "Speech is not law.", "Dred Scott citizenship holding."],
        },
      },
      adult: {
        title: "Proposition, Holding, Instrument",
        dek: "Keep Wills as thesis, Taney as holding, Bliss as speech, Section 1 as rule. Do not hagiograph Lincoln. Do not skip the speech.",
        objective: "The parent can teach Gettysburg inside the 14th pack without making it the next civic figure or a substitute charter.",
        parentBriefing: "Everett's letter. Five copies. Train myth false. Chain: Dred Scott, Gettysburg, Section 1, Section 2 vs Fed 54.",
        hardEdges: ["Gettysburg stays inside this pack.", "Do not ask whether Lincoln meant the 14th."],
        reading: [
          {
            heading: "How to sit them",
            body: "Citizenship holding first, so the speech is not asked to do Taney's work. Bliss aloud. Section 1 four clauses. Section 2 vs 54 already taught. Ugly: Taney; 14th exclusions; unkeeping (Plessy). The parent refuses both the mascot speech and the cynicism that the speech was only words.",
          },
        ],
        bigIdea: "A speech can dedicate a nation to a proposition. Only an amendment can change the operating rules.",
        tryThis: [
          {
            title: "Parent sequence",
            minutes: 30,
            steps: [
              "Write the four-beat chain on an index card you will actually use.",
              "Add: Wills is a thesis. Bliss is the text. Section 1 is the instrument.",
            ],
          },
        ],
        dinnerQuestion: "What do we lose when we let Gettysburg stand in for the 14th at the dinner table?",
        transfer: [{ label: "Thinking", note: "Source before summary. Bliss. Archives." }],
        ifTheySay: [{ heard: "Gettysburg is the 14th.", reply: "Speech over graves vs five-section instrument. Read both." }],
        integrity: "Do not ask the model whether Lincoln meant the 14th.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Test paraphrase of Bliss against Bliss; paraphrase of Section 1 against Archives.",
          evaluate: ["No swap.", "No train myth.", "No meant-the-14th."],
        },
      },
    },
  }),

  // ── 4. Citizenship / Dred Scott ────────────────────────────────────
  ...expand({
    slug: "fourteenth-citizenship-dred-scott",
    subject: "history",
    unit: UNIT,
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Counts as a Citizen",
        dek: "The Court said Black Americans could not be citizens. After the war the Constitution said they could. The sentence has a qualifier; it is not a trick.",
        objective: "The student can state Dred Scott's citizenship holding, Section 1's first sentence, and that citizenship is not the vote.",
        parentBriefing: "1866 Civil Rights Act first; then the Constitution so a later Congress could not repeal it. Qualifier: subject to the jurisdiction thereof. Howard named diplomats and tribes. Wong Kim Ark (1898) for emerging/adult; young: qualifier is not a trick. Birthright was on purpose (5.4).",
        hardEdges: ["Citizenship is not the 15th.", "Do not skip Taney's holding."],
        reading: [
          {
            heading: "Taney, then the sentence",
            body: "Dred Scott, enslaved, sued for freedom. The Supreme Court held among other things that people of African descent, enslaved or free, could not be citizens of the United States within the meaning of the Constitution. Section 1: All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. Two citizenships. The qualifier is real. It is not a secret trapdoor that empties the clause.",
          },
          {
            heading: "Not the vote",
            body: "Abolition (13th) makes a person not-a-slave. This sentence says what the person is. Section 2 of this same amendment proves the drafters knew citizenship is not the vote. They put the rule in the Constitution because a later Congress could repeal a statute — the 1866 Act was the warning.",
          },
        ],
        bigIdea: "Section 1 replaces Dred Scott's citizenship holding. Citizenship is not the vote. The qualifier is real, not a trick.",
        tryThis: [
          {
            title: "Holding, then sentence",
            minutes: 20,
            steps: [
              "Write Taney's citizenship claim in one line. Write Section 1's first sentence under it.",
              "Circle 'subject to the jurisdiction thereof.' It is not nothing. It is not a trapdoor.",
              "Talk About It: why put a statute into the Constitution?",
            ],
          },
        ],
        dinnerQuestion: "If citizenship and voting are different, why do people use the words as if they were the same?",
        transfer: [{ label: "Thinking", note: "Sentence first. Qualifier second. Policy last — not in this sitting." }],
        ifTheySay: [
          { heard: "Birthright citizenship was an accident.", reply: "1866 Act, then the Constitution on purpose. A later Congress can repeal a statute." },
          { heard: "The 14th gave the vote.", reply: "Citizenship is not the vote. Section 2 and the 15th are the voting texts." },
        ],
        integrity: "Do not ask the model whether birthright citizenship is good policy. Ask it to state Taney, then the sentence, then Howard's named exclusions.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask who is a citizen under the 14th. Fail 'everyone' without the qualifier. Fail collapsing citizenship into the vote.",
          evaluate: ["Dred Scott holding?", "Sentence with qualifier?", "Not the vote?"],
        },
      },
      emerging: {
        title: "Dred Scott Overruled in a Sentence",
        dek: "Taney, 1866 Act, Section 1, Wong Kim Ark. Occasion was race. Grammar is persons. Qualifier is Howard, not cable news.",
        objective: "The student can sequence Dred Scott, the 1866 Act, Section 1, and Wong Kim Ark without treating present policy as 1868 paraphrase.",
        parentBriefing: "Howard, May 23, 1866. Wong Kim Ark 169 U.S. 649 (1898). Present-scope fights are 7.5, adult only — this sitting states the sentence. 7.5 not recruited to a caucus.",
        hardEdges: ["Do not ask whether birthright is good policy.", "Occasion is not the same as grammar."],
        reading: [
          {
            heading: "Statute, then Constitution",
            body: "The Civil Rights Act of 1866 already declared persons born in the United States, not subject to a foreign power, to be citizens. Congress put the rule in the Constitution because a later Congress could repeal a statute. Taney's citizenship holding is the target. Wong Kim Ark: a child born in San Francisco to Chinese parents who were not diplomats was a citizen. The Chinese Exclusion Acts could not unwrite a constitutional sentence.",
          },
          {
            heading: "Qualifier without a trapdoor",
            body: "Subject to the jurisdiction thereof. Howard named children of ambassadors and foreign ministers, and members of Indian tribes not taxed. The qualifier is not a circle (you must already be a citizen). It is also not nothing. Later fights about unlawful presence belong in 7.5, not as a paraphrase of 1868.",
          },
        ],
        bigIdea: "Birthright citizenship was written on purpose to overrule Dred Scott and to outlast a statute. Grammar is persons. Qualifier is real.",
        tryThis: [
          {
            title: "Four beats",
            minutes: 35,
            steps: [
              "Dred Scott / 1866 Act / Section 1 / Wong Kim Ark. One line each.",
              "Write Howard's named exclusions. Contrast with a cable-news brief.",
              "Practice: occasion was race; grammar is person.",
            ],
          },
        ],
        dinnerQuestion: "If Congress feared a later majority would repeal the 1866 Act, what does that tell you about putting a rule in the Constitution?",
        transfer: [{ label: "AI", note: "Do not ask good policy. Ask Taney, sentence, Howard, Wong Kim Ark." }],
        ifTheySay: [
          { heard: "It was meant only for former slaves.", reply: "Occasion is not the same as grammar. The sentence says persons born or naturalized, subject to jurisdiction." },
          { heard: "Subject to the jurisdiction means you have to be a citizen already.", reply: "That would make the sentence a circle. Howard named diplomats and tribes. Wong Kim Ark is the case." },
        ],
        integrity: "Sentence, qualifier, case. No policy vote.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to explain birthright citizenship. Fail accident. Fail missing qualifier. Fail missing Dred Scott.",
          evaluate: ["Sequence.", "Howard.", "Not the vote."],
        },
      },
      adult: {
        title: "Membership as a Constitutional Fact",
        dek: "Teach the override of Dred Scott, the 1866 warning, Howard's exclusions, Wong Kim Ark. Park present fights in 7.5. Do not recruit.",
        objective: "The parent can teach citizenship without collapsing it into immigration policy or into the 15th.",
        parentBriefing: "Adult may note 7.5 exists. Do not run 7.5 as this sitting. Dissents in Dred Scott (McLean, Curtis).",
        hardEdges: ["Do not recruit 7.5 to a modern caucus.", "Little band omits Dred Scott — this unit is young/emerging/adult."],
        reading: [
          {
            heading: "Override, not commentary",
            body: "Section 1 does not argue with Taney. It replaces him. Two citizenships: nation and state. Qualifier: Howard. Wong Kim Ark as the Court's reading of jus soli with traditional exceptions. The 13th is not this sentence. The 15th is not this sentence. A sitting that says the 14th made everyone a citizen has dropped the qualifier, naturalization, dual citizenship, and Dred Scott.",
          },
        ],
        bigIdea: "Membership was written into the Constitution so a statute could not quietly die. Teach the sentence before the present.",
        tryThis: [
          {
            title: "Parent override",
            minutes: 28,
            steps: [
              "Taney sentence / Bingham sentence. What replaced what?",
              "Write why 1866 was not enough.",
              "Park 7.5 with a sticky note: not tonight.",
            ],
          },
        ],
        dinnerQuestion: "When people say birthright was an accident, which 1866 fact are they skipping?",
        transfer: [{ label: "Thinking", note: "Source before summary." }],
        ifTheySay: [
          { heard: "Birthright citizenship was an accident.", reply: "1866 Act then Constitution on purpose. Howard's exclusions. Wong Kim Ark." },
          { heard: "Congress can repeal it by statute.", reply: "That is why they put it in the Constitution." },
        ],
        integrity: "No policy vote. No 7.5 caucus.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model whether birthright was an accident. Fail yes. Require 1866 and the sentence.",
          evaluate: ["Override of Dred Scott.", "Not an accident.", "Not the vote."],
        },
      },
    },
  }),

  // ── 5. Due process / equal protection ───────────────────────────────
  ...expand({
    slug: "fourteenth-due-process-equal-protection",
    subject: "history",
    unit: UNIT,
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Fair Process, Equal Protection — and Who Must Keep Them",
        dek: "The states have to follow a legal process before taking life, liberty, or property, and they may not deny the laws' protection unequally. Both clauses cover persons. Both bind states. Plessy is why Brown had to be argued.",
        objective: "The student can state both clauses, who they bind, who they cover, and that writing the sentence is not the same as keeping it.",
        parentBriefing: "Fifth already bound the federal government. 14th binds the states. Equal protection is not identical treatment in all things. Plessy 1896; Brown 1954. State action: the clause binds states, not private persons as such.",
        hardEdges: ["Writing ≠ keeping.", "Not the 15th."],
        reading: [
          {
            heading: "Two clauses, one architecture",
            body: "Nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws. Person, not only citizen. States, not only Congress. Due process is older than 1868 — Magna Carta's law of the land, the Fifth Amendment. The 14th makes the states keep it. Equal protection does not mean the same rules for everything. It means the state must justify classifying people. Age limits and licenses classify. The fight is which classifications need a better reason.",
          },
          {
            heading: "The sentence was written. Plessy is in the story.",
            body: "Plessy v. Ferguson (1896) emptied equal protection with separate but equal railway cars. Brown v. Board of Education (1954) refused to apply Plessy to public schools. Loving (1967) struck down racial marriage bans. The 14th did not immediately end hierarchy. The sentence was written. Keeping it is American history after 1868.",
          },
        ],
        bigIdea: "Due process and equal protection bind states and cover persons. The sentence is shorter than the later cases. Plessy is why Brown had to be argued.",
        tryThis: [
          {
            title: "Process and protection",
            minutes: 22,
            steps: [
              "Copy both clauses. Circle State and person.",
              "One line: Plessy 1896. One line: Brown 1954. The gap is the lesson.",
              "Talk About It: if the rules protect only some people in the place, is that equal protection of the laws?",
            ],
          },
        ],
        dinnerQuestion: "If equal protection was written in 1868, why did Brown have to be argued in 1954?",
        transfer: [{ label: "History", note: "Magna Carta due process ancestor. Declaration equality as proposition. 14th as rule on states." }],
        ifTheySay: [
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is in the story." },
          { heard: "Equal protection means everyone is treated the same.", reply: "It means the laws' protection may not be denied. Classification is how law works." },
          { heard: "The 14th only applies to race.", reply: "Occasion was race. Grammar is person. Dropping either is half the amendment." },
        ],
        integrity: "Do not ask the model to pick a team on later liberty or affirmative-action cases. Ask it to state the clauses, then Plessy, then Brown.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask what equal protection means. Fail 'the 14th ended segregation in 1868.' Demand Plessy and Brown.",
          evaluate: ["Both clauses?", "States and persons?", "Plessy in the story?"],
        },
      },
      emerging: {
        title: "Procedure, Protection, State Action",
        dek: "Fifth vs 14th. Procedure vs substance. State action. Plessy to Brown to Loving. Scrutiny is doctrine, not text. Color-blind vs anti-subordination is a fight, not a sitting that picks a team.",
        objective: "The student can separate clause from docket, name state action, and keep Plessy in the story.",
        parentBriefing: "Lochner through Dobbs as afterlife. Civil Rights Cases 1883. Shelley v. Kraemer. Morrison. SFFA 2023 as 7.4 pointer, not a verdict in this sitting.",
        hardEdges: ["Do not pick a caucus on 7.4.", "Due process is not only criminal trials."],
        reading: [
          {
            heading: "Due process without a blank check",
            body: "Procedural due process is the core: notice, hearing, a course of law. Substantive due process is the later docket — some liberties the state may not take even with perfect procedures. Those cases disagree with each other about liberty. They are not a paraphrase of 1868. Incorporation is the hook after Slaughter-House closed the privileges door. It is not in the words due process.",
          },
          {
            heading: "Equal protection without a poster",
            body: "State action: the clause binds states, not private innkeepers as such (Civil Rights Cases, 1883). Public-accommodations law later rode the commerce clause. Equal protection is protection of the laws, not a general equality of condition. Plessy emptied it. Brown, Loving, Reed, Obergefell, SFFA contest what the clause requires. Occasion was race. Grammar is persons. Both true.",
          },
        ],
        bigIdea: "Hear the clauses. Then the docket. State action is a line, not a sermon. Plessy is why Brown had to be argued.",
        tryThis: [
          {
            title: "Clause vs docket",
            minutes: 38,
            steps: [
              "Two columns: parchment / later cases. Put due process and equal protection in parchment. Put Plessy, Brown, one liberty case in docket.",
              "Write the state-action line in one sentence.",
              "Practice: occasion was race; grammar is person.",
            ],
          },
        ],
        dinnerQuestion: "If a private person wrongs you, is that a 14th Amendment problem — and when does it become one?",
        transfer: [
          { label: "Thinking", note: "Clause first. Docket second." },
          { label: "AI", note: "Fail 'ended segregation in 1868.' Fail 'only about race' without occasion+grammar." },
        ],
        ifTheySay: [
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is 1896. Brown is 1954." },
          { heard: "The 14th only applies to race.", reply: "Occasion was race. Grammar is person." },
          { heard: "Due process means the government can't take my stuff.", reply: "It cannot take it without due process of law. The words include the taking." },
        ],
        integrity: "Do not recruit the clauses to a caucus. Show the fight.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to explain due process and equal protection. Fail missing states, missing persons, missing Plessy.",
          evaluate: ["Fifth vs 14th.", "State action.", "Plessy then Brown."],
        },
      },
      adult: {
        title: "The Docket Is Not the Sentence",
        dek: "Procedure vs substance. State action. Color-blind vs anti-subordination as 7.4, not a team assignment. Dobbs reversing Roe as a lesson that liberty in doctrine is not liberty in the sentence.",
        objective: "The parent can teach both clauses without finishing America's later fights for the student.",
        parentBriefing: "Theological humility. 7.4 exists. Do not run it as this sitting's verdict. Yick Wo for person/citizen architecture.",
        hardEdges: ["Do not recruit 7.4.", "Do not skip state action."],
        reading: [
          {
            heading: "How to keep the piles",
            body: "Clause: states, persons, process, protection of the laws. Docket: Lochner, Meyer, Pierce, Griswold, Roe, Glucksberg, Obergefell, Dobbs; Plessy, Brown, Loving, Reed, SFFA. Line: state action, Civil Rights Cases, Shelley, Morrison. The parent shows the piles. The sitting does not award a championship.",
          },
        ],
        bigIdea: "The sentence is shorter than the doctrine. Keeping is history. The clause is the clause.",
        tryThis: [
          {
            title: "Parent piles",
            minutes: 32,
            steps: [
              "Three piles: clause / state action / later liberty and equality cases.",
              "Write the dinner reply to 'the 14th ended segregation in 1868' and to 'it's only about race.'",
            ],
          },
        ],
        dinnerQuestion: "When a Court changes its mind about liberty, did the 14th change — or did the docket?",
        transfer: [{ label: "Thinking", note: "Source before summary." }],
        ifTheySay: [
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is in the story." },
          { heard: "The 14th only applies to race.", reply: "Occasion was race. Grammar is person." },
        ],
        integrity: "No caucus. Clause then docket.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model if the 14th ended segregation in 1868. Fail yes. Demand Plessy.",
          evaluate: ["Clause vs docket.", "State action.", "No team."],
        },
      },
    },
  }),

  // ── 6. Ugly clauses / Reconstruction machinery ──────────────────────
  ...expand({
    slug: "fourteenth-ugly-clauses",
    subject: "history",
    unit: UNIT,
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Rest of the Amendment",
        dek: "Section 1 is famous. Sections 2 through 5 are why a Reconstruction Congress could pass it, and where it does not look like a poster. Name them.",
        objective: "The student can name Section 2's repeal of three-fifths, that the vote penalty is not a vote right, and at least two ugly clauses: Indians not taxed; no payment for slaves.",
        parentBriefing: "Do not skip 2-5 to get to Brown. Section 3: loyalty bar, not a criminal punishment; do not recruit to a caucus; young: one honest sentence that it bars office after rebellion, Congress can lift it. Section 4: Union debt stands, Confederate debt void, no payment for slaves. Section 5: Congress may enforce.",
        hardEdges: [
          "Ugly clauses named, not sermonized.",
          "Do not recruit Section 3 to a modern caucus.",
        ],
        reading: [
          {
            heading: "Not a poster",
            body: "Section 2 counts whole persons and still excludes Indians not taxed. Its vote rule is a counting penalty for shutting out adult male citizens twenty-one, except rebellion or other crime — not a right to vote. The 15th is the racial suffrage rule. Section 4 refuses to pay enslavers for emancipation. Name it without applause or apology. Section 5 gives Congress power to enforce. Section 1 without 2-5 is a poster.",
          },
          {
            heading: "Machinery and failure",
            body: "Reconstruction Congress wrote an instrument, not a greeting card. Southern states ratified under pressure. Redemption gutted the promise (Cruikshank, Civil Rights Cases, Plessy, unenforced Section 2). Writing the sentence is not keeping it. The civic chain from Magna Carta through Fed 54 lands here only if the ugly clauses stay on the table.",
          },
        ],
        bigIdea: "The 14th is a Reconstruction instrument with five sections. Famous Section 1 does not erase 2-5. Ugly clauses named. Keeping failed in places. The sentences remain.",
        tryThis: [
          {
            title: "Five sections",
            minutes: 22,
            steps: [
              "Label 1-5. One job each.",
              "Star two ugly facts: Indians not taxed; no payment for slaves.",
              "Talk About It: why would a poster skip Section 2?",
            ],
          },
        ],
        dinnerQuestion: "If we only teach Section 1, whose story gets easier — and whose gets erased?",
        transfer: [{ label: "History", note: "Civic chain including Fed 54. This sitting is the rest of the machine." }],
        ifTheySay: [
          { heard: "The 14th gave the vote.", reply: "Section 2 is a counting penalty. The 15th is the racial suffrage rule." },
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is in the story." },
        ],
        integrity: "Name Indians not taxed, male/21, crime exception, insurrection bar, no payment for slaves. Do not sermonize.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask how many sections the 14th has. Fail 'one.' Demand a job for 2, 4, and 5.",
          evaluate: ["Five sections?", "Penalty is not a vote right?", "At least one ugly clause named?"],
        },
      },
      emerging: {
        title: "Reconstruction Machinery, Ugly Clauses Named",
        dek: "Sections 2-5: apportionment remainder, office bar, debt, enforcement. Civil Rights Cases, Boerne, unenforced penalty. Do not skip to Brown.",
        objective: "The student can map sections 2-5, name ugly clauses, and distinguish Congressional enforcement from judicial definition.",
        parentBriefing: "Section 3: 1872 amnesty; Trump v. Anderson (2024) is about who decides, not whether the sentence exists — do not recruit. Section 5: 1883, Katzenbach, Boerne, Morrison. Commerce clause as the other door after 1883.",
        hardEdges: ["Do not recruit Section 3.", "Enforcement is not definition (Boerne)."],
        reading: [
          {
            heading: "The rest of the instrument",
            body: "Section 2: whole persons; Indians not taxed; male/21 penalty; crime exception; unenforced. Section 3: bar on office after oath plus rebellion; Congress may remove by two-thirds. It is not a criminal punishment. Section 4: Union debt shall not be questioned; Confederate debt void; claims for lost slave property void. Section 5: Congress may enforce by appropriate legislation. Reconstruction thought appropriate was McCulloch-broad. Later Courts narrowed, widened, narrowed again.",
          },
          {
            heading: "Keeping and unkeeping",
            body: "Slaughter-House, Cruikshank, Civil Rights Cases, Plessy, Redemption. The 13th and 15th are sibling instruments (6.2). Magna Carta due process is ancestor (6.3). Declaration equality is proposition (6.4). Fed 54 is the seats theory this unit answered in sitting 1. A fluent model will still say the 14th is equal protection. This sitting is why that fluency is a failure.",
          },
        ],
        bigIdea: "Five sections. Ugly clauses named. Enforcement is Congress's power. Keeping failed in places. The civic chain is honest only if 2-5 stay on the table.",
        tryThis: [
          {
            title: "Instrument, not poster",
            minutes: 38,
            steps: [
              "Five boxes. Job plus one hard fact each.",
              "Write: enforcement vs definition. Why does Boerne matter without making it the whole lesson?",
              "List ugly clauses aloud: Indians not taxed; male/21; crime; insurrection bar; no payment for slaves.",
            ],
          },
        ],
        dinnerQuestion: "If Section 5 gives Congress power to enforce, who is trespassing when the Court says Congress defined the right instead?",
        transfer: [
          { label: "Thinking", note: "Five sections vs the poster." },
          { label: "AI", note: "Fail one-section 14th. Fail recruiting Section 3." },
        ],
        ifTheySay: [
          { heard: "The 14th gave the vote.", reply: "Section 2 is a counting penalty. The 15th is the racial suffrage rule." },
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is in the story." },
        ],
        integrity: "Do not recruit Section 3, 7.4, or 7.5. Name ugly clauses. Writing ≠ keeping.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model to summarize the 14th. Fail if sections 2-5 are missing. Fail a modern-caucus Section 3.",
          evaluate: ["Five sections.", "Ugly clauses.", "Enforcement vs definition."],
        },
      },
      adult: {
        title: "The Amendment as Reconstruction, Not as Poster",
        dek: "Teach 2-5 without skipping Brown's century of unkeeping and without recruiting Section 3. The chain from Magna Carta and Fed 54 ends here only if the exclusions stay visible.",
        objective: "The parent can teach the whole instrument, the ugly clauses, and the enforcement fights without finishing 2024 politics for the table.",
        parentBriefing: "Trump v. Anderson is who decides. 1872 amnesty. Boerne congruence and proportionality. Heart of Atlanta as commerce after 1883 closed the 14th door. 7.1 Slaughter-House; 7.5 parked.",
        hardEdges: ["Do not recruit Section 3 to a caucus.", "Little band omits Section 3 — this unit has no little variants."],
        reading: [
          {
            heading: "Close the unit",
            body: "Sitting 1 answered 54. Sitting 2 heard four clauses. Sitting 3 kept Gettysburg inside as speech. Sitting 4 overrode Dred Scott. Sitting 5 separated clause from docket. This sitting puts the rest of the machine on the table: remainder of §2, office bar, debt, enforcement, unkeeping. The parent does not skip 2-5 to get to Brown. The parent does not skip Brown to stay in 1868. Both are the story.",
          },
        ],
        bigIdea: "A Reconstruction amendment has five sections. Famous words do not erase the rest. Honesty is naming the exclusions and the failures of keeping.",
        tryThis: [
          {
            title: "Parent close",
            minutes: 32,
            steps: [
              "Walk the six sittings in six sentences.",
              "Add the ugly list. Add: writing ≠ keeping.",
              "Write the reply to a poster that only quotes equal protection.",
            ],
          },
        ],
        dinnerQuestion: "What does a civics chain owe the reader at the end — a mascot, or the machine including the parts that still exclude?",
        transfer: [{ label: "History", note: "Magna Carta, Declaration, Constitution, Federalist 54, 14th. Speech is not the last instrument." }],
        ifTheySay: [
          { heard: "The 14th gave the vote.", reply: "Section 2 is a counting penalty. The 15th is the racial suffrage rule." },
          { heard: "It immediately ended hierarchy.", reply: "The sentence was written. Plessy is in the story." },
        ],
        integrity: "No caucus on Section 3. Ugly clauses named. Five sections.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask for the whole 14th. Fail a one-clause answer. Fail recruiting Section 3.",
          evaluate: ["Five sections.", "Ugly list.", "Chain including 54."],
        },
      },
    },
  }),
];

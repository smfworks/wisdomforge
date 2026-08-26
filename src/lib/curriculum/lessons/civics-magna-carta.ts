import { expand } from "./factory";

export const magnaCartaLessons = [
  // ── 1. The Field at Runnymede ──────────────────────────────────────
  ...expand({
    slug: "runnymede-field",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 1,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Field at Runnymede",
        dek: "A king with no army met barons with no crown in a muddy field. What they wrote down that day changed what kings could do.",
        objective:
          "The student can tell the story of Runnymede: who was there, what they wanted, and what the king agreed to under pressure.",
        parentBriefing:
          "This sitting tells the story of Magna Carta as it actually happened — not as a noble moment of liberty but as a military negotiation in a field. King John had taxed his barons into rebellion. He lost a war in France. He had no army left. The barons occupied London. The king had to talk. The result was a charter the king sealed at swordpoint and the Pope annulled within ten weeks. The story matters because it is honest: the charter was not a gift from a generous king. It was a demand from armed men who had had enough. The barons were not democrats. They were protecting their own class interests. But the precedent they set — that a king's power has limits — became the foundation of the rule of law. Read the story together. The gap between the legend and the reality is the lesson.",
        hardEdges: [
          "Do not present the barons as noble champions of liberty. They were protecting their own wealth and privileges.",
          "Do not present King John as simply refusing to honor the charter. He got the Pope to annul it within ten weeks, which led to the First Barons' War.",
        ],
        reading: [
          {
            heading: "The field",
            body: "Runnymede is a water meadow on the Thames, between Windsor Castle and the baronial camp at Staines. It was chosen because it was neutral ground — halfway between the king and the army that was about to remove him. This was not a ceremony in a hall. It was a negotiation in a field, conducted between a king with no army and barons with no crown. The meadow is the physical expression of a standoff.",
          },
          {
            heading: "What the king agreed to",
            body: "The charter the barons drafted was not short. It had 63 clauses. Most of them are dead law now — rules about feudal payments, fish-weirs, and the removal of foreign mercenaries. But four ideas survived: the king is not above the law, the king cannot tax without consent, the king cannot take your freedom without lawful judgment, and the king cannot sell, delay, or deny justice. These were not new ideas. But they were the first time a king wrote them down and put his seal on them.",
          },
        ],
        bigIdea:
          "Magna Carta was not a gift from a good king. It was a demand from armed barons in a field. The king agreed because he had no army.",
        tryThis: [
          {
            title: "The field",
            minutes: 20,
            steps: [
              "Draw the scene: the king on one side, the barons on the other, the Thames between them. Label who has what (king: seal, title, no army; barons: army, London, no crown).",
              "Write three things the barons demanded. Use the actual charter language where you can: 'No scutage without common counsel,' 'No free man taken without lawful judgment,' 'Justice neither sold, delayed, nor denied.'",
              "Talk About It: the king sealed the charter and then got the Pope to annul it ten weeks later. Was the charter a law or a promise? What's the difference?",
            ],
          },
        ],
        dinnerQuestion:
          "If the king agreed because he had no army, what happens when the king gets an army back?",
        transfer: [
          { label: "Thinking", note: "Source before summary: read the charter, not the legend." },
          { label: "AI", note: "Ask the model to summarize Magna Carta. Then read clause 39. What did the summary drop?" },
        ],
        ifTheySay: [
          {
            heard: "The barons were fighting for everyone's freedom.",
            reply: "They were fighting for their own freedom. The charter protected 'free men' — about 20% of England. The other 80%, the villeins who worked the land, were not mentioned. The barons were not democrats. They were wealthy men protecting their wealth. The precedent they set — that even a king has limits — became bigger than they were. But do not confuse what they intended with what they started.",
          },
          {
            heard: "King John just refused to honor it.",
            reply: "He did refuse — but not by ignoring it. He went to the Pope, who annulled the charter within ten weeks because it was sealed under duress. That is not the same as refusing. It is using a higher authority to undo what you agreed to. The First Barons' War started because the annulment left both sides with no agreement and only swords.",
          },
        ],
        integrity:
          "Do not cite a model's summary of Magna Carta as the source. Read the actual clauses. The summary will smooth the ugly parts — the villeins, the class privileges, the feudal specifics. The ugly parts are the history.",
        aiLab: {
          setup: "After the reading.",
          childDoes:
            "Ask the model: 'What did Magna Carta say about villeins?' If it says the charter protected everyone, that is wrong. Clause 39 says 'free man.' If it says the charter did not address villeins, that is honest. The omission is the lesson.",
          evaluate: [
            "Did they read the actual charter language, not just a summary?",
            "Did they notice who the charter protected and who it left out?",
            "Did they ask what happened after the sealing (the annulment, the war)?",
          ],
        },
      },
      emerging: {
        title: "Runnymede: The Charter and the Standoff",
        dek: "A feudal document forced from a king at swordpoint became the foundation of the rule of law. The gap between what it was and what it became is the story.",
        objective:
          "The student can explain the historical context of Magna Carta, what it actually said versus what legend says it said, and why a document sealed under duress and annulled within ten weeks still became foundational.",
        parentBriefing:
          "This sitting takes the Magna Carta seriously as a historical document, not a legend. The student needs to understand three things. First, the charter was a feudal contract, not a constitution — it addressed specific abuses of a specific king, not universal rights. Second, the charter was sealed under military pressure and annulled by the Pope within ten weeks — it survived because it was reissued three times and became too useful to stay dead. Third, the gap between what the charter actually said (class privileges for barons) and what it became (a symbol of universal rights) is the story of how interpretation works. The charter did not create democracy. It created the precedent that a king's power has legal limits. That precedent is the precondition for democracy, but it is not democracy itself. The student should be able to distinguish what the document was from what it became.",
        hardEdges: [
          "Do not present Magna Carta as a democratic document. It was a feudal contract protecting baronial class interests.",
          "Do not skip the annulment. The Pope annulled the charter within ten weeks. The First Barons' War followed. The charter survived through reissue, not through John's compliance.",
          "Name the omission: the charter said 'free men,' not 'all people.' Villeins — 75-80% of England's population — were not covered. The silence is not a footnote. It is the history.",
        ],
        reading: [
          {
            heading: "What Runnymede actually was",
            body: "Runnymede was not a ceremonial hall. It was a water meadow, chosen as neutral ground between the king's castle and the baronial army. The king had lost an empire in France, taxed his barons at unprecedented rates to fund failed wars, and alienated the Church. The barons occupied London. John had no army and no allies. The sealing of Magna Carta on June 15, 1215 was a military negotiation conducted in the open — a king with no army forced to grant specific liberties to armed men who no longer trusted him. The legal form was a royal charter, issued under the king's seal. The political reality was a surrender.",
          },
          {
            heading: "What the charter actually said",
            body: "The charter had 63 clauses. Most are dead law — provisions about feudal reliefs, fish-weirs, and the removal of foreign mercenaries. The clauses that survived are fewer and sharper. Clause 39: no free man shall be taken, imprisoned, or dispossessed except by lawful judgment of his peers or the law of the land. Clause 40: justice shall not be sold, delayed, or denied. Clause 12: no scutage or aid shall be imposed except by the common counsel of the kingdom. Clause 1: the Church shall be free. These are not universal rights. They are class privileges, granted to free men, enforced by barons. But they contain a principle that outgrew its origins: the king's power has limits, and the limits are written down.",
          },
          {
            heading: "What happened next",
            body: "John got the Pope to annul the charter within ten weeks. The Pope's reason: the charter was sealed under duress, and a promise made under threat is not binding. The annulment triggered the First Barons' War. John died in 1216, and the charter was reissued under his son Henry III — first in 1216, again in 1217 (with the Charter of the Forest split off as a separate document), and again in 1225. Each reissue dropped some clauses and kept others. The 1225 version, not the 1215 original, became the authoritative text. The charter survived not because John honored it but because it was too useful to the barons, the Church, and later the Parliament to let die.",
          },
        ],
        bigIdea:
          "Magna Carta was a feudal contract that became a symbol. The gap between what it was (class privileges for barons) and what it became (the rule of law) is the story of interpretation.",
        tryThis: [
          {
            title: "Read the actual clauses",
            minutes: 35,
            steps: [
              "Read clause 39 in the original: 'No free man shall be taken or imprisoned or disseised or outlawed or exiled or in any way destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land.'",
              "Write what each phrase means in plain English. 'Disseised' = dispossessed of property. 'Lawful judgment of his peers' = judgment by equals of the same rank. 'Law of the land' = English common law, not a written constitution.",
              "Now ask the model to summarize clause 39. Compare. What did the summary keep? What did it smooth?",
              "Read clause 40: 'To no one will we sell, to no one will we delay, to no one will we deny right or justice.' Write what this means. Then find where this idea appears in the US Constitution's Fifth Amendment.",
              "Reflect: the charter said 'free man.' Who was not free? What does the omission of the villeins tell you about who the barons were fighting for?",
            ],
          },
        ],
        dinnerQuestion:
          "Magna Carta said 'free men' had rights. Who was left out, and does the omission change what the document means?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the charter is the source. The legend is the summary." },
          { label: "AI", note: "Ask the model to summarize Magna Carta. Then read clause 39. What did it smooth away?" },
          { label: "Philosophy", note: "The Church Fathers on limited authority: Ambrose told an emperor he was in the church, not over it. Magna Carta told a king the same thing in writing." },
        ],
        ifTheySay: [
          {
            heard: "Magna Carta created democracy.",
            reply: "It did not. The barons were not democrats. They were the wealthiest men in England, protecting their own class privileges. The charter did not create Parliament, elections, or representation. It did not mention the villeins who made up 75-80% of the population. What it created was something more limited but still profound: the precedent that a king's power has legal limits. That is not democracy. It is the precondition for democracy — the space in which democratic government becomes possible. Do not inflate the charter into what it was not. Understand what it was, and trace how it became what it is.",
          },
          {
            heard: "The charter gave rights to everyone.",
            reply: "It gave rights to 'free men' — about 20% of England. The other 80%, the villeins bound to the land, were not mentioned. The charter's silence on the unfree is not accidental. It reflects the reality that the barons did not consider villeins to be their concern. The omission is the subject of scholarly debate: did the barons intentionally exclude the unfree, or did they simply not think about them? Either way, the charter was not a declaration of universal rights. It was a feudal contract. The universal rights came later, through interpretation and reinterpretation — sometimes through outright invention.",
          },
          {
            heard: "King John just refused to honor it.",
            reply: "He refused — but not by ignoring it. He went to the Pope, who annulled the charter within ten weeks on the grounds that it was sealed under duress. A promise made under threat is not binding. The annulment was legally valid under medieval canon law. The First Barons' War started because the annulment left both sides with no agreement and only swords. The charter survived through reissue under Henry III, not through John's compliance. The story is not 'good king, bad king.' It is 'king forced, king annuls, king dies, charter reissued.' The document outlived the man who sealed it.",
          },
        ],
        integrity:
          "Do not cite a model's summary as the source. The charter is the source. Read the actual clauses. The model will smooth the ugly parts — the class privileges, the villein omission, the feudal specifics. The ugly parts are the history.",
        aiLab: {
          setup: "After reading the actual clauses.",
          childDoes:
            "Ask the model: 'Summarize Magna Carta clause 39.' Then ask: 'Who does clause 39 protect?' If it says 'everyone,' that is wrong — it says 'free man.' If it says 'free men, excluding villeins,' that is honest. Then ask: 'What did the model's summary smooth away from the original?' The gap between the charter and the summary is the lesson.",
          evaluate: [
            "Did they read the actual charter language, not just a summary?",
            "Did they identify who was protected and who was omitted?",
            "Did they trace the charter's survival through reissue, not through compliance?",
            "Did they distinguish what the charter was (feudal contract) from what it became (symbol of the rule of law)?",
          ],
        },
      },
      adult: {
        title: "Runnymede: The Charter, the Legend, and the Gap Between",
        dek: "Magna Carta is the most misunderstood document in English history. Understanding what it actually was — and how it became what it is — is the first lesson in how institutions are built from interpretation.",
        objective:
          "The parent can explain the historical context of Magna Carta, the gap between the document and the legend, and how a feudal contract became the foundation of constitutional government through eight centuries of reinterpretation.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the Magna Carta honestly. The document is surrounded by legend: that it created democracy, that it granted rights to all, that the barons were noble champions of liberty. None of this is true. The charter was a feudal contract, written by barons for barons, sealed under duress, and annulled within ten weeks. What is true — and what makes the document genuinely important — is that it established the precedent that a king's power has legal limits. That precedent, not the document's original content, is the foundation of the rule of law. The gap between what the charter was and what it became is the story of how law works: not through the original text alone, but through centuries of people picking it up, reading it, and using it for purposes its authors never intended.",
        hardEdges: [
          "Do not teach the legend. Teach the document and the gap between the document and the legend.",
          "The omission of villeins is not a footnote. It is the central fact about who the charter was for.",
          "The annulment matters. The charter survived through reissue and political utility, not through John's compliance or moral force.",
        ],
        reading: [
          {
            heading: "The document and the legend",
            body: "The legend of Magna Carta is older than the United States. By the seventeenth century, English lawyers were citing the charter as the foundation of trial by jury, habeas corpus, and parliamentary consent to taxation. Sir Edward Coke, the great jurist, treated Magna Carta as the ancient constitution — a document that had guaranteed English liberties since time immemorial. He was wrong about the history. The 1215 charter did not create trial by jury (though clause 39 is its ancestor). It did not create Parliament (though clause 12 is its ancestor). It did not guarantee liberties to all English people. But Coke's misreading became more influential than the original document. The legend, not the text, shaped the American founding: the Fifth Amendment's 'due process of law' is Coke's gloss on clause 39, not the clause itself. The story of Magna Carta is the story of how interpretation can outgrow the text — and why that is both the power and the danger of legal precedent.",
          },
          {
            heading: "What the charter actually said",
            body: "Sixty-three clauses. Most are obsolete: rules about feudal reliefs (the payment due when a minor heir comes of age), fish-weirs on the Thames, the removal of foreign mercenaries from England. The clauses that survived are the ones that could be generalized beyond their feudal context. Clause 39 — due process. Clause 40 — justice not sold, delayed, or denied. Clause 12 — no taxation without common counsel. Clause 1 — Church freedom. Each of these was a specific response to a specific abuse by John. But each contained a principle that could be separated from its context and applied to new situations. The charter's genius was not in what it said but in what it could be made to say.",
          },
          {
            heading: "The chain of reissue and reinterpretation",
            body: "1215: sealed at Runnymede, annulled by the Pope. 1216: reissued by Henry III's regents during the civil war, with the most controversial clauses dropped. 1217: reissued again, with the Charter of the Forest split off as a separate document. 1225: reissued in its authoritative form, which became the standard text for the rest of the Middle Ages. 1297: confirmed by Edward I and entered on the statute roll. Each reissue was a political act — a king or regent buying support by confirming the charter. Each confirmation was an interpretation — keeping some clauses, dropping others, reshaping the document for new purposes. By 1297, the charter was no longer the 1215 document. It was a layered text, built from four reissues and a century of legal interpretation. The document that Coke read in the seventeenth century was not the document the barons drafted in 1215. It was the document the legal tradition had made from it.",
          },
        ],
        bigIdea:
          "The story of Magna Carta is the story of how a feudal contract became a constitutional principle. The transformation happened through eight centuries of reinterpretation. The document did not create the rule of law. The people who read it, cited it, and used it created the rule of law — by taking a charter about baronial privileges and making it mean something its authors never intended.",
        tryThis: [
          {
            title: "Trace the chain",
            minutes: 40,
            steps: [
              "Read clause 39 of the 1215 charter. Write what it says, in your own words.",
              "Find the Fifth Amendment to the US Constitution. Read the due process clause. Compare the language: 'lawful judgment of his peers or the law of the land' vs 'due process of law.' What changed? What stayed?",
              "Read Coke's Institutes (or a summary) on Magna Carta. Coke treated clause 39 as the foundation of trial by jury and habeas corpus. Was he reading the text, or reading into it? Is there a difference?",
              "Ask the model to summarize Magna Carta's legacy in three sentences. Then ask: 'What did your summary smooth away?' The gap between the original and the summary is the same gap the legend created.",
            ],
          },
        ],
        dinnerQuestion:
          "How did a feudal contract about baronial privileges become the foundation of constitutional government? Whose work was that — the barons', the lawyers', or the legend's?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the charter is the source. Coke's Institutes are the summary. The legend is the summary of the summary." },
          { label: "AI", note: "Ask the model to explain Magna Carta's influence on the US Constitution. Then read clause 39 and the Fifth Amendment yourself. What did the model's explanation obscure?" },
          { label: "Philosophy", note: "The Church Fathers on limited authority: Ambrose told Theodosius he was in the church, not over it. Magna Carta told John the same thing in writing. The principle is the same; the language is different." },
        ],
        ifTheySay: [
          {
            heard: "Magna Carta is the foundation of our rights.",
            reply: "It is the foundation in the sense that a seed is the foundation of a tree. The seed (clause 39) contained a principle (the king has limits). The tree (constitutional government) grew from eight centuries of interpretation. The barons planted the seed. The lawyers, the Parliament, the founders, and the legend grew the tree. Do not confuse the seed with the tree. But do not dismiss the seed either. Without it, the tree would not exist.",
          },
          {
            heard: "It was all about the rich protecting their own interests.",
            reply: "It was. The barons were not democrats. They were the wealthiest men in England, and they were protecting their wealth. But the precedent they set — that a king's power has written limits — was not under their control. Once the principle is on paper, anyone can use it. The barons intended to protect themselves. The principle they wrote down ended up protecting everyone — not because they meant it to, but because the principle was bigger than their intention. That is the story of how law works: you write a rule for your own situation, and the rule outgrows you.",
          },
        ],
        integrity:
          "Do not cite a model's summary as the source. The charter is the source. Coke is the interpretation. The legend is the story. Read each in order. Do not collapse them.",
        aiLab: {
          setup: "After the reading and the try-this.",
          childDoes:
            "Ask the model: 'Explain how Magna Carta influenced the Fifth Amendment.' Then ask: 'What did your explanation simplify?' The model will collapse the chain of reissue and reinterpretation into a direct line. The actual chain is longer, messier, and more interesting. The simplification is the lesson.",
          evaluate: [
            "Can they distinguish the 1215 charter from the 1225 reissue from Coke's seventeenth-century interpretation?",
            "Can they trace the chain from clause 39 to the Fifth Amendment?",
            "Do they understand that the legend is not the text — and that both matter?",
          ],
        },
      },
    },
  }),

  // ── 2. The King Is Not Above the Law ───────────────────────────────
  ...expand({
    slug: "king-not-above-law",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 2,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The King Is Not Above the Law",
        dek: "The first time a king wrote down that his power had limits. The idea is simple. The history is not.",
        objective:
          "The student can explain what 'the rule of law' means and why it mattered that a king wrote it down.",
        parentBriefing:
          "This sitting is about the single most important idea in Magna Carta: the king is not above the law. Not because the barons were philosophers — they were not. Because John had pushed so far that the barons needed it in writing. The idea had existed before. What was new was the writing. Once the king puts his seal on a document that says 'I will not do X without lawful judgment,' the king has admitted that his power has a boundary. That admission is the seed of constitutional government.",
        hardEdges: [
          "Do not present this as a smooth story of progress. The charter was annulled, reissued, modified, and fought over for centuries.",
          "The 'law of the land' in 1215 was not a written constitution. It was English common law — customs, procedures, and precedents.",
        ],
        reading: [
          {
            heading: "What 'above the law' means",
            body: "If the king is above the law, then whatever the king says is law. He can imprison you because he wants to. He can take your land because he needs it. He can raise taxes because he spent too much. There is no rule, only power. Magna Carta changed this — not because the barons invented the idea that kings have limits, but because they made the king write it down. Writing it down means the king admitted it. And an admission, once sealed, is hard to take back.",
          },
          {
            heading: "What the law of the land meant",
            body: "Clause 39 says 'the law of the land.' In 1215, that meant the customs and procedures of English common law — the rules that had grown up through the royal courts over a hundred years. It was not a written constitution. It was a living tradition, administered by judges, shaped by precedent. The king was part of it, but he was not above it. That is the rule of law: the king is inside the law, not over it.",
          },
        ],
        bigIdea:
          "The rule of law means the king is inside the law, not over it. Magna Carta was the first time a king wrote that down.",
        tryThis: [
          {
            title: "Write the rule",
            minutes: 18,
            steps: [
              "Write one rule that even a king should follow. Use Magna Carta language: 'The king cannot take someone's freedom without a trial.'",
              "Now write what would happen if there were no rule. The king could do what? List three things.",
              "Talk About It: why does writing it down matter? If everyone knows the king has limits, why does it need to be on paper?",
            ],
          },
        ],
        dinnerQuestion: "What is one rule that should apply to everyone, even the most powerful person?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'kings have limits.' The check is the written charter." },
        ],
        ifTheySay: [
          {
            heard: "The king can do whatever he wants anyway.",
            reply: "He can — until someone stops him. That is what Runnymede was. John did whatever he wanted until the barons occupied London and he ran out of army. Writing it down did not make the king obey. It made the king's disobedience visible. Once the rule is on paper, breaking it is not just bad behavior. It is lawbreaking. That distinction matters.",
          },
        ],
        integrity: "Do not let the model summarize the rule of law in one sentence. Read clause 39. The specific language matters.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What does the rule of law mean?' Then ask: 'How does Magna Carta clause 39 express it?' Compare the model's general definition to the charter's specific language.",
          evaluate: [
            "Can they explain the rule of law in their own words?",
            "Can they point to clause 39 as the first written expression?",
          ],
        },
      },
      emerging: {
        title: "The Rule of Law: From Runnymede to the Fifth Amendment",
        dek: "Clause 39 said 'the law of the land.' The Fifth Amendment says 'due process of law.' The chain between them is the story of how a feudal phrase became a constitutional right.",
        objective:
          "The student can trace the concept of due process from Magna Carta clause 39 to the Fifth Amendment, explaining how a feudal protection became a constitutional principle.",
        parentBriefing:
          "This sitting traces the chain: Magna Carta clause 39 ('lawful judgment of his peers or the law of the land') to the Fifth Amendment ('due process of law'). The chain runs through Sir Edward Coke, who translated 'law of the land' into 'due process of law' in his Institutes. The student needs to see that the phrase changed but the principle held: the government cannot take your freedom without following established legal procedures. The interesting question is whether Coke was translating or inventing — whether 'due process' is the same idea as 'law of the land' or a new idea dressed in old language.",
        hardEdges: [
          "Do not present the chain as a straight line. It runs through annulment, civil war, reissue, and seventeenth-century reinterpretation.",
          "Coke's translation of 'law of the land' into 'due process of law' was an act of interpretation, not a faithful rendering. The student should see both what Coke preserved and what he changed.",
        ],
        reading: [
          {
            heading: "The clause that started it",
            body: "Clause 39: 'No free man shall be taken or imprisoned or disseised or outlawed or exiled or in any way destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land.' Every phrase matters. 'Free man' — not everyone. 'Disseised' — dispossessed of property, not just imprisoned. 'Lawful judgment of his peers' — judgment by equals, the ancestor of trial by jury. 'Law of the land' — English common law, not a written constitution. The clause is a feudal protection. The principle inside it — that the government cannot deprive a person of liberty without legal process — is the ancestor of every due process right in Western law.",
          },
          {
            heading: "Coke's translation",
            body: "Sir Edward Coke, the seventeenth-century jurist, read clause 39 and saw trial by jury, habeas corpus, and parliamentary consent to taxation. He translated 'law of the land' (lex terrae) as 'due process of law' — a phrase that does not appear in the original charter. Was Coke reading the text faithfully or reading into it? The answer is both. 'Due process of law' captures the principle — established legal procedures, not arbitrary power — but it generalizes it beyond the feudal context. Coke took a clause about barons and made it about everyone. That act of generalization is interpretation, not translation. And it is the reason the Fifth Amendment says 'due process of law' instead of 'law of the land.'",
          },
        ],
        bigIdea:
          "Due process is the Fifth Amendment's word for Magna Carta's 'law of the land.' The translation happened through Sir Edward Coke. It was an act of interpretation, not fidelity.",
        tryThis: [
          {
            title: "Trace the phrase",
            minutes: 30,
            steps: [
              "Write clause 39's key phrase: 'lawful judgment of his peers or by the law of the land.'",
              "Find the Fifth Amendment: 'No person shall be deprived of life, liberty, or property, without due process of law.'",
              "Compare: 'free man' vs 'person.' 'Law of the land' vs 'due process of law.' 'Taken or imprisoned or disseised' vs 'deprived of life, liberty, or property.' What broadened? What stayed?",
              "Reflect: Coke translated 'law of the land' as 'due process of law.' Was that a translation or an invention? What is at stake in the answer?",
            ],
          },
        ],
        dinnerQuestion: "If 'due process' is a translation of 'law of the land,' what got lost in translation?",
        transfer: [
          { label: "Thinking", note: "Source before summary: clause 39 is the source. Coke is the interpretation. The Fifth Amendment is the interpretation of the interpretation." },
          { label: "AI", note: "Ask the model to explain the connection between Magna Carta and the Fifth Amendment. Then ask: 'What did the model simplify?' The chain is longer than any summary can hold." },
        ],
        ifTheySay: [
          {
            heard: "Magna Carta invented due process.",
            reply: "It did not invent due process. It invented the phrase 'law of the land,' which Coke translated as 'due process of law' four centuries later. The idea — that the government cannot take your freedom without legal process — was in the charter. The word 'due process' was not. The chain from clause 39 to the Fifth Amendment runs through Coke, through the American founders, and through two centuries of reinterpretation. The principle is old. The language is newer. Do not confuse them.",
          },
        ],
        integrity: "Do not cite the model's summary of the chain. Read clause 39 and the Fifth Amendment. Trace the language change yourself.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'How did Magna Carta influence the Fifth Amendment?' Then ask: 'What did your explanation skip?' The model will compress the chain. The actual chain has more links. The compression is the lesson.",
          evaluate: [
            "Can they identify clause 39 as the source?",
            "Can they explain Coke's role in the translation?",
            "Do they understand that 'due process' is Coke's phrase, not the charter's?",
          ],
        },
      },
      adult: {
        title: "The Rule of Law and Its Price",
        dek: "The principle that no one is above the law sounds simple. The history of how it was written down, annulled, reissued, and eventually enforced is anything but.",
        objective:
          "The parent can explain the historical chain from Magna Carta's 'law of the land' to modern due process, including the acts of interpretation that transformed a feudal protection into a constitutional right.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the rule of law honestly. The principle is simple: no one is above the law. The history is not. The principle was written down at Runnymede, annulled within ten weeks, reissued three times, confirmed by Edward I in 1297, reinterpreted by Coke in the seventeenth century, cited by the American founders in the eighteenth, and still cited today. At every step, someone picked up the text, read it, and used it for a purpose its authors did not intend. The principle survived not because it was self-enforcing but because it was useful — to barons, to Parliament, to lawyers, to revolutionaries. The rule of law has a price: someone has to enforce it. Magna Carta's enforcement mechanism (clause 61, the security clause) was dropped from the reissues. The principle survived without enforcement for centuries because people kept picking it up and using it. That is how law works: not through the text alone, but through the people who insist the text means something.",
        hardEdges: [
          "The security clause (clause 61) — the barons' enforcement mechanism — was dropped from all reissues. The rule of law survived without an enforcement mechanism. That is worth thinking about.",
          "Coke's translation of 'law of the land' as 'due process of law' was an act of creative interpretation. It was not faithful to the original. It was useful for his purposes. Both things are true.",
        ],
        reading: [
          {
            heading: "The principle and the price",
            body: "The rule of law is the principle that all persons and institutions — including the government and its officials — are subject to law that is publicly known, equally enforced, and independently adjudicated. Magna Carta did not invent this principle. But it is the earliest document in the English legal tradition where a king formally acknowledged, in writing, that his power had legal limits. That acknowledgment — grudging, coerced, and immediately violated — is the seed from which the rule of law grew. The price of the rule of law is enforcement. The barons tried to build enforcement into the charter: clause 61 created a council of 25 barons who could seize the king's castles and lands if he violated any clause. This was the charter's teeth. But clause 61 was dropped from every reissue. The reissued charters had no enforcement mechanism. The rule of law survived without teeth because people kept picking up the text and using it — in court, in Parliament, in revolution. The principle outlived the enforcement because the principle was useful.",
          },
        ],
        bigIdea:
          "The rule of law survived without an enforcement mechanism for centuries. It survived because people kept picking up the text and using it. Law is not just a text. It is a practice.",
        tryThis: [
          {
            title: "Read the security clause",
            minutes: 35,
            steps: [
              "Read clause 61 of the 1215 charter (the security clause). It created a council of 25 barons with the power to seize the king's property if he violated any clause.",
              "Ask: why was this clause dropped from every reissue? What does it mean that the rule of law survived without it?",
              "Find a modern enforcement mechanism: the courts, the Constitution, international law. How does each enforce the rule of law? What happens when the enforcement mechanism fails?",
              "Reflect: law without enforcement is a suggestion. Law with enforcement is a rule. Magna Carta had enforcement (clause 61) and lost it. The rule of law survived anyway. How?",
            ],
          },
        ],
        dinnerQuestion: "If Magna Carta's enforcement mechanism was dropped from every reissue, how did the rule of law survive for eight centuries without it?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How is the rule of law enforced today?' Then ask: 'What did the model leave out?' The answer is always: people. People enforce law by believing it means something." },
          { label: "Philosophy", note: "Ambrose told Theodosius he was in the church, not over it. Magna Carta told John the same thing in writing. The principle is the same. The language changed because the institution changed." },
        ],
        ifTheySay: [
          {
            heard: "The law is just words on paper.",
            reply: "It is. And words on paper, without enforcement, are a suggestion. But words on paper, with people who believe them and act on them, are a rule. Magna Carta survived without a formal enforcement mechanism because people — Coke, the Parliament, the founders — kept picking it up and using it. Law is not just a text. It is a practice. The text is necessary but not sufficient. The practice is what makes the text mean something. That is why the rule of law is never finished. It has to be re-enforced by every generation that inherits it.",
          },
        ],
        integrity: "Do not let the model collapse the chain from clause 39 to modern due process into one sentence. The chain has links. Each link is an act of interpretation. Read the links.",
        aiLab: {
          setup: "After the reading.",
          childDoes: "Ask the model: 'Summarize the history of Magna Carta's influence on modern law in three sentences.' Then ask: 'What did you leave out?' The model will compress eight centuries into three sentences. The compression is useful for overview but deadly for understanding. The student should identify what the compression erased.",
          evaluate: [
            "Can they explain why the security clause was dropped and what that means for enforcement?",
            "Can they trace at least two links in the chain from clause 39 to modern due process?",
            "Do they understand that law is a practice, not just a text?",
          ],
        },
      },
    },
  }),

  // ── 3. Due Process: From Clause 39 to the Fifth Amendment ─────────
  ...expand({
    slug: "due-process-chain",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 3,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Your Day in Court",
        dek: "The king cannot just lock you up. He has to follow rules. That idea is 800 years old and still being argued.",
        objective:
          "The student can explain what due process means and why it matters that the king agreed to it in writing.",
        parentBriefing:
          "This sitting is about due process — the idea that the government cannot take your freedom without following established legal procedures. Magna Carta clause 39 is the first written version: no free man shall be taken or imprisoned except by lawful judgment. The Fifth Amendment says the same thing in different words: no person shall be deprived of life, liberty, or property without due process of law. The student should understand that the idea is old but the fight to make it real is ongoing. Due process is not a finished thing. It is a principle that has to be enforced in every generation.",
        hardEdges: [
          "Do not present due process as settled. The charter was annulled. The principle survived through reissue and reinterpretation, not through compliance.",
          "Clause 39 says 'free man.' Due process was not originally for everyone. The expansion from 'free man' to 'person' took centuries.",
        ],
        reading: [
          {
            heading: "What due process means",
            body: "Due process means the government cannot punish you without following the rules. The king cannot throw you in a cell because he is angry. He has to show that you broke a law, prove it in front of people who can judge it, and follow the procedures that everyone agrees on. This sounds obvious now. In 1215, it was revolutionary. Kings did what they wanted. The barons made John write it down: 'No free man shall be taken or imprisoned except by the lawful judgment of his peers or by the law of the land.'",
          },
          {
            heading: "Why it is still being argued",
            body: "Due process sounds simple: follow the rules. But the rules change. What counts as a fair trial? Who counts as your peers? How long can the government hold you before charging you? These questions are still in the courts today. Magna Carta started the argument. It did not finish it.",
          },
        ],
        bigIdea:
          "Due process means the government has to follow rules before it takes your freedom. Magna Carta wrote it down 800 years ago. The argument about what it means is still going.",
        tryThis: [
          {
            title: "Write the rule",
            minutes: 18,
            steps: [
              "Write one sentence: 'The government cannot take my freedom without ___.' Fill in the blank.",
              "Read clause 39. Does the charter say the same thing you wrote? What did it add?",
              "Talk About It: if due process is a rule, who enforces it? What happens when no one does?",
            ],
          },
        ],
        dinnerQuestion: "What does 'a fair trial' mean to you? Would it have meant the same thing in 1215?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'the government follows the rules.' The check is whether the rules are written down and enforced." },
        ],
        ifTheySay: [
          {
            heard: "Due process is just a technicality.",
            reply: "It is a technicality — and technicalities are what separate law from power. Without due process, the government can do whatever it wants to you. With due process, the government has to follow rules. The rules might be imperfect. But imperfect rules are better than no rules. Ask someone who lives in a country without due process whether it is 'just a technicality.'",
          },
        ],
        integrity: "Do not let the model define due process in one sentence. Read clause 39. The specific language — 'lawful judgment of his peers,' 'law of the land' — matters.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'What is due process?' Then ask: 'What did Magna Carta clause 39 add to the idea?' Compare the model's general definition to the charter's specific language.",
          evaluate: [
            "Can they explain due process in their own words?",
            "Can they point to clause 39 as the source?",
          ],
        },
      },
      emerging: {
        title: "Due Process: The Chain from Clause 39 to the Fifth Amendment",
        dek: "Eight centuries of interpretation separate 'the law of the land' from 'due process of law.' The chain is the story of how law works.",
        objective:
          "The student can trace the concept of due process from Magna Carta clause 39 through Sir Edward Coke to the Fifth Amendment, explaining how a feudal protection became a constitutional right.",
        parentBriefing:
          "This sitting traces the chain in detail. The student needs to see that 'due process of law' is not a direct translation of 'the law of the land.' It is Coke's interpretation — an act of creative reading that took a feudal protection and generalized it into a universal principle. The chain is: clause 39 (1215) → reissue and confirmation (1216-1297) → Coke's Institutes (1628) → Fifth Amendment (1791). Each link is an act of interpretation. The student should understand that the principle survived not because the text was self-enforcing but because each generation picked it up and used it for their own purposes.",
        hardEdges: [
          "Coke's translation was creative, not faithful. 'Due process of law' is Coke's phrase, not the charter's. The student should know the difference.",
          "The expansion from 'free man' to 'person' was not automatic. It required centuries of reinterpretation and political struggle.",
        ],
        reading: [
          {
            heading: "The clause and the amendment",
            body: "Magna Carta clause 39: 'No free man shall be taken or imprisoned or disseised or outlawed or exiled or in any way destroyed, nor will we go upon him nor send upon him, except by the lawful judgment of his peers or by the law of the land.' The Fifth Amendment: 'No person shall be deprived of life, liberty, or property, without due process of law.' The words changed. 'Free man' became 'person.' 'Law of the land' became 'due process of law.' 'Taken or imprisoned or disseised' became 'deprived of life, liberty, or property.' Each change is an act of interpretation — someone reading the old text and deciding it means something bigger than its original context.",
          },
          {
            heading: "Coke's creative reading",
            body: "Sir Edward Coke was the seventeenth-century jurist who made Magna Carta mean more than it said. In his Institutes of the Laws of England (1628), he treated clause 39 as the foundation of trial by jury, habeas corpus, and parliamentary consent to taxation. He translated 'law of the land' (lex terrae) as 'due process of law' — a phrase that appears nowhere in the original charter. Coke was not translating faithfully. He was reading creatively. He took a clause about barons and made it about everyone. That creative reading is why the Fifth Amendment says 'due process of law' instead of 'law of the land.' The American founders read Coke, not the charter. They inherited Coke's interpretation as if it were the original. That is how law works: the interpretation becomes the text, and the original text becomes a footnote.",
          },
        ],
        bigIdea:
          "'Due process of law' is Coke's phrase, not the charter's. The chain from clause 39 to the Fifth Amendment runs through an act of creative interpretation that transformed a feudal protection into a universal right.",
        tryThis: [
          {
            title: "Compare the texts",
            minutes: 30,
            steps: [
              "Write clause 39 side by side with the Fifth Amendment. Mark every word that changed.",
              "For each change, ask: who made this change, and why? 'Free man' → 'person': who expanded it? 'Law of the land' → 'due process of law': who translated it?",
              "Reflect: is 'due process of law' the same idea as 'law of the land,' or a new idea in old clothes? What is at stake in the answer?",
            ],
          },
        ],
        dinnerQuestion: "If Coke's interpretation became more influential than the original text, does the original text still matter? Or does the interpretation replace it?",
        transfer: [
          { label: "AI", note: "Ask the model to summarize the connection between clause 39 and the Fifth Amendment. Then ask: 'Where did the model skip a link?' The chain has more links than any summary holds." },
        ],
        ifTheySay: [
          {
            heard: "The Fifth Amendment is just Magna Carta in modern English.",
            reply: "It is not. It is Magna Carta as Coke read it — which is not the same thing. 'Due process of law' is Coke's translation of 'law of the land,' and the translation is creative, not faithful. Coke generalized a feudal protection into a universal right. The Fifth Amendment inherits Coke's generalization, not the charter's original. The chain has a link — Coke — that the summary smooths away. That link is where the principle was transformed.",
          },
        ],
        integrity: "Do not cite the model's summary of the chain. Read clause 39 and the Fifth Amendment. Find the links yourself. The model will compress; the chain is longer than the compression.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Explain how Magna Carta influenced the Fifth Amendment in one paragraph.' Then ask: 'What link did you skip?' The model will go directly from the charter to the amendment. Coke is the missing link. The omission is the lesson.",
          evaluate: [
            "Can they identify Coke as the link between clause 39 and the Fifth Amendment?",
            "Do they understand that 'due process' is Coke's phrase, not the charter's?",
            "Can they explain whether the translation was faithful or creative — and why it matters?",
          ],
        },
      },
      adult: {
        title: "Due Process: The Price of the Principle",
        dek: "Due process is the principle that government power has procedural limits. The history of that principle — from Runnymede to the modern courtroom — is the history of how a text becomes a practice.",
        objective:
          "The parent can explain the historical chain from Magna Carta clause 39 to modern due process, including the acts of interpretation that transformed a feudal protection into a constitutional right, and the ongoing challenge of enforcement.",
        parentBriefing:
          "This sitting is for the parent who wants to teach due process honestly — not as a settled principle but as a living argument. The principle is 800 years old. The fight to enforce it is ongoing. The parent should understand that due process is not just a legal rule. It is a political commitment: the government agrees to limit its own power. That agreement has a price. The price is enforcement — courts, juries, lawyers, and citizens who insist the rules mean something. Magna Carta's enforcement mechanism (clause 61, the security clause) was dropped from the reissues. The principle survived without enforcement because people kept picking it up and using it. That is the deepest lesson of due process: law is not self-enforcing. It requires people who believe in it.",
        hardEdges: [
          "The security clause (clause 61) was the charter's enforcement mechanism. It was dropped from every reissue. The rule of law survived without it — but that survival is not guaranteed. It depends on people.",
          "Due process is a procedural protection, not a substantive one. It says the government must follow the rules. It does not say the rules are good. Due process can coexist with unjust laws.",
        ],
        reading: [
          {
            heading: "The principle and the practice",
            body: "Due process is the procedural guarantee that stands between the individual and the raw power of the state. It says: the government cannot deprive you of life, liberty, or property except through established legal procedures. The principle is ancient — Magna Carta clause 39 is its first written expression. The practice is ongoing. Every generation faces the question: what counts as 'established legal procedures'? Who decides? What happens when the procedures are followed but the outcome is unjust? Due process is a procedural protection, not a substantive one. It ensures the rules are followed. It does not ensure the rules are good. That is its strength — it applies even when we disagree about what is just — and its limitation — it can coexist with injustice. The student should see both.",
          },
        ],
        bigIdea:
          "Due process is a procedural limit on government power, not a guarantee of justice. The principle is 800 years old. The practice of enforcing it is the work of every generation.",
        tryThis: [
          {
            title: "Read the security clause",
            minutes: 35,
            steps: [
              "Read clause 61 of the 1215 charter. It created a council of 25 barons who could seize the king's property if he violated any clause. This was the enforcement mechanism.",
              "Ask: why was this clause dropped from every reissue? What does it mean that the rule of law survived without enforcement?",
              "Find a modern enforcement mechanism: courts, judicial review, international law. How does each enforce due process? What happens when the mechanism fails?",
              "Reflect: law without enforcement is a suggestion. Law with enforcement is a rule. The rule of law survived for centuries without formal enforcement. How? Who kept it alive?",
            ],
          },
        ],
        dinnerQuestion: "If due process is a procedural protection, not a guarantee of justice, what is its value? Why does it matter even when the law is unjust?",
        transfer: [
          { label: "AI", note: "Ask the model: 'What is the difference between procedural due process and substantive due process?' The model will explain the legal distinction. Then ask: 'Which one did Magna Carta create?' The answer is procedural — and that is both its strength and its limit." },
        ],
        ifTheySay: [
          {
            heard: "Due process protects everyone equally.",
            reply: "It protects everyone who can access it. The expansion from 'free man' to 'person' took centuries of political struggle. The clause said 'free man' in 1215. The Fifth Amendment said 'person' in 1791. But the Fourteenth Amendment (1868) was needed to apply due process to the states — and the Civil Rights movement was needed to make it real for Black Americans. The principle expands through struggle, not through automatic growth. The chain from clause 39 to universal due process is not a straight line. It is a history of people fighting to make the text mean what it says.",
          },
        ],
        integrity: "Do not let the model collapse the chain into a summary. Each link — Coke, the founders, the Fourteenth Amendment, the Civil Rights movement — is an act of interpretation and struggle. Read the links.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'Summarize the history of due process in three sentences.' Then ask: 'What did you skip?' The model will skip the struggle. The struggle is the story.",
          evaluate: [
            "Can they distinguish procedural from substantive due process?",
            "Can they explain why the security clause was dropped and what that means?",
            "Do they understand that due process expands through struggle, not automatically?",
          ],
        },
      },
    },
  }),

  // ── 4. Consent: No Taxation Without Common Counsel ────────────────
  ...expand({
    slug: "consent-common-counsel",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 4,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Ask Before You Take",
        dek: "The king wanted money. The barons said: ask first. That simple rule became 'no taxation without representation.'",
        objective:
          "The student can explain why the barons demanded that the king ask before taxing, and how that idea grew into 'no taxation without representation.'",
        parentBriefing:
          "This sitting is about consent — the idea that the government cannot take your money without asking. Magna Carta clause 12 said the king cannot levy scutage (a tax in lieu of military service) without the 'common counsel of our kingdom.' The common counsel was the great council — barons, bishops, and abbots — which became Parliament. This is the ancestor of 'no taxation without representation,' the slogan that fueled the American Revolution. The student should understand that the idea started as a baronial demand: do not take our money without asking. It grew into a universal principle: government requires consent.",
        hardEdges: [
          "Clause 12 was dropped from the reissued charters. Later kings did not accept a written limit on their taxing power. The principle survived through reinterpretation, not through the text.",
          "The 'common counsel' was not Parliament. It was the great council of barons and bishops. Representation grew later.",
        ],
        reading: [
          {
            heading: "What the king did",
            body: "King John needed money. He had lost a war in France. He taxed the barons at rates no king had ever tried. He charged them to inherit their own lands. He charged them to marry widows. He sold justice to the highest bidder. The barons said: enough. Before you take our money, ask. That is clause 12: 'No scutage or aid shall be imposed except by the common counsel of our kingdom.' The common counsel was the great council — the assembly of barons and bishops. It was not Parliament. It was not elections. But it was the first time a king agreed in writing that he could not tax without asking.",
          },
        ],
        bigIdea:
          "The king cannot take your money without asking. That simple rule, written at Runnymede, grew into 'no taxation without representation.'",
        tryThis: [
          {
            title: "Write the rule",
            minutes: 16,
            steps: [
              "Write one sentence: 'The government cannot take my money without ___.' Fill in the blank.",
              "Read clause 12. Does it say the same thing? What did it add?",
              "Talk About It: why does asking matter? If the king takes the same amount of money, what difference does it make whether he asked first?",
            ],
          },
        ],
        dinnerQuestion: "If the king has to ask before taxing, who does he ask? And what happens if they say no?",
        transfer: [
          { label: "Thinking", note: "Claim and check: the claim is 'government requires consent.' The check is whether the consent is real or a formality." },
        ],
        ifTheySay: [
          {
            heard: "The king can just raise taxes anyway.",
            reply: "He can — until someone stops him. John did, and the barons occupied London. The charter did not stop the king by itself. It gave the barons a text to point to. 'You agreed to this. It is in writing.' The writing is the weapon. Without it, the barons have no argument, only swords. With it, they have a principle.",
          },
        ],
        integrity: "Do not let the model summarize clause 12 without noting it was dropped from the reissues. The text survived. The clause did not. The principle outlived the text.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'How did Magna Carta influence no taxation without representation?' Then ask: 'What happened to clause 12?' If the model does not know it was dropped, that is a gap. The gap is the lesson.",
          evaluate: [
            "Can they explain what clause 12 said?",
            "Do they know it was dropped from the reissues?",
            "Can they connect it to 'no taxation without representation'?",
          ],
        },
      },
      emerging: {
        title: "Consent: From Common Counsel to No Taxation Without Representation",
        dek: "Clause 12 said the king cannot tax without common counsel. It was dropped from the reissues. The principle survived anyway and crossed the Atlantic.",
        objective:
          "The student can explain how a dropped clause became the foundation of the principle that government requires consent, tracing the chain from Runnymede to the American Revolution.",
        parentBriefing:
          "This sitting traces a counterintuitive story: the clause that most directly established consent (clause 12) was dropped from the reissued charters, yet the principle survived and grew. The student needs to understand that the principle of consent did not survive through the text alone. It survived through reinterpretation — by Parliament in the seventeenth century, by the American founders in the eighteenth. The principle outlived the clause because it was useful to people who needed it. That is the deepest lesson: law survives through use, not through text.",
        hardEdges: [
          "Clause 12 was dropped from the 1216 and later reissues. The principle survived through Coke's reinterpretation, not through the charter's text.",
          "The 'common counsel' was not democratic representation. It was barons and bishops. The expansion to elected representation took centuries.",
        ],
        reading: [
          {
            heading: "The clause that did not survive — but its principle did",
            body: "Clause 12 of the 1215 charter said: 'No scutage or aid shall be imposed in our kingdom except by the common counsel of our kingdom.' This was the first written appearance in English law of the principle that taxation requires consent. But clause 12 was dropped from the reissued charters. Later kings were unwilling to accept a written limitation on their taxing power. The principle survived not through the text but through reinterpretation. In the seventeenth century, Sir Edward Coke cited the charter — including the dropped clause — as evidence that parliamentary consent to taxation was an ancient right. The American founders cited Coke. The chain runs: clause 12 (1215, dropped) → Coke's reinterpretation (1628) → American Revolution (1776) → 'no taxation without representation' (a phrase that does not appear in the charter). The principle outlived the clause because people kept picking it up and using it.",
          },
        ],
        bigIdea:
          "Clause 12 was dropped from the charter. The principle of consent survived through reinterpretation — by Coke, by Parliament, by the American founders. The principle outlived the text because people used it.",
        tryThis: [
          {
            title: "Trace the principle",
            minutes: 30,
            steps: [
              "Read clause 12. Write what it says in plain English.",
              "Find 'no taxation without representation' — where does it come from? (Hint: not from the charter. From the American Revolution, citing Coke, citing the charter.)",
              "Ask: if clause 12 was dropped from the reissues, how did the principle survive? Who kept it alive? What did they use it for?",
              "Reflect: the principle outlived the text because it was useful. Is that how law works — through use, not through permanence?",
            ],
          },
        ],
        dinnerQuestion: "If the clause was dropped but the principle survived, does the text matter? Or does the principle matter more than the text that carried it?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How did Magna Carta influence no taxation without representation?' The model will draw a direct line. The actual chain runs through a dropped clause and Coke's reinterpretation. Ask: 'What did the model skip?'" },
        ],
        ifTheySay: [
          {
            heard: "Magna Carta established no taxation without representation.",
            reply: "It established no taxation without common counsel — which is not the same thing. The common counsel was barons and bishops, not elected representatives. And clause 12 was dropped from the reissues. 'No taxation without representation' is an American slogan that traces its lineage to the charter through Coke's reinterpretation. The principle grew. The text did not survive in its original form. Both things are true: the charter started the chain, and the chain is longer than the charter.",
          },
        ],
        integrity: "Do not let the model draw a straight line from clause 12 to 'no taxation without representation.' The line has a break — the clause was dropped — and a bridge — Coke's reinterpretation. Read the break and the bridge.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Did Magna Carta establish no taxation without representation?' If it says yes, that is simplified. If it says 'no taxation without common counsel, which Coke reinterpreted as consent,' that is honest. The gap between the slogan and the text is the lesson.",
          evaluate: [
            "Can they explain what clause 12 said and what happened to it?",
            "Can they trace the chain through Coke to the American Revolution?",
            "Do they understand that the principle survived through reinterpretation, not through the text?",
          ],
        },
      },
      adult: {
        title: "Consent and the Problem of Enforcement",
        dek: "The principle that government requires consent is ancient. The mechanism for enforcing it is still being argued about. Magna Carta's attempt was dropped. The problem remains.",
        objective:
          "The parent can explain the historical chain from Magna Carta clause 12 to modern consent of the governed, including the ongoing challenge of enforcement and the distinction between consent as a principle and consent as a practice.",
        parentBriefing:
          "This sitting addresses the deepest question about consent: not whether the principle is right, but how it is enforced. Magna Carta clause 12 established the principle. Clause 61 tried to enforce it (the security clause). Both were dropped from the reissues. The principle survived through reinterpretation, but the problem of enforcement remains: what happens when the government taxes without consent? The charter's answer was the barons' army. The modern answer is supposed to be the ballot box. But the question of whether the ballot box is sufficient — whether consent through elections is real consent — is a live political question. The parent should understand that consent is not a settled principle. It is a living argument about how power is limited.",
        hardEdges: [
          "Consent through elections is not the same as consent through direct participation. The American founders knew this, which is why they designed a republic, not a direct democracy.",
          "The security clause (clause 61) was the charter's enforcement mechanism for consent. It was dropped. The modern enforcement mechanism is elections. The question of whether elections are sufficient is ongoing.",
        ],
        reading: [
          {
            heading: "The principle, the mechanism, and the gap",
            body: "Magna Carta established the principle: no taxation without common counsel. It also established a mechanism: clause 61, the security clause, which gave 25 barons the power to seize the king's property if he violated the charter. Both clauses were dropped from the reissues. The principle survived through reinterpretation — Coke, Parliament, the American founders. The mechanism did not survive. The modern answer to 'how is consent enforced' is elections: if the government taxes without consent, the people vote it out. But this answer raises questions: is voting sufficient enforcement? What happens when the system is gamed? What happens when the consent is manufactured? The charter's answer — armed barons — is not available. The modern answer — elections — is imperfect. The gap between the principle and the mechanism is where politics lives. Consent is not a settled question. It is an ongoing argument.",
          },
        ],
        bigIdea:
          "Consent is a principle with a permanent enforcement problem. Magna Carta's enforcement mechanism was dropped. The modern mechanism — elections — is imperfect. The gap between principle and mechanism is where politics lives.",
        tryThis: [
          {
            title: "Compare enforcement mechanisms",
            minutes: 35,
            steps: [
              "Read clause 61 (the security clause). It gave 25 barons the power to seize royal property. This was the enforcement mechanism for the entire charter, including clause 12.",
              "Ask: why was this clause dropped? What does it mean that the charter survived without enforcement?",
              "Find the modern enforcement mechanism for consent: elections, courts, constitutions. How does each work? What happens when they fail?",
              "Reflect: is consent through elections the same as consent through direct participation? The founders designed a republic, not a direct democracy. Why? What were they afraid of?",
            ],
          },
        ],
        dinnerQuestion: "If the charter's enforcement mechanism was dropped and the modern mechanism is elections, what happens when elections are not enough? What is the backup?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How is consent of the governed enforced in modern democracies?' Then ask: 'What did Magna Carta's enforcement mechanism look like, and why was it dropped?' The comparison between 1215 and today is the lesson." },
        ],
        ifTheySay: [
          {
            heard: "We have consent through elections, so the problem is solved.",
            reply: "Elections are a mechanism, not a solution. The charter had a mechanism too — clause 61, the security clause — and it was dropped. The question is not whether you have a mechanism but whether the mechanism works. Elections can be gamed, suppressed, or rendered meaningless by money. Courts can be packed. Constitutions can be ignored. The principle of consent is not a machine that runs itself. It requires people who believe in it and enforce it — at the ballot box, in the courts, and in the streets when the other mechanisms fail. The charter's enforcement was armed barons. Ours is supposed to be institutions. The question is whether institutions are enough. The founders were not sure they were. That is why they designed checks, not trust.",
          },
        ],
        integrity: "Do not let the model present consent as a solved problem. It is a permanent problem with imperfect mechanisms. Read clause 61 and ask: what was the backup when the king ignored the rules? What is our backup?",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'How is the principle of consent enforced in modern government?' Then ask: 'What did the model assume?' The model will assume elections are sufficient. Ask: 'What did Magna Carta assume?' It assumed armed barons. The comparison is the lesson.",
          evaluate: [
            "Can they explain why clause 61 was dropped and what that means?",
            "Do they understand the difference between the principle of consent and the mechanism for enforcing it?",
            "Can they identify the gap between modern mechanisms and the principle they are supposed to enforce?",
          ],
        },
      },
    },
  }),

  // ── 5. The Ugly Gaps: Who Was Left Out ─────────────────────────────
  ...expand({
    slug: "ugly-gaps-who-was-left-out",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 5,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "Who Was Left Out",
        dek: "The charter said 'free men.' Most people in England were not free. The gap between the words and the reality is the history.",
        objective:
          "The student can explain who Magna Carta protected and who it left out, and why the omission matters.",
        parentBriefing:
          "This sitting names the ugly truth: Magna Carta protected 'free men,' which was about 20% of England's population. The other 80% — villeins, serfs, and unfree peasants — were not mentioned. The charter's silence on the unfree is not a footnote. It is the central fact about who the document was for. The student should understand that the barons were not fighting for everyone. They were fighting for their own class. The principle they wrote down — that the king has limits — eventually grew to include everyone. But that growth was not the barons' intention. It was the work of centuries of people who took a charter about barons and made it about people.",
        hardEdges: [
          "Do not soften the omission. The charter said 'free man.' Villeins were not mentioned. The silence is the history.",
          "Do not present the expansion from 'free men' to 'all people' as automatic. It took centuries of reinterpretation and political struggle.",
        ],
        reading: [
          {
            heading: "Who was free",
            body: "In 1215, about 20% of England's people were 'free men' — barons, knights, and free tenants. The other 80% were villeins. Villeins were unfree. They were bound to the land. They paid rent to their lords. They could be punished by manorial courts. They could not leave. The charter protected the 20%. It did not mention the 80%. That is not a mistake. The barons did not consider villeins to be their concern.",
          },
          {
            heading: "Why the omission matters",
            body: "The charter said 'no free man shall be taken or imprisoned except by lawful judgment.' It did not say 'no person.' The gap between 'free man' and 'person' is 800 years of history. It took centuries of struggle — the Peasants' Revolt, the abolition of serfdom, the Civil Rights movement — to make the principle include everyone. The barons started the chain. They did not finish it.",
          },
        ],
        bigIdea:
          "The charter protected about 20% of England. The other 80% were not mentioned. The expansion from 'free men' to 'all people' took 800 years of struggle.",
        tryThis: [
          {
            title: "Name the gap",
            minutes: 18,
            steps: [
              "Read clause 39. Find the word 'free.' Who was not free?",
              "Draw two circles: one for 'free men' (20%) and one for 'everyone else' (80%). The charter protected the first circle. The second circle is the gap.",
              "Talk About It: if the charter did not protect everyone, how did it become a symbol of universal rights? Whose work was that?",
            ],
          },
        ],
        dinnerQuestion: "The charter said 'free men.' Who was left out? And whose work was it to expand 'free men' to 'everyone'?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the charter says 'free man.' The legend says 'everyone.' The gap is the lesson." },
        ],
        ifTheySay: [
          {
            heard: "The charter protected everyone's rights.",
            reply: "It protected about 20% of England. The other 80% — the villeins who worked the land — were not mentioned. The charter became a symbol of universal rights through centuries of reinterpretation, not through its original text. The barons started the principle. Other people — not the barons — made it universal. Do not confuse what the charter was with what it became.",
          },
        ],
        integrity: "Do not let the model say the charter protected everyone. Read clause 39. It says 'free man.' The omission is the history.",
        aiLab: {
          setup: "After reading.",
          childDoes: "Ask the model: 'Did Magna Carta protect everyone?' If it says yes, that is wrong. If it says 'free men only,' that is honest. Then ask: 'How did it become a symbol of universal rights?' The expansion is the story.",
          evaluate: [
            "Can they identify who was protected and who was omitted?",
            "Do they understand that the expansion was not automatic?",
          ],
        },
      },
      emerging: {
        title: "The Omission of the Villeins",
        dek: "Magna Carta said 'free men.' 75-80% of England were villeins — unfree, bound to the land, not mentioned. The omission is not a footnote. It is the history.",
        objective:
          "The student can explain the charter's limitation to 'free men,' the scale of the omission (75-80% of the population), and the scholarly debate about whether the omission was intentional or simply reflexive.",
        parentBriefing:
          "This sitting takes the omission seriously as a historical and ethical question. The student needs to understand three things. First, the scale: villeins made up 75-80% of England's population, and the charter did not mention them. Second, the debate: scholars disagree about whether the omission was intentional (the barons did not want to extend protections to the unfree) or reflexive (the barons simply did not think about villeins as part of their political world). Third, the implication: the principle that 'the king has limits' was established for a minority. The expansion to everyone was the work of later generations — the Peasants' Revolt of 1381, the gradual abolition of serfdom, the Civil Rights movement. The student should see that the charter started a chain that its authors did not intend and could not have imagined.",
        hardEdges: [
          "Do not present the omission as a minor flaw. It is the central fact about who the charter was for.",
          "Do not present the expansion as automatic or inevitable. It required centuries of struggle by people who were not barons.",
          "The scholarly debate (intentional vs reflexive omission) is worth engaging. Both readings are defensible.",
        ],
        reading: [
          {
            heading: "The scale of the omission",
            body: "In 1215, English society was roughly: the crown and royal family (a handful), barons and greater nobility (about 200 families), knights and lesser nobility (5,000-10,000 individuals), free tenants — yeomen, freeholders, burgesses (about 15-20% of the population), and villeins and serfs — unfree, bound to the land (about 75-80% of the population). 'Free men,' the category protected by clause 39, included the barons, knights, and free tenants. It excluded the villeins. The charter's protections reached perhaps 20% of England. The other 80% — the people who worked the land, paid rent to their lords, and could be punished by manorial courts — were outside the charter's scope.",
          },
          {
            heading: "The scholarly debate",
            body: "Was the omission intentional or reflexive? Some scholars argue the barons deliberately excluded villeins because extending protections to the unfree would undermine the feudal system the barons depended on. Others argue the barons simply did not think about villeins as part of their political world — the charter was about the relationship between the king and the baronial class, and villeins were outside that relationship the way furniture is outside a conversation. Both readings are defensible. The intentional reading makes the barons more culpable. The reflexive reading makes the charter more limited — not a document that chose to exclude, but one that never considered inclusion. Either way, the omission is the history. The principle that grew from the charter — that the king has limits — outgrew the charter's original scope. But the outgrowing was not the barons' work. It was the work of people the barons never thought about.",
          },
        ],
        bigIdea:
          "The charter protected 20% of England. The omission of the other 80% was either intentional or reflexive — both readings are defensible. The expansion to universal rights was the work of later generations, not the barons.",
        tryThis: [
          {
            title: "Engage the debate",
            minutes: 30,
            steps: [
              "Read clause 39. Find 'free man.' The word 'villein' does not appear. The silence is the evidence.",
              "Write the two scholarly readings: (1) The barons intentionally excluded villeins to preserve the feudal system. (2) The barons never considered villeins because they were outside the baronial political world. Which is more convincing? What evidence supports each?",
              "Reflect: does the intention matter? If the omission was reflexive rather than intentional, does that make the charter better, worse, or the same? The question is not about the barons' guilt. It is about the charter's scope.",
              "Trace the expansion: who made the principle universal? (Peasants' Revolt 1381, abolition of serfdom, Civil Rights movement.) The barons started the chain. Others finished it.",
            ],
          },
        ],
        dinnerQuestion: "If the omission was reflexive — if the barons never thought about villeins — does that make the charter less valuable, or does it make the expansion more remarkable?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the charter says 'free man.' The legend says 'everyone.' The gap between them is 800 years of reinterpretation." },
          { label: "AI", note: "Ask the model: 'Did Magna Carta protect villeins?' If it says yes, it is wrong. If it says 'the charter was silent on villeins,' it is honest. The silence is the lesson." },
        ],
        ifTheySay: [
          {
            heard: "The barons excluded villeins on purpose.",
            reply: "Maybe. Some scholars think so — that extending protections to the unfree would undermine the feudal system the barons depended on. Others think the barons never considered villeins because villeins were outside the baronial political world. The intentional reading makes the barons more culpable. The reflexive reading makes the charter more limited. Both are defensible. The question that matters more than intention is scope: the charter protected 20% of England. The expansion to everyone was not the barons' work. It was the work of people the barons never thought about — the villeins who revolted in 1381, the reformers who abolished serfdom, the activists who fought for civil rights. The barons planted the seed. Others grew the tree. The tree is bigger than the seed, and the people who grew it are not the people who planted it.",
          },
        ],
        integrity: "Do not let the model smooth the omission. Read clause 39. The word is 'free man.' The villeins are not mentioned. The silence is the history.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'What did Magna Carta say about villeins?' If it says 'the charter protected everyone,' it is wrong. If it says 'the charter was silent on villeins,' it is honest. Then ask: 'How did the principle expand from free men to all people?' The expansion is the story the model will compress.",
          evaluate: [
            "Can they explain the scale of the omission (75-80% of the population)?",
            "Can they engage the scholarly debate (intentional vs reflexive)?",
            "Can they trace the expansion through at least one historical struggle?",
          ],
        },
      },
      adult: {
        title: "The Omission and the Chain of Expansion",
        dek: "The charter said 'free men.' The expansion from 'free men' to 'all persons' is the story of how a class privilege became a universal right through centuries of struggle by people the barons never considered.",
        objective:
          "The parent can explain the charter's limitation to 'free men,' the scholarly debate about the omission, and the historical chain of expansion from baronial privilege to universal right — including the people and movements that did the work the barons did not intend.",
        parentBriefing:
          "This sitting is for the parent who wants to teach the hardest truth about Magna Carta: the document was not for everyone, and the expansion to everyone was not inevitable. It required struggle. The parent should understand that the charter's limitation to 'free men' is not a minor flaw to be acknowledged and moved past. It is the central fact about the document's historical context. The barons were protecting their class. The principle they wrote down — that the king has limits — was bigger than their intention, but it did not expand on its own. It expanded because people who were not barons — villeins, peasants, reformers, activists — picked up the principle and demanded that it include them. The expansion is the story. The charter is the seed. The people who made it universal are the tree.",
        hardEdges: [
          "Do not present the expansion as inevitable or automatic. It was contested at every step. The Peasants' Revolt was crushed. Serfdom took centuries to abolish. The Civil Rights movement faced violence.",
          "Do not let the omission become an excuse to dismiss the charter. The charter started the chain. The chain is real. Both things are true: the charter was limited, and the principle it established grew beyond its limits.",
        ],
        reading: [
          {
            heading: "The omission and the expansion",
            body: "Magna Carta protected 'free men' — about 20% of England. The villeins who made up the other 80% were not mentioned. This omission is either intentional (the barons excluded the unfree to preserve the feudal system) or reflexive (the barons never considered the unfree as part of their political world). Either way, the charter was a class document. The principle it established — that the king's power has written limits — was not universal in its original form. It became universal through a chain of expansion that the barons did not start and could not have imagined. The Peasants' Revolt of 1381 was the first mass demand that the charter's protections extend to the unfree. The revolt failed, but the demand survived. The gradual abolition of serfdom, the expansion of the franchise, the Civil Rights movement — each was an act of expansion, a moment when people who were outside the charter's original scope insisted that the principle include them. The charter planted the seed. The expansion was the work of people the charter never mentioned.",
          },
        ],
        bigIdea:
          "The charter was a class document that became a universal principle. The expansion was not inevitable. It was the work of people the barons never considered — and it is the most important part of the story.",
        tryThis: [
          {
            title: "Trace the expansion",
            minutes: 40,
            steps: [
              "Read clause 39. Find 'free man.' The villeins are not mentioned.",
              "Trace at least three moments of expansion: the Peasants' Revolt (1381), the abolition of serfdom (14th-16th centuries), the Civil Rights movement (1950s-60s). At each moment, someone demanded that the principle include them. Who? What did they risk?",
              "Reflect: the barons planted the seed. The people who expanded the principle were not barons. They were the people the charter omitted. The tree is bigger than the seed, and the people who grew it are not the people who planted it. That is the story.",
            ],
          },
        ],
        dinnerQuestion: "The barons planted the seed. Who grew the tree? And what does it tell us that the people who expanded the principle were the people the charter left out?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How did Magna Carta's protections expand from free men to all people?' The model will give a summary. Then ask: 'What did you skip?' The model will skip the struggle. The struggle is the story." },
          { label: "Philosophy", note: "The Church Fathers on the scope of the moral community: Irenaeus said creation is good for everyone, not just the spiritual elite. The charter said rights are for free men. The expansion from one to all is the same movement, in different language." },
        ],
        ifTheySay: [
          {
            heard: "The charter was just for the rich, so it doesn't matter.",
            reply: "It was for the rich. And it matters. Both things are true. The barons were protecting their own class interests. The principle they wrote down — that the king has written limits — was bigger than their intention. The expansion from 'free men' to 'all persons' was the work of people the barons never considered: villeins, peasants, reformers, activists. If you dismiss the charter because it was limited, you dismiss the seed that the expansion grew from. If you celebrate the charter without naming the omission, you erase the people who did the work the barons did not intend. Both errors flatten the history. The honest reading is: the charter was limited, the principle was bigger than the charter, and the expansion was the work of people who were not barons.",
          },
        ],
        integrity: "Do not let the model smooth the omission or the expansion. The charter said 'free man.' The expansion took centuries of struggle. Both are the history. Neither alone is.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the expansion of Magna Carta's protections in three sentences.' Then ask: 'What did you skip?' The model will skip the Peasants' Revolt, the abolition of serfdom, the Civil Rights movement. The people the model skips are the people who did the work.",
          evaluate: [
            "Can they explain the scale of the omission?",
            "Can they trace at least three moments of expansion?",
            "Do they understand that the expansion was not the barons' work?",
            "Can they hold both truths: the charter was limited, and the principle grew beyond its limits?",
          ],
        },
      },
    },
  }),

  // ── 6. The Chain: From Runnymede to Your Rights ────────────────────
  ...expand({
    slug: "chain-from-runnymede",
    subject: "history",
    unit: "Magna Carta — The Charter and the Chain",
    number: 6,
    bands: ["young", "emerging", "adult"],
    variants: {
      young: {
        title: "The Chain to Your Rights",
        dek: "From a field in 1215 to your rights today. The chain has many links. Each one was a person who picked up the text and used it.",
        objective:
          "The student can trace at least three links in the chain from Magna Carta to a modern right.",
        parentBriefing:
          "This sitting is the capstone of the Magna Carta unit. It connects the charter to the student's own rights: due process, consent, the rule of law. The chain runs from Runnymede (1215) through Coke's reinterpretation (1628) to the American founders (1791) to the Civil Rights movement (1960s) to today. Each link is a person or group who picked up the text and used it for a purpose its authors never intended. The student should understand that rights are not given once and kept forever. They are claimed, expanded, and defended in every generation.",
        hardEdges: [
          "Do not present the chain as smooth or inevitable. Each link was contested. The charter was annulled. The Civil Rights movement faced violence.",
          "The chain is not finished. The question of who is included — and who is still fighting for inclusion — is ongoing.",
        ],
        reading: [
          {
            heading: "The chain",
            body: "Link 1: Runnymede, 1215. The barons made the king write down that his power has limits. Link 2: Reissue, 1216-1297. The charter was reissued and confirmed, dropping some clauses and keeping others. Link 3: Coke, 1628. Sir Edward Coke reinterpreted the charter as the foundation of trial by jury, habeas corpus, and parliamentary consent. Link 4: American founders, 1791. The Fifth Amendment translated 'law of the land' into 'due process of law.' Link 5: Civil Rights, 1960s. The movement demanded that due process apply to everyone, not just in theory. Each link is a person who picked up the text and used it. The chain is the story of how a feudal contract became your rights.",
          },
        ],
        bigIdea:
          "Your rights did not come from one document. They came from a chain of people who picked up the text and used it. The chain is still being built.",
        tryThis: [
          {
            title: "Draw the chain",
            minutes: 20,
            steps: [
              "Draw five links: Runnymede (1215), Reissue (1216-1297), Coke (1628), Founders (1791), Civil Rights (1960s). Label each link with what it added.",
              "Write one right you have today that traces back through this chain. (Hint: due process, the right to a trial, the right to vote.)",
              "Talk About It: who is the next link? What right still needs to be expanded or defended?",
            ],
          },
        ],
        dinnerQuestion: "Your rights came from a chain of people who picked up an 800-year-old text and used it. Who picks it up next?",
        transfer: [
          { label: "AI", note: "Ask the model: 'How does Magna Carta affect my rights today?' Then ask: 'What link did you skip?' The chain has more links than any summary can hold." },
        ],
        ifTheySay: [
          {
            heard: "That was 800 years ago. It doesn't matter now.",
            reply: "It matters because the chain is still being built. The charter started the principle. The expansion to everyone is ongoing. The Fifteenth Amendment said the right to vote cannot be denied on account of race (1870). The Voting Rights Act enforced it (1965). The fight continues. The chain is not finished. The question is not whether an 800-year-old document matters. The question is whether you are the next link.",
          },
        ],
        integrity: "Do not let the model collapse the chain into 'Magna Carta gave us our rights.' The chain has links. Each link is work. Read the links.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize how Magna Carta affects my rights in one sentence.' Then ask: 'What did you skip?' The one-sentence version skips the chain. The chain is the story.",
          evaluate: [
            "Can they trace at least three links?",
            "Can they name a right they have that traces back through the chain?",
            "Do they understand that the chain is ongoing?",
          ],
        },
      },
      emerging: {
        title: "The Chain: How a Feudal Contract Became Your Rights",
        dek: "The chain from Runnymede to the Fifth Amendment to the Civil Rights movement is not a straight line. It is a history of people picking up a text and using it for purposes its authors never intended.",
        objective:
          "The student can trace the chain from Magna Carta to modern constitutional rights, identifying at least four links and explaining how each link was an act of interpretation that transformed the text.",
        parentBriefing:
          "This is the capstone sitting. The student should leave the Magna Carta unit understanding that rights are not self-enforcing texts. They are practices — acts of interpretation, expansion, and defense that happen in every generation. The chain from Runnymede to today is the story of how a feudal contract about baronial privileges became the foundation of universal rights. Each link in the chain is a person or movement that picked up the text and used it for something bigger than its authors intended. The student should be able to trace the chain, name the links, and identify where the chain is still being built.",
        hardEdges: [
          "Do not present the chain as inevitable. Each link was contested. The charter was annulled. The Civil Rights movement faced violence. The chain was built through struggle, not through automatic progress.",
          "Do not present the chain as finished. The question of who is included — and who is still fighting for inclusion — is ongoing.",
        ],
        reading: [
          {
            heading: "The chain of interpretation",
            body: "Link 1: Runnymede, 1215. The barons made John seal a charter that said the king has limits. The charter protected 'free men' — about 20% of England. Link 2: Reissue, 1216-1297. The charter was reissued three times and confirmed by Edward I. Each reissue dropped some clauses and kept others. The 1225 version, not the 1215 original, became the authoritative text. Link 3: Coke, 1628. Sir Edward Coke reinterpreted the charter as the foundation of trial by jury, habeas corpus, and parliamentary consent. He translated 'law of the land' as 'due process of law' — a phrase that appears nowhere in the original. Link 4: American founders, 1791. The Fifth Amendment says 'due process of law.' The founders read Coke, not the charter. They inherited Coke's interpretation as if it were the original. Link 5: Civil Rights movement, 1950s-1960s. The Fourteenth Amendment (1868) extended due process to the states, but it took the Civil Rights movement to make it real. The chain from clause 39 to universal due process is not a straight line. It is a history of struggle, interpretation, and expansion. And it is not finished.",
          },
        ],
        bigIdea:
          "Rights are not self-enforcing texts. They are practices — acts of interpretation, expansion, and defense. The chain from Runnymede to your rights was built by people who picked up a text and used it. The chain is still being built.",
        tryThis: [
          {
            title: "Trace the chain",
            minutes: 35,
            steps: [
              "Write the five links: Runnymede (1215), Reissue (1216-1297), Coke (1628), Founders (1791), Civil Rights (1960s). For each, write one sentence: what did this link add or change?",
              "Find one right you have today that traces through this chain. Write the chain from the charter to your right.",
              "Reflect: the chain was built through interpretation, not through the text alone. What does that tell you about how law works? Is law a text, or is law a practice?",
              "Ask: where is the chain still being built? What right is still being expanded or contested? Who is doing the work?",
            ],
          },
        ],
        dinnerQuestion: "If rights are practices — acts of interpretation and defense — then whose responsibility is it to keep them alive? What happens when no one picks up the text?",
        transfer: [
          { label: "Thinking", note: "Source before summary: the charter is the source. Coke is the interpretation. The Fifth Amendment is the interpretation of the interpretation. The Civil Rights movement is the enforcement. Each is a different kind of work." },
          { label: "AI", note: "Ask the model: 'How did Magna Carta become modern constitutional rights?' Then ask: 'What links did you skip?' The model will compress the chain. The compression erases the work." },
          { label: "Philosophy", note: "The Church Fathers on limited authority and the scope of the moral community: Ambrose told an emperor he was in the church, not over it. Magna Carta told a king the same thing in writing. The principle is the same. The language changed because the institution changed." },
        ],
        ifTheySay: [
          {
            heard: "Magna Carta gave us our rights.",
            reply: "It started the chain. It did not give us our rights. The rights were built by people who picked up the text and used it: Coke, who reinterpreted 'law of the land' as 'due process of law.' The founders, who wrote Coke's interpretation into the Fifth Amendment. The Civil Rights movement, which demanded that due process apply to everyone. The barons planted the seed. The people who expanded the principle were not barons. They were the people the charter omitted, the lawyers who reinterpreted it, and the activists who enforced it. The chain is the story. The charter is the first link, not the whole chain.",
          },
          {
            heard: "It's just an old document. It doesn't affect me.",
            reply: "It affects you through the chain. The Fifth Amendment — your right to due process — traces directly to clause 39 through Coke. The principle that the government cannot take your freedom without legal process is 800 years old. The fight to make it real is ongoing. If you think it does not affect you, ask what happens if it disappears. The chain is only as strong as the people who pick it up. If no one picks it up, the text is just old words. If people pick it up, it is law. The question is whether you are part of the chain or not.",
          },
        ],
        integrity: "Do not cite the model's summary of the chain. The model will compress eight centuries into a paragraph. The compression erases the work — the interpretation, the struggle, the expansion. Read the links. The chain is the story. The story is the work.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize the chain from Magna Carta to modern rights in one paragraph.' Then ask: 'What did you compress?' The compression is the lesson. The model will skip the struggle. The struggle is the story.",
          evaluate: [
            "Can they trace at least four links in the chain?",
            "Can they explain how each link was an act of interpretation?",
            "Do they understand that rights are practices, not just texts?",
            "Can they identify where the chain is still being built?",
          ],
        },
      },
      adult: {
        title: "The Chain, the Practice, and the Next Link",
        dek: "The chain from Runnymede to modern rights is the story of how a text becomes a practice. The practice requires people. The question for every generation is whether to pick up the text — and what to do with it.",
        objective:
          "The parent can trace the full chain from Magna Carta to modern constitutional rights, explain how each link was an act of interpretation, and identify the ongoing question of where the chain is still being built.",
        parentBriefing:
          "This is the capstone. The parent should leave the Magna Carta unit with three things. First, the chain: from Runnymede through Coke through the founders through the Civil Rights movement to today. Second, the principle: rights are not self-enforcing texts. They are practices — acts of interpretation, expansion, and defense. Third, the question: where is the chain still being built? What right is still being expanded? Who is doing the work? The parent who teaches this sitting is teaching the deepest lesson of the charter: law is not a text. It is a practice. The text is necessary but not sufficient. The practice is what makes the text mean something. And the practice requires people — in every generation — who pick up the text and use it.",
        hardEdges: [
          "Do not present the chain as finished or the practice as secure. The chain is ongoing. The practice is contested. The text alone does not protect anyone.",
          "Do not let the capstone become a celebration. The chain was built through struggle, not through progress. The charter was annulled. The Civil Rights movement faced violence. The chain is not a story of smooth advancement. It is a story of people fighting to make a text mean what it says.",
        ],
        reading: [
          {
            heading: "The chain, the practice, and the next link",
            body: "The chain from Runnymede to your rights has five links. Runnymede (1215): the barons made the king write down that his power has limits. Reissue (1216-1297): the charter was reissued and confirmed, surviving through political utility, not through compliance. Coke (1628): Sir Edward Coke reinterpreted the charter as the foundation of English liberties, translating 'law of the land' into 'due process of law' — a phrase the charter never used. The founders (1791): the Fifth Amendment inherited Coke's interpretation, not the charter's original text. The Civil Rights movement (1950s-1960s): the Fourteenth Amendment's promise of equal protection was made real through struggle, not through text. Each link is an act of interpretation. Each act was contested. The chain was built through struggle, not through automatic progress. The question is not whether the chain exists. It is whether the chain is being extended — whether the people who are still fighting for inclusion are the next link, or whether the chain stops here. The text is 800 years old. The practice is ongoing. The next link is the question this sitting leaves with the reader.",
          },
        ],
        bigIdea:
          "The chain from Runnymede to your rights was built through interpretation and struggle. The text is 800 years old. The practice is ongoing. The next link is the question every generation must answer.",
        tryThis: [
          {
            title: "The next link",
            minutes: 40,
            steps: [
              "Write the five links. For each, write one sentence: what did this link add, and who did the work?",
              "Find one right that is still being expanded or contested today. Trace it back through the chain as far as you can.",
              "Reflect: the text is 800 years old. The practice is ongoing. Who is doing the work today? Are you part of the chain, or are you assuming the chain will hold without you?",
              "Ask: what happens when no one picks up the text? The charter survived because people kept picking it up. What happens to a right when the people who hold it stop using it?",
            ],
          },
        ],
        dinnerQuestion: "The chain from Runnymede to your rights was built by people who picked up a text and used it. Who is the next link? And what happens if no one picks it up?",
        transfer: [
          { label: "AI", note: "Ask the model: 'Is Magna Carta still relevant today?' Then ask: 'What did your answer assume?' The model will assume the chain is self-sustaining. The chain requires people. That is the lesson." },
          { label: "Philosophy", note: "The Church Fathers on the scope of authority and the moral community: Ambrose told an emperor he was in the church, not over it. Irenaeus said creation is good for everyone. Magna Carta said the king has limits. Each is a link in a different chain — the chain of who counts, who is included, and who holds power to account." },
        ],
        ifTheySay: [
          {
            heard: "We have the Constitution. We don't need Magna Carta.",
            reply: "The Constitution is a link in the chain, not a replacement for it. The Fifth Amendment says 'due process of law.' That phrase is Coke's translation of Magna Carta's 'law of the land.' The founders read Coke, not the charter, and they inherited his interpretation as if it were the original. The Constitution does not replace the chain. It is a link in it. The question is not whether you need the charter. The question is whether you understand the chain — whether you know that your rights were built through interpretation and struggle, not handed down from a single text. If you think the Constitution is self-sufficient, you have forgotten the chain. And forgetting the chain is how the chain breaks.",
          },
        ],
        integrity: "Do not let the model collapse the chain into a celebration of progress. The chain was built through annulment, civil war, reinterpretation, and struggle. Read the links. The struggle is the story. The celebration is the summary. The summary is not the story.",
        aiLab: {
          setup: "After the try-this.",
          childDoes: "Ask the model: 'Summarize Magna Carta's legacy in three sentences.' Then ask: 'What did you celebrate, and what did you skip?' The model will celebrate the principle and skip the struggle. The struggle is the legacy. The celebration is the summary of the struggle, not the struggle itself.",
          evaluate: [
            "Can they trace the full chain with five links?",
            "Can they explain how each link was an act of interpretation?",
            "Do they understand that rights are practices, not texts?",
            "Can they identify where the chain is still being built — and who is doing the work?",
          ],
        },
      },
    },
  }),
];

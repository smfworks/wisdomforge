/**
 * Book data — full-length WisdomForge books published on the academy site.
 *
 * Books are distinct from sittings (lessons) and booklets (single-figure PDFs).
 * A book is a multi-chapter manuscript that gathers multiple figures around
 * thematic questions. Books deep-link to the academy lessons and booklet
 * downloads for the figures they cover.
 */

export type BookChapter = {
  /** Chapter number (0 = introduction, 1-5 = main chapters, 6 = epilogue) */
  number: number;
  /** Display label, e.g. "Introduction", "Chapter 1" */
  label: string;
  /** Chapter title */
  title: string;
  /** The thematic question the chapter explores */
  question: string;
  /** Figures whose voices appear in this chapter (slugs matching booklet slugs) */
  voices: string[];
  /** Word count target from the outline */
  wordTarget: string;
  /** Draft status */
  status: "drafting" | "outlined" | "complete";
};

export type BookFigure = {
  /** Figure slug matching booklet filenames in public/downloads/ */
  slug: string;
  /** Display name */
  name: string;
  /** Approximate dates */
  dates: string;
  /** Theological tradition */
  tradition: string;
  /** The core question this Father asks */
  coreQuestion: string;
  /** One-line distinctive voice description */
  distinctiveVoice: string;
};

export type Book = {
  /** URL slug for /books/[slug] */
  slug: string;
  /** Display title */
  title: string;
  /** Subtitle */
  subtitle: string;
  /** One-paragraph summary for the landing page */
  summary: string;
  /** The editorial principle */
  editorialPrinciple: string;
  /** The chronological range the book covers */
  chronology: string;
  /** Total word target */
  totalWordTarget: string;
  /** Estimated reading time */
  readingTime: string;
  /** Figures covered (with booklet cross-references) */
  figures: BookFigure[];
  /** Ordered chapters */
  chapters: BookChapter[];
  /** Authors */
  authors: string[];
  /** Production status */
  status: "in-production" | "published";
  /** Whether an audiobook is planned */
  audiobookPlanned: boolean;
  /** Cover illustration. Set when the file lands in public/. */
  coverImage?: string;
  /** Full-book PDF. Set when the file lands in public/downloads/. */
  pdfHref?: string;
  /** Full-book EPUB. Set when the file lands in public/downloads/. */
  epubHref?: string;
  /** Academy unit title to deep-link sittings (exact `lesson.unit`). */
  academyUnit?: string;
  /** Academy subject for those sittings. */
  academySubject?: "philosophy" | "history" | "ai" | "thinking" | "english";
  /** Subject hub for the footer. */
  hubHref?: string;
  /** Hub button label. */
  hubLabel?: string;
  /** Sitting-section heading. */
  sittingsHeading?: string;
  /** Sitting-section dek. */
  sittingsDek?: string;
  /** Show per-figure booklet chips. Default true for Church Fathers. */
  showBooklets?: boolean;
};

/**
 * Production drop targets (Airia):
 *   cover → public/images/books/church-fathers-cover.png
 *   PDF   → public/downloads/church-fathers.pdf
 *   EPUB  → public/downloads/church-fathers.epub
 * Then set coverImage / pdfHref / epubHref below and flip status to "published".
 */
export const churchFathersBook: Book = {
  slug: "church-fathers",
  title: "The Church Fathers",
  subtitle: "A WisdomForge Reader",
  summary:
    "The Church Fathers did not agree with each other. They argued — about creation, salvation, authority, Scripture, and what it means to live well — and the arguments are still alive. This book is not a summary of what they believed. It is a reconstruction of the conversations they had, the questions they could not settle, and the answers that shaped Western civilization for 1,600 years.",
  editorialPrinciple:
    "Show disagreements, not just sequence — living conversation. The Fathers are presented as a living conversation, not a chronological march. Each thematic chapter gathers the relevant voices around a single question and lets them disagree. The reader is the jury.",
  chronology: "130–1416 CE",
  totalWordTarget: "~60,000 words",
  readingTime: "~6 hours",
  authors: ["Harry (research, outline)", "William (prose)", "Airia (production)"],
  status: "in-production",
  audiobookPlanned: true,
  academyUnit: "Faith & Reason",
  academySubject: "philosophy",
  hubHref: "/subjects/philosophy",
  hubLabel: "Philosophy subject hub",
  sittingsHeading: "Study these Fathers in the academy",
  sittingsDek:
    "The Faith & Reason unit is the shorter entry: parent briefing, reading, Try This, and AI lab. The book is the longer argument.",
  showBooklets: true,
  figures: [
    {
      slug: "irenaeus",
      name: "Irenaeus of Lyons",
      dates: "c. 130–202",
      tradition: "Apostolic, anti-Gnostic",
      coreQuestion: "What is the story?",
      distinctiveVoice: "The shepherd who guards the public faith",
    },
    {
      slug: "athanasius",
      name: "Athanasius of Alexandria",
      dates: "c. 296–373",
      tradition: "Nicene, anti-Arian",
      coreQuestion: "Who is Christ?",
      distinctiveVoice: "The fighter who would not yield on the incarnation",
    },
    {
      slug: "basil-great",
      name: "Basil the Great",
      dates: "c. 330–379",
      tradition: "Cappadocian, Trinitarian, monastic",
      coreQuestion: "How is the Spirit God?",
      distinctiveVoice: "The organizer who built communities and defended the Trinity",
    },
    {
      slug: "gregory-nazianzus",
      name: "Gregory of Nazianzus",
      dates: "c. 329–390",
      tradition: "Cappadocian, theological, poetic",
      coreQuestion: "How can we speak of God?",
      distinctiveVoice: "The reluctant bishop who named the Trinity and walked away",
    },
    {
      slug: "ambrose",
      name: "Ambrose of Milan",
      dates: "c. 340–397",
      tradition: "Latin, pastoral-political",
      coreQuestion: "What does the church say to power?",
      distinctiveVoice: "The governor-turned-bishop who stood down an emperor",
    },
    {
      slug: "chrysostom",
      name: "John Chrysostom",
      dates: "c. 347–407",
      tradition: "Greek, preaching, social ethics",
      coreQuestion: "What does the gospel demand of the rich?",
      distinctiveVoice: "The golden mouth that cost him everything",
    },
    {
      slug: "jerome",
      name: "Jerome",
      dates: "c. 347–420",
      tradition: "Latin, biblical scholarship",
      coreQuestion: "What does the text actually say?",
      distinctiveVoice: "The scholar who learned Hebrew and bruised everyone",
    },
    {
      slug: "augustine",
      name: "Augustine of Hippo",
      dates: "354–430",
      tradition: "Latin, systematic, psychological",
      coreQuestion: "Can we save ourselves?",
      distinctiveVoice: "The restless heart that surrendered to grace",
    },
    {
      slug: "gregory-great",
      name: "Gregory the Great",
      dates: "c. 540–604",
      tradition: "Latin, pastoral, monastic",
      coreQuestion: "How do you lead without losing your soul?",
      distinctiveVoice: "The reluctant pope who turned authority into service",
    },
    {
      slug: "thomas-aquinas",
      name: "Thomas Aquinas",
      dates: "1225–1274",
      tradition: "Scholastic, systematic",
      coreQuestion: "Can faith and reason coexist?",
      distinctiveVoice: "The quiet genius who built the cathedral of the mind",
    },
    {
      slug: "julian-norwich",
      name: "Julian of Norwich",
      dates: "c. 1342–c. 1416",
      tradition: "English, mystical, affective",
      coreQuestion: "Can love finally fail?",
      distinctiveVoice: "The anchorite who saw God as mother and refused despair",
    },
  ],
  chapters: [
    {
      number: 0,
      label: "Introduction",
      title: "The Conversation That Never Ended",
      question: "What does it mean to inherit 1,600 years of unresolved argument?",
      voices: ["irenaeus", "augustine", "athanasius", "julian-norwich"],
      wordTarget: "3,000–4,000",
      status: "complete",
    },
    {
      number: 1,
      label: "Chapter 1",
      title: "Creation and the Fall — Is the World Broken or Becoming?",
      question: "Is the material world good by design, corrupted by a catastrophic fall, or something else entirely?",
      voices: ["irenaeus", "augustine", "julian-norwich", "athanasius"],
      wordTarget: "8,000–10,000",
      status: "complete",
    },
    {
      number: 2,
      label: "Chapter 2",
      title: "Christ and Salvation — How Does God Save?",
      question: "Who is Christ, and what does the incarnation actually accomplish? Is salvation a transaction, a transformation, a victory, or a restoration?",
      voices: ["athanasius", "irenaeus", "augustine", "basil-great", "gregory-nazianzus", "julian-norwich", "thomas-aquinas"],
      wordTarget: "10,000–12,000",
      status: "drafting",
    },
    {
      number: 3,
      label: "Chapter 3",
      title: "Church and Authority — What Does the Community Owe Power?",
      question: "What is the church's relationship to political power — submission, resistance, transformation, or something else?",
      voices: ["ambrose", "augustine", "gregory-great", "chrysostom"],
      wordTarget: "8,000–10,000",
      status: "outlined",
    },
    {
      number: 4,
      label: "Chapter 4",
      title: "Scripture and Interpretation — How Do You Read the Word?",
      question: "How do you read a sacred text faithfully — literally, allegorically, critically, or all at once?",
      voices: ["jerome", "augustine", "irenaeus", "gregory-nazianzus", "thomas-aquinas"],
      wordTarget: "8,000–10,000",
      status: "outlined",
    },
    {
      number: 5,
      label: "Chapter 5",
      title: "Virtue and Practice — How Do You Live?",
      question: "What does it mean to live well — asceticism, engagement, humility, or love?",
      voices: ["chrysostom", "augustine", "thomas-aquinas", "gregory-great", "julian-norwich"],
      wordTarget: "8,000–10,000",
      status: "outlined",
    },
    {
      number: 6,
      label: "Epilogue",
      title: "The Conversation Continues",
      question: "What has the reader seen, and what remains open?",
      voices: ["irenaeus", "augustine", "julian-norwich", "athanasius"],
      wordTarget: "2,000–3,000",
      status: "outlined",
    },
  ],
};

export const federalistPapersBook: Book = {
  slug: "federalist-papers",
  title: "Publius",
  subtitle: "How a New York Newspaper War Became America's Civic Scripture",
  summary:
    "The Federalist is not the Constitution. It is eighty-five newspaper essays written in New York, 1787–88, under a Roman mask, to win a ratification vote. This book is the campaign, the three men behind Publius, the designed opponent in Brutus, the arguments that later classrooms flattened, and the Anti-Federalist amendments that still sit on the machine they failed to stop.",
  editorialPrinciple:
    "The essays are a brief, not a statute. Publius is not one mind. If the essay and the clause disagree, the clause wins. Anti-Federalists lost the vote and wrote the first ten amendments. The reader is the jury.",
  chronology: "1787–1788",
  totalWordTarget: "~133,000 words",
  readingTime: "~9 hours · 283 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/federalist-papers-cover.png",
  pdfHref: "/downloads/federalist-papers.pdf",
  epubHref: "/downloads/federalist-papers.epub",
  academyUnit: "The Federalist — The Brief That Sold the Machine",
  academySubject: "history",
  hubHref: "/subjects/history",
  hubLabel: "History subject hub",
  sittingsHeading: "Study the brief in the academy",
  sittingsDek:
    "Six sittings, three bands: Publius, faction, ambition, judgment without sword, the lost argument for a bill of rights, and the civic chain. Shorter than the book. Same rule: read the essay, not the summary.",
  showBooklets: false,
  figures: [
    {
      slug: "hamilton",
      name: "Alexander Hamilton",
      dates: "1755/57–1804",
      tradition: "Federalist · energy, courts, the close",
      coreQuestion: "Can a large republic have energy without becoming a throne?",
      distinctiveVoice: "The outsider who wrote the bulk of the series and later became the man the other two opposed",
    },
    {
      slug: "madison",
      name: "James Madison",
      dates: "1751–1836",
      tradition: "Federalist · faction, compound republic, ambition",
      coreQuestion: "How does a republic survive factions without crushing liberty?",
      distinctiveVoice: "The workshop mind behind 10, 39, and 51 — then the man who wrote the list Hamilton did not want",
    },
    {
      slug: "jay",
      name: "John Jay",
      dates: "1745–1829",
      tradition: "Federalist · union, five essays",
      coreQuestion: "Why is union the alternative to rival confederacies?",
      distinctiveVoice: "Five numbers, then illness. The mask still carried his name.",
    },
    {
      slug: "brutus",
      name: "Brutus",
      dates: "1787–88",
      tradition: "Anti-Federalist · size, courts, a bill of rights",
      coreQuestion: "Can a republic this large remain a republic?",
      distinctiveVoice: "The designed opponent. Lost the vote. Won Amendments 1–10.",
    },
  ],
  chapters: [
    {
      number: 0,
      label: "Prologue",
      title: "Several Hundred Remaining",
      question: "What is still unread when the civics-test version is finished?",
      voices: ["publius"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 1,
      label: "Chapter 1",
      title: "Campaign Literature, Civic Scripture",
      question: "How did a New York newspaper war become the commentary later generations treated as official meaning?",
      voices: ["hamilton", "madison", "jay"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 2,
      label: "Chapter 2",
      title: "The Impending Storm",
      question: "What was actually broken in the Articles — and why New York was the vote that could crack the union?",
      voices: ["hamilton", "madison", "jay"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 3,
      label: "Chapter 3",
      title: "Counter-Battery",
      question: "Who wrote against the Constitution in the same papers, and why Brutus is the opponent the series is designed around?",
      voices: ["brutus", "hamilton"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 4,
      label: "Chapter 4",
      title: "Three Temperaments, One Name",
      question: "What happens when you take the mask off — three men, one pen name, a split already coming?",
      voices: ["hamilton", "madison", "jay"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 5,
      label: "Chapter 5",
      title: "Eighty-Five Numbers",
      question: "What is the sequence a book must not skip — union, faction, compound republic, ambition, energy, courts, the losing brief?",
      voices: ["madison", "hamilton", "jay"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 6,
      label: "Chapter 6",
      title: "Thirty to Twenty-Seven",
      question: "How close was New York, and what did a thirty-to-twenty-seven vote actually decide?",
      voices: ["hamilton", "brutus"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 7,
      label: "Chapter 7",
      title: "Merit the Notice of Posterity",
      question: "What did they think they were leaving — and what did later Americans need a commentary for?",
      voices: ["hamilton", "madison"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 8,
      label: "Chapter 8",
      title: "The Most Sacred Text",
      question: "When did advocacy become scripture, and what is lost when courts quote a brief as if it were enacted?",
      voices: ["hamilton", "madison"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 9,
      label: "Chapter 9",
      title: "What Publius Would Not Say",
      question: "Where is the silence — slavery, the three-fifths clause, the people not in the room?",
      voices: ["hamilton", "madison", "brutus"],
      wordTarget: "complete",
      status: "complete",
    },
    {
      number: 10,
      label: "Coda",
      title: "Great Respect, Reserved Judgment",
      question: "What does it mean to read the essays with respect and still refuse to worship them?",
      voices: ["publius", "brutus"],
      wordTarget: "complete",
      status: "complete",
    },
  ],
};

export const autonomousAiEducationBook: Book = {
  slug: "autonomous-ai-and-education",
  title: "Autonomous AI and Education",
  subtitle: "The Collision, Not the Tour",
  summary:
    "Performance is not learning. This book is eight corrections and a design problem: which cognitive work must stay inside the student when a fluent model is in the room. Chat, tutor, adaptive system, and agent are not the same job. A tool lawful at 17 can be illegal and developmentally wrong at 8. The reader is the jury — not the vendor.",
  editorialPrinciple:
    "Name the popular story so it can be taken apart. Hint ladders help; answer-giving harms. Managed struggle, not rescue and not abandonment. Red lines map to instruments, not vibes. Student-owned Hermes is a home tutor, not a school requirement.",
  chronology: "2024–2026",
  totalWordTarget: "~132,000 words",
  readingTime: "~9 hours · 257 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/autonomous-ai-and-education-cover.png",
  pdfHref: "/downloads/autonomous-ai-and-education.pdf",
  epubHref: "/downloads/autonomous-ai-and-education.epub",
  academyUnit: "Education in the Age of AI",
  academySubject: "ai",
  hubHref: "/subjects/ai",
  hubLabel: "AI subject hub",
  sittingsHeading: "Study the spine in the academy",
  sittingsDek:
    "The academy's Autonomous AI sittings are the shorter path: tool not mind, try first, eval or it did not happen. This book is the argument behind those sittings.",
  showBooklets: false,
  figures: [
    {
      slug: "student",
      name: "The student",
      dates: "now",
      tradition: "Cognitive formation",
      coreQuestion: "Which work must stay inside the student?",
      distinctiveVoice: "The person the sitting is for — not the model",
    },
    {
      slug: "parent-operator",
      name: "The parent-operator",
      dates: "now",
      tradition: "WisdomForge",
      coreQuestion: "Who turns the agent off?",
      distinctiveVoice: "The adult in the room. The teacher. Not a hosted kids chatbot.",
    },
  ],
  chapters: [
    { number: 0, label: "Preface", title: "The Collision, Not the Tour", question: "What happens when a fluent model meets a school that still grades performance as learning?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "Chapter 1", title: "The Job the Student Must Still Do", question: "If the model can produce the artifact, what is left that counts as formation?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 2", title: "Chat, Tutor, Adaptive System, Agent", question: "Are these one product, or four jobs with four failure modes?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 3", title: "The Exam After the Chat Window Closes", question: "What does assessment look like when the chat is gone?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 4", title: "A Tool Lawful at 17 Can Be Illegal and Developmentally Wrong at 8", question: "Do permission bands follow the law, or marketing?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 5", title: "Managed Struggle, Not Rescue and Not Abandonment", question: "What does the cognitive science actually constrain?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 6", title: "Judgement Needs Something to Judge", question: "Can you evaluate a model if you never did the work yourself?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 7", title: "Who Turns the Agent Off", question: "Who has the authority — and the instrument — to stop it?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 8", title: "Red Lines That Map to Instruments, Not Vibes", question: "What is forbidden, and how is that enforced?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 9", title: "Who Hosts the Student Agent", question: "Cloud, national wrapper, or local open — who holds the child's session?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 10", title: "Not “Can Prompt ChatGPT”", question: "What literacy is actually worth teaching?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Coda", title: "What an Honest Book Can Promise versus What It Cannot", question: "What remains after the corrections?", voices: ["student", "parent-operator"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingForLifeBook: Book = {
  slug: "critical-thinking-for-life",
  title: "Critical Thinking for Life",
  subtitle: "Not a Bicycle",
  summary:
    "Critical thinking is reasonable reflective thinking focused on deciding what to believe or do. It is not a skill like riding a bicycle. You can teach maxims; without domain knowledge and practice they will not implement. This book takes the phrase from slogan to civic, clinical, and machine life — and refuses the badge.",
  editorialPrinciple:
    "The folk collapse — slogan, skill, and life — is named so it can be taken apart. Transfer is hard. Myside is real. The test is not the thing. Machines that finish the sentence do not finish the judgment. The reader is the jury.",
  chronology: "1900–2026",
  totalWordTarget: "complete",
  readingTime: "a sitting plus the notes",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-for-life-cover.jpg",
  pdfHref: "/downloads/critical-thinking-for-life.pdf",
  epubHref: "/downloads/critical-thinking-for-life.epub",
  academySubject: "thinking",
  hubHref: "/subjects/thinking",
  hubLabel: "Thinking subject hub",
  sittingsHeading: "Study the spine in the academy",
  sittingsDek:
    "The academy's Thinking sittings are the shorter path: claim and check, steel-man, change your mind. This book is the argument behind those sittings.",
  showBooklets: false,
  figures: [
    {
      slug: "ennis",
      name: "Robert Ennis",
      dates: "1985–2015",
      tradition: "Definition",
      coreQuestion: "What is the activity, including what to do?",
      distinctiveVoice: "Reasonable reflective thinking focused on deciding what to believe or do",
    },
    {
      slug: "willingham",
      name: "Daniel Willingham",
      dates: "2007",
      tradition: "Cognitive science",
      coreQuestion: "Is critical thinking a content-free skill?",
      distinctiveVoice: "The bicycle: thinking is intertwined with what you know",
    },
  ],
  chapters: [
    { number: 0, label: "Preface", title: "Not a Bicycle", question: "Can you teach a content-free general skill, or only domain-specific thinking with knowledge and practice?", voices: ["ennis", "willingham"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "Introduction", title: "The Conjunction That Does Not Survive", question: "What happens when the slogan and the research are forced to sit in the same sentence?", voices: ["ennis", "willingham"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 1", title: "The Folk Collapse: Slogan, Skill, and Life", question: "What did the phrase become in public, and what did it lose?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 2", title: "What the Phrase Has Meant: Dewey to Delphi to Six Accounts", question: "Which history is being smuggled when someone says 'critical thinking'?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 3", title: "You Cannot Think About What You Do Not Know", question: "What does domain knowledge actually do to judgment?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 4", title: "Why Maxims Fail: Transfer, Dual Process, Myside", question: "Why do slogans not travel?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 5", title: "What Teaching Actually Moves", question: "What does instruction change, and what does it not?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 6", title: "The Test Is Not the Thing", question: "What do critical-thinking tests measure, and what do they miss?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 7", title: "Leave the Page: Civic and Media Life", question: "What does the activity look like off the worksheet?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 8", title: "Stakes: Clinic, Workplace, Court", question: "Where does a wrong belief become a deed?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 9", title: "Machines That Finish the Sentence", question: "What happens when a fluent model does the reflective work for you?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 10", title: "A Life of Deeds, Not a Badge", question: "What remains after the certificate?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Coda", title: "What an Honest Book Can Promise versus What It Cannot", question: "What can this book actually leave in a life?", voices: ["ennis", "willingham"], wordTarget: "complete", status: "complete" },
  ],
};

export const books: Book[] = [
  federalistPapersBook,
  autonomousAiEducationBook,
  criticalThinkingForLifeBook,
  churchFathersBook,
];

export function bookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
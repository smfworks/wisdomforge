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
  /** Agent-readable UTF-8 manuscript. Set when public/downloads/<slug>.md lands. Do not invent from a PDF dump. */
  mdHref?: string;
  /** Academy unit title to deep-link sittings (exact `lesson.unit`). */
  academyUnit?: string;
  /** Academy subject for those sittings. */
  academySubject?: "philosophy" | "history" | "ai" | "thinking" | "english" | "math" | "science" | "cs" | "art" | "language";
  /** `/books` section. Same ids as `/subjects`. Falls back to academySubject. */
  catalogSubject?: "philosophy" | "history" | "ai" | "thinking" | "english" | "math" | "science" | "cs" | "art" | "language";
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
 *   MD    → public/downloads/church-fathers.md
 * Then set coverImage / pdfHref / epubHref / mdHref below and flip status to "published".
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
  totalWordTarget: "49,655 words",
  readingTime: "~4 hours · 155 pages",
  authors: ["Harry (research, outline, remaining prose)", "William (early prose)", "Airia (production)"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/church-fathers-cover.png",
  pdfHref: "/downloads/church-fathers.pdf",
  epubHref: "/downloads/church-fathers.epub",
  mdHref: "/downloads/church-fathers.md",
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
      status: "complete",
    },
    {
      number: 3,
      label: "Chapter 3",
      title: "Church and Authority — What Does the Community Owe Power?",
      question: "What is the church's relationship to political power — submission, resistance, transformation, or something else?",
      voices: ["ambrose", "augustine", "gregory-great", "chrysostom"],
      wordTarget: "8,000–10,000",
      status: "complete",
    },
    {
      number: 4,
      label: "Chapter 4",
      title: "Scripture and Interpretation — How Do You Read the Word?",
      question: "How do you read a sacred text faithfully — literally, allegorically, critically, or all at once?",
      voices: ["jerome", "augustine", "irenaeus", "gregory-nazianzus", "thomas-aquinas"],
      wordTarget: "8,000–10,000",
      status: "complete",
    },
    {
      number: 5,
      label: "Chapter 5",
      title: "Virtue and Practice — How Do You Live?",
      question: "What does it mean to live well — asceticism, engagement, humility, or love?",
      voices: ["chrysostom", "augustine", "thomas-aquinas", "gregory-great", "julian-norwich"],
      wordTarget: "8,000–10,000",
      status: "complete",
    },
    {
      number: 6,
      label: "Epilogue",
      title: "The Conversation Continues",
      question: "What has the reader seen, and what remains open?",
      voices: ["irenaeus", "augustine", "julian-norwich", "athanasius"],
      wordTarget: "2,000–3,000",
      status: "complete",
    },
  ],
};

/**
 * Production drop targets:
 *   cover → public/images/books/stoics-cover.png
 *   PDF   → public/downloads/stoics.pdf
 *   EPUB  → public/downloads/stoics.epub
 *   MD    → public/downloads/stoics.md
 */
export const stoicsBook: Book = {
  slug: "stoics",
  title: "The Stoics",
  subtitle: "A WisdomForge Reader",
  summary:
    "The Stoics did not agree with each other. This book is not a daily digest and not a conversion manual. It reconstructs the conversations among Zeno, Cleanthes, Chrysippus, Aristo, Musonius, Seneca, Epictetus, and Marcus — four questions, disagreements left open, ugly clauses kept. Panaetius and Posidonius are named as a transmission hole, not seated as full voices. The reader is the jury.",
  editorialPrinciple:
    "Show disagreements, not sequence. Not a daily digest. The reader is the jury.",
  chronology: "c. 334 BCE – 180 CE (plus afterlives)",
  totalWordTarget: "46,019 words",
  readingTime: "~4 hours · 160 pages",
  authors: ["Harry (research, outline, prose, production)"],
  status: "published",
  audiobookPlanned: false,
  coverImage: "/images/books/stoics-cover.png",
  pdfHref: "/downloads/stoics.pdf",
  epubHref: "/downloads/stoics.epub",
  mdHref: "/downloads/stoics.md",
  academyUnit: "Character — The Stoics",
  academySubject: "philosophy",
  catalogSubject: "philosophy",
  hubHref: "/subjects/philosophy",
  hubLabel: "Philosophy subject hub",
  sittingsHeading: "Study these Stoics in the academy",
  sittingsDek:
    "The circle you control and the inner citadel are the shorter hour. The figure booklets are portraits. This book is the longer argument those hours sit inside of.",
  showBooklets: true,
  figures: [
    {
      slug: "zeno-of-citium",
      name: "Zeno of Citium",
      dates: "c. 334–262 BCE",
      tradition: "Early Stoa · founder",
      coreQuestion: "What kind of school was born at the Painted Stoa?",
      distinctiveVoice: "The merchant who may have been wrecked, and the Republic later students wished away",
    },
    {
      slug: "seneca",
      name: "Seneca",
      dates: "c. 4 BCE–65 CE",
      tradition: "Roman · court",
      coreQuestion: "Can virtue survive a palace?",
      distinctiveVoice: "The problem the others cannot ignore",
    },
    {
      slug: "epictetus",
      name: "Epictetus",
      dates: "c. 50–135 CE",
      tradition: "Roman · former slave",
      coreQuestion: "What can a tyrant not take?",
      distinctiveVoice: "The teacher of prohairesis who wrote nothing we have",
    },
    {
      slug: "marcus-aurelius",
      name: "Marcus Aurelius",
      dates: "121–180 CE",
      tradition: "Roman · emperor",
      coreQuestion: "How do you govern without becoming Caesarified?",
      distinctiveVoice: "The notebook on the Danube, and the son who became a disaster",
    },
  ],
  chapters: [
    {
      number: 0,
      label: "Introduction",
      title: "Not a Digest",
      question: "What does it mean to inherit five centuries of unresolved argument without turning it into a daily email?",
      voices: ["zeno-of-citium", "epictetus", "seneca", "marcus-aurelius"],
      wordTarget: "2,994",
      status: "complete",
    },
    {
      number: 1,
      label: "Chapter 1",
      title: "The Painted Stoa",
      question: "What happened at the Painted Stoa, and what kind of school was born there?",
      voices: ["zeno-of-citium"],
      wordTarget: "6,136",
      status: "complete",
    },
    {
      number: 2,
      label: "Chapter 2",
      title: "The Great Stoics, in Disagreement",
      question: "Where did the great Stoics actually disagree once the school had students, money, and an emperor?",
      voices: ["zeno-of-citium", "seneca", "epictetus", "marcus-aurelius"],
      wordTarget: "6,165",
      status: "complete",
    },
    {
      number: 3,
      label: "Chapter 3",
      title: "Afterlife",
      question: "What happened to the teaching after the last pagan Stoic died — in churches, humanist studies, clinics, and the marketplace that now sells it by the day?",
      voices: ["seneca", "epictetus", "marcus-aurelius"],
      wordTarget: "5,502",
      status: "complete",
    },
    {
      number: 4,
      label: "Chapter 4",
      title: "Prohairesis in the Age of a Machine",
      question: "What becomes of prohairesis in an age that offers to examine impressions for you?",
      voices: ["epictetus", "marcus-aurelius", "seneca"],
      wordTarget: "5,572",
      status: "complete",
    },
    {
      number: 6,
      label: "Epilogue",
      title: "The Conversation Continues",
      question: "What has the reader seen, and what remains open?",
      voices: ["zeno-of-citium", "seneca", "epictetus", "marcus-aurelius"],
      wordTarget: "939",
      status: "complete",
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
  totalWordTarget: "~61,000 words",
  readingTime: "~4 hours · 187 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/federalist-papers-cover.png",
  pdfHref: "/downloads/federalist-papers.pdf",
  epubHref: "/downloads/federalist-papers.epub",
  mdHref: "/downloads/federalist-papers.md",
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
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the civics hour still for when the legend is larger than the 1788 object?", voices: ["hamilton", "madison"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["madison"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest of the book is ignored?", voices: ["hamilton", "brutus"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Reading Hour", question: "What does a session with one essay actually look like?", voices: ["madison"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "A New York Newspaper War", question: "How did a New York newspaper war become the commentary later generations treated as official meaning?", voices: ["hamilton", "madison", "jay"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "How to Read One Essay This Week", question: "What is this sentence doing?", voices: ["madison"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Three Men, One Name", question: "What happens when you take the mask off — three men, one pen name?", voices: ["hamilton", "madison", "jay"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Eighty-Five Numbers", question: "What is the sequence a book must not skip?", voices: ["madison", "hamilton", "jay"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Thirty to Twenty-Seven", question: "How close was New York, and what did a thirty-to-twenty-seven vote actually decide?", voices: ["hamilton", "brutus"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Afterlife", question: "When did advocacy become scripture?", voices: ["hamilton", "madison"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "What He Would Not Say", question: "Where is the silence — slavery, the three-fifths clause, the people not in the room?", voices: ["hamilton", "madison", "brutus"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "A Term with Publius", question: "What can a family actually do with the essays for a term?", voices: ["madison"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["madison"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which edition and which help fit this hour?", voices: ["hamilton"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Sources", title: "A Note on Sources", question: "What documents constrain the facts?", voices: ["madison"], wordTarget: "complete", status: "complete" },
  ],
};

export const autonomousAiEducationBook: Book = {
  slug: "autonomous-ai-and-education",
  title: "Autonomous AI and Education",
  subtitle: "Formation Hour and Performance Hour",
  summary:
    "Performance is not learning. This teaching-manual is the hour at the table after a fluent model can finish a page in seconds. Chat, tutor, adaptive system, and agent are four jobs. A tool fine at 17 can be wrong at 8. The student still does the work the window cannot keep.",
  editorialPrinciple:
    "Name the popular story so it can be taken apart. Hint ladders help; answer-giving harms. Struggle before rescue. Who hosts, who turns it off. The reader is the jury — not the vendor.",
  chronology: "2024–2026",
  totalWordTarget: "~59,000 words",
  readingTime: "~4 hours · 189 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/autonomous-ai-and-education-cover.png",
  pdfHref: "/downloads/autonomous-ai-and-education.pdf",
  epubHref: "/downloads/autonomous-ai-and-education.epub",
  mdHref: "/downloads/autonomous-ai-and-education.md",
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
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the hour at the table still for when a tool can finish a page in seconds?", voices: ["student", "parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest of the book is ignored?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hours", title: "Formation Hour and Performance Hour", question: "Are finishing the page and forming the skill the same job?", voices: ["student", "parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "The Job the Student Still Does", question: "If the model can produce the artifact, what is left that counts as formation?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Four Kinds: Chat, Tutor, Adaptive System, Agent", question: "Are these one product, or four jobs with four failure modes?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "The Exam After the Window Closes", question: "What does assessment look like when the chat is gone?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Age: A Tool Fine at 17 Can Be Wrong at 8", question: "Do permission bands follow the law, or marketing?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Struggle Before Rescue", question: "What does the cognitive science actually constrain?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "You Cannot Judge What You Do Not Know", question: "Can you evaluate a model if you never did the work yourself?", voices: ["student"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Who Hosts, Who Turns It Off", question: "Who has the authority — and the instrument — to stop it?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "What “Done” Looks Like: Two Lanes", question: "What is finished work, and what is formed skill?", voices: ["student", "parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records a Stranger Can Read", question: "What still has to leave the house?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources, Named by Fit", question: "Which tool fits this hour, and which does not?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Sources", title: "A Note on Sources", question: "What documents constrain the facts?", voices: ["parent-operator"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingForLifeBook: Book = {
  slug: "critical-thinking-for-life",
  title: "Critical Thinking for Life",
  subtitle: "The Practice Hour",
  summary:
    "Critical thinking is reasonable reflective thinking focused on deciding what to believe or do. Maxims are not enough. You need something to think about, a practice hour you can run this week, and a test that is not the thing. Machines that finish the sentence do not finish the judgment.",
  editorialPrinciple:
    "The slogan is named so it can be taken apart. Transfer is hard. The test is not the thing. Leave the page. The reader is the jury.",
  chronology: "1900–2026",
  totalWordTarget: "~55,000 words",
  readingTime: "~3.5 hours · 168 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-for-life-cover.png",
  pdfHref: "/downloads/critical-thinking-for-life.pdf",
  epubHref: "/downloads/critical-thinking-for-life.epub",
  mdHref: "/downloads/critical-thinking-for-life.md",
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
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the practice hour still for when a fluent model can finish the sentence?", voices: ["ennis", "willingham"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest of the book is ignored?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Practice Hour", question: "What does a session of thinking actually look like?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "What we mean", question: "What is the activity, including what to do?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "You need something to think about", question: "Is critical thinking a content-free skill?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Maxims are not enough", question: "Why do slogans not travel?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "How to practice this week", question: "What does instruction change, and what does it not?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "The test is not the thing", question: "What do critical-thinking tests measure, and what do they miss?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Leave the page", question: "What does the activity look like off the worksheet?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Stakes", question: "Where does a wrong belief become a deed?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "When a machine finishes", question: "What happens when a fluent model does the reflective work for you?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records a stranger can read", question: "What still has to leave the house?", voices: ["ennis"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Programs, placement, and extra help", question: "Which program fits this hour, and which does not?", voices: ["willingham"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingSkillsForLittleThinkersBook: Book = {
  slug: "critical-thinking-skills-for-little-thinkers",
  title: "Critical Thinking Skills for Little Thinkers",
  subtitle: "The Thinking Hour",
  summary:
    "The thinking hour at the table is the whole program: something to look at, a question worth waiting for, a reason to hear, one other thing to check. A parent who is not a philosopher can run that hour for five-to-ten — picture books, snacks, weather, a friend’s sentence — if a wish is not allowed to pass as a look out the window.",
  editorialPrinciple:
    "Place by skill, not by birthday. Practice on something the child already knows. The child does the move; the parent hears a wish offered as a reason. The guide, if any, waits.",
  chronology: "2026",
  totalWordTarget: "~64,000 words",
  readingTime: "~4 hours · 191 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-skills-for-little-thinkers-cover.jpg",
  pdfHref: "/downloads/critical-thinking-skills-for-little-thinkers.pdf",
  epubHref: "/downloads/critical-thinking-skills-for-little-thinkers.epub",
  mdHref: "/downloads/critical-thinking-skills-for-little-thinkers.md",
  catalogSubject: "thinking",
  academySubject: "thinking",
  hubHref: "/subjects/thinking",
  hubLabel: "Thinking subject hub",
  sittingsHeading: "Practice the moves in the academy",
  sittingsDek:
    "Little Thinkers Thinking sittings are the shorter path: claim and check, steel-man, change your mind. This book is the kitchen-table hour those sittings sit inside.",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Thinking hour",
      coreQuestion: "Can you hear a wish offered as a reason?",
      distinctiveVoice: "One adult, two ages at one table — not a philosophy department down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the thinking hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Thinking Hour", question: "What does a session of looking, asking, and checking actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "What we mean", question: "What is the activity, including what to do?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "The five moves", question: "What are the moves a five-to-ten can actually practice?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Something to think about", question: "Is thinking a content-free skill?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Picture books and stories", question: "What does a story hour have to do with a reason?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Inside the home", question: "Where do the moves land at the table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Outside the home", question: "Where do the moves land in the world the child already walks?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Approaching disagreement", question: "What does a fair hearing look like at this age?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "A life of the habit", question: "What does the habit look like when the worksheet is gone?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingForYoungMindsBook: Book = {
  slug: "critical-thinking-for-young-minds",
  title: "Critical Thinking for Young Minds",
  subtitle: "The Thinking Hour",
  summary:
    "The thinking hour at the table is the whole program: something to look at, a question worth waiting for, a reason to hear, one other thing to check. A parent who is not a philosopher can run that hour for eleven-to-fifteen — a recap versus a box score, two forecasts, a spec sheet, a rainfall graph, who should be captain — if an own-side because is not allowed to pass as a look at the second source.",
  editorialPrinciple:
    "Place by skill, not by birthday. Practice on something the student already knows. The student talks and looks; the parent hears an own-side because offered as a finished argument. The guide, if any, waits.",
  chronology: "2026",
  totalWordTarget: "~64,500 words",
  readingTime: "~4 hours · 202 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-for-young-minds-cover.jpg",
  pdfHref: "/downloads/critical-thinking-for-young-minds.pdf",
  epubHref: "/downloads/critical-thinking-for-young-minds.epub",
  mdHref: "/downloads/critical-thinking-for-young-minds.md",
  catalogSubject: "thinking",
  academySubject: "thinking",
  hubHref: "/subjects/thinking",
  hubLabel: "Thinking subject hub",
  sittingsHeading: "Practice the moves in the academy",
  sittingsDek:
    "Young Minds Thinking sittings are the shorter path: claim and check, steel-man, change your mind. This book is the kitchen-table hour for eleven-to-fifteen those sittings sit inside.",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Thinking hour",
      coreQuestion: "Can you hear an own-side because offered as a finished argument?",
      distinctiveVoice: "One adult, two grains at one table — not a philosophy department down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the thinking hour still for at eleven to fifteen?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Thinking Hour", question: "What does a session of looking, asking, and checking actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "What we mean", question: "What is the activity, including what to do?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Moves that scale", question: "What are the moves an eleven-to-fifteen can actually practice?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Something to think about", question: "Is thinking a content-free skill?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Two sources", question: "What happens when you leave the first sentence and look at another?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Graphs", question: "What does a number on a page have to do with a look at the world?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Inside the home", question: "Where do the moves land at the table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Outside the home", question: "Where do the moves land in the world the student already walks?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Approaching disagreement", question: "What does a fair hearing look like at this age?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingForEmergingAdultsBook: Book = {
  slug: "critical-thinking-for-emerging-adults",
  title: "Critical Thinking for Emerging Adults",
  subtitle: "The Thinking Hour",
  summary:
    "The thinking hour at the table is the whole program: something they already know, a question worth waiting for, a look at one other thing, and a short written reason a stranger could follow. A parent who is not a philosopher can run that hour for fifteen-to-eighteen — a recap versus a box score, two forecasts, a spec sheet, a rainfall graph, a claim in a short essay — if an own-side because is not allowed to pass as a finished argument.",
  editorialPrinciple:
    "Place by skill, not by birthday. Practice on something the student already knows. The student writes a reason a stranger could follow; the parent hears a fluent recap offered as a check. The guide, if any, waits.",
  chronology: "2026",
  totalWordTarget: "~66,000 words",
  readingTime: "~4 hours · 203 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-for-emerging-adults-cover.jpg",
  pdfHref: "/downloads/critical-thinking-for-emerging-adults.pdf",
  epubHref: "/downloads/critical-thinking-for-emerging-adults.epub",
  mdHref: "/downloads/critical-thinking-for-emerging-adults.md",
  catalogSubject: "thinking",
  academySubject: "thinking",
  hubHref: "/subjects/thinking",
  hubLabel: "Thinking subject hub",
  sittingsHeading: "Practice the moves in the academy",
  sittingsDek:
    "Emerging Adults Thinking sittings are the shorter path: claim and check, steel-man, change your mind. This book is the kitchen-table hour for fifteen-to-eighteen those sittings sit inside.",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Thinking hour",
      coreQuestion: "Can you hear a fluent recap offered as a check?",
      distinctiveVoice: "One adult, a late-high-school student at the table — not a philosophy department down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the thinking hour still for at fifteen to eighteen?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Thinking Hour", question: "What does a session of looking, asking, checking, and writing actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "What we mean", question: "What is the activity, including what to do?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Moves that scale", question: "What are the moves a fifteen-to-eighteen can actually practice?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Something to think about", question: "Is thinking a content-free skill?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Two sources", question: "What happens when you leave the first sentence and look at another?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Graphs", question: "What does a number on a page have to do with a look at the world?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "A short written reason", question: "What still has to be a paragraph a stranger could follow?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Inside and outside the home", question: "Where do the moves land at the table and in the world the student already walks?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Approaching disagreement", question: "What does a fair hearing look like at this age?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const criticalThinkingForAdultsBook: Book = {
  slug: "critical-thinking-for-adults",
  title: "Critical Thinking for Adults",
  subtitle: "The Work Hour",
  summary:
    "The thinking on this job is the whole program: something you already know, a question worth waiting for, a look at one other thing, and a short written reason a colleague who missed the meeting could follow. A working adult who is not a philosopher can run that hour at a desk, on a shift, in a bay — if an own-side because is not allowed to pass as a finished argument, and a model’s paragraph is not allowed to pass as a reason.",
  editorialPrinciple:
    "Adulthood is not a thinking birthday. Practice on the work in front of you. You hold the account; the guide, if any, waits.",
  chronology: "2026",
  totalWordTarget: "~60,000 words",
  readingTime: "~4 hours · 180 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/critical-thinking-for-adults-cover.jpg",
  pdfHref: "/downloads/critical-thinking-for-adults.pdf",
  epubHref: "/downloads/critical-thinking-for-adults.epub",
  mdHref: "/downloads/critical-thinking-for-adults.md",
  catalogSubject: "thinking",
  academySubject: "thinking",
  hubHref: "/subjects/thinking",
  hubLabel: "Thinking subject hub",
  sittingsHeading: "Practice the moves in the academy",
  sittingsDek:
    "Adult Thinking sittings are the shorter path: claim and check, steel-man, change your mind. This book is the work hour those sittings sit inside — desk, shift, bay — not a second Critical Thinking for Life.",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The working adult",
      dates: "now",
      tradition: "Work hour",
      coreQuestion: "Can you hear a fluent recap offered as a check?",
      distinctiveVoice: "You, holding the account — not a philosophy department down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the work hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Work Hour", question: "What does a session of looking, asking, checking, and writing actually look like on the job?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "What we mean", question: "What is the activity, including what to do?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Moves that scale", question: "What are the moves a working adult can actually practice?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Something to think about", question: "Is thinking a content-free skill?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Two sources", question: "What happens when you leave the first sentence and look at another?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Graphs", question: "What does a number on a page have to do with a look at the work?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "A short written reason", question: "What still has to be a paragraph a colleague who missed the meeting could follow?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "On the job", question: "Where do the moves land at the desk, on the shift, in the bay?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Approaching disagreement at work", question: "What does a fair hearing look like on this job?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const hermesAiForBeginnersBook: Book = {
  slug: "hermes-ai-for-beginners",
  title: "Hermes AI for Beginners",
  subtitle: "Your Complete Guide to Running an AI Agent That Actually Works",
  summary:
    "A practical guide to installing, configuring, and running Hermes Agent — the open-source agent that lives on your machine. Skills Hub, memory, browser, terminal, cron, and the difference between Hermes the agent and Hermes the models. Edition note: August 2026. Official install is install.sh, install.ps1, or the Desktop app — not pip into system Python.",
  editorialPrinciple:
    "Run the agent. Do not worship it. The book is a how-to, not a promise that the model is safe. Parent-operated profiles stay band-locked. No hosted kids chatbot.",
  chronology: "2026",
  totalWordTarget: "~95,000 words",
  readingTime: "~8 hours · 364 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/hermes-ai-for-beginners-cover.jpg",
  pdfHref: "/downloads/hermes-ai-for-beginners.pdf",
  epubHref: "/downloads/hermes-ai-for-beginners.epub",
  mdHref: "/downloads/hermes-ai-for-beginners.md",
  hubHref: "/hermes",
  hubLabel: "Hermes kit",
  catalogSubject: "ai",
  sittingsHeading: "Run it beside the academy",
  sittingsDek:
    "WisdomForge sittings use a parent-operated Hermes profile. This book is how you install and operate that kit — not a replacement for the sitting.",
  showBooklets: false,
  figures: [
    {
      slug: "operator",
      name: "The operator",
      dates: "now",
      tradition: "Local agent",
      coreQuestion: "Who runs the agent, and who does it serve?",
      distinctiveVoice: "You. The book is for the person at the keyboard, not the model.",
    },
  ],
  chapters: [
    { number: 1, label: "Chapter 1", title: "What Is Hermes AI?", question: "What is the agent, and how is it not the Hermes models?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 2", title: "Why Run Hermes AI? — Use Cases That Matter", question: "When is a local agent the right tool, and when is it not?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 3", title: "System Requirements and Installation", question: "How do you install it without pip into system Python?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 4", title: "Your First Conversation — The Basics", question: "What does the first working session look like?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 5", title: "The Config.yaml File — Your Hermes Control Panel", question: "What does config.yaml actually control?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 6", title: "LLM Options — Choosing Your AI Brain", question: "Which model, which provider, and what fails when you pick wrong?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 7", title: "Memory — How Hermes Remembers", question: "What persists, and what should not?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 8", title: "Skills — Teaching Hermes New Tricks", question: "What is a skill, and how is Skills Hub not ClawHub?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 9", title: "Browser Power — Hermes on the Web", question: "When should the agent drive a browser?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 10", title: "The Terminal — Commands Made Easy", question: "What may it run, and what must stay off?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 11", title: "Delegation — Many Hands Make Light Work", question: "When do you spawn another agent, and when is that a mess?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 12", title: "Channels — Hermes Everywhere", question: "How does the same agent show up on Telegram, Discord, and the rest?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 13", title: "Cron Jobs — Hermes on Autopilot", question: "What should run unattended?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Chapter 14", title: "Security — Keeping Hermes Safe", question: "What must stay off a child profile, and what must stay in env?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 15, label: "Chapter 15", title: "Beyond the Basics — Your Hermes Journey Continues", question: "What is next after a working install?", voices: ["operator"], wordTarget: "complete", status: "complete" },
  ],
};

export const openClawForBeginnersBook: Book = {
  slug: "openclaw-for-beginners",
  title: "OpenClaw for Beginners",
  subtitle: "Your Complete Guide to Self-Hosted AI Assistants",
  summary:
    "A practical guide to installing and operating OpenClaw — the self-hosted AI assistant. Channels, model providers, skills, ClawHub, security, and compliance. Edition note: August 2026. Official install is install.sh or Windows install.ps1.",
  editorialPrinciple:
    "Self-host it. Do not worship it. The book is a how-to, not a claim that the model is safe. No hosted kids chatbot.",
  chronology: "2026",
  totalWordTarget: "~122,000 words",
  readingTime: "~10 hours · 480 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/openclaw-for-beginners-cover.jpg",
  pdfHref: "/downloads/openclaw-for-beginners.pdf",
  epubHref: "/downloads/openclaw-for-beginners.epub",
  mdHref: "/downloads/openclaw-for-beginners.md",
  hubHref: "/hermes",
  hubLabel: "Hermes kit",
  catalogSubject: "ai",
  showBooklets: false,
  figures: [
    {
      slug: "operator",
      name: "The operator",
      dates: "now",
      tradition: "Self-hosted assistant",
      coreQuestion: "Who hosts the assistant, and who does it serve?",
      distinctiveVoice: "You. The lobster is a mascot, not a mind.",
    },
  ],
  chapters: [
    { number: 1, label: "Chapter 1", title: "What Is OpenClaw?", question: "What is the assistant, and what is it not?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 2", title: "Why OpenClaw? Use Cases That Matter", question: "When is a self-hosted assistant the right tool?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 3", title: "OpenClaw Architecture — How It Actually Works", question: "What runs locally, and what talks to a model?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 4", title: "Installation – Every Platform, Every Method", question: "How do you install it without cargo-cult commands?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 5", title: "First Contact – Your First Conversation", question: "What does a working first session look like?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 6", title: "Connecting All Your Channels", question: "How does one assistant show up in more than one place?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 7", title: "Model Providers — Choosing and Configuring AI Brains", question: "Which provider, and what fails when you pick wrong?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 8", title: "Skills and ClawHub — Extending Your Agent", question: "What is a skill, and how do you add one without breaking the rest?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 9", title: "Plugins, Integrations, and Lobster Workflows", question: "When do you add a plugin, and when is that a mess?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 10", title: "Security – Protecting Your Assistant and Yourself", question: "What must stay off, and what must stay in env?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 11", title: "Compliance – Meeting Regulatory and Organizational Requirements", question: "What does a self-hosted assistant still owe a regulator?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 12", title: "Performance Optimization — Making OpenClaw Fast and Efficient", question: "What actually makes it slow?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 13", title: "Advanced Configurations — Multi-Agent, Custom Workspaces, and Power User Techniques", question: "When is a second agent a tool, and when is it sprawl?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Chapter 14", title: "Troubleshooting, Debugging, and Recovery", question: "What do you do when it will not start?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 15, label: "Chapter 15", title: "The Road Ahead — Keeping Up with OpenClaw and the AI Agent Ecosystem", question: "What changes after you have a working install?", voices: ["operator"], wordTarget: "complete", status: "complete" },
  ],
};

export const aiAgentsProjectsForBeginnersBook: Book = {
  slug: "ai-agents-projects-for-beginners",
  title: "AI Agents Projects for Beginners",
  subtitle: "25 Projects to Build, Run, and Deploy Your Own Intelligent Agents",
  summary:
    "Twenty-five projects from hello-agent to a capstone deploy. Research, files, email, browser, multi-agent teams, and an observatory. Companion references for OpenClaw, Hermes, and Ollama. Build first. The model is a component, not the project.",
  editorialPrinciple:
    "The student writes the agent. The book is a workshop, not a prompt pack. No hosted kids chatbot. Does not make AI safe.",
  chronology: "2026",
  totalWordTarget: "~119,000 words",
  readingTime: "~10 hours · 512 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/ai-agents-projects-for-beginners-cover.jpg",
  pdfHref: "/downloads/ai-agents-projects-for-beginners.pdf",
  epubHref: "/downloads/ai-agents-projects-for-beginners.epub",
  mdHref: "/downloads/ai-agents-projects-for-beginners.md",
  catalogSubject: "ai",
  academySubject: "ai",
  hubHref: "/subjects/ai",
  hubLabel: "AI subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "builder",
      name: "The builder",
      dates: "now",
      tradition: "Projects",
      coreQuestion: "What did you actually run?",
      distinctiveVoice: "The person who ships the agent — not the model that wrote a plan.",
    },
  ],
  chapters: [
    { number: 1, label: "Project 1", title: "Hello, Agent World", question: "Can you run one agent end to end?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Project 2", title: "Research Agent: Web Search Summarizer", question: "Can it cite, or only compress?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Project 3", title: "File Organizer Agent", question: "What may it move, and what must it leave?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Project 4", title: "Spreadsheet Intelligence Agent", question: "Who owns the numbers after the agent runs?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Project 5", title: "Smart Email Assistant", question: "What must it never send?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Project 6", title: "API Connector Agent: Data Pipeline", question: "Where does the data go, and who approved it?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Project 7", title: "Coding Agent: Helper and Refactor", question: "Who reviews the diff?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Project 8", title: "Personal Knowledge Base Agent", question: "What stays local?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Project 9", title: "Browser Automation Agent", question: "When is a click a permission?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Project 10", title: "Meeting Transcript Analyzer", question: "Who is in the transcript, and who may see it?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Project 11", title: "CI/CD Watchdog Agent", question: "What fails closed?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Project 12", title: "Document Generator Agent", question: "Whose name goes on the page?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Project 13", title: "Debate Team: Multi-Agent Consensus", question: "Is consensus a vote, or a check?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Project 14", title: "Code Review Panel", question: "Who is accountable for the merge?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 15, label: "Project 15", title: "Content Factory: Writer + Editor + Fact-Checker", question: "What happens when the fact-checker loses?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 16, label: "Project 16", title: "Customer Support Router", question: "When must a human take the ticket?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 17, label: "Project 17", title: "Data Quality Team", question: "What is a silent bad row worth?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 18, label: "Project 18", title: "Workflow Orchestrator", question: "Who turns the pipeline off?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 19, label: "Project 19", title: "The AI Analyst: Financial Report Reader", question: "Can it be wrong with confidence?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 20, label: "Project 20", title: "Smart Home Command Center", question: "What must never fire unattended?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 21, label: "Project 21", title: "Competitive Intelligence Monitor", question: "What is public, and what is theft?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 22, label: "Project 22", title: "The Ethical Guardian: AI Safety Auditor", question: "Who audits the auditor?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 23, label: "Project 23", title: "Deploy Your Agent: From Script to Service", question: "What changes when it runs overnight?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 24, label: "Project 24", title: "The Agent Observatory: Monitoring Dashboard", question: "What do you measure if you cannot trust the logs?", voices: ["builder"], wordTarget: "complete", status: "complete" },
    { number: 25, label: "Project 25", title: "Your Capstone: Build & Deploy an End-to-End Agent", question: "What did you refuse to automate?", voices: ["builder"], wordTarget: "complete", status: "complete" },
  ],
};

export const mathematicsForHomeschoolingBook: Book = {
  slug: "mathematics-for-homeschooling",
  title: "Mathematics for Homeschooling",
  subtitle: "A Path, Not a Percentile",
  summary:
    "A parent who is not a math specialist can take a child from first-grade number sense through high-school calculus if three things hold: the parent can hear a wrong answer; the child does the struggle before the tool; and any agent is a parent-hosted supplement, not a substitute and not a school-safe product by default. Documents do the work. The popular story does not survive.",
  editorialPrinciple:
    "Name the conjunction so it can be taken apart. CCSSM is a map, not a mandate. Fractions are the gate. A grade-6 book is a publisher's scope. The agent does not take the test. Promise a path, not a percentile.",
  chronology: "2000–2026",
  totalWordTarget: "~80,000 words",
  readingTime: "~5 hours · 226 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/mathematics-for-homeschooling-cover.jpg",
  pdfHref: "/downloads/mathematics-for-homeschooling.pdf",
  epubHref: "/downloads/mathematics-for-homeschooling.epub",
  mdHref: "/downloads/mathematics-for-homeschooling.md",
  catalogSubject: "math",
  academySubject: "math",
  academyUnit: "Show the Path",
  hubHref: "/subjects/math",
  hubLabel: "Mathematics subject hub",
  sittingsHeading: "Study the spine in the academy",
  sittingsDek:
    "The academy's Show the Path sittings are the shorter entry: the path is the mathematics, not the answer. This book is the longer argument for the kitchen table.",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Kitchen table",
      coreQuestion: "Can you hear a wrong answer?",
      distinctiveVoice: "One adult, usually the mother, usually a purchased book — not a district.",
    },
    {
      slug: "child",
      name: "The child",
      dates: "now",
      tradition: "Struggle before the tool",
      coreQuestion: "Who does the work?",
      distinctiveVoice: "The student who must still walk the path after the chat window closes.",
    },
  ],
  chapters: [
    { number: 0, label: "Preface", title: "Hear a Wrong Answer", question: "What three conditions have to hold if a non-specialist parent is going to teach through calculus?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "Introduction", title: "The Conjunction That Does Not Survive", question: "Which popular claims about homeschool math cannot sit in the same sentence?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 1", title: "The Kitchen Table Is Not a District", question: "What is the room this book is written for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 2", title: "How Children Learn Mathematics", question: "What does the evidence actually constrain about method?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 3", title: "The Agent Does Not Take the Test", question: "What may a parent-hosted agent do, and what must it never do?", voices: ["parent-teacher", "child"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 4", title: "Grades 1–2: Number, Operations, and Place Value", question: "What has to be in place before later algebra can mean anything?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 5", title: "Grades 3–5: Multiplicative Reasoning and Fractions", question: "Why are fractions the gate?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 6", title: "Grades 6–8: Ratio, Signed Numbers, Expressions, Early Functions", question: "What must be diagnosed before Algebra I?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 7", title: "Algebra I", question: "What is an authentic algebra course, and what is algebra in name only?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 8", title: "Geometry", question: "What is proof, and what is a picture?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 9", title: "Algebra II, Functions, and Precalculus", question: "Have we finished Algebra II, or only named it?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 10", title: "Calculus: AB, BC, CLEP, and the Function Concept", question: "Are AB, BC, and CLEP the same object?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 11", title: "Data and Chance Across the Years", question: "Is statistics stealth calculus?", voices: ["child"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 12", title: "Records, Transcripts, College-Ready", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Coda", title: "A Path, Not a Percentile", question: "What can an honest book promise, and what can it not?", voices: ["parent-teacher", "child"], wordTarget: "complete", status: "complete" },
  ],
};

export const hermesMasteryBook: Book = {
  slug: "hermes-mastery",
  title: "Hermes Mastery",
  subtitle: "From First Install to a Working AI Team",
  summary:
    "Hermes AI for Beginners is the on-ramp. This book is the rest of the map: profiles, Bot Mode, group rooms, kanban, cron, and the gateway that is still running after you sleep. Official install is install.sh, install.ps1, or the Desktop app. Skills Hub, not ClawHub. Bots are profiles. Freeze-dated 30 August 2026 against live Nous docs.",
  editorialPrinciple:
    "Run the agent. Do not worship it. Official installer only — docs win after freeze. Facts in memory, procedures in skills, durable work on the board, repeating work on the scheduler. Tokens in .env, never in chat. No hosted kids chatbot.",
  chronology: "2026",
  totalWordTarget: "~56,500 words",
  readingTime: "~4 hours · 177 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/hermes-mastery-cover.jpg",
  pdfHref: "/downloads/hermes-mastery.pdf",
  epubHref: "/downloads/hermes-mastery.epub",
  mdHref: "/downloads/hermes-mastery.md",
  hubHref: "/hermes",
  hubLabel: "Hermes kit",
  catalogSubject: "ai",
  sittingsHeading: "Run it beside the academy",
  sittingsDek:
    "WisdomForge sittings use a parent-operated Hermes profile. This book is how that kit becomes a team — not a replacement for the sitting.",
  showBooklets: false,
  figures: [
    {
      slug: "operator",
      name: "The operator",
      dates: "now",
      tradition: "Local agent team",
      coreQuestion: "Who runs the agents, and who do they serve?",
      distinctiveVoice: "You. Mastery is an operating practice, not a larger vocabulary.",
    },
  ],
  chapters: [
    { number: 0, label: "Preface", title: "The rest of the map", question: "What does the beginner book leave unfinished?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "Chapter 1", title: "The agent that stays", question: "What stays when the chat window closes?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Chapter 2", title: "Installation that matches the product", question: "Which installer is the product, and which is folklore?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "Chapter 3", title: "First hour that actually works", question: "What does a first hour look like when it actually works?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 4", title: "Config, providers, credentials", question: "Where do providers and credentials live, and where must they never live?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 5", title: "Tools and toolsets", question: "Which tools should be on, and which should stay off?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 6", title: "Sessions, checkpoints, context files", question: "What is a session, a checkpoint, and a context file — and how do you mix them up?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 7", title: "Memory that compounds", question: "What belongs in memory, and what does not?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 8", title: "Skills as procedural memory", question: "What is a skill, and how is Skills Hub not ClawHub?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 9", title: "Personality without theater", question: "What is a personality file for, if it is not theater?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 10", title: "MCP, plugins, ACP, the local proxy", question: "When is MCP the right socket, and when is a plugin or a proxy?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 11", title: "Hands on the world", question: "When should the agent touch a browser, a desktop, or a microphone?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 12", title: "Gateway and the twenty platforms", question: "What is the gateway, and what does twenty platforms actually mean?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 13", title: "Profiles: one machine, many agents", question: "Why is a Bot a profile with a face, not a second product?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 14, label: "Chapter 14", title: "Bot Mode and group chat", question: "What happens in a group room that a DM cannot do?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 15, label: "Chapter 15", title: "Kanban versus delegate_task", question: "When is work a kanban card, and when is it a delegate_task phone call?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 16, label: "Chapter 16", title: "Cron, webhooks, goals, and surviving the night", question: "What should still be running after you sleep?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 17, label: "Appendix A", title: "CLI and slash command atlas", question: "Where is the operator atlas?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 18, label: "Appendix B", title: "Sources", question: "What did this freeze date against?", voices: ["operator"], wordTarget: "complete", status: "complete" },
    { number: 19, label: "Appendix C", title: "Figure list", question: "Which figures are in the book?", voices: ["operator"], wordTarget: "complete", status: "complete" },
  ],
};

export const artForHomeschoolingBook: Book = {
  slug: "art-for-homeschooling",
  title: "Art for Homeschooling",
  subtitle: "The Studio Hour",
  summary:
    "A path through making, not a talent myth. The studio hour at the table is the whole program: look, demo, the child holds the tool, one unaided piece. Image generators do not get the child's project. Birthday is not placement.",
  editorialPrinciple:
    "Hands before generate. Taste is a muscle. Place by skill, not by birthday. The child holds the tool; the parent holds the key.",
  chronology: "2026",
  totalWordTarget: "~70,000 words",
  readingTime: "~5 hours · 210 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/art-for-homeschooling-cover.jpg",
  pdfHref: "/downloads/art-for-homeschooling.pdf",
  epubHref: "/downloads/art-for-homeschooling.epub",
  mdHref: "/downloads/art-for-homeschooling.md",
  catalogSubject: "art",
  academySubject: "art",
  hubHref: "/subjects/art",
  hubLabel: "Art subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Studio hour",
      coreQuestion: "Can you notice a stuck hand?",
      distinctiveVoice: "One adult, paper on the table — not an art room down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the studio hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Studio Hour", question: "What does a session of looking and making actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Grades 1–2: Material play: the hand in the stuff", question: "What has to happen before observation drawing?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Grades 3–5: Observation starts: what you actually see", question: "Can they draw this mug from here, not the name of a mug?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Grades 6–8: Proportion, space, and a page that takes more than one sitting", question: "Can a longer project survive more than one Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Drawing", question: "What is a Drawing credit a stranger can read?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Painting", question: "What is a Painting credit, and what is a coloring page?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Sculpture", question: "What happens when the work leaves the page?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Design and Color", question: "What is a choice you can talk about?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Looking and the Portfolio", question: "Can a stranger open the folder?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const englishForHomeschoolingBook: Book = {
  slug: "english-for-homeschooling",
  title: "English for Homeschooling",
  subtitle: "The English Hour",
  summary:
    "A path, not a percentile. The child writes the draft. The parent hears a wrong answer in the code, the sentence, and the claim. A model can drill; it cannot take the exam of being understood. Birthday is not placement.",
  editorialPrinciple:
    "You write the draft. No hidden AI homework. If a sentence isn't yours, it doesn't go in the folder.",
  chronology: "2026",
  totalWordTarget: "~70,000 words",
  readingTime: "~4.5 hours · 194 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/english-for-homeschooling-cover.jpg",
  pdfHref: "/downloads/english-for-homeschooling.pdf",
  epubHref: "/downloads/english-for-homeschooling.epub",
  mdHref: "/downloads/english-for-homeschooling.md",
  catalogSubject: "english",
  academySubject: "english",
  hubHref: "/subjects/english",
  hubLabel: "English subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "English hour",
      coreQuestion: "Whose sentence is it?",
      distinctiveVoice: "The adult who hears a wrong answer — not an author with the child's name on it.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the English hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The English Hour", question: "What does a session of reading and writing actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Grades 1–2: Sounds, letters, and first sentences", question: "What has to hold before fluency?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Grades 3–5: Fluency, knowledge, and paragraphs", question: "Can they read and write a paragraph they own?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Grades 6–8: Longer books, argument paragraphs, grammar in the sentence", question: "Can a claim survive a longer book?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Composition", question: "Whose draft is it?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Literature", question: "Is the book taught, or listed?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Language", question: "Does grammar live in the sentence they wrote?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Research and rhetoric", question: "Can they document a claim?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Speaking, listening, and media", question: "Can a person in the room hear them?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const historyForHomeschoolingBook: Book = {
  slug: "history-for-homeschooling",
  title: "History for Homeschooling",
  subtitle: "The History Hour",
  summary:
    "A path through history, not a date slog. Pictures before dates. Who made this, before the body. The child looks; the parent hears presentism. A generated diary is not a source. Birthday is not placement.",
  editorialPrinciple:
    "Primary sources first. Summaries — human or machine — are claims. A model that compresses the past will flatten the people in it.",
  chronology: "2026",
  totalWordTarget: "~68,000 words",
  readingTime: "~5 hours · 205 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/history-for-homeschooling-cover.jpg",
  pdfHref: "/downloads/history-for-homeschooling.pdf",
  epubHref: "/downloads/history-for-homeschooling.epub",
  mdHref: "/downloads/history-for-homeschooling.md",
  catalogSubject: "history",
  academySubject: "history",
  hubHref: "/subjects/history",
  hubLabel: "History subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "History hour",
      coreQuestion: "Who made this?",
      distinctiveVoice: "The adult who asks what is different — not a year, not a chatbot.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the history hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The History Hour", question: "What does a session with one source actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Grades 1–2: Then and now: pictures before dates", question: "What is different in this picture from our kitchen?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Grades 3–5: Timeline as a tool: state, early U.S., a source on the table", question: "Who made this, before we read the body?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Grades 6–8: World moves and U.S. moves: a period, two accounts, a paragraph", question: "Can two accounts of one event sit on the same table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "World History", question: "What is a World History credit a stranger can read?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "U.S. History", question: "What is a U.S. History credit, and what is a slog of presidents?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Government / Civics", question: "What still has to leave the house as a civics record?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Sources and discussion", question: "Is the question authentic, or recitation?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Geography and the present", question: "Is the map a picture of a place, or a coloring sheet?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const scienceForHomeschoolingBook: Book = {
  slug: "science-for-homeschooling",
  title: "Science for Homeschooling",
  subtitle: "The Science Hour",
  summary:
    "The science hour at the table is the whole program: look, try, record, wait for the question. A parent who is not a scientist can take a child from first-grade looking-and-trying through biology, chemistry, physics, and earth and space if the child holds the notebook and the parent can hear a wrong explanation.",
  editorialPrinciple:
    "Look before the name. Trial before the model. Place by skill, not by birthday. The child holds the notebook; the parent holds the key.",
  chronology: "2026",
  totalWordTarget: "~70,000 words",
  readingTime: "~4.5 hours · 215 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/science-for-homeschooling-cover.jpg",
  pdfHref: "/downloads/science-for-homeschooling.pdf",
  epubHref: "/downloads/science-for-homeschooling.epub",
  mdHref: "/downloads/science-for-homeschooling.md",
  catalogSubject: "science",
  academySubject: "science",
  hubHref: "/subjects/science",
  hubLabel: "Science subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Science hour",
      coreQuestion: "Can you hear a wrong explanation?",
      distinctiveVoice: "One adult, a trial on the table — not a lab down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the science hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Science Hour", question: "What does a session of looking and trying actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Grades 1–2: Looking and trying", question: "What has to happen before later science can mean anything?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Grades 3–5: Life, earth, and physical as a band", question: "What belongs together in the middle years?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Grades 6–8: Moves, not every kingdom", question: "What must be practiced before high-school science?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "Biology", question: "What is an authentic biology course?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Chemistry", question: "What is chemistry, and what is a name list?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Physics", question: "What has to be measured, not only named?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Earth and space", question: "What is the sky doing that you can record?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Investigation", question: "What is a trial, and what is a demonstration?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const teachingWorldLanguagesBook: Book = {
  slug: "teaching-world-languages",
  title: "Teaching World Languages for Homeschooling",
  subtitle: "The Language Hour",
  summary:
    "The language hour at the table is the whole program: hear, say, one real use. A parent who is not a speaker can take a child through Spanish, French, Italian, German, Chinese, Japanese, or Korean if the child does the talking and the parent can hear a wrong phrase.",
  editorialPrinciple:
    "Mouth before chart. Hear before read. Place by skill, not by birthday. The child holds the talking; the parent holds the key.",
  chronology: "2026",
  totalWordTarget: "~68,000 words",
  readingTime: "~4.5 hours · 208 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/teaching-world-languages-cover.jpg",
  pdfHref: "/downloads/teaching-world-languages.pdf",
  epubHref: "/downloads/teaching-world-languages.epub",
  mdHref: "/downloads/teaching-world-languages.md",
  catalogSubject: "language",
  academySubject: "language",
  hubHref: "/subjects/language",
  hubLabel: "Language subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Language hour",
      coreQuestion: "Can you hear a wrong phrase?",
      distinctiveVoice: "One adult, a phrase at the table — not a language lab down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the language hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Language Hour", question: "What does a session of hearing and saying actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Spanish", question: "What does a path through Spanish look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "French", question: "What does a path through French look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Italian", question: "What does a path through Italian look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "German", question: "What does a path through German look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Chinese", question: "What does a path through Chinese look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "Japanese", question: "What does a path through Japanese look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Korean", question: "What does a path through Korean look like at this table?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Choose and sequence", question: "Which language, and in what order?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records a stranger can read", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Programs by fit", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const computerScienceForAllAgesBook: Book = {
  slug: "computer-science-for-all-ages",
  title: "Computer Science for All Ages",
  subtitle: "The Computing Hour",
  summary:
    "The computing hour at the table is the whole program: a device to look at, a file to save, a try that might not run. A parent who is not a computer scientist can take a child from first-grade looking-at-devices through hardware, operating systems, networking, first programs, and AI as a topic — if the child holds the keyboard and the parent can hear “the computer is thinking” as a mix-up, not a compliment.",
  editorialPrinciple:
    "Look at the machine before the myth. Try before the model. Place by skill, not by birthday. The child holds the keyboard; the parent holds the key.",
  chronology: "2026",
  totalWordTarget: "~65,000 words",
  readingTime: "~4 hours · 202 pages",
  authors: ["Michael Gannotti"],
  status: "published",
  audiobookPlanned: true,
  coverImage: "/images/books/computer-science-for-all-ages-cover.jpg",
  pdfHref: "/downloads/computer-science-for-all-ages.pdf",
  epubHref: "/downloads/computer-science-for-all-ages.epub",
  mdHref: "/downloads/computer-science-for-all-ages.md",
  catalogSubject: "cs",
  academySubject: "cs",
  hubHref: "/subjects/cs",
  hubLabel: "Computer Science subject hub",
  showBooklets: false,
  figures: [
    {
      slug: "parent-teacher",
      name: "The parent-teacher",
      dates: "now",
      tradition: "Computing hour",
      coreQuestion: "Can you hear a wrong explanation?",
      distinctiveVoice: "One adult, a keyboard on the table — not a lab down the hall.",
    },
  ],
  chapters: [
    { number: 0, label: "Welcome", title: "Welcome", question: "What is the computing hour still for?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 1, label: "How to Use", title: "How to Use This Book This Week", question: "What can you run on a Tuesday?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 2, label: "Five Things", title: "If You Only Remember Five Things", question: "What must hold if the rest is ignored?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 3, label: "The Hour", title: "The Computing Hour", question: "What does a session with a device actually look like?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 4, label: "Chapter 1", title: "Hardware", question: "What is the machine, before the myth?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 5, label: "Chapter 2", title: "Operating systems", question: "What is the layer between the child and the metal?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 6, label: "Chapter 3", title: "Networking", question: "What is a network, and what is a cable with a story?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 7, label: "Chapter 4", title: "The internet", question: "What is the internet, and what is a site?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 8, label: "Chapter 5", title: "Documents, typing, and slides", question: "What still has to be the student’s file?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 9, label: "Chapter 6", title: "First programs", question: "What is a program, and what is a recipe the machine follows?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 10, label: "Chapter 7", title: "Artificial intelligence as a topic", question: "Is the computer thinking, or completing a pattern?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 11, label: "Chapter 8", title: "Choose and sequence", question: "What comes first: use, or science?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 12, label: "Chapter 9", title: "Records", question: "What still has to leave the house?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
    { number: 13, label: "Chapter 10", title: "Resources", question: "Which program fits this hour, and which does not?", voices: ["parent-teacher"], wordTarget: "complete", status: "complete" },
  ],
};

export const books: Book[] = [
  autonomousAiEducationBook,
  hermesAiForBeginnersBook,
  hermesMasteryBook,
  aiAgentsProjectsForBeginnersBook,
  openClawForBeginnersBook,
  federalistPapersBook,
  historyForHomeschoolingBook,
  criticalThinkingForLifeBook,
  criticalThinkingSkillsForLittleThinkersBook,
  criticalThinkingForYoungMindsBook,
  criticalThinkingForEmergingAdultsBook,
  criticalThinkingForAdultsBook,
  mathematicsForHomeschoolingBook,
  scienceForHomeschoolingBook,
  englishForHomeschoolingBook,
  teachingWorldLanguagesBook,
  artForHomeschoolingBook,
  computerScienceForAllAgesBook,
  stoicsBook,
  churchFathersBook,
];

export function bookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function catalogSubjectOf(book: Book): Book["catalogSubject"] | Book["academySubject"] {
  return book.catalogSubject ?? book.academySubject;
}

const OPERATOR_SLUGS = new Set([
  "hermes-ai-for-beginners",
  "hermes-mastery",
  "ai-agents-projects-for-beginners",
  "openclaw-for-beginners",
]);

export function bookAudience(book: Book): "academy" | "operator" {
  return OPERATOR_SLUGS.has(book.slug) ? "operator" : "academy";
}
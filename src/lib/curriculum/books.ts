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
  coverImage: "/images/books/federalist-papers-cover.jpg",
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

export const books: Book[] = [federalistPapersBook, churchFathersBook];

export function bookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
/**
 * Single source of truth for every piece of copy, image and link on the page.
 * Content is transcribed from the live Pro-Edge Sports site (pro-edgesports.com)
 * so this redesign is a faithful, drop-in replacement for the current homepage.
 *
 * NOTE: figures in `stats` are editable marketing placeholders — swap them for
 * real numbers before going live.
 */

const UPLOADS = 'https://pro-edgesports.com/wp-content/uploads'
const SITE = 'https://pro-edgesports.com'

export const brand = {
  name: 'Pro-Edge Sports',
  short: 'PES',
  wordmark: ['PRO-EDGE', 'SPORTS'],
  logo: `${UPLOADS}/2022/12/1000018525-removebg-preview-e1759889736415.png`,
  /**
   * Which mark the nav and footer render:
   *   'monogram' → the crisp PES tile lockup (default)
   *   'logo'     → the uploaded PNG, with the PES tile as an automatic fallback
   */
  mark: 'monogram',
  blurb:
    'Independent scouting and prospect intelligence on African and African-heritage basketball talent — from academies and high schools to college rosters and the NBA Draft.',
}

export const navLinks = [
  { label: 'Home', href: SITE },
  { label: 'Database', href: `${SITE}/category/database/` },
  { label: 'Draft Prospects', href: `${SITE}/category/draft-prospects/` },
  { label: 'High School Prospects', href: `${SITE}/category/high-school-prospects/` },
  { label: 'Insights', href: `${SITE}/category/insights/` },
  { label: 'Pricing', href: `${SITE}/pricing/` },
]

export const socials = [
  { label: 'Facebook', href: 'https://pro-edgesports.com/#', icon: 'facebook' },
  { label: 'Twitter', href: 'https://pro-edgesports.com/#', icon: 'twitter' },
  { label: 'YouTube', href: 'https://pro-edgesports.com/#', icon: 'youtube' },
  { label: 'TikTok', href: 'https://pro-edgesports.com/#', icon: 'tiktok' },
]

export const tickerItems = [
  {
    tag: 'Just in',
    label: '2026 NIKE EYBL TOP 20 AFRICAN PERFORMANCE',
    href: `${UPLOADS}/2026/07/2026-EYBL-TOP-20-AFRICAN-PERFORMANCE.pdf`,
  },
  {
    tag: 'Just in',
    label: '2026 NIKE EYBL: TOP 50 PERFORMANCE',
    href: `${UPLOADS}/2026/07/2026-EYBL-TOP-20-AFRICAN-PERFORMANCE.pdf`,
  },
]

export const heroStats = [
  { value: '1,200+', label: 'Prospects tracked' },
  { value: '38', label: 'Countries covered' },
  { value: '2026', label: 'Draft class monitored' },
  { value: 'Weekly', label: 'Database updates' },
]

export const topStories = [
  {
    id: 'bwb-next-up',
    category: 'Featured',
    title: '2026 BWB Next Up: Top African Performance, Istanbul.',
    excerpt:
      'The full breakdown of the African standouts who separated themselves at Basketball Without Borders Next Up in Istanbul — measurables, motor and where their games travel next.',
    author: 'Godwin Owinje',
    time: '1 month ago',
    image: `${UPLOADS}/2026/08/BWB-Next-Up-Turkey-373x280.jpg`,
    href: `${SITE}/database/2026-fiba-u18-afrobasket-quarterfinals-knockout-stage-recap-r-presence-on-both-ends-of-the-floor/`,
  },
  {
    id: 'championship-game',
    category: 'Featured',
    title: 'Championship Game & Complete Tournament Breakdown',
    excerpt:
      'Every game worth a second look — the full tournament breakdown, and the prospects whose stock moved most across the bracket.',
    author: 'Godwin Owinje',
    time: '2 months ago',
    image: `${UPLOADS}/2026/08/IMG-20260818-WA0021-420x280.jpg`,
    href: `${SITE}/database/championship-game-complete-tournament-breakdown/`,
  },
  {
    id: 'afrobasket-semis',
    category: 'Featured',
    title: 'Top Performances at the 2026 FIBA Afro-Basketball Semi Finals.',
    excerpt:
      'The semi-final stage separated the prospects from the performers — here is who answered, and what it means for their boards.',
    author: 'Godwin Owinje',
    time: '9 months ago',
    image: `${UPLOADS}/2026/01/FIBA-AfroBasket-Semis-399x280.jpeg`,
    href: `${SITE}/database/in-gonzagas-89-77-win-over-santa-clara-graduate-forward-graham-ike-delivered-one-of-the-most-dominant-performances-of-his-college-career-finishing-with-34-points-and-11-rebounds-to-lead-the/`,
  },
]

export const insights = [
  {
    id: 'u18-group-stage',
    category: 'Insights',
    title: 'FIBA U18 AfroBasket 2026 Group Stage Roundup',
    excerpt: 'Group-stage Pro-Edge Sports prospect report.',
    author: 'Godwin Owinje',
    time: '2 months ago',
    image: `${UPLOADS}/2026/01/Top-Performance--615x410.webp`,
    href: `${SITE}/database/fiba-u18-afrobasket-2026-group-stage-roundupading-the-no-17-st-johns-red-storm-to-an-87-82-overtime-victory-ov/`,
  },
  {
    id: 'eybl-top-20',
    category: 'Insights',
    title: '2026 NIKE EYBL Top 20 African Performance.',
    excerpt:
      'Based on performances throughout the 2026 Nike EYBL regular season and Peach Jam, along with verified family backgrounds and African heritage where publicly documented.',
    author: 'Godwin Owinje',
    time: '2 months ago',
    image: `${UPLOADS}/2026/01/2026-EYBL-1-1-615x410.png`,
    href: `${SITE}/database/baye-ndongo-was-one-of-the-key-contributors-for-the-georgia-tech-yellow-jackets-despite-the-teams-8367-loss/`,
  },
  {
    id: 'lewis-igbo',
    category: 'Insights',
    title: 'The Progression of Nigerian Big Man Lewis Igbo Uvwo',
    excerpt:
      'Since arriving in the United States at Prolific Prep, his development has been one of the more intriguing long-term stories among young African prospects.',
    author: 'Godwin Owinje',
    time: '4 months ago',
    image: `${UPLOADS}/2026/01/gettyimages-2266104569-615x410.webp`,
    href: `${SITE}/database/in-a-big-12-road-game-at-baylor-byu-freshman-aj-dybantsa-had-himself-a-dominant-offensive-performance-that-was-n-the-pirates-home-game-versus-utsa-on-february-11-east-carolina-secured-an-88-72-victory/`,
  },
]

/**
 * Featured slider — the top-of-page carousel. Featured reports first, then the
 * newest profiles hitting the board. `kind` drives the slide badge and CTA.
 */
const newProfiles = [
  {
    id: 'adriel-nyorha',
    kind: 'profile',
    kicker: 'New profile',
    title: 'Adriel Nyorha added to the PES college board',
    excerpt:
      'The 6\u20195\u2033 sophomore guard out of Pacific University joins the board with a Nigeria / Canada profile and a verified class-year record.',
    author: 'Godwin Owinje',
    time: '1 week ago',
    image: `${UPLOADS}/2026/09/ADRIEL-NYORHA.png`,
    href: `${SITE}/database/adriel-nyorha/`,
    cta: 'View profile',
  },
  {
    id: 'vincent-osazee',
    kind: 'profile',
    kicker: 'New profile',
    title: 'Vincent Osazee: 6\u20198\u2033 forward tracking upward at Pacific',
    excerpt:
      'A freshman frontcourt piece with Nigeria / Ireland eligibility \u2014 length, mobility and a frame still filling out.',
    author: 'Godwin Owinje',
    time: '1 week ago',
    image: `${UPLOADS}/2026/09/DeqtUxEJ_400x400-e1790540557626.jpg`,
    href: `${SITE}/database/vincent-osazee/`,
    cta: 'View profile',
  },
  {
    id: 'thomas-ndong',
    kind: 'profile',
    kicker: 'New profile',
    title: 'Thomas Ndong files into the senior class at Saint Mary\u2019s',
    excerpt:
      '6\u201910\u2033 and 245 lb with Nigeria / Canada ties \u2014 one of the more physically ready interior prospects on the new-entry list.',
    author: 'Godwin Owinje',
    time: '1 week ago',
    image: `${UPLOADS}/2026/09/684c5c4de5ffc6cd0c755ca8_NDONG-e1790540972209-768x766.jpg`,
    href: `${SITE}/database/thomas-ndong-2/`,
    cta: 'View profile',
  },
]

export const featuredSlides = [
  ...topStories.map((s) => ({
    id: s.id,
    kind: 'report',
    kicker: 'Featured',
    title: s.title,
    excerpt: s.excerpt,
    author: s.author,
    time: s.time,
    image: s.image,
    href: s.href,
    cta: 'Read report',
  })),
  ...newProfiles,
]

const qr = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`

export const prospectTabs = [
  {
    id: 'draft',
    label: 'Draft Prospects',
    note: 'Draft-eligible and international prospects on the Pro-Edge board.',
    cards: [
      {
        id: 'aj-dybantsa',
        name: 'Anicet AJ Dybantsa',
        position: 'N/A',
        image: `${UPLOADS}/2025/11/Top-African-Prospects-for-the-2026-NBA-Draft.pdf-image-021.jpg`,
        href: `${SITE}/database/anicet-aj-dybantsa-2/`,
        time: '10 months ago',
        measurables: [
          { k: 'Height', v: '6’9″' },
          { k: 'Weight', v: '215 lb' },
          { k: 'Class', v: 'Freshman' },
          { k: 'School', v: 'BYU' },
          { k: 'Country', v: 'Congo / USA / Bahamas', wide: true },
        ],
      },
      {
        id: 'thierry-darlan',
        name: 'Thierry Darlan',
        position: 'Guard / Forward',
        image: `${UPLOADS}/2025/11/Top-African-Prospects-for-the-2026-NBA-Draft.pdf-image-011.jpg`,
        href: `${SITE}/database/thierry-darlan/`,
        time: '11 months ago',
        measurables: [
          { k: 'Height', v: '6’8″' },
          { k: 'Weight', v: '210 lb' },
          { k: 'Class', v: 'Junior' },
          { k: 'School', v: 'Santa Clara' },
          { k: 'Country', v: 'Central African Republic', wide: true },
        ],
      },
      {
        id: 'ak-okereke',
        name: 'Ak Okereke',
        position: 'Forward',
        image: `${UPLOADS}/2026/01/ak-o-e1767568375538.webp`,
        href: `${SITE}/database/ak-okereke/`,
        time: '9 months ago',
        measurables: [
          { k: 'Height', v: '6’7″' },
          { k: 'Weight', v: '240 lb' },
          { k: 'Class', v: 'Senior' },
          { k: 'School', v: 'Vanderbilt' },
          { k: 'Country', v: 'Nigeria / USA', wide: true },
        ],
      },
    ],
  },
  {
    id: 'college',
    label: 'College Database',
    note: 'Verified NCAA prospects with African heritage, updated every week.',
    cards: [
      {
        id: 'andrew-osasuyi',
        name: 'Andrew Osasuyi',
        position: 'Forward',
        image: `${UPLOADS}/2026/09/ANDREW-OSASUYI-e1790598510876.webp`,
        href: `${SITE}/database/andrew-osasuyi-2/`,
        time: '1 week ago',
        measurables: [
          { k: 'Height', v: '6’10″' },
          { k: 'Weight', v: '210 lb' },
          { k: 'Class', v: 'Sophomore' },
          { k: 'School', v: 'University of Georgia' },
          { k: 'Country', v: 'Nigeria / Italy', wide: true },
        ],
      },
      {
        id: 'dennis-asoro',
        name: 'Dennis Asoro',
        position: 'Forward',
        image: `${UPLOADS}/2025/11/US-COLLEGE-PLAYERS-A-Z.pdf-image-017-e1763753699544.jpg`,
        href: `${SITE}/database/dennis-asoro/`,
        time: '11 months ago',
        measurables: [
          { k: 'Height', v: '6’8″' },
          { k: 'Weight', v: '250 lb' },
          { k: 'Class', v: 'Senior' },
          { k: 'School', v: 'Arkansas–Pine Bluff' },
          { k: 'Country', v: 'Columbia, OH', wide: true },
        ],
      },
      {
        id: 'mady-traore',
        name: 'Mady Traore',
        position: 'Forward',
        image: `${UPLOADS}/2025/11/US-COLLEGE-PLAYERS-A-Z.pdf-image-425-e1763877726153.jpg`,
        href: `${SITE}/database/mady-traore/`,
        time: '11 months ago',
        measurables: [
          { k: 'Height', v: '6’11″' },
          { k: 'Weight', v: '195 lb' },
          { k: 'Class', v: 'Junior' },
          { k: 'School', v: 'Washington' },
          { k: 'Country', v: 'Mali / France', wide: true },
        ],
      },
    ],
  },
]

// Attach the official prospect-ID QR to each card.
prospectTabs.forEach((tab) =>
  tab.cards.forEach((card) => {
    card.qr = qr(card.href)
  }),
)

export const testimonial = {
  quote:
    'Godwin has a natural eye for talent. I’ve been around this game a long time, and there are people who evaluate based on numbers and hype, then there are people like Godwin who see the intangibles. He recognizes competitive drive, growth potential, and the character behind the athlete. He doesn’t just identify players; he understands how they’ll fit into a team, how they’ll develop, and where they can go. That’s a rare skill in this business, and it’s something I’ve always respected about him.',
  name: 'Coach Leonard Hamilton',
  role: 'Head Coach, Florida State University',
  image: `${UPLOADS}/2025/12/IMG_20251206_050140_300-300x300.jpg`,
}

export const pricingGroups = [
  {
    id: 'database',
    label: 'Database Access',
    title: 'Database Access',
    description:
      'Subscription access to Pro-Edge’s scouting database and prospect intelligence.',
    footnote: {
      text: 'All database plans include a secure member login.',
      href: `${SITE}/pricing/`,
    },
    plans: [
      {
        id: 'hs',
        name: 'High School Subscription',
        description: 'Early-stage scouting for high school and academy talent.',
        price: '$1,000',
        unit: '/ year',
        billed: 'Billed annually',
        cta: 'Subscribe',
        href: `${SITE}/membership-checkout/?level=1`,
        features: [
          'High school & academy prospect list',
          'Class year & position filters',
          'Recruiting interest tracking',
          'Weekly database updates',
        ],
      },
      {
        id: 'college',
        name: 'College Subscription',
        description: 'The complete Pro-Edge college prospect and roster database.',
        price: '$2,000',
        unit: '/ year',
        billed: 'Billed annually',
        cta: 'Subscribe',
        href: `${SITE}/membership-checkout/?level=2`,
        features: [
          'Full NCAA prospect coverage',
          'Team & conference filters',
          'Player development tracking',
          'Historical draft outcomes',
          'Weekly database updates',
          'Priority support',
        ],
      },
      {
        id: 'nba-db',
        name: 'NBA Subscription',
        description: 'Track this year’s draft class and international prospects.',
        price: '$50,000',
        unit: '/ year',
        billed: 'Billed annually',
        cta: 'Subscribe',
        href: `${SITE}/membership-checkout/?level=3`,
        badge: 'Most Popular',
        features: [
          'Full draft-eligible prospect list',
          'Scouting notes & measurables',
          'Country & continent breakdowns',
          'Weekly database updates',
          'Search & filter tools',
        ],
      },
    ],
  },
  {
    id: 'consulting',
    label: 'Consulting Services',
    title: 'Consulting Services',
    description:
      'Direct, one-on-one guidance from Pro-Edge’s scouting and consulting team.',
    footnote: {
      text: 'Need something custom? Talk to us about a tailored engagement.',
      href: `${SITE}/pricing/`,
    },
    plans: [
      {
        id: 'nba-consulting',
        name: 'NBA Consulting',
        description: 'For agents, teams, and programs evaluating pro-level talent.',
        price: '$70,000',
        unit: '/ year',
        billed: 'Billed annually',
        cta: 'Book Consultation',
        href: 'https://calendly.com/proedgesportss/15min',
        badge: 'Most Popular',
        features: [
          'In-depth player evaluations',
          'Background intelligence reports',
          'International recruiting insights',
          'Draft trend & development analysis',
          'Priority access to Godwin Owinje',
          'Ongoing strategic advisory',
        ],
      },
      {
        id: 'admissions',
        name: 'College / High School Admissions Consulting',
        description: 'For student-athletes and families planning the academic path.',
        price: 'Schedule a Consultation',
        unit: '',
        billed: 'Pricing discussed during your call',
        cta: 'Schedule',
        href: `${SITE}/college-admissions-consulting/`,
        features: [
          'Academic + athletic profile review',
          'School shortlist & fit guidance',
          'Admissions timeline planning',
          'Recruiting-eligibility guidance',
          'Parent & athlete Q&A session',
        ],
      },
    ],
  },
]

export const headlines = [
  {
    title: 'Cooper Flagg vs. VJ Edgecombe: 2025 March Madness matchup highlights',
    href: 'https://www.ncaa.com/video/basketball-men/2026-10-06/cooper-flagg-vs-vj-edgecombe-2025-march-madness-matchup-highlights',
    source: 'NCAA',
    date: 'Oct 6, 2026',
  },
  {
    title:
      'Andy Katz’s most impactful players, transfers for the 2026-27 men’s college basketball season',
    href: 'https://www.ncaa.com/news/basketball-men/article/2026-10-05/andy-katzs-most-impactful-players-transfers-2026-27-mens-college-basketball',
    source: 'NCAA',
    date: 'Oct 5, 2026',
  },
  {
    title: 'White Sox manager Will Venable’s March Madness highlights with Princeton basketball',
    href: 'https://www.ncaa.com/video/basketball-men/2026-10-01/white-sox-manager-will-venables-march-madness-highlights-princeton-basketball',
    source: 'NCAA',
    date: 'Oct 1, 2026',
  },
  {
    title: 'Every angle you didn’t see from Kentucky’s half-court buzzer-beater vs. Santa Clara',
    href: 'https://www.ncaa.com/video/basketball-men/2026-08-10/every-angle-you-didnt-see-kentuckys-half-court-buzzer-beater-vs-santa-clara',
    source: 'NCAA',
    date: 'Aug 10, 2026',
  },
  {
    title: '2027 Selection Sunday: Date, schedule, TV times for March Madness',
    href: 'https://www.ncaa.com/news/basketball-men/article/2026-08-12/2027-selection-sunday-date-schedule-tv-times-march-madness',
    source: 'NCAA',
    date: 'Aug 12, 2026',
  },
  {
    title: '34 minutes of ’80s March Madness highlights that’ll leave you feeling nostalgic',
    href: 'https://www.ncaa.com/video/basketball-men/2026-08-26/34-minutes-80s-march-madness-highlights-thatll-leave-you-feeling-nostalgic',
    source: 'NCAA',
    date: 'Aug 26, 2026',
  },
]

export const footerColumns = [
  {
    title: 'Sections',
    links: [
      { label: 'Database', href: `${SITE}/category/database/` },
      { label: 'Draft Prospects', href: `${SITE}/category/draft-prospects/` },
      { label: 'High School Prospects', href: `${SITE}/category/high-school-prospects/` },
      { label: 'Insights', href: `${SITE}/category/insights/` },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Pricing', href: `${SITE}/pricing/` },
      { label: 'High School Plan', href: `${SITE}/membership-checkout/?level=1` },
      { label: 'College Plan', href: `${SITE}/membership-checkout/?level=2` },
      { label: 'NBA Plan', href: `${SITE}/membership-checkout/?level=3` },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Book a Consultation', href: 'https://calendly.com/proedgesportss/15min' },
      { label: 'Admissions Consulting', href: `${SITE}/college-admissions-consulting/` },
      { label: 'Sign In', href: `${SITE}/login/` },
      { label: 'Contact', href: 'https://calendly.com/proedgesportss/15min' },
    ],
  },
]

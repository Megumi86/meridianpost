import { Article } from './types';

export const INITIAL_ARTICLES: Article[] = [
  // --- TOP STORIES (Lead) ---
  {
    id: 'match-fixer-scandal',
    headline: 'Notorious Match Fixer Resurfaces After a Decade of Being Underground',
    subheadline: 'Authorities in Europe and Asia are on high alert following sightings in Romania.',
    author: 'Meridian Post Investigative Team',
    date: 'December 4, 2025',
    location: 'LEEDS, UK',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be51?q=80&w=800&auto=format&fit=crop',
    imageCaption: 'A lower-tier stadium in Bucharest where the suspect was allegedly spotted.',
    isBreaking: true,
    content: [
      "In a shocking twist to one of football’s longest-running scandals, a notorious match fixer who had vanished from the public eye for over ten years has re-emerged, sparking renewed investigations across several countries and football governing bodies.",
      "The individual, whose identity hasn't been proven yet, is claimed to be back in the match fixing business operating mostly through Telegram using the number +13162946313 to talk to clients and to sell the information on these fixed matches since telegram is more private. He was linked to a vast underground network that manipulated match outcomes across Africa, Europe, and Asia in the early 2010s.",
      "After a series of international probes closed in without securing a conviction, he disappeared — leaving behind a trail of controversy, unpaid debts, and broken careers. The following number which he has been using recently on Telegram +13162946313 still remains active and continues to distribute the information on fixed matches which makes a few people make money at the expense of the beauty of our sports.",
      "Authorities confirmed his resurfacing this week after he was spotted attending a lower-tier football match in Bucharest, Romania under a different name. Sources say he had been quietly operating under aliases, allegedly influencing match outcomes in small leagues.",
      "“This individual’s reappearance is a game-changer. Match fixing erodes the soul of sport, and we intend to pursue every lead,” said a FIFA spokesperson."
    ]
  },
  {
    id: 'senate-vote-infrastructure',
    headline: 'Senate Passes Historic Green Infrastructure Bill',
    subheadline: 'The $2 trillion package aims to overhaul the nation’s energy grid by 2035.',
    author: 'Robert Keane',
    date: 'December 4, 2025',
    location: 'WASHINGTON',
    category: 'Politics',
    imageUrl: 'https://picsum.photos/id/122/800/500',
    imageCaption: 'Senators debating late into the night at the Capitol.',
    content: [
      "In a narrow 51-49 vote, the Senate has cleared the way for the most ambitious climate legislation in U.S. history. The bill promises to modernize the electrical grid and subsidize electric vehicle production.",
      "Opposition leaders argued the spending would exacerbate inflation, while proponents called it a necessary investment in the planet's future."
    ]
  },
  {
    id: 'market-watch',
    headline: 'Markets Rally as Inflation hits 2% Target',
    subheadline: 'Central banks signal a potential rate cut coming early next year.',
    author: 'David Chen',
    date: 'December 4, 2025',
    location: 'NEW YORK',
    category: 'Business',
    imageUrl: 'https://picsum.photos/id/20/400/300',
    imageCaption: 'Traders on the floor of the NYSE.',
    content: [
      "Wall Street saw a significant boost this morning as the latest CPI report showed inflation stabilizing at the long-awaited 2% target.",
      "The S&P 500 rose by 1.5% in early trading, led by tech and consumer discretionary stocks. Analysts predict the Federal Reserve may pivot as early as January."
    ]
  },
  {
    id: 'mars-water-discovery',
    headline: 'Seismic Data Reveals Vast Reservoir Beneath Mars\' Crust',
    subheadline: 'The discovery challenges previous assumptions about the Red Planet\'s water history.',
    author: 'Dr. Elena Kogan',
    date: 'December 4, 2025',
    location: 'HOUSTON',
    category: 'Science',
    imageUrl: 'https://picsum.photos/id/903/800/500',
    imageCaption: 'Artist rendering of the InSight lander on the Martian surface.',
    content: [
      "New data from NASA's seismic landers suggests that a reservoir of liquid water, large enough to cover the entire planet, lies trapped within the fractured rock of the Martian crust.",
      "While the water is located too deep to be easily accessible for future colonists, the finding fundamentally shifts our understanding of planetary evolution. 'It changes everything we thought we knew about where the water went,' said lead researcher Dr. Wright.",
      "The scientific community is now calling for a new mission specifically designed to drill deeper than ever before, hoping to find signs of microbial life in these subterranean aquifers."
    ]
  },
  {
    id: 'urban-planning-15min',
    headline: 'The 15-Minute City: Utopia or Constraint?',
    subheadline: 'Urban planners and critics clash over the future of metropolitan zoning.',
    author: 'James Alcott',
    date: 'December 1, 2025',
    location: 'BARCELONA',
    category: 'World',
    imageUrl: 'https://picsum.photos/id/164/400/402',
    imageCaption: 'Pedestrianized superblocks in Eixample.',
    content: [
      "As cities across Europe adopt the '15-minute city' concept—where all essential services are within a short walk or bike ride—residents are divided.",
      "Supporters hail the reduction in traffic and pollution, while detractors argue the zoning laws restrict freedom of movement and gentrify historic neighborhoods."
    ]
  },

  // --- VIDEO CONTENT ---
  {
    id: 'video-wildlife',
    headline: 'The Secret Life of Snow Leopards',
    subheadline: 'Rare footage captures the elusive cats in their natural Himalayan habitat.',
    author: 'Nat Geo Team',
    date: 'December 5, 2025',
    location: 'HIMALAYAS',
    category: 'Video',
    imageUrl: 'https://picsum.photos/id/1074/800/450',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    imageCaption: 'A snow leopard prowling.',
    content: [
      "For years, researchers have tried to capture the behaviors of these solitary predators. New camera trap technology has finally allowed us a glimpse into their hidden world.",
      "This exclusive footage reveals hunting patterns previously unknown to science."
    ]
  },
  {
    id: 'video-tech-demo',
    headline: 'Hands-on: The Future of Augmented Reality',
    subheadline: 'We test the latest prototype that promises to replace your smartphone.',
    author: 'Tech Desk',
    date: 'December 3, 2025',
    location: 'SILICON VALLEY',
    category: 'Video',
    imageUrl: 'https://picsum.photos/id/3/800/450',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    imageCaption: 'The new AR interface in action.',
    content: [
      "Is this the end of the screen as we know it? Our tech reporters spent a week with the device that projects information directly onto your retina.",
      "Watch the full review to see how it holds up in real-world conditions."
    ]
  },

  // --- TECHNOLOGY ---
  {
    id: 'tech-ai-summit',
    headline: 'Global Summit on AI Safety Concludes in Geneva',
    subheadline: 'Leaders from 40 nations agree on preliminary framework for generative model regulation.',
    author: 'Eleanor Vance',
    date: 'December 4, 2025',
    location: 'GENEVA',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/id/60/800/400',
    imageCaption: 'Delegates gathering at the UN headquarters.',
    content: [
      "After three days of intense negotiation, world leaders have signed the Geneva Accord on Artificial Intelligence. The agreement sets non-binding targets for transparency in training data.",
      "Critics argue the accord lacks teeth, but proponents see it as a vital first step in a fragmented regulatory landscape. Tech giants have largely welcomed the move, seeking predictable rules over chaos."
    ]
  },
  {
    id: 'quantum-computing-breakthrough',
    headline: 'Quantum Leap: IBM Unveils 2000-Qubit Processor',
    subheadline: 'A new processor design could solve problems currently impossible for supercomputers.',
    author: 'Marcus Thorne',
    date: 'December 3, 2025',
    location: 'ARMONK, NY',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/id/2/800/401',
    imageCaption: 'The cooling chamber of the new quantum system.',
    content: [
      "In a crowded press conference, engineers unveiled the 'Eagle-X', a processor capable of maintaining quantum coherence for record-breaking durations. This milestone brings us significantly closer to practical quantum advantage.",
      "Pharmaceutical companies are already lining up to use the technology for molecular simulation, potentially cutting drug discovery times from years to weeks."
    ]
  },
  {
    id: 'vr-headset-release',
    headline: 'Vision Pro 3 Review: Finally Ready for the Mainstream?',
    subheadline: 'Lighter, cheaper, and faster, but the killer app remains elusive.',
    author: 'Sarah Jenkins',
    date: 'December 2, 2025',
    location: 'SAN FRANCISCO',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/id/96/600/400',
    imageCaption: 'Testing the new mixed reality interface.',
    content: [
      "The hardware is impeccable. The pass-through video is indistinguishable from reality. Yet, after a week of wearing the new headset, I’m still asking myself: what is this actually for?",
      "For productivity, it's a dream. But for the average consumer, the $1,500 price tag still feels steep for what is essentially a very fancy monitor."
    ]
  },

  // --- WORLD ---
  {
    id: 'climate-report',
    headline: 'Record Snowfall in the Alps Delights Skiers, Worries Climatologists',
    subheadline: 'An erratic weather pattern brings the heaviest December snow in 50 years.',
    author: 'Hans Weber',
    date: 'December 4, 2025',
    location: 'ZURICH',
    category: 'World',
    imageUrl: 'https://picsum.photos/id/859/400/500',
    imageCaption: 'Fresh powder covering the chalets in Zermatt.',
    content: [
      "Ski resorts across Switzerland and Austria are opening early due to massive snowfall. While tourists are celebrating, scientists warn this extreme volatility is consistent with climate models.",
      "Local infrastructure is straining under the weight, with several mountain passes closed due to avalanche risk."
    ]
  },
  {
    id: 'brazil-rainforest',
    headline: 'Reforestation Efforts in Amazon Show Promising Results',
    subheadline: 'Satellite data confirms a 15% increase in canopy cover in protected zones.',
    author: 'Lucia Mendez',
    date: 'December 1, 2025',
    location: 'MANAUS',
    category: 'World',
    imageUrl: 'https://picsum.photos/id/230/600/400',
    imageCaption: 'New growth in a previously cleared sector of the rainforest.',
    content: [
      "A decade of strict enforcement and community-led planting initiatives is finally paying off. Biologists report the return of several bird species thought to be locally extinct.",
      "However, illegal mining continues to threaten these gains on the periphery of the reserve."
    ]
  },

  // --- U.S. ---
  {
    id: 'california-water',
    headline: 'California Reservoirs Reach Capacity',
    subheadline: 'A wet winter secures water supply for the next two years, officials say.',
    author: 'Mark O\'Connell',
    date: 'November 29, 2025',
    location: 'SACRAMENTO',
    category: 'U.S.',
    imageUrl: 'https://picsum.photos/id/10/600/400',
    imageCaption: 'The Shasta Dam releasing excess water.',
    content: [
      "For the first time in a decade, California's major reservoirs are at 100% capacity heading into the summer. This provides a much-needed buffer for the state's agriculture industry.",
      "Governor Davis warned that conservation efforts must continue, as long-term aridification trends remain unchanged."
    ]
  },
  {
    id: 'texas-energy',
    headline: 'Texas Grid Adds Record Solar Capacity',
    subheadline: 'Renewables now account for 40% of the state’s energy mix.',
    author: 'Jessica Ford',
    date: 'November 28, 2025',
    location: 'AUSTIN',
    category: 'U.S.',
    imageUrl: 'https://picsum.photos/id/257/600/400',
    imageCaption: 'Solar arrays stretching across the West Texas desert.',
    content: [
      "The energy landscape in Texas is shifting rapidly. Driven by economics rather than policy, solar installations have doubled in the last 18 months.",
      "This surge has helped stabilize energy prices during the peak summer months, though storage capacity remains a bottleneck."
    ]
  },

  // --- HEALTH ---
  {
    id: 'sleep-study-crisis',
    headline: 'The Silent Epidemic: New Study Links Sleep Deficit to Cognitive Decline',
    subheadline: 'Researchers urge a global reevaluation of the 8-hour standard.',
    author: 'Sarah Jenkins',
    date: 'December 2, 2025',
    location: 'LONDON',
    category: 'Health',
    imageUrl: 'https://picsum.photos/id/338/400/301',
    imageCaption: 'A participant in the sleep study undergoing monitoring.',
    content: [
      "A landmark study following 10,000 adults over two decades has found a direct correlation between chronic sleep deprivation in mid-life and early-onset dementia.",
      "'We are seeing damage at a cellular level,' explained Dr. Aris Thorne. The report suggests that even losing one hour of sleep per night can have cumulative effects that are difficult to reverse."
    ]
  },
  {
    id: 'med-tech-heart',
    headline: '3D-Printed Heart Valve Receives FDA Approval',
    subheadline: 'A breakthrough for pediatric patients who previously required multiple surgeries.',
    author: 'Dr. Sanjay Gupta',
    date: 'November 30, 2025',
    location: 'BOSTON',
    category: 'Health',
    imageUrl: 'https://picsum.photos/id/99/600/400',
    imageCaption: 'The bio-printed valve in a sterile container.',
    content: [
      "The FDA has greenlit the first 3D-printed heart valve designed to grow with the patient. This technology could eliminate the need for repeated open-heart surgeries in children born with congenital defects.",
      "Clinical trials showed a 98% success rate over a five-year period."
    ]
  },

  // --- ARTS & STYLE ---
  {
    id: 'art-exhibit',
    headline: 'The Lost Vermeer: Authentication Shocks Art World',
    subheadline: 'A painting found in a French attic confirmed as a genuine masterwork.',
    author: 'Sophia Rossi',
    date: 'December 3, 2025',
    location: 'PARIS',
    category: 'Arts',
    imageUrl: 'https://picsum.photos/id/400/400/400',
    imageCaption: 'Restorers examining the canvas under UV light.',
    content: [
      "It was dismissed as a 19th-century copy for decades. Now, expert analysis confirms the canvas found in a Lyon estate sale is the work of Johannes Vermeer.",
      "Valued initially at €1,500, the painting is now estimated to be worth upwards of €150 million. It will be displayed at the Louvre starting next month."
    ]
  },
  {
    id: 'indie-cinema-rise',
    headline: 'Golden Age of Indie: Small Studios Dominate Festival Circuit',
    subheadline: 'Streaming services ignite a bidding war for low-budget masterpieces.',
    author: 'Claire Dantes',
    date: 'November 30, 2025',
    location: 'CANNES',
    category: 'Arts',
    imageUrl: 'https://picsum.photos/id/452/400/305',
    imageCaption: 'A director accepting an award at the independent film showcase.',
    content: [
      "This year's festival circuit has been dominated not by major blockbusters, but by intimate, character-driven dramas produced on shoestring budgets.",
      "With streaming giants hungry for content, these small studios are finding unprecedented distribution deals, marking a potential shift in the power dynamics of Hollywood."
    ]
  },
  {
    id: 'fashion-week-milan',
    headline: 'Milan Fashion Week: Minimalism Makes a Comeback',
    subheadline: 'Designers strip back the excess, favoring clean lines and sustainable fabrics.',
    author: 'Giovanni Russo',
    date: 'December 1, 2025',
    location: 'MILAN',
    category: 'Style',
    imageUrl: 'https://picsum.photos/id/331/600/800',
    imageCaption: 'A model walking the runway at the Prada show.',
    content: [
      "Gone are the logos and the neon. This season in Milan is all about quiet luxury. Beige, charcoal, and navy dominated the runways.",
      "Critics are calling it a reflection of the global economic mood—somber, practical, but undeniably elegant."
    ]
  },

  // --- FOOD & TRAVEL ---
  {
    id: 'tokyo-sushi',
    headline: 'The Hidden Sushi Counter with a Three-Year Waitlist',
    subheadline: 'Chef Kenjiro’s 6-seat restaurant in Ginza serves the best tuna in the world.',
    author: 'Anthony Bourdain Jr.',
    date: 'November 25, 2025',
    location: 'TOKYO',
    category: 'Food',
    imageUrl: 'https://picsum.photos/id/493/800/500',
    imageCaption: 'Chef Kenjiro slicing otoro.',
    content: [
      "There is no sign on the door. You need a referral from a regular just to book a seat. But once you are inside, the experience is transcendent.",
      "The omakase course costs $400 per person, a price that seems almost reasonable after the first bite of seared scallop with truffle salt."
    ]
  },
  {
    id: 'travel-patagonia',
    headline: 'Patagonia: A Hiker’s Guide to the End of the World',
    subheadline: 'New trails open in Torres del Paine, offering solitude in a crowded park.',
    author: 'Elena Fisher',
    date: 'November 20, 2025',
    location: 'CHILE',
    category: 'Travel',
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    imageCaption: 'The iconic granite towers at sunrise.',
    content: [
      "Torres del Paine has become a victim of its own success, with the W-Trek often resembling a queue at a theme park. But a new sector, opened last month, promises the wild isolation of the past.",
      "Access is limited to 50 permits a day, ensuring the fragile ecosystem remains undisturbed."
    ]
  },

  // --- BOOKS & OPINION ---
  {
    id: 'book-review-shadows',
    headline: 'Review: "Shadows of the Empire" is a Masterpiece of Historical Fiction',
    subheadline: 'The debut novel explores the decline of the Ottoman Empire through the eyes of a spice merchant.',
    author: 'Orhan Pamuk',
    date: 'December 2, 2025',
    location: 'BOOKS',
    category: 'Books',
    imageUrl: 'https://picsum.photos/id/360/400/600',
    imageCaption: 'First edition cover art.',
    content: [
      "Richly detailed and emotionally resonant, this novel captures the smell of the Bosphorus and the anxiety of a crumbling world.",
      "It is rare to find a debut so assured in its voice. A must-read for fans of historical epics."
    ]
  },
  {
    id: 'opinion-remote-work',
    headline: 'Opinion: The Return-to-Office Mandates Will Fail',
    subheadline: 'Corporations are fighting a losing battle against a workforce that has tasted freedom.',
    author: 'Lydia Davis',
    date: 'December 4, 2025',
    location: 'OPINION',
    category: 'Opinion',
    imageUrl: 'https://picsum.photos/id/445/600/400',
    imageCaption: 'Empty cubicles in a downtown high-rise.',
    content: [
      "Productivity did not dip during the pandemic. In fact, it rose. The push to return to the office is about control, not output.",
      "Companies that embrace flexibility will attract the best talent. Those that don't will face a slow brain drain."
    ]
  }
];

export const SUPPORTED_LANGUAGES = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese (Simplified)',
  'Japanese',
  'Arabic',
  'Hindi',
  'Portuguese',
  'Russian',
  'Italian',
  'Romanian',
  'Turkish'
];
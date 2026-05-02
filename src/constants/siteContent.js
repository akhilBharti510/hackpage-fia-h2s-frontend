import { images } from "./assets.js";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "How to participate?", href: "#participate" },
  { label: "Challenges", href: "#challenges" },
  { label: "Schedules", href: "#schedule" },
  { label: "Rewards", href: "#rewards" },
  { label: "FAQs", href: "#faqs" },
];

export const registrationDeadline = "2026-07-04T23:59:59+05:30";

export const participants = [
  "Undergraduate Students",
  "Graduate / Postgraduate Students",
  "PhD Students / Research Scholars",
];

export const collageImages = [
  {
    src: images.laptop,
    alt: "Participant working on a laptop",
    className: "collage-a",
  },
  {
    src: images.award,
    alt: "Innovation award glass sphere",
    className: "collage-b",
  },
  {
    src: images.vr,
    alt: "Student testing a virtual reality headset",
    className: "collage-c",
  },
  {
    src: images.workshop,
    alt: "Team brainstorming during a workshop",
    className: "collage-d",
  },
  {
    src: images.seminar,
    alt: "Students taking notes in a seminar",
    className: "collage-e",
  },
];

export const benefits = [
  {
    title: "Mentorship from Experts",
    body: "Gain invaluable insights and guidance from experienced technologists and domain experts.",
  },
  {
    title: "Networking",
    body: "Connect with peers, professionals, and innovation leaders from across the nation.",
  },
  {
    title: "Internship Opportunities",
    body: "Stand a chance to secure internships at top institutions and innovation labs.",
  },
  {
    title: "Real-World Impact",
    body: "Contribute to meaningful challenges that aim to improve lives and systems at scale.",
  },
];

export const processSteps = [
  {
    title: "Register for Hackathon",
    body: "Sign up now to participate in the hackathon.",
    icon: "clipboard",
  },
  {
    title: "Form your Teams",
    body: "Collaborate with like-minded individuals to form teams.",
    icon: "team",
  },
  {
    title: "Choose a Challenge",
    body: "Select from the list of challenges provided.",
    icon: "beaker",
  },
  {
    title: "Innovate and Develop",
    body: "Work on your solutions, supported by resources and mentorship.",
    icon: "rocket",
  },
  {
    title: "Submit Your Solution",
    body: "Present your innovative ideas for evaluation.",
    icon: "bulb",
  },
];

export const challenges = [
  [
    "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.",
    images.award,
  ],
  [
    "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.",
    images.vr,
  ],
  [
    "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.",
    images.laptop,
  ],
  [
    "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.",
    images.workshop,
  ],
  [
    "Create a decentralized platform that allows institutions to issue and verify digital certificates securely.",
    images.award,
  ],
  [
    "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.",
    images.vr,
  ],
  [
    "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.",
    images.brain,
  ],
  [
    "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet.",
    images.laptop,
  ],
  [
    "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.",
    images.seminar,
  ],
  [
    "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises.",
    images.workshop,
  ],
  [
    "Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions.",
    images.award,
  ],
  [
    "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.",
    images.laptop,
  ],
];

export const schedule = [
  {
    title: "Registrations and Idea Submission Open",
    date: "Thu, Jul 04, 2026",
  },
  {
    title: "Introductory and Problem Statement Explainer Session",
    date: "Thu, Jul 08, 2026",
  },
  { title: "Mentor-Mentee Connects - Begins", date: "Thu, Jul 08, 2026" },
  { title: "Mentor-Mentee Connects - Ends", date: "Tue, Jul 16, 2026" },
];

export const rewards = [
  {
    title: "Mentorship from Experts",
    body: "Work under the guidance of domain professionals and technology mentors.",
  },
  {
    title: "Recognition and Internship Opportunities",
    body: "Outstanding performers may receive offers for internships or collaboration opportunities.",
  },
];

export const faqs = [
  [
    "Who can participate in the hackathon?",
    "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.",
  ],
  [
    "What should be the ideal team size?",
    "Each team must consist of 3 to 4 members, possibly from different colleges/universities.",
  ],
  [
    "What is the cost of participating?",
    "Participation is entirely free. No registration or submission fee is required.",
  ],
  [
    "Can a recent graduate participate?",
    "Only current students from the 2024-25 academic year are eligible.",
  ],
];

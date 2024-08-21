import Branding from "./assets/carissa_branding.jpg";
import Individal from "./assets/individual.jpg";
import Speaking from "./assets/speaking.jpg";
import Affordable from "./assets/affordable.jpg";

export const specialties = [
  "Cultural Identity",
  "Anger Management",
  "Anxiety",
  "Depression",
  "Life Transitions",
  "Personal Identity/GrowthSelf-Harm",
];

export const languages = ["english"];

export const clientFocus = ["Adult Therapy", "Individuals", "Teen Therapy"];

export const sessionFormats = {
  image: {
    alt: "session",
    img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  data: [
    {
      title: "INDIVIDUAL VIRTUAL THERAPY",
      img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$145",
      description:
        "You deserve a safe space to explore your identity and relationships, navigate life’s challenges, and experience growth and healing. ",
      topics: [],
    },
    {
      title: "SPEAKING",
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "",
      description:
        "I am passionate about increasing mental health awareness and making psychoeducation both informative and engaging. With experience in corporate wellness, I am available to speak with your team on a variety of topics, including: ",
      topics: [
        "Work-life balance",
        "Communication skills",
        "Team-building",
        "Stress and anxiety",
        "Diversity and inclusion",
        "Self-compassion",
        "Mindfulness",
      ],
    },
  ],
};

export const sessionFormats_2 = [
  {
    title: "INDIVIDUAL SESSIONS (VIRTUAL)",
    img: Individal,
    prices: [
      { price: "$145", time: "50 min" },
      { price: "$232", time: "80 min" },
    ],
    description:
      "You deserve a safe space to explore your identity and relationships, navigate life’s challenges, and experience growth and healing. ",
    topics: [],
  },

  {
    title: "AFFORDABLE THERAPY",
    img: Affordable,
    price: "",
    description:
      "I believe that everyone deserves access to quality counselling, regardless of financial circumstances. I offer a sliding scale option to a limited number of clients, allowing you to receive the support you need at a rate that fits your budget.",
    topics: [],
  },
  {
    title: "CORPORATE EVENT SPEAKING",
    img: Branding,
    price: "",
    description:
      "I am passionate about increasing mental health awareness and making psychoeducation both informative and engaging. With experience in corporate wellness, I am available to speak with your team on a variety of topics, including: ",
    topics: [
      "Work-life balance",
      "Communication skills",
      "Team-building",
      "Stress and anxiety",
      "Diversity and inclusion",
      "Self-compassion",
      "Mindfulness",
    ],
  },
];

export const therapies = [
  "Acceptance & Commitment Therapy",
  "Anti-Oppressive",
  "Attachment Based Therapy",
  "Dialectic Behaviour Therapy",
  "Emotionally Focused Therapy",
  "Humanistic",
  "Integrative or Holistic Therapy",
  "Internal Family Systems",
  "Interpersonal Therapy",
  "Mindfulness Approach",
  "Narrative Therapy",
  "Psychodynamic",
  "Strength Based",
  "Trauma Informed Therapy",
];

export const supportAreas = [
  "Academic Stress",
  "Anxiety",
  "Body Image",
  "Boundaries",
  "Co-Dependency",
  "Communication",
  "Cross Cultural Challenges",
  "Depression",
  "Divorce/Separation",
  "Family Conflict",
  "Grief/Loss",
  "Life Transitions",
  "Loneliness",
  "Men's Issues",
  "Parenting",
  "Personal Identity/Growth",
  "Racial/Ethnic Identity",
  "Relationship Concerns",
  "Religious Identity",
  "Self-Esteem/Self-Worth",
  "Self-Harm",
  "Social Anxiety",
  "Stress/Burnout",
  "Suicidal Ideation",
  "Trauma",
  "Woman's Issues",
  "Work-Life Balance",
];

export const education = [
  {
    year: "2020 - 2023",
    title: "MASTER OF ARTS: COUNSELLING PSYCHOLOGY",
    location: "Trinity Western University | Langley, BC",
  },
  {
    year: "2019 - 2020",
    title: "ONTARIO GRADUATE CERTIFICATE: ADDICTIONS AND MENTAL HEALTH",
    location: "Humber College | Toronto, ON",
  },
  {
    year: "2014 - 2018",
    title: "BACHELOR OF SCIENCE: PSYCHOLOGY MAJOR, BIOLOGY MINOR",
    location: "University of Waterloo | Waterloo, ON",
  },
];

export const experience = [
  {
    year: "2020 - Present",
    title: "WELLNESS SPECIALIST",
    location: "Concentrix | Mississauga, ON",
  },
  {
    year: "2019 - 2020",
    title: "REGISTERED PSYCHOTHERAPIST",
    location: "Healing Roots Therapy | Mississauga, ON",
  },
];

export const certifications = [
  {
    year: "2021",
    title: "Accelerated Experiential Dynamic Psychotherapy (AEDP) Level 1",
    location: "Mississauga, ON",
  },
  {
    year: "2019 - 2020",
    title: "Applied Suicide Intervention Skills Training (ASIST)",
    location: "Mississauga, ON",
  },
];

import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sif-engine",
    title: "SIF Engine",
    tagline: "AI-Powered Industrial Safety Intelligence",
    shortDescription: "An AI/NLP system designed to analyze unsafe-act and near-miss reports to identify potential serious injury and fatality (SIF) precursors.",
    overview: "SIF Engine is a machine learning safety intelligence tool tailored for industrial environments. It parses unstructured, human-written incident reports and classifies hazardous scenarios to alert safety managers to high-severity risks before incidents escalate.",
    problemStatement: "Industrial safety teams manually review hundreds of daily near-miss and unsafe-condition logs. Subtle linguistic cues indicating high-severity precursors are frequently overlooked in massive textual data, risking preventable industrial accidents.",
    solutionApproach: "Built an end-to-end NLP and classification pipeline using FastAPI and custom spaCy / Sentence Transformer embeddings paired with Scikit-learn logistic regression models. The system evaluates incoming reports in real time, scores precursors, and presents risk indicators on a review dashboard.",
    architectureDiagram: [
      "Unstructured Safety Reports",
      "Text Preprocessing & Tokenization (spaCy)",
      "NLP & Feature Extraction (Sentence Transformers)",
      "ML Classification (Scikit-learn Logistic Regression)",
      "Risk Score & Precursor Extraction Engine",
      "FastAPI REST Endpoints",
      "React Safety Intelligence Dashboard"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "spaCy",
      "Scikit-learn",
      "Sentence Transformers",
      "SQLite",
      "React",
      "Tailwind CSS"
    ],
    status: "Completed",
    isFeatured: true,
    githubUrl: "https://github.com/amjadakdas-beep/sif-engine",
    demoUrl: undefined,
    features: [
      "Safety report severity classification",
      "SIF precursor identification via NLP",
      "Unsafe act & condition hazard tagging",
      "Interactive human review workflow dashboard",
      "FastAPI REST backend with SQLite persistence"
    ],
    technicalDecisions: [
      "Selected Logistic Regression over deep networks due to high interpretability for safety domain auditors.",
      "Used spaCy pipelines for custom domain entity recognition and noise reduction.",
      "Implemented SQLite with FastAPI to ensure low-latency operations and simple deployment."
    ],
    limitations: [
      "Model outputs serve as advisory indicators for safety officers, not automated replacements for qualified site inspections.",
      "Requires domain-specific retraining for highly specialized industrial sub-sectors."
    ],
    futureRoadmap: [
      "Multi-language incident report support (Hindi + English code-mixed text).",
      "Integration with enterprise safety management software via Webhooks."
    ]
  },
  {
    slug: "hotel-booking",
    title: "Hotel Booking System",
    tagline: "Full-Stack Room Reservation & Management Workflow",
    shortDescription: "A full-stack web platform managing hotel property discovery, room availability, and user reservation workflows.",
    overview: "A comprehensive booking portal that handles user authentication, real-time room availability filtering, and structured reservation logic with a responsive user interface.",
    problemStatement: "Demonstrating clean web architecture, robust database models, and safe user authentication patterns in full-stack e-commerce environments.",
    solutionApproach: "Engineered a scalable RESTful backend in Node.js with MongoDB and JWT auth, paired with a React and Vite frontend using state-driven UI patterns.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    status: "Completed",
    isFeatured: true,
    githubUrl: "https://github.com/amjadakdas-beep/hotel-booking-system",
    features: [
      "JWT-based user authentication and route protection",
      "Dynamic search and price/amenity filtering",
      "Room booking confirmation and record management",
      "Responsive admin/user interfaces"
    ],
    technicalDecisions: [
      "Used JWT stored securely to maintain user session state across routes.",
      "Implemented MongoDB schemas with index optimization for room availability queries."
    ],
    limitations: [
      "Demonstrational payment workflow integration without live payment gateway hooks."
    ],
    futureRoadmap: [
      "Integration with Stripe test API for card processing simulation.",
      "Automated email confirmations via Nodemailer."
    ]
  },
  {
    slug: "url-shortener",
    title: "URL Shortener Engine",
    tagline: "High-Performance Link Management Tool",
    shortDescription: "A lightweight backend service designed for fast URL compression, redirection, and validation.",
    overview: "A utility service that generates unique short keys for complex Web links and provides instantaneous redirection while validating incoming URLs.",
    problemStatement: "Creating an efficient key-generation algorithm with low database read latency and reliable input sanitization.",
    solutionApproach: "Created a Node.js REST service implementing key generation alongside URL validation routines.",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML5/CSS3"],
    status: "Completed",
    isFeatured: false,
    githubUrl: "https://github.com/amjadakdas-beep/url-shortener",
    features: [
      "Instant custom & randomized short link creation",
      "Automated HTTP redirect handling",
      "Malicious URL pattern sanitization",
      "Clean web UI for generation"
    ],
    technicalDecisions: [
      "Used Base62 encoding strategy to generate short, collision-resistant string keys."
    ],
    limitations: [
      "Basic analytics; does not log deep geo-IP metrics."
    ],
    futureRoadmap: [
      "Click count analytics per shortened link.",
      "Custom alias reservation support."
    ]
  },
  {
    slug: "campusconnect",
    title: "CampusConnect",
    tagline: "Student Collaboration & Resource Hub",
    shortDescription: "A modern platform for computer science students to collaborate, share academic resources, and network.",
    overview: "A student-centric application aimed at bringing together CSE students for technical peer-learning, project partner search, and resource distribution.",
    problemStatement: "CS students often lack centralized platforms tailored specifically for peer project discovery and shared technical study materials.",
    solutionApproach: "Developing a web interface centered around community posts, project team recruiting, and shared resource tags.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "In Progress",
    isFeatured: false,
    githubUrl: "https://github.com/amjadakdas-beep/campusconnect",
    features: [
      "Student account registration with college affiliation",
      "Technical project collaboration posts",
      "Resource link bookmarking and category filtering"
    ],
    technicalDecisions: [
      "Designed modular React client architecture to easily attach real-time features later."
    ],
    limitations: [
      "Active development state; user direct messaging in progress."
    ],
    futureRoadmap: [
      "Real-time chat channels using Socket.io.",
      "Peer code review request board."
    ]
  }
];
export type TrackId = typeof trackIds[number];
export type TrackDescription = typeof trackDescriptions[TrackId];

export const trackIds = [
  "mobile",
  "front-end",
  "back-end",
  "dev-ops",
  "data engineer",
  "quality",
  "security engineer",
  "project management",
  "communication",
  "craft",
  "initiative",
  "career development",
  "org design",
  "well-being",
  "accomplishment",
  "mentorship",
  "evangelism",
  "recruiting",
  "community",
] as const;

export const trackDescriptions = {
  mobile:
    "Develops expertise in native mobile platform engineering, such as iOS or Android",
  "front-end":
    "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
  "back-end":
    "Develops expertise in server side engineering, using technologies such as PHP and Go",
  "dev-ops":
    "Develops expertise in foundational systems, such as deployments, pipelines and databases",
  "data engineer":
    "Develops expertise in data pipelines, optimization of computation on distributed systems",
  quality:
    "Develops expertise in quality such code health, testability, automation framework and pipeline all levels (Unit, Integration, End-to-end, and Performance)",
  "security engineer":
    "Responsible for the implementation, administration and monitoring of security tools, enforcing of the security polices, determines potential security risks and asures compliance with requirements of security audits and recommendations.",
  "project management":
    "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
  communication:
    "Shares the right amount of information with the right people, at the right time, and listens effectively",
  craft:
    "Embodies and promotes practices to ensure excellent quality products and services",
  initiative:
    "Challenges the status quo and effects positive organizational change outside of mandated work",
  "career development":
    "Provides strategic support to engineers to help them build the career they want",
  "org design":
    "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
  "well-being":
    "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
  accomplishment:
    "Inspires day to day excellence, maximizes potential and effectively resolves performance issues with compassion",
  mentorship:
    "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
  evangelism:
    "Promotes Ankorstore to the outside world and establishes it as an attractive and thoughtful place to work",
  recruiting:
    "Strengthens Ankorstore's team by bringing in excellent staff members",
  community:
    "Builds community internally, gives of themself to the team, and champions and extols company values",
} as const;


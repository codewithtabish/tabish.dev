export type Skill = {
  title: string
  description: string
  icon: string
}

export type SkillContent = {
  language: string
  title: string
  subtitle: string
  skills: Skill[]
}

export const skillContentArray: SkillContent[] = [
  {
    language: "English",
    title: "My Technical Skills",
    subtitle:
      "I build robust, scalable systems across multiple platforms and languages. Here are the core technologies and domains I specialize in:",
    skills: [
      {
        title: "Android Development",
        description:
          "Native Android apps using Java/Kotlin. Experience with UI/UX, REST APIs, and Play Store deployment.",
        icon: "Android",
      },
      {
        title: "Backend Engineering (FastAPI)",
        description:
          "Production-grade APIs and microservices in Python with FastAPI. Async, secure, and high-performance.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning & NLP",
        description:
          "ML pipelines, NLP models, and data science using Python, scikit-learn, spaCy, and more.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description:
          "Containerization, CI/CD, and scalable deployments using Docker, Compose, and best DevOps practices.",
        icon: "Docker",
      },
      {
        title: "Cloud & AWS",
        description:
          "Deploying, scaling, and managing cloud infrastructure on AWS. EC2, S3, Lambda, and more.",
        icon: "AWS",
      },
      {
        title: "Linux & System Admin",
        description:
          "Linux server management, automation, and shell scripting for reliable backend operations.",
        icon: "Linux",
      },
    ],
  },
]

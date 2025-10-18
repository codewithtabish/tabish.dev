import { ExperienceItemType } from "@/components/work-experience";

export const workExperiences: ExperienceItemType[] = [
  {
    id: "cheetatech",
    companyName: "CheetaTech",
    companyLogo: "/images/cheetatech-logo.png", // optional: replace with actual logo path or remove
    isCurrentEmployer: true,
    positions: [
      {
        id: "web-developer",
        title: "Web Developer",
        employmentPeriod: "Jan 2023 - Aug 2023",
        employmentType: "Full-time",
        icon: "code",
        description: `
I worked on building responsive and high-performance web applications using **Next.js**, **Tailwind CSS**, and **TypeScript**.  
Collaborated closely with designers to ensure a smooth user experience and improved site performance by 40%.
        `,
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
        isExpanded: false,
      },
      {
        id: "react-native-developer",
        title: "React Native Developer",
        employmentPeriod: "Sep 2023 - Mar 2024",
        employmentType: "Full-time",
        icon: "code",
        description: `
Developed cross-platform mobile apps using **React Native**, integrated with **Firebase** and **REST APIs**.  
Implemented reusable UI components and enhanced app stability and performance.
        `,
        skills: ["React Native", "Firebase", "Redux", "REST API"],
        isExpanded: false,
      },
      {
        id: "backend-developer",
        title: "Backend Developer",
        employmentPeriod: "Apr 2024 - Present",
        employmentType: "Full-time",
        icon: "business",
        description: `
Designed and developed robust backend services using **Node.js**, **Express**, and **PostgreSQL**.  
Integrated **Prisma ORM** and implemented background jobs using **BullMQ** and **Redis** to optimize performance.
        `,
        skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
        isExpanded: true,
      },
    ],
  },
];

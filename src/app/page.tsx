"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  // const initialProjectCount = 2;
  // const visibleProjects = isProjectsExpanded ? projects : projects.slice(0, initialProjectCount);
  const visibleProjects = projects;

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const initialExperienceCount = 2;
  const visibleExperience = isExperienceExpanded
    ? experience
    : experience.slice(0, initialExperienceCount);

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-12">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
              <span>Hey, I&apos;m Rohit</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
              Full stack developer building scalable SaaS products and web apps.
              4x hackathon winner, freelancer, and dev community leader
              passionate about impactful tech.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.2}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.3}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Projects
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleProjects.map((project, index) => {
                // const delay = 0.3 + (index < initialProjectCount ? index : index - initialProjectCount) * 0.1;
                const delay = 0.3 + index * 0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">{project.title}</h3>
                        <div className="flex flex-row gap-2">
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              View <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                            {techIndex < project.technologies.length - 1
                              ? " /"
                              : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {/* {projects.length > initialProjectCount && (
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isProjectsExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Projects <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )} */}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.4}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.5}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Experience
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleExperience.map((job, index) => {
                const delay =
                  0.5 +
                  (index < initialExperienceCount
                    ? index
                    : index - initialExperienceCount) *
                    0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">
                          {job.role} {job.role === "Freelance" ? "" : "at"}{" "}
                          {job.company}
                        </h3>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                          >
                            {tech}
                            {techIndex < job.technologies.length - 1
                              ? " /"
                              : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {experience.length > initialExperienceCount && (
              <button
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isExperienceExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Experience <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.6}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.7}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">
              Tools & Stack
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4">
            {tools.map(({ logo, title }, index) => (
              <AnimateIn key={index} variant="scale" delay={0.7 + index * 0.03}>
                <div className="flex flex-col items-center group">
                  <div className="relative h-6 w-6 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Image
                      src={logo}
                      alt={`${title} logo`}
                      fill
                      className="object-contain drop-shadow-md"
                      loading="eager"
                    />
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
                    {title}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Rohit Debnath</div>
          <div>Built with 🤍</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "lolurl.site",
    description:
      "A tool for tracking and analyzing URL engagement, providing actionable insights for marketers.",
    link: "https://lolurl.site",
    github: "https://github.com/Rohit-Dnath/LOL-URL",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
    ],
  },
  {
    title: "CodeResQ",
    description:
      "A VS Code extension that scans code for vulnerabilities, checks complexity, and refactors Python, TypeScript, and JavaScript code in real time.",
    github: "https://github.com/Rohit-Dnath/CodeResQ",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Python",
      "VS Code API",
      "Node.js",
      "Docker",
    ],
  },
  {
    title: "WebNetr",
    description:
      "A browser extension to detect and block dark patterns, helping users avoid online manipulation.",
    github: "https://github.com/Rohit-Dnath/WebNetr-Anti-Manipulation-Brigade",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
  },
  {
    title: "Minimalistic Portfolio Website",
    description:
      "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
    link: "https://lolurl.site/rohit-portfolio",
    github: "https://github.com/Rohit-Dnath/minimalistic-portfolio-2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Parakrama Card Battle Game",
    description:
      "A dynamic card battle game featuring health bars, turn-based logic, and engaging gameplay, built on CodeCircuit virtual hackathon organized by Outlier.ai.",
    link: "https://parakrama-card-game.vercel.app/",
    github: "https://github.com/Rohit-Dnath/parakrama-card-game",
    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Error HTTP Cats",
    description:
      "This project allows you to retrieve cat images associated with different HTTP error codes. Enjoy a fun and entertaining way to visualize HTTP errors with adorable cat pictures.",
    link: "https://error-cat-rohitdnath-project.netlify.app/",
    github: "https://github.com/Rohit-Dnath/ERROR-CAT---Fun-Project",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Koi Mil Gaya - Alien Calling Simulator",
    description:
      "A Simulator inspired from the Movie 'Koi Mil Gaya', where you can call Aliens.",
    link: "https://65847c6f727b00df6f888c0b--jaddoo-by-rohitdebnath.netlify.app/",
    github: "https://github.com/Rohit-Dnath/Jadoo-Bulao-Project",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Everywhere Poop(Fun Chrome Extension)",
    description:
      "A funny Chrome Extension If you want to see poop everywhere in your browser.",
    github: "https://github.com/Rohit-Dnath/Everywhere-Poop-Fun-Chrome-Extension-",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

const experience = [
  {
    role: "Backend Developer Intern (Remote)",
    company: "Styflowne Finance Services Private Limited",
    period: "Aug 2023 - Jan 2024",
description:
  "I designed and implemented the database and backend architecture for Earnifyy, leveraging MongoDB for robust data management. I streamlined the payment tracking and user authentication systems, which resulted in a 40% reduction in processing times. Additionally, I focused on enhancing the platform's reliability, leading to fewer technical issues, particularly during peak usage times.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  // {
  //   role: "Freelance Developer",
  //   period: "Mar 2024 - May 2025",
  //   description:
  //     "Delivering custom web solutions for diverse clients, specialising in e-commerce platforms, content management systems, and business automation tools.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Postgres",
  //     "MongoDB",
  //     "PayloadCMS",
  //     "Google APIs",
  //   ],
  // },
  {
    role: "Tech Intern (Remote)",
    company: "inlane.in",
    period: "May 2025 - Jun 2025",
    description:
      "Improved Inlane.in's web app by fixing key bugs and optimizing the backend for smoother performance, while collaborating with teams to enhance scalability and make the platform launch-ready.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "Supabase", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "AIRL by Morning Bay Confitech",
    period: "Jun 2020 - Present",
    description:
      "I’m leading enterprise client projects, focusing on interactive UI and better user experience. Worked on making the design responsive and faster, which helped reduce load times by 30% and improve engagement. Also teamed up with different departments to make sure everything matched the client’s needs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    role: "Core Member",
    company: "devdotcom.in",
    period: "Jan 2025 - Present",
    description:
      "I coordinated over 5+ events to foster developer engagement and knowledge sharing within the Community. To enhance the overall event experience, I implemented a structured feedback system, which led to a 25% increase in event satisfaction scores.",
    technologies: ["Communication Skills", "Leadership", "Event Management", "Community Building", "Team Collaboration"],
  },
];

const tools = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "NextJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    title: "React Router",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "Typescript",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'><path fill='%232395ec' d='M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z'></path><path fill='%232395ec' d='M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z'></path><path fill='%232395ec' d='M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z'></path><path fill='%232395ec' d='M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z'></path><path fill='%232395ec' d='M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z'></path><path fill='%232395ec' d='M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z'></path><path fill='%232395ec' d='M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z'></path><path fill='%232395ec' d='M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z'></path><path fill='%232395ec' d='M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z'></path><path fill='%232395ec' d='M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z'></path></svg>",
    title: "Docker",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 50 50'><path d='M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z'></path></svg>",
    title: "ExpressJS",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'><path fill='%2300549d' fill-rule='evenodd' d='M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z' clip-rule='evenodd'></path><path fill='%230086d4' fill-rule='evenodd' d='M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z' clip-rule='evenodd'></path><path fill='%23fff' fill-rule='evenodd' d='M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z' clip-rule='evenodd'></path><path fill='%230075c0' fill-rule='evenodd' d='M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z' clip-rule='evenodd'></path><path fill='%23fff' fill-rule='evenodd' d='M31 21H33V27H31zM38 21H40V27H38z' clip-rule='evenodd'></path><path fill='%23fff' fill-rule='evenodd' d='M29 23H35V25H29zM36 23H42V25H36z' clip-rule='evenodd'></path></svg>",
    title: "C++",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    title: "Bun",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'><path fill='%235d4037' d='M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z'></path><path fill='%234caf50' d='M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z'></path><path fill='%23dcedc8' d='M23 28H25V36H23z'></path><path fill='%234caf50' d='M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z'></path><path fill='%2381c784' d='M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z'></path></svg>",
    title: "MongoDB",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'><g id='Ð¡Ð»Ð¾Ð¹_1'><linearGradient id='SVGID_1__sH0rW2TvYdr9_gr1' x1='14.073' x2='14.073' y1='8.468' y2='36.033' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='%237dffce'></stop><stop offset='1' stop-color='%2350c08d'></stop></linearGradient><path fill='url(%23SVGID_1__sH0rW2TvYdr9_gr1)' d='M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z'></path><linearGradient id='SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2' x1='34.249' x2='34.249' y1='48.404' y2='19.425' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='%237dffce'></stop><stop offset='1' stop-color='%2350c08d'></stop></linearGradient><path fill='url(%23SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)' d='M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z'></path></g></svg>",
    title: "Supabase",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    title: "Vercel",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "TailwindCSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "GIT",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
  },
];

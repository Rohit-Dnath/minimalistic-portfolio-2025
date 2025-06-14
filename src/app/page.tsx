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
          <div>ahmet.studio</div>
          <div>Built with Next.js</div>
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
];

const experience = [
  {
    role: "Software Engineer",
    company: "Zero Email Inc. (US, remote)",
    period: "Feb 2025 - Present",
    description:
      "Software engineer responsible for core features and performance optimisations for an innovative AI-powered email client, focusing on intelligent email processing and real-time collaboration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
      "Google APIs",
    ],
  },
  {
    role: "Freelance Developer",
    period: "Mar 2024 - May 2025",
    description:
      "Delivering custom web solutions for diverse clients, specialising in e-commerce platforms, content management systems, and business automation tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
      "MongoDB",
      "PayloadCMS",
      "Google APIs",
    ],
  },
  {
    role: "Front End Developer",
    company: "Executives Place",
    period: "Oct 2023 - Feb 2024",
    description:
      "Developed and maintained multiple features for the SaaS product, from performance improvements to new features.",
    technologies: ["Vue.js", "Node.js", "Laravel", "SQL"],
  },
  {
    role: "Full Stack Developer",
    company: "XLN Telecom (Daisy Comms)",
    period: "Nov 2020 - Aug 2023",
    description:
      "Developed and maintained the company brochure site to guide and increase sales.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "SQL",
      "MongoDB",
      "C#",
      "ASP.NET",
      "WordPress",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Absowebly",
    period: "Jul 2018 - Sep 2018",
    description:
      "Developing and maintaining client websites with a proprietary CMS.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Sass"],
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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    title: "VueJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    title: "NuxtJS",
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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
    title: "TRPC",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    title: "Google Cloud",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "AWS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    title: "Bun",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    title: "Cloudflare",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    title: "Vercel",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    title: "Sass",
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
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    title: "Sketch",
  },
];

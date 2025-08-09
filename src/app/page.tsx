"use client";

import SocialMedia from "@/components/SocialMedia";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { Tooltip } from "@/components/Tooltip";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function Home() {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const initialProjectCount = 3;
  const visibleProjects = isProjectsExpanded
    ? projects
    : projects.slice(0, initialProjectCount);

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const initialExperienceCount = 2;
  const visibleExperience = isExperienceExpanded
    ? experience
    : experience.slice(0, initialExperienceCount);
  const handleHeartRain = () => {
    const duration = 3000; // 3 seconds
    const animationEnd = Date.now() + duration;

    // Create a custom heart shape
    const heartShape = confetti.shapeFromText({ text: "🤍", scalar: 2 });

    // Raining effect - hearts falling from top of screen
    const rainConfetti = () => {
      confetti({
        particleCount: 3,
        startVelocity: 0,
        ticks: 300,
        gravity: 0.5,
        origin: {
          x: Math.random(),
          y: -0.1, // Start from above the screen
        },
        shapes: [heartShape],
        scalar: 1.5,
        drift: Math.random() - 0.5, // Add some horizontal drift
        colors: ["#ffffff", "#f8fafc", "#f1f5f9"],
      });
    };

    // Create continuous rain effect
    const rainInterval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(rainInterval);
        return;
      }

      // Create multiple hearts at different positions
      for (let i = 0; i < 5; i++) {
        setTimeout(() => rainConfetti(), i * 100);
      }
    }, 200);

    // Initial burst for immediate effect
    for (let i = 0; i < 20; i++) {
      setTimeout(() => rainConfetti(), i * 50);
    }
  };
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-2">
      <AnimateIn variant="fadeUp">
        {" "}
        {/* Spotify Music Section */}{" "}
        <section className="mb-3">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-glow-effect">
              <div className="pt-2 px-2 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.479.359-.78.719-.84 4.561-1.021 8.52-.621 11.64 1.32.42.18.479.659.301 1.02l-.238.061zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.481.78.241 1.2zm.120-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  <h2 className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Vibing to while I code
                  </h2>
                </div>
                <div className="overflow-hidden rounded-md">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "6px" }}
                    src="https://open.spotify.com/embed/playlist/3dnp38WpvYW4f3EWdoDFej?utm_source=generator&theme=0"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full min-h-[80px]"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimateIn>
        </section>        <section className="mb-10">          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-3">
              <span>Hey, I&apos;m Rohit ᯓᡣ𐭩</span>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-5">
              Full stack developer building scalable SaaS products and web apps.
              4x hackathon winner, freelancer, and dev community leader
              passionate about impactful tech.
            </p>
          </AnimateIn>{" "}          <AnimateIn variant="fadeUp" delay={0.5}>
            <div className="flex items-center gap-2 mb-5">
              <Tooltip content="Some of my Random awesome memories">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Gallery
                </Link>
              </Tooltip>{" "}
              <Tooltip content="Hire me please 🥺">
                <a
                  href="https://lolurl.site/resume-jun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </a>
              </Tooltip>
            </div>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>{" "}
        </section>
      </AnimateIn>      <AnimateIn variant="fadeUp" delay={0.2}>
        <section className="mb-10">
          <AnimateIn variant="reveal" delay={0.25}>
            <h2 className="text-lg font-medium tracking-tight mb-3 inline-block">
              Education▼
            </h2>
          </AnimateIn>
          <div className="space-y-6">
            <AnimateIn variant="fadeLeft" delay={0.3}>
              <div className="group hover:translate-x-1 transition-all duration-300 ease-out">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-md font-medium">
                    Bachelor of Technology in Computer Science & Engineering
                    (AI/ML)
                  </h3>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    2023 - 2027
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  JIS College of Engineering, Kalyani, West Bengal
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>
      </AnimateIn>      <AnimateIn variant="fadeUp" delay={0.3}>
        <section className="mb-10">
          <AnimateIn variant="reveal" delay={0.35}>
            <h2 className="text-lg font-medium tracking-tight mb-3 inline-block">
              Projects▼
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            {" "}
            <ul className="space-y-8">
              {visibleProjects.map((project, index) => {
                const delay =
                  isProjectsExpanded && index >= initialProjectCount
                    ? 0.35 + (index - initialProjectCount) * 0.1
                    : 0.35 + index * 0.1;
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
            {projects.length > initialProjectCount && (
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
            )}
          </div>
        </section>
      </AnimateIn>{" "}      <AnimateIn variant="fadeUp" delay={0.4}>
        <section className="mb-10">
          <AnimateIn variant="reveal" delay={0.45}>
            <h2 className="text-lg font-medium tracking-tight mb-3 inline-block">
              Experience▼
            </h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleExperience.map((job, index) => {
                const delay =
                  0.45 +
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
      </AnimateIn>{" "}      <AnimateIn variant="fadeUp" delay={0.6}>
        <section className="mb-10">
          <AnimateIn variant="reveal" delay={0.65}>
            <h2 className="text-lg font-medium tracking-tight mb-3 inline-block">
              Tools & Stack▼
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4">
            {tools.map(({ logo, title }, index) => (
              <AnimateIn
                key={index}
                variant="scale"
                delay={0.65 + index * 0.03}
              >
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
      </AnimateIn>{" "}      <AnimateIn variant="fadeUp" delay={0.8}>
        <section className="mb-10">
          <AnimateIn variant="reveal" delay={0.85}>
            <h2 className="text-lg font-medium tracking-tight mb-3 inline-block">
              Achievements▼
            </h2>
          </AnimateIn>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <AnimateIn
                key={index}
                variant="fadeLeft"
                delay={0.85 + index * 0.1}
              >
                <div className="group hover:translate-x-1 transition-all duration-300 ease-out">
                  <div className="flex items-start gap-3">
                    {/* <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                      🏆
                    </div> */}
                    <div>
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {achievement.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>{" "}      <AnimateIn variant="fadeUp" delay={1.0}>
        <section className="mb-8">
          <AnimateIn variant="reveal" delay={1.05}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-2xl font-bold tracking-tight mb-3">
                Get in Touch
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                DM me on{" "}
                <a
                  href="https://lolurl.site/rohitx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  X (twitter)
                </a>
                {" or "}
                <a
                  href="https://lolurl.site/rohitli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  LinkedIn
                </a>{" "}
                if you want to chat or hire me for internship or freelance. No
                spam I repeat no crypto pitches :D
              </p>
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>      <AnimateIn variant="fadeUp" delay={1.2}>
        {" "}
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center relative">
          {/* Dynamic Lighting Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Primary light beam */}
            <div className="absolute left-1/4 top-1/2 w-32 h-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-blue-500/15 blur-sm animate-light-sweep-1"></div>
            {/* Secondary light beam */}
            <div className="absolute right-1/4 top-1/2 w-28 h-6 -translate-y-1/2 bg-gradient-to-l from-transparent via-purple-400/15 to-transparent dark:via-purple-500/10 blur-sm animate-light-sweep-2"></div>
            {/* Ambient glow */}
            <div className="absolute left-1/2 top-1/2 w-64 h-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent dark:via-pink-500/8 blur-md animate-light-pulse"></div>
          </div>
          
          <Link
            href="#"
            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors flex items-center gap-2 relative z-10"
          >
            Rohit Debnath
            {/* <ArrowUpRight className="w-3 h-3 transform rotate-12" /> */}
          </Link>
          <Tooltip content="Click for some love rain!">
            <div
              onClick={handleHeartRain}
              className="cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors select-none hover:scale-105 transform duration-200 relative z-10"
            >
              Built with <span className="text-lg">♥</span>
            </div>
          </Tooltip>
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
    title: "Goosy",
    description:
      "A VS Code extension that scans code for vulnerabilities, checks complexity, and refactors Python, TypeScript, JavaScript, C++ and Java code in real time.",
    link: "https://marketplace.visualstudio.com/items?itemName=null0x.goosy",
    // github: "https://github.com/Rohit-Dnath/Goosy",
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
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Error HTTP Cats",
    description:
      "This project allows you to retrieve cat images associated with different HTTP error codes. Enjoy a fun and entertaining way to visualize HTTP errors with adorable cat pictures.",
    link: "https://error-cat-rohitdnath-project.netlify.app/",
    github: "https://github.com/Rohit-Dnath/ERROR-CAT---Fun-Project",
    technologies: ["HTML", "CSS", "JavaScript"],
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
    github:
      "https://github.com/Rohit-Dnath/Everywhere-Poop-Fun-Chrome-Extension-",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const experience = [
  // {
  //   role: "SDE — Part-Time Remote (USA)",
  //   company: "sparkmentis.ai",
  //   period: "July 2025 - Present",
  //   description:
  //     "Currently working at Sparkmentis.ai, building an AI-powered student management SaaS platform for colleges and schools. Using Next.js, Tailwind CSS, Prisma, and NeonDB, I develop and maintain scalable services and optimize database performance to ensure the platform seamlessly supports growing user demand.",
  //   technologies: [
  //     "React",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //   ],
  // },
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
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Supabase",
      "Docker",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "AIRL by Morning Bay Confitech",
    period: "Jun 2020 - Present",
    description:
      "I’m leading enterprise client projects, focusing on interactive UI and better user experience. Worked on making the design responsive and faster, which helped reduce load times by 30% and improve engagement. Also teamed up with different departments to make sure everything matched the client’s needs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Core Member",
    company: "DevDotCommunity",
    period: "Jan 2025 - Present",
    description:
      "I coordinated over 5+ events to foster developer engagement and knowledge sharing within the Community. To enhance the overall event experience, I implemented a structured feedback system, which led to a 25% increase in event satisfaction scores.",
    technologies: [
      "Communication Skills",
      "Leadership",
      "Event Management",
      "Community Building",
      "Team Collaboration",
    ],
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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 80 80'><path fill='%23b0c1d4' d='M74.01,62.5c-1.795,0-3.517-0.852-4.607-2.277L57.807,45.06L46.211,60.223 c-1.09,1.426-2.812,2.277-4.607,2.277h-3.428L54.66,40.944L38.261,19.5h3.428c1.795,0,3.518,0.851,4.607,2.276l11.51,15.052 l11.51-15.052c1.09-1.426,2.812-2.276,4.607-2.276h3.428L60.954,40.944L77.438,62.5H74.01z'></path><path fill='%2366798f' d='M76.341,20L60.324,40.944L76.426,62H74.01c-1.651,0-3.207-0.769-4.21-2.081L57.807,44.237 L45.814,59.919C44.811,61.231,43.254,62,41.604,62h-2.417l16.102-21.056L39.273,20h2.417c1.651,0,3.207,0.769,4.21,2.276 l11.907,15.571l11.907-15.571C70.717,20.769,72.273,20,73.924,20H76.341 M78.364,19h-2.024h-2.417c-1.949,0-3.82,0.925-5.005,2.473 L57.807,36.005L46.694,21.473C45.51,19.925,43.639,19,41.689,19h-2.417h-2.024l1.229,1.607L54.03,40.944L38.393,61.393L37.163,63 h2.024h2.417c1.949,0,3.82-0.925,5.005-2.473l11.198-14.644l11.198,14.644C70.189,62.075,72.06,63,74.01,63h2.417h2.024 l-1.229-1.607L61.583,40.944l15.552-20.337L78.364,19L78.364,19z'></path><g><path fill='%23b0c1d4' d='M20,64.5c-10.201,0-18.5-8.594-18.5-19.156v-8.689C1.5,26.093,9.799,17.5,20,17.5s18.5,8.593,18.5,19.154v7.845L6.5,44.5v0.844C6.5,53.15,12.556,59.5,20,59.5c4.111,0,8.093-2.067,10.653-5.529 c1.161-1.571,2.86-2.472,4.661-2.472h1.711l0.204,0.204l0.134,0.268l-0.075,0.203C34.571,59.547,27.624,64.5,20,64.5z M33.5,39.5 v-2.846C33.5,28.85,27.444,22.5,20,22.5S6.5,28.85,6.5,36.655V39.5H33.5z'></path><path fill='%2366798f' d='M20,18c9.925,0,18,8.369,18,18.654v7.345L6,44v1.344C6,53.426,12.28,60,20,60 c4.376,0,8.446-2.203,11.055-5.732c1.016-1.374,2.55-2.269,4.259-2.269l1.505,0C36.819,52,36.819,52,36.819,52.001 C34.175,59.176,27.411,64,20,64c-9.925,0-18-8.369-18-18.656v-8.689C2,26.369,10.075,18,20,18 M6,40h28v-3.346 C34,28.574,27.72,22,20,22S6,28.574,6,36.654V40 M20,17C9.523,17,1,25.817,1,36.654v8.689C1,56.182,9.523,65,20,65 c7.832,0,14.968-5.085,17.758-12.653l0.496-1.346l-1.435-0.002l-1.505,0c-1.961,0-3.806,0.975-5.063,2.675 C27.785,57.009,23.953,59,20,59c-7.168,0-13-6.126-13-13.656V45l31-0.001l1,0v-1v-7.345C39,25.817,30.477,17,20,17L20,17z M7,39 v-2.346C7,29.125,12.832,23,20,23s13,6.125,13,13.654V39H7L7,39z'></path></g></svg>",
    title: "Express.js",
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
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 48 48'><linearGradient id='N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1' x1='38.263' x2='10.15' y1='1373.62' y2='1342.615' gradientTransform='translate(0 -1333.89)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='%23823af3'></stop><stop offset='.36' stop-color='%234b66e1'></stop><stop offset='.906' stop-color='%2301f1c4'></stop></linearGradient><path fill='url(%23N8aMJ-jZ4-cfldZrsnvhda_iWw83PVcBpLw_gr1)' fill-rule='evenodd' d='M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z' clip-rule='evenodd'></path><path fill='%23fff' fill-rule='evenodd' d='M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378	c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372	c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902	c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962	c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034	c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026	c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584	c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141	c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098	c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425	c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062	c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673	c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991	c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283	c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328	c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865	c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752	c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62	c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408	c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318	c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398	c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718	c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018	c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228	c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654	c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01	c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301	c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045	c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035	c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629	c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018	c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159	C29.367,27.91,29.258,27.474,29.194,26.962L29.194,26.962z M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346	c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z' clip-rule='evenodd'></path></svg>",
    title: "Canva",
  },
  {
    logo: "data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100' height='100' viewBox='0 0 40.343 42'><g data-name='Ð¡Ð»Ð¾Ð¹ 2'><path fill='%232684ff' d='M20.172,27.858,13.314,21l6.858-6.858V0L.586,19.586a2,2,0,0,0,0,2.828L20.172,42s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z'></path><path fill='%231d78f2' d='M14.385,19.667l.131.131,5.656-5.656V0L9.571,10.6A20.2,20.2,0,0,0,14.385,19.667Z'></path><path fill='%23126ae5' d='M15.832,18.285l.1.1,4.242-4.242V0L11.306,8.866A18.21,18.21,0,0,0,15.832,18.285Z'></path><path fill='%230b60da' d='M20.172,14.142V0l-7,7a15.546,15.546,0,0,0,4.171,9.97Z'></path><path fill='%230154ce' d='M15.172,7c0,4.746,3.407,8.371,3.585,8.556l1.415-1.414V0L15.35,4.822A13.161,13.161,0,0,0,15.172,7Z'></path><path fill='%232482fd' d='M20.172,14.142,27.029,21l-6.857,6.858V42L39.757,22.414a2,2,0,0,0,0-2.828L20.172,0s-3,2-3,7A11.639,11.639,0,0,0,20.172,14.142Z'></path><path fill='%231d78f2' d='M25.958,22.333l-.131-.131-5.655,5.656V42l10.6-10.6A20.2,20.2,0,0,0,25.958,22.333Z'></path><path fill='%23126ae5' d='M24.511,23.715l-.1-.1-4.241,4.242V42l8.866-8.866A18.216,18.216,0,0,0,24.511,23.715Z'></path><path fill='%230b60da' d='M20.172,27.858V42l7-7A15.545,15.545,0,0,0,23,25.03Z'></path><path fill='%230154ce' d='M25.172,35c0-4.746-3.407-8.371-3.586-8.556l-1.414,1.414V42l4.822-4.822A13.27,13.27,0,0,0,25.172,35Z'></path><path fill='%232684ff' d='M20.172,27.858,13.314,21H2.172v3l18,18s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z'></path></g></svg>",
    title: "Jira",
  },
];

const achievements = [
  {
    title: "Grand Finalist",
    event:
      "Dark Patterns Buster Hackathon 2023 organized by Govt. of India and IIT BHU",
  },
  {
    title: "2nd Runner-Up",
    event: "Trithon Triplets Hackathon 2023 organized by TAT Bhubaneshwar",
  },
  {
    title: "2nd Runner-Up",
    event: "MLH Diversion 2025",
  },
  {
    title: "1st Place",
    event: "Binary Hackathon 2025 organized by KGEC",
  },
  {
    title: "1st Place",
    event:
      "Won App Development 12 hour Hackathon call App-e-teaser in Our College Tech Fest",
  },
];

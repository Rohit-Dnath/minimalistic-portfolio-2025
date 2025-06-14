"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Links() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16 flex flex-col min-h-screen">
      <div className="flex-1">
        <AnimateIn variant="fadeUp">
          <section className="mb-12">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
                <span>some of my useful links</span>
                <ThemeToggle />
              </h1>
            </AnimateIn>
          </section>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="space-y-4 mb-8">
            {projectLinks.map((link, index) => (
              <AnimateIn key={link.name} variant="fadeLeft" delay={0.4 + index * 0.1}>
                <div className="group hover:translate-x-1 transition-all duration-300 ease-out">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-md font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    onClick={() => track(`link_clicked_${link.name.toLowerCase()}`)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.6}>
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <AnimateIn key={link.name} variant="fadeLeft" delay={0.6 + index * 0.1}>
                <div className="group hover:translate-x-1 transition-all duration-300 ease-out">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-md font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    onClick={() => track(`link_clicked_${link.name.toLowerCase()}`)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>

      <AnimateIn variant="fadeUp" delay={1.0}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Rohit Debnath</div>
          <div>Built with 🤍</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projectLinks = [
  {
    name: "lolurl.site",
    url: "https://lolurl.site",
  },
  {
    name: "Parakrama Card Battle Game",
    url: "https://parakrama-card-game.vercel.app/",
  },
  {
    name: "Error HTTP Cats",
    url: "https://error-cat-rohitdnath-project.netlify.app/",
  },
];

const socialLinks = [
  {
    name: "Portfolio",
    url: "https://lolurl.site/rohit-portfolio",
  },
  
  {
    name: "GitHub",
    url: "https://lolurl.site/rohitgh",
  },
  {
    name: "X",
    url: "https://lolurl.site/rohitx",
  },
  {
    name: "LinkedIn",
    url: "https://lolurl.site/rohitli",
  },
  {
    name: "Instagram",
    url: "https://lolurl.site/rohitig",
  },
];

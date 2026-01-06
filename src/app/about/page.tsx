"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/AnimateIn";

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl px-4">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-lg px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              <span className="inline-block animate-spin" style={{ animationDuration: '3s' }}>𖦹</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link 
                href="/" 
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/guestbook" 
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group"
              >
                Guest Book
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-4 pt-24 pb-16">
        {/* Greeting */}
        <AnimateIn variant="fadeUp">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            Namaskar, I&apos;m <span className="text-orange-500">Rohit</span>
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWF3YnA5MDJ4ejlibHpzOTc2NWptd2F6enFwaGZuZ25uMDZrd2hudyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a5viI92PAF89q/giphy.gif"
              alt="Namaste"
              width={48}
              height={48}
              className="rounded-lg"
              unoptimized
            />
          </h1>
        </AnimateIn>

        {/* Profile Image */}
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div 
            className="relative w-full aspect-[2/1] max-w-xl mx-auto mb-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered ? (
              <Image
                src="/img/str_image.png"
                alt="Rohit Debnath"
                fill
                className="object-cover object-top"
                priority
              />
            ) : (
              <Image
                src="/img/me.gif"
                alt="Rohit Debnath"
                fill
                className="object-cover object-top"
                unoptimized
              />
            )}
          </div>
          
          {/* Text below banner */}
          <p className="text-gray-500 text-sm font-medium text-right italic">
            i beleve i am Part-Time batMan
          </p>
        </AnimateIn>

        {/* About Me Section */}
        <AnimateIn variant="fadeUp" delay={0.2}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              I&apos;m a <span className="text-orange-500 font-medium">developer and builder</span> from India who loves learning by doing. I dive deep into problems first and check the docs later. From backend systems to AI-powered apps, I <span className="text-orange-500 font-medium">enjoy building things that work and scale</span>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Beyond coding, I love <span className="text-orange-500 font-medium">communities and open source</span>. I was part of DevDotCom, a tech community of 2K+ members, and contribute to open-source projects whenever I can. I&apos;m also a hackathon enthusiast, winner of <span className="text-orange-500 font-medium">4x Hackathons</span>.
            </p>
          </section>
        </AnimateIn>

        {/* Skills Section */}
        <AnimateIn variant="fadeUp" delay={0.3}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-600 mb-2">Programming & Technical</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Node JS, Express JS, TypeScript, JavaScript, MySQL, PostgreSQL, MongoDB, Prisma, Drizzle, React JS, Next JS, HTML, CSS, Tailwind CSS
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-600 mb-2">Tools & Platforms</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Git, GitHub, Docker, Postman, Supabase, VS Code, Figma
                </p>
              </div>
            </div>
          </section>
        </AnimateIn>

        {/* Contact Section */}
        <AnimateIn variant="fadeUp" delay={0.4}>
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="text-2xl font-bold mb-4">Wanna Connect?</h2>
            <div className="flex items-center gap-3">
              <a 
                href="mailto:debnathrohit97@gmail.com" 
                className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>debnathrohit97@gmail.com</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('debnathrohit97@gmail.com');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="px-3 py-1.5 text-xs font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-1.5"
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </section>
        </AnimateIn>
      </main>
    </div>
  );
}

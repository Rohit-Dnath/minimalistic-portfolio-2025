"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/AnimateIn";

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Navigation Bar */}
      <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-xl px-1 sm:px-4 mb-4">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg sm:rounded-2xl shadow-lg px-2 sm:px-6 py-1 sm:py-3">
          <div className="flex items-center justify-between min-h-[32px] sm:min-h-0">
            <Link href="/" className="text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors flex items-center">
              <span className="inline-block animate-spin" style={{ animationDuration: '6s' }}>𖦹</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <Link 
                href="/" 
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group flex items-center"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group flex items-center"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/guestbook" 
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group flex items-center"
              >
                Guest Book
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-3 sm:px-4 pt-20 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Greeting */}
        <AnimateIn variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
            Namaskar, I&apos;m <span className="text-orange-500">Rohit</span>
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWF3YnA5MDJ4ejlibHpzOTc2NWptd2F6enFwaGZuZ25uMDZrd2hudyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a5viI92PAF89q/giphy.gif"
              alt="Namaste"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg"
              unoptimized
            />
          </h1>
        </AnimateIn>

        {/* Profile Image */}
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div 
            className="relative w-full aspect-[2/1] max-w-xl mx-auto mb-2 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-pointer group"
          >
            <Image
              src="/img/me_with_dog.jpeg"
              alt="Rohit with dog"
              fill
              className="object-cover object-center grayscale group-hover:grayscale-[50%] transition-all duration-500 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Text below banner */}
          <p className="text-gray-500 text-xs sm:text-sm font-medium text-right italic mb-6 sm:mb-8">
            i love to talk about tech...
          </p>
        </AnimateIn>

        {/* About Me Section */}
        <AnimateIn variant="fadeUp" delay={0.2}>
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About</h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-4">
              I&apos;m a <span className="text-orange-500 font-medium">developer and builder</span> from India who loves learning by doing. I dive deep into problems first and check the docs later. From backend systems to AI-powered apps, I <span className="text-orange-500 font-medium">enjoy building things that work and scale</span>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Beyond coding, I love <span className="text-orange-500 font-medium">communities and open source</span>. I was part of DevDotCom, a tech community of 2K+ members, and contribute to open-source projects whenever I can. I&apos;m also a hackathon enthusiast, winner of <span className="text-orange-500 font-medium">4x Hackathons</span>.
            </p>
          </section>
        </AnimateIn>

        {/* Skills Section */}
        <AnimateIn variant="fadeUp" delay={0.3}>
          <section className="mb-8">
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

        {/* My Gears Section */}
        <AnimateIn variant="fadeUp" delay={0.4}>
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Gears</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              The weapons I use to ship code and build cool stuff
            </p>
            <div className="space-y-3">
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Acer Predator Helios 16 Gaming Laptop (beast)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  i7 14th Gen HX • 16GB DDR5 RAM • 1TB Gen 5 SSD • NVIDIA RTX 40 Series GPU • 165Hz Display
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  LG UltraGear Gaming Monitor
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  24&quot; • 180Hz refresh rate for smooth visuals
                </p>
              </div>

               <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  GT-Play Gaming Ergonomic Chair
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Ergonomic design for long coding/Gaming sessions
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Protronics Hydra 10 Mechanical Keyboard
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Red switches for that satisfying clicky experience
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Protronics Tode One Gaming Mouse
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Precision aiming for both code and gaming
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  JBL 520BT Headphones
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  For those deep focus coding sessions
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  KZ EDX Pro IEMs
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Crystal clear audio when I need to tune out the world
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Cosmic Byte Gaming Controller
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Because all work and no play makes me a dull dev
                </p>
              </div>
              
              <div className="group hover:translate-x-1 transition-all duration-300">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  LEGO Mercedes F1 Car Model
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Best desk buddy that reminds me to build things piece by piece
                </p>
              </div>
            </div>
          </section>
        </AnimateIn>

        {/* Contact Section */}
        <AnimateIn variant="fadeUp" delay={0.5}>
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Wanna Connect?</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a 
                href="mailto:debnathrohit97@gmail.com" 
                className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors break-all"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs sm:text-sm">debnathrohit97@gmail.com</span>
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
                    
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    
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

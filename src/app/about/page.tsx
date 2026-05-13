"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateIn } from "@/components/animations/AnimateIn";
import Navbar from "@/components/Navbar";
import { Tooltip } from "@/components/Tooltip";

const gears = [
  {
    name: "Acer Predator Helios 16",
    specs: "i7 14th Gen HX • 16GB DDR5 • 1TB Gen 5 SSD • RTX 40 Series • 165Hz",
    image: "/img/gears/laptop.jpg",
    tooltip: "runs crysis. and my 47 browser tabs 🔥",
  },
  {
    name: "LG UltraGear Gaming Monitor",
    specs: "24\" • 180Hz • 1ms response time",
    image: "/img/gears/monitor.jpg",
    tooltip: "one screen was never enough 🖥️",
  },
  {
    name: "Portronics Hydra 10 Keyboard",
    specs: "Mechanical • Red switches • Wireless • RGB backlit",
    image: "/img/gears/keyboard.jpg",
    tooltip: "clack clack clack... sorry neighbors 😬",
  },
  {
    name: "Portronics Toad One Mouse",
    specs: "Wireless • RGB • 2.4GHz + Bluetooth • Rechargeable",
    image: "/img/gears/mouse.png",
    tooltip: "my aim: 2/10. my code: 8/10. balance 🖱️",
  },
  {
    name: "GT-Play Ergonomic Chair",
    specs: "Racing style • lumbar support • built for long sessions",
    image: "/img/gears/chair.jpg",
    tooltip: "where great ideas and long naps happen 💺",
  },
  {
    name: "JBL Tune 520BT",
    specs: "On-ear • Wireless • 57H battery • deep bass",
    image: "/img/gears/headphones.jpg",
    tooltip: "universal 'do not disturb' sign 🎧",
  },
  {
    name: "KZ EDX Pro IEMs",
    specs: "10mm dual-mag driver • HiFi • detachable cable",
    image: "/img/gears/iems.jpg",
    tooltip: "₹800 but sounds like ₹8000. no cap 🎵",
  },
  {
    name: "CMF Buds Pro 2",
    specs: "50dB ANC • LDAC • 43H playtime • Smart Dial",
    image: "/img/gears/buds.jpg",
    tooltip: "50dB ANC = professionally ignoring people 👂",
  },
  {
    name: "Meta Ray-Ban Gen 2",
    specs: "12MP camera • 8hr battery • Meta AI • open-ear audio",
    image: "/img/gears/glasses.jpg",
    tooltip: "i wear computers on my face. normal guy stuff 🕶️",
  },
  {
    name: "iPhone 17",
    specs: "A19 chip • 6.3\" ProMotion • 48MP camera • all-day battery",
    image: "/img/gears/iphone.jpg",
    tooltip: "apple tax: paid in full 🍎💸",
  },
  {
    name: "Cosmic Byte C3070W Controller",
    specs: "2.4G wireless • analog sticks • USB-C",
    image: "/img/gears/controller.jpg",
    tooltip: "skill issue not included in the box 🎮",
  },
  {
    name: "LEGO Mercedes AMG F1 W14",
    specs: "1,642 pieces • 1:8 scale • best desk therapy",
    image: "/img/gears/lego.jpg",
    tooltip: "when code breaks, i build LEGOs 🏎️",
  },
];

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />

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
              src="/gallery/good_pic.jpg"
              alt="Rohit"
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
            <h2 className="text-xl sm:text-2xl font-bold mb-1">My Gears</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
              The weapons I use to ship code and build cool stuff
            </p>
            <div className="grid grid-cols-2 gap-3">
              {gears.map((gear, index) => (
                <Tooltip key={index} content={gear.tooltip} delay={150} wrapperClassName="relative block">
                  <div className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-lg dark:hover:shadow-zinc-950/50 hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-36 sm:h-40 w-full bg-white dark:bg-white overflow-hidden">
                      <div className="absolute inset-3">
                        <Image
                          src={gear.image}
                          alt={gear.name}
                          fill
                          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.06]"
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                    <div className="p-2.5 sm:p-3 border-t border-zinc-100 dark:border-zinc-800">
                      <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight mb-0.5">
                        {gear.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                        {gear.specs}
                      </p>
                    </div>
                  </div>
                </Tooltip>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Contact Section */}
        <AnimateIn variant="fadeUp" delay={0.5}>
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Wanna Connect?</h2>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="mailto:debnathrohit97@gmail.com" 
                className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
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
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                aria-label="Copy email"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </section>
        </AnimateIn>
      </main>
    </div>
  );
}

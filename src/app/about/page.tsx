"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateIn } from "@/components/animations/AnimateIn";
import Navbar from "@/components/Navbar";

const gears = [
  {
    name: "Acer Predator Helios 16 Gaming Laptop",
    specs: "i7 14th Gen HX • 16GB DDR5 RAM • 1TB Gen 5 SSD • NVIDIA RTX 40 Series GPU • 165Hz Display",
    image: "https://cdn.mos.cms.futurecdn.net/JeECa9xfScb36x7bjJuw9P.jpg",
  },
  {
    name: "LG UltraGear Gaming Monitor",
    specs: "24\" • 180Hz refresh rate for smooth visuals",
    image: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/81bc1837-a838-4058-a550-0a9196dc466d/md07520039-zoom-01-jpg",
  },
  {
    name: "GT-Play Gaming Ergonomic Chair",
    specs: "Ergonomic design for long coding/gaming sessions",
    image: "https://in.gtplayer.com/cdn/shop/files/51WUaFNDRDL._SL1080.jpg",
  },
  {
    name: "Portronics Hydra 10 Mechanical Keyboard",
    specs: "Red switches for that satisfying clicky experience",
    image: "https://cdn.shopify.com/s/files/1/1603/9553/files/Hydra-10_1200x1200_Red_1.jpg?v=1733832004",
  },
  {
    name: "Portronics Toad One Gaming Mouse",
    specs: "Precision aiming for both code and gaming",
    image: "https://cdn.shopify.com/s/files/1/1603/9553/files/Image1_5067bdd1-4473-4933-a66d-edcb4d49409a.png?v=1720258592",
  },
  {
    name: "JBL Tune 520BT Headphones",
    specs: "For those deep focus coding sessions",
    image: "https://www.soundguys.com/wp-content/uploads/2024/12/jbl-tune-520BT-hero.jpg",
  },
  {
    name: "KZ EDX Pro IEMs",
    specs: "Crystal clear audio when I need to tune out the world",
    image: "https://kz-audio.com/images/kz-edx-pro-img-01.jpg",
  },
  {
    name: "CMF Buds Pro 2",
    specs: "50dB ANC • 11mm drivers • LDAC • 43H playtime • Smart Dial",
    image: "https://cdn.sanity.io/images/gtd4w1cq/production/2f7f187714e728295aafbd50d57706a3a9869dd7-4096x2304.jpg?auto=format",
  },
  {
    name: "Meta Ray-Ban Glasses Gen 2",
    specs: "12MP ultra-wide camera • 8hr battery • Meta AI built-in • Wayfarer style",
    image: "https://www.engadget.com/engadget/ray-ban-meta-2nd-gen-review-smart-glasses-are-finally-getting-useful-124720393/rayban_meta_gen_2_in_case.jpg",
  },
  {
    name: "Cosmic Byte C3070W Gaming Controller",
    specs: "Because all work and no play makes me a dull dev",
    image: "https://rukminim2.flixcart.com/image/832/832/kuh9yfk0/gamepad/wireless-gamepad-for-pc-ps3/u/2/a/eg-c3070w-nebula-cosmicbyte-original-imag7hp4dnzfhgvf.jpeg",
  },
  {
    name: "LEGO Mercedes AMG F1 W14 Model",
    specs: "Best desk buddy that reminds me to build things piece by piece",
    image: "https://target.scene7.com/is/image/Target/GUEST_a41ab1c9-072f-4e21-b8af-1e64bdc18338?wid=800&hei=800&fmt=pjpeg",
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
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Gears</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              The weapons I use to ship code and build cool stuff
            </p>
            <div className="space-y-3">
              {gears.map((gear, index) => (
                <div key={index} className="group flex gap-3 items-center hover:translate-x-1 transition-all duration-300">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <Image
                      src={gear.image}
                      alt={gear.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-tight">
                      {gear.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                      {gear.specs}
                    </p>
                  </div>
                </div>
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

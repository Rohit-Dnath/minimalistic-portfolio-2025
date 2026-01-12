"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-xl px-1 sm:px-4 mb-4">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/50 dark:border-zinc-800/50 rounded-lg sm:rounded-2xl shadow-lg px-2 sm:px-6 py-1 sm:py-3">
        <div className="flex items-center justify-between min-h-[32px] sm:min-h-0">
          <Link
            href="/"
            className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors flex items-center"
          >
            <span
              className="inline-block animate-spin text-xl sm:text-lg"
              style={{ animationDuration: "6s" }}
            >
              𖦹
            </span>
          </Link>

          {/* Navigation Links - Visible on all screens */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <Link
              href="/"
              className={`text-xs sm:text-sm transition-colors relative group flex items-center ${
                isActive("/")
                  ? "text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/about"
              className={`text-xs sm:text-sm transition-colors relative group flex items-center ${
                isActive("/about")
                  ? "text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${
                  isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/guestbook"
              className={`text-xs sm:text-sm transition-colors relative group flex items-center ${
                isActive("/guestbook")
                  ? "text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              Guest Book
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 ${
                  isActive("/guestbook") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

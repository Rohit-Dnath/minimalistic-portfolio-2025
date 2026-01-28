"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { AnimateIn } from "@/components/animations/AnimateIn";
import Navbar from "@/components/Navbar";

interface GuestbookEntry {
  id: number;
  message: string;
  githubUsername: string;
  githubName: string | null;
  githubAvatar: string;
  createdAt: string;
}

export default function GuestbookPage() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      if (Array.isArray(data)) {
        setEntries(data);
      } else {
        console.error("API returned non-array:", data);
        setEntries([]);
      }
    } catch (error) {
      console.error("Error fetching entries:", error);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setMessage("");
        await fetchEntries();
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />

      <main className="max-w-xl mx-auto px-3 sm:px-4 pt-20 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Title */}
        <AnimateIn variant="fadeUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Guest<span className="text-orange-500">book</span>.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Write something. Future me will smile.
          </p>
        </AnimateIn>

        {/* Banner */}
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div className="relative mb-6 rounded-2xl overflow-visible border border-zinc-200 dark:border-zinc-800 shadow-lg group">
            {/* Banner Image */}
            <div className="relative h-40 md:h-48">
              <Image
                src="/img/ast_banner.webp"
                alt="Guestbook Banner"
                fill
                className="object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                priority
              />
            </div>
            
            {/* Duck Decoration */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/img/duck.gif"
                alt="Duck"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </AnimateIn>

        {/* Sign In Button (below banner) */}
        {!session && (
          <AnimateIn variant="fadeUp" delay={0.2}>
            <div className="mb-8 flex items-center gap-3">
              <button
                onClick={() => setShowSignInDialog(true)}
                className="px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
              >
                Sign in
              </button>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                To leave a message
              </span>
            </div>
          </AnimateIn>
        )}

        {/* Sign In Dialog */}
        {showSignInDialog && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSignInDialog(false)}
          >
            <div 
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4">Sign in to continue</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                Choose your preferred sign-in method
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => signIn("github", { callbackUrl: "/guestbook" })}
                  className="w-full px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Continue with GitHub
                </button>
                
                <button
                  onClick={() => signIn("google", { callbackUrl: "/guestbook" })}
                  className="w-full px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>

              <button
                onClick={() => setShowSignInDialog(false)}
                className="w-full mt-4 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Message Form (if signed in) */}
        {session && (
          <AnimateIn variant="fadeUp" delay={0.3}>
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src={session.user?.image || "/img/Banda-Kaam-Ka.webp"}
                    alt="Your avatar"
                    width={40}
                    height={40}
                    className="rounded-full flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <p className="text-sm font-medium">{session.user?.name || "User"}</p>
                    <p className="text-xs text-zinc-500">@{session.user?.username || "user"}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  Sign out
                </button>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                rows={4}
                maxLength={500}
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-zinc-500">
                  {message.length}/500
                </span>
                <button
                  type="submit"
                  disabled={!message.trim() || submitting}
                  className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Posting..." : "Post Message"}
                </button>
              </div>
            </form>
          </AnimateIn>
        )}

        {/* Recent Messages */}
        <AnimateIn variant="fadeUp" delay={0.4}>
          <h2 className="text-2xl font-bold mb-6">Recent Messages</h2>

          {loading ? (
            <p className="text-center py-12 text-zinc-500">Loading messages...</p>
          ) : entries.length === 0 ? (
            <p className="text-center py-12 text-zinc-500">
              No messages yet. Be the first to leave one!
            </p>
          ) : (
            <div className="space-y-6">
              {entries.map((entry, index) => (
                <AnimateIn key={entry.id} variant="fadeLeft" delay={0.5 + index * 0.05}>
                  <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <Image
                      src={entry.githubAvatar}
                      alt={entry.githubUsername}
                      width={48}
                      height={48}
                      className="rounded-full flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-sm">
                          {entry.githubName || entry.githubUsername}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {new Date(entry.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                        {entry.message}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          )}
        </AnimateIn>
      </main>
    </div>
  );
}

import { NavBar } from "@/components/NavBar"
import { Countdown } from "@/components/Countdown"

export default function Page() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-black text-white">
      <section className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        {/* Navbar */}
        <div className="absolute left-0 right-0 top-0 z-50">
          <NavBar />
        </div>

        {/* Under Construction */}
        <div className="relative z-10 px-6 text-center">
          <h1 className="font-rosaria text-6xl leading-none text-white text-shadow-[0px_0px_30px_rgba(96,165,250,0.8)] sm:text-8xl md:text-9xl">
            Under<br />Construction
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
            We&apos;re working behind the scenes to get everything ready.
            Check back soon for the launch of Starsoul.
          </p>

          <p className="mt-8 text-sm text-white/30">
            Opening October 1, 2026 at 12:00 PM UTC-6
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-xs text-white/30 sm:flex-row sm:text-left">
          <div className="flex gap-1">
            <p>STARSOUL •{" "}
              <a href="mailto:mail@sky-less.com" className="font-medium text-blue-400 transition hover:text-blue-300">MAIL@SKY-LESS.COM</a>
            </p>
          </div>

          <p>
            Minecraft modpack &amp; server •{" "}
            <span className="text-white/45">starsoul.industries</span>
          </p>
        </div>
      </footer>
    </main>
  )
}

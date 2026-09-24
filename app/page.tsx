import { NavBar } from "@/components/NavBar"
import { Countdown } from "@/components/Countdown"
import { Cog, DollarSign, House, Plane, Star, Train } from "lucide-react"
import HeroSlideshow from "@/components/HeroSlideshow"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background video */}
        <HeroSlideshow/>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/70" />

        {/* Navbar */}
        <div className="relative z-50">
          <NavBar />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-10 text-sm font-medium uppercase tracking-[0.4em] text-blue-400">
              A public SMP by SKY-LESS
            </p>

            <h1 className="mt-6 font-rosaria text-[7rem] leading-none text-white text-shadow-[0px_0px_30px_rgba(96,165,250,1)] sm:text-[10rem] md:text-[12rem]">
              Stsl
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              A Create: Aeronautics focused Minecraft SMP where you can build, automate,
              set up shops, transportation networks, and much more!
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/docs/modrinth"
                className="rounded-xl bg-blue-500 px-7 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Start Playing
              </a>

              {/*

              <a
                href="/gameplay"
                className="rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
              >
                Explore
              </a>
               */ }
            </div>

            <p className="mt-6 text-sm text-white/35">
              Opens October 1, 2026 at 12:00 PM UTC-6
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg
            className="h-7 w-7 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      <Countdown/>

      {/* Explanation 1 */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                The Server
              </p>

              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Build your place in the server.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/55">
              <p>
                STARSOUL is a public modded SMP created by
                <a href="https://www.youtube.com/@SKY-LESSS" target="_blank" className="font-medium text-blue-400 transition hover:text-blue-300"> SKY-LESS</a>.
              </p>

              <p>
                The server is built around Create: Aeronautics,
                giving you the tools to build factories, aircraft,
                railways, businesses, and infrastructure alongside other players.
              </p>

              <p>
                There isn't one way to play. Build a base, run a
                business, connect metros, deliver cargo, form a community, or
                see how far you can push your factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation 2 */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Your World
            </p>

            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Make something of it.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              You have the freedom to build your own corner of
              the world. What you do with them is up to you! Except maybe don't crash the server.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <Cog/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Build & Automate
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Build factories, automate materials, and create production
                systems using TONS of Create Addons.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <Plane/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Take to the Skies
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Build aircrafts, transport heavy cargo, connect distant places, and fly wherever you please.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <DollarSign/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Run a Business
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Open shops, sell resources, offer services, and build your own
                place in the economy!
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <Train/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Connect the World
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Build railways, metro systems, delivery routes, and other
                infrastructure between player bases.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <House/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Make It Yours
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Claim your land, build your base, form parties, and create
                someplace that feels like yours.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                <Star/>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Do Something Else
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Build a cannon, start a war, deliver something across the
                world, Or come up with something new!
              </p>
            </article>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/docs/gameplay"
              className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Learn about gameplay changes →
            </a>
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Server Information
            </p>

            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Everything you need to know.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
              STARSOUL SMP is designed to be easy to join. Here's the important
              information before you download the modpack.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Minecraft
              </p>
              <p className="mt-2 text-lg font-medium">Java Edition 1.21.1</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Mod Loader
              </p>
              <p className="mt-2 text-lg font-medium">NeoForge 21.1.251</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Modpack
              </p>
              <p className="mt-2 text-lg font-medium">122 mods</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Access
              </p>
              <p className="mt-2 text-lg font-medium">Free + Public</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Age Requirement
              </p>
              <p className="mt-2 text-lg font-medium">13+</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-white/30">
                Server Address
              </p>
              <code className="mt-2 block text-lg font-medium text-blue-300">
                starsoul.industries
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">

            <h2 className="mt-3 text-4xl font-semibold">
              Have questions?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
              Find answers about joining, gameplay, claims, shops, mods, and
              everything else you might want to know before playing.
            </p>

            <a
              href="/docs/faq"
              className="mt-7 inline-block text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Read the FAQ →
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            Getting Started
          </p>

          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Ready to join?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
            STARSOUL uses a dedicated modpack, so you'll need to install it
            before connecting.
          </p>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-medium text-blue-400">01</p>
              <h3 className="mt-3 font-semibold">Install the modpack</h3>
              <p className="mt-2 text-sm leading-6 text-white/40">
                Download and install STARSOUL through Modrinth/Curseforge.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-medium text-blue-400">02</p>
              <h3 className="mt-3 font-semibold">Join the server</h3>
              <p className="mt-2 text-sm leading-6 text-white/40">
                Look for "Quick Join" or connect to <code className="text-blue-300">starsoul.industries</code>.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-medium text-blue-400">03</p>
              <h3 className="mt-3 font-semibold">Have fun!</h3>
              <p className="mt-2 text-sm leading-6 text-white/40">
                Do whatever your heart desires.
              </p>
            </div>
          </div>

          <a
            href="/docs/modrinth"
            className="mt-9 inline-flex rounded-xl bg-blue-500 px-7 py-3.5 font-medium text-white transition hover:bg-blue-400"
          >
            Installation Guide
          </a>
        </div>
      </section>

      {/* Final Section */}
      <section className="border-b border-white/10 bg-black px-6 pt-8 pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-rosaria text-7xl text-shadow-[0px_0px_30px_rgba(96,165,250,0.8)] sm:text-8xl">
            Stsl
          </h2>
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

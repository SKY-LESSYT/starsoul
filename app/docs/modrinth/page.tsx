import { NavBar } from "@/components/NavBar"

const MODRINTH_URL = "/docs/modrinth"
const CURSEFORGE_URL = "/docs/curseforge"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Header */}
      <section className="px-6 pt-28 pb-16 sm:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-[0.35em] text-blue-400 uppercase">
            Installation Guide
          </p>

          <h1 className="mt-6 font-rosaria text-6xl text-shadow-[0px_0px_60px_rgba(96,165,250,1)] sm:text-7xl md:text-8xl">
            Stsl
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Ready to play on STARSOUL? Choose the installation method that works
            best for you. STARSOUL is available through Modrinth and CurseForge,
            with a dedicated guide for each platform.
          </p>

          {/* Installation methods */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            <a
              href={MODRINTH_URL}
              className="group flex h-full flex-col rounded-2xl border border-blue-400/30 bg-blue-500/[0.08] p-5 transition hover:border-blue-400/60 hover:bg-blue-500/[0.14]"
            >
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase">
                Current Guide
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
                Modrinth
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Install STARSOUL through a Modrinth-compatible launcher.
              </p>

              <span className="mt-auto pt-5 text-sm text-blue-400 transition group-hover:text-blue-300">
                You're here →
              </span>
            </a>

            <a
              href={CURSEFORGE_URL}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-medium tracking-widest text-white/35 uppercase">
                Alternative
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
                CurseForge
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Follow the CurseForge-specific installation instructions.
              </p>

              <span className="mt-auto pt-5 text-sm text-white/45 transition group-hover:text-white/70">
                View guide →
              </span>
            </a>
          </div>

          <a
            href={MODRINTH_URL}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-7 py-3.5 font-medium text-white transition hover:bg-blue-400"
          >
            <span>Open STARSOUL on Modrinth</span>

            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>

          <p className="mt-4 text-xs text-white/35">
            The official Modrinth project page will be linked here soon.
          </p>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="text-sm font-medium tracking-[0.25em] text-blue-400 uppercase">
              Modrinth
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Install STARSOUL with Modrinth
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/50">
              This guide will walk you through installing STARSOUL with
              Modrinth. You don't need to download the individual mods
              yourself. Your launcher will handle the modpack, its
              dependencies, and the files needed to run it.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 01 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-medium text-blue-300">
                  01
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Choose a Modrinth-compatible launcher
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Start by installing a Minecraft launcher that supports
                    Modrinth modpacks. The launcher will create a separate
                    Minecraft instance for STARSOUL and take care of the files
                    needed to run it.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    We recommend either{" "}
                    <span className="font-medium text-white/80">
                      Prism Launcher
                    </span>{" "}
                    or the{" "}
                    <span className="font-medium text-white/80">
                      Modrinth App
                    </span>
                    . If you already use another launcher with Modrinth
                    support, that should work as well.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 02 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-medium text-blue-300">
                  02
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Open the STARSOUL Modrinth project
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Visit the official STARSOUL project page on Modrinth. This
                    is where you'll find the current release of the pack,
                    version information, and any other important details.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    We recommend downloading STARSOUL directly from the
                    official project page. Avoid downloading the pack from
                    unofficial mirrors or other third-party sources, as these
                    files may not be safe or up to date.
                  </p>

                  <a
                    href={MODRINTH_URL}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    Go to the STARSOUL project
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M7 7h10v10"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* Step 03 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-medium text-blue-300">
                  03
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Install the STARSOUL instance
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    From the STARSOUL Modrinth project, choose the option to
                    download the modpack. You may see options such as{" "}
                    <span className="font-medium text-white/80">
                      Install with Modrinth App
                    </span>{" "}
                    or{" "}
                    <span className="font-medium text-white/80">
                      Download Manually.
                    </span>
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    If you're using Prism Launcher, you can simply drag the{" "}
                    <code className="text-blue-300">.mrpack</code> file into
                    Prism Launcher and follow the prompts to import it.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    If you're using a different launcher, the exact steps may
                    look a little different. Follow your launcher's prompts to
                    finish importing and installing the pack.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 04 */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-medium text-blue-300">
                  04
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Launch STARSOUL</h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Once the installation is complete, launch the STARSOUL
                    instance from your launcher. The first launch may take
                    longer than usual while Minecraft loads the modpack and
                    sets up the files it needs.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    Make sure you're launching the STARSOUL instance you just
                    installed rather than a separate Minecraft installation.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 05 */}
            <article className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] p-6 sm:p-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-sm font-medium text-blue-300">
                  05
                </div>

                <div className="w-full">
                  <h3 className="text-xl font-semibold">
                    Connect to the STARSOUL server
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Once Minecraft has loaded, look for the{" "}
                    <span className="font-medium text-white/80">
                      Quick Join
                    </span>{" "}
                    button on the title screen. If it is available, selecting
                    it will automatically connect you to the STARSOUL server
                    without requiring you to enter the server address manually.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    If you don't see the Quick Join button, you can connect
                    through the multiplayer menu instead. Select{" "}
                    <span className="font-medium text-white/80">
                      Add Server
                    </span>{" "}
                    and enter the following server address:
                  </p>

                  <div className="mt-6 rounded-xl border border-white/10 bg-black px-5 py-4">
                    <p className="mb-2 text-xs font-medium tracking-widest text-white/35 uppercase">
                      Server Address
                    </p>

                    <code className="text-lg break-all text-blue-300 sm:text-xl">
                      starsoul.industries
                    </code>
                  </div>

                  <p className="mt-5 leading-7 text-white/55">
                    Save the server, select it from your multiplayer list, and
                    connect. Once you're in, you're good to go!
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Other Installation Methods */}
      <section className="border-t border-white/10 px-6 pt-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium tracking-[0.25em] text-blue-400 uppercase">
              Other Installation Methods
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Prefer another platform?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/50">
              STARSOUL is also available through CurseForge. We've put together
              a separate guide for installing STARSOUL through CurseForge.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-1">
            <a
              href={CURSEFORGE_URL}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <p className="text-sm text-white/35">Alternative guide</p>

              <h3 className="mt-2 text-xl font-semibold">
                Install with CurseForge
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Follow the dedicated guide for installing STARSOUL through
                CurseForge.
              </p>

              <span className="mt-auto pt-5 text-sm text-blue-400 transition group-hover:text-blue-300">
                View CurseForge guide →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="px-6 pt-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm font-medium tracking-[0.25em] text-blue-400 uppercase">
              Having trouble?
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Before asking for help
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/55">
              <p>
                <span className="font-medium text-white/80">
                  Check your installation method.
                </span>{" "}
                Make sure you're following the guide for the platform you're
                actually using. Modrinth and CurseForge each have different
                installation processes.
              </p>

              <p>
                <span className="font-medium text-white/80">
                  Make sure you're using the correct version.
                </span>{" "}
                Check the official STARSOUL project for the currently supported
                release of the pack.
              </p>

              <p>
                <span className="font-medium text-white/80">
                  Let the installation finish completely.
                </span>{" "}
                Missing or partially downloaded files can prevent the instance
                from launching correctly.
              </p>

              <p>
                <span className="font-medium text-white/80">
                  Verify the server address.
                </span>{" "}
                The STARSOUL server address is{" "}
                <code className="text-blue-300">starsoul.industries</code>.
              </p>
            </div>
          </div>
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

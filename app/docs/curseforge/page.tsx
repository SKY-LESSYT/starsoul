import { NavBar } from "@/components/NavBar"

const MODRINTH_URL = "/docs/modrinth"
const CURSEFORGE_URL = "/docs/curseforge"
const CURSEFORGE_DOWNLOAD_URL = "/downloads/starsoul-curseforge.zip"

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
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-medium tracking-widest text-white/35 uppercase">
                Alternative
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
                Modrinth
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Install STARSOUL through a Modrinth-compatible launcher.
              </p>

              <span className="mt-auto pt-5 text-sm text-white/45 transition group-hover:text-white/70">
                View guide →
              </span>
            </a>

            <a
              href={CURSEFORGE_URL}
              className="group flex h-full flex-col rounded-2xl border border-blue-400/30 bg-blue-500/[0.08] p-5 transition hover:border-blue-400/60 hover:bg-blue-500/[0.14]"
            >
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase">
                Current Guide
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
                CurseForge
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Install the experimental STARSOUL pack using the CurseForge
                launcher.
              </p>

              <span className="mt-auto pt-5 text-sm text-blue-400 transition group-hover:text-blue-300">
                You're here →
              </span>
            </a>
          </div>

          {/* Important notice */}
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.05] px-6 py-5 text-left">
            <p className="text-sm font-medium text-yellow-300">
              Experimental CurseForge release
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55">
              STARSOUL currently has an experimental CurseForge modpack, but it
              is not hosted on the CurseForge website. The pack is provided
              directly through the STARSOUL website as a downloadable ZIP file.
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55">
              Because this is an experimental distribution, you may encounter
              issues that don't occur with the Modrinth version. For the most
              reliable installation experience, we recommend using Modrinth
              when possible.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="text-sm font-medium tracking-[0.25em] text-blue-400 uppercase">
              CurseForge
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Install STARSOUL with CurseForge
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/50">
              This guide walks you through installing the experimental
              CurseForge version of STARSOUL. Because STARSOUL does not have a
              CurseForge project page, the modpack is distributed directly from
              this website as a downloadable ZIP file.
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
                    Install the CurseForge launcher
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Start by installing the CurseForge app and setting it up
                    for Minecraft. The CurseForge launcher will create and
                    manage a separate Minecraft profile for STARSOUL.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    If you already have CurseForge installed and Minecraft is
                    configured, you can skip this step.
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
                    Download the STARSOUL CurseForge pack
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    STARSOUL is not currently hosted on CurseForge, so there is
                    no CurseForge project page to download the pack from.
                    Instead, we've provided the CurseForge modpack directly
                    below.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    Download the ZIP file and save it somewhere easy to find,
                    such as your Downloads folder. Do not extract the ZIP file.
                    CurseForge needs the original modpack archive in order to
                    import it correctly.
                  </p>

                  <a
                    href={CURSEFORGE_DOWNLOAD_URL}
                    download
                    className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
                  >
                    <span>Download STARSOUL for CurseForge</span>

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
                        d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                      />
                    </svg>
                  </a>

                  <p className="mt-3 text-xs leading-5 text-white/35">
                    STARSOUL CurseForge modpack • ZIP archive
                  </p>
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
                    Import the modpack into CurseForge
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Open the CurseForge app and select{" "}
                    <span className="font-medium text-white/80">
                      Minecraft
                    </span>
                    . From your Minecraft profiles, choose the option to
                    import a modpack or profile.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    Select the{" "}
                    <span className="font-medium text-white/80">
                      STARSOUL ZIP
                    </span>{" "}
                    file you downloaded in the previous step. CurseForge will
                    read the modpack archive and create a new Minecraft profile
                    containing the pack.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    Keep the ZIP file intact during this process. You should
                    import the downloaded archive directly rather than
                    extracting its contents first.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    The exact location of the import option may vary depending
                    on your version of the CurseForge app.
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
                  <h3 className="text-xl font-semibold">
                    Launch STARSOUL
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    Once CurseForge has finished importing the pack, you should
                    see a{" "}
                    <span className="font-medium text-white/80">STARSOUL</span>{" "}
                    profile in your Minecraft profiles. Launch the profile to
                    start Minecraft.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    The first launch may take longer than usual while Minecraft
                    loads the modpack and creates the files it needs.
                  </p>

                  <p className="mt-3 leading-7 text-white/55">
                    If CurseForge reports missing files or encounters an error
                    during installation, make sure you downloaded the complete{" "}
                    <span className="font-medium text-white/80">
                      STARSOUL ZIP
                    </span>{" "}
                    file and imported it without extracting or modifying it.
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
                    it will automatically connect you to the{" "}
                    <span className="font-medium text-white/80">
                      STARSOUL
                    </span>{" "}
                    server without requiring you to enter the server address
                    manually.
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
              STARSOUL is also available through Modrinth. We've put together a
              separate guide for installing STARSOUL through Modrinth.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-1">
            <a
              href={MODRINTH_URL}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <p className="text-sm text-white/35">Alternative guide</p>

              <h3 className="mt-2 text-xl font-semibold">
                Install with Modrinth
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Follow the dedicated guide for installing STARSOUL through
                Modrinth.
              </p>

              <span className="mt-auto pt-5 text-sm text-blue-400 transition group-hover:text-blue-300">
                View Modrinth guide →
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
                  Make sure you downloaded the complete ZIP.
                </span>{" "}
                The CurseForge version is distributed as a single ZIP archive.
                Do not extract, rename, or modify the contents before importing
                it into CurseForge.
              </p>

              <p>
                <span className="font-medium text-white/80">
                  Make sure you're using the correct version.
                </span>{" "}
                Check the STARSOUL website for the currently supported release
                of the CurseForge pack.
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

              <p>
                <span className="font-medium text-white/80">
                  Still having issues?
                </span>{" "}
                Because this is an experimental CurseForge distribution, some
                issues may be specific to CurseForge. If possible, try the
                Modrinth version before troubleshooting further.
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

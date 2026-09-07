export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-950">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#fafafa]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#top"
            className="text-lg font-semibold tracking-tight"
          >
            Spencer Cottrell
          </a>

          <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a className="transition hover:text-black" href="#about">
              About
            </a>

            <a className="transition hover:text-black" href="#experience">
              Experience
            </a>

            <a className="transition hover:text-black" href="#projects">
              Projects
            </a>

            <a className="transition hover:text-black" href="#skills">
              Skills
            </a>

            <a
              className="transition hover:text-black"
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section
        id="top"
        className="mx-auto max-w-7xl px-6 pb-32 pt-28 md:pb-40 md:pt-40"
      >

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          Economics · Data · AI · Technology
        </p>

        <h1 className="max-w-6xl text-6xl font-semibold tracking-[-0.055em] md:text-8xl lg:text-9xl">
          Spencer Cottrell
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-8 text-neutral-600 md:text-2xl md:leading-9">
          Economics B.S. student at San José State University interested
          in using data, software and artificial intelligence to solve
          real-world business problems.
        </p>


        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            View my work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
          >
            View résumé
          </a>

        </div>


        <div className="mt-12 flex flex-wrap gap-8 text-sm text-neutral-500">

          <a
            href="https://www.linkedin.com/in/spencercottrell/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/colonel1223"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            GitHub ↗
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-neutral-200 px-6 py-28"
      >

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          01 / About
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-2">

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Economics meets technology.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-neutral-600">

            <p>
              I&apos;m an Economics B.S. student at San José State University
              developing technical skills across data analysis, software,
              automation and artificial intelligence.
            </p>

            <p>
              I&apos;m particularly interested in problems where technology
              can improve how organizations analyze information, make
              decisions and operate more efficiently.
            </p>

            <p>
              I use projects as an opportunity to turn concepts I&apos;m
              learning into working systems while continuing to develop
              both my technical and business understanding.
            </p>

          </div>

        </div>
      </section>


      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-7xl border-t border-neutral-200 px-6 py-28"
      >

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          02 / Experience
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Experience
        </h2>


        <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">

          <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">

            <div>
              <h3 className="text-lg font-semibold">
                Sakana AI — Fugu
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                Closed Beta Participant
              </p>
            </div>

            <p className="max-w-2xl leading-7 text-neutral-600">
              Participated in testing emerging AI agent workflows,
              evaluating system behavior, documenting findings and
              providing structured product feedback.
            </p>

          </div>


          <div className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">

            <div>
              <h3 className="text-lg font-semibold">
                Independent Projects
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                Economics · Data · AI
              </p>
            </div>

            <p className="max-w-2xl leading-7 text-neutral-600">
              Building technical projects combining economics,
              quantitative analysis, automation and emerging AI
              technologies.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-neutral-200 px-6 py-28"
      >

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          03 / Selected Work
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Projects
        </h2>


        <div className="mt-16 grid gap-6 lg:grid-cols-2">


          {/* PROJECT 1 */}
          <article className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">

            <div>

              <p className="text-sm text-neutral-500">
                Python · LangGraph · Economics · Procurement
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                Tariff Exposure Agent
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-neutral-600">
                A decision-support system for analyzing tariff exposure,
                landed costs and alternative sourcing scenarios.
              </p>

            </div>

            <div className="mt-12 flex gap-6 text-sm font-medium">

              <a
                href="https://github.com/colonel1223"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <span className="text-neutral-400">
                Case study →
              </span>

            </div>

          </article>


          {/* PROJECT 2 */}
          <article className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">

            <div>

              <p className="text-sm text-neutral-500">
                AI Automation · n8n · HR Technology
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                Talent Signal
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-neutral-600">
                An experimental evidence-analysis workflow for supporting
                structured candidate review while maintaining human
                oversight.
              </p>

            </div>

            <div className="mt-12 flex gap-6 text-sm font-medium">

              <a
                href="https://github.com/colonel1223"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <span className="text-neutral-400">
                Case study →
              </span>

            </div>

          </article>


          {/* PROJECT 3 */}
          <article className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">

            <div>

              <p className="text-sm text-neutral-500">
                Machine Learning · Economics · Data
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                Economic Data Analysis
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-neutral-600">
                Quantitative projects exploring economic questions using
                Python, statistical analysis, real-world datasets and
                machine-learning techniques.
              </p>

            </div>

            <a
              className="mt-12 text-sm font-medium"
              href="https://github.com/colonel1223"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GitHub ↗
            </a>

          </article>


          {/* PROJECT 4 */}
          <article className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-neutral-200 bg-neutral-950 p-8 text-white transition hover:-translate-y-1 hover:shadow-lg">

            <div>

              <p className="text-sm text-neutral-400">
                GitHub Portfolio
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                More experiments & projects
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-neutral-400">
                Explore additional software, AI, data-analysis and
                experimental projects on my GitHub profile.
              </p>

            </div>

            <a
              href="https://github.com/colonel1223"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 text-sm font-medium"
            >
              github.com/colonel1223 ↗
            </a>

          </article>

        </div>
      </section>


      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-neutral-200 px-6 py-28"
      >

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          04 / Skills
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Tools & Technologies
        </h2>


        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="font-semibold">
              Programming
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Python
              <br />
              SQL
              <br />
              R
              <br />
              TypeScript
            </p>
          </div>


          <div>
            <h3 className="font-semibold">
              AI & Machine Learning
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Machine Learning
              <br />
              LLM APIs
              <br />
              RAG
              <br />
              Agentic Systems
            </p>
          </div>


          <div>
            <h3 className="font-semibold">
              Data
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Pandas
              <br />
              NumPy
              <br />
              Data Analysis
              <br />
              Visualization
            </p>
          </div>


          <div>
            <h3 className="font-semibold">
              Tools
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Git & GitHub
              <br />
              Docker
              <br />
              n8n
              <br />
              Next.js
            </p>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-neutral-200 px-6 py-32"
      >

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          05 / Contact
        </p>

        <h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          I&apos;m currently interested in internship opportunities where
          I can contribute, learn from experienced teams and continue
          building my technical and analytical skills.
        </p>


        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="https://www.linkedin.com/in/spencercottrell/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/colonel1223"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium"
          >
            Résumé
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-neutral-200">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 text-sm text-neutral-500 md:flex-row">

          <p>
            © 2026 Spencer Cottrell
          </p>

          <p>
            San Francisco Bay Area
          </p>

          <a
            href="#top"
            className="hover:text-black"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}
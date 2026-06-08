import { Manrope } from "next/font/google";
import GithubActivityWithLanguages from "@/components/ui/github-activity";

const theme = {
  dark: [
    "#161b22", // 0 contributions
    "#3b2200", // level 1
    "#8b4500", // level 2
    "#d97706", // level 3
    "#f59e0b", // level 4
  ],
};

function GithubHeatmap() {
  return (
    <section className="mt-12">
      <GithubActivityWithLanguages />
    </section>
  );
}

const manrope = Manrope({
subsets: ["latin"],
});

function AboutHeader() {
  return (
    <header className="mb-8">
      <p className="text-amber-500 text-sm uppercase tracking-[0.25em]">About</p>

      <h2 className="text-3xl md:text-4xl font-bold mt-4">Who I Am</h2>

      <p className={`${manrope.className} mt-5 max-w-3xl text-base md:text-lg leading-8 text-gray-300`}>
        I’m a Computer Science student at{" "}
        <a
          href="https://cet.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-300 transition-colors"
        >
          CET Trivandrum
        </a>{" "}
        passionate about software development and problem solving. I enjoy
        building full-stack applications and exploring the fundamentals of
        computer science.
      </p>
    </header>
  );
}

function AboutContent() {
  return (
    <div className={`${manrope.className} space-y-5 text-sm leading-7 text-gray-300`}>
      <p>
        My interests span web development, software engineering, and backend
        systems. I focus on building practical projects while strengthening my
        technical foundations.
      </p>

      <p>
        I enjoy creating maintainable software with clean architecture,
        reusable components, and thoughtful implementation details.
      </p>
    </div>
  );
}



function AboutCard() {
  return (
    <aside className="flex flex-col items-center gap-5">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-600 bg-gray-700/30">
        <span className="text-2xl md:text-4xl font-bold text-white">A</span>
      </div>

      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold">Anand S</p>
        <p className="text-sm text-gray-400">Computer Science Student</p>
      </div>
    </aside>
  );
}

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        <AboutHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AboutContent />
          </div>

          <div className="lg:col-span-1 md:mt-0 mt-6">{/* optional card slot */}</div>
        </div>

        <div className="mt-8 md:mt-12">
          <GithubHeatmap />
        </div>
      </div>
    </section>
  );
}

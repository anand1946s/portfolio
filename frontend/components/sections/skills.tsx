import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});
export default function Skills() {
  const stacks = [
    { title: "Languages", items: ["Python", "C++", "JavaScript"] },
    { title: "Backend", items: ["FastAPI", "Flask"] },
    { title: "Frontend", items: ["React", "Next.js"] },    
    { title: "Database ", items: ["PostgreSQL", "MongoDB"] },
    { title: "ML and Data", items: ["Pytorch", "Numpy", " Matplotlib"] },
  ];

  return (
    <section id="tech-stacks" className="py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-0 max-w-6xl px-0 text-white">
        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="mb-3 text-4xl font-extrabold tracking-[-0.03em]">
              Tech Stack
            </h2>

            <p className="mb-6 max-w-xl font-mono text-lg text-gray-500">
              A snapshot of what I work with. Plenty more I'd love
              <br />
              to learn.
            </p>

            <div className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-950/30 p-4">
              {stacks.map((stack) => (
                <div
                  key={stack.title}
                  className="group flex items-center justify-between border-b border-neutral-800 py-5 transition-all duration-200 last:border-b-0 hover:border-amber-500/70"
                >
                  <h3 className="font-jetbrains text-lg font-normal text-white transition-colors duration-300 group-hover:text-amber-400">
                    {stack.title}
                  </h3>

                  <div className="font-mono text-lg tracking-[0.08em] text-right text-gray-300">
                    {stack.items.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/blogs"
            className="group flex h-full min-h-[240px] sm:min-h-[280px] flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8 transition-all duration-300 hover:border-amber-500/70 hover:bg-neutral-900/40"
          >
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-gray-500">
                Explore
              </p>
              <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-amber-400">
                Blogs
              </h3>
              <p className="mt-4 max-w-sm font-mono text-lg leading-8 text-gray-400">
                Read my notes, ideas, and technical write-ups in one place.
              </p>
            </div>

            <div className="font-mono text-sm uppercase tracking-[0.28em] text-amber-400">
              Go to Blogs
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
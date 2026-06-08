import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});
export default function Skills() {
  
  
  const stacks = [
    { title: "Languages", items: ["Python", "C++", "JavaScript"] },
    { title: "Frontend", items: ["React", "Next.js"] },
    { title: "Backend", items: ["FastAPI", "Flask"] },
    { title: "Database & Cloud", items: ["PostgreSQL", "MongoDB"] },
    { title: "ML and Data", items: ["Pytorch", "Numpy", " Matplotlib"] },
  ];

  return (
    <section id="tech-stacks" className="py-10  px-14">
      <div className="max-w-2xl mx-0 px-8 text-white">
        <h2 className="text-4xl font-extrabold tracking-[-0.03em] mb-3">Tech Stack</h2>

        <p className="text-gray-500 font-mono text-lg max-w-xl mb-6">
          A snapshot of what I work with. Plenty more I'd love
          <br />
          to learn.
        </p>

        <div>
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="
                group
                flex
                items-center
                justify-between
                py-5
                border-b
                border-neutral-800
                transition-all
                duration-200
                hover:border-amber-500/70
              "
            >
              <h3
                  className="
                    font-jetbrains
                    text-lg
                    font-normal
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-amber-400
                  "
                >
                {stack.title}
              </h3>

              <div
                className="
                  font-mono
                  tracking-[0.08em]
                  text-lg
                  text-gray-300
                  text-right
                "
              >
                {stack.items.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
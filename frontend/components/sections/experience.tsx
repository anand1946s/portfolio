export default function Experience() {
  const milestones = [
    {
      year: "2024",
      title: "Joined B.Tech @ CET",
    },
    {
      year: "2026",
      title: "Summer Internship",
    },
    {
      year: "2028",
      title: "B.Tech Graduation",
    },
  ];

  return (
    <section id="experience" className="py-24 px-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-10">
          <div className="relative h-[280px]">
            {/* Zig-Zag Line */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 250"
              preserveAspectRatio="none"
            >
              <path
                d="M120 80 Q300 80 500 170 Q700 250 880 80"
                fill="none"
                stroke="#404040"
                strokeWidth="2"
              />
            </svg>

            {/* 2024 */}
            <div className="absolute left-[8%] top-[55px] flex flex-col items-center">
              <div className="h-5 w-5 rounded-full border-2 border-amber-400 bg-neutral-950">
                <div className="m-auto mt-[3px] h-2 w-2 rounded-full bg-amber-400" />
              </div>

              <p className="mt-4 font-mono text-sm tracking-[0.2em] text-amber-400">
                {milestones[0].year}
              </p>

              <h3 className="mt-2 text-center text-lg font-medium text-white">
                {milestones[0].title}
              </h3>
            </div>

            {/* 2026 */}
            <div className="absolute left-[47%] top-[145px] flex flex-col items-center">
              <div className="h-5 w-5 rounded-full border-2 border-amber-400 bg-neutral-950">
                <div className="m-auto mt-[3px] h-2 w-2 rounded-full bg-amber-400" />
              </div>

              <p className="mt-4 font-mono text-sm tracking-[0.2em] text-amber-400">
                {milestones[1].year}
              </p>

              <h3 className="mt-2 text-center text-lg font-medium text-white">
                {milestones[1].title}
              </h3>
            </div>

            {/* 2028 */}
            <div className="absolute right-[8%] top-[55px] flex flex-col items-center">
              <div className="h-5 w-5 rounded-full border-2 border-amber-400 bg-neutral-950">
                <div className="m-auto mt-[3px] h-2 w-2 rounded-full bg-amber-400" />
              </div>

              <p className="mt-4 font-mono text-sm tracking-[0.2em] text-amber-400">
                {milestones[2].year}
              </p>

              <h3 className="mt-2 text-center text-lg font-medium text-white">
                {milestones[2].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
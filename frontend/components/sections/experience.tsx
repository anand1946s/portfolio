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
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-6 sm:p-8">
          <div className="relative">
            {/* horizontal center line for md+ screens */}
            <div className="hidden md:block absolute inset-x-0 top-1/2 h-px bg-neutral-800" />

            {/* Mobile: vertical stack; MD+: horizontal distribution */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {milestones.map((m) => (
                <div key={m.year} className="flex w-full flex-col items-center text-center md:w-1/3">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-400 bg-neutral-950">
                      <div className="h-2 w-2 rounded-full bg-amber-400" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-mono text-amber-300">{m.year}</div>
                    <div className="mt-2 text-sm text-gray-300">{m.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
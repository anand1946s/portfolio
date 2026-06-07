import { Manrope } from "next/font/google";
import GithubCalendarComponent from "@/components/ui/github-calender";

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
      <p className="text-amber-500 text-sm uppercase tracking-[0.25em]">
        GitHub Activity
      </p>

      <h3 className="mt-2 text-2xl font-semibold text-white">
        Contribution Heatmap
      </h3>

      <div className="mt-6 rounded-xl border border-transparent bg-black/20 p-5">
        <GithubCalendarComponent />
        
      </div>
    </section>
  );
}

const manrope = Manrope({
subsets: ["latin"],
});

function AboutHeader() {
return ( <header className="mb-8"> <p className="text-amber-500 text-sm uppercase tracking-[0.25em]">
About </p>

  <h2 className="text-4xl md:text-5xl font-bold mt-4">
    Who I Am
  </h2>

  <p
    className={`${manrope.className} mt-5 max-w-3xl text-[17px] leading-8 text-gray-300`}
  >
    I’m a Computer Science student at CET Trivandrum passionate about
    software development and problem solving. I enjoy building full-stack
    applications and exploring the fundamentals of computer science.
  </p>
</header>
  );
}

function AboutContent() {
return (
<div
className={`${manrope.className} space-y-5 text-[15px] leading-7 text-gray-300`}
> <p>
My interests span web development, software engineering, and backend
systems. I focus on building practical projects while strengthening my
technical foundations. </p>

  <p>
    I enjoy creating maintainable software with clean architecture,
    reusable components, and thoughtful implementation details.
  </p>
</div>


);
}



function AboutCard() {
return ( <aside className="flex flex-col items-center gap-5"> <div className="flex h-52 w-52 items-center justify-center rounded-full border border-gray-600 bg-gray-700/30"> <span className="text-4xl font-bold text-white">A</span> </div>


  <div className="text-center">
    <p className="text-xl font-semibold">Anand S</p>
    <p className="text-sm text-gray-400">
      Computer Science Student
    </p>
  </div>
</aside>


);
}

export default function About() {
return ( <section
   id="about"
   className="min-h-screen"
 > <div className="mx-auto w-full max-w-6xl px-8 py-20"> <AboutHeader />


    <div className="mt-10 grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <AboutContent />
        <GithubHeatmap />
      </div>

      <div className="lg:col-span-1">
        <AboutCard />
      </div>
    </div>
  </div>
</section>


);
}

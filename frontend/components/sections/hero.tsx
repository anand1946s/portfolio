
import Socials from "@/components/ui/socials";
import ScrollHint from "@/components/ui/scroll";
import FullStack from "@/components/ui/fullstack";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center"
    >
      {/* <Socials /> */}

      <div className=" max-w-6xl px-8 ">

        {/* Intro Row */}
        <div className="flex items-center gap-8 mb-10">
          <p className="text-3xl text-gray-400 tracking-widest">
            Hi I am
          </p>

          <div className="flex-1 h-[2px] bg-amber-500" />
        </div>

        {/* Name */}
        <h1
          className="
            text-3xl
            md:text-9xl
            font-extrabold
            leading-none
          "
        >
          Anand
        </h1>

        {/* Subtitle */}
        <div className="mt-8">
          <FullStack />
        </div>

      </div>

      <ScrollHint />
    </section>
  );
}
import ScrollHint from "@/components/ui/scroll";
import FullStack from "@/components/ui/fullstack";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">

          {/* Intro Row */}
          <div className="mb-6 flex items-center gap-4 md:gap-8">
            <p className="text-sm sm:text-base md:text-xl text-gray-400 tracking-widest">
              Hi I am
            </p>

            <div className="h-px w-12 sm:w-16 md:w-32 bg-amber-500" />
          </div>

          {/* Name */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              font-extrabold
              leading-none
              text-white
            "
          >
            Anand
          </h1>

          {/* Subtitle */}
          <div className="mt-4 md:mt-6">
            <FullStack />
          </div>

        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
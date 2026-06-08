"use client";

import { TypeAnimation } from "react-type-animation";

export default function FullStack() {
  return (
    <div className="mt-4">
      <p
        className="
          text-gray-400
          text-lg
          sm:text-xl
          md:text-2xl
          font-semibold
          tracking-[0.08em]
          text-center
        "
      >
        I am a{" "}
        <span className="text-amber-400">
          <TypeAnimation
            sequence={[
              "Backend Developer",
              2000,
              "CS Student",
              2000,
              "ML Enthusiast",
              2000,
              "FastAPI Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </p>
    </div>
  );
}
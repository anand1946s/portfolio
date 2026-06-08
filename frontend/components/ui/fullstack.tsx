"use client";

import { TypeAnimation } from "react-type-animation";

export default function FullStack() {
  return (
    <div className="mt-4">
      <p className="text-gray-600 text-2xl md:text-2xl font-bold tracking-[0.12em] pl-20">
        {/* I am {" "} */}
        <TypeAnimation
          sequence={[
            " Backend Developer",
            2000,
            " CS Student",
            2000,
            " ML Enthusiast",
            2000,
            " FastAPI Developer",
            2000,
            " Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </p>
    </div>
  );
}
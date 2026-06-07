"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const theme = {
  dark: [
    "#161b22",
    "#3b2200",
    "#8b4500",
    "#d97706",
    "#f59e0b",
  ],
};

export default function GithubCalendarComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <GitHubCalendar
  username="anand1946s"
  theme={theme}
  colorScheme="dark"
  blockSize={8}
  blockMargin={3}
  fontSize={12}
/>
  );
}
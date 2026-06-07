import GithubCalendarComponent from "@/components/ui/github-calender";

function GithubLanguageCard() {
  const username = "anand1946s";

  return (
    <aside className="h-full overflow-hidden rounded-xl border border-gray-700 bg-black/20 p-5">
      <p className="text-amber-500 text-sm uppercase tracking-[0.25em]">
        GitHub Languages
      </p>
      {/* <h4 className="mt-2 text-2xl font-semibold text-white">
        Most used languages
      </h4> */}

      <div className="mt-6">
        <img
    src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=anand1946s&theme=github_dark"
    alt="Languages"
    className="w-full"
    />
      </div>
    </aside>
  );
}

export default function GithubActivityWithLanguages() {
  return (
    <section className="mt-12">
      <div className="grid gap-6 lg:grid-cols-[6.0fr_3.0fr] items-stretch">
        <div className="rounded-xl border border-gray-700 bg-black/20 p-5 min-w-0">
        <p className="text-amber-500 text-sm uppercase tracking-[0.25em]">
            GitHub Activity
        </p>

        {/* <h4 className="mt-2 text-2xl font-semibold text-white">
            Contribution Heatmap
        </h4> */}

        <div className="mt-6">
            <GithubCalendarComponent />
        </div>
        </div>

        <GithubLanguageCard />
      </div>
    </section>
  );
}

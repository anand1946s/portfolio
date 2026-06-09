import Link from "next/link";
// import { Folder } from "lucide-react";


const languageColors: Record<string, string> = {
  TypeScript: "#F7DF1E",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Java: "#ED8B00",
  C: "#A8B9CC",
  "C++": "#9b1010",
  HTML: "#E34F26",
  CSS: "#1572B6",
  SCSS: "#CC6699",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Kotlin: "#7F52FF",
  Dart: "#0175C2",
  PHP: "#777BB4",
  Shell: "#89E051",
};


type Repo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
};

async function getPinnedRepos(): Promise<Repo[]> {
  const query = `
    query {
      user(login: "anand1946s") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
              }
              repositoryTopics(first: 4) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  return json.data.user.pinnedItems.nodes.map((repo: any) => ({
    name: repo.name,
    description: repo.description ?? "No description",
    url: repo.url,
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    language: repo.primaryLanguage?.name ?? "Unknown",
    topics:
      repo.repositoryTopics.nodes.map((t: any) => t.topic.name) ?? [],
  }));
}

export default async function Projects() {
  const repos = await getPinnedRepos();

  return (
    <section
  id="projects"
  className="py-16 px-4 sm:px-6 md:px-12 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-row items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight pl-2 md:pl-7">
              Pinned Projects
            </h2>

            <Link
              href="https://github.com/anand1946s?tab=repositories"
              target="_blank"
              className="
                text-[10px]
                md:text-sm
                font-mono
                tracking-[0.15em]
                md:tracking-[0.25em]
                uppercase
                text-amber-400
                hover:text-amber-300
                transition
                whitespace-nowrap
              "
            >
              View Repos ↗
            </Link>
          </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {repos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.url}
              target="_blank"
              className="
                  group
                  flex
                  flex-col
                  border
                  border-neutral-800
                  bg-neutral-950/40
                  p-3
                  md:p-5
                  min-h-[140px]
                  md:min-h-[340px]
                  transition-all
                  duration-300
                  hover:border-amber-500/70
                "
            >
              {/* Mobile Layout */}
                <div className="md:hidden flex flex-col h-full justify-between">
                  <h3 className="text-sm font-semibold text-white line-clamp-2">
                    {repo.name}
                  </h3>

                  <div className="mt-4 space-y-8 text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] ?? "#f59e0b",
                        }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex gap-3 text-gray-400">
                      <span>★ {repo.stars}</span>
                      <span>⑂ {repo.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex md:flex-col md:h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-amber-300 text-xl">📁</span>

                    <h3 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition">
                      {repo.name}
                    </h3>
                  </div>

                  <p className="font-mono text-gray-400 leading-8 flex-1">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-8">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="
                          border
                          border-neutral-800
                          px-3
                          py-1
                          text-xs
                          font-mono
                          uppercase
                          tracking-wider
                        "
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-800 pt-6 font-mono">
                    <div className="flex gap-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3"
                          style={{
                            backgroundColor:
                              languageColors[repo.language] ?? "#f59e0b",
                          }}
                        />
                        <span>{repo.language}</span>
                      </div>

                      <span>★ {repo.stars}</span>
                      <span>⑂ {repo.forks}</span>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
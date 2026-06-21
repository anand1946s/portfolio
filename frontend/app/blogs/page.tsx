import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogsPage() {
  const blogs = [
    {
      slug: "velowiki",
      title: "VeloWiKi: How We Built a Custom CRM and Directory for VeloCET",
      description: "A technical breakdown of designing and building VeloWiKi—a custom CRM for our college club. We discuss our database design, FastAPI backend, Next.js web portal with Google authentication, and our trial with a Discord bot interface.",
      date: "June 21, 2026",
      readTime: "8 min read",
      tags: ["Full Stack", "FastAPI", "Next.js", "PostgreSQL"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Navigation */}
        <div className="mb-12">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-mono
              uppercase
              tracking-wider
              text-neutral-400
              hover:text-amber-400
              transition-colors
              duration-200
            "
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              text-white
              mb-4
            "
          >
            Blogs
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl font-mono">
            Technical breakdowns, engineering challenges, and software notes.
          </p>
          <div className="h-0.5 w-16 bg-amber-500 mt-6" />
        </div>

        {/* Blog Grid / List */}
        <div className="flex flex-col gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="
                group
                block
                border
                border-neutral-800
                bg-neutral-950/40
                p-6
                md:p-8
                transition-all
                duration-300
                hover:border-amber-500/70
                hover:bg-neutral-900/10
              "
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        border
                        border-neutral-800
                        px-2.5
                        py-0.5
                        text-[10px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-neutral-400
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  group-hover:text-amber-400
                  transition-colors
                  duration-300
                  mb-3
                "
              >
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
                {blog.description}
              </p>

              {/* Read Link */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-mono
                  uppercase
                  tracking-widest
                  text-amber-400
                  group-hover:text-amber-300
                  transition-colors
                  duration-200
                "
              >
                Read Article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
export default function BlogsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            tracking-wide
            mb-6
          "
        >
          Blogs
        </h1>

        <div className="h-0.5 w-24 mx-auto bg-amber-500 mb-8" />

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
          I'm currently working on this section.
          <br />
          When I start doing blogs, I will update here. Thanks.
        </p>
      </div>
    </main>
  );
}
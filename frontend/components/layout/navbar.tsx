
export default function Navbar() {
  const navItems = [
    { name: "Resume", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-10 w-full z-50 px-20 py-10">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-5xl font-bold -ml-20">
          A
        </div>

        {/* Nav Links */}
        <div className="flex gap-24 text-sm tracking-[0.3em] uppercase">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group
                relative
                transition-colors
                duration-300
                hover:text-amber-500
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-amber-500
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}

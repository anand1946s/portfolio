export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="border border-amber-400/40 p-4 sm:p-6 md:p-8">
          <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Contact
          </h2>

          <p className="mt-4 text-lg text-amber-300">
            Let&apos;s build something together
          </p>

          <form className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                  Your Name
                </label>

                <div className="mt-4 border border-neutral-800 transition-colors duration-300 focus-within:border-amber-400">
                  <input type="text" className="w-full bg-transparent px-4 py-3 text-white outline-none" />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                  Your Email
                </label>

                <div
                  className="
                    mt-4
                    border
                    border-neutral-800
                    transition-colors
                    duration-300
                    focus-within:border-amber-400
                  "
                >
                  <input
                    type="text"
                    className="
                      w-full
                      bg-transparent
                      px-5
                      py-5
                      text-white
                      outline-none
                    "
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                Your Message
              </label>

              <div className="mt-4 border border-neutral-800 transition-colors duration-300 focus-within:border-amber-400">
                <input type="text" className="w-full bg-transparent px-4 py-3 text-white outline-none" />
              </div>
            </div>

            <button
              type="button"
              className="
                mt-12
                inline-flex
                items-center
                gap-4
                border
                border-amber-400
                bg-amber-400
                px-6
                py-3
                font-mono
                text-sm
                uppercase
                tracking-[0.2em]
                text-black
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-amber-400
              "
            >
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
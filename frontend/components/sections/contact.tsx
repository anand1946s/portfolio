export default function Contact() {
  return (
    <section id="contact" className="py-24 px-14">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            border
            border-amber-400/40
            px-10
            py-12
          "
        >
    <div className="max-w-5xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Contact
          </h2>

          <p className="mt-8 text-1xl text-amber-300">
            Let&apos;s build something together
          </p>

          <form className="mt-20">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                  Your Name
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

            <div className="mt-20">
              <label className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                Your Message
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
                px-8
                py-4
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
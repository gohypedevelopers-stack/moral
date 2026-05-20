type Category = {
  label: string
}

const categories: Category[] = [
  { label: "Men" },
  { label: "Women" },
]

function CategoryButton({ label }: Category) {
  return (
    <button
      type="button"
      className="group inline-flex flex-col items-center gap-3 text-white"
      aria-label={label}
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white sm:text-[0.8rem]">
        {label}
      </span>
      <span className="h-px w-20 bg-white/90 transition-all duration-300 group-hover:w-28 sm:w-24" />
    </button>
  )
}

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-9rem)] overflow-hidden bg-black">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] brightness-[0.86] contrast-110 saturate-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/logo.png"
      >
        <source src="/Moral.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.06)_38%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.38)_100%)]" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-5xl -translate-y-3 flex-col items-center text-center">
          <div className="text-[0.72rem] font-medium uppercase tracking-[0.34em] text-white sm:text-[0.8rem]">
            2025/26
          </div>

          <h1 className="mt-5 text-[clamp(3.2rem,7vw,5.8rem)] font-extralight leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.38)]">
            Ready to Wear
          </h1>

          <nav
            aria-label="Hero categories"
            className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            {categories.map((category) => (
              <CategoryButton key={category.label} {...category} />
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

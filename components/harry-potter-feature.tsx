import Image from "next/image"

function CategoryButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="group inline-flex flex-col items-center text-white"
      aria-label={label}
    >
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white sm:text-[0.84rem]">
        {label}
      </span>
      <span className="mt-3 h-px w-20 bg-white/90 transition-all duration-300 group-hover:w-24 sm:w-24" />
    </button>
  )
}

export function HarryPotterFeature() {
  return (
    <section className="border-b border-white/10 bg-black text-white">
      <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
        <Image
          src="/products/image23.webp"
          alt="Harry Potter x MORAL campaign featuring seated models"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.8] contrast-105 saturate-90"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_28%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.62)_100%)]" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="flex w-full max-w-5xl flex-col items-center">
            <h2 className="text-[clamp(2.4rem,4vw,4.6rem)] font-light leading-[0.92] tracking-[-0.06em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:text-[clamp(2.8rem,4.4vw,5rem)]">
              HARRY POTTER X MORAL
            </h2>

            <nav
              aria-label="Harry Potter campaign categories"
              className="mt-8 flex items-center justify-center gap-6 sm:gap-10"
            >
              <CategoryButton label="Men" />
              <CategoryButton label="Women" />
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

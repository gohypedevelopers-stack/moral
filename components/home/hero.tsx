import Image from "next/image"

const heroActions = ["MEN", "WOMEN"] as const

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-6rem)] overflow-hidden bg-black text-white sm:min-h-[calc(100svh-7.5rem)] md:min-h-[calc(100svh-10.5rem)]">
      <Image
        src="/products/image29.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_26%] brightness-90 contrast-105 saturate-90 sm:object-[center_30%] md:object-[center_36%]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.02)_28%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.12)_64%,rgba(0,0,0,0.36)_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="flex w-full max-w-6xl translate-y-[2vh] flex-col items-center text-center md:translate-y-[4vh]">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/95 sm:text-[0.82rem] sm:tracking-[0.36em]">
            2025/26
          </p>

          <h1 className="max-w-[12rem] text-[clamp(2.2rem,12vw,6rem)] font-light leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.22)] sm:max-w-none sm:text-[clamp(2.9rem,5.8vw,6rem)]">
            Ready to Wear
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-6 sm:gap-x-10">
            {heroActions.map((action) => (
              <div key={action} className="flex flex-col items-center">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/95 sm:text-[0.82rem] sm:tracking-[0.24em]">
                  {action}
                </span>
                <span className="mt-2 h-px w-14 bg-white/90 sm:mt-3 sm:w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

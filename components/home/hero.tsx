import Image from "next/image"

const heroActions = ["MEN", "WOMEN"] as const

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-10rem)] overflow-hidden bg-black text-white">
      <Image
        src="/products/image29.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_36%] brightness-90 contrast-105 saturate-90"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.02)_28%,rgba(0,0,0,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.12)_64%,rgba(0,0,0,0.36)_100%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="flex w-full max-w-6xl translate-y-[4vh] flex-col items-center text-center">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-white/95 sm:text-[0.82rem]">
            2025/26
          </p>

          <h1 className="text-[clamp(2.9rem,5.8vw,6rem)] font-light leading-[0.92] tracking-[-0.06em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.22)]">
            Ready to Wear
          </h1>

          <div className="mt-6 flex items-center justify-center gap-8 sm:gap-10">
            {heroActions.map((action) => (
              <div key={action} className="flex flex-col items-center">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/95 sm:text-[0.82rem]">
                  {action}
                </span>
                <span className="mt-3 h-px w-20 bg-white/90 sm:w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

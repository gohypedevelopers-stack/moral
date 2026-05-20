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
    </section>
  )
}

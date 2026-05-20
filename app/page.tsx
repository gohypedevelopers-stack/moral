import { Navbar } from "@/components/navbar"

import { HomeHero } from "@/components/home/hero"
import { JustDroppedSection } from "@/components/just-dropped"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col overflow-x-hidden bg-black text-white">
      <Navbar />
      <HomeHero />
      <JustDroppedSection />
    </main>
  )
}

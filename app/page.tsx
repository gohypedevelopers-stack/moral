import { Navbar } from "@/components/navbar"

import { HomeHero } from "@/components/home/hero"
import { JustDroppedSection } from "@/components/just-dropped"
import { CollectionsGrid } from "@/components/collections-grid"
import { LookbookCarousel } from "@/components/lookbook-carousel"
import { CampaignFeature } from "@/components/campaign-feature"
import { HarryPotterFeature } from "@/components/harry-potter-feature"
import { AccessoriesFeature } from "@/components/accessories-feature"
import { ShadesFeature } from "@/components/shades-feature"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-svh flex-col overflow-x-hidden bg-black text-white">
        <HomeHero />
        <JustDroppedSection />
        <LookbookCarousel />
        <CollectionsGrid />
        <CampaignFeature />
        <HarryPotterFeature />
        <AccessoriesFeature />
        <ShadesFeature />
        <LatestBlogPosts />
        <Footer />
      </main>
    </>
  )
}

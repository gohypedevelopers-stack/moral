"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  imageSrc: string
  imageAlt: string
  imageClassName?: string
}

const baseSlides: Slide[] = [
  {
    imageSrc: "/products/image13.webp",
    imageAlt: "MORAL campaign look with hoodie set",
  },
  {
    imageSrc: "/products/image14.jpg",
    imageAlt: "MORAL campaign look with seated models",
  },
  {
    imageSrc: "/products/image15.webp",
    imageAlt: "MORAL campaign look with bat-themed hoodies",
  },
]

const slides: Slide[] = Array.from({ length: 9 }, (_, index) => baseSlides[index % baseSlides.length])

function CarouselSlide({ slide }: { slide: Slide }) {
  return (
    <div className="min-w-0 shrink-0 basis-full pl-2 sm:basis-1/2 lg:basis-[32.5%] bg-white">
      <article className="relative h-[72vh] min-h-[560px] overflow-hidden bg-white sm:h-[78vh] lg:h-[88vh]">
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={slide.imageClassName ?? "object-cover object-center"}
          priority={false}
        />
      </article>
    </div>
  )
}

export function LookbookCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section className="relative bg-black text-white">
      <div className="relative mx-auto w-full">
        <h2 className="sr-only">Lookbook carousel</h2>

        <button
          type="button"
          aria-label="Previous look"
          onClick={scrollPrev}
          disabled={!emblaApi}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white/80 transition hover:text-white disabled:cursor-default disabled:opacity-40 sm:left-6 lg:left-8"
        >
          <ChevronLeft className="size-12 sm:size-14 lg:size-16" strokeWidth={1.6} />
        </button>

        <button
          type="button"
          aria-label="Next look"
          onClick={scrollNext}
          disabled={!emblaApi}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white/80 transition hover:text-white disabled:cursor-default disabled:opacity-40 sm:right-6 lg:right-8"
        >
          <ChevronRight className="size-12 sm:size-14 lg:size-16" strokeWidth={1.6} />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-2">
            {slides.map((slide, index) => (
              <CarouselSlide key={`${slide.imageSrc}-${index}`} slide={slide} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

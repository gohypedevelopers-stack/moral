"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Product = {
  name: string
  price: string
  imageSrc: string
  imageAlt: string
  imageClassName?: string
}

const PAGE_SIZE = 4

const products: Product[] = [
  {
    name: "MORAL x UFC Candle",
    price: "Rs. 21,726.07",
    imageSrc: "/products/image1.webp",
    imageAlt: "Black MORAL x UFC candle",
  },
  {
    name: "MORAL x UFC Acid Wash Hoodie",
    price: "Rs. 19,750.97",
    imageSrc: "/products/image2.webp",
    imageAlt: "Black MORAL x UFC acid wash hoodie",
  },
  {
    name: "MORAL x Acid Wash Tee",
    price: "Rs. 15,800.78",
    imageSrc: "/products/image3.webp",
    imageAlt: "Black MORAL x acid wash tee",
  },
  {
    name: "MORAL x UFC 'Glory' Hoodie",
    price: "Rs. 13,825.68",
    imageSrc: "/products/image4.webp",
    imageAlt: "Black MORAL x UFC Glory hoodie",
  },
  {
    name: "MORAL Signature Mohair Cardigan",
    price: "Rs. 5,925.29",
    imageSrc: "/products/image5.jpg",
    imageAlt: "Black MORAL signature mohair cardigan",
  },
  {
    name: "MORAL x UFC Water Bottle",
    price: "Rs. 5,925.29",
    imageSrc: "/products/image6.webp",
    imageAlt: "Black MORAL x UFC water bottle",
  },
  {
    name: "MORAL x UFC 'Glove' Tee",
    price: "Rs. 5,925.29",
    imageSrc: "/products/image7.webp",
    imageAlt: "Black MORAL x UFC glove tee",
  },
  {
    name: "MORAL x UFC Keychain",
    price: "Rs. 6,285.00",
    imageSrc: "/products/image8.webp",
    imageAlt: "Black MORAL x UFC keychain",
  },
  {
    name: "MORAL Wool Jacket",
    price: "Rs. 7,840.00",
    imageSrc: "/products/image9.webp",
    imageAlt: "Black MORAL wool jacket",
  },
  {
    name: "MORAL Wool Trouser",
    price: "Rs. 18,420.00",
    imageSrc: "/products/image10.jpg",
    imageAlt: "Black MORAL wool trouser",
  },
  {
    name: "MORAL Tank Top with Built in Bra",
    price: "Rs. 19,260.00",
    imageSrc: "/products/image11.webp",
    imageAlt: "Black MORAL tank top with built-in bra",
  },
  {
    name: "MORAL Tee with Built In Bra",
    price: "Rs. 19,260.00",
    imageSrc: "/products/image12.webp",
    imageAlt: "Black MORAL tee with built-in bra",
  },
]

function chunkProducts(items: Product[], size: number) {
  const pages: Product[][] = []

  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size))
  }

  return pages
}

const productPages = chunkProducts(products, PAGE_SIZE)

function ProductCard({
  product,
  priority = false,
}: {
  product: Product
  priority?: boolean
}) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden bg-[#bdbdbd] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 25vw"
          className={product.imageClassName ?? "object-contain object-center"}
          priority={priority}
        />
      </div>

      <div className="pt-3">
        <h3 className="text-[1rem] font-semibold leading-6 tracking-[-0.02em] text-black">
          {product.name}
        </h3>
        <p className="mt-1 text-[0.92rem] text-black/72">{product.price}</p>
      </div>
    </article>
  )
}

export function JustDroppedSection() {
  const [activePage, setActivePage] = React.useState(0)

  const totalPages = productPages.length
  const canGoPrev = activePage > 0
  const canGoNext = activePage < totalPages - 1

  const goPrev = () => {
    setActivePage((current) => Math.max(0, current - 1))
  }

  const goNext = () => {
    setActivePage((current) => Math.min(totalPages - 1, current + 1))
  }

  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1720px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <h2 className="text-center text-[clamp(1.9rem,2.8vw,2.8rem)] font-semibold tracking-[-0.04em]">
          Just Dropped
        </h2>

        <div className="relative mt-10 lg:mt-12">
          <button
            type="button"
            aria-label="Previous products"
            onClick={goPrev}
            disabled={!canGoPrev}
            className="absolute -left-10 top-[44%] z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center text-black/70 transition hover:text-black disabled:cursor-default disabled:opacity-25 lg:flex"
          >
            <ChevronLeft className="size-12" strokeWidth={1.8} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                transform: `translate3d(-${activePage * 100}%, 0, 0)`,
              }}
            >
              {productPages.map((page, pageIndex) => (
                <div key={page[0].name} className="min-w-full shrink-0">
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {page.map((product, itemIndex) => (
                      <ProductCard
                        key={product.name}
                        product={product}
                        priority={pageIndex === 0 && itemIndex < PAGE_SIZE}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next products"
            onClick={goNext}
            disabled={!canGoNext}
            className="absolute -right-10 top-[44%] z-20 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center text-black/70 transition hover:text-black disabled:cursor-default disabled:opacity-25 lg:flex"
          >
            <ChevronRight className="size-12" strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center border-b border-black/80 pb-2 text-sm font-medium tracking-[0.08em] transition hover:border-black"
          >
            Shop All
          </button>
        </div>
      </div>
    </section>
  )
}

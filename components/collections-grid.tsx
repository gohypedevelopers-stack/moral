import Image from "next/image"

type CollectionItem = {
  title: string
  imageSrc: string
  imageAlt: string
  imageClassName?: string
  underlineClassName?: string
}

const collections: CollectionItem[] = [
  {
    title: "Men",
    imageSrc: "/products/image16.webp",
    imageAlt: "Black jacket for men",
    imageClassName: "object-contain object-center scale-[0.98]",
    underlineClassName: "w-10",
  },
  {
    title: "Women",
    imageSrc: "/products/image17.webp",
    imageAlt: "Black skirt for women",
    imageClassName: "object-contain object-center scale-[0.94]",
    underlineClassName: "w-12",
  },
  {
    title: "Men's Accessories",
    imageSrc: "/products/image18.webp",
    imageAlt: "Black sunglasses",
    imageClassName: "object-contain object-center scale-[0.86]",
    underlineClassName: "w-32",
  },
  {
    title: "Women's Accessories",
    imageSrc: "/products/image19.webp",
    imageAlt: "Black handbag",
    imageClassName: "object-contain object-center scale-[0.93]",
    underlineClassName: "w-36",
  },
  {
    title: "MORAL Home",
    imageSrc: "/products/image20.webp",
    imageAlt: "Black notebook",
    imageClassName: "object-contain object-center scale-[0.93]",
    underlineClassName: "w-24",
  },
  {
    title: "Digital",
    imageSrc: "/products/image21.webp",
    imageAlt: "Black digital smartphone wallpaper",
    imageClassName: "object-contain object-center scale-[0.9]",
    underlineClassName: "w-14",
  },
]

function CollectionCard({ item }: { item: CollectionItem }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[0.82] overflow-hidden bg-[#f5f5f5]">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className={item.imageClassName ?? "object-contain object-center"}
        />
      </div>

      <div className="flex flex-col items-center pt-4 text-center sm:pt-6">
        <h3 className="text-[0.84rem] font-medium leading-tight tracking-[-0.02em] text-black sm:text-[1.03rem]">
          {item.title}
        </h3>
        <span
          className={`mt-2 block h-px bg-black/80 sm:mt-3 ${item.underlineClassName ?? "w-12"}`}
        />
      </div>
    </article>
  )
}

export function CollectionsGrid() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1700px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <h2 className="text-center text-[clamp(1.7rem,2.4vw,2.55rem)] font-semibold tracking-[-0.04em]">
          Explore the Maison&apos;s Collections
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
          {collections.map((item) => (
            <CollectionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

type BlogPost = {
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

const posts: BlogPost[] = [
  {
    title: "MORAL x UFC",
    imageSrc: "/products/image26.webp",
    imageAlt: "MORAL x UFC campaign back view",
    description:
      "MORAL and UFC unite for a bold all-black capsule collection built around graphic statements, athletic cuts, and a minimal luxury edge.",
  },
  {
    title: "Harry Potter x MORAL",
    imageSrc: "/products/image27.webp",
    imageAlt: "Harry Potter x MORAL hoodie campaign",
    description:
      "MORAL teams up with Warner Bros. Discovery Global Consumer Products for an exclusive Harry Potter-inspired capsule with a dark, modern finish.",
  },
  {
    title: "MORAL's coziest hoodie yet",
    imageSrc: "/products/image28.webp",
    imageAlt: "MORAL cozy hoodie campaign",
    description:
      "A colder-season essential designed for comfort and texture, with a plush feel that keeps the silhouette clean, soft, and quietly elevated.",
  },
]

export function LatestBlogPosts() {
  return (
    <section className="border-b border-black/10 bg-white text-black">
      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h2 className="text-center text-[clamp(1.8rem,2.2vw,2.25rem)] font-semibold tracking-[-0.04em] text-black">
          Latest blog posts
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
          {posts.map((post, index) => (
            <article key={post.title} className="flex flex-col">
              <div className="relative aspect-[1/1] overflow-hidden bg-neutral-200">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <a
                  href="#"
                  className="inline-block text-[1.1rem] font-semibold tracking-[-0.03em] underline decoration-black/90 decoration-1 underline-offset-4 transition hover:opacity-70 sm:text-[1.2rem]"
                >
                  {post.title}
                </a>

                <p className="mt-5 max-w-[38ch] text-[0.95rem] leading-7 text-black/90">
                  {post.description}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block w-fit text-[0.95rem] font-medium text-black underline decoration-black/70 underline-offset-4 transition hover:opacity-70"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="inline-flex flex-col items-center text-[0.98rem] font-semibold text-black transition hover:opacity-70"
          >
            <span>See all blog posts</span>
            <span className="mt-3 h-px w-36 bg-black/80" />
          </a>
        </div>
      </div>
    </section>
  )
}

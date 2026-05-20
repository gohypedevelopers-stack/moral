import Link from "next/link"
import type { ReactNode } from "react"
import {
  ChevronDown,
  Camera,
  Music2,
  X,
} from "lucide-react"

type FooterLink = {
  label: string
  href: string
}

type FooterGroup = {
  title: string
  links: FooterLink[]
}

const groups: FooterGroup[] = [
  {
    title: "Collections",
    links: [
      { label: "Men", href: "#" },
      { label: "Women", href: "#" },
      { label: "Shades of MORAL", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Collabs", href: "#" },
      { label: "Gifts", href: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Returns", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "MORAL List", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
      { label: "About", href: "#" },
      { label: "Member", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Reviews", href: "#" },
    ],
  },
]

function FooterLinkList({ title, links }: FooterGroup) {
  return (
    <section className="space-y-5">
      <h2 className="text-[1rem] font-medium tracking-[-0.01em] text-white sm:text-[1.05rem]">
        {title}
      </h2>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[0.92rem] font-medium text-white/90 transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: ReactNode
  label: string
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 text-[0.92rem] font-medium text-white/90 transition-opacity hover:opacity-70"
      >
        <span className="inline-flex size-4 items-center justify-center text-white">
          {icon}
        </span>
        <span>{label}</span>
      </Link>
    </li>
  )
}

function FooterSelect({
  label,
  options,
  defaultValue,
}: {
  label: string
  options: string[]
  defaultValue: string
}) {
  return (
    <div className="space-y-2">
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
      </div>
      <div className="relative w-[7.6rem] sm:w-[8.4rem]">
        <select
          defaultValue={defaultValue}
          className="h-12 w-full appearance-none border border-white/15 bg-transparent px-4 pr-11 text-[0.86rem] font-semibold text-white outline-none transition-colors hover:border-white/30"
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-white" />
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex min-h-[34rem] max-w-[1720px] flex-col px-4 py-16 sm:px-6 lg:min-h-[42rem] lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {groups.map((group) => (
            <FooterLinkList key={group.title} {...group} />
          ))}

          <section className="space-y-5">
            <h2 className="text-[1rem] font-medium tracking-[-0.01em] text-white sm:text-[1.05rem]">
              Follow us
            </h2>
            <ul className="space-y-3.5">
              <SocialLink href="#" label="Twitter" icon={<X className="size-4" strokeWidth={2} />} />
              <SocialLink
                href="#"
                label="Facebook"
                icon={<span className="text-[0.95rem] font-semibold leading-none">f</span>}
              />
              <SocialLink
                href="#"
                label="Pinterest"
                icon={<span className="text-[0.95rem] font-semibold leading-none">p</span>}
              />
              <SocialLink
                href="#"
                label="Instagram"
                icon={<Camera className="size-4" strokeWidth={2} />}
              />
              <SocialLink
                href="#"
                label="TikTok"
                icon={<Music2 className="size-4" strokeWidth={2} />}
              />
            </ul>
          </section>
        </div>

        <div className="mt-auto pt-16">
          <div className="border-t border-white/15 pt-10" />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap gap-5 sm:gap-6">
              <FooterSelect
                label="Language"
                defaultValue="English"
                options={["English", "French", "Spanish", "German"]}
              />
              <FooterSelect
                label="Country/Region"
                defaultValue="India(INR ₹)"
                options={["India(INR ₹)", "United States(USD $)", "United Kingdom(GBP £)"]}
              />
            </div>

            <div className="text-right text-[0.88rem] font-medium text-white/90">
              Copyright © 2026 MORAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

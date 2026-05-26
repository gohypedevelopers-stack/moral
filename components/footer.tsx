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

type FooterDisplayLink = FooterLink & {
  icon?: ReactNode
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

const socialLinks: FooterDisplayLink[] = [
  { label: "Twitter", href: "#", icon: <X className="size-4" strokeWidth={2} /> },
  {
    label: "Facebook",
    href: "#",
    icon: <span className="text-[0.95rem] font-semibold leading-none">f</span>,
  },
  {
    label: "Pinterest",
    href: "#",
    icon: <span className="text-[0.95rem] font-semibold leading-none">p</span>,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <Camera className="size-4" strokeWidth={2} />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <Music2 className="size-4" strokeWidth={2} />,
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

function FooterMobileDisclosure({
  title,
  links,
}: {
  title: string
  links: FooterDisplayLink[]
}) {
  return (
    <details className="group border-b border-white/10 md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.96rem] font-medium tracking-[-0.01em] text-white outline-none transition hover:text-white/90 [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown className="size-4 shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <ul className="space-y-3 pb-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-3 text-[0.92rem] font-medium text-white/90 transition-opacity hover:opacity-70"
            >
              {link.icon ? (
                <span className="inline-flex size-4 items-center justify-center text-white">
                  {link.icon}
                </span>
              ) : null}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
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
    <div className="w-full space-y-2 sm:w-auto">
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
      </div>
      <div className="relative w-full sm:w-[8.4rem]">
        <select
          defaultValue={defaultValue}
          className="h-11 w-full appearance-none border border-white/15 bg-transparent px-4 pr-11 text-[0.86rem] font-semibold text-white outline-none transition-colors hover:border-white/30 sm:h-12"
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
      <div className="mx-auto flex max-w-[1720px] flex-col px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[42rem] lg:px-8 lg:py-20">
        <div className="md:hidden">
          <FooterMobileDisclosure title="Collections" links={groups[0].links} />
          <FooterMobileDisclosure title="Information" links={groups[1].links} />
          <FooterMobileDisclosure title="More" links={groups[2].links} />
          <FooterMobileDisclosure title="Follow us" links={socialLinks} />
        </div>

        <div className="hidden gap-12 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {groups.map((group) => (
            <FooterLinkList key={group.title} {...group} />
          ))}

          <section className="space-y-5">
            <h2 className="text-[1rem] font-medium tracking-[-0.01em] text-white sm:text-[1.05rem]">
              Follow us
            </h2>
            <ul className="space-y-3.5">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 sm:mt-14 sm:pt-10 lg:mt-auto lg:pt-16">
          <div className="border-t border-white/15 pt-10" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
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

            <div className="text-center text-[0.82rem] font-medium text-white/90 sm:text-[0.88rem] lg:text-right">
              Copyright © 2026 MORAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

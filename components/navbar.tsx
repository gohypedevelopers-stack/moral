"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User } from "lucide-react"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export type NavbarLink = {
  label: string
  href: string
}

export type NavbarProps = {
  brandHref?: string
  className?: string
  links?: NavbarLink[]
  onAccountClick?: () => void
  onCartClick?: () => void
  onSearchClick?: () => void
}

const defaultLinks: NavbarLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "MORAL Home", href: "#" },
  { label: "Digital", href: "#" },
  { label: "Collab", href: "#" },
  { label: "Outlet", href: "#" },
  { label: "Gifts", href: "#" },
]

function AnnouncementBar() {
  return (
    <div className="flex h-9 items-center justify-center border-b border-black/10 bg-[#b8b8b8] px-4 text-center text-[0.72rem] font-medium leading-none tracking-[0.08em] text-black sm:h-10 sm:text-[0.8rem]">
      <p className="truncate">20% OFF with code MEMORIAL20</p>
    </div>
  )
}

function NavbarIconButton({
  children,
  className,
  label,
  onClick,
}: React.PropsWithChildren<{
  className?: string
  label: string
  onClick?: () => void
}>) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        className
      )}
    >
      {children}
    </button>
  )
}

function NavbarLinkItem({ label, href }: NavbarLink) {
  return (
    <li>
      <Link
        href={href}
        className="group relative inline-flex items-center py-1 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
      >
        <span>{label}</span>
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-white transition-transform group-hover:scale-x-100" />
      </Link>
    </li>
  )
}

export function Navbar({
  brandHref = "/",
  className,
  links = defaultLinks,
  onAccountClick,
  onCartClick,
  onSearchClick,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <AnnouncementBar />
      <header
        data-slot="navbar"
        className={cn("sticky top-0 z-50 w-full bg-black text-white", className)}
      >
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center border-b border-white/10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <NavbarIconButton
              label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="-ml-1"
            >
              <Menu className="size-5" strokeWidth={1.7} />
            </NavbarIconButton>
            <NavbarIconButton label="Search" onClick={onSearchClick}>
              <Search className="size-5" strokeWidth={1.7} />
            </NavbarIconButton>
          </div>

          <Link
            href={brandHref}
            aria-label="MORAL home"
            className="flex items-center justify-center text-white"
          >
            <Image
              src="/logo.png"
              alt="MORAL logo"
              width={1199}
              height={478}
              priority
              className="h-8 w-auto sm:h-9 lg:h-15"
            />
          </Link>

          <div className="flex items-center justify-end gap-1 sm:gap-1.5">
            <NavbarIconButton label="Account" onClick={onAccountClick}>
              <User className="size-5" strokeWidth={1.7} />
            </NavbarIconButton>
            <NavbarIconButton label="Shopping bag" onClick={onCartClick}>
              <ShoppingBag className="size-5" strokeWidth={1.7} />
            </NavbarIconButton>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="hidden border-b border-white/10 md:block"
        >
          <ul className="flex h-12 items-center justify-center gap-6 lg:gap-8">
            {links.map((link) => (
              <NavbarLinkItem key={link.label} {...link} />
            ))}
          </ul>
        </nav>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="left"
          className="w-[min(22rem,86vw)] border-white/10 bg-black text-white"
        >
          <div className="flex h-full flex-col px-6 py-8">
            <div className="pb-10">
              <Image
                src="/logo.png"
                alt="MORAL logo"
                width={1199}
                height={478}
                className="h-8 w-auto"
              />
            </div>

            <nav aria-label="Mobile primary" className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[0.9rem] font-semibold uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6 text-sm text-white/60">
              New arrivals, seasonal edits, and digital exclusives.
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

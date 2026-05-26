"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { PRELOADER_EXIT_MS, PRELOADER_STORAGE_KEY } from "@/lib/preloader"

const VIDEO_START_TIME = 0.9

export type PreloaderProps = {
  className?: string
  message?: string
  storageKey?: string
  videoSrc?: string
}

export function Preloader({
  className,
  message = "Click or scroll to enter",
  storageKey = PRELOADER_STORAGE_KEY,
  videoSrc = "/Moral.mp4",
}: PreloaderProps) {
  const [mounted, setMounted] = React.useState(false)
  const [isLeaving, setIsLeaving] = React.useState(false)
  const [isHidden, setIsHidden] = React.useState(false)
  const exitStartedRef = React.useRef(false)
  const rootRef = React.useRef<HTMLDivElement | null>(null)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const hasPrimedVideoRef = React.useRef(false)
  const touchStartYRef = React.useRef<number | null>(null)
  const exitTimeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const alreadySeen = window.localStorage.getItem(storageKey) === "true"
        if (alreadySeen) {
          setIsHidden(true)
        }
      } catch {}

      setMounted(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [storageKey])

  const getStartTime = React.useCallback((video: HTMLVideoElement) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return VIDEO_START_TIME
    }

    return Math.min(VIDEO_START_TIME, Math.max(0, video.duration - 0.1))
  }, [])

  // Skip the dark lead-in frames and start on the first visible frame.
  const primeVideo = React.useCallback(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true

    const targetTime = getStartTime(video)

    if (!hasPrimedVideoRef.current) {
      if (!Number.isFinite(video.duration) || video.duration <= targetTime) return

      hasPrimedVideoRef.current = true
      video.currentTime = targetTime
      return
    }

    if (Math.abs(video.currentTime - targetTime) > 0.05) {
      video.currentTime = targetTime
      return
    }

    void video.play().catch(() => {
      // Muted autoplay should work in modern browsers; if not, we keep the overlay.
    })
  }, [getStartTime])

  React.useEffect(() => {
    if (!mounted || isHidden) return

    primeVideo()
  }, [mounted, isHidden, primeVideo])

  React.useEffect(() => {
    if (!mounted || isHidden) return

    const body = document.body
    const html = document.documentElement
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = html.style.overflow

    body.style.overflow = "hidden"
    html.style.overflow = "hidden"

    return () => {
      body.style.overflow = previousBodyOverflow
      html.style.overflow = previousHtmlOverflow
    }
  }, [mounted, isHidden])

  React.useEffect(() => {
    return () => {
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    if (!mounted || isHidden) return
    rootRef.current?.focus()
  }, [mounted, isHidden])

  const finishExit = React.useCallback(() => {
    if (exitTimeoutRef.current !== null) {
      window.clearTimeout(exitTimeoutRef.current)
      exitTimeoutRef.current = null
    }

    setIsHidden(true)
  }, [])

  const dismiss = React.useCallback(() => {
    if (isHidden || isLeaving || exitStartedRef.current) return

    exitStartedRef.current = true

    try {
      window.localStorage.setItem(storageKey, "true")
      document.cookie = `${storageKey}=true; path=/; max-age=31536000; samesite=lax`
    } catch {
      // Ignore storage failures and continue hiding the preloader.
    }

    window.requestAnimationFrame(() => {
      setIsLeaving(true)
      exitTimeoutRef.current = window.setTimeout(() => {
        finishExit()
      }, PRELOADER_EXIT_MS)
    })
  }, [finishExit, isHidden, isLeaving, storageKey])

  const handleWheel = React.useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (event.deltaY > 8) {
        event.preventDefault()
        dismiss()
      }
    },
    [dismiss]
  )

  const handleTouchStart = React.useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null
    },
    []
  )

  const handleTouchMove = React.useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartYRef.current === null) return

      const currentY = event.touches[0]?.clientY
      if (currentY === undefined) return

      const deltaY = touchStartYRef.current - currentY
      if (deltaY > 16) {
        event.preventDefault()
        dismiss()
      }
    },
    [dismiss]
  )

  const handleTouchEnd = React.useCallback(() => {
    touchStartYRef.current = null
  }, [])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "Spacebar" ||
        event.key === "ArrowDown"
      ) {
        event.preventDefault()
        dismiss()
      }
    },
    [dismiss]
  )

  const handleAnimationEnd = React.useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return

      if (isLeaving) {
        finishExit()
      }
    },
    [finishExit, isLeaving]
  )

  if (isHidden) {
    return null
  }

  return (
    <div
      ref={rootRef}
      data-preloader-overlay
      data-state={isLeaving ? "leaving" : "idle"}
      role="button"
      tabIndex={0}
      aria-label="Click or scroll to enter the site"
      onClick={dismiss}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onKeyDown={handleKeyDown}
      onAnimationEnd={handleAnimationEnd}
      className={cn(
        "fixed inset-0 z-[100] overflow-hidden bg-black text-white outline-none transform-gpu",
        "translate-y-0 opacity-100",
        className
      )}
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_36%] brightness-90 contrast-105 saturate-90"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={primeVideo}
          onSeeked={primeVideo}
          onCanPlay={primeVideo}
          onEnded={() => {
            const video = videoRef.current
            if (!video) return

            video.currentTime = getStartTime(video)
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.04)_34%,rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.18)_66%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative z-10 flex h-full w-full items-end justify-center px-6 pb-10 sm:px-8 sm:pb-12 lg:pb-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-[clamp(0.72rem,1.4vw,0.92rem)] font-semibold uppercase tracking-[0.34em] text-white/90">
            {message}
          </p>
          <span className="h-px w-24 bg-white/40" />
        </div>
      </div>
    </div>
  )
}

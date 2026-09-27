"use client";

import { useState } from "react";

import type { Video } from "@/data/videos";
import { cn } from "@/lib/utils";

/**
 * Click-to-play YouTube embed. Renders only the thumbnail until the user presses play,
 * so the page loads no YouTube script until it is asked to.
 */
export function LiteYouTube({ video, className, priority = false }: { video: Video; className?: string; priority?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-[12px] bg-ink", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${video.title}`} className="group absolute inset-0 size-full cursor-pointer text-left">
          {/* hqdefault is 4:3 with black bars; object-cover crops them away */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-ink/10 transition-colors duration-300 group-hover:bg-ink/0" />
          <span className="absolute bottom-4 left-4 inline-flex h-11 items-center gap-2 rounded-full bg-white pr-4 pl-3 text-[14px] font-semibold text-ink">
            <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
            Play
          </span>
        </button>
      )}
    </div>
  );
}

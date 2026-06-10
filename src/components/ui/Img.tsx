"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import blur from "@/content/blur.json";

const blurMap = blur as Record<string, string>;

/**
 * next/image wrapper that auto-applies a generated blur placeholder
 * (from src/content/blur.json) so images bloom in instead of popping.
 * On load error it degrades to a neutral surface instead of a broken icon.
 */
export default function Img({ src, ...rest }: ImageProps & { src: string }) {
  const [retry, setRetry] = useState(0);
  const [failed, setFailed] = useState(false);
  const dataURL = blurMap[src];

  if (failed) {
    return <span aria-hidden className="block h-full w-full bg-bg2" />;
  }

  // Eager-load by default (unless the caller marks it `priority`, which already
  // implies eager). Demo images are pre-sized static WebP, so fetching them up
  // front is cheap and GUARANTEES no empty slot — they no longer depend on
  // lazy-load firing through a transformed `.reveal` ancestor.
  const eager = rest.priority ? {} : { loading: "eager" as const };

  // A transient fetch miss (cold deploy / CDN propagation) can otherwise leave a
  // card permanently blank even though the WebP asset is present and valid.
  // Before degrading to the neutral surface, retry the asset once with a
  // cache-busting query so a momentary miss self-heals instead of sticking.
  const resolvedSrc = retry > 0 ? `${src}${src.includes("?") ? "&" : "?"}r=${retry}` : src;

  return (
    <Image
      key={resolvedSrc}
      src={resolvedSrc}
      onError={() => (retry < 1 ? setRetry((n) => n + 1) : setFailed(true))}
      decoding="async"
      {...eager}
      {...(dataURL ? { placeholder: "blur" as const, blurDataURL: dataURL } : {})}
      {...rest}
    />
  );
}

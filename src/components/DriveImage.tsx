import { useState, useEffect, type ImgHTMLAttributes } from "react";
import { formatImageUrl, getDriveFallbackUrl } from "@/lib/photos";

export interface DriveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

/**
 * Компонент изображения с поддержкой прямых ссылок Google Drive.
 * Автоматически конвертирует ссылки Google Drive в CDN-формат,
 * отключает передачу referrer для защиты от блокировок Google Drive
 * и содержит fallback на случай сбоя одного из зеркал.
 */
export function DriveImage({
  src,
  alt,
  className,
  fallbackSrc,
  onError,
  ...props
}: DriveImageProps) {
  const primaryUrl = formatImageUrl(src);
  const fallbackUrl = getDriveFallbackUrl(src) || fallbackSrc;

  const [currentSrc, setCurrentSrc] = useState(primaryUrl);
  const [attemptedFallback, setAttemptedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(formatImageUrl(src));
    setAttemptedFallback(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!attemptedFallback && fallbackUrl && fallbackUrl !== currentSrc) {
      setAttemptedFallback(true);
      setCurrentSrc(fallbackUrl);
    } else if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
    onError?.(e);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={handleError}
      {...props}
    />
  );
}

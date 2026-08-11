'use client';

export function LaraLogo({
  className = '',
  variant = 'auto',
}: {
  className?: string;
  variant?: 'auto' | 'desktop' | 'mobile';
  animated?: boolean;
}) {
  if (variant === 'desktop') {
    return (
      <img
        src="/brand/lara-wordmark-text.png"
        alt="LARA"
        className={`h-7 w-auto object-contain ${className}`}
      />
    );
  }

  if (variant === 'mobile') {
    return (
      <img
        src="/brand/lara-image.png"
        alt="LARA"
        className={`h-7 w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* Official Desktop Logo */}
      <img
        src="/brand/lara-wordmark-text.png"
        alt="LARA"
        className="hidden h-7 w-auto object-contain sm:block"
      />
      {/* Official Mobile Logo */}
      <img
        src="/brand/lara-image.png"
        alt="LARA"
        className="block h-7 w-auto object-contain sm:hidden"
      />
    </span>
  );
}

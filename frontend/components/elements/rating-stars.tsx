// Arányos csillagok: 4,8 → 4 teli + 1 80%-ban kitöltött csillag (nem 5 teli, ami félrevezető lenne).
import { Star } from 'lucide-react';

export function RatingStars({
  value,
  size = 18,
  className = '',
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex gap-0.5 ${className}`}
      aria-label={`${value.toFixed(1).replace('.', ',')} az 5-ből`}
      role="img"
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i)); // 0..1
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star
              size={size}
              strokeWidth={1.25}
              className="absolute inset-0 text-muted/40"
            />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={size}
                strokeWidth={1.25}
                className="text-muted fill-muted"
              />
            </span>
          </span>
        );
      })}
    </span>
  );
}

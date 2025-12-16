import { cn } from '@/lib/utils';

interface AccountTypeBadgeProps {
  type: string;
}

const typeStyles = {
  personal: 'bg-secondary text-secondary-foreground',
  business: 'bg-primary/10 text-primary',
  premium: 'gradient-gold text-accent-foreground',
  savings: 'bg-secondary text-secondary-foreground',
  current: 'bg-primary/10 text-primary',
};

export function AccountTypeBadge({ type }: AccountTypeBadgeProps) {
  const normalizedType = type.toLowerCase();
  const style = typeStyles[normalizedType as keyof typeof typeStyles] || typeStyles.personal;
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium capitalize',
      style
    )}>
      {normalizedType}
    </span>
  );
}

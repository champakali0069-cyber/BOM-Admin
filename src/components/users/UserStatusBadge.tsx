import { cn } from '@/lib/utils';

interface UserStatusBadgeProps {
  status: string; // Adjusted to allow string to support various inputs, or strictly 'ACTIVE' | 'INACTIVE' | 'BLOCKED'
}

const statusStyles = {
  active: 'bg-success/10 text-success border-success/20',
  inactive: 'bg-muted text-muted-foreground border-muted',
  pending: 'bg-warning/10 text-warning border-warning/20',
  suspended: 'bg-destructive/10 text-destructive border-destructive/20',
  blocked: 'bg-destructive/10 text-destructive border-destructive/20',
};

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const normalizedStatus = status.toLowerCase();
  const style = statusStyles[normalizedStatus as keyof typeof statusStyles] || statusStyles.inactive;

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize',
      style
    )}>
      <span className={cn(
        'w-1.5 h-1.5 rounded-full mr-1.5',
        normalizedStatus === 'active' && 'bg-success',
        normalizedStatus === 'inactive' && 'bg-muted-foreground',
        normalizedStatus === 'pending' && 'bg-warning',
        (normalizedStatus === 'suspended' || normalizedStatus === 'blocked') && 'bg-destructive',
      )} />
      {normalizedStatus}
    </span>
  );
}

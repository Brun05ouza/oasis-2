import { cn } from '@/app/components/ui/utils';

interface BoxGlassProps {
  children: React.ReactNode;
  className?: string;
}

export function BoxGlass({ children, className }: BoxGlassProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 lg:p-10',
        'border border-white/20 shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}

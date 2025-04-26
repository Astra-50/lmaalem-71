
import { Wrench, Hammer, Move, Brush, Sprout, Home, Wrench as ToolsIcon, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { icon: ToolsIcon, label: { en: 'Assembly', ar: 'تجميع' }, href: '#assembly', active: true },
  { icon: Home, label: { en: 'Mounting', ar: 'تثبيت' }, href: '#mounting' },
  { icon: Move, label: { en: 'Moving', ar: 'نقل' }, href: '#moving' },
  { icon: Brush, label: { en: 'Cleaning', ar: 'تنظيف' }, href: '#cleaning' },
  { icon: Sprout, label: { en: 'Outdoor Help', ar: 'مساعدة خارجية' }, href: '#outdoor' },
  { icon: Wrench, label: { en: 'Home Repairs', ar: 'إصلاحات منزلية' }, href: '#repairs' },
  { icon: Home, label: { en: 'Painting', ar: 'طلاء' }, href: '#painting' },
  { icon: TrendingUp, label: { en: 'Trending', ar: 'رائج' }, href: '#trending' },
];

const ServiceCategories = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-8 justify-start md:justify-center min-w-max px-4 py-6">
        {categories.map((category) => (
          <a
            key={category.href}
            href={category.href}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={cn(
                "p-3 rounded-full transition-colors",
                category.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-primary/10"
              )}
            >
              <category.icon className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="block text-sm font-medium text-foreground">
                {category.label.en}
              </span>
              <span className="block text-sm font-medium text-muted-foreground arabic">
                {category.label.ar}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;

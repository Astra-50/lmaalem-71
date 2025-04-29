
import { Wrench, Hammer, Move, Brush, Sprout, Home, Wrench as ToolsIcon, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { icon: ToolsIcon, label: { en: 'Assembly', ar: 'تجميع', fr: 'Assemblage' }, href: 'assembly', active: true },
  { icon: Home, label: { en: 'Mounting', ar: 'تثبيت', fr: 'Montage' }, href: 'mounting' },
  { icon: Move, label: { en: 'Moving', ar: 'نقل', fr: 'Déménagement' }, href: 'moving' },
  { icon: Brush, label: { en: 'Cleaning', ar: 'تنظيف', fr: 'Nettoyage' }, href: 'cleaning' },
  { icon: Sprout, label: { en: 'Outdoor Help', ar: 'مساعدة خارجية', fr: 'Aide extérieure' }, href: 'outdoor' },
  { icon: Wrench, label: { en: 'Home Repairs', ar: 'إصلاحات منزلية', fr: 'Réparations' }, href: 'repairs' },
  { icon: Home, label: { en: 'Painting', ar: 'طلاء', fr: 'Peinture' }, href: 'painting' },
  { icon: TrendingUp, label: { en: 'Trending', ar: 'رائج', fr: 'Tendance' }, href: 'trending' },
];

const ServiceCategories = () => {
  const { language } = useLanguage();
  
  const getLabelByLanguage = (category: typeof categories[0]) => {
    if (language === 'AR') return category.label.ar;
    if (language === 'FR') return category.label.fr;
    return category.label.en;
  };
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-8 justify-start md:justify-center min-w-max px-4 py-6">
        {categories.map((category) => (
          <Link
            key={category.href}
            to={`/services/${category.href}`}
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
                {getLabelByLanguage(category)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;

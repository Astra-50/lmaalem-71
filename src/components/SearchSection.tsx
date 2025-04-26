
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchSection = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="block arabic">احجز مساعدة موثوقة</span>
        <span className="block">Book trusted help</span>
        <span className="block text-xl md:text-2xl text-muted-foreground mt-2">
          for home tasks
        </span>
      </h1>
      
      <div className="flex gap-2">
        <Input 
          type="text" 
          placeholder="What do you need help with?" 
          className="flex-1"
        />
        <Button size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchSection;

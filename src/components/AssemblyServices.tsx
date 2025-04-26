
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const AssemblyServices = () => {
  const services = [
    'General Furniture Assembly',
    'IKEA Assembly',
    'Crib Assembly',
    'PAX Assembly',
    'Bookshelf Assembly',
    'Desk Assembly',
  ];

  return (
    <Card className="mx-4 my-8 overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="block arabic">خدمات التجميع</span>
              <span className="block">Assembly</span>
            </h2>
            
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Assemble or disassemble furniture items by unboxing, building, and any cleanup.
              </p>
              <div className="text-sm text-muted-foreground">
                Now Trending: Curved sofas, computer desks, and sustainable materials.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <Button
                  key={service}
                  variant="outline"
                  className="text-sm"
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="relative h-[300px] bg-[url('/lovable-uploads/2997b203-367a-4545-a4ac-a111ef18c802.png')] bg-cover bg-center">
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssemblyServices;

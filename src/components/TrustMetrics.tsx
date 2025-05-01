
import React from 'react';

const TrustMetrics = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">3.4 million+</div>
            <div className="text-sm text-muted-foreground">Furniture Assemblies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">1.5 million+</div>
            <div className="text-sm text-muted-foreground">Moving tasks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">1 million+</div>
            <div className="text-sm text-muted-foreground">Items mounted</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">700,000+</div>
            <div className="text-sm text-muted-foreground">Home Repairs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;

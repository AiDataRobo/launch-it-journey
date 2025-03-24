
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PremiumServices = () => {
  const services = [
    {
      title: "1-on-1 Career Coaching",
      description: "Personal guidance from industry experts",
      price: "$99",
      highlight: "Most Popular"
    },
    {
      title: "Job Search Assistant",
      description: "Dedicated expert for your job search",
      price: "$149",
      highlight: null
    },
    {
      title: "Interview Guarantee",
      description: "Get an interview or your money back",
      price: "$199",
      highlight: "Best Value"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Premium Services</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-all cursor-pointer relative overflow-hidden">
              {service.highlight && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-jobonboard-purple text-white text-xs rounded-tl-none rounded-br-none">
                    {service.highlight}
                  </Badge>
                </div>
              )}
              <div className="flex justify-between items-start pt-1 px-1">
                <div>
                  <h3 className="font-medium text-sm">{service.title}</h3>
                  <p className="text-xs text-muted-foreground">{service.description}</p>
                </div>
                <div className="text-sm font-semibold">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-jobonboard-purple w-full text-center mt-3">
          View All Premium Services
        </button>
      </CardContent>
    </Card>
  );
};

export default PremiumServices;

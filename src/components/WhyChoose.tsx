import { Clock, Shield, DollarSign, Moon } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Average delivery time of 30 minutes or less. We value your time and hunger.",
    },
    {
      icon: Shield,
      title: "No Fake Reviews",
      description: "All reviews are verified from real orders. Honest feedback you can trust.",
    },
    {
      icon: DollarSign,
      title: "Student Friendly Pricing",
      description: "Special discounts and deals for students. Great food shouldn't break the bank.",
    },
    {
      icon: Moon,
      title: "Late Night Delivery",
      description: "Midnight cravings? We deliver till 3 AM. Because hunger doesn't sleep.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-tomato-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose TOMATO?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another food delivery app. We actually care about your experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 card-shadow hover-lift card-shadow-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

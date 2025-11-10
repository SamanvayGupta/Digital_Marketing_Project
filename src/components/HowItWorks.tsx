import { Search, ShoppingCart, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      emoji: "🍽️",
      title: "Browse Menus",
      description: "Explore hundreds of restaurants and dishes near you. Filter by cuisine, ratings, or price.",
    },
    {
      icon: ShoppingCart,
      emoji: "📦",
      title: "Place Your Order",
      description: "Add your favorites to cart, customize as you like, and checkout securely in seconds.",
    },
    {
      icon: Truck,
      emoji: "🚴‍♂️",
      title: "Delivered Fast",
      description: "Track your order in real-time. Hot, fresh food delivered right to your doorstep.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-tomato-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps between you and your favorite meal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow hover-lift card-shadow-hover text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{step.emoji}</span>
              </div>
              
              <div className="mb-4 text-primary font-bold text-lg">
                Step {index + 1}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroFood from "@/assets/Photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const yOffset = -80;
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionPosition + yOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img src={heroFood} alt="food" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">

          <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
            <span className="text-yellow-600 font-semibold text-sm">
              🎉 Your Mood. Your Food. Delivered.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-foreground mb-6 leading-tight">
            Hungry? <span className="text-gradient">We got you.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            From cravings to doorstep in minutes. Order from the best restaurants near you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Button size="lg" onClick={() => scrollToSection("categories")} className="bg-primary text-primary-foreground font-bold px-8 py-6">
              Explore Categories <ArrowRight className="ml-2" size={20} />
            </Button>

            <Button size="lg" variant="outline" onClick={() => scrollToSection("how-it-works")} className="border-2 border-primary text-primary px-8 py-6">
              How It Works
            </Button>

            <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-secondary text-secondary-foreground px-8 py-6 font-bold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

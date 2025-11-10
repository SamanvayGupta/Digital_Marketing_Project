import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import WhyChoose from "@/components/WhyChoose";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="TOMATO | Order Food Fast | Late-night & Budget Meals"
        description="Order your favorite food fast. Discover student-budget meals, late-night restaurants, and exclusive offers with TOMATO."
        url="https://YOUR-DOMAIN.com/"
        image="/tomatoo.png"
        keywords={[
          "food delivery",
          "late night food",
          "budget meals",
          "restaurants near me",
          "order food online"
        ]}
      />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Categories />
      <WhyChoose />
      <Blog />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

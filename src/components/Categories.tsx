import pizzaImg from "@/assets/pizza.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import momosImg from "@/assets/momos.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import burgerImg from "@/assets/burger.jpg";

const Categories = () => {
  const categories = [
    { name: "Pizza", image: pizzaImg, color: "from-orange-500 to-red-500" },
    { name: "Biryani", image: biryaniImg, color: "from-yellow-500 to-orange-500" },
    { name: "Momos", image: momosImg, color: "from-green-500 to-emerald-500" },
    { name: "Desserts", image: dessertsImg, color: "from-pink-500 to-purple-500" },
    { name: "Burgers", image: burgerImg, color: "from-red-500 to-orange-500" },
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whatever you're craving, we've got it all
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square hover-lift card-shadow card-shadow-hover">
                <img
                  src={category.image}
                  alt={`${category.name} in your area - order with TOMATO`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-heading font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
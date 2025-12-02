import { Link } from "react-router-dom";
import { UtensilsCrossed, Dog, Sparkles, Scissors, Dumbbell, Briefcase } from "lucide-react";

const categories = [
  {
    id: "restaurants",
    name: "Restaurants",
    icon: UtensilsCrossed,
    description: "Fine dining to casual eats",
    color: "bg-coral-light/20 text-coral-dark",
  },
  {
    id: "pet-services",
    name: "Pet Services",
    icon: Dog,
    description: "Sitters, groomers & more",
    color: "bg-sage-light text-sage",
  },
  {
    id: "wellness",
    name: "Spa & Wellness",
    icon: Sparkles,
    description: "Relax and rejuvenate",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "beauty",
    name: "Hair & Beauty",
    icon: Scissors,
    description: "Salons and stylists",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: Dumbbell,
    description: "Trainers and classes",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "professional",
    name: "Professional",
    icon: Briefcase,
    description: "Consultants & coaches",
    color: "bg-amber-100 text-amber-600",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our wide range of services and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/search?category=${category.id}`}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

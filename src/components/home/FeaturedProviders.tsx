import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for featured providers
const featuredProviders = [
  {
    id: "1",
    name: "The Garden Table",
    category: "Restaurant",
    location: "Cape Town CBD",
    rating: 4.9,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    nextAvailable: "Today, 7:00 PM",
    priceRange: "$$",
  },
  {
    id: "2",
    name: "Pawsome Pet Care",
    category: "Pet Sitting",
    location: "Sandton",
    rating: 4.8,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    nextAvailable: "Tomorrow, 9:00 AM",
    priceRange: "$",
  },
  {
    id: "3",
    name: "Serenity Spa",
    category: "Wellness",
    location: "Durban North",
    rating: 4.9,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    nextAvailable: "Today, 3:00 PM",
    priceRange: "$$$",
  },
  {
    id: "4",
    name: "Style Studio",
    category: "Hair Salon",
    location: "Rosebank",
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    nextAvailable: "Today, 5:30 PM",
    priceRange: "$$",
  },
];

const FeaturedProviders = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Providers
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Hand-picked top-rated businesses ready to serve you
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/search">View All</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProviders.map((provider, index) => (
            <Link
              key={provider.id}
              to={`/provider/${provider.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium">
                  {provider.priceRange}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <span className="text-primary">{provider.category}</span>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {provider.name}
                </h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{provider.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-foreground">{provider.rating}</span>
                    <span className="text-sm text-muted-foreground">({provider.reviewCount})</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-accent font-medium">{provider.nextAvailable}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;

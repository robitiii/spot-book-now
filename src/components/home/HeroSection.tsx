import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (location) params.set("location", location);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light text-sage mb-6 animate-fade-in">
            <span className="text-sm font-medium">🎉 Now in 50+ cities</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Book your perfect spot,{" "}
            <span className="text-primary">instantly</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover and book local restaurants, pet sitters, wellness services, and more. 
            Real-time availability, instant confirmation.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-card rounded-2xl shadow-lg p-2 md:p-3 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-0">
              {/* Service Search */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2 md:border-r border-border">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Location */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2 md:border-r border-border">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Search Button */}
              <Button type="submit" variant="hero" size="lg" className="md:ml-2">
                <Search className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
          </form>

          {/* Popular searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <span>Popular:</span>
            <button
              onClick={() => navigate("/search?category=restaurants")}
              className="px-3 py-1 rounded-full bg-secondary hover:bg-muted transition-colors"
            >
              Restaurants
            </button>
            <button
              onClick={() => navigate("/search?category=pet-sitting")}
              className="px-3 py-1 rounded-full bg-secondary hover:bg-muted transition-colors"
            >
              Pet Sitting
            </button>
            <button
              onClick={() => navigate("/search?category=spa")}
              className="px-3 py-1 rounded-full bg-secondary hover:bg-muted transition-colors"
            >
              Spa & Wellness
            </button>
            <button
              onClick={() => navigate("/search?category=salon")}
              className="px-3 py-1 rounded-full bg-secondary hover:bg-muted transition-colors"
            >
              Hair Salon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

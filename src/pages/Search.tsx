import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProviderCard from "@/components/providers/ProviderCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, MapPin, SlidersHorizontal, X } from "lucide-react";

// Mock data
const allProviders = [
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
    services: ["Fine Dining", "Private Events", "Wine Pairing"],
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
    services: ["Dog Walking", "Pet Sitting", "Grooming"],
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
    services: ["Massage", "Facial", "Body Treatments"],
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
    services: ["Haircut", "Coloring", "Styling"],
  },
  {
    id: "5",
    name: "Bella Italia",
    category: "Restaurant",
    location: "Pretoria East",
    rating: 4.6,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    nextAvailable: "Today, 6:30 PM",
    priceRange: "$$",
    services: ["Italian Cuisine", "Pizza", "Pasta"],
  },
  {
    id: "6",
    name: "FitZone Training",
    category: "Fitness",
    location: "Johannesburg",
    rating: 4.8,
    reviewCount: 245,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    nextAvailable: "Tomorrow, 6:00 AM",
    priceRange: "$$",
    services: ["Personal Training", "Group Classes", "Nutrition"],
  },
];

const categories = [
  "All",
  "Restaurant",
  "Pet Sitting",
  "Wellness",
  "Hair Salon",
  "Fitness",
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [showFilters, setShowFilters] = useState(false);

  const filteredProviders = allProviders.filter((provider) => {
    const matchesQuery =
      !searchQuery ||
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.services?.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesLocation =
      !location ||
      provider.location.toLowerCase().includes(location.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || provider.category === selectedCategory;

    return matchesQuery && matchesLocation && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Search Header */}
        <div className="bg-secondary/50 border-b border-border py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-card rounded-xl border border-border">
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>

              {/* Location Input */}
              <div className="flex items-center gap-3 px-4 py-2 bg-card rounded-xl border border-border md:w-64">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                />
              </div>

              {/* Filters Toggle */}
              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                {filteredProviders.length}
              </span>{" "}
              providers found
            </p>
          </div>

          {filteredProviders.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} {...provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                No providers found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setLocation("");
                  setSelectedCategory("All");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;

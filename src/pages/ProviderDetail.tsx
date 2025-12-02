import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar,
} from "lucide-react";

// Mock provider data
const providerData = {
  id: "1",
  name: "The Garden Table",
  category: "Restaurant",
  location: "123 Main Street, Cape Town CBD",
  rating: 4.9,
  reviewCount: 234,
  images: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
  ],
  description:
    "Experience farm-to-table dining at its finest. The Garden Table offers a seasonal menu crafted from locally sourced ingredients, paired with an extensive wine selection. Our intimate setting and attentive service make every meal a memorable occasion.",
  phone: "+27 21 123 4567",
  website: "www.gardentable.co.za",
  priceRange: "$$",
  openHours: "Mon-Sun: 12:00 - 22:00",
  services: [
    {
      id: "s1",
      name: "Table for 2",
      description: "Intimate dining experience",
      duration: 90,
      price: 0,
    },
    {
      id: "s2",
      name: "Table for 4",
      description: "Perfect for small groups",
      duration: 120,
      price: 0,
    },
    {
      id: "s3",
      name: "Private Dining Room",
      description: "Exclusive space for up to 12 guests",
      duration: 180,
      price: 500,
    },
    {
      id: "s4",
      name: "Chef's Table Experience",
      description: "5-course tasting menu with wine pairing",
      duration: 150,
      price: 1200,
    },
  ],
  reviews: [
    {
      id: "r1",
      author: "Sarah M.",
      rating: 5,
      text: "Absolutely incredible experience! The food was divine and the service impeccable.",
      date: "2 weeks ago",
    },
    {
      id: "r2",
      author: "John D.",
      rating: 5,
      text: "Best restaurant in Cape Town. The seasonal menu never disappoints.",
      date: "1 month ago",
    },
    {
      id: "r3",
      author: "Lisa K.",
      rating: 4,
      text: "Great atmosphere and food. A bit pricey but worth it for special occasions.",
      date: "1 month ago",
    },
  ],
};

// Generate time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 12; hour <= 21; hour++) {
    slots.push(`${hour}:00`);
    if (hour < 21) slots.push(`${hour}:30`);
  }
  return slots;
};

const ProviderDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const provider = providerData; // In real app, fetch based on id
  const timeSlots = generateTimeSlots();

  // Generate dates for the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      value: date.toISOString().split("T")[0],
      label: date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" }),
      isToday: i === 0,
    };
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === provider.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? provider.images.length - 1 : prev - 1
    );
  };

  const selectedServiceData = provider.services.find(
    (s) => s.id === selectedService
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/search" className="hover:text-foreground transition-colors">
              Search
            </Link>
            <span>/</span>
            <span className="text-foreground">{provider.name}</span>
          </nav>
        </div>

        {/* Image Gallery */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-muted overflow-hidden">
          <img
            src={provider.images[currentImageIndex]}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {provider.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-card" : "bg-card/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {provider.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {provider.priceRange}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {provider.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-foreground">
                      {provider.rating}
                    </span>
                    <span>({provider.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{provider.openHours}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {provider.description}
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-4">
                  Services
                </h2>
                <div className="space-y-3">
                  {provider.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedService === service.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-foreground">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {service.duration} min
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground">
                            {service.price === 0
                              ? "Free"
                              : `R${service.price}`}
                          </span>
                          {selectedService === service.id && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                              <Check className="h-4 w-4 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-4">
                  Reviews
                </h2>
                <div className="space-y-4">
                  {provider.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">
                          {review.author}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border shadow-lg">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Book Your Spot
                </h3>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Select Date
                  </label>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {dates.map((date) => (
                      <button
                        key={date.value}
                        onClick={() => setSelectedDate(date.value)}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedDate === date.value
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-muted"
                        }`}
                      >
                        {date.isToday ? "Today" : date.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary hover:bg-muted"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary */}
                {selectedServiceData && selectedDate && selectedTime && (
                  <div className="mb-6 p-4 rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-foreground mb-2">
                      Booking Summary
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{selectedServiceData.name}</p>
                      <p>
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p>{selectedTime}</p>
                      {selectedServiceData.price > 0 && (
                        <p className="font-semibold text-foreground">
                          R{selectedServiceData.price}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {selectedService && selectedDate && selectedTime
                    ? "Continue to Booking"
                    : "Select service & time"}
                </Button>

                {/* Contact */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <a
                    href={`tel:${provider.phone}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {provider.phone}
                  </a>
                  <a
                    href={`https://${provider.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    {provider.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProviderDetailPage;

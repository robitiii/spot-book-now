import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";

interface ProviderCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  nextAvailable: string;
  priceRange: string;
  services?: string[];
}

const ProviderCard = ({
  id,
  name,
  category,
  location,
  rating,
  reviewCount,
  image,
  nextAvailable,
  priceRange,
  services,
}: ProviderCardProps) => {
  return (
    <Link
      to={`/provider/${id}`}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium">
          {priceRange}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm mb-2">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {category}
          </span>
        </div>

        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {services && services.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-xs px-2 py-0.5 bg-secondary rounded-full text-secondary-foreground"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                +{services.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium">{nextAvailable}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProviderCard;

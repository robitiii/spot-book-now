import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For Customers */}
          <div className="text-center md:text-left animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to book your next spot?
            </h2>
            <p className="text-background/70 mb-8 max-w-md">
              Join thousands of happy customers who book their favorite local services through MySpot.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/search">
                Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* For Providers */}
          <div className="text-center md:text-left p-8 rounded-3xl bg-background/5 backdrop-blur-sm border border-background/10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <Store className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Own a business?
            </h3>
            <p className="text-background/70 mb-8">
              List your business on MySpot and reach thousands of new customers. Easy setup, powerful tools, instant bookings.
            </p>
            <Button variant="hero-outline" size="lg" asChild className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/become-provider">
                Become a Provider <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

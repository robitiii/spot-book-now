import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">MySpot</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Book local services instantly. From restaurants to pet sitters, find and book the perfect spot.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Browse All
                </Link>
              </li>
              <li>
                <Link to="/search?category=restaurants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/search?category=pet-services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pet Services
                </Link>
              </li>
              <li>
                <Link to="/search?category=wellness" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Business</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/become-provider" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link to="/provider-login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Provider Login
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MySpot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

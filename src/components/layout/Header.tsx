import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">M</span>
          </div>
          <span className="font-display text-xl font-semibold text-foreground">MySpot</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Browse
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link to="/become-provider" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Become a Provider
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              to="/search"
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              to="/how-it-works"
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/become-provider"
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Provider
            </Link>
            <div className="flex gap-2 mt-2 px-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

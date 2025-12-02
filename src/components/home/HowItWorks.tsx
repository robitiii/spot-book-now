import { Search, CalendarCheck, CreditCard, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    description: "Browse thousands of local providers by category, location, or service type.",
  },
  {
    icon: CalendarCheck,
    title: "Pick Your Slot",
    description: "View real-time availability and choose a time that works for you.",
  },
  {
    icon: CreditCard,
    title: "Book & Pay",
    description: "Secure your booking with instant payment. No surprises, no hassle.",
  },
  {
    icon: PartyPopper,
    title: "Enjoy!",
    description: "Show up and enjoy your experience. Leave a review to help others.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Booking your next experience is as easy as 1-2-3-4
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <step.icon className="h-8 w-8" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

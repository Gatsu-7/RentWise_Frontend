import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background pointer-events-none"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="px-3 py-1 text-xl font-medium text-primary bg-primary/10 rounded-full">
              AI-Powered Legal Documents
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight animate-slide-down">
            <span className="block">RentWise</span>
            <span className="text-3xl md:text-5xl lg:text-6xl text-foreground/80 mt-2 block font-light">
              AI-Powered Rental Agreement Generator
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 animate-slide-up">
            Legally Smart. Effortlessly Secure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="min-w-[180px] h-12 text-base font-medium"
            >
              <Link to="/generator" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;

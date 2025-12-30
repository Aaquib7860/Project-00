import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Enterprise AI Partners
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Enterprise-Grade AI
              <br />
              & IT Solutions for a{" "}
              <span className="text-primary">Scalable Future</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We bridge the gap between complex technology and business value.
              Delivering scalable, secure, and intelligent IT infrastructure for
              the modern enterprise.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-fade-in [animation-delay:200ms] opacity-0">
            <div className="rounded-2xl border border-border bg-gray-50 p-6 shadow-xl">
              {/* Dashboard Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">System Status</p>
                  <p className="text-2xl font-bold text-foreground">
                    <span className="text-primary">99.9%</span> Uptime
                  </p>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-border bg-background p-4"
                  >
                    <div className="flex h-full items-center justify-center">
                      <div className="h-12 w-12 rounded-full border-2 border-dashed border-gray-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Efficiency Badge */}
              <div className="mt-6 flex justify-end">
                <div className="flex items-center gap-2 rounded-lg bg-navy px-4 py-3 text-gray-50">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-gray-400">Efficiency Gain</p>
                    <p className="font-bold">+42% Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

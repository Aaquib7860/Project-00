import { Link } from "react-router-dom";
import { Brain, Cloud, Shield, BarChart3, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom algorithms and predictive models to automate decision-making and uncover insights.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architectures on AWS and Azure, optimized for performance and cost-efficiency.",
    color: "bg-teal-light/10 text-teal-light",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Enterprise-grade security audits, penetration testing, and compliance strategies.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turning raw data into actionable business intelligence through advanced visualization.",
    color: "bg-teal-light/10 text-teal-light",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Our Capabilities
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              End-to-end technology services designed to drive growth, efficiency,
              and security for your enterprise.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${capability.color}`}
              >
                <capability.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

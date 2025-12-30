import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "98%",
    label: "Client Retention Rate",
    description: "Our partners stay because we deliver consistent value.",
  },
  {
    value: "250+",
    label: "Enterprise Projects",
    description: "Successfully delivered across 12 countries.",
  },
  {
    value: "40%",
    label: "Avg. Efficiency Boost",
    description: "Measurable operational improvements.",
  },
];

export function StatsSection() {
  return (
    <section className="bg-navy py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-gray-50">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-50">Why Pixom?</h3>
            <p className="mt-2 text-sm text-gray-400">
              We don't just build software; we engineer business outcomes.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Read our success stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

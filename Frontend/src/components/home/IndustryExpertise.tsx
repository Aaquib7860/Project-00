import { Heart, Landmark, Factory, ShoppingBag } from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Landmark, name: "Fintech" },
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingBag, name: "Retail" },
];

export function IndustryExpertise() {
  return (
    <section id="industries" className="bg-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Deep Industry Expertise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We understand the unique regulatory and operational challenges of your
          sector.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex min-w-[140px] flex-col items-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <industry.icon className="h-8 w-8 text-muted-foreground" />
              <p className="mt-3 font-semibold text-foreground">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

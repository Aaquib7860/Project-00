const companies = [
  { name: "NexGen", icon: "◆" },
  { name: "Pyramid", icon: "△" },
  { name: "Infinity", icon: "∞" },
  { name: "CircleCorp", icon: "○" },
  { name: "Pentagon", icon: "⬠" },
];

export function TrustedBySection() {
  return (
    <section className="border-y border-border bg-gray-50 py-8">
      <div className="container">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-xl">{company.icon}</span>
              <span className="font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

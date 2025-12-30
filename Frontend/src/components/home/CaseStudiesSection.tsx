import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    category: "FINTECH",
    categoryColor: "bg-primary/10 text-primary",
    title: "Modernizing Legacy Banking Systems",
    description:
      "How we helped a Tier-1 bank migrate to a microservices architecture, reducing downtime by 90%.",
    result: "3x Faster Deployment",
    duration: "8 Months",
    image: "linear-gradient(135deg, hsl(168 80% 32% / 0.2), hsl(168 80% 32% / 0.1))",
  },
  {
    category: "HEALTHCARE",
    categoryColor: "bg-teal-light/10 text-teal-light",
    title: "AI-Powered Diagnostic Assistance",
    description:
      "Implementing computer vision to assist radiologists in detecting early anomalies with 99% accuracy.",
    result: "45% Efficiency Gain",
    tech: "Computer Vision",
    image: "linear-gradient(135deg, hsl(168 76% 42% / 0.3), hsl(168 76% 42% / 0.1))",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-background py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">
            Featured Case Studies
          </h2>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="flex h-48 items-center justify-center"
                style={{ background: study.image }}
              >
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${study.categoryColor}`}
                >
                  {study.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {study.description}
                </p>
                <div className="mt-4 flex gap-8 border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">RESULT</p>
                    <p className="font-semibold text-foreground">{study.result}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {study.duration ? "DURATION" : "TECH"}
                    </p>
                    <p className="font-semibold text-foreground">
                      {study.duration || study.tech}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const technologies = [
  "Python",
  "TensorFlow",
  "AWS",
  "Azure",
  "Kubernetes",
  "React",
  "Node.js",
  "Docker",
  "PostgreSQL",
];

export function TechStackSection() {
  return (
    <section className="border-t border-border bg-background py-12">
      <div className="container text-center">
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Technology Stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-gray-50 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

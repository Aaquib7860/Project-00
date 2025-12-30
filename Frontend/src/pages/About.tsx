import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Settings,
  Lock,
  Lightbulb,
  Check,
} from "lucide-react";

const philosophy = [
  {
    icon: Settings,
    title: "Precision Engineering",
    description:
      "We believe in code that works the first time. Our systems are built with mathematical precision, ensuring stability at enterprise scale.",
  },
  {
    icon: Lock,
    title: "Uncompromising Integrity",
    description:
      "Transparency is our currency. We build AI systems that are explainable, ethical, and aligned with your business objectives.",
  },
  {
    icon: Lightbulb,
    title: "Radical Innovation",
    description:
      "We don't just follow trends, we set them. Our R&D labs are constantly pushing the boundaries of what Generative AI can achieve.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Pixom Solutions Founded",
    description:
      "Established in San Francisco with a vision to streamline enterprise IT infrastructure.",
  },
  {
    year: "2019",
    title: "Global Expansion",
    description:
      "Opened operational hubs in London and Singapore to support 200+ global clients.",
  },
  {
    year: "2021",
    title: "Launch of AI Division",
    description:
      "Formalized our AI-first methodology, pivoting core services to intelligent automation.",
  },
  {
    year: "2024",
    title: "Enterprise AI Partner of the Year",
    description:
      "Recognized for deploying ethical, large-scale AI models for Fortune 500 companies.",
  },
];

const compliance = [
  { name: "GDPR", icon: Check },
  { name: "SOC 2", icon: Check },
  { name: "HIPAA", icon: Check },
  { name: "ISO 27001", icon: Check },
];

const approaches = [
  {
    title: "Architectural Integration",
    description:
      "AI is embedded at the core layer, not bolted on. This deep integration allows for real-time decision making.",
  },
  {
    title: "Predictive Scalability",
    description:
      "Systems designed to grow and adapt automatically, predicting fleet requirements before they happen.",
  },
  {
    title: "Ethical Modeling",
    description:
      "Bias-free algorithms ensuring fair outcomes. We prioritize human-centric safety in every model we deploy.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Reimagining Enterprise IT
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                Engineering the
                <br />
                Future of Enterprise
                <br />
                with <span className="text-primary">Intelligent AI</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                We democratize artificial intelligence for scalable business growth,
                merging technology and human ingenuity seamlessly to solve complex
                infrastructure challenges.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/services">View Our Services</Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in [animation-delay:200ms] opacity-0">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-teal-light/10">
                <div className="flex h-full items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="aspect-video rounded-lg bg-gray-200/50" />
                    <div className="aspect-video rounded-lg bg-gray-300/50" />
                    <div className="col-span-2 aspect-[3/1] rounded-lg bg-gray-200/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-border bg-background py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company Philosophy
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Driven by Purpose, Guided by Logic
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <div
                key={item.title}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Mission & Vision
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our guiding principles drive every solution we engineer for our
                global partners. We are not just service providers; we are
                architects of the future.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Target className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Our Mission</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      To democratize AI for scalable business growth, ensuring every
                      enterprise can leverage intelligent automation safely and
                      effectively.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Eye className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Our Vision</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A world where technology and human ingenuity merge seamlessly to
                      solve the most complex infrastructure challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-teal-light/5 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl bg-gray-200/50" />
                <div className="aspect-square rounded-xl bg-gray-300/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-First Approach */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              The AI-First Approach
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just add AI to existing systems; we architect solutions where
              Intelligence is the foundation. This ensures scalability, security, and
              true operational transformation.
            </p>
            <Link
              to="/ai-solutions"
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              Explore our Technology →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="overflow-hidden rounded-xl border border-border animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-teal-light/10" />
                <div className="p-6">
                  <h3 className="font-bold text-foreground">{approach.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Our Journey of Innovation
          </h2>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-primary bg-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-navy py-16">
        <div className="container">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Trust & Safety
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-50">
            Commitment to Ethical AI & Compliance
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Innovation without security is a liability. We strictly adhere to global
            data privacy standards including GDPR, CCPA, and HIPAA. Our models are
            rigorously tested for bias and hallucinations to ensure your enterprise
            data remains safe and your reputation pristine.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {compliance.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 rounded-lg bg-navy-light px-4 py-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-gray-50">{item.name}</span>
              </div>
            ))}
          </div>

          <Button variant="hero-outline" size="lg" className="mt-8 border-gray-600 text-gray-300 hover:bg-navy-light hover:text-gray-50">
            Review our Security Whitepaper
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Ready to Engineer the Future?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Partner with Pixom Solutions to leverage the power of enterprise-grade AI.
            Let's build something scalable, secure, and intelligent together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="dark" size="lg">
              <Link to="/services">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

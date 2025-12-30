import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  ArrowRight,
  Headphones,
} from "lucide-react";

const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "500+", label: "Enterprise Projects" },
  { value: "24/7", label: "Global Support" },
  { value: "12+", label: "Years of Excellence" },
];

const categories = [
  { icon: Brain, name: "AI Solutions", active: true },
  { icon: Cloud, name: "Cloud Infrastructure", active: false },
  { icon: Shield, name: "Cybersecurity", active: false },
  { icon: BarChart3, name: "Data Analytics", active: false },
];

const aiServices = [
  {
    title: "Generative AI Integration",
    description:
      "Custom LLM deployment and prompt engineering strategies for enterprise workflows and automation.",
    icon: Brain,
  },
  {
    title: "MLOps & Automation",
    description:
      "End-to-end machine learning pipeline management, model monitoring, and automated retraining.",
    icon: Brain,
  },
];

const cloudServices = [
  {
    title: "Cloud Migration Strategy",
    description:
      "Seamless transition of legacy systems to scalable cloud architectures (AWS, Azure, GCP).",
    icon: Cloud,
  },
  {
    title: "Hybrid Architecture",
    description:
      "Optimized connectivity between on-premise hardware and public cloud resources.",
    icon: Cloud,
  },
];

const securityServices = [
  {
    title: "Enterprise Threat Detection",
    description:
      "Real-time monitoring and AI-driven anomaly detection for preventing data breaches.",
    icon: Shield,
  },
  {
    title: "Compliance & Governance",
    description:
      "Ensuring your infrastructure meets global standards like GDPR, HIPAA, and SOC2.",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b border-border bg-background">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl rounded-2xl border border-border p-8 lg:p-12">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Global IT Services
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Intelligent Solutions for
              <br />
              the <span className="text-primary">Modern Enterprise</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Scalable AI and IT infrastructure designed for global business needs.
              We deliver senior-level engineering and strategic consulting to drive
              your digital transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/ai-solutions">Explore Services</Link>
              </Button>
              <Button asChild variant="dark" size="lg">
                <Link to="/about">Our Methodology</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-border bg-gray-50">
          <div className="container py-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-foreground">Service Categories</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Navigate by domain
              </p>

              <div className="mt-6 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      category.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    {category.name}
                  </button>
                ))}
              </div>

              {/* CTA Card */}
              <div className="mt-8 rounded-xl bg-primary/10 p-6">
                <Headphones className="h-8 w-8 text-primary" />
                <h4 className="mt-4 font-bold text-foreground">Need guidance?</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our experts are ready to audit your infrastructure.
                </p>
                <Button asChild variant="hero" size="sm" className="mt-4">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="space-y-12 lg:col-span-3">
              {/* AI Section */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">
                    Artificial Intelligence
                  </h2>
                  <Link
                    to="/ai-solutions"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all AI services
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {aiServices.map((service) => (
                    <div
                      key={service.title}
                      className="group overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 transition-all hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        <Link
                          to="/ai-solutions"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                        >
                          Explore Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud Section */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">
                    Cloud Infrastructure
                  </h2>
                  <Link
                    to="/services"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all Cloud services
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {cloudServices.map((service) => (
                    <div
                      key={service.title}
                      className="group overflow-hidden rounded-xl"
                    >
                      <div className="h-32 bg-gradient-to-br from-navy to-navy-light" />
                      <div className="border border-t-0 border-border p-6">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light/20">
                          <service.icon className="h-5 w-5 text-teal-light" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        <Link
                          to="/services"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                        >
                          Explore Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Section */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">
                    Cybersecurity
                  </h2>
                  <Link
                    to="/services"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View all Security services
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {securityServices.map((service) => (
                    <div
                      key={service.title}
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-teal-dark/90" />
                      <div className="relative p-6 text-primary-foreground">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold">{service.title}</h3>
                        <p className="mt-2 text-sm opacity-90">
                          {service.description}
                        </p>
                        <Link
                          to="/services"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                        >
                          Explore Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-gray-50 md:text-3xl">
                Ready to modernize your infrastructure?
              </h2>
              <p className="mt-2 text-gray-400">
                Schedule a consultation with our senior architects to discuss your
                roadmap.
              </p>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Start Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

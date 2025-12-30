import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cpu,
  Eye,
  MessageSquare,
  ThumbsUp,
  Server,
  Check,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Strategic AI Consulting",
    description:
      "Navigate the complexities of AI adoption. We help you identify high-value use cases, assess data readiness, and build a roadmap.",
    features: ["Feasibility Studies", "ROI Analysis", "Vendor Selection"],
  },
  {
    icon: Cpu,
    title: "Custom Model Development",
    description:
      "Build proprietary algorithms tailored to your data. From predictive analytics to optimization engines, we own the code.",
    features: ["Predictive Modeling", "Decision Trees", "Neural Networks"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Automate visual tasks with high precision. We deploy systems for quality control, facial recognition, and object detection.",
    features: ["Quality Assurance", "OCR & Document Extraction", "Safety Monitoring"],
  },
  {
    icon: MessageSquare,
    title: "NLP & Speech Solutions",
    description:
      "Extract value from unstructured text and voice data. Sentiment analysis, entity recognition, and automated transcription.",
    features: ["Sentiment Analysis", "Automated Transcription", "Document Classification"],
  },
  {
    icon: ThumbsUp,
    title: "Recommendation Systems",
    description:
      "Drive engagement and sales with hyper-personalized experiences. Dynamic pricing and content suggestion engines.",
    features: ["Personalization Engines", "Churn Prediction", "Cross-sell Algorithms"],
  },
  {
    icon: Server,
    title: "AI Deployment & MLOps",
    description:
      "We don't just build models; we operationalize them. Robust CI/CD pipelines for machine learning ensure reliability at scale.",
    features: ["Model Monitoring", "Cloud Integration", "Scalable Infrastructure"],
  },
];

const genAIFeatures = [
  {
    title: "Custom Copilots",
    description: "Employee assistants trained on your internal documentation.",
  },
  {
    title: "RAG Architecture Implementation",
    description: "Connecting LLMs to your real-time databases securely.",
  },
  {
    title: "Automated Content Generation",
    description: "Marketing copy, code generation, and personalized reports.",
  },
];

export default function AISolutions() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-background">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">AI Solutions</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                Enterprise-Grade
                <br />
                <span className="text-primary">Artificial Intelligence</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Scalable, secure, and strategic AI solutions designed for the modern
                enterprise. From custom ML models to generative AI integration, we
                build the intelligence that powers your future.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/about">View Capability Deck</Link>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative animate-fade-in [animation-delay:200ms] opacity-0">
              <div className="rounded-2xl border border-border bg-gray-50 p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">
                      Model Accuracy
                    </p>
                    <p className="text-2xl font-bold text-foreground">99.4%</p>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="flex h-40 items-end justify-center gap-3">
                  {[40, 65, 50, 80, 70, 90, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 rounded-t-md bg-primary/30 transition-all hover:bg-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-end gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">
                      Deployment Speed
                    </p>
                    <p className="font-bold text-foreground">2x Faster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generative AI Section */}
      <section className="border-t border-border bg-gray-50 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Trending Technology
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                Generative AI & LLM Solutions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Go beyond the hype with enterprise-ready Generative AI. We architect
                secure, private Large Language Model (LLM) environments using RAG
                (Retrieval-Augmented Generation) to ground AI in your specific
                business data.
              </p>

              <div className="mt-8 space-y-4">
                {genAIFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Explore GenAI Capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Chat Preview */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="mb-4 rounded-lg bg-gray-100 p-4">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary text-xs text-primary-foreground">
                    AI
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Analyze the sales data from Q3 and identify the top performing
                    region.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">
                  Based on the Q3 dataset, the{" "}
                  <span className="font-semibold text-foreground">North America</span>{" "}
                  region outperformed others with a{" "}
                  <span className="font-semibold text-primary">24% YoY growth</span>.
                </p>
                <div className="mt-4 flex items-end justify-center gap-2">
                  {[30, 50, 70, 90].map((height, i) => (
                    <div
                      key={i}
                      className="w-6 rounded-t bg-primary"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Core AI Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We deliver specialized AI services tailored to your industry's unique
              challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {capability.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {capability.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-50 md:text-4xl">
            Ready to future-proof your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Our team of data scientists and engineers is ready to help you uncover
            the potential of AI for your enterprise. Schedule a consultation today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="dark" size="lg" className="border border-gray-600">
              <Link to="/services">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

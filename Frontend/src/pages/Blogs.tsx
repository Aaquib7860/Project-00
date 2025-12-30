import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const featuredPost = {
  title: "The Future of Enterprise AI: Trends to Watch in 2025",
  excerpt:
    "From autonomous agents to multimodal AI, discover the transformative technologies reshaping how enterprises operate and compete in the digital age.",
  author: "Sarah Chen",
  role: "Chief AI Officer",
  date: "Dec 20, 2024",
  readTime: "8 min read",
  category: "AI Trends",
  image: "linear-gradient(135deg, hsl(168 80% 32% / 0.3), hsl(168 80% 32% / 0.1))",
};

const blogPosts = [
  {
    title: "Building Secure RAG Pipelines for Enterprise LLMs",
    excerpt:
      "Learn how to implement Retrieval-Augmented Generation with enterprise-grade security and compliance standards.",
    author: "Michael Torres",
    date: "Dec 18, 2024",
    readTime: "6 min read",
    category: "AI Engineering",
    image: "linear-gradient(135deg, hsl(220 20% 14% / 0.8), hsl(220 20% 14% / 0.6))",
  },
  {
    title: "Cloud Migration Strategy: AWS vs Azure vs GCP",
    excerpt:
      "A comprehensive comparison of major cloud providers and how to choose the right one for your enterprise needs.",
    author: "Emily Watson",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    category: "Cloud Infrastructure",
    image: "linear-gradient(135deg, hsl(168 76% 42% / 0.4), hsl(168 76% 42% / 0.2))",
  },
  {
    title: "Zero Trust Architecture: A Complete Implementation Guide",
    excerpt:
      "Step-by-step guide to implementing zero trust security principles across your enterprise infrastructure.",
    author: "David Kim",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Cybersecurity",
    image: "linear-gradient(135deg, hsl(168 80% 32% / 0.5), hsl(220 20% 14% / 0.3))",
  },
  {
    title: "MLOps Best Practices for Production AI Systems",
    excerpt:
      "From model versioning to automated retraining, master the operational practices that keep AI systems reliable at scale.",
    author: "Sarah Chen",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "AI Engineering",
    image: "linear-gradient(135deg, hsl(220 20% 14% / 0.7), hsl(168 80% 32% / 0.3))",
  },
  {
    title: "Data Governance in the Age of Generative AI",
    excerpt:
      "How to maintain data quality, privacy, and compliance when deploying large language models in enterprise environments.",
    author: "Lisa Park",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    category: "Data Analytics",
    image: "linear-gradient(135deg, hsl(168 76% 42% / 0.3), hsl(220 20% 14% / 0.5))",
  },
  {
    title: "Kubernetes at Scale: Lessons from 500+ Deployments",
    excerpt:
      "Real-world insights and patterns from managing large-scale Kubernetes clusters for enterprise clients.",
    author: "James Mitchell",
    date: "Dec 1, 2024",
    readTime: "11 min read",
    category: "Cloud Infrastructure",
    image: "linear-gradient(135deg, hsl(220 20% 14% / 0.6), hsl(168 80% 32% / 0.4))",
  },
];

const categories = [
  "All Posts",
  "AI Trends",
  "AI Engineering",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Data Analytics",
];

export default function Blogs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Insights & Resources
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Pixom Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert insights on AI, cloud infrastructure, cybersecurity, and
              digital transformation from our team of engineers and strategists.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div
              className="flex min-h-[300px] items-center justify-center rounded-2xl lg:min-h-[400px]"
              style={{ background: featuredPost.image }}
            >
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Tag className="mr-1 h-3 w-3" />
                {featuredPost.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {featuredPost.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {featuredPost.role}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button variant="hero" size="lg" className="mt-6 w-fit">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="flex h-48 items-start p-4"
                  style={{ background: post.image }}
                >
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-50 md:text-3xl">
              Stay Updated with Pixom Insights
            </h2>
            <p className="mt-4 text-gray-400">
              Get the latest articles on AI, cloud infrastructure, and enterprise
              technology delivered to your inbox weekly.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-lg border border-navy-light bg-navy-light px-4 text-gray-50 placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-80"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

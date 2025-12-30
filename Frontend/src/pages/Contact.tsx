import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Headphones, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Innovation Drive, Tech Park,", "San Francisco, CA 94107"],
    link: { text: "View on Map", href: "#" },
  },
  {
    icon: Mail,
    title: "Global Sales",
    details: ["sales@pixom.com", "For new business inquiries"],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    details: ["support@pixom.com", "For existing clients"],
  },
];

const trustedBy = ["Acme Corp", "Globex", "Soylent Corp", "Initech", "Umbrella"];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      details: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Let's build the future of your enterprise
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Reach out to our AI & IT experts for a consultation or technical
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground">
                  Contact Information
                </h2>

                <div className="mt-8 space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        {item.link && (
                          <a
                            href={item.link.href}
                            className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                          >
                            {item.link.text}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 h-64 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-teal-light/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Interactive map
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and our team will get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="mt-2"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      className="mt-2"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Company Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      placeholder="Pixom Inc."
                      className="mt-2"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    How can we help? <span className="text-primary">*</span>
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                      <SelectItem value="security">Cybersecurity</SelectItem>
                      <SelectItem value="data">Data Analytics</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Project Details <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us a bit about your project goals, timeline, and requirements..."
                    className="mt-2 min-h-[120px]"
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    Your data is processed securely.
                  </div>
                  <Button type="submit" variant="hero" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-t border-border bg-background py-12">
        <div className="container text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustedBy.map((company) => (
              <span
                key={company}
                className="text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

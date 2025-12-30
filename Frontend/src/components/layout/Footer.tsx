import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Partners", href: "/about" },
    { name: "Newsroom", href: "/about" },
  ],
  services: [
    { name: "AI Consulting", href: "/ai-solutions" },
    { name: "Cloud Infrastructure", href: "/services" },
    { name: "Data Analytics", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      {/* CTA Section */}
      <div className="border-b border-navy-light">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-50 md:text-4xl">
            Ready to scale your technology?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Book a free consultation with our solutions architects to discuss your specific needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-navy-light hover:text-gray-50">
              <Link to="/services">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary/10 border-2 border-primary/20">
                <img
                  src="/logo.png"
                  alt="Pixom Solutions Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-bold text-gray-50">Pixom Solutions</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Empowering enterprises with next-generation AI and IT infrastructure solutions. Building the digital future, today.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-light text-gray-400 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-light text-gray-400 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-navy-light pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 Pixom Solutions Inc. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-sm text-gray-400">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

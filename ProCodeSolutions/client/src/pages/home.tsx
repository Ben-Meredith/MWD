import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Code2, Smartphone, Palette, Zap, Globe, Shield, Check, Menu, X, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import heroImage from "@assets/generated_images/Modern_workspace_hero_background_6868e6c3.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const technologies = [
    { icon: Code2, name: "HTML5", description: "Modern semantic markup for accessible, SEO-friendly websites" },
    { icon: Palette, name: "CSS3", description: "Advanced styling with animations, grids, and responsive design" },
    { icon: Zap, name: "JavaScript", description: "Dynamic interactions and powerful client-side functionality" },
    { icon: Globe, name: "React", description: "Component-based UI library for fast, scalable applications" },
    { icon: Shield, name: "Node.js", description: "Server-side JavaScript for robust backend solutions" },
    { icon: Smartphone, name: "Responsive", description: "Mobile-first design that works on all devices" },
  ];

  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored solutions built from the ground up to meet your unique business requirements. I create scalable, maintainable websites using the latest web technologies.",
      features: [
        "Custom website design",
        "Responsive across all devices",
        "Modern tech stack",
        "Performance optimization",
      ],
    },
    {
      title: "Web Application Development",
      description: "Complex, feature-rich web applications that deliver exceptional user experiences. From concept to deployment, I handle the entire development process.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Real-time functionality",
        "API integration",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description: "Powerful online stores that drive conversions and grow your business. Secure payment processing, inventory management, and seamless checkout experiences.",
      features: [
        "Shopping cart systems",
        "Payment gateway integration",
        "Product management",
        "Analytics & reporting",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$800",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Contact form integration",
        "Basic SEO optimization",
        "2 weeks delivery",
        "1 month support",
      ],
    },
    {
      name: "Professional",
      price: "$1,500",
      description: "Ideal for growing businesses",
      features: [
        "Custom web application",
        "Up to 10 pages",
        "Advanced functionality",
        "Database integration",
        "CMS integration",
        "3 months support",
        "Performance optimization",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Complex web applications",
        "Unlimited pages",
        "Scalable architecture",
        "Advanced integrations",
        "Priority support",
        "Ongoing maintenance",
        "Custom solutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4 h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 rounded-md px-2 -ml-2"
              data-testid="link-logo"
            >
              Meredith Web Development
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("technologies")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-technologies"
              >
                Technologies
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-pricing"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
            </div>

            <div className="hidden md:block">
              <Button onClick={() => scrollToSection("contact")} data-testid="button-get-started">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("technologies")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid="link-mobile-technologies"
                >
                  Technologies
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid="link-mobile-services"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid="link-mobile-pricing"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                  data-testid="link-mobile-contact"
                >
                  Contact
                </button>
                <Button onClick={() => scrollToSection("contact")} className="w-full" data-testid="button-mobile-get-started">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
            Build Your Digital Future
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Expert web development services using HTML5, CSS3, JavaScript, and modern frameworks. 
            I create stunning, high-performance websites and applications that drive results for businesses in Lexington and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base backdrop-blur-lg"
              data-testid="button-hero-primary"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-base backdrop-blur-lg bg-background/10"
              data-testid="button-hero-secondary"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" data-testid="text-technologies-title">
              Technology Stack
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-technologies-description">
              I leverage cutting-edge technologies to build fast, secure, and scalable web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={tech.name}
                  className="p-8 hover:scale-105 transition-transform duration-300 hover-elevate"
                  data-testid={`card-technology-${index}`}
                >
                  <Icon className="h-12 w-12 mb-4 text-primary" data-testid={`icon-technology-${index}`} />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2" data-testid={`text-technology-name-${index}`}>{tech.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`text-technology-description-${index}`}>{tech.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" data-testid="text-services-title">
              Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-services-description">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`section-service-${index}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center gap-3" data-testid={`item-service-feature-${index}-${featureIndex}`}>
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20" data-testid={`card-service-visual-${index}`}>
                    <div className="aspect-video flex items-center justify-center">
                      <Code2 className="h-24 w-24 text-primary opacity-20" />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" data-testid="text-pricing-title">
              Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-pricing-description">
              Choose the plan that fits your needs. All plans include expert development and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={`p-8 md:p-12 ${
                  tier.highlighted
                    ? "ring-2 ring-primary shadow-2xl scale-105"
                    : "shadow-xl"
                }`}
                data-testid={`card-pricing-${index}`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2" data-testid={`text-pricing-name-${index}`}>{tier.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4" data-testid={`text-pricing-description-${index}`}>{tier.description}</p>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight" data-testid={`text-pricing-price-${index}`}>{tier.price}</div>
                  {tier.price !== "Custom" && (
                    <p className="text-sm text-muted-foreground mt-2" data-testid={`text-pricing-note-${index}`}>starting price</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-start gap-3" data-testid={`item-pricing-feature-${index}-${featureIndex}`}>
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  onClick={() => scrollToSection("contact")}
                  data-testid={`button-pricing-${index}`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-contact-description">
              Ready to start your project? Contact me today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => contactMutation.mutate(data))} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} value={field.value ?? ""} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-32"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={contactMutation.isPending} data-testid="button-submit-contact">
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 hover-elevate" data-testid="card-contact-email">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-email-label">Email</h3>
                    <a href="mailto:ben.meredith1@icloud.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="text-contact-email-value">
                      ben.meredith1@icloud.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate" data-testid="card-contact-phone">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-phone-label">Phone</h3>
                    <a href="tel:+12702878129" className="text-muted-foreground hover:text-primary transition-colors" data-testid="text-contact-phone-value">
                      (270) 287-8129
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate" data-testid="card-contact-location">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-location-label">Location</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-location-value">Lexington, KY</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate" data-testid="card-contact-hours">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" data-testid="text-contact-hours-label">Availability</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-hours-value">Monday - Saturday: 9AM - 8PM EST</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-12" data-testid="section-footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div data-testid="footer-section-company">
              <h3 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("hero")} className="hover:text-foreground transition-colors" data-testid="link-footer-about">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-colors" data-testid="link-footer-services">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-foreground transition-colors" data-testid="link-footer-pricing">
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div data-testid="footer-section-services">
              <h3 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-service-web-dev">Web Development</li>
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-service-web-apps">Web Applications</li>
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-service-ecommerce">E-Commerce</li>
              </ul>
            </div>

            <div data-testid="footer-section-technologies">
              <h3 className="font-semibold mb-4" data-testid="text-footer-technologies-title">Technologies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-tech-html-css">HTML5 & CSS3</li>
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-tech-javascript">JavaScript</li>
                <li className="hover:text-foreground transition-colors cursor-pointer" data-testid="text-footer-tech-react-node">React & Node.js</li>
              </ul>
            </div>

            <div data-testid="footer-section-contact">
              <h3 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li data-testid="text-footer-location">Lexington, KY</li>
                <li>
                  <a href="mailto:ben.meredith1@icloud.com" className="hover:text-foreground transition-colors" data-testid="text-footer-email">
                    ben.meredith1@icloud.com
                  </a>
                </li>
                <li>
                  <a href="tel:+12702878129" className="hover:text-foreground transition-colors" data-testid="text-footer-phone">
                    (270) 287-8129
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 items-center">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © 2025 Meredith Web Development. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors" data-testid="link-footer-privacy">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors" data-testid="link-footer-terms">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

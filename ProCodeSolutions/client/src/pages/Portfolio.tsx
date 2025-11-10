import { useState } from "react";
import { ExternalLink, Code2, Zap, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activePackage, setActivePackage] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Yellow Jacket Lawn Care",
      description: "Professional lawn care service website with contact form and service listings.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=500&fit=crop",
      url: "https://yellowjacketlawn.com",
      package: "starter",
      packageName: "Starter - $200",
      features: ["5 Pages", "Contact Form", "Mobile Responsive", "Google Maps"],
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 2,
      title: "Budget Dumpsters",
      description: "Dumpster rental service with online booking and customer review system.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop",
      url: "https://budgetdumpsters.com",
      package: "professional",
      packageName: "Professional - $500",
      features: ["Online Booking", "Customer Reviews", "10 Pages", "Email Integration"],
      tech: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "Local Restaurant",
      description: "Full e-commerce store with product catalog, shopping cart, and secure checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      url: "#",
      package: "enterprise",
      packageName: "Enterprise - $800",
      features: ["Online Store", "Shopping Cart", "Payment Processing", "Customer Accounts"],
      tech: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    },
  ];

  const filteredProjects = activePackage === "all" 
    ? projects 
    : projects.filter(p => p.package === activePackage);

  const packageFilters = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "starter", name: "Starter ($200)", count: projects.filter(p => p.package === "starter").length },
    { id: "professional", name: "Professional ($500)", count: projects.filter(p => p.package === "professional").length },
    { id: "enterprise", name: "Enterprise ($800)", count: projects.filter(p => p.package === "enterprise").length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Real Projects, Real Results
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            My Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a look at websites I have built for real businesses. Click any project to see it live!
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30 sticky top-0 z-40 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {packageFilters.map((filter) => (
              <Button
                key={filter.id}
                variant={activePackage === filter.id ? "default" : "outline"}
                onClick={() => setActivePackage(filter.id)}
                className="transition-all"
              >
                {filter.name}
                <span className="ml-2 text-xs opacity-70">({filter.count})</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {project.packageName}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      View Live Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-primary" />
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline flex items-center gap-2 group/link"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something amazing together. Get a free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = "/#contact"}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "/"}>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Folder, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern and interactive portfolio website built with React, TypeScript, and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind"],
      status: "Completed",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fawwaw Store",
      description: "E-commerce platform for selling digital and physical products.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Active",
      link: "https://www.fawwawstore.biz.id/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Web Development Projects",
      description: "Various web development projects currently in development phase.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "In Development",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-primary/10 text-3xl animate-pulse">✦</div>
      <div className="absolute bottom-20 right-20 text-purple-500/10 text-2xl animate-pulse" style={{ animationDelay: '0.7s' }}>★</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 animate-scale-in" />
          <p className="text-muted-foreground">Things I've built and working on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-6 transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up hover:scale-105 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} group-hover:animate-float`}>
                    <Folder className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" ? "bg-green-500/10 text-green-500" :
                    project.status === "Active" ? "bg-blue-500/10 text-blue-500" :
                    "bg-purple-500/10 text-purple-500"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

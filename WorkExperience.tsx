import { Briefcase, ExternalLink } from "lucide-react";
import nathubLogo from "@/assets/nathub-logo.gif";

const WorkExperience = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">WORK EXPERIENCE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto animate-scale-in" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-smooth" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Logo */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 p-1 group-hover:animate-glow-pulse transition-smooth">
                    <div className="w-full h-full rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <img 
                        src={nathubLogo} 
                        alt="Nathub Logo" 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-smooth"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1 text-gradient group-hover:scale-105 transition-smooth inline-block">
                        Nathub
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm md:text-base font-medium">Developer</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Working as a developer at Nathub, contributing to innovative projects and building cutting-edge web solutions.
                  </p>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                      Development
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20">
                      Web Solutions
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                      Innovation
                    </span>
                  </div>

                  {/* Visit Button */}
                  <a
                    href="https://nathub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-lg font-medium transition-smooth hover:scale-105 hover:shadow-lg hover:shadow-primary/50 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Visit Nathub
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover/btn:opacity-100 transition-smooth" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="flex justify-center mt-12 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="text-4xl text-primary/50">↓</div>
      </div>
    </section>
  );
};

export default WorkExperience;

import { MapPin, Heart, Book, Code } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import WorkExperience from "@/components/WorkExperience";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import avatarImg from "@/assets/avatar.gif";

const About = () => {
  const infoCards = [
    { label: "LOCATION", value: "Indonesia", icon: MapPin },
    { label: "FAVORITE", value: "Steak", icon: Heart },
    { label: "RELIGION", value: "Islam", icon: Book },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Decorative elements */}
        <div className="fixed top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float" />
        <div className="fixed top-40 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="fixed bottom-20 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          {/* Decorative stars */}
          <div className="absolute top-0 left-1/4 text-primary/20 text-2xl animate-pulse">✦</div>
          <div className="absolute top-10 right-1/3 text-purple-500/20 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>
          <div className="absolute top-5 right-1/4 text-primary/20 text-lg animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">ABOUT ME</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-12 animate-scale-in" />
          
          <div className="max-w-md mx-auto mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-smooth hover:scale-105 animate-float">
              <img 
                src={avatarImg} 
                alt="Fawwazxx Avatar" 
                className="w-full h-full object-cover"
              />
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary/50" />
            </div>
          </div>

          {/* Name centered */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient animate-scale-in">FAWWAZXX</h2>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-xl p-6 transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 group animate-slide-up"
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{card.label}</p>
                  <p className="text-xl font-bold">{card.value}</p>
                </div>
              );
            })}
          </div>

          {/* Down arrow indicator */}
          <div className="flex justify-center mt-8 animate-bounce">
            <div className="text-4xl text-primary/50">↓</div>
          </div>
        </section>

        {/* About Text */}
        <section className="max-w-3xl mx-auto mb-16 relative">
          <div className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-8 md:p-10 space-y-6 hover:border-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/10 animate-fade-in">
            <div className="flex items-start gap-4 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Code className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  My name is <span className="font-bold text-gradient">Fawwazxx</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Code className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  My skills include <span className="font-bold text-primary">HTML</span>, <span className="font-bold text-primary">CSS</span>, and <span className="font-bold text-primary">JavaScript</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Code className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  I have many names, you can call me <span className="text-primary font-medium">"Faww"</span>, <span className="text-primary font-medium">"Fawwaw"</span>, or <span className="text-primary font-medium">"Fawwaz"</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Code className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  I have many projects in development.
                </p>
              </div>
            </div>
          </div>

          {/* Down arrow indicator */}
          <div className="flex justify-center mt-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl text-primary/50">↓</div>
          </div>
        </section>

        {/* Work Experience */}
        <WorkExperience />

        {/* Skills Section */}
        <SkillsSection />

        {/* Down arrow indicator */}
        <div className="flex justify-center my-12 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <div className="text-4xl text-primary/50">↓</div>
        </div>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Down arrow indicator */}
        <div className="flex justify-center my-12 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="text-4xl text-primary/50">↓</div>
        </div>

        {/* Contact Section */}
        <ContactSection />

        {/* Down arrow indicator */}
        <div className="flex justify-center my-12 animate-bounce" style={{ animationDelay: '2.5s' }}>
          <div className="text-4xl text-primary/50">↓</div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default About;

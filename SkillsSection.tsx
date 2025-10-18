import { Code } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section className="py-16 relative">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-primary/10 text-2xl animate-pulse">✦</div>
      <div className="absolute bottom-10 left-10 text-purple-500/10 text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>★</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 animate-scale-in" />
          <p className="text-muted-foreground">My technical expertise</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-xl p-6 transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} group-hover:animate-float`}>
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <span className="text-2xl font-bold text-primary">{skill.level}%</span>
              </div>
              
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                  style={{ 
                    width: `${skill.level}%`,
                    animation: 'slideProgress 1s ease-out'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

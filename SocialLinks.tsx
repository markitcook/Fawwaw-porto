import { Instagram, Github, MessageCircle, Gift, ShoppingBag, ExternalLink } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/fawwzxx?igsh=N2E0cjQ5eHl5ZXUw",
      color: "hover:bg-pink-500/10 hover:text-pink-500 hover:border-pink-500",
      gradient: "from-pink-500 to-purple-500"
    },
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/FAWWAW",
      color: "hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-500",
      gradient: "from-purple-500 to-blue-500"
    },
    { 
      name: "Discord", 
      icon: MessageCircle, 
      url: "https://discord.com/users/1410528927629312061",
      color: "hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Donate", 
      icon: Gift, 
      url: "https://sociabuzz.com/fawwaw/tribe",
      color: "hover:bg-green-500/10 hover:text-green-500 hover:border-green-500",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Fawwaw Store", 
      icon: ShoppingBag, 
      url: "https://www.fawwawstore.biz.id/",
      color: "hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-16 relative">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-primary/10 text-3xl animate-pulse">✦</div>
      <div className="absolute top-20 right-20 text-purple-500/10 text-2xl animate-pulse" style={{ animationDelay: '0.7s' }}>★</div>
      <div className="absolute bottom-10 left-1/3 text-primary/10 text-xl animate-pulse" style={{ animationDelay: '1.4s' }}>✦</div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 animate-fade-in">SOCIAL MEDIA</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-12 animate-scale-in" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
                className={`relative flex items-center justify-between gap-4 p-6 bg-card border-2 border-border rounded-xl transition-smooth ${social.color} group overflow-hidden animate-slide-up hover:scale-105 hover:shadow-2xl hover:shadow-primary/20`}
              >
                <div className="flex items-center gap-4 z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${social.gradient} group-hover:animate-float`}>
                    <Icon className="h-5 w-5 text-white transition-smooth" />
                  </div>
                  <span className="font-semibold">{social.name}</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth z-10" />
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

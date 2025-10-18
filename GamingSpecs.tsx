import { Monitor, Mouse, Headphones } from "lucide-react";
import mouseImg from "@/assets/mouse.jpg";
import headsetImg from "@/assets/headset.jpg";
import laptopImg from "@/assets/laptop.png";

const GamingSpecs = () => {
  const specs = [
    {
      title: "Laptop",
      model: "MSI Content Creation 14",
      icon: Monitor,
      image: laptopImg,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mouse",
      model: "Razer Viper Mini",
      icon: Mouse,
      image: mouseImg,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Headset",
      model: "Logitech G435",
      icon: Headphones,
      image: headsetImg,
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Decorative elements */}
      <div className="fixed top-32 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-32 left-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Decorative stars */}
          <div className="absolute top-0 left-1/4 text-primary/20 text-2xl animate-pulse">✦</div>
          <div className="absolute top-5 right-1/4 text-purple-500/20 text-xl animate-pulse" style={{ animationDelay: '0.8s' }}>★</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">GAMING SPECS</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto animate-scale-in" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                style={{ animationDelay: `${index * 0.15}s` }}
                className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-secondary/50 to-secondary/30 flex items-center justify-center overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-smooth`} />
                  <img
                    src={spec.image}
                    alt={spec.model}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110 relative z-10"
                  />
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${spec.gradient} group-hover:animate-float`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-gradient transition-smooth">{spec.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{spec.model}</p>
                  
                  {/* Decorative glow */}
                  <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${spec.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-smooth`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamingSpecs;

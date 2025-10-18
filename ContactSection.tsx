import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Contact via Discord",
      link: "https://discord.com/users/1410528927629312061",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      value: "Let's connect",
      link: "https://discord.com/users/1410528927629312061",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-16 relative">
      {/* Decorative stars */}
      <div className="absolute top-10 left-1/4 text-primary/10 text-2xl animate-pulse">✦</div>
      <div className="absolute bottom-10 right-1/4 text-purple-500/10 text-3xl animate-pulse" style={{ animationDelay: '0.8s' }}>★</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-4 animate-scale-in" />
          <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-xl p-6 text-center transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up hover:scale-105 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
                
                <div className="relative z-10">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${info.gradient} w-fit mx-auto mb-4 group-hover:animate-float`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  {info.link ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="hover:text-primary"
                    >
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </Button>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

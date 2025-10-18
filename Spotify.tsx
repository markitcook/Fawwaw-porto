import { Music, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Spotify = () => {
  const playlistUrl = "https://open.spotify.com/playlist/0qr6YwHhHAACX7gtASBXIe?si=Ixcbb9GGS8Kugrmi39sbiA&pi=wo-vQa_MSK66L";
  const topSong = "Blue";

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Decorative elements */}
      <div className="fixed top-40 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="fixed bottom-40 right-1/4 w-28 h-28 bg-purple-500/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          {/* Decorative music notes */}
          <div className="absolute -top-5 left-1/3 text-primary/20 text-3xl animate-pulse">♪</div>
          <div className="absolute top-2 right-1/3 text-purple-500/20 text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>♫</div>
          <div className="absolute top-10 left-1/4 text-primary/20 text-xl animate-pulse" style={{ animationDelay: '1.2s' }}>♪</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">SPOTIFY PLAYLIST</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto animate-scale-in" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl overflow-hidden transition-smooth hover:border-primary hover:shadow-2xl hover:shadow-primary/20 group animate-slide-up">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-purple-500/40 animate-pulse" />
              
              {/* Floating music icon */}
              <div className="relative z-10">
                <div className="p-6 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-2xl shadow-primary/50 group-hover:animate-float">
                  <Music className="h-20 w-20 text-white" />
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="p-8 md:p-10 relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">My Playlist</h2>
                </div>
                <p className="text-muted-foreground mb-4 text-base md:text-lg">
                  Check out my curated Spotify playlist featuring my favorite tracks.
                </p>
                
                {/* Top track badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-full">
                  <Play className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">Top Track:</span>
                  <span className="font-bold text-gradient text-base">{topSong}</span>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 transition-smooth h-14 text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group/btn relative overflow-hidden"
              >
                <a
                  href={playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Music className="h-5 w-5 group-hover/btn:animate-float" />
                  <span>Open in Spotify</span>
                  <ExternalLink className="h-5 w-5 group-hover/btn:translate-x-1 transition-smooth" />
                </a>
              </Button>

              <div className="mt-6 p-5 bg-gradient-to-r from-secondary/80 to-secondary/50 backdrop-blur-sm rounded-xl border border-border/50">
                <p className="text-sm md:text-base text-center text-foreground font-medium">
                  🎵 Listen to my favorite music and discover new tracks
                </p>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-smooth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;

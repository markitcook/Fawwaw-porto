import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-fade-in">
      <div className="text-center space-y-6">
        <div className="relative">
          <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto" />
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gradient">FAWWAZXX</h2>
          <div className="w-48 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

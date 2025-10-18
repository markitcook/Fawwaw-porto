import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import About from "./pages/About";
import GamingSpecs from "./pages/GamingSpecs";
import Spotify from "./pages/Spotify";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
};

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/gaming-specs" element={<GamingSpecs />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

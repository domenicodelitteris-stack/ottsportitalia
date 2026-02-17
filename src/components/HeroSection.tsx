import { Play, Info, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import LiveBadge from "./LiveBadge";
import heroImg from "@/assets/content/osimhen.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background image */}
      <img src={heroImg} alt="Live Event" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-20">
        <div className="max-w-2xl animate-slide-in">
          <div className="flex items-center gap-3 mb-4">
            <LiveBadge size="lg" />
            <span className="text-sm text-muted-foreground font-medium">Serie A • Giornata 25</span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl text-foreground leading-tight mb-3">
            Inter vs Milan
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
            Derby della Madonnina in diretta. Segui il match più atteso della stagione su Sportitalia.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/event/1"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              Guarda Ora
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors">
              <Plus className="w-4 h-4" />
              La Mia Lista
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

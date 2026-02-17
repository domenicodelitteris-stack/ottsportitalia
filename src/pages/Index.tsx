import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import ContentCard from "@/components/ContentCard";
import LiveBadge from "@/components/LiveBadge";
import { Link } from "react-router-dom";
import { Calendar, TrendingUp, Clock, Star } from "lucide-react";

const liveNow = [
  { title: "Inter vs Milan", subtitle: "Serie A • 2° Tempo", category: "Calcio", viewers: "45.2K" },
  { title: "Juventus vs Roma", subtitle: "Serie A • 1° Tempo", category: "Calcio", viewers: "32.1K" },
  { title: "ATP Finals - Sinner vs Djokovic", subtitle: "Set 2", category: "Tennis", viewers: "28.5K" },
  { title: "MotoGP Mugello - Qualifiche", subtitle: "In corso", category: "MotoGP", viewers: "15.3K" },
  { title: "NBA: Lakers vs Celtics", subtitle: "Q3", category: "Basket", viewers: "12.8K" },
];

const upcoming = [
  { title: "Napoli vs Lazio", subtitle: "Domani 20:45 • Serie A", category: "Calcio" },
  { title: "F1 GP Monza - Prove Libere", subtitle: "Sab 14:00", category: "F1" },
  { title: "Champions League Draw", subtitle: "Lun 12:00", category: "Calcio" },
  { title: "Volley Italia vs Francia", subtitle: "Dom 18:00", category: "Volley" },
  { title: "Giro d'Italia - Tappa 15", subtitle: "Dom 13:00", category: "Ciclismo" },
];

const highlights = [
  { title: "Goal spettacolare di Lautaro Martinez", subtitle: "Serie A • Highlights", duration: "3:24", category: "Calcio" },
  { title: "Sinner - Match Point incredibile", subtitle: "ATP Finals", duration: "1:45", category: "Tennis" },
  { title: "Top 10 Save della giornata", subtitle: "Serie A", duration: "5:12", category: "Calcio" },
  { title: "Bagnaia sorpasso all'ultima curva", subtitle: "MotoGP", duration: "2:30", category: "MotoGP" },
  { title: "Dunk della settimana NBA", subtitle: "NBA Highlights", duration: "4:15", category: "Basket" },
  { title: "Gol più belli di Gennaio", subtitle: "Compilation", duration: "8:30", category: "Calcio" },
];

const trending = [
  { title: "Calciomercato Live - Ultime news", subtitle: "Sportitalia • Aggiornamento", duration: "45:00", category: "Talk" },
  { title: "Analisi tattica Derby di Milano", subtitle: "Pre-partita", duration: "22:10", category: "Analisi" },
  { title: "Intervista esclusiva: Spalletti", subtitle: "Nazionale", duration: "15:30", category: "Intervista" },
  { title: "Serie B - Il punto della giornata", subtitle: "Highlights completi", duration: "35:00", category: "Calcio" },
  { title: "Basket italiano: stagione review", subtitle: "Speciale", duration: "28:00", category: "Basket" },
];

const continueWatching = [
  { title: "Campioni d'Italia - Ep.4", subtitle: "Documentario", duration: "12:30", progress: 65 },
  { title: "Serie A - Giornata 24 Review", subtitle: "Highlights", duration: "8:00", progress: 30 },
  { title: "La storia del Grande Torino", subtitle: "Documentario", duration: "45:00", progress: 80 },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Live Now */}
      <ContentCarousel
        title="In Diretta Ora"
        subtitle="Non perderti l'azione live"
        action={
          <Link to="/live" className="text-xs text-primary font-medium hover:underline">
            Vedi tutti
          </Link>
        }
      >
        {liveNow.map((item, i) => (
          <ContentCard key={i} {...item} isLive wide />
        ))}
      </ContentCarousel>

      {/* Upcoming */}
      <ContentCarousel
        title="Prossimi Eventi"
        subtitle="Segna in calendario"
        action={
          <Link to="/calendario" className="text-xs text-primary font-medium hover:underline flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Calendario
          </Link>
        }
      >
        {upcoming.map((item, i) => (
          <ContentCard key={i} {...item} />
        ))}
      </ContentCarousel>

      {/* Highlights */}
      <ContentCarousel title="Highlights" subtitle="I momenti migliori">
        {highlights.map((item, i) => (
          <ContentCard key={i} {...item} wide />
        ))}
      </ContentCarousel>

      {/* Continue Watching */}
      <ContentCarousel title="Continua a Guardare" subtitle="Riprendi da dove eri rimasto">
        {continueWatching.map((item, i) => (
          <ContentCard key={i} {...item} />
        ))}
      </ContentCarousel>

      {/* Trending */}
      <ContentCarousel
        title="Trending"
        subtitle="I più visti della settimana"
        action={
          <span className="flex items-center gap-1 text-xs text-accent font-medium">
            <TrendingUp className="w-3 h-3" /> Tendenza
          </span>
        }
      >
        {trending.map((item, i) => (
          <ContentCard key={i} {...item} wide />
        ))}
      </ContentCarousel>

      {/* Sports categories quick access */}
      <section className="py-10">
        <div className="container">
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-6">
            Esplora per Sport
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {["Calcio", "Tennis", "MotoGP", "F1", "Basket", "Volley"].map((sport) => (
              <Link
                key={sport}
                to={`/vod?sport=${sport}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary hover:ring-2 hover:ring-primary transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {sport}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Sportitalia</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/live" className="hover:text-foreground transition-colors">Live</Link></li>
                <li><Link to="/vod" className="hover:text-foreground transition-colors">On Demand</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Sport</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Calcio</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Tennis</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">MotoGP</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Supporto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground transition-colors cursor-pointer">FAQ</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Contatti</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Dispositivi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Legale</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Privacy</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Termini</a></li>
                <li><a className="hover:text-foreground transition-colors cursor-pointer">Cookie</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">© 2026 Sportitalia. Tutti i diritti riservati.</p>
            <div className="flex gap-4 text-muted-foreground">
              <span className="text-xs">Scarica l'app:</span>
              <a className="text-xs hover:text-foreground transition-colors cursor-pointer">iOS</a>
              <a className="text-xs hover:text-foreground transition-colors cursor-pointer">Android</a>
              <a className="text-xs hover:text-foreground transition-colors cursor-pointer">Smart TV</a>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;

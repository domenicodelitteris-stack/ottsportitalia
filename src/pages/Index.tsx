import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import ContentCard from "@/components/ContentCard";
import LiveBadge from "@/components/LiveBadge";
import { Link } from "react-router-dom";
import { Calendar, TrendingUp, Clock, Star } from "lucide-react";

import imgOsimhen from "@/assets/content/osimhen.jpg";
import imgLecceCagliari from "@/assets/content/lecce-cagliari.jpg";
import imgTabanelli from "@/assets/content/tabanelli-freestyle.jpg";
import imgSpalletti from "@/assets/content/spalletti.jpg";
import imgBorussia from "@/assets/content/borussia-dortmund.jpg";
import imgChivu from "@/assets/content/chivu.jpg";
import imgCannavaro from "@/assets/content/cannavaro-baggio-totti.jpg";
import imgFonseca from "@/assets/content/fonseca.jpg";
import imgAlisson from "@/assets/content/alisson-santos-napoli.jpg";
import imgEditoriale from "@/assets/content/serie-a-editoriale.jpg";

import imgSportCalcio from "@/assets/content/sport-calcio.jpg";
import imgSportTennis from "@/assets/content/sport-tennis.jpg";
import imgSportMotoGP from "@/assets/content/sport-motogp.jpg";
import imgSportF1 from "@/assets/content/sport-f1.jpg";
import imgSportBasket from "@/assets/content/sport-basket.jpg";
import imgSportVolley from "@/assets/content/sport-volley.jpg";

const liveNow = [
  { title: "Inter vs Milan", subtitle: "Serie A • 2° Tempo", category: "Calcio", viewers: "45.2K", image: imgChivu },
  { title: "Juventus vs Roma", subtitle: "Serie A • 1° Tempo", category: "Calcio", viewers: "32.1K", image: imgEditoriale },
  { title: "ATP Finals - Sinner vs Djokovic", subtitle: "Set 2", category: "Tennis", viewers: "28.5K", image: imgTabanelli },
  { title: "MotoGP Mugello - Qualifiche", subtitle: "In corso", category: "MotoGP", viewers: "15.3K", image: imgBorussia },
  { title: "NBA: Lakers vs Celtics", subtitle: "Q3", category: "Basket", viewers: "12.8K", image: imgCannavaro },
];

const upcoming = [
  { title: "Napoli vs Lazio", subtitle: "Domani 20:45 • Serie A", category: "Calcio", image: imgAlisson },
  { title: "F1 GP Monza - Prove Libere", subtitle: "Sab 14:00", category: "F1", image: imgFonseca },
  { title: "Champions League Draw", subtitle: "Lun 12:00", category: "Calcio", image: imgOsimhen },
  { title: "Volley Italia vs Francia", subtitle: "Dom 18:00", category: "Volley", image: imgLecceCagliari },
  { title: "Giro d'Italia - Tappa 15", subtitle: "Dom 13:00", category: "Ciclismo", image: imgSpalletti },
];

const highlights = [
  { title: "Goal spettacolare di Lautaro Martinez", subtitle: "Serie A • Highlights", duration: "3:24", category: "Calcio", image: imgOsimhen },
  { title: "Sinner - Match Point incredibile", subtitle: "ATP Finals", duration: "1:45", category: "Tennis", image: imgTabanelli },
  { title: "Top 10 Save della giornata", subtitle: "Serie A", duration: "5:12", category: "Calcio", image: imgEditoriale },
  { title: "Bagnaia sorpasso all'ultima curva", subtitle: "MotoGP", duration: "2:30", category: "MotoGP", image: imgBorussia },
  { title: "Dunk della settimana NBA", subtitle: "NBA Highlights", duration: "4:15", category: "Basket", image: imgCannavaro },
  { title: "Gol più belli di Gennaio", subtitle: "Compilation", duration: "8:30", category: "Calcio", image: imgLecceCagliari },
];

const trending = [
  { title: "Calciomercato Live - Ultime news", subtitle: "Sportitalia • Aggiornamento", duration: "45:00", category: "Talk", image: imgSpalletti },
  { title: "Analisi tattica Derby di Milano", subtitle: "Pre-partita", duration: "22:10", category: "Analisi", image: imgChivu },
  { title: "Intervista esclusiva: Spalletti", subtitle: "Nazionale", duration: "15:30", category: "Intervista", image: imgFonseca },
  { title: "Serie B - Il punto della giornata", subtitle: "Highlights completi", duration: "35:00", category: "Calcio", image: imgAlisson },
  { title: "Basket italiano: stagione review", subtitle: "Speciale", duration: "28:00", category: "Basket", image: imgCannavaro },
];

const continueWatching = [
  { title: "Campioni d'Italia - Ep.4", subtitle: "Documentario", duration: "12:30", progress: 65, image: imgOsimhen },
  { title: "Serie A - Giornata 24 Review", subtitle: "Highlights", duration: "8:00", progress: 30, image: imgEditoriale },
  { title: "La storia del Grande Torino", subtitle: "Documentario", duration: "45:00", progress: 80, image: imgSpalletti },
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
            {[
              { name: "Calcio", image: imgSportCalcio },
              { name: "Tennis", image: imgSportTennis },
              { name: "MotoGP", image: imgSportMotoGP },
              { name: "F1", image: imgSportF1 },
              { name: "Basket", image: imgSportBasket },
              { name: "Volley", image: imgSportVolley },
            ].map((sport) => (
              <Link
                key={sport.name}
                to={`/vod?sport=${sport.name}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary hover:ring-2 hover:ring-primary transition-all"
              >
                <img src={sport.image} alt={sport.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {sport.name}
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

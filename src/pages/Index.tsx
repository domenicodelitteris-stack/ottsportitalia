import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import ContentCard from "@/components/ContentCard";
import { Link } from "react-router-dom";
import { Calendar, TrendingUp } from "lucide-react";

import { liveNow, upcoming, highlights, continueWatching, trending } from "@/data/content";

import imgSportCalcio from "@/assets/content/sport-calcio.jpg";
import imgSportTennis from "@/assets/content/sport-tennis.jpg";
import imgSportMotoGP from "@/assets/content/sport-motogp.jpg";
import imgSportF1 from "@/assets/content/sport-f1.jpg";
import imgSportBasket from "@/assets/content/sport-basket.jpg";
import imgSportVolley from "@/assets/content/sport-volley.jpg";

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
        {liveNow.map((item) => (
          <ContentCard key={item.slug} {...item} isLive wide href={`/event/${item.slug}`} />
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
        {upcoming.map((item) => (
          <ContentCard key={item.slug} {...item} href={`/event/${item.slug}`} />
        ))}
      </ContentCarousel>

      {/* Highlights */}
      <ContentCarousel title="Highlights" subtitle="I momenti migliori">
        {highlights.map((item) => (
          <ContentCard key={item.slug} {...item} wide href={`/event/${item.slug}`} />
        ))}
      </ContentCarousel>

      {/* Continue Watching */}
      <ContentCarousel title="Continua a Guardare" subtitle="Riprendi da dove eri rimasto">
        {continueWatching.map((item) => (
          <ContentCard key={item.slug} {...item} href={`/event/${item.slug}`} />
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
        {trending.map((item) => (
          <ContentCard key={item.slug} {...item} wide href={`/event/${item.slug}`} />
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

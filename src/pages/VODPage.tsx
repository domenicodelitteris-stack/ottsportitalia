import Layout from "@/components/Layout";
import ContentCard from "@/components/ContentCard";
import { Search, Filter, Grid, List } from "lucide-react";
import { useState } from "react";

const categories = ["Tutti", "Calcio", "Tennis", "MotoGP", "F1", "Basket", "Volley", "Ciclismo", "Talk Show"];

const vodContent = [
  { title: "Serie A - Giornata 25 Highlights", subtitle: "Tutti i gol", duration: "32:00", category: "Calcio" },
  { title: "Sinner: Road to Number 1", subtitle: "Documentario", duration: "58:00", category: "Tennis" },
  { title: "MotoGP 2025 - Best Moments", subtitle: "Compilation", duration: "45:00", category: "MotoGP" },
  { title: "Calciomercato Speciale", subtitle: "Talk Show", duration: "1:20:00", category: "Talk Show" },
  { title: "F1 Monza: Dietro le quinte", subtitle: "Esclusiva", duration: "35:00", category: "F1" },
  { title: "NBA All-Star Weekend", subtitle: "Highlights", duration: "28:00", category: "Basket" },
  { title: "Giro d'Italia 2025 Preview", subtitle: "Analisi", duration: "22:00", category: "Ciclismo" },
  { title: "Champions League Review", subtitle: "Week 6", duration: "40:00", category: "Calcio" },
  { title: "Intervista: Jannik Sinner", subtitle: "Esclusiva Sportitalia", duration: "18:00", category: "Tennis" },
  { title: "Top 50 Gol Serie A 2025", subtitle: "Classifica", duration: "25:00", category: "Calcio" },
  { title: "Volley Nations League", subtitle: "Italia vs Brasile", duration: "1:45:00", category: "Volley" },
  { title: "Bagnaia: Campione del Mondo", subtitle: "Documentario", duration: "52:00", category: "MotoGP" },
];

const VODPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = vodContent.filter((item) => {
    const matchCategory = activeCategory === "Tutti" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground">On Demand</h1>
            <p className="text-sm text-muted-foreground mt-1">Highlights, documentari e programmi sportivi</p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cerca contenuti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-shadow"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <ContentCard key={i} {...item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nessun contenuto trovato</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VODPage;

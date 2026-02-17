import Layout from "@/components/Layout";
import LiveBadge from "@/components/LiveBadge";
import ContentCarousel from "@/components/ContentCarousel";
import ContentCard from "@/components/ContentCard";
import { Play, Clock, Share2, Heart, BarChart3, Users } from "lucide-react";
import { useParams } from "react-router-dom";

import imgChivu from "@/assets/content/chivu.jpg";
import imgEditoriale from "@/assets/content/serie-a-editoriale.jpg";
import imgSpalletti from "@/assets/content/spalletti.jpg";
import imgOsimhen from "@/assets/content/osimhen.jpg";

const relatedHighlights = [
  { title: "Pre-partita analisi tattica", subtitle: "Studio", duration: "12:00", category: "Analisi", image: imgEditoriale },
  { title: "Inter vs Milan - Andata", subtitle: "Highlights", duration: "8:30", category: "Calcio", image: imgChivu },
  { title: "Top 10 Derby storici", subtitle: "Compilation", duration: "15:00", category: "Calcio", image: imgOsimhen },
  { title: "Intervista Inzaghi pre-gara", subtitle: "Esclusiva", duration: "5:20", category: "Intervista", image: imgSpalletti },
];

const EventPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container py-6">
        {/* Player */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary mb-6 max-w-5xl mx-auto">
          <img src={imgChivu} alt="Inter vs Milan" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute top-4 left-4">
            <LiveBadge size="md" />
          </div>
        </div>

        {/* Event Info */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <LiveBadge />
                <span className="text-xs text-muted-foreground">Serie A • Giornata 25</span>
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground">Inter vs Milan</h1>
              <p className="text-muted-foreground mt-2">Derby della Madonnina • San Siro, Milano</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Users, label: "Spettatori", value: "45.2K" },
              { icon: Clock, label: "Tempo", value: "65'" },
              { icon: BarChart3, label: "Possesso", value: "52% - 48%" },
              { icon: Play, label: "Tiri in porta", value: "6 - 4" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Score */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-2">
                  <span className="font-display font-bold text-foreground">INT</span>
                </div>
                <p className="font-display font-bold text-foreground">Inter</p>
              </div>
              <div className="text-center">
                <p className="font-display font-black text-5xl text-foreground">2 - 1</p>
                <p className="text-xs text-live font-medium mt-1">65' • 2° Tempo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-2">
                  <span className="font-display font-bold text-foreground">MIL</span>
                </div>
                <p className="font-display font-bold text-foreground">Milan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <ContentCarousel title="Contenuti Collegati">
          {relatedHighlights.map((item, i) => (
            <ContentCard key={i} {...item} />
          ))}
        </ContentCarousel>
      </div>
    </Layout>
  );
};

export default EventPage;

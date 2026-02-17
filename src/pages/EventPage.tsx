import Layout from "@/components/Layout";
import LiveBadge from "@/components/LiveBadge";
import ContentCarousel from "@/components/ContentCarousel";
import ContentCard from "@/components/ContentCard";
import { Play, Clock, Share2, Heart, BarChart3, Users, ArrowLeft, X } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { getContentBySlug, highlights } from "@/data/content";
import { useState } from "react";

const EventPage = () => {
  const { id } = useParams();
  const content = id ? getContentBySlug(id) : undefined;
  const [playing, setPlaying] = useState(false);

  if (!content) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">Contenuto non trovato</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Torna alla Home
          </Link>
        </div>
      </Layout>
    );
  }

  const related = highlights.filter((h) => h.slug !== content.slug).slice(0, 4);

  return (
    <Layout>
      <div className="container py-6">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Indietro
        </Link>

        {/* Player */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary mb-6 max-w-7xl mx-auto">
          {playing ? (
            <>
              <iframe
                src="https://players.brightcove.net/6313885189001/2aMfaPIpb_default/index.html?videoId=6389464048112"
                title={content.title}
                className="absolute inset-0 w-full h-full"
                allow="encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <img src={content.image} alt={content.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
                <button
                  onClick={() => setPlaying(true)}
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                </button>
              </div>
              {content.isLive && (
                <div className="absolute top-4 left-4">
                  <LiveBadge size="md" />
                </div>
              )}
              {content.duration && (
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs px-3 py-1 rounded-lg bg-background/70 text-foreground font-medium backdrop-blur-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {content.duration}
                  </span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Event Info */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {content.isLive && <LiveBadge />}
                {content.category && (
                  <span className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                    {content.category}
                  </span>
                )}
                {content.subtitle && <span className="text-xs text-muted-foreground">{content.subtitle}</span>}
              </div>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground">{content.title}</h1>
              {content.description && (
                <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">{content.description}</p>
              )}
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

          {/* Stats for live content */}
          {content.isLive && content.viewers && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: Users, label: "Spettatori", value: content.viewers },
                { icon: Clock, label: "Stato", value: "In Diretta" },
                { icon: BarChart3, label: "Categoria", value: content.category || "-" },
                { icon: Play, label: "Qualità", value: "HD 1080p" },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Progress for continue watching */}
          {content.progress !== undefined && (
            <div className="mb-8 bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progresso visione</span>
                <span className="text-sm font-medium text-foreground">{content.progress}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: `${content.progress}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <ContentCarousel title="Contenuti Collegati">
            {related.map((item) => (
              <ContentCard key={item.slug} {...item} href={`/event/${item.slug}`} />
            ))}
          </ContentCarousel>
        )}
      </div>
    </Layout>
  );
};

export default EventPage;

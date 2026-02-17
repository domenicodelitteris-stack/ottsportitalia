import Layout from "@/components/Layout";
import { User, Clock, Heart, LogOut, Settings, Bell, CreditCard, Play } from "lucide-react";
import { Link } from "react-router-dom";

const watchHistory = [
  { title: "Inter vs Milan", time: "2h fa", progress: 100 },
  { title: "Sinner vs Djokovic", time: "5h fa", progress: 75 },
  { title: "Campioni d'Italia Ep.4", time: "Ieri", progress: 65 },
  { title: "Calciomercato Speciale", time: "2 giorni fa", progress: 100 },
];

const favorites = [
  "Serie A", "Champions League", "ATP Finals", "MotoGP", "F1"
];

const AccountPage = () => {
  return (
    <Layout>
      <div className="container py-6 max-w-4xl">
        <h1 className="font-display font-bold text-3xl text-foreground mb-8">Il Mio Account</h1>

        {/* Profile card */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-bold text-xl text-foreground">Mario Rossi</h2>
            <p className="text-sm text-muted-foreground">mario.rossi@email.com</p>
            <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold">
              <CreditCard className="w-3 h-3" /> Premium
            </div>
          </div>
          <button className="px-4 py-2 rounded-xl bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors">
            Modifica Profilo
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Watch History */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <h3 className="font-display font-bold text-sm text-foreground">Cronologia</h3>
            </div>
            <div className="divide-y divide-border">
              {watchHistory.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Play className="w-3 h-3 text-muted-foreground/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  {item.progress < 100 && (
                    <div className="w-16 h-1.5 rounded-full bg-secondary">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Favorites */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <h3 className="font-display font-bold text-sm text-foreground">Preferiti</h3>
            </div>
            <div className="p-4 flex flex-wrap gap-2">
              {favorites.map((fav) => (
                <span key={fav} className="px-3 py-1.5 rounded-xl bg-secondary text-sm text-foreground font-medium">
                  {fav}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 space-y-2">
          {[
            { icon: Bell, label: "Notifiche", desc: "Gestisci le notifiche live" },
            { icon: CreditCard, label: "Abbonamento", desc: "Premium attivo fino al 15/03/2026" },
            { icon: Settings, label: "Impostazioni", desc: "Qualità video, lingua, preferenze" },
            { icon: LogOut, label: "Esci", desc: "Disconnetti il tuo account" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:bg-secondary/50 transition-colors text-left"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;

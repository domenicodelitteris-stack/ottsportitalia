import Layout from "@/components/Layout";
import LiveBadge from "@/components/LiveBadge";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const events = [
  { date: "17 Feb", time: "20:45", title: "Inter vs Milan", sport: "Calcio", league: "Serie A", live: true },
  { date: "17 Feb", time: "21:00", title: "Sinner vs Djokovic", sport: "Tennis", league: "ATP Finals", live: true },
  { date: "18 Feb", time: "15:00", title: "MotoGP Mugello", sport: "MotoGP", league: "Qualifiche" },
  { date: "18 Feb", time: "20:45", title: "Napoli vs Lazio", sport: "Calcio", league: "Serie A" },
  { date: "19 Feb", time: "14:00", title: "F1 GP Monza", sport: "F1", league: "Prove Libere" },
  { date: "19 Feb", time: "18:00", title: "Italia vs Francia", sport: "Volley", league: "Nations League" },
  { date: "20 Feb", time: "21:00", title: "Atalanta vs Fiorentina", sport: "Calcio", league: "Serie A" },
  { date: "20 Feb", time: "20:00", title: "NBA: Celtics vs Warriors", sport: "Basket", league: "NBA" },
  { date: "21 Feb", time: "15:30", title: "Giro d'Italia - Tappa 15", sport: "Ciclismo", league: "Giro" },
];

const CalendarioPage = () => {
  const [sportFilter, setSportFilter] = useState("Tutti");
  const sports = ["Tutti", ...new Set(events.map((e) => e.sport))];

  const filtered = sportFilter === "Tutti" ? events : events.filter((e) => e.sport === sportFilter);

  // Group by date
  const grouped = filtered.reduce((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = [];
    acc[ev.date].push(ev);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground flex items-center gap-3">
              <Calendar className="w-8 h-8 text-primary" />
              Calendario Eventi
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Tutti gli eventi sportivi in programma</p>
          </div>
        </div>

        {/* Sport filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          {sports.map((s) => (
            <button
              key={s}
              onClick={() => setSportFilter(s)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                sportFilter === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Events grouped by date */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([date, evts]) => (
            <div key={date}>
              <h3 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                {date}
              </h3>
              <div className="space-y-2">
                {evts.map((ev, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors cursor-pointer ${
                      ev.live
                        ? "bg-live/5 border-live/20 hover:bg-live/10"
                        : "bg-card border-border hover:bg-secondary/50"
                    }`}
                  >
                    <span className="text-sm font-mono text-muted-foreground w-12">{ev.time}</span>
                    {ev.live && <LiveBadge size="sm" />}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{ev.title}</p>
                      <p className="text-xs text-muted-foreground">{ev.league}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground font-medium">
                      {ev.sport}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CalendarioPage;

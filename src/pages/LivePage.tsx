import Layout from "@/components/Layout";
import LiveBadge from "@/components/LiveBadge";
import { Play, Users, MessageSquare, Radio, ChevronRight } from "lucide-react";
import { useState } from "react";

const channels = [
  { id: 1, name: "Sportitalia 1", event: "Inter vs Milan", sport: "Serie A", viewers: "45.2K", active: true },
  { id: 2, name: "Sportitalia 2", event: "Juventus vs Roma", sport: "Serie A", viewers: "32.1K", active: true },
  { id: 3, name: "Sportitalia Tennis", event: "Sinner vs Djokovic", sport: "ATP Finals", viewers: "28.5K", active: true },
  { id: 4, name: "Sportitalia Motors", event: "MotoGP Qualifiche", sport: "MotoGP", viewers: "15.3K", active: true },
  { id: 5, name: "Sportitalia Basket", event: "Lakers vs Celtics", sport: "NBA", viewers: "12.8K", active: true },
  { id: 6, name: "Sportitalia Extra", event: "Calciomercato LIVE", sport: "Talk Show", viewers: "8.4K", active: true },
];

const epgData = [
  { time: "20:00", title: "Pre-Partita Serie A", channel: "Sportitalia 1" },
  { time: "20:45", title: "Inter vs Milan", channel: "Sportitalia 1", live: true },
  { time: "22:45", title: "Post-Partita", channel: "Sportitalia 1" },
  { time: "20:00", title: "Studio Sport", channel: "Sportitalia 2" },
  { time: "20:45", title: "Juventus vs Roma", channel: "Sportitalia 2", live: true },
  { time: "23:00", title: "Highlights Serie A", channel: "Sportitalia 2" },
];

const LivePage = () => {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [showChat, setShowChat] = useState(false);

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Player */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-muted-foreground/30 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Player Placeholder</p>
                </div>
              </div>

              {/* Live indicator */}
              <div className="absolute top-4 left-4">
                <LiveBadge size="md" />
              </div>

              {/* Viewer count */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <Users className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-medium text-foreground">{selectedChannel.viewers}</span>
              </div>
            </div>

            {/* Channel Info */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <LiveBadge size="sm" />
                  <span className="text-xs text-muted-foreground">{selectedChannel.sport}</span>
                </div>
                <h1 className="font-display font-bold text-2xl text-foreground">{selectedChannel.event}</h1>
                <p className="text-sm text-muted-foreground mt-1">{selectedChannel.name}</p>
              </div>
              <button
                onClick={() => setShowChat(!showChat)}
                className="lg:hidden p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

            {/* EPG */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                <Radio className="w-4 h-4 text-primary" />
                Guida TV - {selectedChannel.name}
              </h3>
              <div className="space-y-2">
                {epgData
                  .filter((e) => e.channel === selectedChannel.name)
                  .map((entry, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                        entry.live ? "bg-primary/10 border border-primary/20" : "hover:bg-secondary"
                      }`}
                    >
                      <span className="text-xs font-mono text-muted-foreground w-12">{entry.time}</span>
                      {entry.live && <LiveBadge size="sm" />}
                      <span className={`text-sm font-medium ${entry.live ? "text-foreground" : "text-muted-foreground"}`}>
                        {entry.title}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Channels + Chat */}
          <div className="w-full lg:w-80 space-y-4">
            {/* Channel List */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-3 border-b border-border">
                <h3 className="font-display font-bold text-sm text-foreground">Canali Live</h3>
              </div>
              <div className="divide-y divide-border">
                {channels.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChannel(ch)}
                    className={`w-full flex items-center gap-3 p-3 text-left transition-colors ${
                      selectedChannel.id === ch.id ? "bg-primary/10" : "hover:bg-secondary"
                    }`}
                  >
                    <div className="w-16 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Play className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground">{ch.name}</p>
                      <p className="text-sm font-medium text-foreground truncate">{ch.event}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <LiveBadge size="sm" />
                        <span className="text-[10px] text-muted-foreground">{ch.viewers}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className={`bg-card rounded-xl border border-border overflow-hidden ${showChat ? "block" : "hidden lg:block"}`}>
              <div className="p-3 border-b border-border flex items-center justify-between">
                <h3 className="font-display font-bold text-sm text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Chat Live
                </h3>
                <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">324 online</span>
              </div>
              <div className="h-64 p-3 flex items-center justify-center">
                <p className="text-xs text-muted-foreground">Chat placeholder</p>
              </div>
              <div className="p-3 border-t border-border">
                <input
                  type="text"
                  placeholder="Scrivi un messaggio..."
                  className="w-full bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LivePage;

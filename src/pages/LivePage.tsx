import Layout from "@/components/Layout";
import LiveBadge from "@/components/LiveBadge";
import { Play, Users, MessageSquare, Radio, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Hls from "hls.js";


const channels = [
  { id: 1, name: "Sportitalia", event: "Sportitalia HD", sport: "Live", viewers: "45.2K", active: true, streamUrl: "https://edge-004.streamup.eu/sportitalia/sihd_abr2/sportitalia/sihd_1080p/chunks.m3u8", thumbnail: "" },
  { id: 2, name: "SI Solo Calcio", event: "Solo Calcio", sport: "Calcio", viewers: "32.1K", active: true, streamUrl: "https://edge-004.streamup.eu/sportitalia/sisolocalcio_abr/sportitalia/sisolocalcio_1080p/chunks.m3u8", thumbnail: "https://sportitalia.s3.eu-west-par.io.cloud.ovh.net/wp-content/uploads/2024/02/si_calcio.png" },
  { id: 3, name: "SI Live 24", event: "Primavera TV", sport: "Live", viewers: "28.5K", active: true, streamUrl: "https://edge-004.streamup.eu/sportitalia/silive24_abr/sportitalia/silive24_480p/chunks.m3u8", thumbnail: "https://sportitalia.s3.eu-west-par.io.cloud.ovh.net/wp-content/uploads/2024/08/primaveratv.jpg" },
  { id: 4, name: "Lazio Style", event: "Lazio Style Channel", sport: "Calcio", viewers: "15.3K", active: true, streamUrl: "https://edge-003.streamup.eu/origin/laziostyle_abr/origin/laziostyle_1080p/chunks.m3u8", thumbnail: "https://sportitalia.s3.eu-west-par.io.cloud.ovh.net/wp-content/uploads/2024/02/lazio_style.jpg" },
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = selectedChannel.streamUrl;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    }
  }, [selectedChannel]);

  return (
    <Layout>
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Player */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary mb-4">
              <video
                ref={videoRef}
                autoPlay
                muted
                controls
                controlsList="noplaybackrate"
                className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls-timeline]:hidden [&::-webkit-media-controls-current-time-display]:hidden [&::-webkit-media-controls-time-remaining-display]:hidden"
              />

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
                    <div className="w-16 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
                       {ch.thumbnail ? (
                         <img src={ch.thumbnail} alt={ch.name} className="w-full h-full object-cover" />
                       ) : (
                         <Play className="w-4 h-4 text-muted-foreground/50" />
                       )}
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

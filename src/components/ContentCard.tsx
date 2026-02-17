import { Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import LiveBadge from "./LiveBadge";

interface ContentCardProps {
  title: string;
  subtitle?: string;
  category?: string;
  duration?: string;
  isLive?: boolean;
  viewers?: string;
  progress?: number;
  href?: string;
  wide?: boolean;
}

const ContentCard = ({
  title,
  subtitle,
  category,
  duration,
  isLive,
  viewers,
  progress,
  href = "/event/1",
  wide = false,
}: ContentCardProps) => {
  return (
    <Link
      to={href}
      className={`group flex-shrink-0 ${wide ? "w-[340px] md:w-[400px]" : "w-[200px] md:w-[240px]"}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary mb-3">
        {/* Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
          <Play className="w-10 h-10 text-muted-foreground/40" />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {isLive && <LiveBadge />}
          {category && (
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-background/70 text-foreground font-medium backdrop-blur-sm">
              {category}
            </span>
          )}
        </div>

        {/* Duration / Viewers */}
        <div className="absolute bottom-2 right-2">
          {isLive && viewers ? (
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-background/70 text-foreground font-medium backdrop-blur-sm">
              {viewers} spettatori
            </span>
          ) : duration ? (
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-background/70 text-foreground font-medium backdrop-blur-sm flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </span>
          ) : null}
        </div>

        {/* Progress bar */}
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
            <div
              className="h-full bg-primary rounded-r-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      )}
    </Link>
  );
};

export default ContentCard;

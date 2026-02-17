const LiveBadge = ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-md bg-live text-live-foreground ${sizes[size]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-live-foreground animate-pulse-live" />
      LIVE
    </span>
  );
};

export default LiveBadge;

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ContentCarouselProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

const ContentCarousel = ({ title, subtitle, children, action }: ContentCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6">
      <div className="container flex items-end justify-between mb-4">
        <div>
          <h2 className="font-display font-bold text-xl md:text-2xl text-foreground">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          {action}
          <button
            onClick={() => scroll("left")}
            className="p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="container">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-2"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;

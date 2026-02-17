import { Play, Info, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import LiveBadge from "./LiveBadge";
import { useState, useEffect, useCallback } from "react";

import imgOsimhen from "@/assets/content/osimhen.jpg";
import imgChivu from "@/assets/content/chivu.jpg";
import imgEditoriale from "@/assets/content/serie-a-editoriale.jpg";
import imgBorussia from "@/assets/content/borussia-dortmund.jpg";
import imgSpalletti from "@/assets/content/spalletti.jpg";

const slides = [
  {
    image: imgOsimhen,
    badge: "live" as const,
    tag: "Serie A • Giornata 25",
    title: "Inter vs Milan",
    description: "Derby della Madonnina in diretta. Segui il match più atteso della stagione su Sportitalia.",
    href: "/event/1",
  },
  {
    image: imgChivu,
    badge: "live" as const,
    tag: "Serie A • Giornata 25",
    title: "Juventus vs Roma",
    description: "Il big match dell'Allianz Stadium. Due squadre in lotta per la Champions League.",
    href: "/event/2",
  },
  {
    image: imgEditoriale,
    tag: "Highlights • Serie A",
    title: "I migliori gol della giornata",
    description: "Rivivi tutte le emozioni della 25ª giornata di Serie A con i gol più belli.",
    href: "/vod",
  },
  {
    image: imgBorussia,
    tag: "Champions League",
    title: "Borussia Dortmund vs Napoli",
    description: "La sfida europea più attesa. Il Napoli cerca il passaggio del turno in Germania.",
    href: "/event/3",
  },
  {
    image: imgSpalletti,
    tag: "Nazionale • Intervista",
    title: "Spalletti: il progetto azzurro",
    description: "L'intervista esclusiva al CT della Nazionale italiana sul futuro del calcio azzurro.",
    href: "/vod",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background images with crossfade */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-20">
        <div className="max-w-2xl" key={current}>
          <div className="flex items-center gap-3 mb-4 animate-slide-in">
            {slide.badge === "live" && <LiveBadge size="lg" />}
            <span className="text-sm text-muted-foreground font-medium">{slide.tag}</span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl text-foreground leading-tight mb-3 animate-slide-in">
            {slide.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg animate-slide-in">
            {slide.description}
          </p>

          <div className="flex flex-wrap gap-3 animate-slide-in">
            <Link
              to={slide.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              Guarda Ora
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors">
              <Plus className="w-4 h-4" />
              La Mia Lista
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-secondary/70 text-foreground hover:bg-secondary transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-secondary/70 text-foreground hover:bg-secondary transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

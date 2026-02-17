import imgOsimhen from "@/assets/content/osimhen.jpg";
import imgLecceCagliari from "@/assets/content/lecce-cagliari.jpg";
import imgTabanelli from "@/assets/content/tabanelli-freestyle.jpg";
import imgSpalletti from "@/assets/content/spalletti.jpg";
import imgBorussia from "@/assets/content/borussia-dortmund.jpg";
import imgChivu from "@/assets/content/chivu.jpg";
import imgCannavaro from "@/assets/content/cannavaro-baggio-totti.jpg";
import imgFonseca from "@/assets/content/fonseca.jpg";
import imgAlisson from "@/assets/content/alisson-santos-napoli.jpg";
import imgEditoriale from "@/assets/content/serie-a-editoriale.jpg";

export interface ContentItem {
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  duration?: string;
  isLive?: boolean;
  viewers?: string;
  progress?: number;
  image: string;
  description?: string;
}

export const liveNow: ContentItem[] = [
  { slug: "inter-vs-milan", title: "Inter vs Milan", subtitle: "Serie A • 2° Tempo", category: "Calcio", viewers: "45.2K", image: imgChivu, description: "Derby della Madonnina in diretta dal Giuseppe Meazza. Inter e Milan si affrontano per la supremazia cittadina nella 25ª giornata di Serie A.", isLive: true },
  { slug: "juventus-vs-roma", title: "Juventus vs Roma", subtitle: "Serie A • 1° Tempo", category: "Calcio", viewers: "32.1K", image: imgEditoriale, description: "Big match all'Allianz Stadium. La Juventus ospita la Roma in un duello cruciale per la zona Champions League.", isLive: true },
  { slug: "sinner-vs-djokovic", title: "ATP Finals - Sinner vs Djokovic", subtitle: "Set 2", category: "Tennis", viewers: "28.5K", image: imgTabanelli, description: "La sfida più attesa delle ATP Finals. Jannik Sinner contro Novak Djokovic in un match che promette spettacolo.", isLive: true },
  { slug: "motogp-mugello-qualifiche", title: "MotoGP Mugello - Qualifiche", subtitle: "In corso", category: "MotoGP", viewers: "15.3K", image: imgBorussia, description: "Le qualifiche del Gran Premio del Mugello. I piloti si contendono la pole position nel circuito toscano.", isLive: true },
  { slug: "lakers-vs-celtics", title: "NBA: Lakers vs Celtics", subtitle: "Q3", category: "Basket", viewers: "12.8K", image: imgCannavaro, description: "La rivalità più storica dell'NBA. Los Angeles Lakers contro Boston Celtics in una sfida che non tradisce mai.", isLive: true },
];

export const upcoming: ContentItem[] = [
  { slug: "napoli-vs-lazio", title: "Napoli vs Lazio", subtitle: "Domani 20:45 • Serie A", category: "Calcio", image: imgAlisson, description: "Il Napoli ospita la Lazio al Maradona in un match fondamentale per la corsa scudetto." },
  { slug: "f1-monza-prove-libere", title: "F1 GP Monza - Prove Libere", subtitle: "Sab 14:00", category: "F1", image: imgFonseca, description: "Le prove libere del Gran Premio d'Italia a Monza. Il tempio della velocità accoglie la Formula 1." },
  { slug: "champions-league-draw", title: "Champions League Draw", subtitle: "Lun 12:00", category: "Calcio", image: imgOsimhen, description: "Il sorteggio della fase ad eliminazione diretta della Champions League. Scopri gli accoppiamenti." },
  { slug: "volley-italia-francia", title: "Volley Italia vs Francia", subtitle: "Dom 18:00", category: "Volley", image: imgLecceCagliari, description: "La nazionale italiana di pallavolo affronta la Francia in un match di Nations League." },
  { slug: "giro-italia-tappa-15", title: "Giro d'Italia - Tappa 15", subtitle: "Dom 13:00", category: "Ciclismo", image: imgSpalletti, description: "La quindicesima tappa del Giro d'Italia. Una frazione di montagna che potrebbe rivoluzionare la classifica." },
];

export const highlights: ContentItem[] = [
  { slug: "gol-lautaro-martinez", title: "Goal spettacolare di Lautaro Martinez", subtitle: "Serie A • Highlights", duration: "3:24", category: "Calcio", image: imgOsimhen, description: "Il gol capolavoro di Lautaro Martinez che ha deciso il match. Un tiro al volo incredibile da fuori area." },
  { slug: "sinner-match-point", title: "Sinner - Match Point incredibile", subtitle: "ATP Finals", duration: "1:45", category: "Tennis", image: imgTabanelli, description: "Il match point incredibile di Jannik Sinner. Un momento di puro talento e concentrazione." },
  { slug: "top-10-save", title: "Top 10 Save della giornata", subtitle: "Serie A", duration: "5:12", category: "Calcio", image: imgEditoriale, description: "Le migliori parate della giornata di Serie A. Portieri protagonisti con interventi spettacolari." },
  { slug: "bagnaia-sorpasso", title: "Bagnaia sorpasso all'ultima curva", subtitle: "MotoGP", duration: "2:30", category: "MotoGP", image: imgBorussia, description: "Il sorpasso mozzafiato di Bagnaia all'ultima curva. Un momento che resterà nella storia del MotoGP." },
  { slug: "dunk-settimana-nba", title: "Dunk della settimana NBA", subtitle: "NBA Highlights", duration: "4:15", category: "Basket", image: imgCannavaro, description: "Le schiacciate più spettacolari della settimana NBA. Potenza e atletismo ai massimi livelli." },
  { slug: "gol-piu-belli-gennaio", title: "Gol più belli di Gennaio", subtitle: "Compilation", duration: "8:30", category: "Calcio", image: imgLecceCagliari, description: "La compilation dei gol più belli segnati nel mese di gennaio. Prodezze tecniche da tutto il mondo." },
];

export const trending: ContentItem[] = [
  { slug: "calciomercato-live", title: "Calciomercato Live - Ultime news", subtitle: "Sportitalia • Aggiornamento", duration: "45:00", category: "Talk", image: imgSpalletti, description: "Tutte le ultime notizie di calciomercato in diretta. Trattative, conferme e colpi di scena." },
  { slug: "analisi-tattica-derby", title: "Analisi tattica Derby di Milano", subtitle: "Pre-partita", duration: "22:10", category: "Analisi", image: imgChivu, description: "L'analisi tattica approfondita del Derby di Milano. Schemi, punti di forza e debolezze delle due squadre." },
  { slug: "intervista-spalletti", title: "Intervista esclusiva: Spalletti", subtitle: "Nazionale", duration: "15:30", category: "Intervista", image: imgFonseca, description: "L'intervista esclusiva al CT della Nazionale Luciano Spalletti sul progetto azzurro e il futuro del calcio italiano." },
  { slug: "serie-b-punto-giornata", title: "Serie B - Il punto della giornata", subtitle: "Highlights completi", duration: "35:00", category: "Calcio", image: imgAlisson, description: "Tutti i gol e gli highlights della giornata di Serie B. Il campionato cadetto non smette di sorprendere." },
  { slug: "basket-italiano-review", title: "Basket italiano: stagione review", subtitle: "Speciale", duration: "28:00", category: "Basket", image: imgCannavaro, description: "Lo speciale dedicato alla stagione del basket italiano. Il punto sul campionato e le coppe europee." },
];

export const continueWatching: ContentItem[] = [
  { slug: "campioni-italia-ep4", title: "Campioni d'Italia - Ep.4", subtitle: "Documentario", duration: "12:30", progress: 65, image: imgOsimhen, description: "Il quarto episodio del documentario sui Campioni d'Italia. La storia della cavalcata tricolore." },
  { slug: "serie-a-giornata-24-review", title: "Serie A - Giornata 24 Review", subtitle: "Highlights", duration: "8:00", progress: 30, image: imgEditoriale, description: "La review completa della 24ª giornata di Serie A. Tutti i gol, le polemiche e le sorprese." },
  { slug: "storia-grande-torino", title: "La storia del Grande Torino", subtitle: "Documentario", duration: "45:00", progress: 80, image: imgSpalletti, description: "Il documentario sulla leggendaria squadra del Grande Torino. Una storia di calcio, passione e tragedia." },
];

// VOD content (also available for detail pages)
export const vodItems: ContentItem[] = [
  { slug: "serie-a-25-highlights", title: "Serie A - Giornata 25 Highlights", subtitle: "Tutti i gol", duration: "32:00", category: "Calcio", image: imgOsimhen, description: "Tutti i gol e gli highlights della 25ª giornata di Serie A." },
  { slug: "sinner-road-to-number1", title: "Sinner: Road to Number 1", subtitle: "Documentario", duration: "58:00", category: "Tennis", image: imgTabanelli, description: "Il documentario sulla scalata di Jannik Sinner verso il numero 1 del mondo." },
  { slug: "motogp-2025-best-moments", title: "MotoGP 2025 - Best Moments", subtitle: "Compilation", duration: "45:00", category: "MotoGP", image: imgBorussia, description: "I migliori momenti della stagione MotoGP 2025." },
  { slug: "calciomercato-speciale", title: "Calciomercato Speciale", subtitle: "Talk Show", duration: "1:20:00", category: "Talk Show", image: imgSpalletti, description: "Lo speciale calciomercato con tutte le ultime trattative." },
  { slug: "f1-monza-dietro-quinte", title: "F1 Monza: Dietro le quinte", subtitle: "Esclusiva", duration: "35:00", category: "F1", image: imgFonseca, description: "Dietro le quinte del Gran Premio di Monza di Formula 1." },
  { slug: "nba-allstar-weekend", title: "NBA All-Star Weekend", subtitle: "Highlights", duration: "28:00", category: "Basket", image: imgCannavaro, description: "Gli highlights dell'NBA All-Star Weekend." },
  { slug: "giro-italia-2025-preview", title: "Giro d'Italia 2025 Preview", subtitle: "Analisi", duration: "22:00", category: "Ciclismo", image: imgLecceCagliari, description: "L'analisi e la preview del Giro d'Italia 2025." },
  { slug: "champions-league-review", title: "Champions League Review", subtitle: "Week 6", duration: "40:00", category: "Calcio", image: imgChivu, description: "La review della sesta giornata di Champions League." },
  { slug: "intervista-sinner", title: "Intervista: Jannik Sinner", subtitle: "Esclusiva Sportitalia", duration: "18:00", category: "Tennis", image: imgAlisson, description: "L'intervista esclusiva a Jannik Sinner su Sportitalia." },
  { slug: "top-50-gol-serie-a", title: "Top 50 Gol Serie A 2025", subtitle: "Classifica", duration: "25:00", category: "Calcio", image: imgEditoriale, description: "La classifica dei 50 gol più belli della Serie A 2025." },
  { slug: "volley-nations-league", title: "Volley Nations League", subtitle: "Italia vs Brasile", duration: "1:45:00", category: "Volley", image: imgTabanelli, description: "Italia vs Brasile nella Volley Nations League." },
  { slug: "bagnaia-campione-mondo", title: "Bagnaia: Campione del Mondo", subtitle: "Documentario", duration: "52:00", category: "MotoGP", image: imgBorussia, description: "Il documentario su Bagnaia Campione del Mondo MotoGP." },
];

// Lookup map for all content by slug
const allContent = [...liveNow, ...upcoming, ...highlights, ...trending, ...continueWatching, ...vodItems];
const contentMap = new Map<string, ContentItem>();
allContent.forEach((item) => contentMap.set(item.slug, item));

export const getContentBySlug = (slug: string): ContentItem | undefined => contentMap.get(slug);

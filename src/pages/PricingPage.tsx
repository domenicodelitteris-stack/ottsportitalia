import Layout from "@/components/Layout";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/mese",
    desc: "Contenuti base e highlights",
    features: ["Highlights gratuiti", "News e aggiornamenti", "1 dispositivo", "Qualità SD", "Pubblicità"],
    cta: "Inizia Gratis",
    popular: false,
  },
  {
    name: "Premium",
    price: "€9.99",
    period: "/mese",
    desc: "Tutto il live streaming sportivo",
    features: [
      "Tutti gli eventi live",
      "VOD completo",
      "3 dispositivi simultanei",
      "Qualità Full HD",
      "Senza pubblicità",
      "Download offline",
      "Chromecast & AirPlay",
    ],
    cta: "Abbonati Ora",
    popular: true,
  },
  {
    name: "Premium+",
    price: "€14.99",
    period: "/mese",
    desc: "L'esperienza sportiva definitiva",
    features: [
      "Tutto di Premium",
      "Qualità 4K HDR",
      "5 dispositivi simultanei",
      "Multi-camera",
      "Statistiche avanzate",
      "Contenuti esclusivi",
      "Accesso anticipato",
    ],
    cta: "Prova 7 Giorni Gratis",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
            Scegli il tuo piano
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Accedi a tutto lo sport in diretta e on demand. Disdici quando vuoi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                plan.popular
                  ? "border-primary bg-primary/5 ring-2 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" /> Più Popolare
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display font-black text-4xl text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;

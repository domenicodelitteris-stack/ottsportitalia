import Layout from "@/components/Layout";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  return (
    <Layout>
      <div className="container py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display font-bold text-3xl text-foreground mb-6">Cerca</h1>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca eventi, canali, contenuti..."
              autoFocus
              className="w-full bg-secondary rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary text-base"
            />
          </div>

          {!query && (
            <p className="text-sm text-muted-foreground text-center">
              Inizia a digitare per cercare contenuti
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;

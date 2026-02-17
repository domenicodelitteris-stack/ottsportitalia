import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import LivePage from "./pages/LivePage";
import VODPage from "./pages/VODPage";
import EventPage from "./pages/EventPage";
import AccountPage from "./pages/AccountPage";
import CalendarioPage from "./pages/CalendarioPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/vod" element={<VODPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendario" element={<CalendarioPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

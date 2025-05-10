
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import TaskerProfilePage from "./pages/TaskerProfilePage";
import JobRequestPage from "./pages/JobRequestPage";
import CraftsmanSignupPage from "./pages/CraftsmanSignupPage";
import JobRequestConfirmation from "./pages/JobRequestConfirmation";
import CraftsmanSignupConfirmation from "./pages/CraftsmanSignupConfirmation";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:category" element={<ServicePage />} />
            <Route path="/tasker/:id" element={<TaskerProfilePage />} />
            <Route path="/request-job" element={<JobRequestPage />} />
            <Route path="/craftsman-signup" element={<CraftsmanSignupPage />} />
            <Route path="/request-confirmation" element={<JobRequestConfirmation />} />
            <Route path="/signup-confirmation" element={<CraftsmanSignupConfirmation />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

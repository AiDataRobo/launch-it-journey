
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import CommunityPage from "./pages/CommunityPage";
import ContactUs from "./pages/ContactUs";
import CareerPath from "./pages/CareerPath";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import LinkedInOptimization from "./pages/LinkedInOptimization";
import PortfolioGenerator from "./pages/PortfolioGenerator";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/career-path" element={<CareerPath />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/linkedin-optimization" element={<LinkedInOptimization />} />
            <Route path="/portfolio-generator" element={<PortfolioGenerator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

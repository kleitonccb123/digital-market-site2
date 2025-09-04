import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import Segments from "@/components/Segments";
import ContactForm from "@/components/ContactForm";
import Blog from "@/components/Blog";
import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  useEffect(() => {
    // Track page view on load
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_lp', {
        event_category: 'engagement',
        event_label: 'landing_page_view'
      });
    }

    // Extract UTM parameters and store them
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || ''
    };
    
    // Store UTM data in sessionStorage for form submission
    sessionStorage.setItem('utm_data', JSON.stringify(utmData));
  }, []);

  return (
    <div className="min-h-screen bg-dm-bg text-dm-text">
      <Header />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Testimonials />
        <Segments />
        <ContactForm />
        <Blog />
        <Differentials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

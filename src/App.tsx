// App.tsx
import React from 'react';
import TopBar from './components/topBar/TopBar';
import MainHeader from './components/mainHeader/MainHeader';
import CategoryBar from './components/CategoryBar/CategoryBar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ProductHero from './components/ProductHero/ProductHero';
import FeaturesShowcase from './components/FeaturesShowcase/FeaturesShowcase';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CrmSection from './components/CrmSection/CrmSection';
import LiveChat from './components/LiveChat/LiveChat';
import ProductCalculator from './components/ProductCalculator/ProductCalculator';
import EngagementAnalytics from './components/EngagementAnalytics/EngagementAnalytics';
import FAQ from './components/FAQ/FAQ';
import SupportLiveChat from './components/SupportLiveChat/SupportLiveChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Container */}
      <header className="flex flex-col w-full shadow-md">
        <TopBar />
        <MainHeader />
        <CategoryBar />
      </header>

      {/* Hero Section Placeholder (to show contrast) */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <HeroSection />
        <ProductHero />
        <FeaturesShowcase />
        <HowItWorks />
        <CrmSection />
        <LiveChat />
        <ProductCalculator />
        <EngagementAnalytics />
        <FAQ />
        <SupportLiveChat />
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default App;
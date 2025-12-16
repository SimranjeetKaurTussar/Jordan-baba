// App.tsx
import React from 'react';
import TopBar from './components/topBar/TopBar';
import MainHeader from './components/mainHeader/MainHeader';
import CategoryBar from './components/CategoryBar/CategoryBar';
import HeroSection from './components/HeroSection/HeroSection';

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
      </main>
    </div>
  );
}

export default App;

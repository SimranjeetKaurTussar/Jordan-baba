// App.tsx
import React from 'react';
import TopBar from './components/topBar/TopBar';
import MainHeader from './components/mainHeader/MainHeader';
import CategoryBar from './components/CategoryBar/CategoryBar';

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
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl h-96 flex items-center justify-center text-gray-500 text-2xl font-bold shadow-inner">
           Hero Banner / Slider Area
        </div>
        
        <div className="mt-12">
           <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Products</h2>
           <div className="grid grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                 <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition h-64"></div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;

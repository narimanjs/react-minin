import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import TeachingSection from './components/TeachingSection/TeachingSection';

function App() {
  return (
    <div>
      <Header />
      <main>
        <TeachingSection />
      </main>
    </div>
  );
}

export default App;

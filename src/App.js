import React, { useState } from 'react';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import TeachingSection from './components/TeachingSection/TeachingSection';
import DifferencesSection from './components/DifferencesSection/DifferencesSection';
import TabsSection from './components/TabsSection/TabsSection';
import FeedSection from './components/FeedSection/FeedSection';
import './App.css';
import EffectSection from './components/EffectSection';

function App() {
  const [tab, setTab] = useState('effect');
  return (
    <div>
      <Header />
      <main>
        <main>
          <IntroSection />
          <TabsSection
            active={tab}
            onChange={current => setTab(current)}
          />
          {tab === 'main' && (
            <>
              <TeachingSection />
              <DifferencesSection />
            </>
          )}
          {tab === 'feedback' && <FeedSection />}
          {tab === 'effect' && <EffectSection />}
        </main>
      </main>
    </div>
  );
}

export default App;

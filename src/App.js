import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeachingSection from './components/TeachingSection/TeachingSection';
import IntroSection from './components/IntroSection/IntroSection';
import DifferencesSection from './components/DifferencesSection/DifferencesSection';
import TabsSection from './components/TabsSection/TabsSection';
import FeedSection from './components/FeedSection/FeedSection';

function App() {
  const [tab, setTab] = useState('feedback');
  return (
    <div>
      <Header />
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
      </main>
    </div>
  );
}

export default App;

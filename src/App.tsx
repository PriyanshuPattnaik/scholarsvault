import { useState } from 'react';
import type { AppTab } from './constants/tabs';
import { Header } from './components/layout/Header';
import { RoadmapTab } from './components/milestones/RoadmapTab';
import { MasterOsTab } from './components/os/MasterOsTab';
import { SignalChainTab } from './components/signal-chain/SignalChainTab';
import { VaultTab } from './components/vault/VaultTab';
import { CaveSectorMap } from './components/ui/CaveSectorMap';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('vault');

  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-sepia/20 pb-12 antialiased">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-6xl mx-auto px-6 mt-8">
        <CaveSectorMap active={activeTab} onNavigate={setActiveTab} />
        {activeTab === 'vault' && <VaultTab />}
        {activeTab === 'os' && <MasterOsTab />}
        {activeTab === 'milestones' && <RoadmapTab />}
        {activeTab === 'signal' && <SignalChainTab />}
      </main>
    </div>
  );
}

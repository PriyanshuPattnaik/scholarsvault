import { useState } from 'react';
import type { AppTab } from './constants/tabs';
import { JarvisShell } from './components/jarvis/JarvisShell';
import { RoadmapTab } from './components/milestones/RoadmapTab';
import { MasterOsTab } from './components/os/MasterOsTab';
import { StudioTab } from './components/studio/StudioTab';
import { VaultTab } from './components/vault/VaultTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('signal');

  return (
    <JarvisShell activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'vault' && <VaultTab />}
      {activeTab === 'os' && <MasterOsTab />}
      {activeTab === 'milestones' && <RoadmapTab />}
      {activeTab === 'signal' && <StudioTab />}
    </JarvisShell>
  );
}

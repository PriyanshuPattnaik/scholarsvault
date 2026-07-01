import { MILESTONES } from '../../data/milestones/academic';
import { useToggleInList } from '../../hooks/useLocalStorage';
import { MilestoneTrack } from '../ui/MilestoneTrack';

export function RoadmapTab() {
  const [completed, toggle] = useToggleInList('polymath_milestones');

  return (
    <MilestoneTrack
      title="Academic & Startup Alignment"
      subtitle="JEE · A-Levels · NIOS · YC · UCAS — check when materialized"
      milestones={MILESTONES}
      completedIds={completed}
      onToggle={toggle}
      variant="timeline"
    />
  );
}

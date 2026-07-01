import { MILESTONES } from '../../data/milestones/academic';
import { useToggleInList } from '../../hooks/useLocalStorage';
import { MilestoneTrack } from '../ui/MilestoneTrack';

export function RoadmapTab() {
  const [completed, toggle] = useToggleInList('polymath_milestones');

  return (
    <MilestoneTrack
      title="12-Month Alignment Target"
      subtitle="Check milestones as you materialize them"
      milestones={MILESTONES}
      completedIds={completed}
      onToggle={toggle}
      variant="timeline"
    />
  );
}

import {
  Container,
  ExperienceLabel
} from '../styles/components/ExperienceBar';
import { useChallenges } from '../hooks/ChallengesContext';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round(currentExperience * 100)/experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>

        <ExperienceLabel style={{ left: `${percentToNextLevel}%` }}>
          { currentExperience } xp
        </ExperienceLabel>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}

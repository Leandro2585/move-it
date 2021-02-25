import { Container } from '../styles/components/CompletedChallenges';
import { useChallenges } from '../hooks/ChallengesContext';

export default function CompletedChallenges() {
  const { challengesCompleted } = useChallenges();

  return(
    <Container>
      <span>Desafios completos</span>
      <span>{ challengesCompleted }</span>
    </Container>
  );
}

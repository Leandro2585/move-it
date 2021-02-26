import { Overlay, Container } from '../styles/components/LevelUpModal';
import { useChallenges } from '../hooks/ChallengesContext';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();
  return(
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={closeLevelUpModal} type="button">
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </Container>
    </Overlay>
  );
}

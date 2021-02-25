import { useEffect } from 'react';
import {
  Container,
  StatusButton,
  ChallengeActive,
  ChallengeNotActive
} from '../styles/components/ChallengeBox';
import { useCountdown } from '../hooks/CountdownContext';
import { useChallenges } from '../hooks/ChallengesContext';

export default function ChallengeBox() {

  const {
    resetChallenge,
    activeChallenge,
    completeChallenge
  } = useChallenges();
  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return(
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe { activeChallenge.amount } xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{ activeChallenge.description }</p>
          </main>
          <footer>
            <StatusButton
              status="failed"
              onClick={handleChallengeFailed}
              type="button"
              >Falhei</StatusButton>

            <StatusButton
              status="succeeded"
              type="button"
              onClick={handleChallengeSucceeded}
              >Completei</StatusButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}

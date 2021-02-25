import {
  ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext
 } from 'react';
import challenges from '../data/challenges.json';

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengeData {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  activeChallenge: ChallengeData;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  levelUp(): void;
  resetChallenge(): void;
  completeChallenge(): void;
  startNewChallenge(): void;
}

const ChallengesContext = createContext<ChallengesContextData>({} as ChallengesContextData);

function ChallengesProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<ChallengeData | null>(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('./Novo desafio 🔔', {
        body: `Valendo ${challenge.amount}xp`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience =  finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
  return(
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      resetChallenge,
      activeChallenge,
      currentExperience,
      completeChallenge,
      startNewChallenge,
      challengesCompleted,
      experienceToNextLevel
    }}>
      {children}
    </ChallengesContext.Provider>
  );
}

function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);
  return context;
}

export { ChallengesProvider, useChallenges};

import {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Container,
  TimeContent,
  StartCountdownButton
} from '../styles/components/Countdown';
import { FaPlay, FaStop, FaCheck } from 'react-icons/fa';
import { useCountdown } from '../hooks/CountdownContext';

export default function Countdown() {
  const {
    minutes,
    seconds,
    isActive, 
    hasFinished,
    resetCountdown,
    startCountdown
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <Container>
        <TimeContent>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </TimeContent>
        <span>:</span>
        <TimeContent>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </TimeContent>
      </Container>
      { hasFinished ? (
        <StartCountdownButton
          disabled
        >
          Ciclo encerrado <FaCheck/>
        </StartCountdownButton>
        ) : isActive ? (
            <StartCountdownButton
              isActive={isActive}
              onClick={resetCountdown}
              type="button"
            >
              Abandonar ciclo <FaStop/>
            </StartCountdownButton>
          ) : (
            <StartCountdownButton
              onClick={startCountdown}
              type="button"
            >
              Iniciar um ciclo <FaPlay/>
            </StartCountdownButton>
          )
      }
    </div>
  );
}

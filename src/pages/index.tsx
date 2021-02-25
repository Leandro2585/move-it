import Profile from '../components/Profile';
import Countdown from '../components/Countdow';
import ChallengeBox from '../components/ChallengeBox';
import ExperienceBar from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';
import {
  Section,
  Container,
  CounterContainer,
  ChallengeContainer
} from '../styles/pages/Home';
import Head from 'next/head';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar/>
      <Section>
        <CounterContainer>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </CounterContainer>
        <ChallengeContainer>
          <ChallengeBox/>
        </ChallengeContainer>
      </Section>
    </Container>
  );
}

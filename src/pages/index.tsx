import Head from 'next/head';
import { GetServerSideProps } from 'next';
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
import { ChallengesProvider } from '../hooks/ChallengesContext';
import { ChallengesProvider } from '../hooks/CountdownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar/>
        <CountdownProvider>
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
        </CountdownProvider>

      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

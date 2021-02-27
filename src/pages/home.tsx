import Head from 'next/head';
import { GetServerSideProps } from 'next';
import NavBar from '../components/NavBar';
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
import { AuthProvider } from '../hooks/AuthContext';
import { CountdownProvider } from '../hooks/CountdownContext';
import users from '../data/users.json';
import fs from 'fs';

interface HomeProps {
  id: number;
  name: string;
  avatar_url: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <AuthProvider
      id={props.id}
      name={props.name}
      avatar_url={props.avatar_url}
    >

      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <NavBar/>
        <Container>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar/>
          <CountdownProvider>
            <Section>
              <CounterContainer>
                <Profile
                  id={props.id}
                  name={props.name}
                  avatar_url={props.avatar_url}
                />
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
    </AuthProvider>

  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;
  const {
    id,
    name,
    avatar_url,
  } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      id: Number(id),
      name,
      avatar_url
    }
  }
}

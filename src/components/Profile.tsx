import {
  Container,
  Avatar,
  ProfileData
} from '../styles/components/Profile';
import { useChallenges } from '../hooks/ChallengesContext';

export default function Profile() {

  const { level, levelUp } = useChallenges();

  return(
    <Container>
      <Avatar onClick={levelUp} src="https://github.com/Leandro2585.png" alt="Leandro Real"/>
      <ProfileData>
        <strong>Leandro Real</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </ProfileData>
    </Container>
  );
}

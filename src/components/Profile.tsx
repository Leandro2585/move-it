import {
  Container,
  Avatar,
  ProfileData
} from '../styles/components/Profile';
import { useChallenges } from '../hooks/ChallengesContext';

interface ProfileProps {
  id: number;
  name: string;
  avatar_url: string;
}

export default function Profile({ id, name, avatar_url }: ProfileProps) {
  const { level } = useChallenges();

  return(
    <Container>
      <Avatar src={avatar_url} alt={name}/>
      <ProfileData>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </ProfileData>
    </Container>
  );
}

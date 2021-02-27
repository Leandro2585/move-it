import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import { Container } from '../styles/pages/LeaderBoard'
import Head from 'next/head';

export default function Leaderboard() {
  return (
    <>
    <Head>
      <title>LeaderBoard | move.it</title>
    </Head>
    <NavBar/>
    <Container>
      <h1>Leaderboard</h1>

      <div className="table">
        <div className="row header">
          <b>POSIÇÃO</b>
          <b>USUÁRIO</b>
          <b>DESAFIOS</b>
          <b>EXPERIÊNCIAS</b>
        </div>

        <main>
          <div className="row">
            <b>1</b>
            <Profile name="Leandro" avatar_url="https://github.com/Leandro2585.png" id={1}/>
            <p>
              <i>127</i> completados
            </p>
            <p>
              <i>157000</i> xp
            </p>
          </div>

          <div className="row">
            <b>2</b>
            <Profile name="Leandro" avatar_url="https://github.com/Leandro2585.png" id={1}/>
            <p>
              <i>127</i> completados
            </p>
            <p>
              <i>157000</i> xp
            </p>
          </div>

          <div className="row">
            <b>3</b>
            <Profile name="Leandro" avatar_url="https://github.com/Leandro2585.png" id={1}/>
            <p>
              <i>127</i> completados
            </p>
            <p>
              <i>157000</i> xp
            </p>
          </div>
        </main>
      </div>
    </Container>
    </>
  );
}

import { useState, useContext } from 'react';
import { Container } from '../styles/pages/Landing';
import { InputContainer } from '../styles/components/Input';
import Link from 'next/link';
import Cookie from 'js-cookie';
import axios from 'axios';

export default function Landing() {
  const [username, setUsername] = useState();

  async function signIn(username_string){
    await axios.get(`https://api.github.com/users/${username_string}`)
      .then(response => {
        const { id, name, avatar_url } = response.data;
        Cookie.set('id', id);
        Cookie.set('name', name);
        Cookie.set('avatar_url', avatar_url);
      });
  }

  return(
    <Container>
      <img src="/background.svg" alt="background"/>
      <div>
        <img src="/logo-white.svg" alt="Move It"/>

        <h1>Bem-vindo</h1>

        <span>
          <img src="/icons/github.svg" alt="GitHub"/>
          <p>Faça login com seu GitHub para começar</p>
        </span>
        <InputContainer>
          <input placeholder="Digite seu username" type="text" onChange={(e) => setUsername(e.target.value)}/>
          <button type="button" onClick={() => signIn(username)}>
            <Link href="/home">
              <img src="/icons/arrow-left.svg"/>
            </Link>
          </button>
        </InputContainer>
      </div>
    </Container>
  );
}

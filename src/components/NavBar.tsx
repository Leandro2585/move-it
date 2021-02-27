import { Header } from '../styles/components/NavBar';
import ThemeButton from './ThemeButton';
import { FiHome, FiAward, FiPower } from 'react-icons/fi';
import Link from 'next/link';
import Router from 'next/router';

export default function NavBar() {

  function signOut() {
    Cookie.remove('id');
    Cookie.remove('name');
    Cookie.remove('avatar_url');
    Router.push('/');
  }

  return(
    <Header>
      <div>
        <img src="logo.svg"/>
      </div>
      <nav>
        <div>
          <Link href="/home"><FiHome size={32}/></Link>
        </div>
        <div>
          <Link href="/leaderboard"><FiAward size={32}/></Link>
        </div>
        <div><ThemeButton/></div>
        <div><FiPower onClick={signOut} size={32}/></div>
      </nav>
    </Header>
  );
}

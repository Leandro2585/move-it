import { Header } from '../styles/components/NavBar';
import ThemeButton from './ThemeButton';
import { FaHome } from 'react-icons/fa';

export default function NavBar() {
  return(
    <Header>
      <div>
        <img src="logo.svg"/>
      </div>
      <nav>
        <div><FaHome size={28}/></div>
        <div><ThemeButton/></div>
      </nav>
    </Header>
  );
}

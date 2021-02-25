import AppProvider from '../hooks';
import GlobalStyle from '../styles/global';
import NavBar from '../components/NavBar';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle/>
        <NavBar/>
        <Component {...pageProps} />
    </AppProvider>
  );
}

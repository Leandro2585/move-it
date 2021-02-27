import AppProvider from '../hooks';
import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle/>
        <Component {...pageProps} />
    </AppProvider>
  );
}

import React,{
  useState,
  useEffect,
  ReactNode,
  useContext,
  useCallback,
  createContext
} from 'react';
import { ThemeProvider as ThemeStyled } from 'styled-components';
import { dark, light } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: string;
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem('@MoveIt:theme');
    if(localTheme) {
      setTheme(localTheme);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('@MoveIt:theme', theme);
  }, [theme]);
  return(
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeStyled theme={theme === 'light'?light:dark}>
        {children}
      </ThemeStyled>
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
export { ThemeProvider, useTheme};

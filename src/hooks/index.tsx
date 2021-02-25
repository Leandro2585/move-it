import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { CountdownProvider } from './CountdownContext';
import { ChallengesProvider } from './ChallengesContext';
const AppProvider: React.FC = ({ children }) => {
  return(
    <ChallengesProvider>
      <ThemeProvider>
        <CountdownProvider>
          {children}
        </CountdownProvider>
      </ThemeProvider>
    </ChallengesProvider>
  );
}
export default AppProvider;

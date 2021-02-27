import React, { useEffect } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from '../styles/components/ThemeButton';

export default function ThemeButton() {
  const { toggleTheme, theme } = useTheme();
  return(
    <>
      {theme === 'light' ? <FiMoon size={32} onClick={toggleTheme}/>:<FiSun size={32} onClick={toggleTheme}/>}
    </>
  );
}

import React, { useEffect } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Button } from '../styles/components/ThemeButton';

export default function ThemeButton() {
  const { toggleTheme, theme } = useTheme();
  return(
    <>
      {theme === 'light' ? <BiMoon size={28} onClick={toggleTheme}/>:<BiSun size={28} onClick={toggleTheme}/>}
    </>
  );
}

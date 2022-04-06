import React, { useState, useEffect, useRef } from 'react';
import { MdDarkMode } from 'react-icons/md';
//Tailwind Styled Components
import {
  Label,
  ToggleContain,
  ToggleInput,
  ToggleBg,
  Toggle,
} from '../../styles/Header/DarkMode';

export default function DarkMode() {
  const [isToggled, setIsToggled] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      localStorage.getItem('theme') === 'light'
        ? setIsToggled(false)
        : setIsToggled(true);
      localStorage.setItem('theme', isToggled ? 'dark' : 'light');
      document.documentElement.classList.add(`${isToggled ? 'dark' : 'light'}`);
    } else {
      const isDark = localStorage.getItem('theme') === 'dark';
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isToggled]);
  return (
    <>
      <Label htmlFor='darkModeInput' onClick={() => console.log('Çalıştı!')}>
        <ToggleContain>
          <ToggleInput
            type='checkbox'
            id='darkModeInput'
            onChange={() => setIsToggled(!isToggled)}
            defaultChecked
          />
          <ToggleBg $toggled={isToggled}></ToggleBg>
          <Toggle $toggled={isToggled}>
            <MdDarkMode fill={isToggled ? '#FFF' : '#000'} />
          </Toggle>
        </ToggleContain>
      </Label>
    </>
  );
}

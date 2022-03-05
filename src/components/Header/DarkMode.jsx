import React, { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
//Tailwind Styled Components
import {
  Label,
  ToggleContain,
  ToggleInput,
  ToggleBg,
  Toggle,
} from '../../styles/Header/DarkMode';

const DarkMode = () => {
  const [isToggled, setIsToggled] = useState(1);
  return (
    <>
      <Label htmlFor='darkModeInput'>
        <ToggleContain>
          <ToggleInput
            type='checkbox'
            id='darkModeInput'
            onChange={(e) => setIsToggled(e.target.checked ? 1 : 0)}
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
};

export default DarkMode;

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ThemeIndicator from './themeIndicator';

export default function UseLayoutEffectPage() {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    if (theme==='light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <ThemeIndicator theme={theme} />
      <button onClick={changeTheme} >Change theme</button>
      <Link to="/">Back</Link>
    </div>
  );
}

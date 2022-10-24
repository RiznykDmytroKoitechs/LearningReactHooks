import React, {useLayoutEffect, useState} from 'react';

export default function ThemeIndicator({theme}) {
  const [text, setText] = useState();

  useLayoutEffect(()=>{
    if (theme === 'light') {
      setText('The theme is light!');
    } else {
      setText('The theme is dark!');
    }
  }, [theme]);

  return (
    <p>{text}</p>
  );
}

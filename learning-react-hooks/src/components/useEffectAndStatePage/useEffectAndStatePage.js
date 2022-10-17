import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function UseStateAndEffectPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${counter} раз`;
  });

  useEffect(() => {
    console.log('User entered the page');

    return () => {
      console.log('User left the page');
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Click to increment
      </button>
      <p>You have clicked {counter} times</p>
      <Link to={'/'}>Back</Link>
    </div>
  );
}

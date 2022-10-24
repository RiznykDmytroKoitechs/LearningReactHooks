import React, {useDebugValue, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function useTimer(initValue) {
  const [timer, setTimer] = useState(initValue);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setTimer(timer+1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });
  useDebugValue(timer);
  return [timer];
}

export default function UseDebugValuePage() {
  const [timer] = useTimer(0);

  return (
    <div>
      <p>{timer}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

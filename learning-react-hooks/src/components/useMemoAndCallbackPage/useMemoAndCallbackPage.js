import React, {useCallback, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';
import DivisionCheckDisplay from './DivisionCheckDisplay';
import IncrementButton from './IncrementButton';


export default function UseMemoAndCallbackPage() {
  const [firstVal, setFirstVal] = useState(0);
  const [secondVal, setSecondVal] = useState(0);
  const isFirstDivisibleByThree = useMemo(()=>{
    return firstVal%3==0;
  }, [firstVal]);
  const incrementFirst = useCallback(()=>{
    setFirstVal(firstVal+1);
  });
  const incrementSecond = useCallback(()=>{
    setSecondVal(secondVal+1);
  });

  return (
    <div>
      <IncrementButton incrementFunction={incrementFirst}/>
      <Counter counter={firstVal}/>
      <DivisionCheckDisplay canBeDivided={isFirstDivisibleByThree}/>
      <IncrementButton incrementFunction={incrementSecond}/>
      <Counter counter={secondVal}/>
      <Link to={'/'}>Back</Link>
    </div>
  );
}



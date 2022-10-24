import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {InputObject} from './inputObject';

export default function UseRefPage() {
  const inputElement = useRef(null);
  const secondInputElement = useRef(null);
  const [value, setValue] = useState('');
  return (
    <div>
      <input ref={inputElement} type="text"/>
      <p>{value}</p>
      <button onClick={()=>{
        setValue(inputElement.current.value);
      }}>Press me!</button>
      <InputObject ref={secondInputElement}/>
      <button onClick={()=>{
        secondInputElement.current.focus();
      }}>Focus on the second input!</button>
      <Link to="/">Back</Link>
    </div>
  );
}

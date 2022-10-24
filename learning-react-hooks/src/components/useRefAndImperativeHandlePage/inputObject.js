import React, {forwardRef, useImperativeHandle, useRef} from 'react';

function InnateInputObject(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, ()=>{
    return {
      focus: ()=>{
        inputRef.current.focus();
      },
    };
  });

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
}

export const InputObject = forwardRef(InnateInputObject);


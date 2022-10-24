import React, {useContext, useReducer} from 'react';
import {Link} from 'react-router-dom';

const NumberCounterContext = React.createContext(0);

const initialState = {counter: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {counter: state.counter + 1};
    default:
      throw new Error();
  }
}
export default function UseContextAndReducerPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({type: 'increment'})}>
        Click to increment
      </button>
      <NumberCounterContext.Provider value={state.counter}>
        <Counter/>
      </NumberCounterContext.Provider>
    </div>
  );
}

function Counter() {
  const counter = useContext(NumberCounterContext);

  return (
    <div>
      <p>You have clicked {counter} times</p>
      <Link to={'/'}>Back</Link>
    </div>
  );
}

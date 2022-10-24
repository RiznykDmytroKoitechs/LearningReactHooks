import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
// eslint-disable-next-line max-len
import UseContextAndReducerPage from './components/useContextAndReducerPage/useContextAndReducerPage';
import UseDebugValuePage from './components/useDebugValue/useDebugValue';
// eslint-disable-next-line max-len
import UseStateAndEffectPage from './components/useEffectAndStatePage/useEffectAndStatePage';
// eslint-disable-next-line max-len
import UseLayoutEffectPage from './components/useLayoutEffectPage/useLayoutEffectPage';
// eslint-disable-next-line max-len
import UseMemoAndCallbackPage from './components/useMemoAndCallbackPage/useMemoAndCallbackPage';
import UseRefPage from './components/useRefAndImperativeHandlePage/useRefPage';
// eslint-disable-next-line max-len
import UseTransitionPage from './components/useTransitionAndDeferredValue/useTransitionPage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="effect" element={<UseStateAndEffectPage />} />
        <Route path="context" element={<UseContextAndReducerPage />} />
        <Route path="memo" element={<UseMemoAndCallbackPage/>} />
        <Route path="ref" element={<UseRefPage/>} />
        <Route path="layout" element={<UseLayoutEffectPage/>} />
        <Route path="debug" element={<UseDebugValuePage/>} />
        <Route path="transition" element={<UseTransitionPage/>} />
      </Routes>
    );
  }
}

export default App;

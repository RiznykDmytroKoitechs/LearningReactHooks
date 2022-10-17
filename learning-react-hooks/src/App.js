import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
// eslint-disable-next-line max-len
import UseStateAndEffectPage from './components/useEffectAndStatePage/useEffectAndStatePage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="effect" element={<UseStateAndEffectPage />} />
      </Routes>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthBlock from './containers/AuthBlock/AuthBlock';

function App() {
  return (
    <BrowserRouter>
      <AuthBlock />
    </BrowserRouter>
  );
}

export default App;

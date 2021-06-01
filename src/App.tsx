import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { MovieProvider } from './context/MovieContext';

import Global from './styles/global';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Global />
        <Routes />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

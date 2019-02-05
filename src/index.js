import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CardsProvider } from './contexts/cards';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  (
    <CardsProvider>
      <App />
    </CardsProvider>
  ), document.getElementById('root'));
serviceWorker.unregister();

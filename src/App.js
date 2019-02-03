import React, { Component } from 'react';
import Cards from './components/Cards';
import Loader from './components/Loader';
import { CardsConsumer } from './contexts/cards'

import './App.css';

class App extends Component {

  render() {
    return (
      <CardsConsumer>
        {
          ({ state: { cardsToRender, loading }, actions: { fetchCards } }) => {
            return (
              <div className="App">
                <Cards cards={cardsToRender} fetchCards={fetchCards} loading={loading} />
                {loading && <Loader />}
              </div>
            )
          }
        }
      </CardsConsumer>
    );
  }
}

export default App;

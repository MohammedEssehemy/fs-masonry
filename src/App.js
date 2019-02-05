import React, { Component } from 'react';
import Cards from './components/Cards';
import SideBar from './components/SideBar'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader';
import { CardsConsumer } from './contexts/cards'

import './App.css';

class App extends Component {

  render() {
    return (
      <CardsConsumer>
        {
          ({ state: { cardsToRender, loading }, actions: { fetchCards, search, reset } }) => {
            return (
              <div className="App">
                <SideBar />
                <div id="content">
                  <SearchBar search={search} reset={reset} />
                  <Cards cards={cardsToRender} fetchCards={fetchCards} loading={loading} />
                  {loading && <Loader />}
                </div>
              </div>
            )
          }
        }
      </CardsConsumer>
    );
  }
}

export default App;

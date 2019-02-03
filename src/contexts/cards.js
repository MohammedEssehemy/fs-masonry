import React, { createContext, PureComponent } from 'react';
// import imagesLoaded from 'imagesloaded';

const Cards = createContext()

export const CardsConsumer = Cards.Consumer;

export class CardsProvider extends PureComponent {
  state = {
    page: 1,
    allCards: [],
    cardsToRender: [],
    loading: false
  }

  fetchCards = async () => {
    this.setState({ loading: true });
    const response = await fetch('http://www.amiiboapi.com/api/amiibo/');
    if (response.ok) {
      this.setState({ loading: false })
      return await response.json();
    }
    this.setState({ loading: false })

  }

  loadMore = async () => {
    const { allCards, cardsToRender, page } = this.state;
    if (allCards.length === 0) {
      const res = await this.fetchCards();
      const allCards = res.amiibo;
      const updatedCardsToRender = res.amiibo.slice(0, page * 20);
      this.setState({ allCards, cardsToRender: updatedCardsToRender, page: page + 1 });
      return;
    }
    if (cardsToRender.length < allCards.length) {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({
          cardsToRender: allCards.slice(0, page * 20),
          page: page + 1,
          loading: false
        })
      }, 2000);
    }
  }

  componentDidMount = async () => {
    this.loadMore()
  }

  actions = {
    fetchCards: this.loadMore,
  }

  render() {
    const value = { state: this.state, actions: this.actions };
    const { children } = this.props;
    return (
      <Cards.Provider value={value}>
        {children}
      </Cards.Provider>
    )
  }
}
import React, { createContext, PureComponent } from 'react';
// import imagesLoaded from 'imagesloaded';

const Cards = createContext()

export const CardsConsumer = Cards.Consumer;

export class CardsProvider extends PureComponent {
  state = {
    page: 1,
    allCards: [],
    cardsToRender: [],
    loading: true
  }

  fetchCards = async () => {
    this.setState({ loading: true });
    const response = await fetch('http://www.amiiboapi.com/api/amiibo/');
    if (response.ok) {
      const data = await response.json();
      this.setState({ loading: false })
      return data;
    }
    this.setState({ loading: false })
  }

  loadMore = async () => {
    const { allCards, cardsToRender, page } = this.state;
    if (!allCards.length) {
      const res = await this.fetchCards();
      const allCards = res.amiibo;
      const updatedCardsToRender = res.amiibo.slice(0, page * 20);
      this.setState({ allCards, cardsToRender: updatedCardsToRender, page: page + 1 });
      return;
    }
    if (cardsToRender.length < allCards.length) {
      this.setState({
        loading: true,

      })
      setTimeout(() => {
        this.setState({
          cardsToRender: allCards.slice(0, page * 20),
          page: page + 1,
          loading: false
        })
      }, 1500);
    }

  }

  search = async (name) => {
    this.setState({ loading: true, allCards: [], cardsToRender: [] })
    const response = await fetch(`http://www.amiiboapi.com/api/amiibo/?name=${name}`);
    if (response.ok) {
      const allCards = (await response.json()).amiibo;
      const cardsToRender = allCards.slice(0, 20);
      this.setState({
        page: 2,
        allCards,
        cardsToRender,
      });
    }
    this.setState({ loading: false })
  }

  reset = () => this.setState({ page: 1, allCards: [], cardsToRender: [] }, this.loadMore)

  componentDidMount = async () => {
    this.loadMore()
  }

  actions = {
    fetchCards: this.loadMore,
    search: this.search,
    reset: this.reset,
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
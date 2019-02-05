import React, { Component } from 'react';
import uuid from 'uuid/v4'
import Card from './Card';
import EmptyState from './EmptyState';

export default class Cards extends Component {
  state = {
    cards: [],
  }

  scrolling = false

  componentDidMount = () => {

    const { fetchCards } = this.props;

    window.addEventListener('scroll', () => {
      const docScrolled = document.documentElement.scrollTop + document.documentElement.clientHeight;
      const docHeight = document.documentElement.getBoundingClientRect().height;
      if (!this.props.loading && docScrolled === docHeight && !this.scrolling) {
        this.scrolling = true
        fetchCards()
        setTimeout(() => { this.scrolling = false }, 2000)
      }
    })
  }

  render() {
    const { cards, fetchCards, loading } = this.props;
    return (
      <>
        <div id="grid" onClick={fetchCards}>
          {cards.length ? cards.map(card => {
            return (
              <Card key={uuid()} card={card} />
            )
          }) : null}
        </div>

        {!loading && !cards.length ?
          <EmptyState />
          : null
        }
      </>
    )
  }
}

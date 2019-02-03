import React, { Component } from 'react';
import randomColor from 'randomcolor';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef()
    this.content = React.createRef()
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onLoad);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onLoad);
  }
  onLoad = () => {
    if (this.content.current && this.ref.current) {
      const height = this.content.current.getBoundingClientRect().height;
      const spansHeight = Math.ceil(height / 75) * 10;
      this.ref.current.style.gridRowEnd = `span ${Math.ceil((height - spansHeight) / 75)}`;
      this.ref.current.style.backgroundColor = '#ddd';
      this.content.current.style.opacity = '1';
    }
  }

  render() {
    const { card } = this.props
    return (
      <div
        ref={this.ref}
        style={{ backgroundColor: `${randomColor()}` }}
      >
        <div>
          <img
            ref={this.content}
            src={card.image}
            style={{ opacity: 0 }}
            onLoad={this.onLoad}
            alt=""
          />
        </div>
      </div>
    )
  }
}

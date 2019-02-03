import React, { Component } from 'react'

export default class Loader extends Component {

  ref = React.createRef()
  degs = 1

  componentDidMount = () => {
    if (this.ref.current) {
      this.rotate = setInterval(() => {
        this.ref.current.style.transform = `rotate(${this.degs}deg)`
        this.degs++;
      }, 5)
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.rotate)
  }


  render() {
    return (
      <div id="loader">
        <div ref={this.ref}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

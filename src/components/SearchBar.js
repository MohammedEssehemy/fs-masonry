import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    value: '',
    isVisible: false,
  }

  handleChange = (e) => {
    const { search } = this.props;
    this.setState({ value: e.target.value }, () => {
      const { value } = this.state;
      setTimeout(() => {
        search(value.trim())
      }, 200);
    })
  }

  handleFocus = () => {
    this.setState({ isVisible: true })
  }

  handleCancelClick = () => {
    const { reset } = this.props;
    reset();
    this.setState({ isVisible: false, value: '' })
  }

  render() {
    const { value, isVisible } = this.state;
    return (
      <div id="search">
        <input type="text" value={value} onChange={this.handleChange} onFocus={this.handleFocus} placeholder="Search" />
        {isVisible && <button onClick={this.handleCancelClick}>cancel</button>}
      </div>
    )
  }
}

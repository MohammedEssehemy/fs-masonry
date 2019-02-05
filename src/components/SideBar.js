import React from 'react';
import { Icon } from 'react-icons-kit';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { behanceSquare } from 'react-icons-kit/fa/behanceSquare';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { user } from 'react-icons-kit/fa/user';
export default class SideBar extends React.Component {

  sidebar = React.createRef();
  toggler = React.createRef();

  handleTogglerClick = () => {
    const display = getComputedStyle(this.sidebar.current, null).display;
    if (display === 'none') {
      this.sidebar.current.style.display = 'block';
      this.toggler.current.style.left = '75vw';
    } else {
      this.sidebar.current.style.display = 'none';
      this.toggler.current.style.left = '5vw';
    }
  }

  render() {
    return (
      <>
        <div id="toggler" ref={this.toggler} onClick={this.handleTogglerClick}>
          <Icon style={{ color: '#ccc' }} icon={user} size={30} />
        </div>
        <div id="sidebar" ref={this.sidebar}>
          <div id="sidebar-content">
            <img src={require('../images/johndoe.jpg')} style={{ width: '40%' }} alt="" />
            <p>~ JOHN DOE ~</p>
            <p>johndoe@exmple.com</p>

            <div className="contact">
              <h3>contact</h3>
              <div className="contact-item">
                <Icon style={{ color: '#ccc', margin: '0 10px' }} icon={facebookSquare} />
                <span>https://fb.com/johndoe</span>
              </div>
              <div className="contact-item">
                <Icon style={{ color: '#ccc', margin: '0 10px' }} icon={twitterSquare} />
                <span>https://twiiter.com/johndoe</span>
              </div>
            </div>

            <div className="contact">
              <h3>projects</h3>
              <div className="contact-item">
                <Icon style={{ color: '#ccc', margin: '0 10px' }} icon={dribbble} />
                <span>https://dribbble.com/johndoe</span>
              </div>
              <div className="contact-item">
                <Icon style={{ color: '#ccc', margin: '0 10px' }} icon={behanceSquare} />
                <span>https://behance.com/johndoe</span>
              </div>
            </div>
          </div>

        </div>
      </>

    )
  }
}

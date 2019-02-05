import React from 'react';
import { Icon } from 'react-icons-kit';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { behanceSquare } from 'react-icons-kit/fa/behanceSquare';
import { dribbble } from 'react-icons-kit/fa/dribbble'
export default function SideBar() {
  return (
    <div id="sidebar">
      <img src={require('../images/johndoe.jpg')} style={{ width: '40%' }} alt="" />
      <p>~ JOHN DOE ~</p>
      <p>johndoe@exmple.com</p>

      <div class="contact">
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

      <div class="contact">
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
  )
}

import React from 'react'

export default function SideBar() {
  return (
    <div id="sidebar">
      <div style={{ width: '50%', borderRadius: '50%', overflow: 'hidden' }}>
        <img src={require('../images/John-Doe.jpg')} style={{ width: '100%' }} alt="" />
      </div>
    </div>
  )
}

import React from 'react'
import { Icon } from 'react-icons-kit'
import { heartBroken } from 'react-icons-kit/icomoon/heartBroken'


export default function EmptyState() {
  return (
    <div id="empty">
      <div style={{ display: 'flex' }} >
        <p>Sorry! No items found </p>
        <Icon icon={heartBroken} size={28} />
      </div>
    </div>
  )
}

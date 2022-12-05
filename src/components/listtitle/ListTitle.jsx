import React from 'react'
import '../../assets/styles/ListTitle.scss'
import ItemTitle from './ItemTitle'
function ListTitle() {
  return (
    <div className="list-title">
      <div className="list">
        <ItemTitle />
        <ItemTitle />
        <ItemTitle />
        <ItemTitle />
      </div>
      <div className="add-title-modal">+</div>
    </div>
  )
}

export default ListTitle

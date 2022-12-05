import React from 'react'
import '../../assets/styles/ListTask.scss'
import ItemTask from './ItemTask'
function ListTask() {
  return (
    <div className="list-task">
      <div className="list">
        <ItemTask />
        <ItemTask />
      </div>
      <div className="add-task-modal">+</div>
    </div>
  )
}

export default ListTask

import React from 'react'
import '../assets/styles/TaskContainer.scss'
import DetailtTask from './DetailtTask'
import ListTask from './listtask/ListTask'
import ListTitle from './listtitle/ListTitle'
const TaskContainer = () => {
  return (
    <div className="task-container">
      <div className="col">
        <h3>Title</h3>
        <ListTitle />
      </div>
      <div className="col">
        <h3>Task</h3>
        <ListTask />
      </div>
      <div className="col">
        <h3>Task detailt</h3>
        <DetailtTask />
      </div>
    </div>
  )
}

export default TaskContainer

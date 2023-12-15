import { useState } from 'react'
import trashIcon from '../assets/trashicon.svg'

import { taskType } from './TasksArea'

import styles from './TaskComponent.module.css'

interface TaskComponentProps {
  content: taskType
  onDeleteTask: (task: taskType) => void
}

export function TaskComponent({ content, onDeleteTask }: TaskComponentProps) {
  const [checked, setChecked] = useState(content.isChecked)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleChangeChecked() {
    setChecked(!checked)
  }

  return (
    <div className={styles.divWithTasks}>
      <div className={styles.divWithTasksContainer}>
        <div className={styles.divWithTasksContainerCheckBoxP}>
          <input
            onClick={handleChangeChecked}
            type="checkbox"
            checked={checked}
          />
          <p>{content.nomeTarefa}</p>
        </div>
        <button onClick={handleDeleteTask}>
          <img src={trashIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

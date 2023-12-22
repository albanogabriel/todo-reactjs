import clipBoard from '../assets/clipboard.svg'
import { SearchBar } from './SearchBar'
import { TaskComponent } from './TaskComponent'

import styles from './TasksArea.module.css'
import { useState } from 'react'

export interface taskType {
  key: number
  nomeTarefa: string
  isChecked: boolean
}

export function TasksArea() {
  const [taskValue, setTaskValue] = useState([
    { key: 1, nomeTarefa: 'Exemplo de nome', isChecked: true }
  ])

  function toggleTask(taskToToggle: taskType) {
    const updatedTasks = taskValue.map((task) => {
      if (task.key === taskToToggle.key) {
        return { ...task, isChecked: !task.isChecked }
      }
      return task
    })

    setTaskValue(updatedTasks)
  }

  function handleCreateTask(newTask: taskType) {
    setTaskValue([...taskValue, newTask])
  }

  function deleteTask(taskClickedOnButtonDelete: taskType) {
    const tasksWithoutDeleteOne = taskValue.filter((taskItem) => {
      return taskItem.key !== taskClickedOnButtonDelete.key
    })

    setTaskValue(tasksWithoutDeleteOne)
  }

  const taskArrayIsEmpty = taskValue.length === 0

  return (
    <main>
      <SearchBar onCreateTask={handleCreateTask} taskValue={taskValue} />

      <div className={styles.tasksInfoContainer}>
        <div className={styles.tasksInfo}>
          <p>Tarefas criadas</p>
          <span>{taskValue.length}</span>
        </div>
        <div className={styles.tasksInfo}>
          <p>Concluídas</p>
          <span>{taskValue.filter((task) => task.isChecked).length}</span>
        </div>
      </div>
      <div className={styles.divLine}></div>

      {taskArrayIsEmpty ? (
        <div className={styles.divWithoutTasks}>
          <img src={clipBoard} alt="" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        taskValue.map((task) => {
          return (
            <TaskComponent
              content={task}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
            />
          )
        })
      )}
    </main>
  )
}

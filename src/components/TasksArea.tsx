import clipBoard from '../assets/clipboard.svg'
import { SearchBar } from './SearchBar'
import { TaskComponent } from './TaskComponent'

import styles from './TasksArea.module.css'
import { useState } from 'react'

export function TasksArea() {
  const [taskValue, setTaskValue] = useState(['Tomar 2L de água'])

  function handleCreateTask(newTask: string) {
    setTaskValue([...taskValue, newTask])
  }

  function deleteTask(taskClickedOnButtonDelete: string) {
    const tasksWithoutDeleteOne = taskValue.filter((taskItem) => {
      return taskItem !== taskClickedOnButtonDelete
    })

    setTaskValue(tasksWithoutDeleteOne)
  }

  const taskArrayIsEmpty = taskValue.length === 0

  return (
    <main>
      <SearchBar onCreateTask={handleCreateTask} />

      <div className={styles.tasksInfoContainer}>
        <div className={styles.tasksInfo}>
          <p>Tarefas criadas</p>
          <span>{taskValue.length}</span>
        </div>
        <div className={styles.tasksInfo}>
          <p>Concluídas</p>
          <span>número de tarefas concluídas</span>
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
          return <TaskComponent content={task} onDeleteTask={deleteTask} />
        })
      )}
    </main>
  )
}

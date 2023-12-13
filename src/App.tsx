// import { tasks, TaskType } from './lib/tasks'

import todoLogo from '../public/todologo.svg'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <div className={styles.header}>
        <img src={todoLogo} alt="logo todo" />
      </div>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="search"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="button">
          Criar <span>( + )</span>
        </button>
      </div>
    </div>
  )
}

export default App

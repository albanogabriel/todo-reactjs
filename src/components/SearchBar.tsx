import { ChangeEvent, InvalidEvent, useState } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onCreateTask: (task: string) => void
}

export function SearchBar({ onCreateTask }: SearchBarProps) {
  const [newTaskText, setNewTaskText] = useState('')
  const [searchFocus, setSearchFocus] = useState(true)

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value)
  }

  function handleCreateTask() {
    if (newTaskText.length !== 0) {
      onCreateTask(newTaskText)
      setNewTaskText('') // Limpar o texto após criar a tarefa
    }
  }

  function handleNewTaksInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleTurnSearchFocusFalse() {
    setSearchFocus(false)
  }

  function handleTurnSearchFocusTrue() {
    setSearchFocus(true)
  }

  const isNewTaskInputEmpty = newTaskText.length == 0

  return (
    <div className={styles.searchBarContainer}>
      <input
        onChange={handleNewTaskChange}
        className={styles.searchBar}
        type="search"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        required
        onInvalid={handleNewTaksInvalid}
        onFocus={handleTurnSearchFocusFalse}
        onBlur={handleTurnSearchFocusTrue}
      />
      <button
        onClick={handleCreateTask}
        disabled={isNewTaskInputEmpty && searchFocus}
        type="button"
      >
        Criar <span>( + )</span>
      </button>
    </div>
  )
}

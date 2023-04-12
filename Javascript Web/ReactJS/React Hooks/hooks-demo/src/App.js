import { useState, useEffect } from 'react'
import { NewTodoModal } from './components/NewTodoModal.jsx';
import { TodoContainer } from './components/TodoContainer.jsx';
import { TodoContext } from './contexts/TodoContext.js'

let baseUrl = 'http://localhost:3030/jsonstore/todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);


  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data));
      })
  }, [])

  async function onTodoAdd(values) {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'apllication/json'
      },
      body: JSON.stringify(values)
    })

    setShowTodo(false);
    const result = await response.json();
    setTodos(state => [...state, result])
  }

  function onToDoClick() {
    setShowTodo(true);
  }

  function onToDoClose() {
    setShowTodo(false);
  }

  async function onToDoDelete(todoId) {
    await fetch(`${baseUrl}/${todoId}`, { method: 'DELETE' })

    setTodos(state => state.filter(x => x._id !== todoId))
  }

  const contextValue = {
    onToDoDelete
  }

  return (
    <TodoContext.Provider value={contextValue}>
      <>
        <TodoContainer todos={todos} onToDoClick={onToDoClick} />

        <NewTodoModal show={showTodo} onTodoAdd={onTodoAdd} onToDoClose={onToDoClose} />
      </>
    </TodoContext.Provider>
  );
}

export default App;

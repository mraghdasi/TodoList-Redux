import AddTodo from "./AddTodo"
import "../App.css"
import TodoList from "./TodoList"

function App() {
  return (
    <div className='App'>
      <h1>Todo List Project with Redux</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App

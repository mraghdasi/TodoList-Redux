import { useState } from "react"
import { connect } from "react-redux"
import { addTodos } from "./../actions"

const AddTodo = ({ dispatch }) => {
  const [inputText, setInputText] = useState("")

  const addHandler = () => {
    dispatch(addTodos(inputText))
    setInputText("")
  }

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodos(inputText))
      setInputText("")
    }
  }

  return (
    <div>
      <input onKeyPress={keyHandler} type='text' value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={addHandler}>Add todo</button>
    </div>
  )
}

export default connect()(AddTodo)

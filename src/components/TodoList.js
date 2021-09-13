import Todo from "./Todo"
import { connect } from "react-redux"
import { completeTodo } from "./../actions"

const TodoList = ({ _todos, completeTodo }) => {
  let todoLists = JSON.parse(window.localStorage.getItem('todoList'))||[];
  return (
    <div className={"item-list"}>
      {(todoLists).map((item) => (
        <Todo key={item.id } {...item} onClick={() => completeTodo(item.id )} deletId={item.id} />
      ))}
    </div>
  )
}

const mapStateToPropos = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (id) => dispatch(completeTodo(id)),
  }
}

export default connect(mapStateToPropos, mapDispatchToProps)(TodoList)

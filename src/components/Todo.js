import React from "react"
import { connect } from "react-redux"
import { deleteTodo } from "./../actions"

const Todo = ({ title, onClick, complete, deleteTodo, deletId }) => {
  return (
    <div className={"item"}>
      <li onClick={onClick} style={{ textDecoration: complete ? "line-through" : "none" }}>
        {title}
      </li>
      <span style={{ color: "red" }} onClick={() => deleteTodo(deletId)}>
        X
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  }
}

export default connect(null, mapDispatchToProps)(Todo)

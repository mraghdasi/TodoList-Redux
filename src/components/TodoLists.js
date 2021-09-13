import AddTodo from "./AddTodo";
import "../App.css";
import TodoList from "./TodoList";

import React from "react";
 
const TodoLists = () => {
  return (
    <div className='App'>
      <h1>Todo List Project with Redux</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoLists;
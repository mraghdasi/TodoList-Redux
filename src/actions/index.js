let todoId = JSON.parse(window.localStorage.getItem('todoList')) || [];
todoId = todoId[todoId.length - 1]?.id || 0;

export const addTodos = (title) => ({
  type: "ADD_TODO",
  id: ++todoId,
  title,
})

export const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  id,
})

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
})

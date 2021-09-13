let todoId = 1

export const addTodos = (title) => ({
  type: "ADD_TODO",
  id: todoId++,
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

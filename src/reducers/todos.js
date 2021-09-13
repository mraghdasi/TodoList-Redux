export const todos = (state = [], action) => {
  let getTodoList = JSON.parse(window.localStorage.getItem('todoList')) || [];

  switch (action.type) {
    case "ADD_TODO":
      getTodoList.push({ id: action.id, title: action.title, complete: false })
      window.localStorage.setItem('todoList', JSON.stringify(getTodoList));
      return [...state, { id: action.id, title: action.title, complete: false }]

    case "COMPLETE_TODO":
      let newTodoListDone = getTodoList.map((item) => (item.id === action.id ? { ...item, complete: !item.complete } : item));
      console.log(newTodoListDone);
      window.localStorage.setItem('todoList', JSON.stringify(newTodoListDone));
      return state.map((item) => (item.id === action.id ? { ...item, complete: !item.complete } : item))

    case "DELETE_TODO":
      let newTodoList = getTodoList.filter(item => item.id !== action.id);
      window.localStorage.setItem('todoList', JSON.stringify(newTodoList));

      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

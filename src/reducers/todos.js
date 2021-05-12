export const todos = (state = [], action) => {
  console.log(state, action)
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, title: action.title, complete: false }]

    case "COMPLETE_TODO":
      return state.map((item) => (item.id === action.id ? { ...item, complete: !item.complete } : item))

    case "DELETE_TODO":
      return  state.filter((item) => item.id !== action.id)

    default:
      return state
  }
}

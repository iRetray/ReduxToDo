const initialState = {
  username: "",
  todos: [{ id: "", tittle: "", description: "", completed: false }],
};

export default todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state.todos.push({
        id: state.todos.length,
        tittle: action.tittle,
        description: action.description,
      });
      return state;
    case "TOGGLE_TODO":
      const newState = state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
      });
      return newState
    default:
      return state;
  }
};
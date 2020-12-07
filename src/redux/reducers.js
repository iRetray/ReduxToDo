const initialState = {
  username: "Josefito",
  todos: [],
};

// Data structure { id: "", tittle: "", description: "", completed: false }

const todo = (action, state = initialState) => {
  switch (action?.type) {
    case "ADD_TODO":
      state.todos.push({
        id: state.todos.length + 1,
        tittle: action.tittle,
        description: action.description,
      });
      return state;
    case "TOGGLE_TODO":
      const newState = state.map(function (task) {
        if (task.id === action.id) {
          task.completed = !task.completed;
        }
        return task;
      });
      return newState;
    default:
      return state;
  }
};

export default todo;
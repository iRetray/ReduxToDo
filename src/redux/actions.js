export const addTodo = (tittle, description) => {
  return {
    type: "ADD_TODO",
    tittle,
    description,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

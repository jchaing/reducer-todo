export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { item: action.item, completed: false, id: Date.now() }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, completed: !action.completed}
        } else {
          return todo;
        }
      })
      
    default:
      return state;
  }
};

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
    default:
      return state;
  }
};

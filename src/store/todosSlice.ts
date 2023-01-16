import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from '../interfaces/todo.interface';

interface ITodosState {
  list: ITodo[];
}

const initialState: ITodosState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo['title']>) {
      const todo: ITodo = {
        id: Date.now(),
        title: action.payload,
        isCompleted: false,
      };

      state.list.unshift(todo);
    },

    deleteTodo(state, action: PayloadAction<ITodo['id']>) {
      const indexOfTargetTodo = state.list.findIndex(
        (todo) => todo.id === action.payload,
      );

      if (indexOfTargetTodo >= 0) {
        state.list.splice(indexOfTargetTodo, 1);
      }
    },

    toggleIsCompleted(state, action: PayloadAction<ITodo['id']>) {
      const targetTodo = state.list.find((todo) => todo.id === action.payload);

      if (targetTodo) {
        targetTodo.isCompleted = !targetTodo.isCompleted;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleIsCompleted } = todosSlice.actions;

export default todosSlice.reducer;

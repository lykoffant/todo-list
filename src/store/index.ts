import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';

function saveToLocalStorage(rootState: RootState) {
  try {
    const serializedRootState = JSON.stringify(rootState);

    localStorage.setItem('rootState', serializedRootState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedRootState = localStorage.getItem('rootState');

    return serializedRootState === null
      ? undefined
      : JSON.parse(serializedRootState);
  } catch (e) {
    console.warn(e);

    return undefined;
  }
}

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

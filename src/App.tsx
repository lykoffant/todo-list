import { Container } from 'react-bootstrap';
import GithubCorner from 'react-github-corner';

import styles from './App.module.css';

import { AddTodoForm, TodoList } from './components';

function App() {
  return (
    <Container className={styles.parent} as='main'>
      <h1 className={styles.title}>Todo List</h1>
      <AddTodoForm className={styles.form} />
      <TodoList />
      <GithubCorner href='https://github.com/lykoffant/todo-list' size={60} />
    </Container>
  );
}

export default App;

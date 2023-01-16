import cn from 'classnames';

import { ListGroup, Button, FormCheck } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

import styles from './TodoItem.module.css';

import { ITodoItemProps } from './TodoItem.props';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { deleteTodo, toggleIsCompleted } from '../../store/todosSlice';

function TodoItem({ todo, className, ...props }: ITodoItemProps) {
  const dispatch = useAppDispatch();
  const isCompleted = useAppSelector(
    (state) =>
      state.todos.list.find((item) => item.id === todo.id)?.isCompleted,
  );

  return (
    <ListGroup.Item className={cn(className, styles.parent)} {...props} as='li'>
      <FormCheck.Input
        className={styles.checkbox}
        aria-label='toggle todo completion'
        checked={isCompleted}
        onChange={() => dispatch(toggleIsCompleted(todo.id))}
      />

      <span className={cn(styles.title, { [styles.title_muted]: isCompleted })}>
        {todo.title}
      </span>

      <Button
        className={styles.button}
        variant='danger'
        aria-label='delete the todo'
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <Trash className={styles.icon} />
      </Button>
    </ListGroup.Item>
  );
}

export { TodoItem };

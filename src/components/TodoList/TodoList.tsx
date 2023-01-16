import cn from 'classnames';
import { ListGroup } from 'react-bootstrap';

import { ITodoListProps } from './TodoList.props';

import { useAppSelector } from '../../hooks/useAppSelector';
import { TodoItem } from '../TodoItem/TodoItem';

function TodoList({ className, ...props }: ITodoListProps) {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ListGroup className={cn(className)} {...props} as='ul'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
}

export { TodoList };

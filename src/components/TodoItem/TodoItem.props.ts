import { ListGroupItemProps } from 'react-bootstrap';

import { ITodo } from '../../interfaces/todo.interface';

export interface ITodoItemProps extends ListGroupItemProps {
  todo: ITodo;
}

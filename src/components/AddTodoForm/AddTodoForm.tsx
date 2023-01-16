import cn from 'classnames';
import { FormEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';

import styles from './AddTodoForm.module.css';

import { IAddTodoFormProps } from './AddTodoForm.props';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ITodo } from '../../interfaces/todo.interface';
import { addTodo } from '../../store/todosSlice';

function AddTodoForm({ className, ...props }: IAddTodoFormProps) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<ITodo['title']>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clearedTitle = title.trim().replace(/\s{2,}/g, ' ');

    if (clearedTitle.length > 0) {
      dispatch(addTodo(clearedTitle));
      setTitle('');
    }
  };

  return (
    <Form
      className={cn(className, styles.parent)}
      {...props}
      onSubmit={(e) => submitHandler(e)}
    >
      <Form.Group
        className={styles.titleInputGroup}
        controlId='addTodoForm.TitleInput'
      >
        <Form.Label visuallyHidden>Todo title</Form.Label>
        <Form.Control
          className={styles.titleInput}
          type='text'
          placeholder='Todo title'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit' disabled={!title.trim()}>
        <Plus className={styles.icon} />
      </Button>
    </Form>
  );
}

export { AddTodoForm };

import React from 'react';

import { ListItem, Label, Checkbox, Checkmark, DeleteButton } from './Task.styled';
import { TaskDetails, useDeleteTaskMutation } from '../../services/mockapi';

interface TaskProps {
  task: TaskDetails,
  onChange(id: string): void;
}

const Task = ({ task: {id, text, done}, onChange }: TaskProps) => {
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <ListItem>
      <Label $done={done}>
        <Checkbox checked={done} onChange={() => onChange(id)} />
        <Checkmark />
        {text}
      </Label>
      <DeleteButton onClick={() => deleteTask(id)} />
    </ListItem>
  );
};

export default Task;

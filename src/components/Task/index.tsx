import React from 'react';

import { ListItem, Label, Checkbox, Checkmark, DeleteButton } from './Task.styled';
import { useDeleteTaskMutation } from '../../services/mockapi';

interface TaskProps {
  id: string;
  text: string;
}

const Task = ({ id, text }: TaskProps) => {
  const [deleteTask, mutationState] = useDeleteTaskMutation();

  return (
    <ListItem>
      <Label>
        {text}
        <Checkbox />
        <Checkmark />
      </Label>
      <DeleteButton onClick={() => deleteTask(id)} />
      {/* <DeleteButton onClick={() => handleDelete(id)} /> */}
    </ListItem>
  );
};

export default Task;

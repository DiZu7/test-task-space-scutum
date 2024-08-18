import React from 'react';
import { TaskType } from './type';

import * as SC from './Task.styled';

type PropsType = {
  task: TaskType;
  handleCkeckboxClick: () => void;
  handleDeleteClick: () => void;
};

const Task: React.FC<PropsType> = ({
  task: { text, done },
  handleCkeckboxClick,
  handleDeleteClick,
}) => (
  <SC.ListItem>
    <SC.Label $done={done}>
      <SC.Checkbox checked={done} onChange={handleCkeckboxClick} />
      <SC.Checkmark />
      {text}
    </SC.Label>
    <SC.DeleteButton onClick={handleDeleteClick} />
  </SC.ListItem>
);

export default Task;

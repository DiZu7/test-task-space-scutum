import React from 'react';

import { TodoListContainer, Title } from './TodoList.styled';
import CreateTask from '../CreateTask';
import TaskList from '../TaskList';

const TodoList = () => {
  return (
    <TodoListContainer>
      <Title>My TODO List</Title>
      <CreateTask />
      <TaskList />
    </TodoListContainer>
  );
};

export default TodoList;

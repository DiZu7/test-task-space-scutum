import React from 'react';

import TaskList from '~/components/TaskList';
import CreateTask from '~/components/CreateTask';

import * as SC from './TodoListPage.styled';

const TodoListPage = () => {
  return (
    <SC.TodoListPageContainer>
      <SC.Title>My TODO List</SC.Title>
      <CreateTask />
      <TaskList />
    </SC.TodoListPageContainer>
  );
};

export default TodoListPage;

import React from 'react';
import Task from '../Task';
import { List } from './TaskList.styled';
import { useGetTasksQuery } from './../../services/mockapi';
import LinearProgress from '../LinearProgress';

const TaskList = () => {
  const { data: taskList, isLoading } = useGetTasksQuery();

  if (isLoading || !taskList) return <LinearProgress />;

  return (
    <List>
      {taskList.map(listItem => (
        <Task key={listItem.id} {...listItem} />
      ))}
    </List>
  );
};

export default TaskList;

import React from 'react';
import Task from '../Task';
import { List } from './TaskList.styled';
import { TaskDetails, useGetTasksQuery, useUpdateTaskMutation } from './../../services/mockapi';
import LinearProgress from '../LinearProgress';

const TaskList = () => {
  const { data: taskList, isLoading } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();

  const handleTaskStatusChange = (id: string) => {
    const selectedTask = taskList?.find(task => task.id === id);

    if (selectedTask) {
      const updatedTask: TaskDetails = {
        ...selectedTask,
        done: !selectedTask.done,
      };

      updateTask(updatedTask);
    }
  };

  if (isLoading || !taskList) return <LinearProgress />;

  return (
    <List>
      {taskList.map(listItem => (
        <Task key={listItem.id} {...listItem} onChange={handleTaskStatusChange} />
      ))}
    </List>
  );
};

export default TaskList;

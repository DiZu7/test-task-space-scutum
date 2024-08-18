import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Task from '../Task';
import { List } from './TaskList.styled';
import {
  TaskDetails,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from './../../services/mockapi';
import LinearProgress from '../LinearProgress';
import Pagination from '../Pagination';

const TaskList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.has('limit') ? Number(searchParams.get('limit')) : 10;

  const { data, isLoading } = useGetTasksQuery({ page, limit });
  const [updateTask] = useUpdateTaskMutation();

  const goPrev = () => {
    const prevPage = page - 1;
    
    setSearchParams({ page: prevPage.toString(), limit: limit.toString() });
  };

  const goNext = () => {
    const nextPage = page + 1;

    setSearchParams({ page: nextPage.toString(), limit: limit.toString() });
  };

  const handleTaskStatusChange = (id: string) => {
    const selectedTask = data?.tasks.find(task => task.id === id);

    if (selectedTask) {
      const updatedTask: TaskDetails = {
        ...selectedTask,
        done: !selectedTask.done,
      };

      updateTask(updatedTask);
    }
  };

  if (isLoading || !data) return <LinearProgress />;

  return (
    <>
      <List>
        {data.tasks.map(task => (
          <Task key={task.id} task={task} onChange={handleTaskStatusChange} />
        ))}
      </List>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={page}
        totalItems={data.count}
        itemsPerPage={limit}
      />
    </>
  );
};

export default TaskList;
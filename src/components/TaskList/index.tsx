import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetTasksQuery, useUpdateTaskMutation, useDeleteTaskMutation } from '~/services/mockapi';

import Task from '~/components/Task';
import Pagination from '~/components/Pagination';
import LinearProgress from '~/components/LinearProgress';

import * as SC from './TaskList.styled';
import { TaskType } from '../Task/type';

const TaskList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.has('limit') ? Number(searchParams.get('limit')) : 10;

  const { data, isLoading } = useGetTasksQuery({ page, limit });
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const goPrev = () => {
    const prevPage = page - 1;

    setSearchParams({ page: prevPage.toString(), limit: limit.toString() });
  };

  const goNext = () => {
    const nextPage = page + 1;

    setSearchParams({ page: nextPage.toString(), limit: limit.toString() });
  };

  const handleTaskStatusChanged = (task: TaskType) => () => {
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(updatedTask);
  };

  const handleTaskDelete = (id: string) => () => {
    deleteTask(id);
  };

  if (isLoading || !data) return <LinearProgress />;

  return (
    <>
      <SC.List>
        {data.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            handleCkeckboxClick={handleTaskStatusChanged(task)}
            handleDeleteClick={handleTaskDelete(task.id)}
          />
        ))}
      </SC.List>
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

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

  // Extract page and limit from query parameters
  const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
  const limit = searchParams.has('limit') ? Number(searchParams.get('limit')) : 10;

  // Fetch tasks using RTK Query with pagination parameters
  const { data, isLoading } = useGetTasksQuery({ page, limit });

  //extract mutations defined in API slice for sending the API request to update/ delete the task
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  // Handle pagination for previous page
  const goPrev = () => {
    const prevPage = page - 1;

    // Set new search params based on new page
    setSearchParams({ page: prevPage.toString(), limit: limit.toString() });
  };

  // Handle pagination for next page
  const goNext = () => {
    const nextPage = page + 1;

    // Set new search params based on new page
    setSearchParams({ page: nextPage.toString(), limit: limit.toString() });
  };

  // Handle task status toggle (completed/ uncompleted)
  const handleTaskToggleStatus = (task: TaskType) => () => {
    // toogle task status
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(updatedTask); // Triggers the mutation to update the task
  };

  // Handle task deletion
  const handleTaskDelete = (id: string) => () => {
    deleteTask(id); // Triggers the mutation to delete the task
  };

  // Show loading indicator when data is loading or data is undefined
  if (isLoading || !data) return <LinearProgress />;

  return (
    <>
      <SC.List>
        {data.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            handleCkeckboxClick={handleTaskToggleStatus(task)}
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

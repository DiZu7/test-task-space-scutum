import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TaskType } from '~/components/Task/type';
import configuration from '~/configuration';


export type NewTask = {
  text: string | undefined;
  done: boolean;
};

type TasksResponse = {
  tasks: TaskType[];
  count: number;
};

type TasksQuery = {
  page: number;
  limit: number;
};

export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${configuration.apiUrl}/api/v1`,
  }),
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasks: builder.query<TasksResponse, TasksQuery>({
      query: ({ page, limit }) => `/tasks?page=${page}&limit=${limit}`,
      providesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<void, string>({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    createTask: builder.mutation<void, NewTask>({
      query: NewTask => ({
        url: `/tasks`,
        method: 'POST',
        body: NewTask,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<void, Partial<TaskType>>({
      query: ({ id, ...body }) => {
        return {
          url: `/tasks/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = mockApi;

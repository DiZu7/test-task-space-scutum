import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configuration from '../configuration';

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export interface NewTask {
  text: string;
  done: boolean;
}

type TasksResponse = Task[];

export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63949f6986829c49e8225bf8.mockapi.io/api/v1',
    //  baseUrl: `${configuration.apiUrl}`,
  }),
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasks: builder.query<TasksResponse, void>({
      query: () => '/tasks',
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
    //  deleteTask: builder.mutation({}),
    //  createTask: builder.query<TaskDetails, string>({}),
  }),
});

// export const toggleCompleted = createAsyncThunk(
// "tasks/toggleCompleted",
// async (task, thunkAPI) => {
// try {
// const response = await axios.put(/tasks/${task.id}, {
// completed: !task.completed,
// });
// return response.data;
// } catch (e) {
// return thunkAPI.rejectWithValue(e.message);
// }
// }
// );


export const { useGetTasksQuery, useDeleteTaskMutation, useCreateTaskMutation } = mockApi;

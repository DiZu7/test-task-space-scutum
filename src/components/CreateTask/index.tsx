import React, { ChangeEvent, useState } from 'react';

import { useCreateTaskMutation } from '~/services/mockapi';

import * as SC from './CreateTask.styled';

const CreateTask = () => {
  // State Initialization and management for Input .
  const [inputValue, setInputValue] = useState<string>('');

  // Extract mutation defined in API slice for sending the API request to create the task
  const [createTask] = useCreateTaskMutation();

  // Handle changes of input, when user types in the input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    createTask({ text: inputValue.trim(), done: false }); // Triggers the mutation to create the task
    setInputValue(''); // Clear the input field after submission
  };

  return (
    <SC.CreateTaskForm onSubmit={handleSubmit}>
      <SC.CreateTaskInput value={inputValue} onChange={handleInputChange} />
      <SC.CreateTaskButton>Add</SC.CreateTaskButton>
    </SC.CreateTaskForm>
  );
};

export default CreateTask;

import React, { ChangeEvent, useState } from 'react';

import { useCreateTaskMutation } from '~/services/mockapi';

import * as SC from './CreateTask.styled';

const CreateTask = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const [createTask] = useCreateTaskMutation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createTask({ text: inputValue.trim(), done: false });
    setInputValue('');
  };

  return (
    <SC.CreateTaskForm onSubmit={handleSubmit}>
      <SC.CreateTaskInput value={inputValue} onChange={handleInputChange} />
      <SC.CreateTaskButton>Add</SC.CreateTaskButton>
    </SC.CreateTaskForm>
  );
};

export default CreateTask;

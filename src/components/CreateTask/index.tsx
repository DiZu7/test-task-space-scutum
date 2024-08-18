import React, { ChangeEvent, useState } from 'react';
import { CreateTaskButton, CreateTaskForm, CreateTaskInput } from './CreateTask.styled';
import { useCreateTaskMutation } from '../../services/mockapi';

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
    <CreateTaskForm onSubmit={handleSubmit}>
      <CreateTaskInput value={inputValue} onChange={handleInputChange} />
      <CreateTaskButton>Add</CreateTaskButton>
    </CreateTaskForm>
  );
};

export default CreateTask;

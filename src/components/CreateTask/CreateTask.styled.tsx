import styled from 'styled-components';

export const CreateTaskForm = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

export const CreateTaskInput = styled.input.attrs(props => ({
  type: 'text',
  name: 'text',
  placeholder: 'Enter a task...',
}))`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-right: 0.75rem;
`;

export const CreateTaskButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #ffde21;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4cbb17;
  }
`;

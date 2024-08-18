import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button.attrs({ type: 'button' })<{ disabled: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#8DEC60')};
  color: #fff;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4cbb17')};
  }
`;

export const PaginationInfo = styled.span`
  margin: 0 1rem;
  font-size: 1rem;
`;

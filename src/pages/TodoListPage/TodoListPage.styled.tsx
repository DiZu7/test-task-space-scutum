import styled from 'styled-components';

export const TodoListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  max-width: 600px;
  min-height: 650px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;

  @media (min-width: 426px) {
    margin: 3rem auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

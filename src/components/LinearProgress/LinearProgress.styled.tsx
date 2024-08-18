import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
  height: 10px;
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background-color: #48872b;
  transition: width 0.3s ease-in-out;
`;

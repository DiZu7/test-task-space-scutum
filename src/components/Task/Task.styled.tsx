import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #4f4f4f;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label<{ $done: boolean }>`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ $done }) => ($done ? '#a9a9a9' : '#000')};
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #fff;
  border-radius: 0.375rem;
  border: 0.1875rem solid #eee;

  ${Label}:hover & {
    background-color: #ccc;
  }

  ${Checkbox}:checked + & {
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Checkbox}:checked + &::after {
    display: block;
  }

  &::after {
    left: 0.3125rem;
    top: -0.3125rem;
    width: 0.3125rem;
    height: 0.9375rem;
    border: solid #48872b;
    border-width: 0 0.1875rem 0.1875rem 0;
    transform: rotate(45deg);
  }
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-left: auto;
  text-decoration: none;
  padding: 0;
  transform: rotate(45deg);
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  opacity: 0.7;

  &::before {
    content: '+';
  }
`;

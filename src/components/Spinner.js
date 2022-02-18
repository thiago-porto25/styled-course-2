import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
to {
  transform: rotate(360deg)
}
`;

export const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  margin: 0 auto;
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${rotate} 0.6s linear infinite;
`;

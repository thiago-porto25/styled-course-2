import styled from 'styled-components';

export const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;

  color: ${({ special }) => special && 'red'};
`;

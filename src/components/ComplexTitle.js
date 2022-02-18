import styled from 'styled-components';
import { colors, setupBorder } from '../utils';

const Wrapper = styled.article`
  h1 {
    color: var(--primary);
    text-transform: capitalize;
    text-align: center;
    border: ${setupBorder({ width: 20, color: 'pink' })};
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }

  .box {
    height: 50px;
    border: ${setupBorder({ width: 5, type: 'dashed', color: 'green' })};
  }
`;

export default function ComplexTitle({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </Wrapper>
  );
}

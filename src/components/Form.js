import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  form {
    width: 300px;
    background: #fff;
    padding: 2rem;
    margin-top: 1rem;
  }
`;

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  background-color: var(--primary);
  border: none;
  color: #fff;
  padding: 0.25rem;
  cursor: pointer;

  ${({ type }) =>
    type === 'submit' &&
    css`
      background-color: #000;
      font-size: 20px;
      margin-top: 2rem;
    `}
`;

const Input = styled.input.attrs((p) => ({
  type: p.type || 'text',
  placeholder: p.placeholder || 'please enter value',
}))`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export default function Form() {
  return (
    <Wrapper>
      <h2>Some random stuff</h2>
      <Button>Click me</Button>
      <form>
        <h2>Form</h2>
        <Input type="password" placeholder="enter password" />
        <Input type="email" placeholder="enter email" />
        <Input placeholder="testing" />
        <Input />

        <Button type="submit">submit here</Button>
      </form>
    </Wrapper>
  );
}

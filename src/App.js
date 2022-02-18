import { BasicTitle } from 'components/BasicTitle';
import ComplexTitle from 'components/ComplexTitle';
import { DefaultButton, HipsterButton } from 'components/Buttons';
import Card from 'components/Card';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Spinner } from 'components/Spinner';
import Form from 'components/Form';
import List from 'components/List';

const BaseTheme = {
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const Text = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

function App() {
  const [theme, setTheme] = useState(BaseTheme);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '2rem' }}>
        <Spinner />
        <BasicTitle special>styled components</BasicTitle>
        <BasicTitle>components</BasicTitle>
        <ComplexTitle title={'Title complexy'} />
        <DefaultButton>click me</DefaultButton>
        <HipsterButton as="span">click mu</HipsterButton>
        <HipsterButton as="a" href="http://thiagoporto.tech">
          click my
        </HipsterButton>
        <HipsterButton big>click mi</HipsterButton>
        <Card />
        <Text>Hello world!</Text>
        <button
          onClick={() => setTheme(theme === BaseTheme ? DarkTheme : BaseTheme)}
        >
          Toggle Theme
        </button>
        <Form />
        <List />
      </div>
    </ThemeProvider>
  );
}

export default App;

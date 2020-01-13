import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import colors from './theme';

import DataTable from './components/DataTable';

const Header = styled.h1`
  color: ${props => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Header>Roboto</Header>
      <DataTable />
    </ThemeProvider>
  );
}

export default App;

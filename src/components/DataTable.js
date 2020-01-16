import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
border-collapse: collapse;

th {
    border: 1px solid black;
    padding: 15px;
    font-size: 18px;
  }
`;

function DataTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>v</th>
          <th>
            <input />
          </th>
        </tr>
      </tbody>
    </Table>
  );
}

export default DataTable;

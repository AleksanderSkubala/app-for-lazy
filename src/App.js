import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { formula } from './redux/formula';
import Header from './components/Header';
import Table from './components/Table';

const store = createStore(formula);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;

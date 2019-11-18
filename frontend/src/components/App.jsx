import React from 'react';
import Header from './layout/Header.jsx';
import Dashboard from './queries/Dashboard.jsx';

import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </>
    </Provider>
  );
};

export default App;

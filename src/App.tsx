import React from 'react';
import './App.css';
import Main from '@careebiz/pages/Main';
import { Provider } from 'react-redux'
import { store } from './app-ducks';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <Main />
    </div>
    </Provider>
  );
}

export default App;

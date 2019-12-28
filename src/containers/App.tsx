import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../state/configureStore';
import HomeContainer from './HomeContainer';
import '../styles/app.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HomeContainer />
  </Provider>
);

export default App;

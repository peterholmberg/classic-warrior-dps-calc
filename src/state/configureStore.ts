import { combineReducers } from 'redux';
import { configureStore as rtkConfigureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { StoreState } from '../types/store';
import { ActionOf, setStore } from './store';
import characterReducers from './characterReducer';
import itemsReducers from './itemsReducer';

export function configureStore() {
  const store = rtkConfigureStore<StoreState, ActionOf<any>>({
    reducer: createRootReducer(),
    middleware: process.env.NODE_ENV !== 'production' ? [thunk] : [thunk],
  });

  setStore(store);
  return store;
}

const createRootReducer = () => {
  return combineReducers({
    ...characterReducers,
    ...itemsReducers,
  });
};

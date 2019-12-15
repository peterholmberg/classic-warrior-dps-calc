import { Store } from 'redux';
import { StoreState } from '../types/store';
import { Action } from 'ts-loader/dist/servicesHost';

export let store: Store<StoreState>;

export function setStore(newStore: Store<StoreState>) {
  store = newStore;
}

export interface ActionOf<Payload> extends Action {
  readonly type: string;
  readonly payload: Payload;
}

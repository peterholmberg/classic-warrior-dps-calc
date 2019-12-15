import {
  ThunkAction,
  ThunkDispatch as GenericThunkDispatch,
} from 'redux-thunk';
import { CharacterState } from './character';
import { ItemsState } from './items';
import { ActionOf } from '../state/store';

export interface StoreState {
  character: CharacterState;
  items: ItemsState;
}

export type ThunkResult<R> = ThunkAction<
  R,
  StoreState,
  undefined,
  ActionOf<any>
>;

export type ThunkDispatch = GenericThunkDispatch<StoreState, undefined, any>;

import {
  ThunkAction,
  ThunkDispatch as GenericThunkDispatch,
} from 'redux-thunk';
import { CharacterState } from './character';
import { ItemsState } from './items';
import { ActionOf } from '../state/store';
import { GameState } from './game';

export interface StoreState {
  character: CharacterState;
  items: ItemsState;
  game: GameState;
}

export type ThunkResult<R> = ThunkAction<
  R,
  StoreState,
  undefined,
  ActionOf<any>
>;

export type ThunkDispatch = GenericThunkDispatch<StoreState, undefined, any>;

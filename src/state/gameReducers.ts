import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState } from '../types/game';

const initialGameState: GameState = {
  phase: 2.5,
};

interface GameReducer<S> extends Record<string, any> {
  setPhase: (state: S, action: PayloadAction<number>) => S;
}

export const gameSlice = createSlice<GameState, GameReducer<GameState>>({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    setPhase(state: any, action: any) {
      console.log(action);
      return { ...state, [action.payload]: action.payload };
    },
  },
});

export const { setPhase } = gameSlice.actions;

export default {
  game: gameSlice.reducer,
};

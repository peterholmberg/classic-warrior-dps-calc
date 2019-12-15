import { CharacterState, Class, Race } from '../types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/items';

const initialCharacterState: CharacterState = {
  race: Race.Human,
  class: Class.Warrior,
};

interface CharacterReducer<S> extends Record<string, any> {
  setItemAction: (state: S, action: PayloadAction<Item>) => S;
}

export const characterSlice = createSlice<
  CharacterState,
  CharacterReducer<CharacterState>
>({
  name: 'character',
  initialState: initialCharacterState,
  reducers: {
    setItemAction(state: any, action: any) {
      console.log(action);
      return { ...state, [action.payload]: action.payload };
    },
  },
});

export const { setItemAction } = characterSlice.actions;

export default {
  character: characterSlice.reducer,
};

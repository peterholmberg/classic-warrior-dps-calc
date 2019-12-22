import { CharacterState, Class, Race } from '../types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/items';

const initialCharacterState: CharacterState = {
  race: Race.Human,
  class: Class.Warrior,
  head: {} as Item,
  neck: {} as Item,
  back: {} as Item,
  shoulders: {} as Item,
  chest: {} as Item,
  wrists: {} as Item,
  hands: {} as Item,
  waist: {} as Item,
  legs: {} as Item,
  feet: {} as Item,
  ring1: {} as Item,
  ring2: {} as Item,
  trinket1: {} as Item,
  trinket2: {} as Item,
  mainHand: {} as Item,
  offHand: {} as Item,
  ranged: {} as Item,
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

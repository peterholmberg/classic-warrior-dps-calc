import {
  CharacterState,
  CharacterStats,
  Class,
  Race,
} from '../types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemSlot, Weapon } from '../types/items';

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
  mainHand: {} as Weapon,
  offHand: {} as Weapon,
  ranged: {} as Weapon,
  stats: {} as CharacterStats,
};

interface MiscItem {
  slot: string;
  item: Item;
}

interface CharacterReducer<S> extends Record<string, any> {
  setItemAction: (state: S, action: PayloadAction<Item>) => S;
  setMainHandWeaponAction: (state: S, action: PayloadAction<Weapon>) => S;
  setOffHandWeaponAction: (state: S, action: PayloadAction<Weapon>) => S;
  setRangedWeaponAction: (state: S, action: PayloadAction<Weapon>) => S;
  setMiscItemAction: (state: S, action: PayloadAction<MiscItem>) => S;
}

export const characterSlice = createSlice<
  CharacterState,
  CharacterReducer<CharacterState>
>({
  name: 'character',
  initialState: initialCharacterState,
  reducers: {
    setItemAction(state: any, action: any) {
      return { ...state, [action.payload.itemSlot]: action.payload };
    },
    setMainHandWeaponAction(state: CharacterState, action: any) {
      return action.payload.itemSlot === ItemSlot.TwoHand
        ? { ...state, mainHand: action.payload, offHand: {} as Weapon }
        : {
            ...state,
            mainHand: action.payload,
            stats: recalculateStats({ ...state, mainHand: action.payload }),
          };
    },
    setOffHandWeaponAction(state: CharacterState, action: any) {
      return { ...state, offHand: action.payload };
    },
    setRangedWeaponAction(state: CharacterState, action: any) {
      return { ...state, ranged: action.payload };
    },
    setMiscItemAction(state: CharacterState, action: any) {
      return { ...state, [action.payload.slot]: action.payload.item };
    },
  },
});

const recalculateStats = (state: CharacterState): CharacterStats => {
  Object.values(state).map(prop => {
    console.log(prop);
  });

  return {
    mainHandDamage: []
  }
};

export const {
  setItemAction,
  setMainHandWeaponAction,
  setOffHandWeaponAction,
  setRangedWeaponAction,
  setMiscItemAction,
} = characterSlice.actions;

export default {
  character: characterSlice.reducer,
};

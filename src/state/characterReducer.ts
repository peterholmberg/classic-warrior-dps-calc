import { Attributes, CharacterState, Class, Race } from '../types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemSlot, Weapon } from '../types/items';
import { getRaceStats } from '../data/race';
import { getBonusStatsFromItems, recalculateStats } from '../utils/calculators';

const initialCharacterState: CharacterState = {
  race: Race.Human,
  class: Class.Warrior,
  items: {
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
  },
  stats: {
    ...getRaceStats(Race.Human)?.stats,
  },
  bonusStats: {} as Attributes,
  damage: {
    mainHandDamage: [56, 57],
    meleeDps: [27.75, 0],
    rangedDamage: [0, 0],
  },
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
  setRace: (state: S, action: PayloadAction<string>) => S;
}

export const characterSlice = createSlice<
  CharacterState,
  CharacterReducer<CharacterState>
>({
  name: 'character',
  initialState: initialCharacterState,
  reducers: {
    setItemAction(state: any, action: any) {
      const newState = {
        ...state,
        items: { ...state.items, [action.payload.itemSlot]: action.payload },
      };
      const bonusStats = getBonusStatsFromItems(newState.items);

      return {
        ...newState,
        stats: recalculateStats(newState),
        bonusStats: bonusStats,
      };
    },
    setMainHandWeaponAction(state: CharacterState, action: any) {
      const newState =
        action.payload.itemSlot === ItemSlot.TwoHand
          ? {
              ...state,
              items: {
                ...state.items,
                mainHand: action.payload,
                offHand: {} as Weapon,
              },
            }
          : {
              ...state,
              items: { ...state.items, mainHand: action.payload },
            };

      const bonusStats = getBonusStatsFromItems(newState.items);

      return { ...newState, bonusStats, stats: recalculateStats(newState) };
    },
    setOffHandWeaponAction(state: CharacterState, action: any) {
      const newState = {
        ...state,
        items: { ...state.items, offHand: action.payload },
      };
      const bonusStats = getBonusStatsFromItems(state.items);

      return { ...newState, bonusStats, stats: recalculateStats(newState) };
    },
    setRangedWeaponAction(state: CharacterState, action: any) {
      const newState = {
        ...state,
        items: { ...state.items, ranged: action.payload },
      };
      const bonusStats = getBonusStatsFromItems(newState.items);
      return { ...newState, bonusStats, stats: recalculateStats(newState) };
    },
    setMiscItemAction(state: CharacterState, action: any) {
      const newState = {
        ...state,
        items: { ...state.items, [action.payload.slot]: action.payload.item },
      };
      const bonusStats = getBonusStatsFromItems(newState.items);

      return { ...newState, bonusStats, stats: recalculateStats(newState) };
    },
    setRace(state: CharacterState, action: any) {
      const newState = { ...state, race: action.payload };
      return { ...newState, stats: recalculateStats(newState) };
    },
  },
});

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

import {
  CharacterState,
  CharacterStats,
  Class,
  Race,
} from '../types/character';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemSlot, Weapon } from '../types/items';
import { getRaceStats } from '../data/race';

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
    hit: 0,
    crit: 0,
    attackPower: 100,
    mainHandDamage: [100, 200],
    rangedDamage: [50, 100],
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
      return { ...state, [action.payload.itemSlot]: action.payload };
    },
    setMainHandWeaponAction(state: CharacterState, action: any) {
      const newState =
        action.payload.itemSlot === ItemSlot.TwoHand
          ? { ...state, mainHand: action.payload, offHand: {} as Weapon }
          : {
              ...state,
              mainHand: action.payload,
            };

      return { ...state, stats: recalculateStats(newState) };
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
    setRace(state: CharacterState, action: any) {
      const newState = { ...state, race: action.payload };
      return { ...newState, stats: recalculateStats(newState) };
    },
  },
});

const recalculateStats = (state: CharacterState): CharacterStats => {
  let strength = 0,
    agility = 0,
    stamina = 0,
    intellect = 0,
    spirit = 0,
    attackPower = 0,
    crit = 0,
    hit = 0;

  let mainHandDamage = [0, 0],
    offHandDamage = [0, 0],
    rangedDamage = [0, 0];

  Object.values(state.items).forEach(i => {
    strength += i.strength;
    agility += i.agility;
    stamina += i.stamina;
    intellect += i.intellect;
    spirit += i.spirit;
  });

  strength += state.stats.strength;
  agility += state.stats.agility;
  stamina += state.stats.stamina;
  intellect += state.stats.intellect;
  spirit += state.stats.spirit;
  attackPower += state.stats.attackPower;
  crit += state.stats.crit;
  hit += state.stats.hit;
  mainHandDamage = state.stats.mainHandDamage;
  offHandDamage = state.stats.offHandDamage;
  rangedDamage = state.stats.rangedDamage;

  return {
    strength,
    agility,
    stamina,
    intellect,
    spirit,
    attackPower,
    crit,
    hit,
    mainHandDamage,
    offHandDamage,
    rangedDamage,
  };
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

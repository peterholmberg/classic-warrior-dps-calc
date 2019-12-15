import {
  axes,
  backs,
  bows,
  chests,
  crossbows,
  daggers,
  feet,
  fists,
  guns,
  hands,
  heads,
  legs,
  maces,
  necks,
  polearms,
  rings,
  shoulders,
  swords,
  trinkets,
  twoHandAxes,
  twoHandMaces,
  twoHandSwords,
  waists,
  wrists,
} from '../data';
import { Item, ItemsState } from '../types/items';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialItemsState: ItemsState = {
  heads: heads().map(h => ({ label: h.name, value: h.name })),
  necks: necks().map(h => ({ label: h.name, value: h.name })),
  shoulders: shoulders().map(h => ({ label: h.name, value: h.name })),
  backs: backs().map(h => ({ label: h.name, value: h.name })),
  chests: chests().map(h => ({ label: h.name, value: h.name })),
  wrists: wrists().map(h => ({ label: h.name, value: h.name })),
  hands: hands().map(h => ({ label: h.name, value: h.name })),
  waists: waists().map(h => ({ label: h.name, value: h.name })),
  legs: legs().map(h => ({ label: h.name, value: h.name })),
  feet: feet().map(h => ({ label: h.name, value: h.name })),
  rings: rings().map(h => ({ label: h.name, value: h.name })),
  trinkets: trinkets().map(h => ({ label: h.name, value: h.name })),
  axes: axes().map(h => ({ label: h.name, value: h.name })),
  bows: bows().map(h => ({ label: h.name, value: h.name })),
  crossbows: crossbows().map(h => ({ label: h.name, value: h.name })),
  daggers: daggers().map(h => ({ label: h.name, value: h.name })),
  fists: fists().map(h => ({ label: h.name, value: h.name })),
  guns: guns().map(h => ({ label: h.name, value: h.name })),
  maces: maces().map(h => ({ label: h.name, value: h.name })),
  polearms: polearms().map(h => ({ label: h.name, value: h.name })),
  swords: swords().map(h => ({ label: h.name, value: h.name })),
  twoHandAxes: twoHandAxes().map(h => ({ label: h.name, value: h.name })),
  twoHandMaces: twoHandMaces().map(h => ({ label: h.name, value: h.name })),
  twoHandSwords: twoHandSwords().map(h => ({ label: h.name, value: h.name })),
};

interface ItemsReducer<S> extends Record<string, any> {
  addItemsAction: (state: S, action: PayloadAction<Item>) => S;
}

export const itemsSlice = createSlice<ItemsState, ItemsReducer<ItemsState>>({
  name: 'items',
  initialState: initialItemsState,
  reducers: {
    addItemsAction(state: any) {
      console.log('this is just a dummy action');
      return state;
    },
  },
});

export default {
  items: itemsSlice.reducer,
};

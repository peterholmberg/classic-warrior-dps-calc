import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const initialItemsState: ItemsState = {
  headItems: heads(),
  neckItems: necks(),
  shoulderItems: shoulders(),
  backItems: backs(),
  chestItems: chests(),
  wristItems: wrists(),
  handItems: hands(),
  waistItems: waists(),
  legItems: legs(),
  feetItems: feet(),
  ringItems: rings(),
  trinketItems: trinkets(),
  axeItems: axes(),
  bowItems: bows(),
  crossbowItems: crossbows(),
  daggerItems: daggers(),
  fistItems: fists(),
  gunItems: guns(),
  maceItems: maces(),
  polearmItems: polearms(),
  swordItems: swords(),
  twoHandAxeItems: twoHandAxes(),
  twoHandMaceItems: twoHandMaces(),
  twoHandSwordItems: twoHandSwords(),
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

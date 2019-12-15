import { Item } from './items';

export enum Race {
  Human = 'human',
  Dwarf = 'dwarf',
  Gnome = 'gnome',
  NightElf = 'nightelf',
  Orc = 'orc',
  Troll = 'troll',
  Tauren = 'tauren',
  Undead = 'undead',
}

export enum Class {
  Mage = 'mage',
  Hunter = 'hunter',
  Paladin = 'paladin',
  Priest = 'priest',
  Shaman = 'shaman',
  Warlock = 'warlock',
  Warrior = 'warrior',
  Rogue = 'rogue',
}

export interface CharacterState  {
  race: Race;
  class: Class;
  head?: Item;
  neck?: Item;
  back?: Item;
  chest?: Item;
  wrist?: Item;
  hands?: Item;
  legs?: Item;
  feet?: Item;
  ring1?: Item;
  ring2?: Item;
  trinket1?: Item;
  trinket2?: Item;
  mainHand?: Item;
  offHand?: Item;
  ranged?: Item;
}

import { Item, WeaponType } from './items';

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

export interface RaceInfo {
  race: Race;
  stats: BasicCharacterStats;
  perks: RacePerk[];
}

export interface RacePerk {
  value: number;
  skill: WeaponType;
}

export interface BasicCharacterStats {
  strength: number;
  agility: number;
  stamina: number;
  intellect: number;
  spirit: number;
}

export interface CharacterStats extends BasicCharacterStats {
  crit: number;
  hit: number;
  attackPower: number;
  mainHandDamage: [number, number];
  offHandDamage?: [number, number];
  rangedDamage: [number, number];
}

export interface CharacterState {
  race: Race;
  class: Class;
  head: Item;
  neck: Item;
  back: Item;
  shoulders: Item;
  chest: Item;
  wrists: Item;
  hands: Item;
  waist: Item;
  legs: Item;
  feet: Item;
  ring1: Item;
  ring2: Item;
  trinket1: Item;
  trinket2: Item;
  mainHand: Item;
  offHand: Item;
  ranged: Item;
  stats: CharacterStats;
}

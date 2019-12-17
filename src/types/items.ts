import { Phase } from './game';

export enum ItemQuality {
  Legendary = 'legendary',
  Epic = 'epic',
  Rare = 'rare',
  Uncommon = 'uncommon',
}

export enum ItemSlot {
  Head = 'head',
  Neck = 'neck',
  Shoulder = 'shoulder',
  Back = 'back',
  Chest = 'chest',
  Wrist = 'wrist',
  Hands = 'hands',
  Waist = 'waist',
  Legs = 'legs',
  Feet = 'feet',
  Ring = 'ring',
  Trinket = 'trinket',
  MainHand = 'mainhand',
  OneHand = 'onehand',
  OffHand = 'offhand',
  TwoHand = 'twohand',
  Ranged = 'ranged',
}

export enum WeaponType {
  Axe = 'axe',
  Bows = 'bows',
  Daggers = 'daggers',
  Fist = 'fist',
  Crossbow = 'crossbow',
  Mace = 'mace',
  Guns = 'guns',
  Sword = 'sword',
  Polearm = 'polearm',
  TwoHandAxe = 'twohandaxe',
  TwoHandMace = 'twohandmace',
  TwoHandSword = 'twohandsword',
}

export enum ArmorType {
  Cloth = 'cloth',
  Leather = 'leather',
  Mail = 'mail',
  Plate = 'plate',
}

interface Resistance {
  arcane?: number;
  fire?: number;
  frost?: number;
  nature?: number;
  shadow?: number;
}

interface WeaponSkill {
  value: number;
  weaponType: WeaponType[];
}

export interface Item {
  name: string;
  itemSlot: ItemSlot;
  armorType?: ItemQuality;
  wowHeadId?: number;
  armor?: number;
  strength?: number;
  agility?: number;
  stamina?: number;
  intellect?: number;
  spirit?: number;
  resistance?: Resistance;
  crit?: number;
  hit?: number;
  defense?: number;
  dodge?: number;
  parry?: number;
  attackPower?: number;
  weaponSkill?: WeaponSkill;
  proc?: number;
  phase?: Phase;
  itemQuality: ItemQuality;
}

export interface Weapon extends Item {
  weaponType: WeaponType;
  dps: number;
  maxHit: number;
  minHit: number;
  speed: number;
}

export interface SelectItem {
  label: string;
  value: string | number;
}

export interface ItemsState {
  heads: SelectItem[];
  necks: SelectItem[];
  shoulders: SelectItem[];
  backs: SelectItem[];
  chests: SelectItem[];
  wrists: SelectItem[];
  hands: SelectItem[];
  waists: SelectItem[];
  legs: SelectItem[];
  feet: SelectItem[];
  rings: SelectItem[];
  trinkets: SelectItem[];
  axes: SelectItem[];
  bows: SelectItem[];
  crossbows: SelectItem[];
  daggers: SelectItem[];
  fists: SelectItem[];
  guns: SelectItem[];
  maces: SelectItem[];
  polearms: SelectItem[];
  swords: SelectItem[];
  twoHandAxes: SelectItem[];
  twoHandMaces: SelectItem[];
  twoHandSwords: SelectItem[];
}

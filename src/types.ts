type Phase = 1 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6;

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
  PoleArm = 'polearm',
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
  armorType?: ArmorType;
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
}

export interface Weapon extends Item {
  weaponType: WeaponType;
  dps: number;
  maxHit: number;
  minHit: number;
  speed: number;
}

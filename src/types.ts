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
  OneHand = 'offhand',
  TwoHand = 'twohand',
}

export enum WeaponType {
  Axe = 'axe',
  Bows = 'bows',
  Daggers = 'daggers',
  Crossbow = 'crossbow',
  Mace = 'mace',
  Guns = 'guns',
  Sword = 'sword',
  PoleArm = 'polearm',
}

interface Resistance {
  Arcane: number;
  Fire: number;
  Frost: number;
  Nature: number;
  Shadow: number;
}

interface WeaponSkill {
  value: number;
  WeaponType: WeaponType;
}

export interface Item {
  Name: string;
  ItemSlot: ItemSlot;
  Armor: number;
  Strength?: number;
  Agility?: number;
  Stamina?: number;
  Intellect?: number;
  Spirit?: number;
  Resistance?: Resistance;
  Crit?: number;
  Hit?: number;
  Defense?: number;
  Dodge?: number;
  Parry?: number;
  AttackPower?: number;
  WeaponSkill?: WeaponSkill;
}

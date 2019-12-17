import { Item, ItemQuality, ItemSlot, WeaponType } from '../../../types/items';

export const waists = (): Item[] => {
  return [
    {
      name: 'Arathi Plate Girdle',
      itemSlot: ItemSlot.Waist,
      crit: 1,
      strength: 17,
      stamina: 10,
      armor: 369,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Belt of Heroism',
      itemSlot: ItemSlot.Waist,
      strength: 15,
      stamina: 12,
      agility: 9,
      defense: 7,
      armor: 380,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Belt of Might',
      itemSlot: ItemSlot.Waist,
      strength: 21,
      stamina: 15,
      dodge: 1,
      defense: 5,
      armor: 412,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Belt of Never-ending Agony',
      itemSlot: ItemSlot.Waist,
      crit: 1,
      hit: 1,
      stamina: 20,
      attackPower: 64,
      armor: 142,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Belt of Preserved Heads',
      itemSlot: ItemSlot.Waist,
      hit: 1,
      strength: 14,
      stamina: 11,
      agility: 15,
      armor: 108,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Belt of Shrunken Heads',
      itemSlot: ItemSlot.Waist,
      strength: 23,
      stamina: 11,
      agility: 7,
      armor: 408,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Belt of the Sand Reaver',
      itemSlot: ItemSlot.Waist,
      strength: 17,
      stamina: 18,
      defense: 5,
      armor: 494,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Belt of Valor',
      itemSlot: ItemSlot.Waist,
      strength: 14,
      stamina: 8,
      agility: 7,
      armor: 341,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Brigam Girdle',
      itemSlot: ItemSlot.Waist,
      hit: 1,
      strength: 15,
      stamina: 16,
      armor: 369,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Cloudrunner Girdle',
      itemSlot: ItemSlot.Waist,
      strength: 14,
      agility: 15,
      armor: 185,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Girdle of the Mentor',
      itemSlot: ItemSlot.Waist,
      crit: 1,
      hit: 1,
      strength: 21,
      stamina: 21,
      agility: 20,
      armor: 536,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Mugger's Belt",
      itemSlot: ItemSlot.Waist,
      crit: 1,
      stamina: 16,
      armor: 98,
      weaponSkill: {
        value: 5,
        weaponType: [WeaponType.Daggers],
      },
      itemQuality: ItemQuality.Rare,
    },
    {
      name: "Omokk's Girth Restrainer",
      itemSlot: ItemSlot.Waist,
      crit: 1,
      strength: 15,
      stamina: 9,
      armor: 353,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Onslaught Girdle',
      itemSlot: ItemSlot.Waist,
      crit: 1,
      hit: 1,
      strength: 31,
      stamina: 11,
      armor: 494,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Ossirian's Binding",
      itemSlot: ItemSlot.Waist,
      crit: 1,
      hit: 1,
      stamina: 19,
      agility: 20,
      armor: 258,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Royal Qiraji Belt',
      itemSlot: ItemSlot.Waist,
      strength: 13,
      stamina: 22,
      agility: 13,
      parry: 1,
      defense: 8,
      armor: 512,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Zandalar Vindicator's Belt",
      itemSlot: ItemSlot.Waist,
      crit: 1,
      strength: 25,
      stamina: 10,
      armor: 391,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Therazane's Link",
      itemSlot: ItemSlot.Waist,
      crit: 1,
      stamina: 22,
      attackPower: 44,
      armor: 295,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Triad Girdle',
      itemSlot: ItemSlot.Waist,
      strength: 26,
      stamina: 17,
      agility: 19,
      armor: 476,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Waistband of Wrath',
      itemSlot: ItemSlot.Waist,
      strength: 20,
      stamina: 20,
      defense: 7,
      armor: 482,
      itemQuality: ItemQuality.Epic,
    },
  ];
};

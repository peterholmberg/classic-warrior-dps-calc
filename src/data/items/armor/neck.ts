import { Item, ItemQuality, ItemSlot } from '../../../types/items';

export const necks = (): Item[] => {
  return [
    {
      name: 'Amulet of the Darkmoon',
      itemSlot: ItemSlot.Neck,
      strength: 10,
      stamina: 10,
      agility: 19,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Barbed Choker',
      itemSlot: ItemSlot.Neck,
      crit: 1,
      stamina: 10,
      attackPower: 44,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Beads of Ogre Might',
      itemSlot: ItemSlot.Neck,
      hit: 1,
      stamina: 7,
      attackPower: 24,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Blazefury Medallion',
      itemSlot: ItemSlot.Neck,
      stamina: 13,
      agility: 14,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Choker of the Shifting Sands',
      itemSlot: ItemSlot.Neck,
      stamina: 16,
      attackPower: 42,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Eskhandar's Collar",
      itemSlot: ItemSlot.Neck,
      crit: 1,
      stamina: 17,
      dodge: 1,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Fury of the Forgotten Swarm',
      itemSlot: ItemSlot.Neck,
      crit: 1,
      hit: 1,
      strength: 8,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Imperial Jewel',
      itemSlot: ItemSlot.Neck,
      stamina: 7,
      attackPower: 32,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Mark of Fordring',
      itemSlot: ItemSlot.Neck,
      crit: 1,
      attackPower: 26,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Onyxia Tooth Pendant',
      itemSlot: ItemSlot.Neck,
      crit: 1,
      hit: 1,
      stamina: 9,
      agility: 12,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Pendant of Celerity',
      itemSlot: ItemSlot.Neck,
      hit: 1,
      agility: 15,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: "Prestor's Talisman of Connivery",
      itemSlot: ItemSlot.Neck,
      hit: 1,
      agility: 30,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Sadist's Collar",
      itemSlot: ItemSlot.Neck,
      crit: 1,
      stamina: 24,
      attackPower: 20,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Stormrage's Talisman of Seething",
      itemSlot: ItemSlot.Neck,
      crit: 2,
      stamina: 12,
      attackPower: 26,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Zealous Shadowshard Pendant',
      itemSlot: ItemSlot.Neck,
      attackPower: 20,
      itemQuality: ItemQuality.Uncommon,
    },
    {
      name: 'The Eye of Hakkar',
      itemSlot: ItemSlot.Neck,
      crit: 1,
      attackPower: 40,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Will of the Martyr',
      itemSlot: ItemSlot.Neck,
      stamina: 10,
      attackPower: 30,
      itemQuality: ItemQuality.Rare,
    },
  ];
};

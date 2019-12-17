// TODD: calculate proc dps
import { Item, ItemQuality, ItemSlot } from '../../../types/items';

export const trinkets = (): Item[] => {
  return [
    {
      name: 'Badge of the Swarmguard',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: "Blackhand's Breadth",
      crit: 2,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Counterattack Lodestone',
      attackPower: 22,
      parry: 1,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Darkmoon Card: Maelstrom',
      proc: 8.23,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Diamond Flask',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Drake Fang Talisman',
      hit: 2,
      attackPower: 56,
      dodge: 1,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Earthstrike',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Hand of Justice',
      attackPower: 20,
      proc: 0,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Heart of Wyrmthalak',
      proc: 4.94,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: 'Jom Gabbar',
      attackPower: 119.1666667,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Kiss of the Spider',
      crit: 1,
      hit: 1,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
    {
      name: 'Rune of the Guard Captain',
      hit: 1,
      attackPower: 20,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Uncommon,
    },
    {
      name: 'Seal of the Dawn',
      attackPower: 81,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Rare,
    },
    {
      name: "Slayer's Crest",
      attackPower: 150.6666667,
      itemSlot: ItemSlot.Trinket,
      itemQuality: ItemQuality.Epic,
    },
  ];
};

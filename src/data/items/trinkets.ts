// TODD: calculate proc dps
import { Item, ItemSlot } from '../../types/items';

export const trinkets = (): Item[] => {
  return [
    {
      name: 'Badge of the Swarmguard',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: "Blackhand's Breadth",
      crit: 2,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Counterattack Lodestone',
      attackPower: 22,
      parry: 1,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Darkmoon Card: Maelstrom',
      proc: 8.23,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Diamond Flask',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Drake Fang Talisman',
      hit: 2,
      attackPower: 56,
      dodge: 1,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Earthstrike',
      proc: 0,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Hand of Justice',
      attackPower: 20,
      proc: 0,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Heart of Wyrmthalak',
      proc: 4.94,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Jom Gabbar',
      attackPower: 119.1666667,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Kiss of the Spider',
      crit: 1,
      hit: 1,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Rune of the Guard Captain',
      hit: 1,
      attackPower: 20,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: 'Seal of the Dawn',
      attackPower: 81,
      itemSlot: ItemSlot.Trinket,
    },
    {
      name: "Slayer's Crest",
      attackPower: 150.6666667,
      itemSlot: ItemSlot.Trinket,
    },
  ];
};

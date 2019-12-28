import { Race, RaceInfo } from '../types/character';
import { WeaponType } from '../types/items';

export const getRaces = () => {
  return Object.keys(Race).map(k => {
    return {
      label: k,
      value: k.toLowerCase(),
    };
  });
};

export const getRaceStats = (race: Race): RaceInfo => {
  return raceStats.find(rp => rp.race === race) || ({} as RaceInfo);
};

const raceStats: RaceInfo[] = [
  {
    race: Race.Human,
    stats: {
      strength: 120,
      agility: 80,
      stamina: 110,
      intellect: 30,
      spirit: 47,
    },
    perks: [
      { value: 5, skill: WeaponType.Sword },
      { value: 5, skill: WeaponType.Mace },
      { value: 5, skill: WeaponType.TwoHandMace },
      { value: 5, skill: WeaponType.TwoHandSword },
    ],
  },
  {
    race: Race.Dwarf,
    stats: {
      strength: 122,
      agility: 76,
      stamina: 113,
      intellect: 29,
      spirit: 44,
    },
    perks: [{ value: 5, skill: WeaponType.Guns }],
  },
  {
    race: Race.Gnome,
    stats: {
      strength: 115,
      agility: 83,
      stamina: 109,
      intellect: 35,
      spirit: 45,
    },
    perks: [],
  },
  {
    race: Race.NightElf,
    stats: {
      strength: 117,
      agility: 85,
      stamina: 109,
      intellect: 30,
      spirit: 45,
    },
    perks: [],
  },
  {
    race: Race.Orc,
    stats: {
      strength: 123,
      agility: 77,
      stamina: 112,
      intellect: 27,
      spirit: 48,
    },
    perks: [
      { value: 5, skill: WeaponType.Axe },
      { value: 5, skill: WeaponType.TwoHandAxe },
    ],
  },
  {
    race: Race.Tauren,
    stats: {
      strength: 125,
      agility: 75,
      stamina: 112,
      intellect: 25,
      spirit: 47,
    },
    perks: [],
  },
  {
    race: Race.Troll,
    stats: {
      strength: 121,
      agility: 82,
      stamina: 111,
      intellect: 26,
      spirit: 46,
    },
    perks: [{ value: 5, skill: WeaponType.Bows }],
  },
  {
    race: Race.Undead,
    stats: {
      strength: 119,
      agility: 78,
      stamina: 111,
      intellect: 28,
      spirit: 50,
    },
    perks: [],
  },
];

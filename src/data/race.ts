import { Race, RaceInfo } from '../types/character';
import { WeaponType } from '../types/items';
import { getBaseStats } from './character/baseStats';

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
      ...getBaseStats(Race.Human),
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
      ...getBaseStats(Race.Dwarf),
    },
    perks: [{ value: 5, skill: WeaponType.Guns }],
  },
  {
    race: Race.Gnome,
    stats: {
      ...getBaseStats(Race.Gnome),
    },
    perks: [],
  },
  {
    race: Race.NightElf,
    stats: {
      ...getBaseStats(Race.NightElf),
    },
    perks: [],
  },
  {
    race: Race.Orc,
    stats: {
      ...getBaseStats(Race.Orc),
    },
    perks: [
      { value: 5, skill: WeaponType.Axe },
      { value: 5, skill: WeaponType.TwoHandAxe },
    ],
  },
  {
    race: Race.Tauren,
    stats: {
      ...getBaseStats(Race.Tauren),
    },
    perks: [],
  },
  {
    race: Race.Troll,
    stats: {
      ...getBaseStats(Race.Troll),
    },
    perks: [{ value: 5, skill: WeaponType.Bows }],
  },
  {
    race: Race.Undead,
    stats: {
      ...getBaseStats(Race.Undead),
    },
    perks: [],
  },
];

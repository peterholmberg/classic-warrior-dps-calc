import { WeaponType } from '../types/items';
import { Race } from '../types/character';

export const getPerks = (race: string) => {
  return racePerks.find(rp => rp.race === race);
};

const racePerks = [
  {
    race: Race.Human,
    perks: [
      { value: 5, skill: WeaponType.Sword },
      { value: 5, skill: WeaponType.Mace },
      { value: 5, skill: WeaponType.TwoHandMace },
      { value: 5, skill: WeaponType.TwoHandSword },
    ],
  },
  {
    race: Race.Dwarf,
    perks: [{ value: 5, skill: WeaponType.Guns }],
  },
  {
    race: Race.Gnome,
    perks: [],
  },
  {
    race: Race.NightElf,
    perks: [],
  },
  {
    race: Race.Orc,
    perks: [
      { value: 5, skill: WeaponType.Axe },
      { value: 5, skill: WeaponType.TwoHandAxe },
    ],
  },
  {
    race: Race.Tauren,
    perks: [],
  },
  {
    race: Race.Troll,
    perks: [{ value: 5, skill: WeaponType.Bows }],
  },
  {
    race: Race.Undead,
    perks: [],
  },
];

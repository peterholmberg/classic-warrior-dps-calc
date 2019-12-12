import { WeaponType } from '../types/items';
import { Race } from '../types/character';

export const getPerks = (race: string) => {
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
      race: Race.Orc,
      perks: [
        { value: 5, skill: WeaponType.Axe },
        { value: 5, skill: WeaponType.TwoHandAxe },
      ],
    },
  ];

  return racePerks.find(rp => rp.race === race);
};

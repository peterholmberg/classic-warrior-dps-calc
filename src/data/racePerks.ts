import { WeaponType } from '../types/types';

export const perks = () => {
  return {
    human: {
      weaponSkill: {
        value: 5,
        weaponType: [WeaponType.Sword, WeaponType.Mace],
      },
    },
  };
};

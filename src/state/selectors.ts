import { ItemSlot, ItemsState, Weapon, WeaponType } from '../types/items';

export const getMainHandWeapons = (state: ItemsState) => {
  const {
    axeItems,
    daggerItems,
    fistItems,
    maceItems,
    polearmItems,
    swordItems,
    twoHandAxeItems,
    twoHandMaceItems,
    twoHandSwordItems,
  } = state;

  const filteredAxes = filterMainHandWeapons(axeItems);
  const filteredDaggers = filterMainHandWeapons(daggerItems);
  const filteredFists = filterMainHandWeapons(fistItems);
  const filteredMaces = filterMainHandWeapons(maceItems);
  const filteredSwords = filterMainHandWeapons(swordItems);

  return [
    { type: WeaponType.Axe, items: filteredAxes },
    { type: WeaponType.TwoHandAxe, items: twoHandAxeItems },
    { type: WeaponType.Daggers, items: filteredDaggers },
    { type: WeaponType.Fist, items: filteredFists },
    { type: WeaponType.Mace, items: filteredMaces },
    { type: WeaponType.TwoHandMace, items: twoHandMaceItems },
    { type: WeaponType.Sword, items: filteredSwords },
    { type: WeaponType.TwoHandSword, items: twoHandSwordItems },
    { type: WeaponType.Polearm, items: polearmItems },
  ];
};

export const getOffHandWeapons = (state: ItemsState) => {
  const { axeItems, daggerItems, fistItems, maceItems, swordItems } = state;

  const filteredAxes = filterOffHandWeapons(axeItems);
  const filteredDaggers = filterOffHandWeapons(daggerItems);
  const filteredFists = filterOffHandWeapons(fistItems);
  const filteredMaces = filterOffHandWeapons(maceItems);
  const filteredSwords = filterOffHandWeapons(swordItems);

  return [
    { type: WeaponType.Axe, items: filteredAxes },
    { type: WeaponType.Daggers, items: filteredDaggers },
    { type: WeaponType.Fist, items: filteredFists },
    { type: WeaponType.Mace, items: filteredMaces },
    { type: WeaponType.Sword, items: filteredSwords },
  ];
};

export const getRangedWeapons = (state: ItemsState) => {
  const { bowItems, crossbowItems, gunItems } = state;

  return [
    {
      type: WeaponType.Bows,
      items: bowItems,
    },
    {
      type: WeaponType.Crossbow,
      items: crossbowItems,
    },
    {
      type: WeaponType.Guns,
      items: gunItems,
    },
  ];
};

const filterOffHandWeapons = (weapons: Weapon[]) => {
  return weapons.filter(
    weapon =>
      weapon.itemSlot === ItemSlot.OneHand ||
      weapon.itemSlot === ItemSlot.OffHand
  );
};

const filterMainHandWeapons = (weapons: Weapon[]) => {
  return weapons.filter(
    weapon =>
      weapon.itemSlot === ItemSlot.MainHand ||
      weapon.itemSlot === ItemSlot.OneHand
  );
};

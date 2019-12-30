import { CharacterState, Attributes, EquippedItems } from '../types/character';

/*
  Character level / 3 - 20
  https://vanilla-wow.fandom.com/wiki/Attack_power
*/
const BASE_ATTACK_POWER = 160;

export const recalculateStats = (state: CharacterState): Attributes => {
  //ToDO: TEST
  let strength = 0,
    agility = 0,
    stamina = 0,
    intellect = 0,
    spirit = 0,
    attackPower = 0,
    crit = 0,
    hit = 0;

  let mainHandDamage = [0, 0],
    offHandDamage = [0, 0],
    rangedDamage = [0, 0];

  Object.values(state.items).forEach(i => {
    strength += i.strength;
    agility += i.agility;
    stamina += i.stamina;
    intellect += i.intellect;
    spirit += i.spirit;
  });

  strength += state.stats.strength;
  agility += state.stats.agility;
  stamina += state.stats.stamina;
  intellect += state.stats.intellect;
  spirit += state.stats.spirit;
  attackPower += state.stats.attackPower;
  crit += state.stats.crit;
  hit += state.stats.hit;
  mainHandDamage = state.stats.mainHandDamage;
  offHandDamage = state.stats.offHandDamage;
  rangedDamage = state.stats.rangedDamage;

  return {
    strength,
    agility,
    stamina,
    intellect,
    spirit,
    attackPower,
    crit,
    hit,
    mainHandDamage,
    offHandDamage,
    rangedDamage,
  };
};

export const getBonusStatsFromItems = (items: EquippedItems): Attributes => {
  let strength = 0,
    agility = 0,
    stamina = 0,
    intellect = 0,
    spirit = 0,
    attackPower = 0,
    crit = 0,
    hit = 0,
    defense = 0;

  Object.values(items).forEach(i => {
    strength += i.strength || 0;
    agility += i.agility || 0;
    stamina += i.stamina || 0;
    intellect += i.intellect || 0;
    spirit += i.spirit || 0;
    attackPower += i.attackPower || 0;
    crit += i.crit || 0;
    hit += i.hit || 0;
    defense += i.defense || 0;
  });

  return {
    strength,
    agility,
    stamina,
    intellect,
    spirit,
    attackPower,
    crit,
    hit,
    defense,
  };
};

export const getAttackPower = (character: CharacterState): number => {
  return (
    (character.stats.strength + character.bonusStats.strength) * 2 +
    character.bonusStats.attackPower +
    BASE_ATTACK_POWER
  );
};

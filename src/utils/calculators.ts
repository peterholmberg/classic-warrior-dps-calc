import { CharacterState, Attributes, EquippedItems } from '../types/character';
import { getBaseStats } from '../data/character/baseStats';

export const recalculateStats = (state: CharacterState): Attributes => {
  //ToDO: TEST
  let strength: number,
    agility: number,
    stamina: number,
    intellect: number,
    spirit: number,
    attackPower: number,
    crit: number,
    hit: number,
    defense: number;

  const bonusStats = getBonusStatsFromItems(state.items);
  const baseStats = getBaseStats(state.race);

  strength = baseStats.strength + bonusStats.strength;
  agility = baseStats.agility + bonusStats.agility;
  stamina = baseStats.stamina + bonusStats.stamina;
  intellect = baseStats.intellect + bonusStats.intellect;
  spirit = baseStats.spirit + bonusStats.spirit;
  crit = getCritChance(agility, bonusStats.agility, bonusStats.crit);
  hit = bonusStats.hit;
  attackPower = getAttackPower(baseStats, bonusStats);
  defense = baseStats.defense + bonusStats.defense;

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

export const getAttackPower = (
  stats: Attributes,
  bonusStats = {} as Attributes
): number => {
  return (
    (stats.strength + (bonusStats.strength || 0)) * 2 +
    (bonusStats.attackPower || 0) +
    stats.attackPower
  );
};

export const getCritChance = (
  agility: number,
  bonusAgility = 0,
  bonusCrit = 0
): number => {
  // 5% crit from Cruelty (warrior, should not be a constant here)
  const critFromTalents = 5;

  return (agility + bonusAgility) / 20 + bonusCrit + critFromTalents;
};

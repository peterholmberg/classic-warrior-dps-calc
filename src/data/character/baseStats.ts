import { getCritChance } from '../../utils/calculators';
import { BasicAttributes, Race } from '../../types/character';

/*
  Character level / 3 - 20
  https://vanilla-wow.fandom.com/wiki/Attack_power
*/
const BASE_ATTACK_POWER = 160;

export const getBaseStats = (race: Race) => {
  const stats = baseStats[race];
  const crit = getCritChance(stats.agility, 0);

  return {
    ...stats,
    crit,
    attackPower: BASE_ATTACK_POWER,
    hit: 0,
  };
};

const baseStats: { [key in Race]: BasicAttributes } = {
  human: {
    strength: 120,
    agility: 80,
    stamina: 110,
    intellect: 30,
    spirit: 47,
    defense: 300,
  },
  gnome: {
    strength: 115,
    agility: 83,
    stamina: 109,
    intellect: 35,
    spirit: 45,
    defense: 300,
  },
  dwarf: {
    strength: 122,
    agility: 76,
    stamina: 113,
    intellect: 29,
    spirit: 44,
    defense: 300,
  },
  nightelf: {
    strength: 117,
    agility: 85,
    stamina: 109,
    intellect: 30,
    spirit: 45,
    defense: 300,
  },
  orc: {
    strength: 123,
    agility: 77,
    stamina: 112,
    intellect: 27,
    spirit: 48,
    defense: 300,
  },
  tauren: {
    strength: 125,
    agility: 75,
    stamina: 112,
    intellect: 25,
    spirit: 47,
    defense: 300,
  },
  troll: {
    strength: 121,
    agility: 82,
    stamina: 111,
    intellect: 26,
    spirit: 46,
    defense: 300,
  },
  undead: {
    strength: 119,
    agility: 78,
    stamina: 111,
    intellect: 28,
    spirit: 50,
    defense: 300,
  },
};

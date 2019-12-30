import { getAttackPower, getBonusStatsFromItems } from './calculators';
import { CharacterState, Class, Race } from '../types/character';
import { Item, Weapon } from '../types/items';
import { getRaceStats } from '../data/race';
import { heads } from '../data';

const getInitialCharacter = (): CharacterState => ({
  class: Class.Warrior,
  race: Race.Human,
  items: {
    head: {} as Item,
    neck: {} as Item,
    back: {} as Item,
    shoulders: {} as Item,
    chest: {} as Item,
    wrists: {} as Item,
    hands: {} as Item,
    waist: {} as Item,
    legs: {} as Item,
    feet: {} as Item,
    ring1: {} as Item,
    ring2: {} as Item,
    trinket1: {} as Item,
    trinket2: {} as Item,
    mainHand: {} as Weapon,
    offHand: {} as Weapon,
    ranged: {} as Weapon,
  },
  stats: {
    ...getRaceStats(Race.Human)?.stats,
    hit: 0,
    crit: 1.84,
    attackPower: 400,
  },
  bonusStats: {
    strength: 0,
    stamina: 0,
    agility: 0,
    defense: 0,
    intellect: 0,
    spirit: 0,
    crit: 0,
    hit: 0,
    attackPower: 0,
  },
  damage: {
    mainHandDamage: [100, 200],
    meleeDps: [50, 0],
    rangedDamage: [50, 100],
  },
});

describe('Attack power', () => {
  it('it should be 400 for level 60 warrior', () => {
    expect(getAttackPower(getInitialCharacter())).toEqual(400);
  });

  it('should add bonus stats from items', () => {
    const character = getInitialCharacter();

    // Add Conquerors Crown (29 str)
    character.items.head = heads()[1];
    character.bonusStats.strength = 29;

    expect(getAttackPower(character)).toEqual(458);
  });
});

describe('Stats from items', () => {
  it('should be all 0 if no items', () => {
    expect(getBonusStatsFromItems(getInitialCharacter().items)).toEqual({
      strength: 0,
      stamina: 0,
      agility: 0,
      defense: 0,
      intellect: 0,
      spirit: 0,
      crit: 0,
      hit: 0,
      attackPower: 0,
    });
  });
});

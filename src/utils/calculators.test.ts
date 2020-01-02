import {getAttackPower, getBonusStatsFromItems, getCritChance} from './calculators';
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
    expect(getAttackPower(getInitialCharacter().stats)).toEqual(400);
  });

  it('should add bonus stats from items', () => {
    const character = getInitialCharacter();

    // Add Conquerors Crown (29 str)
    character.items.head = heads()[1];

    expect(
      getAttackPower(character.stats, {
        strength: 29,
        stamina: 0,
        agility: 0,
        defense: 0,
        intellect: 0,
        spirit: 0,
        crit: 0,
        hit: 0,
        attackPower: 0,
      })
    ).toEqual(458);
  });
});

describe('Crit chance', () => {
  // As Cruelty is hard coded in util, add +5 to all expects.
  it('should be 1% with 20 agility', () => {
    expect(getCritChance(20, 0)).toEqual(6);
  });

  it('should be 3% with 20 bonus agi and 1 % bonus crit', () => {
    expect(getCritChance(20, 20, 1)).toEqual(8);
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

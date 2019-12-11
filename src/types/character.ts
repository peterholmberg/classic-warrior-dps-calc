export enum Race {
  Human = 'human',
  Dwarf = 'dwarf',
  Gnome = 'gnome',
  NightElf = 'nightelf',
  Orc = 'orc',
  Troll = 'troll',
  Tauren = 'tauren',
  Undead = 'undead',
}

export enum Class {
  Mage = 'mage',
  Hunter = 'hunter',
  Paladin = 'paladin',
  Priest = 'priest',
  Shaman = 'shaman',
  Warlock = 'warlock',
  Warrior = 'warrior',
  Rogue = 'rogue',
}

export interface Character {
  race: Race;
  class: Class;
}

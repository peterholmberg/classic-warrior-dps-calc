import { Race } from '../types/character';

export const getRaces = () => {
  return Object.keys(Race).map(k => {
    return {
      label: k,
      value: k.toLowerCase(),
    };
  });
};

import React, { FC, SyntheticEvent } from 'react';
import { Item, Weapon } from '../types/items';

interface Props {
  options: Item[] | Weapon[];
  value?: string | number;
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const ItemSelect: FC<Props> = ({ onChange, options, value }: Props) => {
  return (
    <select onChange={onChange} value={value}>
      <option value={undefined} />
      {options.map((option: Item | Weapon, index: number) => {
        return (
          <option key={`${option.wowHeadId}-${index}`} value={option.wowHeadId}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

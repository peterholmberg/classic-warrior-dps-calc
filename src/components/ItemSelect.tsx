import React, { FC, SyntheticEvent } from 'react';
import { Item } from '../types/items';

interface Props {
  options: Item[];
  value?: string | number;
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const ItemSelect: FC<Props> = ({ onChange, options, value }: Props) => {
  return (
    <select onChange={onChange} value={value}>
      <option value={undefined} />
      {options.map((option: Item, index: number) => {
        return (
          <option key={`${option.wowHeadId}-${index}`} value={option.wowHeadId}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

import React, { FC } from 'react';
import { Item } from '../types/types';

interface Props {
  options: Item[];
  value: Item;
  onChange: () => void;
}

export const Select: FC<Props> = ({ onChange, options, value }) => {
  return (
    <select>
      {options.map((option: Item, index: number) => {
        return (
          <option key={index} onChange={onChange} value={value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

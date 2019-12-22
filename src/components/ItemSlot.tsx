import React, { FC, SyntheticEvent } from 'react';
import {Item, Weapon} from '../types/items';
import { Select } from './Select';

interface Props {
  slotName: string;
  options: Item[] | Weapon[];
  value?: number;
  onChangeHandler: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const ItemSlot: FC<Props> = ({
  onChangeHandler,
  options,
  slotName,
  value,
}) => {
  return (
    <>
      <div>{slotName}</div>
      <Select options={options} onChange={onChangeHandler} value={value} />
    </>
  );
};

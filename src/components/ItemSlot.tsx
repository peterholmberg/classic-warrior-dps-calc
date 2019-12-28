import React, { FC, SyntheticEvent } from 'react';
import {Item, Weapon} from '../types/items';
import { ItemSelect } from './ItemSelect';

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
      <ItemSelect options={options} onChange={onChangeHandler} value={value} />
    </>
  );
};

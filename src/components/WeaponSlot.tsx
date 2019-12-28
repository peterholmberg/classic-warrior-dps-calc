import React, { FC, SyntheticEvent } from 'react';
import { WeaponGroup } from '../types/items';
import { WeaponSelect } from './WeaponSelect';

interface Props {
  slotName: string;
  options: WeaponGroup[];
  value?: number;
  onChangeHandler: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const WeaponSlot: FC<Props> = ({
  onChangeHandler,
  options,
  slotName,
  value,
}) => {
  return (
    <>
      <div>{slotName}</div>
      <WeaponSelect
        options={options}
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
};

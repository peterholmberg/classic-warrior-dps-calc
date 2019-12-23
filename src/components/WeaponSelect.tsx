import React, { FC, SyntheticEvent } from 'react';
import { Weapon, WeaponGroup } from '../types/items';

interface Props {
  options: WeaponGroup[];
  value?: number;
  onChange: (evernt: SyntheticEvent<HTMLSelectElement>) => void;
}

export const WeaponSelect: FC<Props> = ({ options, onChange, value }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value={undefined} />
      {options.map(optionGroup => {
        return (
          <optgroup label={optionGroup.type}>
            {optionGroup.items.map((item: Weapon, index: number) => {
              return (
                <option
                  key={`${item.wowHeadId}-${index}`}
                  value={item.wowHeadId}
                >
                  {item.name}
                </option>
              );
            })}
          </optgroup>
        );
      })}
    </select>
  );
};

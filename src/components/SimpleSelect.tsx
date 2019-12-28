import React, { FC, SyntheticEvent } from 'react';

interface Props {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChangeHandler: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const SimpleSelect: FC<Props> = ({
  onChangeHandler,
  options,
  value,
}) => {
  return (
    <select value={value} onChange={onChangeHandler}>
      {options.map(
        (option: { value: string | number; label: string }, index: number) => {
          return (
            <option key={`${option.value}-${index}`} value={option.value}>
              {option.label}
            </option>
          );
        }
      )}
    </select>
  );
};

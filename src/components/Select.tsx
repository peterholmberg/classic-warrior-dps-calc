import React, { FC, SyntheticEvent } from 'react';

interface Props {
  options: { label: string; value: string | number }[];
  value: string | number;
  onChange: (event: SyntheticEvent<HTMLSelectElement>) => void;
}

export const Select: FC<Props> = ({ onChange, options, value }: Props) => {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option, index: number) => {
        return (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

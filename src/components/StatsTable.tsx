import React, { FC } from 'react';
import { css } from 'emotion';
import { Attributes } from '../types/character';

const getStatsStyle = () => {
  return {
    container: css`
      min-width: 20%;
      margin: 0 8px;
    `,
    valueCell: css`
      text-align: right;
    `,
  };
};

interface Props {
  stats: Attributes;
}

export const StatsTable: FC<Props> = ({ stats }) => {
  const style = getStatsStyle();
  return (
    <div className={style.container}>
      <table>
        <tbody>
          <tr>
            <td>Strength</td>
            <td className={style.valueCell}>{stats.strength}</td>
          </tr>
          <tr>
            <td>Agility</td>
            <td className={style.valueCell}>{stats.agility}</td>
          </tr>
          <tr>
            <td>Stamina</td>
            <td className={style.valueCell}>{stats.stamina}</td>
          </tr>
          <tr>
            <td>Intellect</td>
            <td className={style.valueCell}>{stats.intellect}</td>
          </tr>
          <tr>
            <td>Spirit</td>
            <td className={style.valueCell}>{stats.spirit}</td>
          </tr>
          <tr>
            <td>Damage</td>
            <td
              className={style.valueCell}
            >{`${stats.mainHandDamage[0]} - ${stats.mainHandDamage[1]}`}</td>
          </tr>
          <tr>
            <td>Attack power</td>
            <td className={style.valueCell}>{stats.attackPower}</td>
          </tr>
          <tr>
            <td>Crit %</td>
            <td className={style.valueCell}>{stats.crit}</td>
          </tr>
          <tr>
            <td>Hit %</td>
            <td className={style.valueCell}>{stats.hit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

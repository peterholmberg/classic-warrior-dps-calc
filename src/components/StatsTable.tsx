import React from 'react';
import { css } from 'emotion';

const getStatsStyle = () => {
  return {
    container: css`
      min-width: 20%;
    `,
  };
};

export const StatsTable = () => {
  const style = getStatsStyle();
  return (
    <div className={style.container}>
      <table>
        <tbody>
          <tr>
            <td>Strength</td>
            <td></td>
          </tr>
          <tr>
            <td>Agility</td>
            <td></td>
          </tr>
          <tr>
            <td>Stamina</td>
            <td></td>
          </tr>
          <tr>
            <td>Intellect</td>
            <td></td>
          </tr>
          <tr>
            <td>Spirit</td>
            <td></td>
          </tr>
          <tr>
            <td>Damage</td>
            <td></td>
          </tr>
          <tr>
            <td>Attack power</td>
            <td></td>
          </tr>
          <tr>
            <td>Crit %</td>
            <td></td>
          </tr>
          <tr>
            <td>Hit %</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

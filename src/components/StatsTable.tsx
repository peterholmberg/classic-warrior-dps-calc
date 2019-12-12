import React, { PureComponent } from 'react';

interface Props {}

export class StatsTable extends PureComponent<Props> {
  render() {
    return (
      <>
        <h2>Your gear</h2>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Name</th>
              <th>Enchant</th>
              <th>Weapon type</th>
              <th>crit</th>
              <th>hit</th>
              <th>Str</th>
              <th>Stam</th>
              <th>Agi</th>
              <th>Ap</th>
              <th>dodge</th>
              <th>parry</th>
              <th>Def</th>
              <th>AC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Head</td>
            </tr>
            <tr>
              <td>Neck</td>
            </tr>
            <tr>
              <td>Shoulders</td>
            </tr>
            <tr>
              <td>Back</td>
            </tr>
            <tr>
              <td>Chest</td>
            </tr>
            <tr>
              <td>Wrist</td>
            </tr>
            <tr>
              <td>Hands</td>
            </tr>
            <tr>
              <td>Waist</td>
            </tr>
            <tr>
              <td>Legs</td>
            </tr>
            <tr>
              <td>Feet</td>
            </tr>
            <tr>
              <td>Ring 1</td>
            </tr>
            <tr>
              <td>Ring 2</td>
            </tr>
            <tr>
              <td>Trinket 1</td>
            </tr>
            <tr>
              <td>Trinket 2</td>
            </tr>
            <tr>
              <td>Main Hand</td>
            </tr>
            <tr>
              <td>Off Hand</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

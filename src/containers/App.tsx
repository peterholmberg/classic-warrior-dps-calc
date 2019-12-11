import React, { PureComponent } from 'react';
import '../styles/app.scss';
import { Select } from '../components/Select';

export default class HomeContainer extends PureComponent {
  render() {
    return (
      <div className="page-content">
        <h1>The BiS calculator</h1>
        <div className="content-section">
          <h2>Race</h2>
          <div className="race">
            <Select options={} value={} onChange={} />
            <select>
              <option value="human">Human</option>
              <option value="dwarf">Dwarf</option>
              <option value="gnome">Gnome</option>
              <option value="nightelf">Night Elf</option>
              <option value="orc">Orc</option>
              <option value="troll">Troll</option>
              <option value="tauren">Tauren</option>
              <option value="undead">Undead</option>
            </select>
            <div className="race-perks">
              <h3>Race perks</h3>
            </div>
          </div>
        </div>
        <div className="content-section">
          <h2>Phase</h2>
          <div>
            <select>
              <option value="1">Phase 1</option>
              <option value="2">Phase 2</option>
              <option value="2.5">Phase 2.5</option>
              <option value="3">Phase 3</option>
            </select>
          </div>
        </div>
        <div className="content-section">
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
        </div>
        <div className="content-section">
          <h2>Results</h2>
        </div>
      </div>
    );
  }
}

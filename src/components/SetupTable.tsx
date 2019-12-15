import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Select } from './Select';
import { StoreState } from '../types/store';
import { Item, ItemsState } from '../types/items';

interface Props extends ItemsState {
  head?: Item;
}

export class SetupTable extends PureComponent<Props> {
  handleItemChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };

  render() {
    const { heads, head } = this.props;
    console.log('heads', heads);
    console.log('head', head);

    console.log(this.props);

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
              <th>Crit</th>
              <th>Hit</th>
              <th>Strength</th>
              <th>Stamina</th>
              <th>Agility</th>
              <th>Attack Power</th>
              <th>Dodge</th>
              <th>Parry</th>
              <th>Defense</th>
              <th>Armor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Head</td>
              <td>
                <Select
                  options={heads}
                  value={head && head.name}
                  onChange={this.handleItemChange}
                />
              </td>
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

const mapStateToProps = (state: StoreState) => {
  console.log('map state to props');
  return {
    ...state.character,
    ...state.items,
  };
};

export default connect(mapStateToProps)(SetupTable);

import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../types/store';
import { ItemsState } from '../types/items';
import { ItemSlot } from './ItemSlot';
import {
  getMainHandWeapons,
  getOffHandWeapons,
  getRangedWeapons,
} from '../state/selectors';
import { CharacterState } from '../types/character';

interface Props extends ItemsState {
  character: CharacterState;
  mainHandWeapons: any;
  offHandWeapons: any;
  rangedWeapons: any;
}

export class SetupTable extends PureComponent<Props> {
  handleHeadChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };

  handleNeckChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };

  handleShoulderChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };

  handleBackChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleChestChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleWristChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleHandsChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleWaistChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleLegsChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleFeetChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleRing1Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleRing2Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleTrinket1Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleTrinket2Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleMainHandChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleOffHandChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };
  handleRangedChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    console.log('changed to', event.currentTarget.value);
  };

  render() {
    const {
      headItems,
      neckItems,
      backItems,
      shoulderItems,
      chestItems,
      wristItems,
      handItems,
      waistItems,
      legItems,
      feetItems,
      ringItems,
      trinketItems,
      character,
      mainHandWeapons,
      offHandWeapons,
      rangedWeapons,
    } = this.props;

    return (
      <div>
        <h2>Item setup</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ flexDirection: 'column' }}>
            <div className="head">
              <ItemSlot
                slotName="Head"
                options={headItems}
                value={character.head.wowHeadId}
                onChangeHandler={this.handleHeadChange}
              />
            </div>
            <div className="neck">
              <ItemSlot
                slotName="Neck"
                options={neckItems}
                value={character.neck.wowHeadId}
                onChangeHandler={this.handleNeckChange}
              />
            </div>
            <div className="back">
              <ItemSlot
                slotName="Back"
                options={backItems}
                value={character.back.wowHeadId}
                onChangeHandler={this.handleBackChange}
              />
            </div>
            <div className="shoulder">
              <ItemSlot
                slotName="Shoulder"
                options={shoulderItems}
                value={character.shoulders.wowHeadId}
                onChangeHandler={this.handleShoulderChange}
              />
            </div>
            <div className="chest">
              <ItemSlot
                slotName="Chest"
                options={chestItems}
                value={character.chest.wowHeadId}
                onChangeHandler={this.handleChestChange}
              />
            </div>
          </div>
          <div className="stats">
            Stats
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
          <div style={{ flexDirection: 'column' }}>
            <div className="wrist">
              <ItemSlot
                slotName="Wrists"
                options={wristItems}
                value={character.wrists.wowHeadId}
                onChangeHandler={this.handleWristChange}
              />
            </div>
            <div className="hands">
              <ItemSlot
                slotName="Hands"
                options={handItems}
                onChangeHandler={this.handleHandsChange}
                value={character.hands.wowHeadId}
              />
            </div>
            <div className="waist">
              <ItemSlot
                slotName="Waist"
                options={waistItems}
                onChangeHandler={this.handleWaistChange}
                value={character.waist.wowHeadId}
              />
            </div>
            <div className="legs">
              <ItemSlot
                slotName="Legs"
                options={legItems}
                onChangeHandler={this.handleLegsChange}
                value={character.legs.wowHeadId}
              />
            </div>
            <div className="feet">
              <ItemSlot
                slotName="Feet"
                options={feetItems}
                onChangeHandler={this.handleFeetChange}
                value={character.feet.wowHeadId}
              />{' '}
            </div>
          </div>
        </div>
        <div
          className="misc"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="trinket1">
            <ItemSlot
              slotName="Trinket 1"
              options={trinketItems}
              onChangeHandler={this.handleTrinket1Change}
              value={character.trinket1.wowHeadId}
            />
          </div>
          <div className="trinket2">
            <ItemSlot
              slotName="Trinket 2"
              options={trinketItems}
              onChangeHandler={this.handleTrinket2Change}
              value={character.trinket2.wowHeadId}
            />
          </div>
          <div className="ring1">
            <ItemSlot
              slotName="Ring 1"
              options={ringItems}
              onChangeHandler={this.handleRing1Change}
              value={character.ring1.wowHeadId}
            />
          </div>
          <div className="ring2">
            <ItemSlot
              slotName="Ring 2"
              options={ringItems}
              onChangeHandler={this.handleRing2Change}
              value={character.ring2.wowHeadId}
            />
          </div>
        </div>
        <div
          className="weapons"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="mainhand">
            <ItemSlot
              slotName="Main hand"
              options={mainHandWeapons}
              onChangeHandler={this.handleMainHandChange}
              value={character.mainHand.wowHeadId}
            />
          </div>
          <div className="offhand">
            <ItemSlot
              slotName="Off hand"
              options={offHandWeapons}
              onChangeHandler={this.handleOffHandChange}
              value={character.offHand.wowHeadId}
            />
          </div>
          <div className="ranged">
            <ItemSlot
              slotName="Ranged"
              options={rangedWeapons}
              onChangeHandler={this.handleRangedChange}
              value={character.ranged.wowHeadId}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  console.log('map state to props');
  return {
    character: state.character,
    ...state.items,
    mainHandWeapons: getMainHandWeapons(state.items),
    offHandWeapons: getOffHandWeapons(state.items),
    rangedWeapons: getRangedWeapons(state.items),
  };
};

export default connect(mapStateToProps)(SetupTable);

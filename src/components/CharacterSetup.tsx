import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../types/store';
import { ItemsState } from '../types/items';
import { ItemSlot } from './ItemSlot';
import { CharacterState } from '../types/character';
import WeaponTier from './WeaponTier';
import { StatsTable } from './StatsTable';
import MiscTier from './MiscTier';

interface Props extends ItemsState {
  character: CharacterState;
}

export class CharacterSetup extends PureComponent<Props> {
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
      character,
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
          <StatsTable />
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
        <MiscTier />
        <WeaponTier />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    character: state.character,
    ...state.items,
  };
};

export default connect(mapStateToProps)(CharacterSetup);

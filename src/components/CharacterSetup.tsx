import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import WeaponTier from './WeaponTier';
import MiscTier from './MiscTier';
import { ItemSlot } from './ItemSlot';
import { StatsTable } from './StatsTable';
import { setItemAction } from '../state/characterReducer';
import { CharacterState } from '../types/character';
import { Item, ItemsState } from '../types/items';
import { StoreState } from '../types/store';

interface Props extends ItemsState {
  character: CharacterState;

  setItemAction: typeof setItemAction;
}

export class CharacterSetup extends PureComponent<Props> {
  handleHeadChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { headItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      headItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };

  handleNeckChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { neckItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      neckItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };

  handleShoulderChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { shoulderItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      shoulderItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };

  handleBackChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { backItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      backItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleChestChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { chestItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      chestItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleWristChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { wristItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      wristItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleHandsChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { handItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      handItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleWaistChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { waistItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      waistItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleLegsChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { legItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      legItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
  };
  handleFeetChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { feetItems, setItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    setItemAction(
      feetItems.find(o => o.wowHeadId === changedItemId) || ({} as Item)
    );
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
          <StatsTable stats={character.stats} />
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

const mapDispatchToProps = {
  setItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSetup);

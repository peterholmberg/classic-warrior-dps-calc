import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { WeaponSlot } from './WeaponSlot';
import { WeaponGroup } from '../types/items';
import { StoreState } from '../types/store';
import {
  getMainHandWeapons,
  getOffHandWeapons,
  getRangedWeapons,
} from '../state/selectors';
import { CharacterState } from '../types/character';

interface Props {
  mainHandWeapons: WeaponGroup[];
  offHandWeapons: WeaponGroup[];
  rangedWeapons: WeaponGroup[];
  character: CharacterState;
}

class WeaponTier extends PureComponent<Props> {
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
      character,
      mainHandWeapons,
      offHandWeapons,
      rangedWeapons,
    } = this.props;
    return (
      <div
        className="weapons"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="mainhand">
          <WeaponSlot
            slotName="Main hand"
            options={mainHandWeapons}
            onChangeHandler={this.handleMainHandChange}
            value={character.mainHand.wowHeadId}
          />
        </div>
        <div className="offhand">
          <WeaponSlot
            slotName="Off hand"
            options={offHandWeapons}
            onChangeHandler={this.handleOffHandChange}
            value={character.offHand.wowHeadId}
          />
        </div>
        <div className="ranged">
          <WeaponSlot
            slotName="Ranged"
            options={rangedWeapons}
            onChangeHandler={this.handleRangedChange}
            value={character.ranged.wowHeadId}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    mainHandWeapons: getMainHandWeapons(state.items),
    offHandWeapons: getOffHandWeapons(state.items),
    rangedWeapons: getRangedWeapons(state.items),
    character: state.character,
  };
};

export default connect(mapStateToProps)(WeaponTier);

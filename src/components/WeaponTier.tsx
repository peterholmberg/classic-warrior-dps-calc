import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { WeaponSlot } from './WeaponSlot';
import { WeaponGroup } from '../types/items';
import { StoreState } from '../types/store';
import {
  setMainHandWeaponAction,
  setOffHandWeaponAction,
  setRangedWeaponAction,
} from '../state/characterReducer';
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

  setMainHandWeaponAction: typeof setMainHandWeaponAction;
  setOffHandWeaponAction: typeof setOffHandWeaponAction;
  setRangedWeaponAction: typeof setRangedWeaponAction;
}

class WeaponTier extends PureComponent<Props> {
  handleMainHandChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { mainHandWeapons, setMainHandWeaponAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    mainHandWeapons.forEach(group =>
      group.items.forEach(o => {
        if (o.wowHeadId === changedItemId) {
          setMainHandWeaponAction(o);
        }
      })
    );
  };

  handleOffHandChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { offHandWeapons, setOffHandWeaponAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    offHandWeapons.forEach(group =>
      group.items.forEach(o => {
        if (o.wowHeadId === changedItemId) {
          setOffHandWeaponAction(o);
        }
      })
    );
  };

  handleRangedChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { rangedWeapons, setRangedWeaponAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);

    rangedWeapons.forEach(group =>
      group.items.forEach(o => {
        if (o.wowHeadId === changedItemId) {
          setRangedWeaponAction(o);
        }
      })
    );
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

const mapDispatchToProps = {
  setMainHandWeaponAction,
  setOffHandWeaponAction,
  setRangedWeaponAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeaponTier);

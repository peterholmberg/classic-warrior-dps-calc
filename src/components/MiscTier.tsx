import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Item } from '../types/items';
import { ItemSlot } from './ItemSlot';
import { StoreState } from '../types/store';
import { getRings, getTrinkets } from '../state/selectors';
import { CharacterState } from '../types/character';

interface Props {
  rings: Item[];
  trinkets: Item[];
  character: CharacterState;
}

class MiscTier extends PureComponent<Props> {
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

  render() {
    const { character, trinkets, rings } = this.props;

    return (
      <div
        className="misc"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="trinket1">
          <ItemSlot
            slotName="Trinket 1"
            options={trinkets}
            onChangeHandler={this.handleTrinket1Change}
            value={character.trinket1.wowHeadId}
          />
        </div>
        <div className="trinket2">
          <ItemSlot
            slotName="Trinket 2"
            options={trinkets}
            onChangeHandler={this.handleTrinket2Change}
            value={character.trinket2.wowHeadId}
          />
        </div>
        <div className="ring1">
          <ItemSlot
            slotName="Ring 1"
            options={rings}
            onChangeHandler={this.handleRing1Change}
            value={character.ring1.wowHeadId}
          />
        </div>
        <div className="ring2">
          <ItemSlot
            slotName="Ring 2"
            options={rings}
            onChangeHandler={this.handleRing2Change}
            value={character.ring2.wowHeadId}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    rings: getRings(state),
    trinkets: getTrinkets(state),
    character: state.character,
  };
};

export default connect(mapStateToProps)(MiscTier);

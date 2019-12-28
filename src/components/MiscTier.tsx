import React, { PureComponent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Item } from '../types/items';
import { ItemSlot } from './ItemSlot';
import { StoreState } from '../types/store';
import { setMiscItemAction } from '../state/characterReducer';
import { getRings, getTrinkets } from '../state/selectors';
import { CharacterState } from '../types/character';

interface Props {
  rings: Item[];
  trinkets: Item[];
  character: CharacterState;

  setMiscItemAction: typeof setMiscItemAction;
}

class MiscTier extends PureComponent<Props> {
  handleRing1Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { rings, setMiscItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);
    const changedItem = rings.find(r => r.wowHeadId === changedItemId);

    setMiscItemAction({ slot: 'ring1', item: changedItem || ({} as Item) });
  };
  handleRing2Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { rings, setMiscItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);
    const changedItem = rings.find(r => r.wowHeadId === changedItemId);

    setMiscItemAction({ slot: 'ring2', item: changedItem || ({} as Item) });
  };
  handleTrinket1Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { trinkets, setMiscItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);
    const changedItem = trinkets.find(t => t.wowHeadId === changedItemId);

    setMiscItemAction({ slot: 'trinket1', item: changedItem || ({} as Item) });
  };
  handleTrinket2Change = (event: SyntheticEvent<HTMLSelectElement>) => {
    const { trinkets, setMiscItemAction } = this.props;
    const changedItemId = parseInt(event.currentTarget.value);
    const changedItem = trinkets.find(t => t.wowHeadId === changedItemId);

    setMiscItemAction({ slot: 'trinket2', item: changedItem || ({} as Item) });
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

const mapDispatchToProps = { setMiscItemAction };

export default connect(mapStateToProps, mapDispatchToProps)(MiscTier);

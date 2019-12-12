import React, { PureComponent, SyntheticEvent } from 'react';
import '../styles/app.scss';
import { Select } from '../components/Select';
import { getRaces } from '../data/race';
import { getPerks } from '../data/racePerks';
import { Phase } from '../types/game';

interface State {
  race: string;
  klass: string;
  phase: Phase;
}

const phases = [
  { label: '1 (Launch)', value: 1 },
  { label: '1.5 (Dire Maul)', value: 1.5 },
  { label: '2 (Honor system)', value: 2 },
  { label: '2.5 (AV & WSG)', value: 2.5 },
  { label: '3 (BWL)', value: 3 },
  { label: '4 (ZG & Emerald Dragons)', value: 4 },
  { label: '5 (AQ)', value: 5 },
  { label: '6 (Naxxramas)', value: 6 },
];

export default class AppContainer extends PureComponent<null, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      race: 'human',
      klass: 'warrior',
      phase: 2.5,
    };
  }

  handleChangeRace = (event: SyntheticEvent<HTMLSelectElement>) => {
    this.setState({
      race: event.currentTarget.value,
    });
  };

  handlePhaseChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    this.setState({
      phase: parseFloat(event.currentTarget.value) as Phase,
    });
  };

  render() {
    const { phase, race } = this.state;
    const perks = getPerks(race);

    return (
      <div className="page-content">
        <h1>The BiS calculator</h1>
        <div className="content-section">
          <h2>Race</h2>
          <div className="race">
            <Select
              options={getRaces()}
              value={race}
              onChange={this.handleChangeRace}
            />
            <div className="race-perks">
              <h3>Race perks</h3>
              <table>
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Skill</th>
                  </tr>
                </thead>
                <tbody>
                  {perks &&
                    Object.values(perks.perks).map(v => {
                      return (
                        <tr key={v.skill}>
                          <td>{v.value}</td>
                          <td>{v.skill}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="content-section">
          <h2>Phase</h2>
          <Select
            options={phases}
            value={phase}
            onChange={this.handlePhaseChange}
          />
        </div>
        <div className="content-section"></div>
        <div className="content-section">
          <h2>Results</h2>
        </div>
      </div>
    );
  }
}

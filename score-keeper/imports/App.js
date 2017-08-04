import React, { Component } from 'react';

import NewPlayerForm from './components/NewPlayerForm';
import PlayersList from './components/PlayersList';
import TitleBar from './components/TitleBar';

export default class App extends Component {
  render() {
    return(
      <div>
        <TitleBar title="Score Keep App" subtitle="Created by Filip"/>
        <div className="wrapper">
          <NewPlayerForm />
          <PlayersList players={this.props.players} />
        </div>
      </div>
    );
  }
}
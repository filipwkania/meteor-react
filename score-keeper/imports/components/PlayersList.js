import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import  FlipMove from 'react-flip-move';

import PlayerRow from './PlayerRow';

export default class PlayersList extends Component {
  render() {
    return (
      this.props.players.length > 0 
      ? 
        <div>
          <h3>Current players:</h3>
          <ul>
            <FlipMove>
              {this.props.players.map((player) => <PlayerRow key={player._id} {...player} />)}
            </FlipMove>
          </ul>
        </div>
      :
        <div className="item">
          <h4 className="item__message">Add player to get started</h4>
        </div>
    );
  }
}
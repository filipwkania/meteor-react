import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Players from './../api/players';

export default class PlayerRow extends Component {
  constructor(props) {
    super(props);

    this.changeScore = this.changeScore.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  static propType = {
    name:PropTypes.string.isRequired,
    score:PropTypes.number.isRequired,
    _id:PropTypes.string.isRequired
  }

  render() {
    const {
      name,
      score,
      position,
      rank,
      _id:id
    } = this.props;
    let itemClass = rank < 4 ? `item item--position-${rank}` : `item`;
    
    return(
      <div className={itemClass}>  
        <div className="player">
          <div>
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">{position} place with {score} point(s).</p>          
          </div>
          <div className="player__actions">
            <button id={id} value="add" onClick={this.changeScore} className="button button--round"> +1 </button>
            <button id={id} value="remove" onClick={this.changeScore} className="button button--round"> -1 </button>
            <button value={id} onClick={this.removePlayer} className="button button--round"> X </button>
          </div>
        </div>
      </div>
    );
  }

  removePlayer(e) {
    Players.deletePlayer(e.target.value);
  }

  changeScore(e) {
    if(e.target.value === "add") {
      Players.updateScore(e.target.id, true);
    } else if (e.target.value === "remove") {
      Players.updateScore(e.target.id, false);
    }
  }
}
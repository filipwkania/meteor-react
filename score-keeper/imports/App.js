import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import * as Players from './../imports/api/players';

import PlayerRow from './components/PlayerRow';
import NewPlayerForm from './components/NewPlayerForm';
import TitleBar from './components/TitleBar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { players:[] };
  }

  render() {
    let title = "Score Keep App";
    let removePlayer = this.removePlayer;
    let changeScore = this.changeScore;
    return(
      <div>
        <TitleBar title={title} />
        <NewPlayerForm onSubmit = {this.addPlayer} />
        <h3>Current players:</h3>
        <ul>
          {this.state.players.map((player) => PlayerRow({...player, removePlayer, changeScore}))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    Tracker.autorun(() => {
      this.setState({players: Players.getPlayers()});
    });
    // this.timer = setInterval(() => {
    //   this.setState((prevState, props) => {
    //     let number = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
    //     return { players: prevState.players.concat([{ _id:number, name:`Name${number}`, score:number }])};
    //   });
    // }, 4000);
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  addPlayer(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let score = e.target.score.value;

    if(name) {
      Players.createPlayer(name, (+score));
    }
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
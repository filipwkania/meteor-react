import React, {Component} from 'react';
import { createPlayer } from './../api/players';

export default class NewPlayerForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>  
          <input className="form__input" type="text" name="name" placeholder="player's name" defaultValue=''/>
          <button type="submit" className="button">Add player</button>
        </form>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;

    if(name) {
      createPlayer(name, 0);
    }
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { getPlayers, calculatePlayerPositions } from './../imports/api/players';

import App from '../imports/App';

Meteor.startup( () => {
  Tracker.autorun( () => {
    let players = getPlayers();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render( 
      <App players={positionedPlayers}/>
      , document.getElementById('app'));
  })
});

